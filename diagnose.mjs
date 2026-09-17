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
  await sleep(3000);

  console.log('--- Checking initial state ---');
  const zIndexes = await evalJS(cdp, `
    ['welcome-modal', 'element-modal', 'leaderboard-modal', 'story-map-modal', 'level-intro-modal', 'game-over-modal'].reduce((acc, id) => {
      const el = document.getElementById(id);
      acc[id] = el ? getComputedStyle(el).zIndex : 'NOT FOUND';
      return acc;
    }, {})
  `);
  console.log('Modal computed z-indexes:', zIndexes);

  // Submit name
  await evalJS(cdp, `
    document.getElementById('player-name-input').value = 'آرمین';
    document.getElementById('submit-name-btn').click();
  `);
  await sleep(700);

  // Check if welcome modal is gone
  const welcomeHidden = await evalJS(cdp, `document.getElementById('welcome-modal').classList.contains('hidden')`);
  console.log('Welcome modal hidden after submit:', welcomeHidden);

  // Test 1: Click an element on the main periodic table (Explore Mode)
  console.log('--- Test 1: Click H (atomic 1) on table in explore mode ---');
  const exploreClick = await evalJS(cdp, `
    (() => {
      const cell = document.querySelector('.element[data-atomic-num="1"]');
      if (!cell) return { error: 'cell 1 not found' };
      cell.click();
      const em = document.getElementById('element-modal');
      const isVisible = !em.classList.contains('hidden') && getComputedStyle(em).display !== 'none';
      const r = em.getBoundingClientRect();
      const topEl = document.elementFromPoint(r.left + r.width/2, r.top + r.height/2);
      return {
        clicked: true,
        modalVisible: isVisible,
        modalZ: getComputedStyle(em).zIndex,
        infoName: document.getElementById('info-name').textContent,
        topElementAtModalCenter: topEl ? (topEl.id || topEl.className) : null
      };
    })()
  `);
  console.log('Explore click result:', exploreClick);

  // Close element modal
  await evalJS(cdp, `document.getElementById('element-modal').classList.add('hidden')`);

  // Test 2: Story Mode level intro chip click
  console.log('--- Test 2: Story mode level intro chip click ---');
  await evalJS(cdp, `startStoryLevel('r1', 'l1')`);
  await sleep(500);

  const storyIntroCheck = await evalJS(cdp, `
    (() => {
      const lim = document.getElementById('level-intro-modal');
      const chips = Array.from(document.querySelectorAll('.teach-element-chip'));
      return {
        introVisible: !lim.classList.contains('hidden'),
        introZ: getComputedStyle(lim).zIndex,
        chipsCount: chips.length,
        chipHTML: chips[0] ? chips[0].outerHTML : null
      };
    })()
  `);
  console.log('Story intro state:', storyIntroCheck);

  // Simulate clicking the chip
  console.log('--- Test 3: Click the chip in story intro ---');
  const chipClick = await evalJS(cdp, `
    (() => {
      const chip = document.querySelector('.teach-element-chip');
      if (!chip) return { error: 'no chip' };
      chip.click();
      const em = document.getElementById('element-modal');
      const lim = document.getElementById('level-intro-modal');
      return {
        elementModalVisible: !em.classList.contains('hidden'),
        elementModalZ: getComputedStyle(em).zIndex,
        introZ: getComputedStyle(lim).zIndex,
        infoName: document.getElementById('info-name').textContent
      };
    })()
  `);
  console.log('Chip click result:', chipClick);

  cdp.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
