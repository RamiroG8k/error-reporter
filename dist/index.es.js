var cr = Object.defineProperty, ur = Object.defineProperties;
var fr = Object.getOwnPropertyDescriptors;
var Se = Object.getOwnPropertySymbols;
var dr = Object.prototype.hasOwnProperty, lr = Object.prototype.propertyIsEnumerable;
var be = (e, t, n) => t in e ? cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, u = (e, t) => {
  for (var n in t || (t = {}))
    dr.call(t, n) && be(e, n, t[n]);
  if (Se)
    for (var n of Se(t))
      lr.call(t, n) && be(e, n, t[n]);
  return e;
}, S = (e, t) => ur(e, fr(t));
import { jsx as ze } from "react/jsx-runtime";
import { createContext as _r, useContext as pr } from "react";
class hr {
  warning(t) {
    this.printAsWarning(t);
  }
  error(t) {
    this.printAsError(t);
  }
  critical(t) {
    this.printAsError(t);
  }
  setUser() {
  }
  clearUser() {
  }
  printAsWarning(t) {
    console.warn("WARNING", t), t.cause && t.cause instanceof Error && this.printChainedWarnings(t.cause);
  }
  printChainedWarnings(t) {
    console.warn("Caused by", t), t.cause && t.cause instanceof Error && this.printChainedWarnings(t.cause);
  }
  printAsError(t) {
    console.error("ERROR", t), t.cause && t.cause instanceof Error && this.printChainedErrors(t.cause);
  }
  printChainedErrors(t) {
    console.error("Caused by", t), t.cause && t.cause instanceof Error && this.printChainedErrors(t.cause);
  }
}
class gr {
  warning(t) {
  }
  error(t) {
  }
  critical(t) {
  }
  setUser() {
  }
  clearUser() {
  }
}
var dt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var St = { exports: {} };
St.exports;
(function(e, t) {
  var n = 9007199254740991, r = "[object Arguments]", i = "[object Function]", s = "[object GeneratorFunction]", o = "[object Map]", a = "[object Object]", c = "[object Promise]", f = "[object Set]", _ = "[object WeakMap]", l = "[object DataView]", y = /[\\^$.*+?()[\]{}|]/g, m = /^\[object .+?Constructor\]$/, D = typeof dt == "object" && dt && dt.Object === Object && dt, jn = typeof self == "object" && self && self.Object === Object && self, j = D || jn || Function("return this")(), fe = t && !t.nodeType && t, de = fe && !0 && e && !e.nodeType && e, Pn = de && de.exports === fe;
  function $n(d, g) {
    return d == null ? void 0 : d[g];
  }
  function Ln(d) {
    var g = !1;
    if (d != null && typeof d.toString != "function")
      try {
        g = !!(d + "");
      } catch (v) {
      }
    return g;
  }
  function Gn(d, g) {
    return function(v) {
      return d(g(v));
    };
  }
  var Yn = Function.prototype, ut = Object.prototype, It = j["__core-js_shared__"], le = function() {
    var d = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "");
    return d ? "Symbol(src)_1." + d : "";
  }(), _e = Yn.toString, xt = ut.hasOwnProperty, ft = ut.toString, Mn = RegExp(
    "^" + _e.call(xt).replace(y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), pe = Pn ? j.Buffer : void 0, he = ut.propertyIsEnumerable, Fn = pe ? pe.isBuffer : void 0, Cn = Gn(Object.keys, Object), Ut = et(j, "DataView"), At = et(j, "Map"), Bt = et(j, "Promise"), jt = et(j, "Set"), Pt = et(j, "WeakMap"), Hn = !he.call({ valueOf: 1 }, "valueOf"), qn = $(Ut), Wn = $(At), zn = $(Bt), Kn = $(jt), Xn = $(Pt);
  function Vn(d) {
    return ft.call(d);
  }
  function Jn(d) {
    if (!Ee(d) || Zn(d))
      return !1;
    var g = me(d) || Ln(d) ? Mn : m;
    return g.test($(d));
  }
  function et(d, g) {
    var v = $n(d, g);
    return Jn(v) ? v : void 0;
  }
  var P = Vn;
  (Ut && P(new Ut(new ArrayBuffer(1))) != l || At && P(new At()) != o || Bt && P(Bt.resolve()) != c || jt && P(new jt()) != f || Pt && P(new Pt()) != _) && (P = function(d) {
    var g = ft.call(d), v = g == a ? d.constructor : void 0, ye = v ? $(v) : void 0;
    if (ye)
      switch (ye) {
        case qn:
          return l;
        case Wn:
          return o;
        case zn:
          return c;
        case Kn:
          return f;
        case Xn:
          return _;
      }
    return g;
  });
  function Zn(d) {
    return !!le && le in d;
  }
  function Qn(d) {
    var g = d && d.constructor, v = typeof g == "function" && g.prototype || ut;
    return d === v;
  }
  function $(d) {
    if (d != null) {
      try {
        return _e.call(d);
      } catch (g) {
      }
      try {
        return d + "";
      } catch (g) {
      }
    }
    return "";
  }
  function tr(d) {
    return nr(d) && xt.call(d, "callee") && (!he.call(d, "callee") || ft.call(d) == r);
  }
  var er = Array.isArray;
  function ge(d) {
    return d != null && sr(d.length) && !me(d);
  }
  function nr(d) {
    return or(d) && ge(d);
  }
  var rr = Fn || ar;
  function ir(d) {
    if (ge(d) && (er(d) || typeof d == "string" || typeof d.splice == "function" || rr(d) || tr(d)))
      return !d.length;
    var g = P(d);
    if (g == o || g == f)
      return !d.size;
    if (Hn || Qn(d))
      return !Cn(d).length;
    for (var v in d)
      if (xt.call(d, v))
        return !1;
    return !0;
  }
  function me(d) {
    var g = Ee(d) ? ft.call(d) : "";
    return g == i || g == s;
  }
  function sr(d) {
    return typeof d == "number" && d > -1 && d % 1 == 0 && d <= n;
  }
  function Ee(d) {
    var g = typeof d;
    return !!d && (g == "object" || g == "function");
  }
  function or(d) {
    return !!d && typeof d == "object";
  }
  function ar() {
    return !1;
  }
  e.exports = ir;
})(St, St.exports);
var Er = St.exports;
const Ke = /* @__PURE__ */ mr(Er), Xe = Object.prototype.toString;
function Ve(e) {
  switch (Xe.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return tt(e, Error);
  }
}
function Q(e, t) {
  return Xe.call(e) === `[object ${t}]`;
}
function Je(e) {
  return Q(e, "ErrorEvent");
}
function Te(e) {
  return Q(e, "DOMError");
}
function yr(e) {
  return Q(e, "DOMException");
}
function H(e) {
  return Q(e, "String");
}
function Ze(e) {
  return e === null || typeof e != "object" && typeof e != "function";
}
function z(e) {
  return Q(e, "Object");
}
function te(e) {
  return typeof Event != "undefined" && tt(e, Event);
}
function Sr(e) {
  return typeof Element != "undefined" && tt(e, Element);
}
function br(e) {
  return Q(e, "RegExp");
}
function ee(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function Tr(e) {
  return z(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function Rr(e) {
  return typeof e == "number" && e !== e;
}
function tt(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return !1;
  }
}
function lt(e) {
  return e && e.Math == Math ? e : void 0;
}
const N = typeof globalThis == "object" && lt(globalThis) || // eslint-disable-next-line no-restricted-globals
typeof window == "object" && lt(window) || typeof self == "object" && lt(self) || typeof global == "object" && lt(global) || function() {
  return this;
}() || {};
function at() {
  return N;
}
function ne(e, t, n) {
  const r = n || N, i = r.__SENTRY__ = r.__SENTRY__ || {};
  return i[e] || (i[e] = t());
}
const wr = at(), vr = 80;
function Mt(e, t = {}) {
  try {
    let n = e;
    const r = 5, i = [];
    let s = 0, o = 0;
    const a = " > ", c = a.length;
    let f;
    const _ = Array.isArray(t) ? t : t.keyAttrs, l = !Array.isArray(t) && t.maxStringLength || vr;
    for (; n && s++ < r && (f = Nr(n, _), !(f === "html" || s > 1 && o + i.length * c + f.length >= l)); )
      i.push(f), o += f.length, n = n.parentNode;
    return i.reverse().join(a);
  } catch (n) {
    return "<unknown>";
  }
}
function Nr(e, t) {
  const n = e, r = [];
  let i, s, o, a, c;
  if (!n || !n.tagName)
    return "";
  r.push(n.tagName.toLowerCase());
  const f = t && t.length ? t.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)]) : null;
  if (f && f.length)
    f.forEach((l) => {
      r.push(`[${l[0]}="${l[1]}"]`);
    });
  else if (n.id && r.push(`#${n.id}`), i = n.className, i && H(i))
    for (s = i.split(/\s+/), c = 0; c < s.length; c++)
      r.push(`.${s[c]}`);
  const _ = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < _.length; c++)
    o = _[c], a = n.getAttribute(o), a && r.push(`[${o}="${a}"]`);
  return r.join("");
}
function kr() {
  try {
    return wr.document.location.href;
  } catch (e) {
    return "";
  }
}
class R extends Error {
  /** Display name of this error instance. */
  constructor(t, n = "warn") {
    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = n;
  }
}
const Dr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Or(e) {
  return e === "http" || e === "https";
}
function vt(e, t = !1) {
  const { host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: c } = e;
  return `${a}://${c}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
}
function Ir(e) {
  const t = Dr.exec(e);
  if (!t)
    throw new R(`Invalid Sentry Dsn: ${e}`);
  const [n, r, i = "", s, o = "", a] = t.slice(1);
  let c = "", f = a;
  const _ = f.split("/");
  if (_.length > 1 && (c = _.slice(0, -1).join("/"), f = _.pop()), f) {
    const l = f.match(/^\d+/);
    l && (f = l[0]);
  }
  return Qe({ host: s, pass: i, path: c, projectId: f, port: o, protocol: n, publicKey: r });
}
function Qe(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function xr(e) {
  if (!(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__))
    return;
  const { port: t, projectId: n, protocol: r } = e;
  if (["protocol", "publicKey", "host", "projectId"].forEach((s) => {
    if (!e[s])
      throw new R(`Invalid Sentry Dsn: ${s} missing`);
  }), !n.match(/^\d+$/))
    throw new R(`Invalid Sentry Dsn: Invalid projectId ${n}`);
  if (!Or(r))
    throw new R(`Invalid Sentry Dsn: Invalid protocol ${r}`);
  if (t && isNaN(parseInt(t, 10)))
    throw new R(`Invalid Sentry Dsn: Invalid port ${t}`);
  return !0;
}
function Ur(e) {
  const t = typeof e == "string" ? Ir(e) : Qe(e);
  return xr(t), t;
}
const Ar = "Sentry Logger ", bt = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function tn(e) {
  if (!("console" in N))
    return e();
  const t = N.console, n = {};
  bt.forEach((r) => {
    const i = t[r] && t[r].__sentry_original__;
    r in t && i && (n[r] = t[r], t[r] = i);
  });
  try {
    return e();
  } finally {
    Object.keys(n).forEach((r) => {
      t[r] = n[r];
    });
  }
}
function Re() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    }
  };
  return typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? bt.forEach((n) => {
    t[n] = (...r) => {
      e && tn(() => {
        N.console[n](`${Ar}[${n}]:`, ...r);
      });
    };
  }) : bt.forEach((n) => {
    t[n] = () => {
    };
  }), t;
}
let p;
typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? p = ne("logger", Re) : p = Re();
function it(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function we(e, t) {
  if (!Array.isArray(e))
    return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    try {
      n.push(String(i));
    } catch (s) {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function Br(e, t, n = !1) {
  return H(e) ? br(t) ? t.test(e) : H(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function Nt(e, t = [], n = !1) {
  return t.some((r) => Br(e, r, n));
}
function T(e, t, n) {
  if (!(t in e))
    return;
  const r = e[t], i = n(r);
  if (typeof i == "function")
    try {
      en(i, r);
    } catch (s) {
    }
  e[t] = i;
}
function re(e, t, n) {
  Object.defineProperty(e, t, {
    // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
    value: n,
    writable: !0,
    configurable: !0
  });
}
function en(e, t) {
  const n = t.prototype || {};
  e.prototype = t.prototype = n, re(e, "__sentry_original__", t);
}
function ie(e) {
  return e.__sentry_original__;
}
function jr(e) {
  return Object.keys(e).map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");
}
function nn(e) {
  if (Ve(e))
    return u({
      message: e.message,
      name: e.name,
      stack: e.stack
    }, Ne(e));
  if (te(e)) {
    const t = u({
      type: e.type,
      target: ve(e.target),
      currentTarget: ve(e.currentTarget)
    }, Ne(e));
    return typeof CustomEvent != "undefined" && tt(e, CustomEvent) && (t.detail = e.detail), t;
  } else
    return e;
}
function ve(e) {
  try {
    return Sr(e) ? Mt(e) : Object.prototype.toString.call(e);
  } catch (t) {
    return "<unknown>";
  }
}
function Ne(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else
    return {};
}
function Pr(e, t = 40) {
  const n = Object.keys(nn(e));
  if (n.sort(), !n.length)
    return "[object has no keys]";
  if (n[0].length >= t)
    return it(n[0], t);
  for (let r = n.length; r > 0; r--) {
    const i = n.slice(0, r).join(", ");
    if (!(i.length > t))
      return r === n.length ? i : it(i, t);
  }
  return "";
}
function se(e) {
  return Ft(e, /* @__PURE__ */ new Map());
}
function Ft(e, t) {
  if (z(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const r = {};
    t.set(e, r);
    for (const i of Object.keys(e))
      typeof e[i] != "undefined" && (r[i] = Ft(e[i], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const r = [];
    return t.set(e, r), e.forEach((i) => {
      r.push(Ft(i, t));
    }), r;
  }
  return e;
}
const rn = 50, ke = /\(error: (.*)\)/;
function sn(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    const i = [], s = n.split(`
`);
    for (let o = r; o < s.length; o++) {
      const a = s[o];
      if (a.length > 1024)
        continue;
      const c = ke.test(a) ? a.replace(ke, "$1") : a;
      if (!c.match(/\S*Error: /)) {
        for (const f of t) {
          const _ = f(c);
          if (_) {
            i.push(_);
            break;
          }
        }
        if (i.length >= rn)
          break;
      }
    }
    return Lr(i);
  };
}
function $r(e) {
  return Array.isArray(e) ? sn(...e) : e;
}
function Lr(e) {
  if (!e.length)
    return [];
  const t = e.slice(0, rn), n = t[t.length - 1].function;
  n && /sentryWrapped/.test(n) && t.pop(), t.reverse();
  const r = t[t.length - 1].function;
  return r && /captureMessage|captureException/.test(r) && t.pop(), t.map((i) => S(u({}, i), {
    filename: i.filename || t[t.length - 1].filename,
    function: i.function || "?"
  }));
}
const $t = "<anonymous>";
function B(e) {
  try {
    return !e || typeof e != "function" ? $t : e.name || $t;
  } catch (t) {
    return $t;
  }
}
const Ct = at();
function on() {
  if (!("fetch" in Ct))
    return !1;
  try {
    return new Headers(), new Request("http://www.example.com"), new Response(), !0;
  } catch (e) {
    return !1;
  }
}
function Ht(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function Gr() {
  if (!on())
    return !1;
  if (Ht(Ct.fetch))
    return !0;
  let e = !1;
  const t = Ct.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Ht(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
  return e;
}
const _t = at();
function Yr() {
  const e = _t.chrome, t = e && e.app && e.app.runtime, n = "history" in _t && !!_t.history.pushState && !!_t.history.replaceState;
  return !t && n;
}
const E = at(), nt = "__sentry_xhr_v2__", st = {}, De = {};
function Mr(e) {
  if (!De[e])
    switch (De[e] = !0, e) {
      case "console":
        Fr();
        break;
      case "dom":
        Vr();
        break;
      case "xhr":
        qr();
        break;
      case "fetch":
        Cr();
        break;
      case "history":
        Wr();
        break;
      case "error":
        Jr();
        break;
      case "unhandledrejection":
        Zr();
        break;
      default:
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("unknown instrumentation type:", e);
        return;
    }
}
function U(e, t) {
  st[e] = st[e] || [], st[e].push(t), Mr(e);
}
function k(e, t) {
  if (!(!e || !st[e]))
    for (const n of st[e] || [])
      try {
        n(t);
      } catch (r) {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${B(n)}
Error:`,
          r
        );
      }
}
function Fr() {
  "console" in E && bt.forEach(function(e) {
    e in E.console && T(E.console, e, function(t) {
      return function(...n) {
        k("console", { args: n, level: e }), t && t.apply(E.console, n);
      };
    });
  });
}
function Cr() {
  Gr() && T(E, "fetch", function(e) {
    return function(...t) {
      const { method: n, url: r } = Hr(t), i = {
        args: t,
        fetchData: {
          method: n,
          url: r
        },
        startTimestamp: Date.now()
      };
      return k("fetch", u({}, i)), e.apply(E, t).then(
        (s) => (k("fetch", S(u({}, i), {
          endTimestamp: Date.now(),
          response: s
        })), s),
        (s) => {
          throw k("fetch", S(u({}, i), {
            endTimestamp: Date.now(),
            error: s
          })), s;
        }
      );
    };
  });
}
function qt(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function Oe(e) {
  return typeof e == "string" ? e : e ? qt(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function Hr(e) {
  if (e.length === 0)
    return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: Oe(n),
      method: qt(r, "method") ? String(r.method).toUpperCase() : "GET"
    };
  }
  const t = e[0];
  return {
    url: Oe(t),
    method: qt(t, "method") ? String(t.method).toUpperCase() : "GET"
  };
}
function qr() {
  if (!("XMLHttpRequest" in E))
    return;
  const e = XMLHttpRequest.prototype;
  T(e, "open", function(t) {
    return function(...n) {
      const r = n[1], i = this[nt] = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        method: H(n[0]) ? n[0].toUpperCase() : n[0],
        url: n[1],
        request_headers: {}
      };
      H(r) && i.method === "POST" && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
      const s = () => {
        const o = this[nt];
        if (o && this.readyState === 4) {
          try {
            o.status_code = this.status;
          } catch (a) {
          }
          k("xhr", {
            args: n,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr: this
          });
        }
      };
      return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? T(this, "onreadystatechange", function(o) {
        return function(...a) {
          return s(), o.apply(this, a);
        };
      }) : this.addEventListener("readystatechange", s), T(this, "setRequestHeader", function(o) {
        return function(...a) {
          const [c, f] = a, _ = this[nt];
          return _ && (_.request_headers[c.toLowerCase()] = f), o.apply(this, a);
        };
      }), t.apply(this, n);
    };
  }), T(e, "send", function(t) {
    return function(...n) {
      const r = this[nt];
      return r && n[0] !== void 0 && (r.body = n[0]), k("xhr", {
        args: n,
        startTimestamp: Date.now(),
        xhr: this
      }), t.apply(this, n);
    };
  });
}
let pt;
function Wr() {
  if (!Yr())
    return;
  const e = E.onpopstate;
  E.onpopstate = function(...n) {
    const r = E.location.href, i = pt;
    if (pt = r, k("history", {
      from: i,
      to: r
    }), e)
      try {
        return e.apply(this, n);
      } catch (s) {
      }
  };
  function t(n) {
    return function(...r) {
      const i = r.length > 2 ? r[2] : void 0;
      if (i) {
        const s = pt, o = String(i);
        pt = o, k("history", {
          from: s,
          to: o
        });
      }
      return n.apply(this, r);
    };
  }
  T(E.history, "pushState", t), T(E.history, "replaceState", t);
}
const zr = 1e3;
let ht, gt;
function Kr(e, t) {
  if (!e || e.type !== t.type)
    return !0;
  try {
    if (e.target !== t.target)
      return !0;
  } catch (n) {
  }
  return !1;
}
function Xr(e) {
  if (e.type !== "keypress")
    return !1;
  try {
    const t = e.target;
    if (!t || !t.tagName)
      return !0;
    if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
      return !1;
  } catch (t) {
  }
  return !0;
}
function Ie(e, t = !1) {
  return (n) => {
    if (!n || gt === n || Xr(n))
      return;
    const r = n.type === "keypress" ? "input" : n.type;
    ht === void 0 ? (e({
      event: n,
      name: r,
      global: t
    }), gt = n) : Kr(gt, n) && (e({
      event: n,
      name: r,
      global: t
    }), gt = n), clearTimeout(ht), ht = E.setTimeout(() => {
      ht = void 0;
    }, zr);
  };
}
function Vr() {
  if (!("document" in E))
    return;
  const e = k.bind(null, "dom"), t = Ie(e, !0);
  E.document.addEventListener("click", t, !1), E.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((n) => {
    const r = E[n] && E[n].prototype;
    !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (T(r, "addEventListener", function(i) {
      return function(s, o, a) {
        if (s === "click" || s == "keypress")
          try {
            const c = this, f = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {}, _ = f[s] = f[s] || { refCount: 0 };
            if (!_.handler) {
              const l = Ie(e);
              _.handler = l, i.call(this, s, l, a);
            }
            _.refCount++;
          } catch (c) {
          }
        return i.call(this, s, o, a);
      };
    }), T(
      r,
      "removeEventListener",
      function(i) {
        return function(s, o, a) {
          if (s === "click" || s == "keypress")
            try {
              const c = this, f = c.__sentry_instrumentation_handlers__ || {}, _ = f[s];
              _ && (_.refCount--, _.refCount <= 0 && (i.call(this, s, _.handler, a), _.handler = void 0, delete f[s]), Object.keys(f).length === 0 && delete c.__sentry_instrumentation_handlers__);
            } catch (c) {
            }
          return i.call(this, s, o, a);
        };
      }
    ));
  });
}
let mt = null;
function Jr() {
  mt = E.onerror, E.onerror = function(e, t, n, r, i) {
    return k("error", {
      column: r,
      error: i,
      line: n,
      msg: e,
      url: t
    }), mt && !mt.__SENTRY_LOADER__ ? mt.apply(this, arguments) : !1;
  }, E.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let Et = null;
function Zr() {
  Et = E.onunhandledrejection, E.onunhandledrejection = function(e) {
    return k("unhandledrejection", e), Et && !Et.__SENTRY_LOADER__ ? Et.apply(this, arguments) : !0;
  }, E.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function Qr() {
  const e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
  function n(i) {
    if (e)
      return t.has(i) ? !0 : (t.add(i), !1);
    for (let s = 0; s < t.length; s++)
      if (t[s] === i)
        return !0;
    return t.push(i), !1;
  }
  function r(i) {
    if (e)
      t.delete(i);
    else
      for (let s = 0; s < t.length; s++)
        if (t[s] === i) {
          t.splice(s, 1);
          break;
        }
  }
  return [n, r];
}
function W() {
  const e = N, t = e.crypto || e.msCrypto;
  if (t && t.randomUUID)
    return t.randomUUID().replace(/-/g, "");
  const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
    /[018]/g,
    (r) => (
      // eslint-disable-next-line no-bitwise
      (r ^ (n() & 15) >> r / 4).toString(16)
    )
  );
}
function an(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function A(e) {
  const { message: t, event_id: n } = e;
  if (t)
    return t;
  const r = an(e);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function Wt(e, t, n) {
  const r = e.exception = e.exception || {}, i = r.values = r.values || [], s = i[0] = i[0] || {};
  s.value || (s.value = t || ""), s.type || (s.type = n || "Error");
}
function ot(e, t) {
  const n = an(e);
  if (!n)
    return;
  const r = { type: "generic", handled: !0 }, i = n.mechanism;
  if (n.mechanism = u(u(u({}, r), i), t), t && "data" in t) {
    const s = u(u({}, i && i.data), t.data);
    n.mechanism.data = s;
  }
}
function xe(e) {
  if (e && e.__sentry_captured__)
    return !0;
  try {
    re(e, "__sentry_captured__", !0);
  } catch (t) {
  }
  return !1;
}
function cn(e) {
  return Array.isArray(e) ? e : [e];
}
function ti() {
  return typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function ei() {
  return "npm";
}
function ni() {
  return !ti() && Object.prototype.toString.call(typeof process != "undefined" ? process : 0) === "[object process]";
}
function ri(e, t) {
  return e.require(t);
}
function x(e, t = 100, n = 1 / 0) {
  try {
    return zt("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function un(e, t = 3, n = 100 * 1024) {
  const r = x(e, t);
  return ai(r) > n ? un(e, t - 1, n) : r;
}
function zt(e, t, n = 1 / 0, r = 1 / 0, i = Qr()) {
  const [s, o] = i;
  if (t == null || // this matches null and undefined -> eqeq not eqeqeq
  ["number", "boolean", "string"].includes(typeof t) && !Rr(t))
    return t;
  const a = ii(e, t);
  if (!a.startsWith("[object "))
    return a;
  if (t.__sentry_skip_normalization__)
    return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
  if (c === 0)
    return a.replace("object ", "");
  if (s(t))
    return "[Circular ~]";
  const f = t;
  if (f && typeof f.toJSON == "function")
    try {
      const m = f.toJSON();
      return zt("", m, c - 1, r, i);
    } catch (m) {
    }
  const _ = Array.isArray(t) ? [] : {};
  let l = 0;
  const y = nn(t);
  for (const m in y) {
    if (!Object.prototype.hasOwnProperty.call(y, m))
      continue;
    if (l >= r) {
      _[m] = "[MaxProperties ~]";
      break;
    }
    const D = y[m];
    _[m] = zt(m, D, c - 1, r, i), l++;
  }
  return o(t), _;
}
function ii(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter")
      return "[DomainEmitter]";
    if (typeof global != "undefined" && t === global)
      return "[Global]";
    if (typeof window != "undefined" && t === window)
      return "[Window]";
    if (typeof document != "undefined" && t === document)
      return "[Document]";
    if (Tr(t))
      return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t)
      return "[NaN]";
    if (typeof t == "function")
      return `[Function: ${B(t)}]`;
    if (typeof t == "symbol")
      return `[${String(t)}]`;
    if (typeof t == "bigint")
      return `[BigInt: ${String(t)}]`;
    const n = si(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function si(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function oi(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function ai(e) {
  return oi(JSON.stringify(e));
}
var O;
(function(e) {
  e[e.PENDING = 0] = "PENDING";
  const n = 1;
  e[e.RESOLVED = n] = "RESOLVED";
  const r = 2;
  e[e.REJECTED = r] = "REJECTED";
})(O || (O = {}));
function q(e) {
  return new w((t) => {
    t(e);
  });
}
function Tt(e) {
  return new w((t, n) => {
    n(e);
  });
}
class w {
  __init() {
    this._state = O.PENDING;
  }
  __init2() {
    this._handlers = [];
  }
  constructor(t) {
    w.prototype.__init.call(this), w.prototype.__init2.call(this), w.prototype.__init3.call(this), w.prototype.__init4.call(this), w.prototype.__init5.call(this), w.prototype.__init6.call(this);
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  /** JSDoc */
  then(t, n) {
    return new w((r, i) => {
      this._handlers.push([
        !1,
        (s) => {
          if (!t)
            r(s);
          else
            try {
              r(t(s));
            } catch (o) {
              i(o);
            }
        },
        (s) => {
          if (!n)
            i(s);
          else
            try {
              r(n(s));
            } catch (o) {
              i(o);
            }
        }
      ]), this._executeHandlers();
    });
  }
  /** JSDoc */
  catch(t) {
    return this.then((n) => n, t);
  }
  /** JSDoc */
  finally(t) {
    return new w((n, r) => {
      let i, s;
      return this.then(
        (o) => {
          s = !1, i = o, t && t();
        },
        (o) => {
          s = !0, i = o, t && t();
        }
      ).then(() => {
        if (s) {
          r(i);
          return;
        }
        n(i);
      });
    });
  }
  /** JSDoc */
  __init3() {
    this._resolve = (t) => {
      this._setResult(O.RESOLVED, t);
    };
  }
  /** JSDoc */
  __init4() {
    this._reject = (t) => {
      this._setResult(O.REJECTED, t);
    };
  }
  /** JSDoc */
  __init5() {
    this._setResult = (t, n) => {
      if (this._state === O.PENDING) {
        if (ee(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        this._state = t, this._value = n, this._executeHandlers();
      }
    };
  }
  /** JSDoc */
  __init6() {
    this._executeHandlers = () => {
      if (this._state === O.PENDING)
        return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((n) => {
        n[0] || (this._state === O.RESOLVED && n[1](this._value), this._state === O.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
}
function ci(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(o) {
    return t.splice(t.indexOf(o), 1)[0];
  }
  function i(o) {
    if (!n())
      return Tt(new R("Not adding Promise because buffer limit was reached."));
    const a = o();
    return t.indexOf(a) === -1 && t.push(a), a.then(() => r(a)).then(
      null,
      () => r(a).then(null, () => {
      })
    ), a;
  }
  function s(o) {
    return new w((a, c) => {
      let f = t.length;
      if (!f)
        return a(!0);
      const _ = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      t.forEach((l) => {
        q(l).then(() => {
          --f || (clearTimeout(_), a(!0));
        }, c);
      });
    });
  }
  return {
    $: t,
    add: i,
    drain: s
  };
}
function Lt(e) {
  if (!e)
    return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t)
    return {};
  const n = t[6] || "", r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r
    // everything minus origin
  };
}
const ui = ["fatal", "error", "warning", "log", "info", "debug"];
function fi(e) {
  return e === "warn" ? "warning" : ui.includes(e) ? e : "log";
}
const fn = at(), Kt = {
  nowSeconds: () => Date.now() / 1e3
};
function di() {
  const { performance: e } = fn;
  if (!e || !e.now)
    return;
  const t = Date.now() - e.now();
  return {
    now: () => e.now(),
    timeOrigin: t
  };
}
function li() {
  try {
    return ri(module, "perf_hooks").performance;
  } catch (e) {
    return;
  }
}
const Gt = ni() ? li() : di(), Ue = Gt === void 0 ? Kt : {
  nowSeconds: () => (Gt.timeOrigin + Gt.now()) / 1e3
}, kt = Kt.nowSeconds.bind(Kt), dn = Ue.nowSeconds.bind(Ue);
(() => {
  const { performance: e } = fn;
  if (!e || !e.now)
    return;
  const t = 3600 * 1e3, n = e.now(), r = Date.now(), i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t, s = i < t, o = e.timing && e.timing.navigationStart, c = typeof o == "number" ? Math.abs(o + n - r) : t, f = c < t;
  return s || f ? i <= c ? e.timeOrigin : o : r;
})();
function ct(e, t = []) {
  return [e, t];
}
function _i(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Ae(e, t) {
  const n = e[1];
  for (const r of n) {
    const i = r[0].type;
    if (t(r, i))
      return !0;
  }
  return !1;
}
function Xt(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function pi(e, t) {
  const [n, r] = e;
  let i = JSON.stringify(n);
  function s(o) {
    typeof i == "string" ? i = typeof o == "string" ? i + o : [Xt(i, t), o] : i.push(typeof o == "string" ? Xt(o, t) : o);
  }
  for (const o of r) {
    const [a, c] = o;
    if (s(`
${JSON.stringify(a)}
`), typeof c == "string" || c instanceof Uint8Array)
      s(c);
    else {
      let f;
      try {
        f = JSON.stringify(c);
      } catch (_) {
        f = JSON.stringify(x(c));
      }
      s(f);
    }
  }
  return typeof i == "string" ? i : hi(i);
}
function hi(e) {
  const t = e.reduce((i, s) => i + s.length, 0), n = new Uint8Array(t);
  let r = 0;
  for (const i of e)
    n.set(i, r), r += i.length;
  return n;
}
function gi(e, t) {
  const n = typeof e.data == "string" ? Xt(e.data, t) : e.data;
  return [
    se({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType
    }),
    n
  ];
}
const mi = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor"
};
function Be(e) {
  return mi[e];
}
function ln(e) {
  if (!e || !e.sdk)
    return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Ei(e, t, n, r) {
  const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return u(u(u({
    event_id: e.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, t && { sdk: t }), !!n && { dsn: vt(r) }), i && {
    trace: se(u({}, i))
  });
}
function yi(e, t, n) {
  const r = [
    { type: "client_report" },
    {
      timestamp: n || kt(),
      discarded_events: e
    }
  ];
  return ct(t ? { dsn: t } : {}, [r]);
}
const Si = 60 * 1e3;
function bi(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n))
    return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? Si : r - t;
}
function Ti(e, t) {
  return e[t] || e.all || 0;
}
function Ri(e, t, n = Date.now()) {
  return Ti(e, t) > n;
}
function wi(e, { statusCode: t, headers: n }, r = Date.now()) {
  const i = u({}, e), s = n && n["x-sentry-rate-limits"], o = n && n["retry-after"];
  if (s)
    for (const a of s.trim().split(",")) {
      const [c, f] = a.split(":", 2), _ = parseInt(c, 10), l = (isNaN(_) ? 60 : _) * 1e3;
      if (!f)
        i.all = r + l;
      else
        for (const y of f.split(";"))
          i[y] = r + l;
    }
  else
    o ? i.all = r + bi(o, r) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
const _n = "production";
function vi(e) {
  const t = dn(), n = {
    sid: W(),
    init: !0,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: !1,
    toJSON: () => ki(n)
  };
  return e && K(n, e), n;
}
function K(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || dn(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : W()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function Ni(e, t) {
  let n = {};
  t ? n = { status: t } : e.status === "ok" && (n = { status: "exited" }), K(e, n);
}
function ki(e) {
  return se({
    sid: `${e.sid}`,
    init: e.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
    duration: e.duration,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent
    }
  });
}
const Di = 100;
class G {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called after {@link applyToEvent}. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  // eslint-disable-next-line deprecation/deprecation
  /** Transaction Name */
  /** Span */
  /** Session */
  /** Request Mode Session Status */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {};
  }
  /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */
  static clone(t) {
    const n = new G();
    return t && (n._breadcrumbs = [...t._breadcrumbs], n._tags = u({}, t._tags), n._extra = u({}, t._extra), n._contexts = u({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = [...t._eventProcessors], n._requestSession = t._requestSession, n._attachments = [...t._attachments], n._sdkProcessingMetadata = u({}, t._sdkProcessingMetadata)), n;
  }
  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  /**
   * @inheritDoc
   */
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  /**
   * @inheritDoc
   */
  setUser(t) {
    return this._user = t || {}, this._session && K(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getUser() {
    return this._user;
  }
  /**
   * @inheritDoc
   */
  getRequestSession() {
    return this._requestSession;
  }
  /**
   * @inheritDoc
   */
  setRequestSession(t) {
    return this._requestSession = t, this;
  }
  /**
   * @inheritDoc
   */
  setTags(t) {
    return this._tags = u(u({}, this._tags), t), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setTag(t, n) {
    return this._tags = S(u({}, this._tags), { [t]: n }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtras(t) {
    return this._extra = u(u({}, this._extra), t), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtra(t, n) {
    return this._extra = S(u({}, this._extra), { [t]: n }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setContext(t, n) {
    return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setSpan(t) {
    return this._span = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getSpan() {
    return this._span;
  }
  /**
   * @inheritDoc
   */
  getTransaction() {
    const t = this.getSpan();
    return t && t.transaction;
  }
  /**
   * @inheritDoc
   */
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getSession() {
    return this._session;
  }
  /**
   * @inheritDoc
   */
  update(t) {
    if (!t)
      return this;
    if (typeof t == "function") {
      const n = t(this);
      return n instanceof G ? n : this;
    }
    return t instanceof G ? (this._tags = u(u({}, this._tags), t._tags), this._extra = u(u({}, this._extra), t._extra), this._contexts = u(u({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : z(t) && (t = t, this._tags = u(u({}, this._tags), t.tags), this._extra = u(u({}, this._extra), t.extra), this._contexts = u(u({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this;
  }
  /**
   * @inheritDoc
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this;
  }
  /**
   * @inheritDoc
   */
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Di;
    if (r <= 0)
      return this;
    const i = u({
      timestamp: kt()
    }, t);
    return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * @inheritDoc
   */
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  /**
   * @inheritDoc
   */
  getAttachments() {
    return this._attachments;
  }
  /**
   * @inheritDoc
   */
  clearAttachments() {
    return this._attachments = [], this;
  }
  /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   */
  applyToEvent(t, n = {}) {
    if (this._extra && Object.keys(this._extra).length && (t.extra = u(u({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = u(u({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = u(u({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = u(u({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
      t.contexts = u({ trace: this._span.getTraceContext() }, t.contexts);
      const r = this._span.transaction;
      if (r) {
        t.sdkProcessingMetadata = u({
          dynamicSamplingContext: r.getDynamicSamplingContext()
        }, t.sdkProcessingMetadata);
        const i = r.name;
        i && (t.tags = u({ transaction: i }, t.tags));
      }
    }
    return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = u(u({}, t.sdkProcessingMetadata), this._sdkProcessingMetadata), this._notifyEventProcessors([...pn(), ...this._eventProcessors], t, n);
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = u(u({}, this._sdkProcessingMetadata), t), this;
  }
  /**
   * This will be called after {@link applyToEvent} is finished.
   */
  _notifyEventProcessors(t, n, r, i = 0) {
    return new w((s, o) => {
      const a = t[i];
      if (n === null || typeof a != "function")
        s(n);
      else {
        const c = a(u({}, n), r);
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && a.id && c === null && p.log(`Event processor "${a.id}" dropped event`), ee(c) ? c.then((f) => this._notifyEventProcessors(t, f, r, i + 1).then(s)).then(null, o) : this._notifyEventProcessors(t, c, r, i + 1).then(s).then(null, o);
      }
    });
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
  /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */
  _applyFingerprint(t) {
    t.fingerprint = t.fingerprint ? cn(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
  }
}
function pn() {
  return ne("globalEventProcessors", () => []);
}
function oe(e) {
  pn().push(e);
}
const hn = 4, Oi = 100;
class gn {
  /** Is a {@link Layer}[] containing the client and scope */
  /** Contains the last event id of a captured event.  */
  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */
  constructor(t, n = new G(), r = hn) {
    this._version = r, this._stack = [{ scope: n }], t && this.bindClient(t);
  }
  /**
   * @inheritDoc
   */
  isOlderThan(t) {
    return this._version < t;
  }
  /**
   * @inheritDoc
   */
  bindClient(t) {
    const n = this.getStackTop();
    n.client = t, t && t.setupIntegrations && t.setupIntegrations();
  }
  /**
   * @inheritDoc
   */
  pushScope() {
    const t = G.clone(this.getScope());
    return this.getStack().push({
      client: this.getClient(),
      scope: t
    }), t;
  }
  /**
   * @inheritDoc
   */
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  /**
   * @inheritDoc
   */
  withScope(t) {
    const n = this.pushScope();
    try {
      t(n);
    } finally {
      this.popScope();
    }
  }
  /**
   * @inheritDoc
   */
  getClient() {
    return this.getStackTop().client;
  }
  /** Returns the scope of the top stack. */
  getScope() {
    return this.getStackTop().scope;
  }
  /** Returns the scope stack for domains or the process. */
  getStack() {
    return this._stack;
  }
  /** Returns the topmost scope layer in the order domain > local > process. */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * @inheritDoc
   */
  captureException(t, n) {
    const r = this._lastEventId = n && n.event_id ? n.event_id : W(), i = new Error("Sentry syntheticException");
    return this._withClient((s, o) => {
      s.captureException(
        t,
        S(u({
          originalException: t,
          syntheticException: i
        }, n), {
          event_id: r
        }),
        o
      );
    }), r;
  }
  /**
   * @inheritDoc
   */
  captureMessage(t, n, r) {
    const i = this._lastEventId = r && r.event_id ? r.event_id : W(), s = new Error(t);
    return this._withClient((o, a) => {
      o.captureMessage(
        t,
        n,
        S(u({
          originalException: t,
          syntheticException: s
        }, r), {
          event_id: i
        }),
        a
      );
    }), i;
  }
  /**
   * @inheritDoc
   */
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : W();
    return t.type || (this._lastEventId = r), this._withClient((i, s) => {
      i.captureEvent(t, S(u({}, n), { event_id: r }), s);
    }), r;
  }
  /**
   * @inheritDoc
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addBreadcrumb(t, n) {
    const { scope: r, client: i } = this.getStackTop();
    if (!i)
      return;
    const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = Oi } = i.getOptions && i.getOptions() || {};
    if (o <= 0)
      return;
    const a = kt(), c = u({ timestamp: a }, t), f = s ? tn(() => s(c, n)) : c;
    f !== null && (i.emit && i.emit("beforeAddBreadcrumb", f, n), r.addBreadcrumb(f, o));
  }
  /**
   * @inheritDoc
   */
  setUser(t) {
    this.getScope().setUser(t);
  }
  /**
   * @inheritDoc
   */
  setTags(t) {
    this.getScope().setTags(t);
  }
  /**
   * @inheritDoc
   */
  setExtras(t) {
    this.getScope().setExtras(t);
  }
  /**
   * @inheritDoc
   */
  setTag(t, n) {
    this.getScope().setTag(t, n);
  }
  /**
   * @inheritDoc
   */
  setExtra(t, n) {
    this.getScope().setExtra(t, n);
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setContext(t, n) {
    this.getScope().setContext(t, n);
  }
  /**
   * @inheritDoc
   */
  configureScope(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(n);
  }
  /**
   * @inheritDoc
   */
  run(t) {
    const n = je(this);
    try {
      t(this);
    } finally {
      je(n);
    }
  }
  /**
   * @inheritDoc
   */
  getIntegration(t) {
    const n = this.getClient();
    if (!n)
      return null;
    try {
      return n.getIntegration(t);
    } catch (r) {
      return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null;
    }
  }
  /**
   * @inheritDoc
   */
  startTransaction(t, n) {
    const r = this._callExtensionMethod("startTransaction", t, n);
    return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && !r && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), r;
  }
  /**
   * @inheritDoc
   */
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  /**
   * @inheritDoc
   */
  captureSession(t = !1) {
    if (t)
      return this.endSession();
    this._sendSessionUpdate();
  }
  /**
   * @inheritDoc
   */
  endSession() {
    const n = this.getStackTop().scope, r = n.getSession();
    r && Ni(r), this._sendSessionUpdate(), n.setSession();
  }
  /**
   * @inheritDoc
   */
  startSession(t) {
    const { scope: n, client: r } = this.getStackTop(), { release: i, environment: s = _n } = r && r.getOptions() || {}, { userAgent: o } = N.navigator || {}, a = vi(u(u({
      release: i,
      environment: s,
      user: n.getUser()
    }, o && { userAgent: o }), t)), c = n.getSession && n.getSession();
    return c && c.status === "ok" && K(c, { status: "exited" }), this.endSession(), n.setSession(a), a;
  }
  /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   */
  shouldSendDefaultPii() {
    const t = this.getClient(), n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  /**
   * Sends the current Session on the scope
   */
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(), r = t.getSession();
    r && n && n.captureSession && n.captureSession(r);
  }
  /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */
  _withClient(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(r, n);
  }
  /**
   * Calls global extension method and binding current instance to the function call
   */
  // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _callExtensionMethod(t, ...n) {
    const i = Dt().__SENTRY__;
    if (i && i.extensions && typeof i.extensions[t] == "function")
      return i.extensions[t].apply(this, n);
    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function Dt() {
  return N.__SENTRY__ = N.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, N;
}
function je(e) {
  const t = Dt(), n = Vt(t);
  return mn(t, e), n;
}
function b() {
  const e = Dt();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t)
      return t;
  }
  return Ii(e);
}
function Ii(e = Dt()) {
  return (!xi(e) || Vt(e).isOlderThan(hn)) && mn(e, new gn()), Vt(e);
}
function xi(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function Vt(e) {
  return ne("hub", () => new gn(), e);
}
function mn(e, t) {
  if (!e)
    return !1;
  const n = e.__SENTRY__ = e.__SENTRY__ || {};
  return n.hub = t, !0;
}
function Jt(e, t) {
  return b().captureException(e, { captureContext: t });
}
function Pe(e) {
  b().setUser(e);
}
function En(e) {
  b().withScope(e);
}
const Ui = "7";
function Ai(e) {
  const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Bi(e) {
  return `${Ai(e)}${e.projectId}/envelope/`;
}
function ji(e, t) {
  return jr(u({
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    sentry_key: e.publicKey,
    sentry_version: Ui
  }, t && { sentry_client: `${t.name}/${t.version}` }));
}
function Pi(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel, r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${Bi(e)}?${ji(e, r)}`;
}
function $i(e, t) {
  return t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]), e;
}
function Li(e, t, n, r) {
  const i = ln(n), s = u(u({
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, i && { sdk: i }), !!r && { dsn: vt(t) }), o = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e];
  return ct(s, [o]);
}
function Gi(e, t, n, r) {
  const i = ln(n), s = e.type && e.type !== "replay_event" ? e.type : "event";
  $i(e, n && n.sdk);
  const o = Ei(e, i, r, t);
  return delete e.sdkProcessingMetadata, ct(o, [[{ type: s }, e]]);
}
const $e = [];
function Yi(e) {
  const t = {};
  return e.forEach((n) => {
    const { name: r } = n, i = t[r];
    i && !i.isDefaultInstance && n.isDefaultInstance || (t[r] = n);
  }), Object.keys(t).map((n) => t[n]);
}
function Mi(e) {
  const t = e.defaultIntegrations || [], n = e.integrations;
  t.forEach((o) => {
    o.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = cn(n(t)) : r = t;
  const i = Yi(r), s = Ci(i, (o) => o.name === "Debug");
  if (s !== -1) {
    const [o] = i.splice(s, 1);
    i.push(o);
  }
  return i;
}
function Fi(e) {
  const t = {};
  return e.forEach((n) => {
    n && yn(n, t);
  }), t;
}
function yn(e, t) {
  t[e.name] = e, $e.indexOf(e.name) === -1 && (e.setupOnce(oe, b), $e.push(e.name), (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log(`Integration installed: ${e.name}`));
}
function Ci(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]) === !0)
      return n;
  return -1;
}
function Hi(e, t, n, r) {
  const { normalizeDepth: i = 3, normalizeMaxBreadth: s = 1e3 } = e, o = S(u({}, t), {
    event_id: t.event_id || n.event_id || W(),
    timestamp: t.timestamp || kt()
  }), a = n.integrations || e.integrations.map((_) => _.name);
  qi(o, e), zi(o, a), t.type === void 0 && Wi(o, e.stackParser);
  let c = r;
  n.captureContext && (c = G.clone(c).update(n.captureContext));
  let f = q(o);
  if (c) {
    if (c.getAttachments) {
      const _ = [...n.attachments || [], ...c.getAttachments()];
      _.length && (n.attachments = _);
    }
    f = c.applyToEvent(o, n);
  }
  return f.then((_) => typeof i == "number" && i > 0 ? Ki(_, i, s) : _);
}
function qi(e, t) {
  const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = t;
  "environment" in e || (e.environment = "environment" in t ? n : _n), e.release === void 0 && r !== void 0 && (e.release = r), e.dist === void 0 && i !== void 0 && (e.dist = i), e.message && (e.message = it(e.message, s));
  const o = e.exception && e.exception.values && e.exception.values[0];
  o && o.value && (o.value = it(o.value, s));
  const a = e.request;
  a && a.url && (a.url = it(a.url, s));
}
const Le = /* @__PURE__ */ new WeakMap();
function Wi(e, t) {
  const n = N._sentryDebugIds;
  if (!n)
    return;
  let r;
  const i = Le.get(t);
  i ? r = i : (r = /* @__PURE__ */ new Map(), Le.set(t, r));
  const s = Object.keys(n).reduce((c, f) => {
    let _;
    const l = r.get(f);
    l ? _ = l : (_ = t(f), r.set(f, _));
    for (let y = _.length - 1; y >= 0; y--) {
      const m = _[y];
      if (m.filename) {
        c[m.filename] = n[f];
        break;
      }
    }
    return c;
  }, {}), o = /* @__PURE__ */ new Set();
  try {
    e.exception.values.forEach((c) => {
      c.stacktrace.frames.forEach((f) => {
        f.filename && o.add(f.filename);
      });
    });
  } catch (c) {
  }
  e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
  const a = e.debug_meta.images;
  o.forEach((c) => {
    s[c] && a.push({
      type: "sourcemap",
      code_file: c,
      debug_id: s[c]
    });
  });
}
function zi(e, t) {
  t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t]);
}
function Ki(e, t, n) {
  if (!e)
    return null;
  const r = u(u(u(u(u({}, e), e.breadcrumbs && {
    breadcrumbs: e.breadcrumbs.map((i) => u(u({}, i), i.data && {
      data: x(i.data, t, n)
    }))
  }), e.user && {
    user: x(e.user, t, n)
  }), e.contexts && {
    contexts: x(e.contexts, t, n)
  }), e.extra && {
    extra: x(e.extra, t, n)
  });
  return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = x(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map((i) => (i.data && (i.data = x(i.data, t, n)), i))), r;
}
const Ge = "Not capturing exception because it's already been captured.";
class L {
  /** Options passed to the SDK. */
  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
  /** Array of set up integrations. */
  __init() {
    this._integrations = {};
  }
  /** Indicates whether this client's integrations have been set up. */
  __init2() {
    this._integrationsInitialized = !1;
  }
  /** Number of calls being processed */
  __init3() {
    this._numProcessing = 0;
  }
  /** Holds flushable  */
  __init4() {
    this._outcomes = {};
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  __init5() {
    this._hooks = {};
  }
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(t) {
    if (L.prototype.__init.call(this), L.prototype.__init2.call(this), L.prototype.__init3.call(this), L.prototype.__init4.call(this), L.prototype.__init5.call(this), this._options = t, t.dsn) {
      this._dsn = Ur(t.dsn);
      const n = Pi(this._dsn, t);
      this._transport = t.transport(S(u({
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, t.transportOptions), {
        url: n
      }));
    } else
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("No DSN provided, client will not do anything.");
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  captureException(t, n, r) {
    if (xe(t)) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log(Ge);
      return;
    }
    let i = n && n.event_id;
    return this._process(
      this.eventFromException(t, n).then((s) => this._captureEvent(s, n, r)).then((s) => {
        i = s;
      })
    ), i;
  }
  /**
   * @inheritDoc
   */
  captureMessage(t, n, r, i) {
    let s = r && r.event_id;
    const o = Ze(t) ? this.eventFromMessage(String(t), n, r) : this.eventFromException(t, r);
    return this._process(
      o.then((a) => this._captureEvent(a, r, i)).then((a) => {
        s = a;
      })
    ), s;
  }
  /**
   * @inheritDoc
   */
  captureEvent(t, n, r) {
    if (n && n.originalException && xe(n.originalException)) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log(Ge);
      return;
    }
    let i = n && n.event_id;
    return this._process(
      this._captureEvent(t, n, r).then((s) => {
        i = s;
      })
    ), i;
  }
  /**
   * @inheritDoc
   */
  captureSession(t) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("SDK not enabled, will not capture session.");
      return;
    }
    typeof t.release != "string" ? (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), K(t, { init: !1 }));
  }
  /**
   * @inheritDoc
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * @inheritDoc
   */
  getOptions() {
    return this._options;
  }
  /**
   * @see SdkMetadata in @sentry/types
   *
   * @return The metadata of the SDK
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * @inheritDoc
   */
  getTransport() {
    return this._transport;
  }
  /**
   * @inheritDoc
   */
  flush(t) {
    const n = this._transport;
    return n ? this._isClientDoneProcessing(t).then((r) => n.flush(t).then((i) => r && i)) : q(!0);
  }
  /**
   * @inheritDoc
   */
  close(t) {
    return this.flush(t).then((n) => (this.getOptions().enabled = !1, n));
  }
  /**
   * Sets up the integrations
   */
  setupIntegrations() {
    this._isEnabled() && !this._integrationsInitialized && (this._integrations = Fi(this._options.integrations), this._integrationsInitialized = !0);
  }
  /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   */
  getIntegrationById(t) {
    return this._integrations[t];
  }
  /**
   * @inheritDoc
   */
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch (n) {
      return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(`Cannot retrieve integration ${t.id} from the current Client`), null;
    }
  }
  /**
   * @inheritDoc
   */
  addIntegration(t) {
    yn(t, this._integrations);
  }
  /**
   * @inheritDoc
   */
  sendEvent(t, n = {}) {
    if (this._dsn) {
      let r = Gi(t, this._dsn, this._options._metadata, this._options.tunnel);
      for (const s of n.attachments || [])
        r = _i(
          r,
          gi(
            s,
            this._options.transportOptions && this._options.transportOptions.textEncoder
          )
        );
      const i = this._sendEnvelope(r);
      i && i.then((s) => this.emit("afterSendEvent", t, s), null);
    }
  }
  /**
   * @inheritDoc
   */
  sendSession(t) {
    if (this._dsn) {
      const n = Li(t, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(n);
    }
  }
  /**
   * @inheritDoc
   */
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const i = `${t}:${n}`;
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1;
    }
  }
  // Keep on() & emit() signatures in sync with types' client.ts interface
  /** @inheritdoc */
  /** @inheritdoc */
  on(t, n) {
    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
  }
  /** @inheritdoc */
  /** @inheritdoc */
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((r) => r(...n));
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(t, n) {
    let r = !1, i = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      i = !0;
      for (const c of s) {
        const f = c.mechanism;
        if (f && f.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = t.status === "ok";
    (o && t.errors === 0 || o && r) && (K(t, S(u({}, r && { status: "crashed" }), {
      errors: t.errors || Number(i || r)
    })), this.captureSession(t));
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  _isClientDoneProcessing(t) {
    return new w((n) => {
      let r = 0;
      const i = 1, s = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(s), n(!0)) : (r += i, t && r >= t && (clearInterval(s), n(!1)));
      }, i);
    });
  }
  /** Determines whether this SDK is enabled and a valid Dsn is present. */
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._dsn !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(t, n, r) {
    const i = this.getOptions(), s = Object.keys(this._integrations);
    return !n.integrations && s.length > 0 && (n.integrations = s), Hi(i, t, n, r);
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then(
      (i) => i.event_id,
      (i) => {
        if (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) {
          const s = i;
          s.logLevel === "log" ? p.log(s.message) : p.warn(s);
        }
      }
    );
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(t, n, r) {
    const i = this.getOptions(), { sampleRate: s } = i;
    if (!this._isEnabled())
      return Tt(new R("SDK not enabled, will not capture event.", "log"));
    const o = bn(t), a = Sn(t), c = t.type || "error", f = `before send for type \`${c}\``;
    if (a && typeof s == "number" && Math.random() > s)
      return this.recordDroppedEvent("sample_rate", "error", t), Tt(
        new R(
          `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
          "log"
        )
      );
    const _ = c === "replay_event" ? "replay" : c;
    return this._prepareEvent(t, n, r).then((l) => {
      if (l === null)
        throw this.recordDroppedEvent("event_processor", _, t), new R("An event processor returned `null`, will not send event.", "log");
      if (n.data && n.data.__sentry__ === !0)
        return l;
      const m = Vi(i, l, n);
      return Xi(m, f);
    }).then((l) => {
      if (l === null)
        throw this.recordDroppedEvent("before_send", _, t), new R(`${f} returned \`null\`, will not send event.`, "log");
      const y = r && r.getSession();
      !o && y && this._updateSessionFromEvent(y, l);
      const m = l.transaction_info;
      if (o && m && l.transaction !== t.transaction) {
        const D = "custom";
        l.transaction_info = S(u({}, m), {
          source: D
        });
      }
      return this.sendEvent(l, n), l;
    }).then(null, (l) => {
      throw l instanceof R ? l : (this.captureException(l, {
        data: {
          __sentry__: !0
        },
        originalException: l
      }), new R(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`
      ));
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(t) {
    this._numProcessing++, t.then(
      (n) => (this._numProcessing--, n),
      (n) => (this._numProcessing--, n)
    );
  }
  /**
   * @inheritdoc
   */
  _sendEnvelope(t) {
    if (this._transport && this._dsn)
      return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, (n) => {
        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error("Error while sending event:", n);
      });
    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error("Transport disabled");
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const t = this._outcomes;
    return this._outcomes = {}, Object.keys(t).map((n) => {
      const [r, i] = n.split(":");
      return {
        reason: r,
        category: i,
        quantity: t[n]
      };
    });
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
}
function Xi(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (ee(e))
    return e.then(
      (r) => {
        if (!z(r) && r !== null)
          throw new R(n);
        return r;
      },
      (r) => {
        throw new R(`${t} rejected with ${r}`);
      }
    );
  if (!z(e) && e !== null)
    throw new R(n);
  return e;
}
function Vi(e, t, n) {
  const { beforeSend: r, beforeSendTransaction: i } = e;
  return Sn(t) && r ? r(t, n) : bn(t) && i ? i(t, n) : t;
}
function Sn(e) {
  return e.type === void 0;
}
function bn(e) {
  return e.type === "transaction";
}
function Ji(e, t) {
  t.debug === !0 && (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? p.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
  const n = b();
  n.getScope().update(t.initialScope);
  const i = new e(t);
  n.bindClient(i);
}
const Zi = 30;
function Tn(e, t, n = ci(
  e.bufferSize || Zi
)) {
  let r = {};
  const i = (o) => n.drain(o);
  function s(o) {
    const a = [];
    if (Ae(o, (l, y) => {
      const m = Be(y);
      if (Ri(r, m)) {
        const D = Ye(l, y);
        e.recordDroppedEvent("ratelimit_backoff", m, D);
      } else
        a.push(l);
    }), a.length === 0)
      return q();
    const c = ct(o[0], a), f = (l) => {
      Ae(c, (y, m) => {
        const D = Ye(y, m);
        e.recordDroppedEvent(l, Be(m), D);
      });
    }, _ = () => t({ body: pi(c, e.textEncoder) }).then(
      (l) => (l.statusCode !== void 0 && (l.statusCode < 200 || l.statusCode >= 300) && (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(`Sentry responded with status code ${l.statusCode} to sent event.`), r = wi(r, l), l),
      (l) => {
        throw f("network_error"), l;
      }
    );
    return n.add(_).then(
      (l) => l,
      (l) => {
        if (l instanceof R)
          return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error("Skipped sending event because buffer is full."), f("queue_overflow"), q();
        throw l;
      }
    );
  }
  return s.__sentry__baseTransport__ = !0, {
    send: s,
    flush: i
  };
}
function Ye(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
const Rt = "7.52.0";
let Me;
class X {
  constructor() {
    X.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "FunctionToString";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = X.id;
  }
  /**
   * @inheritDoc
   */
  setupOnce() {
    Me = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...t) {
        const n = ie(this) || this;
        return Me.apply(n, t);
      };
    } catch (t) {
    }
  }
}
X.__initStatic();
const Qi = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
class Y {
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "InboundFilters";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = Y.id;
  }
  constructor(t = {}) {
    this._options = t, Y.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  setupOnce(t, n) {
    const r = (i) => {
      const s = n();
      if (s) {
        const o = s.getIntegration(Y);
        if (o) {
          const a = s.getClient(), c = a ? a.getOptions() : {}, f = ts(o._options, c);
          return es(i, f) ? null : i;
        }
      }
      return i;
    };
    r.id = this.name, t(r);
  }
}
Y.__initStatic();
function ts(e = {}, t = {}) {
  return {
    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
    ignoreErrors: [
      ...e.ignoreErrors || [],
      ...t.ignoreErrors || [],
      ...Qi
    ],
    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
  };
}
function es(e, t) {
  return t.ignoreInternal && as(e) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(`Event dropped due to being internal Sentry Error.
Event: ${A(e)}`), !0) : ns(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(
    `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${A(e)}`
  ), !0) : rs(e, t.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(
    `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${A(e)}`
  ), !0) : is(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(
    `Event dropped due to being matched by \`denyUrls\` option.
Event: ${A(
      e
    )}.
Url: ${wt(e)}`
  ), !0) : ss(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(
    `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${A(
      e
    )}.
Url: ${wt(e)}`
  ), !0);
}
function ns(e, t) {
  return e.type || !t || !t.length ? !1 : os(e).some((n) => Nt(n, t));
}
function rs(e, t) {
  if (e.type !== "transaction" || !t || !t.length)
    return !1;
  const n = e.transaction;
  return n ? Nt(n, t) : !1;
}
function is(e, t) {
  if (!t || !t.length)
    return !1;
  const n = wt(e);
  return n ? Nt(n, t) : !1;
}
function ss(e, t) {
  if (!t || !t.length)
    return !0;
  const n = wt(e);
  return n ? Nt(n, t) : !0;
}
function os(e) {
  if (e.message)
    return [e.message];
  if (e.exception) {
    const { values: t } = e.exception;
    try {
      const { type: n = "", value: r = "" } = t && t[t.length - 1] || {};
      return [`${r}`, `${n}: ${r}`];
    } catch (n) {
      return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error(`Cannot extract message for event ${A(e)}`), [];
    }
  }
  return [];
}
function as(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch (t) {
  }
  return !1;
}
function cs(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function wt(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch (n) {
    }
    return t ? cs(t) : null;
  } catch (t) {
    return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.error(`Cannot extract url for event ${A(e)}`), null;
  }
}
const us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FunctionToString: X,
  InboundFilters: Y
}, Symbol.toStringTag, { value: "Module" })), h = N;
let Zt = 0;
function Rn() {
  return Zt > 0;
}
function fs() {
  Zt++, setTimeout(() => {
    Zt--;
  });
}
function V(e, t = {}, n) {
  if (typeof e != "function")
    return e;
  try {
    const i = e.__sentry_wrapped__;
    if (i)
      return i;
    if (ie(e))
      return e;
  } catch (i) {
    return e;
  }
  const r = function() {
    const i = Array.prototype.slice.call(arguments);
    try {
      n && typeof n == "function" && n.apply(this, arguments);
      const s = i.map((o) => V(o, t));
      return e.apply(this, s);
    } catch (s) {
      throw fs(), En((o) => {
        o.addEventProcessor((a) => (t.mechanism && (Wt(a, void 0, void 0), ot(a, t.mechanism)), a.extra = S(u({}, a.extra), {
          arguments: i
        }), a)), Jt(s);
      }), s;
    }
  };
  try {
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
  } catch (i) {
  }
  en(r, e), re(e, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
      get() {
        return e.name;
      }
    });
  } catch (i) {
  }
  return r;
}
function wn(e, t) {
  const n = ae(e, t), r = {
    type: t && t.name,
    value: ps(t)
  };
  return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function ds(e, t, n, r) {
  const s = b().getClient(), o = s && s.getOptions().normalizeDepth, a = {
    exception: {
      values: [
        {
          type: te(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: `Non-Error ${r ? "promise rejection" : "exception"} captured with keys: ${Pr(t)}`
        }
      ]
    },
    extra: {
      __serialized__: un(t, o)
    }
  };
  if (n) {
    const c = ae(e, n);
    c.length && (a.exception.values[0].stacktrace = { frames: c });
  }
  return a;
}
function Yt(e, t) {
  return {
    exception: {
      values: [wn(e, t)]
    }
  };
}
function ae(e, t) {
  const n = t.stacktrace || t.stack || "", r = _s(t);
  try {
    return e(n, r);
  } catch (i) {
  }
  return [];
}
const ls = /Minified React error #\d+;/i;
function _s(e) {
  if (e) {
    if (typeof e.framesToPop == "number")
      return e.framesToPop;
    if (ls.test(e.message))
      return 1;
  }
  return 0;
}
function ps(e) {
  const t = e && e.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function hs(e, t, n, r) {
  const i = n && n.syntheticException || void 0, s = ce(e, t, i, r);
  return ot(s), s.level = "error", n && n.event_id && (s.event_id = n.event_id), q(s);
}
function gs(e, t, n = "info", r, i) {
  const s = r && r.syntheticException || void 0, o = Qt(e, t, s, i);
  return o.level = n, r && r.event_id && (o.event_id = r.event_id), q(o);
}
function ce(e, t, n, r, i) {
  let s;
  if (Je(t) && t.error)
    return Yt(e, t.error);
  if (Te(t) || yr(t)) {
    const o = t;
    if ("stack" in t)
      s = Yt(e, t);
    else {
      const a = o.name || (Te(o) ? "DOMError" : "DOMException"), c = o.message ? `${a}: ${o.message}` : a;
      s = Qt(e, c, n, r), Wt(s, c);
    }
    return "code" in o && (s.tags = S(u({}, s.tags), { "DOMException.code": `${o.code}` })), s;
  }
  return Ve(t) ? Yt(e, t) : z(t) || te(t) ? (s = ds(e, t, n, i), ot(s, {
    synthetic: !0
  }), s) : (s = Qt(e, t, n, r), Wt(s, `${t}`, void 0), ot(s, {
    synthetic: !0
  }), s);
}
function Qt(e, t, n, r) {
  const i = {
    message: t
  };
  if (r && n) {
    const s = ae(e, n);
    s.length && (i.exception = {
      values: [{ value: t, stacktrace: { frames: s } }]
    });
  }
  return i;
}
const yt = 1024, vn = "Breadcrumbs";
class J {
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = vn;
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = J.id;
  }
  /**
   * Options of the breadcrumbs integration.
   */
  // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.
  /**
   * @inheritDoc
   */
  constructor(t) {
    J.prototype.__init.call(this), this.options = u({
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0
    }, t);
  }
  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */
  setupOnce() {
    this.options.console && U("console", Es), this.options.dom && U("dom", ms(this.options.dom)), this.options.xhr && U("xhr", ys), this.options.fetch && U("fetch", Ss), this.options.history && U("history", bs);
  }
  /**
   * Adds a breadcrumb for Sentry events or transactions if this option is enabled.
   */
  addSentryBreadcrumb(t) {
    this.options.sentry && b().addBreadcrumb(
      {
        category: `sentry.${t.type === "transaction" ? "transaction" : "event"}`,
        event_id: t.event_id,
        level: t.level,
        message: A(t)
      },
      {
        event: t
      }
    );
  }
}
J.__initStatic();
function ms(e) {
  function t(n) {
    let r, i = typeof e == "object" ? e.serializeAttribute : void 0, s = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
    s && s > yt && ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn(
      `\`dom.maxStringLength\` cannot exceed ${yt}, but a value of ${s} was configured. Sentry will use ${yt} instead.`
    ), s = yt), typeof i == "string" && (i = [i]);
    try {
      const o = n.event;
      r = Ts(o) ? Mt(o.target, { keyAttrs: i, maxStringLength: s }) : Mt(o, { keyAttrs: i, maxStringLength: s });
    } catch (o) {
      r = "<unknown>";
    }
    r.length !== 0 && b().addBreadcrumb(
      {
        category: `ui.${n.name}`,
        message: r
      },
      {
        event: n.event,
        name: n.name,
        global: n.global
      }
    );
  }
  return t;
}
function Es(e) {
  for (let n = 0; n < e.args.length; n++)
    if (e.args[n] === "ref=Ref<") {
      e.args[n + 1] = "viewRef";
      break;
    }
  const t = {
    category: "console",
    data: {
      arguments: e.args,
      logger: "console"
    },
    level: fi(e.level),
    message: we(e.args, " ")
  };
  if (e.level === "assert")
    if (e.args[0] === !1)
      t.message = `Assertion failed: ${we(e.args.slice(1), " ") || "console.assert"}`, t.data.arguments = e.args.slice(1);
    else
      return;
  b().addBreadcrumb(t, {
    input: e.args,
    level: e.level
  });
}
function ys(e) {
  const { startTimestamp: t, endTimestamp: n } = e, r = e.xhr[nt];
  if (!t || !n || !r)
    return;
  const { method: i, url: s, status_code: o, body: a } = r, c = {
    method: i,
    url: s,
    status_code: o
  }, f = {
    xhr: e.xhr,
    input: a,
    startTimestamp: t,
    endTimestamp: n
  };
  b().addBreadcrumb(
    {
      category: "xhr",
      data: c,
      type: "http"
    },
    f
  );
}
function Ss(e) {
  const { startTimestamp: t, endTimestamp: n } = e;
  if (n && !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST"))
    if (e.error) {
      const r = e.fetchData, i = {
        data: e.error,
        input: e.args,
        startTimestamp: t,
        endTimestamp: n
      };
      b().addBreadcrumb(
        {
          category: "fetch",
          data: r,
          level: "error",
          type: "http"
        },
        i
      );
    } else {
      const r = S(u({}, e.fetchData), {
        status_code: e.response && e.response.status
      }), i = {
        input: e.args,
        response: e.response,
        startTimestamp: t,
        endTimestamp: n
      };
      b().addBreadcrumb(
        {
          category: "fetch",
          data: r,
          type: "http"
        },
        i
      );
    }
}
function bs(e) {
  let t = e.from, n = e.to;
  const r = Lt(h.location.href);
  let i = Lt(t);
  const s = Lt(n);
  i.path || (i = r), r.protocol === s.protocol && r.host === s.host && (n = s.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), b().addBreadcrumb({
    category: "navigation",
    data: {
      from: t,
      to: n
    }
  });
}
function Ts(e) {
  return e && !!e.target;
}
function Rs(e, {
  metadata: t,
  tunnel: n,
  dsn: r
}) {
  const i = u(u({
    event_id: e.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, t && t.sdk && {
    sdk: {
      name: t.sdk.name,
      version: t.sdk.version
    }
  }), !!n && !!r && { dsn: vt(r) }), s = ws(e);
  return ct(i, [s]);
}
function ws(e) {
  return [{
    type: "user_report"
  }, e];
}
class vs extends L {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  constructor(t) {
    const n = h.SENTRY_SDK_SOURCE || ei();
    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [
        {
          name: `${n}:@sentry/browser`,
          version: Rt
        }
      ],
      version: Rt
    }, super(t), t.sendClientReports && h.document && h.document.addEventListener("visibilitychange", () => {
      h.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  /**
   * @inheritDoc
   */
  eventFromException(t, n) {
    return hs(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(t, n = "info", r) {
    return gs(this._options.stackParser, t, n, r, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  sendEvent(t, n) {
    const r = this.getIntegrationById(vn);
    r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), super.sendEvent(t, n);
  }
  /**
   * Sends user feedback to Sentry.
   */
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = Rs(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this._sendEnvelope(n);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(t, n, r) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, n, r);
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log("No dsn provided, will not send outcomes");
      return;
    }
    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log("Sending outcomes:", t);
    const n = yi(t, this._options.tunnel && vt(this._dsn));
    this._sendEnvelope(n);
  }
}
let rt;
function Ns() {
  if (rt)
    return rt;
  if (Ht(h.fetch))
    return rt = h.fetch.bind(h);
  const e = h.document;
  let t = h.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      n.hidden = !0, e.head.appendChild(n);
      const r = n.contentWindow;
      r && r.fetch && (t = r.fetch), e.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
  return rt = t.bind(h);
}
function ks() {
  rt = void 0;
}
function Ds(e, t = Ns()) {
  let n = 0, r = 0;
  function i(s) {
    const o = s.body.length;
    n += o, r++;
    const a = u({
      body: s.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
      //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
      //   We will therefore only activate the flag when we're below that limit.
      // There is also a limit of requests that can be open at the same time, so we also limit this to 15
      // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
      keepalive: n <= 6e4 && r < 15
    }, e.fetchOptions);
    try {
      return t(e.url, a).then((c) => (n -= o, r--, {
        statusCode: c.status,
        headers: {
          "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": c.headers.get("Retry-After")
        }
      }));
    } catch (c) {
      return ks(), n -= o, r--, Tt(c);
    }
  }
  return Tn(e, i);
}
const Os = 4;
function Is(e) {
  function t(n) {
    return new w((r, i) => {
      const s = new XMLHttpRequest();
      s.onerror = i, s.onreadystatechange = () => {
        s.readyState === Os && r({
          statusCode: s.status,
          headers: {
            "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
            "retry-after": s.getResponseHeader("Retry-After")
          }
        });
      }, s.open("POST", e.url);
      for (const o in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, o) && s.setRequestHeader(o, e.headers[o]);
      s.send(n.body);
    });
  }
  return Tn(e, t);
}
const Ot = "?", xs = 30, Us = 40, As = 50;
function ue(e, t, n, r) {
  const i = {
    filename: e,
    function: t,
    in_app: !0
    // All browser frames are considered in_app
  };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
const Bs = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, js = /\((\S*)(?::(\d+))(?::(\d+))\)/, Ps = (e) => {
  const t = Bs.exec(e);
  if (t) {
    if (t[2] && t[2].indexOf("eval") === 0) {
      const s = js.exec(t[2]);
      s && (t[2] = s[1], t[3] = s[2], t[4] = s[3]);
    }
    const [r, i] = Nn(t[1] || Ot, t[2]);
    return ue(i, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
  }
}, $s = [xs, Ps], Ls = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Gs = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Ys = (e) => {
  const t = Ls.exec(e);
  if (t) {
    if (t[3] && t[3].indexOf(" > eval") > -1) {
      const s = Gs.exec(t[3]);
      s && (t[1] = t[1] || "eval", t[3] = s[1], t[4] = s[2], t[5] = "");
    }
    let r = t[3], i = t[1] || Ot;
    return [i, r] = Nn(i, r), ue(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
  }
}, Ms = [As, Ys], Fs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, Cs = (e) => {
  const t = Fs.exec(e);
  return t ? ue(t[2], t[1] || Ot, +t[3], t[4] ? +t[4] : void 0) : void 0;
}, Hs = [Us, Cs], qs = [$s, Ms, Hs], Ws = sn(...qs), Nn = (e, t) => {
  const n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
  return n || r ? [
    e.indexOf("@") !== -1 ? e.split("@")[0] : Ot,
    n ? `safari-extension:${t}` : `safari-web-extension:${t}`
  ] : [e, t];
};
class I {
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = I.id;
  }
  /** JSDoc */
  /**
   * Stores references functions to installing handlers. Will set to undefined
   * after they have been run so that they are not used twice.
   */
  __init2() {
    this._installFunc = {
      onerror: zs,
      onunhandledrejection: Ks
    };
  }
  /** JSDoc */
  constructor(t) {
    I.prototype.__init.call(this), I.prototype.__init2.call(this), this._options = u({
      onerror: !0,
      onunhandledrejection: !0
    }, t);
  }
  /**
   * @inheritDoc
   */
  setupOnce() {
    Error.stackTraceLimit = 50;
    const t = this._options;
    for (const n in t) {
      const r = this._installFunc[n];
      r && t[n] && (Js(n), r(), this._installFunc[n] = void 0);
    }
  }
}
I.__initStatic();
function zs() {
  U(
    "error",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e) => {
      const [t, n, r] = On();
      if (!t.getIntegration(I))
        return;
      const { msg: i, url: s, line: o, column: a, error: c } = e;
      if (Rn() || c && c.__sentry_own_request__)
        return;
      const f = c === void 0 && H(i) ? Vs(i, s, o, a) : kn(
        ce(n, c || i, void 0, r, !1),
        s,
        o,
        a
      );
      f.level = "error", Dn(t, c, f, "onerror");
    }
  );
}
function Ks() {
  U(
    "unhandledrejection",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e) => {
      const [t, n, r] = On();
      if (!t.getIntegration(I))
        return;
      let i = e;
      try {
        "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason);
      } catch (o) {
      }
      if (Rn() || i && i.__sentry_own_request__)
        return !0;
      const s = Ze(i) ? Xs(i) : ce(n, i, void 0, r, !0);
      s.level = "error", Dn(t, i, s, "onunhandledrejection");
    }
  );
}
function Xs(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
          value: `Non-Error promise rejection captured with value: ${String(e)}`
        }
      ]
    }
  };
}
function Vs(e, t, n, r) {
  const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let s = Je(e) ? e.message : e, o = "Error";
  const a = s.match(i);
  return a && (o = a[1], s = a[2]), kn({
    exception: {
      values: [
        {
          type: o,
          value: s
        }
      ]
    }
  }, t, n, r);
}
function kn(e, t, n, r) {
  const i = e.exception = e.exception || {}, s = i.values = i.values || [], o = s[0] = s[0] || {}, a = o.stacktrace = o.stacktrace || {}, c = a.frames = a.frames || [], f = isNaN(parseInt(r, 10)) ? void 0 : r, _ = isNaN(parseInt(n, 10)) ? void 0 : n, l = H(t) && t.length > 0 ? t : kr();
  return c.length === 0 && c.push({
    colno: f,
    filename: l,
    function: "?",
    in_app: !0,
    lineno: _
  }), e;
}
function Js(e) {
  (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.log(`Global Handler attached: ${e}`);
}
function Dn(e, t, n, r) {
  ot(n, {
    handled: !1,
    type: r
  }), e.captureEvent(n, {
    originalException: t
  });
}
function On() {
  const e = b(), t = e.getClient(), n = t && t.getOptions() || {
    stackParser: () => [],
    attachStacktrace: !1
  };
  return [e, n.stackParser, n.attachStacktrace];
}
const Zs = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload"
];
class Z {
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "TryCatch";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = Z.id;
  }
  /** JSDoc */
  /**
   * @inheritDoc
   */
  constructor(t) {
    Z.prototype.__init.call(this), this._options = u({
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0
    }, t);
  }
  /**
   * Wrap timer functions and event targets to catch errors
   * and provide better metadata.
   */
  setupOnce() {
    this._options.setTimeout && T(h, "setTimeout", Fe), this._options.setInterval && T(h, "setInterval", Fe), this._options.requestAnimationFrame && T(h, "requestAnimationFrame", Qs), this._options.XMLHttpRequest && "XMLHttpRequest" in h && T(XMLHttpRequest.prototype, "send", to);
    const t = this._options.eventTarget;
    t && (Array.isArray(t) ? t : Zs).forEach(eo);
  }
}
Z.__initStatic();
function Fe(e) {
  return function(...t) {
    const n = t[0];
    return t[0] = V(n, {
      mechanism: {
        data: { function: B(e) },
        handled: !0,
        type: "instrument"
      }
    }), e.apply(this, t);
  };
}
function Qs(e) {
  return function(t) {
    return e.apply(this, [
      V(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: B(e)
          },
          handled: !0,
          type: "instrument"
        }
      })
    ]);
  };
}
function to(e) {
  return function(...t) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((i) => {
      i in n && typeof n[i] == "function" && T(n, i, function(s) {
        const o = {
          mechanism: {
            data: {
              function: i,
              handler: B(s)
            },
            handled: !0,
            type: "instrument"
          }
        }, a = ie(s);
        return a && (o.mechanism.data.handler = B(a)), V(s, o);
      });
    }), e.apply(this, t);
  };
}
function eo(e) {
  const t = h, n = t[e] && t[e].prototype;
  !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (T(n, "addEventListener", function(r) {
    return function(i, s, o) {
      try {
        typeof s.handleEvent == "function" && (s.handleEvent = V(s.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: B(s),
              target: e
            },
            handled: !0,
            type: "instrument"
          }
        }));
      } catch (a) {
      }
      return r.apply(this, [
        i,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        V(s, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: B(s),
              target: e
            },
            handled: !0,
            type: "instrument"
          }
        }),
        o
      ]);
    };
  }), T(
    n,
    "removeEventListener",
    function(r) {
      return function(i, s, o) {
        const a = s;
        try {
          const c = a && a.__sentry_wrapped__;
          c && r.call(this, i, c, o);
        } catch (c) {
        }
        return r.call(this, i, a, o);
      };
    }
  ));
}
const no = "cause", ro = 5;
class M {
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = M.id;
  }
  /**
   * @inheritDoc
   */
  /**
   * @inheritDoc
   */
  /**
   * @inheritDoc
   */
  constructor(t = {}) {
    M.prototype.__init.call(this), this._key = t.key || no, this._limit = t.limit || ro;
  }
  /**
   * @inheritDoc
   */
  setupOnce() {
    const t = b().getClient();
    t && oe((n, r) => {
      const i = b().getIntegration(M);
      return i ? io(t.getOptions().stackParser, i._key, i._limit, n, r) : n;
    });
  }
}
M.__initStatic();
function io(e, t, n, r, i) {
  if (!r.exception || !r.exception.values || !i || !tt(i.originalException, Error))
    return r;
  const s = In(e, n, i.originalException, t);
  return r.exception.values = [...s, ...r.exception.values], r;
}
function In(e, t, n, r, i = []) {
  if (!tt(n[r], Error) || i.length + 1 >= t)
    return i;
  const s = wn(e, n[r]);
  return In(e, t, n[r], r, [s, ...i]);
}
class F {
  constructor() {
    F.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "HttpContext";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = F.id;
  }
  /**
   * @inheritDoc
   */
  setupOnce() {
    oe((t) => {
      if (b().getIntegration(F)) {
        if (!h.navigator && !h.location && !h.document)
          return t;
        const n = t.request && t.request.url || h.location && h.location.href, { referrer: r } = h.document || {}, { userAgent: i } = h.navigator || {}, s = u(u(u({}, t.request && t.request.headers), r && { Referer: r }), i && { "User-Agent": i }), o = S(u(u({}, t.request), n && { url: n }), { headers: s });
        return S(u({}, t), { request: o });
      }
      return t;
    });
  }
}
F.__initStatic();
class C {
  constructor() {
    C.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  static __initStatic() {
    this.id = "Dedupe";
  }
  /**
   * @inheritDoc
   */
  __init() {
    this.name = C.id;
  }
  /**
   * @inheritDoc
   */
  /**
   * @inheritDoc
   */
  setupOnce(t, n) {
    const r = (i) => {
      if (i.type)
        return i;
      const s = n().getIntegration(C);
      if (s) {
        try {
          if (so(i, s._previousEvent))
            return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("Event dropped due to being a duplicate of previously captured event."), null;
        } catch (o) {
          return s._previousEvent = i;
        }
        return s._previousEvent = i;
      }
      return i;
    };
    r.id = this.name, t(r);
  }
}
C.__initStatic();
function so(e, t) {
  return t ? !!(oo(e, t) || ao(e, t)) : !1;
}
function oo(e, t) {
  const n = e.message, r = t.message;
  return !(!n && !r || n && !r || !n && r || n !== r || !Un(e, t) || !xn(e, t));
}
function ao(e, t) {
  const n = Ce(t), r = Ce(e);
  return !(!n || !r || n.type !== r.type || n.value !== r.value || !Un(e, t) || !xn(e, t));
}
function xn(e, t) {
  let n = He(e), r = He(t);
  if (!n && !r)
    return !0;
  if (n && !r || !n && r || (n = n, r = r, r.length !== n.length))
    return !1;
  for (let i = 0; i < r.length; i++) {
    const s = r[i], o = n[i];
    if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function)
      return !1;
  }
  return !0;
}
function Un(e, t) {
  let n = e.fingerprint, r = t.fingerprint;
  if (!n && !r)
    return !0;
  if (n && !r || !n && r)
    return !1;
  n = n, r = r;
  try {
    return n.join("") === r.join("");
  } catch (i) {
    return !1;
  }
}
function Ce(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function He(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch (n) {
      return;
    }
}
const co = [
  new Y(),
  new X(),
  new Z(),
  new J(),
  new I(),
  new M(),
  new C(),
  new F()
];
function uo(e = {}) {
  e.defaultIntegrations === void 0 && (e.defaultIntegrations = co), e.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (e.release = __SENTRY_RELEASE__), h.SENTRY_RELEASE && h.SENTRY_RELEASE.id && (e.release = h.SENTRY_RELEASE.id)), e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), e.sendClientReports === void 0 && (e.sendClientReports = !0);
  const t = S(u({}, e), {
    stackParser: $r(e.stackParser || Ws),
    integrations: Mi(e),
    transport: e.transport || (on() ? Ds : Is)
  });
  Ji(vs, t), e.autoSessionTracking && fo();
}
function qe(e) {
  e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function fo() {
  if (typeof h.document == "undefined") {
    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && p.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
    return;
  }
  const e = b();
  e.captureSession && (qe(e), U("history", ({ from: t, to: n }) => {
    t === void 0 || t === n || qe(b());
  }));
}
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumbs: J,
  Dedupe: C,
  GlobalHandlers: I,
  HttpContext: F,
  LinkedErrors: M,
  TryCatch: Z
}, Symbol.toStringTag, { value: "Module" }));
let An = {};
h.Sentry && h.Sentry.Integrations && (An = h.Sentry.Integrations);
const _o = u(u(u({}, An), us), lo);
function We(e) {
  e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [
      {
        name: "npm:@sentry/react",
        version: Rt
      }
    ],
    version: Rt
  }, uo(e);
}
class po {
  constructor(t) {
    var n, r, i;
    this._dsn = (n = t == null ? void 0 : t.dsn) != null ? n : "", this._environment = (r = t == null ? void 0 : t.environment) != null ? r : "", this._transport = (i = t == null ? void 0 : t.transport) != null ? i : {}, this._initializeSentry();
  }
  warning(t) {
    this._sendToSentry("warning", t);
  }
  error(t) {
    this._sendToSentry("error", t);
  }
  critical(t) {
    this._sendToSentry("fatal", t);
  }
  setUser(t) {
    Pe(t);
  }
  clearUser() {
    Pe(null);
  }
  _initializeSentry() {
    const t = {
      dsn: this._dsn,
      environment: this._environment,
      integrations: [new _o.LinkedErrors()]
    };
    this._transport ? We(S(u({}, t), { transport: this._transport })) : We(t);
  }
  _sendToSentry(t, n) {
    En((r) => {
      r.setLevel(t);
      try {
        const i = this._extractErrorMetadata(n);
        Ke(i) || Object.keys(i).forEach((s) => r.setContext(s, i[s]));
      } catch (i) {
        Jt(i);
      }
      Jt(n);
    });
  }
  _extractErrorMetadata(t) {
    const n = {}, r = ["cause", "message", "name", "stack"], i = Object.getOwnPropertyNames(t).filter((s) => !r.includes(s)).reduce((s, o) => (s[o] = t[o], s), {});
    return n[t.constructor.name] = i, t.cause && t.cause instanceof Error ? u(u({}, n), this._extractErrorMetadata(t.cause)) : n;
  }
}
class ho extends Error {
  constructor(t) {
    super(`Could not create error reporter due unknown driver '${t}'`), this.name = "UnknownErrorReporterDriver";
  }
}
const Bn = _r(null), go = ({ children: e, reporter: t, user: n }) => (Ke(n) ? t.clearUser() : t.setUser(n), /* @__PURE__ */ ze(Bn.Provider, { value: t, children: e })), mo = (e) => {
  const { driver: t = "", config: n } = e;
  switch (t) {
    case "console":
      return new hr();
    case "dummy":
      return new gr();
    case "sentry":
      return new po(n);
    default:
      throw new ho(t);
  }
}, bo = (e) => {
  const {
    children: t,
    config: n,
    driver: r,
    user: i
  } = e, s = mo({ driver: r, config: n });
  return /* @__PURE__ */ ze(go, { reporter: s, user: i, children: t });
}, To = () => pr(Bn);
export {
  bo as ErrorReporter,
  bo as default,
  To as useErrorReporter
};
//# sourceMappingURL=index.es.js.map
