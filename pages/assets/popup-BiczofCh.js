import {
  f as m,
  j as s,
  c as u,
  a as et,
  u as nt,
  o as D,
  g as rt,
  I as st,
  k as S,
  d as it,
  b as ot,
  e as at,
  h as ct,
  R as f,
  i as lt,
  s as ut,
  l as dt,
  M as x,
  m as _,
  p as z,
  n as mt,
  t as v,
  q as ft,
  r as ht,
  v as b,
  C as pt,
  w as gt,
  B as y,
  H as xt,
  x as j,
  y as yt,
  V as vt,
  z as bt,
  L as B,
} from "./shared-CeDr17gc.js";
const E = m(function (e, n) {
  const {
      direction: r,
      align: i,
      justify: a,
      wrap: l,
      basis: c,
      grow: o,
      shrink: d,
      ...h
    } = e,
    p = {
      display: "flex",
      flexDirection: r,
      alignItems: i,
      justifyContent: a,
      flexWrap: l,
      flexBasis: c,
      flexGrow: o,
      flexShrink: d,
    };
  return s.jsx(u.div, { ref: n, __css: p, ...h });
});
E.displayName = "Flex";
const [jt, R] = et({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  k = m(function (e, n) {
    const r = nt("List", e),
      {
        children: i,
        styleType: a = "none",
        stylePosition: l,
        spacing: c,
        ...o
      } = D(e),
      d = rt(i),
      p = c ? { ["& > *:not(style) ~ *:not(style)"]: { mt: c } } : {};
    return s.jsx(jt, {
      value: r,
      children: s.jsx(u.ul, {
        ref: n,
        listStyleType: a,
        listStylePosition: l,
        role: "list",
        __css: { ...r.container, ...p },
        ...o,
        children: d,
      }),
    });
  });
k.displayName = "List";
const Ct = m((t, e) => {
  const { as: n, ...r } = t;
  return s.jsx(k, {
    ref: e,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...r,
  });
});
Ct.displayName = "OrderedList";
const Pt = m(function (e, n) {
  const { as: r, ...i } = e;
  return s.jsx(k, {
    ref: n,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...i,
  });
});
Pt.displayName = "UnorderedList";
const T = m(function (e, n) {
  const r = R();
  return s.jsx(u.li, { ref: n, ...e, __css: r.item });
});
T.displayName = "ListItem";
const St = m(function (e, n) {
  const r = R();
  return s.jsx(st, { ref: n, role: "presentation", ...e, __css: r.icon });
});
St.displayName = "ListIcon";
const L = (t) =>
  s.jsx(u.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...t });
L.displayName = "Circle";
function kt(t, e, n) {
  return ((t - e) * 100) / (n - e);
}
const wt = S({
    "0%": { strokeDasharray: "1, 400", strokeDashoffset: "0" },
    "50%": { strokeDasharray: "400, 400", strokeDashoffset: "-100" },
    "100%": { strokeDasharray: "400, 400", strokeDashoffset: "-260" },
  }),
  Ot = S({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });
S({ "0%": { left: "-40%" }, "100%": { left: "100%" } });
S({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" },
});
function Nt(t) {
  const {
      value: e = 0,
      min: n,
      max: r,
      valueText: i,
      getValueText: a,
      isIndeterminate: l,
      role: c = "progressbar",
    } = t,
    o = kt(e, n, r);
  return {
    bind: {
      "data-indeterminate": l ? "" : void 0,
      "aria-valuemax": r,
      "aria-valuemin": n,
      "aria-valuenow": l ? void 0 : e,
      "aria-valuetext": (() => {
        if (e != null) return typeof a == "function" ? a(e, o) : i;
      })(),
      role: c,
    },
    percent: o,
    value: e,
  };
}
const V = (t) => {
  const { size: e, isIndeterminate: n, ...r } = t;
  return s.jsx(u.svg, {
    viewBox: "0 0 100 100",
    __css: {
      width: e,
      height: e,
      animation: n ? `${Ot} 2s linear infinite` : void 0,
    },
    ...r,
  });
};
V.displayName = "Shape";
const U = m((t, e) => {
  const {
      size: n = "48px",
      max: r = 100,
      min: i = 0,
      valueText: a,
      getValueText: l,
      value: c,
      capIsRound: o,
      children: d,
      thickness: h = "10px",
      color: p = "#0078d4",
      trackColor: X = "#edebe9",
      isIndeterminate: g,
      ...J
    } = t,
    w = Nt({
      min: i,
      max: r,
      value: c,
      valueText: a,
      getValueText: l,
      isIndeterminate: g,
    }),
    O = g ? void 0 : (w.percent ?? 0) * 2.64,
    Q = O == null ? void 0 : `${O} ${264 - O}`,
    Z = g
      ? { css: { animation: `${wt} 1.5s linear infinite` } }
      : {
          strokeDashoffset: 66,
          strokeDasharray: Q,
          transitionProperty: "stroke-dasharray, stroke",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease",
        },
    tt = it({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: n,
    });
  return s.jsxs(u.div, {
    ref: e,
    className: "chakra-progress",
    ...w.bind,
    ...J,
    __css: tt,
    children: [
      s.jsxs(V, {
        size: n,
        isIndeterminate: g,
        children: [
          s.jsx(L, {
            stroke: X,
            strokeWidth: h,
            className: "chakra-progress__track",
          }),
          s.jsx(L, {
            stroke: p,
            strokeWidth: h,
            className: "chakra-progress__indicator",
            strokeLinecap: o ? "round" : void 0,
            opacity: w.value === 0 && !g ? 0 : void 0,
            ...Z,
          }),
        ],
      }),
      d,
    ],
  });
});
U.displayName = "CircularProgress";
const W = u("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
});
W.displayName = "CircularProgressLabel";
const H = u("div", {
  baseStyle: { flex: 1, justifySelf: "stretch", alignSelf: "stretch" },
});
H.displayName = "Spacer";
const F = m(function (e, n) {
  const r = ot("Text", e),
    { className: i, align: a, decoration: l, casing: c, ...o } = D(e),
    d = at({
      textAlign: e.align,
      textDecoration: e.decoration,
      textTransform: e.casing,
    });
  return s.jsx(u.p, {
    ref: n,
    className: ct("chakra-text", e.className),
    ...d,
    ...o,
    __css: r,
  });
});
F.displayName = "Text";
var $ = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  M = f.createContext && f.createContext($),
  Tt = ["attr", "size", "title"];
