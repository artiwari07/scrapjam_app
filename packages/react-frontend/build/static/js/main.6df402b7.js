/*! For license information please see main.6df402b7.js.LICENSE.txt */
(() => {
  var e = {
      1856: (e, t, n) => {
        "use strict";
        function r(e) {
          var t,
            n,
            o = "";
          if ("string" == typeof e || "number" == typeof e) o += e;
          else if ("object" == typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            else for (t in e) e[t] && (o && (o += " "), (o += t));
          return o;
        }
        function o() {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
          return o;
        }
        n.r(t), n.d(t, { clsx: () => o, default: () => a });
        const a = o;
      },
      457: (e, t, n) => {
        var r;
        !(function () {
          "use strict";
          var o = !(
              "undefined" === typeof window ||
              !window.document ||
              !window.document.createElement
            ),
            a = {
              canUseDOM: o,
              canUseWorkers: "undefined" !== typeof Worker,
              canUseEventListeners:
                o && !(!window.addEventListener && !window.attachEvent),
              canUseViewport: o && !!window.screen,
            };
          void 0 ===
            (r = function () {
              return a;
            }.call(t, n, t, e)) || (e.exports = r);
        })();
      },
      9541: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return function (t, n, r, o, a, i, l) {
              return e(t, n, l);
            };
          }
          function n(e) {
            return function (t, n, r, o) {
              if (!t || !n || "object" !== typeof t || "object" !== typeof n)
                return e(t, n, r, o);
              var a = o.get(t),
                i = o.get(n);
              if (a && i) return a === n && i === t;
              o.set(t, n), o.set(n, t);
              var l = e(t, n, r, o);
              return o.delete(t), o.delete(n), l;
            };
          }
          function r(e, t) {
            var n = {};
            for (var r in e) n[r] = e[r];
            for (var r in t) n[r] = t[r];
            return n;
          }
          function o(e) {
            return e.constructor === Object || null == e.constructor;
          }
          function a(e) {
            return "function" === typeof e.then;
          }
          function i(e, t) {
            return e === t || (e !== e && t !== t);
          }
          var l = "[object Arguments]",
            s = "[object Boolean]",
            u = "[object Date]",
            c = "[object RegExp]",
            f = "[object Map]",
            d = "[object Number]",
            p = "[object Object]",
            h = "[object Set]",
            m = "[object String]",
            g = Object.prototype.toString;
          function y(e) {
            var t = e.areArraysEqual,
              n = e.areDatesEqual,
              r = e.areMapsEqual,
              y = e.areObjectsEqual,
              v = e.areRegExpsEqual,
              b = e.areSetsEqual,
              w = (0, e.createIsNestedEqual)(S);
            function S(e, S, x) {
              if (e === S) return !0;
              if (!e || !S || "object" !== typeof e || "object" !== typeof S)
                return e !== e && S !== S;
              if (o(e) && o(S)) return y(e, S, w, x);
              var k = Array.isArray(e),
                E = Array.isArray(S);
              if (k || E) return k === E && t(e, S, w, x);
              var O = g.call(e);
              return (
                O === g.call(S) &&
                (O === u
                  ? n(e, S, w, x)
                  : O === c
                    ? v(e, S, w, x)
                    : O === f
                      ? r(e, S, w, x)
                      : O === h
                        ? b(e, S, w, x)
                        : O === p || O === l
                          ? !a(e) && !a(S) && y(e, S, w, x)
                          : (O === s || O === d || O === m) &&
                            i(e.valueOf(), S.valueOf()))
              );
            }
            return S;
          }
          function v(e, t, n, r) {
            var o = e.length;
            if (t.length !== o) return !1;
            for (; o-- > 0; ) if (!n(e[o], t[o], o, o, e, t, r)) return !1;
            return !0;
          }
          var b = n(v);
          function w(e, t) {
            return i(e.valueOf(), t.valueOf());
          }
          function S(e, t, n, r) {
            var o = e.size === t.size;
            if (!o) return !1;
            if (!e.size) return !0;
            var a = {},
              i = 0;
            return (
              e.forEach(function (l, s) {
                if (o) {
                  var u = !1,
                    c = 0;
                  t.forEach(function (o, f) {
                    u ||
                      a[c] ||
                      !(u = n(s, f, i, c, e, t, r) && n(l, o, s, f, e, t, r)) ||
                      (a[c] = !0),
                      c++;
                  }),
                    i++,
                    (o = u);
                }
              }),
              o
            );
          }
          var x = n(S),
            k = "_owner",
            E = Object.prototype.hasOwnProperty;
          function O(e, t, n, r) {
            var o,
              a = Object.keys(e),
              i = a.length;
            if (Object.keys(t).length !== i) return !1;
            for (; i-- > 0; ) {
              if ((o = a[i]) === k) {
                var l = !!e.$$typeof,
                  s = !!t.$$typeof;
                if ((l || s) && l !== s) return !1;
              }
              if (!E.call(t, o) || !n(e[o], t[o], o, o, e, t, r)) return !1;
            }
            return !0;
          }
          var C = n(O);
          function _(e, t) {
            return e.source === t.source && e.flags === t.flags;
          }
          function P(e, t, n, r) {
            var o = e.size === t.size;
            if (!o) return !1;
            if (!e.size) return !0;
            var a = {};
            return (
              e.forEach(function (i, l) {
                if (o) {
                  var s = !1,
                    u = 0;
                  t.forEach(function (o, c) {
                    s || a[u] || !(s = n(i, o, l, c, e, t, r)) || (a[u] = !0),
                      u++;
                  }),
                    (o = s);
                }
              }),
              o
            );
          }
          var R = n(P),
            z = Object.freeze({
              areArraysEqual: v,
              areDatesEqual: w,
              areMapsEqual: S,
              areObjectsEqual: O,
              areRegExpsEqual: _,
              areSetsEqual: P,
              createIsNestedEqual: t,
            }),
            D = Object.freeze({
              areArraysEqual: b,
              areDatesEqual: w,
              areMapsEqual: x,
              areObjectsEqual: C,
              areRegExpsEqual: _,
              areSetsEqual: R,
              createIsNestedEqual: t,
            }),
            N = y(z);
          function T(e, t) {
            return N(e, t, void 0);
          }
          var j = y(
            r(z, {
              createIsNestedEqual: function () {
                return i;
              },
            }),
          );
          function M(e, t) {
            return j(e, t, void 0);
          }
          var L = y(D);
          function A(e, t) {
            return L(e, t, new WeakMap());
          }
          var F = y(
            r(D, {
              createIsNestedEqual: function () {
                return i;
              },
            }),
          );
          function U(e, t) {
            return F(e, t, new WeakMap());
          }
          function I(e) {
            return y(r(z, e(z)));
          }
          function W(e) {
            var t = y(r(D, e(D)));
            return function (e, n, r) {
              return void 0 === r && (r = new WeakMap()), t(e, n, r);
            };
          }
          (e.circularDeepEqual = A),
            (e.circularShallowEqual = U),
            (e.createCustomCircularEqual = W),
            (e.createCustomEqual = I),
            (e.deepEqual = T),
            (e.sameValueZeroEqual = i),
            (e.shallowEqual = M),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      2102: (e, t, n) => {
        "use strict";
        var r = n(1369);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      4974: (e, t, n) => {
        e.exports = n(2102)();
      },
      1369: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      2610: (e, t, n) => {
        "use strict";
        var r = n(969),
          o = n(8019);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (o = o.type) || (4 === o && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          O = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          D = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var T = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (j && e[j]) || e["@@iterator"])
              ? e
              : null;
        }
        var L,
          A = Object.assign;
        function F(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var U = !1;
        function I(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case x:
              return "Portal";
            case O:
              return "Profiler";
            case E:
              return "StrictMode";
            case R:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case D:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function B(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          K(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ae(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = A(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          ke = null,
          Ee = null;
        function Oe(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof xe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = xo(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function _e() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Oe(e), t))
              for (e = 0; e < t.length; e++) Oe(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Re() {}
        var ze = !1;
        function De(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (ze = !1), (null !== ke || null !== Ee) && (Re(), _e());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (c)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (ce) {
            Te = !1;
          }
        function Me(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Le = !1,
          Ae = null,
          Fe = !1,
          Ue = null,
          Ie = {
            onError: function (e) {
              (Le = !0), (Ae = e);
            },
          };
        function We(e, t, n, r, o, a, i, l, s) {
          (Le = !1), (Ae = null), Me.apply(Ie, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (He(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return qe(o), e;
                    if (i === r) return qe(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = o.unstable_scheduleCallback,
          Xe = o.unstable_cancelCallback,
          Ye = o.unstable_shouldYield,
          Qe = o.unstable_requestPaint,
          Ke = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          xt,
          kt,
          Et,
          Ot,
          Ct = !1,
          _t = [],
          Pt = null,
          Rt = null,
          zt = null,
          Dt = new Map(),
          Nt = new Map(),
          Tt = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Rt = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Dt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function At(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void Ot(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function It() {
          (Ct = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Rt && Ft(Rt) && (Rt = null),
            null !== zt && Ft(zt) && (zt = null),
            Dt.forEach(Ut),
            Nt.forEach(Ut);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, It)));
        }
        function Ht(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < _t.length) {
            Wt(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Wt(Pt, e),
              null !== Rt && Wt(Rt, e),
              null !== zt && Wt(zt, e),
              Dt.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            At(n), null === n.blockedOn && Tt.shift();
        }
        var Bt = w.ReactCurrentBatchConfig,
          qt = !0;
        function $t(e, t, n, r) {
          var o = bt,
            a = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = o), (Bt.transition = a);
          }
        }
        function Vt(e, t, n, r) {
          var o = bt,
            a = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = o), (Bt.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          if (qt) {
            var o = Yt(e, t, n, r);
            if (null === o) qr(e, t, r, Xt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Pt = Lt(Pt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Rt = Lt(Rt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (zt = Lt(zt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Dt.set(a, Lt(Dt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Nt.set(a, Lt(Nt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && St(a),
                  null === (a = Yt(e, t, n, r)) && qr(e, t, r, Xt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Yt(e, t, n, r) {
          if (((Xt = null), null !== (e = bo((e = Se(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = "value" in Kt ? Kt.value : Kt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          fn = A({}, un, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = A({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: On,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(A({}, pn, { dataTransfer: 0 })),
          gn = on(A({}, fn, { relatedTarget: 0 })),
          yn = on(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          vn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          wn = on(A({}, un, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function On() {
          return En;
        }
        var Cn = A({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? xn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: On,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          _n = on(Cn),
          Pn = on(
            A({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Rn = on(
            A({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: On,
            }),
          ),
          zn = on(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Dn = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = on(Dn),
          Tn = [9, 13, 27, 32],
          jn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var Ln = c && "TextEvent" in window && !Mn,
          An = c && (!jn || (Mn && 8 < Mn && 11 >= Mn)),
          Fn = String.fromCharCode(32),
          Un = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Bn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Bn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ce(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          Gn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function Yn(e) {
          if (G(So(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Kn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (Gn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Gn)) {
            var t = [];
            $n(t, Gn, e, Se(e)), De(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Gn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Gn);
        }
        function ar(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== X(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Vr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Or(e) {
          if (kr[e]) return kr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Cr = Or("animationend"),
          _r = Or("animationiteration"),
          Pr = Or("animationstart"),
          Rr = Or("transitionend"),
          zr = new Map(),
          Dr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Nr(e, t) {
          zr.set(e, t), s(t, [e]);
        }
        for (var Tr = 0; Tr < Dr.length; Tr++) {
          var jr = Dr[Tr];
          Nr(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Nr(Cr, "onAnimationEnd"),
          Nr(_r, "onAnimationIteration"),
          Nr(Pr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Rr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr),
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((We.apply(this, arguments), Le)) {
                if (!Le) throw Error(a(198));
                var c = Ae;
                (Le = !1), (Ae = null), Fe || ((Fe = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e;
                  Ar(o, l, u), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ar(o, l, u), (a = s);
                }
            }
          }
          if (Fe) throw ((e = Ue), (Fe = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Br(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Br(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Br(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = Vt;
              break;
            default:
              o = Gt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          De(function () {
            var r = a,
              o = Se(n),
              i = [];
            e: {
              var l = zr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Rn;
                    break;
                  case Cr:
                  case _r:
                  case Pr:
                    s = yn;
                    break;
                  case Rr:
                    s = zn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Ne(h, d)) &&
                        c.push($r(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (f = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : So(s)),
                  (p = null == u ? l : So(u)),
                  ((l = new c(m, h + "leave", s, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Gr(p)) h++;
                    for (p = 0, m = d; m; m = Gr(m)) p++;
                    for (; 0 < h - p; ) (c = Gr(c)), h--;
                    for (; 0 < p - h; ) (d = Gr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Gr(c)), (d = Gr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(i, l, s, c, !1),
                  null !== u && null !== f && Xr(i, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? So(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Qn;
              else if (qn(l))
                if (Kn) g = ir;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? $n(i, g, n, o)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? So(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var v;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (v = en())
                    : ((Jt = "value" in (Kt = o) ? Kt.value : Kt.textContent),
                      (Hn = !0))),
                0 < (y = Vr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Wn(n)) && (b.data = v))),
                (v = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!jn && In(e, t))
                          ? ((e = en()), (Zt = Jt = Kt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Fr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Ne(e, n)) && r.unshift($r(e, a, o)),
              null != (a = Ne(e, t)) && r.push($r(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Ne(n, a)) && i.unshift($r(n, s, l))
                : o || (null != (s = Ne(n, a)) && i.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Qr, "");
        }
        function Jr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo);
                  }
                : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function so(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ht(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          yo = "__reactListeners$" + fo,
          vo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function xo(e) {
          return e[ho] || null;
        }
        var ko = [],
          Eo = -1;
        function Oo(e) {
          return { current: e };
        }
        function Co(e) {
          0 > Eo || ((e.current = ko[Eo]), (ko[Eo] = null), Eo--);
        }
        function _o(e, t) {
          Eo++, (ko[Eo] = e.current), (e.current = t);
        }
        var Po = {},
          Ro = Oo(Po),
          zo = Oo(!1),
          Do = Po;
        function No(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function To(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function jo() {
          Co(zo), Co(Ro);
        }
        function Mo(e, t, n) {
          if (Ro.current !== Po) throw Error(a(168));
          _o(Ro, t), _o(zo, n);
        }
        function Lo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, B(e) || "Unknown", o));
          return A({}, n, r);
        }
        function Ao(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Po),
            (Do = Ro.current),
            _o(Ro, e),
            _o(zo, zo.current),
            !0
          );
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Lo(e, t, Do)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Co(zo),
              Co(Ro),
              _o(Ro, e))
            : Co(zo),
            _o(zo, n);
        }
        var Uo = null,
          Io = !1,
          Wo = !1;
        function Ho(e) {
          null === Uo ? (Uo = [e]) : Uo.push(e);
        }
        function Bo() {
          if (!Wo && null !== Uo) {
            Wo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Uo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Uo = null), (Io = !1);
            } catch (o) {
              throw (null !== Uo && (Uo = Uo.slice(e + 1)), Ge(Ze, Bo), o);
            } finally {
              (bt = t), (Wo = !1);
            }
          }
          return null;
        }
        var qo = [],
          $o = 0,
          Vo = null,
          Go = 0,
          Xo = [],
          Yo = 0,
          Qo = null,
          Ko = 1,
          Jo = "";
        function Zo(e, t) {
          (qo[$o++] = Go), (qo[$o++] = Vo), (Vo = e), (Go = t);
        }
        function ea(e, t, n) {
          (Xo[Yo++] = Ko), (Xo[Yo++] = Jo), (Xo[Yo++] = Qo), (Qo = e);
          var r = Ko;
          e = Jo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Ko = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Jo = a + e);
          } else (Ko = (1 << a) | (n << o) | r), (Jo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Vo; )
            (Vo = qo[--$o]), (qo[$o] = null), (Go = qo[--$o]), (qo[$o] = null);
          for (; e === Qo; )
            (Qo = Xo[--Yo]),
              (Xo[Yo] = null),
              (Jo = Xo[--Yo]),
              (Xo[Yo] = null),
              (Ko = Xo[--Yo]),
              (Xo[Yo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Nu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qo ? { id: Ko, overflow: Jo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && sa(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function da(e) {
          if (e !== ra) return !1;
          if (!aa) return fa(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = uo(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = w.ReactCurrentBatchConfig;
        function ya(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var va = Oo(null),
          ba = null,
          wa = null,
          Sa = null;
        function xa() {
          Sa = wa = ba = null;
        }
        function ka(e) {
          var t = va.current;
          Co(va), (e._currentValue = t);
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Oa(e, t) {
          (ba = e),
            (Sa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Ca(e) {
          var t = e._currentValue;
          if (Sa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var _a = null;
        function Pa(e) {
          null === _a ? (_a = [e]) : _a.push(e);
        }
        function Ra(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Pa(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            za(e, r)
          );
        }
        function za(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Da = !1;
        function Na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ta(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ja(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ma(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Rs))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              za(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Pa(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            za(e, n)
          );
        }
        function La(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Aa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fa(e, t, n, r) {
          var o = e.updateQueue;
          Da = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = A({}, f, d);
                      break e;
                    case 2:
                      Da = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (As |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ua(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ia = new r.Component().refs;
        function Wa(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ha = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = ja(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ma(e, a, o)) && (ru(t, e, o, r), La(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = ja(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ma(e, a, o)) && (ru(t, e, o, r), La(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = ja(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Ma(e, o, r)) && (ru(t, e, r, n), La(t, e, r));
          },
        };
        function Ba(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(o, a);
        }
        function qa(e, t, n) {
          var r = !1,
            o = Po,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ca(a))
              : ((o = To(t) ? Do : Ro.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? No(e, o)
                  : Po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ha),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function $a(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ha.enqueueReplaceState(t, t.state, null);
        }
        function Va(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ia), Na(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Ca(a))
            : ((a = To(t) ? Do : Ro.current), (o.context = No(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Wa(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ha.enqueueReplaceState(o, o.state, null),
              Fa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Ga(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ia && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Xa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Ya(e) {
          return (0, e._init)(e._payload);
        }
        function Qa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = ju(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ("object" === typeof a &&
                      null !== a &&
                      a.$$typeof === N &&
                      Ya(a) === t.type))
                ? (((r = o(t, n.props)).ref = Ga(e, t, n)), (r.return = e), r)
                : (((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = Ga(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = Ga(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Uu(t, e.mode, n)).return = e), t;
                case N:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = Lu(t, e.mode, n, null)).return = e), t;
              Xa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? u(e, t, n, r) : null;
                case x:
                  return n.key === o ? c(e, t, n, r) : null;
                case N:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== o ? null : f(e, t, n, r, null);
              Xa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case N:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Xa(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (
              var u = null, c = null, f = a, m = (a = 0), g = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var y = p(o, f, l[m], s);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              e && f && null === y.alternate && t(o, f),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (f = g);
            }
            if (m === l.length) return n(o, f), aa && Zo(o, m), u;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(o, l[m], s)) &&
                  ((a = i(f, a, m)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return aa && Zo(o, m), u;
            }
            for (f = r(o, f); m < l.length; m++)
              null !== (g = h(f, o, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          function g(o, l, s, u) {
            var c = M(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), m = l, g = (l = 0), y = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (v.done) return n(o, m), aa && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = d(o, v.value, u)) &&
                  ((l = i(v, l, g)),
                  null === f ? (c = v) : (f.sibling = v),
                  (f = v));
              return aa && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = s.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (l = i(v, l, g)),
                null === f ? (c = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              c
            );
          }
          return function e(r, a, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === N &&
                            Ya(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Ga(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((a = Lu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = a))
                      : (((s = Mu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Ga(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Uu(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case N:
                  return e(r, a, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, a, i, s);
              if (M(i)) return g(r, a, i, s);
              Xa(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Fu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Ka = Qa(!0),
          Ja = Qa(!1),
          Za = {},
          ei = Oo(Za),
          ti = Oo(Za),
          ni = Oo(Za);
        function ri(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((_o(ni, t), _o(ti, e), _o(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Co(ei), _o(ei, t);
        }
        function ai() {
          Co(ei), Co(ti), Co(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (_o(ti, e), _o(ei, n));
        }
        function li(e) {
          ti.current === e && (Co(ei), Co(ti));
        }
        var si = Oo(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          gi = null,
          yi = null,
          vi = !1,
          bi = !1,
          wi = 0,
          Si = 0;
        function xi() {
          throw Error(a(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (yi = gi = null),
                (t.updateQueue = null),
                (di.current = ul),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== gi && null !== gi.next),
            (hi = 0),
            (yi = gi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Oi() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function _i() {
          if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (gi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ri(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = gi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (mi.lanes |= f),
                  (As |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (As |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function zi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Di() {}
        function Ni(e, t) {
          var n = mi,
            r = _i(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            qi(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ui(9, ji.bind(null, n, r, o, t), void 0, null),
              null === zs)
            )
              throw Error(a(349));
            0 !== (30 & hi) || Ti(n, t, o);
          }
          return o;
        }
        function Ti(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function ji(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Li(t) && Ai(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            Li(t) && Ai(e);
          });
        }
        function Li(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ai(e) {
          var t = za(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ui(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ii() {
          return _i().memoizedState;
        }
        function Wi(e, t, n, r) {
          var o = Ci();
          (mi.flags |= e),
            (o.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var o = _i();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((a = i.destroy), null !== r && ki(r, i.deps)))
              return void (o.memoizedState = Ui(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Ui(1 | t, n, a, r));
        }
        function Bi(e, t) {
          return Wi(8390656, 8, e, t);
        }
        function qi(e, t) {
          return Hi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Hi(4, 2, e, t);
        }
        function Vi(e, t) {
          return Hi(4, 4, e, t);
        }
        function Gi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Xi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, Gi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Qi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ki(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (As |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return _i().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            ol(t, n);
          else if (null !== (n = Ra(e, t, n, r))) {
            ru(n, e, r, tu()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((o.next = o), Pa(t))
                      : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Ra(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ol(e, t) {
          bi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var il = {
            readContext: Ca,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ca,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ca,
            useEffect: Bi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Wi(4194308, 4, Gi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Wi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Wi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = Ci();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === zs)) throw Error(a(349));
                0 !== (30 & hi) || Ti(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Bi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ui(9, ji.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = zs.identifierPrefix;
              if (aa) {
                var n = Jo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ko & ~(1 << (32 - it(Ko) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Si++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ca,
            useCallback: Qi,
            useContext: Ca,
            useEffect: qi,
            useImperativeHandle: Xi,
            useInsertionEffect: $i,
            useLayoutEffect: Vi,
            useMemo: Ki,
            useReducer: Ri,
            useRef: Ii,
            useState: function () {
              return Ri(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Ji(_i(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Pi)[0], _i().memoizedState];
            },
            useMutableSource: Di,
            useSyncExternalStore: Ni,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ca,
            useCallback: Qi,
            useContext: Ca,
            useEffect: qi,
            useImperativeHandle: Xi,
            useInsertionEffect: $i,
            useLayoutEffect: Vi,
            useMemo: Ki,
            useReducer: zi,
            useRef: Ii,
            useState: function () {
              return zi(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = _i();
              return null === gi
                ? (t.memoizedState = e)
                : Ji(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [zi(Pi)[0], _i().memoizedState];
            },
            useMutableSource: Di,
            useSyncExternalStore: Ni,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = ja(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Vs = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = ja(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ja(-1, 1)).tag = 2), Ma(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Ja(t, null, n, r) : Ka(t, e.child, n, r);
        }
        function xl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Oa(t, o),
            (r = Ei(e, t, n, r, a, o)),
            (n = Oi()),
            null === e || wl
              ? (aa && n && ta(t), (t.flags |= 1), Sl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                $l(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Tu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Mu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), El(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = ju(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), $l(e, t, o);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return _l(e, t, n, r, o);
        }
        function Ol(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _o(js, Ts),
                (Ts |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _o(js, Ts),
                  (Ts |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                _o(js, Ts),
                (Ts |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _o(js, Ts),
              (Ts |= r);
          return Sl(e, t, o, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, o) {
          var a = To(n) ? Do : Ro.current;
          return (
            (a = No(t, a)),
            Oa(t, o),
            (n = Ei(e, t, n, r, a, o)),
            (r = Oi()),
            null === e || wl
              ? (aa && r && ta(t), (t.flags |= 1), Sl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                $l(e, t, o))
          );
        }
        function Pl(e, t, n, r, o) {
          if (To(n)) {
            var a = !0;
            Ao(t);
          } else a = !1;
          if ((Oa(t, o), null === t.stateNode))
            ql(e, t), qa(t, n, r), Va(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ca(u))
              : (u = No(t, (u = To(n) ? Do : Ro.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && $a(t, i, r, u)),
              (Da = !1);
            var d = t.memoizedState;
            (i.state = d),
              Fa(t, r, i, o),
              (s = t.memoizedState),
              l !== r || d !== s || zo.current || Da
                ? ("function" === typeof c &&
                    (Wa(t, n, c, r), (s = t.memoizedState)),
                  (l = Da || Ba(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ta(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : ya(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ca(s))
                : (s = No(t, (s = To(n) ? Do : Ro.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && $a(t, i, r, s)),
              (Da = !1),
              (d = t.memoizedState),
              (i.state = d),
              Fa(t, r, i, o);
            var h = t.memoizedState;
            l !== f || d !== h || zo.current || Da
              ? ("function" === typeof p &&
                  (Wa(t, n, p, r), (h = t.memoizedState)),
                (u = Da || Ba(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Rl(e, t, n, r, a, o);
        }
        function Rl(e, t, n, r, o, a) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Fo(t, n, !1), $l(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ka(t, e.child, null, a)),
                (t.child = Ka(t, null, l, a)))
              : Sl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          );
        }
        function zl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Mo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Mo(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Dl(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var Nl,
          Tl,
          jl,
          Ml,
          Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Al(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            _o(si, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Au(s, o, 0, null)),
                      (e = Lu(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Al(n)),
                      (t.memoizedState = Ll),
                      e)
                    : Ul(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = Au(
                        { mode: "visible", children: r.children },
                        o,
                        0,
                        null,
                      )),
                      ((i = Lu(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Ka(t, e.child, null, l),
                      (t.child.memoizedState = Al(l)),
                      (t.memoizedState = Ll),
                      i);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Il(e, t, l, (r = fl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = zs)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), za(e, o), ru(r, e, o, -1));
                }
                return gu(), Il(e, t, l, (r = fl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Xo[Yo++] = Ko),
                    (Xo[Yo++] = Jo),
                    (Xo[Yo++] = Qo),
                    (Ko = e.id),
                    (Jo = e.overflow),
                    (Qo = t)),
                  (t = Ul(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = ju(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = ju(r, l))
                : ((l = Lu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Al(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ll),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = ju(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Ul(e, t) {
          return (
            ((t = Au(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && ma(r),
            Ka(t, e.child, null, n),
            ((e = Ul(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Wl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n);
        }
        function Hl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Bl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Wl(e, n, t);
                else if (19 === e.tag) Wl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_o(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hl(t, !0, n, null, a);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ql(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (As |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = ju((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = ju(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vl(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return To(t.type) && jo(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Co(zo),
                Co(Ro),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (lu(ia), (ia = null)))),
                Tl(e, t),
                Gl(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                jl(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = ri(ei.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Mr.length; o++) Ur(Mr[o], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Q(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Ur("invalid", r);
                  }
                  for (var s in (ve(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      V(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Nl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Mr.length; o++) Ur(Mr[o], e);
                        o = r;
                        break;
                      case "source":
                        Ur("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (o = r);
                        break;
                      case "details":
                        Ur("toggle", e), (o = r);
                        break;
                      case "input":
                        Q(e, r), (o = Y(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = A({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : "children" === i
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && de(e, c)
                                : "number" === typeof c && de(e, "" + c)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    "onScroll" === i &&
                                    Ur("scroll", e)
                                  : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        V(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        V(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (Co(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== ia && (lu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Ms && (Ms = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                ai(),
                Tl(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Gl(t),
                null
              );
            case 10:
              return ka(t.type._context), Gl(t), null;
            case 19:
              if ((Co(si), null === (i = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Vl(i, !1);
                else {
                  if (0 !== Ms || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Vl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _o(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > Bs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !aa)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > Bs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = si.current),
                  _o(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ts) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Yl(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                To(t.type) && jo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Co(zo),
                Co(Ro),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Co(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Co(si), null;
            case 4:
              return ai(), null;
            case 10:
              return ka(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Nl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Tl = function () {}),
          (jl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = Y(e, o)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (o = A({}, o, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var s = o[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                        ? ("string" !== typeof u && "number" !== typeof u) ||
                          (i = i || []).push(c, "" + u)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && "onScroll" === c && Ur("scroll", e),
                              i || s === u || (i = []))
                            : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Kl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ou(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Ou(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function os(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[go],
              delete t[yo],
              delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var fs = null,
          ds = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || es(n, t);
            case 6:
              var r = fs,
                o = ds;
              (fs = null),
                ps(e, t, n),
                (ds = o),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fs.removeChild(n.stateNode));
              break;
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? so(e.parentNode, n)
                      : 1 === e.nodeType && so(e, n),
                    Ht(e))
                  : so(fs, n.stateNode));
              break;
            case 4:
              (r = fs),
                (o = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                ps(e, t, n),
                (fs = r),
                (ds = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Ou(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Kl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Ru.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (fs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (fs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === fs) throw Error(a(160));
                hs(i, l, o), (fs = null), (ds = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Ou(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e);
                } catch (g) {
                  Ou(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Ou(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  de(o, "");
                } catch (g) {
                  Ou(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(o, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? ge(o, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(o, d)
                          : "children" === f
                            ? de(o, d)
                            : b(o, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        J(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (g) {
                    Ou(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Ou(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Ou(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), vs(e);
              break;
            case 13:
              gs(t, e),
                vs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hs = Ke())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (c = Kl) || f), gs(t, e), (Kl = c))
                  : gs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Ou(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : xs(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Ou(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        Ou(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ""), (r.flags &= -33)),
                    cs(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Ou(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Zl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var o = Zl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Ql;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Kl;
                l = Ql;
                var u = Kl;
                if (((Ql = i), (Kl = s) && !u))
                  for (Zl = o; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(o)
                        : null !== s
                          ? ((s.return = i), (Zl = s))
                          : ks(o);
                for (; null !== a; ) (Zl = a), ws(a, t, n), (a = a.sibling);
                (Zl = o), (Ql = l), (Kl = u);
              }
              Ss(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Zl = a))
                : Ss(e);
          }
        }
        function Ss(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || os(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ya(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ua(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ua(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Kl || (512 & t.flags && as(t));
              } catch (p) {
                Ou(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    Ou(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Ou(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Ou(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Ou(t, i, s);
                  }
              }
            } catch (s) {
              Ou(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Es,
          Os = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          _s = w.ReactCurrentOwner,
          Ps = w.ReactCurrentBatchConfig,
          Rs = 0,
          zs = null,
          Ds = null,
          Ns = 0,
          Ts = 0,
          js = Oo(0),
          Ms = 0,
          Ls = null,
          As = 0,
          Fs = 0,
          Us = 0,
          Is = null,
          Ws = null,
          Hs = 0,
          Bs = 1 / 0,
          qs = null,
          $s = !1,
          Vs = null,
          Gs = null,
          Xs = !1,
          Ys = null,
          Qs = 0,
          Ks = 0,
          Js = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Rs) ? Ke() : -1 !== Zs ? Zs : (Zs = Ke());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Rs) && 0 !== Ns
              ? Ns & -Ns
              : null !== ga.transition
                ? (0 === eu && (eu = mt()), eu)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Js = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & Rs) && e === zs) ||
              (e === zs && (0 === (2 & Rs) && (Fs |= n), 4 === Ms && su(e, Ns)),
              ou(e, r),
              1 === n &&
                0 === Rs &&
                0 === (1 & t.mode) &&
                ((Bs = Ke() + 500), Io && Bo()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === zs ? Ns : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Io = !0), Ho(e);
                  })(uu.bind(null, e))
                : Ho(uu.bind(null, e)),
                io(function () {
                  0 === (6 & Rs) && Bo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = zu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Rs))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === zs ? Ns : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var o = Rs;
            Rs |= 2;
            var i = mu();
            for (
              (zs === e && Ns === t) ||
              ((qs = null), (Bs = Ke() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            xa(),
              (Cs.current = i),
              (Rs = o),
              null !== Ds ? (t = 0) : ((zs = null), (Ns = 0), (t = Ms));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = Ls), pu(e, 0), su(e, r), ou(e, Ke()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Ls), pu(e, 0), su(e, r), ou(e, Ke()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  xu(e, Ws, qs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(xu.bind(null, e, Ws, qs), t);
                    break;
                  }
                  xu(e, Ws, qs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Os(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(xu.bind(null, e, Ws, qs), r);
                    break;
                  }
                  xu(e, Ws, qs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Ke()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ws), (Ws = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Ws ? (Ws = e) : Ws.push.apply(Ws, e);
        }
        function su(e, t) {
          for (
            t &= ~Us,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Rs)) throw Error(a(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ou(e, Ke()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ls), pu(e, 0), su(e, t), ou(e, Ke()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Ws, qs),
            ou(e, Ke()),
            null
          );
        }
        function cu(e, t) {
          var n = Rs;
          Rs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rs = n) && ((Bs = Ke() + 500), Io && Bo());
          }
        }
        function fu(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Rs) && ku();
          var t = Rs;
          Rs |= 1;
          var n = Ps.transition,
            r = bt;
          try {
            if (((Ps.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ps.transition = n), 0 === (6 & (Rs = t)) && Bo();
          }
        }
        function du() {
          (Ts = js.current), Co(js);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Ds))
            for (n = Ds.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    jo();
                  break;
                case 3:
                  ai(), Co(zo), Co(Ro), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Co(si);
                  break;
                case 10:
                  ka(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((zs = e),
            (Ds = e = ju(e.current, null)),
            (Ns = Ts = t),
            (Ms = 0),
            (Ls = null),
            (Us = Fs = As = 0),
            (Ws = Is = null),
            null !== _a)
          ) {
            for (t = 0; t < _a.length; t++)
              if (null !== (r = (n = _a[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            _a = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ds;
            try {
              if ((xa(), (di.current = il), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((hi = 0),
                (yi = gi = mi = null),
                (bi = !1),
                (wi = 0),
                (_s.current = null),
                null === n || null === n.return)
              ) {
                (Ms = 1), (Ls = t), (Ds = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ns),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vl(y, l, s, 0, t),
                      ma(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Ms && (Ms = 2),
                  null === Is ? (Is = [i]) : Is.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Aa(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Aa(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Su(n);
            } catch (w) {
              (t = w), Ds === n && null !== n && (Ds = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cs.current;
          return (Cs.current = il), null === e ? il : e;
        }
        function gu() {
          (0 !== Ms && 3 !== Ms && 2 !== Ms) || (Ms = 4),
            null === zs ||
              (0 === (268435455 & As) && 0 === (268435455 & Fs)) ||
              su(zs, Ns);
        }
        function yu(e, t) {
          var n = Rs;
          Rs |= 2;
          var r = mu();
          for ((zs === e && Ns === t) || ((qs = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((xa(), (Rs = n), (Cs.current = r), null !== Ds))
            throw Error(a(261));
          return (zs = null), (Ns = 0), Ms;
        }
        function vu() {
          for (; null !== Ds; ) wu(Ds);
        }
        function bu() {
          for (; null !== Ds && !Ye(); ) wu(Ds);
        }
        function wu(e) {
          var t = Es(e.alternate, e, Ts);
          (e.memoizedProps = e.pendingProps),
            null === t ? Su(e) : (Ds = t),
            (_s.current = null);
        }
        function Su(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, Ts))) return void (Ds = n);
            } else {
              if (null !== (n = Yl(n, t)))
                return (n.flags &= 32767), void (Ds = n);
              if (null === e) return (Ms = 6), void (Ds = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ds = t);
            Ds = t = e;
          } while (null !== t);
          0 === Ms && (Ms = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            o = Ps.transition;
          try {
            (Ps.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ys);
                if (0 !== (6 & Rs)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === zs && ((Ds = zs = null), (Ns = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    zu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ps.transition), (Ps.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Rs;
                  (Rs |= 4),
                    (_s.current = null),
                    (function (e, t) {
                      if (((eo = qt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (s = l + o),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          qt = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ya(t.type, g),
                                          y,
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (S) {
                              Ou(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    ys(n, e),
                    hr(to),
                    (qt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bs(n, e, o),
                    Qe(),
                    (Rs = s),
                    (bt = l),
                    (Ps.transition = i);
                } else e.current = n;
                if (
                  (Xs && ((Xs = !1), (Ys = e), (Qs = o)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if ($s) throw (($s = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Ks++
                      : ((Ks = 0), (Js = e))
                    : (Ks = 0),
                  Bo();
              })(e, t, n, r);
          } finally {
            (Ps.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ys) {
            var e = wt(Qs),
              t = Ps.transition,
              n = bt;
            try {
              if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Qs = 0), 0 !== (6 & Rs)))
                  throw Error(a(331));
                var o = Rs;
                for (Rs |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((is(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Zl = v);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (x) {
                          Ou(s, s.return, x);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), (Zl = S);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((Rs = o),
                  Bo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ps.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Ma(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), ou(e, t));
        }
        function Ou(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Ma(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zs === e &&
              (Ns & n) === n &&
              (4 === Ms ||
              (3 === Ms && (130023424 & Ns) === Ns && 500 > Ke() - Hs)
                ? pu(e, 0)
                : (Us |= n)),
            ou(e, t);
        }
        function _u(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = za(e, t)) && (yt(e, t, n), ou(e, n));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _u(e, n);
        }
        function Ru(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), _u(e, n);
        }
        function zu(e, t) {
          return Ge(e, t);
        }
        function Du(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nu(e, t, n, r) {
          return new Du(e, t, n, r);
        }
        function Tu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ju(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Mu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Tu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Lu(n.children, o, i, t);
              case E:
                (l = 8), (o |= 8);
                break;
              case O:
                return (
                  ((e = Nu(12, n, t, 2 | o)).elementType = O), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Nu(13, n, t, o)).elementType = R), (e.lanes = i), e
                );
              case z:
                return (
                  ((e = Nu(19, n, t, o)).elementType = z), (e.lanes = i), e
                );
              case T:
                return Au(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case D:
                      l = 14;
                      break e;
                    case N:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nu(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Lu(e, t, n, r) {
          return ((e = Nu(7, e, r, t)).lanes = n), e;
        }
        function Au(e, t, n, r) {
          return (
            ((e = Nu(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Nu(6, e, null, t)).lanes = n), e;
        }
        function Uu(e, t, n) {
          return (
            ((t = Nu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Iu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Wu(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Iu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Nu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Na(a),
            e
          );
        }
        function Hu(e) {
          if (!e) return Po;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (To(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (To(n)) return Lo(e, n, t);
          }
          return t;
        }
        function Bu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Wu(n, r, !0, e, 0, a, 0, l, s)).context = Hu(null)),
            (n = e.current),
            ((a = ja((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ma(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ou(e, r),
            e
          );
        }
        function qu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = Hu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ja(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ma(o, t, i)) && (ru(e, o, i, a), La(e, o, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gu(e, t) {
          Vu(e, t), (e = e.alternate) && Vu(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || zo.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zl(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        To(t.type) && Ao(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        _o(va, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_o(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Fl(e, t, n)
                              : (_o(si, 1 & si.current),
                                null !== (e = $l(e, t, n)) ? e.sibling : null);
                        _o(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          _o(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ol(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Go, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              ql(e, t), (e = t.pendingProps);
              var o = No(t, Ro.current);
              Oa(t, n), (o = Ei(null, t, r, e, o, n));
              var i = Oi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    To(r) ? ((i = !0), Ao(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Na(t),
                    (o.updater = Ha),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Va(t, r, e, n),
                    (t = Rl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    Sl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (ql(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Tu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ya(r, e)),
                  o)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, ya(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                _l(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Pl(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 3:
              e: {
                if ((zl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Ta(e, t),
                  Fa(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Dl(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Dl(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ja(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                Cl(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ka(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                xl(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  _o(va, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !zo.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = ja(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ea(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ea(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                Sl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Oa(t, n),
                (r = r((o = Ca(o)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = ya((r = t.type), t.pendingProps)),
                kl(e, t, r, (o = ya(r.type, o)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ya(r, o)),
                ql(e, t),
                (t.tag = 1),
                To(r) ? ((e = !0), Ao(t)) : (e = !1),
                Oa(t, n),
                qa(t, r, o),
                Va(t, r, o, n),
                Rl(null, t, r, !0, e, n)
              );
            case 19:
              return Bl(e, t, n);
            case 22:
              return Ol(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Xu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = $u(i);
                l.call(e);
              };
            }
            qu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $u(i);
                    a.call(e);
                  };
                }
                var i = Bu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = Wu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[mo] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  qu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return $u(i);
        }
        (Qu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            qu(e, t, null, null);
          }),
          (Qu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  qu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              Tt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ou(t, Ke()),
                    0 === (6 & Rs) && ((Bs = Ke() + 500), Bo()));
                }
                break;
              case 13:
                fu(function () {
                  var t = za(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Gu(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = za(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Gu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = za(e, t);
              if (null !== n) ru(n, e, t, tu());
              Gu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ot = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = xo(r);
                      if (!o) throw Error(a(90));
                      G(r), J(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cu),
          (Re = fu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, So, xo, Ce, _e, cu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Xu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Wu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Xu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Bu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1879: (e, t, n) => {
        "use strict";
        var r = n(5749);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      5749: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(2610));
      },
      1849: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "DraggableCore", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          (t.default = void 0);
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (
              null === e ||
              ("object" !== typeof e && "function" !== typeof e)
            )
              return { default: e };
            var n = p(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(969)),
          o = d(n(4974)),
          a = d(n(5749)),
          i = d(n(1856)),
          l = n(1221),
          s = n(1271),
          u = n(3699),
          c = d(n(8007)),
          f = d(n(7022));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (p = function (e) {
            return e ? n : t;
          })(e);
        }
        function h() {
          return (
            (h = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            h.apply(this, arguments)
          );
        }
        function m(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class g extends r.Component {
          static getDerivedStateFromProps(e, t) {
            let { position: n } = e,
              { prevPropsPosition: r } = t;
            return !n || (r && n.x === r.x && n.y === r.y)
              ? null
              : ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
                  position: n,
                  prevPropsPosition: r,
                }),
                { x: n.x, y: n.y, prevPropsPosition: { ...n } });
          }
          constructor(e) {
            super(e),
              m(this, "onDragStart", (e, t) => {
                (0, f.default)("Draggable: onDragStart: %j", t);
                if (
                  !1 ===
                  this.props.onStart(e, (0, s.createDraggableData)(this, t))
                )
                  return !1;
                this.setState({ dragging: !0, dragged: !0 });
              }),
              m(this, "onDrag", (e, t) => {
                if (!this.state.dragging) return !1;
                (0, f.default)("Draggable: onDrag: %j", t);
                const n = (0, s.createDraggableData)(this, t),
                  r = { x: n.x, y: n.y, slackX: 0, slackY: 0 };
                if (this.props.bounds) {
                  const { x: e, y: t } = r;
                  (r.x += this.state.slackX), (r.y += this.state.slackY);
                  const [o, a] = (0, s.getBoundPosition)(this, r.x, r.y);
                  (r.x = o),
                    (r.y = a),
                    (r.slackX = this.state.slackX + (e - r.x)),
                    (r.slackY = this.state.slackY + (t - r.y)),
                    (n.x = r.x),
                    (n.y = r.y),
                    (n.deltaX = r.x - this.state.x),
                    (n.deltaY = r.y - this.state.y);
                }
                if (!1 === this.props.onDrag(e, n)) return !1;
                this.setState(r);
              }),
              m(this, "onDragStop", (e, t) => {
                if (!this.state.dragging) return !1;
                if (
                  !1 ===
                  this.props.onStop(e, (0, s.createDraggableData)(this, t))
                )
                  return !1;
                (0, f.default)("Draggable: onDragStop: %j", t);
                const n = { dragging: !1, slackX: 0, slackY: 0 };
                if (Boolean(this.props.position)) {
                  const { x: e, y: t } = this.props.position;
                  (n.x = e), (n.y = t);
                }
                this.setState(n);
              }),
              (this.state = {
                dragging: !1,
                dragged: !1,
                x: e.position ? e.position.x : e.defaultPosition.x,
                y: e.position ? e.position.y : e.defaultPosition.y,
                prevPropsPosition: { ...e.position },
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              !e.position ||
                e.onDrag ||
                e.onStop ||
                console.warn(
                  "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.",
                );
          }
          componentDidMount() {
            "undefined" !== typeof window.SVGElement &&
              this.findDOMNode() instanceof window.SVGElement &&
              this.setState({ isElementSVG: !0 });
          }
          componentWillUnmount() {
            this.setState({ dragging: !1 });
          }
          findDOMNode() {
            var e, t;
            return null !==
              (e =
                null === (t = this.props) ||
                void 0 === t ||
                null === (t = t.nodeRef) ||
                void 0 === t
                  ? void 0
                  : t.current) && void 0 !== e
              ? e
              : a.default.findDOMNode(this);
          }
          render() {
            const {
              axis: e,
              bounds: t,
              children: n,
              defaultPosition: o,
              defaultClassName: a,
              defaultClassNameDragging: u,
              defaultClassNameDragged: f,
              position: d,
              positionOffset: p,
              scale: m,
              ...g
            } = this.props;
            let y = {},
              v = null;
            const b = !Boolean(d) || this.state.dragging,
              w = d || o,
              S = {
                x: (0, s.canDragX)(this) && b ? this.state.x : w.x,
                y: (0, s.canDragY)(this) && b ? this.state.y : w.y,
              };
            this.state.isElementSVG
              ? (v = (0, l.createSVGTransform)(S, p))
              : (y = (0, l.createCSSTransform)(S, p));
            const x = (0, i.default)(n.props.className || "", a, {
              [u]: this.state.dragging,
              [f]: this.state.dragged,
            });
            return r.createElement(
              c.default,
              h({}, g, {
                onStart: this.onDragStart,
                onDrag: this.onDrag,
                onStop: this.onDragStop,
              }),
              r.cloneElement(r.Children.only(n), {
                className: x,
                style: { ...n.props.style, ...y },
                transform: v,
              }),
            );
          }
        }
        (t.default = g),
          m(g, "displayName", "Draggable"),
          m(g, "propTypes", {
            ...c.default.propTypes,
            axis: o.default.oneOf(["both", "x", "y", "none"]),
            bounds: o.default.oneOfType([
              o.default.shape({
                left: o.default.number,
                right: o.default.number,
                top: o.default.number,
                bottom: o.default.number,
              }),
              o.default.string,
              o.default.oneOf([!1]),
            ]),
            defaultClassName: o.default.string,
            defaultClassNameDragging: o.default.string,
            defaultClassNameDragged: o.default.string,
            defaultPosition: o.default.shape({
              x: o.default.number,
              y: o.default.number,
            }),
            positionOffset: o.default.shape({
              x: o.default.oneOfType([o.default.number, o.default.string]),
              y: o.default.oneOfType([o.default.number, o.default.string]),
            }),
            position: o.default.shape({
              x: o.default.number,
              y: o.default.number,
            }),
            className: u.dontSetMe,
            style: u.dontSetMe,
            transform: u.dontSetMe,
          }),
          m(g, "defaultProps", {
            ...c.default.defaultProps,
            axis: "both",
            bounds: !1,
            defaultClassName: "react-draggable",
            defaultClassNameDragging: "react-draggable-dragging",
            defaultClassNameDragged: "react-draggable-dragged",
            defaultPosition: { x: 0, y: 0 },
            scale: 1,
          });
      },
      8007: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (
              null === e ||
              ("object" !== typeof e && "function" !== typeof e)
            )
              return { default: e };
            var n = f(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(969)),
          o = c(n(4974)),
          a = c(n(5749)),
          i = n(1221),
          l = n(1271),
          s = n(3699),
          u = c(n(7022));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (f = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const p = { start: "touchstart", move: "touchmove", stop: "touchend" },
          h = { start: "mousedown", move: "mousemove", stop: "mouseup" };
        let m = h;
        class g extends r.Component {
          constructor() {
            super(...arguments),
              d(this, "dragging", !1),
              d(this, "lastX", NaN),
              d(this, "lastY", NaN),
              d(this, "touchIdentifier", null),
              d(this, "mounted", !1),
              d(this, "handleDragStart", (e) => {
                if (
                  (this.props.onMouseDown(e),
                  !this.props.allowAnyClick &&
                    "number" === typeof e.button &&
                    0 !== e.button)
                )
                  return !1;
                const t = this.findDOMNode();
                if (!t || !t.ownerDocument || !t.ownerDocument.body)
                  throw new Error("<DraggableCore> not mounted on DragStart!");
                const { ownerDocument: n } = t;
                if (
                  this.props.disabled ||
                  !(e.target instanceof n.defaultView.Node) ||
                  (this.props.handle &&
                    !(0, i.matchesSelectorAndParentsTo)(
                      e.target,
                      this.props.handle,
                      t,
                    )) ||
                  (this.props.cancel &&
                    (0, i.matchesSelectorAndParentsTo)(
                      e.target,
                      this.props.cancel,
                      t,
                    ))
                )
                  return;
                "touchstart" === e.type && e.preventDefault();
                const r = (0, i.getTouchIdentifier)(e);
                this.touchIdentifier = r;
                const o = (0, l.getControlPosition)(e, r, this);
                if (null == o) return;
                const { x: a, y: s } = o,
                  c = (0, l.createCoreData)(this, a, s);
                (0, u.default)("DraggableCore: handleDragStart: %j", c),
                  (0, u.default)("calling", this.props.onStart);
                !1 !== this.props.onStart(e, c) &&
                  !1 !== this.mounted &&
                  (this.props.enableUserSelectHack &&
                    (0, i.addUserSelectStyles)(n),
                  (this.dragging = !0),
                  (this.lastX = a),
                  (this.lastY = s),
                  (0, i.addEvent)(n, m.move, this.handleDrag),
                  (0, i.addEvent)(n, m.stop, this.handleDragStop));
              }),
              d(this, "handleDrag", (e) => {
                const t = (0, l.getControlPosition)(
                  e,
                  this.touchIdentifier,
                  this,
                );
                if (null == t) return;
                let { x: n, y: r } = t;
                if (Array.isArray(this.props.grid)) {
                  let e = n - this.lastX,
                    t = r - this.lastY;
                  if (
                    (([e, t] = (0, l.snapToGrid)(this.props.grid, e, t)),
                    !e && !t)
                  )
                    return;
                  (n = this.lastX + e), (r = this.lastY + t);
                }
                const o = (0, l.createCoreData)(this, n, r);
                (0, u.default)("DraggableCore: handleDrag: %j", o);
                if (!1 !== this.props.onDrag(e, o) && !1 !== this.mounted)
                  (this.lastX = n), (this.lastY = r);
                else
                  try {
                    this.handleDragStop(new MouseEvent("mouseup"));
                  } catch (a) {
                    const e = document.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "mouseup",
                      !0,
                      !0,
                      window,
                      0,
                      0,
                      0,
                      0,
                      0,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null,
                    ),
                      this.handleDragStop(e);
                  }
              }),
              d(this, "handleDragStop", (e) => {
                if (!this.dragging) return;
                const t = (0, l.getControlPosition)(
                  e,
                  this.touchIdentifier,
                  this,
                );
                if (null == t) return;
                let { x: n, y: r } = t;
                if (Array.isArray(this.props.grid)) {
                  let e = n - this.lastX || 0,
                    t = r - this.lastY || 0;
                  ([e, t] = (0, l.snapToGrid)(this.props.grid, e, t)),
                    (n = this.lastX + e),
                    (r = this.lastY + t);
                }
                const o = (0, l.createCoreData)(this, n, r);
                if (!1 === this.props.onStop(e, o) || !1 === this.mounted)
                  return !1;
                const a = this.findDOMNode();
                a &&
                  this.props.enableUserSelectHack &&
                  (0, i.removeUserSelectStyles)(a.ownerDocument),
                  (0, u.default)("DraggableCore: handleDragStop: %j", o),
                  (this.dragging = !1),
                  (this.lastX = NaN),
                  (this.lastY = NaN),
                  a &&
                    ((0, u.default)("DraggableCore: Removing handlers"),
                    (0, i.removeEvent)(
                      a.ownerDocument,
                      m.move,
                      this.handleDrag,
                    ),
                    (0, i.removeEvent)(
                      a.ownerDocument,
                      m.stop,
                      this.handleDragStop,
                    ));
              }),
              d(this, "onMouseDown", (e) => ((m = h), this.handleDragStart(e))),
              d(this, "onMouseUp", (e) => ((m = h), this.handleDragStop(e))),
              d(
                this,
                "onTouchStart",
                (e) => ((m = p), this.handleDragStart(e)),
              ),
              d(this, "onTouchEnd", (e) => ((m = p), this.handleDragStop(e)));
          }
          componentDidMount() {
            this.mounted = !0;
            const e = this.findDOMNode();
            e &&
              (0, i.addEvent)(e, p.start, this.onTouchStart, { passive: !1 });
          }
          componentWillUnmount() {
            this.mounted = !1;
            const e = this.findDOMNode();
            if (e) {
              const { ownerDocument: t } = e;
              (0, i.removeEvent)(t, h.move, this.handleDrag),
                (0, i.removeEvent)(t, p.move, this.handleDrag),
                (0, i.removeEvent)(t, h.stop, this.handleDragStop),
                (0, i.removeEvent)(t, p.stop, this.handleDragStop),
                (0, i.removeEvent)(e, p.start, this.onTouchStart, {
                  passive: !1,
                }),
                this.props.enableUserSelectHack &&
                  (0, i.removeUserSelectStyles)(t);
            }
          }
          findDOMNode() {
            var e, t;
            return null !== (e = this.props) && void 0 !== e && e.nodeRef
              ? null === (t = this.props) ||
                void 0 === t ||
                null === (t = t.nodeRef) ||
                void 0 === t
                ? void 0
                : t.current
              : a.default.findDOMNode(this);
          }
          render() {
            return r.cloneElement(r.Children.only(this.props.children), {
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onTouchEnd: this.onTouchEnd,
            });
          }
        }
        (t.default = g),
          d(g, "displayName", "DraggableCore"),
          d(g, "propTypes", {
            allowAnyClick: o.default.bool,
            children: o.default.node.isRequired,
            disabled: o.default.bool,
            enableUserSelectHack: o.default.bool,
            offsetParent: function (e, t) {
              if (e[t] && 1 !== e[t].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: o.default.arrayOf(o.default.number),
            handle: o.default.string,
            cancel: o.default.string,
            nodeRef: o.default.object,
            onStart: o.default.func,
            onDrag: o.default.func,
            onStop: o.default.func,
            onMouseDown: o.default.func,
            scale: o.default.number,
            className: s.dontSetMe,
            style: s.dontSetMe,
            transform: s.dontSetMe,
          }),
          d(g, "defaultProps", {
            allowAnyClick: !1,
            disabled: !1,
            enableUserSelectHack: !0,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
            scale: 1,
          });
      },
      8034: (e, t, n) => {
        "use strict";
        const { default: r, DraggableCore: o } = n(1849);
        (e.exports = r), (e.exports.default = r), (e.exports.DraggableCore = o);
      },
      1221: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addClassName = u),
          (t.addEvent = function (e, t, n, r) {
            if (!e) return;
            const o = { capture: !0, ...r };
            e.addEventListener
              ? e.addEventListener(t, n, o)
              : e.attachEvent
                ? e.attachEvent("on" + t, n)
                : (e["on" + t] = n);
          }),
          (t.addUserSelectStyles = function (e) {
            if (!e) return;
            let t = e.getElementById("react-draggable-style-el");
            t ||
              ((t = e.createElement("style")),
              (t.type = "text/css"),
              (t.id = "react-draggable-style-el"),
              (t.innerHTML =
                ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
              (t.innerHTML +=
                ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
              e.getElementsByTagName("head")[0].appendChild(t));
            e.body && u(e.body, "react-draggable-transparent-selection");
          }),
          (t.createCSSTransform = function (e, t) {
            const n = s(e, t, "px");
            return { [(0, o.browserPrefixToKey)("transform", o.default)]: n };
          }),
          (t.createSVGTransform = function (e, t) {
            return s(e, t, "");
          }),
          (t.getTouch = function (e, t) {
            return (
              (e.targetTouches &&
                (0, r.findInArray)(
                  e.targetTouches,
                  (e) => t === e.identifier,
                )) ||
              (e.changedTouches &&
                (0, r.findInArray)(e.changedTouches, (e) => t === e.identifier))
            );
          }),
          (t.getTouchIdentifier = function (e) {
            if (e.targetTouches && e.targetTouches[0])
              return e.targetTouches[0].identifier;
            if (e.changedTouches && e.changedTouches[0])
              return e.changedTouches[0].identifier;
          }),
          (t.getTranslation = s),
          (t.innerHeight = function (e) {
            let t = e.clientHeight;
            const n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, r.int)(n.paddingTop)),
              (t -= (0, r.int)(n.paddingBottom)),
              t
            );
          }),
          (t.innerWidth = function (e) {
            let t = e.clientWidth;
            const n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, r.int)(n.paddingLeft)),
              (t -= (0, r.int)(n.paddingRight)),
              t
            );
          }),
          (t.matchesSelector = l),
          (t.matchesSelectorAndParentsTo = function (e, t, n) {
            let r = e;
            do {
              if (l(r, t)) return !0;
              if (r === n) return !1;
              r = r.parentNode;
            } while (r);
            return !1;
          }),
          (t.offsetXYFromParent = function (e, t, n) {
            const r =
                t === t.ownerDocument.body
                  ? { left: 0, top: 0 }
                  : t.getBoundingClientRect(),
              o = (e.clientX + t.scrollLeft - r.left) / n,
              a = (e.clientY + t.scrollTop - r.top) / n;
            return { x: o, y: a };
          }),
          (t.outerHeight = function (e) {
            let t = e.clientHeight;
            const n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, r.int)(n.borderTopWidth)),
              (t += (0, r.int)(n.borderBottomWidth)),
              t
            );
          }),
          (t.outerWidth = function (e) {
            let t = e.clientWidth;
            const n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, r.int)(n.borderLeftWidth)),
              (t += (0, r.int)(n.borderRightWidth)),
              t
            );
          }),
          (t.removeClassName = c),
          (t.removeEvent = function (e, t, n, r) {
            if (!e) return;
            const o = { capture: !0, ...r };
            e.removeEventListener
              ? e.removeEventListener(t, n, o)
              : e.detachEvent
                ? e.detachEvent("on" + t, n)
                : (e["on" + t] = null);
          }),
          (t.removeUserSelectStyles = function (e) {
            if (!e) return;
            try {
              if (
                (e.body && c(e.body, "react-draggable-transparent-selection"),
                e.selection)
              )
                e.selection.empty();
              else {
                const t = (e.defaultView || window).getSelection();
                t && "Caret" !== t.type && t.removeAllRanges();
              }
            } catch (t) {}
          });
        var r = n(3699),
          o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (
              null === e ||
              ("object" !== typeof e && "function" !== typeof e)
            )
              return { default: e };
            var n = a(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (
                "default" !== i &&
                Object.prototype.hasOwnProperty.call(e, i)
              ) {
                var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(r, i, l)
                  : (r[i] = e[i]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(493));
        function a(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (a = function (e) {
            return e ? n : t;
          })(e);
        }
        let i = "";
        function l(e, t) {
          return (
            i ||
              (i = (0, r.findInArray)(
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ],
                function (t) {
                  return (0, r.isFunction)(e[t]);
                },
              )),
            !!(0, r.isFunction)(e[i]) && e[i](t)
          );
        }
        function s(e, t, n) {
          let { x: r, y: o } = e,
            a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
          if (t) {
            const e = "".concat("string" === typeof t.x ? t.x : t.x + n),
              r = "".concat("string" === typeof t.y ? t.y : t.y + n);
            a = "translate(".concat(e, ", ").concat(r, ")") + a;
          }
          return a;
        }
        function u(e, t) {
          e.classList
            ? e.classList.add(t)
            : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
              (e.className += " ".concat(t));
        }
        function c(e, t) {
          e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
                "",
              ));
        }
      },
      493: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.browserPrefixToKey = o),
          (t.browserPrefixToStyle = function (e, t) {
            return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
          }),
          (t.default = void 0),
          (t.getPrefix = r);
        const n = ["Moz", "Webkit", "O", "ms"];
        function r() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "transform";
          if ("undefined" === typeof window) return "";
          const r =
            null === (e = window.document) ||
            void 0 === e ||
            null === (e = e.documentElement) ||
            void 0 === e
              ? void 0
              : e.style;
          if (!r) return "";
          if (t in r) return "";
          for (let a = 0; a < n.length; a++) if (o(t, n[a]) in r) return n[a];
          return "";
        }
        function o(e, t) {
          return t
            ? "".concat(t).concat(
                (function (e) {
                  let t = "",
                    n = !0;
                  for (let r = 0; r < e.length; r++)
                    n
                      ? ((t += e[r].toUpperCase()), (n = !1))
                      : "-" === e[r]
                        ? (n = !0)
                        : (t += e[r]);
                  return t;
                })(e),
              )
            : e;
        }
        t.default = r();
      },
      7022: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            0;
          });
      },
      1271: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canDragX = function (e) {
            return "both" === e.props.axis || "x" === e.props.axis;
          }),
          (t.canDragY = function (e) {
            return "both" === e.props.axis || "y" === e.props.axis;
          }),
          (t.createCoreData = function (e, t, n) {
            const o = !(0, r.isNum)(e.lastX),
              i = a(e);
            return o
              ? {
                  node: i,
                  deltaX: 0,
                  deltaY: 0,
                  lastX: t,
                  lastY: n,
                  x: t,
                  y: n,
                }
              : {
                  node: i,
                  deltaX: t - e.lastX,
                  deltaY: n - e.lastY,
                  lastX: e.lastX,
                  lastY: e.lastY,
                  x: t,
                  y: n,
                };
          }),
          (t.createDraggableData = function (e, t) {
            const n = e.props.scale;
            return {
              node: t.node,
              x: e.state.x + t.deltaX / n,
              y: e.state.y + t.deltaY / n,
              deltaX: t.deltaX / n,
              deltaY: t.deltaY / n,
              lastX: e.state.x,
              lastY: e.state.y,
            };
          }),
          (t.getBoundPosition = function (e, t, n) {
            if (!e.props.bounds) return [t, n];
            let { bounds: i } = e.props;
            i =
              "string" === typeof i
                ? i
                : (function (e) {
                    return {
                      left: e.left,
                      top: e.top,
                      right: e.right,
                      bottom: e.bottom,
                    };
                  })(i);
            const l = a(e);
            if ("string" === typeof i) {
              const { ownerDocument: e } = l,
                t = e.defaultView;
              let n;
              if (
                ((n = "parent" === i ? l.parentNode : e.querySelector(i)),
                !(n instanceof t.HTMLElement))
              )
                throw new Error(
                  'Bounds selector "' + i + '" could not find an element.',
                );
              const a = n,
                s = t.getComputedStyle(l),
                u = t.getComputedStyle(a);
              i = {
                left:
                  -l.offsetLeft +
                  (0, r.int)(u.paddingLeft) +
                  (0, r.int)(s.marginLeft),
                top:
                  -l.offsetTop +
                  (0, r.int)(u.paddingTop) +
                  (0, r.int)(s.marginTop),
                right:
                  (0, o.innerWidth)(a) -
                  (0, o.outerWidth)(l) -
                  l.offsetLeft +
                  (0, r.int)(u.paddingRight) -
                  (0, r.int)(s.marginRight),
                bottom:
                  (0, o.innerHeight)(a) -
                  (0, o.outerHeight)(l) -
                  l.offsetTop +
                  (0, r.int)(u.paddingBottom) -
                  (0, r.int)(s.marginBottom),
              };
            }
            (0, r.isNum)(i.right) && (t = Math.min(t, i.right));
            (0, r.isNum)(i.bottom) && (n = Math.min(n, i.bottom));
            (0, r.isNum)(i.left) && (t = Math.max(t, i.left));
            (0, r.isNum)(i.top) && (n = Math.max(n, i.top));
            return [t, n];
          }),
          (t.getControlPosition = function (e, t, n) {
            const r = "number" === typeof t ? (0, o.getTouch)(e, t) : null;
            if ("number" === typeof t && !r) return null;
            const i = a(n),
              l =
                n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
            return (0, o.offsetXYFromParent)(r || e, l, n.props.scale);
          }),
          (t.snapToGrid = function (e, t, n) {
            const r = Math.round(t / e[0]) * e[0],
              o = Math.round(n / e[1]) * e[1];
            return [r, o];
          });
        var r = n(3699),
          o = n(1221);
        function a(e) {
          const t = e.findDOMNode();
          if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
          return t;
        }
      },
      3699: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.dontSetMe = function (e, t, n) {
            if (e[t])
              return new Error(
                "Invalid prop "
                  .concat(t, " passed to ")
                  .concat(n, " - do not set this, set it on the child."),
              );
          }),
          (t.findInArray = function (e, t) {
            for (let n = 0, r = e.length; n < r; n++)
              if (t.apply(t, [e[n], n, e])) return e[n];
          }),
          (t.int = function (e) {
            return parseInt(e, 10);
          }),
          (t.isFunction = function (e) {
            return (
              "function" === typeof e ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }),
          (t.isNum = function (e) {
            return "number" === typeof e && !isNaN(e);
          });
      },
      3290: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = f(n(969)),
          o = f(n(4974)),
          a = n(8034),
          i = n(6699),
          l = n(2118),
          s = n(7058),
          u = n(5563),
          c = f(n(5804));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class p extends r.default.Component {
          constructor() {
            super(...arguments),
              d(this, "state", {
                resizing: null,
                dragging: null,
                className: "",
              }),
              d(this, "elementRef", r.default.createRef()),
              d(this, "onDragStart", (e, t) => {
                let { node: n } = t;
                const { onDragStart: r, transformScale: o } = this.props;
                if (!r) return;
                const a = { top: 0, left: 0 },
                  { offsetParent: i } = n;
                if (!i) return;
                const l = i.getBoundingClientRect(),
                  u = n.getBoundingClientRect(),
                  c = u.left / o,
                  f = l.left / o,
                  d = u.top / o,
                  p = l.top / o;
                (a.left = c - f + i.scrollLeft),
                  (a.top = d - p + i.scrollTop),
                  this.setState({ dragging: a });
                const { x: h, y: m } = (0, s.calcXY)(
                  this.getPositionParams(),
                  a.top,
                  a.left,
                  this.props.w,
                  this.props.h,
                );
                return r.call(this, this.props.i, h, m, {
                  e: e,
                  node: n,
                  newPosition: a,
                });
              }),
              d(this, "onDrag", (e, t) => {
                let { node: n, deltaX: r, deltaY: o } = t;
                const { onDrag: a } = this.props;
                if (!a) return;
                if (!this.state.dragging)
                  throw new Error("onDrag called before onDragStart.");
                let i = this.state.dragging.top + o,
                  l = this.state.dragging.left + r;
                const {
                    isBounded: u,
                    i: c,
                    w: f,
                    h: d,
                    containerWidth: p,
                  } = this.props,
                  h = this.getPositionParams();
                if (u) {
                  const { offsetParent: e } = n;
                  if (e) {
                    const {
                        margin: t,
                        rowHeight: n,
                        containerPadding: r,
                      } = this.props,
                      o = e.clientHeight - (0, s.calcGridItemWHPx)(d, n, t[1]);
                    i = (0, s.clamp)(i - r[1], 0, o);
                    const a = (0, s.calcGridColWidth)(h),
                      u = p - (0, s.calcGridItemWHPx)(f, a, t[0]);
                    l = (0, s.clamp)(l - r[0], 0, u);
                  }
                }
                const m = { top: i, left: l };
                this.setState({ dragging: m });
                const { containerPadding: g } = this.props,
                  { x: y, y: v } = (0, s.calcXY)(h, i - g[1], l - g[0], f, d);
                return a.call(this, c, y, v, { e: e, node: n, newPosition: m });
              }),
              d(this, "onDragStop", (e, t) => {
                let { node: n } = t;
                const { onDragStop: r } = this.props;
                if (!r) return;
                if (!this.state.dragging)
                  throw new Error("onDragEnd called before onDragStart.");
                const { w: o, h: a, i: i, containerPadding: l } = this.props,
                  { left: u, top: c } = this.state.dragging,
                  f = { top: c, left: u };
                this.setState({ dragging: null });
                const { x: d, y: p } = (0, s.calcXY)(
                  this.getPositionParams(),
                  c - l[1],
                  u - l[0],
                  o,
                  a,
                );
                return r.call(this, i, d, p, { e: e, node: n, newPosition: f });
              }),
              d(this, "onResizeStop", (e, t, n) =>
                this.onResizeHandler(e, t, n, "onResizeStop"),
              ),
              d(this, "onResizeStart", (e, t, n) =>
                this.onResizeHandler(e, t, n, "onResizeStart"),
              ),
              d(this, "onResize", (e, t, n) =>
                this.onResizeHandler(e, t, n, "onResize"),
              );
          }
          shouldComponentUpdate(e, t) {
            if (this.props.children !== e.children) return !0;
            if (this.props.droppingPosition !== e.droppingPosition) return !0;
            const n = (0, s.calcGridItemPosition)(
                this.getPositionParams(this.props),
                this.props.x,
                this.props.y,
                this.props.w,
                this.props.h,
                this.state,
              ),
              r = (0, s.calcGridItemPosition)(
                this.getPositionParams(e),
                e.x,
                e.y,
                e.w,
                e.h,
                t,
              );
            return (
              !(0, l.fastPositionEqual)(n, r) ||
              this.props.useCSSTransforms !== e.useCSSTransforms
            );
          }
          componentDidMount() {
            this.moveDroppingItem({});
          }
          componentDidUpdate(e) {
            this.moveDroppingItem(e);
          }
          moveDroppingItem(e) {
            const { droppingPosition: t } = this.props;
            if (!t) return;
            const n = this.elementRef.current;
            if (!n) return;
            const r = e.droppingPosition || { left: 0, top: 0 },
              { dragging: o } = this.state,
              a = (o && t.left !== r.left) || t.top !== r.top;
            if (o) {
              if (a) {
                const e = t.left - o.left,
                  r = t.top - o.top;
                this.onDrag(t.e, { node: n, deltaX: e, deltaY: r });
              }
            } else
              this.onDragStart(t.e, { node: n, deltaX: t.left, deltaY: t.top });
          }
          getPositionParams() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.props;
            return {
              cols: e.cols,
              containerPadding: e.containerPadding,
              containerWidth: e.containerWidth,
              margin: e.margin,
              maxRows: e.maxRows,
              rowHeight: e.rowHeight,
            };
          }
          createStyle(e) {
            const {
              usePercentages: t,
              containerWidth: n,
              useCSSTransforms: r,
            } = this.props;
            let o;
            return (
              r
                ? (o = (0, l.setTransform)(e))
                : ((o = (0, l.setTopLeft)(e)),
                  t &&
                    ((o.left = (0, l.perc)(e.left / n)),
                    (o.width = (0, l.perc)(e.width / n)))),
              o
            );
          }
          mixinDraggable(e, t) {
            return r.default.createElement(
              a.DraggableCore,
              {
                disabled: !t,
                onStart: this.onDragStart,
                onDrag: this.onDrag,
                onStop: this.onDragStop,
                handle: this.props.handle,
                cancel:
                  ".react-resizable-handle" +
                  (this.props.cancel ? "," + this.props.cancel : ""),
                scale: this.props.transformScale,
                nodeRef: this.elementRef,
              },
              e,
            );
          }
          curryResizeHandler(e, t) {
            return (n, r) => t(n, r, e);
          }
          mixinResizable(e, t, n) {
            const {
                cols: o,
                minW: a,
                minH: l,
                maxW: u,
                maxH: c,
                transformScale: f,
                resizeHandles: d,
                resizeHandle: p,
              } = this.props,
              h = this.getPositionParams(),
              m = (0, s.calcGridItemPosition)(h, 0, 0, o, 0).width,
              g = (0, s.calcGridItemPosition)(h, 0, 0, a, l),
              y = (0, s.calcGridItemPosition)(h, 0, 0, u, c),
              v = [g.width, g.height],
              b = [Math.min(y.width, m), Math.min(y.height, 1 / 0)];
            return r.default.createElement(
              i.Resizable,
              {
                draggableOpts: { disabled: !n },
                className: n ? void 0 : "react-resizable-hide",
                width: t.width,
                height: t.height,
                minConstraints: v,
                maxConstraints: b,
                onResizeStop: this.curryResizeHandler(t, this.onResizeStop),
                onResizeStart: this.curryResizeHandler(t, this.onResizeStart),
                onResize: this.curryResizeHandler(t, this.onResize),
                transformScale: f,
                resizeHandles: d,
                handle: p,
              },
              e,
            );
          }
          onResizeHandler(e, t, n, r) {
            let { node: o, size: a, handle: i } = t;
            const u = this.props[r];
            if (!u) return;
            const {
                x: c,
                y: f,
                i: d,
                maxH: p,
                minH: h,
                containerWidth: m,
              } = this.props,
              { minW: g, maxW: y } = this.props;
            let v = a;
            o &&
              ((v = (0, l.resizeItemInDirection)(i, n, a, m)),
              this.setState({ resizing: "onResizeStop" === r ? null : v }));
            let { w: b, h: w } = (0, s.calcWH)(
              this.getPositionParams(),
              v.width,
              v.height,
              c,
              f,
              i,
            );
            (b = (0, s.clamp)(b, Math.max(g, 1), y)),
              (w = (0, s.clamp)(w, h, p)),
              u.call(this, d, b, w, { e: e, node: o, size: v, handle: i });
          }
          render() {
            const {
                x: e,
                y: t,
                w: n,
                h: o,
                isDraggable: a,
                isResizable: i,
                droppingPosition: l,
                useCSSTransforms: u,
              } = this.props,
              f = (0, s.calcGridItemPosition)(
                this.getPositionParams(),
                e,
                t,
                n,
                o,
                this.state,
              ),
              d = r.default.Children.only(this.props.children);
            let p = r.default.cloneElement(d, {
              ref: this.elementRef,
              className: (0, c.default)(
                "react-grid-item",
                d.props.className,
                this.props.className,
                {
                  static: this.props.static,
                  resizing: Boolean(this.state.resizing),
                  "react-draggable": a,
                  "react-draggable-dragging": Boolean(this.state.dragging),
                  dropping: Boolean(l),
                  cssTransforms: u,
                },
              ),
              style: {
                ...this.props.style,
                ...d.props.style,
                ...this.createStyle(f),
              },
            });
            return (
              (p = this.mixinResizable(p, f, i)),
              (p = this.mixinDraggable(p, a)),
              p
            );
          }
        }
        (t.default = p),
          d(p, "propTypes", {
            children: o.default.element,
            cols: o.default.number.isRequired,
            containerWidth: o.default.number.isRequired,
            rowHeight: o.default.number.isRequired,
            margin: o.default.array.isRequired,
            maxRows: o.default.number.isRequired,
            containerPadding: o.default.array.isRequired,
            x: o.default.number.isRequired,
            y: o.default.number.isRequired,
            w: o.default.number.isRequired,
            h: o.default.number.isRequired,
            minW: function (e, t) {
              const n = e[t];
              return "number" !== typeof n
                ? new Error("minWidth not Number")
                : n > e.w || n > e.maxW
                  ? new Error("minWidth larger than item width/maxWidth")
                  : void 0;
            },
            maxW: function (e, t) {
              const n = e[t];
              return "number" !== typeof n
                ? new Error("maxWidth not Number")
                : n < e.w || n < e.minW
                  ? new Error("maxWidth smaller than item width/minWidth")
                  : void 0;
            },
            minH: function (e, t) {
              const n = e[t];
              return "number" !== typeof n
                ? new Error("minHeight not Number")
                : n > e.h || n > e.maxH
                  ? new Error("minHeight larger than item height/maxHeight")
                  : void 0;
            },
            maxH: function (e, t) {
              const n = e[t];
              return "number" !== typeof n
                ? new Error("maxHeight not Number")
                : n < e.h || n < e.minH
                  ? new Error("maxHeight smaller than item height/minHeight")
                  : void 0;
            },
            i: o.default.string.isRequired,
            resizeHandles: u.resizeHandleAxesType,
            resizeHandle: u.resizeHandleType,
            onDragStop: o.default.func,
            onDragStart: o.default.func,
            onDrag: o.default.func,
            onResizeStop: o.default.func,
            onResizeStart: o.default.func,
            onResize: o.default.func,
            isDraggable: o.default.bool.isRequired,
            isResizable: o.default.bool.isRequired,
            isBounded: o.default.bool.isRequired,
            static: o.default.bool,
            useCSSTransforms: o.default.bool.isRequired,
            transformScale: o.default.number,
            className: o.default.string,
            handle: o.default.string,
            cancel: o.default.string,
            droppingPosition: o.default.shape({
              e: o.default.object.isRequired,
              left: o.default.number.isRequired,
              top: o.default.number.isRequired,
            }),
          }),
          d(p, "defaultProps", {
            className: "",
            cancel: "",
            handle: "",
            minH: 1,
            minW: 1,
            maxH: 1 / 0,
            maxW: 1 / 0,
            transformScale: 1,
          });
      },
      2174: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = f(t);
            if (n && n.has(e)) return n.get(e);
            var r = { __proto__: null },
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            return (r.default = e), n && n.set(e, r), r;
          })(n(969)),
          o = n(9541),
          a = c(n(5804)),
          i = n(2118),
          l = n(7058),
          s = c(n(3290)),
          u = c(n(5563));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (f = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const p = "react-grid-layout";
        let h = !1;
        try {
          h = /firefox/i.test(navigator.userAgent);
        } catch (g) {}
        class m extends r.Component {
          constructor() {
            super(...arguments),
              d(this, "state", {
                activeDrag: null,
                layout: (0, i.synchronizeLayoutWithChildren)(
                  this.props.layout,
                  this.props.children,
                  this.props.cols,
                  (0, i.compactType)(this.props),
                  this.props.allowOverlap,
                ),
                mounted: !1,
                oldDragItem: null,
                oldLayout: null,
                oldResizeItem: null,
                resizing: !1,
                droppingDOMNode: null,
                children: [],
              }),
              d(this, "dragEnterCounter", 0),
              d(this, "onDragStart", (e, t, n, r) => {
                let { e: o, node: a } = r;
                const { layout: l } = this.state,
                  s = (0, i.getLayoutItem)(l, e);
                if (!s) return;
                const u = {
                  w: s.w,
                  h: s.h,
                  x: s.x,
                  y: s.y,
                  placeholder: !0,
                  i: e,
                };
                return (
                  this.setState({
                    oldDragItem: (0, i.cloneLayoutItem)(s),
                    oldLayout: l,
                    activeDrag: u,
                  }),
                  this.props.onDragStart(l, s, s, null, o, a)
                );
              }),
              d(this, "onDrag", (e, t, n, r) => {
                let { e: o, node: a } = r;
                const { oldDragItem: l } = this.state;
                let { layout: s } = this.state;
                const {
                    cols: u,
                    allowOverlap: c,
                    preventCollision: f,
                  } = this.props,
                  d = (0, i.getLayoutItem)(s, e);
                if (!d) return;
                const p = {
                  w: d.w,
                  h: d.h,
                  x: d.x,
                  y: d.y,
                  placeholder: !0,
                  i: e,
                };
                (s = (0, i.moveElement)(
                  s,
                  d,
                  t,
                  n,
                  !0,
                  f,
                  (0, i.compactType)(this.props),
                  u,
                  c,
                )),
                  this.props.onDrag(s, l, d, p, o, a),
                  this.setState({
                    layout: c
                      ? s
                      : (0, i.compact)(s, (0, i.compactType)(this.props), u),
                    activeDrag: p,
                  });
              }),
              d(this, "onDragStop", (e, t, n, r) => {
                let { e: o, node: a } = r;
                if (!this.state.activeDrag) return;
                const { oldDragItem: l } = this.state;
                let { layout: s } = this.state;
                const {
                    cols: u,
                    preventCollision: c,
                    allowOverlap: f,
                  } = this.props,
                  d = (0, i.getLayoutItem)(s, e);
                if (!d) return;
                s = (0, i.moveElement)(
                  s,
                  d,
                  t,
                  n,
                  !0,
                  c,
                  (0, i.compactType)(this.props),
                  u,
                  f,
                );
                const p = f
                  ? s
                  : (0, i.compact)(s, (0, i.compactType)(this.props), u);
                this.props.onDragStop(p, l, d, null, o, a);
                const { oldLayout: h } = this.state;
                this.setState({
                  activeDrag: null,
                  layout: p,
                  oldDragItem: null,
                  oldLayout: null,
                }),
                  this.onLayoutMaybeChanged(p, h);
              }),
              d(this, "onResizeStart", (e, t, n, r) => {
                let { e: o, node: a } = r;
                const { layout: l } = this.state,
                  s = (0, i.getLayoutItem)(l, e);
                s &&
                  (this.setState({
                    oldResizeItem: (0, i.cloneLayoutItem)(s),
                    oldLayout: this.state.layout,
                    resizing: !0,
                  }),
                  this.props.onResizeStart(l, s, s, null, o, a));
              }),
              d(this, "onResize", (e, t, n, r) => {
                let { e: o, node: a, size: l, handle: s } = r;
                const { oldResizeItem: u } = this.state,
                  { layout: c } = this.state,
                  {
                    cols: f,
                    preventCollision: d,
                    allowOverlap: p,
                  } = this.props;
                let h,
                  m,
                  g,
                  y = !1;
                const [v, b] = (0, i.withLayoutItem)(c, e, (e) => {
                  let r;
                  if (
                    ((m = e.x),
                    (g = e.y),
                    -1 !== ["sw", "w", "nw", "n", "ne"].indexOf(s) &&
                      (-1 !== ["sw", "nw", "w"].indexOf(s) &&
                        ((m = e.x + (e.w - t)),
                        (t = e.x !== m && m < 0 ? e.w : t),
                        (m = m < 0 ? 0 : m)),
                      -1 !== ["ne", "n", "nw"].indexOf(s) &&
                        ((g = e.y + (e.h - n)),
                        (n = e.y !== g && g < 0 ? e.h : n),
                        (g = g < 0 ? 0 : g)),
                      (y = !0)),
                    d && !p)
                  ) {
                    (r =
                      (0, i.getAllCollisions)(c, {
                        ...e,
                        w: t,
                        h: n,
                        x: m,
                        y: g,
                      }).filter((t) => t.i !== e.i).length > 0),
                      r &&
                        ((g = e.y), (n = e.h), (m = e.x), (t = e.w), (y = !1));
                  }
                  return (e.w = t), (e.h = n), e;
                });
                if (!b) return;
                if (((h = v), y)) {
                  const e = !0;
                  h = (0, i.moveElement)(
                    v,
                    b,
                    m,
                    g,
                    e,
                    this.props.preventCollision,
                    (0, i.compactType)(this.props),
                    f,
                    p,
                  );
                }
                const w = { w: b.w, h: b.h, x: b.x, y: b.y, static: !0, i: e };
                this.props.onResize(h, u, b, w, o, a),
                  this.setState({
                    layout: p
                      ? h
                      : (0, i.compact)(h, (0, i.compactType)(this.props), f),
                    activeDrag: w,
                  });
              }),
              d(this, "onResizeStop", (e, t, n, r) => {
                let { e: o, node: a } = r;
                const { layout: l, oldResizeItem: s } = this.state,
                  { cols: u, allowOverlap: c } = this.props,
                  f = (0, i.getLayoutItem)(l, e),
                  d = c
                    ? l
                    : (0, i.compact)(l, (0, i.compactType)(this.props), u);
                this.props.onResizeStop(d, s, f, null, o, a);
                const { oldLayout: p } = this.state;
                this.setState({
                  activeDrag: null,
                  layout: d,
                  oldResizeItem: null,
                  oldLayout: null,
                  resizing: !1,
                }),
                  this.onLayoutMaybeChanged(d, p);
              }),
              d(this, "onDragOver", (e) => {
                var t;
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  h &&
                    (null === (t = e.nativeEvent.target) ||
                      void 0 === t ||
                      !t.classList.contains(p)))
                )
                  return !1;
                const {
                    droppingItem: n,
                    onDropDragOver: o,
                    margin: a,
                    cols: i,
                    rowHeight: s,
                    maxRows: u,
                    width: c,
                    containerPadding: f,
                    transformScale: d,
                  } = this.props,
                  m = null === o || void 0 === o ? void 0 : o(e);
                if (!1 === m)
                  return (
                    this.state.droppingDOMNode &&
                      this.removeDroppingPlaceholder(),
                    !1
                  );
                const g = { ...n, ...m },
                  { layout: y } = this.state,
                  v = e.currentTarget.getBoundingClientRect(),
                  b = e.clientX - v.left,
                  w = e.clientY - v.top,
                  S = { left: b / d, top: w / d, e: e };
                if (this.state.droppingDOMNode) {
                  if (this.state.droppingPosition) {
                    const { left: e, top: t } = this.state.droppingPosition;
                    (e != b || t != w) &&
                      this.setState({ droppingPosition: S });
                  }
                } else {
                  const e = {
                      cols: i,
                      margin: a,
                      maxRows: u,
                      rowHeight: s,
                      containerWidth: c,
                      containerPadding: f || a,
                    },
                    t = (0, l.calcXY)(e, w, b, g.w, g.h);
                  this.setState({
                    droppingDOMNode: r.createElement("div", { key: g.i }),
                    droppingPosition: S,
                    layout: [
                      ...y,
                      { ...g, x: t.x, y: t.y, static: !1, isDraggable: !0 },
                    ],
                  });
                }
              }),
              d(this, "removeDroppingPlaceholder", () => {
                const { droppingItem: e, cols: t } = this.props,
                  { layout: n } = this.state,
                  r = (0, i.compact)(
                    n.filter((t) => t.i !== e.i),
                    (0, i.compactType)(this.props),
                    t,
                    this.props.allowOverlap,
                  );
                this.setState({
                  layout: r,
                  droppingDOMNode: null,
                  activeDrag: null,
                  droppingPosition: void 0,
                });
              }),
              d(this, "onDragLeave", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  this.dragEnterCounter--,
                  0 === this.dragEnterCounter &&
                    this.removeDroppingPlaceholder();
              }),
              d(this, "onDragEnter", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  this.dragEnterCounter++;
              }),
              d(this, "onDrop", (e) => {
                e.preventDefault(), e.stopPropagation();
                const { droppingItem: t } = this.props,
                  { layout: n } = this.state,
                  r = n.find((e) => e.i === t.i);
                (this.dragEnterCounter = 0),
                  this.removeDroppingPlaceholder(),
                  this.props.onDrop(n, r, e);
              });
          }
          componentDidMount() {
            this.setState({ mounted: !0 }),
              this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
          }
          static getDerivedStateFromProps(e, t) {
            let n;
            if (t.activeDrag) return null;
            if (
              ((0, o.deepEqual)(e.layout, t.propsLayout) &&
              e.compactType === t.compactType
                ? (0, i.childrenEqual)(e.children, t.children) || (n = t.layout)
                : (n = e.layout),
              n)
            ) {
              return {
                layout: (0, i.synchronizeLayoutWithChildren)(
                  n,
                  e.children,
                  e.cols,
                  (0, i.compactType)(e),
                  e.allowOverlap,
                ),
                compactType: e.compactType,
                children: e.children,
                propsLayout: e.layout,
              };
            }
            return null;
          }
          shouldComponentUpdate(e, t) {
            return (
              this.props.children !== e.children ||
              !(0, i.fastRGLPropsEqual)(this.props, e, o.deepEqual) ||
              this.state.activeDrag !== t.activeDrag ||
              this.state.mounted !== t.mounted ||
              this.state.droppingPosition !== t.droppingPosition
            );
          }
          componentDidUpdate(e, t) {
            if (!this.state.activeDrag) {
              const e = this.state.layout,
                n = t.layout;
              this.onLayoutMaybeChanged(e, n);
            }
          }
          containerHeight() {
            if (!this.props.autoSize) return;
            const e = (0, i.bottom)(this.state.layout),
              t = this.props.containerPadding
                ? this.props.containerPadding[1]
                : this.props.margin[1];
            return (
              e * this.props.rowHeight +
              (e - 1) * this.props.margin[1] +
              2 * t +
              "px"
            );
          }
          onLayoutMaybeChanged(e, t) {
            t || (t = this.state.layout),
              (0, o.deepEqual)(t, e) || this.props.onLayoutChange(e);
          }
          placeholder() {
            const { activeDrag: e } = this.state;
            if (!e) return null;
            const {
              width: t,
              cols: n,
              margin: o,
              containerPadding: a,
              rowHeight: i,
              maxRows: l,
              useCSSTransforms: u,
              transformScale: c,
            } = this.props;
            return r.createElement(
              s.default,
              {
                w: e.w,
                h: e.h,
                x: e.x,
                y: e.y,
                i: e.i,
                className: "react-grid-placeholder ".concat(
                  this.state.resizing ? "placeholder-resizing" : "",
                ),
                containerWidth: t,
                cols: n,
                margin: o,
                containerPadding: a || o,
                maxRows: l,
                rowHeight: i,
                isDraggable: !1,
                isResizable: !1,
                isBounded: !1,
                useCSSTransforms: u,
                transformScale: c,
              },
              r.createElement("div", null),
            );
          }
          processGridItem(e, t) {
            if (!e || !e.key) return;
            const n = (0, i.getLayoutItem)(this.state.layout, String(e.key));
            if (!n) return null;
            const {
                width: o,
                cols: a,
                margin: l,
                containerPadding: u,
                rowHeight: c,
                maxRows: f,
                isDraggable: d,
                isResizable: p,
                isBounded: h,
                useCSSTransforms: m,
                transformScale: g,
                draggableCancel: y,
                draggableHandle: v,
                resizeHandles: b,
                resizeHandle: w,
              } = this.props,
              { mounted: S, droppingPosition: x } = this.state,
              k =
                "boolean" === typeof n.isDraggable
                  ? n.isDraggable
                  : !n.static && d,
              E =
                "boolean" === typeof n.isResizable
                  ? n.isResizable
                  : !n.static && p,
              O = n.resizeHandles || b,
              C = k && h && !1 !== n.isBounded;
            return r.createElement(
              s.default,
              {
                containerWidth: o,
                cols: a,
                margin: l,
                containerPadding: u || l,
                maxRows: f,
                rowHeight: c,
                cancel: y,
                handle: v,
                onDragStop: this.onDragStop,
                onDragStart: this.onDragStart,
                onDrag: this.onDrag,
                onResizeStart: this.onResizeStart,
                onResize: this.onResize,
                onResizeStop: this.onResizeStop,
                isDraggable: k,
                isResizable: E,
                isBounded: C,
                useCSSTransforms: m && S,
                usePercentages: !S,
                transformScale: g,
                w: n.w,
                h: n.h,
                x: n.x,
                y: n.y,
                i: n.i,
                minH: n.minH,
                minW: n.minW,
                maxH: n.maxH,
                maxW: n.maxW,
                static: n.static,
                droppingPosition: t ? x : void 0,
                resizeHandles: O,
                resizeHandle: w,
              },
              e,
            );
          }
          render() {
            const {
                className: e,
                style: t,
                isDroppable: n,
                innerRef: o,
              } = this.props,
              l = (0, a.default)(p, e),
              s = { height: this.containerHeight(), ...t };
            return r.createElement(
              "div",
              {
                ref: o,
                className: l,
                style: s,
                onDrop: n ? this.onDrop : i.noop,
                onDragLeave: n ? this.onDragLeave : i.noop,
                onDragEnter: n ? this.onDragEnter : i.noop,
                onDragOver: n ? this.onDragOver : i.noop,
              },
              r.Children.map(this.props.children, (e) =>
                this.processGridItem(e),
              ),
              n &&
                this.state.droppingDOMNode &&
                this.processGridItem(this.state.droppingDOMNode, !0),
              this.placeholder(),
            );
          }
        }
        (t.default = m),
          d(m, "displayName", "ReactGridLayout"),
          d(m, "propTypes", u.default),
          d(m, "defaultProps", {
            autoSize: !0,
            cols: 12,
            className: "",
            style: {},
            draggableHandle: "",
            draggableCancel: "",
            containerPadding: null,
            rowHeight: 150,
            maxRows: 1 / 0,
            layout: [],
            margin: [10, 10],
            isBounded: !1,
            isDraggable: !0,
            isResizable: !0,
            allowOverlap: !1,
            isDroppable: !1,
            useCSSTransforms: !0,
            transformScale: 1,
            verticalCompact: !0,
            compactType: "vertical",
            preventCollision: !1,
            droppingItem: { i: "__dropping-elem__", h: 1, w: 1 },
            resizeHandles: ["se"],
            onLayoutChange: i.noop,
            onDragStart: i.noop,
            onDrag: i.noop,
            onDragStop: i.noop,
            onResizeStart: i.noop,
            onResize: i.noop,
            onResizeStop: i.noop,
            onDrop: i.noop,
            onDropDragOver: i.noop,
          });
      },
      5563: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resizeHandleType = t.resizeHandleAxesType = t.default = void 0);
        var r = a(n(4974)),
          o = a(n(969));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const i = (t.resizeHandleAxesType = r.default.arrayOf(
            r.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"]),
          )),
          l = (t.resizeHandleType = r.default.oneOfType([
            r.default.node,
            r.default.func,
          ]));
        t.default = {
          className: r.default.string,
          style: r.default.object,
          width: r.default.number,
          autoSize: r.default.bool,
          cols: r.default.number,
          draggableCancel: r.default.string,
          draggableHandle: r.default.string,
          verticalCompact: function (e) {
            e.verticalCompact, 0;
          },
          compactType: r.default.oneOf(["vertical", "horizontal"]),
          layout: function (e) {
            var t = e.layout;
            void 0 !== t && n(2118).validateLayout(t, "layout");
          },
          margin: r.default.arrayOf(r.default.number),
          containerPadding: r.default.arrayOf(r.default.number),
          rowHeight: r.default.number,
          maxRows: r.default.number,
          isBounded: r.default.bool,
          isDraggable: r.default.bool,
          isResizable: r.default.bool,
          allowOverlap: r.default.bool,
          preventCollision: r.default.bool,
          useCSSTransforms: r.default.bool,
          transformScale: r.default.number,
          isDroppable: r.default.bool,
          resizeHandles: i,
          resizeHandle: l,
          onLayoutChange: r.default.func,
          onDragStart: r.default.func,
          onDrag: r.default.func,
          onDragStop: r.default.func,
          onResizeStart: r.default.func,
          onResize: r.default.func,
          onResizeStop: r.default.func,
          onDrop: r.default.func,
          droppingItem: r.default.shape({
            i: r.default.string.isRequired,
            w: r.default.number.isRequired,
            h: r.default.number.isRequired,
          }),
          children: function (e, t) {
            const n = e[t],
              r = {};
            o.default.Children.forEach(n, function (e) {
              if (null != (null === e || void 0 === e ? void 0 : e.key)) {
                if (r[e.key])
                  throw new Error(
                    'Duplicate child key "' +
                      e.key +
                      '" found! This will cause problems in ReactGridLayout.',
                  );
                r[e.key] = !0;
              }
            });
          },
          innerRef: r.default.any,
        };
      },
      8185: (e, t, n) => {
        "use strict";
        t.default = void 0;
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = c(t);
            if (n && n.has(e)) return n.get(e);
            var r = { __proto__: null },
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            return (r.default = e), n && n.set(e, r), r;
          })(n(969)),
          o = u(n(4974)),
          a = n(9541),
          i = n(2118),
          l = n(7027),
          s = u(n(2174));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (c = function (e) {
            return e ? n : t;
          })(e);
        }
        function f() {
          return (
            (f = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            f.apply(this, arguments)
          );
        }
        function d(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const p = (e) => Object.prototype.toString.call(e);
        function h(e, t) {
          return null == e ? null : Array.isArray(e) ? e : e[t];
        }
        class m extends r.Component {
          constructor() {
            super(...arguments),
              d(this, "state", this.generateInitialState()),
              d(this, "onLayoutChange", (e) => {
                this.props.onLayoutChange(e, {
                  ...this.props.layouts,
                  [this.state.breakpoint]: e,
                });
              });
          }
          generateInitialState() {
            const {
                width: e,
                breakpoints: t,
                layouts: n,
                cols: r,
              } = this.props,
              o = (0, l.getBreakpointFromWidth)(t, e),
              a = (0, l.getColsFromBreakpoint)(o, r),
              i =
                !1 === this.props.verticalCompact
                  ? null
                  : this.props.compactType;
            return {
              layout: (0, l.findOrGenerateResponsiveLayout)(n, t, o, o, a, i),
              breakpoint: o,
              cols: a,
            };
          }
          static getDerivedStateFromProps(e, t) {
            if (!(0, a.deepEqual)(e.layouts, t.layouts)) {
              const { breakpoint: n, cols: r } = t;
              return {
                layout: (0, l.findOrGenerateResponsiveLayout)(
                  e.layouts,
                  e.breakpoints,
                  n,
                  n,
                  r,
                  e.compactType,
                ),
                layouts: e.layouts,
              };
            }
            return null;
          }
          componentDidUpdate(e) {
            (this.props.width == e.width &&
              this.props.breakpoint === e.breakpoint &&
              (0, a.deepEqual)(this.props.breakpoints, e.breakpoints) &&
              (0, a.deepEqual)(this.props.cols, e.cols)) ||
              this.onWidthChange(e);
          }
          onWidthChange(e) {
            const {
                breakpoints: t,
                cols: n,
                layouts: r,
                compactType: o,
              } = this.props,
              a =
                this.props.breakpoint ||
                (0, l.getBreakpointFromWidth)(
                  this.props.breakpoints,
                  this.props.width,
                ),
              s = this.state.breakpoint,
              u = (0, l.getColsFromBreakpoint)(a, n),
              c = { ...r };
            if (s !== a || e.breakpoints !== t || e.cols !== n) {
              s in c || (c[s] = (0, i.cloneLayout)(this.state.layout));
              let e = (0, l.findOrGenerateResponsiveLayout)(c, t, a, s, u, o);
              (e = (0, i.synchronizeLayoutWithChildren)(
                e,
                this.props.children,
                u,
                o,
                this.props.allowOverlap,
              )),
                (c[a] = e),
                this.props.onLayoutChange(e, c),
                this.props.onBreakpointChange(a, u),
                this.setState({ breakpoint: a, layout: e, cols: u });
            }
            const f = h(this.props.margin, a),
              d = h(this.props.containerPadding, a);
            this.props.onWidthChange(this.props.width, f, u, d);
          }
          render() {
            const {
              breakpoint: e,
              breakpoints: t,
              cols: n,
              layouts: o,
              margin: a,
              containerPadding: i,
              onBreakpointChange: l,
              onLayoutChange: u,
              onWidthChange: c,
              ...d
            } = this.props;
            return r.createElement(
              s.default,
              f({}, d, {
                margin: h(a, this.state.breakpoint),
                containerPadding: h(i, this.state.breakpoint),
                onLayoutChange: this.onLayoutChange,
                layout: this.state.layout,
                cols: this.state.cols,
              }),
            );
          }
        }
        (t.default = m),
          d(m, "propTypes", {
            breakpoint: o.default.string,
            breakpoints: o.default.object,
            allowOverlap: o.default.bool,
            cols: o.default.object,
            margin: o.default.oneOfType([o.default.array, o.default.object]),
            containerPadding: o.default.oneOfType([
              o.default.array,
              o.default.object,
            ]),
            layouts(e, t) {
              if ("[object Object]" !== p(e[t]))
                throw new Error(
                  "Layout property must be an object. Received: " + p(e[t]),
                );
              Object.keys(e[t]).forEach((t) => {
                if (!(t in e.breakpoints))
                  throw new Error(
                    "Each key in layouts must align with a key in breakpoints.",
                  );
                (0, i.validateLayout)(e.layouts[t], "layouts." + t);
              });
            },
            width: o.default.number.isRequired,
            onBreakpointChange: o.default.func,
            onLayoutChange: o.default.func,
            onWidthChange: o.default.func,
          }),
          d(m, "defaultProps", {
            breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            containerPadding: {
              lg: null,
              md: null,
              sm: null,
              xs: null,
              xxs: null,
            },
            layouts: {},
            margin: [10, 10],
            allowOverlap: !1,
            onBreakpointChange: i.noop,
            onLayoutChange: i.noop,
            onWidthChange: i.noop,
          });
      },
      7058: (e, t) => {
        "use strict";
        function n(e) {
          const {
            margin: t,
            containerPadding: n,
            containerWidth: r,
            cols: o,
          } = e;
          return (r - t[0] * (o - 1) - 2 * n[0]) / o;
        }
        function r(e, t, n) {
          return Number.isFinite(e)
            ? Math.round(t * e + Math.max(0, e - 1) * n)
            : e;
        }
        function o(e, t, n) {
          return Math.max(Math.min(e, n), t);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.calcGridColWidth = n),
          (t.calcGridItemPosition = function (e, t, o, a, i, l) {
            const { margin: s, containerPadding: u, rowHeight: c } = e,
              f = n(e),
              d = {};
            l && l.resizing
              ? ((d.width = Math.round(l.resizing.width)),
                (d.height = Math.round(l.resizing.height)))
              : ((d.width = r(a, f, s[0])), (d.height = r(i, c, s[1])));
            l && l.dragging
              ? ((d.top = Math.round(l.dragging.top)),
                (d.left = Math.round(l.dragging.left)))
              : l &&
                  l.resizing &&
                  "number" === typeof l.resizing.top &&
                  "number" === typeof l.resizing.left
                ? ((d.top = Math.round(l.resizing.top)),
                  (d.left = Math.round(l.resizing.left)))
                : ((d.top = Math.round((c + s[1]) * o + u[1])),
                  (d.left = Math.round((f + s[0]) * t + u[0])));
            return d;
          }),
          (t.calcGridItemWHPx = r),
          (t.calcWH = function (e, t, r, a, i, l) {
            const { margin: s, maxRows: u, cols: c, rowHeight: f } = e,
              d = n(e);
            let p = Math.round((t + s[0]) / (d + s[0])),
              h = Math.round((r + s[1]) / (f + s[1])),
              m = o(p, 0, c - a),
              g = o(h, 0, u - i);
            -1 !== ["sw", "w", "nw"].indexOf(l) && (m = o(p, 0, c));
            -1 !== ["nw", "n", "ne"].indexOf(l) && (g = o(h, 0, u));
            return { w: m, h: g };
          }),
          (t.calcXY = function (e, t, r, a, i) {
            const { margin: l, cols: s, rowHeight: u, maxRows: c } = e,
              f = n(e);
            let d = Math.round((r - l[0]) / (f + l[0])),
              p = Math.round((t - l[1]) / (u + l[1]));
            return (d = o(d, 0, s - a)), (p = o(p, 0, c - i)), { x: d, y: p };
          }),
          (t.clamp = o);
      },
      9687: (e, t, n) => {
        "use strict";
        t.default = function (e) {
          var t;
          return (
            (t = class extends r.Component {
              constructor() {
                super(...arguments),
                  c(this, "state", { width: 1280 }),
                  c(this, "elementRef", r.createRef()),
                  c(this, "mounted", !1),
                  c(this, "resizeObserver", void 0);
              }
              componentDidMount() {
                (this.mounted = !0),
                  (this.resizeObserver = new a.default((e) => {
                    if (this.elementRef.current instanceof HTMLElement) {
                      const t = e[0].contentRect.width;
                      this.setState({ width: t });
                    }
                  }));
                const e = this.elementRef.current;
                e instanceof HTMLElement && this.resizeObserver.observe(e);
              }
              componentWillUnmount() {
                this.mounted = !1;
                const e = this.elementRef.current;
                e instanceof HTMLElement && this.resizeObserver.unobserve(e),
                  this.resizeObserver.disconnect();
              }
              render() {
                const { measureBeforeMount: t, ...n } = this.props;
                return t && !this.mounted
                  ? r.createElement("div", {
                      className: (0, i.default)(this.props.className, f),
                      style: this.props.style,
                      ref: this.elementRef,
                    })
                  : r.createElement(
                      e,
                      u({ innerRef: this.elementRef }, n, this.state),
                    );
              }
            }),
            c(t, "defaultProps", { measureBeforeMount: !1 }),
            c(t, "propTypes", { measureBeforeMount: o.default.bool }),
            t
          );
        };
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = s(t);
            if (n && n.has(e)) return n.get(e);
            var r = { __proto__: null },
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            return (r.default = e), n && n.set(e, r), r;
          })(n(969)),
          o = l(n(4974)),
          a = l(n(2158)),
          i = l(n(5804));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (s = function (e) {
            return e ? n : t;
          })(e);
        }
        function u() {
          return (
            (u = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            u.apply(this, arguments)
          );
        }
        function c(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const f = "react-grid-layout";
      },
      7009: (e) => {
        e.exports = function (e, t, n) {
          return (
            e === t ||
            (e.className === t.className &&
              n(e.style, t.style) &&
              e.width === t.width &&
              e.autoSize === t.autoSize &&
              e.cols === t.cols &&
              e.draggableCancel === t.draggableCancel &&
              e.draggableHandle === t.draggableHandle &&
              n(e.verticalCompact, t.verticalCompact) &&
              n(e.compactType, t.compactType) &&
              n(e.layout, t.layout) &&
              n(e.margin, t.margin) &&
              n(e.containerPadding, t.containerPadding) &&
              e.rowHeight === t.rowHeight &&
              e.maxRows === t.maxRows &&
              e.isBounded === t.isBounded &&
              e.isDraggable === t.isDraggable &&
              e.isResizable === t.isResizable &&
              e.allowOverlap === t.allowOverlap &&
              e.preventCollision === t.preventCollision &&
              e.useCSSTransforms === t.useCSSTransforms &&
              e.transformScale === t.transformScale &&
              e.isDroppable === t.isDroppable &&
              n(e.resizeHandles, t.resizeHandles) &&
              n(e.resizeHandle, t.resizeHandle) &&
              e.onLayoutChange === t.onLayoutChange &&
              e.onDragStart === t.onDragStart &&
              e.onDrag === t.onDrag &&
              e.onDragStop === t.onDragStop &&
              e.onResizeStart === t.onResizeStart &&
              e.onResize === t.onResize &&
              e.onResizeStop === t.onResizeStop &&
              e.onDrop === t.onDrop &&
              n(e.droppingItem, t.droppingItem) &&
              n(e.innerRef, t.innerRef))
          );
        };
      },
      7027: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.findOrGenerateResponsiveLayout = function (e, t, n, a, i, l) {
            if (e[n]) return (0, r.cloneLayout)(e[n]);
            let s = e[a];
            const u = o(t),
              c = u.slice(u.indexOf(n));
            for (let r = 0, o = c.length; r < o; r++) {
              const t = c[r];
              if (e[t]) {
                s = e[t];
                break;
              }
            }
            return (
              (s = (0, r.cloneLayout)(s || [])),
              (0, r.compact)((0, r.correctBounds)(s, { cols: i }), l, i)
            );
          }),
          (t.getBreakpointFromWidth = function (e, t) {
            const n = o(e);
            let r = n[0];
            for (let o = 1, a = n.length; o < a; o++) {
              const a = n[o];
              t > e[a] && (r = a);
            }
            return r;
          }),
          (t.getColsFromBreakpoint = function (e, t) {
            if (!t[e])
              throw new Error(
                "ResponsiveReactGridLayout: `cols` entry for breakpoint " +
                  e +
                  " is missing!",
              );
            return t[e];
          }),
          (t.sortBreakpoints = o);
        var r = n(2118);
        function o(e) {
          return Object.keys(e).sort(function (t, n) {
            return e[t] - e[n];
          });
        }
      },
      2118: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.bottom = s),
          (t.childrenEqual = function (e, t) {
            return (
              (0, o.deepEqual)(
                a.default.Children.map(e, (e) =>
                  null === e || void 0 === e ? void 0 : e.key,
                ),
                a.default.Children.map(t, (e) =>
                  null === e || void 0 === e ? void 0 : e.key,
                ),
              ) &&
              (0, o.deepEqual)(
                a.default.Children.map(e, (e) =>
                  null === e || void 0 === e ? void 0 : e.props["data-grid"],
                ),
                a.default.Children.map(t, (e) =>
                  null === e || void 0 === e ? void 0 : e.props["data-grid"],
                ),
              )
            );
          }),
          (t.cloneLayout = u),
          (t.cloneLayoutItem = f),
          (t.collides = d),
          (t.compact = p),
          (t.compactItem = g),
          (t.compactType = function (e) {
            const { verticalCompact: t, compactType: n } = e || {};
            return !1 === t ? null : n;
          }),
          (t.correctBounds = y),
          (t.fastPositionEqual = function (e, t) {
            return (
              e.left === t.left &&
              e.top === t.top &&
              e.width === t.width &&
              e.height === t.height
            );
          }),
          (t.fastRGLPropsEqual = void 0),
          (t.getAllCollisions = w),
          (t.getFirstCollision = b),
          (t.getLayoutItem = v),
          (t.getStatics = S),
          (t.modifyLayout = c),
          (t.moveElement = x),
          (t.moveElementAwayFromCollision = k),
          (t.noop = void 0),
          (t.perc = function (e) {
            return 100 * e + "%";
          }),
          (t.resizeItemInDirection = function (e, t, n, r) {
            const o = N[e];
            return o ? o(t, { ...t, ...n }, r) : n;
          }),
          (t.setTopLeft = function (e) {
            let { top: t, left: n, width: r, height: o } = e;
            return {
              top: "".concat(t, "px"),
              left: "".concat(n, "px"),
              width: "".concat(r, "px"),
              height: "".concat(o, "px"),
              position: "absolute",
            };
          }),
          (t.setTransform = function (e) {
            let { top: t, left: n, width: r, height: o } = e;
            const a = "translate(".concat(n, "px,").concat(t, "px)");
            return {
              transform: a,
              WebkitTransform: a,
              MozTransform: a,
              msTransform: a,
              OTransform: a,
              width: "".concat(r, "px"),
              height: "".concat(o, "px"),
              position: "absolute",
            };
          }),
          (t.sortLayoutItems = T),
          (t.sortLayoutItemsByColRow = M),
          (t.sortLayoutItemsByRowCol = j),
          (t.synchronizeLayoutWithChildren = function (e, t, n, r, o) {
            e = e || [];
            const l = [];
            a.default.Children.forEach(t, (t) => {
              if (null == (null === t || void 0 === t ? void 0 : t.key)) return;
              const n = v(e, String(t.key)),
                r = t.props["data-grid"];
              n && null == r
                ? l.push(f(n))
                : r
                  ? (i || L([r], "ReactGridLayout.children"),
                    l.push(f({ ...r, i: t.key })))
                  : l.push(f({ w: 1, h: 1, x: 0, y: s(l), i: String(t.key) }));
            });
            const u = y(l, { cols: n });
            return o ? u : p(u, r, n);
          }),
          (t.validateLayout = L),
          (t.withLayoutItem = function (e, t, n) {
            let r = v(e, t);
            return r ? ((r = n(f(r))), [(e = c(e, r)), r]) : [e, null];
          });
        var r,
          o = n(9541),
          a = (r = n(969)) && r.__esModule ? r : { default: r };
        const i = !0,
          l = !1;
        function s(e) {
          let t,
            n = 0;
          for (let r = 0, o = e.length; r < o; r++)
            (t = e[r].y + e[r].h), t > n && (n = t);
          return n;
        }
        function u(e) {
          const t = Array(e.length);
          for (let n = 0, r = e.length; n < r; n++) t[n] = f(e[n]);
          return t;
        }
        function c(e, t) {
          const n = Array(e.length);
          for (let r = 0, o = e.length; r < o; r++)
            t.i === e[r].i ? (n[r] = t) : (n[r] = e[r]);
          return n;
        }
        function f(e) {
          return {
            w: e.w,
            h: e.h,
            x: e.x,
            y: e.y,
            i: e.i,
            minW: e.minW,
            maxW: e.maxW,
            minH: e.minH,
            maxH: e.maxH,
            moved: Boolean(e.moved),
            static: Boolean(e.static),
            isDraggable: e.isDraggable,
            isResizable: e.isResizable,
            resizeHandles: e.resizeHandles,
            isBounded: e.isBounded,
          };
        }
        t.fastRGLPropsEqual = n(7009);
        function d(e, t) {
          return (
            e.i !== t.i &&
            !(e.x + e.w <= t.x) &&
            !(e.x >= t.x + t.w) &&
            !(e.y + e.h <= t.y) &&
            !(e.y >= t.y + t.h)
          );
        }
        function p(e, t, n, r) {
          const o = S(e),
            a = T(e, t),
            i = Array(e.length);
          for (let l = 0, s = a.length; l < s; l++) {
            let s = f(a[l]);
            s.static || ((s = g(o, s, t, n, a, r)), o.push(s)),
              (i[e.indexOf(a[l])] = s),
              (s.moved = !1);
          }
          return i;
        }
        const h = { x: "w", y: "h" };
        function m(e, t, n, r) {
          const o = h[r];
          t[r] += 1;
          for (let a = e.map((e) => e.i).indexOf(t.i) + 1; a < e.length; a++) {
            const i = e[a];
            if (!i.static) {
              if (i.y > t.y + t.h) break;
              d(t, i) && m(e, i, n + t[o], r);
            }
          }
          t[r] = n;
        }
        function g(e, t, n, r, o, a) {
          const i = "horizontal" === n;
          if ("vertical" === n)
            for (t.y = Math.min(s(e), t.y); t.y > 0 && !b(e, t); ) t.y--;
          else if (i) for (; t.x > 0 && !b(e, t); ) t.x--;
          let l;
          for (; (l = b(e, t)) && (null !== n || !a); )
            if (
              (i ? m(o, t, l.x + l.w, "x") : m(o, t, l.y + l.h, "y"),
              i && t.x + t.w > r)
            )
              for (t.x = r - t.w, t.y++; t.x > 0 && !b(e, t); ) t.x--;
          return (t.y = Math.max(t.y, 0)), (t.x = Math.max(t.x, 0)), t;
        }
        function y(e, t) {
          const n = S(e);
          for (let r = 0, o = e.length; r < o; r++) {
            const o = e[r];
            if (
              (o.x + o.w > t.cols && (o.x = t.cols - o.w),
              o.x < 0 && ((o.x = 0), (o.w = t.cols)),
              o.static)
            )
              for (; b(n, o); ) o.y++;
            else n.push(o);
          }
          return e;
        }
        function v(e, t) {
          for (let n = 0, r = e.length; n < r; n++)
            if (e[n].i === t) return e[n];
        }
        function b(e, t) {
          for (let n = 0, r = e.length; n < r; n++) if (d(e[n], t)) return e[n];
        }
        function w(e, t) {
          return e.filter((e) => d(e, t));
        }
        function S(e) {
          return e.filter((e) => e.static);
        }
        function x(e, t, n, r, o, a, i, l, s) {
          if (t.static && !0 !== t.isDraggable) return e;
          if (t.y === r && t.x === n) return e;
          A(
            "Moving element "
              .concat(t.i, " to [")
              .concat(String(n), ",")
              .concat(String(r), "] from [")
              .concat(t.x, ",")
              .concat(t.y, "]"),
          );
          const c = t.x,
            f = t.y;
          "number" === typeof n && (t.x = n),
            "number" === typeof r && (t.y = r),
            (t.moved = !0);
          let d = T(e, i);
          ("vertical" === i && "number" === typeof r
            ? f >= r
            : "horizontal" === i && "number" === typeof n && c >= n) &&
            (d = d.reverse());
          const p = w(d, t),
            h = p.length > 0;
          if (h && s) return u(e);
          if (h && a)
            return (
              A("Collision prevented on ".concat(t.i, ", reverting.")),
              (t.x = c),
              (t.y = f),
              (t.moved = !1),
              e
            );
          for (let u = 0, m = p.length; u < m; u++) {
            const n = p[u];
            A(
              "Resolving collision between "
                .concat(t.i, " at [")
                .concat(t.x, ",")
                .concat(t.y, "] and ")
                .concat(n.i, " at [")
                .concat(n.x, ",")
                .concat(n.y, "]"),
            ),
              n.moved ||
                (e = n.static ? k(e, n, t, o, i, l) : k(e, t, n, o, i, l));
          }
          return e;
        }
        function k(e, t, n, r, o, a) {
          const i = "horizontal" === o,
            l = "vertical" === o,
            s = t.static;
          if (r) {
            r = !1;
            const u = {
                x: i ? Math.max(t.x - n.w, 0) : n.x,
                y: l ? Math.max(t.y - n.h, 0) : n.y,
                w: n.w,
                h: n.h,
                i: "-1",
              },
              c = b(e, u),
              f = c && c.y + c.h > t.y,
              d = c && t.x + t.w > c.x;
            if (!c)
              return (
                A(
                  "Doing reverse collision on "
                    .concat(n.i, " up to [")
                    .concat(u.x, ",")
                    .concat(u.y, "]."),
                ),
                x(e, n, i ? u.x : void 0, l ? u.y : void 0, r, s, o, a)
              );
            if (f && l) return x(e, n, void 0, t.y + 1, r, s, o, a);
            if (f && null == o) return (t.y = n.y), (n.y = n.y + n.h), e;
            if (d && i) return x(e, t, n.x, void 0, r, s, o, a);
          }
          const u = i ? n.x + 1 : void 0,
            c = l ? n.y + 1 : void 0;
          return null == u && null == c
            ? e
            : x(e, n, i ? n.x + 1 : void 0, l ? n.y + 1 : void 0, r, s, o, a);
        }
        const E = (e, t, n, r) => (e + n > r ? t : n),
          O = (e, t, n) => (e < 0 ? t : n),
          C = (e) => Math.max(0, e),
          _ = (e) => Math.max(0, e),
          P = (e, t, n) => {
            let { left: r, height: o, width: a } = t;
            const i = e.top - (o - e.height);
            return { left: r, width: a, height: O(i, e.height, o), top: _(i) };
          },
          R = (e, t, n) => {
            let { top: r, left: o, height: a, width: i } = t;
            return {
              top: r,
              height: a,
              width: E(e.left, e.width, i, n),
              left: C(o),
            };
          },
          z = (e, t, n) => {
            let { top: r, height: o, width: a } = t;
            const i = e.left - (a - e.width);
            return {
              height: o,
              width: i < 0 ? e.width : E(e.left, e.width, a, n),
              top: _(r),
              left: C(i),
            };
          },
          D = (e, t, n) => {
            let { top: r, left: o, height: a, width: i } = t;
            return { width: i, left: o, height: O(r, e.height, a), top: _(r) };
          },
          N = {
            n: P,
            ne: function () {
              return P(
                arguments.length <= 0 ? void 0 : arguments[0],
                R(...arguments),
              );
            },
            e: R,
            se: function () {
              return D(
                arguments.length <= 0 ? void 0 : arguments[0],
                R(...arguments),
              );
            },
            s: D,
            sw: function () {
              return D(
                arguments.length <= 0 ? void 0 : arguments[0],
                z(...arguments),
              );
            },
            w: z,
            nw: function () {
              return P(
                arguments.length <= 0 ? void 0 : arguments[0],
                z(...arguments),
              );
            },
          };
        function T(e, t) {
          return "horizontal" === t ? M(e) : "vertical" === t ? j(e) : e;
        }
        function j(e) {
          return e.slice(0).sort(function (e, t) {
            return e.y > t.y || (e.y === t.y && e.x > t.x)
              ? 1
              : e.y === t.y && e.x === t.x
                ? 0
                : -1;
          });
        }
        function M(e) {
          return e.slice(0).sort(function (e, t) {
            return e.x > t.x || (e.x === t.x && e.y > t.y) ? 1 : -1;
          });
        }
        function L(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Layout";
          const n = ["x", "y", "w", "h"];
          if (!Array.isArray(e)) throw new Error(t + " must be an array!");
          for (let r = 0, o = e.length; r < o; r++) {
            const o = e[r];
            for (let e = 0; e < n.length; e++)
              if ("number" !== typeof o[n[e]])
                throw new Error(
                  "ReactGridLayout: " +
                    t +
                    "[" +
                    r +
                    "]." +
                    n[e] +
                    " must be a number!",
                );
          }
        }
        function A() {
          l && console.log(...arguments);
        }
        t.noop = () => {};
      },
      9681: (e, t, n) => {
        (e.exports = n(2174).default),
          n(2118),
          n(7058),
          (e.exports.Responsive = n(8185).default),
          (e.exports.Responsive.utils = n(7027)),
          (e.exports.WidthProvider = n(9687).default);
      },
      5804: (e) => {
        function t(e) {
          var n,
            r,
            o = "";
          if ("string" == typeof e || "number" == typeof e) o += e;
          else if ("object" == typeof e)
            if (Array.isArray(e)) {
              var a = e.length;
              for (n = 0; n < a; n++)
                e[n] && (r = t(e[n])) && (o && (o += " "), (o += r));
            } else for (r in e) e[r] && (o && (o += " "), (o += r));
          return o;
        }
        function n() {
          for (var e, n, r = 0, o = "", a = arguments.length; r < a; r++)
            (e = arguments[r]) && (n = t(e)) && (o && (o += " "), (o += n));
          return o;
        }
        (e.exports = n), (e.exports.clsx = n);
      },
      7175: (e, t, n) => {
        "use strict";
        function r() {
          var e = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state,
          );
          null !== e && void 0 !== e && this.setState(e);
        }
        function o(e) {
          this.setState(
            function (t) {
              var n = this.constructor.getDerivedStateFromProps(e, t);
              return null !== n && void 0 !== n ? n : null;
            }.bind(this),
          );
        }
        function a(e, t) {
          try {
            var n = this.props,
              r = this.state;
            (this.props = e),
              (this.state = t),
              (this.__reactInternalSnapshotFlag = !0),
              (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
                n,
                r,
              ));
          } finally {
            (this.props = n), (this.state = r);
          }
        }
        function i(e) {
          var t = e.prototype;
          if (!t || !t.isReactComponent)
            throw new Error("Can only polyfill class components");
          if (
            "function" !== typeof e.getDerivedStateFromProps &&
            "function" !== typeof t.getSnapshotBeforeUpdate
          )
            return e;
          var n = null,
            i = null,
            l = null;
          if (
            ("function" === typeof t.componentWillMount
              ? (n = "componentWillMount")
              : "function" === typeof t.UNSAFE_componentWillMount &&
                (n = "UNSAFE_componentWillMount"),
            "function" === typeof t.componentWillReceiveProps
              ? (i = "componentWillReceiveProps")
              : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
                (i = "UNSAFE_componentWillReceiveProps"),
            "function" === typeof t.componentWillUpdate
              ? (l = "componentWillUpdate")
              : "function" === typeof t.UNSAFE_componentWillUpdate &&
                (l = "UNSAFE_componentWillUpdate"),
            null !== n || null !== i || null !== l)
          ) {
            var s = e.displayName || e.name,
              u =
                "function" === typeof e.getDerivedStateFromProps
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            throw Error(
              "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                s +
                " uses " +
                u +
                " but also contains the following legacy lifecycles:" +
                (null !== n ? "\n  " + n : "") +
                (null !== i ? "\n  " + i : "") +
                (null !== l ? "\n  " + l : "") +
                "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
            );
          }
          if (
            ("function" === typeof e.getDerivedStateFromProps &&
              ((t.componentWillMount = r), (t.componentWillReceiveProps = o)),
            "function" === typeof t.getSnapshotBeforeUpdate)
          ) {
            if ("function" !== typeof t.componentDidUpdate)
              throw new Error(
                "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
              );
            t.componentWillUpdate = a;
            var c = t.componentDidUpdate;
            t.componentDidUpdate = function (e, t, n) {
              var r = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : n;
              c.call(this, e, t, r);
            };
          }
          return e;
        }
        n.r(t),
          n.d(t, { polyfill: () => i }),
          (r.__suppressDeprecationWarning = !0),
          (o.__suppressDeprecationWarning = !0),
          (a.__suppressDeprecationWarning = !0);
      },
      6769: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.bodyOpenClassName = t.portalClassName = void 0);
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          a = n(969),
          i = h(a),
          l = h(n(5749)),
          s = h(n(4974)),
          u = h(n(3569)),
          c = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(593)),
          f = n(7827),
          d = h(f),
          p = n(7175);
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function m(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var g = (t.portalClassName = "ReactModalPortal"),
          y = (t.bodyOpenClassName = "ReactModal__Body--open"),
          v = f.canUseDOM && void 0 !== l.default.createPortal,
          b = function (e) {
            return document.createElement(e);
          },
          w = function () {
            return v
              ? l.default.createPortal
              : l.default.unstable_renderSubtreeIntoContainer;
          };
        function S(e) {
          return e();
        }
        var x = (function (e) {
          function t() {
            var e, n, o;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var a = arguments.length, s = Array(a), c = 0; c < a; c++)
              s[c] = arguments[c];
            return (
              (n = o =
                m(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(s),
                  ),
                )),
              (o.removePortal = function () {
                !v && l.default.unmountComponentAtNode(o.node);
                var e = S(o.props.parentSelector);
                e && e.contains(o.node)
                  ? e.removeChild(o.node)
                  : console.warn(
                      'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.',
                    );
              }),
              (o.portalRef = function (e) {
                o.portal = e;
              }),
              (o.renderPortal = function (e) {
                var n = w()(
                  o,
                  i.default.createElement(
                    u.default,
                    r({ defaultStyles: t.defaultStyles }, e),
                  ),
                  o.node,
                );
                o.portalRef(n);
              }),
              m(o, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    f.canUseDOM &&
                      (v || (this.node = b("div")),
                      (this.node.className = this.props.portalClassName),
                      S(this.props.parentSelector).appendChild(this.node),
                      !v && this.renderPortal(this.props));
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (e) {
                    return {
                      prevParent: S(e.parentSelector),
                      nextParent: S(this.props.parentSelector),
                    };
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t, n) {
                    if (f.canUseDOM) {
                      var r = this.props,
                        o = r.isOpen,
                        a = r.portalClassName;
                      e.portalClassName !== a && (this.node.className = a);
                      var i = n.prevParent,
                        l = n.nextParent;
                      l !== i &&
                        (i.removeChild(this.node), l.appendChild(this.node)),
                        (e.isOpen || o) && !v && this.renderPortal(this.props);
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if (f.canUseDOM && this.node && this.portal) {
                      var e = this.portal.state,
                        t = Date.now(),
                        n =
                          e.isOpen &&
                          this.props.closeTimeoutMS &&
                          (e.closesAt || t + this.props.closeTimeoutMS);
                      n
                        ? (e.beforeClose || this.portal.closeWithTimeout(),
                          setTimeout(this.removePortal, n - t))
                        : this.removePortal();
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return f.canUseDOM && v
                      ? (!this.node && v && (this.node = b("div")),
                        w()(
                          i.default.createElement(
                            u.default,
                            r(
                              {
                                ref: this.portalRef,
                                defaultStyles: t.defaultStyles,
                              },
                              this.props,
                            ),
                          ),
                          this.node,
                        ))
                      : null;
                  },
                },
              ],
              [
                {
                  key: "setAppElement",
                  value: function (e) {
                    c.setElement(e);
                  },
                },
              ],
            ),
            t
          );
        })(a.Component);
        (x.propTypes = {
          isOpen: s.default.bool.isRequired,
          style: s.default.shape({
            content: s.default.object,
            overlay: s.default.object,
          }),
          portalClassName: s.default.string,
          bodyOpenClassName: s.default.string,
          htmlOpenClassName: s.default.string,
          className: s.default.oneOfType([
            s.default.string,
            s.default.shape({
              base: s.default.string.isRequired,
              afterOpen: s.default.string.isRequired,
              beforeClose: s.default.string.isRequired,
            }),
          ]),
          overlayClassName: s.default.oneOfType([
            s.default.string,
            s.default.shape({
              base: s.default.string.isRequired,
              afterOpen: s.default.string.isRequired,
              beforeClose: s.default.string.isRequired,
            }),
          ]),
          appElement: s.default.oneOfType([
            s.default.instanceOf(d.default),
            s.default.instanceOf(f.SafeHTMLCollection),
            s.default.instanceOf(f.SafeNodeList),
            s.default.arrayOf(s.default.instanceOf(d.default)),
          ]),
          onAfterOpen: s.default.func,
          onRequestClose: s.default.func,
          closeTimeoutMS: s.default.number,
          ariaHideApp: s.default.bool,
          shouldFocusAfterRender: s.default.bool,
          shouldCloseOnOverlayClick: s.default.bool,
          shouldReturnFocusAfterClose: s.default.bool,
          preventScroll: s.default.bool,
          parentSelector: s.default.func,
          aria: s.default.object,
          data: s.default.object,
          role: s.default.string,
          contentLabel: s.default.string,
          shouldCloseOnEsc: s.default.bool,
          overlayRef: s.default.func,
          contentRef: s.default.func,
          id: s.default.string,
          overlayElement: s.default.func,
          contentElement: s.default.func,
        }),
          (x.defaultProps = {
            isOpen: !1,
            portalClassName: g,
            bodyOpenClassName: y,
            role: "dialog",
            ariaHideApp: !0,
            closeTimeoutMS: 0,
            shouldFocusAfterRender: !0,
            shouldCloseOnEsc: !0,
            shouldCloseOnOverlayClick: !0,
            shouldReturnFocusAfterClose: !0,
            preventScroll: !1,
            parentSelector: function () {
              return document.body;
            },
            overlayElement: function (e, t) {
              return i.default.createElement("div", e, t);
            },
            contentElement: function (e, t) {
              return i.default.createElement("div", e, t);
            },
          }),
          (x.defaultStyles = {
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }),
          (0, p.polyfill)(x),
          (t.default = x);
      },
      3569: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          o =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = n(969),
          l = g(n(4974)),
          s = m(n(592)),
          u = g(n(6498)),
          c = m(n(593)),
          f = m(n(1947)),
          d = n(7827),
          p = g(d),
          h = g(n(447));
        function m(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function g(e) {
          return e && e.__esModule ? e : { default: e };
        }
        n(5893);
        var y = {
            overlay: "ReactModal__Overlay",
            content: "ReactModal__Content",
          },
          v = 0,
          b = (function (e) {
            function t(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              var n = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
              return (
                (n.setOverlayRef = function (e) {
                  (n.overlay = e), n.props.overlayRef && n.props.overlayRef(e);
                }),
                (n.setContentRef = function (e) {
                  (n.content = e), n.props.contentRef && n.props.contentRef(e);
                }),
                (n.afterClose = function () {
                  var e = n.props,
                    t = e.appElement,
                    r = e.ariaHideApp,
                    o = e.htmlOpenClassName,
                    a = e.bodyOpenClassName,
                    i = e.parentSelector,
                    l = (i && i().ownerDocument) || document;
                  a && f.remove(l.body, a),
                    o && f.remove(l.getElementsByTagName("html")[0], o),
                    r && v > 0 && 0 === (v -= 1) && c.show(t),
                    n.props.shouldFocusAfterRender &&
                      (n.props.shouldReturnFocusAfterClose
                        ? (s.returnFocus(n.props.preventScroll),
                          s.teardownScopedFocus())
                        : s.popWithoutFocus()),
                    n.props.onAfterClose && n.props.onAfterClose(),
                    h.default.deregister(n);
                }),
                (n.open = function () {
                  n.beforeOpen(),
                    n.state.afterOpen && n.state.beforeClose
                      ? (clearTimeout(n.closeTimer),
                        n.setState({ beforeClose: !1 }))
                      : (n.props.shouldFocusAfterRender &&
                          (s.setupScopedFocus(n.node), s.markForFocusLater()),
                        n.setState({ isOpen: !0 }, function () {
                          n.openAnimationFrame = requestAnimationFrame(
                            function () {
                              n.setState({ afterOpen: !0 }),
                                n.props.isOpen &&
                                  n.props.onAfterOpen &&
                                  n.props.onAfterOpen({
                                    overlayEl: n.overlay,
                                    contentEl: n.content,
                                  });
                            },
                          );
                        }));
                }),
                (n.close = function () {
                  n.props.closeTimeoutMS > 0
                    ? n.closeWithTimeout()
                    : n.closeWithoutTimeout();
                }),
                (n.focusContent = function () {
                  return (
                    n.content &&
                    !n.contentHasFocus() &&
                    n.content.focus({ preventScroll: !0 })
                  );
                }),
                (n.closeWithTimeout = function () {
                  var e = Date.now() + n.props.closeTimeoutMS;
                  n.setState({ beforeClose: !0, closesAt: e }, function () {
                    n.closeTimer = setTimeout(
                      n.closeWithoutTimeout,
                      n.state.closesAt - Date.now(),
                    );
                  });
                }),
                (n.closeWithoutTimeout = function () {
                  n.setState(
                    {
                      beforeClose: !1,
                      isOpen: !1,
                      afterOpen: !1,
                      closesAt: null,
                    },
                    n.afterClose,
                  );
                }),
                (n.handleKeyDown = function (e) {
                  (function (e) {
                    return "Tab" === e.code || 9 === e.keyCode;
                  })(e) && (0, u.default)(n.content, e),
                    n.props.shouldCloseOnEsc &&
                      (function (e) {
                        return "Escape" === e.code || 27 === e.keyCode;
                      })(e) &&
                      (e.stopPropagation(), n.requestClose(e));
                }),
                (n.handleOverlayOnClick = function (e) {
                  null === n.shouldClose && (n.shouldClose = !0),
                    n.shouldClose &&
                      n.props.shouldCloseOnOverlayClick &&
                      (n.ownerHandlesClose()
                        ? n.requestClose(e)
                        : n.focusContent()),
                    (n.shouldClose = null);
                }),
                (n.handleContentOnMouseUp = function () {
                  n.shouldClose = !1;
                }),
                (n.handleOverlayOnMouseDown = function (e) {
                  n.props.shouldCloseOnOverlayClick ||
                    e.target != n.overlay ||
                    e.preventDefault();
                }),
                (n.handleContentOnClick = function () {
                  n.shouldClose = !1;
                }),
                (n.handleContentOnMouseDown = function () {
                  n.shouldClose = !1;
                }),
                (n.requestClose = function (e) {
                  return n.ownerHandlesClose() && n.props.onRequestClose(e);
                }),
                (n.ownerHandlesClose = function () {
                  return n.props.onRequestClose;
                }),
                (n.shouldBeClosed = function () {
                  return !n.state.isOpen && !n.state.beforeClose;
                }),
                (n.contentHasFocus = function () {
                  return (
                    document.activeElement === n.content ||
                    n.content.contains(document.activeElement)
                  );
                }),
                (n.buildClassName = function (e, t) {
                  var r =
                      "object" ===
                      ("undefined" === typeof t ? "undefined" : o(t))
                        ? t
                        : {
                            base: y[e],
                            afterOpen: y[e] + "--after-open",
                            beforeClose: y[e] + "--before-close",
                          },
                    a = r.base;
                  return (
                    n.state.afterOpen && (a = a + " " + r.afterOpen),
                    n.state.beforeClose && (a = a + " " + r.beforeClose),
                    "string" === typeof t && t ? a + " " + t : a
                  );
                }),
                (n.attributesFromObject = function (e, t) {
                  return Object.keys(t).reduce(function (n, r) {
                    return (n[e + "-" + r] = t[r]), n;
                  }, {});
                }),
                (n.state = { afterOpen: !1, beforeClose: !1 }),
                (n.shouldClose = null),
                (n.moveFromContentToOverlay = null),
                n
              );
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t,
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              a(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.isOpen && this.open();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    this.props.isOpen && !e.isOpen
                      ? this.open()
                      : !this.props.isOpen && e.isOpen && this.close(),
                      this.props.shouldFocusAfterRender &&
                        this.state.isOpen &&
                        !t.isOpen &&
                        this.focusContent();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.isOpen && this.afterClose(),
                      clearTimeout(this.closeTimer),
                      cancelAnimationFrame(this.openAnimationFrame);
                  },
                },
                {
                  key: "beforeOpen",
                  value: function () {
                    var e = this.props,
                      t = e.appElement,
                      n = e.ariaHideApp,
                      r = e.htmlOpenClassName,
                      o = e.bodyOpenClassName,
                      a = e.parentSelector,
                      i = (a && a().ownerDocument) || document;
                    o && f.add(i.body, o),
                      r && f.add(i.getElementsByTagName("html")[0], r),
                      n && ((v += 1), c.hide(t)),
                      h.default.register(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.id,
                      n = e.className,
                      o = e.overlayClassName,
                      a = e.defaultStyles,
                      i = e.children,
                      l = n ? {} : a.content,
                      s = o ? {} : a.overlay;
                    if (this.shouldBeClosed()) return null;
                    var u = {
                        ref: this.setOverlayRef,
                        className: this.buildClassName("overlay", o),
                        style: r({}, s, this.props.style.overlay),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown,
                      },
                      c = r(
                        {
                          id: t,
                          ref: this.setContentRef,
                          style: r({}, l, this.props.style.content),
                          className: this.buildClassName("content", n),
                          tabIndex: "-1",
                          onKeyDown: this.handleKeyDown,
                          onMouseDown: this.handleContentOnMouseDown,
                          onMouseUp: this.handleContentOnMouseUp,
                          onClick: this.handleContentOnClick,
                          role: this.props.role,
                          "aria-label": this.props.contentLabel,
                        },
                        this.attributesFromObject(
                          "aria",
                          r({ modal: !0 }, this.props.aria),
                        ),
                        this.attributesFromObject(
                          "data",
                          this.props.data || {},
                        ),
                        { "data-testid": this.props.testId },
                      ),
                      f = this.props.contentElement(c, i);
                    return this.props.overlayElement(u, f);
                  },
                },
              ]),
              t
            );
          })(i.Component);
        (b.defaultProps = {
          style: { overlay: {}, content: {} },
          defaultStyles: {},
        }),
          (b.propTypes = {
            isOpen: l.default.bool.isRequired,
            defaultStyles: l.default.shape({
              content: l.default.object,
              overlay: l.default.object,
            }),
            style: l.default.shape({
              content: l.default.object,
              overlay: l.default.object,
            }),
            className: l.default.oneOfType([
              l.default.string,
              l.default.object,
            ]),
            overlayClassName: l.default.oneOfType([
              l.default.string,
              l.default.object,
            ]),
            parentSelector: l.default.func,
            bodyOpenClassName: l.default.string,
            htmlOpenClassName: l.default.string,
            ariaHideApp: l.default.bool,
            appElement: l.default.oneOfType([
              l.default.instanceOf(p.default),
              l.default.instanceOf(d.SafeHTMLCollection),
              l.default.instanceOf(d.SafeNodeList),
              l.default.arrayOf(l.default.instanceOf(p.default)),
            ]),
            onAfterOpen: l.default.func,
            onAfterClose: l.default.func,
            onRequestClose: l.default.func,
            closeTimeoutMS: l.default.number,
            shouldFocusAfterRender: l.default.bool,
            shouldCloseOnOverlayClick: l.default.bool,
            shouldReturnFocusAfterClose: l.default.bool,
            preventScroll: l.default.bool,
            role: l.default.string,
            contentLabel: l.default.string,
            aria: l.default.object,
            data: l.default.object,
            children: l.default.node,
            shouldCloseOnEsc: l.default.bool,
            overlayRef: l.default.func,
            contentRef: l.default.func,
            id: l.default.string,
            overlayElement: l.default.func,
            contentElement: l.default.func,
            testId: l.default.string,
          }),
          (t.default = b),
          (e.exports = t.default);
      },
      593: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            l &&
              (l.removeAttribute
                ? l.removeAttribute("aria-hidden")
                : null != l.length
                  ? l.forEach(function (e) {
                      return e.removeAttribute("aria-hidden");
                    })
                  : document.querySelectorAll(l).forEach(function (e) {
                      return e.removeAttribute("aria-hidden");
                    }));
            l = null;
          }),
          (t.log = function () {
            0;
          }),
          (t.assertNodeList = s),
          (t.setElement = function (e) {
            var t = e;
            if ("string" === typeof t && i.canUseDOM) {
              var n = document.querySelectorAll(t);
              s(n, t), (t = n);
            }
            return (l = t || l);
          }),
          (t.validateElement = u),
          (t.hide = function (e) {
            var t = !0,
              n = !1,
              r = void 0;
            try {
              for (
                var o, a = u(e)[Symbol.iterator]();
                !(t = (o = a.next()).done);
                t = !0
              ) {
                o.value.setAttribute("aria-hidden", "true");
              }
            } catch (i) {
              (n = !0), (r = i);
            } finally {
              try {
                !t && a.return && a.return();
              } finally {
                if (n) throw r;
              }
            }
          }),
          (t.show = function (e) {
            var t = !0,
              n = !1,
              r = void 0;
            try {
              for (
                var o, a = u(e)[Symbol.iterator]();
                !(t = (o = a.next()).done);
                t = !0
              ) {
                o.value.removeAttribute("aria-hidden");
              }
            } catch (i) {
              (n = !0), (r = i);
            } finally {
              try {
                !t && a.return && a.return();
              } finally {
                if (n) throw r;
              }
            }
          }),
          (t.documentNotReadyOrSSRTesting = function () {
            l = null;
          });
        var r,
          o = n(7256),
          a = (r = o) && r.__esModule ? r : { default: r },
          i = n(7827);
        var l = null;
        function s(e, t) {
          if (!e || !e.length)
            throw new Error(
              "react-modal: No elements were found for selector " + t + ".",
            );
        }
        function u(e) {
          var t = e || l;
          return t
            ? Array.isArray(t) ||
              t instanceof HTMLCollection ||
              t instanceof NodeList
              ? t
              : [t]
            : ((0, a.default)(
                !1,
                [
                  "react-modal: App element is not defined.",
                  "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
                  "This is needed so screen readers don't see main content",
                  "when modal is opened. It is not recommended, but you can opt-out",
                  "by setting `ariaHideApp={false}`.",
                ].join(" "),
              ),
              []);
        }
      },
      5893: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            for (var e = [i, l], t = 0; t < e.length; t++) {
              var n = e[t];
              n && n.parentNode && n.parentNode.removeChild(n);
            }
            (i = l = null), (s = []);
          }),
          (t.log = function () {
            console.log("bodyTrap ----------"), console.log(s.length);
            for (var e = [i, l], t = 0; t < e.length; t++) {
              var n = e[t] || {};
              console.log(n.nodeName, n.className, n.id);
            }
            console.log("edn bodyTrap ----------");
          });
        var r,
          o = n(447),
          a = (r = o) && r.__esModule ? r : { default: r };
        var i = void 0,
          l = void 0,
          s = [];
        function u() {
          0 !== s.length && s[s.length - 1].focusContent();
        }
        a.default.subscribe(function (e, t) {
          i ||
            l ||
            ((i = document.createElement("div")).setAttribute(
              "data-react-modal-body-trap",
              "",
            ),
            (i.style.position = "absolute"),
            (i.style.opacity = "0"),
            i.setAttribute("tabindex", "0"),
            i.addEventListener("focus", u),
            (l = i.cloneNode()).addEventListener("focus", u)),
            (s = t).length > 0
              ? (document.body.firstChild !== i &&
                  document.body.insertBefore(i, document.body.firstChild),
                document.body.lastChild !== l && document.body.appendChild(l))
              : (i.parentElement && i.parentElement.removeChild(i),
                l.parentElement && l.parentElement.removeChild(l));
        });
      },
      1947: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            var e = document.getElementsByTagName("html")[0];
            for (var t in n) o(e, n[t]);
            var a = document.body;
            for (var i in r) o(a, r[i]);
            (n = {}), (r = {});
          }),
          (t.log = function () {
            0;
          });
        var n = {},
          r = {};
        function o(e, t) {
          e.classList.remove(t);
        }
        (t.add = function (e, t) {
          return (
            (o = e.classList),
            (a = "html" == e.nodeName.toLowerCase() ? n : r),
            void t.split(" ").forEach(function (e) {
              !(function (e, t) {
                e[t] || (e[t] = 0), (e[t] += 1);
              })(a, e),
                o.add(e);
            })
          );
          var o, a;
        }),
          (t.remove = function (e, t) {
            return (
              (o = e.classList),
              (a = "html" == e.nodeName.toLowerCase() ? n : r),
              void t.split(" ").forEach(function (e) {
                !(function (e, t) {
                  e[t] && (e[t] -= 1);
                })(a, e),
                  0 === a[e] && o.remove(e);
              })
            );
            var o, a;
          });
      },
      592: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            i = [];
          }),
          (t.log = function () {
            0;
          }),
          (t.handleBlur = u),
          (t.handleFocus = c),
          (t.markForFocusLater = function () {
            i.push(document.activeElement);
          }),
          (t.returnFocus = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = null;
            try {
              return void (
                0 !== i.length && (t = i.pop()).focus({ preventScroll: e })
              );
            } catch (n) {
              console.warn(
                [
                  "You tried to return focus to",
                  t,
                  "but it is not in the DOM anymore",
                ].join(" "),
              );
            }
          }),
          (t.popWithoutFocus = function () {
            i.length > 0 && i.pop();
          }),
          (t.setupScopedFocus = function (e) {
            (l = e),
              window.addEventListener
                ? (window.addEventListener("blur", u, !1),
                  document.addEventListener("focus", c, !0))
                : (window.attachEvent("onBlur", u),
                  document.attachEvent("onFocus", c));
          }),
          (t.teardownScopedFocus = function () {
            (l = null),
              window.addEventListener
                ? (window.removeEventListener("blur", u),
                  document.removeEventListener("focus", c))
                : (window.detachEvent("onBlur", u),
                  document.detachEvent("onFocus", c));
          });
        var r,
          o = n(9062),
          a = (r = o) && r.__esModule ? r : { default: r };
        var i = [],
          l = null,
          s = !1;
        function u() {
          s = !0;
        }
        function c() {
          if (s) {
            if (((s = !1), !l)) return;
            setTimeout(function () {
              l.contains(document.activeElement) ||
                ((0, a.default)(l)[0] || l).focus();
            }, 0);
          }
        }
      },
      447: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.log = function () {
            console.log("portalOpenInstances ----------"),
              console.log(r.openInstances.length),
              r.openInstances.forEach(function (e) {
                return console.log(e);
              }),
              console.log("end portalOpenInstances ----------");
          }),
          (t.resetState = function () {
            r = new n();
          });
        var n = function e() {
            var t = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.register = function (e) {
                -1 === t.openInstances.indexOf(e) &&
                  (t.openInstances.push(e), t.emit("register"));
              }),
              (this.deregister = function (e) {
                var n = t.openInstances.indexOf(e);
                -1 !== n &&
                  (t.openInstances.splice(n, 1), t.emit("deregister"));
              }),
              (this.subscribe = function (e) {
                t.subscribers.push(e);
              }),
              (this.emit = function (e) {
                t.subscribers.forEach(function (n) {
                  return n(e, t.openInstances.slice());
                });
              }),
              (this.openInstances = []),
              (this.subscribers = []);
          },
          r = new n();
        t.default = r;
      },
      7827: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0);
        var r,
          o = n(457);
        var a = ((r = o) && r.__esModule ? r : { default: r }).default,
          i = a.canUseDOM ? window.HTMLElement : {};
        (t.SafeHTMLCollection = a.canUseDOM ? window.HTMLCollection : {}),
          (t.SafeNodeList = a.canUseDOM ? window.NodeList : {}),
          (t.canUseDOM = a.canUseDOM);
        t.default = i;
      },
      6498: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var n = (0, a.default)(e);
            if (!n.length) return void t.preventDefault();
            var r = void 0,
              o = t.shiftKey,
              l = n[0],
              s = n[n.length - 1],
              u = i();
            if (e === u) {
              if (!o) return;
              r = s;
            }
            s !== u || o || (r = l);
            l === u && o && (r = s);
            if (r) return t.preventDefault(), void r.focus();
            var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
            if (
              null == c ||
              "Chrome" == c[1] ||
              null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
            )
              return;
            var f = n.indexOf(u);
            f > -1 && (f += o ? -1 : 1);
            if ("undefined" === typeof (r = n[f]))
              return t.preventDefault(), void (r = o ? s : l).focus();
            t.preventDefault(), r.focus();
          });
        var r,
          o = n(9062),
          a = (r = o) && r.__esModule ? r : { default: r };
        function i() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document;
          return e.activeElement.shadowRoot
            ? i(e.activeElement.shadowRoot)
            : e.activeElement;
        }
        e.exports = t.default;
      },
      9062: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function e(t) {
            var n = [].slice.call(t.querySelectorAll("*"), 0).reduce(function (
              t,
              n,
            ) {
              return t.concat(n.shadowRoot ? e(n.shadowRoot) : [n]);
            }, []);
            return n.filter(l);
          });
        var n = "none",
          r = "contents",
          o = /input|select|textarea|button|object|iframe/;
        function a(e) {
          var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
          if (t && !e.innerHTML) return !0;
          try {
            var o = window.getComputedStyle(e),
              a = o.getPropertyValue("display");
            return t
              ? a !== r &&
                  (function (e, t) {
                    return (
                      "visible" !== t.getPropertyValue("overflow") ||
                      (e.scrollWidth <= 0 && e.scrollHeight <= 0)
                    );
                  })(e, o)
              : a === n;
          } catch (i) {
            return console.warn("Failed to inspect element style"), !1;
          }
        }
        function i(e, t) {
          var n = e.nodeName.toLowerCase();
          return (
            ((o.test(n) && !e.disabled) || ("a" === n && e.href) || t) &&
            (function (e) {
              for (
                var t = e, n = e.getRootNode && e.getRootNode();
                t && t !== document.body;

              ) {
                if ((n && t === n && (t = n.host.parentNode), a(t))) return !1;
                t = t.parentNode;
              }
              return !0;
            })(e)
          );
        }
        function l(e) {
          var t = e.getAttribute("tabindex");
          null === t && (t = void 0);
          var n = isNaN(t);
          return (n || t >= 0) && i(e, !n);
        }
        e.exports = t.default;
      },
      6626: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          o = n(6769),
          a = (r = o) && r.__esModule ? r : { default: r };
        (t.default = a.default), (e.exports = t.default);
      },
      5053: (e, t, n) => {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (
              null === e ||
              ("object" !== typeof e && "function" !== typeof e)
            )
              return { default: e };
            var n = s(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(969)),
          o = n(8034),
          a = n(6737),
          i = n(8684),
          l = [
            "children",
            "className",
            "draggableOpts",
            "width",
            "height",
            "handle",
            "handleSize",
            "lockAspectRatio",
            "axis",
            "minConstraints",
            "maxConstraints",
            "onResize",
            "onResizeStop",
            "onResizeStart",
            "resizeHandles",
            "transformScale",
          ];
        function s(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (s = function (e) {
            return e ? n : t;
          })(e);
        }
        function u() {
          return (
            (u = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            u.apply(this, arguments)
          );
        }
        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  d(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : c(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function d(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function p(e, t) {
          return (
            (p = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            p(e, t)
          );
        }
        var h = (function (e) {
          var t, n;
          function i() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).handleRefs = {}),
              (t.lastHandleRect = null),
              (t.slack = null),
              t
            );
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            p(t, n);
          var s = i.prototype;
          return (
            (s.componentWillUnmount = function () {
              this.resetData();
            }),
            (s.resetData = function () {
              this.lastHandleRect = this.slack = null;
            }),
            (s.runConstraints = function (e, t) {
              var n = this.props,
                r = n.minConstraints,
                o = n.maxConstraints,
                a = n.lockAspectRatio;
              if (!r && !o && !a) return [e, t];
              if (a) {
                var i = this.props.width / this.props.height,
                  l = e - this.props.width,
                  s = t - this.props.height;
                Math.abs(l) > Math.abs(s * i) ? (t = e / i) : (e = t * i);
              }
              var u = e,
                c = t,
                f = this.slack || [0, 0],
                d = f[0],
                p = f[1];
              return (
                (e += d),
                (t += p),
                r && ((e = Math.max(r[0], e)), (t = Math.max(r[1], t))),
                o && ((e = Math.min(o[0], e)), (t = Math.min(o[1], t))),
                (this.slack = [d + (u - e), p + (c - t)]),
                [e, t]
              );
            }),
            (s.resizeHandler = function (e, t) {
              var n = this;
              return function (r, o) {
                var a = o.node,
                  i = o.deltaX,
                  l = o.deltaY;
                "onResizeStart" === e && n.resetData();
                var s =
                    ("both" === n.props.axis || "x" === n.props.axis) &&
                    "n" !== t &&
                    "s" !== t,
                  u =
                    ("both" === n.props.axis || "y" === n.props.axis) &&
                    "e" !== t &&
                    "w" !== t;
                if (s || u) {
                  var c = t[0],
                    f = t[t.length - 1],
                    d = a.getBoundingClientRect();
                  if (null != n.lastHandleRect) {
                    if ("w" === f) i += d.left - n.lastHandleRect.left;
                    if ("n" === c) l += d.top - n.lastHandleRect.top;
                  }
                  (n.lastHandleRect = d),
                    "w" === f && (i = -i),
                    "n" === c && (l = -l);
                  var p = n.props.width + (s ? i / n.props.transformScale : 0),
                    h = n.props.height + (u ? l / n.props.transformScale : 0),
                    m = n.runConstraints(p, h);
                  (p = m[0]), (h = m[1]);
                  var g = p !== n.props.width || h !== n.props.height,
                    y = "function" === typeof n.props[e] ? n.props[e] : null;
                  y &&
                    !("onResize" === e && !g) &&
                    (null == r.persist || r.persist(),
                    y(r, {
                      node: a,
                      size: { width: p, height: h },
                      handle: t,
                    })),
                    "onResizeStop" === e && n.resetData();
                }
              };
            }),
            (s.renderResizeHandle = function (e, t) {
              var n = this.props.handle;
              if (!n)
                return r.createElement("span", {
                  className:
                    "react-resizable-handle react-resizable-handle-" + e,
                  ref: t,
                });
              if ("function" === typeof n) return n(e, t);
              var o = f(
                { ref: t },
                "string" === typeof n.type ? {} : { handleAxis: e },
              );
              return r.cloneElement(n, o);
            }),
            (s.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                i = t.className,
                s = t.draggableOpts,
                c =
                  (t.width,
                  t.height,
                  t.handle,
                  t.handleSize,
                  t.lockAspectRatio,
                  t.axis,
                  t.minConstraints,
                  t.maxConstraints,
                  t.onResize,
                  t.onResizeStop,
                  t.onResizeStart,
                  t.resizeHandles),
                d =
                  (t.transformScale,
                  (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                      (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(t, l));
              return (0, a.cloneElement)(
                n,
                f(
                  f({}, d),
                  {},
                  {
                    className: (i ? i + " " : "") + "react-resizable",
                    children: [].concat(
                      n.props.children,
                      c.map(function (t) {
                        var n,
                          a =
                            null != (n = e.handleRefs[t])
                              ? n
                              : (e.handleRefs[t] = r.createRef());
                        return r.createElement(
                          o.DraggableCore,
                          u({}, s, {
                            nodeRef: a,
                            key: "resizableHandle-" + t,
                            onStop: e.resizeHandler("onResizeStop", t),
                            onStart: e.resizeHandler("onResizeStart", t),
                            onDrag: e.resizeHandler("onResize", t),
                          }),
                          e.renderResizeHandle(t, a),
                        );
                      }),
                    ),
                  },
                ),
              );
            }),
            i
          );
        })(r.Component);
        (t.default = h),
          (h.propTypes = i.resizableProps),
          (h.defaultProps = {
            axis: "both",
            handleSize: [20, 20],
            lockAspectRatio: !1,
            minConstraints: [20, 20],
            maxConstraints: [1 / 0, 1 / 0],
            resizeHandles: ["se"],
            transformScale: 1,
          });
      },
      7188: (e, t, n) => {
        "use strict";
        t.default = void 0;
        var r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (
              null === e ||
              ("object" !== typeof e && "function" !== typeof e)
            )
              return { default: e };
            var n = u(t);
            if (n && n.has(e)) return n.get(e);
            var r = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (
                "default" !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            (r.default = e), n && n.set(e, r);
            return r;
          })(n(969)),
          o = s(n(4974)),
          a = s(n(5053)),
          i = n(8684),
          l = [
            "handle",
            "handleSize",
            "onResize",
            "onResizeStart",
            "onResizeStop",
            "draggableOpts",
            "minConstraints",
            "maxConstraints",
            "lockAspectRatio",
            "axis",
            "width",
            "height",
            "resizeHandles",
            "style",
            "transformScale",
          ];
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function c() {
          return (
            (c = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            c.apply(this, arguments)
          );
        }
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : f(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function p(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function h(e, t) {
          return (
            (h = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            h(e, t)
          );
        }
        var m = (function (e) {
          var t, n;
          function o() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).state = {
                width: t.props.width,
                height: t.props.height,
                propsWidth: t.props.width,
                propsHeight: t.props.height,
              }),
              (t.onResize = function (e, n) {
                var r = n.size;
                t.props.onResize
                  ? (null == e.persist || e.persist(),
                    t.setState(r, function () {
                      return t.props.onResize && t.props.onResize(e, n);
                    }))
                  : t.setState(r);
              }),
              t
            );
          }
          return (
            (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            h(t, n),
            (o.getDerivedStateFromProps = function (e, t) {
              return t.propsWidth !== e.width || t.propsHeight !== e.height
                ? {
                    width: e.width,
                    height: e.height,
                    propsWidth: e.width,
                    propsHeight: e.height,
                  }
                : null;
            }),
            (o.prototype.render = function () {
              var e = this.props,
                t = e.handle,
                n = e.handleSize,
                o = (e.onResize, e.onResizeStart),
                i = e.onResizeStop,
                s = e.draggableOpts,
                u = e.minConstraints,
                f = e.maxConstraints,
                p = e.lockAspectRatio,
                h = e.axis,
                m = (e.width, e.height, e.resizeHandles),
                g = e.style,
                y = e.transformScale,
                v = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(e, l);
              return r.createElement(
                a.default,
                {
                  axis: h,
                  draggableOpts: s,
                  handle: t,
                  handleSize: n,
                  height: this.state.height,
                  lockAspectRatio: p,
                  maxConstraints: f,
                  minConstraints: u,
                  onResizeStart: o,
                  onResize: this.onResize,
                  onResizeStop: i,
                  resizeHandles: m,
                  transformScale: y,
                  width: this.state.width,
                },
                r.createElement(
                  "div",
                  c({}, v, {
                    style: d(
                      d({}, g),
                      {},
                      {
                        width: this.state.width + "px",
                        height: this.state.height + "px",
                      },
                    ),
                  }),
                ),
              );
            }),
            o
          );
        })(r.Component);
        (t.default = m),
          (m.propTypes = d(
            d({}, i.resizableProps),
            {},
            { children: o.default.element },
          ));
      },
      8684: (e, t, n) => {
        "use strict";
        (t.__esModule = !0), (t.resizableProps = void 0);
        var r,
          o = (r = n(4974)) && r.__esModule ? r : { default: r };
        n(8034);
        var a = {
          axis: o.default.oneOf(["both", "x", "y", "none"]),
          className: o.default.string,
          children: o.default.element.isRequired,
          draggableOpts: o.default.shape({
            allowAnyClick: o.default.bool,
            cancel: o.default.string,
            children: o.default.node,
            disabled: o.default.bool,
            enableUserSelectHack: o.default.bool,
            offsetParent: o.default.node,
            grid: o.default.arrayOf(o.default.number),
            handle: o.default.string,
            nodeRef: o.default.object,
            onStart: o.default.func,
            onDrag: o.default.func,
            onStop: o.default.func,
            onMouseDown: o.default.func,
            scale: o.default.number,
          }),
          height: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r,
              a = t[0];
            return "both" === a.axis || "y" === a.axis
              ? (r = o.default.number).isRequired.apply(r, t)
              : o.default.number.apply(o.default, t);
          },
          handle: o.default.oneOfType([o.default.node, o.default.func]),
          handleSize: o.default.arrayOf(o.default.number),
          lockAspectRatio: o.default.bool,
          maxConstraints: o.default.arrayOf(o.default.number),
          minConstraints: o.default.arrayOf(o.default.number),
          onResizeStop: o.default.func,
          onResizeStart: o.default.func,
          onResize: o.default.func,
          resizeHandles: o.default.arrayOf(
            o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"]),
          ),
          transformScale: o.default.number,
          width: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r,
              a = t[0];
            return "both" === a.axis || "x" === a.axis
              ? (r = o.default.number).isRequired.apply(r, t)
              : o.default.number.apply(o.default, t);
          },
        };
        t.resizableProps = a;
      },
      6737: (e, t, n) => {
        "use strict";
        (t.__esModule = !0),
          (t.cloneElement = function (e, t) {
            t.style &&
              e.props.style &&
              (t.style = i(i({}, e.props.style), t.style));
            t.className &&
              e.props.className &&
              (t.className = e.props.className + " " + t.className);
            return o.default.cloneElement(e, t);
          });
        var r,
          o = (r = n(969)) && r.__esModule ? r : { default: r };
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function l(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || "default");
                  if ("object" !== typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
      },
      6699: (e, t, n) => {
        "use strict";
        (e.exports = function () {
          throw new Error(
            "Don't instantiate Resizable directly! Use require('react-resizable').Resizable",
          );
        }),
          (e.exports.Resizable = n(5053).default),
          (e.exports.ResizableBox = n(7188).default);
      },
      4999: (e, t, n) => {
        "use strict";
        var r = n(969),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      3949: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function O(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === a ? "." + P(s, 0) : a),
              S(i)
                ? ((o = ""),
                  null != e && (o = e.replace(_, "$&/") + "/"),
                  R(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(_, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((l = e[u]), u);
              s += R(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += R((l = l.value), t, o, (c = a + P(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function D(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          T = { transition: null },
          j = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = O),
          (t.createFactory = function (e) {
            var t = O.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      969: (e, t, n) => {
        "use strict";
        e.exports = n(3949);
      },
      7574: (e, t, n) => {
        "use strict";
        e.exports = n(4999);
      },
      2158: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => E });
        var r = (function () {
            if ("undefined" !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0]);
                  }
                }),
                t
              );
            })();
          })(),
          o =
            "undefined" !== typeof window &&
            "undefined" !== typeof document &&
            window.document === document,
          a =
            "undefined" !== typeof n.g && n.g.Math === Math
              ? n.g
              : "undefined" !== typeof self && self.Math === Math
                ? self
                : "undefined" !== typeof window && window.Math === Math
                  ? window
                  : Function("return this")(),
          i =
            "function" === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(a)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
        var l = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          s = "undefined" !== typeof MutationObserver,
          u = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                  var n = !1,
                    r = !1,
                    o = 0;
                  function a() {
                    n && ((n = !1), e()), r && s();
                  }
                  function l() {
                    i(a);
                  }
                  function s() {
                    var e = Date.now();
                    if (n) {
                      if (e - o < 2) return;
                      r = !0;
                    } else (n = !0), (r = !1), setTimeout(l, t);
                    o = e;
                  }
                  return s;
                })(this.refresh.bind(this), 20));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                o &&
                  !this.connected_ &&
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener("resize", this.refresh),
                  s
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                o &&
                  this.connected_ &&
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? "" : t;
                l.some(function (e) {
                  return !!~n.indexOf(e);
                }) && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          c = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n];
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          f = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || a;
          },
          d = v(0, 0, 0, 0);
        function p(e) {
          return parseFloat(e) || 0;
        }
        function h(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            return t + p(e["border-" + n + "-width"]);
          }, 0);
        }
        function m(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return d;
          var r = f(e).getComputedStyle(e),
            o = (function (e) {
              for (
                var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                n < r.length;
                n++
              ) {
                var o = r[n],
                  a = e["padding-" + o];
                t[o] = p(a);
              }
              return t;
            })(r),
            a = o.left + o.right,
            i = o.top + o.bottom,
            l = p(r.width),
            s = p(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(l + a) !== t && (l -= h(r, "left", "right") + a),
              Math.round(s + i) !== n && (s -= h(r, "top", "bottom") + i)),
            !(function (e) {
              return e === f(e).document.documentElement;
            })(e))
          ) {
            var u = Math.round(l + a) - t,
              c = Math.round(s + i) - n;
            1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(c) && (s -= c);
          }
          return v(o.left, o.top, l, s);
        }
        var g =
          "undefined" !== typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof f(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof f(e).SVGElement &&
                  "function" === typeof e.getBBox
                );
              };
        function y(e) {
          return o
            ? g(e)
              ? (function (e) {
                  var t = e.getBBox();
                  return v(0, 0, t.width, t.height);
                })(e)
              : m(e)
            : d;
        }
        function v(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var b = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = v(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = y(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          w = function (e, t) {
            var n = (function (e) {
              var t = e.x,
                n = e.y,
                r = e.width,
                o = e.height,
                a =
                  "undefined" !== typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object,
                i = Object.create(a.prototype);
              return (
                c(i, {
                  x: t,
                  y: n,
                  width: r,
                  height: o,
                  top: n,
                  right: t + r,
                  bottom: o + n,
                  left: t,
                }),
                i
              );
            })(t);
            c(this, { target: e, contentRect: n });
          },
          S = (function () {
            function e(e, t, n) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new r()),
                "function" !== typeof e)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function.",
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = n);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present.",
                  );
                if (
                  "undefined" !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new b(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present.",
                  );
                if (
                  "undefined" !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new w(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          x = "undefined" !== typeof WeakMap ? new WeakMap() : new r(),
          k = function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var n = u.getInstance(),
              r = new S(t, n, this);
            x.set(this, r);
          };
        ["observe", "unobserve", "disconnect"].forEach(function (e) {
          k.prototype[e] = function () {
            var t;
            return (t = x.get(this))[e].apply(t, arguments);
          };
        });
        const E =
          "undefined" !== typeof a.ResizeObserver ? a.ResizeObserver : k;
      },
      384: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), T(x);
            else {
              var t = r(c);
              null !== t && j(S, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !R()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && o(u),
                  w(n);
              } else o(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && j(S, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          O = null,
          C = -1,
          _ = 5,
          P = -1;
        function R() {
          return !(t.unstable_now() - P < _);
        }
        function z() {
          if (null !== O) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = O(!0, e);
            } finally {
              n ? k() : ((E = !1), (O = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var D = new MessageChannel(),
            N = D.port2;
          (D.port1.onmessage = z),
            (k = function () {
              N.postMessage(null);
            });
        } else
          k = function () {
            y(z, 0);
          };
        function T(e) {
          (O = e), E || ((E = !0), k());
        }
        function j(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), T(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), j(S, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), T(x))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      8019: (e, t, n) => {
        "use strict";
        e.exports = n(384);
      },
      7256: (e) => {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => Gt,
          hasStandardBrowserEnv: () => Xt,
          hasStandardBrowserWebWorkerEnv: () => Qt,
        });
      var t,
        r = n(969),
        o = n.t(r, 2),
        a = n(1879),
        i = n(5749),
        l = n.t(i, 2);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(t || (t = {}));
      const u = "popstate";
      function c(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function f(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function p(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          s(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? m(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function h(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function g(e, n, r, o) {
        void 0 === o && (o = {});
        let { window: a = document.defaultView, v5Compat: i = !1 } = o,
          l = a.history,
          f = t.Pop,
          m = null,
          g = y();
        function y() {
          return (l.state || { idx: null }).idx;
        }
        function v() {
          f = t.Pop;
          let e = y(),
            n = null == e ? null : e - g;
          (g = e), m && m({ action: f, location: w.location, delta: n });
        }
        function b(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : h(e);
          return (
            (n = n.replace(/ $/, "%20")),
            c(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), l.replaceState(s({}, l.state, { idx: g }), ""));
        let w = {
          get action() {
            return f;
          },
          get location() {
            return e(a, l);
          },
          listen(e) {
            if (m)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(u, v),
              (m = e),
              () => {
                a.removeEventListener(u, v), (m = null);
              }
            );
          },
          createHref: (e) => n(a, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, n) {
            f = t.Push;
            let o = p(w.location, e, n);
            r && r(o, e), (g = y() + 1);
            let s = d(o, g),
              u = w.createHref(o);
            try {
              l.pushState(s, "", u);
            } catch (c) {
              if (c instanceof DOMException && "DataCloneError" === c.name)
                throw c;
              a.location.assign(u);
            }
            i && m && m({ action: f, location: w.location, delta: 1 });
          },
          replace: function (e, n) {
            f = t.Replace;
            let o = p(w.location, e, n);
            r && r(o, e), (g = y());
            let a = d(o, g),
              s = w.createHref(o);
            l.replaceState(a, "", s),
              i && m && m({ action: f, location: w.location, delta: 0 });
          },
          go: (e) => l.go(e),
        };
        return w;
      }
      var y;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(y || (y = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function v(e, t, n) {
        void 0 === n && (n = "/");
        let r = N(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        let o = b(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(o);
        let a = null;
        for (let i = 0; null == a && i < o.length; ++i) {
          let e = D(r);
          a = R(o[i], e);
        }
        return a;
      }
      function b(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (c(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = A([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (c(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            b(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: P(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of w(e.path)) o(e, t, r);
            else o(e, t);
          }),
          t
        );
      }
      function w(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith("?"),
          a = n.replace(/\?$/, "");
        if (0 === r.length) return o ? [a, ""] : [a];
        let i = w(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))),
          o && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const S = /^:[\w-]+$/,
        x = 3,
        k = 2,
        E = 1,
        O = 10,
        C = -2,
        _ = (e) => "*" === e;
      function P(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(_) && (r += C),
          t && (r += k),
          n
            .filter((e) => !_(e))
            .reduce((e, t) => e + (S.test(t) ? x : "" === t ? E : O), r)
        );
      }
      function R(e, t) {
        let { routesMeta: n } = e,
          r = {},
          o = "/",
          a = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            s = "/" === o ? t : t.slice(o.length) || "/",
            u = z(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              s,
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          a.push({
            params: r,
            pathname: A([o, u.pathname]),
            pathnameBase: F(A([o, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (o = A([o, u.pathnameBase]));
        }
        return a;
      }
      function z(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            f(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              o =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (o += "\\/*$")
                : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
            let a = new RegExp(o, t ? void 0 : "i");
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          o = t.match(n);
        if (!o) return null;
        let a = o[0],
          i = a.replace(/(.)\/+$/, "$1"),
          l = o.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: o } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = o && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: a,
          pathnameBase: i,
          pattern: e,
        };
      }
      function D(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            f(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function N(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function T(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function j(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function M(e, t) {
        let n = j(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function L(e, t, n, r) {
        let o;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (o = m(e))
            : ((o = s({}, e)),
              c(
                !o.pathname || !o.pathname.includes("?"),
                T("?", "pathname", "search", o),
              ),
              c(
                !o.pathname || !o.pathname.includes("#"),
                T("#", "pathname", "hash", o),
              ),
              c(
                !o.search || !o.search.includes("#"),
                T("#", "search", "hash", o),
              ));
        let a,
          i = "" === e || "" === o.pathname,
          l = i ? "/" : o.pathname;
        if (null == l) a = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            o.pathname = t.join("/");
          }
          a = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: o = "",
              } = "string" === typeof e ? m(e) : e,
              a = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: a, search: U(r), hash: I(o) };
          })(o, a),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!f && !d) || (u.pathname += "/"), u;
      }
      const A = (e) => e.join("/").replace(/\/\/+/g, "/"),
        F = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        U = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        I = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function W(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const H = ["post", "put", "patch", "delete"],
        B = (new Set(H), ["get", ...H]);
      new Set(B), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function q() {
        return (
          (q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          q.apply(this, arguments)
        );
      }
      const $ = r.createContext(null);
      const V = r.createContext(null);
      const G = r.createContext(null);
      const X = r.createContext(null);
      const Y = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Q = r.createContext(null);
      function K() {
        return null != r.useContext(X);
      }
      function J() {
        return K() || c(!1), r.useContext(X).location;
      }
      function Z(e) {
        r.useContext(G).static || r.useLayoutEffect(e);
      }
      function ee() {
        let { isDataRoute: e } = r.useContext(Y);
        return e
          ? (function () {
              let { router: e } = ce(se.UseNavigateStable),
                t = de(ue.UseNavigateStable),
                n = r.useRef(!1);
              return (
                Z(() => {
                  n.current = !0;
                }),
                r.useCallback(
                  function (r, o) {
                    void 0 === o && (o = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, q({ fromRouteId: t }, o)));
                  },
                  [e, t],
                )
              );
            })()
          : (function () {
              K() || c(!1);
              let e = r.useContext($),
                { basename: t, future: n, navigator: o } = r.useContext(G),
                { matches: a } = r.useContext(Y),
                { pathname: i } = J(),
                l = JSON.stringify(M(a, n.v7_relativeSplatPath)),
                s = r.useRef(!1);
              return (
                Z(() => {
                  s.current = !0;
                }),
                r.useCallback(
                  function (n, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ("number" === typeof n) return void o.go(n);
                    let a = L(n, JSON.parse(l), i, "path" === r.relative);
                    null == e &&
                      "/" !== t &&
                      (a.pathname =
                        "/" === a.pathname ? t : A([t, a.pathname])),
                      (r.replace ? o.replace : o.push)(a, r.state, r);
                  },
                  [t, o, l, i, e],
                )
              );
            })();
      }
      function te(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { future: o } = r.useContext(G),
          { matches: a } = r.useContext(Y),
          { pathname: i } = J(),
          l = JSON.stringify(M(a, o.v7_relativeSplatPath));
        return r.useMemo(
          () => L(e, JSON.parse(l), i, "path" === n),
          [e, l, i, n],
        );
      }
      function ne(e, n, o, a) {
        K() || c(!1);
        let { navigator: i } = r.useContext(G),
          { matches: l } = r.useContext(Y),
          s = l[l.length - 1],
          u = s ? s.params : {},
          f = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let d,
          p = J();
        if (n) {
          var h;
          let e = "string" === typeof n ? m(n) : n;
          "/" === f ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(f)) ||
            c(!1),
            (d = e);
        } else d = p;
        let g = d.pathname || "/",
          y = g;
        if ("/" !== f) {
          let e = f.replace(/^\//, "").split("/");
          y = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let b = v(e, { pathname: y });
        let w = le(
          b &&
            b.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: A([
                  f,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? f
                    : A([
                        f,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          l,
          o,
          a,
        );
        return n && w
          ? r.createElement(
              X.Provider,
              {
                value: {
                  location: q(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    d,
                  ),
                  navigationType: t.Pop,
                },
              },
              w,
            )
          : w;
      }
      function re() {
        let e = (function () {
            var e;
            let t = r.useContext(Q),
              n = fe(ue.UseRouteError),
              o = de(ue.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[o];
          })(),
          t = W(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          o = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: o };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h2", null, "Unexpected Application Error!"),
          r.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? r.createElement("pre", { style: a }, n) : null,
          null,
        );
      }
      const oe = r.createElement(re, null);
      class ae extends r.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? r.createElement(
                Y.Provider,
                { value: this.props.routeContext },
                r.createElement(Q.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: t, match: n, children: o } = e,
          a = r.useContext($);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
          r.createElement(Y.Provider, { value: t }, o)
        );
      }
      function le(e, t, n, o) {
        var a;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === o && (o = null),
          null == e)
        ) {
          var i;
          if (null == (i = n) || !i.errors) return null;
          e = n.matches;
        }
        let l = e,
          s = null == (a = n) ? void 0 : a.errors;
        if (null != s) {
          let e = l.findIndex(
            (e) => e.route.id && (null == s ? void 0 : s[e.route.id]),
          );
          e >= 0 || c(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          f = -1;
        if (n && o && o.v7_partialHydration)
          for (let r = 0; r < l.length; r++) {
            let e = l[r];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (f = r),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                o =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || o) {
                (u = !0), (l = f >= 0 ? l.slice(0, f + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, o, a) => {
          let i,
            c = !1,
            d = null,
            p = null;
          var h;
          n &&
            ((i = s && o.route.id ? s[o.route.id] : void 0),
            (d = o.route.errorElement || oe),
            u &&
              (f < 0 && 0 === a
                ? ((h = "route-fallback"),
                  !1 || pe[h] || (pe[h] = !0),
                  (c = !0),
                  (p = null))
                : f === a &&
                  ((c = !0), (p = o.route.hydrateFallbackElement || null))));
          let m = t.concat(l.slice(0, a + 1)),
            g = () => {
              let t;
              return (
                (t = i
                  ? d
                  : c
                    ? p
                    : o.route.Component
                      ? r.createElement(o.route.Component, null)
                      : o.route.element
                        ? o.route.element
                        : e),
                r.createElement(ie, {
                  match: o,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (o.route.ErrorBoundary || o.route.errorElement || 0 === a)
            ? r.createElement(ae, {
                location: n.location,
                revalidation: n.revalidation,
                component: d,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var se = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(se || {}),
        ue = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ue || {});
      function ce(e) {
        let t = r.useContext($);
        return t || c(!1), t;
      }
      function fe(e) {
        let t = r.useContext(V);
        return t || c(!1), t;
      }
      function de(e) {
        let t = (function (e) {
            let t = r.useContext(Y);
            return t || c(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || c(!1), n.route.id;
      }
      const pe = {};
      o.startTransition;
      function he(e) {
        let { to: t, replace: n, state: o, relative: a } = e;
        K() || c(!1);
        let { future: i, static: l } = r.useContext(G),
          { matches: s } = r.useContext(Y),
          { pathname: u } = J(),
          f = ee(),
          d = L(t, M(s, i.v7_relativeSplatPath), u, "path" === a),
          p = JSON.stringify(d);
        return (
          r.useEffect(
            () => f(JSON.parse(p), { replace: n, state: o, relative: a }),
            [f, p, a, n, o],
          ),
          null
        );
      }
      function me(e) {
        c(!1);
      }
      function ge(e) {
        let {
          basename: n = "/",
          children: o = null,
          location: a,
          navigationType: i = t.Pop,
          navigator: l,
          static: s = !1,
          future: u,
        } = e;
        K() && c(!1);
        let f = n.replace(/^\/*/, "/"),
          d = r.useMemo(
            () => ({
              basename: f,
              navigator: l,
              static: s,
              future: q({ v7_relativeSplatPath: !1 }, u),
            }),
            [f, u, l, s],
          );
        "string" === typeof a && (a = m(a));
        let {
            pathname: p = "/",
            search: h = "",
            hash: g = "",
            state: y = null,
            key: v = "default",
          } = a,
          b = r.useMemo(() => {
            let e = N(p, f);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: g,
                    state: y,
                    key: v,
                  },
                  navigationType: i,
                };
          }, [f, p, h, g, y, v, i]);
        return null == b
          ? null
          : r.createElement(
              G.Provider,
              { value: d },
              r.createElement(X.Provider, { children: o, value: b }),
            );
      }
      function ye(e) {
        let { children: t, location: n } = e;
        return ne(ve(t), n);
      }
      new Promise(() => {});
      r.Component;
      function ve(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          r.Children.forEach(e, (e, o) => {
            if (!r.isValidElement(e)) return;
            let a = [...t, o];
            if (e.type === r.Fragment)
              return void n.push.apply(n, ve(e.props.children, a));
            e.type !== me && c(!1), e.props.index && e.props.children && c(!1);
            let i = {
              id: e.props.id || a.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = ve(e.props.children, a)),
              n.push(i);
          }),
          n
        );
      }
      function be() {
        return (
          (be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          be.apply(this, arguments)
        );
      }
      function we(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const Se = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (jr) {}
      new Map();
      const xe = o.startTransition;
      l.flushSync, o.useId;
      function ke(e) {
        let { basename: t, children: n, future: o, window: a } = e,
          i = r.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: a, v5Compat: !0 }) && (l = {}),
            g(
              function (e, t) {
                let { pathname: n, search: r, hash: o } = e.location;
                return p(
                  "",
                  { pathname: n, search: r, hash: o },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : h(t);
              },
              null,
              l,
            )));
        let s = i.current,
          [u, c] = r.useState({ action: s.action, location: s.location }),
          { v7_startTransition: f } = o || {},
          d = r.useCallback(
            (e) => {
              f && xe ? xe(() => c(e)) : c(e);
            },
            [c, f],
          );
        return (
          r.useLayoutEffect(() => s.listen(d), [s, d]),
          r.createElement(ge, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: s,
            future: o,
          })
        );
      }
      const Ee =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Oe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ce = r.forwardRef(function (e, t) {
          let n,
            {
              onClick: o,
              relative: a,
              reloadDocument: i,
              replace: l,
              state: s,
              target: u,
              to: f,
              preventScrollReset: d,
              unstable_viewTransition: p,
            } = e,
            m = we(e, Se),
            { basename: g } = r.useContext(G),
            y = !1;
          if ("string" === typeof f && Oe.test(f) && ((n = f), Ee))
            try {
              let e = new URL(window.location.href),
                t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
                n = N(t.pathname, g);
              t.origin === e.origin && null != n
                ? (f = n + t.search + t.hash)
                : (y = !0);
            } catch (jr) {}
          let v = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              K() || c(!1);
              let { basename: o, navigator: a } = r.useContext(G),
                { hash: i, pathname: l, search: s } = te(e, { relative: n }),
                u = l;
              return (
                "/" !== o && (u = "/" === l ? o : A([o, l])),
                a.createHref({ pathname: u, search: s, hash: i })
              );
            })(f, { relative: a }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: o,
                  state: a,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === t ? {} : t,
                u = ee(),
                c = J(),
                f = te(e, { relative: l });
              return r.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== o ? o : h(c) === h(f);
                    u(e, {
                      replace: n,
                      state: a,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, f, o, a, n, e, i, l, s],
              );
            })(f, {
              replace: l,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: a,
              unstable_viewTransition: p,
            });
          return r.createElement(
            "a",
            be({}, m, {
              href: n || v,
              onClick:
                y || i
                  ? o
                  : function (e) {
                      o && o(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: u,
            }),
          );
        });
      var _e, Pe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(_e || (_e = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Pe || (Pe = {}));
      var Re = function (e, t) {
          if ("string" !== typeof e)
            throw new TypeError("argument str must be a string");
          var n = {},
            r = (t || {}).decode || Te,
            o = 0;
          for (; o < e.length; ) {
            var a = e.indexOf("=", o);
            if (-1 === a) break;
            var i = e.indexOf(";", o);
            if (-1 === i) i = e.length;
            else if (i < a) {
              o = e.lastIndexOf(";", a - 1) + 1;
              continue;
            }
            var l = e.slice(o, a).trim();
            if (void 0 === n[l]) {
              var s = e.slice(a + 1, i).trim();
              34 === s.charCodeAt(0) && (s = s.slice(1, -1)), (n[l] = Me(s, r));
            }
            o = i + 1;
          }
          return n;
        },
        ze = function (e, t, n) {
          var r = n || {},
            o = r.encode || je;
          if ("function" !== typeof o)
            throw new TypeError("option encode is invalid");
          if (!Ne.test(e)) throw new TypeError("argument name is invalid");
          var a = o(t);
          if (a && !Ne.test(a)) throw new TypeError("argument val is invalid");
          var i = e + "=" + a;
          if (null != r.maxAge) {
            var l = r.maxAge - 0;
            if (isNaN(l) || !isFinite(l))
              throw new TypeError("option maxAge is invalid");
            i += "; Max-Age=" + Math.floor(l);
          }
          if (r.domain) {
            if (!Ne.test(r.domain))
              throw new TypeError("option domain is invalid");
            i += "; Domain=" + r.domain;
          }
          if (r.path) {
            if (!Ne.test(r.path)) throw new TypeError("option path is invalid");
            i += "; Path=" + r.path;
          }
          if (r.expires) {
            var s = r.expires;
            if (
              !(function (e) {
                return "[object Date]" === De.call(e) || e instanceof Date;
              })(s) ||
              isNaN(s.valueOf())
            )
              throw new TypeError("option expires is invalid");
            i += "; Expires=" + s.toUTCString();
          }
          r.httpOnly && (i += "; HttpOnly");
          r.secure && (i += "; Secure");
          r.partitioned && (i += "; Partitioned");
          if (r.priority) {
            switch (
              "string" === typeof r.priority
                ? r.priority.toLowerCase()
                : r.priority
            ) {
              case "low":
                i += "; Priority=Low";
                break;
              case "medium":
                i += "; Priority=Medium";
                break;
              case "high":
                i += "; Priority=High";
                break;
              default:
                throw new TypeError("option priority is invalid");
            }
          }
          if (r.sameSite) {
            switch (
              "string" === typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
                i += "; SameSite=Strict";
                break;
              case "lax":
                i += "; SameSite=Lax";
                break;
              case "strict":
                i += "; SameSite=Strict";
                break;
              case "none":
                i += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return i;
        },
        De = Object.prototype.toString,
        Ne = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function Te(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
      }
      function je(e) {
        return encodeURIComponent(e);
      }
      function Me(e, t) {
        try {
          return t(e);
        } catch (jr) {
          return e;
        }
      }
      function Le(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = (function (e) {
          if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
          return e;
        })(e);
        if (!t.doNotParse)
          try {
            return JSON.parse(n);
          } catch (jr) {}
        return e;
      }
      class Ae {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.changeListeners = []),
            (this.HAS_DOCUMENT_COOKIE = !1),
            (this.update = () => {
              if (!this.HAS_DOCUMENT_COOKIE) return;
              const e = this.cookies;
              (this.cookies = Re(document.cookie)), this._checkChanges(e);
            });
          const n = "undefined" === typeof document ? "" : document.cookie;
          (this.cookies = (function (e) {
            return "string" === typeof e
              ? Re(e)
              : "object" === typeof e && null !== e
                ? e
                : {};
          })(e || n)),
            (this.defaultSetOptions = t),
            (this.HAS_DOCUMENT_COOKIE = (function () {
              const e =
                "undefined" === typeof global
                  ? void 0
                  : global.TEST_HAS_DOCUMENT_COOKIE;
              return "boolean" === typeof e
                ? e
                : "object" === typeof document &&
                    "string" === typeof document.cookie;
            })());
        }
        _emitChange(e) {
          for (let t = 0; t < this.changeListeners.length; ++t)
            this.changeListeners[t](e);
        }
        _checkChanges(e) {
          new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach(
            (t) => {
              e[t] !== this.cookies[t] &&
                this._emitChange({ name: t, value: Le(this.cookies[t]) });
            },
          );
        }
        _startPolling() {
          this.pollingInterval = setInterval(this.update, 300);
        }
        _stopPolling() {
          this.pollingInterval && clearInterval(this.pollingInterval);
        }
        get(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t.doNotUpdate || this.update(), Le(this.cookies[e], t);
        }
        getAll() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.doNotUpdate || this.update();
          const t = {};
          for (let n in this.cookies) t[n] = Le(this.cookies[n], e);
          return t;
        }
        set(e, t, n) {
          n = n
            ? Object.assign(Object.assign({}, this.defaultSetOptions), n)
            : this.defaultSetOptions;
          const r = "string" === typeof t ? t : JSON.stringify(t);
          (this.cookies = Object.assign(Object.assign({}, this.cookies), {
            [e]: r,
          })),
            this.HAS_DOCUMENT_COOKIE && (document.cookie = ze(e, r, n)),
            this._emitChange({ name: e, value: t, options: n });
        }
        remove(e, t) {
          const n = (t = Object.assign(
            Object.assign(Object.assign({}, this.defaultSetOptions), t),
            { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 },
          ));
          (this.cookies = Object.assign({}, this.cookies)),
            delete this.cookies[e],
            this.HAS_DOCUMENT_COOKIE && (document.cookie = ze(e, "", n)),
            this._emitChange({ name: e, value: void 0, options: t });
        }
        addChangeListener(e) {
          this.changeListeners.push(e),
            this.HAS_DOCUMENT_COOKIE &&
              1 === this.changeListeners.length &&
              ("object" === typeof window && "cookieStore" in window
                ? window.cookieStore.addEventListener("change", this.update)
                : this._startPolling());
        }
        removeChangeListener(e) {
          const t = this.changeListeners.indexOf(e);
          t >= 0 && this.changeListeners.splice(t, 1),
            this.HAS_DOCUMENT_COOKIE &&
              0 === this.changeListeners.length &&
              ("object" === typeof window && "cookieStore" in window
                ? window.cookieStore.removeEventListener("change", this.update)
                : this._stopPolling());
        }
      }
      const Fe = r.createContext(new Ae()),
        { Provider: Ue, Consumer: Ie } = Fe;
      r.Component;
      "function" === typeof SuppressedError && SuppressedError;
      var We,
        He = { exports: {} },
        Be = {};
      He.exports = (function () {
        if (We) return Be;
        We = 1;
        var e = "function" === typeof Symbol && Symbol.for,
          t = e ? Symbol.for("react.element") : 60103,
          n = e ? Symbol.for("react.portal") : 60106,
          r = e ? Symbol.for("react.fragment") : 60107,
          o = e ? Symbol.for("react.strict_mode") : 60108,
          a = e ? Symbol.for("react.profiler") : 60114,
          i = e ? Symbol.for("react.provider") : 60109,
          l = e ? Symbol.for("react.context") : 60110,
          s = e ? Symbol.for("react.async_mode") : 60111,
          u = e ? Symbol.for("react.concurrent_mode") : 60111,
          c = e ? Symbol.for("react.forward_ref") : 60112,
          f = e ? Symbol.for("react.suspense") : 60113,
          d = e ? Symbol.for("react.suspense_list") : 60120,
          p = e ? Symbol.for("react.memo") : 60115,
          h = e ? Symbol.for("react.lazy") : 60116,
          m = e ? Symbol.for("react.block") : 60121,
          g = e ? Symbol.for("react.fundamental") : 60117,
          y = e ? Symbol.for("react.responder") : 60118,
          v = e ? Symbol.for("react.scope") : 60119;
        function b(e) {
          if ("object" === typeof e && null !== e) {
            var d = e.$$typeof;
            switch (d) {
              case t:
                switch ((e = e.type)) {
                  case s:
                  case u:
                  case r:
                  case a:
                  case o:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case c:
                      case h:
                      case p:
                      case i:
                        return e;
                      default:
                        return d;
                    }
                }
              case n:
                return d;
            }
          }
        }
        function w(e) {
          return b(e) === u;
        }
        return (
          (Be.AsyncMode = s),
          (Be.ConcurrentMode = u),
          (Be.ContextConsumer = l),
          (Be.ContextProvider = i),
          (Be.Element = t),
          (Be.ForwardRef = c),
          (Be.Fragment = r),
          (Be.Lazy = h),
          (Be.Memo = p),
          (Be.Portal = n),
          (Be.Profiler = a),
          (Be.StrictMode = o),
          (Be.Suspense = f),
          (Be.isAsyncMode = function (e) {
            return w(e) || b(e) === s;
          }),
          (Be.isConcurrentMode = w),
          (Be.isContextConsumer = function (e) {
            return b(e) === l;
          }),
          (Be.isContextProvider = function (e) {
            return b(e) === i;
          }),
          (Be.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === t;
          }),
          (Be.isForwardRef = function (e) {
            return b(e) === c;
          }),
          (Be.isFragment = function (e) {
            return b(e) === r;
          }),
          (Be.isLazy = function (e) {
            return b(e) === h;
          }),
          (Be.isMemo = function (e) {
            return b(e) === p;
          }),
          (Be.isPortal = function (e) {
            return b(e) === n;
          }),
          (Be.isProfiler = function (e) {
            return b(e) === a;
          }),
          (Be.isStrictMode = function (e) {
            return b(e) === o;
          }),
          (Be.isSuspense = function (e) {
            return b(e) === f;
          }),
          (Be.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === r ||
              e === u ||
              e === a ||
              e === o ||
              e === f ||
              e === d ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === h ||
                  e.$$typeof === p ||
                  e.$$typeof === i ||
                  e.$$typeof === l ||
                  e.$$typeof === c ||
                  e.$$typeof === g ||
                  e.$$typeof === y ||
                  e.$$typeof === v ||
                  e.$$typeof === m))
            );
          }),
          (Be.typeOf = b),
          Be
        );
      })();
      var qe = He.exports,
        $e = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        Ve = {};
      (Ve[qe.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (Ve[qe.Memo] = $e);
      Object.defineProperty,
        Object.getOwnPropertyNames,
        Object.getOwnPropertySymbols,
        Object.getOwnPropertyDescriptor,
        Object.getPrototypeOf,
        Object.prototype;
      function Ge(e) {
        const t = (0, r.useContext)(Fe);
        if (!t) throw new Error("Missing <CookiesProvider>");
        const [n, o] = (0, r.useState)(() => t.getAll());
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement &&
          (0, r.useLayoutEffect)(() => {
            function r() {
              const r = t.getAll({ doNotUpdate: !0 });
              (function (e, t, n) {
                if (!e) return !0;
                for (let r of e) if (t[r] !== n[r]) return !0;
                return !1;
              })(e || null, r, n) && o(r);
            }
            return (
              t.addChangeListener(r),
              () => {
                t.removeChangeListener(r);
              }
            );
          }, [t, n]);
        const a = (0, r.useMemo)(() => t.set.bind(t), [t]),
          i = (0, r.useMemo)(() => t.remove.bind(t), [t]),
          l = (0, r.useMemo)(() => t.update.bind(t), [t]);
        return [n, a, i, l];
      }
      function Xe(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: Ye } = Object.prototype,
        { getPrototypeOf: Qe } = Object,
        Ke =
          ((Je = Object.create(null)),
          (e) => {
            const t = Ye.call(e);
            return Je[t] || (Je[t] = t.slice(8, -1).toLowerCase());
          });
      var Je;
      const Ze = (e) => ((e = e.toLowerCase()), (t) => Ke(t) === e),
        et = (e) => (t) => typeof t === e,
        { isArray: tt } = Array,
        nt = et("undefined");
      const rt = Ze("ArrayBuffer");
      const ot = et("string"),
        at = et("function"),
        it = et("number"),
        lt = (e) => null !== e && "object" === typeof e,
        st = (e) => {
          if ("object" !== Ke(e)) return !1;
          const t = Qe(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        ut = Ze("Date"),
        ct = Ze("File"),
        ft = Ze("Blob"),
        dt = Ze("FileList"),
        pt = Ze("URLSearchParams");
      function ht(e, t) {
        let n,
          r,
          { allOwnKeys: o = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), tt(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = r.length;
            let i;
            for (n = 0; n < a; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function mt(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          o = n.length;
        for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
        return null;
      }
      const gt =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
              ? self
              : "undefined" !== typeof window
                ? window
                : global,
        yt = (e) => !nt(e) && e !== gt;
      const vt =
        ((bt = "undefined" !== typeof Uint8Array && Qe(Uint8Array)),
        (e) => bt && e instanceof bt);
      var bt;
      const wt = Ze("HTMLFormElement"),
        St = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        xt = Ze("RegExp"),
        kt = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          ht(n, (n, o) => {
            let a;
            !1 !== (a = t(n, o, e)) && (r[o] = a || n);
          }),
            Object.defineProperties(e, r);
        },
        Et = "abcdefghijklmnopqrstuvwxyz",
        Ot = "0123456789",
        Ct = { DIGIT: Ot, ALPHA: Et, ALPHA_DIGIT: Et + Et.toUpperCase() + Ot };
      const _t = Ze("AsyncFunction"),
        Pt = {
          isArray: tt,
          isArrayBuffer: rt,
          isBuffer: function (e) {
            return (
              null !== e &&
              !nt(e) &&
              null !== e.constructor &&
              !nt(e.constructor) &&
              at(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (at(e.append) &&
                  ("formdata" === (t = Ke(e)) ||
                    ("object" === t &&
                      at(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && rt(e.buffer)),
              t
            );
          },
          isString: ot,
          isNumber: it,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: lt,
          isPlainObject: st,
          isUndefined: nt,
          isDate: ut,
          isFile: ct,
          isBlob: ft,
          isRegExp: xt,
          isFunction: at,
          isStream: (e) => lt(e) && at(e.pipe),
          isURLSearchParams: pt,
          isTypedArray: vt,
          isFileList: dt,
          forEach: ht,
          merge: function e() {
            const { caseless: t } = (yt(this) && this) || {},
              n = {},
              r = (r, o) => {
                const a = (t && mt(n, o)) || o;
                st(n[a]) && st(r)
                  ? (n[a] = e(n[a], r))
                  : st(r)
                    ? (n[a] = e({}, r))
                    : tt(r)
                      ? (n[a] = r.slice())
                      : (n[a] = r);
              };
            for (let o = 0, a = arguments.length; o < a; o++)
              arguments[o] && ht(arguments[o], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              ht(
                t,
                (t, r) => {
                  n && at(t) ? (e[r] = Xe(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r },
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let o, a, i;
            const l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
                (i = o[a]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && Qe(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: Ke,
          kindOfTest: Ze,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (tt(e)) return e;
            let t = e.length;
            if (!it(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: wt,
          hasOwnProperty: St,
          hasOwnProp: St,
          reduceDescriptors: kt,
          freezeMethods: (e) => {
            kt(e, (t, n) => {
              if (at(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              at(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'",
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return tt(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: mt,
          global: gt,
          isContextDefined: yt,
          ALPHABET: Ct,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Ct.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              at(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (lt(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = tt(e) ? [] : {};
                    return (
                      ht(e, (e, t) => {
                        const a = n(e, r + 1);
                        !nt(a) && (o[t] = a);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: _t,
          isThenable: (e) => e && (lt(e) || at(e)) && at(e.then) && at(e.catch),
        };
      function Rt(e, t, n, r, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          o && (this.response = o);
      }
      Pt.inherits(Rt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Pt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const zt = Rt.prototype,
        Dt = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        Dt[e] = { value: e };
      }),
        Object.defineProperties(Rt, Dt),
        Object.defineProperty(zt, "isAxiosError", { value: !0 }),
        (Rt.from = (e, t, n, r, o, a) => {
          const i = Object.create(zt);
          return (
            Pt.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e,
            ),
            Rt.call(i, e.message, t, n, r, o),
            (i.cause = e),
            (i.name = e.name),
            a && Object.assign(i, a),
            i
          );
        });
      const Nt = Rt;
      function Tt(e) {
        return Pt.isPlainObject(e) || Pt.isArray(e);
      }
      function jt(e) {
        return Pt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Mt(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = jt(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const Lt = Pt.toFlatObject(Pt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const At = function (e, t, n) {
        if (!Pt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = Pt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Pt.isUndefined(t[e]);
            },
          )).metaTokens,
          o = n.visitor || u,
          a = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Pt.isSpecCompliantForm(t);
        if (!Pt.isFunction(o))
          throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (Pt.isDate(e)) return e.toISOString();
          if (!l && Pt.isBlob(e))
            throw new Nt("Blob is not supported. Use a Buffer instead.");
          return Pt.isArrayBuffer(e) || Pt.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, o) {
          let l = e;
          if (e && !o && "object" === typeof e)
            if (Pt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Pt.isArray(e) &&
                (function (e) {
                  return Pt.isArray(e) && !e.some(Tt);
                })(e)) ||
              ((Pt.isFileList(e) || Pt.endsWith(n, "[]")) &&
                (l = Pt.toArray(e)))
            )
              return (
                (n = jt(n)),
                l.forEach(function (e, r) {
                  !Pt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? Mt([n], r, a) : null === i ? n : n + "[]",
                      s(e),
                    );
                }),
                !1
              );
          return !!Tt(e) || (t.append(Mt(o, n, a), s(e)), !1);
        }
        const c = [],
          f = Object.assign(Lt, {
            defaultVisitor: u,
            convertValue: s,
            isVisitable: Tt,
          });
        if (!Pt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Pt.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                Pt.forEach(n, function (n, a) {
                  !0 ===
                    (!(Pt.isUndefined(n) || null === n) &&
                      o.call(t, n, Pt.isString(a) ? a.trim() : a, r, f)) &&
                    e(n, r ? r.concat(a) : [a]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function Ft(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Ut(e, t) {
        (this._pairs = []), e && At(e, this, t);
      }
      const It = Ut.prototype;
      (It.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (It.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, Ft);
              }
            : Ft;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const Wt = Ut;
      function Ht(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Bt(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || Ht,
          o = n && n.serialize;
        let a;
        if (
          ((a = o
            ? o(t, n)
            : Pt.isURLSearchParams(t)
              ? t.toString()
              : new Wt(t, n).toString(r)),
          a)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
        }
        return e;
      }
      const qt = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            Pt.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        $t = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        Vt = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : Wt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        Gt = "undefined" !== typeof window && "undefined" !== typeof document,
        Xt =
          ((Yt = "undefined" !== typeof navigator && navigator.product),
          Gt && ["ReactNative", "NativeScript", "NS"].indexOf(Yt) < 0);
      var Yt;
      const Qt =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Kt = { ...e, ...Vt };
      const Jt = function (e) {
        function t(e, n, r, o) {
          let a = e[o++];
          if ("__proto__" === a) return !0;
          const i = Number.isFinite(+a),
            l = o >= e.length;
          if (((a = !a && Pt.isArray(r) ? r.length : a), l))
            return Pt.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i;
          (r[a] && Pt.isObject(r[a])) || (r[a] = []);
          return (
            t(e, n, r[a], o) &&
              Pt.isArray(r[a]) &&
              (r[a] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const o = n.length;
                let a;
                for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
                return t;
              })(r[a])),
            !i
          );
        }
        if (Pt.isFormData(e) && Pt.isFunction(e.entries)) {
          const n = {};
          return (
            Pt.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return Pt.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0],
                  );
                })(e),
                r,
                n,
                0,
              );
            }),
            n
          );
        }
        return null;
      };
      const Zt = {
        transitional: $t,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              o = Pt.isObject(e);
            o && Pt.isHTMLForm(e) && (e = new FormData(e));
            if (Pt.isFormData(e)) return r ? JSON.stringify(Jt(e)) : e;
            if (
              Pt.isArrayBuffer(e) ||
              Pt.isBuffer(e) ||
              Pt.isStream(e) ||
              Pt.isFile(e) ||
              Pt.isBlob(e)
            )
              return e;
            if (Pt.isArrayBufferView(e)) return e.buffer;
            if (Pt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                e.toString()
              );
            let a;
            if (o) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return At(
                    e,
                    new Kt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Kt.isNode && Pt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if (
                (a = Pt.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return At(
                  a ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer,
                );
              }
            }
            return o || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Pt.isString(e))
                    try {
                      return (t || JSON.parse)(e), Pt.trim(e);
                    } catch (jr) {
                      if ("SyntaxError" !== jr.name) throw jr;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Zt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Pt.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (jr) {
                if (n) {
                  if ("SyntaxError" === jr.name)
                    throw Nt.from(
                      jr,
                      Nt.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw jr;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Kt.classes.FormData, Blob: Kt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      Pt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Zt.headers[e] = {};
      });
      const en = Zt,
        tn = Pt.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        nn = Symbol("internals");
      function rn(e) {
        return e && String(e).trim().toLowerCase();
      }
      function on(e) {
        return !1 === e || null == e
          ? e
          : Pt.isArray(e)
            ? e.map(on)
            : String(e);
      }
      function an(e, t, n, r, o) {
        return Pt.isFunction(r)
          ? r.call(this, t, n)
          : (o && (t = n),
            Pt.isString(t)
              ? Pt.isString(r)
                ? -1 !== t.indexOf(r)
                : Pt.isRegExp(r)
                  ? r.test(t)
                  : void 0
              : void 0);
      }
      class ln {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function o(e, t, n) {
            const o = rn(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const a = Pt.findKey(r, o);
            (!a ||
              void 0 === r[a] ||
              !0 === n ||
              (void 0 === n && !1 !== r[a])) &&
              (r[a || t] = on(e));
          }
          const a = (e, t) => Pt.forEach(e, (e, n) => o(e, n, t));
          return (
            Pt.isPlainObject(e) || e instanceof this.constructor
              ? a(e, t)
              : Pt.isString(e) &&
                  (e = e.trim()) &&
                  !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                ? a(
                    ((e) => {
                      const t = {};
                      let n, r, o;
                      return (
                        e &&
                          e.split("\n").forEach(function (e) {
                            (o = e.indexOf(":")),
                              (n = e.substring(0, o).trim().toLowerCase()),
                              (r = e.substring(o + 1).trim()),
                              !n ||
                                (t[n] && tn[n]) ||
                                ("set-cookie" === n
                                  ? t[n]
                                    ? t[n].push(r)
                                    : (t[n] = [r])
                                  : (t[n] = t[n] ? t[n] + ", " + r : r));
                          }),
                        t
                      );
                    })(e),
                    t,
                  )
                : null != e && o(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = rn(e))) {
            const n = Pt.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (Pt.isFunction(t)) return t.call(this, e, n);
              if (Pt.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = rn(e))) {
            const n = Pt.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !an(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function o(e) {
            if ((e = rn(e))) {
              const o = Pt.findKey(n, e);
              !o || (t && !an(0, n[o], o, t)) || (delete n[o], (r = !0));
            }
          }
          return Pt.isArray(e) ? e.forEach(o) : o(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const o = t[n];
            (e && !an(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            Pt.forEach(this, (r, o) => {
              const a = Pt.findKey(n, o);
              if (a) return (t[a] = on(r)), void delete t[o];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n,
                      );
                  })(o)
                : String(o).trim();
              i !== o && delete t[o], (t[i] = on(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            Pt.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && Pt.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[nn] = this[nn] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = rn(e);
            t[r] ||
              (!(function (e, t) {
                const n = Pt.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, o) {
                      return this[r].call(this, t, e, n, o);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return Pt.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      ln.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Pt.reduceDescriptors(ln.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        Pt.freezeMethods(ln);
      const sn = ln;
      function un(e, t) {
        const n = this || en,
          r = t || n,
          o = sn.from(r.headers);
        let a = r.data;
        return (
          Pt.forEach(e, function (e) {
            a = e.call(n, a, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          a
        );
      }
      function cn(e) {
        return !(!e || !e.__CANCEL__);
      }
      function fn(e, t, n) {
        Nt.call(this, null == e ? "canceled" : e, Nt.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Pt.inherits(fn, Nt, { __CANCEL__: !0 });
      const dn = fn;
      const pn = Kt.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, o, a) {
              const i = [e + "=" + encodeURIComponent(t)];
              Pt.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                Pt.isString(r) && i.push("path=" + r),
                Pt.isString(o) && i.push("domain=" + o),
                !0 === a && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read(e) {
              const t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function hn(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const mn = Kt.hasStandardBrowserEnv
        ? (function () {
            const e = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            let n;
            function r(n) {
              let r = n;
              return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname:
                    "/" === t.pathname.charAt(0)
                      ? t.pathname
                      : "/" + t.pathname,
                }
              );
            }
            return (
              (n = r(window.location.href)),
              function (e) {
                const t = Pt.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      const gn = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let o,
          a = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              u = r[i];
            o || (o = s), (n[a] = l), (r[a] = s);
            let c = i,
              f = 0;
            for (; c !== a; ) (f += n[c++]), (c %= e);
            if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), s - o < t))
              return;
            const d = u && s - u;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      };
      function yn(e, t) {
        let n = 0;
        const r = gn(50, 250);
        return (o) => {
          const a = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            l = a - n,
            s = r(l);
          n = a;
          const u = {
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && i && a <= i ? (i - a) / s : void 0,
            event: o,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      const vn = {
        http: null,
        xhr:
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const o = sn.from(e.headers).normalize();
              let a,
                i,
                { responseType: l, withXSRFToken: s } = e;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(a),
                  e.signal && e.signal.removeEventListener("abort", a);
              }
              if (Pt.isFormData(r))
                if (
                  Kt.hasStandardBrowserEnv ||
                  Kt.hasStandardBrowserWebWorkerEnv
                )
                  o.setContentType(!1);
                else if (!1 !== (i = o.getContentType())) {
                  const [e, ...t] = i
                    ? i
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  o.setContentType(
                    [e || "multipart/form-data", ...t].join("; "),
                  );
                }
              let c = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const f = hn(e.baseURL, e.url);
              function d() {
                if (!c) return;
                const r = sn.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders(),
                );
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new Nt(
                          "Request failed with status code " + n.status,
                          [Nt.ERR_BAD_REQUEST, Nt.ERR_BAD_RESPONSE][
                            Math.floor(n.status / 100) - 4
                          ],
                          n.config,
                          n.request,
                          n,
                        ),
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), u();
                  },
                  function (e) {
                    n(e), u();
                  },
                  {
                    data:
                      l && "text" !== l && "json" !== l
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: r,
                    config: e,
                    request: c,
                  },
                ),
                  (c = null);
              }
              if (
                (c.open(
                  e.method.toUpperCase(),
                  Bt(f, e.params, e.paramsSerializer),
                  !0,
                ),
                (c.timeout = e.timeout),
                "onloadend" in c
                  ? (c.onloadend = d)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (c.onabort = function () {
                  c &&
                    (n(new Nt("Request aborted", Nt.ECONNABORTED, e, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new Nt("Network Error", Nt.ERR_NETWORK, e, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = e.transitional || $t;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new Nt(
                        t,
                        r.clarifyTimeoutError ? Nt.ETIMEDOUT : Nt.ECONNABORTED,
                        e,
                        c,
                      ),
                    ),
                    (c = null);
                }),
                Kt.hasStandardBrowserEnv &&
                  (s && Pt.isFunction(s) && (s = s(e)),
                  s || (!1 !== s && mn(f))))
              ) {
                const t =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  pn.read(e.xsrfCookieName);
                t && o.set(e.xsrfHeaderName, t);
              }
              void 0 === r && o.setContentType(null),
                "setRequestHeader" in c &&
                  Pt.forEach(o.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                Pt.isUndefined(e.withCredentials) ||
                  (c.withCredentials = !!e.withCredentials),
                l && "json" !== l && (c.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  c.addEventListener("progress", yn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", yn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((a = (t) => {
                    c &&
                      (n(!t || t.type ? new dn(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(a),
                  e.signal &&
                    (e.signal.aborted
                      ? a()
                      : e.signal.addEventListener("abort", a)));
              const p = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              p && -1 === Kt.protocols.indexOf(p)
                ? n(
                    new Nt(
                      "Unsupported protocol " + p + ":",
                      Nt.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : c.send(r || null);
            });
          },
      };
      Pt.forEach(vn, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (jr) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const bn = (e) => "- ".concat(e),
        wn = (e) => Pt.isFunction(e) || null === e || !1 === e,
        Sn = (e) => {
          e = Pt.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const o = {};
          for (let a = 0; a < t; a++) {
            let t;
            if (
              ((n = e[a]),
              (r = n),
              !wn(n) && ((r = vn[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new Nt("Unknown adapter '".concat(t, "'"));
            if (r) break;
            o[t || "#" + a] = r;
          }
          if (!r) {
            const e = Object.entries(o).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(bn).join("\n")
                : " " + bn(e[0])
              : "as no adapter specified";
            throw new Nt(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT",
            );
          }
          return r;
        };
      function xn(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new dn(null, e);
      }
      function kn(e) {
        xn(e),
          (e.headers = sn.from(e.headers)),
          (e.data = un.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return Sn(e.adapter || en.adapter)(e).then(
          function (t) {
            return (
              xn(e),
              (t.data = un.call(e, e.transformResponse, t)),
              (t.headers = sn.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              cn(t) ||
                (xn(e),
                t &&
                  t.response &&
                  ((t.response.data = un.call(
                    e,
                    e.transformResponse,
                    t.response,
                  )),
                  (t.response.headers = sn.from(t.response.headers)))),
              Promise.reject(t)
            );
          },
        );
      }
      const En = (e) => (e instanceof sn ? e.toJSON() : e);
      function On(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return Pt.isPlainObject(e) && Pt.isPlainObject(t)
            ? Pt.merge.call({ caseless: n }, e, t)
            : Pt.isPlainObject(t)
              ? Pt.merge({}, t)
              : Pt.isArray(t)
                ? t.slice()
                : t;
        }
        function o(e, t, n) {
          return Pt.isUndefined(t)
            ? Pt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function a(e, t) {
          if (!Pt.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return Pt.isUndefined(t)
            ? Pt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, o, a) {
          return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
        }
        const s = {
          url: a,
          method: a,
          data: a,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: (e, t) => o(En(e), En(t), !0),
        };
        return (
          Pt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const a = s[r] || o,
              i = a(e[r], t[r], r);
            (Pt.isUndefined(i) && a !== l) || (n[r] = i);
          }),
          n
        );
      }
      const Cn = "1.6.7",
        _n = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          _n[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      const Pn = {};
      _n.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.6.7] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, o, a) => {
          if (!1 === e)
            throw new Nt(
              r(o, " has been removed" + (t ? " in " + t : "")),
              Nt.ERR_DEPRECATED,
            );
          return (
            t &&
              !Pn[o] &&
              ((Pn[o] = !0),
              console.warn(
                r(
                  o,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(n, o, a)
          );
        };
      };
      const Rn = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Nt(
                "options must be an object",
                Nt.ERR_BAD_OPTION_VALUE,
              );
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const a = r[o],
                i = t[a];
              if (i) {
                const t = e[a],
                  n = void 0 === t || i(t, a, e);
                if (!0 !== n)
                  throw new Nt(
                    "option " + a + " must be " + n,
                    Nt.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== n)
                throw new Nt("Unknown option " + a, Nt.ERR_BAD_OPTION);
            }
          },
          validators: _n,
        },
        zn = Rn.validators;
      class Dn {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new qt(), response: new qt() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              n.stack
                ? t &&
                  !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                  (n.stack += "\n" + t)
                : (n.stack = t);
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = On(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: o } = t;
          void 0 !== n &&
            Rn.assertOptions(
              n,
              {
                silentJSONParsing: zn.transitional(zn.boolean),
                forcedJSONParsing: zn.transitional(zn.boolean),
                clarifyTimeoutError: zn.transitional(zn.boolean),
              },
              !1,
            ),
            null != r &&
              (Pt.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Rn.assertOptions(
                    r,
                    { encode: zn.function, serialize: zn.function },
                    !0,
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let a = o && Pt.merge(o.common, o[t.method]);
          o &&
            Pt.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete o[e];
              },
            ),
            (t.headers = sn.concat(a, o));
          const i = [];
          let l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const s = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          });
          let c,
            f = 0;
          if (!l) {
            const e = [kn.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, s),
                c = e.length,
                u = Promise.resolve(t);
              f < c;

            )
              u = u.then(e[f++], e[f++]);
            return u;
          }
          c = i.length;
          let d = t;
          for (f = 0; f < c; ) {
            const e = i[f++],
              t = i[f++];
            try {
              d = e(d);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            u = kn.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (f = 0, c = s.length; f < c; ) u = u.then(s[f++], s[f++]);
          return u;
        }
        getUri(e) {
          return Bt(
            hn((e = On(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer,
          );
        }
      }
      Pt.forEach(["delete", "get", "head", "options"], function (e) {
        Dn.prototype[e] = function (t, n) {
          return this.request(
            On(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
        Pt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, o) {
              return this.request(
                On(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                }),
              );
            };
          }
          (Dn.prototype[e] = t()), (Dn.prototype[e + "Form"] = t(!0));
        });
      const Nn = Dn;
      class Tn {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, o) {
              n.reason || ((n.reason = new dn(e, r, o)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new Tn(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const jn = Tn;
      const Mn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Mn).forEach((e) => {
        let [t, n] = e;
        Mn[n] = t;
      });
      const Ln = Mn;
      const An = (function e(t) {
        const n = new Nn(t),
          r = Xe(Nn.prototype.request, n);
        return (
          Pt.extend(r, Nn.prototype, n, { allOwnKeys: !0 }),
          Pt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(On(t, n));
          }),
          r
        );
      })(en);
      (An.Axios = Nn),
        (An.CanceledError = dn),
        (An.CancelToken = jn),
        (An.isCancel = cn),
        (An.VERSION = Cn),
        (An.toFormData = At),
        (An.AxiosError = Nt),
        (An.Cancel = An.CanceledError),
        (An.all = function (e) {
          return Promise.all(e);
        }),
        (An.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (An.isAxiosError = function (e) {
          return Pt.isObject(e) && !0 === e.isAxiosError;
        }),
        (An.mergeConfig = On),
        (An.AxiosHeaders = sn),
        (An.formToJSON = (e) => Jt(Pt.isHTMLForm(e) ? new FormData(e) : e)),
        (An.getAdapter = Sn),
        (An.HttpStatusCode = Ln),
        (An.default = An);
      const Fn = An;
      var Un = n(7574);
      const In = (0, r.createContext)({}),
        Wn = (e, t) => {
          switch (t.type) {
            case "SET_TOKEN":
              return { ...e, token: t.payload };
            case "LOGOUT":
              return { ...e, token: null };
            default:
              return e;
          }
        },
        Hn = (e) => {
          let { children: t } = e;
          const n = ee(),
            [o, a, i] = Ge(["token"]),
            [l, s] = (0, r.useReducer)(Wn, { token: o.token || null }),
            u = {
              token: l.token,
              username: "",
              password: "",
              onLogin: async () => {
                try {
                  const e = await Fn.post(
                    "https://scrapjam.azurewebsites.net/account/login",
                    { userid: u.username, password: u.password },
                  );
                  if (e.data.success) {
                    const t = e.data.token;
                    a("token", t, { path: "/" }),
                      s({ type: "SET_TOKEN", payload: t }),
                      console.log("Login successful"),
                      n("/entries"),
                      console.log("After navigation");
                  } else
                    alert("Invalid username or password. Please try again.");
                } catch (e) {
                  console.error("Error during login:", e),
                    alert("An error occurred during login. Please try again.");
                }
              },
              onLogout: () => {
                i("token", { path: "/" }), n("/login");
              },
            };
          return (0, Un.jsx)(In.Provider, {
            value: { value: u, dispatch: s },
            children: t,
          });
        },
        Bn = () => (0, r.useContext)(In),
        qn = () => {
          const [e, t] = (0, r.useState)(""),
            [n, o] = (0, r.useState)(""),
            [a] = (0, r.useState)(""),
            i = ee(),
            { value: l } = Bn();
          return (0, Un.jsx)("div", {
            className: "container2",
            children: (0, Un.jsxs)("div", {
              className: "form-container2",
              children: [
                (0, Un.jsx)("div", {
                  className: "header-scrapjam",
                  children: " Scrapjam",
                }),
                (0, Un.jsxs)("div", {
                  className: "user-pass",
                  children: [
                    (0, Un.jsx)("label", {
                      htmlFor: "username",
                      style: { marginTop: "60px" },
                      children: "Username:",
                    }),
                    (0, Un.jsx)("input", {
                      type: "text",
                      id: "username",
                      value: e,
                      onChange: (e) => t(e.target.value),
                    }),
                    (0, Un.jsx)("label", {
                      htmlFor: "password",
                      style: { marginBottom: "10px" },
                      children: "Password:",
                    }),
                    (0, Un.jsx)("input", {
                      type: "password",
                      id: "password",
                      value: n,
                      onChange: (e) => o(e.target.value),
                    }),
                  ],
                }),
                (0, Un.jsx)("button", {
                  className: "login-button2",
                  onClick: (t) => (
                    t.preventDefault(),
                    (l.username = e),
                    (l.password = n),
                    l.onLogin()
                  ),
                  children: "Login",
                }),
                a && (0, Un.jsx)("p", { children: a }),
                (0, Un.jsx)("button", {
                  className: "create-account-button2",
                  onClick: () => {
                    i("/registration");
                  },
                  children: "Create Account",
                }),
                (0, Un.jsx)("div", { className: "seaweed" }),
              ],
            }),
          });
        },
        $n = () => {
          const [e, t] = (0, r.useState)(""),
            [n, o] = (0, r.useState)(""),
            [a, i] = (0, r.useState)(""),
            l = ee();
          return (0, Un.jsx)("div", {
            className: "container",
            children: (0, Un.jsxs)("div", {
              className: "form-container",
              children: [
                (0, Un.jsx)("h1", { children: "Scrapjam" }),
                (0, Un.jsx)("input", {
                  type: "text",
                  placeholder: "Username",
                  value: e,
                  onChange: (e) => t(e.target.value),
                }),
                (0, Un.jsx)("input", {
                  type: "password",
                  placeholder: "Password",
                  value: n,
                  onChange: (e) => o(e.target.value),
                }),
                (0, Un.jsx)("input", {
                  type: "password",
                  placeholder: "Confirm Password",
                  value: a,
                  onChange: (e) => i(e.target.value),
                }),
                (0, Un.jsx)("button", {
                  className: "create-account-button",
                  onClick: () => {
                    n === a
                      ? fetch(
                          "https://scrapjam.azurewebsites.net/account/register",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ username: e, password: n }),
                          },
                        )
                          .then((e) => e.json())
                          .then((e) => {
                            e.success
                              ? l("/login")
                              : (console.error("Registration failed:", e.error),
                                alert("Registration failed: " + e.error));
                          })
                          .catch((e) => {
                            console.error("Registration failed:", e),
                              alert("Registration failed: " + e.message);
                          })
                      : alert("Passwords do not match");
                  },
                  children: "Create Account",
                }),
                (0, Un.jsx)(Ce, {
                  to: "/login",
                  children: "Already have an account? Login",
                }),
              ],
            }),
          });
        };
      function Vn() {
        return (
          (Vn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Vn.apply(this, arguments)
        );
      }
      var Gn = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect,
        Xn = {
          popupContent: {
            tooltip: { position: "absolute", zIndex: 999 },
            modal: { position: "relative", margin: "auto" },
          },
          popupArrow: {
            height: "8px",
            width: "16px",
            position: "absolute",
            background: "transparent",
            color: "#FFF",
            zIndex: -1,
          },
          overlay: {
            tooltip: {
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              zIndex: 999,
            },
            modal: {
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              display: "flex",
              zIndex: 999,
            },
          },
        },
        Yn = [
          "top left",
          "top center",
          "top right",
          "right top",
          "right center",
          "right bottom",
          "bottom left",
          "bottom center",
          "bottom right",
          "left top",
          "left center",
          "left bottom",
        ],
        Qn = function (e, t, n, r, o) {
          var a = o.offsetX,
            i = o.offsetY,
            l = r ? 8 : 0,
            s = n.split(" "),
            u = e.top + e.height / 2,
            c = e.left + e.width / 2,
            f = t.height,
            d = t.width,
            p = u - f / 2,
            h = c - d / 2,
            m = "",
            g = "0%",
            y = "0%";
          switch (s[0]) {
            case "top":
              (p -= f / 2 + e.height / 2 + l),
                (m = "rotate(180deg)  translateX(50%)"),
                (g = "100%"),
                (y = "50%");
              break;
            case "bottom":
              (p += f / 2 + e.height / 2 + l),
                (m = "rotate(0deg) translateY(-100%) translateX(-50%)"),
                (y = "50%");
              break;
            case "left":
              (h -= d / 2 + e.width / 2 + l),
                (m = " rotate(90deg)  translateY(50%) translateX(-25%)"),
                (y = "100%"),
                (g = "50%");
              break;
            case "right":
              (h += d / 2 + e.width / 2 + l),
                (m = "rotate(-90deg)  translateY(-150%) translateX(25%)"),
                (g = "50%");
          }
          switch (s[1]) {
            case "top":
              (p = e.top), (g = e.height / 2 + "px");
              break;
            case "bottom":
              (p = e.top - f + e.height), (g = f - e.height / 2 + "px");
              break;
            case "left":
              (h = e.left), (y = e.width / 2 + "px");
              break;
            case "right":
              (h = e.left - d + e.width), (y = d - e.width / 2 + "px");
          }
          return {
            top: (p = "top" === s[0] ? p - i : p + i),
            left: (h = "left" === s[0] ? h - a : h + a),
            transform: m,
            arrowLeft: y,
            arrowTop: g,
          };
        },
        Kn = function (e, t, n, r, o, a) {
          var i = o.offsetX,
            l = o.offsetY,
            s = {
              arrowLeft: "0%",
              arrowTop: "0%",
              left: 0,
              top: 0,
              transform: "rotate(135deg)",
            },
            u = 0,
            c = (function (e) {
              var t = {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
              if ("string" === typeof e) {
                var n = document.querySelector(e);
                null !== n && (t = n.getBoundingClientRect());
              }
              return t;
            })(a),
            f = Array.isArray(n) ? n : [n];
          for (
            (a || Array.isArray(n)) && (f = [].concat(f, Yn));
            u < f.length;

          ) {
            var d = {
              top: (s = Qn(e, t, f[u], r, { offsetX: i, offsetY: l })).top,
              left: s.left,
              width: t.width,
              height: t.height,
            };
            if (
              !(
                d.top <= c.top ||
                d.left <= c.left ||
                d.top + d.height >= c.top + c.height ||
                d.left + d.width >= c.left + c.width
              )
            )
              break;
            u++;
          }
          return s;
        },
        Jn = 0;
      const Zn = (0, r.forwardRef)(function (e, t) {
        var n = e.trigger,
          o = void 0 === n ? null : n,
          a = e.onOpen,
          l = void 0 === a ? function () {} : a,
          s = e.onClose,
          u = void 0 === s ? function () {} : s,
          c = e.defaultOpen,
          f = void 0 !== c && c,
          d = e.open,
          p = void 0 === d ? void 0 : d,
          h = e.disabled,
          m = void 0 !== h && h,
          g = e.nested,
          y = void 0 !== g && g,
          v = e.closeOnDocumentClick,
          b = void 0 === v || v,
          w = e.repositionOnResize,
          S = void 0 === w || w,
          x = e.closeOnEscape,
          k = void 0 === x || x,
          E = e.on,
          O = void 0 === E ? ["click"] : E,
          C = e.contentStyle,
          _ = void 0 === C ? {} : C,
          P = e.arrowStyle,
          R = void 0 === P ? {} : P,
          z = e.overlayStyle,
          D = void 0 === z ? {} : z,
          N = e.className,
          T = void 0 === N ? "" : N,
          j = e.position,
          M = void 0 === j ? "bottom center" : j,
          L = e.modal,
          A = void 0 !== L && L,
          F = e.lockScroll,
          U = void 0 !== F && F,
          I = e.arrow,
          W = void 0 === I || I,
          H = e.offsetX,
          B = void 0 === H ? 0 : H,
          q = e.offsetY,
          $ = void 0 === q ? 0 : q,
          V = e.mouseEnterDelay,
          G = void 0 === V ? 100 : V,
          X = e.mouseLeaveDelay,
          Y = void 0 === X ? 100 : X,
          Q = e.keepTooltipInside,
          K = void 0 !== Q && Q,
          J = e.children,
          Z = (0, r.useState)(p || f),
          ee = Z[0],
          te = Z[1],
          ne = (0, r.useRef)(null),
          re = (0, r.useRef)(null),
          oe = (0, r.useRef)(null),
          ae = (0, r.useRef)(null),
          ie = (0, r.useRef)("popup-" + ++Jn),
          le = !!A || !o,
          se = (0, r.useRef)(0);
        Gn(
          function () {
            return (
              ee
                ? ((ae.current = document.activeElement), we(), ye(), me())
                : ge(),
              function () {
                clearTimeout(se.current);
              }
            );
          },
          [ee],
        ),
          (0, r.useEffect)(
            function () {
              "boolean" === typeof p && (p ? ue() : ce());
            },
            [p, m],
          );
        var ue = function (e) {
            ee ||
              m ||
              (te(!0),
              setTimeout(function () {
                return l(e);
              }, 0));
          },
          ce = function (e) {
            var t;
            ee &&
              !m &&
              (te(!1),
              le && (null === (t = ae.current) || void 0 === t || t.focus()),
              setTimeout(function () {
                return u(e);
              }, 0));
          },
          fe = function (e) {
            null === e || void 0 === e || e.stopPropagation(),
              ee ? ce(e) : ue(e);
          },
          de = function (e) {
            clearTimeout(se.current),
              (se.current = setTimeout(function () {
                return ue(e);
              }, G));
          },
          pe = function (e) {
            null === e || void 0 === e || e.preventDefault(), fe();
          },
          he = function (e) {
            clearTimeout(se.current),
              (se.current = setTimeout(function () {
                return ce(e);
              }, Y));
          },
          me = function () {
            le &&
              U &&
              (document.getElementsByTagName("body")[0].style.overflow =
                "hidden");
          },
          ge = function () {
            le &&
              U &&
              (document.getElementsByTagName("body")[0].style.overflow =
                "auto");
          },
          ye = function () {
            var e,
              t =
                null === re ||
                void 0 === re ||
                null === (e = re.current) ||
                void 0 === e
                  ? void 0
                  : e.querySelectorAll(
                      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
                    ),
              n = Array.prototype.slice.call(t)[0];
            null === n || void 0 === n || n.focus();
          };
        (0, r.useImperativeHandle)(t, function () {
          return {
            open: function () {
              ue();
            },
            close: function () {
              ce();
            },
            toggle: function () {
              fe();
            },
          };
        });
        var ve,
          be,
          we = function () {
            if (
              !le &&
              ee &&
              (null === ne || void 0 === ne ? void 0 : ne.current) &&
              (null === ne || void 0 === ne ? void 0 : ne.current) &&
              (null === re || void 0 === re ? void 0 : re.current)
            ) {
              var e,
                t,
                n = ne.current.getBoundingClientRect(),
                r = re.current.getBoundingClientRect(),
                o = Kn(n, r, M, W, { offsetX: B, offsetY: $ }, K);
              if (
                ((re.current.style.top = o.top + window.scrollY + "px"),
                (re.current.style.left = o.left + window.scrollX + "px"),
                W && oe.current)
              )
                (oe.current.style.transform = o.transform),
                  oe.current.style.setProperty("-ms-transform", o.transform),
                  oe.current.style.setProperty(
                    "-webkit-transform",
                    o.transform,
                  ),
                  (oe.current.style.top =
                    (null === (e = R.top) || void 0 === e
                      ? void 0
                      : e.toString()) || o.arrowTop),
                  (oe.current.style.left =
                    (null === (t = R.left) || void 0 === t
                      ? void 0
                      : t.toString()) || o.arrowLeft);
            }
          };
        (ve = ce),
          void 0 === (be = k) && (be = !0),
          (0, r.useEffect)(
            function () {
              if (be) {
                var e = function (e) {
                  "Escape" === e.key && ve(e);
                };
                return (
                  document.addEventListener("keyup", e),
                  function () {
                    be && document.removeEventListener("keyup", e);
                  }
                );
              }
            },
            [ve, be],
          ),
          (function (e, t) {
            void 0 === t && (t = !0),
              (0, r.useEffect)(
                function () {
                  if (t) {
                    var n = function (t) {
                      if (9 === t.keyCode) {
                        var n,
                          r =
                            null === e ||
                            void 0 === e ||
                            null === (n = e.current) ||
                            void 0 === n
                              ? void 0
                              : n.querySelectorAll(
                                  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
                                ),
                          o = Array.prototype.slice.call(r);
                        if (1 === o.length) return void t.preventDefault();
                        var a = o[0],
                          i = o[o.length - 1];
                        t.shiftKey && document.activeElement === a
                          ? (t.preventDefault(), i.focus())
                          : document.activeElement === i &&
                            (t.preventDefault(), a.focus());
                      }
                    };
                    return (
                      document.addEventListener("keydown", n),
                      function () {
                        t && document.removeEventListener("keydown", n);
                      }
                    );
                  }
                },
                [e, t],
              );
          })(re, ee && le),
          (function (e, t) {
            void 0 === t && (t = !0),
              (0, r.useEffect)(
                function () {
                  if (t) {
                    var n = function () {
                      e();
                    };
                    return (
                      window.addEventListener("resize", n),
                      function () {
                        t && window.removeEventListener("resize", n);
                      }
                    );
                  }
                },
                [e, t],
              );
          })(we, S),
          (function (e, t, n) {
            void 0 === n && (n = !0),
              (0, r.useEffect)(
                function () {
                  if (n) {
                    var r = function (n) {
                      var r = Array.isArray(e) ? e : [e],
                        o = !1;
                      r.forEach(function (e) {
                        (e.current && !e.current.contains(n.target)) ||
                          (o = !0);
                      }),
                        n.stopPropagation(),
                        o || t(n);
                    };
                    return (
                      document.addEventListener("mousedown", r),
                      document.addEventListener("touchstart", r),
                      function () {
                        n &&
                          (document.removeEventListener("mousedown", r),
                          document.removeEventListener("touchstart", r));
                      }
                    );
                  }
                },
                [e, t, n],
              );
          })(o ? [re, ne] : [re], ce, b && !y);
        var Se = function () {
            return r.createElement(
              "div",
              Object.assign(
                {},
                (function () {
                  var e = le ? Xn.popupContent.modal : Xn.popupContent.tooltip,
                    t = {
                      className:
                        "popup-content " +
                        ("" !== T
                          ? T.split(" ")
                              .map(function (e) {
                                return e + "-content";
                              })
                              .join(" ")
                          : ""),
                      style: Vn({}, e, _, { pointerEvents: "auto" }),
                      ref: re,
                      onClick: function (e) {
                        e.stopPropagation();
                      },
                    };
                  return (
                    !A &&
                      O.indexOf("hover") >= 0 &&
                      ((t.onMouseEnter = de), (t.onMouseLeave = he)),
                    t
                  );
                })(),
                { key: "C", role: le ? "dialog" : "tooltip", id: ie.current },
              ),
              W &&
                !le &&
                r.createElement(
                  "div",
                  { ref: oe, style: Xn.popupArrow },
                  r.createElement(
                    "svg",
                    {
                      "data-testid": "arrow",
                      className:
                        "popup-arrow " +
                        ("" !== T
                          ? T.split(" ")
                              .map(function (e) {
                                return e + "-arrow";
                              })
                              .join(" ")
                          : ""),
                      viewBox: "0 0 32 16",
                      style: Vn({ position: "absolute" }, R),
                    },
                    r.createElement("path", {
                      d: "M16 0l16 16H0z",
                      fill: "currentcolor",
                    }),
                  ),
                ),
              J && "function" === typeof J ? J(ce, ee) : J,
            );
          },
          xe = !(O.indexOf("hover") >= 0),
          ke = le ? Xn.overlay.modal : Xn.overlay.tooltip,
          Ee = [
            xe &&
              r.createElement(
                "div",
                {
                  key: "O",
                  "data-testid": "overlay",
                  "data-popup": le ? "modal" : "tooltip",
                  className:
                    "popup-overlay " +
                    ("" !== T
                      ? T.split(" ")
                          .map(function (e) {
                            return e + "-overlay";
                          })
                          .join(" ")
                      : ""),
                  style: Vn({}, ke, D, {
                    pointerEvents: (b && y) || le ? "auto" : "none",
                  }),
                  onClick: b && y ? ce : void 0,
                  tabIndex: -1,
                },
                le && Se(),
              ),
            !le && Se(),
          ];
        return r.createElement(
          r.Fragment,
          null,
          (function () {
            for (
              var e = { key: "T", ref: ne, "aria-describedby": ie.current },
                t = Array.isArray(O) ? O : [O],
                n = 0,
                a = t.length;
              n < a;
              n++
            )
              switch (t[n]) {
                case "click":
                  e.onClick = fe;
                  break;
                case "right-click":
                  e.onContextMenu = pe;
                  break;
                case "hover":
                  (e.onMouseEnter = de), (e.onMouseLeave = he);
                  break;
                case "focus":
                  (e.onFocus = de), (e.onBlur = he);
              }
            if ("function" === typeof o) {
              var i = o(ee);
              return !!o && r.cloneElement(i, e);
            }
            return !!o && r.cloneElement(o, e);
          })(),
          ee &&
            i.createPortal(
              Ee,
              (function () {
                var e = document.getElementById("popup-root");
                return (
                  null === e &&
                    ((e = document.createElement("div")).setAttribute(
                      "id",
                      "popup-root",
                    ),
                    document.body.appendChild(e)),
                  e
                );
              })(),
            ),
        );
      });
      const er = function (e) {
        const [t, n] = (0, r.useState)({ name: "", date: "", id: "" });
        function o(e) {
          const { name: r, value: o } = e.target;
          n(
            "date" === r
              ? { name: t.name, date: o }
              : { name: o, date: t.date },
          );
        }
        return (0, Un.jsx)("form", {
          children: (0, Un.jsxs)(Zn, {
            trigger: (0, Un.jsx)("button", {
              class: "button_add",
              type: "button",
              children: "+",
            }),
            position: "right center",
            children: [
              (0, Un.jsx)("label", { htmlFor: "name", children: "Name" }),
              (0, Un.jsx)("input", {
                type: "text",
                name: "name",
                id: "name",
                value: t.name,
                onChange: o,
              }),
              (0, Un.jsx)("label", { htmlFor: "date", children: "Date" }),
              (0, Un.jsx)("input", {
                type: "text",
                name: "date",
                id: "date",
                value: t.date,
                onChange: o,
              }),
              (0, Un.jsx)("input", {
                type: "button",
                class: "button1",
                value: "Submit",
                onClick: function () {
                  e.handleSubmit(t), n({ name: "", date: "", id: "" });
                },
              }),
            ],
          }),
        });
      };
      var tr = n(9681);
      const nr = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.1.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":80,"op":320,"w":144,"h":402,"nm":"Seaweed","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Seaweed Middle Right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-0.3,-23.8],[0,-29.8],[-2.6,-23.4],[24.4,-10.6],[4,3.6],[-2,39.8],[1.5,42.5],[0,28.6],[-2.9,2]],"o":[[0.3,23.8],[0,29.8],[0.7,6.4],[-4.2,1.8],[-10.5,-9.3],[1.9,-38.4],[-1.1,-32.1],[0,-28.6],[3,-2]],"v":[[5.85,-92.2],[-4.85,-27.9],[17.95,53.5],[0.75,132.9],[-14.65,132.3],[1.95,55.3],[-19.35,-27.7],[-4.35,-90.7],[-10.05,-133.9]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":120,"s":[{"i":[[-0.3,-23.8],[0,-29.8],[-1.623,-25.155],[24.4,-10.6],[4,3.6],[-2,39.8],[1.5,42.5],[0,28.6],[-2.9,2]],"o":[[0.3,23.8],[0,29.8],[1.6,24.8],[-4.2,1.8],[-10.5,-9.3],[1.9,-38.4],[-1.1,-32.1],[0,-28.6],[3,-2]],"v":[[-11.9,-92.2],[8.4,-27.9],[-5.05,53.5],[0.75,132.9],[-14.65,132.3],[-21.05,55.3],[-6.1,-27.7],[-22.1,-90.7],[-10.05,-129.478]],"c":true}]},{"t":241,"s":[{"i":[[-0.3,-23.8],[0,-29.8],[-2.6,-23.4],[24.4,-10.6],[4,3.6],[-2,39.8],[1.5,42.5],[0,28.6],[-2.9,2]],"o":[[0.3,23.8],[0,29.8],[0.7,6.4],[-4.2,1.8],[-10.5,-9.3],[1.9,-38.4],[-1.1,-32.1],[0,-28.6],[3,-2]],"v":[[5.85,-92.2],[-4.85,-27.9],[17.95,53.5],[0.75,132.9],[-14.65,132.3],[1.95,55.3],[-19.35,-27.7],[-4.35,-90.7],[-10.05,-133.9]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.654901960784,0.788235353956,0.121568634931,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[83.45,260.7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":241,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Seaweed Right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-4,3.6],[2,39.8],[-1.5,42.5],[-3.4,40.3],[-1.6,35.6],[3,-0.5],[5.6,-38.4],[1.9,-30.4],[0.6,-40.3],[5.3,-47.2],[-24.4,-10.6]],"o":[[10.5,-9.3],[-1.9,-38.4],[1.5,-41.7],[2.8,-33.7],[1.6,-36],[-2.8,0.5],[-5.8,40],[-2.5,39.8],[-0.6,35.6],[-0.7,6.4],[4.1,1.8]],"v":[[13.4,190.75],[-0.2,113.75],[21.1,30.75],[5.1,-55.15],[24.7,-128.65],[9.3,-193.85],[9.3,-128.65],[-12,-55.75],[7.6,28.35],[-16.1,111.95],[-1.9,191.35]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":120,"s":[{"i":[[-4,3.6],[2,39.8],[-1.5,42.5],[-3.4,40.3],[-1.6,35.6],[3,-0.5],[5.6,-38.4],[1.9,-30.4],[0.6,-40.3],[5.3,-47.2],[-24.4,-10.6]],"o":[[10.5,-9.3],[-1.9,-38.4],[1.5,-41.7],[2.8,-33.7],[1.6,-36],[-2.8,0.5],[-5.8,40],[-2.5,39.8],[-0.6,35.6],[-0.7,6.4],[4.1,1.8]],"v":[[13.4,190.75],[14.55,113.75],[-2.65,30.75],[23.1,-55.15],[0.7,-128.65],[9.3,-188.569],[-11.95,-128.65],[7.25,-55.75],[-21.4,28.35],[-9.35,111.95],[-1.9,191.35]],"c":true}]},{"t":240,"s":[{"i":[[-4,3.6],[2,39.8],[-1.5,42.5],[-3.4,40.3],[-1.6,35.6],[3,-0.5],[5.6,-38.4],[1.9,-30.4],[0.6,-40.3],[5.3,-47.2],[-24.4,-10.6]],"o":[[10.5,-9.3],[-1.9,-38.4],[1.5,-41.7],[2.8,-33.7],[1.6,-36],[-2.8,0.5],[-5.8,40],[-2.5,39.8],[-0.6,35.6],[-0.7,6.4],[4.1,1.8]],"v":[[13.4,190.75],[-0.2,113.75],[21.1,30.75],[5.1,-55.15],[24.7,-128.65],[9.3,-193.85],[9.3,-128.65],[-12,-55.75],[7.6,28.35],[-16.1,111.95],[-1.9,191.35]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.160784313725,0.619607843137,0.054901964524,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[105.5,203.45],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":241,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Seaweed Left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[0,-22.6],[0,-33],[6,-53.4],[-27.7,-12],[-4.6,4.1],[2.3,45.3],[0,38.3],[0,28.5],[5.8,5.8]],"o":[[0,22.6],[0,33],[-0.8,7.2],[4.8,2.1],[11.9,-10.5],[-2.2,-43.5],[0,-38.3],[0,-28.5],[-5.8,-5.8]],"v":[[-13.95,-102.75],[6.55,-32.25],[-20.35,62.45],[-0.85,152.45],[16.65,151.75],[-2.15,64.35],[22.05,-29.75],[4.95,-101.15],[11.45,-150.05]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":120,"s":[{"i":[[0,-22.6],[0,-33],[6,-53.4],[-27.7,-12],[-4.6,4.1],[2.3,45.3],[0,38.3],[0,28.5],[2.301,-2.549]],"o":[[0,22.6],[0,33],[-0.8,7.201],[4.8,2.1],[11.9,-10.5],[-2.2,-43.5],[0,-38.3],[0,-28.5],[-2.787,3.087]],"v":[[15.8,-102.775],[-6.45,-32.25],[8.65,62.45],[-0.85,152.45],[16.65,151.75],[26.85,64.35],[9.05,-29.75],[34.7,-101.175],[10.262,-145.675]],"c":true}]},{"t":240,"s":[{"i":[[0,-22.6],[0,-33],[6,-53.4],[-27.7,-12],[-4.6,4.1],[2.3,45.3],[0,38.3],[0,28.5],[5.8,5.8]],"o":[[0,22.6],[0,33],[-0.8,7.2],[4.8,2.1],[11.9,-10.5],[-2.2,-43.5],[0,-38.3],[0,-28.5],[-5.8,-5.8]],"v":[[-13.95,-102.75],[6.55,-32.25],[-20.35,62.45],[-0.85,152.45],[16.65,151.75],[-2.15,64.35],[22.05,-29.75],[4.95,-101.15],[11.45,-150.05]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.400000029919,0.20000001496,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[32.15,242.65],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":241,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Seaweed Middle Left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[3.6,3.1],[-1.8,35.1],[1.3,37.4],[3,35.6],[1.4,31.3],[-2.7,-0.5],[-4.9,-33.8],[-1.7,-26.9],[-0.7,-35.6],[-4.7,-41.6],[21.5,-9.3]],"o":[[-9.3,-8.2],[1.7,-33.8],[-1.3,-36.8],[-2.5,-29.8],[-1.4,-31.7],[2.5,0.5],[5.1,35.3],[2.2,35.1],[0.5,31.4],[0.6,5.6],[-3.8,1.6]],"v":[[-11.95,168.3],[0.05,100.4],[-18.75,27.2],[-4.65,-48.6],[-21.85,-113.4],[-8.25,-170.9],[-8.25,-113.4],[10.55,-49.1],[-6.65,25.1],[14.25,98.8],[1.75,168.8]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":120,"s":[{"i":[[3.6,3.1],[-1.509,35.114],[-0.437,37.075],[3,35.6],[1.4,31.3],[-3.25,1.55],[-4.9,-33.8],[-1.7,-26.9],[-0.7,-35.6],[5.5,-31.65],[21.5,-9.3]],"o":[[-9.3,-8.2],[1.45,-33.75],[0.434,-36.82],[-2.5,-29.8],[-1.4,-31.7],[5,0.425],[5.1,35.3],[2.2,35.1],[0.5,31.4],[-4.25,24.85],[-3.8,1.6]],"v":[[-11.95,168.3],[-20.7,100.4],[-1.813,26.325],[-21.9,-48.6],[-7.35,-113.4],[-10.5,-166.869],[4.75,-113.4],[-8.138,-50.412],[12.1,25.1],[-6.5,98.8],[1.75,168.8]],"c":true}]},{"t":240,"s":[{"i":[[3.6,3.1],[-1.8,35.1],[1.3,37.4],[3,35.6],[1.4,31.3],[-2.7,-0.5],[-4.9,-33.8],[-1.7,-26.9],[-0.7,-35.6],[-4.7,-41.6],[21.5,-9.3]],"o":[[-9.3,-8.2],[1.7,-33.8],[-1.3,-36.8],[-2.5,-29.8],[-1.4,-31.7],[2.5,0.5],[5.1,35.3],[2.2,35.1],[0.5,31.4],[0.6,5.6],[-3.8,1.6]],"v":[[-11.95,168.3],[0.05,100.4],[-18.75,27.2],[-4.65,-48.6],[-21.85,-113.4],[-8.25,-170.9],[-8.25,-113.4],[10.55,-49.1],[-6.65,25.1],[14.25,98.8],[1.75,168.8]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.160784313725,0.619607843137,0.054901964524,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[59.25,224.1],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":241,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Seaweed Middle Right Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[0]},{"t":268,"s":[4]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"w":144,"h":402,"ip":28,"op":388,"st":28,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Seaweed Right Comp","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"t":285,"s":[4]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"w":144,"h":402,"ip":45,"op":405,"st":45,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Seaweed Left Comp","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":240,"s":[4]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"w":144,"h":402,"ip":0,"op":360,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Seaweed Middle Left Comp","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72,201,0],"ix":2},"a":{"a":0,"k":[72,201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[0]},{"t":320,"s":[4]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut();"},"w":144,"h":402,"ip":80,"op":440,"st":80,"bm":0}],"markers":[]}',
        ),
        rr = (0, tr.WidthProvider)(tr.Responsive),
        or = () => {
          const [e, t] = (0, r.useState)([]);
          console.log(nr, "json"),
            (0, r.useEffect)(() => {
              fetch("https://scrapjam.azurewebsites.net/entries")
                .then((e) => e.json())
                .then((e) => t(e.entries_list))
                .catch((e) => {
                  console.log(e);
                });
            }, []);
          return (0, Un.jsxs)("div", {
            className: "entries_container",
            children: [
              (0, Un.jsxs)("div", {
                className: "header",
                children: [
                  (0, Un.jsx)("div", {
                    className: "ScrapJam_title",
                    children: " ScrapJam ",
                  }),
                  (0, Un.jsx)("div", {
                    className: "about",
                    children: " about ",
                  }),
                  (0, Un.jsx)("div", {
                    className: "tutorial",
                    children: " tutorial ",
                  }),
                  (0, Un.jsx)("div", {
                    className: "logout",
                    children: " logout",
                  }),
                  (0, Un.jsx)("div", {
                    className: "header_rec",
                    children: " ",
                  }),
                ],
              }),
              (0, Un.jsx)("div", {
                className: "EntryTitle",
                children: " Journal Entries",
              }),
              (0, Un.jsxs)("div", {
                className: "blue_background",
                children: [
                  (0, Un.jsx)(er, {
                    handleSubmit: (e) => {
                      fetch("https://scrapjam.azurewebsites.net/entries", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(e),
                      })
                        .then((e) => e.json())
                        .then((e) => {
                          t((t) => [...t, e]);
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                    },
                  }),
                  (0, Un.jsx)("div", {
                    style: { height: "500px", overflow: "auto" },
                    children: (0, Un.jsx)(rr, {
                      className: "layout",
                      layouts: {
                        lg: e.map((e, t) => ({
                          i: e._id.toString(),
                          x: (2 * t) % 12,
                          y: Math.floor(t / 6),
                          w: 2,
                          h: 1.3,
                        })),
                      },
                      breakpoints: {
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 480,
                        xxs: 0,
                      },
                      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
                      children: e.map((e) =>
                        (0, Un.jsxs)(
                          "div",
                          {
                            className: "grid-item-Entries",
                            children: [
                              (0, Un.jsx)("div", {
                                className: "bubble_reflection",
                              }),
                              (0, Un.jsxs)("div", {
                                children: [
                                  (0, Un.jsx)("strong", { children: e.name }),
                                  " ",
                                  (0, Un.jsx)("br", {}),
                                  "Date: ",
                                  e.date,
                                ],
                              }),
                            ],
                          },
                          e._id,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              (0, Un.jsx)("div", { className: "footer" }),
            ],
          });
        };
      var ar = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        ir = function () {
          return (
            (ir =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            ir.apply(this, arguments)
          );
        },
        lr = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize",
        },
        sr = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize",
        },
        ur = { width: "20px", height: "20px", position: "absolute" },
        cr = {
          top: ir(ir({}, lr), { top: "-5px" }),
          right: ir(ir({}, sr), { left: void 0, right: "-5px" }),
          bottom: ir(ir({}, lr), { top: void 0, bottom: "-5px" }),
          left: ir(ir({}, sr), { left: "-5px" }),
          topRight: ir(ir({}, ur), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize",
          }),
          bottomRight: ir(ir({}, ur), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize",
          }),
          bottomLeft: ir(ir({}, ur), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize",
          }),
          topLeft: ir(ir({}, ur), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize",
          }),
        },
        fr = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.onMouseDown = function (e) {
                t.props.onResizeStart(e, t.props.direction);
              }),
              (t.onTouchStart = function (e) {
                t.props.onResizeStart(e, t.props.direction);
              }),
              t
            );
          }
          return (
            ar(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                "div",
                {
                  className: this.props.className || "",
                  style: ir(
                    ir(
                      { position: "absolute", userSelect: "none" },
                      cr[this.props.direction],
                    ),
                    this.props.replaceStyles || {},
                  ),
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                },
                this.props.children,
              );
            }),
            t
          );
        })(r.PureComponent),
        dr = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        pr = function () {
          return (
            (pr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            pr.apply(this, arguments)
          );
        },
        hr = { width: "auto", height: "auto" },
        mr = function (e, t, n) {
          return Math.max(Math.min(e, n), t);
        },
        gr = function (e, t) {
          return Math.round(e / t) * t;
        },
        yr = function (e, t) {
          return new RegExp(e, "i").test(t);
        },
        vr = function (e) {
          return Boolean(e.touches && e.touches.length);
        },
        br = function (e, t, n) {
          void 0 === n && (n = 0);
          var r = t.reduce(function (n, r, o) {
              return Math.abs(r - e) < Math.abs(t[n] - e) ? o : n;
            }, 0),
            o = Math.abs(t[r] - e);
          return 0 === n || o < n ? t[r] : e;
        },
        wr = function (e) {
          return "auto" === (e = e.toString()) ||
            e.endsWith("px") ||
            e.endsWith("%") ||
            e.endsWith("vh") ||
            e.endsWith("vw") ||
            e.endsWith("vmax") ||
            e.endsWith("vmin")
            ? e
            : e + "px";
        },
        Sr = function (e, t, n, r) {
          if (e && "string" === typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw"))
              return n * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh"))
              return r * (Number(e.replace("vh", "")) / 100);
          }
          return e;
        },
        xr = [
          "as",
          "style",
          "className",
          "grid",
          "snap",
          "bounds",
          "boundsByDirection",
          "size",
          "defaultSize",
          "minWidth",
          "minHeight",
          "maxWidth",
          "maxHeight",
          "lockAspectRatio",
          "lockAspectRatioExtraWidth",
          "lockAspectRatioExtraHeight",
          "enable",
          "handleStyles",
          "handleClasses",
          "handleWrapperStyle",
          "handleWrapperClass",
          "children",
          "onResizeStart",
          "onResize",
          "onResizeStop",
          "handleComponent",
          "scale",
          "resizeRatio",
          "snapGap",
        ],
        kr = "__resizable_base__",
        Er = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.ratio = 1),
              (n.resizable = null),
              (n.parentLeft = 0),
              (n.parentTop = 0),
              (n.resizableLeft = 0),
              (n.resizableRight = 0),
              (n.resizableTop = 0),
              (n.resizableBottom = 0),
              (n.targetLeft = 0),
              (n.targetTop = 0),
              (n.appendBase = function () {
                if (!n.resizable || !n.window) return null;
                var e = n.parentNode;
                if (!e) return null;
                var t = n.window.document.createElement("div");
                return (
                  (t.style.width = "100%"),
                  (t.style.height = "100%"),
                  (t.style.position = "absolute"),
                  (t.style.transform = "scale(0, 0)"),
                  (t.style.left = "0"),
                  (t.style.flex = "0 0 100%"),
                  t.classList ? t.classList.add(kr) : (t.className += kr),
                  e.appendChild(t),
                  t
                );
              }),
              (n.removeBase = function (e) {
                var t = n.parentNode;
                t && t.removeChild(e);
              }),
              (n.ref = function (e) {
                e && (n.resizable = e);
              }),
              (n.state = {
                isResizing: !1,
                width:
                  "undefined" === typeof (n.propsSize && n.propsSize.width)
                    ? "auto"
                    : n.propsSize && n.propsSize.width,
                height:
                  "undefined" === typeof (n.propsSize && n.propsSize.height)
                    ? "auto"
                    : n.propsSize && n.propsSize.height,
                direction: "right",
                original: { x: 0, y: 0, width: 0, height: 0 },
                backgroundStyle: {
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0)",
                  cursor: "auto",
                  opacity: 0,
                  position: "fixed",
                  zIndex: 9999,
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                },
                flexBasis: void 0,
              }),
              (n.onResizeStart = n.onResizeStart.bind(n)),
              (n.onMouseMove = n.onMouseMove.bind(n)),
              (n.onMouseUp = n.onMouseUp.bind(n)),
              n
            );
          }
          return (
            dr(t, e),
            Object.defineProperty(t.prototype, "parentNode", {
              get: function () {
                return this.resizable ? this.resizable.parentNode : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "window", {
              get: function () {
                return this.resizable && this.resizable.ownerDocument
                  ? this.resizable.ownerDocument.defaultView
                  : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "propsSize", {
              get: function () {
                return this.props.size || this.props.defaultSize || hr;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "size", {
              get: function () {
                var e = 0,
                  t = 0;
                if (this.resizable && this.window) {
                  var n = this.resizable.offsetWidth,
                    r = this.resizable.offsetHeight,
                    o = this.resizable.style.position;
                  "relative" !== o &&
                    (this.resizable.style.position = "relative"),
                    (e =
                      "auto" !== this.resizable.style.width
                        ? this.resizable.offsetWidth
                        : n),
                    (t =
                      "auto" !== this.resizable.style.height
                        ? this.resizable.offsetHeight
                        : r),
                    (this.resizable.style.position = o);
                }
                return { width: e, height: t };
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "sizeStyle", {
              get: function () {
                var e = this,
                  t = this.props.size,
                  n = function (t) {
                    if (
                      "undefined" === typeof e.state[t] ||
                      "auto" === e.state[t]
                    )
                      return "auto";
                    if (
                      e.propsSize &&
                      e.propsSize[t] &&
                      e.propsSize[t].toString().endsWith("%")
                    ) {
                      if (e.state[t].toString().endsWith("%"))
                        return e.state[t].toString();
                      var n = e.getParentSize();
                      return (
                        (Number(e.state[t].toString().replace("px", "")) /
                          n[t]) *
                          100 +
                        "%"
                      );
                    }
                    return wr(e.state[t]);
                  };
                return {
                  width:
                    t &&
                    "undefined" !== typeof t.width &&
                    !this.state.isResizing
                      ? wr(t.width)
                      : n("width"),
                  height:
                    t &&
                    "undefined" !== typeof t.height &&
                    !this.state.isResizing
                      ? wr(t.height)
                      : n("height"),
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getParentSize = function () {
              if (!this.parentNode)
                return this.window
                  ? {
                      width: this.window.innerWidth,
                      height: this.window.innerHeight,
                    }
                  : { width: 0, height: 0 };
              var e = this.appendBase();
              if (!e) return { width: 0, height: 0 };
              var t = !1,
                n = this.parentNode.style.flexWrap;
              "wrap" !== n &&
                ((t = !0), (this.parentNode.style.flexWrap = "wrap")),
                (e.style.position = "relative"),
                (e.style.minWidth = "100%"),
                (e.style.minHeight = "100%");
              var r = { width: e.offsetWidth, height: e.offsetHeight };
              return (
                t && (this.parentNode.style.flexWrap = n), this.removeBase(e), r
              );
            }),
            (t.prototype.bindEvents = function () {
              this.window &&
                (this.window.addEventListener("mouseup", this.onMouseUp),
                this.window.addEventListener("mousemove", this.onMouseMove),
                this.window.addEventListener("mouseleave", this.onMouseUp),
                this.window.addEventListener("touchmove", this.onMouseMove, {
                  capture: !0,
                  passive: !1,
                }),
                this.window.addEventListener("touchend", this.onMouseUp));
            }),
            (t.prototype.unbindEvents = function () {
              this.window &&
                (this.window.removeEventListener("mouseup", this.onMouseUp),
                this.window.removeEventListener("mousemove", this.onMouseMove),
                this.window.removeEventListener("mouseleave", this.onMouseUp),
                this.window.removeEventListener(
                  "touchmove",
                  this.onMouseMove,
                  !0,
                ),
                this.window.removeEventListener("touchend", this.onMouseUp));
            }),
            (t.prototype.componentDidMount = function () {
              if (this.resizable && this.window) {
                var e = this.window.getComputedStyle(this.resizable);
                this.setState({
                  width: this.state.width || this.size.width,
                  height: this.state.height || this.size.height,
                  flexBasis: "auto" !== e.flexBasis ? e.flexBasis : void 0,
                });
              }
            }),
            (t.prototype.componentWillUnmount = function () {
              this.window && this.unbindEvents();
            }),
            (t.prototype.createSizeForCssProperty = function (e, t) {
              var n = this.propsSize && this.propsSize[t];
              return "auto" !== this.state[t] ||
                this.state.original[t] !== e ||
                ("undefined" !== typeof n && "auto" !== n)
                ? e
                : "auto";
            }),
            (t.prototype.calculateNewMaxFromBoundary = function (e, t) {
              var n,
                r,
                o = this.props.boundsByDirection,
                a = this.state.direction,
                i = o && yr("left", a),
                l = o && yr("top", a);
              if ("parent" === this.props.bounds) {
                var s = this.parentNode;
                s &&
                  ((n = i
                    ? this.resizableRight - this.parentLeft
                    : s.offsetWidth + (this.parentLeft - this.resizableLeft)),
                  (r = l
                    ? this.resizableBottom - this.parentTop
                    : s.offsetHeight + (this.parentTop - this.resizableTop)));
              } else
                "window" === this.props.bounds
                  ? this.window &&
                    ((n = i
                      ? this.resizableRight
                      : this.window.innerWidth - this.resizableLeft),
                    (r = l
                      ? this.resizableBottom
                      : this.window.innerHeight - this.resizableTop))
                  : this.props.bounds &&
                    ((n = i
                      ? this.resizableRight - this.targetLeft
                      : this.props.bounds.offsetWidth +
                        (this.targetLeft - this.resizableLeft)),
                    (r = l
                      ? this.resizableBottom - this.targetTop
                      : this.props.bounds.offsetHeight +
                        (this.targetTop - this.resizableTop)));
              return (
                n && Number.isFinite(n) && (e = e && e < n ? e : n),
                r && Number.isFinite(r) && (t = t && t < r ? t : r),
                { maxWidth: e, maxHeight: t }
              );
            }),
            (t.prototype.calculateNewSizeFromDirection = function (e, t) {
              var n = this.props.scale || 1,
                r = this.props.resizeRatio || 1,
                o = this.state,
                a = o.direction,
                i = o.original,
                l = this.props,
                s = l.lockAspectRatio,
                u = l.lockAspectRatioExtraHeight,
                c = l.lockAspectRatioExtraWidth,
                f = i.width,
                d = i.height,
                p = u || 0,
                h = c || 0;
              return (
                yr("right", a) &&
                  ((f = i.width + ((e - i.x) * r) / n),
                  s && (d = (f - h) / this.ratio + p)),
                yr("left", a) &&
                  ((f = i.width - ((e - i.x) * r) / n),
                  s && (d = (f - h) / this.ratio + p)),
                yr("bottom", a) &&
                  ((d = i.height + ((t - i.y) * r) / n),
                  s && (f = (d - p) * this.ratio + h)),
                yr("top", a) &&
                  ((d = i.height - ((t - i.y) * r) / n),
                  s && (f = (d - p) * this.ratio + h)),
                { newWidth: f, newHeight: d }
              );
            }),
            (t.prototype.calculateNewSizeFromAspectRatio = function (
              e,
              t,
              n,
              r,
            ) {
              var o = this.props,
                a = o.lockAspectRatio,
                i = o.lockAspectRatioExtraHeight,
                l = o.lockAspectRatioExtraWidth,
                s = "undefined" === typeof r.width ? 10 : r.width,
                u = "undefined" === typeof n.width || n.width < 0 ? e : n.width,
                c = "undefined" === typeof r.height ? 10 : r.height,
                f =
                  "undefined" === typeof n.height || n.height < 0
                    ? t
                    : n.height,
                d = i || 0,
                p = l || 0;
              if (a) {
                var h = (c - d) * this.ratio + p,
                  m = (f - d) * this.ratio + p,
                  g = (s - p) / this.ratio + d,
                  y = (u - p) / this.ratio + d,
                  v = Math.max(s, h),
                  b = Math.min(u, m),
                  w = Math.max(c, g),
                  S = Math.min(f, y);
                (e = mr(e, v, b)), (t = mr(t, w, S));
              } else (e = mr(e, s, u)), (t = mr(t, c, f));
              return { newWidth: e, newHeight: t };
            }),
            (t.prototype.setBoundingClientRect = function () {
              if ("parent" === this.props.bounds) {
                var e = this.parentNode;
                if (e) {
                  var t = e.getBoundingClientRect();
                  (this.parentLeft = t.left), (this.parentTop = t.top);
                }
              }
              if (this.props.bounds && "string" !== typeof this.props.bounds) {
                var n = this.props.bounds.getBoundingClientRect();
                (this.targetLeft = n.left), (this.targetTop = n.top);
              }
              if (this.resizable) {
                var r = this.resizable.getBoundingClientRect(),
                  o = r.left,
                  a = r.top,
                  i = r.right,
                  l = r.bottom;
                (this.resizableLeft = o),
                  (this.resizableRight = i),
                  (this.resizableTop = a),
                  (this.resizableBottom = l);
              }
            }),
            (t.prototype.onResizeStart = function (e, t) {
              if (this.resizable && this.window) {
                var n,
                  r = 0,
                  o = 0;
                if (
                  (e.nativeEvent &&
                  (function (e) {
                    return Boolean(
                      (e.clientX || 0 === e.clientX) &&
                        (e.clientY || 0 === e.clientY),
                    );
                  })(e.nativeEvent)
                    ? ((r = e.nativeEvent.clientX), (o = e.nativeEvent.clientY))
                    : e.nativeEvent &&
                      vr(e.nativeEvent) &&
                      ((r = e.nativeEvent.touches[0].clientX),
                      (o = e.nativeEvent.touches[0].clientY)),
                  this.props.onResizeStart)
                )
                  if (this.resizable)
                    if (!1 === this.props.onResizeStart(e, t, this.resizable))
                      return;
                this.props.size &&
                  ("undefined" !== typeof this.props.size.height &&
                    this.props.size.height !== this.state.height &&
                    this.setState({ height: this.props.size.height }),
                  "undefined" !== typeof this.props.size.width &&
                    this.props.size.width !== this.state.width &&
                    this.setState({ width: this.props.size.width })),
                  (this.ratio =
                    "number" === typeof this.props.lockAspectRatio
                      ? this.props.lockAspectRatio
                      : this.size.width / this.size.height);
                var a = this.window.getComputedStyle(this.resizable);
                if ("auto" !== a.flexBasis) {
                  var i = this.parentNode;
                  if (i) {
                    var l = this.window.getComputedStyle(i).flexDirection;
                    (this.flexDir = l.startsWith("row") ? "row" : "column"),
                      (n = a.flexBasis);
                  }
                }
                this.setBoundingClientRect(), this.bindEvents();
                var s = {
                  original: {
                    x: r,
                    y: o,
                    width: this.size.width,
                    height: this.size.height,
                  },
                  isResizing: !0,
                  backgroundStyle: pr(pr({}, this.state.backgroundStyle), {
                    cursor:
                      this.window.getComputedStyle(e.target).cursor || "auto",
                  }),
                  direction: t,
                  flexBasis: n,
                };
                this.setState(s);
              }
            }),
            (t.prototype.onMouseMove = function (e) {
              var t = this;
              if (this.state.isResizing && this.resizable && this.window) {
                if (this.window.TouchEvent && vr(e))
                  try {
                    e.preventDefault(), e.stopPropagation();
                  } catch (jr) {}
                var n = this.props,
                  r = n.maxWidth,
                  o = n.maxHeight,
                  a = n.minWidth,
                  l = n.minHeight,
                  s = vr(e) ? e.touches[0].clientX : e.clientX,
                  u = vr(e) ? e.touches[0].clientY : e.clientY,
                  c = this.state,
                  f = c.direction,
                  d = c.original,
                  p = c.width,
                  h = c.height,
                  m = this.getParentSize(),
                  g = (function (e, t, n, r, o, a, i) {
                    return (
                      (r = Sr(r, e.width, t, n)),
                      (o = Sr(o, e.height, t, n)),
                      (a = Sr(a, e.width, t, n)),
                      (i = Sr(i, e.height, t, n)),
                      {
                        maxWidth: "undefined" === typeof r ? void 0 : Number(r),
                        maxHeight:
                          "undefined" === typeof o ? void 0 : Number(o),
                        minWidth: "undefined" === typeof a ? void 0 : Number(a),
                        minHeight:
                          "undefined" === typeof i ? void 0 : Number(i),
                      }
                    );
                  })(
                    m,
                    this.window.innerWidth,
                    this.window.innerHeight,
                    r,
                    o,
                    a,
                    l,
                  );
                (r = g.maxWidth),
                  (o = g.maxHeight),
                  (a = g.minWidth),
                  (l = g.minHeight);
                var y = this.calculateNewSizeFromDirection(s, u),
                  v = y.newHeight,
                  b = y.newWidth,
                  w = this.calculateNewMaxFromBoundary(r, o);
                this.props.snap &&
                  this.props.snap.x &&
                  (b = br(b, this.props.snap.x, this.props.snapGap)),
                  this.props.snap &&
                    this.props.snap.y &&
                    (v = br(v, this.props.snap.y, this.props.snapGap));
                var S = this.calculateNewSizeFromAspectRatio(
                  b,
                  v,
                  { width: w.maxWidth, height: w.maxHeight },
                  { width: a, height: l },
                );
                if (((b = S.newWidth), (v = S.newHeight), this.props.grid)) {
                  var x = gr(b, this.props.grid[0]),
                    k = gr(v, this.props.grid[1]),
                    E = this.props.snapGap || 0;
                  (b = 0 === E || Math.abs(x - b) <= E ? x : b),
                    (v = 0 === E || Math.abs(k - v) <= E ? k : v);
                }
                var O = { width: b - d.width, height: v - d.height };
                if (p && "string" === typeof p)
                  if (p.endsWith("%")) b = (b / m.width) * 100 + "%";
                  else if (p.endsWith("vw")) {
                    b = (b / this.window.innerWidth) * 100 + "vw";
                  } else if (p.endsWith("vh")) {
                    b = (b / this.window.innerHeight) * 100 + "vh";
                  }
                if (h && "string" === typeof h)
                  if (h.endsWith("%")) v = (v / m.height) * 100 + "%";
                  else if (h.endsWith("vw")) {
                    v = (v / this.window.innerWidth) * 100 + "vw";
                  } else if (h.endsWith("vh")) {
                    v = (v / this.window.innerHeight) * 100 + "vh";
                  }
                var C = {
                  width: this.createSizeForCssProperty(b, "width"),
                  height: this.createSizeForCssProperty(v, "height"),
                };
                "row" === this.flexDir
                  ? (C.flexBasis = C.width)
                  : "column" === this.flexDir && (C.flexBasis = C.height),
                  (0, i.flushSync)(function () {
                    t.setState(C);
                  }),
                  this.props.onResize &&
                    this.props.onResize(e, f, this.resizable, O);
              }
            }),
            (t.prototype.onMouseUp = function (e) {
              var t = this.state,
                n = t.isResizing,
                r = t.direction,
                o = t.original;
              if (n && this.resizable) {
                var a = {
                  width: this.size.width - o.width,
                  height: this.size.height - o.height,
                };
                this.props.onResizeStop &&
                  this.props.onResizeStop(e, r, this.resizable, a),
                  this.props.size && this.setState(this.props.size),
                  this.unbindEvents(),
                  this.setState({
                    isResizing: !1,
                    backgroundStyle: pr(pr({}, this.state.backgroundStyle), {
                      cursor: "auto",
                    }),
                  });
              }
            }),
            (t.prototype.updateSize = function (e) {
              this.setState({ width: e.width, height: e.height });
            }),
            (t.prototype.renderResizer = function () {
              var e = this,
                t = this.props,
                n = t.enable,
                o = t.handleStyles,
                a = t.handleClasses,
                i = t.handleWrapperStyle,
                l = t.handleWrapperClass,
                s = t.handleComponent;
              if (!n) return null;
              var u = Object.keys(n).map(function (t) {
                return !1 !== n[t]
                  ? r.createElement(
                      fr,
                      {
                        key: t,
                        direction: t,
                        onResizeStart: e.onResizeStart,
                        replaceStyles: o && o[t],
                        className: a && a[t],
                      },
                      s && s[t] ? s[t] : null,
                    )
                  : null;
              });
              return r.createElement("div", { className: l, style: i }, u);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = Object.keys(this.props).reduce(function (t, n) {
                  return -1 !== xr.indexOf(n) || (t[n] = e.props[n]), t;
                }, {}),
                n = pr(
                  pr(
                    pr(
                      {
                        position: "relative",
                        userSelect: this.state.isResizing ? "none" : "auto",
                      },
                      this.props.style,
                    ),
                    this.sizeStyle,
                  ),
                  {
                    maxWidth: this.props.maxWidth,
                    maxHeight: this.props.maxHeight,
                    minWidth: this.props.minWidth,
                    minHeight: this.props.minHeight,
                    boxSizing: "border-box",
                    flexShrink: 0,
                  },
                );
              this.state.flexBasis && (n.flexBasis = this.state.flexBasis);
              var o = this.props.as || "div";
              return r.createElement(
                o,
                pr(
                  { ref: this.ref, style: n, className: this.props.className },
                  t,
                ),
                this.state.isResizing &&
                  r.createElement("div", { style: this.state.backgroundStyle }),
                this.props.children,
                this.renderResizer(),
              );
            }),
            (t.defaultProps = {
              as: "div",
              onResizeStart: function () {},
              onResize: function () {},
              onResizeStop: function () {},
              enable: {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                topRight: !0,
                bottomRight: !0,
                bottomLeft: !0,
                topLeft: !0,
              },
              style: {},
              grid: [1, 1],
              lockAspectRatio: !1,
              lockAspectRatioExtraWidth: 0,
              lockAspectRatioExtraHeight: 0,
              scale: 1,
              resizeRatio: 1,
              snapGap: 0,
            }),
            t
          );
        })(r.PureComponent),
        Or = n(8034),
        Cr = n.n(Or),
        _r = n(6626),
        Pr = n.n(_r);
      const Rr = function () {
          const [e, t] = (0, r.useState)(""),
            [n, o] = (0, r.useState)([]),
            [a, i] = (0, r.useState)("#ffffff"),
            [l, s] = (0, r.useState)("#000000"),
            [u, c] = (0, r.useState)(!1),
            [f, d] = (0, r.useState)(""),
            p = ee(),
            { id: h } = (function () {
              let { matches: e } = r.useContext(Y),
                t = e[e.length - 1];
              return t ? t.params : {};
            })(),
            m = (e, t, n, r) => {},
            g = (e) => {
              d(e), c(!0);
            },
            y = () => {
              c(!1);
            };
          return (
            (0, r.useEffect)(() => {
              fetch("https://scrapjam.azurewebsites.net/entries/".concat(h))
                .then((e) => e.json())
                .then((e) => {
                  if (e.entries_list) {
                    const n = e.entries_list;
                    t(n.name || "");
                  }
                })
                .catch((e) => console.error("Failed to fetch entry:", e));
            }, [h]),
            (0, Un.jsxs)("div", {
              children: [
                (0, Un.jsx)("div", {
                  className: "centered-header",
                  contentEditable: "true",
                  children: (0, Un.jsx)("h1", { children: "Entry" }),
                }),
                (0, Un.jsx)("div", {
                  children: (0, Un.jsx)("button", {
                    onClick: () => {
                      p("/entries");
                    },
                    children: "Back to Entries",
                  }),
                }),
                (0, Un.jsx)("div", {
                  className: "centered-container2",
                  onDrop: (e) => e.preventDefault(),
                  onDragOver: (e) => e.preventDefault(),
                  children: (0, Un.jsxs)("div", {
                    className: "resizable-textarea",
                    children: [
                      (0, Un.jsx)("button", {
                        onClick: () => g("textarea"),
                        style: {
                          backgroundColor: "#B0B8F9",
                          color: "black",
                          marginRight: "10px",
                        },
                        children: "Textbox Color",
                      }),
                      (0, Un.jsx)("button", {
                        onClick: () => g("text"),
                        style: {
                          backgroundColor: "#B0B8F9",
                          color: "black",
                          marginRight: "10px",
                        },
                        children: "Text Color",
                      }),
                      (0, Un.jsxs)("button", {
                        children: [
                          (0, Un.jsx)("label", {
                            htmlFor: "imageUpload",
                            style: { color: "black" },
                            children: "Image Upload",
                          }),
                          (0, Un.jsx)("input", {
                            type: "file",
                            id: "imageUpload",
                            accept: "image/*",
                            style: { color: "rgb(50, 50, 50)" },
                            onChange: (e) => {
                              Array.from(e.target.files).forEach((e) => {
                                const t = new FileReader();
                                (t.onload = (e) => {
                                  o((t) => [...t, e.target.result]);
                                }),
                                  t.readAsDataURL(e);
                              });
                            },
                          }),
                        ],
                      }),
                      (0, Un.jsx)("textarea", {
                        value: e,
                        onChange: (e) => {
                          t(e.target.value);
                        },
                        placeholder: "Enter your text here",
                        style: {
                          width: "1000px",
                          height: "650px",
                          overflowWrap: "break-word",
                          textAlign: "left",
                          border: "2px solid #ccc",
                          fontSize: "16px",
                          lineHeight: "2",
                          padding: "10px",
                          backgroundColor: a,
                          color: l,
                        },
                      }),
                      n.map((e, t) =>
                        (0, Un.jsx)(
                          Cr(),
                          {
                            children: (0, Un.jsx)(Er, {
                              defaultSize: { width: 200, height: 150 },
                              style: {
                                position: "absolute",
                                bottom: "".concat(10 + 160 * t, "px"),
                                right: "10px",
                              },
                              onResize: m,
                              children: (0, Un.jsx)("img", {
                                src: e,
                                alt: "",
                                style: { width: "100%", height: "100%" },
                              }),
                            }),
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                }),
                (0, Un.jsx)(Pr(), {
                  isOpen: u,
                  onRequestClose: y,
                  contentLabel: "Color Picker Modal",
                  children: (0, Un.jsxs)("form", {
                    onSubmit: (e) => {
                      e.preventDefault();
                      const t = e.target.colorInput.value;
                      "text" === f
                        ? s("rgb(".concat(t, ")"))
                        : "textarea" === f && i("rgb(".concat(t, ")")),
                        y();
                    },
                    children: [
                      (0, Un.jsx)("label", {
                        children:
                          "Enter the new color in RGB format (e.g., '255, 0, 0'):",
                      }),
                      (0, Un.jsx)("input", {
                        type: "text",
                        name: "colorInput",
                      }),
                      (0, Un.jsx)("button", {
                        style: { color: "black" },
                        type: "submit",
                        children: "Submit",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        zr = (e) => {
          let { children: t } = e;
          const { value: n } = Bn();
          return n.token
            ? (0, Un.jsx)(Un.Fragment, { children: t })
            : (0, Un.jsx)(he, { to: "/login", replace: !0 });
        },
        Dr = () => {
          const { value: e } = Bn(),
            { onLogout: t } = e,
            n = ee();
          return (0, Un.jsx)("button", {
            className: "logout-button",
            onClick: () => {
              t(), n("/login");
            },
            children: "Logout",
          });
        },
        Nr = () =>
          (0, Un.jsx)(ke, {
            children: (0, Un.jsxs)(Hn, {
              children: [
                (0, Un.jsx)(Dr, {}),
                (0, Un.jsxs)(ye, {
                  children: [
                    (0, Un.jsx)(me, {
                      path: "/",
                      element: (0, Un.jsx)(qn, {}),
                    }),
                    (0, Un.jsx)(me, {
                      path: "/login",
                      element: (0, Un.jsx)(qn, {}),
                    }),
                    (0, Un.jsx)(me, {
                      path: "/registration",
                      element: (0, Un.jsx)($n, {}),
                    }),
                    (0, Un.jsx)(me, {
                      path: "/entries",
                      element: (0, Un.jsx)(zr, {
                        children: (0, Un.jsx)(or, {}),
                      }),
                    }),
                    (0, Un.jsx)(me, {
                      path: "/entry/:id",
                      element: (0, Un.jsx)(zr, {
                        children: (0, Un.jsx)(Rr, {}),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        Tr = document.getElementById("root");
      a.createRoot(Tr).render((0, Un.jsx)(Nr, {}));
    })();
})();
//# sourceMappingURL=main.6df402b7.js.map
