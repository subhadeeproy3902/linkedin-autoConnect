import {
  A as _,
  D as i,
  a as ie,
  f as w,
  u as _e,
  o as fe,
  h as G,
  j as c,
  c as O,
  E as Y,
  F as E,
  b as tt,
  I as Oe,
  G as nt,
  J as st,
  K as de,
  N as X,
  O as we,
  P as rt,
  Q as ot,
  T as at,
  S as it,
  U as ut,
  W as ct,
  n as lt,
  r as dt,
  t as mt,
  v as pt,
  C as ft,
  w as bt,
  y as xt,
  V as ht,
  B as me,
  H as Ct,
  x as gt,
  z as yt,
} from "./shared-CeDr17gc.js";
function F(...n) {
  return function (r) {
    n.some((t) => (t == null || t(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function vt(n) {
  const e = parseFloat(n);
  return typeof e != "number" || Number.isNaN(e) ? 0 : e;
}
function De(n, e) {
  let r = vt(n);
  const t = 10 ** (e ?? 10);
  return (r = Math.round(r * t) / t), e ? r.toFixed(e) : r.toString();
}
function je(n) {
  if (!Number.isFinite(n)) return 0;
  let e = 1,
    r = 0;
  for (; Math.round(n * e) / e !== n; ) (e *= 10), (r += 1);
  return r;
}
function Nt(n, e, r) {
  return n == null
    ? n
    : (r < e && console.warn("clamp: max cannot be less than min"),
      Math.min(Math.max(n, e), r));
}
function It(n, e, r, t) {
  const o = _(r);
  return (
    i.useEffect(() => {
      const a = typeof n == "function" ? n() : n ?? document;
      if (!(!r || !a))
        return (
          a.addEventListener(e, o, t),
          () => {
            a.removeEventListener(e, o, t);
          }
        );
    }, [e, n, t, o, r]),
    () => {
      const a = typeof n == "function" ? n() : n ?? document;
      a == null || a.removeEventListener(e, o, t);
    }
  );
}
function St(n = {}) {
  const {
      onChange: e,
      precision: r,
      defaultValue: t,
      value: o,
      step: a = 1,
      min: u = Number.MIN_SAFE_INTEGER,
      max: m = Number.MAX_SAFE_INTEGER,
      keepWithinRange: l = !0,
    } = n,
    b = _(e),
    [h, v] = i.useState(() => (t == null ? "" : pe(t, a, r) ?? "")),
    S = typeof o < "u",
    C = S ? o : h,
    B = Be(M(C), a),
    A = r ?? B,
    y = i.useCallback(
      (p) => {
        p !== C && (S || v(p.toString()), b == null || b(p.toString(), M(p)));
      },
      [b, S, C]
    ),
    k = i.useCallback(
      (p) => {
        let x = p;
        return l && (x = Nt(x, u, m)), De(x, A);
      },
      [A, l, m, u]
    ),
    q = i.useCallback(
      (p = a) => {
        let x;
        C === "" ? (x = M(p)) : (x = M(C) + p), (x = k(x)), y(x);
      },
      [k, a, y, C]
    ),
    L = i.useCallback(
      (p = a) => {
        let x;
        C === "" ? (x = M(-p)) : (x = M(C) - p), (x = k(x)), y(x);
      },
      [k, a, y, C]
    ),
    V = i.useCallback(() => {
      let p;
      t == null ? (p = "") : (p = pe(t, a, r) ?? u), y(p);
    }, [t, r, a, y, u]),
    z = i.useCallback(
      (p) => {
        const x = pe(p, a, A) ?? u;
        y(x);
      },
      [A, a, y, u]
    ),
    T = M(C);
  return {
    isOutOfRange: T > m || T < u,
    isAtMax: T === m,
    isAtMin: T === u,
    precision: A,
    value: C,
    valueAsNumber: T,
    update: y,
    reset: V,
    increment: q,
    decrement: L,
    clamp: k,
    cast: z,
    setValue: v,
  };
}
function M(n) {
  return parseFloat(n.toString().replace(/[^\w.-]+/g, ""));
}
function Be(n, e) {
  return Math.max(je(e), je(n));
}
function pe(n, e, r) {
  const t = M(n);
  if (Number.isNaN(t)) return;
  const o = Be(t, e);
  return De(t, r ?? o);
}
function Pt(n, e) {
  const r = _(n);
  i.useEffect(() => {
    let t = null;
    const o = () => r();
    return (
      e !== null && (t = window.setInterval(o, e)),
      () => {
        t && window.clearInterval(t);
      }
    );
  }, [e, r]);
}
const [Ft, qe] = ie({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [kt, ue] = ie({ strict: !1, name: "FormControlContext" });
function At(n) {
  const {
      id: e,
      isRequired: r,
      isInvalid: t,
      isDisabled: o,
      isReadOnly: a,
      ...u
    } = n,
    m = i.useId(),
    l = e || `field-${m}`,
    b = `${l}-label`,
    h = `${l}-feedback`,
    v = `${l}-helptext`,
    [S, C] = i.useState(!1),
    [B, A] = i.useState(!1),
    [y, k] = i.useState(!1),
    q = i.useCallback(
      (g = {}, P = null) => ({
        id: v,
        ...g,
        ref: Y(P, (H) => {
          H && A(!0);
        }),
      }),
      [v]
    ),
    L = i.useCallback(
      (g = {}, P = null) => ({
        ...g,
        ref: P,
        "data-focus": E(y),
        "data-disabled": E(o),
        "data-invalid": E(t),
        "data-readonly": E(a),
        id: g.id !== void 0 ? g.id : b,
        htmlFor: g.htmlFor !== void 0 ? g.htmlFor : l,
      }),
      [l, o, y, t, a, b]
    ),
    V = i.useCallback(
      (g = {}, P = null) => ({
        id: h,
        ...g,
        ref: Y(P, (H) => {
          H && C(!0);
        }),
        "aria-live": "polite",
      }),
      [h]
    ),
    z = i.useCallback(
      (g = {}, P = null) => ({
        ...g,
        ...u,
        ref: P,
        role: "group",
        "data-focus": E(y),
        "data-disabled": E(o),
        "data-invalid": E(t),
        "data-readonly": E(a),
      }),
      [u, o, y, t, a]
    ),
    T = i.useCallback(
      (g = {}, P = null) => ({
        ...g,
        ref: P,
        role: "presentation",
        "aria-hidden": !0,
        children: g.children || "*",
      }),
      []
    );
  return {
    isRequired: !!r,
    isInvalid: !!t,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!y,
    onFocus: () => k(!0),
    onBlur: () => k(!1),
    hasFeedbackText: S,
    setHasFeedbackText: C,
    hasHelpText: B,
    setHasHelpText: A,
    id: l,
    labelId: b,
    feedbackId: h,
    helpTextId: v,
    htmlProps: u,
    getHelpTextProps: q,
    getErrorMessageProps: V,
    getRootProps: z,
    getLabelProps: L,
    getRequiredIndicatorProps: T,
  };
}
const Le = w(function (e, r) {
  const t = _e("Form", e),
    o = fe(e),
    { getRootProps: a, htmlProps: u, ...m } = At(o),
    l = G("chakra-form-control", e.className);
  return c.jsx(kt, {
    value: m,
    children: c.jsx(Ft, {
      value: t,
      children: c.jsx(O.div, { ...a({}, r), className: l, __css: t.container }),
    }),
  });
});
Le.displayName = "FormControl";
const Ve = w(function (e, r) {
  const t = ue(),
    o = qe(),
    a = G("chakra-form__helper-text", e.className);
  return c.jsx(O.div, {
    ...(t == null ? void 0 : t.getHelpTextProps(e, r)),
    __css: o.helperText,
    className: a,
  });
});
Ve.displayName = "FormHelperText";
function Tt(n) {
  const e = ue(),
    {
      id: r,
      disabled: t,
      readOnly: o,
      required: a,
      isRequired: u,
      isInvalid: m,
      isReadOnly: l,
      isDisabled: b,
      onFocus: h,
      onBlur: v,
      ...S
    } = n,
    C = n["aria-describedby"] ? [n["aria-describedby"]] : [];
  return (
    e != null &&
      e.hasFeedbackText &&
      e != null &&
      e.isInvalid &&
      C.push(e.feedbackId),
    e != null && e.hasHelpText && C.push(e.helpTextId),
    {
      ...S,
      "aria-describedby": C.join(" ") || void 0,
      id: r ?? (e == null ? void 0 : e.id),
      isDisabled: t ?? b ?? (e == null ? void 0 : e.isDisabled),
      isReadOnly: o ?? l ?? (e == null ? void 0 : e.isReadOnly),
      isRequired: a ?? u ?? (e == null ? void 0 : e.isRequired),
      isInvalid: m ?? (e == null ? void 0 : e.isInvalid),
      onFocus: F(e == null ? void 0 : e.onFocus, h),
      onBlur: F(e == null ? void 0 : e.onBlur, v),
    }
  );
}
const He = w(function (e, r) {
  const t = tt("FormLabel", e),
    o = fe(e),
    {
      className: a,
      children: u,
      requiredIndicator: m = c.jsx(Ke, {}),
      optionalIndicator: l = null,
      ...b
    } = o,
    h = ue(),
    v = (h == null ? void 0 : h.getLabelProps(b, r)) ?? { ref: r, ...b };
  return c.jsxs(O.label, {
    ...v,
    className: G("chakra-form__label", o.className),
    __css: { display: "block", textAlign: "start", ...t },
    children: [u, h != null && h.isRequired ? m : l],
  });
});
He.displayName = "FormLabel";
const Ke = w(function (e, r) {
  const t = ue(),
    o = qe();
  if (!(t != null && t.isRequired)) return null;
  const a = G("chakra-form__required-indicator", e.className);
  return c.jsx(O.span, {
    ...(t == null ? void 0 : t.getRequiredIndicatorProps(e, r)),
    __css: o.requiredIndicator,
    className: a,
  });
});
Ke.displayName = "RequiredIndicator";
const Rt = (n) =>
    c.jsx(Oe, {
      viewBox: "0 0 24 24",
      ...n,
      children: c.jsx("path", {
        fill: "currentColor",
        d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",
      }),
    }),
  wt = (n) =>
    c.jsx(Oe, {
      viewBox: "0 0 24 24",
      ...n,
      children: c.jsx("path", {
        fill: "currentColor",
        d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",
      }),
    });
function Ee(n, e, r, t) {
  i.useEffect(() => {
    if (!n.current || !t) return;
    const o = n.current.ownerDocument.defaultView ?? window,
      a = Array.isArray(e) ? e : [e],
      u = new o.MutationObserver((m) => {
        for (const l of m)
          l.type === "attributes" &&
            l.attributeName &&
            a.includes(l.attributeName) &&
            r(l);
      });
    return (
      u.observe(n.current, { attributes: !0, attributeFilter: a }),
      () => u.disconnect()
    );
  });
}
const jt = 50,
  Me = 300;
function Et(n, e) {
  const [r, t] = i.useState(!1),
    [o, a] = i.useState(null),
    [u, m] = i.useState(!0),
    l = i.useRef(null),
    b = () => clearTimeout(l.current);
  Pt(
    () => {
      o === "increment" && n(), o === "decrement" && e();
    },
    r ? jt : null
  );
  const h = i.useCallback(() => {
      u && n(),
        (l.current = setTimeout(() => {
          m(!1), t(!0), a("increment");
        }, Me));
    }, [n, u]),
    v = i.useCallback(() => {
      u && e(),
        (l.current = setTimeout(() => {
          m(!1), t(!0), a("decrement");
        }, Me));
    }, [e, u]),
    S = i.useCallback(() => {
      m(!0), t(!1), b();
    }, []);
  return (
    i.useEffect(() => () => b(), []), { up: h, down: v, stop: S, isSpinning: r }
  );
}
const Mt = /^[Ee0-9+\-.]$/;
function _t(n) {
  return Mt.test(n);
}
function Ot(n, e) {
  if (n.key == null) return !0;
  const r = n.ctrlKey || n.altKey || n.metaKey;
  return !(n.key.length === 1) || r ? !0 : e(n.key);
}
function Dt(n = {}) {
  const {
      focusInputOnChange: e = !0,
      clampValueOnBlur: r = !0,
      keepWithinRange: t = !0,
      min: o = Number.MIN_SAFE_INTEGER,
      max: a = Number.MAX_SAFE_INTEGER,
      step: u = 1,
      isReadOnly: m,
      isDisabled: l,
      isRequired: b,
      isInvalid: h,
      pattern: v = "[0-9]*(.[0-9]+)?",
      inputMode: S = "decimal",
      allowMouseWheel: C,
      id: B,
      onChange: A,
      precision: y,
      name: k,
      "aria-describedby": q,
      "aria-label": L,
      "aria-labelledby": V,
      onFocus: z,
      onBlur: T,
      onInvalid: g,
      getAriaValueText: P,
      isValidCharacter: H,
      format: p,
      parse: x,
      ...Ye
    } = n,
    J = _(z),
    xe = _(T),
    D = _(g),
    Q = _(H ?? _t),
    Z = _(P),
    d = St(n),
    { update: W, increment: he, decrement: Ce } = d,
    [Je, le] = i.useState(!1),
    ee = !(m || l),
    j = i.useRef(null),
    te = i.useRef(null),
    ge = i.useRef(null),
    ye = i.useRef(null),
    ne = i.useCallback((s) => s.split("").filter(Q).join(""), [Q]),
    se = i.useCallback((s) => (x == null ? void 0 : x(s)) ?? s, [x]),
    K = i.useCallback(
      (s) => ((p == null ? void 0 : p(s)) ?? s).toString(),
      [p]
    );
  nt(() => {
    (d.valueAsNumber > a || d.valueAsNumber < o) &&
      (D == null || D("rangeOverflow", K(d.value), d.valueAsNumber));
  }, [d.valueAsNumber, d.value, K, D]),
    st(() => {
      if (!j.current) return;
      if (j.current.value != d.value) {
        const f = se(j.current.value);
        d.setValue(ne(f));
      }
    }, [se, ne]);
  const re = i.useCallback(
      (s = u) => {
        ee && he(s);
      },
      [he, ee, u]
    ),
    oe = i.useCallback(
      (s = u) => {
        ee && Ce(s);
      },
      [Ce, ee, u]
    ),
    N = Et(re, oe);
  Ee(ge, "disabled", N.stop, N.isSpinning),
    Ee(ye, "disabled", N.stop, N.isSpinning);
  const ve = i.useCallback(
      (s) => {
        if (s.nativeEvent.isComposing) return;
        const I = se(s.currentTarget.value);
        W(ne(I)),
          (te.current = {
            start: s.currentTarget.selectionStart,
            end: s.currentTarget.selectionEnd,
          });
      },
      [W, ne, se]
    ),
    Ne = i.useCallback(
      (s) => {
        var f;
        J == null || J(s),
          te.current &&
            ((s.currentTarget.selectionStart =
              te.current.start ??
              ((f = s.currentTarget.value) == null ? void 0 : f.length)),
            (s.currentTarget.selectionEnd =
              te.current.end ?? s.currentTarget.selectionStart));
      },
      [J]
    ),
    Ie = i.useCallback(
      (s) => {
        if (s.nativeEvent.isComposing) return;
        Ot(s, Q) || s.preventDefault();
        const f = Se(s) * u,
          I = s.key,
          $ = {
            ArrowUp: () => re(f),
            ArrowDown: () => oe(f),
            Home: () => W(o),
            End: () => W(a),
          }[I];
        $ && (s.preventDefault(), $(s));
      },
      [Q, u, re, oe, W, o, a]
    ),
    Se = (s) => {
      let f = 1;
      return (s.metaKey || s.ctrlKey) && (f = 0.1), s.shiftKey && (f = 10), f;
    },
    Pe = i.useMemo(() => {
      const s = Z == null ? void 0 : Z(d.value);
      if (s != null) return s;
      const f = d.value.toString();
      return f || void 0;
    }, [d.value, Z]),
    Fe = i.useCallback(() => {
      let s = d.value;
      if (d.value === "") return;
      /^[eE]/.test(d.value.toString())
        ? d.setValue("")
        : (d.valueAsNumber < o && (s = o),
          d.valueAsNumber > a && (s = a),
          d.cast(s));
    }, [d, a, o]),
    ke = i.useCallback(() => {
      le(!1), r && Fe();
    }, [r, le, Fe]),
    ae = i.useCallback(() => {
      e &&
        requestAnimationFrame(() => {
          var s;
          (s = j.current) == null || s.focus();
        });
    }, [e]),
    Ae = i.useCallback(
      (s) => {
        s.preventDefault(), N.up(), ae();
      },
      [ae, N]
    ),
    Te = i.useCallback(
      (s) => {
        s.preventDefault(), N.down(), ae();
      },
      [ae, N]
    );
  It(
    () => j.current,
    "wheel",
    (s) => {
      var Re;
      const I =
        (((Re = j.current) == null ? void 0 : Re.ownerDocument) ?? document)
          .activeElement === j.current;
      if (!C || !I) return;
      s.preventDefault();
      const R = Se(s) * u,
        $ = Math.sign(s.deltaY);
      $ === -1 ? re(R) : $ === 1 && oe(R);
    },
    { passive: !1 }
  );
  const Qe = i.useCallback(
      (s = {}, f = null) => {
        const I = l || (t && d.isAtMax);
        return {
          ...s,
          ref: Y(f, ge),
          role: "button",
          tabIndex: -1,
          onPointerDown: F(s.onPointerDown, (R) => {
            R.button !== 0 || I || Ae(R);
          }),
          onPointerLeave: F(s.onPointerLeave, N.stop),
          onPointerUp: F(s.onPointerUp, N.stop),
          disabled: I,
          "aria-disabled": de(I),
        };
      },
      [d.isAtMax, t, Ae, N.stop, l]
    ),
    Ze = i.useCallback(
      (s = {}, f = null) => {
        const I = l || (t && d.isAtMin);
        return {
          ...s,
          ref: Y(f, ye),
          role: "button",
          tabIndex: -1,
          onPointerDown: F(s.onPointerDown, (R) => {
            R.button !== 0 || I || Te(R);
          }),
          onPointerLeave: F(s.onPointerLeave, N.stop),
          onPointerUp: F(s.onPointerUp, N.stop),
          disabled: I,
          "aria-disabled": de(I),
        };
      },
      [d.isAtMin, t, Te, N.stop, l]
    ),
    et = i.useCallback(
      (s = {}, f = null) => ({
        name: k,
        inputMode: S,
        type: "text",
        pattern: v,
        "aria-labelledby": V,
        "aria-label": L,
        "aria-describedby": q,
        id: B,
        disabled: l,
        ...s,
        readOnly: s.readOnly ?? m,
        "aria-readonly": s.readOnly ?? m,
        "aria-required": s.required ?? b,
        required: s.required ?? b,
        ref: Y(j, f),
        value: K(d.value),
        role: "spinbutton",
        "aria-valuemin": o,
        "aria-valuemax": a,
        "aria-valuenow": Number.isNaN(d.valueAsNumber)
          ? void 0
          : d.valueAsNumber,
        "aria-invalid": de(h ?? d.isOutOfRange),
        "aria-valuetext": Pe,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: F(s.onChange, ve),
        onKeyDown: F(s.onKeyDown, Ie),
        onFocus: F(s.onFocus, Ne, () => le(!0)),
        onBlur: F(s.onBlur, xe, ke),
      }),
      [
        k,
        S,
        v,
        V,
        L,
        K,
        q,
        B,
        l,
        b,
        m,
        h,
        d.value,
        d.valueAsNumber,
        d.isOutOfRange,
        o,
        a,
        Pe,
        ve,
        Ie,
        Ne,
        xe,
        ke,
      ]
    );
  return {
    value: K(d.value),
    valueAsNumber: d.valueAsNumber,
    isFocused: Je,
    isDisabled: l,
    isReadOnly: m,
    getIncrementButtonProps: Qe,
    getDecrementButtonProps: Ze,
    getInputProps: et,
    htmlProps: Ye,
  };
}
const [Bt, ce] = ie({
    name: "NumberInputStylesContext",
    errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `,
  }),
  [qt, be] = ie({
    name: "NumberInputContext",
    errorMessage:
      "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />",
  }),
  Ue = w(function (e, r) {
    const t = _e("NumberInput", e),
      o = fe(e),
      a = Tt(o),
      { htmlProps: u, ...m } = Dt(a),
      l = i.useMemo(() => m, [m]);
    return c.jsx(qt, {
      value: l,
      children: c.jsx(Bt, {
        value: t,
        children: c.jsx(O.div, {
          ...u,
          ref: r,
          className: G("chakra-numberinput", e.className),
          __css: { position: "relative", zIndex: 0, ...t.root },
        }),
      }),
    });
  });
Ue.displayName = "NumberInput";
const Ge = w(function (e, r) {
  const t = ce();
  return c.jsx(O.div, {
    "aria-hidden": !0,
    ref: r,
    ...e,
    __css: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      insetEnd: "0px",
      margin: "1px",
      height: "calc(100% - 2px)",
      zIndex: 1,
      ...t.stepperGroup,
    },
  });
});
Ge.displayName = "NumberInputStepper";
const ze = w(function (e, r) {
  const { getInputProps: t } = be(),
    o = t(e, r),
    a = ce();
  return c.jsx(O.input, {
    ...o,
    className: G("chakra-numberinput__field", e.className),
    __css: { width: "100%", ...a.field },
  });
});
ze.displayName = "NumberInputField";
const We = O("div", {
    baseStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      transitionProperty: "common",
      transitionDuration: "normal",
      userSelect: "none",
      cursor: "pointer",
      lineHeight: "normal",
    },
  }),
  $e = w(function (e, r) {
    const t = ce(),
      { getDecrementButtonProps: o } = be(),
      a = o(e, r);
    return c.jsx(We, {
      ...a,
      __css: t.stepper,
      children: e.children ?? c.jsx(Rt, {}),
    });
  });
$e.displayName = "NumberDecrementStepper";
const Xe = w(function (e, r) {
  const { getIncrementButtonProps: t } = be(),
    o = t(e, r),
    a = ce();
  return c.jsx(We, {
    ...o,
    __css: a.stepper,
    children: e.children ?? c.jsx(wt, {}),
  });
});
Xe.displayName = "NumberIncrementStepper";
function Lt(n, e) {
  const r = n ?? "bottom",
    o = {
      "top-start": { ltr: "top-left", rtl: "top-right" },
      "top-end": { ltr: "top-right", rtl: "top-left" },
      "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
      "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" },
    }[r];
  return (o == null ? void 0 : o[e]) ?? r;
}
function Vt(n, e) {
  const r = (o) => ({
      ...e,
      ...o,
      position: Lt(
        (o == null ? void 0 : o.position) ?? (e == null ? void 0 : e.position),
        n
      ),
    }),
    t = (o) => {
      const a = r(o),
        u = rt(a);
      return X.notify(u, a);
    };
  return (
    (t.update = (o, a) => {
      X.update(o, r(a));
    }),
    (t.promise = (o, a) => {
      const u = t({ ...a.loading, status: "loading", duration: null });
      o.then((m) =>
        t.update(u, { status: "success", duration: 5e3, ...we(a.success, m) })
      ).catch((m) =>
        t.update(u, { status: "error", duration: 5e3, ...we(a.error, m) })
      );
    }),
    (t.closeAll = X.closeAll),
    (t.close = X.close),
    (t.isActive = X.isActive),
    t
  );
}
const Ht = { duration: 5e3, variant: "solid" },
  U = {
    theme: ot,
    colorMode: "light",
    toggleColorMode: () => {},
    setColorMode: () => {},
    defaultOptions: Ht,
    forced: !1,
  };
function Kt({
  theme: n = U.theme,
  colorMode: e = U.colorMode,
  toggleColorMode: r = U.toggleColorMode,
  setColorMode: t = U.setColorMode,
  defaultOptions: o = U.defaultOptions,
  motionVariants: a,
  toastSpacing: u,
  component: m,
  forced: l,
} = U) {
  const b = { colorMode: e, setColorMode: t, toggleColorMode: r, forced: l };
  return {
    ToastContainer: () =>
      c.jsx(at, {
        theme: n,
        children: c.jsx(it.Provider, {
          value: b,
          children: c.jsx(ut, {
            defaultOptions: o,
            motionVariants: a,
            toastSpacing: u,
            component: m,
          }),
        }),
      }),
    toast: Vt(n.direction, o),
  };
}
const [Ut, Gt] = mt(),
  { ToastContainer: zt, toast: Wt } = Kt();
function $t() {
  return Wt({
    position: "top",
    title: "Options saved!",
    status: "success",
    duration: 2e3,
    isClosable: !0,
  });
}
async function Xt(n) {
  return new Promise((e) => {
    chrome.storage.sync.set(n, e);
  });
}
function Yt() {
  const [n, e] = pt(yt);
  return c.jsxs(ft, {
    theme: bt,
    children: [
      c.jsx(zt, {}),
      c.jsx(xt, {
        backgroundColor: "gray.700",
        padding: "5",
        borderRadius: "md",
        marginY: "5",
        children: c.jsxs(ht, {
          spacing: 4,
          align: "stretch",
          children: [
            c.jsx(me, {
              children: c.jsx(Ct, {
                as: "h1",
                size: "md",
                children: "LinkedIn AutoConnect Options",
              }),
            }),
            c.jsx(me, {
              children: c.jsxs(Le, {
                children: [
                  c.jsx(He, {
                    children: "Maximum auto-connections per session",
                  }),
                  c.jsxs(Ue, {
                    value: n,
                    onChange: e,
                    children: [
                      c.jsx(ze, {}),
                      c.jsxs(Ge, { children: [c.jsx(Xe, {}), c.jsx($e, {})] }),
                    ],
                  }),
                  c.jsx(Ve, {
                    children:
                      "Automatically stops connecting after reaching this value.",
                  }),
                ],
              }),
            }),
            c.jsx(me, {
              children: c.jsx(gt, {
                colorScheme: "blue",
                onClick: () => Ut(),
                children: "Save Options",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
(async () => (
  Gt(async () => {
    await Xt({ maximumAutoConnectionsPerSession: ct() }), $t();
  }),
  await lt(),
  dt.render(
    c.jsx(Yt, {}),
    document.body.appendChild(document.createElement("div"))
  )
))();
