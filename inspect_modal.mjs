import http from 'http';
import WebSocket from 'ws';

const PORT = 9333;
const GAME_URL = 'http://localhost:8080/index.html';

function httpReq(path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: '127.0.0.1', port: PORT, path, method }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.end();
  });
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 0; const pending = new Map();
    ws.on('open', () => resolve({
      send(method, params = {}) {
        return new Promise((res2, rej2) => {
          const mid = ++id; pending.set(mid, { res2, rej2 });
          ws.send(JSON.stringify({ id: mid, method, params }));
        });
      },
      close() { try { ws.close(); } catch {} }
    }));
    ws.on('message', (ev) => {
      const msg = JSON.parse(ev);
      if (msg.id && pending.has(msg.id)) {
        const p = pending.get(msg.id); pending.delete(msg.id);
        msg.error ? p.rej2(new Error(JSON.stringify(msg.error))) : p.res2(msg.result);
      }
    });
    ws.on('error', reject);
  });
}

async function evalJS(cdp, expr) {
  const r = await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || 'eval failed');
  return r.result.value;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const target = JSON.parse(await httpReq(`/json/new?${encodeURIComponent(GAME_URL)}`, 'PUT'));
  const cdp = await connect(target.webSocketDebuggerUrl);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await sleep(2000);

  // Submit name
  await evalJS(cdp, `
    document.getElementById('player-name-input').value = 'آرمین';
    document.getElementById('submit-name-btn').click();
  `);
  await sleep(700);

  const debug = await evalJS(cdp, `
    (async () => {
      const log = [];
      const em = document.getElementById('element-modal');
      const origAdd = em.classList.add.bind(em.classList);
      const origRemove = em.classList.remove.bind(em.classList);

      em.classList.add = function(...tokens) {
        if (tokens.includes('hidden')) {
          log.push({ action: 'classList.add(hidden)', stack: new Error().stack });
        }
        return origAdd(...tokens);
      };
      em.classList.remove = function(...tokens) {
        if (tokens.includes('hidden')) {
          log.push({ action: 'classList.remove(hidden)', stack: new Error().stack });
        }
        return origRemove(...tokens);
      };

      const cell = document.querySelector('.element[data-atomic-num="1"]');
      cell.click();
      await new Promise(r => setTimeout(r, 100));

      log.push({ finalClassList: Array.from(em.classList) });
      return { log };
    })()
  `);
  console.log('ClassList intercepted calls:', JSON.stringify(debug, null, 2));

  cdp.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