function Lt(t, e) {
  if (t == null) return {};
  var n = It(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function It(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    C.apply(this, arguments)
  );
}
function A(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? A(Object(n), !0).forEach(function (r) {
          _t(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : A(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function _t(t, e, n) {
  return (
    (e = zt(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function zt(t) {
  var e = Mt(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Mt(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function G(t) {
  return (
    t &&
    t.map((e, n) => f.createElement(e.tag, P({ key: n }, e.attr), G(e.child)))
  );
}
function I(t) {
  return (e) => f.createElement(At, C({ attr: P({}, t.attr) }, e), G(t.child));
}
function At(t) {
  var e = (n) => {
    var { attr: r, size: i, title: a } = t,
      l = Lt(t, Tt),
      c = i || n.size || "1em",
      o;
    return (
      n.className && (o = n.className),
      t.className && (o = (o ? o + " " : "") + t.className),
      f.createElement(
        "svg",
        C(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: o,
            style: P(P({ color: t.color || n.color }, n.style), t.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        a && f.createElement("title", null, a),
        t.children
      )
    );
  };
  return M !== void 0 ? f.createElement(M.Consumer, null, (n) => e(n)) : e($);
}
function Dt(t) {
  return I({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
        },
        child: [],
      },
    ],
  })(t);
}
function Bt(t) {
  return I({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
        },
        child: [],
      },
    ],
  })(t);
}
function Et(t) {
  return I({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
        },
        child: [],
      },
    ],
  })(t);
}
const [Rt, Vt] = v(),
  [Ut, Wt] = v(),
  q = v(0),
  [Ht] = q,
  K = v(!1),
  [N] = K,
  Y = v(!1),
  [Ft] = Y;
async function $t() {
  const [t] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
  if (t.id) {
    const e = chrome.tabs.connect(t.id);
    ft(e);
  }
}
function Gt() {
  chrome.tabs.create({ url: B.MyNetworkPage });
}
function qt() {
  chrome.runtime.openOptionsPage();
}
function Kt() {
  chrome.tabs.create({ url: B.SearchPeoplePage });
}
function Yt() {
  ht.render(
    s.jsx(Jt, {}),
    document.body.appendChild(document.createElement("div"))
  );
}
function Xt() {
  return s.jsxs(k, {
    spacing: 3,
    children: [
      s.jsx(T, {
        children: s.jsx(j, {
          onClick: () => Gt(),
          leftIcon: s.jsx(Et, {}),
          width: "full",
          children: "People You May Know",
        }),
      }),
      s.jsx(T, {
        children: s.jsx(j, {
          onClick: () => Kt(),
          leftIcon: s.jsx(Dt, {}),
          width: "full",
          children: "Search People",
        }),
      }),
    ],
  });
}
function Jt() {
  const [t] = b(Y);
  return s.jsxs(pt, {
    theme: gt,
    children: [
      s.jsxs(E, {
        paddingX: 5,
        paddingY: 2,
        backgroundColor: "gray.700",
        align: "center",
        width: "260px",
        children: [
          s.jsx(y, {
            children: s.jsx(xt, {
              size: "sm",
              children: "LinkedIn AutoConnect",
            }),
          }),
          s.jsx(H, {}),
          s.jsx(y, {
            children: s.jsx(j, {
              size: "sm",
              onClick: () => qt(),
              children: s.jsx(Bt, {}),
            }),
          }),
        ],
      }),
      s.jsx(yt, { padding: "5", children: t ? s.jsx(Qt, {}) : s.jsx(Xt, {}) }),
    ],
  });
}
function Qt() {
  const [t] = b(K),
    [e] = b(q),
    [n] = b(bt);
  return s.jsxs(vt, {
    spacing: "3",
    children: [
      s.jsx(y, {
        children: s.jsx(F, { fontSize: "18px", children: "Invitations Sent" }),
      }),
      s.jsx(y, {
        children: s.jsx(U, {
          value: (e / Number(n)) * 100,
          color: "green.400",
          size: "100px",
          children: s.jsx(W, { children: e }),
        }),
      }),
      s.jsx(y, {
        children: s.jsxs(j, {
          colorScheme: t ? "red" : "green",
          onClick: () => (t ? Ut() : Rt()),
          width: "full",
          children: [t ? "STOP" : "START", " CONNECTING"],
        }),
      }),
    ],
  });
}
(async () => (
  lt(ut),
  dt(({ message: t }) => {
    switch (t.id) {
      case x.ConnectionEstablished:
        return Ft(!0);
      case x.RunningStateUpdated:
        return N(t.content);
      case x.ButtonClicksCountUpdated:
        return Ht(t.content);
    }
  }),
  Vt(() => {
    const t = _();
    t && (z({ message: { id: x.StartAutoConnect }, port: t }), N(!0));
  }),
  Wt(() => {
    const t = _();
    t && (z({ message: { id: x.StopAutoConnect }, port: t }), N(!1));
  }),
  await mt(),
  await $t(),
  Yt()
))();
