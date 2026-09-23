var BlobatarLib = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // package/dist/index.js
  var index_exports = {};
  __export(index_exports, {
    FLOORS: () => W,
    VERSION: () => Me,
    _layout: () => Xt,
    blobatar: () => Ct,
    contrast: () => O,
    normalizeSeed: () => st,
    palette: () => v,
    ramp: () => tt,
    traits: () => F
  });
  function I({ l: t, c: e, h: n }) {
    let a = n * Math.PI / 180, o = e * Math.cos(a), r = e * Math.sin(a), s = t + 0.3963377774 * o + 0.2158037573 * r, c = t - 0.1055613458 * o - 0.0638541728 * r, i = t - 0.0894841775 * o - 1.291485548 * r, l = s * s * s, m = c * c * c, u = i * i * i;
    return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * u, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * u, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * u];
  }
  var N = (t) => t.every((e) => e >= -1e-4 && e <= 1.0001);
  function Q(t) {
    let e = I(t);
    if (!N(e)) {
      let n = 0, a = t.c;
      for (let o = 0; o < 12; o++) {
        let r = (n + a) / 2;
        if (N(I({ ...t, c: r }))) n = r;
        else a = r;
      }
      e = I({ ...t, c: n });
    }
    return e.map((n) => Math.min(1, Math.max(0, n)));
  }
  function V(t) {
    let [e, n, a] = Q(t);
    return 0.2126 * e + 0.7152 * n + 0.0722 * a;
  }
  function O(t, e) {
    let n = V(t), a = V(e);
    return (Math.max(n, a) + 0.05) / (Math.min(n, a) + 0.05);
  }
  function E(t, e, n) {
    if (O(t, e) >= n) return t;
    let a = t.l >= e.l ? 1 : -1;
    for (let s of [a, -a]) {
      let c = { ...t };
      for (let i = 0; i < 60; i++) {
        if (c.l = Math.min(1, Math.max(0, c.l + s * 0.02)), O(c, e) >= n) return c;
        if (c.l === 0 || c.l === 1) break;
      }
    }
    let o = { ...t, l: 0, c: 0 }, r = { ...t, l: 1, c: 0 };
    return O(o, e) >= O(r, e) ? o : r;
  }
  function B(t) {
    return "#" + Q(t).map((e) => {
      let n = e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
      return Math.round(n * 255).toString(16).padStart(2, "0");
    }).join("");
  }
  var U = [[0.2, { l: 0.86, c: 0.085 }], [0.36, { l: 0.9, c: 0.028 }], [0.62, { l: 0.73, c: 0.135 }], [0.8, { l: 0.62, c: 0.165 }], [0.93, { l: 0.87, c: 0.16 }], [1, { l: 0.34, c: 0.035 }]];
  var It = (t) => U.find(([e]) => t < e)?.[1] ?? U[0][1];
  var G = { l: 0.145, c: 0, h: 0 };
  var J = 1.5;
  var vt = (t, e) => {
    let n = It(e), a = E({ l: n.l, c: n.c, h: t }, G, J);
    return { bg: { l: 0.965, c: 0.01, h: t }, head: a, eye: a.l >= 0.5 ? { l: 0.17, c: 0.02, h: t } : { l: 0.97, c: 0.012, h: t } };
  };
  var W = [["head", "bg", 1.25], ["eye", "head", 4.5]];
  function tt(t, e = true, n = 0) {
    let a = vt(t, n);
    if (e) for (let [o, r, s] of W) a[o] = E(a[o], a[r], s);
    return a;
  }
  function v(t, e = true, n = 0) {
    let a = tt(t, e, n), o = {};
    for (let r in a) o[r] = B(a[r]);
    return o;
  }
  var y = (t) => {
    let e = Math.round(t * 100) / 100;
    return Object.is(e, -0) ? "0" : String(e);
  };
  function P({ cx: t, cy: e, rx: n, ry: a, n: o = 4, rot: r = 0 }) {
    let s = Math.min(1, (8 * Math.pow(2, -1 / o) - 4) / 3), c = n, i = a, l = c * s, m = i * s, u = [[c, 0], [c, m], [l, i], [0, i], [-l, i], [-c, m], [-c, 0], [-c, -m], [-l, -i], [0, -i], [l, -i], [c, -m], [c, 0]], b = r * Math.PI / 180, p = Math.cos(b), d = Math.sin(b), h = (x) => {
      let [g, k] = u[x];
      return `${y(t + g * p - k * d)} ${y(e + g * d + k * p)}`;
    }, f = `M${h(0)}`;
    for (let x = 1; x < 13; x += 3) f += `C${h(x)} ${h(x + 1)} ${h(x + 2)}`;
    return f + "Z";
  }
  function et(t, e, n, a, o, r = 0) {
    let s = o.length, c = r * Math.PI / 180, i = o.map((u, b) => {
      let p = c + 2 * Math.PI * b / s;
      return [t + n * u * Math.cos(p), e + a * u * Math.sin(p)];
    }), l = (u) => i[(u % s + s) % s], m = `M${y(l(0)[0])} ${y(l(0)[1])}`;
    for (let u = 0; u < s; u++) {
      let [b, p] = l(u - 1), [d, h] = l(u), [f, x] = l(u + 1), [g, k] = l(u + 2);
      m += `C${y(d + (f - b) / 6)} ${y(h + (x - p) / 6)} ${y(f - (g - d) / 6)} ${y(x - (k - h) / 6)} ${y(f)} ${y(x)}`;
    }
    return m + "Z";
  }
  function nt({ cx: t, cy: e, rx: n, ry: a, sides: o, round: r = 0.3, rot: s = 0 }) {
    let c = r > 0 ? r < 1 ? r / 2 : 0.5 : 0, i = s * Math.PI / 180 - Math.PI / 2, l = Array.from({ length: o }, (p, d) => {
      let h = i + 2 * Math.PI * d / o;
      return [t + n * Math.cos(h), e + a * Math.sin(h)];
    }), m = (p) => l[(p % o + o) % o], u = (p, d) => {
      let [h, f] = m(p), [x, g] = m(d);
      return `${y(h + (x - h) * c)} ${y(f + (g - f) * c)}`;
    }, b = `M${u(0, -1)}`;
    for (let p = 0; p < o; p++) {
      let [d, h] = m(p);
      if (b += `Q${y(d)} ${y(h)} ${u(p, p + 1)}`, c < 0.5) b += `L${u(p + 1, p)}`;
    }
    return b + "Z";
  }
  function rt(t, e, n, a) {
    let o = y(t - n), r = y(t + n);
    return `M${o} ${y(e - a)}H${r}V${y(e + a)}H${o}Z`;
  }
  function ot(t, e, n, a, o) {
    let r = Math.max(1.05, o), s = n * Math.sqrt(1 - 1 / (r * r)), c = e - a / r, i = e - r * a, l = s * 0.14, m = c + 0.86 * (i - c);
    return `M${y(t - s)} ${y(c)}L${y(t - l)} ${y(m)}Q${y(t)} ${y(i)} ${y(t + l)} ${y(m)}L${y(t + s)} ${y(c)}Z`;
  }
  function R(t, e) {
    for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e[n], 3432918353), t = t << 13 | t >>> 19;
    return t;
  }
  function Rt(t) {
    return t = Math.imul(t ^ t >>> 16, 2246822507), t = Math.imul(t ^ t >>> 13, 3266489909), (t ^ t >>> 16) >>> 0;
  }
  var at = new TextEncoder();
  function st(t) {
    return t.normalize("NFC").trim().toLowerCase();
  }
  function ct(t, e = true) {
    let n = e ? st(t) : t;
    return R(1779033703 ^ n.length, at.encode(n));
  }
  function A(t, e) {
    return Rt(R(R(t, Uint8Array.of(255)), at.encode(e))) / 4294967296;
  }
  function F(t, e = true, n) {
    let a = ct(t, e), o = (r) => {
      let s = n?.[r], c = Array.isArray(s) ? s[Math.floor(A(a, r) * s.length)] : s;
      return c === void 0 ? A(a, r) : c > 0 ? c < 1 ? c : 0.999999 : 0;
    };
    return o.num = (r, s, c) => s + o(r) * (c - s), o.int = (r, s, c) => s + Math.floor(o(r) * (c - s + 1)), o.pick = (r, s) => s[Math.floor(o(r) * s.length)], o.bool = (r, s = 0.5) => o(r) < s, o.jitter = (r, s) => (o(r) * 2 - 1) * s, o;
  }
  function w(t, e, n) {
    let a = e.expression;
    if (n || !a) return { l: t, wrap: "" };
    return a.bake(t, a.p);
  }
  var j = (t, e) => e?.tint ? e.tint(t, e.p) : t;
  var it = (t, e) => e ? `<g transform="${e}">${t}</g>` : t;
  var At = (t) => t.replace(/[&<>]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : "&gt;");
  function T(t, e) {
    let n = F(t, e.normalize ?? true, e.traits);
    return { t: n, palette: { ...v(e.hue ?? n.num("hue", 0, 360), e.contrast ?? true, e.tone ?? n("tone")), ...e.palette } };
  }
  var Ft = (t) => t.title ? `<title>${At(t.title)}</title>` : "";
  function L(t, e, n) {
    let a = e.background ?? t.background;
    if (a === false) return;
    return { d: a === "square" ? "M0 0H100V100H0Z" : P({ cx: 50, cy: 50, rx: 50, ry: 50, n: a === "circle" ? 2 : 6 }), fill: n.bg };
  }
  var jt = (t) => t ? `<path d="${t.d}" fill="${t.fill}"/>` : "";
  function ut(t) {
    return (e, n = {}) => {
      let { t: a, palette: o } = T(e, n), r = j(o, n.expression), s = n.size ? ` width="${n.size}" height="${n.size}"` : "", c = w(t.layout(a), n), i = Ft(n) + jt(L(t, n, r)) + it(t.render(c.l, r), c.wrap);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"${s}>${i}</svg>`;
    };
  }
  var mt = (t, e, n) => {
    let a = e.rx, o = t.num("eye.rx", 0.075, 0.105) * a, r = t.num("eye.ratio", 1.9, 3.2), s = t.num("eye.scale", 0.78, 1.24), c = t.num("eye.stretch", 0.85, 1.18), i = t.num("eye.gap", 0.1, 0.24) * a, l = o * Math.max(1, s), m = o * r * Math.max(1, s * c), u = l + a * 0.03 + i, b = t.jitter("gaze.x", 0.09) * n.rx, p = t.num("gaze.y", -0.2, 0.08) * n.ry, d = t.jitter("eye.dy", 0.04) * n.ry, h = Math.hypot(l, m), f = Math.hypot((Math.abs(b) + u + h) / n.rx, (Math.abs(p) + Math.abs(d) + h) / n.ry), x = f > 0.9 ? 0.9 / f : 1, g = o * x, k = g * r, C = u * x, Tt = Math.max(0, Math.min(1, i / m)), Bt = Math.min(12, Math.asin(Tt) * 180 / Math.PI), H = t.num("eye.lean", -1, 1) * Bt, Lt = Math.max(-12, Math.min(12, H + t.jitter("eye.lean2", 3.5))), X = n.cx + b * x, Y = n.cy + p * x;
    return [{ cx: X - C, cy: Y, rx: g, ry: k, n: t.num("eye.n", 3.5, 6), rot: H }, { cx: X + C, cy: Y + d * x, rx: g * s, ry: k * s * c, n: t.num("eye.n", 3.5, 6), rot: Lt }];
  };
  function pt(t, e) {
    let n = (r) => (t.find(([, s]) => r < s) ?? t[t.length - 1])[0];
    function a(r) {
      let s = n(r("shape")), c = r.num("body.r", 31, 38) * s.core, i = { cx: 50 + r.jitter("body.x", 1.5), cy: 50 + r.jitter("body.y", 1.5), rx: c, ry: c * r.num("body.ratio", 0.92, 1.08), n: r.num("body.n", 1.9, 2.5), rot: 0, radii: Array.from({ length: r.int("body.pts", 6, 8) }, (u, b) => 1 + r.jitter(`body.r${b}`, 0.16)) };
      s.body?.(r, i);
      let l = s.face?.(i) ?? i, m = { petals: [], extra: [] };
      return s.decorate?.(r, i, m), { shape: s.name, draw: s.path, body: i, face: l, petals: m.petals, extra: m.extra, eyes: e(r, i, l) };
    }
    function o(r, s, c) {
      let i = (u) => Math.round(u * 100) / 100, l = (u, b) => {
        let p = `<path d="${P(u)}"/>`;
        return c ? `<g class="mo-eye" style="--mo-wrap:${b ? 1 : -1};--mo-lean:${i(u.rot)};transform-origin:${i(u.cx)}px ${i(u.cy)}px">${p}</g>` : p;
      }, m = `<g fill="${s.head}">` + r.petals.map((u) => `<circle cx="${i(u.cx)}" cy="${i(u.cy)}" r="${i(u.r)}"/>`).join("") + r.extra.map((u) => `<path d="${u}"/>`).join("") + `<path d="${r.draw ? r.draw(r.body) : P(r.body)}"/></g><g fill="${s.eye}"${c ? ' class="mo-eyes"' : ""}>` + r.eyes.map(l).join("") + "</g>";
      return c ? `<g class="mo-breathe"><g class="mo-bob">${m}</g></g>` : m;
    }
    return { layout: a, render: o, background: false };
  }
  var yt = (t) => nt(t);
  var bt = (t) => et(t.cx, t.cy, t.rx, t.ry, t.radii, t.rot);
  var z = (t) => (e) => ({ cx: e.cx, cy: e.cy, rx: e.rx * t, ry: e.ry * t });
  var xt = (t) => z(Math.min(...t.radii) * 0.95)(t);
  var _t = (t) => z(0.84)(t);
  var ht = { name: "round", core: 1 };
  var dt = { name: "organic", core: 0.98, path: bt, face: xt };
  var ft = { name: "boxy", core: 0.86, body: (t, e) => {
    e.n = t.num("body.n", 3.4, 6), e.rot = t.num("body.rot", -20, 20);
  } };
  var gt = { name: "capsule", core: 1.02, body: (t, e) => {
    e.ry *= t.num("capsule.squat", 0.55, 0.68);
  }, face: z(0.94), decorate: (t, e, n) => {
    for (let a of [-1, 1]) n.petals.push({ cx: e.cx + a * (e.rx - e.ry), cy: e.cy, r: e.ry });
  }, path: (t) => rt(t.cx, t.cy, t.rx - t.ry, t.ry) };
  var Mt = { name: "nub", core: 0.88, decorate: (t, e, n) => {
    let a = t.int("nub.n", 1, 2);
    for (let o = 0; o < a; o++) {
      let r = t.num(`nub.a${o}`, 0, 2 * Math.PI);
      n.petals.push({ cx: e.cx + Math.cos(r) * e.rx * 0.88, cy: e.cy + Math.sin(r) * e.rx * 0.88, r: e.rx * t.num(`nub.r${o}`, 0.24, 0.4) });
    }
  } };
  var kt = { name: "cloud", core: 0.78, face: xt, path: bt, decorate: (t, e, n) => {
    let a = t.int("cloud.n", 4, 6);
    for (let o = 0; o < a; o++) {
      let r = Math.PI + Math.PI * (o + 0.5) / a;
      n.petals.push({ cx: e.cx + Math.cos(r) * e.rx * 0.8, cy: e.cy + Math.sin(r) * e.rx * 0.5, r: e.rx * t.num(`cloud.r${o}`, 0.44, 0.62) });
    }
  } };
  var $t = { name: "droplet", core: 0.78, body: (t, e) => {
    e.cy += 0.22 * e.ry, e.n = 2;
  }, face: (t) => ({ cx: t.cx, cy: t.cy + t.ry * 0.05, rx: t.rx * 0.88, ry: t.ry * 0.88 }), decorate: (t, e, n) => {
    n.extra.push(ot(e.cx, e.cy, e.rx, e.ry, t.num("droplet.tip", 1.4, 1.65)));
  } };
  var Pt = { name: "hexagon", core: 1.05, path: yt, face: _t, body: (t, e) => {
    e.sides = 6, e.rot = t.num("body.rot", -12, 12), e.round = t.num("poly.round", 0.24, 0.5);
  } };
  var Ot = { name: "sun", core: 0.7, decorate: (t, e, n) => {
    let a = t.int("sun.n", 6, 9), o = e.rx * t.num("sun.dist", 1, 1.08), r = e.rx * t.num("sun.r", 0.2, 0.26), s = t.num("sun.rot", 0, 2 * Math.PI);
    for (let c = 0; c < a; c++) {
      let i = s + 2 * Math.PI * c / a;
      n.petals.push({ cx: e.cx + Math.cos(i) * o, cy: e.cy + Math.sin(i) * o, r });
    }
  } };
  var St = { name: "triangle", core: 1.15, path: yt, body: (t, e) => {
    e.sides = 3, e.rot = t.num("body.rot", -5, 5), e.round = t.num("poly.round", 0.24, 0.5);
  }, face: (t) => ({ cx: t.cx, cy: t.cy + t.ry * 0.1, rx: t.rx * 0.54, ry: t.ry * 0.36 }) };
  var zt = [[ht, 0.22], [dt, 0.48], [ft, 0.6], [gt, 0.7], [Mt, 0.79], [kt, 0.86], [$t, 0.915], [Pt, 0.95], [Ot, 0.98], [St, 1]];
  var M = pt(zt, mt);
  var Ct = ut(M);
  function Xt(t, e = {}) {
    let { t: n, palette: a } = T(t, e), o = M.layout(n), r = e.expression, s = r ? r.bake(o, r.p).l : o;
    return { palette: r?.tint ? r.tint(a, r.p) : a, ...s };
  }
  var Me = "2.7.0";
  return __toCommonJS(index_exports);
})();

if (typeof window !== "undefined") {
    window.BlobatarLib = BlobatarLib;
    window.blobatar = BlobatarLib.blobatar;
}
if (typeof global !== "undefined") {
    global.BlobatarLib = BlobatarLib;
    global.blobatar = BlobatarLib.blobatar;
}
