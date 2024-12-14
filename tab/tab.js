function C(e) {
  let t = [];
  return [(n) => {
    let i = e;
    e = n;
    let s = t;
    for (; s[2] && (s = s[2], s[0](n, i), n === e); ) ;
  }, (n) => {
    let i = t;
    for (; i[2]; ) i = i[2];
    return i = i[2] = [n, i], () => {
      i && (i[1][2] = i[2], i = 0);
    };
  }, () => e];
}
function Aa(e, t) {
  return Math.floor(
    Math.random() * (t - e + 1) + e
  );
}
function ft(e) {
  return Array.isArray(e);
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !ft(e);
}
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} };
je.exports;
var Nr;
function Ta() {
  return Nr || (Nr = 1, function(e, t) {
    var n = 200, i = "__lodash_hash_undefined__", s = 800, b = 16, u = 9007199254740991, p = "[object Arguments]", z = "[object Array]", E = "[object AsyncFunction]", k = "[object Boolean]", A = "[object Date]", q = "[object Error]", Q = "[object Function]", pr = "[object GeneratorFunction]", Vo = "[object Map]", Uo = "[object Number]", qo = "[object Null]", yr = "[object Object]", Go = "[object Proxy]", Ko = "[object RegExp]", Xo = "[object Set]", Yo = "[object String]", Jo = "[object Undefined]", Zo = "[object WeakMap]", Qo = "[object ArrayBuffer]", en = "[object DataView]", tn = "[object Float32Array]", rn = "[object Float64Array]", on = "[object Int8Array]", nn = "[object Int16Array]", an = "[object Int32Array]", sn = "[object Uint8Array]", ln = "[object Uint8ClampedArray]", cn = "[object Uint16Array]", dn = "[object Uint32Array]", bn = /[\\^$.*+?()[\]{}|]/g, un = /^\[object .+?Constructor\]$/, fn = /^(?:0|[1-9]\d*)$/, v = {};
    v[tn] = v[rn] = v[on] = v[nn] = v[an] = v[sn] = v[ln] = v[cn] = v[dn] = !0, v[p] = v[z] = v[Qo] = v[k] = v[en] = v[A] = v[q] = v[Q] = v[Vo] = v[Uo] = v[yr] = v[Ko] = v[Xo] = v[Yo] = v[Zo] = !1;
    var Sr = typeof at == "object" && at && at.Object === Object && at, gn = typeof self == "object" && self && self.Object === Object && self, ke = Sr || gn || Function("return this")(), vr = t && !t.nodeType && t, Ae = vr && !0 && e && !e.nodeType && e, xr = Ae && Ae.exports === vr, Pt = xr && Sr.process, $r = function() {
      try {
        var r = Ae && Ae.require && Ae.require("util").types;
        return r || Pt && Pt.binding && Pt.binding("util");
      } catch {
      }
    }(), _r = $r && $r.isTypedArray;
    function hn(r, o, a) {
      switch (a.length) {
        case 0:
          return r.call(o);
        case 1:
          return r.call(o, a[0]);
        case 2:
          return r.call(o, a[0], a[1]);
        case 3:
          return r.call(o, a[0], a[1], a[2]);
      }
      return r.apply(o, a);
    }
    function mn(r, o) {
      for (var a = -1, l = Array(r); ++a < r; )
        l[a] = o(a);
      return l;
    }
    function pn(r) {
      return function(o) {
        return r(o);
      };
    }
    function yn(r, o) {
      return r == null ? void 0 : r[o];
    }
    function Sn(r, o) {
      return function(a) {
        return r(o(a));
      };
    }
    var vn = Array.prototype, xn = Function.prototype, Je = Object.prototype, Tt = ke["__core-js_shared__"], Ze = xn.toString, G = Je.hasOwnProperty, wr = function() {
      var r = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
      return r ? "Symbol(src)_1." + r : "";
    }(), zr = Je.toString, $n = Ze.call(Object), _n = RegExp(
      "^" + Ze.call(G).replace(bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Qe = xr ? ke.Buffer : void 0, Cr = ke.Symbol, kr = ke.Uint8Array;
    Qe && Qe.allocUnsafe;
    var Ar = Sn(Object.getPrototypeOf, Object), Pr = Object.create, wn = Je.propertyIsEnumerable, zn = vn.splice, ee = Cr ? Cr.toStringTag : void 0, et = function() {
      try {
        var r = Mt(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {
      }
    }(), Cn = Qe ? Qe.isBuffer : void 0, Tr = Math.max, kn = Date.now, Br = Mt(ke, "Map"), Pe = Mt(Object, "create"), An = /* @__PURE__ */ function() {
      function r() {
      }
      return function(o) {
        if (!re(o))
          return {};
        if (Pr)
          return Pr(o);
        r.prototype = o;
        var a = new r();
        return r.prototype = void 0, a;
      };
    }();
    function te(r) {
      var o = -1, a = r == null ? 0 : r.length;
      for (this.clear(); ++o < a; ) {
        var l = r[o];
        this.set(l[0], l[1]);
      }
    }
    function Pn() {
      this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
    }
    function Tn(r) {
      var o = this.has(r) && delete this.__data__[r];
      return this.size -= o ? 1 : 0, o;
    }
    function Bn(r) {
      var o = this.__data__;
      if (Pe) {
        var a = o[r];
        return a === i ? void 0 : a;
      }
      return G.call(o, r) ? o[r] : void 0;
    }
    function Fn(r) {
      var o = this.__data__;
      return Pe ? o[r] !== void 0 : G.call(o, r);
    }
    function Mn(r, o) {
      var a = this.__data__;
      return this.size += this.has(r) ? 0 : 1, a[r] = Pe && o === void 0 ? i : o, this;
    }
    te.prototype.clear = Pn, te.prototype.delete = Tn, te.prototype.get = Bn, te.prototype.has = Fn, te.prototype.set = Mn;
    function H(r) {
      var o = -1, a = r == null ? 0 : r.length;
      for (this.clear(); ++o < a; ) {
        var l = r[o];
        this.set(l[0], l[1]);
      }
    }
    function En() {
      this.__data__ = [], this.size = 0;
    }
    function Dn(r) {
      var o = this.__data__, a = tt(o, r);
      if (a < 0)
        return !1;
      var l = o.length - 1;
      return a == l ? o.pop() : zn.call(o, a, 1), --this.size, !0;
    }
    function jn(r) {
      var o = this.__data__, a = tt(o, r);
      return a < 0 ? void 0 : o[a][1];
    }
    function In(r) {
      return tt(this.__data__, r) > -1;
    }
    function Rn(r, o) {
      var a = this.__data__, l = tt(a, r);
      return l < 0 ? (++this.size, a.push([r, o])) : a[l][1] = o, this;
    }
    H.prototype.clear = En, H.prototype.delete = Dn, H.prototype.get = jn, H.prototype.has = In, H.prototype.set = Rn;
    function ue(r) {
      var o = -1, a = r == null ? 0 : r.length;
      for (this.clear(); ++o < a; ) {
        var l = r[o];
        this.set(l[0], l[1]);
      }
    }
    function On() {
      this.size = 0, this.__data__ = {
        hash: new te(),
        map: new (Br || H)(),
        string: new te()
      };
    }
    function Hn(r) {
      var o = ot(this, r).delete(r);
      return this.size -= o ? 1 : 0, o;
    }
    function Wn(r) {
      return ot(this, r).get(r);
    }
    function Nn(r) {
      return ot(this, r).has(r);
    }
    function Ln(r, o) {
      var a = ot(this, r), l = a.size;
      return a.set(r, o), this.size += a.size == l ? 0 : 1, this;
    }
    ue.prototype.clear = On, ue.prototype.delete = Hn, ue.prototype.get = Wn, ue.prototype.has = Nn, ue.prototype.set = Ln;
    function fe(r) {
      var o = this.__data__ = new H(r);
      this.size = o.size;
    }
    function Vn() {
      this.__data__ = new H(), this.size = 0;
    }
    function Un(r) {
      var o = this.__data__, a = o.delete(r);
      return this.size = o.size, a;
    }
    function qn(r) {
      return this.__data__.get(r);
    }
    function Gn(r) {
      return this.__data__.has(r);
    }
    function Kn(r, o) {
      var a = this.__data__;
      if (a instanceof H) {
        var l = a.__data__;
        if (!Br || l.length < n - 1)
          return l.push([r, o]), this.size = ++a.size, this;
        a = this.__data__ = new ue(l);
      }
      return a.set(r, o), this.size = a.size, this;
    }
    fe.prototype.clear = Vn, fe.prototype.delete = Un, fe.prototype.get = qn, fe.prototype.has = Gn, fe.prototype.set = Kn;
    function Xn(r, o) {
      var a = jt(r), l = !a && Dt(r), f = !a && !l && jr(r), y = !a && !l && !f && Rr(r), x = a || l || f || y, g = x ? mn(r.length, String) : [], $ = g.length;
      for (var D in r)
        x && // Safari 9 has enumerable `arguments.length` in strict mode.
        (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        f && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        y && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
        Er(D, $)) || g.push(D);
      return g;
    }
    function Bt(r, o, a) {
      (a !== void 0 && !nt(r[o], a) || a === void 0 && !(o in r)) && Ft(r, o, a);
    }
    function Yn(r, o, a) {
      var l = r[o];
      (!(G.call(r, o) && nt(l, a)) || a === void 0 && !(o in r)) && Ft(r, o, a);
    }
    function tt(r, o) {
      for (var a = r.length; a--; )
        if (nt(r[a][0], o))
          return a;
      return -1;
    }
    function Ft(r, o, a) {
      o == "__proto__" && et ? et(r, o, {
        configurable: !0,
        enumerable: !0,
        value: a,
        writable: !0
      }) : r[o] = a;
    }
    var Jn = da();
    function rt(r) {
      return r == null ? r === void 0 ? Jo : qo : ee && ee in Object(r) ? ba(r) : pa(r);
    }
    function Fr(r) {
      return Te(r) && rt(r) == p;
    }
    function Zn(r) {
      if (!re(r) || ha(r))
        return !1;
      var o = Rt(r) ? _n : un;
      return o.test(xa(r));
    }
    function Qn(r) {
      return Te(r) && Ir(r.length) && !!v[rt(r)];
    }
    function ea(r) {
      if (!re(r))
        return ma(r);
      var o = Dr(r), a = [];
      for (var l in r)
        l == "constructor" && (o || !G.call(r, l)) || a.push(l);
      return a;
    }
    function Mr(r, o, a, l, f) {
      r !== o && Jn(o, function(y, x) {
        if (f || (f = new fe()), re(y))
          ta(r, o, x, a, Mr, l, f);
        else {
          var g = l ? l(Et(r, x), y, x + "", r, o, f) : void 0;
          g === void 0 && (g = y), Bt(r, x, g);
        }
      }, Or);
    }
    function ta(r, o, a, l, f, y, x) {
      var g = Et(r, a), $ = Et(o, a), D = x.get($);
      if (D) {
        Bt(r, a, D);
        return;
      }
      var F = y ? y(g, $, a + "", r, o, x) : void 0, Be = F === void 0;
      if (Be) {
        var Ot = jt($), Ht = !Ot && jr($), Wr = !Ot && !Ht && Rr($);
        F = $, Ot || Ht || Wr ? jt(g) ? F = g : $a(g) ? F = sa(g) : Ht ? (Be = !1, F = na($)) : Wr ? (Be = !1, F = ia($)) : F = [] : _a($) || Dt($) ? (F = g, Dt(g) ? F = wa(g) : (!re(g) || Rt(g)) && (F = ua($))) : Be = !1;
      }
      Be && (x.set($, F), f(F, $, l, y, x), x.delete($)), Bt(r, a, F);
    }
    function ra(r, o) {
      return Sa(ya(r, o, Hr), r + "");
    }
    var oa = et ? function(r, o) {
      return et(r, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Ca(o),
        writable: !0
      });
    } : Hr;
    function na(r, o) {
      return r.slice();
    }
    function aa(r) {
      var o = new r.constructor(r.byteLength);
      return new kr(o).set(new kr(r)), o;
    }
    function ia(r, o) {
      var a = aa(r.buffer);
      return new r.constructor(a, r.byteOffset, r.length);
    }
    function sa(r, o) {
      var a = -1, l = r.length;
      for (o || (o = Array(l)); ++a < l; )
        o[a] = r[a];
      return o;
    }
    function la(r, o, a, l) {
      var f = !a;
      a || (a = {});
      for (var y = -1, x = o.length; ++y < x; ) {
        var g = o[y], $ = void 0;
        $ === void 0 && ($ = r[g]), f ? Ft(a, g, $) : Yn(a, g, $);
      }
      return a;
    }
    function ca(r) {
      return ra(function(o, a) {
        var l = -1, f = a.length, y = f > 1 ? a[f - 1] : void 0, x = f > 2 ? a[2] : void 0;
        for (y = r.length > 3 && typeof y == "function" ? (f--, y) : void 0, x && fa(a[0], a[1], x) && (y = f < 3 ? void 0 : y, f = 1), o = Object(o); ++l < f; ) {
          var g = a[l];
          g && r(o, g, l, y);
        }
        return o;
      });
    }
    function da(r) {
      return function(o, a, l) {
        for (var f = -1, y = Object(o), x = l(o), g = x.length; g--; ) {
          var $ = x[++f];
          if (a(y[$], $, y) === !1)
            break;
        }
        return o;
      };
    }
    function ot(r, o) {
      var a = r.__data__;
      return ga(o) ? a[typeof o == "string" ? "string" : "hash"] : a.map;
    }
    function Mt(r, o) {
      var a = yn(r, o);
      return Zn(a) ? a : void 0;
    }
    function ba(r) {
      var o = G.call(r, ee), a = r[ee];
      try {
        r[ee] = void 0;
        var l = !0;
      } catch {
      }
      var f = zr.call(r);
      return l && (o ? r[ee] = a : delete r[ee]), f;
    }
    function ua(r) {
      return typeof r.constructor == "function" && !Dr(r) ? An(Ar(r)) : {};
    }
    function Er(r, o) {
      var a = typeof r;
      return o = o ?? u, !!o && (a == "number" || a != "symbol" && fn.test(r)) && r > -1 && r % 1 == 0 && r < o;
    }
    function fa(r, o, a) {
      if (!re(a))
        return !1;
      var l = typeof o;
      return (l == "number" ? It(a) && Er(o, a.length) : l == "string" && o in a) ? nt(a[o], r) : !1;
    }
    function ga(r) {
      var o = typeof r;
      return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
    }
    function ha(r) {
      return !!wr && wr in r;
    }
    function Dr(r) {
      var o = r && r.constructor, a = typeof o == "function" && o.prototype || Je;
      return r === a;
    }
    function ma(r) {
      var o = [];
      if (r != null)
        for (var a in Object(r))
          o.push(a);
      return o;
    }
    function pa(r) {
      return zr.call(r);
    }
    function ya(r, o, a) {
      return o = Tr(o === void 0 ? r.length - 1 : o, 0), function() {
        for (var l = arguments, f = -1, y = Tr(l.length - o, 0), x = Array(y); ++f < y; )
          x[f] = l[o + f];
        f = -1;
        for (var g = Array(o + 1); ++f < o; )
          g[f] = l[f];
        return g[o] = a(x), hn(r, this, g);
      };
    }
    function Et(r, o) {
      if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__")
        return r[o];
    }
    var Sa = va(oa);
    function va(r) {
      var o = 0, a = 0;
      return function() {
        var l = kn(), f = b - (l - a);
        if (a = l, f > 0) {
          if (++o >= s)
            return arguments[0];
        } else
          o = 0;
        return r.apply(void 0, arguments);
      };
    }
    function xa(r) {
      if (r != null) {
        try {
          return Ze.call(r);
        } catch {
        }
        try {
          return r + "";
        } catch {
        }
      }
      return "";
    }
    function nt(r, o) {
      return r === o || r !== r && o !== o;
    }
    var Dt = Fr(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Fr : function(r) {
      return Te(r) && G.call(r, "callee") && !wn.call(r, "callee");
    }, jt = Array.isArray;
    function It(r) {
      return r != null && Ir(r.length) && !Rt(r);
    }
    function $a(r) {
      return Te(r) && It(r);
    }
    var jr = Cn || ka;
    function Rt(r) {
      if (!re(r))
        return !1;
      var o = rt(r);
      return o == Q || o == pr || o == E || o == Go;
    }
    function Ir(r) {
      return typeof r == "number" && r > -1 && r % 1 == 0 && r <= u;
    }
    function re(r) {
      var o = typeof r;
      return r != null && (o == "object" || o == "function");
    }
    function Te(r) {
      return r != null && typeof r == "object";
    }
    function _a(r) {
      if (!Te(r) || rt(r) != yr)
        return !1;
      var o = Ar(r);
      if (o === null)
        return !0;
      var a = G.call(o, "constructor") && o.constructor;
      return typeof a == "function" && a instanceof a && Ze.call(a) == $n;
    }
    var Rr = _r ? pn(_r) : Qn;
    function wa(r) {
      return la(r, Or(r));
    }
    function Or(r) {
      return It(r) ? Xn(r) : ea(r);
    }
    var za = ca(function(r, o, a, l) {
      Mr(r, o, a, l);
    });
    function Ca(r) {
      return function() {
        return r;
      };
    }
    function Hr(r) {
      return r;
    }
    function ka() {
      return !1;
    }
    e.exports = za;
  }(je, je.exports)), je.exports;
}
var Ba = Ta();
const zo = /* @__PURE__ */ Pa(Ba);
function S(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Co(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
const Ct = (e, ...t) => t.map(Co).join(` ${e} `).replace(/calc/g, ""), Lr = (...e) => `calc(${Ct("+", ...e)})`, Vr = (...e) => `calc(${Ct("-", ...e)})`, ar = (...e) => `calc(${Ct("*", ...e)})`, Ur = (...e) => `calc(${Ct("/", ...e)})`, qr = (e) => {
  const t = Co(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ar(t, -1);
}, oe = Object.assign(
  (e) => ({
    add: (...t) => oe(Lr(e, ...t)),
    subtract: (...t) => oe(Vr(e, ...t)),
    multiply: (...t) => oe(ar(e, ...t)),
    divide: (...t) => oe(Ur(e, ...t)),
    negate: () => oe(qr(e)),
    toString: () => e.toString()
  }),
  {
    add: Lr,
    subtract: Vr,
    multiply: ar,
    divide: Ur,
    negate: qr
  }
);
function Fa(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ma(e) {
  const t = Fa(e.toString());
  return Da(Ea(t));
}
function Ea(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Da(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function ja(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Ia(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Ra(e, t = "") {
  return Ma(`--${ja(e, t)}`);
}
function d(e, t, n) {
  const i = Ra(e, n);
  return {
    variable: i,
    reference: Ia(i, t)
  };
}
function Oa(e, t) {
  const n = {};
  for (const i of t) {
    if (Array.isArray(i)) {
      const [s, b] = i;
      n[s] = d(`${e}-${s}`, b);
      continue;
    }
    n[i] = d(`${e}-${i}`);
  }
  return n;
}
function m(e, t = {}) {
  let n = !1;
  function i() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function s(...k) {
    i();
    for (const A of k)
      t[A] = z(A);
    return m(e, t);
  }
  function b(...k) {
    for (const A of k)
      A in t || (t[A] = z(A));
    return m(e, t);
  }
  function u() {
    return Object.fromEntries(
      Object.entries(t).map(([A, q]) => [A, q.selector])
    );
  }
  function p() {
    return Object.fromEntries(
      Object.entries(t).map(([A, q]) => [A, q.className])
    );
  }
  function z(k) {
    const Q = `chakra-${(["container", "root"].includes(k ?? "") ? [e] : [e, k]).filter(Boolean).join("__")}`;
    return {
      className: Q,
      selector: `.${Q}`,
      toString: () => k
    };
  }
  return {
    parts: s,
    toPart: z,
    extend: b,
    selectors: u,
    classnames: p,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
const Ha = m("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
), Wa = m("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
), Na = m("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
), La = m("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
m("button").parts();
const Va = m("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
m("progress").parts(
  "track",
  "filledTrack",
  "label"
);
const Ua = m("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), qa = m("editable").parts(
  "preview",
  "input",
  "textarea"
), Ga = m("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), Ka = m("formError").parts("text", "icon"), Xa = m("input").parts(
  "addon",
  "field",
  "element",
  "group"
), Ya = m("list").parts("container", "item", "icon"), Ja = m("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
), Za = m("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), Qa = m("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
m("pininput").parts("field");
const ei = m("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
), ti = m("progress").parts(
  "label",
  "filledTrack",
  "track"
), ri = m("radio").parts(
  "container",
  "control",
  "label"
), oi = m("select").parts("field", "icon"), ni = m("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), ai = m("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), ii = m("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), si = m("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), li = m("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), ci = m("tag").parts(
  "container",
  "label",
  "closeButton"
), di = m("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
m("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: bi, defineMultiStyleConfig: ui } = S(Ha.keys), fi = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, gi = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, hi = {
  pt: "2",
  px: "4",
  pb: "5"
}, mi = {
  fontSize: "1.25em"
}, pi = bi({
  container: fi,
  button: gi,
  panel: hi,
  icon: mi
}), yi = ui({ baseStyle: pi });
function ae(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class Si extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ie = Si;
function ur(e) {
  if (typeof e != "string") throw new Ie(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = ki.test(e) ? $i(e) : e;
  const n = _i.exec(t);
  if (n) {
    const u = Array.from(n).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(Ge(p, 2), 16)), parseInt(Ge(u[3] || "f", 2), 16) / 255];
  }
  const i = wi.exec(t);
  if (i) {
    const u = Array.from(i).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(p, 16)), parseInt(u[3] || "ff", 16) / 255];
  }
  const s = zi.exec(t);
  if (s) {
    const u = Array.from(s).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(p, 10)), parseFloat(u[3] || "1")];
  }
  const b = Ci.exec(t);
  if (b) {
    const [u, p, z, E] = Array.from(b).slice(1).map(parseFloat);
    if (ae(0, 100, p) !== p) throw new Ie(e);
    if (ae(0, 100, z) !== z) throw new Ie(e);
    return [...Ai(u, p, z), Number.isNaN(E) ? 1 : E];
  }
  throw new Ie(e);
}
function vi(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Gr = (e) => parseInt(e.replace(/_/g, ""), 36), xi = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Gr(t.substring(0, 3)), i = Gr(t.substring(3)).toString(16);
  let s = "";
  for (let b = 0; b < 6 - i.length; b++)
    s += "0";
  return e[n] = `${s}${i}`, e;
}, {});
function $i(e) {
  const t = e.toLowerCase().trim(), n = xi[vi(t)];
  if (!n) throw new Ie(e);
  return `#${n}`;
}
const Ge = (e, t) => Array.from(Array(t)).map(() => e).join(""), _i = new RegExp(`^#${Ge("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), wi = new RegExp(`^#${Ge("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), zi = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ge(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Ci = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, ki = /^[a-z]+$/i, Kr = (e) => Math.round(e * 255), Ai = (e, t, n) => {
  let i = n / 100;
  if (t === 0)
    return [i, i, i].map(Kr);
  const s = (e % 360 + 360) % 360 / 60, b = (1 - Math.abs(2 * i - 1)) * (t / 100), u = b * (1 - Math.abs(s % 2 - 1));
  let p = 0, z = 0, E = 0;
  s >= 0 && s < 1 ? (p = b, z = u) : s >= 1 && s < 2 ? (p = u, z = b) : s >= 2 && s < 3 ? (z = b, E = u) : s >= 3 && s < 4 ? (z = u, E = b) : s >= 4 && s < 5 ? (p = u, E = b) : s >= 5 && s < 6 && (p = b, E = u);
  const k = i - b / 2, A = p + k, q = z + k, Q = E + k;
  return [A, q, Q].map(Kr);
};
function Pi(e, t, n, i) {
  return `rgba(${ae(0, 255, e).toFixed()}, ${ae(0, 255, t).toFixed()}, ${ae(0, 255, n).toFixed()}, ${parseFloat(ae(0, 1, i).toFixed(3))})`;
}
function Ti(e, t) {
  const [n, i, s, b] = ur(e);
  return Pi(n, i, s, b - t);
}
function Bi(e) {
  const [t, n, i, s] = ur(e);
  let b = (u) => {
    const p = ae(0, 255, u).toString(16);
    return p.length === 1 ? `0${p}` : p;
  };
  return `#${b(t)}${b(n)}${b(i)}${s < 1 ? b(Math.round(s * 255)) : ""}`;
}
const Fi = (e) => Object.keys(e).length === 0;
function Mi(e, t, n, i, s) {
  for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++)
    e = e ? e[t[i]] : s;
  return e === s ? n : e;
}
const P = (e, t, n) => {
  const i = Mi(e, `colors.${t}`, t);
  try {
    return Bi(i), i;
  } catch {
    return "#000000";
  }
}, Ei = (e) => {
  const [t, n, i] = ur(e);
  return (t * 299 + n * 587 + i * 114) / 1e3;
}, Di = (e) => (t) => {
  const n = P(t, e);
  return Ei(n) < 128 ? "dark" : "light";
}, ji = (e) => (t) => Di(e)(t) === "dark", ze = (e, t) => (n) => {
  const i = P(n, e);
  return Ti(i, 1 - t);
};
function Xr(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
const Ii = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function Ri(e) {
  const t = Ii();
  return !e || Fi(e) ? t : e.string && e.colors ? Hi(e.string, e.colors) : e.string && !e.colors ? Oi(e.string) : e.colors && !e.string ? Wi(e.colors) : t;
}
function Oi(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let i = 0; i < e.length; i += 1)
    t = e.charCodeAt(i) + ((t << 5) - t), t = t & t;
  let n = "#";
  for (let i = 0; i < 3; i += 1) {
    const s = t >> i * 8 & 255;
    n += `00${s.toString(16)}`.substr(-2);
  }
  return n;
}
function Hi(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let i = 0; i < e.length; i += 1)
    n = e.charCodeAt(i) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function Wi(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function c(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function fr(e) {
  const { orientation: t, vertical: n, horizontal: i } = e;
  return t ? t === "vertical" ? n : i : {};
}
function ko(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
const kt = (e, ...t) => t.map(ko).join(` ${e} `).replace(/calc/g, ""), Yr = (...e) => `calc(${kt("+", ...e)})`, Jr = (...e) => `calc(${kt("-", ...e)})`, ir = (...e) => `calc(${kt("*", ...e)})`, Zr = (...e) => `calc(${kt("/", ...e)})`, Qr = (e) => {
  const t = ko(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ir(t, -1);
}, W = Object.assign(
  (e) => ({
    add: (...t) => W(Yr(e, ...t)),
    subtract: (...t) => W(Jr(e, ...t)),
    multiply: (...t) => W(ir(e, ...t)),
    divide: (...t) => W(Zr(e, ...t)),
    negate: () => W(Qr(e)),
    toString: () => e.toString()
  }),
  {
    add: Yr,
    subtract: Jr,
    multiply: ir,
    divide: Zr,
    negate: Qr
  }
);
function Ni(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function Li(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ao(e) {
  const t = Li(e.toString());
  return t.includes("\\.") ? e : Ni(e) ? t.replace(".", "\\.") : e;
}
function Vi(e, t = "") {
  return [t, Ao(e)].filter(Boolean).join("-");
}
function Ui(e, t) {
  return `var(${Ao(e)}${t ? `, ${t}` : ""})`;
}
function qi(e, t = "") {
  return `--${Vi(e, t)}`;
}
function w(e, t) {
  const n = qi(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: Ui(n, Gi(t == null ? void 0 : t.fallback))
  };
}
function Gi(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: Ye, defineMultiStyleConfig: Ki } = S(Wa.keys), M = d("alert-fg"), U = d("alert-bg"), Xi = Ye({
  container: {
    bg: U.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: M.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: M.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function gr(e) {
  const { theme: t, colorScheme: n } = e, i = ze(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: i
  };
}
const Yi = Ye((e) => {
  const { colorScheme: t } = e, n = gr(e);
  return {
    container: {
      [M.variable]: `colors.${t}.600`,
      [U.variable]: n.light,
      _dark: {
        [M.variable]: `colors.${t}.200`,
        [U.variable]: n.dark
      }
    }
  };
}), Ji = Ye((e) => {
  const { colorScheme: t } = e, n = gr(e);
  return {
    container: {
      [M.variable]: `colors.${t}.600`,
      [U.variable]: n.light,
      _dark: {
        [M.variable]: `colors.${t}.200`,
        [U.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: M.reference
    }
  };
}), Zi = Ye((e) => {
  const { colorScheme: t } = e, n = gr(e);
  return {
    container: {
      [M.variable]: `colors.${t}.600`,
      [U.variable]: n.light,
      _dark: {
        [M.variable]: `colors.${t}.200`,
        [U.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: M.reference
    }
  };
}), Qi = Ye((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [M.variable]: "colors.white",
      [U.variable]: `colors.${t}.600`,
      _dark: {
        [M.variable]: "colors.gray.900",
        [U.variable]: `colors.${t}.200`
      },
      color: M.reference
    }
  };
}), es = {
  subtle: Yi,
  "left-accent": Ji,
  "top-accent": Zi,
  solid: Qi
}, ts = Ki({
  baseStyle: Xi,
  variants: es,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), Po = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, rs = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, os = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, To = {
  ...Po,
  ...rs,
  container: os
}, ns = (e) => typeof e == "function";
function T(e, ...t) {
  return ns(e) ? e(...t) : e;
}
const { definePartsStyle: Bo, defineMultiStyleConfig: as } = S(Na.keys), xe = d("avatar-border-color"), Ne = d("avatar-bg"), Ke = d("avatar-font-size"), Ce = d("avatar-size"), is = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: xe.reference,
  [xe.variable]: "white",
  _dark: {
    [xe.variable]: "colors.gray.800"
  }
}, ss = {
  bg: Ne.reference,
  fontSize: Ke.reference,
  width: Ce.reference,
  height: Ce.reference,
  lineHeight: "1",
  [Ne.variable]: "colors.gray.200",
  _dark: {
    [Ne.variable]: "colors.whiteAlpha.400"
  }
}, ls = (e) => {
  const { name: t, theme: n } = e, i = t ? Ri({ string: t }) : "colors.gray.400", s = ji(i)(n);
  let b = "white";
  return s || (b = "gray.800"), {
    bg: Ne.reference,
    fontSize: Ke.reference,
    color: b,
    borderColor: xe.reference,
    verticalAlign: "top",
    width: Ce.reference,
    height: Ce.reference,
    "&:not([data-loaded])": {
      [Ne.variable]: i
    },
    [xe.variable]: "colors.white",
    _dark: {
      [xe.variable]: "colors.gray.800"
    }
  };
}, cs = {
  fontSize: Ke.reference,
  lineHeight: "1"
}, ds = Bo((e) => ({
  badge: T(is, e),
  excessLabel: T(ss, e),
  container: T(ls, e),
  label: cs
}));
function K(e) {
  const t = e !== "100%" ? To[e] : void 0;
  return Bo({
    container: {
      [Ce.variable]: t ?? e,
      [Ke.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Ce.variable]: t ?? e,
      [Ke.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
const bs = {
  "2xs": K(4),
  xs: K(6),
  sm: K(8),
  md: K(12),
  lg: K(16),
  xl: K(24),
  "2xl": K(32),
  full: K("100%")
}, us = as({
  baseStyle: ds,
  sizes: bs,
  defaultProps: {
    size: "md"
  }
}), _ = Oa("badge", ["bg", "color", "shadow"]), fs = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: _.bg.reference,
  color: _.color.reference,
  boxShadow: _.shadow.reference
}, gs = (e) => {
  const { colorScheme: t, theme: n } = e, i = ze(`${t}.500`, 0.6)(n);
  return {
    [_.bg.variable]: `colors.${t}.500`,
    [_.color.variable]: "colors.white",
    _dark: {
      [_.bg.variable]: i,
      [_.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, hs = (e) => {
  const { colorScheme: t, theme: n } = e, i = ze(`${t}.200`, 0.16)(n);
  return {
    [_.bg.variable]: `colors.${t}.100`,
    [_.color.variable]: `colors.${t}.800`,
    _dark: {
      [_.bg.variable]: i,
      [_.color.variable]: `colors.${t}.200`
    }
  };
}, ms = (e) => {
  const { colorScheme: t, theme: n } = e, i = ze(`${t}.200`, 0.8)(n);
  return {
    [_.color.variable]: `colors.${t}.500`,
    _dark: {
      [_.color.variable]: i
    },
    [_.shadow.variable]: `inset 0 0 0px 1px ${_.color.reference}`
  };
}, ps = {
  solid: gs,
  subtle: hs,
  outline: ms
}, Le = {
  baseStyle: fs,
  variants: ps,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: ys, definePartsStyle: Ss } = S(La.keys), Wt = d("breadcrumb-link-decor"), vs = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Wt.reference,
  [Wt.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Wt.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, xs = Ss({
  link: vs
}), $s = ys({
  baseStyle: xs
}), _s = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, Fo = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: c("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: c("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: c("gray.200", "whiteAlpha.300")(e) }
    };
  const i = ze(`${t}.200`, 0.12)(n), s = ze(`${t}.200`, 0.24)(n);
  return {
    color: c(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: c(`${t}.50`, i)(e)
    },
    _active: {
      bg: c(`${t}.100`, s)(e)
    }
  };
}, ws = (e) => {
  const { colorScheme: t } = e, n = c("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...T(Fo, e)
  };
}, zs = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, Cs = (e) => {
  const { colorScheme: t } = e;
  if (t === "gray") {
    const p = c("gray.100", "whiteAlpha.200")(e);
    return {
      bg: p,
      color: c("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: c("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: p
        }
      },
      _active: { bg: c("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${t}.500`,
    color: i = "white",
    hoverBg: s = `${t}.600`,
    activeBg: b = `${t}.700`
  } = zs[t] ?? {}, u = c(n, `${t}.200`)(e);
  return {
    bg: u,
    color: c(i, "gray.800")(e),
    _hover: {
      bg: c(s, `${t}.300`)(e),
      _disabled: {
        bg: u
      }
    },
    _active: { bg: c(b, `${t}.400`)(e) }
  };
}, ks = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: c(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: c(`${t}.700`, `${t}.500`)(e)
    }
  };
}, As = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Ps = {
  ghost: Fo,
  outline: ws,
  solid: Cs,
  link: ks,
  unstyled: As
}, Ts = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, Bs = {
  baseStyle: _s,
  variants: Ps,
  sizes: Ts,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: ie, defineMultiStyleConfig: Fs } = S(di.keys), _t = d("card-bg"), V = d("card-padding"), Mo = d("card-shadow"), gt = d("card-radius"), Eo = d("card-border-width", "0"), Do = d("card-border-color"), Ms = ie({
  container: {
    [_t.variable]: "colors.chakra-body-bg",
    backgroundColor: _t.reference,
    boxShadow: Mo.reference,
    borderRadius: gt.reference,
    color: "chakra-body-text",
    borderWidth: Eo.reference,
    borderColor: Do.reference
  },
  body: {
    padding: V.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: V.reference
  },
  footer: {
    padding: V.reference
  }
}), Es = {
  sm: ie({
    container: {
      [gt.variable]: "radii.base",
      [V.variable]: "space.3"
    }
  }),
  md: ie({
    container: {
      [gt.variable]: "radii.md",
      [V.variable]: "space.5"
    }
  }),
  lg: ie({
    container: {
      [gt.variable]: "radii.xl",
      [V.variable]: "space.7"
    }
  })
}, Ds = {
  elevated: ie({
    container: {
      [Mo.variable]: "shadows.base",
      _dark: {
        [_t.variable]: "colors.gray.700"
      }
    }
  }),
  outline: ie({
    container: {
      [Eo.variable]: "1px",
      [Do.variable]: "colors.chakra-border-color"
    }
  }),
  filled: ie({
    container: {
      [_t.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [V.variable]: 0
    },
    header: {
      [V.variable]: 0
    },
    footer: {
      [V.variable]: 0
    }
  }
}, js = Fs({
  baseStyle: Ms,
  variants: Ds,
  sizes: Es,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), { definePartsStyle: ht, defineMultiStyleConfig: Is } = S(Va.keys), Ve = d("checkbox-size"), Rs = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Ve.reference,
    h: Ve.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: c(`${t}.500`, `${t}.200`)(e),
      borderColor: c(`${t}.500`, `${t}.200`)(e),
      color: c("white", "gray.900")(e),
      _hover: {
        bg: c(`${t}.600`, `${t}.300`)(e),
        borderColor: c(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: c("gray.200", "transparent")(e),
        bg: c("gray.200", "whiteAlpha.300")(e),
        color: c("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: c(`${t}.500`, `${t}.200`)(e),
      borderColor: c(`${t}.500`, `${t}.200`)(e),
      color: c("white", "gray.900")(e)
    },
    _disabled: {
      bg: c("gray.100", "whiteAlpha.100")(e),
      borderColor: c("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: c("red.500", "red.300")(e)
    }
  };
}, Os = {
  _disabled: { cursor: "not-allowed" }
}, Hs = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Ws = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Ns = ht((e) => ({
  icon: Ws,
  container: Os,
  control: T(Rs, e),
  label: Hs
})), Ls = {
  sm: ht({
    control: { [Ve.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ht({
    control: { [Ve.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ht({
    control: { [Ve.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, J = Is({
  baseStyle: Ns,
  sizes: Ls,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ue = w("close-button-size"), Fe = w("close-button-bg"), Vs = {
  w: [Ue.reference],
  h: [Ue.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Fe.variable]: "colors.blackAlpha.100",
    _dark: {
      [Fe.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Fe.variable]: "colors.blackAlpha.200",
    _dark: {
      [Fe.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Fe.reference
}, Us = {
  lg: {
    [Ue.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ue.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ue.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, qs = {
  baseStyle: Vs,
  sizes: Us,
  defaultProps: {
    size: "md"
  }
}, { variants: Gs, defaultProps: Ks } = Le, Xs = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: _.bg.reference,
  color: _.color.reference,
  boxShadow: _.shadow.reference
}, Ys = {
  baseStyle: Xs,
  variants: Gs,
  defaultProps: Ks
}, Js = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Zs = {
  baseStyle: Js
}, Qs = {
  opacity: 0.6,
  borderColor: "inherit"
}, el = {
  borderStyle: "solid"
}, tl = {
  borderStyle: "dashed"
}, rl = {
  solid: el,
  dashed: tl
}, ol = {
  baseStyle: Qs,
  variants: rl,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: sr, defineMultiStyleConfig: nl } = S(Ua.keys), Nt = d("drawer-bg"), Lt = d("drawer-box-shadow");
function ge(e) {
  return sr(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
const al = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, il = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, sl = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Nt.variable]: "colors.white",
    [Lt.variable]: "shadows.lg",
    _dark: {
      [Nt.variable]: "colors.gray.700",
      [Lt.variable]: "shadows.dark-lg"
    },
    bg: Nt.reference,
    boxShadow: Lt.reference
  };
}, ll = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, cl = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, dl = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, bl = {
  px: "6",
  py: "4"
}, ul = sr((e) => ({
  overlay: al,
  dialogContainer: il,
  dialog: T(sl, e),
  header: ll,
  closeButton: cl,
  body: dl,
  footer: bl
})), fl = {
  xs: ge("xs"),
  sm: ge("md"),
  md: ge("lg"),
  lg: ge("2xl"),
  xl: ge("4xl"),
  full: ge("full")
}, gl = nl({
  baseStyle: ul,
  sizes: fl,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: hl, defineMultiStyleConfig: ml } = S(qa.keys), pl = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, yl = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Sl = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, vl = hl({
  preview: pl,
  input: yl,
  textarea: Sl
}), xl = ml({
  baseStyle: vl
}), { definePartsStyle: $l, defineMultiStyleConfig: _l } = S(Ga.keys), $e = d("form-control-color"), wl = {
  marginStart: "1",
  [$e.variable]: "colors.red.500",
  _dark: {
    [$e.variable]: "colors.red.300"
  },
  color: $e.reference
}, zl = {
  mt: "2",
  [$e.variable]: "colors.gray.600",
  _dark: {
    [$e.variable]: "colors.whiteAlpha.600"
  },
  color: $e.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, Cl = $l({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: wl,
  helperText: zl
}), kl = _l({
  baseStyle: Cl
}), { definePartsStyle: Al, defineMultiStyleConfig: Pl } = S(Ka.keys), _e = d("form-error-color"), Tl = {
  [_e.variable]: "colors.red.500",
  _dark: {
    [_e.variable]: "colors.red.300"
  },
  color: _e.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, Bl = {
  marginEnd: "0.5em",
  [_e.variable]: "colors.red.500",
  _dark: {
    [_e.variable]: "colors.red.300"
  },
  color: _e.reference
}, Fl = Al({
  text: Tl,
  icon: Bl
}), Ml = Pl({
  baseStyle: Fl
}), El = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, Dl = {
  baseStyle: El
}, jl = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Il = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, Rl = {
  baseStyle: jl,
  sizes: Il,
  defaultProps: {
    size: "xl"
  }
}, { definePartsStyle: L, defineMultiStyleConfig: Ol } = S(Xa.keys), he = d("input-height"), me = d("input-font-size"), pe = d("input-padding"), ye = d("input-border-radius"), Hl = L({
  addon: {
    height: he.reference,
    fontSize: me.reference,
    px: pe.reference,
    borderRadius: ye.reference
  },
  field: {
    width: "100%",
    height: he.reference,
    fontSize: me.reference,
    px: pe.reference,
    borderRadius: ye.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), X = {
  lg: {
    [me.variable]: "fontSizes.lg",
    [pe.variable]: "space.4",
    [ye.variable]: "radii.md",
    [he.variable]: "sizes.12"
  },
  md: {
    [me.variable]: "fontSizes.md",
    [pe.variable]: "space.4",
    [ye.variable]: "radii.md",
    [he.variable]: "sizes.10"
  },
  sm: {
    [me.variable]: "fontSizes.sm",
    [pe.variable]: "space.3",
    [ye.variable]: "radii.sm",
    [he.variable]: "sizes.8"
  },
  xs: {
    [me.variable]: "fontSizes.xs",
    [pe.variable]: "space.2",
    [ye.variable]: "radii.sm",
    [he.variable]: "sizes.6"
  }
}, Wl = {
  lg: L({
    field: X.lg,
    group: X.lg
  }),
  md: L({
    field: X.md,
    group: X.md
  }),
  sm: L({
    field: X.sm,
    group: X.sm
  }),
  xs: L({
    field: X.xs,
    group: X.xs
  })
};
function hr(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || c("blue.500", "blue.300")(e),
    errorBorderColor: n || c("red.500", "red.300")(e)
  };
}
const Nl = L((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: i } = hr(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: c("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: P(t, i),
        boxShadow: `0 0 0 1px ${P(t, i)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: P(t, n),
        boxShadow: `0 0 0 1px ${P(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: c("inherit", "whiteAlpha.50")(e),
      bg: c("gray.100", "whiteAlpha.300")(e)
    }
  };
}), Ll = L((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: i } = hr(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: c("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: c("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: P(t, i)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: P(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: c("gray.100", "whiteAlpha.50")(e)
    }
  };
}), Vl = L((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: i } = hr(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: P(t, i),
        boxShadow: `0px 1px 0px 0px ${P(t, i)}`
      },
      _focusVisible: {
        borderColor: P(t, n),
        boxShadow: `0px 1px 0px 0px ${P(t, n)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), Ul = L({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), ql = {
  outline: Nl,
  filled: Ll,
  flushed: Vl,
  unstyled: Ul
}, h = Ol({
  baseStyle: Hl,
  sizes: Wl,
  variants: ql,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Vt = d("kbd-bg"), Gl = {
  [Vt.variable]: "colors.gray.100",
  _dark: {
    [Vt.variable]: "colors.whiteAlpha.100"
  },
  bg: Vt.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, Kl = {
  baseStyle: Gl
}, Xl = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, Yl = {
  baseStyle: Xl
}, { defineMultiStyleConfig: Jl, definePartsStyle: Zl } = S(Ya.keys), Ql = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, ec = Zl({
  icon: Ql
}), tc = Jl({
  baseStyle: ec
}), { defineMultiStyleConfig: rc, definePartsStyle: oc } = S(Ja.keys), R = d("menu-bg"), Ut = d("menu-shadow"), nc = {
  [R.variable]: "#fff",
  [Ut.variable]: "shadows.sm",
  _dark: {
    [R.variable]: "colors.gray.700",
    [Ut.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: R.reference,
  boxShadow: Ut.reference
}, ac = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [R.variable]: "colors.gray.100",
    _dark: {
      [R.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [R.variable]: "colors.gray.200",
    _dark: {
      [R.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [R.variable]: "colors.gray.100",
    _dark: {
      [R.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: R.reference
}, ic = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, sc = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, lc = {
  opacity: 0.6
}, cc = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, dc = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, bc = oc({
  button: dc,
  list: nc,
  item: ac,
  groupTitle: ic,
  icon: sc,
  command: lc,
  divider: cc
}), uc = rc({
  baseStyle: bc
}), { defineMultiStyleConfig: fc, definePartsStyle: lr } = S(Za.keys), qt = d("modal-bg"), Gt = d("modal-shadow"), gc = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, hc = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, mc = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [qt.variable]: "colors.white",
    [Gt.variable]: "shadows.lg",
    _dark: {
      [qt.variable]: "colors.gray.700",
      [Gt.variable]: "shadows.dark-lg"
    },
    bg: qt.reference,
    boxShadow: Gt.reference
  };
}, pc = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, yc = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Sc = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, vc = {
  px: "6",
  py: "4"
}, xc = lr((e) => ({
  overlay: gc,
  dialogContainer: T(hc, e),
  dialog: T(mc, e),
  header: pc,
  closeButton: yc,
  body: T(Sc, e),
  footer: vc
}));
function j(e) {
  return lr(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
const $c = {
  xs: j("xs"),
  sm: j("sm"),
  md: j("md"),
  lg: j("lg"),
  xl: j("xl"),
  "2xl": j("2xl"),
  "3xl": j("3xl"),
  "4xl": j("4xl"),
  "5xl": j("5xl"),
  "6xl": j("6xl"),
  full: j("full")
}, _c = fc({
  baseStyle: xc,
  sizes: $c,
  defaultProps: { size: "md" }
}), jo = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, { defineMultiStyleConfig: wc, definePartsStyle: Io } = S(Qa.keys), mr = w("number-input-stepper-width"), Ro = w("number-input-input-padding"), zc = W(mr).add("0.5rem").toString(), Kt = w("number-input-bg"), Xt = w("number-input-color"), Yt = w("number-input-border-color"), Cc = {
  [mr.variable]: "sizes.6",
  [Ro.variable]: zc
}, kc = (e) => {
  var t;
  return ((t = T(h.baseStyle, e)) == null ? void 0 : t.field) ?? {};
}, Ac = {
  width: mr.reference
}, Pc = {
  borderStart: "1px solid",
  borderStartColor: Yt.reference,
  color: Xt.reference,
  bg: Kt.reference,
  [Xt.variable]: "colors.chakra-body-text",
  [Yt.variable]: "colors.chakra-border-color",
  _dark: {
    [Xt.variable]: "colors.whiteAlpha.800",
    [Yt.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Kt.variable]: "colors.gray.200",
    _dark: {
      [Kt.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, Tc = Io((e) => ({
  root: Cc,
  field: T(kc, e) ?? {},
  stepperGroup: Ac,
  stepper: Pc
}));
function it(e) {
  var b, u;
  const t = (b = h.sizes) == null ? void 0 : b[e], n = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = ((u = t.field) == null ? void 0 : u.fontSize) ?? "md", s = jo.fontSizes[i];
  return Io({
    field: {
      ...t.field,
      paddingInlineEnd: Ro.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: W(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: n[e]
      },
      _last: {
        borderBottomEndRadius: n[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
const Bc = {
  xs: it("xs"),
  sm: it("sm"),
  md: it("md"),
  lg: it("lg")
}, Fc = wc({
  baseStyle: Tc,
  sizes: Bc,
  variants: h.variants,
  defaultProps: h.defaultProps
});
var so;
const Mc = {
  ...(so = h.baseStyle) == null ? void 0 : so.field,
  textAlign: "center"
}, Ec = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var lo;
const Dc = {
  outline: (e) => {
    var t, n;
    return ((n = T((t = h.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) ?? {};
  },
  flushed: (e) => {
    var t, n;
    return ((n = T((t = h.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) ?? {};
  },
  filled: (e) => {
    var t, n;
    return ((n = T((t = h.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) ?? {};
  },
  unstyled: ((lo = h.variants) == null ? void 0 : lo.unstyled.field) ?? {}
}, jc = {
  baseStyle: Mc,
  sizes: Ec,
  variants: Dc,
  defaultProps: h.defaultProps
}, { defineMultiStyleConfig: Ic, definePartsStyle: Rc } = S(ei.keys), st = w("popper-bg"), Oc = w("popper-arrow-bg"), eo = w("popper-arrow-shadow-color"), Hc = {
  zIndex: "popover"
}, Wc = {
  [st.variable]: "colors.white",
  bg: st.reference,
  [Oc.variable]: st.reference,
  [eo.variable]: "colors.gray.200",
  _dark: {
    [st.variable]: "colors.gray.700",
    [eo.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, Nc = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, Lc = {
  px: 3,
  py: 2
}, Vc = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Uc = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, qc = Rc({
  popper: Hc,
  content: Wc,
  header: Nc,
  body: Lc,
  footer: Vc,
  closeButton: Uc
}), Gc = Ic({
  baseStyle: qc
}), { defineMultiStyleConfig: Kc, definePartsStyle: Re } = S(ti.keys), Xc = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: i, hasStripe: s } = e, b = c(
    Xr(),
    Xr("1rem", "rgba(0,0,0,0.1)")
  )(e), u = c(`${t}.500`, `${t}.200`)(e), p = `linear-gradient(
    to right,
    transparent 0%,
    ${P(n, u)} 50%,
    transparent 100%
  )`;
  return {
    ...!i && s && b,
    ...i ? { bgImage: p } : { bgColor: u }
  };
}, Yc = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Jc = (e) => ({
  bg: c("gray.100", "whiteAlpha.300")(e)
}), Zc = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Xc(e)
}), Qc = Re((e) => ({
  label: Yc,
  filledTrack: Zc(e),
  track: Jc(e)
})), ed = {
  xs: Re({
    track: { h: "1" }
  }),
  sm: Re({
    track: { h: "2" }
  }),
  md: Re({
    track: { h: "3" }
  }),
  lg: Re({
    track: { h: "4" }
  })
}, td = Kc({
  sizes: ed,
  baseStyle: Qc,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: rd, definePartsStyle: mt } = S(ri.keys), od = (e) => {
  var n;
  const t = (n = T(J.baseStyle, e)) == null ? void 0 : n.control;
  return {
    ...t,
    borderRadius: "full",
    _checked: {
      ...t == null ? void 0 : t._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, nd = mt((e) => {
  var t, n;
  return {
    label: (t = J.baseStyle) == null ? void 0 : t.call(J, e).label,
    container: (n = J.baseStyle) == null ? void 0 : n.call(J, e).container,
    control: od(e)
  };
}), ad = {
  md: mt({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: mt({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: mt({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, id = rd({
  baseStyle: nd,
  sizes: ad,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: sd, definePartsStyle: ld } = S(oi.keys), lt = d("select-bg");
var co;
const cd = {
  ...(co = h.baseStyle) == null ? void 0 : co.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: lt.reference,
  [lt.variable]: "colors.white",
  _dark: {
    [lt.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: lt.reference
  }
}, dd = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, bd = ld({
  field: cd,
  icon: dd
}), ct = {
  paddingInlineEnd: "8"
};
var bo, uo, fo, go, ho, mo, po, yo;
const ud = {
  lg: {
    ...(bo = h.sizes) == null ? void 0 : bo.lg,
    field: {
      ...(uo = h.sizes) == null ? void 0 : uo.lg.field,
      ...ct
    }
  },
  md: {
    ...(fo = h.sizes) == null ? void 0 : fo.md,
    field: {
      ...(go = h.sizes) == null ? void 0 : go.md.field,
      ...ct
    }
  },
  sm: {
    ...(ho = h.sizes) == null ? void 0 : ho.sm,
    field: {
      ...(mo = h.sizes) == null ? void 0 : mo.sm.field,
      ...ct
    }
  },
  xs: {
    ...(po = h.sizes) == null ? void 0 : po.xs,
    field: {
      ...(yo = h.sizes) == null ? void 0 : yo.xs.field,
      ...ct
    },
    icon: {
      insetEnd: "1"
    }
  }
}, fd = sd({
  baseStyle: bd,
  sizes: ud,
  variants: h.variants,
  defaultProps: h.defaultProps
}), Jt = d("skeleton-start-color"), Zt = d("skeleton-end-color"), gd = {
  [Jt.variable]: "colors.gray.100",
  [Zt.variable]: "colors.gray.400",
  _dark: {
    [Jt.variable]: "colors.gray.800",
    [Zt.variable]: "colors.gray.600"
  },
  background: Jt.reference,
  borderColor: Zt.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, hd = {
  baseStyle: gd
}, Qt = d("skip-link-bg"), md = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Qt.variable]: "colors.white",
    _dark: {
      [Qt.variable]: "colors.gray.700"
    },
    bg: Qt.reference
  }
}, pd = {
  baseStyle: md
}, { defineMultiStyleConfig: yd, definePartsStyle: At } = S(ni.keys), be = d("slider-thumb-size"), Xe = d("slider-track-size"), Z = d("slider-bg"), Sd = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...fr({
      orientation: t,
      vertical: {
        h: "100%",
        px: oe(be.reference).divide(2).toString()
      },
      horizontal: {
        w: "100%",
        py: oe(be.reference).divide(2).toString()
      }
    })
  };
}, vd = (e) => ({
  ...fr({
    orientation: e.orientation,
    horizontal: { h: Xe.reference },
    vertical: { w: Xe.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Z.variable]: "colors.gray.200",
  _dark: {
    [Z.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Z.variable]: "colors.gray.300",
    _dark: {
      [Z.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Z.reference
}), xd = (e) => {
  const { orientation: t } = e;
  return {
    ...fr({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: be.reference,
    h: be.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, $d = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Z.variable]: `colors.${t}.500`,
    _dark: {
      [Z.variable]: `colors.${t}.200`
    },
    bg: Z.reference
  };
}, _d = At((e) => ({
  container: Sd(e),
  track: vd(e),
  thumb: xd(e),
  filledTrack: $d(e)
})), wd = At({
  container: {
    [be.variable]: "sizes.4",
    [Xe.variable]: "sizes.1"
  }
}), zd = At({
  container: {
    [be.variable]: "sizes.3.5",
    [Xe.variable]: "sizes.1"
  }
}), Cd = At({
  container: {
    [be.variable]: "sizes.2.5",
    [Xe.variable]: "sizes.0.5"
  }
}), kd = {
  lg: wd,
  md: zd,
  sm: Cd
}, Ad = yd({
  baseStyle: _d,
  sizes: kd,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), ne = w("spinner-size"), Pd = {
  width: [ne.reference],
  height: [ne.reference]
}, Td = {
  xs: {
    [ne.variable]: "sizes.3"
  },
  sm: {
    [ne.variable]: "sizes.4"
  },
  md: {
    [ne.variable]: "sizes.6"
  },
  lg: {
    [ne.variable]: "sizes.8"
  },
  xl: {
    [ne.variable]: "sizes.12"
  }
}, Bd = {
  baseStyle: Pd,
  sizes: Td,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: Fd, definePartsStyle: Oo } = S(ai.keys), Md = {
  fontWeight: "medium"
}, Ed = {
  opacity: 0.8,
  marginBottom: "2"
}, Dd = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, jd = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, Id = Oo({
  container: {},
  label: Md,
  helpText: Ed,
  number: Dd,
  icon: jd
}), Rd = {
  md: Oo({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, Od = Fd({
  baseStyle: Id,
  sizes: Rd,
  defaultProps: {
    size: "md"
  }
}), { defineMultiStyleConfig: Hd, definePartsStyle: Oe } = S([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), N = d("stepper-indicator-size"), Se = d("stepper-icon-size"), ve = d("stepper-title-font-size"), He = d("stepper-description-font-size"), Me = d("stepper-accent-color"), Wd = Oe(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Me.variable]: `colors.${e}.500`,
    _dark: {
      [Me.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ve.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: He.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ve.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Se.reference,
    height: Se.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: N.reference,
    height: N.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Me.reference
    },
    "&[data-status=complete]": {
      bg: Me.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Me.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${N.reference} - 8px)`,
      top: `calc(${N.reference} + 4px)`,
      insetStart: `calc(${N.reference} / 2 - 1px)`
    }
  }
})), Nd = Hd({
  baseStyle: Wd,
  sizes: {
    xs: Oe({
      stepper: {
        [N.variable]: "sizes.4",
        [Se.variable]: "sizes.3",
        [ve.variable]: "fontSizes.xs",
        [He.variable]: "fontSizes.xs"
      }
    }),
    sm: Oe({
      stepper: {
        [N.variable]: "sizes.6",
        [Se.variable]: "sizes.4",
        [ve.variable]: "fontSizes.sm",
        [He.variable]: "fontSizes.xs"
      }
    }),
    md: Oe({
      stepper: {
        [N.variable]: "sizes.8",
        [Se.variable]: "sizes.5",
        [ve.variable]: "fontSizes.md",
        [He.variable]: "fontSizes.sm"
      }
    }),
    lg: Oe({
      stepper: {
        [N.variable]: "sizes.10",
        [Se.variable]: "sizes.6",
        [ve.variable]: "fontSizes.lg",
        [He.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Ld, definePartsStyle: pt } = S(ii.keys), qe = w("switch-track-width"), se = w("switch-track-height"), er = w("switch-track-diff"), Vd = W.subtract(qe, se), cr = w("switch-thumb-x"), Ee = w("switch-bg"), Ud = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [qe.reference],
    height: [se.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ee.variable]: "colors.gray.300",
    _dark: {
      [Ee.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ee.variable]: `colors.${t}.500`,
      _dark: {
        [Ee.variable]: `colors.${t}.200`
      }
    },
    bg: Ee.reference
  };
}, qd = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [se.reference],
  height: [se.reference],
  _checked: {
    transform: `translateX(${cr.reference})`
  }
}, Gd = pt((e) => ({
  container: {
    [er.variable]: Vd,
    [cr.variable]: er.reference,
    _rtl: {
      [cr.variable]: W(er).negate().toString()
    }
  },
  track: Ud(e),
  thumb: qd
})), Kd = {
  sm: pt({
    container: {
      [qe.variable]: "1.375rem",
      [se.variable]: "sizes.3"
    }
  }),
  md: pt({
    container: {
      [qe.variable]: "1.875rem",
      [se.variable]: "sizes.4"
    }
  }),
  lg: pt({
    container: {
      [qe.variable]: "2.875rem",
      [se.variable]: "sizes.6"
    }
  })
}, Xd = Ld({
  baseStyle: Gd,
  sizes: Kd,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Yd, definePartsStyle: we } = S(si.keys), Jd = we({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), wt = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Zd = we((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: c("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: c(`${t}.100`, `${t}.700`)(e),
      ...wt
    },
    td: {
      borderBottom: "1px",
      borderColor: c(`${t}.100`, `${t}.700`)(e),
      ...wt
    },
    caption: {
      color: c("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Qd = we((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: c("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: c(`${t}.100`, `${t}.700`)(e),
      ...wt
    },
    td: {
      borderBottom: "1px",
      borderColor: c(`${t}.100`, `${t}.700`)(e),
      ...wt
    },
    caption: {
      color: c("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: c(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: c(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), e0 = {
  simple: Zd,
  striped: Qd,
  unstyled: {}
}, t0 = {
  sm: we({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: we({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: we({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, r0 = Yd({
  baseStyle: Jd,
  variants: e0,
  sizes: t0,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), B = d("tabs-color"), I = d("tabs-bg"), dt = d("tabs-border-color"), { defineMultiStyleConfig: o0, definePartsStyle: O } = S(li.keys), n0 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, a0 = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, i0 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, s0 = {
  p: 4
}, l0 = O((e) => ({
  root: n0(e),
  tab: a0(e),
  tablist: i0(e),
  tabpanel: s0
})), c0 = {
  sm: O({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: O({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: O({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, d0 = O((e) => {
  const { colorScheme: t, orientation: n } = e, i = n === "vertical", s = i ? "borderStart" : "borderBottom", b = i ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [s]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [s]: "2px solid",
      borderColor: "transparent",
      [b]: "-2px",
      _selected: {
        [B.variable]: `colors.${t}.600`,
        _dark: {
          [B.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [I.variable]: "colors.gray.200",
        _dark: {
          [I.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: B.reference,
      bg: I.reference
    }
  };
}), b0 = O((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [dt.variable]: "transparent",
      _selected: {
        [B.variable]: `colors.${t}.600`,
        [dt.variable]: "colors.white",
        _dark: {
          [B.variable]: `colors.${t}.300`,
          [dt.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: dt.reference
      },
      color: B.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), u0 = O((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [I.variable]: "colors.gray.50",
      _dark: {
        [I.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [I.variable]: "colors.white",
        [B.variable]: `colors.${t}.600`,
        _dark: {
          [I.variable]: "colors.gray.800",
          [B.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: B.reference,
      bg: I.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), f0 = O((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: P(n, `${t}.700`),
        bg: P(n, `${t}.100`)
      }
    }
  };
}), g0 = O((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [B.variable]: "colors.gray.600",
      _dark: {
        [B.variable]: "inherit"
      },
      _selected: {
        [B.variable]: "colors.white",
        [I.variable]: `colors.${t}.600`,
        _dark: {
          [B.variable]: "colors.gray.800",
          [I.variable]: `colors.${t}.300`
        }
      },
      color: B.reference,
      bg: I.reference
    }
  };
}), h0 = O({}), m0 = {
  line: d0,
  enclosed: b0,
  "enclosed-colored": u0,
  "soft-rounded": f0,
  "solid-rounded": g0,
  unstyled: h0
}, p0 = o0({
  baseStyle: l0,
  sizes: c0,
  variants: m0,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: y0, definePartsStyle: le } = S(ci.keys), to = d("tag-bg"), ro = d("tag-color"), tr = d("tag-shadow"), yt = d("tag-min-height"), St = d("tag-min-width"), vt = d("tag-font-size"), xt = d("tag-padding-inline"), S0 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [ro.variable]: _.color.reference,
  [to.variable]: _.bg.reference,
  [tr.variable]: _.shadow.reference,
  color: ro.reference,
  bg: to.reference,
  boxShadow: tr.reference,
  borderRadius: "md",
  minH: yt.reference,
  minW: St.reference,
  fontSize: vt.reference,
  px: xt.reference,
  _focusVisible: {
    [tr.variable]: "shadows.outline"
  }
}, v0 = {
  lineHeight: 1.2,
  overflow: "visible"
}, x0 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, $0 = le({
  container: S0,
  label: v0,
  closeButton: x0
}), _0 = {
  sm: le({
    container: {
      [yt.variable]: "sizes.5",
      [St.variable]: "sizes.5",
      [vt.variable]: "fontSizes.xs",
      [xt.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: le({
    container: {
      [yt.variable]: "sizes.6",
      [St.variable]: "sizes.6",
      [vt.variable]: "fontSizes.sm",
      [xt.variable]: "space.2"
    }
  }),
  lg: le({
    container: {
      [yt.variable]: "sizes.8",
      [St.variable]: "sizes.8",
      [vt.variable]: "fontSizes.md",
      [xt.variable]: "space.3"
    }
  })
}, w0 = {
  subtle: le((e) => {
    var t;
    return {
      container: (t = Le.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: le((e) => {
    var t;
    return {
      container: (t = Le.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: le((e) => {
    var t;
    return {
      container: (t = Le.variants) == null ? void 0 : t.outline(e)
    };
  })
}, z0 = y0({
  variants: w0,
  baseStyle: $0,
  sizes: _0,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var So;
const C0 = {
  ...(So = h.baseStyle) == null ? void 0 : So.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
};
var vo;
const k0 = {
  outline: (e) => {
    var t;
    return ((t = h.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = h.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = h.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((vo = h.variants) == null ? void 0 : vo.unstyled.field) ?? {}
};
var xo, $o, _o, wo;
const A0 = {
  xs: ((xo = h.sizes) == null ? void 0 : xo.xs.field) ?? {},
  sm: (($o = h.sizes) == null ? void 0 : $o.sm.field) ?? {},
  md: ((_o = h.sizes) == null ? void 0 : _o.md.field) ?? {},
  lg: ((wo = h.sizes) == null ? void 0 : wo.lg.field) ?? {}
}, P0 = {
  baseStyle: C0,
  sizes: A0,
  variants: k0,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, bt = w("tooltip-bg"), rr = w("tooltip-fg"), T0 = w("popper-arrow-bg"), B0 = {
  bg: bt.reference,
  color: rr.reference,
  [bt.variable]: "colors.gray.700",
  [rr.variable]: "colors.whiteAlpha.900",
  _dark: {
    [bt.variable]: "colors.gray.300",
    [rr.variable]: "colors.gray.900"
  },
  [T0.variable]: bt.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, F0 = {
  baseStyle: B0
}, M0 = {
  Accordion: yi,
  Alert: ts,
  Avatar: us,
  Badge: Le,
  Breadcrumb: $s,
  Button: Bs,
  Checkbox: J,
  CloseButton: qs,
  Code: Ys,
  Container: Zs,
  Divider: ol,
  Drawer: gl,
  Editable: xl,
  Form: kl,
  FormError: Ml,
  FormLabel: Dl,
  Heading: Rl,
  Input: h,
  Kbd: Kl,
  Link: Yl,
  List: tc,
  Menu: uc,
  Modal: _c,
  NumberInput: Fc,
  PinInput: jc,
  Popover: Gc,
  Progress: td,
  Radio: id,
  Select: fd,
  Skeleton: hd,
  SkipLink: pd,
  Slider: Ad,
  Spinner: Bd,
  Stat: Od,
  Switch: Xd,
  Table: r0,
  Tabs: p0,
  Tag: z0,
  Textarea: P0,
  Tooltip: F0,
  Card: js,
  Stepper: Nd
}, E0 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, D0 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, j0 = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  }
}, I0 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, R0 = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, O0 = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, H0 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, W0 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, N0 = {
  property: O0,
  easing: H0,
  duration: W0
}, L0 = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, V0 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, U0 = {
  breakpoints: D0,
  zIndices: L0,
  radii: I0,
  blur: V0,
  colors: j0,
  ...jo,
  sizes: To,
  shadows: R0,
  space: Po,
  borders: E0,
  transition: N0
}, q0 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, G0 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, K0 = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function X0(e) {
  return zt(e) ? K0.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
const Y0 = "ltr", J0 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Z0 = {
  semanticTokens: q0,
  direction: Y0,
  ...U0,
  components: M0,
  styles: G0,
  config: J0
};
function We(e) {
  return typeof e == "function";
}
function Q0(...e) {
  return (t) => e.reduce((n, i) => i(n), t);
}
const eb = (e) => function(...n) {
  let i = [...n], s = n[n.length - 1];
  return X0(s) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  i.length > 1 ? i = i.slice(0, i.length - 1) : s = e, Q0(
    ...i.map(
      (b) => (u) => We(b) ? b(u) : rb(u, b)
    )
  )(s);
}, tb = eb(Z0);
function rb(...e) {
  return zo({}, ...e, Ho);
}
function Ho(e, t, n, i) {
  if ((We(e) || We(t)) && Object.prototype.hasOwnProperty.call(i, n))
    return (...s) => {
      const b = We(e) ? e(...s) : e, u = We(t) ? t(...s) : t;
      return zo({}, b, u, Ho);
    };
  if (ft(e) && ft(t))
    return [...e, ...t];
  if (ft(e) && zt(t))
    return t;
}
const [ob, nb] = C(), [ab, oo, no] = C(), ib = C("100"), [sb, , Wo] = ib;
var ce = /* @__PURE__ */ ((e) => (e.NextPageButton = "button.artdeco-pagination__button--next", e.ConnectButtonFromMyNetworkPage = "div.discover-entity-type-card__bottom-container button.ember-view:enabled:not(.artdeco-button--muted):not(.artdeco-button--full)", e.ConnectButtonFromSearchPage = "div.search-results-container button.ember-view:enabled:not(.artdeco-button--muted)", e.SendButtonFromSendInviteModal = "div.send-invite button.artdeco-button--primary", e.SendInMailsModalDismissButton = "#artdeco-modal-outlet .artdeco-modal__dismiss", e.CloseSendInMailsModalButton = '.msg-overlay-bubble-header__control .artdeco-button__icon[data-test-icon="close-small"]', e))(ce || {}), de = /* @__PURE__ */ ((e) => (e[e.Unidentified = 0] = "Unidentified", e[e.SearchPeople = 1] = "SearchPeople", e[e.MyNetwork = 2] = "MyNetwork", e))(de || {}), dr = /* @__PURE__ */ ((e) => (e.SearchPeoplePage = "https://www.linkedin.com/search/results/people/", e.MyNetworkPage = "https://www.linkedin.com/mynetwork/", e.PatternOfSearchPage = "linkedin.com/search/results/people", e.PatternOfMyNetworkPage = "linkedin.com/mynetwork", e))(dr || {}), Y = /* @__PURE__ */ ((e) => (e[e.ConnectionEstablished = 0] = "ConnectionEstablished", e[e.RunningStateUpdated = 1] = "RunningStateUpdated", e[e.ButtonClicksCountUpdated = 2] = "ButtonClicksCountUpdated", e[e.StartAutoConnect = 3] = "StartAutoConnect", e[e.StopAutoConnect = 4] = "StopAutoConnect", e))(Y || {});
function lb(e) {
  return new Promise((t) => setTimeout(t, e));
}
async function cb() {
  const e = { maximumAutoConnectionsPerSession: Wo() }, { maximumAutoConnectionsPerSession: t } = await new Promise((n) => {
    chrome.storage.sync.get(e, (i) => n(i));
  });
  sb(t);
}
function De(e) {
  const { message: t, port: n } = e;
  n.postMessage(t);
}
function db(e) {
  e.onMessage.addListener((t) => {
    ob({ message: t, port: e });
  });
}
tb({
  config: {
    useSystemColorMode: !1,
    initialColorMode: "dark"
  }
});
const No = 5, bb = 1500, ub = 3e3, fb = 1e3, Lo = 500, [gb, hb] = C(), [mb, pb] = C(), [yb, Sb] = C(), [vb, xb] = C(), [$b, _b] = C(), [ao, wb] = C(), [zb, Cb, kb] = C(""), [Ab, Pb] = C(), [Tb, Bb] = C(), [Fb, Mb] = C(), [Eb, Db, or] = C(0), [io, , jb] = C(de.Unidentified), [nr, Ib, br] = C(!1);
function $t(e) {
  e.focus(), e.click();
}
function Rb(e) {
  $t(e), e.setAttribute("disabled", "disabled"), yb();
}
function Ob() {
  return new Promise((e) => {
    let t = 0;
    const n = setInterval(() => {
      var u;
      const i = (u = document.querySelector(
        ce.CloseSendInMailsModalButton
      )) == null ? void 0 : u.parentElement;
      i && $t(i);
      const s = document.querySelector(
        ce.SendInMailsModalDismissButton
      );
      s && $t(s);
      const b = document.querySelector(ce.SendButtonFromSendInviteModal);
      b && $t(b), (b || s || i || ++t > No) && (clearInterval(n), e(null));
    }, Lo);
  });
}
function Hb(e) {
  let t = 0;
  const n = setInterval(() => {
    window.scrollTo(0, document.body.scrollHeight);
    const i = document.querySelector(e);
    i ? (clearInterval(n), gb(i)) : ++t > No && (clearInterval(n), mb());
  }, Lo);
}
function Wb() {
  var e;
  (e = document.querySelector(ce.NextPageButton)) == null || e.click();
}
function Nb() {
  return chrome.runtime.onConnect.addListener(ab);
}
function Lb() {
  return setInterval(vb, fb);
}
function ut() {
  const e = br(), t = jb();
  e && [de.MyNetwork, de.SearchPeople].includes(t) && Hb(
    t === de.MyNetwork ? ce.ConnectButtonFromMyNetworkPage : ce.ConnectButtonFromSearchPage
  );
}
(async () => (Cb((e) => {
  e.includes(dr.PatternOfSearchPage) ? Ab() : e.includes(dr.PatternOfMyNetworkPage) ? Tb() : Fb();
}), _b(() => nr(!0)), wb(() => nr(!1)), Mb(() => nr(!1)), Sb(async () => {
  Eb(or() + 1), Ob(), await lb(Aa(bb, ub)), br() && (or() >= Number(Wo()) ? ao() : ut());
}), Db((e) => {
  const t = no();
  t && De({ message: { id: Y.ButtonClicksCountUpdated, content: e }, port: t });
}), oo((e) => {
  De({ message: { id: Y.RunningStateUpdated, content: br() }, port: e }), De({
    message: { id: Y.ButtonClicksCountUpdated, content: or() },
    port: e
  });
}), nb(({ message: e }) => {
  switch (e.id) {
    case Y.StartAutoConnect:
      return $b();
    case Y.StopAutoConnect:
      return ao();
  }
}), Ib((e) => {
  const t = no();
  t && De({ message: { id: Y.RunningStateUpdated, content: e }, port: t }), ut();
}), xb(() => {
  window.location.href !== kb() && zb(window.location.href);
}), oo((e) => {
  De({ message: { id: Y.ConnectionEstablished }, port: e }), db(e);
}), hb(Rb), pb(Wb), Bb(() => {
  io(de.MyNetwork), ut();
}), Pb(() => {
  io(de.SearchPeople), ut();
}), await cb(), Nb(), Lb()))();
