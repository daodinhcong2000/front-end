/*! For license information please see 1.8764c0a6.chunk.js.LICENSE.txt */
;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [1],
  {
    548: function (t, e, r) {
      'use strict'
      ;(function (t) {
        r.d(e, 'a', function () {
          return Zv
        }),
          r.d(e, 'b', function () {
            return Gv
          }),
          r.d(e, 'c', function () {
            return Jv
          })
        var n = r(17),
          i = r(556),
          a = r(565),
          o = r(551),
          l = r(566),
          s = r(564),
          c = r(32),
          u = r(137),
          h = r(52),
          f = r(557),
          d = r(558),
          v = r(559),
          p = r(0),
          g = r.n(p),
          y = function () {
            return (
              (y =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                  return t
                }),
              y.apply(this, arguments)
            )
          }
        function m(t, e) {
          var r = {}
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var i = 0
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
          }
          return r
        }
        var b =
            'undefined' !== typeof globalThis
              ? globalThis
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof t
              ? t
              : 'undefined' !== typeof self
              ? self
              : {},
          k = { exports: {} },
          x = { exports: {} },
          M = {},
          _ = 'function' === typeof Symbol && Symbol.for,
          z = _ ? Symbol.for('react.element') : 60103,
          w = _ ? Symbol.for('react.portal') : 60106,
          O = _ ? Symbol.for('react.fragment') : 60107,
          C = _ ? Symbol.for('react.strict_mode') : 60108,
          j = _ ? Symbol.for('react.profiler') : 60114,
          S = _ ? Symbol.for('react.provider') : 60109,
          F = _ ? Symbol.for('react.context') : 60110,
          P = _ ? Symbol.for('react.async_mode') : 60111,
          D = _ ? Symbol.for('react.concurrent_mode') : 60111,
          A = _ ? Symbol.for('react.forward_ref') : 60112,
          E = _ ? Symbol.for('react.suspense') : 60113,
          T = _ ? Symbol.for('react.suspense_list') : 60120,
          B = _ ? Symbol.for('react.memo') : 60115,
          L = _ ? Symbol.for('react.lazy') : 60116,
          R = _ ? Symbol.for('react.block') : 60121,
          I = _ ? Symbol.for('react.fundamental') : 60117,
          V = _ ? Symbol.for('react.responder') : 60118,
          H = _ ? Symbol.for('react.scope') : 60119
        function N(t) {
          if ('object' === typeof t && null !== t) {
            var e = t.$$typeof
            switch (e) {
              case z:
                switch ((t = t.type)) {
                  case P:
                  case D:
                  case O:
                  case j:
                  case C:
                  case E:
                    return t
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case F:
                      case A:
                      case L:
                      case B:
                      case S:
                        return t
                      default:
                        return e
                    }
                }
              case w:
                return e
            }
          }
        }
        function W(t) {
          return N(t) === D
        }
        ;(M.AsyncMode = P),
          (M.ConcurrentMode = D),
          (M.ContextConsumer = F),
          (M.ContextProvider = S),
          (M.Element = z),
          (M.ForwardRef = A),
          (M.Fragment = O),
          (M.Lazy = L),
          (M.Memo = B),
          (M.Portal = w),
          (M.Profiler = j),
          (M.StrictMode = C),
          (M.Suspense = E),
          (M.isAsyncMode = function (t) {
            return W(t) || N(t) === P
          }),
          (M.isConcurrentMode = W),
          (M.isContextConsumer = function (t) {
            return N(t) === F
          }),
          (M.isContextProvider = function (t) {
            return N(t) === S
          }),
          (M.isElement = function (t) {
            return 'object' === typeof t && null !== t && t.$$typeof === z
          }),
          (M.isForwardRef = function (t) {
            return N(t) === A
          }),
          (M.isFragment = function (t) {
            return N(t) === O
          }),
          (M.isLazy = function (t) {
            return N(t) === L
          }),
          (M.isMemo = function (t) {
            return N(t) === B
          }),
          (M.isPortal = function (t) {
            return N(t) === w
          }),
          (M.isProfiler = function (t) {
            return N(t) === j
          }),
          (M.isStrictMode = function (t) {
            return N(t) === C
          }),
          (M.isSuspense = function (t) {
            return N(t) === E
          }),
          (M.isValidElementType = function (t) {
            return (
              'string' === typeof t ||
              'function' === typeof t ||
              t === O ||
              t === D ||
              t === j ||
              t === C ||
              t === E ||
              t === T ||
              ('object' === typeof t &&
                null !== t &&
                (t.$$typeof === L ||
                  t.$$typeof === B ||
                  t.$$typeof === S ||
                  t.$$typeof === F ||
                  t.$$typeof === A ||
                  t.$$typeof === I ||
                  t.$$typeof === V ||
                  t.$$typeof === H ||
                  t.$$typeof === R))
            )
          }),
          (M.typeOf = N),
          (x.exports = M)
        var $ = Object.getOwnPropertySymbols,
          Y = Object.prototype.hasOwnProperty,
          U = Object.prototype.propertyIsEnumerable
        function X(t) {
          if (null === t || void 0 === t) throw new TypeError('Object.assign cannot be called with null or undefined')
          return Object(t)
        }
        ;(function () {
          try {
            if (!Object.assign) return !1
            var t = new String('abc')
            if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1
            for (var e = {}, r = 0; r < 10; r++) e['_' + String.fromCharCode(r)] = r
            var n = Object.getOwnPropertyNames(e).map(function (t) {
              return e[t]
            })
            if ('0123456789' !== n.join('')) return !1
            var i = {}
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                i[t] = t
              }),
              'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, i)).join('')
            )
          } catch (a) {
            return !1
          }
        })() && Object.assign
        function q(t, e, r, n, i) {}
        q.resetWarningCache = function () {
          0
        }
        x.exports, Function.call.bind(Object.prototype.hasOwnProperty)
        function K() {}
        function Z() {}
        Z.resetWarningCache = K
        k.exports = (function () {
          function t(t, e, r, n, i, a) {
            if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== a) {
              var o = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((o.name = 'Invariant Violation'), o)
            }
          }
          function e() {
            return t
          }
          t.isRequired = t
          var r = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: Z,
            resetWarningCache: K
          }
          return (r.PropTypes = r), r
        })()
        var G = k.exports,
          J = { exports: {} }
        !(function (t) {
          !(function () {
            var e = {}.hasOwnProperty
            function r() {
              for (var t = [], n = 0; n < arguments.length; n++) {
                var i = arguments[n]
                if (i) {
                  var a = typeof i
                  if ('string' === a || 'number' === a) t.push(i)
                  else if (Array.isArray(i)) {
                    if (i.length) {
                      var o = r.apply(null, i)
                      o && t.push(o)
                    }
                  } else if ('object' === a)
                    if (i.toString === Object.prototype.toString) for (var l in i) e.call(i, l) && i[l] && t.push(l)
                    else t.push(i.toString())
                }
              }
              return t.join(' ')
            }
            t.exports ? ((r.default = r), (t.exports = r)) : (window.classNames = r)
          })()
        })(J)
        var Q = J.exports,
          tt =
            'undefined' === typeof window
              ? function (t) {
                  return t()
                }
              : window.requestAnimationFrame
        function et(t, e, r) {
          var n =
              r ||
              function (t) {
                return Array.prototype.slice.call(t)
              },
            i = !1,
            a = []
          return function () {
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            ;(a = n(o)),
              i ||
                ((i = !0),
                tt.call(window, function () {
                  ;(i = !1), t.apply(e, a)
                }))
          }
        }
        var rt = function (t) {
            return 'start' === t ? 'left' : 'end' === t ? 'right' : 'center'
          },
          nt = function (t, e, r) {
            return 'start' === t ? e : 'end' === t ? r : (e + r) / 2
          }
        function it() {}
        var at = (function () {
          var t = 0
          return function () {
            return t++
          }
        })()
        function ot(t) {
          return null === t || 'undefined' === typeof t
        }
        function lt(t) {
          if (Array.isArray && Array.isArray(t)) return !0
          var e = Object.prototype.toString.call(t)
          return '[object' === e.substr(0, 7) && 'Array]' === e.substr(-6)
        }
        function st(t) {
          return null !== t && '[object Object]' === Object.prototype.toString.call(t)
        }
        var ct = function (t) {
          return ('number' === typeof t || t instanceof Number) && isFinite(+t)
        }
        function ut(t, e) {
          return ct(t) ? t : e
        }
        function ht(t, e) {
          return 'undefined' === typeof t ? e : t
        }
        var ft = function (t, e) {
          return 'string' === typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t
        }
        function dt(t, e, r) {
          if (t && 'function' === typeof t.call) return t.apply(r, e)
        }
        function vt(t, e, r, n) {
          var i, a, o
          if (lt(t))
            if (((a = t.length), n)) for (i = a - 1; i >= 0; i--) e.call(r, t[i], i)
            else for (i = 0; i < a; i++) e.call(r, t[i], i)
          else if (st(t)) for (a = (o = Object.keys(t)).length, i = 0; i < a; i++) e.call(r, t[o[i]], o[i])
        }
        function pt(t, e) {
          var r, n, i, a
          if (!t || !e || t.length !== e.length) return !1
          for (r = 0, n = t.length; r < n; ++r)
            if (((i = t[r]), (a = e[r]), i.datasetIndex !== a.datasetIndex || i.index !== a.index)) return !1
          return !0
        }
        function gt(t) {
          if (lt(t)) return t.map(gt)
          if (st(t)) {
            for (var e = Object.create(null), r = Object.keys(t), n = r.length, i = 0; i < n; ++i) e[r[i]] = gt(t[r[i]])
            return e
          }
          return t
        }
        function yt(t) {
          return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t)
        }
        function mt(t, e, r, n) {
          if (yt(t)) {
            var i = e[t],
              a = r[t]
            st(i) && st(a) ? bt(i, a, n) : (e[t] = gt(a))
          }
        }
        function bt(t, e, r) {
          var n = lt(e) ? e : [e],
            i = n.length
          if (!st(t)) return t
          for (var a = (r = r || {}).merger || mt, o = 0; o < i; ++o)
            if (st((e = n[o]))) for (var l = Object.keys(e), s = 0, c = l.length; s < c; ++s) a(l[s], t, e, r)
          return t
        }
        function kt(t, e) {
          return bt(t, e, { merger: xt })
        }
        function xt(t, e, r) {
          if (yt(t)) {
            var n = e[t],
              i = r[t]
            st(n) && st(i) ? kt(n, i) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = gt(i))
          }
        }
        function Mt(t, e) {
          var r = t.indexOf('.', e)
          return -1 === r ? t.length : r
        }
        function _t(t, e) {
          if ('' === e) return t
          for (var r = 0, n = Mt(e, r); t && n > r; ) (t = t[e.substr(r, n - r)]), (n = Mt(e, (r = n + 1)))
          return t
        }
        function zt(t) {
          return t.charAt(0).toUpperCase() + t.slice(1)
        }
        var wt = function (t) {
            return 'undefined' !== typeof t
          },
          Ot = function (t) {
            return 'function' === typeof t
          },
          Ct = Math.PI,
          jt = 2 * Ct,
          St = jt + Ct,
          Ft = Number.POSITIVE_INFINITY,
          Pt = Ct / 180,
          Dt = Ct / 2,
          At = Ct / 4,
          Et = (2 * Ct) / 3,
          Tt = Math.log10,
          Bt = Math.sign
        function Lt(t) {
          var e = Math.round(t)
          t = It(t, e, t / 1e3) ? e : t
          var r = Math.pow(10, Math.floor(Tt(t))),
            n = t / r
          return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * r
        }
        function Rt(t) {
          return !isNaN(parseFloat(t)) && isFinite(t)
        }
        function It(t, e, r) {
          return Math.abs(t - e) < r
        }
        function Vt(t, e, r) {
          var n, i, a
          for (n = 0, i = t.length; n < i; n++)
            (a = t[n][r]), isNaN(a) || ((e.min = Math.min(e.min, a)), (e.max = Math.max(e.max, a)))
        }
        function Ht(t) {
          return t * (Ct / 180)
        }
        function Nt(t) {
          return t * (180 / Ct)
        }
        function Wt(t) {
          if (ct(t)) {
            for (var e = 1, r = 0; Math.round(t * e) / e !== t; ) (e *= 10), r++
            return r
          }
        }
        function $t(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }
        function Yt(t, e) {
          return ((t - e + St) % jt) - Ct
        }
        function Ut(t) {
          return ((t % jt) + jt) % jt
        }
        function Xt(t, e, r, n) {
          var i = Ut(t),
            a = Ut(e),
            o = Ut(r),
            l = Ut(a - i),
            s = Ut(o - i),
            c = Ut(i - a),
            u = Ut(i - o)
          return i === a || i === o || (n && a === o) || (l > s && c < u)
        }
        function qt(t, e, r) {
          return Math.max(e, Math.min(r, t))
        }
        var Kt = function (t) {
            return 0 === t || 1 === t
          },
          Zt = function (t, e, r) {
            return -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * jt) / r)
          },
          Gt = function (t, e, r) {
            return Math.pow(2, -10 * t) * Math.sin(((t - e) * jt) / r) + 1
          },
          Jt = {
            linear: function (t) {
              return t
            },
            easeInQuad: function (t) {
              return t * t
            },
            easeOutQuad: function (t) {
              return -t * (t - 2)
            },
            easeInOutQuad: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function (t) {
              return t * t * t
            },
            easeOutCubic: function (t) {
              return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function (t) {
              return t * t * t * t
            },
            easeOutQuart: function (t) {
              return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function (t) {
              return t * t * t * t * t
            },
            easeOutQuint: function (t) {
              return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function (t) {
              return 1 - Math.cos(t * Dt)
            },
            easeOutSine: function (t) {
              return Math.sin(t * Dt)
            },
            easeInOutSine: function (t) {
              return -0.5 * (Math.cos(Ct * t) - 1)
            },
            easeInExpo: function (t) {
              return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function (t) {
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function (t) {
              return Kt(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)))
            },
            easeInCirc: function (t) {
              return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function (t) {
              return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function (t) {
              return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function (t) {
              return Kt(t) ? t : Zt(t, 0.075, 0.3)
            },
            easeOutElastic: function (t) {
              return Kt(t) ? t : Gt(t, 0.075, 0.3)
            },
            easeInOutElastic: function (t) {
              var e = 0.1125
              return Kt(t) ? t : t < 0.5 ? 0.5 * Zt(2 * t, e, 0.45) : 0.5 + 0.5 * Gt(2 * t - 1, e, 0.45)
            },
            easeInBack: function (t) {
              var e = 1.70158
              return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function (t) {
              var e = 1.70158
              return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function (t) {
              var e = 1.70158
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function (t) {
              return 1 - Jt.easeOutBounce(1 - t)
            },
            easeOutBounce: function (t) {
              var e = 7.5625,
                r = 2.75
              return t < 1 / r
                ? e * t * t
                : t < 2 / r
                ? e * (t -= 1.5 / r) * t + 0.75
                : t < 2.5 / r
                ? e * (t -= 2.25 / r) * t + 0.9375
                : e * (t -= 2.625 / r) * t + 0.984375
            },
            easeInOutBounce: function (t) {
              return t < 0.5 ? 0.5 * Jt.easeInBounce(2 * t) : 0.5 * Jt.easeOutBounce(2 * t - 1) + 0.5
            }
          },
          Qt = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
          },
          te = '0123456789ABCDEF',
          ee = function (t) {
            return te[15 & t]
          },
          re = function (t) {
            return te[(240 & t) >> 4] + te[15 & t]
          },
          ne = function (t) {
            return (240 & t) >> 4 === (15 & t)
          }
        function ie(t) {
          var e = (function (t) {
            return ne(t.r) && ne(t.g) && ne(t.b) && ne(t.a)
          })(t)
            ? ee
            : re
          return t ? '#' + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : '') : t
        }
        function ae(t) {
          return (t + 0.5) | 0
        }
        var oe = function (t, e, r) {
          return Math.max(Math.min(t, r), e)
        }
        function le(t) {
          return oe(ae(2.55 * t), 0, 255)
        }
        function se(t) {
          return oe(ae(255 * t), 0, 255)
        }
        function ce(t) {
          return oe(ae(t / 2.55) / 100, 0, 1)
        }
        function ue(t) {
          return oe(ae(100 * t), 0, 100)
        }
        var he = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
        var fe =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
        function de(t, e, r) {
          var n = e * Math.min(r, 1 - r),
            i = function (e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12
              return r - n * Math.max(Math.min(i - 3, 9 - i, 1), -1)
            }
          return [i(0), i(8), i(4)]
        }
        function ve(t, e, r) {
          var n = function (n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (n + t / 60) % 6
            return r - r * e * Math.max(Math.min(i, 4 - i, 1), 0)
          }
          return [n(5), n(3), n(1)]
        }
        function pe(t, e, r) {
          var n,
            i = de(t, 1, 0.5)
          for (e + r > 1 && ((e *= n = 1 / (e + r)), (r *= n)), n = 0; n < 3; n++) (i[n] *= 1 - e - r), (i[n] += e)
          return i
        }
        function ge(t) {
          var e,
            r,
            n,
            i = t.r / 255,
            a = t.g / 255,
            o = t.b / 255,
            l = Math.max(i, a, o),
            s = Math.min(i, a, o),
            c = (l + s) / 2
          return (
            l !== s &&
              ((n = l - s),
              (r = c > 0.5 ? n / (2 - l - s) : n / (l + s)),
              (e =
                60 * (e = l === i ? (a - o) / n + (a < o ? 6 : 0) : l === a ? (o - i) / n + 2 : (i - a) / n + 4) +
                0.5)),
            [0 | e, r || 0, c]
          )
        }
        function ye(t, e, r, n) {
          return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, r, n)).map(se)
        }
        function me(t, e, r) {
          return ye(de, t, e, r)
        }
        function be(t) {
          return ((t % 360) + 360) % 360
        }
        function ke(t) {
          var e,
            r = fe.exec(t),
            n = 255
          if (r) {
            r[5] !== e && (n = r[6] ? le(+r[5]) : se(+r[5]))
            var i = be(+r[2]),
              a = +r[3] / 100,
              o = +r[4] / 100
            return (
              (e =
                'hwb' === r[1]
                  ? (function (t, e, r) {
                      return ye(pe, t, e, r)
                    })(i, a, o)
                  : 'hsv' === r[1]
                  ? (function (t, e, r) {
                      return ye(ve, t, e, r)
                    })(i, a, o)
                  : me(i, a, o)),
              { r: e[0], g: e[1], b: e[2], a: n }
            )
          }
        }
        var xe,
          Me = {
            x: 'dark',
            Z: 'light',
            Y: 're',
            X: 'blu',
            W: 'gr',
            V: 'medium',
            U: 'slate',
            A: 'ee',
            T: 'ol',
            S: 'or',
            B: 'ra',
            C: 'lateg',
            D: 'ights',
            R: 'in',
            Q: 'turquois',
            E: 'hi',
            P: 'ro',
            O: 'al',
            N: 'le',
            M: 'de',
            L: 'yello',
            F: 'en',
            K: 'ch',
            G: 'arks',
            H: 'ea',
            I: 'ightg',
            J: 'wh'
          },
          _e = {
            OiceXe: 'f0f8ff',
            antiquewEte: 'faebd7',
            aqua: 'ffff',
            aquamarRe: '7fffd4',
            azuY: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '0',
            blanKedOmond: 'ffebcd',
            Xe: 'ff',
            XeviTet: '8a2be2',
            bPwn: 'a52a2a',
            burlywood: 'deb887',
            caMtXe: '5f9ea0',
            KartYuse: '7fff00',
            KocTate: 'd2691e',
            cSO: 'ff7f50',
            cSnflowerXe: '6495ed',
            cSnsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: 'ffff',
            xXe: '8b',
            xcyan: '8b8b',
            xgTMnPd: 'b8860b',
            xWay: 'a9a9a9',
            xgYF: '6400',
            xgYy: 'a9a9a9',
            xkhaki: 'bdb76b',
            xmagFta: '8b008b',
            xTivegYF: '556b2f',
            xSange: 'ff8c00',
            xScEd: '9932cc',
            xYd: '8b0000',
            xsOmon: 'e9967a',
            xsHgYF: '8fbc8f',
            xUXe: '483d8b',
            xUWay: '2f4f4f',
            xUgYy: '2f4f4f',
            xQe: 'ced1',
            xviTet: '9400d3',
            dAppRk: 'ff1493',
            dApskyXe: 'bfff',
            dimWay: '696969',
            dimgYy: '696969',
            dodgerXe: '1e90ff',
            fiYbrick: 'b22222',
            flSOwEte: 'fffaf0',
            foYstWAn: '228b22',
            fuKsia: 'ff00ff',
            gaRsbSo: 'dcdcdc',
            ghostwEte: 'f8f8ff',
            gTd: 'ffd700',
            gTMnPd: 'daa520',
            Way: '808080',
            gYF: '8000',
            gYFLw: 'adff2f',
            gYy: '808080',
            honeyMw: 'f0fff0',
            hotpRk: 'ff69b4',
            RdianYd: 'cd5c5c',
            Rdigo: '4b0082',
            ivSy: 'fffff0',
            khaki: 'f0e68c',
            lavFMr: 'e6e6fa',
            lavFMrXsh: 'fff0f5',
            lawngYF: '7cfc00',
            NmoncEffon: 'fffacd',
            ZXe: 'add8e6',
            ZcSO: 'f08080',
            Zcyan: 'e0ffff',
            ZgTMnPdLw: 'fafad2',
            ZWay: 'd3d3d3',
            ZgYF: '90ee90',
            ZgYy: 'd3d3d3',
            ZpRk: 'ffb6c1',
            ZsOmon: 'ffa07a',
            ZsHgYF: '20b2aa',
            ZskyXe: '87cefa',
            ZUWay: '778899',
            ZUgYy: '778899',
            ZstAlXe: 'b0c4de',
            ZLw: 'ffffe0',
            lime: 'ff00',
            limegYF: '32cd32',
            lRF: 'faf0e6',
            magFta: 'ff00ff',
            maPon: '800000',
            VaquamarRe: '66cdaa',
            VXe: 'cd',
            VScEd: 'ba55d3',
            VpurpN: '9370db',
            VsHgYF: '3cb371',
            VUXe: '7b68ee',
            VsprRggYF: 'fa9a',
            VQe: '48d1cc',
            VviTetYd: 'c71585',
            midnightXe: '191970',
            mRtcYam: 'f5fffa',
            mistyPse: 'ffe4e1',
            moccasR: 'ffe4b5',
            navajowEte: 'ffdead',
            navy: '80',
            Tdlace: 'fdf5e6',
            Tive: '808000',
            TivedBb: '6b8e23',
            Sange: 'ffa500',
            SangeYd: 'ff4500',
            ScEd: 'da70d6',
            pOegTMnPd: 'eee8aa',
            pOegYF: '98fb98',
            pOeQe: 'afeeee',
            pOeviTetYd: 'db7093',
            papayawEp: 'ffefd5',
            pHKpuff: 'ffdab9',
            peru: 'cd853f',
            pRk: 'ffc0cb',
            plum: 'dda0dd',
            powMrXe: 'b0e0e6',
            purpN: '800080',
            YbeccapurpN: '663399',
            Yd: 'ff0000',
            Psybrown: 'bc8f8f',
            PyOXe: '4169e1',
            saddNbPwn: '8b4513',
            sOmon: 'fa8072',
            sandybPwn: 'f4a460',
            sHgYF: '2e8b57',
            sHshell: 'fff5ee',
            siFna: 'a0522d',
            silver: 'c0c0c0',
            skyXe: '87ceeb',
            UXe: '6a5acd',
            UWay: '708090',
            UgYy: '708090',
            snow: 'fffafa',
            sprRggYF: 'ff7f',
            stAlXe: '4682b4',
            tan: 'd2b48c',
            teO: '8080',
            tEstN: 'd8bfd8',
            tomato: 'ff6347',
            Qe: '40e0d0',
            viTet: 'ee82ee',
            JHt: 'f5deb3',
            wEte: 'ffffff',
            wEtesmoke: 'f5f5f5',
            Lw: 'ffff00',
            LwgYF: '9acd32'
          }
        function ze(t) {
          xe ||
            ((xe = (function () {
              var t,
                e,
                r,
                n,
                i,
                a = {},
                o = Object.keys(_e),
                l = Object.keys(Me)
              for (t = 0; t < o.length; t++) {
                for (n = i = o[t], e = 0; e < l.length; e++) (r = l[e]), (i = i.replace(r, Me[r]))
                ;(r = parseInt(_e[n], 16)), (a[i] = [(r >> 16) & 255, (r >> 8) & 255, 255 & r])
              }
              return a
            })()),
            (xe.transparent = [0, 0, 0, 0]))
          var e = xe[t.toLowerCase()]
          return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        }
        function we(t, e, r) {
          if (t) {
            var n = ge(t)
            ;(n[e] = Math.max(0, Math.min(n[e] + n[e] * r, 0 === e ? 360 : 1))),
              (n = me(n)),
              (t.r = n[0]),
              (t.g = n[1]),
              (t.b = n[2])
          }
        }
        function Oe(t, e) {
          return t ? Object.assign(e || {}, t) : t
        }
        function Ce(t) {
          var e = { r: 0, g: 0, b: 0, a: 255 }
          return (
            Array.isArray(t)
              ? t.length >= 3 && ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = se(t[3])))
              : ((e = Oe(t, { r: 0, g: 0, b: 0, a: 1 })).a = se(e.a)),
            e
          )
        }
        function je(t) {
          return 'r' === t.charAt(0)
            ? (function (t) {
                var e,
                  r,
                  n,
                  i = he.exec(t),
                  a = 255
                if (i) {
                  if (i[7] !== e) {
                    var o = +i[7]
                    a = 255 & (i[8] ? le(o) : 255 * o)
                  }
                  return (
                    (e = +i[1]),
                    (r = +i[3]),
                    (n = +i[5]),
                    {
                      r: (e = 255 & (i[2] ? le(e) : e)),
                      g: (r = 255 & (i[4] ? le(r) : r)),
                      b: (n = 255 & (i[6] ? le(n) : n)),
                      a: a
                    }
                  )
                }
              })(t)
            : ke(t)
        }
        var Se = (function () {
          function t(e) {
            if ((Object(f.a)(this, t), e instanceof t)) return e
            var r,
              n = typeof e
            'object' === n
              ? (r = Ce(e))
              : 'string' === n &&
                (r =
                  (function (t) {
                    var e,
                      r = t.length
                    return (
                      '#' === t[0] &&
                        (4 === r || 5 === r
                          ? (e = {
                              r: 255 & (17 * Qt[t[1]]),
                              g: 255 & (17 * Qt[t[2]]),
                              b: 255 & (17 * Qt[t[3]]),
                              a: 5 === r ? 17 * Qt[t[4]] : 255
                            })
                          : (7 !== r && 9 !== r) ||
                            (e = {
                              r: (Qt[t[1]] << 4) | Qt[t[2]],
                              g: (Qt[t[3]] << 4) | Qt[t[4]],
                              b: (Qt[t[5]] << 4) | Qt[t[6]],
                              a: 9 === r ? (Qt[t[7]] << 4) | Qt[t[8]] : 255
                            })),
                      e
                    )
                  })(e) ||
                  ze(e) ||
                  je(e)),
              (this._rgb = r),
              (this._valid = !!r)
          }
          return (
            Object(d.a)(t, [
              {
                key: 'valid',
                get: function () {
                  return this._valid
                }
              },
              {
                key: 'rgb',
                get: function () {
                  var t = Oe(this._rgb)
                  return t && (t.a = ce(t.a)), t
                },
                set: function (t) {
                  this._rgb = Ce(t)
                }
              },
              {
                key: 'rgbString',
                value: function () {
                  return this._valid
                    ? (function (t) {
                        return (
                          t &&
                          (t.a < 255
                            ? 'rgba('.concat(t.r, ', ').concat(t.g, ', ').concat(t.b, ', ').concat(ce(t.a), ')')
                            : 'rgb('.concat(t.r, ', ').concat(t.g, ', ').concat(t.b, ')'))
                        )
                      })(this._rgb)
                    : this._rgb
                }
              },
              {
                key: 'hexString',
                value: function () {
                  return this._valid ? ie(this._rgb) : this._rgb
                }
              },
              {
                key: 'hslString',
                value: function () {
                  return this._valid
                    ? (function (t) {
                        if (t) {
                          var e = ge(t),
                            r = e[0],
                            n = ue(e[1]),
                            i = ue(e[2])
                          return t.a < 255
                            ? 'hsla('.concat(r, ', ').concat(n, '%, ').concat(i, '%, ').concat(ce(t.a), ')')
                            : 'hsl('.concat(r, ', ').concat(n, '%, ').concat(i, '%)')
                        }
                      })(this._rgb)
                    : this._rgb
                }
              },
              {
                key: 'mix',
                value: function (t, e) {
                  var r = this
                  if (t) {
                    var n,
                      i = r.rgb,
                      a = t.rgb,
                      o = e === n ? 0.5 : e,
                      l = 2 * o - 1,
                      s = i.a - a.a,
                      c = ((l * s === -1 ? l : (l + s) / (1 + l * s)) + 1) / 2
                    ;(n = 1 - c),
                      (i.r = 255 & (c * i.r + n * a.r + 0.5)),
                      (i.g = 255 & (c * i.g + n * a.g + 0.5)),
                      (i.b = 255 & (c * i.b + n * a.b + 0.5)),
                      (i.a = o * i.a + (1 - o) * a.a),
                      (r.rgb = i)
                  }
                  return r
                }
              },
              {
                key: 'clone',
                value: function () {
                  return new t(this.rgb)
                }
              },
              {
                key: 'alpha',
                value: function (t) {
                  return (this._rgb.a = se(t)), this
                }
              },
              {
                key: 'clearer',
                value: function (t) {
                  return (this._rgb.a *= 1 - t), this
                }
              },
              {
                key: 'greyscale',
                value: function () {
                  var t = this._rgb,
                    e = ae(0.3 * t.r + 0.59 * t.g + 0.11 * t.b)
                  return (t.r = t.g = t.b = e), this
                }
              },
              {
                key: 'opaquer',
                value: function (t) {
                  return (this._rgb.a *= 1 + t), this
                }
              },
              {
                key: 'negate',
                value: function () {
                  var t = this._rgb
                  return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
                }
              },
              {
                key: 'lighten',
                value: function (t) {
                  return we(this._rgb, 2, t), this
                }
              },
              {
                key: 'darken',
                value: function (t) {
                  return we(this._rgb, 2, -t), this
                }
              },
              {
                key: 'saturate',
                value: function (t) {
                  return we(this._rgb, 1, t), this
                }
              },
              {
                key: 'desaturate',
                value: function (t) {
                  return we(this._rgb, 1, -t), this
                }
              },
              {
                key: 'rotate',
                value: function (t) {
                  return (
                    (function (t, e) {
                      var r = ge(t)
                      ;(r[0] = be(r[0] + e)), (r = me(r)), (t.r = r[0]), (t.g = r[1]), (t.b = r[2])
                    })(this._rgb, t),
                    this
                  )
                }
              }
            ]),
            t
          )
        })()
        function Fe(t) {
          return new Se(t)
        }
        var Pe = function (t) {
          return t instanceof CanvasGradient || t instanceof CanvasPattern
        }
        function De(t) {
          return Pe(t) ? t : Fe(t)
        }
        function Ae(t) {
          return Pe(t) ? t : Fe(t).saturate(0.5).darken(0.1).hexString()
        }
        var Ee = Object.create(null),
          Te = Object.create(null)
        function Be(t, e) {
          if (!e) return t
          for (var r = e.split('.'), n = 0, i = r.length; n < i; ++n) {
            var a = r[n]
            t = t[a] || (t[a] = Object.create(null))
          }
          return t
        }
        function Le(t, e, r) {
          return 'string' === typeof e ? bt(Be(t, e), r) : bt(Be(t, ''), e)
        }
        var Re = (function () {
            function t(e) {
              Object(f.a)(this, t),
                (this.animation = void 0),
                (this.backgroundColor = 'rgba(0,0,0,0.1)'),
                (this.borderColor = 'rgba(0,0,0,0.1)'),
                (this.color = '#666'),
                (this.datasets = {}),
                (this.devicePixelRatio = function (t) {
                  return t.chart.platform.getDevicePixelRatio()
                }),
                (this.elements = {}),
                (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
                (this.font = {
                  family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  size: 12,
                  style: 'normal',
                  lineHeight: 1.2,
                  weight: null
                }),
                (this.hover = {}),
                (this.hoverBackgroundColor = function (t, e) {
                  return Ae(e.backgroundColor)
                }),
                (this.hoverBorderColor = function (t, e) {
                  return Ae(e.borderColor)
                }),
                (this.hoverColor = function (t, e) {
                  return Ae(e.color)
                }),
                (this.indexAxis = 'x'),
                (this.interaction = { mode: 'nearest', intersect: !0 }),
                (this.maintainAspectRatio = !0),
                (this.onHover = null),
                (this.onClick = null),
                (this.parsing = !0),
                (this.plugins = {}),
                (this.responsive = !0),
                (this.scale = void 0),
                (this.scales = {}),
                (this.showLine = !0),
                this.describe(e)
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'set',
                  value: function (t, e) {
                    return Le(this, t, e)
                  }
                },
                {
                  key: 'get',
                  value: function (t) {
                    return Be(this, t)
                  }
                },
                {
                  key: 'describe',
                  value: function (t, e) {
                    return Le(Te, t, e)
                  }
                },
                {
                  key: 'override',
                  value: function (t, e) {
                    return Le(Ee, t, e)
                  }
                },
                {
                  key: 'route',
                  value: function (t, e, r, n) {
                    var i,
                      a = Be(this, t),
                      o = Be(this, r),
                      l = '_' + e
                    Object.defineProperties(
                      a,
                      ((i = {}),
                      Object(h.a)(i, l, { value: a[e], writable: !0 }),
                      Object(h.a)(i, e, {
                        enumerable: !0,
                        get: function () {
                          var t = this[l],
                            e = o[n]
                          return st(t) ? Object.assign({}, e, t) : ht(t, e)
                        },
                        set: function (t) {
                          this[l] = t
                        }
                      }),
                      i)
                    )
                  }
                }
              ]),
              t
            )
          })(),
          Ie = new Re({
            _scriptable: function (t) {
              return !t.startsWith('on')
            },
            _indexable: function (t) {
              return 'events' !== t
            },
            hover: { _fallback: 'interaction' },
            interaction: { _scriptable: !1, _indexable: !1 }
          })
        function Ve(t, e, r, n, i) {
          var a = e[i]
          return a || ((a = e[i] = t.measureText(i).width), r.push(i)), a > n && (n = a), n
        }
        function He(t, e, r, n) {
          var i = ((n = n || {}).data = n.data || {}),
            a = (n.garbageCollect = n.garbageCollect || [])
          n.font !== e && ((i = n.data = {}), (a = n.garbageCollect = []), (n.font = e)), t.save(), (t.font = e)
          var o,
            l,
            s,
            c,
            u,
            h = 0,
            f = r.length
          for (o = 0; o < f; o++)
            if (void 0 !== (c = r[o]) && null !== c && !0 !== lt(c)) h = Ve(t, i, a, h, c)
            else if (lt(c))
              for (l = 0, s = c.length; l < s; l++)
                void 0 === (u = c[l]) || null === u || lt(u) || (h = Ve(t, i, a, h, u))
          t.restore()
          var d = a.length / 2
          if (d > r.length) {
            for (o = 0; o < d; o++) delete i[a[o]]
            a.splice(0, d)
          }
          return h
        }
        function Ne(t, e, r) {
          var n = t.currentDevicePixelRatio,
            i = 0 !== r ? Math.max(r / 2, 0.5) : 0
          return Math.round((e - i) * n) / n + i
        }
        function We(t, e) {
          ;(e = e || t.getContext('2d')).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
        }
        function $e(t, e, r, n) {
          var i,
            a,
            o,
            l,
            s,
            c = e.pointStyle,
            u = e.rotation,
            h = e.radius,
            f = (u || 0) * Pt
          if (
            c &&
            'object' === typeof c &&
            ('[object HTMLImageElement]' === (i = c.toString()) || '[object HTMLCanvasElement]' === i)
          )
            return (
              t.save(),
              t.translate(r, n),
              t.rotate(f),
              t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
              void t.restore()
            )
          if (!(isNaN(h) || h <= 0)) {
            switch ((t.beginPath(), c)) {
              default:
                t.arc(r, n, h, 0, jt), t.closePath()
                break
              case 'triangle':
                t.moveTo(r + Math.sin(f) * h, n - Math.cos(f) * h),
                  (f += Et),
                  t.lineTo(r + Math.sin(f) * h, n - Math.cos(f) * h),
                  (f += Et),
                  t.lineTo(r + Math.sin(f) * h, n - Math.cos(f) * h),
                  t.closePath()
                break
              case 'rectRounded':
                ;(l = h - (s = 0.516 * h)),
                  (a = Math.cos(f + At) * l),
                  (o = Math.sin(f + At) * l),
                  t.arc(r - a, n - o, s, f - Ct, f - Dt),
                  t.arc(r + o, n - a, s, f - Dt, f),
                  t.arc(r + a, n + o, s, f, f + Dt),
                  t.arc(r - o, n + a, s, f + Dt, f + Ct),
                  t.closePath()
                break
              case 'rect':
                if (!u) {
                  ;(l = Math.SQRT1_2 * h), t.rect(r - l, n - l, 2 * l, 2 * l)
                  break
                }
                f += At
              case 'rectRot':
                ;(a = Math.cos(f) * h),
                  (o = Math.sin(f) * h),
                  t.moveTo(r - a, n - o),
                  t.lineTo(r + o, n - a),
                  t.lineTo(r + a, n + o),
                  t.lineTo(r - o, n + a),
                  t.closePath()
                break
              case 'crossRot':
                f += At
              case 'cross':
                ;(a = Math.cos(f) * h),
                  (o = Math.sin(f) * h),
                  t.moveTo(r - a, n - o),
                  t.lineTo(r + a, n + o),
                  t.moveTo(r + o, n - a),
                  t.lineTo(r - o, n + a)
                break
              case 'star':
                ;(a = Math.cos(f) * h),
                  (o = Math.sin(f) * h),
                  t.moveTo(r - a, n - o),
                  t.lineTo(r + a, n + o),
                  t.moveTo(r + o, n - a),
                  t.lineTo(r - o, n + a),
                  (f += At),
                  (a = Math.cos(f) * h),
                  (o = Math.sin(f) * h),
                  t.moveTo(r - a, n - o),
                  t.lineTo(r + a, n + o),
                  t.moveTo(r + o, n - a),
                  t.lineTo(r - o, n + a)
                break
              case 'line':
                ;(a = Math.cos(f) * h), (o = Math.sin(f) * h), t.moveTo(r - a, n - o), t.lineTo(r + a, n + o)
                break
              case 'dash':
                t.moveTo(r, n), t.lineTo(r + Math.cos(f) * h, n + Math.sin(f) * h)
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
          }
        }
        function Ye(t, e, r) {
          return (
            (r = r || 0.5), !e || (t && t.x > e.left - r && t.x < e.right + r && t.y > e.top - r && t.y < e.bottom + r)
          )
        }
        function Ue(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        }
        function Xe(t) {
          t.restore()
        }
        function qe(t, e, r, n, i) {
          if (!e) return t.lineTo(r.x, r.y)
          if ('middle' === i) {
            var a = (e.x + r.x) / 2
            t.lineTo(a, e.y), t.lineTo(a, r.y)
          } else ('after' === i) !== !!n ? t.lineTo(e.x, r.y) : t.lineTo(r.x, e.y)
          t.lineTo(r.x, r.y)
        }
        function Ke(t, e, r, n) {
          if (!e) return t.lineTo(r.x, r.y)
          t.bezierCurveTo(n ? e.cp1x : e.cp2x, n ? e.cp1y : e.cp2y, n ? r.cp2x : r.cp1x, n ? r.cp2y : r.cp1y, r.x, r.y)
        }
        function Ze(t, e, r, n, i) {
          var a,
            o,
            l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
            s = lt(e) ? e : [e],
            c = l.strokeWidth > 0 && '' !== l.strokeColor
          for (t.save(), t.font = i.string, Ge(t, l), a = 0; a < s.length; ++a)
            (o = s[a]),
              c &&
                (l.strokeColor && (t.strokeStyle = l.strokeColor),
                ot(l.strokeWidth) || (t.lineWidth = l.strokeWidth),
                t.strokeText(o, r, n, l.maxWidth)),
              t.fillText(o, r, n, l.maxWidth),
              Je(t, r, n, o, l),
              (n += i.lineHeight)
          t.restore()
        }
        function Ge(t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            ot(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline)
        }
        function Je(t, e, r, n, i) {
          if (i.strikethrough || i.underline) {
            var a = t.measureText(n),
              o = e - a.actualBoundingBoxLeft,
              l = e + a.actualBoundingBoxRight,
              s = r - a.actualBoundingBoxAscent,
              c = r + a.actualBoundingBoxDescent,
              u = i.strikethrough ? (s + c) / 2 : c
            ;(t.strokeStyle = t.fillStyle),
              t.beginPath(),
              (t.lineWidth = i.decorationWidth || 2),
              t.moveTo(o, u),
              t.lineTo(l, u),
              t.stroke()
          }
        }
        function Qe(t, e) {
          var r = e.x,
            n = e.y,
            i = e.w,
            a = e.h,
            o = e.radius
          t.arc(r + o.topLeft, n + o.topLeft, o.topLeft, -Dt, Ct, !0),
            t.lineTo(r, n + a - o.bottomLeft),
            t.arc(r + o.bottomLeft, n + a - o.bottomLeft, o.bottomLeft, Ct, Dt, !0),
            t.lineTo(r + i - o.bottomRight, n + a),
            t.arc(r + i - o.bottomRight, n + a - o.bottomRight, o.bottomRight, Dt, 0, !0),
            t.lineTo(r + i, n + o.topRight),
            t.arc(r + i - o.topRight, n + o.topRight, o.topRight, 0, -Dt, !0),
            t.lineTo(r + o.topLeft, n)
        }
        var tr = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
          er = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/)
        function rr(t, e) {
          var r = ('' + t).match(tr)
          if (!r || 'normal' === r[1]) return 1.2 * e
          switch (((t = +r[2]), r[3])) {
            case 'px':
              return t
            case '%':
              t /= 100
          }
          return e * t
        }
        var nr = function (t) {
          return +t || 0
        }
        function ir(t, e) {
          var r,
            n = {},
            i = st(e),
            a = i ? Object.keys(e) : e,
            o = st(t)
              ? i
                ? function (r) {
                    return ht(t[r], t[e[r]])
                  }
                : function (e) {
                    return t[e]
                  }
              : function () {
                  return t
                },
            l = Object(v.a)(a)
          try {
            for (l.s(); !(r = l.n()).done; ) {
              var s = r.value
              n[s] = nr(o(s))
            }
          } catch (c) {
            l.e(c)
          } finally {
            l.f()
          }
          return n
        }
        function ar(t) {
          return ir(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
        }
        function or(t) {
          return ir(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
        }
        function lr(t) {
          var e = ar(t)
          return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e
        }
        function sr(t, e) {
          ;(t = t || {}), (e = e || Ie.font)
          var r = ht(t.size, e.size)
          'string' === typeof r && (r = parseInt(r, 10))
          var n = ht(t.style, e.style)
          n && !('' + n).match(er) && (console.warn('Invalid font style specified: "' + n + '"'), (n = ''))
          var i = {
            family: ht(t.family, e.family),
            lineHeight: rr(ht(t.lineHeight, e.lineHeight), r),
            size: r,
            style: n,
            weight: ht(t.weight, e.weight),
            string: ''
          }
          return (
            (i.string = (function (t) {
              return !t || ot(t.size) || ot(t.family)
                ? null
                : (t.style ? t.style + ' ' : '') + (t.weight ? t.weight + ' ' : '') + t.size + 'px ' + t.family
            })(i)),
            i
          )
        }
        function cr(t, e, r, n) {
          var i,
            a,
            o,
            l = !0
          for (i = 0, a = t.length; i < a; ++i)
            if (
              void 0 !== (o = t[i]) &&
              (void 0 !== e && 'function' === typeof o && ((o = o(e)), (l = !1)),
              void 0 !== r && lt(o) && ((o = o[r % o.length]), (l = !1)),
              void 0 !== o)
            )
              return n && !l && (n.cacheable = !1), o
        }
        function ur(t, e, r) {
          r =
            r ||
            function (r) {
              return t[r] < e
            }
          for (var n, i = t.length - 1, a = 0; i - a > 1; ) r((n = (a + i) >> 1)) ? (a = n) : (i = n)
          return { lo: a, hi: i }
        }
        var hr = function (t, e, r) {
            return ur(t, r, function (n) {
              return t[n][e] < r
            })
          },
          fr = function (t, e, r) {
            return ur(t, r, function (n) {
              return t[n][e] >= r
            })
          }
        var dr = ['push', 'pop', 'shift', 'splice', 'unshift']
        function vr(t, e) {
          var r = t._chartjs
          if (r) {
            var n = r.listeners,
              i = n.indexOf(e)
            ;-1 !== i && n.splice(i, 1),
              n.length > 0 ||
                (dr.forEach(function (e) {
                  delete t[e]
                }),
                delete t._chartjs)
          }
        }
        function pr(t) {
          var e,
            r,
            n = new Set()
          for (e = 0, r = t.length; e < r; ++e) n.add(t[e])
          return n.size === r ? t : Array.from(n)
        }
        function gr(t) {
          var e,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [''],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            i = arguments.length > 3 ? arguments[3] : void 0,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : function () {
                    return t[0]
                  }
          wt(i) || (i = jr('_fallback', t))
          var o =
            ((e = {}),
            Object(h.a)(e, Symbol.toStringTag, 'Object'),
            Object(h.a)(e, '_cacheable', !0),
            Object(h.a)(e, '_scopes', t),
            Object(h.a)(e, '_rootScopes', n),
            Object(h.a)(e, '_fallback', i),
            Object(h.a)(e, '_getTarget', a),
            Object(h.a)(e, 'override', function (e) {
              return gr([e].concat(Object(u.a)(t)), r, n, i)
            }),
            e)
          return new Proxy(o, {
            deleteProperty: function (e, r) {
              return delete e[r], delete e._keys, delete t[0][r], !0
            },
            get: function (e, n) {
              return xr(e, n, function () {
                return Cr(n, r, t, e)
              })
            },
            getOwnPropertyDescriptor: function (t, e) {
              return Reflect.getOwnPropertyDescriptor(t._scopes[0], e)
            },
            getPrototypeOf: function () {
              return Reflect.getPrototypeOf(t[0])
            },
            has: function (t, e) {
              return Sr(t).includes(e)
            },
            ownKeys: function (t) {
              return Sr(t)
            },
            set: function (t, e, r) {
              return ((t._storage || (t._storage = a()))[e] = r), delete t[e], delete t._keys, !0
            }
          })
        }
        function yr(t, e, r, n) {
          var i = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: r,
            _stack: new Set(),
            _descriptors: mr(t, n),
            setContext: function (e) {
              return yr(t, e, r, n)
            },
            override: function (i) {
              return yr(t.override(i), e, r, n)
            }
          }
          return new Proxy(i, {
            deleteProperty: function (e, r) {
              return delete e[r], delete t[r], !0
            },
            get: function (t, e, r) {
              return xr(t, e, function () {
                return (function (t, e, r) {
                  var n = t._proxy,
                    i = t._context,
                    a = t._subProxy,
                    o = t._descriptors,
                    l = n[e]
                  Ot(l) &&
                    o.isScriptable(e) &&
                    (l = (function (t, e, r, n) {
                      var i = r._proxy,
                        a = r._context,
                        o = r._subProxy,
                        l = r._stack
                      if (l.has(t)) throw new Error('Recursion detected: ' + Array.from(l).join('->') + '->' + t)
                      l.add(t), (e = e(a, o || n)), l.delete(t), st(e) && (e = wr(i._scopes, i, t, e))
                      return e
                    })(e, l, t, r))
                  lt(l) &&
                    l.length &&
                    (l = (function (t, e, r, n) {
                      var i = r._proxy,
                        a = r._context,
                        o = r._subProxy,
                        l = r._descriptors
                      if (wt(a.index) && n(t)) e = e[a.index % e.length]
                      else if (st(e[0])) {
                        var s = e,
                          c = i._scopes.filter(function (t) {
                            return t !== s
                          })
                        e = []
                        var u,
                          h = Object(v.a)(s)
                        try {
                          for (h.s(); !(u = h.n()).done; ) {
                            var f = wr(c, i, t, u.value)
                            e.push(yr(f, a, o && o[t], l))
                          }
                        } catch (d) {
                          h.e(d)
                        } finally {
                          h.f()
                        }
                      }
                      return e
                    })(e, l, t, o.isIndexable))
                  kr(e, l) && (l = yr(l, i, a && a[e], o))
                  return l
                })(t, e, r)
              })
            },
            getOwnPropertyDescriptor: function (e, r) {
              return e._descriptors.allKeys
                ? Reflect.has(t, r)
                  ? { enumerable: !0, configurable: !0 }
                  : void 0
                : Reflect.getOwnPropertyDescriptor(t, r)
            },
            getPrototypeOf: function () {
              return Reflect.getPrototypeOf(t)
            },
            has: function (e, r) {
              return Reflect.has(t, r)
            },
            ownKeys: function () {
              return Reflect.ownKeys(t)
            },
            set: function (e, r, n) {
              return (t[r] = n), delete e[r], !0
            }
          })
        }
        function mr(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scriptable: !0, indexable: !0 },
            r = t._scriptable,
            n = void 0 === r ? e.scriptable : r,
            i = t._indexable,
            a = void 0 === i ? e.indexable : i,
            o = t._allKeys,
            l = void 0 === o ? e.allKeys : o
          return {
            allKeys: l,
            scriptable: n,
            indexable: a,
            isScriptable: Ot(n)
              ? n
              : function () {
                  return n
                },
            isIndexable: Ot(a)
              ? a
              : function () {
                  return a
                }
          }
        }
        var br = function (t, e) {
            return t ? t + zt(e) : e
          },
          kr = function (t, e) {
            return st(e) && 'adapters' !== t
          }
        function xr(t, e, r) {
          var n = t[e]
          return wt(n) || ((n = r()), wt(n) && (t[e] = n)), n
        }
        function Mr(t, e, r) {
          return Ot(t) ? t(e, r) : t
        }
        var _r = function (t, e) {
          return !0 === t ? e : 'string' === typeof t ? _t(e, t) : void 0
        }
        function zr(t, e, r, n) {
          var i,
            a = Object(v.a)(e)
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var o = i.value,
                l = _r(r, o)
              if (l) {
                t.add(l)
                var s = Mr(l._fallback, r, l)
                if (wt(s) && s !== r && s !== n) return s
              } else if (!1 === l && wt(n) && r !== n) return null
            }
          } catch (c) {
            a.e(c)
          } finally {
            a.f()
          }
          return !1
        }
        function wr(t, e, r, n) {
          var i = e._rootScopes,
            a = Mr(e._fallback, r, n),
            o = [].concat(Object(u.a)(t), Object(u.a)(i)),
            l = new Set()
          l.add(n)
          var s = Or(l, o, r, a || r)
          return (
            null !== s &&
            (!wt(a) || a === r || null !== (s = Or(l, o, a, s))) &&
            gr(Array.from(l), [''], i, a, function () {
              return (function (t, e, r) {
                var n = t._getTarget()
                e in n || (n[e] = {})
                var i = n[e]
                if (lt(i) && st(r)) return r
                return i
              })(e, r, n)
            })
          )
        }
        function Or(t, e, r, n) {
          for (; r; ) r = zr(t, e, r, n)
          return r
        }
        function Cr(t, e, r, n) {
          var i,
            a,
            o = Object(v.a)(e)
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var l = a.value
              if (((i = jr(br(l, t), r)), wt(i))) return kr(t, i) ? wr(r, n, t, i) : i
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
        }
        function jr(t, e) {
          var r,
            n = Object(v.a)(e)
          try {
            for (n.s(); !(r = n.n()).done; ) {
              var i = r.value
              if (i) {
                var a = i[t]
                if (wt(a)) return a
              }
            }
          } catch (o) {
            n.e(o)
          } finally {
            n.f()
          }
        }
        function Sr(t) {
          var e = t._keys
          return (
            e ||
              (e = t._keys =
                (function (t) {
                  var e,
                    r = new Set(),
                    n = Object(v.a)(t)
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var i,
                        a = e.value,
                        o = Object(v.a)(
                          Object.keys(a).filter(function (t) {
                            return !t.startsWith('_')
                          })
                        )
                      try {
                        for (o.s(); !(i = o.n()).done; ) {
                          var l = i.value
                          r.add(l)
                        }
                      } catch (s) {
                        o.e(s)
                      } finally {
                        o.f()
                      }
                    }
                  } catch (s) {
                    n.e(s)
                  } finally {
                    n.f()
                  }
                  return Array.from(r)
                })(t._scopes)),
            e
          )
        }
        var Fr = Number.EPSILON || 1e-14,
          Pr = function (t, e) {
            return e < t.length && !t[e].skip && t[e]
          },
          Dr = function (t) {
            return 'x' === t ? 'y' : 'x'
          }
        function Ar(t, e, r, n) {
          var i = t.skip ? e : t,
            a = e,
            o = r.skip ? e : r,
            l = $t(a, i),
            s = $t(o, a),
            c = l / (l + s),
            u = s / (l + s),
            h = n * (c = isNaN(c) ? 0 : c),
            f = n * (u = isNaN(u) ? 0 : u)
          return {
            previous: { x: a.x - h * (o.x - i.x), y: a.y - h * (o.y - i.y) },
            next: { x: a.x + f * (o.x - i.x), y: a.y + f * (o.y - i.y) }
          }
        }
        function Er(t, e, r) {
          for (var n, i, a, o, l, s = t.length, c = Pr(t, 0), u = 0; u < s - 1; ++u)
            (l = c),
              (c = Pr(t, u + 1)),
              l &&
                c &&
                (It(e[u], 0, Fr)
                  ? (r[u] = r[u + 1] = 0)
                  : ((n = r[u] / e[u]),
                    (i = r[u + 1] / e[u]),
                    (o = Math.pow(n, 2) + Math.pow(i, 2)) <= 9 ||
                      ((a = 3 / Math.sqrt(o)), (r[u] = n * a * e[u]), (r[u + 1] = i * a * e[u]))))
        }
        function Tr(t, e) {
          for (
            var r,
              n,
              i,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'x',
              o = Dr(a),
              l = t.length,
              s = Pr(t, 0),
              c = 0;
            c < l;
            ++c
          )
            if (((n = i), (i = s), (s = Pr(t, c + 1)), i)) {
              var u = i[a],
                h = i[o]
              n && ((r = (u - n[a]) / 3), (i['cp1'.concat(a)] = u - r), (i['cp1'.concat(o)] = h - r * e[c])),
                s && ((r = (s[a] - u) / 3), (i['cp2'.concat(a)] = u + r), (i['cp2'.concat(o)] = h + r * e[c]))
            }
        }
        function Br(t, e, r) {
          return Math.max(Math.min(t, r), e)
        }
        function Lr(t, e, r, n, i) {
          var a, o, l, s
          if (
            (e.spanGaps &&
              (t = t.filter(function (t) {
                return !t.skip
              })),
            'monotone' === e.cubicInterpolationMode)
          )
            !(function (t) {
              var e,
                r,
                n,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x',
                a = Dr(i),
                o = t.length,
                l = Array(o).fill(0),
                s = Array(o),
                c = Pr(t, 0)
              for (e = 0; e < o; ++e)
                if (((r = n), (n = c), (c = Pr(t, e + 1)), n)) {
                  if (c) {
                    var u = c[i] - n[i]
                    l[e] = 0 !== u ? (c[a] - n[a]) / u : 0
                  }
                  s[e] = r ? (c ? (Bt(l[e - 1]) !== Bt(l[e]) ? 0 : (l[e - 1] + l[e]) / 2) : l[e - 1]) : l[e]
                }
              Er(t, l, s), Tr(t, s, i)
            })(t, i)
          else {
            var c = n ? t[t.length - 1] : t[0]
            for (a = 0, o = t.length; a < o; ++a)
              (s = Ar(c, (l = t[a]), t[Math.min(a + 1, o - (n ? 0 : 1)) % o], e.tension)),
                (l.cp1x = s.previous.x),
                (l.cp1y = s.previous.y),
                (l.cp2x = s.next.x),
                (l.cp2y = s.next.y),
                (c = l)
          }
          e.capBezierPoints &&
            (function (t, e) {
              var r,
                n,
                i,
                a,
                o,
                l = Ye(t[0], e)
              for (r = 0, n = t.length; r < n; ++r)
                (o = a),
                  (a = l),
                  (l = r < n - 1 && Ye(t[r + 1], e)),
                  a &&
                    ((i = t[r]),
                    o && ((i.cp1x = Br(i.cp1x, e.left, e.right)), (i.cp1y = Br(i.cp1y, e.top, e.bottom))),
                    l && ((i.cp2x = Br(i.cp2x, e.left, e.right)), (i.cp2y = Br(i.cp2y, e.top, e.bottom))))
            })(t, r)
        }
        function Rr() {
          return 'undefined' !== typeof window && 'undefined' !== typeof document
        }
        function Ir(t) {
          var e = t.parentNode
          return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
        }
        function Vr(t, e, r) {
          var n
          return (
            'string' === typeof t
              ? ((n = parseInt(t, 10)), -1 !== t.indexOf('%') && (n = (n / 100) * e.parentNode[r]))
              : (n = t),
            n
          )
        }
        var Hr = function (t) {
          return window.getComputedStyle(t, null)
        }
        var Nr = ['top', 'right', 'bottom', 'left']
        function Wr(t, e, r) {
          var n = {}
          r = r ? '-' + r : ''
          for (var i = 0; i < 4; i++) {
            var a = Nr[i]
            n[a] = parseFloat(t[e + '-' + a + r]) || 0
          }
          return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n
        }
        function $r(t, e) {
          var r = e.canvas,
            n = e.currentDevicePixelRatio,
            i = Hr(r),
            a = 'border-box' === i.boxSizing,
            o = Wr(i, 'padding'),
            l = Wr(i, 'border', 'width'),
            s = (function (t, e) {
              var r,
                n,
                i = t.native || t,
                a = i.touches,
                o = a && a.length ? a[0] : i,
                l = o.offsetX,
                s = o.offsetY,
                c = !1
              if (
                (function (t, e, r) {
                  return (t > 0 || e > 0) && (!r || !r.shadowRoot)
                })(l, s, i.target)
              )
                (r = l), (n = s)
              else {
                var u = e.getBoundingClientRect()
                ;(r = o.clientX - u.left), (n = o.clientY - u.top), (c = !0)
              }
              return { x: r, y: n, box: c }
            })(t, r),
            c = s.x,
            u = s.y,
            h = s.box,
            f = o.left + (h && l.left),
            d = o.top + (h && l.top),
            v = e.width,
            p = e.height
          return (
            a && ((v -= o.width + l.width), (p -= o.height + l.height)),
            { x: Math.round((((c - f) / v) * r.width) / n), y: Math.round((((u - d) / p) * r.height) / n) }
          )
        }
        var Yr = function (t) {
          return Math.round(10 * t) / 10
        }
        function Ur(t, e, r, n) {
          var i = Hr(t),
            a = Wr(i, 'margin'),
            o = Vr(i.maxWidth, t, 'clientWidth') || Ft,
            l = Vr(i.maxHeight, t, 'clientHeight') || Ft,
            s = (function (t, e, r) {
              var n, i
              if (void 0 === e || void 0 === r) {
                var a = Ir(t)
                if (a) {
                  var o = a.getBoundingClientRect(),
                    l = Hr(a),
                    s = Wr(l, 'border', 'width'),
                    c = Wr(l, 'padding')
                  ;(e = o.width - c.width - s.width),
                    (r = o.height - c.height - s.height),
                    (n = Vr(l.maxWidth, a, 'clientWidth')),
                    (i = Vr(l.maxHeight, a, 'clientHeight'))
                } else (e = t.clientWidth), (r = t.clientHeight)
              }
              return { width: e, height: r, maxWidth: n || Ft, maxHeight: i || Ft }
            })(t, e, r),
            c = s.width,
            u = s.height
          if ('content-box' === i.boxSizing) {
            var h = Wr(i, 'border', 'width'),
              f = Wr(i, 'padding')
            ;(c -= f.width + h.width), (u -= f.height + h.height)
          }
          return (
            (c = Math.max(0, c - a.width)),
            (u = Math.max(0, n ? Math.floor(c / n) : u - a.height)),
            (c = Yr(Math.min(c, o, s.maxWidth))),
            (u = Yr(Math.min(u, l, s.maxHeight))),
            c && !u && (u = Yr(c / 2)),
            { width: c, height: u }
          )
        }
        function Xr(t, e, r) {
          var n = e || 1,
            i = Math.floor(t.height * n),
            a = Math.floor(t.width * n)
          ;(t.height = i / n), (t.width = a / n)
          var o = t.canvas
          return (
            o.style &&
              (r || (!o.style.height && !o.style.width)) &&
              ((o.style.height = ''.concat(t.height, 'px')), (o.style.width = ''.concat(t.width, 'px'))),
            (t.currentDevicePixelRatio !== n || o.height !== i || o.width !== a) &&
              ((t.currentDevicePixelRatio = n), (o.height = i), (o.width = a), t.ctx.setTransform(n, 0, 0, n, 0, 0), !0)
          )
        }
        var qr = (function () {
          var t = !1
          try {
            var e = {
              get passive() {
                return (t = !0), !1
              }
            }
            window.addEventListener('test', null, e), window.removeEventListener('test', null, e)
          } catch (O) {}
          return t
        })()
        function Kr(t, e) {
          var r = (function (t, e) {
              return Hr(t).getPropertyValue(e)
            })(t, e),
            n = r && r.match(/^(\d+)(\.\d+)?px$/)
          return n ? +n[1] : void 0
        }
        function Zr(t, e, r, n) {
          return { x: t.x + r * (e.x - t.x), y: t.y + r * (e.y - t.y) }
        }
        function Gr(t, e, r, n) {
          return {
            x: t.x + r * (e.x - t.x),
            y: 'middle' === n ? (r < 0.5 ? t.y : e.y) : 'after' === n ? (r < 1 ? t.y : e.y) : r > 0 ? e.y : t.y
          }
        }
        function Jr(t, e, r, n) {
          var i = { x: t.cp2x, y: t.cp2y },
            a = { x: e.cp1x, y: e.cp1y },
            o = Zr(t, i, r),
            l = Zr(i, a, r),
            s = Zr(a, e, r),
            c = Zr(o, l, r),
            u = Zr(l, s, r)
          return Zr(c, u, r)
        }
        var Qr = new Map()
        function tn(t, e, r) {
          return (function (t, e) {
            e = e || {}
            var r = t + JSON.stringify(e),
              n = Qr.get(r)
            return n || ((n = new Intl.NumberFormat(t, e)), Qr.set(r, n)), n
          })(e, r).format(t)
        }
        function en(t, e, r) {
          return t
            ? (function (t, e) {
                return {
                  x: function (r) {
                    return t + t + e - r
                  },
                  setWidth: function (t) {
                    e = t
                  },
                  textAlign: function (t) {
                    return 'center' === t ? t : 'right' === t ? 'left' : 'right'
                  },
                  xPlus: function (t, e) {
                    return t - e
                  },
                  leftForLtr: function (t, e) {
                    return t - e
                  }
                }
              })(e, r)
            : {
                x: function (t) {
                  return t
                },
                setWidth: function (t) {},
                textAlign: function (t) {
                  return t
                },
                xPlus: function (t, e) {
                  return t + e
                },
                leftForLtr: function (t, e) {
                  return t
                }
              }
        }
        function rn(t, e) {
          var r, n
          ;('ltr' !== e && 'rtl' !== e) ||
            ((n = [(r = t.canvas.style).getPropertyValue('direction'), r.getPropertyPriority('direction')]),
            r.setProperty('direction', e, 'important'),
            (t.prevTextDirection = n))
        }
        function nn(t, e) {
          void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]))
        }
        function an(t) {
          return 'angle' === t
            ? { between: Xt, compare: Yt, normalize: Ut }
            : {
                between: function (t, e, r) {
                  return t >= Math.min(e, r) && t <= Math.max(r, e)
                },
                compare: function (t, e) {
                  return t - e
                },
                normalize: function (t) {
                  return t
                }
              }
        }
        function on(t) {
          var e = t.start,
            r = t.end,
            n = t.count
          return { start: e % n, end: r % n, loop: t.loop && (r - e + 1) % n === 0, style: t.style }
        }
        function ln(t, e, r) {
          if (!r) return [t]
          for (
            var n,
              i,
              a,
              o = r.property,
              l = r.start,
              s = r.end,
              c = e.length,
              u = an(o),
              h = u.compare,
              f = u.between,
              d = u.normalize,
              v = (function (t, e, r) {
                var n,
                  i,
                  a = r.property,
                  o = r.start,
                  l = r.end,
                  s = an(a),
                  c = s.between,
                  u = s.normalize,
                  h = e.length,
                  f = t.start,
                  d = t.end,
                  v = t.loop
                if (v) {
                  for (f += h, d += h, n = 0, i = h; n < i && c(u(e[f % h][a]), o, l); ++n) f--, d--
                  ;(f %= h), (d %= h)
                }
                return d < f && (d += h), { start: f, end: d, loop: v, style: t.style }
              })(t, e, r),
              p = v.start,
              g = v.end,
              y = v.loop,
              m = v.style,
              b = [],
              k = !1,
              x = null,
              M = function () {
                return k || (f(l, a, n) && 0 !== h(l, a))
              },
              _ = function () {
                return !k || 0 === h(s, n) || f(s, a, n)
              },
              z = p,
              w = p;
            z <= g;
            ++z
          )
            (i = e[z % c]).skip ||
              ((n = d(i[o])) !== a &&
                ((k = f(n, l, s)),
                null === x && M() && (x = 0 === h(n, l) ? z : w),
                null !== x && _() && (b.push(on({ start: x, end: z, loop: y, count: c, style: m })), (x = null)),
                (w = z),
                (a = n)))
          return null !== x && b.push(on({ start: x, end: g, loop: y, count: c, style: m })), b
        }
        function sn(t, e) {
          for (var r = [], n = t.segments, i = 0; i < n.length; i++) {
            var a = ln(n[i], t.points, e)
            a.length && r.push.apply(r, Object(u.a)(a))
          }
          return r
        }
        function cn(t, e, r, n) {
          return n && n.setContext && r
            ? (function (t, e, r, n) {
                var i,
                  a = un(t.options),
                  o = r.length,
                  l = [],
                  s = e[0].start,
                  c = s,
                  u = Object(v.a)(e)
                try {
                  for (u.s(); !(i = u.n()).done; ) {
                    var h = i.value,
                      f = a,
                      d = r[s % o],
                      p = void 0
                    for (c = s + 1; c <= h.end; c++) {
                      var g = r[c % o]
                      hn(
                        (p = un(
                          n.setContext({
                            type: 'segment',
                            p0: d,
                            p1: g,
                            p0DataIndex: (c - 1) % o,
                            p1DataIndex: c % o,
                            datasetIndex: t._datasetIndex
                          })
                        )),
                        f
                      ) && (l.push({ start: s, end: c - 1, loop: h.loop, style: f }), (f = p), (s = c - 1)),
                        (d = g),
                        (f = p)
                    }
                    s < c - 1 && (l.push({ start: s, end: c - 1, loop: h.loop, style: p }), (s = c - 1))
                  }
                } catch (y) {
                  u.e(y)
                } finally {
                  u.f()
                }
                return l
              })(t, e, r, n)
            : e
        }
        function un(t) {
          return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor
          }
        }
        function hn(t, e) {
          return e && JSON.stringify(t) !== JSON.stringify(e)
        }
        var fn = (function () {
            function t() {
              Object(f.a)(this, t),
                (this._request = null),
                (this._charts = new Map()),
                (this._running = !1),
                (this._lastDate = void 0)
            }
            return (
              Object(d.a)(t, [
                {
                  key: '_notify',
                  value: function (t, e, r, n) {
                    var i = e.listeners[n],
                      a = e.duration
                    i.forEach(function (n) {
                      return n({ chart: t, initial: e.initial, numSteps: a, currentStep: Math.min(r - e.start, a) })
                    })
                  }
                },
                {
                  key: '_refresh',
                  value: function () {
                    var t = this
                    t._request ||
                      ((t._running = !0),
                      (t._request = tt.call(window, function () {
                        t._update(), (t._request = null), t._running && t._refresh()
                      })))
                  }
                },
                {
                  key: '_update',
                  value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                      e = this,
                      r = 0
                    e._charts.forEach(function (n, i) {
                      if (n.running && n.items.length) {
                        for (var a, o = n.items, l = o.length - 1, s = !1; l >= 0; --l)
                          (a = o[l])._active
                            ? (a._total > n.duration && (n.duration = a._total), a.tick(t), (s = !0))
                            : ((o[l] = o[o.length - 1]), o.pop())
                        s && (i.draw(), e._notify(i, n, t, 'progress')),
                          o.length || ((n.running = !1), e._notify(i, n, t, 'complete'), (n.initial = !1)),
                          (r += o.length)
                      }
                    }),
                      (e._lastDate = t),
                      0 === r && (e._running = !1)
                  }
                },
                {
                  key: '_getAnims',
                  value: function (t) {
                    var e = this._charts,
                      r = e.get(t)
                    return (
                      r ||
                        ((r = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
                        e.set(t, r)),
                      r
                    )
                  }
                },
                {
                  key: 'listen',
                  value: function (t, e, r) {
                    this._getAnims(t).listeners[e].push(r)
                  }
                },
                {
                  key: 'add',
                  value: function (t, e) {
                    var r
                    e && e.length && (r = this._getAnims(t).items).push.apply(r, Object(u.a)(e))
                  }
                },
                {
                  key: 'has',
                  value: function (t) {
                    return this._getAnims(t).items.length > 0
                  }
                },
                {
                  key: 'start',
                  value: function (t) {
                    var e = this._charts.get(t)
                    e &&
                      ((e.running = !0),
                      (e.start = Date.now()),
                      (e.duration = e.items.reduce(function (t, e) {
                        return Math.max(t, e._duration)
                      }, 0)),
                      this._refresh())
                  }
                },
                {
                  key: 'running',
                  value: function (t) {
                    if (!this._running) return !1
                    var e = this._charts.get(t)
                    return !!(e && e.running && e.items.length)
                  }
                },
                {
                  key: 'stop',
                  value: function (t) {
                    var e = this._charts.get(t)
                    if (e && e.items.length) {
                      for (var r = e.items, n = r.length - 1; n >= 0; --n) r[n].cancel()
                      ;(e.items = []), this._notify(t, e, Date.now(), 'complete')
                    }
                  }
                },
                {
                  key: 'remove',
                  value: function (t) {
                    return this._charts.delete(t)
                  }
                }
              ]),
              t
            )
          })(),
          dn = new fn(),
          vn = 'transparent',
          pn = {
            boolean: function (t, e, r) {
              return r > 0.5 ? e : t
            },
            color: function (t, e, r) {
              var n = De(t || vn),
                i = n.valid && De(e || vn)
              return i && i.valid ? i.mix(n, r).hexString() : e
            },
            number: function (t, e, r) {
              return t + (e - t) * r
            }
          },
          gn = (function () {
            function t(e, r, n, i) {
              Object(f.a)(this, t)
              var a = r[n]
              i = cr([e.to, i, a, e.from])
              var o = cr([e.from, a, i])
              ;(this._active = !0),
                (this._fn = e.fn || pn[e.type || typeof o]),
                (this._easing = Jt[e.easing] || Jt.linear),
                (this._start = Math.floor(Date.now() + (e.delay || 0))),
                (this._duration = this._total = Math.floor(e.duration)),
                (this._loop = !!e.loop),
                (this._target = r),
                (this._prop = n),
                (this._from = o),
                (this._to = i),
                (this._promises = void 0)
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'active',
                  value: function () {
                    return this._active
                  }
                },
                {
                  key: 'update',
                  value: function (t, e, r) {
                    var n = this
                    if (n._active) {
                      n._notify(!1)
                      var i = n._target[n._prop],
                        a = r - n._start,
                        o = n._duration - a
                      ;(n._start = r),
                        (n._duration = Math.floor(Math.max(o, t.duration))),
                        (n._total += a),
                        (n._loop = !!t.loop),
                        (n._to = cr([t.to, e, i, t.from])),
                        (n._from = cr([t.from, i, e]))
                    }
                  }
                },
                {
                  key: 'cancel',
                  value: function () {
                    var t = this
                    t._active && (t.tick(Date.now()), (t._active = !1), t._notify(!1))
                  }
                },
                {
                  key: 'tick',
                  value: function (t) {
                    var e,
                      r = this,
                      n = t - r._start,
                      i = r._duration,
                      a = r._prop,
                      o = r._from,
                      l = r._loop,
                      s = r._to
                    if (((r._active = o !== s && (l || n < i)), !r._active))
                      return (r._target[a] = s), void r._notify(!0)
                    n < 0
                      ? (r._target[a] = o)
                      : ((e = (n / i) % 2),
                        (e = l && e > 1 ? 2 - e : e),
                        (e = r._easing(Math.min(1, Math.max(0, e)))),
                        (r._target[a] = r._fn(o, s, e)))
                  }
                },
                {
                  key: 'wait',
                  value: function () {
                    var t = this._promises || (this._promises = [])
                    return new Promise(function (e, r) {
                      t.push({ res: e, rej: r })
                    })
                  }
                },
                {
                  key: '_notify',
                  value: function (t) {
                    for (var e = t ? 'res' : 'rej', r = this._promises || [], n = 0; n < r.length; n++) r[n][e]()
                  }
                }
              ]),
              t
            )
          })()
        Ie.set('animation', {
          delay: void 0,
          duration: 1e3,
          easing: 'easeOutQuart',
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0
        })
        var yn = Object.keys(Ie.animation)
        Ie.describe('animation', {
          _fallback: !1,
          _indexable: !1,
          _scriptable: function (t) {
            return 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t
          }
        }),
          Ie.set('animations', {
            colors: { type: 'color', properties: ['color', 'borderColor', 'backgroundColor'] },
            numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius', 'tension'] }
          }),
          Ie.describe('animations', { _fallback: 'animation' }),
          Ie.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: { animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } } },
            hide: {
              animations: {
                colors: { to: 'transparent' },
                visible: {
                  type: 'boolean',
                  easing: 'linear',
                  fn: function (t) {
                    return 0 | t
                  }
                }
              }
            }
          })
        var mn = (function () {
          function t(e, r) {
            Object(f.a)(this, t), (this._chart = e), (this._properties = new Map()), this.configure(r)
          }
          return (
            Object(d.a)(t, [
              {
                key: 'configure',
                value: function (t) {
                  if (st(t)) {
                    var e = this._properties
                    Object.getOwnPropertyNames(t).forEach(function (r) {
                      var n = t[r]
                      if (st(n)) {
                        var i,
                          a = {},
                          o = Object(v.a)(yn)
                        try {
                          for (o.s(); !(i = o.n()).done; ) {
                            var l = i.value
                            a[l] = n[l]
                          }
                        } catch (s) {
                          o.e(s)
                        } finally {
                          o.f()
                        }
                        ;((lt(n.properties) && n.properties) || [r]).forEach(function (t) {
                          ;(t !== r && e.has(t)) || e.set(t, a)
                        })
                      }
                    })
                  }
                }
              },
              {
                key: '_animateOptions',
                value: function (t, e) {
                  var r = e.options,
                    n = (function (t, e) {
                      if (!e) return
                      var r = t.options
                      if (!r) return void (t.options = e)
                      r.$shared && (t.options = r = Object.assign({}, r, { $shared: !1, $animations: {} }))
                      return r
                    })(t, r)
                  if (!n) return []
                  var i = this._createAnimations(n, r)
                  return (
                    r.$shared &&
                      (function (t, e) {
                        for (var r = [], n = Object.keys(e), i = 0; i < n.length; i++) {
                          var a = t[n[i]]
                          a && a.active() && r.push(a.wait())
                        }
                        return Promise.all(r)
                      })(t.options.$animations, r).then(
                        function () {
                          t.options = r
                        },
                        function () {}
                      ),
                    i
                  )
                }
              },
              {
                key: '_createAnimations',
                value: function (t, e) {
                  var r,
                    n = this._properties,
                    i = [],
                    a = t.$animations || (t.$animations = {}),
                    o = Object.keys(e),
                    l = Date.now()
                  for (r = o.length - 1; r >= 0; --r) {
                    var s = o[r]
                    if ('$' !== s.charAt(0))
                      if ('options' !== s) {
                        var c = e[s],
                          h = a[s],
                          f = n.get(s)
                        if (h) {
                          if (f && h.active()) {
                            h.update(f, c, l)
                            continue
                          }
                          h.cancel()
                        }
                        f && f.duration ? ((a[s] = h = new gn(f, t, s, c)), i.push(h)) : (t[s] = c)
                      } else i.push.apply(i, Object(u.a)(this._animateOptions(t, e)))
                  }
                  return i
                }
              },
              {
                key: 'update',
                value: function (t, e) {
                  if (0 !== this._properties.size) {
                    var r = this._createAnimations(t, e)
                    return r.length ? (dn.add(this._chart, r), !0) : void 0
                  }
                  Object.assign(t, e)
                }
              }
            ]),
            t
          )
        })()
        function bn(t, e) {
          var r = (t && t.options) || {},
            n = r.reverse,
            i = void 0 === r.min ? e : 0,
            a = void 0 === r.max ? e : 0
          return { start: n ? a : i, end: n ? i : a }
        }
        function kn(t, e) {
          var r,
            n,
            i = [],
            a = t._getSortedDatasetMetas(e)
          for (r = 0, n = a.length; r < n; ++r) i.push(a[r].index)
          return i
        }
        function xn(t, e, r, n) {
          var i,
            a,
            o,
            l,
            s = t.keys,
            c = 'single' === n.mode
          if (null !== e) {
            for (i = 0, a = s.length; i < a; ++i) {
              if ((o = +s[i]) === r) {
                if (n.all) continue
                break
              }
              ;(l = t.values[o]), ct(l) && (c || 0 === e || Bt(e) === Bt(l)) && (e += l)
            }
            return e
          }
        }
        function Mn(t, e) {
          var r = t && t.options.stacked
          return r || (void 0 === r && void 0 !== e.stack)
        }
        function _n(t, e, r) {
          var n = t[e] || (t[e] = {})
          return n[r] || (n[r] = {})
        }
        function zn(t, e, r) {
          var n,
            i = Object(v.a)(e.getMatchingVisibleMetas('bar').reverse())
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var a = n.value,
                o = t[a.index]
              if ((r && o > 0) || (!r && o < 0)) return a.index
            }
          } catch (l) {
            i.e(l)
          } finally {
            i.f()
          }
          return null
        }
        function wn(t, e) {
          for (
            var r,
              n = t.chart,
              i = t._cachedMeta,
              a = n._stacks || (n._stacks = {}),
              o = i.iScale,
              l = i.vScale,
              s = i.index,
              c = o.axis,
              u = l.axis,
              h = (function (t, e, r) {
                return ''
                  .concat(t.id, '.')
                  .concat(e.id, '.')
                  .concat(r.stack || r.type)
              })(o, l, i),
              f = e.length,
              d = 0;
            d < f;
            ++d
          ) {
            var v = e[d],
              p = v[c],
              g = v[u]
            ;((r = (v._stacks || (v._stacks = {}))[u] = _n(a, h, p))[s] = g),
              (r._top = zn(r, l, !0)),
              (r._bottom = zn(r, l, !1))
          }
        }
        function On(t, e) {
          var r = t.scales
          return Object.keys(r)
            .filter(function (t) {
              return r[t].axis === e
            })
            .shift()
        }
        function Cn(t, e) {
          var r = t.controller.index,
            n = t.vScale && t.vScale.axis
          if (n) {
            e = e || t._parsed
            var i,
              a = Object(v.a)(e)
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var o = i.value._stacks
                if (!o || void 0 === o[n] || void 0 === o[n][r]) return
                delete o[n][r]
              }
            } catch (l) {
              a.e(l)
            } finally {
              a.f()
            }
          }
        }
        var jn = function (t) {
            return 'reset' === t || 'none' === t
          },
          Sn = function (t, e) {
            return e ? t : Object.assign({}, t)
          },
          Fn = (function () {
            function t(e, r) {
              Object(f.a)(this, t),
                (this.chart = e),
                (this._ctx = e.ctx),
                (this.index = r),
                (this._cachedDataOpts = {}),
                (this._cachedMeta = this.getMeta()),
                (this._type = this._cachedMeta.type),
                (this.options = void 0),
                (this._parsing = !1),
                (this._data = void 0),
                (this._objectData = void 0),
                (this._sharedOptions = void 0),
                (this._drawStart = void 0),
                (this._drawCount = void 0),
                (this.enableOptionSharing = !1),
                (this.$context = void 0),
                (this._syncList = []),
                this.initialize()
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'initialize',
                  value: function () {
                    var t = this,
                      e = t._cachedMeta
                    t.configure(), t.linkScales(), (e._stacked = Mn(e.vScale, e)), t.addElements()
                  }
                },
                {
                  key: 'updateIndex',
                  value: function (t) {
                    this.index !== t && Cn(this._cachedMeta), (this.index = t)
                  }
                },
                {
                  key: 'linkScales',
                  value: function () {
                    var t = this,
                      e = t.chart,
                      r = t._cachedMeta,
                      n = t.getDataset(),
                      i = function (t, e, r, n) {
                        return 'x' === t ? e : 'r' === t ? n : r
                      },
                      a = (r.xAxisID = ht(n.xAxisID, On(e, 'x'))),
                      o = (r.yAxisID = ht(n.yAxisID, On(e, 'y'))),
                      l = (r.rAxisID = ht(n.rAxisID, On(e, 'r'))),
                      s = r.indexAxis,
                      c = (r.iAxisID = i(s, a, o, l)),
                      u = (r.vAxisID = i(s, o, a, l))
                    ;(r.xScale = t.getScaleForId(a)),
                      (r.yScale = t.getScaleForId(o)),
                      (r.rScale = t.getScaleForId(l)),
                      (r.iScale = t.getScaleForId(c)),
                      (r.vScale = t.getScaleForId(u))
                  }
                },
                {
                  key: 'getDataset',
                  value: function () {
                    return this.chart.data.datasets[this.index]
                  }
                },
                {
                  key: 'getMeta',
                  value: function () {
                    return this.chart.getDatasetMeta(this.index)
                  }
                },
                {
                  key: 'getScaleForId',
                  value: function (t) {
                    return this.chart.scales[t]
                  }
                },
                {
                  key: '_getOtherScale',
                  value: function (t) {
                    var e = this._cachedMeta
                    return t === e.iScale ? e.vScale : e.iScale
                  }
                },
                {
                  key: 'reset',
                  value: function () {
                    this._update('reset')
                  }
                },
                {
                  key: '_destroy',
                  value: function () {
                    var t = this._cachedMeta
                    this._data && vr(this._data, this), t._stacked && Cn(t)
                  }
                },
                {
                  key: '_dataCheck',
                  value: function () {
                    var t,
                      e,
                      r = this,
                      n = r.getDataset(),
                      i = n.data || (n.data = []),
                      a = r._data
                    if (st(i))
                      r._data = (function (t) {
                        var e,
                          r,
                          n,
                          i = Object.keys(t),
                          a = new Array(i.length)
                        for (e = 0, r = i.length; e < r; ++e) (n = i[e]), (a[e] = { x: n, y: t[n] })
                        return a
                      })(i)
                    else if (a !== i) {
                      if (a) {
                        vr(a, r)
                        var o = r._cachedMeta
                        Cn(o), (o._parsed = [])
                      }
                      i &&
                        Object.isExtensible(i) &&
                        ((e = r),
                        (t = i)._chartjs
                          ? t._chartjs.listeners.push(e)
                          : (Object.defineProperty(t, '_chartjs', {
                              configurable: !0,
                              enumerable: !1,
                              value: { listeners: [e] }
                            }),
                            dr.forEach(function (e) {
                              var r = '_onData' + zt(e),
                                n = t[e]
                              Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                  for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++)
                                    i[a] = arguments[a]
                                  var o = n.apply(this, i)
                                  return (
                                    t._chartjs.listeners.forEach(function (t) {
                                      'function' === typeof t[r] && t[r].apply(t, i)
                                    }),
                                    o
                                  )
                                }
                              })
                            }))),
                        (r._syncList = []),
                        (r._data = i)
                    }
                  }
                },
                {
                  key: 'addElements',
                  value: function () {
                    var t = this,
                      e = t._cachedMeta
                    t._dataCheck(), t.datasetElementType && (e.dataset = new t.datasetElementType())
                  }
                },
                {
                  key: 'buildOrUpdateElements',
                  value: function (t) {
                    var e = this,
                      r = e._cachedMeta,
                      n = e.getDataset(),
                      i = !1
                    e._dataCheck()
                    var a = r._stacked
                    ;(r._stacked = Mn(r.vScale, r)),
                      r.stack !== n.stack && ((i = !0), Cn(r), (r.stack = n.stack)),
                      e._resyncElements(t),
                      (i || a !== r._stacked) && wn(e, r._parsed)
                  }
                },
                {
                  key: 'configure',
                  value: function () {
                    var t = this,
                      e = t.chart.config,
                      r = e.datasetScopeKeys(t._type),
                      n = e.getOptionScopes(t.getDataset(), r, !0)
                    ;(t.options = e.createResolver(n, t.getContext())), (t._parsing = t.options.parsing)
                  }
                },
                {
                  key: 'parse',
                  value: function (t, e) {
                    var r,
                      n,
                      i,
                      a = this,
                      o = a._cachedMeta,
                      l = a._data,
                      s = o.iScale,
                      c = o._stacked,
                      u = s.axis,
                      h = (0 === t && e === l.length) || o._sorted,
                      f = t > 0 && o._parsed[t - 1]
                    if (!1 === a._parsing) (o._parsed = l), (o._sorted = !0), (i = l)
                    else {
                      i = lt(l[t])
                        ? a.parseArrayData(o, l, t, e)
                        : st(l[t])
                        ? a.parseObjectData(o, l, t, e)
                        : a.parsePrimitiveData(o, l, t, e)
                      for (r = 0; r < e; ++r)
                        (o._parsed[r + t] = n = i[r]), h && ((null === n[u] || (f && n[u] < f[u])) && (h = !1), (f = n))
                      o._sorted = h
                    }
                    c && wn(a, i)
                  }
                },
                {
                  key: 'parsePrimitiveData',
                  value: function (t, e, r, n) {
                    var i,
                      a,
                      o,
                      l = t.iScale,
                      s = t.vScale,
                      c = l.axis,
                      u = s.axis,
                      f = l.getLabels(),
                      d = l === s,
                      v = new Array(n)
                    for (i = 0, a = n; i < a; ++i) {
                      var p
                      ;(o = i + r),
                        (v[i] =
                          ((p = {}), Object(h.a)(p, c, d || l.parse(f[o], o)), Object(h.a)(p, u, s.parse(e[o], o)), p))
                    }
                    return v
                  }
                },
                {
                  key: 'parseArrayData',
                  value: function (t, e, r, n) {
                    var i,
                      a,
                      o,
                      l,
                      s = t.xScale,
                      c = t.yScale,
                      u = new Array(n)
                    for (i = 0, a = n; i < a; ++i)
                      (l = e[(o = i + r)]), (u[i] = { x: s.parse(l[0], o), y: c.parse(l[1], o) })
                    return u
                  }
                },
                {
                  key: 'parseObjectData',
                  value: function (t, e, r, n) {
                    var i,
                      a,
                      o,
                      l,
                      s = t.xScale,
                      c = t.yScale,
                      u = this._parsing,
                      h = u.xAxisKey,
                      f = void 0 === h ? 'x' : h,
                      d = u.yAxisKey,
                      v = void 0 === d ? 'y' : d,
                      p = new Array(n)
                    for (i = 0, a = n; i < a; ++i)
                      (l = e[(o = i + r)]), (p[i] = { x: s.parse(_t(l, f), o), y: c.parse(_t(l, v), o) })
                    return p
                  }
                },
                {
                  key: 'getParsed',
                  value: function (t) {
                    return this._cachedMeta._parsed[t]
                  }
                },
                {
                  key: 'getDataElement',
                  value: function (t) {
                    return this._cachedMeta.data[t]
                  }
                },
                {
                  key: 'applyStack',
                  value: function (t, e, r) {
                    var n = this.chart,
                      i = this._cachedMeta,
                      a = e[t.axis]
                    return xn({ keys: kn(n, !0), values: e._stacks[t.axis] }, a, i.index, { mode: r })
                  }
                },
                {
                  key: 'updateRangeFromParsed',
                  value: function (t, e, r, n) {
                    var i = r[e.axis],
                      a = null === i ? NaN : i,
                      o = n && r._stacks[e.axis]
                    n &&
                      o &&
                      ((n.values = o),
                      (t.min = Math.min(t.min, a)),
                      (t.max = Math.max(t.max, a)),
                      (a = xn(n, i, this._cachedMeta.index, { all: !0 }))),
                      (t.min = Math.min(t.min, a)),
                      (t.max = Math.max(t.max, a))
                  }
                },
                {
                  key: 'getMinMax',
                  value: function (t, e) {
                    var r,
                      n,
                      i,
                      a,
                      o = this,
                      l = o._cachedMeta,
                      s = l._parsed,
                      c = l._sorted && t === l.iScale,
                      u = s.length,
                      h = o._getOtherScale(t),
                      f = e && l._stacked && { keys: kn(o.chart, !0), values: null },
                      d = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
                      v = (function (t) {
                        var e = t.getUserBounds(),
                          r = e.min,
                          n = e.max,
                          i = e.minDefined,
                          a = e.maxDefined
                        return { min: i ? r : Number.NEGATIVE_INFINITY, max: a ? n : Number.POSITIVE_INFINITY }
                      })(h),
                      p = v.min,
                      g = v.max
                    function y() {
                      return (i = s[r]), (n = i[t.axis]), (a = i[h.axis]), !ct(n) || p > a || g < a
                    }
                    for (r = 0; r < u && (y() || (o.updateRangeFromParsed(d, t, i, f), !c)); ++r);
                    if (c)
                      for (r = u - 1; r >= 0; --r)
                        if (!y()) {
                          o.updateRangeFromParsed(d, t, i, f)
                          break
                        }
                    return d
                  }
                },
                {
                  key: 'getAllParsedValues',
                  value: function (t) {
                    var e,
                      r,
                      n,
                      i = this._cachedMeta._parsed,
                      a = []
                    for (e = 0, r = i.length; e < r; ++e) (n = i[e][t.axis]), ct(n) && a.push(n)
                    return a
                  }
                },
                {
                  key: 'getMaxOverflow',
                  value: function () {
                    return !1
                  }
                },
                {
                  key: 'getLabelAndValue',
                  value: function (t) {
                    var e = this._cachedMeta,
                      r = e.iScale,
                      n = e.vScale,
                      i = this.getParsed(t)
                    return {
                      label: r ? '' + r.getLabelForValue(i[r.axis]) : '',
                      value: n ? '' + n.getLabelForValue(i[n.axis]) : ''
                    }
                  }
                },
                {
                  key: '_update',
                  value: function (t) {
                    var e = this,
                      r = e._cachedMeta
                    e.configure(),
                      (e._cachedDataOpts = {}),
                      e.update(t || 'default'),
                      (r._clip = (function (t) {
                        var e, r, n, i
                        return (
                          st(t) ? ((e = t.top), (r = t.right), (n = t.bottom), (i = t.left)) : (e = r = n = i = t),
                          { top: e, right: r, bottom: n, left: i, disabled: !1 === t }
                        )
                      })(
                        ht(
                          e.options.clip,
                          (function (t, e, r) {
                            if (!1 === r) return !1
                            var n = bn(t, r),
                              i = bn(e, r)
                            return { top: i.end, right: n.end, bottom: i.start, left: n.start }
                          })(r.xScale, r.yScale, e.getMaxOverflow())
                        )
                      ))
                  }
                },
                { key: 'update', value: function (t) {} },
                {
                  key: 'draw',
                  value: function () {
                    var t,
                      e = this,
                      r = e._ctx,
                      n = e.chart,
                      i = e._cachedMeta,
                      a = i.data || [],
                      o = n.chartArea,
                      l = [],
                      s = e._drawStart || 0,
                      c = e._drawCount || a.length - s
                    for (i.dataset && i.dataset.draw(r, o, s, c), t = s; t < s + c; ++t) {
                      var u = a[t]
                      u.hidden || (u.active ? l.push(u) : u.draw(r, o))
                    }
                    for (t = 0; t < l.length; ++t) l[t].draw(r, o)
                  }
                },
                {
                  key: 'getStyle',
                  value: function (t, e) {
                    var r = e ? 'active' : 'default'
                    return void 0 === t && this._cachedMeta.dataset
                      ? this.resolveDatasetElementOptions(r)
                      : this.resolveDataElementOptions(t || 0, r)
                  }
                },
                {
                  key: 'getContext',
                  value: function (t, e, r) {
                    var n,
                      i = this,
                      a = i.getDataset()
                    if (t >= 0 && t < i._cachedMeta.data.length) {
                      var o = i._cachedMeta.data[t]
                      ;(n =
                        o.$context ||
                        (o.$context = (function (t, e, r) {
                          return Object.assign(Object.create(t), {
                            active: !1,
                            dataIndex: e,
                            parsed: void 0,
                            raw: void 0,
                            element: r,
                            index: e,
                            mode: 'default',
                            type: 'data'
                          })
                        })(i.getContext(), t, o))),
                        (n.parsed = i.getParsed(t)),
                        (n.raw = a.data[t]),
                        (n.index = n.dataIndex = t)
                    } else
                      (n =
                        i.$context ||
                        (i.$context = (function (t, e) {
                          return Object.assign(Object.create(t), {
                            active: !1,
                            dataset: void 0,
                            datasetIndex: e,
                            index: e,
                            mode: 'default',
                            type: 'dataset'
                          })
                        })(i.chart.getContext(), i.index))),
                        (n.dataset = a),
                        (n.index = n.datasetIndex = i.index)
                    return (n.active = !!e), (n.mode = r), n
                  }
                },
                {
                  key: 'resolveDatasetElementOptions',
                  value: function (t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t)
                  }
                },
                {
                  key: 'resolveDataElementOptions',
                  value: function (t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t)
                  }
                },
                {
                  key: '_resolveElementOptions',
                  value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default',
                      r = arguments.length > 2 ? arguments[2] : void 0,
                      n = this,
                      i = 'active' === e,
                      a = n._cachedDataOpts,
                      o = t + '-' + e,
                      l = a[o],
                      s = n.enableOptionSharing && wt(r)
                    if (l) return Sn(l, s)
                    var c = n.chart.config,
                      u = c.datasetElementScopeKeys(n._type, t),
                      h = i ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
                      f = c.getOptionScopes(n.getDataset(), u),
                      d = Object.keys(Ie.elements[t]),
                      v = function () {
                        return n.getContext(r, i)
                      },
                      p = c.resolveNamedOptions(f, d, v, h)
                    return p.$shared && ((p.$shared = s), (a[o] = Object.freeze(Sn(p, s)))), p
                  }
                },
                {
                  key: '_resolveAnimations',
                  value: function (t, e, r) {
                    var n,
                      i = this,
                      a = i.chart,
                      o = i._cachedDataOpts,
                      l = 'animation-'.concat(e),
                      s = o[l]
                    if (s) return s
                    if (!1 !== a.options.animation) {
                      var c = i.chart.config,
                        u = c.datasetAnimationScopeKeys(i._type, e),
                        h = c.getOptionScopes(i.getDataset(), u)
                      n = c.createResolver(h, i.getContext(t, r, e))
                    }
                    var f = new mn(a, n && n.animations)
                    return n && n._cacheable && (o[l] = Object.freeze(f)), f
                  }
                },
                {
                  key: 'getSharedOptions',
                  value: function (t) {
                    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                  }
                },
                {
                  key: 'includeOptions',
                  value: function (t, e) {
                    return !e || jn(t) || this.chart._animationsDisabled
                  }
                },
                {
                  key: 'updateElement',
                  value: function (t, e, r, n) {
                    jn(n) ? Object.assign(t, r) : this._resolveAnimations(e, n).update(t, r)
                  }
                },
                {
                  key: 'updateSharedOptions',
                  value: function (t, e, r) {
                    t && !jn(e) && this._resolveAnimations(void 0, e).update(t, r)
                  }
                },
                {
                  key: '_setStyle',
                  value: function (t, e, r, n) {
                    t.active = n
                    var i = this.getStyle(e, n)
                    this._resolveAnimations(e, r, n).update(t, { options: (!n && this.getSharedOptions(i)) || i })
                  }
                },
                {
                  key: 'removeHoverStyle',
                  value: function (t, e, r) {
                    this._setStyle(t, r, 'active', !1)
                  }
                },
                {
                  key: 'setHoverStyle',
                  value: function (t, e, r) {
                    this._setStyle(t, r, 'active', !0)
                  }
                },
                {
                  key: '_removeDatasetHoverStyle',
                  value: function () {
                    var t = this._cachedMeta.dataset
                    t && this._setStyle(t, void 0, 'active', !1)
                  }
                },
                {
                  key: '_setDatasetHoverStyle',
                  value: function () {
                    var t = this._cachedMeta.dataset
                    t && this._setStyle(t, void 0, 'active', !0)
                  }
                },
                {
                  key: '_resyncElements',
                  value: function (t) {
                    var e,
                      r = this,
                      n = r._data,
                      i = r._cachedMeta.data,
                      a = Object(v.a)(r._syncList)
                    try {
                      for (a.s(); !(e = a.n()).done; ) {
                        var o = Object(c.a)(e.value, 3),
                          l = o[0],
                          s = o[1],
                          u = o[2]
                        r[l](s, u)
                      }
                    } catch (p) {
                      a.e(p)
                    } finally {
                      a.f()
                    }
                    r._syncList = []
                    var h = i.length,
                      f = n.length,
                      d = Math.min(f, h)
                    d && r.parse(0, d), f > h ? r._insertElements(h, f - h, t) : f < h && r._removeElements(f, h - f)
                  }
                },
                {
                  key: '_insertElements',
                  value: function (t, e) {
                    var r,
                      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                      i = this,
                      a = i._cachedMeta,
                      o = a.data,
                      l = t + e,
                      s = function (t) {
                        for (t.length += e, r = t.length - 1; r >= l; r--) t[r] = t[r - e]
                      }
                    for (s(o), r = t; r < l; ++r) o[r] = new i.dataElementType()
                    i._parsing && s(a._parsed), i.parse(t, e), n && i.updateElements(o, t, e, 'reset')
                  }
                },
                { key: 'updateElements', value: function (t, e, r, n) {} },
                {
                  key: '_removeElements',
                  value: function (t, e) {
                    var r = this._cachedMeta
                    if (this._parsing) {
                      var n = r._parsed.splice(t, e)
                      r._stacked && Cn(r, n)
                    }
                    r.data.splice(t, e)
                  }
                },
                {
                  key: '_sync',
                  value: function (t) {
                    if (this._parsing) this._syncList.push(t)
                    else {
                      var e = Object(c.a)(t, 3),
                        r = e[0],
                        n = e[1],
                        i = e[2]
                      this[r](n, i)
                    }
                  }
                },
                {
                  key: '_onDataPush',
                  value: function () {
                    var t = arguments.length
                    this._sync(['_insertElements', this.getDataset().data.length - t, t])
                  }
                },
                {
                  key: '_onDataPop',
                  value: function () {
                    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
                  }
                },
                {
                  key: '_onDataShift',
                  value: function () {
                    this._sync(['_removeElements', 0, 1])
                  }
                },
                {
                  key: '_onDataSplice',
                  value: function (t, e) {
                    this._sync(['_removeElements', t, e]), this._sync(['_insertElements', t, arguments.length - 2])
                  }
                },
                {
                  key: '_onDataUnshift',
                  value: function () {
                    this._sync(['_insertElements', 0, arguments.length])
                  }
                }
              ]),
              t
            )
          })()
        function Pn(t) {
          var e,
            r,
            n,
            i,
            a = (function (t) {
              if (!t._cache.$bar) {
                for (var e = t.getMatchingVisibleMetas('bar'), r = [], n = 0, i = e.length; n < i; n++)
                  r = r.concat(e[n].controller.getAllParsedValues(t))
                t._cache.$bar = pr(
                  r.sort(function (t, e) {
                    return t - e
                  })
                )
              }
              return t._cache.$bar
            })(t),
            o = t._length,
            l = function () {
              32767 !== n && -32768 !== n && (wt(i) && (o = Math.min(o, Math.abs(n - i) || o)), (i = n))
            }
          for (e = 0, r = a.length; e < r; ++e) (n = t.getPixelForValue(a[e])), l()
          for (i = void 0, e = 0, r = t.ticks.length; e < r; ++e) (n = t.getPixelForTick(e)), l()
          return o
        }
        function Dn(t, e, r, n) {
          return (
            lt(t)
              ? (function (t, e, r, n) {
                  var i = r.parse(t[0], n),
                    a = r.parse(t[1], n),
                    o = Math.min(i, a),
                    l = Math.max(i, a),
                    s = o,
                    c = l
                  Math.abs(o) > Math.abs(l) && ((s = l), (c = o)),
                    (e[r.axis] = c),
                    (e._custom = { barStart: s, barEnd: c, start: i, end: a, min: o, max: l })
                })(t, e, r, n)
              : (e[r.axis] = r.parse(t, n)),
            e
          )
        }
        function An(t, e, r, n) {
          var i,
            a,
            o,
            l,
            s = t.iScale,
            c = t.vScale,
            u = s.getLabels(),
            h = s === c,
            f = []
          for (i = r, a = r + n; i < a; ++i)
            (l = e[i]), ((o = {})[s.axis] = h || s.parse(u[i], i)), f.push(Dn(l, o, c, i))
          return f
        }
        function En(t) {
          return t && void 0 !== t.barStart && void 0 !== t.barEnd
        }
        function Tn(t, e, r, n) {
          var i = e.borderSkipped,
            a = {}
          if (i) {
            var o = (function (t) {
                var e, r, n, i, a
                return (
                  t.horizontal
                    ? ((e = t.base > t.x), (r = 'left'), (n = 'right'))
                    : ((e = t.base < t.y), (r = 'bottom'), (n = 'top')),
                  e ? ((i = 'end'), (a = 'start')) : ((i = 'start'), (a = 'end')),
                  { start: r, end: n, reverse: e, top: i, bottom: a }
                )
              })(t),
              l = o.start,
              s = o.end,
              c = o.reverse,
              u = o.top,
              h = o.bottom
            'middle' === i &&
              r &&
              ((t.enableBorderRadius = !0),
              (r._top || 0) === n ? (i = u) : (r._bottom || 0) === n ? (i = h) : ((a[Bn(h, l, s, c)] = !0), (i = u))),
              (a[Bn(i, l, s, c)] = !0),
              (t.borderSkipped = a)
          } else t.borderSkipped = a
        }
        function Bn(t, e, r, n) {
          var i, a, o
          return n ? ((o = r), (t = Ln((t = (i = t) === (a = e) ? o : i === o ? a : i), r, e))) : (t = Ln(t, e, r)), t
        }
        function Ln(t, e, r) {
          return 'start' === t ? e : 'end' === t ? r : t
        }
        ;(Fn.defaults = {}), (Fn.prototype.datasetElementType = null), (Fn.prototype.dataElementType = null)
        var Rn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return (
            Object(d.a)(r, [
              {
                key: 'parsePrimitiveData',
                value: function (t, e, r, n) {
                  return An(t, e, r, n)
                }
              },
              {
                key: 'parseArrayData',
                value: function (t, e, r, n) {
                  return An(t, e, r, n)
                }
              },
              {
                key: 'parseObjectData',
                value: function (t, e, r, n) {
                  var i,
                    a,
                    o,
                    l,
                    s = t.iScale,
                    c = t.vScale,
                    u = this._parsing,
                    h = u.xAxisKey,
                    f = void 0 === h ? 'x' : h,
                    d = u.yAxisKey,
                    v = void 0 === d ? 'y' : d,
                    p = 'x' === s.axis ? f : v,
                    g = 'x' === c.axis ? f : v,
                    y = []
                  for (i = r, a = r + n; i < a; ++i)
                    (l = e[i]), ((o = {})[s.axis] = s.parse(_t(l, p), i)), y.push(Dn(_t(l, g), o, c, i))
                  return y
                }
              },
              {
                key: 'updateRangeFromParsed',
                value: function (t, e, n, i) {
                  Object(a.a)(Object(o.a)(r.prototype), 'updateRangeFromParsed', this).call(this, t, e, n, i)
                  var l = n._custom
                  l &&
                    e === this._cachedMeta.vScale &&
                    ((t.min = Math.min(t.min, l.min)), (t.max = Math.max(t.max, l.max)))
                }
              },
              {
                key: 'getMaxOverflow',
                value: function () {
                  return 0
                }
              },
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta,
                    r = e.iScale,
                    n = e.vScale,
                    i = this.getParsed(t),
                    a = i._custom,
                    o = En(a) ? '[' + a.start + ', ' + a.end + ']' : '' + n.getLabelForValue(i[n.axis])
                  return { label: '' + r.getLabelForValue(i[r.axis]), value: o }
                }
              },
              {
                key: 'initialize',
                value: function () {
                  var t = this
                  ;(t.enableOptionSharing = !0),
                    Object(a.a)(Object(o.a)(r.prototype), 'initialize', this).call(this),
                    (t._cachedMeta.stack = t.getDataset().stack)
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this._cachedMeta
                  this.updateElements(e.data, 0, e.data.length, t)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  var i = this,
                    a = 'reset' === n,
                    o = i.index,
                    l = i._cachedMeta.vScale,
                    s = l.getBasePixel(),
                    c = l.isHorizontal(),
                    u = i._getRuler(),
                    h = i.resolveDataElementOptions(e, n),
                    f = i.getSharedOptions(h),
                    d = i.includeOptions(n, f)
                  i.updateSharedOptions(f, n, h)
                  for (var v = e; v < e + r; v++) {
                    var p = i.getParsed(v),
                      g = a || ot(p[l.axis]) ? { base: s, head: s } : i._calculateBarValuePixels(v),
                      y = i._calculateBarIndexPixels(v, u),
                      m = (p._stacks || {})[l.axis],
                      b = {
                        horizontal: c,
                        base: g.base,
                        enableBorderRadius: !m || En(p._custom) || o === m._top || o === m._bottom,
                        x: c ? g.head : y.center,
                        y: c ? y.center : g.head,
                        height: c ? y.size : Math.abs(g.size),
                        width: c ? Math.abs(g.size) : y.size
                      }
                    d && (b.options = f || i.resolveDataElementOptions(v, t[v].active ? 'active' : n)),
                      Tn(b, b.options || t[v].options, m, o),
                      i.updateElement(t[v], v, b, n)
                  }
                }
              },
              {
                key: '_getStacks',
                value: function (t, e) {
                  var r,
                    n,
                    i = this._cachedMeta.iScale,
                    a = i.getMatchingVisibleMetas(this._type),
                    o = i.options.stacked,
                    l = a.length,
                    s = []
                  for (r = 0; r < l; ++r)
                    if ((n = a[r]).controller.options.grouped) {
                      if ('undefined' !== typeof e) {
                        var c = n.controller.getParsed(e)[n.controller._cachedMeta.vScale.axis]
                        if (ot(c) || isNaN(c)) continue
                      }
                      if (
                        ((!1 === o || -1 === s.indexOf(n.stack) || (void 0 === o && void 0 === n.stack)) &&
                          s.push(n.stack),
                        n.index === t)
                      )
                        break
                    }
                  return s.length || s.push(void 0), s
                }
              },
              {
                key: '_getStackCount',
                value: function (t) {
                  return this._getStacks(void 0, t).length
                }
              },
              {
                key: '_getStackIndex',
                value: function (t, e, r) {
                  var n = this._getStacks(t, r),
                    i = void 0 !== e ? n.indexOf(e) : -1
                  return -1 === i ? n.length - 1 : i
                }
              },
              {
                key: '_getRuler',
                value: function () {
                  var t,
                    e,
                    r = this,
                    n = r.options,
                    i = r._cachedMeta,
                    a = i.iScale,
                    o = []
                  for (t = 0, e = i.data.length; t < e; ++t) o.push(a.getPixelForValue(r.getParsed(t)[a.axis], t))
                  var l = n.barThickness
                  return {
                    min: l || Pn(a),
                    pixels: o,
                    start: a._startPixel,
                    end: a._endPixel,
                    stackCount: r._getStackCount(),
                    scale: a,
                    grouped: n.grouped,
                    ratio: l ? 1 : n.categoryPercentage * n.barPercentage
                  }
                }
              },
              {
                key: '_calculateBarValuePixels',
                value: function (t) {
                  var e,
                    r,
                    n = this,
                    i = n._cachedMeta,
                    a = i.vScale,
                    o = i._stacked,
                    l = n.options,
                    s = l.base,
                    c = l.minBarLength,
                    u = s || 0,
                    h = n.getParsed(t),
                    f = h._custom,
                    d = En(f),
                    v = h[a.axis],
                    p = 0,
                    g = o ? n.applyStack(a, h, o) : v
                  g !== v && ((p = g - v), (g = v)),
                    d &&
                      ((v = f.barStart),
                      (g = f.barEnd - f.barStart),
                      0 !== v && Bt(v) !== Bt(f.barEnd) && (p = 0),
                      (p += v))
                  var y = ot(s) || d ? p : s,
                    m = a.getPixelForValue(y)
                  if (
                    ((r = (e = n.chart.getDataVisibility(t) ? a.getPixelForValue(p + g) : m) - m),
                    Math.abs(r) < c &&
                      ((r =
                        (function (t, e, r) {
                          return 0 !== t ? Bt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= r ? 1 : -1)
                        })(r, a, u) * c),
                      v === u && (m -= r / 2),
                      (e = m + r)),
                    m === a.getPixelForValue(u))
                  ) {
                    var b = (Bt(r) * a.getLineWidthForValue(u)) / 2
                    ;(m += b), (r -= b)
                  }
                  return { size: r, base: m, head: e, center: e + r / 2 }
                }
              },
              {
                key: '_calculateBarIndexPixels',
                value: function (t, e) {
                  var r,
                    n,
                    i = this,
                    a = e.scale,
                    o = i.options,
                    l = o.skipNull,
                    s = ht(o.maxBarThickness, 1 / 0)
                  if (e.grouped) {
                    var c = l ? i._getStackCount(t) : e.stackCount,
                      u =
                        'flex' === o.barThickness
                          ? (function (t, e, r, n) {
                              var i = e.pixels,
                                a = i[t],
                                o = t > 0 ? i[t - 1] : null,
                                l = t < i.length - 1 ? i[t + 1] : null,
                                s = r.categoryPercentage
                              null === o && (o = a - (null === l ? e.end - e.start : l - a)),
                                null === l && (l = a + a - o)
                              var c = a - ((a - Math.min(o, l)) / 2) * s
                              return { chunk: ((Math.abs(l - o) / 2) * s) / n, ratio: r.barPercentage, start: c }
                            })(t, e, o, c)
                          : (function (t, e, r, n) {
                              var i,
                                a,
                                o = r.barThickness
                              return (
                                ot(o)
                                  ? ((i = e.min * r.categoryPercentage), (a = r.barPercentage))
                                  : ((i = o * n), (a = 1)),
                                { chunk: i / n, ratio: a, start: e.pixels[t] - i / 2 }
                              )
                            })(t, e, o, c),
                      h = i._getStackIndex(i.index, i._cachedMeta.stack, l ? t : void 0)
                    ;(r = u.start + u.chunk * h + u.chunk / 2), (n = Math.min(s, u.chunk * u.ratio))
                  } else (r = a.getPixelForValue(i.getParsed(t)[a.axis], t)), (n = Math.min(s, e.min * e.ratio))
                  return { base: r - n / 2, head: r + n / 2, center: r, size: n }
                }
              },
              {
                key: 'draw',
                value: function () {
                  for (var t = this, e = t._cachedMeta, r = e.vScale, n = e.data, i = n.length, a = 0; a < i; ++a)
                    null !== t.getParsed(a)[r.axis] && n[a].draw(t._ctx)
                }
              }
            ]),
            r
          )
        })(Fn)
        ;(Rn.id = 'bar'),
          (Rn.defaults = {
            datasetElementType: !1,
            dataElementType: 'bar',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } }
          }),
          (Rn.overrides = {
            scales: {
              _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
              _value_: { type: 'linear', beginAtZero: !0 }
            }
          })
        var In = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return (
            Object(d.a)(r, [
              {
                key: 'initialize',
                value: function () {
                  ;(this.enableOptionSharing = !0), Object(a.a)(Object(o.a)(r.prototype), 'initialize', this).call(this)
                }
              },
              {
                key: 'parseObjectData',
                value: function (t, e, r, n) {
                  var i,
                    a,
                    o,
                    l = t.xScale,
                    s = t.yScale,
                    c = this._parsing,
                    u = c.xAxisKey,
                    h = void 0 === u ? 'x' : u,
                    f = c.yAxisKey,
                    d = void 0 === f ? 'y' : f,
                    v = []
                  for (i = r, a = r + n; i < a; ++i)
                    (o = e[i]), v.push({ x: l.parse(_t(o, h), i), y: s.parse(_t(o, d), i), _custom: o && o.r && +o.r })
                  return v
                }
              },
              {
                key: 'getMaxOverflow',
                value: function () {
                  for (var t = this._cachedMeta, e = t.data, r = t._parsed, n = 0, i = e.length - 1; i >= 0; --i)
                    n = Math.max(n, e[i].size() / 2, r[i]._custom)
                  return n > 0 && n
                }
              },
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta,
                    r = e.xScale,
                    n = e.yScale,
                    i = this.getParsed(t),
                    a = r.getLabelForValue(i.x),
                    o = n.getLabelForValue(i.y),
                    l = i._custom
                  return { label: e.label, value: '(' + a + ', ' + o + (l ? ', ' + l : '') + ')' }
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this._cachedMeta.data
                  this.updateElements(e, 0, e.length, t)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  for (
                    var i = this,
                      a = 'reset' === n,
                      o = i._cachedMeta,
                      l = o.iScale,
                      s = o.vScale,
                      c = i.resolveDataElementOptions(e, n),
                      u = i.getSharedOptions(c),
                      h = i.includeOptions(n, u),
                      f = l.axis,
                      d = s.axis,
                      v = e;
                    v < e + r;
                    v++
                  ) {
                    var p = t[v],
                      g = !a && i.getParsed(v),
                      y = {},
                      m = (y[f] = a ? l.getPixelForDecimal(0.5) : l.getPixelForValue(g[f])),
                      b = (y[d] = a ? s.getBasePixel() : s.getPixelForValue(g[d]))
                    ;(y.skip = isNaN(m) || isNaN(b)),
                      h &&
                        ((y.options = i.resolveDataElementOptions(v, p.active ? 'active' : n)),
                        a && (y.options.radius = 0)),
                      i.updateElement(p, v, y, n)
                  }
                  i.updateSharedOptions(u, n, c)
                }
              },
              {
                key: 'resolveDataElementOptions',
                value: function (t, e) {
                  var n = this.getParsed(t),
                    i = Object(a.a)(Object(o.a)(r.prototype), 'resolveDataElementOptions', this).call(this, t, e)
                  i.$shared && (i = Object.assign({}, i, { $shared: !1 }))
                  var l = i.radius
                  return 'active' !== e && (i.radius = 0), (i.radius += ht(n && n._custom, l)), i
                }
              }
            ]),
            r
          )
        })(Fn)
        ;(In.id = 'bubble'),
          (In.defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } }
          }),
          (In.overrides = {
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
            plugins: {
              tooltip: {
                callbacks: {
                  title: function () {
                    return ''
                  }
                }
              }
            }
          })
        var Vn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t, n) {
            var i
            return (
              Object(f.a)(this, r),
              ((i = e.call(this, t, n)).enableOptionSharing = !0),
              (i.innerRadius = void 0),
              (i.outerRadius = void 0),
              (i.offsetX = void 0),
              (i.offsetY = void 0),
              i
            )
          }
          return (
            Object(d.a)(r, [
              { key: 'linkScales', value: function () {} },
              {
                key: 'parse',
                value: function (t, e) {
                  var r,
                    n,
                    i = this.getDataset().data,
                    a = this._cachedMeta
                  for (r = t, n = t + e; r < n; ++r) a._parsed[r] = +i[r]
                }
              },
              {
                key: '_getRotation',
                value: function () {
                  return Ht(this.options.rotation - 90)
                }
              },
              {
                key: '_getCircumference',
                value: function () {
                  return Ht(this.options.circumference)
                }
              },
              {
                key: '_getRotationExtents',
                value: function () {
                  for (var t = jt, e = -jt, r = this, n = 0; n < r.chart.data.datasets.length; ++n)
                    if (r.chart.isDatasetVisible(n)) {
                      var i = r.chart.getDatasetMeta(n).controller,
                        a = i._getRotation(),
                        o = i._getCircumference()
                      ;(t = Math.min(t, a)), (e = Math.max(e, a + o))
                    }
                  return { rotation: t, circumference: e - t }
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e,
                    r,
                    n = this,
                    i = n.chart.chartArea,
                    a = n._cachedMeta,
                    o = a.data,
                    l = n.getMaxBorderWidth() + n.getMaxOffset(o) + n.options.spacing,
                    s = Math.max((Math.min(i.width, i.height) - l) / 2, 0),
                    c = Math.min(
                      ((e = n.options.cutout),
                      (r = s),
                      'string' === typeof e && e.endsWith('%') ? parseFloat(e) / 100 : e / r),
                      1
                    ),
                    u = n._getRingWeight(n.index),
                    h = n._getRotationExtents(),
                    f = h.circumference,
                    d = (function (t, e, r) {
                      var n = 1,
                        i = 1,
                        a = 0,
                        o = 0
                      if (e < jt) {
                        var l = t,
                          s = l + e,
                          c = Math.cos(l),
                          u = Math.sin(l),
                          h = Math.cos(s),
                          f = Math.sin(s),
                          d = function (t, e, n) {
                            return Xt(t, l, s, !0) ? 1 : Math.max(e, e * r, n, n * r)
                          },
                          v = function (t, e, n) {
                            return Xt(t, l, s, !0) ? -1 : Math.min(e, e * r, n, n * r)
                          },
                          p = d(0, c, h),
                          g = d(Dt, u, f),
                          y = v(Ct, c, h),
                          m = v(Ct + Dt, u, f)
                        ;(n = (p - y) / 2), (i = (g - m) / 2), (a = -(p + y) / 2), (o = -(g + m) / 2)
                      }
                      return { ratioX: n, ratioY: i, offsetX: a, offsetY: o }
                    })(h.rotation, f, c),
                    v = d.ratioX,
                    p = d.ratioY,
                    g = d.offsetX,
                    y = d.offsetY,
                    m = (i.width - l) / v,
                    b = (i.height - l) / p,
                    k = Math.max(Math.min(m, b) / 2, 0),
                    x = ft(n.options.radius, k),
                    M = (x - Math.max(x * c, 0)) / n._getVisibleDatasetWeightTotal()
                  ;(n.offsetX = g * x),
                    (n.offsetY = y * x),
                    (a.total = n.calculateTotal()),
                    (n.outerRadius = x - M * n._getRingWeightOffset(n.index)),
                    (n.innerRadius = Math.max(n.outerRadius - M * u, 0)),
                    n.updateElements(o, 0, o.length, t)
                }
              },
              {
                key: '_circumference',
                value: function (t, e) {
                  var r = this,
                    n = r.options,
                    i = r._cachedMeta,
                    a = r._getCircumference()
                  return (e && n.animation.animateRotate) ||
                    !this.chart.getDataVisibility(t) ||
                    null === i._parsed[t] ||
                    i.data[t].hidden
                    ? 0
                    : r.calculateCircumference((i._parsed[t] * a) / jt)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  var i,
                    a = this,
                    o = 'reset' === n,
                    l = a.chart,
                    s = l.chartArea,
                    c = l.options.animation,
                    u = (s.left + s.right) / 2,
                    h = (s.top + s.bottom) / 2,
                    f = o && c.animateScale,
                    d = f ? 0 : a.innerRadius,
                    v = f ? 0 : a.outerRadius,
                    p = a.resolveDataElementOptions(e, n),
                    g = a.getSharedOptions(p),
                    y = a.includeOptions(n, g),
                    m = a._getRotation()
                  for (i = 0; i < e; ++i) m += a._circumference(i, o)
                  for (i = e; i < e + r; ++i) {
                    var b = a._circumference(i, o),
                      k = t[i],
                      x = {
                        x: u + a.offsetX,
                        y: h + a.offsetY,
                        startAngle: m,
                        endAngle: m + b,
                        circumference: b,
                        outerRadius: v,
                        innerRadius: d
                      }
                    y && (x.options = g || a.resolveDataElementOptions(i, k.active ? 'active' : n)),
                      (m += b),
                      a.updateElement(k, i, x, n)
                  }
                  a.updateSharedOptions(g, n, p)
                }
              },
              {
                key: 'calculateTotal',
                value: function () {
                  var t,
                    e = this._cachedMeta,
                    r = e.data,
                    n = 0
                  for (t = 0; t < r.length; t++) {
                    var i = e._parsed[t]
                    null === i || isNaN(i) || !this.chart.getDataVisibility(t) || r[t].hidden || (n += Math.abs(i))
                  }
                  return n
                }
              },
              {
                key: 'calculateCircumference',
                value: function (t) {
                  var e = this._cachedMeta.total
                  return e > 0 && !isNaN(t) ? jt * (Math.abs(t) / e) : 0
                }
              },
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta,
                    r = this.chart,
                    n = r.data.labels || [],
                    i = tn(e._parsed[t], r.options.locale)
                  return { label: n[t] || '', value: i }
                }
              },
              {
                key: 'getMaxBorderWidth',
                value: function (t) {
                  var e,
                    r,
                    n,
                    i,
                    a,
                    o = 0,
                    l = this.chart
                  if (!t)
                    for (e = 0, r = l.data.datasets.length; e < r; ++e)
                      if (l.isDatasetVisible(e)) {
                        ;(t = (n = l.getDatasetMeta(e)).data), (i = n.controller) !== this && i.configure()
                        break
                      }
                  if (!t) return 0
                  for (e = 0, r = t.length; e < r; ++e)
                    'inner' !== (a = i.resolveDataElementOptions(e)).borderAlign &&
                      (o = Math.max(o, a.borderWidth || 0, a.hoverBorderWidth || 0))
                  return o
                }
              },
              {
                key: 'getMaxOffset',
                value: function (t) {
                  for (var e = 0, r = 0, n = t.length; r < n; ++r) {
                    var i = this.resolveDataElementOptions(r)
                    e = Math.max(e, i.offset || 0, i.hoverOffset || 0)
                  }
                  return e
                }
              },
              {
                key: '_getRingWeightOffset',
                value: function (t) {
                  for (var e = 0, r = 0; r < t; ++r) this.chart.isDatasetVisible(r) && (e += this._getRingWeight(r))
                  return e
                }
              },
              {
                key: '_getRingWeight',
                value: function (t) {
                  return Math.max(ht(this.chart.data.datasets[t].weight, 1), 0)
                }
              },
              {
                key: '_getVisibleDatasetWeightTotal',
                value: function () {
                  return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
                }
              }
            ]),
            r
          )
        })(Fn)
        ;(Vn.id = 'doughnut'),
          (Vn.defaults = {
            datasetElementType: !1,
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !1 },
            animations: {
              numbers: {
                type: 'number',
                properties: [
                  'circumference',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                  'startAngle',
                  'x',
                  'y',
                  'offset',
                  'borderWidth',
                  'spacing'
                ]
              }
            },
            cutout: '50%',
            rotation: 0,
            circumference: 360,
            radius: '100%',
            spacing: 0,
            indexAxis: 'r'
          }),
          (Vn.descriptors = {
            _scriptable: function (t) {
              return 'spacing' !== t
            },
            _indexable: function (t) {
              return 'spacing' !== t
            }
          }),
          (Vn.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels: function (t) {
                    var e = t.data
                    if (e.labels.length && e.datasets.length) {
                      var r = t.legend.options.labels.pointStyle
                      return e.labels.map(function (e, n) {
                        var i = t.getDatasetMeta(0).controller.getStyle(n)
                        return {
                          text: e,
                          fillStyle: i.backgroundColor,
                          strokeStyle: i.borderColor,
                          lineWidth: i.borderWidth,
                          pointStyle: r,
                          hidden: !t.getDataVisibility(n),
                          index: n
                        }
                      })
                    }
                    return []
                  }
                },
                onClick: function (t, e, r) {
                  r.chart.toggleDataVisibility(e.index), r.chart.update()
                }
              },
              tooltip: {
                callbacks: {
                  title: function () {
                    return ''
                  },
                  label: function (t) {
                    var e = t.label,
                      r = ': ' + t.formattedValue
                    return lt(e) ? ((e = e.slice())[0] += r) : (e += r), e
                  }
                }
              }
            }
          })
        var Hn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return (
            Object(d.a)(r, [
              {
                key: 'initialize',
                value: function () {
                  ;(this.enableOptionSharing = !0), Object(a.a)(Object(o.a)(r.prototype), 'initialize', this).call(this)
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this,
                    r = e._cachedMeta,
                    n = r.dataset,
                    i = r.data,
                    a = void 0 === i ? [] : i,
                    o = r._dataset,
                    l = e.chart._animationsDisabled,
                    s = (function (t, e, r) {
                      var n = e.length,
                        i = 0,
                        a = n
                      if (t._sorted) {
                        var o = t.iScale,
                          l = t._parsed,
                          s = o.axis,
                          c = o.getUserBounds(),
                          u = c.min,
                          h = c.max,
                          f = c.minDefined,
                          d = c.maxDefined
                        f &&
                          (i = qt(Math.min(hr(l, o.axis, u).lo, r ? n : hr(e, s, o.getPixelForValue(u)).lo), 0, n - 1)),
                          (a = d
                            ? qt(
                                Math.max(hr(l, o.axis, h).hi + 1, r ? 0 : hr(e, s, o.getPixelForValue(h)).hi + 1),
                                i,
                                n
                              ) - i
                            : n - i)
                      }
                      return { start: i, count: a }
                    })(r, a, l),
                    c = s.start,
                    u = s.count
                  ;(e._drawStart = c),
                    (e._drawCount = u),
                    (function (t) {
                      var e = t.xScale,
                        r = t.yScale,
                        n = t._scaleRanges,
                        i = { xmin: e.min, xmax: e.max, ymin: r.min, ymax: r.max }
                      if (!n) return (t._scaleRanges = i), !0
                      var a = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== r.min || n.ymax !== r.max
                      return Object.assign(n, i), a
                    })(r) && ((c = 0), (u = a.length)),
                    (n._datasetIndex = e.index),
                    (n._decimated = !!o._decimated),
                    (n.points = a)
                  var h = e.resolveDatasetElementOptions(t)
                  e.options.showLine || (h.borderWidth = 0),
                    (h.segment = e.options.segment),
                    e.updateElement(n, void 0, { animated: !l, options: h }, t),
                    e.updateElements(a, c, u, t)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  for (
                    var i = this,
                      a = 'reset' === n,
                      o = i._cachedMeta,
                      l = o.iScale,
                      s = o.vScale,
                      c = o._stacked,
                      u = i.resolveDataElementOptions(e, n),
                      h = i.getSharedOptions(u),
                      f = i.includeOptions(n, h),
                      d = l.axis,
                      v = s.axis,
                      p = i.options.spanGaps,
                      g = Rt(p) ? p : Number.POSITIVE_INFINITY,
                      y = i.chart._animationsDisabled || a || 'none' === n,
                      m = e > 0 && i.getParsed(e - 1),
                      b = e;
                    b < e + r;
                    ++b
                  ) {
                    var k = t[b],
                      x = i.getParsed(b),
                      M = y ? k : {},
                      _ = ot(x[v]),
                      z = (M[d] = l.getPixelForValue(x[d], b)),
                      w = (M[v] = a || _ ? s.getBasePixel() : s.getPixelForValue(c ? i.applyStack(s, x, c) : x[v], b))
                    ;(M.skip = isNaN(z) || isNaN(w) || _),
                      (M.stop = b > 0 && x[d] - m[d] > g),
                      (M.parsed = x),
                      f && (M.options = h || i.resolveDataElementOptions(b, k.active ? 'active' : n)),
                      y || i.updateElement(k, b, M, n),
                      (m = x)
                  }
                  i.updateSharedOptions(h, n, u)
                }
              },
              {
                key: 'getMaxOverflow',
                value: function () {
                  var t = this,
                    e = t._cachedMeta,
                    r = e.dataset,
                    n = (r.options && r.options.borderWidth) || 0,
                    i = e.data || []
                  if (!i.length) return n
                  var a = i[0].size(t.resolveDataElementOptions(0)),
                    o = i[i.length - 1].size(t.resolveDataElementOptions(i.length - 1))
                  return Math.max(n, a, o) / 2
                }
              },
              {
                key: 'draw',
                value: function () {
                  var t = this._cachedMeta
                  t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
                    Object(a.a)(Object(o.a)(r.prototype), 'draw', this).call(this)
                }
              }
            ]),
            r
          )
        })(Fn)
        ;(Hn.id = 'line'),
          (Hn.defaults = { datasetElementType: 'line', dataElementType: 'point', showLine: !0, spanGaps: !1 }),
          (Hn.overrides = { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } })
        var Nn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t, n) {
            var i
            return Object(f.a)(this, r), ((i = e.call(this, t, n)).innerRadius = void 0), (i.outerRadius = void 0), i
          }
          return (
            Object(d.a)(r, [
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta,
                    r = this.chart,
                    n = r.data.labels || [],
                    i = tn(e._parsed[t].r, r.options.locale)
                  return { label: n[t] || '', value: i }
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this._cachedMeta.data
                  this._updateRadius(), this.updateElements(e, 0, e.length, t)
                }
              },
              {
                key: '_updateRadius',
                value: function () {
                  var t = this,
                    e = t.chart,
                    r = e.chartArea,
                    n = e.options,
                    i = Math.min(r.right - r.left, r.bottom - r.top),
                    a = Math.max(i / 2, 0),
                    o =
                      (a - Math.max(n.cutoutPercentage ? (a / 100) * n.cutoutPercentage : 1, 0)) /
                      e.getVisibleDatasetCount()
                  ;(t.outerRadius = a - o * t.index), (t.innerRadius = t.outerRadius - o)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  var i,
                    a = this,
                    o = 'reset' === n,
                    l = a.chart,
                    s = a.getDataset(),
                    c = l.options.animation,
                    u = a._cachedMeta.rScale,
                    h = u.xCenter,
                    f = u.yCenter,
                    d = u.getIndexAngle(0) - 0.5 * Ct,
                    v = d,
                    p = 360 / a.countVisibleElements()
                  for (i = 0; i < e; ++i) v += a._computeAngle(i, n, p)
                  for (i = e; i < e + r; i++) {
                    var g = t[i],
                      y = v,
                      m = v + a._computeAngle(i, n, p),
                      b = l.getDataVisibility(i) ? u.getDistanceFromCenterForValue(s.data[i]) : 0
                    ;(v = m), o && (c.animateScale && (b = 0), c.animateRotate && (y = m = d))
                    var k = {
                      x: h,
                      y: f,
                      innerRadius: 0,
                      outerRadius: b,
                      startAngle: y,
                      endAngle: m,
                      options: a.resolveDataElementOptions(i, g.active ? 'active' : n)
                    }
                    a.updateElement(g, i, k, n)
                  }
                }
              },
              {
                key: 'countVisibleElements',
                value: function () {
                  var t = this,
                    e = this.getDataset(),
                    r = this._cachedMeta,
                    n = 0
                  return (
                    r.data.forEach(function (r, i) {
                      !isNaN(e.data[i]) && t.chart.getDataVisibility(i) && n++
                    }),
                    n
                  )
                }
              },
              {
                key: '_computeAngle',
                value: function (t, e, r) {
                  return this.chart.getDataVisibility(t) ? Ht(this.resolveDataElementOptions(t, e).angle || r) : 0
                }
              }
            ]),
            r
          )
        })(Fn)
        ;(Nn.id = 'polarArea'),
          (Nn.defaults = {
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !0 },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
              }
            },
            indexAxis: 'r',
            startAngle: 0
          }),
          (Nn.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels: function (t) {
                    var e = t.data
                    if (e.labels.length && e.datasets.length) {
                      var r = t.legend.options.labels.pointStyle
                      return e.labels.map(function (e, n) {
                        var i = t.getDatasetMeta(0).controller.getStyle(n)
                        return {
                          text: e,
                          fillStyle: i.backgroundColor,
                          strokeStyle: i.borderColor,
                          lineWidth: i.borderWidth,
                          pointStyle: r,
                          hidden: !t.getDataVisibility(n),
                          index: n
                        }
                      })
                    }
                    return []
                  }
                },
                onClick: function (t, e, r) {
                  r.chart.toggleDataVisibility(e.index), r.chart.update()
                }
              },
              tooltip: {
                callbacks: {
                  title: function () {
                    return ''
                  },
                  label: function (t) {
                    return t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue
                  }
                }
              }
            },
            scales: {
              r: {
                type: 'radialLinear',
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0
              }
            }
          })
        var Wn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return r
        })(Vn)
        ;(Wn.id = 'pie'), (Wn.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' })
        var $n = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return (
            Object(d.a)(r, [
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta.vScale,
                    r = this.getParsed(t)
                  return { label: e.getLabels()[t], value: '' + e.getLabelForValue(r[e.axis]) }
                }
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this,
                    r = e._cachedMeta,
                    n = r.dataset,
                    i = r.data || [],
                    a = r.iScale.getLabels()
                  if (((n.points = i), 'resize' !== t)) {
                    var o = e.resolveDatasetElementOptions(t)
                    e.options.showLine || (o.borderWidth = 0)
                    var l = { _loop: !0, _fullLoop: a.length === i.length, options: o }
                    e.updateElement(n, void 0, l, t)
                  }
                  e.updateElements(i, 0, i.length, t)
                }
              },
              {
                key: 'updateElements',
                value: function (t, e, r, n) {
                  for (
                    var i = this, a = i.getDataset(), o = i._cachedMeta.rScale, l = 'reset' === n, s = e;
                    s < e + r;
                    s++
                  ) {
                    var c = t[s],
                      u = i.resolveDataElementOptions(s, c.active ? 'active' : n),
                      h = o.getPointPositionForValue(s, a.data[s]),
                      f = l ? o.xCenter : h.x,
                      d = l ? o.yCenter : h.y,
                      v = { x: f, y: d, angle: h.angle, skip: isNaN(f) || isNaN(d), options: u }
                    i.updateElement(c, s, v, n)
                  }
                }
              }
            ]),
            r
          )
        })(Fn)
        ;($n.id = 'radar'),
          ($n.defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            indexAxis: 'r',
            showLine: !0,
            elements: { line: { fill: 'start' } }
          }),
          ($n.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } })
        var Yn = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return r
        })(Hn)
        ;(Yn.id = 'scatter'),
          (Yn.defaults = { showLine: !1, fill: !1 }),
          (Yn.overrides = {
            interaction: { mode: 'point' },
            plugins: {
              tooltip: {
                callbacks: {
                  title: function () {
                    return ''
                  },
                  label: function (t) {
                    return '(' + t.label + ', ' + t.formattedValue + ')'
                  }
                }
              }
            },
            scales: { x: { type: 'linear' }, y: { type: 'linear' } }
          })
        var Un = Object.freeze({
          __proto__: null,
          BarController: Rn,
          BubbleController: In,
          DoughnutController: Vn,
          LineController: Hn,
          PolarAreaController: Nn,
          PieController: Wn,
          RadarController: $n,
          ScatterController: Yn
        })
        function Xn() {
          throw new Error('This method is not implemented: Check that a complete date adapter is provided.')
        }
        var qn = (function () {
          function t(e) {
            Object(f.a)(this, t), (this.options = e || {})
          }
          return (
            Object(d.a)(t, [
              {
                key: 'formats',
                value: function () {
                  return Xn()
                }
              },
              {
                key: 'parse',
                value: function (t, e) {
                  return Xn()
                }
              },
              {
                key: 'format',
                value: function (t, e) {
                  return Xn()
                }
              },
              {
                key: 'add',
                value: function (t, e, r) {
                  return Xn()
                }
              },
              {
                key: 'diff',
                value: function (t, e, r) {
                  return Xn()
                }
              },
              {
                key: 'startOf',
                value: function (t, e, r) {
                  return Xn()
                }
              },
              {
                key: 'endOf',
                value: function (t, e) {
                  return Xn()
                }
              }
            ]),
            t
          )
        })()
        qn.override = function (t) {
          Object.assign(qn.prototype, t)
        }
        var Kn = { _date: qn }
        function Zn(t, e) {
          return 'native' in t ? { x: t.x, y: t.y } : $r(t, e)
        }
        function Gn(t, e, r, n) {
          var i = t.controller,
            a = t.data,
            o = t._sorted,
            l = i._cachedMeta.iScale
          if (l && e === l.axis && o && a.length) {
            var s = l._reversePixels ? fr : hr
            if (!n) return s(a, e, r)
            if (i._sharedOptions) {
              var c = a[0],
                u = 'function' === typeof c.getRange && c.getRange(e)
              if (u) {
                var h = s(a, e, r - u),
                  f = s(a, e, r + u)
                return { lo: h.lo, hi: f.hi }
              }
            }
          }
          return { lo: 0, hi: a.length - 1 }
        }
        function Jn(t, e, r, n, i) {
          for (var a = t.getSortedVisibleDatasetMetas(), o = r[e], l = 0, s = a.length; l < s; ++l)
            for (var c = a[l], u = c.index, h = c.data, f = Gn(a[l], e, o, i), d = f.lo, v = f.hi, p = d; p <= v; ++p) {
              var g = h[p]
              g.skip || n(g, u, p)
            }
        }
        function Qn(t, e, r, n) {
          var i = []
          if (!Ye(e, t.chartArea, t._minPadding)) return i
          return (
            Jn(
              t,
              r,
              e,
              function (t, r, a) {
                t.inRange(e.x, e.y, n) && i.push({ element: t, datasetIndex: r, index: a })
              },
              !0
            ),
            i
          )
        }
        function ti(t, e, r, n, i) {
          var a = (function (t) {
              var e = -1 !== t.indexOf('x'),
                r = -1 !== t.indexOf('y')
              return function (t, n) {
                var i = e ? Math.abs(t.x - n.x) : 0,
                  a = r ? Math.abs(t.y - n.y) : 0
                return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
              }
            })(r),
            o = Number.POSITIVE_INFINITY,
            l = []
          if (!Ye(e, t.chartArea, t._minPadding)) return l
          return (
            Jn(t, r, e, function (r, s, c) {
              if (!n || r.inRange(e.x, e.y, i)) {
                var u = r.getCenterPoint(i)
                if (Ye(u, t.chartArea, t._minPadding) || r.inRange(e.x, e.y, i)) {
                  var h = a(e, u)
                  h < o
                    ? ((l = [{ element: r, datasetIndex: s, index: c }]), (o = h))
                    : h === o && l.push({ element: r, datasetIndex: s, index: c })
                }
              }
            }),
            l
          )
        }
        function ei(t, e, r, n) {
          var i = Zn(e, t),
            a = [],
            o = r.axis,
            l = 'x' === o ? 'inXRange' : 'inYRange',
            s = !1
          return (
            (function (t, e) {
              for (var r, n, i, a = t.getSortedVisibleDatasetMetas(), o = 0, l = a.length; o < l; ++o) {
                var s = a[o]
                r = s.index
                for (var c = 0, u = (n = s.data).length; c < u; ++c) (i = n[c]).skip || e(i, r, c)
              }
            })(t, function (t, e, r) {
              t[l](i[o], n) && a.push({ element: t, datasetIndex: e, index: r }), t.inRange(i.x, i.y, n) && (s = !0)
            }),
            r.intersect && !s ? [] : a
          )
        }
        var ri = {
            modes: {
              index: function (t, e, r, n) {
                var i = Zn(e, t),
                  a = r.axis || 'x',
                  o = r.intersect ? Qn(t, i, a, n) : ti(t, i, a, !1, n),
                  l = []
                return o.length
                  ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
                      var e = o[0].index,
                        r = t.data[e]
                      r && !r.skip && l.push({ element: r, datasetIndex: t.index, index: e })
                    }),
                    l)
                  : []
              },
              dataset: function (t, e, r, n) {
                var i = Zn(e, t),
                  a = r.axis || 'xy',
                  o = r.intersect ? Qn(t, i, a, n) : ti(t, i, a, !1, n)
                if (o.length > 0) {
                  var l = o[0].datasetIndex,
                    s = t.getDatasetMeta(l).data
                  o = []
                  for (var c = 0; c < s.length; ++c) o.push({ element: s[c], datasetIndex: l, index: c })
                }
                return o
              },
              point: function (t, e, r, n) {
                return Qn(t, Zn(e, t), r.axis || 'xy', n)
              },
              nearest: function (t, e, r, n) {
                return ti(t, Zn(e, t), r.axis || 'xy', r.intersect, n)
              },
              x: function (t, e, r, n) {
                return (r.axis = 'x'), ei(t, e, r, n)
              },
              y: function (t, e, r, n) {
                return (r.axis = 'y'), ei(t, e, r, n)
              }
            }
          },
          ni = ['left', 'top', 'right', 'bottom']
        function ii(t, e) {
          return t.filter(function (t) {
            return t.pos === e
          })
        }
        function ai(t, e) {
          return t.filter(function (t) {
            return -1 === ni.indexOf(t.pos) && t.box.axis === e
          })
        }
        function oi(t, e) {
          return t.sort(function (t, r) {
            var n = e ? r : t,
              i = e ? t : r
            return n.weight === i.weight ? n.index - i.index : n.weight - i.weight
          })
        }
        function li(t, e) {
          var r,
            n,
            i,
            a = (function (t) {
              var e,
                r = {},
                n = Object(v.a)(t)
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var i = e.value,
                    a = i.stack,
                    o = i.pos,
                    l = i.stackWeight
                  if (a && ni.includes(o)) {
                    var s = r[a] || (r[a] = { count: 0, placed: 0, weight: 0, size: 0 })
                    s.count++, (s.weight += l)
                  }
                }
              } catch (c) {
                n.e(c)
              } finally {
                n.f()
              }
              return r
            })(t),
            o = e.vBoxMaxWidth,
            l = e.hBoxMaxHeight
          for (r = 0, n = t.length; r < n; ++r) {
            var s = (i = t[r]).box.fullSize,
              c = a[i.stack],
              u = c && i.stackWeight / c.weight
            i.horizontal
              ? ((i.width = u ? u * o : s && e.availableWidth), (i.height = l))
              : ((i.width = o), (i.height = u ? u * l : s && e.availableHeight))
          }
          return a
        }
        function si(t, e, r, n) {
          return Math.max(t[r], e[r]) + Math.max(t[n], e[n])
        }
        function ci(t, e) {
          ;(t.top = Math.max(t.top, e.top)),
            (t.left = Math.max(t.left, e.left)),
            (t.bottom = Math.max(t.bottom, e.bottom)),
            (t.right = Math.max(t.right, e.right))
        }
        function ui(t, e, r, n) {
          var i = r.pos,
            a = r.box,
            o = t.maxPadding
          if (!st(i)) {
            r.size && (t[i] -= r.size)
            var l = n[r.stack] || { size: 0, count: 1 }
            ;(l.size = Math.max(l.size, r.horizontal ? a.height : a.width)),
              (r.size = l.size / l.count),
              (t[i] += r.size)
          }
          a.getPadding && ci(o, a.getPadding())
          var s = Math.max(0, e.outerWidth - si(o, t, 'left', 'right')),
            c = Math.max(0, e.outerHeight - si(o, t, 'top', 'bottom')),
            u = s !== t.w,
            h = c !== t.h
          return (t.w = s), (t.h = c), r.horizontal ? { same: u, other: h } : { same: h, other: u }
        }
        function hi(t, e) {
          var r = e.maxPadding
          function n(t) {
            var n = { left: 0, top: 0, right: 0, bottom: 0 }
            return (
              t.forEach(function (t) {
                n[t] = Math.max(e[t], r[t])
              }),
              n
            )
          }
          return n(t ? ['left', 'right'] : ['top', 'bottom'])
        }
        function fi(t, e, r, n) {
          var i,
            a,
            o,
            l,
            s,
            c,
            u = []
          for (i = 0, a = t.length, s = 0; i < a; ++i) {
            ;(l = (o = t[i]).box).update(o.width || e.w, o.height || e.h, hi(o.horizontal, e))
            var h = ui(e, r, o, n),
              f = h.same,
              d = h.other
            ;(s |= f && u.length), (c = c || d), l.fullSize || u.push(o)
          }
          return (s && fi(u, e, r, n)) || c
        }
        function di(t, e, r, n, i) {
          ;(t.top = r), (t.left = e), (t.right = e + n), (t.bottom = r + i), (t.width = n), (t.height = i)
        }
        function vi(t, e, r, n) {
          var i,
            a = r.padding,
            o = e.x,
            l = e.y,
            s = Object(v.a)(t)
          try {
            for (s.s(); !(i = s.n()).done; ) {
              var c = i.value,
                u = c.box,
                h = n[c.stack] || { count: 1, placed: 0, weight: 1 },
                f = c.stackWeight / h.weight || 1
              if (c.horizontal) {
                var d = e.w * f,
                  p = h.size || u.height
                wt(h.start) && (l = h.start),
                  u.fullSize ? di(u, a.left, l, r.outerWidth - a.right - a.left, p) : di(u, e.left + h.placed, l, d, p),
                  (h.start = l),
                  (h.placed += d),
                  (l = u.bottom)
              } else {
                var g = e.h * f,
                  y = h.size || u.width
                wt(h.start) && (o = h.start),
                  u.fullSize ? di(u, o, a.top, y, r.outerHeight - a.bottom - a.top) : di(u, o, e.top + h.placed, y, g),
                  (h.start = o),
                  (h.placed += g),
                  (o = u.right)
              }
            }
          } catch (m) {
            s.e(m)
          } finally {
            s.f()
          }
          ;(e.x = o), (e.y = l)
        }
        Ie.set('layout', { padding: { top: 0, right: 0, bottom: 0, left: 0 } })
        var pi = function (t, e) {
            t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || 'top'),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw: function (t) {
                        e.draw(t)
                      }
                    }
                  ]
                }),
              t.boxes.push(e)
          },
          gi = function (t, e) {
            var r = t.boxes ? t.boxes.indexOf(e) : -1
            ;-1 !== r && t.boxes.splice(r, 1)
          },
          yi = function (t, e, r) {
            ;(e.fullSize = r.fullSize), (e.position = r.position), (e.weight = r.weight)
          },
          mi = function (t, e, r, n) {
            if (t) {
              var i = lr(t.options.layout.padding),
                a = Math.max(e - i.width, 0),
                o = Math.max(r - i.height, 0),
                l = (function (t) {
                  var e = (function (t) {
                      var e,
                        r,
                        n,
                        i,
                        a,
                        o,
                        l = []
                      for (e = 0, r = (t || []).length; e < r; ++e) {
                        var s = (n = t[e])
                        i = s.position
                        var c = s.options
                        a = c.stack
                        var u = c.stackWeight
                        ;(o = void 0 === u ? 1 : u),
                          l.push({
                            index: e,
                            box: n,
                            pos: i,
                            horizontal: n.isHorizontal(),
                            weight: n.weight,
                            stack: a && i + a,
                            stackWeight: o
                          })
                      }
                      return l
                    })(t),
                    r = oi(
                      e.filter(function (t) {
                        return t.box.fullSize
                      }),
                      !0
                    ),
                    n = oi(ii(e, 'left'), !0),
                    i = oi(ii(e, 'right')),
                    a = oi(ii(e, 'top'), !0),
                    o = oi(ii(e, 'bottom')),
                    l = ai(e, 'x'),
                    s = ai(e, 'y')
                  return {
                    fullSize: r,
                    leftAndTop: n.concat(a),
                    rightAndBottom: i.concat(s).concat(o).concat(l),
                    chartArea: ii(e, 'chartArea'),
                    vertical: n.concat(i).concat(s),
                    horizontal: a.concat(o).concat(l)
                  }
                })(t.boxes),
                s = l.vertical,
                c = l.horizontal
              vt(t.boxes, function (t) {
                'function' === typeof t.beforeLayout && t.beforeLayout()
              })
              var u =
                  s.reduce(function (t, e) {
                    return e.box.options && !1 === e.box.options.display ? t : t + 1
                  }, 0) || 1,
                h = Object.freeze({
                  outerWidth: e,
                  outerHeight: r,
                  padding: i,
                  availableWidth: a,
                  availableHeight: o,
                  vBoxMaxWidth: a / 2 / u,
                  hBoxMaxHeight: o / 2
                }),
                f = Object.assign({}, i)
              ci(f, lr(n))
              var d = Object.assign({ maxPadding: f, w: a, h: o, x: i.left, y: i.top }, i),
                v = li(s.concat(c), h)
              fi(l.fullSize, d, h, v),
                fi(s, d, h, v),
                fi(c, d, h, v) && fi(s, d, h, v),
                (function (t) {
                  var e = t.maxPadding
                  function r(r) {
                    var n = Math.max(e[r] - t[r], 0)
                    return (t[r] += n), n
                  }
                  ;(t.y += r('top')), (t.x += r('left')), r('right'), r('bottom')
                })(d),
                vi(l.leftAndTop, d, h, v),
                (d.x += d.w),
                (d.y += d.h),
                vi(l.rightAndBottom, d, h, v),
                (t.chartArea = {
                  left: d.left,
                  top: d.top,
                  right: d.left + d.w,
                  bottom: d.top + d.h,
                  height: d.h,
                  width: d.w
                }),
                vt(l.chartArea, function (e) {
                  var r = e.box
                  Object.assign(r, t.chartArea), r.update(d.w, d.h)
                })
            }
          },
          bi = (function () {
            function t() {
              Object(f.a)(this, t)
            }
            return (
              Object(d.a)(t, [
                { key: 'acquireContext', value: function (t, e) {} },
                {
                  key: 'releaseContext',
                  value: function (t) {
                    return !1
                  }
                },
                { key: 'addEventListener', value: function (t, e, r) {} },
                { key: 'removeEventListener', value: function (t, e, r) {} },
                {
                  key: 'getDevicePixelRatio',
                  value: function () {
                    return 1
                  }
                },
                {
                  key: 'getMaximumSize',
                  value: function (t, e, r, n) {
                    return (
                      (e = Math.max(0, e || t.width)),
                      (r = r || t.height),
                      { width: e, height: Math.max(0, n ? Math.floor(e / n) : r) }
                    )
                  }
                },
                {
                  key: 'isAttached',
                  value: function (t) {
                    return !0
                  }
                }
              ]),
              t
            )
          })(),
          ki = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r() {
              return Object(f.a)(this, r), e.apply(this, arguments)
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'acquireContext',
                  value: function (t) {
                    return (t && t.getContext && t.getContext('2d')) || null
                  }
                }
              ]),
              r
            )
          })(bi),
          xi = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            pointerenter: 'mouseenter',
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerleave: 'mouseout',
            pointerout: 'mouseout'
          },
          Mi = function (t) {
            return null === t || '' === t
          }
        var _i = !!qr && { passive: !0 }
        function zi(t, e, r) {
          t.canvas.removeEventListener(e, r, _i)
        }
        function wi(t, e, r) {
          var n = t.canvas,
            i = (n && Ir(n)) || n,
            a = new MutationObserver(function (t) {
              var e = Ir(i)
              t.forEach(function (t) {
                for (var n = 0; n < t.addedNodes.length; n++) {
                  var a = t.addedNodes[n]
                  ;(a !== i && a !== e) || r(t.target)
                }
              })
            })
          return a.observe(document, { childList: !0, subtree: !0 }), a
        }
        function Oi(t, e, r) {
          var n = t.canvas,
            i = n && Ir(n)
          if (i) {
            var a = new MutationObserver(function (t) {
              t.forEach(function (t) {
                for (var e = 0; e < t.removedNodes.length; e++)
                  if (t.removedNodes[e] === n) {
                    r()
                    break
                  }
              })
            })
            return a.observe(i, { childList: !0 }), a
          }
        }
        var Ci = new Map(),
          ji = 0
        function Si() {
          var t = window.devicePixelRatio
          t !== ji &&
            ((ji = t),
            Ci.forEach(function (e, r) {
              r.currentDevicePixelRatio !== t && e()
            }))
        }
        function Fi(t, e, r) {
          var n = t.canvas,
            i = n && Ir(n)
          if (i) {
            var a = et(function (t, e) {
                var n = i.clientWidth
                r(t, e), n < i.clientWidth && r()
              }, window),
              o = new ResizeObserver(function (t) {
                var e = t[0],
                  r = e.contentRect.width,
                  n = e.contentRect.height
                ;(0 === r && 0 === n) || a(r, n)
              })
            return (
              o.observe(i),
              (function (t, e) {
                Ci.size || window.addEventListener('resize', Si), Ci.set(t, e)
              })(t, a),
              o
            )
          }
        }
        function Pi(t, e, r) {
          r && r.disconnect(),
            'resize' === e &&
              (function (t) {
                Ci.delete(t), Ci.size || window.removeEventListener('resize', Si)
              })(t)
        }
        function Di(t, e, r) {
          var n = t.canvas,
            i = et(
              function (e) {
                null !== t.ctx &&
                  r(
                    (function (t, e) {
                      var r = xi[t.type] || t.type,
                        n = $r(t, e),
                        i = n.x,
                        a = n.y
                      return { type: r, chart: e, native: t, x: void 0 !== i ? i : null, y: void 0 !== a ? a : null }
                    })(e, t)
                  )
              },
              t,
              function (t) {
                var e = t[0]
                return [e, e.offsetX, e.offsetY]
              }
            )
          return (
            (function (t, e, r) {
              t.addEventListener(e, r, _i)
            })(n, e, i),
            i
          )
        }
        var Ai = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r() {
            return Object(f.a)(this, r), e.apply(this, arguments)
          }
          return (
            Object(d.a)(r, [
              {
                key: 'acquireContext',
                value: function (t, e) {
                  var r = t && t.getContext && t.getContext('2d')
                  return r && r.canvas === t
                    ? ((function (t, e) {
                        var r = t.style,
                          n = t.getAttribute('height'),
                          i = t.getAttribute('width')
                        if (
                          ((t.$chartjs = {
                            initial: {
                              height: n,
                              width: i,
                              style: { display: r.display, height: r.height, width: r.width }
                            }
                          }),
                          (r.display = r.display || 'block'),
                          (r.boxSizing = r.boxSizing || 'border-box'),
                          Mi(i))
                        ) {
                          var a = Kr(t, 'width')
                          void 0 !== a && (t.width = a)
                        }
                        if (Mi(n))
                          if ('' === t.style.height) t.height = t.width / (e || 2)
                          else {
                            var o = Kr(t, 'height')
                            void 0 !== o && (t.height = o)
                          }
                      })(t, e),
                      r)
                    : null
                }
              },
              {
                key: 'releaseContext',
                value: function (t) {
                  var e = t.canvas
                  if (!e.$chartjs) return !1
                  var r = e.$chartjs.initial
                  ;['height', 'width'].forEach(function (t) {
                    var n = r[t]
                    ot(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                  })
                  var n = r.style || {}
                  return (
                    Object.keys(n).forEach(function (t) {
                      e.style[t] = n[t]
                    }),
                    (e.width = e.width),
                    delete e.$chartjs,
                    !0
                  )
                }
              },
              {
                key: 'addEventListener',
                value: function (t, e, r) {
                  this.removeEventListener(t, e)
                  var n = t.$proxies || (t.$proxies = {}),
                    i = { attach: wi, detach: Oi, resize: Fi }[e] || Di
                  n[e] = i(t, e, r)
                }
              },
              {
                key: 'removeEventListener',
                value: function (t, e) {
                  var r = t.$proxies || (t.$proxies = {}),
                    n = r[e]
                  n && (({ attach: Pi, detach: Pi, resize: Pi }[e] || zi)(t, e, n), (r[e] = void 0))
                }
              },
              {
                key: 'getDevicePixelRatio',
                value: function () {
                  return window.devicePixelRatio
                }
              },
              {
                key: 'getMaximumSize',
                value: function (t, e, r, n) {
                  return Ur(t, e, r, n)
                }
              },
              {
                key: 'isAttached',
                value: function (t) {
                  var e = Ir(t)
                  return !(!e || !e.isConnected)
                }
              }
            ]),
            r
          )
        })(bi)
        var Ei = (function () {
          function t() {
            Object(f.a)(this, t),
              (this.x = void 0),
              (this.y = void 0),
              (this.active = !1),
              (this.options = void 0),
              (this.$animations = void 0)
          }
          return (
            Object(d.a)(t, [
              {
                key: 'tooltipPosition',
                value: function (t) {
                  var e = this.getProps(['x', 'y'], t)
                  return { x: e.x, y: e.y }
                }
              },
              {
                key: 'hasValue',
                value: function () {
                  return Rt(this.x) && Rt(this.y)
                }
              },
              {
                key: 'getProps',
                value: function (t, e) {
                  var r = this,
                    n = this.$animations
                  if (!e || !n) return r
                  var i = {}
                  return (
                    t.forEach(function (t) {
                      i[t] = n[t] && n[t].active() ? n[t]._to : r[t]
                    }),
                    i
                  )
                }
              }
            ]),
            t
          )
        })()
        ;(Ei.defaults = {}), (Ei.defaultRoutes = void 0)
        var Ti = {
          values: function (t) {
            return lt(t) ? t : '' + t
          },
          numeric: function (t, e, r) {
            if (0 === t) return '0'
            var n,
              i = this.chart.options.locale,
              a = t
            if (r.length > 1) {
              var o = Math.max(Math.abs(r[0].value), Math.abs(r[r.length - 1].value))
              ;(o < 1e-4 || o > 1e15) && (n = 'scientific'),
                (a = (function (t, e) {
                  var r = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value
                  Math.abs(r) >= 1 && t !== Math.floor(t) && (r = t - Math.floor(t))
                  return r
                })(t, r))
            }
            var l = Tt(Math.abs(a)),
              s = Math.max(Math.min(-1 * Math.floor(l), 20), 0),
              c = { notation: n, minimumFractionDigits: s, maximumFractionDigits: s }
            return Object.assign(c, this.options.ticks.format), tn(t, i, c)
          },
          logarithmic: function (t, e, r) {
            if (0 === t) return '0'
            var n = t / Math.pow(10, Math.floor(Tt(t)))
            return 1 === n || 2 === n || 5 === n ? Ti.numeric.call(this, t, e, r) : ''
          }
        }
        var Bi = { formatters: Ti }
        function Li(t, e) {
          var r = t.options.ticks,
            n =
              r.maxTicksLimit ||
              (function (t) {
                var e = t.options.offset,
                  r = t._tickSize(),
                  n = t._length / r + (e ? 0 : 1),
                  i = t._maxLength / r
                return Math.floor(Math.min(n, i))
              })(t),
            i = r.major.enabled
              ? (function (t) {
                  var e,
                    r,
                    n = []
                  for (e = 0, r = t.length; e < r; e++) t[e].major && n.push(e)
                  return n
                })(e)
              : [],
            a = i.length,
            o = i[0],
            l = i[a - 1],
            s = []
          if (a > n)
            return (
              (function (t, e, r, n) {
                var i,
                  a = 0,
                  o = r[0]
                for (n = Math.ceil(n), i = 0; i < t.length; i++) i === o && (e.push(t[i]), (o = r[++a * n]))
              })(e, s, i, a / n),
              s
            )
          var c = (function (t, e, r) {
            var n = (function (t) {
                var e,
                  r,
                  n = t.length
                if (n < 2) return !1
                for (r = t[0], e = 1; e < n; ++e) if (t[e] - t[e - 1] !== r) return !1
                return r
              })(t),
              i = e.length / r
            if (!n) return Math.max(i, 1)
            for (
              var a = (function (t) {
                  var e,
                    r = [],
                    n = Math.sqrt(t)
                  for (e = 1; e < n; e++) t % e === 0 && (r.push(e), r.push(t / e))
                  return (
                    n === (0 | n) && r.push(n),
                    r
                      .sort(function (t, e) {
                        return t - e
                      })
                      .pop(),
                    r
                  )
                })(n),
                o = 0,
                l = a.length - 1;
              o < l;
              o++
            ) {
              var s = a[o]
              if (s > i) return s
            }
            return Math.max(i, 1)
          })(i, e, n)
          if (a > 0) {
            var u,
              h,
              f = a > 1 ? Math.round((l - o) / (a - 1)) : null
            for (Ri(e, s, c, ot(f) ? 0 : o - f, o), u = 0, h = a - 1; u < h; u++) Ri(e, s, c, i[u], i[u + 1])
            return Ri(e, s, c, l, ot(f) ? e.length : l + f), s
          }
          return Ri(e, s, c), s
        }
        function Ri(t, e, r, n, i) {
          var a,
            o,
            l,
            s = ht(n, 0),
            c = Math.min(ht(i, t.length), t.length),
            u = 0
          for (r = Math.ceil(r), i && (r = (a = i - n) / Math.floor(a / r)), l = s; l < 0; )
            u++, (l = Math.round(s + u * r))
          for (o = Math.max(s, 0); o < c; o++) o === l && (e.push(t[o]), u++, (l = Math.round(s + u * r)))
        }
        Ie.set('scale', {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: 'ticks',
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: function (t, e) {
              return e.lineWidth
            },
            tickColor: function (t, e) {
              return e.color
            },
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1
          },
          title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Bi.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2
          }
        }),
          Ie.route('scale.ticks', 'color', '', 'color'),
          Ie.route('scale.grid', 'color', '', 'borderColor'),
          Ie.route('scale.grid', 'borderColor', '', 'borderColor'),
          Ie.route('scale.title', 'color', '', 'color'),
          Ie.describe('scale', {
            _fallback: !1,
            _scriptable: function (t) {
              return !t.startsWith('before') && !t.startsWith('after') && 'callback' !== t && 'parser' !== t
            },
            _indexable: function (t) {
              return 'borderDash' !== t && 'tickBorderDash' !== t
            }
          }),
          Ie.describe('scales', { _fallback: 'scale' }),
          Ie.describe('scale.ticks', {
            _scriptable: function (t) {
              return 'backdropPadding' !== t && 'callback' !== t
            },
            _indexable: function (t) {
              return 'backdropPadding' !== t
            }
          })
        var Ii = function (t, e, r) {
          return 'top' === e || 'left' === e ? t[e] + r : t[e] - r
        }
        function Vi(t, e) {
          for (var r = [], n = t.length / e, i = t.length, a = 0; a < i; a += n) r.push(t[Math.floor(a)])
          return r
        }
        function Hi(t, e, r) {
          var n,
            i = t.ticks.length,
            a = Math.min(e, i - 1),
            o = t._startPixel,
            l = t._endPixel,
            s = 1e-6,
            c = t.getPixelForTick(a)
          if (
            !(
              r &&
              ((n =
                1 === i
                  ? Math.max(c - o, l - c)
                  : 0 === e
                  ? (t.getPixelForTick(1) - c) / 2
                  : (c - t.getPixelForTick(a - 1)) / 2),
              (c += a < e ? n : -n) < o - s || c > l + s)
            )
          )
            return c
        }
        function Ni(t) {
          return t.drawTicks ? t.tickLength : 0
        }
        function Wi(t, e) {
          if (!t.display) return 0
          var r = sr(t.font, e),
            n = lr(t.padding)
          return (lt(t.text) ? t.text.length : 1) * r.lineHeight + n.height
        }
        function $i(t, e, r) {
          var n = rt(t)
          return (
            ((r && 'right' !== e) || (!r && 'right' === e)) &&
              (n = (function (t) {
                return 'left' === t ? 'right' : 'right' === t ? 'left' : t
              })(n)),
            n
          )
        }
        var Yi = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r(t) {
              var n
              return (
                Object(f.a)(this, r),
                ((n = e.call(this)).id = t.id),
                (n.type = t.type),
                (n.options = void 0),
                (n.ctx = t.ctx),
                (n.chart = t.chart),
                (n.top = void 0),
                (n.bottom = void 0),
                (n.left = void 0),
                (n.right = void 0),
                (n.width = void 0),
                (n.height = void 0),
                (n._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                (n.maxWidth = void 0),
                (n.maxHeight = void 0),
                (n.paddingTop = void 0),
                (n.paddingBottom = void 0),
                (n.paddingLeft = void 0),
                (n.paddingRight = void 0),
                (n.axis = void 0),
                (n.labelRotation = void 0),
                (n.min = void 0),
                (n.max = void 0),
                (n._range = void 0),
                (n.ticks = []),
                (n._gridLineItems = null),
                (n._labelItems = null),
                (n._labelSizes = null),
                (n._length = 0),
                (n._maxLength = 0),
                (n._longestTextCache = {}),
                (n._startPixel = void 0),
                (n._endPixel = void 0),
                (n._reversePixels = !1),
                (n._userMax = void 0),
                (n._userMin = void 0),
                (n._suggestedMax = void 0),
                (n._suggestedMin = void 0),
                (n._ticksLength = 0),
                (n._borderValue = 0),
                (n._cache = {}),
                (n._dataLimitsCached = !1),
                (n.$context = void 0),
                n
              )
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'init',
                  value: function (t) {
                    var e = this
                    ;(e.options = t.setContext(e.getContext())),
                      (e.axis = t.axis),
                      (e._userMin = e.parse(t.min)),
                      (e._userMax = e.parse(t.max)),
                      (e._suggestedMin = e.parse(t.suggestedMin)),
                      (e._suggestedMax = e.parse(t.suggestedMax))
                  }
                },
                {
                  key: 'parse',
                  value: function (t, e) {
                    return t
                  }
                },
                {
                  key: 'getUserBounds',
                  value: function () {
                    var t = this._userMin,
                      e = this._userMax,
                      r = this._suggestedMin,
                      n = this._suggestedMax
                    return (
                      (t = ut(t, Number.POSITIVE_INFINITY)),
                      (e = ut(e, Number.NEGATIVE_INFINITY)),
                      (r = ut(r, Number.POSITIVE_INFINITY)),
                      (n = ut(n, Number.NEGATIVE_INFINITY)),
                      { min: ut(t, r), max: ut(e, n), minDefined: ct(t), maxDefined: ct(e) }
                    )
                  }
                },
                {
                  key: 'getMinMax',
                  value: function (t) {
                    var e,
                      r = this,
                      n = r.getUserBounds(),
                      i = n.min,
                      a = n.max,
                      o = n.minDefined,
                      l = n.maxDefined
                    if (o && l) return { min: i, max: a }
                    for (var s = r.getMatchingVisibleMetas(), c = 0, u = s.length; c < u; ++c)
                      (e = s[c].controller.getMinMax(r, t)),
                        o || (i = Math.min(i, e.min)),
                        l || (a = Math.max(a, e.max))
                    return { min: ut(i, ut(a, i)), max: ut(a, ut(i, a)) }
                  }
                },
                {
                  key: 'getPadding',
                  value: function () {
                    var t = this
                    return {
                      left: t.paddingLeft || 0,
                      top: t.paddingTop || 0,
                      right: t.paddingRight || 0,
                      bottom: t.paddingBottom || 0
                    }
                  }
                },
                {
                  key: 'getTicks',
                  value: function () {
                    return this.ticks
                  }
                },
                {
                  key: 'getLabels',
                  value: function () {
                    var t = this.chart.data
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                  }
                },
                {
                  key: 'beforeLayout',
                  value: function () {
                    ;(this._cache = {}), (this._dataLimitsCached = !1)
                  }
                },
                {
                  key: 'beforeUpdate',
                  value: function () {
                    dt(this.options.beforeUpdate, [this])
                  }
                },
                {
                  key: 'update',
                  value: function (t, e, r) {
                    var n = this,
                      i = n.options.ticks,
                      a = i.sampleSize
                    n.beforeUpdate(),
                      (n.maxWidth = t),
                      (n.maxHeight = e),
                      (n._margins = r = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
                      (n.ticks = null),
                      (n._labelSizes = null),
                      (n._gridLineItems = null),
                      (n._labelItems = null),
                      n.beforeSetDimensions(),
                      n.setDimensions(),
                      n.afterSetDimensions(),
                      (n._maxLength = n.isHorizontal() ? n.width + r.left + r.right : n.height + r.top + r.bottom),
                      n._dataLimitsCached ||
                        (n.beforeDataLimits(),
                        n.determineDataLimits(),
                        n.afterDataLimits(),
                        (n._range = (function (t, e) {
                          var r = t.min,
                            n = t.max
                          return { min: r - Math.abs(ft(e, r)), max: n + ft(e, n) }
                        })(n, n.options.grace)),
                        (n._dataLimitsCached = !0)),
                      n.beforeBuildTicks(),
                      (n.ticks = n.buildTicks() || []),
                      n.afterBuildTicks()
                    var o = a < n.ticks.length
                    n._convertTicksToLabels(o ? Vi(n.ticks, a) : n.ticks),
                      n.configure(),
                      n.beforeCalculateLabelRotation(),
                      n.calculateLabelRotation(),
                      n.afterCalculateLabelRotation(),
                      i.display &&
                        (i.autoSkip || 'auto' === i.source) &&
                        ((n.ticks = Li(n, n.ticks)), (n._labelSizes = null)),
                      o && n._convertTicksToLabels(n.ticks),
                      n.beforeFit(),
                      n.fit(),
                      n.afterFit(),
                      n.afterUpdate()
                  }
                },
                {
                  key: 'configure',
                  value: function () {
                    var t,
                      e,
                      r = this,
                      n = r.options.reverse
                    r.isHorizontal() ? ((t = r.left), (e = r.right)) : ((t = r.top), (e = r.bottom), (n = !n)),
                      (r._startPixel = t),
                      (r._endPixel = e),
                      (r._reversePixels = n),
                      (r._length = e - t),
                      (r._alignToPixels = r.options.alignToPixels)
                  }
                },
                {
                  key: 'afterUpdate',
                  value: function () {
                    dt(this.options.afterUpdate, [this])
                  }
                },
                {
                  key: 'beforeSetDimensions',
                  value: function () {
                    dt(this.options.beforeSetDimensions, [this])
                  }
                },
                {
                  key: 'setDimensions',
                  value: function () {
                    var t = this
                    t.isHorizontal()
                      ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                      : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                      (t.paddingLeft = 0),
                      (t.paddingTop = 0),
                      (t.paddingRight = 0),
                      (t.paddingBottom = 0)
                  }
                },
                {
                  key: 'afterSetDimensions',
                  value: function () {
                    dt(this.options.afterSetDimensions, [this])
                  }
                },
                {
                  key: '_callHooks',
                  value: function (t) {
                    var e = this
                    e.chart.notifyPlugins(t, e.getContext()), dt(e.options[t], [e])
                  }
                },
                {
                  key: 'beforeDataLimits',
                  value: function () {
                    this._callHooks('beforeDataLimits')
                  }
                },
                { key: 'determineDataLimits', value: function () {} },
                {
                  key: 'afterDataLimits',
                  value: function () {
                    this._callHooks('afterDataLimits')
                  }
                },
                {
                  key: 'beforeBuildTicks',
                  value: function () {
                    this._callHooks('beforeBuildTicks')
                  }
                },
                {
                  key: 'buildTicks',
                  value: function () {
                    return []
                  }
                },
                {
                  key: 'afterBuildTicks',
                  value: function () {
                    this._callHooks('afterBuildTicks')
                  }
                },
                {
                  key: 'beforeTickToLabelConversion',
                  value: function () {
                    dt(this.options.beforeTickToLabelConversion, [this])
                  }
                },
                {
                  key: 'generateTickLabels',
                  value: function (t) {
                    var e,
                      r,
                      n,
                      i = this.options.ticks
                    for (e = 0, r = t.length; e < r; e++) (n = t[e]).label = dt(i.callback, [n.value, e, t], this)
                  }
                },
                {
                  key: 'afterTickToLabelConversion',
                  value: function () {
                    dt(this.options.afterTickToLabelConversion, [this])
                  }
                },
                {
                  key: 'beforeCalculateLabelRotation',
                  value: function () {
                    dt(this.options.beforeCalculateLabelRotation, [this])
                  }
                },
                {
                  key: 'calculateLabelRotation',
                  value: function () {
                    var t,
                      e,
                      r,
                      n = this,
                      i = n.options,
                      a = i.ticks,
                      o = n.ticks.length,
                      l = a.minRotation || 0,
                      s = a.maxRotation,
                      c = l
                    if (!n._isVisible() || !a.display || l >= s || o <= 1 || !n.isHorizontal()) n.labelRotation = l
                    else {
                      var u = n._getLabelSizes(),
                        h = u.widest.width,
                        f = u.highest.height,
                        d = qt(n.chart.width - h, 0, n.maxWidth)
                      h + 6 > (t = i.offset ? n.maxWidth / o : d / (o - 1)) &&
                        ((t = d / (o - (i.offset ? 0.5 : 1))),
                        (e = n.maxHeight - Ni(i.grid) - a.padding - Wi(i.title, n.chart.options.font)),
                        (r = Math.sqrt(h * h + f * f)),
                        (c = Nt(
                          Math.min(
                            Math.asin(qt((u.highest.height + 6) / t, -1, 1)),
                            Math.asin(qt(e / r, -1, 1)) - Math.asin(qt(f / r, -1, 1))
                          )
                        )),
                        (c = Math.max(l, Math.min(s, c)))),
                        (n.labelRotation = c)
                    }
                  }
                },
                {
                  key: 'afterCalculateLabelRotation',
                  value: function () {
                    dt(this.options.afterCalculateLabelRotation, [this])
                  }
                },
                {
                  key: 'beforeFit',
                  value: function () {
                    dt(this.options.beforeFit, [this])
                  }
                },
                {
                  key: 'fit',
                  value: function () {
                    var t = this,
                      e = { width: 0, height: 0 },
                      r = t.chart,
                      n = t.options,
                      i = n.ticks,
                      a = n.title,
                      o = n.grid,
                      l = t._isVisible(),
                      s = t.isHorizontal()
                    if (l) {
                      var c = Wi(a, r.options.font)
                      if (
                        (s
                          ? ((e.width = t.maxWidth), (e.height = Ni(o) + c))
                          : ((e.height = t.maxHeight), (e.width = Ni(o) + c)),
                        i.display && t.ticks.length)
                      ) {
                        var u = t._getLabelSizes(),
                          h = u.first,
                          f = u.last,
                          d = u.widest,
                          v = u.highest,
                          p = 2 * i.padding,
                          g = Ht(t.labelRotation),
                          y = Math.cos(g),
                          m = Math.sin(g)
                        if (s) {
                          var b = i.mirror ? 0 : m * d.width + y * v.height
                          e.height = Math.min(t.maxHeight, e.height + b + p)
                        } else {
                          var k = i.mirror ? 0 : y * d.width + m * v.height
                          e.width = Math.min(t.maxWidth, e.width + k + p)
                        }
                        t._calculatePadding(h, f, m, y)
                      }
                    }
                    t._handleMargins(),
                      s
                        ? ((t.width = t._length = r.width - t._margins.left - t._margins.right), (t.height = e.height))
                        : ((t.width = e.width), (t.height = t._length = r.height - t._margins.top - t._margins.bottom))
                  }
                },
                {
                  key: '_calculatePadding',
                  value: function (t, e, r, n) {
                    var i = this,
                      a = i.options,
                      o = a.ticks,
                      l = o.align,
                      s = o.padding,
                      c = a.position,
                      u = 0 !== i.labelRotation,
                      h = 'top' !== c && 'x' === i.axis
                    if (i.isHorizontal()) {
                      var f = i.getPixelForTick(0) - i.left,
                        d = i.right - i.getPixelForTick(i.ticks.length - 1),
                        v = 0,
                        p = 0
                      u
                        ? h
                          ? ((v = n * t.width), (p = r * e.height))
                          : ((v = r * t.height), (p = n * e.width))
                        : 'start' === l
                        ? (p = e.width)
                        : 'end' === l
                        ? (v = t.width)
                        : ((v = t.width / 2), (p = e.width / 2)),
                        (i.paddingLeft = Math.max(((v - f + s) * i.width) / (i.width - f), 0)),
                        (i.paddingRight = Math.max(((p - d + s) * i.width) / (i.width - d), 0))
                    } else {
                      var g = e.height / 2,
                        y = t.height / 2
                      'start' === l ? ((g = 0), (y = t.height)) : 'end' === l && ((g = e.height), (y = 0)),
                        (i.paddingTop = g + s),
                        (i.paddingBottom = y + s)
                    }
                  }
                },
                {
                  key: '_handleMargins',
                  value: function () {
                    var t = this
                    t._margins &&
                      ((t._margins.left = Math.max(t.paddingLeft, t._margins.left)),
                      (t._margins.top = Math.max(t.paddingTop, t._margins.top)),
                      (t._margins.right = Math.max(t.paddingRight, t._margins.right)),
                      (t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom)))
                  }
                },
                {
                  key: 'afterFit',
                  value: function () {
                    dt(this.options.afterFit, [this])
                  }
                },
                {
                  key: 'isHorizontal',
                  value: function () {
                    var t = this.options,
                      e = t.axis,
                      r = t.position
                    return 'top' === r || 'bottom' === r || 'x' === e
                  }
                },
                {
                  key: 'isFullSize',
                  value: function () {
                    return this.options.fullSize
                  }
                },
                {
                  key: '_convertTicksToLabels',
                  value: function (t) {
                    var e,
                      r,
                      n = this
                    for (n.beforeTickToLabelConversion(), n.generateTickLabels(t), e = 0, r = t.length; e < r; e++)
                      ot(t[e].label) && (t.splice(e, 1), r--, e--)
                    n.afterTickToLabelConversion()
                  }
                },
                {
                  key: '_getLabelSizes',
                  value: function () {
                    var t = this,
                      e = t._labelSizes
                    if (!e) {
                      var r = t.options.ticks.sampleSize,
                        n = t.ticks
                      r < n.length && (n = Vi(n, r)), (t._labelSizes = e = t._computeLabelSizes(n, n.length))
                    }
                    return e
                  }
                },
                {
                  key: '_computeLabelSizes',
                  value: function (t, e) {
                    var r,
                      n,
                      i,
                      a,
                      o,
                      l,
                      s,
                      c,
                      u,
                      h,
                      f,
                      d = this.ctx,
                      v = this._longestTextCache,
                      p = [],
                      g = [],
                      y = 0,
                      m = 0
                    for (r = 0; r < e; ++r) {
                      if (
                        ((a = t[r].label),
                        (o = this._resolveTickFontOptions(r)),
                        (d.font = l = o.string),
                        (s = v[l] = v[l] || { data: {}, gc: [] }),
                        (c = o.lineHeight),
                        (u = h = 0),
                        ot(a) || lt(a))
                      ) {
                        if (lt(a))
                          for (n = 0, i = a.length; n < i; ++n)
                            ot((f = a[n])) || lt(f) || ((u = Ve(d, s.data, s.gc, u, f)), (h += c))
                      } else (u = Ve(d, s.data, s.gc, u, a)), (h = c)
                      p.push(u), g.push(h), (y = Math.max(u, y)), (m = Math.max(h, m))
                    }
                    !(function (t, e) {
                      vt(t, function (t) {
                        var r,
                          n = t.gc,
                          i = n.length / 2
                        if (i > e) {
                          for (r = 0; r < i; ++r) delete t.data[n[r]]
                          n.splice(0, i)
                        }
                      })
                    })(v, e)
                    var b = p.indexOf(y),
                      k = g.indexOf(m),
                      x = function (t) {
                        return { width: p[t] || 0, height: g[t] || 0 }
                      }
                    return { first: x(0), last: x(e - 1), widest: x(b), highest: x(k), widths: p, heights: g }
                  }
                },
                {
                  key: 'getLabelForValue',
                  value: function (t) {
                    return t
                  }
                },
                {
                  key: 'getPixelForValue',
                  value: function (t, e) {
                    return NaN
                  }
                },
                { key: 'getValueForPixel', value: function (t) {} },
                {
                  key: 'getPixelForTick',
                  value: function (t) {
                    var e = this.ticks
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                  }
                },
                {
                  key: 'getPixelForDecimal',
                  value: function (t) {
                    var e = this
                    e._reversePixels && (t = 1 - t)
                    var r = e._startPixel + t * e._length
                    return qt(e._alignToPixels ? Ne(e.chart, r, 0) : r, -32768, 32767)
                  }
                },
                {
                  key: 'getDecimalForPixel',
                  value: function (t) {
                    var e = (t - this._startPixel) / this._length
                    return this._reversePixels ? 1 - e : e
                  }
                },
                {
                  key: 'getBasePixel',
                  value: function () {
                    return this.getPixelForValue(this.getBaseValue())
                  }
                },
                {
                  key: 'getBaseValue',
                  value: function () {
                    var t = this.min,
                      e = this.max
                    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                  }
                },
                {
                  key: 'getContext',
                  value: function (t) {
                    var e,
                      r,
                      n = this,
                      i = n.ticks || []
                    if (t >= 0 && t < i.length) {
                      var a = i[t]
                      return (
                        a.$context ||
                        (a.$context = (function (t, e, r) {
                          return Object.assign(Object.create(t), { tick: r, index: e, type: 'tick' })
                        })(n.getContext(), t, a))
                      )
                    }
                    return (
                      n.$context ||
                      (n.$context =
                        ((e = n.chart.getContext()),
                        (r = n),
                        Object.assign(Object.create(e), { scale: r, type: 'scale' })))
                    )
                  }
                },
                {
                  key: '_tickSize',
                  value: function () {
                    var t = this,
                      e = t.options.ticks,
                      r = Ht(t.labelRotation),
                      n = Math.abs(Math.cos(r)),
                      i = Math.abs(Math.sin(r)),
                      a = t._getLabelSizes(),
                      o = e.autoSkipPadding || 0,
                      l = a ? a.widest.width + o : 0,
                      s = a ? a.highest.height + o : 0
                    return t.isHorizontal() ? (s * n > l * i ? l / n : s / i) : s * i < l * n ? s / n : l / i
                  }
                },
                {
                  key: '_isVisible',
                  value: function () {
                    var t = this.options.display
                    return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                  }
                },
                {
                  key: '_computeGridLineItems',
                  value: function (t) {
                    var e,
                      r,
                      n,
                      i,
                      a,
                      o,
                      l,
                      s,
                      c,
                      u,
                      h,
                      f,
                      d = this,
                      v = d.axis,
                      p = d.chart,
                      g = d.options,
                      y = g.grid,
                      m = g.position,
                      b = y.offset,
                      k = d.isHorizontal(),
                      x = d.ticks.length + (b ? 1 : 0),
                      M = Ni(y),
                      _ = [],
                      z = y.setContext(d.getContext()),
                      w = z.drawBorder ? z.borderWidth : 0,
                      O = w / 2,
                      C = function (t) {
                        return Ne(p, t, w)
                      }
                    if ('top' === m)
                      (e = C(d.bottom)), (o = d.bottom - M), (s = e - O), (u = C(t.top) + O), (f = t.bottom)
                    else if ('bottom' === m)
                      (e = C(d.top)), (u = t.top), (f = C(t.bottom) - O), (o = e + O), (s = d.top + M)
                    else if ('left' === m)
                      (e = C(d.right)), (a = d.right - M), (l = e - O), (c = C(t.left) + O), (h = t.right)
                    else if ('right' === m)
                      (e = C(d.left)), (c = t.left), (h = C(t.right) - O), (a = e + O), (l = d.left + M)
                    else if ('x' === v) {
                      if ('center' === m) e = C((t.top + t.bottom) / 2 + 0.5)
                      else if (st(m)) {
                        var j = Object.keys(m)[0],
                          S = m[j]
                        e = C(d.chart.scales[j].getPixelForValue(S))
                      }
                      ;(u = t.top), (f = t.bottom), (s = (o = e + O) + M)
                    } else if ('y' === v) {
                      if ('center' === m) e = C((t.left + t.right) / 2)
                      else if (st(m)) {
                        var F = Object.keys(m)[0],
                          P = m[F]
                        e = C(d.chart.scales[F].getPixelForValue(P))
                      }
                      ;(l = (a = e - O) - M), (c = t.left), (h = t.right)
                    }
                    var D = ht(g.ticks.maxTicksLimit, x),
                      A = Math.max(1, Math.ceil(x / D))
                    for (r = 0; r < x; r += A) {
                      var E = y.setContext(d.getContext(r)),
                        T = E.lineWidth,
                        B = E.color,
                        L = y.borderDash || [],
                        R = E.borderDashOffset,
                        I = E.tickWidth,
                        V = E.tickColor,
                        H = E.tickBorderDash || [],
                        N = E.tickBorderDashOffset
                      void 0 !== (n = Hi(d, r, b)) &&
                        ((i = Ne(p, n, T)),
                        k ? (a = l = c = h = i) : (o = s = u = f = i),
                        _.push({
                          tx1: a,
                          ty1: o,
                          tx2: l,
                          ty2: s,
                          x1: c,
                          y1: u,
                          x2: h,
                          y2: f,
                          width: T,
                          color: B,
                          borderDash: L,
                          borderDashOffset: R,
                          tickWidth: I,
                          tickColor: V,
                          tickBorderDash: H,
                          tickBorderDashOffset: N
                        }))
                    }
                    return (d._ticksLength = x), (d._borderValue = e), _
                  }
                },
                {
                  key: '_computeLabelItems',
                  value: function (t) {
                    var e,
                      r,
                      n,
                      i,
                      a,
                      o,
                      l,
                      s,
                      c,
                      u,
                      h,
                      f = this,
                      d = f.axis,
                      v = f.options,
                      p = v.position,
                      g = v.ticks,
                      y = f.isHorizontal(),
                      m = f.ticks,
                      b = g.align,
                      k = g.crossAlign,
                      x = g.padding,
                      M = g.mirror,
                      _ = Ni(v.grid),
                      z = _ + x,
                      w = M ? -x : z,
                      O = -Ht(f.labelRotation),
                      C = [],
                      j = 'middle'
                    if ('top' === p) (a = f.bottom - w), (o = f._getXAxisLabelAlignment())
                    else if ('bottom' === p) (a = f.top + w), (o = f._getXAxisLabelAlignment())
                    else if ('left' === p) {
                      var S = f._getYAxisLabelAlignment(_)
                      ;(o = S.textAlign), (i = S.x)
                    } else if ('right' === p) {
                      var F = f._getYAxisLabelAlignment(_)
                      ;(o = F.textAlign), (i = F.x)
                    } else if ('x' === d) {
                      if ('center' === p) a = (t.top + t.bottom) / 2 + z
                      else if (st(p)) {
                        var P = Object.keys(p)[0],
                          D = p[P]
                        a = f.chart.scales[P].getPixelForValue(D) + z
                      }
                      o = f._getXAxisLabelAlignment()
                    } else if ('y' === d) {
                      if ('center' === p) i = (t.left + t.right) / 2 - z
                      else if (st(p)) {
                        var A = Object.keys(p)[0],
                          E = p[A]
                        i = f.chart.scales[A].getPixelForValue(E)
                      }
                      o = f._getYAxisLabelAlignment(_).textAlign
                    }
                    'y' === d && ('start' === b ? (j = 'top') : 'end' === b && (j = 'bottom'))
                    var T = f._getLabelSizes()
                    for (e = 0, r = m.length; e < r; ++e) {
                      n = m[e].label
                      var B = g.setContext(f.getContext(e))
                      ;(l = f.getPixelForTick(e) + g.labelOffset), (c = (s = f._resolveTickFontOptions(e)).lineHeight)
                      var L = (u = lt(n) ? n.length : 1) / 2,
                        R = B.color,
                        I = B.textStrokeColor,
                        V = B.textStrokeWidth
                      y
                        ? ((i = l),
                          (h =
                            'top' === p
                              ? 'near' === k || 0 !== O
                                ? -u * c + c / 2
                                : 'center' === k
                                ? -T.highest.height / 2 - L * c + c
                                : -T.highest.height + c / 2
                              : 'near' === k || 0 !== O
                              ? c / 2
                              : 'center' === k
                              ? T.highest.height / 2 - L * c
                              : T.highest.height - u * c),
                          M && (h *= -1))
                        : ((a = l), (h = ((1 - u) * c) / 2))
                      var H = void 0
                      if (B.showLabelBackdrop) {
                        var N = lr(B.backdropPadding),
                          W = T.heights[e],
                          $ = T.widths[e],
                          Y = a + h - N.top,
                          U = i - N.left
                        switch (j) {
                          case 'middle':
                            Y -= W / 2
                            break
                          case 'bottom':
                            Y -= W
                        }
                        switch (o) {
                          case 'center':
                            U -= $ / 2
                            break
                          case 'right':
                            U -= $
                        }
                        H = { left: U, top: Y, width: $ + N.width, height: W + N.height, color: B.backdropColor }
                      }
                      C.push({
                        rotation: O,
                        label: n,
                        font: s,
                        color: R,
                        strokeColor: I,
                        strokeWidth: V,
                        textOffset: h,
                        textAlign: o,
                        textBaseline: j,
                        translation: [i, a],
                        backdrop: H
                      })
                    }
                    return C
                  }
                },
                {
                  key: '_getXAxisLabelAlignment',
                  value: function () {
                    var t = this.options,
                      e = t.position,
                      r = t.ticks
                    if (-Ht(this.labelRotation)) return 'top' === e ? 'left' : 'right'
                    var n = 'center'
                    return 'start' === r.align ? (n = 'left') : 'end' === r.align && (n = 'right'), n
                  }
                },
                {
                  key: '_getYAxisLabelAlignment',
                  value: function (t) {
                    var e,
                      r,
                      n = this,
                      i = n.options,
                      a = i.position,
                      o = i.ticks,
                      l = o.crossAlign,
                      s = o.mirror,
                      c = o.padding,
                      u = t + c,
                      h = n._getLabelSizes().widest.width
                    return (
                      'left' === a
                        ? s
                          ? ((r = n.right + c),
                            'near' === l
                              ? (e = 'left')
                              : 'center' === l
                              ? ((e = 'center'), (r += h / 2))
                              : ((e = 'right'), (r += h)))
                          : ((r = n.right - u),
                            'near' === l
                              ? (e = 'right')
                              : 'center' === l
                              ? ((e = 'center'), (r -= h / 2))
                              : ((e = 'left'), (r = n.left)))
                        : 'right' === a
                        ? s
                          ? ((r = n.left + c),
                            'near' === l
                              ? (e = 'right')
                              : 'center' === l
                              ? ((e = 'center'), (r -= h / 2))
                              : ((e = 'left'), (r -= h)))
                          : ((r = n.left + u),
                            'near' === l
                              ? (e = 'left')
                              : 'center' === l
                              ? ((e = 'center'), (r += h / 2))
                              : ((e = 'right'), (r = n.right)))
                        : (e = 'right'),
                      { textAlign: e, x: r }
                    )
                  }
                },
                {
                  key: '_computeLabelArea',
                  value: function () {
                    var t = this
                    if (!t.options.ticks.mirror) {
                      var e = t.chart,
                        r = t.options.position
                      return 'left' === r || 'right' === r
                        ? { top: 0, left: t.left, bottom: e.height, right: t.right }
                        : 'top' === r || 'bottom' === r
                        ? { top: t.top, left: 0, bottom: t.bottom, right: e.width }
                        : void 0
                    }
                  }
                },
                {
                  key: 'drawBackground',
                  value: function () {
                    var t = this.ctx,
                      e = this.options.backgroundColor,
                      r = this.left,
                      n = this.top,
                      i = this.width,
                      a = this.height
                    e && (t.save(), (t.fillStyle = e), t.fillRect(r, n, i, a), t.restore())
                  }
                },
                {
                  key: 'getLineWidthForValue',
                  value: function (t) {
                    var e = this,
                      r = e.options.grid
                    if (!e._isVisible() || !r.display) return 0
                    var n = e.ticks.findIndex(function (e) {
                      return e.value === t
                    })
                    return n >= 0 ? r.setContext(e.getContext(n)).lineWidth : 0
                  }
                },
                {
                  key: 'drawGrid',
                  value: function (t) {
                    var e,
                      r,
                      n = this,
                      i = n.options.grid,
                      a = n.ctx,
                      o = n._gridLineItems || (n._gridLineItems = n._computeGridLineItems(t)),
                      l = function (t, e, r) {
                        r.width &&
                          r.color &&
                          (a.save(),
                          (a.lineWidth = r.width),
                          (a.strokeStyle = r.color),
                          a.setLineDash(r.borderDash || []),
                          (a.lineDashOffset = r.borderDashOffset),
                          a.beginPath(),
                          a.moveTo(t.x, t.y),
                          a.lineTo(e.x, e.y),
                          a.stroke(),
                          a.restore())
                      }
                    if (i.display)
                      for (e = 0, r = o.length; e < r; ++e) {
                        var s = o[e]
                        i.drawOnChartArea && l({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }, s),
                          i.drawTicks &&
                            l(
                              { x: s.tx1, y: s.ty1 },
                              { x: s.tx2, y: s.ty2 },
                              {
                                color: s.tickColor,
                                width: s.tickWidth,
                                borderDash: s.tickBorderDash,
                                borderDashOffset: s.tickBorderDashOffset
                              }
                            )
                      }
                  }
                },
                {
                  key: 'drawBorder',
                  value: function () {
                    var t = this,
                      e = t.chart,
                      r = t.ctx,
                      n = t.options.grid,
                      i = n.setContext(t.getContext()),
                      a = n.drawBorder ? i.borderWidth : 0
                    if (a) {
                      var o,
                        l,
                        s,
                        c,
                        u = n.setContext(t.getContext(0)).lineWidth,
                        h = t._borderValue
                      t.isHorizontal()
                        ? ((o = Ne(e, t.left, a) - a / 2), (l = Ne(e, t.right, u) + u / 2), (s = c = h))
                        : ((s = Ne(e, t.top, a) - a / 2), (c = Ne(e, t.bottom, u) + u / 2), (o = l = h)),
                        r.save(),
                        (r.lineWidth = i.borderWidth),
                        (r.strokeStyle = i.borderColor),
                        r.beginPath(),
                        r.moveTo(o, s),
                        r.lineTo(l, c),
                        r.stroke(),
                        r.restore()
                    }
                  }
                },
                {
                  key: 'drawLabels',
                  value: function (t) {
                    var e = this
                    if (e.options.ticks.display) {
                      var r = e.ctx,
                        n = e._computeLabelArea()
                      n && Ue(r, n)
                      var i,
                        a,
                        o = e._labelItems || (e._labelItems = e._computeLabelItems(t))
                      for (i = 0, a = o.length; i < a; ++i) {
                        var l = o[i],
                          s = l.font,
                          c = l.label
                        l.backdrop &&
                          ((r.fillStyle = l.backdrop.color),
                          r.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height)),
                          Ze(r, c, 0, l.textOffset, s, l)
                      }
                      n && Xe(r)
                    }
                  }
                },
                {
                  key: 'drawTitle',
                  value: function () {
                    var t = this.ctx,
                      e = this.options,
                      r = e.position,
                      n = e.title,
                      i = e.reverse
                    if (n.display) {
                      var a = sr(n.font),
                        o = lr(n.padding),
                        l = n.align,
                        s = a.lineHeight / 2
                      'bottom' === r || 'center' === r || st(r)
                        ? ((s += o.bottom), lt(n.text) && (s += a.lineHeight * (n.text.length - 1)))
                        : (s += o.top)
                      var c = (function (t, e, r, n) {
                          var i,
                            a,
                            o,
                            l = t.top,
                            s = t.left,
                            c = t.bottom,
                            u = t.right,
                            h = t.chart,
                            f = h.chartArea,
                            d = h.scales,
                            v = 0,
                            p = c - l,
                            g = u - s
                          if (t.isHorizontal()) {
                            if (((a = nt(n, s, u)), st(r))) {
                              var y = Object.keys(r)[0],
                                m = r[y]
                              o = d[y].getPixelForValue(m) + p - e
                            } else o = 'center' === r ? (f.bottom + f.top) / 2 + p - e : Ii(t, r, e)
                            i = u - s
                          } else {
                            if (st(r)) {
                              var b = Object.keys(r)[0],
                                k = r[b]
                              a = d[b].getPixelForValue(k) - g + e
                            } else a = 'center' === r ? (f.left + f.right) / 2 - g + e : Ii(t, r, e)
                            ;(o = nt(n, c, l)), (v = 'left' === r ? -Dt : Dt)
                          }
                          return { titleX: a, titleY: o, maxWidth: i, rotation: v }
                        })(this, s, r, l),
                        u = c.titleX,
                        h = c.titleY,
                        f = c.maxWidth,
                        d = c.rotation
                      Ze(t, n.text, 0, 0, a, {
                        color: n.color,
                        maxWidth: f,
                        rotation: d,
                        textAlign: $i(l, r, i),
                        textBaseline: 'middle',
                        translation: [u, h]
                      })
                    }
                  }
                },
                {
                  key: 'draw',
                  value: function (t) {
                    var e = this
                    e._isVisible() &&
                      (e.drawBackground(), e.drawGrid(t), e.drawBorder(), e.drawTitle(), e.drawLabels(t))
                  }
                },
                {
                  key: '_layers',
                  value: function () {
                    var t = this,
                      e = t.options,
                      n = (e.ticks && e.ticks.z) || 0,
                      i = ht(e.grid && e.grid.z, -1)
                    return t._isVisible() && t.draw === r.prototype.draw
                      ? [
                          {
                            z: i,
                            draw: function (e) {
                              t.drawBackground(), t.drawGrid(e), t.drawTitle()
                            }
                          },
                          {
                            z: i + 1,
                            draw: function () {
                              t.drawBorder()
                            }
                          },
                          {
                            z: n,
                            draw: function (e) {
                              t.drawLabels(e)
                            }
                          }
                        ]
                      : [
                          {
                            z: n,
                            draw: function (e) {
                              t.draw(e)
                            }
                          }
                        ]
                  }
                },
                {
                  key: 'getMatchingVisibleMetas',
                  value: function (t) {
                    var e,
                      r,
                      n = this,
                      i = n.chart.getSortedVisibleDatasetMetas(),
                      a = n.axis + 'AxisID',
                      o = []
                    for (e = 0, r = i.length; e < r; ++e) {
                      var l = i[e]
                      l[a] !== n.id || (t && l.type !== t) || o.push(l)
                    }
                    return o
                  }
                },
                {
                  key: '_resolveTickFontOptions',
                  value: function (t) {
                    return sr(this.options.ticks.setContext(this.getContext(t)).font)
                  }
                },
                {
                  key: '_maxDigits',
                  value: function () {
                    var t = this,
                      e = t._resolveTickFontOptions(0).lineHeight
                    return (t.isHorizontal() ? t.width : t.height) / e
                  }
                }
              ]),
              r
            )
          })(Ei),
          Ui = (function () {
            function t(e, r, n) {
              Object(f.a)(this, t),
                (this.type = e),
                (this.scope = r),
                (this.override = n),
                (this.items = Object.create(null))
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'isForType',
                  value: function (t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                  }
                },
                {
                  key: 'register',
                  value: function (t) {
                    var e,
                      r = this,
                      n = Object.getPrototypeOf(t)
                    ;(function (t) {
                      return 'id' in t && 'defaults' in t
                    })(n) && (e = r.register(n))
                    var i = r.items,
                      a = t.id,
                      o = r.scope + '.' + a
                    if (!a) throw new Error('class does not have id: ' + t)
                    return (
                      a in i ||
                        ((i[a] = t),
                        (function (t, e, r) {
                          var n = bt(Object.create(null), [r ? Ie.get(r) : {}, Ie.get(e), t.defaults])
                          Ie.set(e, n),
                            t.defaultRoutes &&
                              (function (t, e) {
                                Object.keys(e).forEach(function (r) {
                                  var n = r.split('.'),
                                    i = n.pop(),
                                    a = [t].concat(n).join('.'),
                                    o = e[r].split('.'),
                                    l = o.pop(),
                                    s = o.join('.')
                                  Ie.route(a, i, s, l)
                                })
                              })(e, t.defaultRoutes)
                          t.descriptors && Ie.describe(e, t.descriptors)
                        })(t, o, e),
                        r.override && Ie.override(t.id, t.overrides)),
                      o
                    )
                  }
                },
                {
                  key: 'get',
                  value: function (t) {
                    return this.items[t]
                  }
                },
                {
                  key: 'unregister',
                  value: function (t) {
                    var e = this.items,
                      r = t.id,
                      n = this.scope
                    r in e && delete e[r], n && r in Ie[n] && (delete Ie[n][r], this.override && delete Ee[r])
                  }
                }
              ]),
              t
            )
          })()
        var Xi = (function () {
            function t() {
              Object(f.a)(this, t),
                (this.controllers = new Ui(Fn, 'datasets', !0)),
                (this.elements = new Ui(Ei, 'elements')),
                (this.plugins = new Ui(Object, 'plugins')),
                (this.scales = new Ui(Yi, 'scales')),
                (this._typedRegistries = [this.controllers, this.scales, this.elements])
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'add',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('register', e)
                  }
                },
                {
                  key: 'remove',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('unregister', e)
                  }
                },
                {
                  key: 'addControllers',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('register', e, this.controllers)
                  }
                },
                {
                  key: 'addElements',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('register', e, this.elements)
                  }
                },
                {
                  key: 'addPlugins',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('register', e, this.plugins)
                  }
                },
                {
                  key: 'addScales',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('register', e, this.scales)
                  }
                },
                {
                  key: 'getController',
                  value: function (t) {
                    return this._get(t, this.controllers, 'controller')
                  }
                },
                {
                  key: 'getElement',
                  value: function (t) {
                    return this._get(t, this.elements, 'element')
                  }
                },
                {
                  key: 'getPlugin',
                  value: function (t) {
                    return this._get(t, this.plugins, 'plugin')
                  }
                },
                {
                  key: 'getScale',
                  value: function (t) {
                    return this._get(t, this.scales, 'scale')
                  }
                },
                {
                  key: 'removeControllers',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('unregister', e, this.controllers)
                  }
                },
                {
                  key: 'removeElements',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('unregister', e, this.elements)
                  }
                },
                {
                  key: 'removePlugins',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('unregister', e, this.plugins)
                  }
                },
                {
                  key: 'removeScales',
                  value: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                    this._each('unregister', e, this.scales)
                  }
                },
                {
                  key: '_each',
                  value: function (t, e, r) {
                    var n = this
                    Object(u.a)(e).forEach(function (e) {
                      var i = r || n._getRegistryForType(e)
                      r || i.isForType(e) || (i === n.plugins && e.id)
                        ? n._exec(t, i, e)
                        : vt(e, function (e) {
                            var i = r || n._getRegistryForType(e)
                            n._exec(t, i, e)
                          })
                    })
                  }
                },
                {
                  key: '_exec',
                  value: function (t, e, r) {
                    var n = zt(t)
                    dt(r['before' + n], [], r), e[t](r), dt(r['after' + n], [], r)
                  }
                },
                {
                  key: '_getRegistryForType',
                  value: function (t) {
                    for (var e = 0; e < this._typedRegistries.length; e++) {
                      var r = this._typedRegistries[e]
                      if (r.isForType(t)) return r
                    }
                    return this.plugins
                  }
                },
                {
                  key: '_get',
                  value: function (t, e, r) {
                    var n = e.get(t)
                    if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + r + '.')
                    return n
                  }
                }
              ]),
              t
            )
          })(),
          qi = new Xi(),
          Ki = (function () {
            function t() {
              Object(f.a)(this, t), (this._init = [])
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'notify',
                  value: function (t, e, r, n) {
                    var i = this
                    'beforeInit' === e && ((i._init = i._createDescriptors(t, !0)), i._notify(i._init, t, 'install'))
                    var a = n ? i._descriptors(t).filter(n) : i._descriptors(t),
                      o = i._notify(a, t, e, r)
                    return 'destroy' === e && (i._notify(a, t, 'stop'), i._notify(i._init, t, 'uninstall')), o
                  }
                },
                {
                  key: '_notify',
                  value: function (t, e, r, n) {
                    n = n || {}
                    var i,
                      a = Object(v.a)(t)
                    try {
                      for (a.s(); !(i = a.n()).done; ) {
                        var o = i.value,
                          l = o.plugin
                        if (!1 === dt(l[r], [e, n, o.options], l) && n.cancelable) return !1
                      }
                    } catch (s) {
                      a.e(s)
                    } finally {
                      a.f()
                    }
                    return !0
                  }
                },
                {
                  key: 'invalidate',
                  value: function () {
                    ot(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
                  }
                },
                {
                  key: '_descriptors',
                  value: function (t) {
                    if (this._cache) return this._cache
                    var e = (this._cache = this._createDescriptors(t))
                    return this._notifyStateChanges(t), e
                  }
                },
                {
                  key: '_createDescriptors',
                  value: function (t, e) {
                    var r = t && t.config,
                      n = ht(r.options && r.options.plugins, {}),
                      i = (function (t) {
                        for (var e = [], r = Object.keys(qi.plugins.items), n = 0; n < r.length; n++)
                          e.push(qi.getPlugin(r[n]))
                        for (var i = t.plugins || [], a = 0; a < i.length; a++) {
                          var o = i[a]
                          ;-1 === e.indexOf(o) && e.push(o)
                        }
                        return e
                      })(r)
                    return !1 !== n || e
                      ? (function (t, e, r, n) {
                          for (var i = [], a = t.getContext(), o = 0; o < e.length; o++) {
                            var l = e[o],
                              s = Zi(r[l.id], n)
                            null !== s && i.push({ plugin: l, options: Gi(t.config, l, s, a) })
                          }
                          return i
                        })(t, i, n, e)
                      : []
                  }
                },
                {
                  key: '_notifyStateChanges',
                  value: function (t) {
                    var e = this._oldCache || [],
                      r = this._cache,
                      n = function (t, e) {
                        return t.filter(function (t) {
                          return !e.some(function (e) {
                            return t.plugin.id === e.plugin.id
                          })
                        })
                      }
                    this._notify(n(e, r), t, 'stop'), this._notify(n(r, e), t, 'start')
                  }
                }
              ]),
              t
            )
          })()
        function Zi(t, e) {
          return e || !1 !== t ? (!0 === t ? {} : t) : null
        }
        function Gi(t, e, r, n) {
          var i = t.pluginScopeKeys(e),
            a = t.getOptionScopes(r, i)
          return t.createResolver(a, n, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
        }
        function Ji(t, e) {
          var r = Ie.datasets[t] || {}
          return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || r.indexAxis || 'x'
        }
        function Qi(t, e) {
          return 'x' === t || 'y' === t
            ? t
            : e.axis ||
                ('top' === (r = e.position) || 'bottom' === r ? 'x' : 'left' === r || 'right' === r ? 'y' : void 0) ||
                t.charAt(0).toLowerCase()
          var r
        }
        function ta(t) {
          var e = t.options || (t.options = {})
          ;(e.plugins = ht(e.plugins, {})),
            (e.scales = (function (t, e) {
              var r = Ee[t.type] || { scales: {} },
                n = e.scales || {},
                i = Ji(t.type, e),
                a = Object.create(null),
                o = Object.create(null)
              return (
                Object.keys(n).forEach(function (t) {
                  var e = n[t],
                    l = Qi(t, e),
                    s = (function (t, e) {
                      return t === e ? '_index_' : '_value_'
                    })(l, i),
                    c = r.scales || {}
                  ;(a[l] = a[l] || t), (o[t] = kt(Object.create(null), [{ axis: l }, e, c[l], c[s]]))
                }),
                t.data.datasets.forEach(function (r) {
                  var i = r.type || t.type,
                    l = r.indexAxis || Ji(i, e),
                    s = (Ee[i] || {}).scales || {}
                  Object.keys(s).forEach(function (t) {
                    var e = (function (t, e) {
                        var r = t
                        return '_index_' === t ? (r = e) : '_value_' === t && (r = 'x' === e ? 'y' : 'x'), r
                      })(t, l),
                      i = r[e + 'AxisID'] || a[e] || e
                    ;(o[i] = o[i] || Object.create(null)), kt(o[i], [{ axis: e }, n[i], s[t]])
                  })
                }),
                Object.keys(o).forEach(function (t) {
                  var e = o[t]
                  kt(e, [Ie.scales[e.type], Ie.scale])
                }),
                o
              )
            })(t, e))
        }
        function ea(t) {
          return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
        }
        var ra = new Map(),
          na = new Set()
        function ia(t, e) {
          var r = ra.get(t)
          return r || ((r = e()), ra.set(t, r), na.add(r)), r
        }
        var aa = function (t, e, r) {
            var n = _t(e, r)
            void 0 !== n && t.add(n)
          },
          oa = (function () {
            function t(e) {
              Object(f.a)(this, t),
                (this._config = (function (t) {
                  return ((t = t || {}).data = ea(t.data)), ta(t), t
                })(e)),
                (this._scopeCache = new Map()),
                (this._resolverCache = new Map())
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'platform',
                  get: function () {
                    return this._config.platform
                  }
                },
                {
                  key: 'type',
                  get: function () {
                    return this._config.type
                  },
                  set: function (t) {
                    this._config.type = t
                  }
                },
                {
                  key: 'data',
                  get: function () {
                    return this._config.data
                  },
                  set: function (t) {
                    this._config.data = ea(t)
                  }
                },
                {
                  key: 'options',
                  get: function () {
                    return this._config.options
                  },
                  set: function (t) {
                    this._config.options = t
                  }
                },
                {
                  key: 'plugins',
                  get: function () {
                    return this._config.plugins
                  }
                },
                {
                  key: 'update',
                  value: function () {
                    var t = this._config
                    this.clearCache(), ta(t)
                  }
                },
                {
                  key: 'clearCache',
                  value: function () {
                    this._scopeCache.clear(), this._resolverCache.clear()
                  }
                },
                {
                  key: 'datasetScopeKeys',
                  value: function (t) {
                    return ia(t, function () {
                      return [['datasets.'.concat(t), '']]
                    })
                  }
                },
                {
                  key: 'datasetAnimationScopeKeys',
                  value: function (t, e) {
                    return ia(''.concat(t, '.transition.').concat(e), function () {
                      return [
                        ['datasets.'.concat(t, '.transitions.').concat(e), 'transitions.'.concat(e)],
                        ['datasets.'.concat(t), '']
                      ]
                    })
                  }
                },
                {
                  key: 'datasetElementScopeKeys',
                  value: function (t, e) {
                    return ia(''.concat(t, '-').concat(e), function () {
                      return [
                        [
                          'datasets.'.concat(t, '.elements.').concat(e),
                          'datasets.'.concat(t),
                          'elements.'.concat(e),
                          ''
                        ]
                      ]
                    })
                  }
                },
                {
                  key: 'pluginScopeKeys',
                  value: function (t) {
                    var e = t.id,
                      r = this.type
                    return ia(''.concat(r, '-plugin-').concat(e), function () {
                      return [['plugins.'.concat(e)].concat(Object(u.a)(t.additionalOptionScopes || []))]
                    })
                  }
                },
                {
                  key: '_cachedScopes',
                  value: function (t, e) {
                    var r = this._scopeCache,
                      n = r.get(t)
                    return (n && !e) || ((n = new Map()), r.set(t, n)), n
                  }
                },
                {
                  key: 'getOptionScopes',
                  value: function (t, e, r) {
                    var n = this.options,
                      i = this.type,
                      a = this._cachedScopes(t, r),
                      o = a.get(e)
                    if (o) return o
                    var l = new Set()
                    e.forEach(function (e) {
                      t &&
                        (l.add(t),
                        e.forEach(function (e) {
                          return aa(l, t, e)
                        })),
                        e.forEach(function (t) {
                          return aa(l, n, t)
                        }),
                        e.forEach(function (t) {
                          return aa(l, Ee[i] || {}, t)
                        }),
                        e.forEach(function (t) {
                          return aa(l, Ie, t)
                        }),
                        e.forEach(function (t) {
                          return aa(l, Te, t)
                        })
                    })
                    var s = Array.from(l)
                    return 0 === s.length && s.push(Object.create(null)), na.has(e) && a.set(e, s), s
                  }
                },
                {
                  key: 'chartOptionScopes',
                  value: function () {
                    var t = this.options,
                      e = this.type
                    return [t, Ee[e] || {}, Ie.datasets[e] || {}, { type: e }, Ie, Te]
                  }
                },
                {
                  key: 'resolveNamedOptions',
                  value: function (t, e, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [''],
                      i = { $shared: !0 },
                      a = la(this._resolverCache, t, n),
                      o = a.resolver,
                      l = a.subPrefixes,
                      s = o
                    if (sa(o, e)) {
                      ;(i.$shared = !1), (r = Ot(r) ? r() : r)
                      var c = this.createResolver(t, r, l)
                      s = yr(o, r, c)
                    }
                    var u,
                      h = Object(v.a)(e)
                    try {
                      for (h.s(); !(u = h.n()).done; ) {
                        var f = u.value
                        i[f] = s[f]
                      }
                    } catch (d) {
                      h.e(d)
                    } finally {
                      h.f()
                    }
                    return i
                  }
                },
                {
                  key: 'createResolver',
                  value: function (t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [''],
                      n = arguments.length > 3 ? arguments[3] : void 0,
                      i = la(this._resolverCache, t, r),
                      a = i.resolver
                    return st(e) ? yr(a, e, void 0, n) : a
                  }
                }
              ]),
              t
            )
          })()
        function la(t, e, r) {
          var n = t.get(e)
          n || ((n = new Map()), t.set(e, n))
          var i = r.join(),
            a = n.get(i)
          a ||
            ((a = {
              resolver: gr(e, r),
              subPrefixes: r.filter(function (t) {
                return !t.toLowerCase().includes('hover')
              })
            }),
            n.set(i, a))
          return a
        }
        function sa(t, e) {
          var r,
            n = mr(t),
            i = n.isScriptable,
            a = n.isIndexable,
            o = Object(v.a)(e)
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var l = r.value
              if ((i(l) && Ot(t[l])) || (a(l) && lt(t[l]))) return !0
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return !1
        }
        var ca = ['top', 'bottom', 'left', 'right', 'chartArea']
        function ua(t, e) {
          return 'top' === t || 'bottom' === t || (-1 === ca.indexOf(t) && 'x' === e)
        }
        function ha(t, e) {
          return function (r, n) {
            return r[t] === n[t] ? r[e] - n[e] : r[t] - n[t]
          }
        }
        function fa(t) {
          var e = t.chart,
            r = e.options.animation
          e.notifyPlugins('afterRender'), dt(r && r.onComplete, [t], e)
        }
        function da(t) {
          var e = t.chart,
            r = e.options.animation
          dt(r && r.onProgress, [t], e)
        }
        function va(t) {
          return (
            Rr() && 'string' === typeof t ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
          )
        }
        var pa = {},
          ga = function (t) {
            var e = va(t)
            return Object.values(pa)
              .filter(function (t) {
                return t.canvas === e
              })
              .pop()
          },
          ya = (function () {
            function t(e, r) {
              var n = this
              Object(f.a)(this, t)
              var i = this,
                a = (this.config = new oa(r)),
                o = va(e),
                l = ga(o)
              if (l)
                throw new Error(
                  "Canvas is already in use. Chart with ID '" +
                    l.id +
                    "' must be destroyed before the canvas can be reused."
                )
              var s = a.createResolver(a.chartOptionScopes(), i.getContext())
              this.platform = new (a.platform ||
                (function (t) {
                  return !Rr() || ('undefined' !== typeof OffscreenCanvas && t instanceof OffscreenCanvas) ? ki : Ai
                })(o))()
              var c = i.platform.acquireContext(o, s.aspectRatio),
                u = c && c.canvas,
                h = u && u.height,
                d = u && u.width
              ;(this.id = at()),
                (this.ctx = c),
                (this.canvas = u),
                (this.width = d),
                (this.height = h),
                (this._options = s),
                (this._aspectRatio = this.aspectRatio),
                (this._layers = []),
                (this._metasets = []),
                (this._stacks = void 0),
                (this.boxes = []),
                (this.currentDevicePixelRatio = void 0),
                (this.chartArea = void 0),
                (this._active = []),
                (this._lastEvent = void 0),
                (this._listeners = {}),
                (this._responsiveListeners = void 0),
                (this._sortedMetasets = []),
                (this.scales = {}),
                (this._plugins = new Ki()),
                (this.$proxies = {}),
                (this._hiddenIndices = {}),
                (this.attached = !1),
                (this._animationsDisabled = void 0),
                (this.$context = void 0),
                (this._doResize = (function (t, e) {
                  var r
                  return function () {
                    return e ? (clearTimeout(r), (r = setTimeout(t, e))) : t(), e
                  }
                })(function () {
                  return n.update('resize')
                }, s.resizeDelay || 0)),
                (pa[i.id] = i),
                c && u
                  ? (dn.listen(i, 'complete', fa),
                    dn.listen(i, 'progress', da),
                    i._initialize(),
                    i.attached && i.update())
                  : console.error("Failed to create chart: can't acquire context from the given item")
            }
            return (
              Object(d.a)(t, [
                {
                  key: 'aspectRatio',
                  get: function () {
                    var t = this.options,
                      e = t.aspectRatio,
                      r = t.maintainAspectRatio,
                      n = this.width,
                      i = this.height,
                      a = this._aspectRatio
                    return ot(e) ? (r && a ? a : i ? n / i : null) : e
                  }
                },
                {
                  key: 'data',
                  get: function () {
                    return this.config.data
                  },
                  set: function (t) {
                    this.config.data = t
                  }
                },
                {
                  key: 'options',
                  get: function () {
                    return this._options
                  },
                  set: function (t) {
                    this.config.options = t
                  }
                },
                {
                  key: '_initialize',
                  value: function () {
                    var t = this
                    return (
                      t.notifyPlugins('beforeInit'),
                      t.options.responsive ? t.resize() : Xr(t, t.options.devicePixelRatio),
                      t.bindEvents(),
                      t.notifyPlugins('afterInit'),
                      t
                    )
                  }
                },
                {
                  key: 'clear',
                  value: function () {
                    return We(this.canvas, this.ctx), this
                  }
                },
                {
                  key: 'stop',
                  value: function () {
                    return dn.stop(this), this
                  }
                },
                {
                  key: 'resize',
                  value: function (t, e) {
                    dn.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e)
                  }
                },
                {
                  key: '_resize',
                  value: function (t, e) {
                    var r = this,
                      n = r.options,
                      i = r.canvas,
                      a = n.maintainAspectRatio && r.aspectRatio,
                      o = r.platform.getMaximumSize(i, t, e, a),
                      l = n.devicePixelRatio || r.platform.getDevicePixelRatio()
                    ;(r.width = o.width),
                      (r.height = o.height),
                      (r._aspectRatio = r.aspectRatio),
                      Xr(r, l, !0) &&
                        (r.notifyPlugins('resize', { size: o }),
                        dt(n.onResize, [r, o], r),
                        r.attached && r._doResize() && r.render())
                  }
                },
                {
                  key: 'ensureScalesHaveIDs',
                  value: function () {
                    vt(this.options.scales || {}, function (t, e) {
                      t.id = e
                    })
                  }
                },
                {
                  key: 'buildOrUpdateScales',
                  value: function () {
                    var t = this,
                      e = t.options,
                      r = e.scales,
                      n = t.scales,
                      i = Object.keys(n).reduce(function (t, e) {
                        return (t[e] = !1), t
                      }, {}),
                      a = []
                    r &&
                      (a = a.concat(
                        Object.keys(r).map(function (t) {
                          var e = r[t],
                            n = Qi(t, e),
                            i = 'r' === n,
                            a = 'x' === n
                          return {
                            options: e,
                            dposition: i ? 'chartArea' : a ? 'bottom' : 'left',
                            dtype: i ? 'radialLinear' : a ? 'category' : 'linear'
                          }
                        })
                      )),
                      vt(a, function (r) {
                        var a = r.options,
                          o = a.id,
                          l = Qi(o, a),
                          s = ht(a.type, r.dtype)
                        ;(void 0 !== a.position && ua(a.position, l) === ua(r.dposition)) || (a.position = r.dposition),
                          (i[o] = !0)
                        var c = null
                        o in n && n[o].type === s
                          ? (c = n[o])
                          : ((c = new (qi.getScale(s))({ id: o, type: s, ctx: t.ctx, chart: t })), (n[c.id] = c))
                        c.init(a, e)
                      }),
                      vt(i, function (t, e) {
                        t || delete n[e]
                      }),
                      vt(n, function (e) {
                        yi(t, e, e.options), pi(t, e)
                      })
                  }
                },
                {
                  key: '_updateMetasets',
                  value: function () {
                    var t = this,
                      e = t._metasets,
                      r = t.data.datasets.length,
                      n = e.length
                    if (
                      (e.sort(function (t, e) {
                        return t.index - e.index
                      }),
                      n > r)
                    ) {
                      for (var i = r; i < n; ++i) t._destroyDatasetMeta(i)
                      e.splice(r, n - r)
                    }
                    t._sortedMetasets = e.slice(0).sort(ha('order', 'index'))
                  }
                },
                {
                  key: '_removeUnreferencedMetasets',
                  value: function () {
                    var t = this,
                      e = t._metasets,
                      r = t.data.datasets
                    e.length > r.length && delete t._stacks,
                      e.forEach(function (e, n) {
                        0 ===
                          r.filter(function (t) {
                            return t === e._dataset
                          }).length && t._destroyDatasetMeta(n)
                      })
                  }
                },
                {
                  key: 'buildOrUpdateControllers',
                  value: function () {
                    var t,
                      e,
                      r = this,
                      n = [],
                      i = r.data.datasets
                    for (r._removeUnreferencedMetasets(), t = 0, e = i.length; t < e; t++) {
                      var a = i[t],
                        o = r.getDatasetMeta(t),
                        l = a.type || r.config.type
                      if (
                        (o.type && o.type !== l && (r._destroyDatasetMeta(t), (o = r.getDatasetMeta(t))),
                        (o.type = l),
                        (o.indexAxis = a.indexAxis || Ji(l, r.options)),
                        (o.order = a.order || 0),
                        (o.index = t),
                        (o.label = '' + a.label),
                        (o.visible = r.isDatasetVisible(t)),
                        o.controller)
                      )
                        o.controller.updateIndex(t), o.controller.linkScales()
                      else {
                        var s = qi.getController(l),
                          c = Ie.datasets[l],
                          u = c.datasetElementType,
                          h = c.dataElementType
                        Object.assign(s.prototype, {
                          dataElementType: qi.getElement(h),
                          datasetElementType: u && qi.getElement(u)
                        }),
                          (o.controller = new s(r, t)),
                          n.push(o.controller)
                      }
                    }
                    return r._updateMetasets(), n
                  }
                },
                {
                  key: '_resetElements',
                  value: function () {
                    var t = this
                    vt(
                      t.data.datasets,
                      function (e, r) {
                        t.getDatasetMeta(r).controller.reset()
                      },
                      t
                    )
                  }
                },
                {
                  key: 'reset',
                  value: function () {
                    this._resetElements(), this.notifyPlugins('reset')
                  }
                },
                {
                  key: 'update',
                  value: function (t) {
                    var e = this,
                      r = e.config
                    r.update(),
                      (e._options = r.createResolver(r.chartOptionScopes(), e.getContext())),
                      vt(e.scales, function (t) {
                        gi(e, t)
                      })
                    var n = (e._animationsDisabled = !e.options.animation)
                    if (
                      (e.ensureScalesHaveIDs(),
                      e.buildOrUpdateScales(),
                      ((function (t, e) {
                        if (t.size !== e.size) return !1
                        var r,
                          n = Object(v.a)(t)
                        try {
                          for (n.s(); !(r = n.n()).done; ) {
                            var i = r.value
                            if (!e.has(i)) return !1
                          }
                        } catch (a) {
                          n.e(a)
                        } finally {
                          n.f()
                        }
                        return !0
                      })(new Set(Object.keys(e._listeners)), new Set(e.options.events)) &&
                        !!this._responsiveListeners === e.options.responsive) ||
                        (e.unbindEvents(), e.bindEvents()),
                      e._plugins.invalidate(),
                      !1 !== e.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
                    ) {
                      var i = e.buildOrUpdateControllers()
                      e.notifyPlugins('beforeElementsUpdate')
                      for (var a = 0, o = 0, l = e.data.datasets.length; o < l; o++) {
                        var s = e.getDatasetMeta(o).controller,
                          c = !n && -1 === i.indexOf(s)
                        s.buildOrUpdateElements(c), (a = Math.max(+s.getMaxOverflow(), a))
                      }
                      ;(e._minPadding = a),
                        e._updateLayout(a),
                        n ||
                          vt(i, function (t) {
                            t.reset()
                          }),
                        e._updateDatasets(t),
                        e.notifyPlugins('afterUpdate', { mode: t }),
                        e._layers.sort(ha('z', '_idx')),
                        e._lastEvent && e._eventHandler(e._lastEvent, !0),
                        e.render()
                    }
                  }
                },
                {
                  key: '_updateLayout',
                  value: function (t) {
                    var e = this
                    if (!1 !== e.notifyPlugins('beforeLayout', { cancelable: !0 })) {
                      mi(e, e.width, e.height, t)
                      var r = e.chartArea,
                        n = r.width <= 0 || r.height <= 0
                      ;(e._layers = []),
                        vt(
                          e.boxes,
                          function (t) {
                            var r
                            ;(n && 'chartArea' === t.position) ||
                              (t.configure && t.configure(), (r = e._layers).push.apply(r, Object(u.a)(t._layers())))
                          },
                          e
                        ),
                        e._layers.forEach(function (t, e) {
                          t._idx = e
                        }),
                        e.notifyPlugins('afterLayout')
                    }
                  }
                },
                {
                  key: '_updateDatasets',
                  value: function (t) {
                    var e = this,
                      r = 'function' === typeof t
                    if (!1 !== e.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })) {
                      for (var n = 0, i = e.data.datasets.length; n < i; ++n)
                        e._updateDataset(n, r ? t({ datasetIndex: n }) : t)
                      e.notifyPlugins('afterDatasetsUpdate', { mode: t })
                    }
                  }
                },
                {
                  key: '_updateDataset',
                  value: function (t, e) {
                    var r = this,
                      n = r.getDatasetMeta(t),
                      i = { meta: n, index: t, mode: e, cancelable: !0 }
                    !1 !== r.notifyPlugins('beforeDatasetUpdate', i) &&
                      (n.controller._update(e), (i.cancelable = !1), r.notifyPlugins('afterDatasetUpdate', i))
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this
                    !1 !== t.notifyPlugins('beforeRender', { cancelable: !0 }) &&
                      (dn.has(t) ? t.attached && !dn.running(t) && dn.start(t) : (t.draw(), fa({ chart: t })))
                  }
                },
                {
                  key: 'draw',
                  value: function () {
                    var t,
                      e = this
                    if (e._resizeBeforeDraw) {
                      var r = e._resizeBeforeDraw,
                        n = r.width,
                        i = r.height
                      e._resize(n, i), (e._resizeBeforeDraw = null)
                    }
                    if (
                      (e.clear(),
                      !(e.width <= 0 || e.height <= 0) && !1 !== e.notifyPlugins('beforeDraw', { cancelable: !0 }))
                    ) {
                      var a = e._layers
                      for (t = 0; t < a.length && a[t].z <= 0; ++t) a[t].draw(e.chartArea)
                      for (e._drawDatasets(); t < a.length; ++t) a[t].draw(e.chartArea)
                      e.notifyPlugins('afterDraw')
                    }
                  }
                },
                {
                  key: '_getSortedDatasetMetas',
                  value: function (t) {
                    var e,
                      r,
                      n = this._sortedMetasets,
                      i = []
                    for (e = 0, r = n.length; e < r; ++e) {
                      var a = n[e]
                      ;(t && !a.visible) || i.push(a)
                    }
                    return i
                  }
                },
                {
                  key: 'getSortedVisibleDatasetMetas',
                  value: function () {
                    return this._getSortedDatasetMetas(!0)
                  }
                },
                {
                  key: '_drawDatasets',
                  value: function () {
                    var t = this
                    if (!1 !== t.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) {
                      for (var e = t.getSortedVisibleDatasetMetas(), r = e.length - 1; r >= 0; --r) t._drawDataset(e[r])
                      t.notifyPlugins('afterDatasetsDraw')
                    }
                  }
                },
                {
                  key: '_drawDataset',
                  value: function (t) {
                    var e = this,
                      r = e.ctx,
                      n = t._clip,
                      i = !n.disabled,
                      a = e.chartArea,
                      o = { meta: t, index: t.index, cancelable: !0 }
                    !1 !== e.notifyPlugins('beforeDatasetDraw', o) &&
                      (i &&
                        Ue(r, {
                          left: !1 === n.left ? 0 : a.left - n.left,
                          right: !1 === n.right ? e.width : a.right + n.right,
                          top: !1 === n.top ? 0 : a.top - n.top,
                          bottom: !1 === n.bottom ? e.height : a.bottom + n.bottom
                        }),
                      t.controller.draw(),
                      i && Xe(r),
                      (o.cancelable = !1),
                      e.notifyPlugins('afterDatasetDraw', o))
                  }
                },
                {
                  key: 'getElementsAtEventForMode',
                  value: function (t, e, r, n) {
                    var i = ri.modes[e]
                    return 'function' === typeof i ? i(this, t, r, n) : []
                  }
                },
                {
                  key: 'getDatasetMeta',
                  value: function (t) {
                    var e = this.data.datasets[t],
                      r = this._metasets,
                      n = r
                        .filter(function (t) {
                          return t && t._dataset === e
                        })
                        .pop()
                    return (
                      n ||
                        ((n = {
                          type: null,
                          data: [],
                          dataset: null,
                          controller: null,
                          hidden: null,
                          xAxisID: null,
                          yAxisID: null,
                          order: (e && e.order) || 0,
                          index: t,
                          _dataset: e,
                          _parsed: [],
                          _sorted: !1
                        }),
                        r.push(n)),
                      n
                    )
                  }
                },
                {
                  key: 'getContext',
                  value: function () {
                    return this.$context || (this.$context = { chart: this, type: 'chart' })
                  }
                },
                {
                  key: 'getVisibleDatasetCount',
                  value: function () {
                    return this.getSortedVisibleDatasetMetas().length
                  }
                },
                {
                  key: 'isDatasetVisible',
                  value: function (t) {
                    var e = this.data.datasets[t]
                    if (!e) return !1
                    var r = this.getDatasetMeta(t)
                    return 'boolean' === typeof r.hidden ? !r.hidden : !e.hidden
                  }
                },
                {
                  key: 'setDatasetVisibility',
                  value: function (t, e) {
                    this.getDatasetMeta(t).hidden = !e
                  }
                },
                {
                  key: 'toggleDataVisibility',
                  value: function (t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t]
                  }
                },
                {
                  key: 'getDataVisibility',
                  value: function (t) {
                    return !this._hiddenIndices[t]
                  }
                },
                {
                  key: '_updateVisibility',
                  value: function (t, e, r) {
                    var n = this,
                      i = r ? 'show' : 'hide',
                      a = n.getDatasetMeta(t),
                      o = a.controller._resolveAnimations(void 0, i)
                    wt(e)
                      ? ((a.data[e].hidden = !r), n.update())
                      : (n.setDatasetVisibility(t, r),
                        o.update(a, { visible: r }),
                        n.update(function (e) {
                          return e.datasetIndex === t ? i : void 0
                        }))
                  }
                },
                {
                  key: 'hide',
                  value: function (t, e) {
                    this._updateVisibility(t, e, !1)
                  }
                },
                {
                  key: 'show',
                  value: function (t, e) {
                    this._updateVisibility(t, e, !0)
                  }
                },
                {
                  key: '_destroyDatasetMeta',
                  value: function (t) {
                    var e = this,
                      r = e._metasets && e._metasets[t]
                    r && r.controller && (r.controller._destroy(), delete e._metasets[t])
                  }
                },
                {
                  key: 'destroy',
                  value: function () {
                    var t,
                      e,
                      r = this,
                      n = r.canvas,
                      i = r.ctx
                    for (r.stop(), dn.remove(r), t = 0, e = r.data.datasets.length; t < e; ++t) r._destroyDatasetMeta(t)
                    r.config.clearCache(),
                      n &&
                        (r.unbindEvents(), We(n, i), r.platform.releaseContext(i), (r.canvas = null), (r.ctx = null)),
                      r.notifyPlugins('destroy'),
                      delete pa[r.id]
                  }
                },
                {
                  key: 'toBase64Image',
                  value: function () {
                    var t
                    return (t = this.canvas).toDataURL.apply(t, arguments)
                  }
                },
                {
                  key: 'bindEvents',
                  value: function () {
                    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
                  }
                },
                {
                  key: 'bindUserEvents',
                  value: function () {
                    var t = this,
                      e = t._listeners,
                      r = t.platform,
                      n = function (e, r, n) {
                        ;(e.offsetX = r), (e.offsetY = n), t._eventHandler(e)
                      }
                    vt(t.options.events, function (i) {
                      return (function (n, i) {
                        r.addEventListener(t, n, i), (e[n] = i)
                      })(i, n)
                    })
                  }
                },
                {
                  key: 'bindResponsiveEvents',
                  value: function () {
                    var t = this
                    t._responsiveListeners || (t._responsiveListeners = {})
                    var e,
                      r = t._responsiveListeners,
                      n = t.platform,
                      i = function (e, i) {
                        n.addEventListener(t, e, i), (r[e] = i)
                      },
                      a = function (e, i) {
                        r[e] && (n.removeEventListener(t, e, i), delete r[e])
                      },
                      o = function (e, r) {
                        t.canvas && t.resize(e, r)
                      },
                      l = function r() {
                        a('attach', r), (t.attached = !0), t.resize(), i('resize', o), i('detach', e)
                      }
                    ;(e = function () {
                      ;(t.attached = !1), a('resize', o), i('attach', l)
                    }),
                      n.isAttached(t.canvas) ? l() : e()
                  }
                },
                {
                  key: 'unbindEvents',
                  value: function () {
                    var t = this
                    vt(t._listeners, function (e, r) {
                      t.platform.removeEventListener(t, r, e)
                    }),
                      (t._listeners = {}),
                      vt(t._responsiveListeners, function (e, r) {
                        t.platform.removeEventListener(t, r, e)
                      }),
                      (t._responsiveListeners = void 0)
                  }
                },
                {
                  key: 'updateHoverStyle',
                  value: function (t, e, r) {
                    var n,
                      i,
                      a,
                      o = r ? 'set' : 'remove'
                    for (
                      'dataset' === e &&
                        this.getDatasetMeta(t[0].datasetIndex).controller['_' + o + 'DatasetHoverStyle'](),
                        i = 0,
                        a = t.length;
                      i < a;
                      ++i
                    ) {
                      var l = (n = t[i]) && this.getDatasetMeta(n.datasetIndex).controller
                      l && l[o + 'HoverStyle'](n.element, n.datasetIndex, n.index)
                    }
                  }
                },
                {
                  key: 'getActiveElements',
                  value: function () {
                    return this._active || []
                  }
                },
                {
                  key: 'setActiveElements',
                  value: function (t) {
                    var e = this,
                      r = e._active || [],
                      n = t.map(function (t) {
                        var r = t.datasetIndex,
                          n = t.index,
                          i = e.getDatasetMeta(r)
                        if (!i) throw new Error('No dataset found at index ' + r)
                        return { datasetIndex: r, element: i.data[n], index: n }
                      })
                    !pt(n, r) && ((e._active = n), e._updateHoverStyles(n, r))
                  }
                },
                {
                  key: 'notifyPlugins',
                  value: function (t, e, r) {
                    return this._plugins.notify(this, t, e, r)
                  }
                },
                {
                  key: '_updateHoverStyles',
                  value: function (t, e, r) {
                    var n = this,
                      i = n.options.hover,
                      a = function (t, e) {
                        return t.filter(function (t) {
                          return !e.some(function (e) {
                            return t.datasetIndex === e.datasetIndex && t.index === e.index
                          })
                        })
                      },
                      o = a(e, t),
                      l = r ? t : a(t, e)
                    o.length && n.updateHoverStyle(o, i.mode, !1),
                      l.length && i.mode && n.updateHoverStyle(l, i.mode, !0)
                  }
                },
                {
                  key: '_eventHandler',
                  value: function (t, e) {
                    var r = this,
                      n = this,
                      i = { event: t, replay: e, cancelable: !0 },
                      a = function (e) {
                        return (e.options.events || r.options.events).includes(t.type)
                      }
                    if (!1 !== n.notifyPlugins('beforeEvent', i, a)) {
                      var o = n._handleEvent(t, e)
                      return (i.cancelable = !1), n.notifyPlugins('afterEvent', i, a), (o || i.changed) && n.render(), n
                    }
                  }
                },
                {
                  key: '_handleEvent',
                  value: function (t, e) {
                    var r,
                      n = this,
                      i = n._active,
                      a = void 0 === i ? [] : i,
                      o = n.options,
                      l = o.hover,
                      s = e,
                      c = [],
                      u = null
                    return (
                      'mouseout' !== t.type &&
                        ((c = n.getElementsAtEventForMode(t, l.mode, l, s)),
                        (u = 'click' === t.type ? n._lastEvent : t)),
                      (n._lastEvent = null),
                      Ye(t, n.chartArea, n._minPadding) &&
                        (dt(o.onHover, [t, c, n], n),
                        ('mouseup' !== t.type && 'click' !== t.type && 'contextmenu' !== t.type) ||
                          dt(o.onClick, [t, c, n], n)),
                      ((r = !pt(c, a)) || e) && ((n._active = c), n._updateHoverStyles(c, a, e)),
                      (n._lastEvent = u),
                      r
                    )
                  }
                }
              ]),
              t
            )
          })(),
          ma = function () {
            return vt(ya.instances, function (t) {
              return t._plugins.invalidate()
            })
          },
          ba = !0
        function ka(t, e, r) {
          var n = e.startAngle,
            i = e.pixelMargin,
            a = e.x,
            o = e.y,
            l = e.outerRadius,
            s = e.innerRadius,
            c = i / l
          t.beginPath(),
            t.arc(a, o, l, n - c, r + c),
            s > i ? ((c = i / s), t.arc(a, o, s, r + c, n - c, !0)) : t.arc(a, o, i, r + Dt, n - Dt),
            t.closePath(),
            t.clip()
        }
        function xa(t, e, r, n) {
          var i = ir(t.options.borderRadius, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']),
            a = (r - e) / 2,
            o = Math.min(a, (n * e) / 2),
            l = function (t) {
              var e = ((r - Math.min(a, t)) * n) / 2
              return qt(t, 0, Math.min(a, e))
            }
          return {
            outerStart: l(i.outerStart),
            outerEnd: l(i.outerEnd),
            innerStart: qt(i.innerStart, 0, o),
            innerEnd: qt(i.innerEnd, 0, o)
          }
        }
        function Ma(t, e, r, n) {
          return { x: r + t * Math.cos(e), y: n + t * Math.sin(e) }
        }
        function _a(t, e, r, n, i) {
          var a = e.x,
            o = e.y,
            l = e.startAngle,
            s = e.pixelMargin,
            c = e.innerRadius,
            u = Math.max(e.outerRadius + n + r - s, 0),
            h = c > 0 ? c + n + r + s : 0,
            f = 0,
            d = i - l
          if (n) {
            var v = ((c > 0 ? c - n : 0) + (u > 0 ? u - n : 0)) / 2
            f = (d - (0 !== v ? (d * v) / (v + n) : d)) / 2
          }
          var p = (d - Math.max(0.001, d * u - r / Ct) / u) / 2,
            g = l + p + f,
            y = i - p - f,
            m = xa(e, h, u, y - g),
            b = m.outerStart,
            k = m.outerEnd,
            x = m.innerStart,
            M = m.innerEnd,
            _ = u - b,
            z = u - k,
            w = g + b / _,
            O = y - k / z,
            C = h + x,
            j = h + M,
            S = g + x / C,
            F = y - M / j
          if ((t.beginPath(), t.arc(a, o, u, w, O), k > 0)) {
            var P = Ma(z, O, a, o)
            t.arc(P.x, P.y, k, O, y + Dt)
          }
          var D = Ma(j, y, a, o)
          if ((t.lineTo(D.x, D.y), M > 0)) {
            var A = Ma(j, F, a, o)
            t.arc(A.x, A.y, M, y + Dt, F + Math.PI)
          }
          if ((t.arc(a, o, h, y - M / h, g + x / h, !0), x > 0)) {
            var E = Ma(C, S, a, o)
            t.arc(E.x, E.y, x, S + Math.PI, g - Dt)
          }
          var T = Ma(_, g, a, o)
          if ((t.lineTo(T.x, T.y), b > 0)) {
            var B = Ma(_, w, a, o)
            t.arc(B.x, B.y, b, g - Dt, w)
          }
          t.closePath()
        }
        function za(t, e, r, n, i) {
          var a = e.options,
            o = 'inner' === a.borderAlign
          a.borderWidth &&
            (o
              ? ((t.lineWidth = 2 * a.borderWidth), (t.lineJoin = 'round'))
              : ((t.lineWidth = a.borderWidth), (t.lineJoin = 'bevel')),
            e.fullCircles &&
              (function (t, e, r) {
                var n,
                  i = e.x,
                  a = e.y,
                  o = e.startAngle,
                  l = e.pixelMargin,
                  s = e.fullCircles,
                  c = Math.max(e.outerRadius - l, 0),
                  u = e.innerRadius + l
                for (r && ka(t, e, o + jt), t.beginPath(), t.arc(i, a, u, o + jt, o, !0), n = 0; n < s; ++n) t.stroke()
                for (t.beginPath(), t.arc(i, a, c, o, o + jt), n = 0; n < s; ++n) t.stroke()
              })(t, e, o),
            o && ka(t, e, i),
            _a(t, e, r, n, i),
            t.stroke())
        }
        Object.defineProperties(ya, {
          defaults: { enumerable: ba, value: Ie },
          instances: { enumerable: ba, value: pa },
          overrides: { enumerable: ba, value: Ee },
          registry: { enumerable: ba, value: qi },
          version: { enumerable: ba, value: '3.5.1' },
          getChart: { enumerable: ba, value: ga },
          register: {
            enumerable: ba,
            value: function () {
              qi.add.apply(qi, arguments), ma()
            }
          },
          unregister: {
            enumerable: ba,
            value: function () {
              qi.remove.apply(qi, arguments), ma()
            }
          }
        })
        var wa = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this)).options = void 0),
              (n.circumference = void 0),
              (n.startAngle = void 0),
              (n.endAngle = void 0),
              (n.innerRadius = void 0),
              (n.outerRadius = void 0),
              (n.pixelMargin = 0),
              (n.fullCircles = 0),
              t && Object.assign(Object(i.a)(n), t),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'inRange',
                value: function (t, e, r) {
                  var n = (function (t, e) {
                      var r = e.x - t.x,
                        n = e.y - t.y,
                        i = Math.sqrt(r * r + n * n),
                        a = Math.atan2(n, r)
                      return a < -0.5 * Ct && (a += jt), { angle: a, distance: i }
                    })(this.getProps(['x', 'y'], r), { x: t, y: e }),
                    i = n.angle,
                    a = n.distance,
                    o = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], r),
                    l = o.startAngle,
                    s = o.endAngle,
                    c = o.innerRadius,
                    u = o.outerRadius,
                    h = o.circumference,
                    f = this.options.spacing / 2
                  return (h >= jt || Xt(i, l, s)) && a >= c + f && a <= u + f
                }
              },
              {
                key: 'getCenterPoint',
                value: function (t) {
                  var e = this.getProps(
                      ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                      t
                    ),
                    r = e.x,
                    n = e.y,
                    i = e.startAngle,
                    a = e.endAngle,
                    o = e.innerRadius,
                    l = e.outerRadius,
                    s = this.options,
                    c = s.offset,
                    u = (i + a) / 2,
                    h = (o + l + s.spacing + c) / 2
                  return { x: r + Math.cos(u) * h, y: n + Math.sin(u) * h }
                }
              },
              {
                key: 'tooltipPosition',
                value: function (t) {
                  return this.getCenterPoint(t)
                }
              },
              {
                key: 'draw',
                value: function (t) {
                  var e = this,
                    r = e.options,
                    n = e.circumference,
                    i = (r.offset || 0) / 2,
                    a = (r.spacing || 0) / 2
                  if (
                    ((e.pixelMargin = 'inner' === r.borderAlign ? 0.33 : 0),
                    (e.fullCircles = n > jt ? Math.floor(n / jt) : 0),
                    !(0 === n || e.innerRadius < 0 || e.outerRadius < 0))
                  ) {
                    t.save()
                    var o = 0
                    if (i) {
                      o = i / 2
                      var l = (e.startAngle + e.endAngle) / 2
                      t.translate(Math.cos(l) * o, Math.sin(l) * o), e.circumference >= Ct && (o = i)
                    }
                    ;(t.fillStyle = r.backgroundColor), (t.strokeStyle = r.borderColor)
                    var s = (function (t, e, r, n) {
                      var i = e.fullCircles,
                        a = e.startAngle,
                        o = e.circumference,
                        l = e.endAngle
                      if (i) {
                        _a(t, e, r, n, a + jt)
                        for (var s = 0; s < i; ++s) t.fill()
                        isNaN(o) || ((l = a + (o % jt)), o % jt === 0 && (l += jt))
                      }
                      return _a(t, e, r, n, l), t.fill(), l
                    })(t, e, o, a)
                    za(t, e, o, a, s), t.restore()
                  }
                }
              }
            ]),
            r
          )
        })(Ei)
        function Oa(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e
          ;(t.lineCap = ht(r.borderCapStyle, e.borderCapStyle)),
            t.setLineDash(ht(r.borderDash, e.borderDash)),
            (t.lineDashOffset = ht(r.borderDashOffset, e.borderDashOffset)),
            (t.lineJoin = ht(r.borderJoinStyle, e.borderJoinStyle)),
            (t.lineWidth = ht(r.borderWidth, e.borderWidth)),
            (t.strokeStyle = ht(r.borderColor, e.borderColor))
        }
        function Ca(t, e, r) {
          t.lineTo(r.x, r.y)
        }
        function ja(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = t.length,
            i = r.start,
            a = void 0 === i ? 0 : i,
            o = r.end,
            l = void 0 === o ? n - 1 : o,
            s = e.start,
            c = e.end,
            u = Math.max(a, s),
            h = Math.min(l, c),
            f = (a < s && l < s) || (a > c && l > c)
          return { count: n, start: u, loop: e.loop, ilen: h < u && !f ? n + h - u : h - u }
        }
        function Sa(t, e, r, n) {
          var i,
            a,
            o,
            l = e.points,
            s = e.options,
            c = ja(l, r, n),
            u = c.count,
            h = c.start,
            f = c.loop,
            d = c.ilen,
            v = (function (t) {
              return t.stepped ? qe : t.tension || 'monotone' === t.cubicInterpolationMode ? Ke : Ca
            })(s),
            p = n || {},
            g = p.move,
            y = void 0 === g || g,
            m = p.reverse
          for (i = 0; i <= d; ++i)
            (a = l[(h + (m ? d - i : i)) % u]).skip ||
              (y ? (t.moveTo(a.x, a.y), (y = !1)) : v(t, o, a, m, s.stepped), (o = a))
          return f && v(t, o, (a = l[(h + (m ? d : 0)) % u]), m, s.stepped), !!f
        }
        function Fa(t, e, r, n) {
          var i,
            a,
            o,
            l,
            s,
            c,
            u = e.points,
            h = ja(u, r, n),
            f = h.count,
            d = h.start,
            v = h.ilen,
            p = n || {},
            g = p.move,
            y = void 0 === g || g,
            m = p.reverse,
            b = 0,
            k = 0,
            x = function (t) {
              return (d + (m ? v - t : t)) % f
            },
            M = function () {
              l !== s && (t.lineTo(b, s), t.lineTo(b, l), t.lineTo(b, c))
            }
          for (y && ((a = u[x(0)]), t.moveTo(a.x, a.y)), i = 0; i <= v; ++i)
            if (!(a = u[x(i)]).skip) {
              var _ = a.x,
                z = a.y,
                w = 0 | _
              w === o
                ? (z < l ? (l = z) : z > s && (s = z), (b = (k * b + _) / ++k))
                : (M(), t.lineTo(_, z), (o = w), (k = 0), (l = s = z)),
                (c = z)
            }
          M()
        }
        function Pa(t) {
          var e = t.options,
            r = e.borderDash && e.borderDash.length
          return !t._decimated && !t._loop && !e.tension && 'monotone' !== e.cubicInterpolationMode && !e.stepped && !r
            ? Fa
            : Sa
        }
        ;(wa.id = 'arc'),
          (wa.defaults = {
            borderAlign: 'center',
            borderColor: '#fff',
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0
          }),
          (wa.defaultRoutes = { backgroundColor: 'backgroundColor' })
        var Da = 'function' === typeof Path2D
        function Aa(t, e, r, n) {
          Da && 1 === e.segments.length
            ? (function (t, e, r, n) {
                var i = e._path
                i || ((i = e._path = new Path2D()), e.path(i, r, n) && i.closePath()), Oa(t, e.options), t.stroke(i)
              })(t, e, r, n)
            : (function (t, e, r, n) {
                var i,
                  a = e.segments,
                  o = e.options,
                  l = Pa(e),
                  s = Object(v.a)(a)
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    var c = i.value
                    Oa(t, o, c.style),
                      t.beginPath(),
                      l(t, e, c, { start: r, end: r + n - 1 }) && t.closePath(),
                      t.stroke()
                  }
                } catch (u) {
                  s.e(u)
                } finally {
                  s.f()
                }
              })(t, e, r, n)
        }
        var Ea = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this)).animated = !0),
              (n.options = void 0),
              (n._loop = void 0),
              (n._fullLoop = void 0),
              (n._path = void 0),
              (n._points = void 0),
              (n._segments = void 0),
              (n._decimated = !1),
              (n._pointsUpdated = !1),
              (n._datasetIndex = void 0),
              t && Object.assign(Object(i.a)(n), t),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'updateControlPoints',
                value: function (t, e) {
                  var r = this,
                    n = r.options
                  if ((n.tension || 'monotone' === n.cubicInterpolationMode) && !n.stepped && !r._pointsUpdated) {
                    var i = n.spanGaps ? r._loop : r._fullLoop
                    Lr(r._points, n, t, i, e), (r._pointsUpdated = !0)
                  }
                }
              },
              {
                key: 'points',
                get: function () {
                  return this._points
                },
                set: function (t) {
                  var e = this
                  ;(e._points = t), delete e._segments, delete e._path, (e._pointsUpdated = !1)
                }
              },
              {
                key: 'segments',
                get: function () {
                  return (
                    this._segments ||
                    (this._segments = (function (t, e) {
                      var r = t.points,
                        n = t.options.spanGaps,
                        i = r.length
                      if (!i) return []
                      var a = !!t._loop,
                        o = (function (t, e, r, n) {
                          var i = 0,
                            a = e - 1
                          if (r && !n) for (; i < e && !t[i].skip; ) i++
                          for (; i < e && t[i].skip; ) i++
                          for (i %= e, r && (a += i); a > i && t[a % e].skip; ) a--
                          return { start: i, end: (a %= e) }
                        })(r, i, a, n),
                        l = o.start,
                        s = o.end
                      return cn(
                        t,
                        !0 === n
                          ? [{ start: l, end: s, loop: a }]
                          : (function (t, e, r, n) {
                              var i,
                                a = t.length,
                                o = [],
                                l = e,
                                s = t[e]
                              for (i = e + 1; i <= r; ++i) {
                                var c = t[i % a]
                                c.skip || c.stop
                                  ? s.skip ||
                                    ((n = !1),
                                    o.push({ start: e % a, end: (i - 1) % a, loop: n }),
                                    (e = l = c.stop ? i : null))
                                  : ((l = i), s.skip && (e = i)),
                                  (s = c)
                              }
                              return null !== l && o.push({ start: e % a, end: l % a, loop: n }), o
                            })(r, l, s < l ? s + i : s, !!t._fullLoop && 0 === l && s === i - 1),
                        r,
                        e
                      )
                    })(this, this.options.segment))
                  )
                }
              },
              {
                key: 'first',
                value: function () {
                  var t = this.segments,
                    e = this.points
                  return t.length && e[t[0].start]
                }
              },
              {
                key: 'last',
                value: function () {
                  var t = this.segments,
                    e = this.points,
                    r = t.length
                  return r && e[t[r - 1].end]
                }
              },
              {
                key: 'interpolate',
                value: function (t, e) {
                  var r = this,
                    n = r.options,
                    i = t[e],
                    a = r.points,
                    o = sn(r, { property: e, start: i, end: i })
                  if (o.length) {
                    var l,
                      s,
                      c = [],
                      u = (function (t) {
                        return t.stepped ? Gr : t.tension || 'monotone' === t.cubicInterpolationMode ? Jr : Zr
                      })(n)
                    for (l = 0, s = o.length; l < s; ++l) {
                      var h = o[l],
                        f = h.start,
                        d = h.end,
                        v = a[f],
                        p = a[d]
                      if (v !== p) {
                        var g = u(v, p, Math.abs((i - v[e]) / (p[e] - v[e])), n.stepped)
                        ;(g[e] = t[e]), c.push(g)
                      } else c.push(v)
                    }
                    return 1 === c.length ? c[0] : c
                  }
                }
              },
              {
                key: 'pathSegment',
                value: function (t, e, r) {
                  return Pa(this)(t, this, e, r)
                }
              },
              {
                key: 'path',
                value: function (t, e, r) {
                  var n = this,
                    i = n.segments,
                    a = Pa(n),
                    o = n._loop
                  ;(e = e || 0), (r = r || n.points.length - e)
                  var l,
                    s = Object(v.a)(i)
                  try {
                    for (s.s(); !(l = s.n()).done; ) {
                      o &= a(t, n, l.value, { start: e, end: e + r - 1 })
                    }
                  } catch (c) {
                    s.e(c)
                  } finally {
                    s.f()
                  }
                  return !!o
                }
              },
              {
                key: 'draw',
                value: function (t, e, r, n) {
                  var i = this,
                    a = i.options || {}
                  ;(i.points || []).length &&
                    a.borderWidth &&
                    (t.save(), Aa(t, i, r, n), t.restore(), i.animated && ((i._pointsUpdated = !1), (i._path = void 0)))
                }
              }
            ]),
            r
          )
        })(Ei)
        function Ta(t, e, r, n) {
          var i = t.options,
            a = t.getProps([r], n)[r]
          return Math.abs(e - a) < i.radius + i.hitRadius
        }
        ;(Ea.id = 'line'),
          (Ea.defaults = {
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'miter',
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: 'default',
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0
          }),
          (Ea.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
          (Ea.descriptors = {
            _scriptable: !0,
            _indexable: function (t) {
              return 'borderDash' !== t && 'fill' !== t
            }
          })
        var Ba = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this)).options = void 0),
              (n.parsed = void 0),
              (n.skip = void 0),
              (n.stop = void 0),
              t && Object.assign(Object(i.a)(n), t),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'inRange',
                value: function (t, e, r) {
                  var n = this.options,
                    i = this.getProps(['x', 'y'], r),
                    a = i.x,
                    o = i.y
                  return Math.pow(t - a, 2) + Math.pow(e - o, 2) < Math.pow(n.hitRadius + n.radius, 2)
                }
              },
              {
                key: 'inXRange',
                value: function (t, e) {
                  return Ta(this, t, 'x', e)
                }
              },
              {
                key: 'inYRange',
                value: function (t, e) {
                  return Ta(this, t, 'y', e)
                }
              },
              {
                key: 'getCenterPoint',
                value: function (t) {
                  var e = this.getProps(['x', 'y'], t)
                  return { x: e.x, y: e.y }
                }
              },
              {
                key: 'size',
                value: function (t) {
                  var e = (t = t || this.options || {}).radius || 0
                  return 2 * ((e = Math.max(e, (e && t.hoverRadius) || 0)) + ((e && t.borderWidth) || 0))
                }
              },
              {
                key: 'draw',
                value: function (t, e) {
                  var r = this,
                    n = r.options
                  r.skip ||
                    n.radius < 0.1 ||
                    !Ye(r, e, r.size(n) / 2) ||
                    ((t.strokeStyle = n.borderColor),
                    (t.lineWidth = n.borderWidth),
                    (t.fillStyle = n.backgroundColor),
                    $e(t, n, r.x, r.y))
                }
              },
              {
                key: 'getRange',
                value: function () {
                  var t = this.options || {}
                  return t.radius + t.hitRadius
                }
              }
            ]),
            r
          )
        })(Ei)
        function La(t, e) {
          var r,
            n,
            i,
            a,
            o,
            l = t.getProps(['x', 'y', 'base', 'width', 'height'], e),
            s = l.x,
            c = l.y,
            u = l.base,
            h = l.width,
            f = l.height
          return (
            t.horizontal
              ? ((o = f / 2), (r = Math.min(s, u)), (n = Math.max(s, u)), (i = c - o), (a = c + o))
              : ((r = s - (o = h / 2)), (n = s + o), (i = Math.min(c, u)), (a = Math.max(c, u))),
            { left: r, top: i, right: n, bottom: a }
          )
        }
        function Ra(t, e, r, n) {
          return t ? 0 : qt(e, r, n)
        }
        function Ia(t) {
          var e = La(t),
            r = e.right - e.left,
            n = e.bottom - e.top,
            i = (function (t, e, r) {
              var n = t.options.borderWidth,
                i = t.borderSkipped,
                a = ar(n)
              return {
                t: Ra(i.top, a.top, 0, r),
                r: Ra(i.right, a.right, 0, e),
                b: Ra(i.bottom, a.bottom, 0, r),
                l: Ra(i.left, a.left, 0, e)
              }
            })(t, r / 2, n / 2),
            a = (function (t, e, r) {
              var n = t.getProps(['enableBorderRadius']).enableBorderRadius,
                i = t.options.borderRadius,
                a = or(i),
                o = Math.min(e, r),
                l = t.borderSkipped,
                s = n || st(i)
              return {
                topLeft: Ra(!s || l.top || l.left, a.topLeft, 0, o),
                topRight: Ra(!s || l.top || l.right, a.topRight, 0, o),
                bottomLeft: Ra(!s || l.bottom || l.left, a.bottomLeft, 0, o),
                bottomRight: Ra(!s || l.bottom || l.right, a.bottomRight, 0, o)
              }
            })(t, r / 2, n / 2)
          return {
            outer: { x: e.left, y: e.top, w: r, h: n, radius: a },
            inner: {
              x: e.left + i.l,
              y: e.top + i.t,
              w: r - i.l - i.r,
              h: n - i.t - i.b,
              radius: {
                topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
                topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
                bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
                bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r))
              }
            }
          }
        }
        function Va(t, e, r, n) {
          var i = null === e,
            a = null === r,
            o = t && !(i && a) && La(t, n)
          return o && (i || (e >= o.left && e <= o.right)) && (a || (r >= o.top && r <= o.bottom))
        }
        function Ha(t, e) {
          t.rect(e.x, e.y, e.w, e.h)
        }
        function Na(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = t.x !== r.x ? -e : 0,
            i = t.y !== r.y ? -e : 0,
            a = (t.x + t.w !== r.x + r.w ? e : 0) - n,
            o = (t.y + t.h !== r.y + r.h ? e : 0) - i
          return { x: t.x + n, y: t.y + i, w: t.w + a, h: t.h + o, radius: t.radius }
        }
        ;(Ba.id = 'point'),
          (Ba.defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: 'circle',
            radius: 3,
            rotation: 0
          }),
          (Ba.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
        var Wa = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this)).options = void 0),
              (n.horizontal = void 0),
              (n.base = void 0),
              (n.width = void 0),
              (n.height = void 0),
              t && Object.assign(Object(i.a)(n), t),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'draw',
                value: function (t) {
                  var e,
                    r = this.options,
                    n = Ia(this),
                    i = n.inner,
                    a = n.outer,
                    o = (e = a.radius).topLeft || e.topRight || e.bottomLeft || e.bottomRight ? Qe : Ha,
                    l = 0.33
                  t.save(),
                    (a.w === i.w && a.h === i.h) ||
                      (t.beginPath(),
                      o(t, Na(a, l, i)),
                      t.clip(),
                      o(t, Na(i, -0.33, a)),
                      (t.fillStyle = r.borderColor),
                      t.fill('evenodd')),
                    t.beginPath(),
                    o(t, Na(i, l, a)),
                    (t.fillStyle = r.backgroundColor),
                    t.fill(),
                    t.restore()
                }
              },
              {
                key: 'inRange',
                value: function (t, e, r) {
                  return Va(this, t, e, r)
                }
              },
              {
                key: 'inXRange',
                value: function (t, e) {
                  return Va(this, t, null, e)
                }
              },
              {
                key: 'inYRange',
                value: function (t, e) {
                  return Va(this, null, t, e)
                }
              },
              {
                key: 'getCenterPoint',
                value: function (t) {
                  var e = this.getProps(['x', 'y', 'base', 'horizontal'], t),
                    r = e.x,
                    n = e.y,
                    i = e.base,
                    a = e.horizontal
                  return { x: a ? (r + i) / 2 : r, y: a ? n : (n + i) / 2 }
                }
              },
              {
                key: 'getRange',
                value: function (t) {
                  return 'x' === t ? this.width / 2 : this.height / 2
                }
              }
            ]),
            r
          )
        })(Ei)
        ;(Wa.id = 'bar'),
          (Wa.defaults = {
            borderSkipped: 'start',
            borderWidth: 0,
            borderRadius: 0,
            enableBorderRadius: !0,
            pointStyle: void 0
          }),
          (Wa.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
        var $a = Object.freeze({ __proto__: null, ArcElement: wa, LineElement: Ea, PointElement: Ba, BarElement: Wa })
        function Ya(t) {
          if (t._decimated) {
            var e = t._data
            delete t._decimated, delete t._data, Object.defineProperty(t, 'data', { value: e })
          }
        }
        function Ua(t) {
          t.data.datasets.forEach(function (t) {
            Ya(t)
          })
        }
        var Xa = {
          id: 'decimation',
          defaults: { algorithm: 'min-max', enabled: !1 },
          beforeElementsUpdate: function (t, e, r) {
            if (r.enabled) {
              var i = t.width
              t.data.datasets.forEach(function (e, a) {
                var o = e._data,
                  l = e.indexAxis,
                  s = t.getDatasetMeta(a),
                  c = o || e.data
                if ('y' !== cr([l, t.options.indexAxis]) && 'line' === s.type) {
                  var u = t.scales[s.xAxisID]
                  if (('linear' === u.type || 'time' === u.type) && !t.options.parsing) {
                    var h = (function (t, e) {
                        var r = e.length,
                          n = 0,
                          i = t.iScale,
                          a = i.getUserBounds(),
                          o = a.min,
                          l = a.max,
                          s = a.minDefined,
                          c = a.maxDefined
                        return (
                          s && (n = qt(hr(e, i.axis, o).lo, 0, r - 1)),
                          { start: n, count: c ? qt(hr(e, i.axis, l).hi + 1, n, r) - n : r - n }
                        )
                      })(s, c),
                      f = h.start,
                      d = h.count
                    if (d <= (r.threshold || 4 * i)) Ya(e)
                    else {
                      var v
                      switch (
                        (ot(o) &&
                          ((e._data = c),
                          delete e.data,
                          Object.defineProperty(e, 'data', {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                              return this._decimated
                            },
                            set: function (t) {
                              this._data = t
                            }
                          })),
                        r.algorithm)
                      ) {
                        case 'lttb':
                          v = (function (t, e, r, n, i) {
                            var a = i.samples || n
                            if (a >= r) return t.slice(e, e + r)
                            var o,
                              l,
                              s,
                              c,
                              u,
                              h = [],
                              f = (r - 2) / (a - 2),
                              d = 0,
                              v = e + r - 1,
                              p = e
                            for (h[d++] = t[p], o = 0; o < a - 2; o++) {
                              var g = 0,
                                y = 0,
                                m = void 0,
                                b = Math.floor((o + 1) * f) + 1 + e,
                                k = Math.min(Math.floor((o + 2) * f) + 1, r) + e,
                                x = k - b
                              for (m = b; m < k; m++) (g += t[m].x), (y += t[m].y)
                              ;(g /= x), (y /= x)
                              var M = Math.floor(o * f) + 1 + e,
                                _ = Math.min(Math.floor((o + 1) * f) + 1, r) + e,
                                z = t[p],
                                w = z.x,
                                O = z.y
                              for (s = c = -1, m = M; m < _; m++)
                                (c = 0.5 * Math.abs((w - g) * (t[m].y - O) - (w - t[m].x) * (y - O))) > s &&
                                  ((s = c), (l = t[m]), (u = m))
                              ;(h[d++] = l), (p = u)
                            }
                            return (h[d++] = t[v]), h
                          })(c, f, d, i, r)
                          break
                        case 'min-max':
                          v = (function (t, e, r, i) {
                            var a,
                              o,
                              l,
                              s,
                              c,
                              u,
                              h,
                              f,
                              d,
                              v,
                              p = 0,
                              g = 0,
                              y = [],
                              m = e + r - 1,
                              b = t[e].x,
                              k = t[m].x - b
                            for (a = e; a < e + r; ++a) {
                              ;(l = (((o = t[a]).x - b) / k) * i), (s = o.y)
                              var x = 0 | l
                              if (x === c)
                                s < d ? ((d = s), (u = a)) : s > v && ((v = s), (h = a)), (p = (g * p + o.x) / ++g)
                              else {
                                var M = a - 1
                                if (!ot(u) && !ot(h)) {
                                  var _ = Math.min(u, h),
                                    z = Math.max(u, h)
                                  _ !== f && _ !== M && y.push(Object(n.a)(Object(n.a)({}, t[_]), {}, { x: p })),
                                    z !== f && z !== M && y.push(Object(n.a)(Object(n.a)({}, t[z]), {}, { x: p }))
                                }
                                a > 0 && M !== f && y.push(t[M]),
                                  y.push(o),
                                  (c = x),
                                  (g = 0),
                                  (d = v = s),
                                  (u = h = f = a)
                              }
                            }
                            return y
                          })(c, f, d, i)
                          break
                        default:
                          throw new Error("Unsupported decimation algorithm '".concat(r.algorithm, "'"))
                      }
                      e._decimated = v
                    }
                  }
                }
              })
            } else Ua(t)
          },
          destroy: function (t) {
            Ua(t)
          }
        }
        function qa(t, e, r) {
          var n = (function (t) {
            var e = t.options,
              r = e.fill,
              n = ht(r && r.target, r)
            return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? 'origin' : n)
          })(t)
          if (st(n)) return !isNaN(n.value) && n
          var i = parseFloat(n)
          return ct(i) && Math.floor(i) === i
            ? (('-' !== n[0] && '+' !== n[0]) || (i = e + i), !(i === e || i < 0 || i >= r) && i)
            : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(n) >= 0 && n
        }
        var Ka = (function () {
          function t(e) {
            Object(f.a)(this, t), (this.x = e.x), (this.y = e.y), (this.radius = e.radius)
          }
          return (
            Object(d.a)(t, [
              {
                key: 'pathSegment',
                value: function (t, e, r) {
                  var n = this.x,
                    i = this.y,
                    a = this.radius
                  return (e = e || { start: 0, end: jt }), t.arc(n, i, a, e.end, e.start, !0), !r.bounds
                }
              },
              {
                key: 'interpolate',
                value: function (t) {
                  var e = this.x,
                    r = this.y,
                    n = this.radius,
                    i = t.angle
                  return { x: e + Math.cos(i) * n, y: r + Math.sin(i) * n, angle: i }
                }
              }
            ]),
            t
          )
        })()
        function Za(t) {
          return (t.scale || {}).getPointPositionForValue
            ? (function (t) {
                var e,
                  r,
                  n,
                  i = t.scale,
                  a = t.fill,
                  o = i.options,
                  l = i.getLabels().length,
                  s = [],
                  c = o.reverse ? i.max : i.min,
                  u = o.reverse ? i.min : i.max
                if (((n = 'start' === a ? c : 'end' === a ? u : st(a) ? a.value : i.getBaseValue()), o.grid.circular))
                  return (
                    (r = i.getPointPositionForValue(0, c)),
                    new Ka({ x: r.x, y: r.y, radius: i.getDistanceFromCenterForValue(n) })
                  )
                for (e = 0; e < l; ++e) s.push(i.getPointPositionForValue(e, n))
                return s
              })(t)
            : (function (t) {
                var e,
                  r = t.scale,
                  n = void 0 === r ? {} : r,
                  i = t.fill,
                  a = null
                return (
                  'start' === i
                    ? (a = n.bottom)
                    : 'end' === i
                    ? (a = n.top)
                    : st(i)
                    ? (a = n.getPixelForValue(i.value))
                    : n.getBasePixel && (a = n.getBasePixel()),
                  ct(a) ? { x: (e = n.isHorizontal()) ? a : null, y: e ? null : a } : null
                )
              })(t)
        }
        function Ga(t, e, r) {
          for (; e > t; e--) {
            var n = r[e]
            if (!isNaN(n.x) && !isNaN(n.y)) break
          }
          return e
        }
        function Ja(t) {
          var e = t.chart,
            r = t.scale,
            n = t.index,
            i = t.line,
            a = [],
            o = i.segments,
            l = i.points,
            s = (function (t, e) {
              for (var r = [], n = t.getSortedVisibleDatasetMetas(), i = 0; i < n.length; i++) {
                var a = n[i]
                if (a.index === e) break
                Qa(a) && r.unshift(a.dataset)
              }
              return r
            })(e, n)
          s.push(ro({ x: null, y: r.bottom }, i))
          for (var c = 0; c < o.length; c++) for (var u = o[c], h = u.start; h <= u.end; h++) to(a, l[h], s)
          return new Ea({ points: a, options: {} })
        }
        var Qa = function (t) {
          return 'line' === t.type && !t.hidden
        }
        function to(t, e, r) {
          for (var n = [], i = 0; i < r.length; i++) {
            var a = eo(r[i], e, 'x'),
              o = a.first,
              l = a.last,
              s = a.point
            if (!(!s || (o && l)))
              if (o) n.unshift(s)
              else if ((t.push(s), !l)) break
          }
          t.push.apply(t, n)
        }
        function eo(t, e, r) {
          var n = t.interpolate(e, r)
          if (!n) return {}
          for (var i = n[r], a = t.segments, o = t.points, l = !1, s = !1, c = 0; c < a.length; c++) {
            var u = a[c],
              h = o[u.start][r],
              f = o[u.end][r]
            if (i >= h && i <= f) {
              ;(l = i === h), (s = i === f)
              break
            }
          }
          return { first: l, last: s, point: n }
        }
        function ro(t, e) {
          var r = [],
            n = !1
          return (
            lt(t)
              ? ((n = !0), (r = t))
              : (r = (function (t, e) {
                  var r = t || {},
                    n = r.x,
                    i = void 0 === n ? null : n,
                    a = r.y,
                    o = void 0 === a ? null : a,
                    l = e.points,
                    s = []
                  return (
                    e.segments.forEach(function (t) {
                      var e = t.start,
                        r = t.end
                      r = Ga(e, r, l)
                      var n = l[e],
                        a = l[r]
                      null !== o
                        ? (s.push({ x: n.x, y: o }), s.push({ x: a.x, y: o }))
                        : null !== i && (s.push({ x: i, y: n.y }), s.push({ x: i, y: a.y }))
                    }),
                    s
                  )
                })(t, e)),
            r.length ? new Ea({ points: r, options: { tension: 0 }, _loop: n, _fullLoop: n }) : null
          )
        }
        function no(t, e, r) {
          var n,
            i = t[e].fill,
            a = [e]
          if (!r) return i
          for (; !1 !== i && -1 === a.indexOf(i); ) {
            if (!ct(i)) return i
            if (!(n = t[i])) return !1
            if (n.visible) return i
            a.push(i), (i = n.fill)
          }
          return !1
        }
        function io(t, e, r) {
          t.beginPath(), e.path(t), t.lineTo(e.last().x, r), t.lineTo(e.first().x, r), t.closePath(), t.clip()
        }
        function ao(t, e, r, n) {
          if (!n) {
            var i = e[t],
              a = r[t]
            return 'angle' === t && ((i = Ut(i)), (a = Ut(a))), { property: t, start: i, end: a }
          }
        }
        function oo(t, e, r, n) {
          return t && e ? n(t[r], e[r]) : t ? t[r] : e ? e[r] : 0
        }
        function lo(t, e, r) {
          var n = e.chart.chartArea,
            i = n.top,
            a = n.bottom,
            o = r || {},
            l = o.property,
            s = o.start,
            c = o.end
          'x' === l && (t.beginPath(), t.rect(s, i, c - s, a - i), t.clip())
        }
        function so(t, e, r, n) {
          var i = e.interpolate(r, n)
          i && t.lineTo(i.x, i.y)
        }
        function co(t, e) {
          var r,
            n = e.line,
            i = e.target,
            a = e.property,
            o = e.color,
            l = e.scale,
            s = (function (t, e, r) {
              var n,
                i = t.segments,
                a = t.points,
                o = e.points,
                l = [],
                s = Object(v.a)(i)
              try {
                for (s.s(); !(n = s.n()).done; ) {
                  var c = n.value,
                    u = c.start,
                    f = c.end
                  f = Ga(u, f, a)
                  var d = ao(r, a[u], a[f], c.loop)
                  if (e.segments) {
                    var p,
                      g = sn(e, d),
                      y = Object(v.a)(g)
                    try {
                      for (y.s(); !(p = y.n()).done; ) {
                        var m,
                          b = p.value,
                          k = ao(r, o[b.start], o[b.end], b.loop),
                          x = ln(c, a, k),
                          M = Object(v.a)(x)
                        try {
                          for (M.s(); !(m = M.n()).done; ) {
                            var _ = m.value
                            l.push({
                              source: _,
                              target: b,
                              start: Object(h.a)({}, r, oo(d, k, 'start', Math.max)),
                              end: Object(h.a)({}, r, oo(d, k, 'end', Math.min))
                            })
                          }
                        } catch (z) {
                          M.e(z)
                        } finally {
                          M.f()
                        }
                      }
                    } catch (z) {
                      y.e(z)
                    } finally {
                      y.f()
                    }
                  } else l.push({ source: c, target: d, start: a[u], end: a[f] })
                }
              } catch (z) {
                s.e(z)
              } finally {
                s.f()
              }
              return l
            })(n, i, a),
            c = Object(v.a)(s)
          try {
            for (c.s(); !(r = c.n()).done; ) {
              var u = r.value,
                f = u.source,
                d = u.target,
                p = u.start,
                g = u.end,
                y = f.style,
                m = (y = void 0 === y ? {} : y).backgroundColor,
                b = void 0 === m ? o : m,
                k = !0 !== i
              t.save(), (t.fillStyle = b), lo(t, l, k && ao(a, p, g)), t.beginPath()
              var x = !!n.pathSegment(t, f),
                M = void 0
              if (k) {
                x ? t.closePath() : so(t, i, g, a)
                var _ = !!i.pathSegment(t, d, { move: x, reverse: !0 })
                ;(M = x && _) || so(t, i, p, a)
              }
              t.closePath(), t.fill(M ? 'evenodd' : 'nonzero'), t.restore()
            }
          } catch (z) {
            c.e(z)
          } finally {
            c.f()
          }
        }
        function uo(t, e, r) {
          var n = (function (t) {
              var e = t.chart,
                r = t.fill,
                n = t.line
              if (ct(r))
                return (function (t, e) {
                  var r = t.getDatasetMeta(e)
                  return r && t.isDatasetVisible(e) ? r.dataset : null
                })(e, r)
              if ('stack' === r) return Ja(t)
              if ('shape' === r) return !0
              var i = Za(t)
              return i instanceof Ka ? i : ro(i, n)
            })(e),
            i = e.line,
            a = e.scale,
            o = e.axis,
            l = i.options,
            s = l.fill,
            c = l.backgroundColor,
            u = s || {},
            h = u.above,
            f = void 0 === h ? c : h,
            d = u.below,
            v = void 0 === d ? c : d
          n &&
            i.points.length &&
            (Ue(t, r),
            (function (t, e) {
              var r = e.line,
                n = e.target,
                i = e.above,
                a = e.below,
                o = e.area,
                l = e.scale,
                s = r._loop ? 'angle' : e.axis
              t.save(),
                'x' === s &&
                  a !== i &&
                  (io(t, n, o.top),
                  co(t, { line: r, target: n, color: i, scale: l, property: s }),
                  t.restore(),
                  t.save(),
                  io(t, n, o.bottom)),
                co(t, { line: r, target: n, color: a, scale: l, property: s }),
                t.restore()
            })(t, { line: i, target: n, above: f, below: v, area: r, scale: a, axis: o }),
            Xe(t))
        }
        var ho = {
            id: 'filler',
            afterDatasetsUpdate: function (t, e, r) {
              var n,
                i,
                a,
                o,
                l = (t.data.datasets || []).length,
                s = []
              for (i = 0; i < l; ++i)
                (o = null),
                  (a = (n = t.getDatasetMeta(i)).dataset) &&
                    a.options &&
                    a instanceof Ea &&
                    (o = {
                      visible: t.isDatasetVisible(i),
                      index: i,
                      fill: qa(a, i, l),
                      chart: t,
                      axis: n.controller.options.indexAxis,
                      scale: n.vScale,
                      line: a
                    }),
                  (n.$filler = o),
                  s.push(o)
              for (i = 0; i < l; ++i) (o = s[i]) && !1 !== o.fill && (o.fill = no(s, i, r.propagate))
            },
            beforeDraw: function (t, e, r) {
              for (
                var n = 'beforeDraw' === r.drawTime,
                  i = t.getSortedVisibleDatasetMetas(),
                  a = t.chartArea,
                  o = i.length - 1;
                o >= 0;
                --o
              ) {
                var l = i[o].$filler
                l && (l.line.updateControlPoints(a, l.axis), n && uo(t.ctx, l, a))
              }
            },
            beforeDatasetsDraw: function (t, e, r) {
              if ('beforeDatasetsDraw' === r.drawTime)
                for (var n = t.getSortedVisibleDatasetMetas(), i = n.length - 1; i >= 0; --i) {
                  var a = n[i].$filler
                  a && uo(t.ctx, a, t.chartArea)
                }
            },
            beforeDatasetDraw: function (t, e, r) {
              var n = e.meta.$filler
              n && !1 !== n.fill && 'beforeDatasetDraw' === r.drawTime && uo(t.ctx, n, t.chartArea)
            },
            defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' }
          },
          fo = function (t, e) {
            var r = t.boxHeight,
              n = void 0 === r ? e : r,
              i = t.boxWidth,
              a = void 0 === i ? e : i
            return (
              t.usePointStyle && ((n = Math.min(n, e)), (a = Math.min(a, e))),
              { boxWidth: a, boxHeight: n, itemHeight: Math.max(e, n) }
            )
          },
          vo = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r(t) {
              var n
              return (
                Object(f.a)(this, r),
                ((n = e.call(this))._added = !1),
                (n.legendHitBoxes = []),
                (n._hoveredItem = null),
                (n.doughnutMode = !1),
                (n.chart = t.chart),
                (n.options = t.options),
                (n.ctx = t.ctx),
                (n.legendItems = void 0),
                (n.columnSizes = void 0),
                (n.lineWidths = void 0),
                (n.maxHeight = void 0),
                (n.maxWidth = void 0),
                (n.top = void 0),
                (n.bottom = void 0),
                (n.left = void 0),
                (n.right = void 0),
                (n.height = void 0),
                (n.width = void 0),
                (n._margins = void 0),
                (n.position = void 0),
                (n.weight = void 0),
                (n.fullSize = void 0),
                n
              )
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'update',
                  value: function (t, e, r) {
                    var n = this
                    ;(n.maxWidth = t), (n.maxHeight = e), (n._margins = r), n.setDimensions(), n.buildLabels(), n.fit()
                  }
                },
                {
                  key: 'setDimensions',
                  value: function () {
                    var t = this
                    t.isHorizontal()
                      ? ((t.width = t.maxWidth), (t.left = t._margins.left), (t.right = t.width))
                      : ((t.height = t.maxHeight), (t.top = t._margins.top), (t.bottom = t.height))
                  }
                },
                {
                  key: 'buildLabels',
                  value: function () {
                    var t = this,
                      e = t.options.labels || {},
                      r = dt(e.generateLabels, [t.chart], t) || []
                    e.filter &&
                      (r = r.filter(function (r) {
                        return e.filter(r, t.chart.data)
                      })),
                      e.sort &&
                        (r = r.sort(function (r, n) {
                          return e.sort(r, n, t.chart.data)
                        })),
                      t.options.reverse && r.reverse(),
                      (t.legendItems = r)
                  }
                },
                {
                  key: 'fit',
                  value: function () {
                    var t = this,
                      e = t.options,
                      r = t.ctx
                    if (e.display) {
                      var n,
                        i,
                        a = e.labels,
                        o = sr(a.font),
                        l = o.size,
                        s = t._computeTitleHeight(),
                        c = fo(a, l),
                        u = c.boxWidth,
                        h = c.itemHeight
                      ;(r.font = o.string),
                        t.isHorizontal()
                          ? ((n = t.maxWidth), (i = t._fitRows(s, l, u, h) + 10))
                          : ((i = t.maxHeight), (n = t._fitCols(s, l, u, h) + 10)),
                        (t.width = Math.min(n, e.maxWidth || t.maxWidth)),
                        (t.height = Math.min(i, e.maxHeight || t.maxHeight))
                    } else t.width = t.height = 0
                  }
                },
                {
                  key: '_fitRows',
                  value: function (t, e, r, n) {
                    var i = this,
                      a = i.ctx,
                      o = i.maxWidth,
                      l = i.options.labels.padding,
                      s = (i.legendHitBoxes = []),
                      c = (i.lineWidths = [0]),
                      u = n + l,
                      h = t
                    ;(a.textAlign = 'left'), (a.textBaseline = 'middle')
                    var f = -1,
                      d = -u
                    return (
                      i.legendItems.forEach(function (t, i) {
                        var v = r + e / 2 + a.measureText(t.text).width
                        ;(0 === i || c[c.length - 1] + v + 2 * l > o) &&
                          ((h += u), (c[c.length - (i > 0 ? 0 : 1)] = 0), (d += u), f++),
                          (s[i] = { left: 0, top: d, row: f, width: v, height: n }),
                          (c[c.length - 1] += v + l)
                      }),
                      h
                    )
                  }
                },
                {
                  key: '_fitCols',
                  value: function (t, e, r, n) {
                    var i = this,
                      a = i.ctx,
                      o = i.maxHeight,
                      l = i.options.labels.padding,
                      s = (i.legendHitBoxes = []),
                      c = (i.columnSizes = []),
                      u = o - t,
                      h = l,
                      f = 0,
                      d = 0,
                      v = 0,
                      p = 0
                    return (
                      i.legendItems.forEach(function (t, i) {
                        var o = r + e / 2 + a.measureText(t.text).width
                        i > 0 &&
                          d + n + 2 * l > u &&
                          ((h += f + l), c.push({ width: f, height: d }), (v += f + l), p++, (f = d = 0)),
                          (s[i] = { left: v, top: d, col: p, width: o, height: n }),
                          (f = Math.max(f, o)),
                          (d += n + l)
                      }),
                      (h += f),
                      c.push({ width: f, height: d }),
                      h
                    )
                  }
                },
                {
                  key: 'adjustHitBoxes',
                  value: function () {
                    var t = this
                    if (t.options.display) {
                      var e = t._computeTitleHeight(),
                        r = t.legendHitBoxes,
                        n = t.options,
                        i = n.align,
                        a = n.labels.padding,
                        o = en(n.rtl, t.left, t.width)
                      if (this.isHorizontal()) {
                        var l,
                          s = 0,
                          c = nt(i, t.left + a, t.right - t.lineWidths[s]),
                          u = Object(v.a)(r)
                        try {
                          for (u.s(); !(l = u.n()).done; ) {
                            var h = l.value
                            s !== h.row && ((s = h.row), (c = nt(i, t.left + a, t.right - t.lineWidths[s]))),
                              (h.top += t.top + e + a),
                              (h.left = o.leftForLtr(o.x(c), h.width)),
                              (c += h.width + a)
                          }
                        } catch (m) {
                          u.e(m)
                        } finally {
                          u.f()
                        }
                      } else {
                        var f,
                          d = 0,
                          p = nt(i, t.top + e + a, t.bottom - t.columnSizes[d].height),
                          g = Object(v.a)(r)
                        try {
                          for (g.s(); !(f = g.n()).done; ) {
                            var y = f.value
                            y.col !== d &&
                              ((d = y.col), (p = nt(i, t.top + e + a, t.bottom - t.columnSizes[d].height))),
                              (y.top = p),
                              (y.left += t.left + a),
                              (y.left = o.leftForLtr(o.x(y.left), y.width)),
                              (p += y.height + a)
                          }
                        } catch (m) {
                          g.e(m)
                        } finally {
                          g.f()
                        }
                      }
                    }
                  }
                },
                {
                  key: 'isHorizontal',
                  value: function () {
                    return 'top' === this.options.position || 'bottom' === this.options.position
                  }
                },
                {
                  key: 'draw',
                  value: function () {
                    var t = this
                    if (t.options.display) {
                      var e = t.ctx
                      Ue(e, t), t._draw(), Xe(e)
                    }
                  }
                },
                {
                  key: '_draw',
                  value: function () {
                    var t,
                      e = this,
                      r = e.options,
                      n = e.columnSizes,
                      i = e.lineWidths,
                      a = e.ctx,
                      o = r.align,
                      l = r.labels,
                      s = Ie.color,
                      c = en(r.rtl, e.left, e.width),
                      u = sr(l.font),
                      h = l.color,
                      f = l.padding,
                      d = u.size,
                      v = d / 2
                    e.drawTitle(),
                      (a.textAlign = c.textAlign('left')),
                      (a.textBaseline = 'middle'),
                      (a.lineWidth = 0.5),
                      (a.font = u.string)
                    var p = fo(l, d),
                      g = p.boxWidth,
                      y = p.boxHeight,
                      m = p.itemHeight,
                      b = e.isHorizontal(),
                      k = this._computeTitleHeight()
                    ;(t = b
                      ? { x: nt(o, e.left + f, e.right - i[0]), y: e.top + f + k, line: 0 }
                      : { x: e.left + f, y: nt(o, e.top + k + f, e.bottom - n[0].height), line: 0 }),
                      rn(e.ctx, r.textDirection)
                    var x = m + f
                    e.legendItems.forEach(function (p, M) {
                      ;(a.strokeStyle = p.fontColor || h), (a.fillStyle = p.fontColor || h)
                      var _ = a.measureText(p.text).width,
                        z = c.textAlign(p.textAlign || (p.textAlign = l.textAlign)),
                        w = g + v + _,
                        O = t.x,
                        C = t.y
                      c.setWidth(e.width),
                        b
                          ? M > 0 &&
                            O + w + f > e.right &&
                            ((C = t.y += x), t.line++, (O = t.x = nt(o, e.left + f, e.right - i[t.line])))
                          : M > 0 &&
                            C + x > e.bottom &&
                            ((O = t.x = O + n[t.line].width + f),
                            t.line++,
                            (C = t.y = nt(o, e.top + k + f, e.bottom - n[t.line].height))),
                        (function (t, e, r) {
                          if (!(isNaN(g) || g <= 0 || isNaN(y) || y < 0)) {
                            a.save()
                            var n = ht(r.lineWidth, 1)
                            if (
                              ((a.fillStyle = ht(r.fillStyle, s)),
                              (a.lineCap = ht(r.lineCap, 'butt')),
                              (a.lineDashOffset = ht(r.lineDashOffset, 0)),
                              (a.lineJoin = ht(r.lineJoin, 'miter')),
                              (a.lineWidth = n),
                              (a.strokeStyle = ht(r.strokeStyle, s)),
                              a.setLineDash(ht(r.lineDash, [])),
                              l.usePointStyle)
                            ) {
                              var i = {
                                  radius: (g * Math.SQRT2) / 2,
                                  pointStyle: r.pointStyle,
                                  rotation: r.rotation,
                                  borderWidth: n
                                },
                                o = c.xPlus(t, g / 2)
                              $e(a, i, o, e + v)
                            } else {
                              var u = e + Math.max((d - y) / 2, 0),
                                h = c.leftForLtr(t, g),
                                f = or(r.borderRadius)
                              a.beginPath(),
                                Object.values(f).some(function (t) {
                                  return 0 !== t
                                })
                                  ? Qe(a, { x: h, y: u, w: g, h: y, radius: f })
                                  : a.rect(h, u, g, y),
                                a.fill(),
                                0 !== n && a.stroke()
                            }
                            a.restore()
                          }
                        })(c.x(O), C, p),
                        (O = (function (t, e, r, n) {
                          return t === (n ? 'left' : 'right') ? r : 'center' === t ? (e + r) / 2 : e
                        })(z, O + g + v, b ? O + w : e.right, r.rtl)),
                        (function (t, e, r) {
                          Ze(a, r.text, t, e + m / 2, u, {
                            strikethrough: r.hidden,
                            textAlign: c.textAlign(r.textAlign)
                          })
                        })(c.x(O), C, p),
                        b ? (t.x += w + f) : (t.y += x)
                    }),
                      nn(e.ctx, r.textDirection)
                  }
                },
                {
                  key: 'drawTitle',
                  value: function () {
                    var t = this,
                      e = t.options,
                      r = e.title,
                      n = sr(r.font),
                      i = lr(r.padding)
                    if (r.display) {
                      var a,
                        o = en(e.rtl, t.left, t.width),
                        l = t.ctx,
                        s = r.position,
                        c = n.size / 2,
                        h = i.top + c,
                        f = t.left,
                        d = t.width
                      if (this.isHorizontal())
                        (d = Math.max.apply(Math, Object(u.a)(t.lineWidths))),
                          (a = t.top + h),
                          (f = nt(e.align, f, t.right - d))
                      else {
                        var v = t.columnSizes.reduce(function (t, e) {
                          return Math.max(t, e.height)
                        }, 0)
                        a = h + nt(e.align, t.top, t.bottom - v - e.labels.padding - t._computeTitleHeight())
                      }
                      var p = nt(s, f, f + d)
                      ;(l.textAlign = o.textAlign(rt(s))),
                        (l.textBaseline = 'middle'),
                        (l.strokeStyle = r.color),
                        (l.fillStyle = r.color),
                        (l.font = n.string),
                        Ze(l, r.text, p, a, n)
                    }
                  }
                },
                {
                  key: '_computeTitleHeight',
                  value: function () {
                    var t = this.options.title,
                      e = sr(t.font),
                      r = lr(t.padding)
                    return t.display ? e.lineHeight + r.height : 0
                  }
                },
                {
                  key: '_getLegendItemAt',
                  value: function (t, e) {
                    var r,
                      n,
                      i,
                      a = this
                    if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
                      for (i = a.legendHitBoxes, r = 0; r < i.length; ++r)
                        if (t >= (n = i[r]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height)
                          return a.legendItems[r]
                    return null
                  }
                },
                {
                  key: 'handleEvent',
                  value: function (t) {
                    var e = this,
                      r = e.options
                    if (
                      (function (t, e) {
                        if ('mousemove' === t && (e.onHover || e.onLeave)) return !0
                        if (e.onClick && ('click' === t || 'mouseup' === t)) return !0
                        return !1
                      })(t.type, r)
                    ) {
                      var n = e._getLegendItemAt(t.x, t.y)
                      if ('mousemove' === t.type) {
                        var i = e._hoveredItem,
                          a = (function (t, e) {
                            return null !== t && null !== e && t.datasetIndex === e.datasetIndex && t.index === e.index
                          })(i, n)
                        i && !a && dt(r.onLeave, [t, i, e], e),
                          (e._hoveredItem = n),
                          n && !a && dt(r.onHover, [t, n, e], e)
                      } else n && dt(r.onClick, [t, n, e], e)
                    }
                  }
                }
              ]),
              r
            )
          })(Ei)
        var po = {
            id: 'legend',
            _element: vo,
            start: function (t, e, r) {
              var n = (t.legend = new vo({ ctx: t.ctx, options: r, chart: t }))
              yi(t, n, r), pi(t, n)
            },
            stop: function (t) {
              gi(t, t.legend), delete t.legend
            },
            beforeUpdate: function (t, e, r) {
              var n = t.legend
              yi(t, n, r), (n.options = r)
            },
            afterUpdate: function (t) {
              var e = t.legend
              e.buildLabels(), e.adjustHitBoxes()
            },
            afterEvent: function (t, e) {
              e.replay || t.legend.handleEvent(e.event)
            },
            defaults: {
              display: !0,
              position: 'top',
              align: 'center',
              fullSize: !0,
              reverse: !1,
              weight: 1e3,
              onClick: function (t, e, r) {
                var n = e.datasetIndex,
                  i = r.chart
                i.isDatasetVisible(n) ? (i.hide(n), (e.hidden = !0)) : (i.show(n), (e.hidden = !1))
              },
              onHover: null,
              onLeave: null,
              labels: {
                color: function (t) {
                  return t.chart.options.color
                },
                boxWidth: 40,
                padding: 10,
                generateLabels: function (t) {
                  var e = t.data.datasets,
                    r = t.legend.options.labels,
                    n = r.usePointStyle,
                    i = r.pointStyle,
                    a = r.textAlign,
                    o = r.color
                  return t._getSortedDatasetMetas().map(function (t) {
                    var r = t.controller.getStyle(n ? 0 : void 0),
                      l = lr(r.borderWidth)
                    return {
                      text: e[t.index].label,
                      fillStyle: r.backgroundColor,
                      fontColor: o,
                      hidden: !t.visible,
                      lineCap: r.borderCapStyle,
                      lineDash: r.borderDash,
                      lineDashOffset: r.borderDashOffset,
                      lineJoin: r.borderJoinStyle,
                      lineWidth: (l.width + l.height) / 4,
                      strokeStyle: r.borderColor,
                      pointStyle: i || r.pointStyle,
                      rotation: r.rotation,
                      textAlign: a || r.textAlign,
                      borderRadius: 0,
                      datasetIndex: t.index
                    }
                  }, this)
                }
              },
              title: {
                color: function (t) {
                  return t.chart.options.color
                },
                display: !1,
                position: 'center',
                text: ''
              }
            },
            descriptors: {
              _scriptable: function (t) {
                return !t.startsWith('on')
              },
              labels: {
                _scriptable: function (t) {
                  return !['generateLabels', 'filter', 'sort'].includes(t)
                }
              }
            }
          },
          go = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r(t) {
              var n
              return (
                Object(f.a)(this, r),
                ((n = e.call(this)).chart = t.chart),
                (n.options = t.options),
                (n.ctx = t.ctx),
                (n._padding = void 0),
                (n.top = void 0),
                (n.bottom = void 0),
                (n.left = void 0),
                (n.right = void 0),
                (n.width = void 0),
                (n.height = void 0),
                (n.position = void 0),
                (n.weight = void 0),
                (n.fullSize = void 0),
                n
              )
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'update',
                  value: function (t, e) {
                    var r = this,
                      n = r.options
                    if (((r.left = 0), (r.top = 0), n.display)) {
                      ;(r.width = r.right = t), (r.height = r.bottom = e)
                      var i = lt(n.text) ? n.text.length : 1
                      r._padding = lr(n.padding)
                      var a = i * sr(n.font).lineHeight + r._padding.height
                      r.isHorizontal() ? (r.height = a) : (r.width = a)
                    } else r.width = r.height = r.right = r.bottom = 0
                  }
                },
                {
                  key: 'isHorizontal',
                  value: function () {
                    var t = this.options.position
                    return 'top' === t || 'bottom' === t
                  }
                },
                {
                  key: '_drawArgs',
                  value: function (t) {
                    var e,
                      r,
                      n,
                      i = this.top,
                      a = this.left,
                      o = this.bottom,
                      l = this.right,
                      s = this.options,
                      c = s.align,
                      u = 0
                    return (
                      this.isHorizontal()
                        ? ((r = nt(c, a, l)), (n = i + t), (e = l - a))
                        : ('left' === s.position
                            ? ((r = a + t), (n = nt(c, o, i)), (u = -0.5 * Ct))
                            : ((r = l - t), (n = nt(c, i, o)), (u = 0.5 * Ct)),
                          (e = o - i)),
                      { titleX: r, titleY: n, maxWidth: e, rotation: u }
                    )
                  }
                },
                {
                  key: 'draw',
                  value: function () {
                    var t = this,
                      e = t.ctx,
                      r = t.options
                    if (r.display) {
                      var n = sr(r.font),
                        i = n.lineHeight / 2 + t._padding.top,
                        a = t._drawArgs(i),
                        o = a.titleX,
                        l = a.titleY,
                        s = a.maxWidth,
                        c = a.rotation
                      Ze(e, r.text, 0, 0, n, {
                        color: r.color,
                        maxWidth: s,
                        rotation: c,
                        textAlign: rt(r.align),
                        textBaseline: 'middle',
                        translation: [o, l]
                      })
                    }
                  }
                }
              ]),
              r
            )
          })(Ei)
        var yo = {
            id: 'title',
            _element: go,
            start: function (t, e, r) {
              !(function (t, e) {
                var r = new go({ ctx: t.ctx, options: e, chart: t })
                yi(t, r, e), pi(t, r), (t.titleBlock = r)
              })(t, r)
            },
            stop: function (t) {
              var e = t.titleBlock
              gi(t, e), delete t.titleBlock
            },
            beforeUpdate: function (t, e, r) {
              var n = t.titleBlock
              yi(t, n, r), (n.options = r)
            },
            defaults: {
              align: 'center',
              display: !1,
              font: { weight: 'bold' },
              fullSize: !0,
              padding: 10,
              position: 'top',
              text: '',
              weight: 2e3
            },
            defaultRoutes: { color: 'color' },
            descriptors: { _scriptable: !0, _indexable: !1 }
          },
          mo = new WeakMap(),
          bo = {
            id: 'subtitle',
            start: function (t, e, r) {
              var n = new go({ ctx: t.ctx, options: r, chart: t })
              yi(t, n, r), pi(t, n), mo.set(t, n)
            },
            stop: function (t) {
              gi(t, mo.get(t)), mo.delete(t)
            },
            beforeUpdate: function (t, e, r) {
              var n = mo.get(t)
              yi(t, n, r), (n.options = r)
            },
            defaults: {
              align: 'center',
              display: !1,
              font: { weight: 'normal' },
              fullSize: !0,
              padding: 0,
              position: 'top',
              text: '',
              weight: 1500
            },
            defaultRoutes: { color: 'color' },
            descriptors: { _scriptable: !0, _indexable: !1 }
          },
          ko = {
            average: function (t) {
              if (!t.length) return !1
              var e,
                r,
                n = 0,
                i = 0,
                a = 0
              for (e = 0, r = t.length; e < r; ++e) {
                var o = t[e].element
                if (o && o.hasValue()) {
                  var l = o.tooltipPosition()
                  ;(n += l.x), (i += l.y), ++a
                }
              }
              return { x: n / a, y: i / a }
            },
            nearest: function (t, e) {
              if (!t.length) return !1
              var r,
                n,
                i,
                a = e.x,
                o = e.y,
                l = Number.POSITIVE_INFINITY
              for (r = 0, n = t.length; r < n; ++r) {
                var s = t[r].element
                if (s && s.hasValue()) {
                  var c = $t(e, s.getCenterPoint())
                  c < l && ((l = c), (i = s))
                }
              }
              if (i) {
                var u = i.tooltipPosition()
                ;(a = u.x), (o = u.y)
              }
              return { x: a, y: o }
            }
          }
        function xo(t, e) {
          return e && (lt(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }
        function Mo(t) {
          return ('string' === typeof t || t instanceof String) && t.indexOf('\n') > -1 ? t.split('\n') : t
        }
        function _o(t, e) {
          var r = e.element,
            n = e.datasetIndex,
            i = e.index,
            a = t.getDatasetMeta(n).controller,
            o = a.getLabelAndValue(i),
            l = o.label,
            s = o.value
          return {
            chart: t,
            label: l,
            parsed: a.getParsed(i),
            raw: t.data.datasets[n].data[i],
            formattedValue: s,
            dataset: a.getDataset(),
            dataIndex: i,
            datasetIndex: n,
            element: r
          }
        }
        function zo(t, e) {
          var r = t._chart.ctx,
            n = t.body,
            i = t.footer,
            a = t.title,
            o = e.boxWidth,
            l = e.boxHeight,
            s = sr(e.bodyFont),
            c = sr(e.titleFont),
            u = sr(e.footerFont),
            h = a.length,
            f = i.length,
            d = n.length,
            v = lr(e.padding),
            p = v.height,
            g = 0,
            y = n.reduce(function (t, e) {
              return t + e.before.length + e.lines.length + e.after.length
            }, 0)
          ;((y += t.beforeBody.length + t.afterBody.length),
          h && (p += h * c.lineHeight + (h - 1) * e.titleSpacing + e.titleMarginBottom),
          y) &&
            (p +=
              d * (e.displayColors ? Math.max(l, s.lineHeight) : s.lineHeight) +
              (y - d) * s.lineHeight +
              (y - 1) * e.bodySpacing)
          f && (p += e.footerMarginTop + f * u.lineHeight + (f - 1) * e.footerSpacing)
          var m = 0,
            b = function (t) {
              g = Math.max(g, r.measureText(t).width + m)
            }
          return (
            r.save(),
            (r.font = c.string),
            vt(t.title, b),
            (r.font = s.string),
            vt(t.beforeBody.concat(t.afterBody), b),
            (m = e.displayColors ? o + 2 : 0),
            vt(n, function (t) {
              vt(t.before, b), vt(t.lines, b), vt(t.after, b)
            }),
            (m = 0),
            (r.font = u.string),
            vt(t.footer, b),
            r.restore(),
            { width: (g += v.width), height: p }
          )
        }
        function wo(t, e, r, n) {
          var i = r.x,
            a = r.width,
            o = t.width,
            l = t.chartArea,
            s = l.left,
            c = l.right,
            u = 'center'
          return (
            'center' === n
              ? (u = i <= (s + c) / 2 ? 'left' : 'right')
              : i <= a / 2
              ? (u = 'left')
              : i >= o - a / 2 && (u = 'right'),
            (function (t, e, r, n) {
              var i = n.x,
                a = n.width,
                o = r.caretSize + r.caretPadding
              return ('left' === t && i + a + o > e.width) || ('right' === t && i - a - o < 0) || void 0
            })(u, t, e, r) && (u = 'center'),
            u
          )
        }
        function Oo(t, e, r) {
          var n =
            e.yAlign ||
            (function (t, e) {
              var r = e.y,
                n = e.height
              return r < n / 2 ? 'top' : r > t.height - n / 2 ? 'bottom' : 'center'
            })(t, r)
          return { xAlign: e.xAlign || wo(t, e, r, n), yAlign: n }
        }
        function Co(t, e, r, n) {
          var i = t.caretSize,
            a = t.caretPadding,
            o = t.cornerRadius,
            l = r.xAlign,
            s = r.yAlign,
            c = i + a,
            u = o + a,
            h = (function (t, e) {
              var r = t.x,
                n = t.width
              return 'right' === e ? (r -= n) : 'center' === e && (r -= n / 2), r
            })(e, l),
            f = (function (t, e, r) {
              var n = t.y,
                i = t.height
              return 'top' === e ? (n += r) : (n -= 'bottom' === e ? i + r : i / 2), n
            })(e, s, c)
          return (
            'center' === s
              ? 'left' === l
                ? (h += c)
                : 'right' === l && (h -= c)
              : 'left' === l
              ? (h -= u)
              : 'right' === l && (h += u),
            { x: qt(h, 0, n.width - e.width), y: qt(f, 0, n.height - e.height) }
          )
        }
        function jo(t, e, r) {
          var n = lr(r.padding)
          return 'center' === e ? t.x + t.width / 2 : 'right' === e ? t.x + t.width - n.right : t.x + n.left
        }
        function So(t) {
          return xo([], Mo(t))
        }
        function Fo(t, e) {
          var r = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks
          return r ? t.override(r) : t
        }
        var Po = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this)).opacity = 0),
              (n._active = []),
              (n._chart = t._chart),
              (n._eventPosition = void 0),
              (n._size = void 0),
              (n._cachedAnimations = void 0),
              (n._tooltipItems = []),
              (n.$animations = void 0),
              (n.$context = void 0),
              (n.options = t.options),
              (n.dataPoints = void 0),
              (n.title = void 0),
              (n.beforeBody = void 0),
              (n.body = void 0),
              (n.afterBody = void 0),
              (n.footer = void 0),
              (n.xAlign = void 0),
              (n.yAlign = void 0),
              (n.x = void 0),
              (n.y = void 0),
              (n.height = void 0),
              (n.width = void 0),
              (n.caretX = void 0),
              (n.caretY = void 0),
              (n.labelColors = void 0),
              (n.labelPointStyles = void 0),
              (n.labelTextColors = void 0),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'initialize',
                value: function (t) {
                  ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
                }
              },
              {
                key: '_resolveAnimations',
                value: function () {
                  var t = this,
                    e = t._cachedAnimations
                  if (e) return e
                  var r = t._chart,
                    n = t.options.setContext(t.getContext()),
                    i = n.enabled && r.options.animation && n.animations,
                    a = new mn(t._chart, i)
                  return i._cacheable && (t._cachedAnimations = Object.freeze(a)), a
                }
              },
              {
                key: 'getContext',
                value: function () {
                  var t,
                    e,
                    r,
                    n = this
                  return (
                    n.$context ||
                    (n.$context =
                      ((t = n._chart.getContext()),
                      (e = n),
                      (r = n._tooltipItems),
                      Object.assign(Object.create(t), { tooltip: e, tooltipItems: r, type: 'tooltip' })))
                  )
                }
              },
              {
                key: 'getTitle',
                value: function (t, e) {
                  var r = this,
                    n = e.callbacks,
                    i = n.beforeTitle.apply(r, [t]),
                    a = n.title.apply(r, [t]),
                    o = n.afterTitle.apply(r, [t]),
                    l = []
                  return (l = xo(l, Mo(i))), (l = xo(l, Mo(a))), (l = xo(l, Mo(o)))
                }
              },
              {
                key: 'getBeforeBody',
                value: function (t, e) {
                  return So(e.callbacks.beforeBody.apply(this, [t]))
                }
              },
              {
                key: 'getBody',
                value: function (t, e) {
                  var r = this,
                    n = e.callbacks,
                    i = []
                  return (
                    vt(t, function (t) {
                      var e = { before: [], lines: [], after: [] },
                        a = Fo(n, t)
                      xo(e.before, Mo(a.beforeLabel.call(r, t))),
                        xo(e.lines, a.label.call(r, t)),
                        xo(e.after, Mo(a.afterLabel.call(r, t))),
                        i.push(e)
                    }),
                    i
                  )
                }
              },
              {
                key: 'getAfterBody',
                value: function (t, e) {
                  return So(e.callbacks.afterBody.apply(this, [t]))
                }
              },
              {
                key: 'getFooter',
                value: function (t, e) {
                  var r = this,
                    n = e.callbacks,
                    i = n.beforeFooter.apply(r, [t]),
                    a = n.footer.apply(r, [t]),
                    o = n.afterFooter.apply(r, [t]),
                    l = []
                  return (l = xo(l, Mo(i))), (l = xo(l, Mo(a))), (l = xo(l, Mo(o)))
                }
              },
              {
                key: '_createItems',
                value: function (t) {
                  var e,
                    r,
                    n = this,
                    i = n._active,
                    a = n._chart.data,
                    o = [],
                    l = [],
                    s = [],
                    c = []
                  for (e = 0, r = i.length; e < r; ++e) c.push(_o(n._chart, i[e]))
                  return (
                    t.filter &&
                      (c = c.filter(function (e, r, n) {
                        return t.filter(e, r, n, a)
                      })),
                    t.itemSort &&
                      (c = c.sort(function (e, r) {
                        return t.itemSort(e, r, a)
                      })),
                    vt(c, function (e) {
                      var r = Fo(t.callbacks, e)
                      o.push(r.labelColor.call(n, e)),
                        l.push(r.labelPointStyle.call(n, e)),
                        s.push(r.labelTextColor.call(n, e))
                    }),
                    (n.labelColors = o),
                    (n.labelPointStyles = l),
                    (n.labelTextColors = s),
                    (n.dataPoints = c),
                    c
                  )
                }
              },
              {
                key: 'update',
                value: function (t, e) {
                  var r,
                    n = this,
                    i = n.options.setContext(n.getContext()),
                    a = n._active,
                    o = []
                  if (a.length) {
                    var l = ko[i.position].call(n, a, n._eventPosition)
                    ;(o = n._createItems(i)),
                      (n.title = n.getTitle(o, i)),
                      (n.beforeBody = n.getBeforeBody(o, i)),
                      (n.body = n.getBody(o, i)),
                      (n.afterBody = n.getAfterBody(o, i)),
                      (n.footer = n.getFooter(o, i))
                    var s = (n._size = zo(n, i)),
                      c = Object.assign({}, l, s),
                      u = Oo(n._chart, i, c),
                      h = Co(i, c, u, n._chart)
                    ;(n.xAlign = u.xAlign),
                      (n.yAlign = u.yAlign),
                      (r = { opacity: 1, x: h.x, y: h.y, width: s.width, height: s.height, caretX: l.x, caretY: l.y })
                  } else 0 !== n.opacity && (r = { opacity: 0 })
                  ;(n._tooltipItems = o),
                    (n.$context = void 0),
                    r && n._resolveAnimations().update(n, r),
                    t && i.external && i.external.call(n, { chart: n._chart, tooltip: n, replay: e })
                }
              },
              {
                key: 'drawCaret',
                value: function (t, e, r, n) {
                  var i = this.getCaretPosition(t, r, n)
                  e.lineTo(i.x1, i.y1), e.lineTo(i.x2, i.y2), e.lineTo(i.x3, i.y3)
                }
              },
              {
                key: 'getCaretPosition',
                value: function (t, e, r) {
                  var n,
                    i,
                    a,
                    o,
                    l,
                    s,
                    c = this.xAlign,
                    u = this.yAlign,
                    h = r.cornerRadius,
                    f = r.caretSize,
                    d = t.x,
                    v = t.y,
                    p = e.width,
                    g = e.height
                  return (
                    'center' === u
                      ? ((l = v + g / 2),
                        'left' === c
                          ? ((i = (n = d) - f), (o = l + f), (s = l - f))
                          : ((i = (n = d + p) + f), (o = l - f), (s = l + f)),
                        (a = n))
                      : ((i = 'left' === c ? d + h + f : 'right' === c ? d + p - h - f : this.caretX),
                        'top' === u
                          ? ((l = (o = v) - f), (n = i - f), (a = i + f))
                          : ((l = (o = v + g) + f), (n = i + f), (a = i - f)),
                        (s = o)),
                    { x1: n, x2: i, x3: a, y1: o, y2: l, y3: s }
                  )
                }
              },
              {
                key: 'drawTitle',
                value: function (t, e, r) {
                  var n,
                    i,
                    a,
                    o = this,
                    l = o.title,
                    s = l.length
                  if (s) {
                    var c = en(r.rtl, o.x, o.width)
                    for (
                      t.x = jo(o, r.titleAlign, r),
                        e.textAlign = c.textAlign(r.titleAlign),
                        e.textBaseline = 'middle',
                        n = sr(r.titleFont),
                        i = r.titleSpacing,
                        e.fillStyle = r.titleColor,
                        e.font = n.string,
                        a = 0;
                      a < s;
                      ++a
                    )
                      e.fillText(l[a], c.x(t.x), t.y + n.lineHeight / 2),
                        (t.y += n.lineHeight + i),
                        a + 1 === s && (t.y += r.titleMarginBottom - i)
                  }
                }
              },
              {
                key: '_drawColorBox',
                value: function (t, e, r, n, i) {
                  var a = this,
                    o = a.labelColors[r],
                    l = a.labelPointStyles[r],
                    s = i.boxHeight,
                    c = i.boxWidth,
                    u = sr(i.bodyFont),
                    h = jo(a, 'left', i),
                    f = n.x(h),
                    d = s < u.lineHeight ? (u.lineHeight - s) / 2 : 0,
                    v = e.y + d
                  if (i.usePointStyle) {
                    var p = {
                        radius: Math.min(c, s) / 2,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        borderWidth: 1
                      },
                      g = n.leftForLtr(f, c) + c / 2,
                      y = v + s / 2
                    ;(t.strokeStyle = i.multiKeyBackground),
                      (t.fillStyle = i.multiKeyBackground),
                      $e(t, p, g, y),
                      (t.strokeStyle = o.borderColor),
                      (t.fillStyle = o.backgroundColor),
                      $e(t, p, g, y)
                  } else {
                    ;(t.lineWidth = o.borderWidth || 1),
                      (t.strokeStyle = o.borderColor),
                      t.setLineDash(o.borderDash || []),
                      (t.lineDashOffset = o.borderDashOffset || 0)
                    var m = n.leftForLtr(f, c),
                      b = n.leftForLtr(n.xPlus(f, 1), c - 2),
                      k = or(o.borderRadius)
                    Object.values(k).some(function (t) {
                      return 0 !== t
                    })
                      ? (t.beginPath(),
                        (t.fillStyle = i.multiKeyBackground),
                        Qe(t, { x: m, y: v, w: c, h: s, radius: k }),
                        t.fill(),
                        t.stroke(),
                        (t.fillStyle = o.backgroundColor),
                        t.beginPath(),
                        Qe(t, { x: b, y: v + 1, w: c - 2, h: s - 2, radius: k }),
                        t.fill())
                      : ((t.fillStyle = i.multiKeyBackground),
                        t.fillRect(m, v, c, s),
                        t.strokeRect(m, v, c, s),
                        (t.fillStyle = o.backgroundColor),
                        t.fillRect(b, v + 1, c - 2, s - 2))
                  }
                  t.fillStyle = a.labelTextColors[r]
                }
              },
              {
                key: 'drawBody',
                value: function (t, e, r) {
                  var n,
                    i,
                    a,
                    o,
                    l,
                    s,
                    c,
                    u = this,
                    h = u.body,
                    f = r.bodySpacing,
                    d = r.bodyAlign,
                    v = r.displayColors,
                    p = r.boxHeight,
                    g = r.boxWidth,
                    y = sr(r.bodyFont),
                    m = y.lineHeight,
                    b = 0,
                    k = en(r.rtl, u.x, u.width),
                    x = function (r) {
                      e.fillText(r, k.x(t.x + b), t.y + m / 2), (t.y += m + f)
                    },
                    M = k.textAlign(d)
                  for (
                    e.textAlign = d,
                      e.textBaseline = 'middle',
                      e.font = y.string,
                      t.x = jo(u, M, r),
                      e.fillStyle = r.bodyColor,
                      vt(u.beforeBody, x),
                      b = v && 'right' !== M ? ('center' === d ? g / 2 + 1 : g + 2) : 0,
                      o = 0,
                      s = h.length;
                    o < s;
                    ++o
                  ) {
                    for (
                      n = h[o],
                        i = u.labelTextColors[o],
                        e.fillStyle = i,
                        vt(n.before, x),
                        a = n.lines,
                        v && a.length && (u._drawColorBox(e, t, o, k, r), (m = Math.max(y.lineHeight, p))),
                        l = 0,
                        c = a.length;
                      l < c;
                      ++l
                    )
                      x(a[l]), (m = y.lineHeight)
                    vt(n.after, x)
                  }
                  ;(b = 0), (m = y.lineHeight), vt(u.afterBody, x), (t.y -= f)
                }
              },
              {
                key: 'drawFooter',
                value: function (t, e, r) {
                  var n,
                    i,
                    a = this,
                    o = a.footer,
                    l = o.length
                  if (l) {
                    var s = en(r.rtl, a.x, a.width)
                    for (
                      t.x = jo(a, r.footerAlign, r),
                        t.y += r.footerMarginTop,
                        e.textAlign = s.textAlign(r.footerAlign),
                        e.textBaseline = 'middle',
                        n = sr(r.footerFont),
                        e.fillStyle = r.footerColor,
                        e.font = n.string,
                        i = 0;
                      i < l;
                      ++i
                    )
                      e.fillText(o[i], s.x(t.x), t.y + n.lineHeight / 2), (t.y += n.lineHeight + r.footerSpacing)
                  }
                }
              },
              {
                key: 'drawBackground',
                value: function (t, e, r, n) {
                  var i = this.xAlign,
                    a = this.yAlign,
                    o = t.x,
                    l = t.y,
                    s = r.width,
                    c = r.height,
                    u = n.cornerRadius
                  ;(e.fillStyle = n.backgroundColor),
                    (e.strokeStyle = n.borderColor),
                    (e.lineWidth = n.borderWidth),
                    e.beginPath(),
                    e.moveTo(o + u, l),
                    'top' === a && this.drawCaret(t, e, r, n),
                    e.lineTo(o + s - u, l),
                    e.quadraticCurveTo(o + s, l, o + s, l + u),
                    'center' === a && 'right' === i && this.drawCaret(t, e, r, n),
                    e.lineTo(o + s, l + c - u),
                    e.quadraticCurveTo(o + s, l + c, o + s - u, l + c),
                    'bottom' === a && this.drawCaret(t, e, r, n),
                    e.lineTo(o + u, l + c),
                    e.quadraticCurveTo(o, l + c, o, l + c - u),
                    'center' === a && 'left' === i && this.drawCaret(t, e, r, n),
                    e.lineTo(o, l + u),
                    e.quadraticCurveTo(o, l, o + u, l),
                    e.closePath(),
                    e.fill(),
                    n.borderWidth > 0 && e.stroke()
                }
              },
              {
                key: '_updateAnimationTarget',
                value: function (t) {
                  var e = this,
                    r = e._chart,
                    n = e.$animations,
                    i = n && n.x,
                    a = n && n.y
                  if (i || a) {
                    var o = ko[t.position].call(e, e._active, e._eventPosition)
                    if (!o) return
                    var l = (e._size = zo(e, t)),
                      s = Object.assign({}, o, e._size),
                      c = Oo(r, t, s),
                      u = Co(t, s, c, r)
                    ;(i._to === u.x && a._to === u.y) ||
                      ((e.xAlign = c.xAlign),
                      (e.yAlign = c.yAlign),
                      (e.width = l.width),
                      (e.height = l.height),
                      (e.caretX = o.x),
                      (e.caretY = o.y),
                      e._resolveAnimations().update(e, u))
                  }
                }
              },
              {
                key: 'draw',
                value: function (t) {
                  var e = this,
                    r = e.options.setContext(e.getContext()),
                    n = e.opacity
                  if (n) {
                    e._updateAnimationTarget(r)
                    var i = { width: e.width, height: e.height },
                      a = { x: e.x, y: e.y }
                    n = Math.abs(n) < 0.001 ? 0 : n
                    var o = lr(r.padding),
                      l =
                        e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length
                    r.enabled &&
                      l &&
                      (t.save(),
                      (t.globalAlpha = n),
                      e.drawBackground(a, t, i, r),
                      rn(t, r.textDirection),
                      (a.y += o.top),
                      e.drawTitle(a, t, r),
                      e.drawBody(a, t, r),
                      e.drawFooter(a, t, r),
                      nn(t, r.textDirection),
                      t.restore())
                  }
                }
              },
              {
                key: 'getActiveElements',
                value: function () {
                  return this._active || []
                }
              },
              {
                key: 'setActiveElements',
                value: function (t, e) {
                  var r = this,
                    n = r._active,
                    i = t.map(function (t) {
                      var e = t.datasetIndex,
                        n = t.index,
                        i = r._chart.getDatasetMeta(e)
                      if (!i) throw new Error('Cannot find a dataset at index ' + e)
                      return { datasetIndex: e, element: i.data[n], index: n }
                    }),
                    a = !pt(n, i),
                    o = r._positionChanged(i, e)
                  ;(a || o) && ((r._active = i), (r._eventPosition = e), r.update(!0))
                }
              },
              {
                key: 'handleEvent',
                value: function (t, e) {
                  var r,
                    n = this,
                    i = n.options,
                    a = n._active || [],
                    o = []
                  'mouseout' !== t.type &&
                    ((o = n._chart.getElementsAtEventForMode(t, i.mode, i, e)), i.reverse && o.reverse())
                  var l = n._positionChanged(o, t)
                  return (
                    (r = e || !pt(o, a) || l) &&
                      ((n._active = o),
                      (i.enabled || i.external) && ((n._eventPosition = { x: t.x, y: t.y }), n.update(!0, e))),
                    r
                  )
                }
              },
              {
                key: '_positionChanged',
                value: function (t, e) {
                  var r = this.caretX,
                    n = this.caretY,
                    i = this.options,
                    a = ko[i.position].call(this, t, e)
                  return !1 !== a && (r !== a.x || n !== a.y)
                }
              }
            ]),
            r
          )
        })(Ei)
        Po.positioners = ko
        var Do = {
            id: 'tooltip',
            _element: Po,
            positioners: ko,
            afterInit: function (t, e, r) {
              r && (t.tooltip = new Po({ _chart: t, options: r }))
            },
            beforeUpdate: function (t, e, r) {
              t.tooltip && t.tooltip.initialize(r)
            },
            reset: function (t, e, r) {
              t.tooltip && t.tooltip.initialize(r)
            },
            afterDraw: function (t) {
              var e = t.tooltip,
                r = { tooltip: e }
              !1 !== t.notifyPlugins('beforeTooltipDraw', r) &&
                (e && e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', r))
            },
            afterEvent: function (t, e) {
              if (t.tooltip) {
                var r = e.replay
                t.tooltip.handleEvent(e.event, r) && (e.changed = !0)
              }
            },
            defaults: {
              enabled: !0,
              external: null,
              position: 'average',
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#fff',
              titleFont: { weight: 'bold' },
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleAlign: 'left',
              bodyColor: '#fff',
              bodySpacing: 2,
              bodyFont: {},
              bodyAlign: 'left',
              footerColor: '#fff',
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFont: { weight: 'bold' },
              footerAlign: 'left',
              padding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              boxHeight: function (t, e) {
                return e.bodyFont.size
              },
              boxWidth: function (t, e) {
                return e.bodyFont.size
              },
              multiKeyBackground: '#fff',
              displayColors: !0,
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              animation: { duration: 400, easing: 'easeOutQuart' },
              animations: {
                numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
                opacity: { easing: 'linear', duration: 200 }
              },
              callbacks: {
                beforeTitle: it,
                title: function (t) {
                  if (t.length > 0) {
                    var e = t[0],
                      r = e.chart.data.labels,
                      n = r ? r.length : 0
                    if (this && this.options && 'dataset' === this.options.mode) return e.dataset.label || ''
                    if (e.label) return e.label
                    if (n > 0 && e.dataIndex < n) return r[e.dataIndex]
                  }
                  return ''
                },
                afterTitle: it,
                beforeBody: it,
                beforeLabel: it,
                label: function (t) {
                  if (this && this.options && 'dataset' === this.options.mode)
                    return t.label + ': ' + t.formattedValue || t.formattedValue
                  var e = t.dataset.label || ''
                  e && (e += ': ')
                  var r = t.formattedValue
                  return ot(r) || (e += r), e
                },
                labelColor: function (t) {
                  var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                  return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0
                  }
                },
                labelTextColor: function () {
                  return this.options.bodyColor
                },
                labelPointStyle: function (t) {
                  var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                  return { pointStyle: e.pointStyle, rotation: e.rotation }
                },
                afterLabel: it,
                afterBody: it,
                beforeFooter: it,
                footer: it,
                afterFooter: it
              }
            },
            defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
            descriptors: {
              _scriptable: function (t) {
                return 'filter' !== t && 'itemSort' !== t && 'external' !== t
              },
              _indexable: !1,
              callbacks: { _scriptable: !1, _indexable: !1 },
              animation: { _fallback: !1 },
              animations: { _fallback: 'animation' }
            },
            additionalOptionScopes: ['interaction']
          },
          Ao = Object.freeze({
            __proto__: null,
            Decimation: Xa,
            Filler: ho,
            Legend: po,
            SubTitle: bo,
            Title: yo,
            Tooltip: Do
          })
        function Eo(t, e, r) {
          var n = t.indexOf(e)
          return -1 === n
            ? (function (t, e, r) {
                return 'string' === typeof e ? t.push(e) - 1 : isNaN(e) ? null : r
              })(t, e, r)
            : n !== t.lastIndexOf(e)
            ? r
            : n
        }
        var To = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return Object(f.a)(this, r), ((n = e.call(this, t))._startValue = void 0), (n._valueRange = 0), n
          }
          return (
            Object(d.a)(r, [
              {
                key: 'parse',
                value: function (t, e) {
                  if (ot(t)) return null
                  var r = this.getLabels()
                  return (function (t, e) {
                    return null === t ? null : qt(Math.round(t), 0, e)
                  })((e = isFinite(e) && r[e] === t ? e : Eo(r, t, ht(e, t))), r.length - 1)
                }
              },
              {
                key: 'determineDataLimits',
                value: function () {
                  var t = this,
                    e = t.getUserBounds(),
                    r = e.minDefined,
                    n = e.maxDefined,
                    i = t.getMinMax(!0),
                    a = i.min,
                    o = i.max
                  'ticks' === t.options.bounds && (r || (a = 0), n || (o = t.getLabels().length - 1)),
                    (t.min = a),
                    (t.max = o)
                }
              },
              {
                key: 'buildTicks',
                value: function () {
                  var t = this,
                    e = t.min,
                    r = t.max,
                    n = t.options.offset,
                    i = [],
                    a = t.getLabels()
                  ;(a = 0 === e && r === a.length - 1 ? a : a.slice(e, r + 1)),
                    (t._valueRange = Math.max(a.length - (n ? 0 : 1), 1)),
                    (t._startValue = t.min - (n ? 0.5 : 0))
                  for (var o = e; o <= r; o++) i.push({ value: o })
                  return i
                }
              },
              {
                key: 'getLabelForValue',
                value: function (t) {
                  var e = this.getLabels()
                  return t >= 0 && t < e.length ? e[t] : t
                }
              },
              {
                key: 'configure',
                value: function () {
                  var t = this
                  Object(a.a)(Object(o.a)(r.prototype), 'configure', this).call(this),
                    t.isHorizontal() || (t._reversePixels = !t._reversePixels)
                }
              },
              {
                key: 'getPixelForValue',
                value: function (t) {
                  var e = this
                  return (
                    'number' !== typeof t && (t = e.parse(t)),
                    null === t ? NaN : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
                  )
                }
              },
              {
                key: 'getPixelForTick',
                value: function (t) {
                  var e = this.ticks
                  return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
              },
              {
                key: 'getValueForPixel',
                value: function (t) {
                  var e = this
                  return Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange)
                }
              },
              {
                key: 'getBasePixel',
                value: function () {
                  return this.bottom
                }
              }
            ]),
            r
          )
        })(Yi)
        function Bo(t, e) {
          var r,
            n,
            i,
            a,
            o = [],
            l = t.bounds,
            s = t.step,
            c = t.min,
            u = t.max,
            h = t.precision,
            f = t.count,
            d = t.maxTicks,
            v = t.maxDigits,
            p = t.includeBounds,
            g = s || 1,
            y = d - 1,
            m = e.min,
            b = e.max,
            k = !ot(c),
            x = !ot(u),
            M = !ot(f),
            _ = (b - m) / (v + 1),
            z = Lt((b - m) / y / g) * g
          if (z < 1e-14 && !k && !x) return [{ value: m }, { value: b }]
          ;(a = Math.ceil(b / z) - Math.floor(m / z)) > y && (z = Lt((a * z) / y / g) * g),
            ot(h) || ((r = Math.pow(10, h)), (z = Math.ceil(z * r) / r)),
            'ticks' === l ? ((n = Math.floor(m / z) * z), (i = Math.ceil(b / z) * z)) : ((n = m), (i = b)),
            k &&
            x &&
            s &&
            (function (t, e) {
              var r = Math.round(t)
              return r - e <= t && r + e >= t
            })((u - c) / s, z / 1e3)
              ? ((z = (u - c) / (a = Math.round(Math.min((u - c) / z, d)))), (n = c), (i = u))
              : M
              ? (z = ((i = x ? u : i) - (n = k ? c : n)) / (a = f - 1))
              : (a = It((a = (i - n) / z), Math.round(a), z / 1e3) ? Math.round(a) : Math.ceil(a))
          var w = Math.max(Wt(z), Wt(n))
          ;(r = Math.pow(10, ot(h) ? w : h)), (n = Math.round(n * r) / r), (i = Math.round(i * r) / r)
          var O = 0
          for (
            k &&
            (p && n !== c
              ? (o.push({ value: c }), n < c && O++, It(Math.round((n + O * z) * r) / r, c, Lo(c, _, t)) && O++)
              : n < c && O++);
            O < a;
            ++O
          )
            o.push({ value: Math.round((n + O * z) * r) / r })
          return (
            x && p && i !== u
              ? It(o[o.length - 1].value, u, Lo(u, _, t))
                ? (o[o.length - 1].value = u)
                : o.push({ value: u })
              : (x && i !== u) || o.push({ value: i }),
            o
          )
        }
        function Lo(t, e, r) {
          var n = r.horizontal,
            i = Ht(r.minRotation),
            a = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
            o = 0.75 * e * ('' + t).length
          return Math.min(e / a, o)
        }
        ;(To.id = 'category'), (To.defaults = { ticks: { callback: To.prototype.getLabelForValue } })
        var Ro = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r(t) {
              var n
              return (
                Object(f.a)(this, r),
                ((n = e.call(this, t)).start = void 0),
                (n.end = void 0),
                (n._startValue = void 0),
                (n._endValue = void 0),
                (n._valueRange = 0),
                n
              )
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'parse',
                  value: function (t, e) {
                    return ot(t) || (('number' === typeof t || t instanceof Number) && !isFinite(+t)) ? null : +t
                  }
                },
                {
                  key: 'handleTickRangeOptions',
                  value: function () {
                    var t = this,
                      e = t.options.beginAtZero,
                      r = t.getUserBounds(),
                      n = r.minDefined,
                      i = r.maxDefined,
                      a = t.min,
                      o = t.max,
                      l = function (t) {
                        return (a = n ? a : t)
                      },
                      s = function (t) {
                        return (o = i ? o : t)
                      }
                    if (e) {
                      var c = Bt(a),
                        u = Bt(o)
                      c < 0 && u < 0 ? s(0) : c > 0 && u > 0 && l(0)
                    }
                    if (a === o) {
                      var h = 1
                      ;(o >= Number.MAX_SAFE_INTEGER || a <= Number.MIN_SAFE_INTEGER) && (h = Math.abs(0.05 * o)),
                        s(o + h),
                        e || l(a - h)
                    }
                    ;(t.min = a), (t.max = o)
                  }
                },
                {
                  key: 'getTickLimit',
                  value: function () {
                    var t,
                      e = this,
                      r = e.options.ticks,
                      n = r.maxTicksLimit,
                      i = r.stepSize
                    return (
                      i
                        ? (t = Math.ceil(e.max / i) - Math.floor(e.min / i) + 1)
                        : ((t = e.computeTickLimit()), (n = n || 11)),
                      n && (t = Math.min(n, t)),
                      t
                    )
                  }
                },
                {
                  key: 'computeTickLimit',
                  value: function () {
                    return Number.POSITIVE_INFINITY
                  }
                },
                {
                  key: 'buildTicks',
                  value: function () {
                    var t = this,
                      e = t.options,
                      r = e.ticks,
                      n = t.getTickLimit(),
                      i = Bo(
                        {
                          maxTicks: (n = Math.max(2, n)),
                          bounds: e.bounds,
                          min: e.min,
                          max: e.max,
                          precision: r.precision,
                          step: r.stepSize,
                          count: r.count,
                          maxDigits: t._maxDigits(),
                          horizontal: t.isHorizontal(),
                          minRotation: r.minRotation || 0,
                          includeBounds: !1 !== r.includeBounds
                        },
                        t._range || t
                      )
                    return (
                      'ticks' === e.bounds && Vt(i, t, 'value'),
                      e.reverse
                        ? (i.reverse(), (t.start = t.max), (t.end = t.min))
                        : ((t.start = t.min), (t.end = t.max)),
                      i
                    )
                  }
                },
                {
                  key: 'configure',
                  value: function () {
                    var t = this,
                      e = t.ticks,
                      n = t.min,
                      i = t.max
                    if (
                      (Object(a.a)(Object(o.a)(r.prototype), 'configure', this).call(this),
                      t.options.offset && e.length)
                    ) {
                      var l = (i - n) / Math.max(e.length - 1, 1) / 2
                      ;(n -= l), (i += l)
                    }
                    ;(t._startValue = n), (t._endValue = i), (t._valueRange = i - n)
                  }
                },
                {
                  key: 'getLabelForValue',
                  value: function (t) {
                    return tn(t, this.chart.options.locale)
                  }
                }
              ]),
              r
            )
          })(Yi),
          Io = (function (t) {
            Object(l.a)(r, t)
            var e = Object(s.a)(r)
            function r() {
              return Object(f.a)(this, r), e.apply(this, arguments)
            }
            return (
              Object(d.a)(r, [
                {
                  key: 'determineDataLimits',
                  value: function () {
                    var t = this,
                      e = t.getMinMax(!0),
                      r = e.min,
                      n = e.max
                    ;(t.min = ct(r) ? r : 0), (t.max = ct(n) ? n : 1), t.handleTickRangeOptions()
                  }
                },
                {
                  key: 'computeTickLimit',
                  value: function () {
                    var t = this,
                      e = t.isHorizontal(),
                      r = e ? t.width : t.height,
                      n = Ht(t.options.ticks.minRotation),
                      i = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
                      a = t._resolveTickFontOptions(0)
                    return Math.ceil(r / Math.min(40, a.lineHeight / i))
                  }
                },
                {
                  key: 'getPixelForValue',
                  value: function (t) {
                    return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                  }
                },
                {
                  key: 'getValueForPixel',
                  value: function (t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                  }
                }
              ]),
              r
            )
          })(Ro)
        function Vo(t) {
          return 1 === t / Math.pow(10, Math.floor(Tt(t)))
        }
        ;(Io.id = 'linear'), (Io.defaults = { ticks: { callback: Bi.formatters.numeric } })
        var Ho = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this, t)).start = void 0),
              (n.end = void 0),
              (n._startValue = void 0),
              (n._valueRange = 0),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'parse',
                value: function (t, e) {
                  var r = Ro.prototype.parse.apply(this, [t, e])
                  if (0 !== r) return ct(r) && r > 0 ? r : null
                  this._zero = !0
                }
              },
              {
                key: 'determineDataLimits',
                value: function () {
                  var t = this,
                    e = t.getMinMax(!0),
                    r = e.min,
                    n = e.max
                  ;(t.min = ct(r) ? Math.max(0, r) : null),
                    (t.max = ct(n) ? Math.max(0, n) : null),
                    t.options.beginAtZero && (t._zero = !0),
                    t.handleTickRangeOptions()
                }
              },
              {
                key: 'handleTickRangeOptions',
                value: function () {
                  var t = this,
                    e = t.getUserBounds(),
                    r = e.minDefined,
                    n = e.maxDefined,
                    i = t.min,
                    a = t.max,
                    o = function (t) {
                      return (i = r ? i : t)
                    },
                    l = function (t) {
                      return (a = n ? a : t)
                    },
                    s = function (t, e) {
                      return Math.pow(10, Math.floor(Tt(t)) + e)
                    }
                  i === a && (i <= 0 ? (o(1), l(10)) : (o(s(i, -1)), l(s(a, 1)))),
                    i <= 0 && o(s(a, -1)),
                    a <= 0 && l(s(i, 1)),
                    t._zero && t.min !== t._suggestedMin && i === s(t.min, 0) && o(s(i, -1)),
                    (t.min = i),
                    (t.max = a)
                }
              },
              {
                key: 'buildTicks',
                value: function () {
                  var t = this,
                    e = t.options,
                    r = (function (t, e) {
                      var r = Math.floor(Tt(e.max)),
                        n = Math.ceil(e.max / Math.pow(10, r)),
                        i = [],
                        a = ut(t.min, Math.pow(10, Math.floor(Tt(e.min)))),
                        o = Math.floor(Tt(a)),
                        l = Math.floor(a / Math.pow(10, o)),
                        s = o < 0 ? Math.pow(10, Math.abs(o)) : 1
                      do {
                        i.push({ value: a, major: Vo(a) }),
                          10 === ++l && ((l = 1), (s = ++o >= 0 ? 1 : s)),
                          (a = Math.round(l * Math.pow(10, o) * s) / s)
                      } while (o < r || (o === r && l < n))
                      var c = ut(t.max, a)
                      return i.push({ value: c, major: Vo(a) }), i
                    })({ min: t._userMin, max: t._userMax }, t)
                  return (
                    'ticks' === e.bounds && Vt(r, t, 'value'),
                    e.reverse
                      ? (r.reverse(), (t.start = t.max), (t.end = t.min))
                      : ((t.start = t.min), (t.end = t.max)),
                    r
                  )
                }
              },
              {
                key: 'getLabelForValue',
                value: function (t) {
                  return void 0 === t ? '0' : tn(t, this.chart.options.locale)
                }
              },
              {
                key: 'configure',
                value: function () {
                  var t = this,
                    e = t.min
                  Object(a.a)(Object(o.a)(r.prototype), 'configure', this).call(this),
                    (t._startValue = Tt(e)),
                    (t._valueRange = Tt(t.max) - Tt(e))
                }
              },
              {
                key: 'getPixelForValue',
                value: function (t) {
                  var e = this
                  return (
                    (void 0 !== t && 0 !== t) || (t = e.min),
                    null === t || isNaN(t)
                      ? NaN
                      : e.getPixelForDecimal(t === e.min ? 0 : (Tt(t) - e._startValue) / e._valueRange)
                  )
                }
              },
              {
                key: 'getValueForPixel',
                value: function (t) {
                  var e = this,
                    r = e.getDecimalForPixel(t)
                  return Math.pow(10, e._startValue + r * e._valueRange)
                }
              }
            ]),
            r
          )
        })(Yi)
        function No(t) {
          var e = t.ticks
          if (e.display && t.display) {
            var r = lr(e.backdropPadding)
            return ht(e.font && e.font.size, Ie.font.size) + r.height
          }
          return 0
        }
        function Wo(t, e, r, n, i) {
          return t === n || t === i
            ? { start: e - r / 2, end: e + r / 2 }
            : t < n || t > i
            ? { start: e - r, end: e }
            : { start: e, end: e + r }
        }
        function $o(t) {
          for (
            var e,
              r,
              n,
              i = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
              a = {},
              o = [],
              l = [],
              s = t.getLabels().length,
              c = 0;
            c < s;
            c++
          ) {
            var u = t.options.pointLabels.setContext(t.getPointLabelContext(c))
            l[c] = u.padding
            var h = t.getPointPosition(c, t.drawingArea + l[c]),
              f = sr(u.font),
              d =
                ((e = t.ctx),
                (r = f),
                (n = lt((n = t._pointLabels[c])) ? n : [n]),
                { w: He(e, r.string, n), h: n.length * r.lineHeight })
            o[c] = d
            var v = t.getIndexAngle(c),
              p = Nt(v),
              g = Wo(p, h.x, d.w, 0, 180),
              y = Wo(p, h.y, d.h, 90, 270)
            g.start < i.l && ((i.l = g.start), (a.l = v)),
              g.end > i.r && ((i.r = g.end), (a.r = v)),
              y.start < i.t && ((i.t = y.start), (a.t = v)),
              y.end > i.b && ((i.b = y.end), (a.b = v))
          }
          t._setReductions(t.drawingArea, i, a),
            (t._pointLabelItems = (function (t, e, r) {
              for (
                var n = [],
                  i = t.getLabels().length,
                  a = t.options,
                  o = No(a),
                  l = t.getDistanceFromCenterForValue(a.ticks.reverse ? t.min : t.max),
                  s = 0;
                s < i;
                s++
              ) {
                var c = 0 === s ? o / 2 : 0,
                  u = t.getPointPosition(s, l + c + r[s]),
                  h = Nt(t.getIndexAngle(s)),
                  f = e[s],
                  d = Xo(u.y, f.h, h),
                  v = Yo(h),
                  p = Uo(u.x, f.w, v)
                n.push({ x: u.x, y: d, textAlign: v, left: p, top: d, right: p + f.w, bottom: d + f.h })
              }
              return n
            })(t, o, l))
        }
        function Yo(t) {
          return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right'
        }
        function Uo(t, e, r) {
          return 'right' === r ? (t -= e) : 'center' === r && (t -= e / 2), t
        }
        function Xo(t, e, r) {
          return 90 === r || 270 === r ? (t -= e / 2) : (r > 270 || r < 90) && (t -= e), t
        }
        function qo(t, e, r, n) {
          var i = t.ctx
          if (r) i.arc(t.xCenter, t.yCenter, e, 0, jt)
          else {
            var a = t.getPointPosition(0, e)
            i.moveTo(a.x, a.y)
            for (var o = 1; o < n; o++) (a = t.getPointPosition(o, e)), i.lineTo(a.x, a.y)
          }
        }
        function Ko(t) {
          return Rt(t) ? t : 0
        }
        ;(Ho.id = 'logarithmic'),
          (Ho.defaults = { ticks: { callback: Bi.formatters.logarithmic, major: { enabled: !0 } } })
        var Zo = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this, t)).xCenter = void 0),
              (n.yCenter = void 0),
              (n.drawingArea = void 0),
              (n._pointLabels = []),
              (n._pointLabelItems = []),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'setDimensions',
                value: function () {
                  var t = this
                  ;(t.width = t.maxWidth),
                    (t.height = t.maxHeight),
                    (t.paddingTop = No(t.options) / 2),
                    (t.xCenter = Math.floor(t.width / 2)),
                    (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                    (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2)
                }
              },
              {
                key: 'determineDataLimits',
                value: function () {
                  var t = this,
                    e = t.getMinMax(!1),
                    r = e.min,
                    n = e.max
                  ;(t.min = ct(r) && !isNaN(r) ? r : 0),
                    (t.max = ct(n) && !isNaN(n) ? n : 0),
                    t.handleTickRangeOptions()
                }
              },
              {
                key: 'computeTickLimit',
                value: function () {
                  return Math.ceil(this.drawingArea / No(this.options))
                }
              },
              {
                key: 'generateTickLabels',
                value: function (t) {
                  var e = this
                  Ro.prototype.generateTickLabels.call(e, t),
                    (e._pointLabels = e.getLabels().map(function (t, r) {
                      var n = dt(e.options.pointLabels.callback, [t, r], e)
                      return n || 0 === n ? n : ''
                    }))
                }
              },
              {
                key: 'fit',
                value: function () {
                  var t = this,
                    e = t.options
                  e.display && e.pointLabels.display ? $o(t) : t.setCenterPoint(0, 0, 0, 0)
                }
              },
              {
                key: '_setReductions',
                value: function (t, e, r) {
                  var n = this,
                    i = e.l / Math.sin(r.l),
                    a = Math.max(e.r - n.width, 0) / Math.sin(r.r),
                    o = -e.t / Math.cos(r.t),
                    l = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(r.b)
                  ;(i = Ko(i)),
                    (a = Ko(a)),
                    (o = Ko(o)),
                    (l = Ko(l)),
                    (n.drawingArea = Math.max(
                      t / 2,
                      Math.min(Math.floor(t - (i + a) / 2), Math.floor(t - (o + l) / 2))
                    )),
                    n.setCenterPoint(i, a, o, l)
                }
              },
              {
                key: 'setCenterPoint',
                value: function (t, e, r, n) {
                  var i = this,
                    a = i.width - e - i.drawingArea,
                    o = t + i.drawingArea,
                    l = r + i.drawingArea,
                    s = i.height - i.paddingTop - n - i.drawingArea
                  ;(i.xCenter = Math.floor((o + a) / 2 + i.left)),
                    (i.yCenter = Math.floor((l + s) / 2 + i.top + i.paddingTop))
                }
              },
              {
                key: 'getIndexAngle',
                value: function (t) {
                  return Ut(t * (jt / this.getLabels().length) + Ht(this.options.startAngle || 0))
                }
              },
              {
                key: 'getDistanceFromCenterForValue',
                value: function (t) {
                  var e = this
                  if (ot(t)) return NaN
                  var r = e.drawingArea / (e.max - e.min)
                  return e.options.reverse ? (e.max - t) * r : (t - e.min) * r
                }
              },
              {
                key: 'getValueForDistanceFromCenter',
                value: function (t) {
                  if (ot(t)) return NaN
                  var e = this,
                    r = t / (e.drawingArea / (e.max - e.min))
                  return e.options.reverse ? e.max - r : e.min + r
                }
              },
              {
                key: 'getPointLabelContext',
                value: function (t) {
                  var e = this._pointLabels || []
                  if (t >= 0 && t < e.length) {
                    var r = e[t]
                    return (function (t, e, r) {
                      return Object.assign(Object.create(t), { label: r, index: e, type: 'pointLabel' })
                    })(this.getContext(), t, r)
                  }
                }
              },
              {
                key: 'getPointPosition',
                value: function (t, e) {
                  var r = this,
                    n = r.getIndexAngle(t) - Dt
                  return { x: Math.cos(n) * e + r.xCenter, y: Math.sin(n) * e + r.yCenter, angle: n }
                }
              },
              {
                key: 'getPointPositionForValue',
                value: function (t, e) {
                  return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }
              },
              {
                key: 'getBasePosition',
                value: function (t) {
                  return this.getPointPositionForValue(t || 0, this.getBaseValue())
                }
              },
              {
                key: 'getPointLabelPosition',
                value: function (t) {
                  var e = this._pointLabelItems[t]
                  return { left: e.left, top: e.top, right: e.right, bottom: e.bottom }
                }
              },
              {
                key: 'drawBackground',
                value: function () {
                  var t = this,
                    e = t.options,
                    r = e.backgroundColor,
                    n = e.grid.circular
                  if (r) {
                    var i = t.ctx
                    i.save(),
                      i.beginPath(),
                      qo(t, t.getDistanceFromCenterForValue(t._endValue), n, t.getLabels().length),
                      i.closePath(),
                      (i.fillStyle = r),
                      i.fill(),
                      i.restore()
                  }
                }
              },
              {
                key: 'drawGrid',
                value: function () {
                  var t,
                    e,
                    r,
                    n = this,
                    i = n.ctx,
                    a = n.options,
                    o = a.angleLines,
                    l = a.grid,
                    s = n.getLabels().length
                  if (
                    (a.pointLabels.display &&
                      (function (t, e) {
                        for (var r = t.ctx, n = t.options.pointLabels, i = e - 1; i >= 0; i--) {
                          var a = n.setContext(t.getPointLabelContext(i)),
                            o = sr(a.font),
                            l = t._pointLabelItems[i],
                            s = l.x,
                            c = l.y,
                            u = l.textAlign,
                            h = l.left,
                            f = l.top,
                            d = l.right,
                            v = l.bottom,
                            p = a.backdropColor
                          if (!ot(p)) {
                            var g = lr(a.backdropPadding)
                            ;(r.fillStyle = p), r.fillRect(h - g.left, f - g.top, d - h + g.width, v - f + g.height)
                          }
                          Ze(r, t._pointLabels[i], s, c + o.lineHeight / 2, o, {
                            color: a.color,
                            textAlign: u,
                            textBaseline: 'middle'
                          })
                        }
                      })(n, s),
                    l.display &&
                      n.ticks.forEach(function (t, r) {
                        if (0 !== r) {
                          e = n.getDistanceFromCenterForValue(t.value)
                          var i = l.setContext(n.getContext(r - 1))
                          !(function (t, e, r, n) {
                            var i = t.ctx,
                              a = e.circular,
                              o = e.color,
                              l = e.lineWidth
                            ;(!a && !n) ||
                              !o ||
                              !l ||
                              r < 0 ||
                              (i.save(),
                              (i.strokeStyle = o),
                              (i.lineWidth = l),
                              i.setLineDash(e.borderDash),
                              (i.lineDashOffset = e.borderDashOffset),
                              i.beginPath(),
                              qo(t, r, a, n),
                              i.closePath(),
                              i.stroke(),
                              i.restore())
                          })(n, i, e, s)
                        }
                      }),
                    o.display)
                  ) {
                    for (i.save(), t = n.getLabels().length - 1; t >= 0; t--) {
                      var c = o.setContext(n.getPointLabelContext(t)),
                        u = c.color,
                        h = c.lineWidth
                      h &&
                        u &&
                        ((i.lineWidth = h),
                        (i.strokeStyle = u),
                        i.setLineDash(c.borderDash),
                        (i.lineDashOffset = c.borderDashOffset),
                        (e = n.getDistanceFromCenterForValue(a.ticks.reverse ? n.min : n.max)),
                        (r = n.getPointPosition(t, e)),
                        i.beginPath(),
                        i.moveTo(n.xCenter, n.yCenter),
                        i.lineTo(r.x, r.y),
                        i.stroke())
                    }
                    i.restore()
                  }
                }
              },
              { key: 'drawBorder', value: function () {} },
              {
                key: 'drawLabels',
                value: function () {
                  var t = this,
                    e = t.ctx,
                    r = t.options,
                    n = r.ticks
                  if (n.display) {
                    var i,
                      a,
                      o = t.getIndexAngle(0)
                    e.save(),
                      e.translate(t.xCenter, t.yCenter),
                      e.rotate(o),
                      (e.textAlign = 'center'),
                      (e.textBaseline = 'middle'),
                      t.ticks.forEach(function (o, l) {
                        if (0 !== l || r.reverse) {
                          var s = n.setContext(t.getContext(l)),
                            c = sr(s.font)
                          if (((i = t.getDistanceFromCenterForValue(t.ticks[l].value)), s.showLabelBackdrop)) {
                            ;(e.font = c.string), (a = e.measureText(o.label).width), (e.fillStyle = s.backdropColor)
                            var u = lr(s.backdropPadding)
                            e.fillRect(-a / 2 - u.left, -i - c.size / 2 - u.top, a + u.width, c.size + u.height)
                          }
                          Ze(e, o.label, 0, -i, c, { color: s.color })
                        }
                      }),
                      e.restore()
                  }
                }
              },
              { key: 'drawTitle', value: function () {} }
            ]),
            r
          )
        })(Ro)
        ;(Zo.id = 'radialLinear'),
          (Zo.defaults = {
            display: !0,
            animate: !0,
            position: 'chartArea',
            angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
            grid: { circular: !1 },
            startAngle: 0,
            ticks: { showLabelBackdrop: !0, callback: Bi.formatters.numeric },
            pointLabels: {
              backdropColor: void 0,
              backdropPadding: 2,
              display: !0,
              font: { size: 10 },
              callback: function (t) {
                return t
              },
              padding: 5
            }
          }),
          (Zo.defaultRoutes = {
            'angleLines.color': 'borderColor',
            'pointLabels.color': 'color',
            'ticks.color': 'color'
          }),
          (Zo.descriptors = { angleLines: { _fallback: 'grid' } })
        var Go = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 }
          },
          Jo = Object.keys(Go)
        function Qo(t, e) {
          return t - e
        }
        function tl(t, e) {
          if (ot(e)) return null
          var r = t._adapter,
            n = t._parseOpts,
            i = n.parser,
            a = n.round,
            o = n.isoWeekday,
            l = e
          return (
            'function' === typeof i && (l = i(l)),
            ct(l) || (l = 'string' === typeof i ? r.parse(l, i) : r.parse(l)),
            null === l
              ? null
              : (a && (l = 'week' !== a || (!Rt(o) && !0 !== o) ? r.startOf(l, a) : r.startOf(l, 'isoWeek', o)), +l)
          )
        }
        function el(t, e, r, n) {
          for (var i = Jo.length, a = Jo.indexOf(t); a < i - 1; ++a) {
            var o = Go[Jo[a]],
              l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER
            if (o.common && Math.ceil((r - e) / (l * o.size)) <= n) return Jo[a]
          }
          return Jo[i - 1]
        }
        function rl(t, e, r) {
          if (r) {
            if (r.length) {
              var n = ur(r, e),
                i = n.lo,
                a = n.hi
              t[r[i] >= e ? r[i] : r[a]] = !0
            }
          } else t[e] = !0
        }
        function nl(t, e, r) {
          var n,
            i,
            a = [],
            o = {},
            l = e.length
          for (n = 0; n < l; ++n) (o[(i = e[n])] = n), a.push({ value: i, major: !1 })
          return 0 !== l && r
            ? (function (t, e, r, n) {
                var i,
                  a,
                  o = t._adapter,
                  l = +o.startOf(e[0].value, n),
                  s = e[e.length - 1].value
                for (i = l; i <= s; i = +o.add(i, 1, n)) (a = r[i]) >= 0 && (e[a].major = !0)
                return e
              })(t, a, o, r)
            : a
        }
        var il = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this, t))._cache = { data: [], labels: [], all: [] }),
              (n._unit = 'day'),
              (n._majorUnit = void 0),
              (n._offsets = {}),
              (n._normalized = !1),
              (n._parseOpts = void 0),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'init',
                value: function (t, e) {
                  var n = t.time || (t.time = {}),
                    i = (this._adapter = new Kn._date(t.adapters.date))
                  kt(n.displayFormats, i.formats()),
                    (this._parseOpts = { parser: n.parser, round: n.round, isoWeekday: n.isoWeekday }),
                    Object(a.a)(Object(o.a)(r.prototype), 'init', this).call(this, t),
                    (this._normalized = e.normalized)
                }
              },
              {
                key: 'parse',
                value: function (t, e) {
                  return void 0 === t ? null : tl(this, t)
                }
              },
              {
                key: 'beforeLayout',
                value: function () {
                  Object(a.a)(Object(o.a)(r.prototype), 'beforeLayout', this).call(this),
                    (this._cache = { data: [], labels: [], all: [] })
                }
              },
              {
                key: 'determineDataLimits',
                value: function () {
                  var t = this,
                    e = t.options,
                    r = t._adapter,
                    n = e.time.unit || 'day',
                    i = t.getUserBounds(),
                    a = i.min,
                    o = i.max,
                    l = i.minDefined,
                    s = i.maxDefined
                  function c(t) {
                    l || isNaN(t.min) || (a = Math.min(a, t.min)), s || isNaN(t.max) || (o = Math.max(o, t.max))
                  }
                  ;(l && s) ||
                    (c(t._getLabelBounds()),
                    ('ticks' === e.bounds && 'labels' === e.ticks.source) || c(t.getMinMax(!1))),
                    (a = ct(a) && !isNaN(a) ? a : +r.startOf(Date.now(), n)),
                    (o = ct(o) && !isNaN(o) ? o : +r.endOf(Date.now(), n) + 1),
                    (t.min = Math.min(a, o - 1)),
                    (t.max = Math.max(a + 1, o))
                }
              },
              {
                key: '_getLabelBounds',
                value: function () {
                  var t = this.getLabelTimestamps(),
                    e = Number.POSITIVE_INFINITY,
                    r = Number.NEGATIVE_INFINITY
                  return t.length && ((e = t[0]), (r = t[t.length - 1])), { min: e, max: r }
                }
              },
              {
                key: 'buildTicks',
                value: function () {
                  var t = this,
                    e = t.options,
                    r = e.time,
                    n = e.ticks,
                    i = 'labels' === n.source ? t.getLabelTimestamps() : t._generate()
                  'ticks' === e.bounds &&
                    i.length &&
                    ((t.min = t._userMin || i[0]), (t.max = t._userMax || i[i.length - 1]))
                  var a = t.min,
                    o = (function (t, e, r) {
                      for (var n = 0, i = t.length; n < i && t[n] < e; ) n++
                      for (; i > n && t[i - 1] > r; ) i--
                      return n > 0 || i < t.length ? t.slice(n, i) : t
                    })(i, a, t.max)
                  return (
                    (t._unit =
                      r.unit ||
                      (n.autoSkip
                        ? el(r.minUnit, t.min, t.max, t._getLabelCapacity(a))
                        : (function (t, e, r, n, i) {
                            for (var a = Jo.length - 1; a >= Jo.indexOf(r); a--) {
                              var o = Jo[a]
                              if (Go[o].common && t._adapter.diff(i, n, o) >= e - 1) return o
                            }
                            return Jo[r ? Jo.indexOf(r) : 0]
                          })(t, o.length, r.minUnit, t.min, t.max))),
                    (t._majorUnit =
                      n.major.enabled && 'year' !== t._unit
                        ? (function (t) {
                            for (var e = Jo.indexOf(t) + 1, r = Jo.length; e < r; ++e)
                              if (Go[Jo[e]].common) return Jo[e]
                          })(t._unit)
                        : void 0),
                    t.initOffsets(i),
                    e.reverse && o.reverse(),
                    nl(t, o, t._majorUnit)
                  )
                }
              },
              {
                key: 'initOffsets',
                value: function (t) {
                  var e,
                    r,
                    n = this,
                    i = 0,
                    a = 0
                  n.options.offset &&
                    t.length &&
                    ((e = n.getDecimalForValue(t[0])),
                    (i = 1 === t.length ? 1 - e : (n.getDecimalForValue(t[1]) - e) / 2),
                    (r = n.getDecimalForValue(t[t.length - 1])),
                    (a = 1 === t.length ? r : (r - n.getDecimalForValue(t[t.length - 2])) / 2))
                  var o = t.length < 3 ? 0.5 : 0.25
                  ;(i = qt(i, 0, o)), (a = qt(a, 0, o)), (n._offsets = { start: i, end: a, factor: 1 / (i + 1 + a) })
                }
              },
              {
                key: '_generate',
                value: function () {
                  var t,
                    e,
                    r = this,
                    n = r._adapter,
                    i = r.min,
                    a = r.max,
                    o = r.options,
                    l = o.time,
                    s = l.unit || el(l.minUnit, i, a, r._getLabelCapacity(i)),
                    c = ht(l.stepSize, 1),
                    u = 'week' === s && l.isoWeekday,
                    h = Rt(u) || !0 === u,
                    f = {},
                    d = i
                  if (
                    (h && (d = +n.startOf(d, 'isoWeek', u)),
                    (d = +n.startOf(d, h ? 'day' : s)),
                    n.diff(a, i, s) > 1e5 * c)
                  )
                    throw new Error(i + ' and ' + a + ' are too far apart with stepSize of ' + c + ' ' + s)
                  var v = 'data' === o.ticks.source && r.getDataTimestamps()
                  for (t = d, e = 0; t < a; t = +n.add(t, c, s), e++) rl(f, t, v)
                  return (
                    (t !== a && 'ticks' !== o.bounds && 1 !== e) || rl(f, t, v),
                    Object.keys(f)
                      .sort(function (t, e) {
                        return t - e
                      })
                      .map(function (t) {
                        return +t
                      })
                  )
                }
              },
              {
                key: 'getLabelForValue',
                value: function (t) {
                  var e = this._adapter,
                    r = this.options.time
                  return r.tooltipFormat ? e.format(t, r.tooltipFormat) : e.format(t, r.displayFormats.datetime)
                }
              },
              {
                key: '_tickFormatFunction',
                value: function (t, e, r, n) {
                  var i = this,
                    a = i.options,
                    o = a.time.displayFormats,
                    l = i._unit,
                    s = i._majorUnit,
                    c = l && o[l],
                    u = s && o[s],
                    h = r[e],
                    f = s && u && h && h.major,
                    d = i._adapter.format(t, n || (f ? u : c)),
                    v = a.ticks.callback
                  return v ? dt(v, [d, e, r], i) : d
                }
              },
              {
                key: 'generateTickLabels',
                value: function (t) {
                  var e, r, n
                  for (e = 0, r = t.length; e < r; ++e) (n = t[e]).label = this._tickFormatFunction(n.value, e, t)
                }
              },
              {
                key: 'getDecimalForValue',
                value: function (t) {
                  var e = this
                  return null === t ? NaN : (t - e.min) / (e.max - e.min)
                }
              },
              {
                key: 'getPixelForValue',
                value: function (t) {
                  var e = this,
                    r = e._offsets,
                    n = e.getDecimalForValue(t)
                  return e.getPixelForDecimal((r.start + n) * r.factor)
                }
              },
              {
                key: 'getValueForPixel',
                value: function (t) {
                  var e = this,
                    r = e._offsets,
                    n = e.getDecimalForPixel(t) / r.factor - r.end
                  return e.min + n * (e.max - e.min)
                }
              },
              {
                key: '_getLabelSize',
                value: function (t) {
                  var e = this,
                    r = e.options.ticks,
                    n = e.ctx.measureText(t).width,
                    i = Ht(e.isHorizontal() ? r.maxRotation : r.minRotation),
                    a = Math.cos(i),
                    o = Math.sin(i),
                    l = e._resolveTickFontOptions(0).size
                  return { w: n * a + l * o, h: n * o + l * a }
                }
              },
              {
                key: '_getLabelCapacity',
                value: function (t) {
                  var e = this,
                    r = e.options.time,
                    n = r.displayFormats,
                    i = n[r.unit] || n.millisecond,
                    a = e._tickFormatFunction(t, 0, nl(e, [t], e._majorUnit), i),
                    o = e._getLabelSize(a),
                    l = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h) - 1
                  return l > 0 ? l : 1
                }
              },
              {
                key: 'getDataTimestamps',
                value: function () {
                  var t,
                    e,
                    r = this,
                    n = r._cache.data || []
                  if (n.length) return n
                  var i = r.getMatchingVisibleMetas()
                  if (r._normalized && i.length) return (r._cache.data = i[0].controller.getAllParsedValues(r))
                  for (t = 0, e = i.length; t < e; ++t) n = n.concat(i[t].controller.getAllParsedValues(r))
                  return (r._cache.data = r.normalize(n))
                }
              },
              {
                key: 'getLabelTimestamps',
                value: function () {
                  var t,
                    e,
                    r = this,
                    n = r._cache.labels || []
                  if (n.length) return n
                  var i = r.getLabels()
                  for (t = 0, e = i.length; t < e; ++t) n.push(tl(r, i[t]))
                  return (r._cache.labels = r._normalized ? n : r.normalize(n))
                }
              },
              {
                key: 'normalize',
                value: function (t) {
                  return pr(t.sort(Qo))
                }
              }
            ]),
            r
          )
        })(Yi)
        function al(t, e, r) {
          var n,
            i,
            a,
            o,
            l = 0,
            s = t.length - 1
          if (r) {
            if (e >= t[l].pos && e <= t[s].pos) {
              var c = hr(t, 'pos', e)
              ;(l = c.lo), (s = c.hi)
            }
            var u = t[l]
            ;(n = u.pos), (a = u.time)
            var h = t[s]
            ;(i = h.pos), (o = h.time)
          } else {
            if (e >= t[l].time && e <= t[s].time) {
              var f = hr(t, 'time', e)
              ;(l = f.lo), (s = f.hi)
            }
            var d = t[l]
            ;(n = d.time), (a = d.pos)
            var v = t[s]
            ;(i = v.time), (o = v.pos)
          }
          var p = i - n
          return p ? a + ((o - a) * (e - n)) / p : a
        }
        ;(il.id = 'time'),
          (il.defaults = {
            bounds: 'data',
            adapters: {},
            time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: 'millisecond', displayFormats: {} },
            ticks: { source: 'auto', major: { enabled: !1 } }
          })
        var ol = (function (t) {
          Object(l.a)(r, t)
          var e = Object(s.a)(r)
          function r(t) {
            var n
            return (
              Object(f.a)(this, r),
              ((n = e.call(this, t))._table = []),
              (n._minPos = void 0),
              (n._tableRange = void 0),
              n
            )
          }
          return (
            Object(d.a)(r, [
              {
                key: 'initOffsets',
                value: function () {
                  var t = this,
                    e = t._getTimestampsForTable(),
                    n = (t._table = t.buildLookupTable(e))
                  ;(t._minPos = al(n, t.min)),
                    (t._tableRange = al(n, t.max) - t._minPos),
                    Object(a.a)(Object(o.a)(r.prototype), 'initOffsets', this).call(this, e)
                }
              },
              {
                key: 'buildLookupTable',
                value: function (t) {
                  var e,
                    r,
                    n,
                    i,
                    a,
                    o = this.min,
                    l = this.max,
                    s = [],
                    c = []
                  for (e = 0, r = t.length; e < r; ++e) (i = t[e]) >= o && i <= l && s.push(i)
                  if (s.length < 2)
                    return [
                      { time: o, pos: 0 },
                      { time: l, pos: 1 }
                    ]
                  for (e = 0, r = s.length; e < r; ++e)
                    (a = s[e + 1]),
                      (n = s[e - 1]),
                      (i = s[e]),
                      Math.round((a + n) / 2) !== i && c.push({ time: i, pos: e / (r - 1) })
                  return c
                }
              },
              {
                key: '_getTimestampsForTable',
                value: function () {
                  var t = this,
                    e = t._cache.all || []
                  if (e.length) return e
                  var r = t.getDataTimestamps(),
                    n = t.getLabelTimestamps()
                  return (
                    (e = r.length && n.length ? t.normalize(r.concat(n)) : r.length ? r : n), (e = t._cache.all = e)
                  )
                }
              },
              {
                key: 'getDecimalForValue',
                value: function (t) {
                  return (al(this._table, t) - this._minPos) / this._tableRange
                }
              },
              {
                key: 'getValueForPixel',
                value: function (t) {
                  var e = this,
                    r = e._offsets,
                    n = e.getDecimalForPixel(t) / r.factor - r.end
                  return al(e._table, n * e._tableRange + e._minPos, !0)
                }
              }
            ]),
            r
          )
        })(il)
        ;(ol.id = 'timeseries'), (ol.defaults = il.defaults)
        var ll = [
          Un,
          $a,
          Ao,
          Object.freeze({
            __proto__: null,
            CategoryScale: To,
            LinearScale: Io,
            LogarithmicScale: Ho,
            RadialLinearScale: Zo,
            TimeScale: il,
            TimeSeriesScale: ol
          })
        ]
        ya.register.apply(ya, ll)
        var sl = 'chartjs-tooltip',
          cl = 'chartjs-tooltip-body',
          ul = 'chartjs-tooltip-body-item',
          hl = 'chartjs-tooltip-header',
          fl = 'chartjs-tooltip-header-item',
          dl = function (t) {
            var e = t.chart,
              r = t.tooltip,
              n = (function (t) {
                var e = t.canvas.parentNode.querySelector('div')
                if (!e) {
                  ;(e = document.createElement('div')).classList.add(sl)
                  var r = document.createElement('table')
                  ;(r.style.margin = '0px'), e.appendChild(r), t.canvas.parentNode.appendChild(e)
                }
                return e
              })(e)
            if (0 !== r.opacity) {
              if (r.body) {
                var i = r.title || [],
                  a = r.body.map(function (t) {
                    return t.lines
                  }),
                  o = document.createElement('thead')
                o.classList.add(hl),
                  i.forEach(function (t) {
                    var e = document.createElement('tr')
                    ;(e.style.borderWidth = 0), e.classList.add(fl)
                    var r = document.createElement('th')
                    r.style.borderWidth = 0
                    var n = document.createTextNode(t)
                    r.appendChild(n), e.appendChild(r), o.appendChild(e)
                  })
                var l = document.createElement('tbody')
                l.classList.add(cl),
                  a.forEach(function (t, e) {
                    var n = r.labelColors[e],
                      i = document.createElement('span')
                    ;(i.style.background = n.backgroundColor),
                      (i.style.borderColor = n.borderColor),
                      (i.style.borderWidth = '2px'),
                      (i.style.marginRight = '10px'),
                      (i.style.height = '10px'),
                      (i.style.width = '10px'),
                      (i.style.display = 'inline-block')
                    var a = document.createElement('tr')
                    a.classList.add(ul)
                    var o = document.createElement('td')
                    o.style.borderWidth = 0
                    var s = document.createTextNode(t)
                    o.appendChild(i), o.appendChild(s), a.appendChild(o), l.appendChild(a)
                  })
                for (var s = n.querySelector('table'); s.firstChild; ) s.firstChild.remove()
                s.appendChild(o), s.appendChild(l)
              }
              var c = e.canvas,
                u = c.offsetLeft,
                h = c.offsetTop
              ;(n.style.opacity = 1),
                (n.style.left = u + r.caretX + 'px'),
                (n.style.top = h + r.caretY + 'px'),
                (n.style.font = r.options.bodyFont.string),
                (n.style.padding = r.padding + 'px ' + r.padding + 'px')
            } else n.style.opacity = 0
          },
          vl = 'object' == typeof b && b && b.Object === Object && b,
          pl = vl,
          gl = 'object' == typeof self && self && self.Object === Object && self,
          yl = pl || gl || Function('return this')(),
          ml = yl.Symbol,
          bl = ml,
          kl = Object.prototype,
          xl = kl.hasOwnProperty,
          Ml = kl.toString,
          _l = bl ? bl.toStringTag : void 0
        var zl = function (t) {
            var e = xl.call(t, _l),
              r = t[_l]
            try {
              t[_l] = void 0
              var n = !0
            } catch (O) {}
            var i = Ml.call(t)
            return n && (e ? (t[_l] = r) : delete t[_l]), i
          },
          wl = Object.prototype.toString
        var Ol = zl,
          Cl = function (t) {
            return wl.call(t)
          },
          jl = ml ? ml.toStringTag : void 0
        var Sl = function (t) {
          return null == t
            ? void 0 === t
              ? '[object Undefined]'
              : '[object Null]'
            : jl && jl in Object(t)
            ? Ol(t)
            : Cl(t)
        }
        var Fl = function (t) {
            var e = typeof t
            return null != t && ('object' == e || 'function' == e)
          },
          Pl = Sl,
          Dl = Fl
        var Al = function (t) {
            if (!Dl(t)) return !1
            var e = Pl(t)
            return (
              '[object Function]' == e ||
              '[object GeneratorFunction]' == e ||
              '[object AsyncFunction]' == e ||
              '[object Proxy]' == e
            )
          },
          El = yl['__core-js_shared__'],
          Tl = (function () {
            var t = /[^.]+$/.exec((El && El.keys && El.keys.IE_PROTO) || '')
            return t ? 'Symbol(src)_1.' + t : ''
          })()
        var Bl = function (t) {
            return !!Tl && Tl in t
          },
          Ll = Function.prototype.toString
        var Rl = function (t) {
            if (null != t) {
              try {
                return Ll.call(t)
              } catch (O) {}
              try {
                return t + ''
              } catch (O) {}
            }
            return ''
          },
          Il = Al,
          Vl = Bl,
          Hl = Fl,
          Nl = Rl,
          Wl = /^\[object .+?Constructor\]$/,
          $l = Function.prototype,
          Yl = Object.prototype,
          Ul = $l.toString,
          Xl = Yl.hasOwnProperty,
          ql = RegExp(
            '^' +
              Ul.call(Xl)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$'
          )
        var Kl = function (t) {
            return !(!Hl(t) || Vl(t)) && (Il(t) ? ql : Wl).test(Nl(t))
          },
          Zl = function (t, e) {
            return null == t ? void 0 : t[e]
          }
        var Gl = function (t, e) {
            var r = Zl(t, e)
            return Kl(r) ? r : void 0
          },
          Jl = Gl,
          Ql = (function () {
            try {
              var t = Jl(Object, 'defineProperty')
              return t({}, '', {}), t
            } catch (O) {}
          })(),
          ts = Ql
        var es = function (t, e, r) {
          '__proto__' == e && ts ? ts(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (t[e] = r)
        }
        var rs = function (t, e) {
            return t === e || (t !== t && e !== e)
          },
          ns = es,
          is = rs,
          as = Object.prototype.hasOwnProperty
        var os = function (t, e, r) {
            var n = t[e]
            ;(as.call(t, e) && is(n, r) && (void 0 !== r || e in t)) || ns(t, e, r)
          },
          ls = os,
          ss = es
        var cs = function (t, e, r, n) {
          var i = !r
          r || (r = {})
          for (var a = -1, o = e.length; ++a < o; ) {
            var l = e[a],
              s = n ? n(r[l], t[l], l, r, t) : void 0
            void 0 === s && (s = t[l]), i ? ss(r, l, s) : ls(r, l, s)
          }
          return r
        }
        var us = function (t) {
          return t
        }
        var hs = function (t, e, r) {
            switch (r.length) {
              case 0:
                return t.call(e)
              case 1:
                return t.call(e, r[0])
              case 2:
                return t.call(e, r[0], r[1])
              case 3:
                return t.call(e, r[0], r[1], r[2])
            }
            return t.apply(e, r)
          },
          fs = Math.max
        var ds = function (t, e, r) {
          return (
            (e = fs(void 0 === e ? t.length - 1 : e, 0)),
            function () {
              for (var n = arguments, i = -1, a = fs(n.length - e, 0), o = Array(a); ++i < a; ) o[i] = n[e + i]
              i = -1
              for (var l = Array(e + 1); ++i < e; ) l[i] = n[i]
              return (l[e] = r(o)), hs(t, this, l)
            }
          )
        }
        var vs = function (t) {
            return function () {
              return t
            }
          },
          ps = Ql,
          gs = ps
            ? function (t, e) {
                return ps(t, 'toString', { configurable: !0, enumerable: !1, value: vs(e), writable: !0 })
              }
            : us,
          ys = Date.now
        var ms = function (t) {
            var e = 0,
              r = 0
            return function () {
              var n = ys(),
                i = 16 - (n - r)
              if (((r = n), i > 0)) {
                if (++e >= 800) return arguments[0]
              } else e = 0
              return t.apply(void 0, arguments)
            }
          },
          bs = ms(gs),
          ks = us,
          xs = ds,
          Ms = bs
        var _s = function (t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
          },
          zs = Al,
          ws = _s
        var Os = function (t) {
            return null != t && ws(t.length) && !zs(t)
          },
          Cs = /^(?:0|[1-9]\d*)$/
        var js = function (t, e) {
            var r = typeof t
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ('number' == r || ('symbol' != r && Cs.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            )
          },
          Ss = rs,
          Fs = Os,
          Ps = js,
          Ds = Fl
        var As = function (t, e) {
            return Ms(xs(t, e, ks), t + '')
          },
          Es = function (t, e, r) {
            if (!Ds(r)) return !1
            var n = typeof e
            return !!('number' == n ? Fs(r) && Ps(e, r.length) : 'string' == n && e in r) && Ss(r[e], t)
          }
        var Ts = function (t) {
            return As(function (e, r) {
              var n = -1,
                i = r.length,
                a = i > 1 ? r[i - 1] : void 0,
                o = i > 2 ? r[2] : void 0
              for (
                a = t.length > 3 && 'function' == typeof a ? (i--, a) : void 0,
                  o && Es(r[0], r[1], o) && ((a = i < 3 ? void 0 : a), (i = 1)),
                  e = Object(e);
                ++n < i;

              ) {
                var l = r[n]
                l && t(e, l, n, a)
              }
              return e
            })
          },
          Bs = Object.prototype
        var Ls = function (t) {
          var e = t && t.constructor
          return t === (('function' == typeof e && e.prototype) || Bs)
        }
        var Rs = function (t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
          return n
        }
        var Is = function (t) {
            return null != t && 'object' == typeof t
          },
          Vs = Sl,
          Hs = Is
        var Ns = function (t) {
            return Hs(t) && '[object Arguments]' == Vs(t)
          },
          Ws = Is,
          $s = Object.prototype,
          Ys = $s.hasOwnProperty,
          Us = $s.propertyIsEnumerable,
          Xs = Ns(
            (function () {
              return arguments
            })()
          )
            ? Ns
            : function (t) {
                return Ws(t) && Ys.call(t, 'callee') && !Us.call(t, 'callee')
              },
          qs = Xs,
          Ks = Array.isArray,
          Zs = { exports: {} }
        var Gs = function () {
          return !1
        }
        !(function (t, e) {
          var r = yl,
            n = Gs,
            i = e && !e.nodeType && e,
            a = i && t && !t.nodeType && t,
            o = a && a.exports === i ? r.Buffer : void 0,
            l = (o ? o.isBuffer : void 0) || n
          t.exports = l
        })(Zs, Zs.exports)
        var Js = Sl,
          Qs = _s,
          tc = Is,
          ec = {}
        ;(ec['[object Float32Array]'] =
          ec['[object Float64Array]'] =
          ec['[object Int8Array]'] =
          ec['[object Int16Array]'] =
          ec['[object Int32Array]'] =
          ec['[object Uint8Array]'] =
          ec['[object Uint8ClampedArray]'] =
          ec['[object Uint16Array]'] =
          ec['[object Uint32Array]'] =
            !0),
          (ec['[object Arguments]'] =
            ec['[object Array]'] =
            ec['[object ArrayBuffer]'] =
            ec['[object Boolean]'] =
            ec['[object DataView]'] =
            ec['[object Date]'] =
            ec['[object Error]'] =
            ec['[object Function]'] =
            ec['[object Map]'] =
            ec['[object Number]'] =
            ec['[object Object]'] =
            ec['[object RegExp]'] =
            ec['[object Set]'] =
            ec['[object String]'] =
            ec['[object WeakMap]'] =
              !1)
        var rc = function (t) {
          return tc(t) && Qs(t.length) && !!ec[Js(t)]
        }
        var nc = function (t) {
            return function (e) {
              return t(e)
            }
          },
          ic = { exports: {} }
        !(function (t, e) {
          var r = vl,
            n = e && !e.nodeType && e,
            i = n && t && !t.nodeType && t,
            a = i && i.exports === n && r.process,
            o = (function () {
              try {
                var t = i && i.require && i.require('util').types
                return t || (a && a.binding && a.binding('util'))
              } catch (O) {}
            })()
          t.exports = o
        })(ic, ic.exports)
        var ac = rc,
          oc = nc,
          lc = ic.exports,
          sc = lc && lc.isTypedArray,
          cc = sc ? oc(sc) : ac,
          uc = Rs,
          hc = qs,
          fc = Ks,
          dc = Zs.exports,
          vc = js,
          pc = cc,
          gc = Object.prototype.hasOwnProperty
        var yc = function (t, e) {
          var r = fc(t),
            n = !r && hc(t),
            i = !r && !n && dc(t),
            a = !r && !n && !i && pc(t),
            o = r || n || i || a,
            l = o ? uc(t.length, String) : [],
            s = l.length
          for (var c in t)
            (!e && !gc.call(t, c)) ||
              (o &&
                ('length' == c ||
                  (i && ('offset' == c || 'parent' == c)) ||
                  (a && ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
                  vc(c, s))) ||
              l.push(c)
          return l
        }
        var mc = function (t, e) {
            return function (r) {
              return t(e(r))
            }
          },
          bc = mc(Object.keys, Object),
          kc = Ls,
          xc = bc,
          Mc = Object.prototype.hasOwnProperty
        var _c = yc,
          zc = function (t) {
            if (!kc(t)) return xc(t)
            var e = []
            for (var r in Object(t)) Mc.call(t, r) && 'constructor' != r && e.push(r)
            return e
          },
          wc = Os
        var Oc = function (t) {
            return wc(t) ? _c(t) : zc(t)
          },
          Cc = os,
          jc = cs,
          Sc = Ts,
          Fc = Os,
          Pc = Ls,
          Dc = Oc,
          Ac = Object.prototype.hasOwnProperty,
          Ec = Sc(function (t, e) {
            if (Pc(e) || Fc(e)) jc(e, Dc(e), t)
            else for (var r in e) Ac.call(e, r) && Cc(t, r, e[r])
          })
        var Tc = function () {
            ;(this.__data__ = []), (this.size = 0)
          },
          Bc = rs
        var Lc = function (t, e) {
            for (var r = t.length; r--; ) if (Bc(t[r][0], e)) return r
            return -1
          },
          Rc = Lc,
          Ic = Array.prototype.splice
        var Vc = Lc
        var Hc = Lc
        var Nc = Lc
        var Wc = Tc,
          $c = function (t) {
            var e = this.__data__,
              r = Rc(e, t)
            return !(r < 0) && (r == e.length - 1 ? e.pop() : Ic.call(e, r, 1), --this.size, !0)
          },
          Yc = function (t) {
            var e = this.__data__,
              r = Vc(e, t)
            return r < 0 ? void 0 : e[r][1]
          },
          Uc = function (t) {
            return Hc(this.__data__, t) > -1
          },
          Xc = function (t, e) {
            var r = this.__data__,
              n = Nc(r, t)
            return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
          }
        function qc(t) {
          var e = -1,
            r = null == t ? 0 : t.length
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        ;(qc.prototype.clear = Wc),
          (qc.prototype.delete = $c),
          (qc.prototype.get = Yc),
          (qc.prototype.has = Uc),
          (qc.prototype.set = Xc)
        var Kc = qc,
          Zc = Kc
        var Gc = function () {
          ;(this.__data__ = new Zc()), (this.size = 0)
        }
        var Jc = function (t) {
          var e = this.__data__,
            r = e.delete(t)
          return (this.size = e.size), r
        }
        var Qc = function (t) {
          return this.__data__.get(t)
        }
        var tu = function (t) {
            return this.__data__.has(t)
          },
          eu = Gl(yl, 'Map'),
          ru = Gl(Object, 'create'),
          nu = ru
        var iu = function () {
          ;(this.__data__ = nu ? nu(null) : {}), (this.size = 0)
        }
        var au = function (t) {
            var e = this.has(t) && delete this.__data__[t]
            return (this.size -= e ? 1 : 0), e
          },
          ou = ru,
          lu = Object.prototype.hasOwnProperty
        var su = function (t) {
            var e = this.__data__
            if (ou) {
              var r = e[t]
              return '__lodash_hash_undefined__' === r ? void 0 : r
            }
            return lu.call(e, t) ? e[t] : void 0
          },
          cu = ru,
          uu = Object.prototype.hasOwnProperty
        var hu = ru
        var fu = iu,
          du = au,
          vu = su,
          pu = function (t) {
            var e = this.__data__
            return cu ? void 0 !== e[t] : uu.call(e, t)
          },
          gu = function (t, e) {
            var r = this.__data__
            return (
              (this.size += this.has(t) ? 0 : 1), (r[t] = hu && void 0 === e ? '__lodash_hash_undefined__' : e), this
            )
          }
        function yu(t) {
          var e = -1,
            r = null == t ? 0 : t.length
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        ;(yu.prototype.clear = fu),
          (yu.prototype.delete = du),
          (yu.prototype.get = vu),
          (yu.prototype.has = pu),
          (yu.prototype.set = gu)
        var mu = yu,
          bu = Kc,
          ku = eu
        var xu = function (t) {
          var e = typeof t
          return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t
        }
        var Mu = function (t, e) {
            var r = t.__data__
            return xu(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map
          },
          _u = Mu
        var zu = Mu
        var wu = Mu
        var Ou = Mu
        var Cu = function () {
            ;(this.size = 0), (this.__data__ = { hash: new mu(), map: new (ku || bu)(), string: new mu() })
          },
          ju = function (t) {
            var e = _u(this, t).delete(t)
            return (this.size -= e ? 1 : 0), e
          },
          Su = function (t) {
            return zu(this, t).get(t)
          },
          Fu = function (t) {
            return wu(this, t).has(t)
          },
          Pu = function (t, e) {
            var r = Ou(this, t),
              n = r.size
            return r.set(t, e), (this.size += r.size == n ? 0 : 1), this
          }
        function Du(t) {
          var e = -1,
            r = null == t ? 0 : t.length
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        ;(Du.prototype.clear = Cu),
          (Du.prototype.delete = ju),
          (Du.prototype.get = Su),
          (Du.prototype.has = Fu),
          (Du.prototype.set = Pu)
        var Au = Du,
          Eu = Kc,
          Tu = eu,
          Bu = Au
        var Lu = Kc,
          Ru = Gc,
          Iu = Jc,
          Vu = Qc,
          Hu = tu,
          Nu = function (t, e) {
            var r = this.__data__
            if (r instanceof Eu) {
              var n = r.__data__
              if (!Tu || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this
              r = this.__data__ = new Bu(n)
            }
            return r.set(t, e), (this.size = r.size), this
          }
        function Wu(t) {
          var e = (this.__data__ = new Lu(t))
          this.size = e.size
        }
        ;(Wu.prototype.clear = Ru),
          (Wu.prototype.delete = Iu),
          (Wu.prototype.get = Vu),
          (Wu.prototype.has = Hu),
          (Wu.prototype.set = Nu)
        var $u = Wu
        var Yu = Au,
          Uu = function (t) {
            return this.__data__.set(t, '__lodash_hash_undefined__'), this
          },
          Xu = function (t) {
            return this.__data__.has(t)
          }
        function qu(t) {
          var e = -1,
            r = null == t ? 0 : t.length
          for (this.__data__ = new Yu(); ++e < r; ) this.add(t[e])
        }
        ;(qu.prototype.add = qu.prototype.push = Uu), (qu.prototype.has = Xu)
        var Ku = qu,
          Zu = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0
            return !1
          },
          Gu = function (t, e) {
            return t.has(e)
          }
        var Ju = function (t, e, r, n, i, a) {
            var o = 1 & r,
              l = t.length,
              s = e.length
            if (l != s && !(o && s > l)) return !1
            var c = a.get(t),
              u = a.get(e)
            if (c && u) return c == e && u == t
            var h = -1,
              f = !0,
              d = 2 & r ? new Ku() : void 0
            for (a.set(t, e), a.set(e, t); ++h < l; ) {
              var v = t[h],
                p = e[h]
              if (n) var g = o ? n(p, v, h, e, t, a) : n(v, p, h, t, e, a)
              if (void 0 !== g) {
                if (g) continue
                f = !1
                break
              }
              if (d) {
                if (
                  !Zu(e, function (t, e) {
                    if (!Gu(d, e) && (v === t || i(v, t, r, n, a))) return d.push(e)
                  })
                ) {
                  f = !1
                  break
                }
              } else if (v !== p && !i(v, p, r, n, a)) {
                f = !1
                break
              }
            }
            return a.delete(t), a.delete(e), f
          },
          Qu = yl.Uint8Array
        var th = function (t) {
          var e = -1,
            r = Array(t.size)
          return (
            t.forEach(function (t, n) {
              r[++e] = [n, t]
            }),
            r
          )
        }
        var eh = Qu,
          rh = rs,
          nh = Ju,
          ih = th,
          ah = function (t) {
            var e = -1,
              r = Array(t.size)
            return (
              t.forEach(function (t) {
                r[++e] = t
              }),
              r
            )
          },
          oh = ml ? ml.prototype : void 0,
          lh = oh ? oh.valueOf : void 0
        var sh = function (t, e, r, n, i, a, o) {
          switch (r) {
            case '[object DataView]':
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
              ;(t = t.buffer), (e = e.buffer)
            case '[object ArrayBuffer]':
              return !(t.byteLength != e.byteLength || !a(new eh(t), new eh(e)))
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return rh(+t, +e)
            case '[object Error]':
              return t.name == e.name && t.message == e.message
            case '[object RegExp]':
            case '[object String]':
              return t == e + ''
            case '[object Map]':
              var l = ih
            case '[object Set]':
              var s = 1 & n
              if ((l || (l = ah), t.size != e.size && !s)) return !1
              var c = o.get(t)
              if (c) return c == e
              ;(n |= 2), o.set(t, e)
              var u = nh(l(t), l(e), n, i, a, o)
              return o.delete(t), u
            case '[object Symbol]':
              if (lh) return lh.call(t) == lh.call(e)
          }
          return !1
        }
        var ch = function (t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r]
            return t
          },
          uh = Ks
        var hh = function (t, e, r) {
          var n = e(t)
          return uh(t) ? n : ch(n, r(t))
        }
        var fh = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n; ) {
              var o = t[r]
              e(o, r, t) && (a[i++] = o)
            }
            return a
          },
          dh = function () {
            return []
          },
          vh = Object.prototype.propertyIsEnumerable,
          ph = Object.getOwnPropertySymbols,
          gh = hh,
          yh = ph
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    fh(ph(t), function (e) {
                      return vh.call(t, e)
                    }))
              }
            : dh,
          mh = Oc
        var bh = function (t) {
            return gh(t, mh, yh)
          },
          kh = Object.prototype.hasOwnProperty
        var xh = function (t, e, r, n, i, a) {
            var o = 1 & r,
              l = bh(t),
              s = l.length
            if (s != bh(e).length && !o) return !1
            for (var c = s; c--; ) {
              var u = l[c]
              if (!(o ? u in e : kh.call(e, u))) return !1
            }
            var h = a.get(t),
              f = a.get(e)
            if (h && f) return h == e && f == t
            var d = !0
            a.set(t, e), a.set(e, t)
            for (var v = o; ++c < s; ) {
              var p = t[(u = l[c])],
                g = e[u]
              if (n) var y = o ? n(g, p, u, e, t, a) : n(p, g, u, t, e, a)
              if (!(void 0 === y ? p === g || i(p, g, r, n, a) : y)) {
                d = !1
                break
              }
              v || (v = 'constructor' == u)
            }
            if (d && !v) {
              var m = t.constructor,
                b = e.constructor
              m == b ||
                !('constructor' in t) ||
                !('constructor' in e) ||
                ('function' == typeof m && m instanceof m && 'function' == typeof b && b instanceof b) ||
                (d = !1)
            }
            return a.delete(t), a.delete(e), d
          },
          Mh = Gl(yl, 'DataView'),
          _h = eu,
          zh = Gl(yl, 'Promise'),
          wh = Gl(yl, 'Set'),
          Oh = Gl(yl, 'WeakMap'),
          Ch = Sl,
          jh = Rl,
          Sh = '[object Map]',
          Fh = '[object Promise]',
          Ph = '[object Set]',
          Dh = '[object WeakMap]',
          Ah = '[object DataView]',
          Eh = jh(Mh),
          Th = jh(_h),
          Bh = jh(zh),
          Lh = jh(wh),
          Rh = jh(Oh),
          Ih = Ch
        ;((Mh && Ih(new Mh(new ArrayBuffer(1))) != Ah) ||
          (_h && Ih(new _h()) != Sh) ||
          (zh && Ih(zh.resolve()) != Fh) ||
          (wh && Ih(new wh()) != Ph) ||
          (Oh && Ih(new Oh()) != Dh)) &&
          (Ih = function (t) {
            var e = Ch(t),
              r = '[object Object]' == e ? t.constructor : void 0,
              n = r ? jh(r) : ''
            if (n)
              switch (n) {
                case Eh:
                  return Ah
                case Th:
                  return Sh
                case Bh:
                  return Fh
                case Lh:
                  return Ph
                case Rh:
                  return Dh
              }
            return e
          })
        var Vh = $u,
          Hh = Ju,
          Nh = sh,
          Wh = xh,
          $h = Ih,
          Yh = Ks,
          Uh = Zs.exports,
          Xh = cc,
          qh = '[object Arguments]',
          Kh = '[object Array]',
          Zh = '[object Object]',
          Gh = Object.prototype.hasOwnProperty
        var Jh = function (t, e, r, n, i, a) {
            var o = Yh(t),
              l = Yh(e),
              s = o ? Kh : $h(t),
              c = l ? Kh : $h(e),
              u = (s = s == qh ? Zh : s) == Zh,
              h = (c = c == qh ? Zh : c) == Zh,
              f = s == c
            if (f && Uh(t)) {
              if (!Uh(e)) return !1
              ;(o = !0), (u = !1)
            }
            if (f && !u) return a || (a = new Vh()), o || Xh(t) ? Hh(t, e, r, n, i, a) : Nh(t, e, s, r, n, i, a)
            if (!(1 & r)) {
              var d = u && Gh.call(t, '__wrapped__'),
                v = h && Gh.call(e, '__wrapped__')
              if (d || v) {
                var p = d ? t.value() : t,
                  g = v ? e.value() : e
                return a || (a = new Vh()), i(p, g, r, n, a)
              }
            }
            return !!f && (a || (a = new Vh()), Wh(t, e, r, n, i, a))
          },
          Qh = Is
        var tf = function t(e, r, n, i, a) {
            return e === r || (null == e || null == r || (!Qh(e) && !Qh(r)) ? e !== e && r !== r : Jh(e, r, n, i, t, a))
          },
          ef = $u,
          rf = tf
        var nf = Fl
        var af = function (t) {
            return t === t && !nf(t)
          },
          of = af,
          lf = Oc
        var sf = function (t, e) {
            return function (r) {
              return null != r && r[t] === e && (void 0 !== e || t in Object(r))
            }
          },
          cf = function (t, e, r, n) {
            var i = r.length,
              a = i,
              o = !n
            if (null == t) return !a
            for (t = Object(t); i--; ) {
              var l = r[i]
              if (o && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
            }
            for (; ++i < a; ) {
              var s = (l = r[i])[0],
                c = t[s],
                u = l[1]
              if (o && l[2]) {
                if (void 0 === c && !(s in t)) return !1
              } else {
                var h = new ef()
                if (n) var f = n(c, u, s, t, e, h)
                if (!(void 0 === f ? rf(u, c, 3, n, h) : f)) return !1
              }
            }
            return !0
          },
          uf = function (t) {
            for (var e = lf(t), r = e.length; r--; ) {
              var n = e[r],
                i = t[n]
              e[r] = [n, i, of(i)]
            }
            return e
          },
          hf = sf
        var ff = function (t) {
            var e = uf(t)
            return 1 == e.length && e[0][2]
              ? hf(e[0][0], e[0][1])
              : function (r) {
                  return r === t || cf(r, t, e)
                }
          },
          df = Sl,
          vf = Is
        var pf = function (t) {
            return 'symbol' == typeof t || (vf(t) && '[object Symbol]' == df(t))
          },
          gf = Ks,
          yf = pf,
          mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          bf = /^\w*$/
        var kf = function (t, e) {
            if (gf(t)) return !1
            var r = typeof t
            return (
              !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !yf(t)) ||
              bf.test(t) ||
              !mf.test(t) ||
              (null != e && t in Object(e))
            )
          },
          xf = Au
        function Mf(t, e) {
          if ('function' != typeof t || (null != e && 'function' != typeof e))
            throw new TypeError('Expected a function')
          var r = function r() {
            var n = arguments,
              i = e ? e.apply(this, n) : n[0],
              a = r.cache
            if (a.has(i)) return a.get(i)
            var o = t.apply(this, n)
            return (r.cache = a.set(i, o) || a), o
          }
          return (r.cache = new (Mf.Cache || xf)()), r
        }
        Mf.Cache = xf
        var _f = Mf
        var zf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          wf = /\\(\\)?/g,
          Of = (function (t) {
            var e = _f(t, function (t) {
                return 500 === r.size && r.clear(), t
              }),
              r = e.cache
            return e
          })(function (t) {
            var e = []
            return (
              46 === t.charCodeAt(0) && e.push(''),
              t.replace(zf, function (t, r, n, i) {
                e.push(n ? i.replace(wf, '$1') : r || t)
              }),
              e
            )
          })
        var Cf = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t)
            return i
          },
          jf = Ks,
          Sf = pf,
          Ff = ml ? ml.prototype : void 0,
          Pf = Ff ? Ff.toString : void 0
        var Df = function t(e) {
            if ('string' == typeof e) return e
            if (jf(e)) return Cf(e, t) + ''
            if (Sf(e)) return Pf ? Pf.call(e) : ''
            var r = e + ''
            return '0' == r && 1 / e == -Infinity ? '-0' : r
          },
          Af = Df
        var Ef = Ks,
          Tf = kf,
          Bf = Of,
          Lf = function (t) {
            return null == t ? '' : Af(t)
          }
        var Rf = function (t, e) {
            return Ef(t) ? t : Tf(t, e) ? [t] : Bf(Lf(t))
          },
          If = pf
        var Vf = function (t) {
            if ('string' == typeof t || If(t)) return t
            var e = t + ''
            return '0' == e && 1 / t == -Infinity ? '-0' : e
          },
          Hf = Rf,
          Nf = Vf
        var Wf = function (t, e) {
            for (var r = 0, n = (e = Hf(e, t)).length; null != t && r < n; ) t = t[Nf(e[r++])]
            return r && r == n ? t : void 0
          },
          $f = Wf
        var Yf = Rf,
          Uf = qs,
          Xf = Ks,
          qf = js,
          Kf = _s,
          Zf = Vf
        var Gf = function (t, e) {
            return null != t && e in Object(t)
          },
          Jf = function (t, e, r) {
            for (var n = -1, i = (e = Yf(e, t)).length, a = !1; ++n < i; ) {
              var o = Zf(e[n])
              if (!(a = null != t && r(t, o))) break
              t = t[o]
            }
            return a || ++n != i ? a : !!(i = null == t ? 0 : t.length) && Kf(i) && qf(o, i) && (Xf(t) || Uf(t))
          }
        var Qf = tf,
          td = function (t, e, r) {
            var n = null == t ? void 0 : $f(t, e)
            return void 0 === n ? r : n
          },
          ed = function (t, e) {
            return null != t && Jf(t, e, Gf)
          },
          rd = kf,
          nd = af,
          id = sf,
          ad = Vf
        var od = Wf
        var ld = function (t) {
            return function (e) {
              return null == e ? void 0 : e[t]
            }
          },
          sd = function (t) {
            return function (e) {
              return od(e, t)
            }
          },
          cd = kf,
          ud = Vf
        var hd = ff,
          fd = function (t, e) {
            return rd(t) && nd(e)
              ? id(ad(t), e)
              : function (r) {
                  var n = td(r, t)
                  return void 0 === n && n === e ? ed(r, t) : Qf(e, n, 3)
                }
          },
          dd = us,
          vd = Ks,
          pd = function (t) {
            return cd(t) ? ld(ud(t)) : sd(t)
          }
        var gd = function (t) {
            return 'function' == typeof t
              ? t
              : null == t
              ? dd
              : 'object' == typeof t
              ? vd(t)
                ? fd(t[0], t[1])
                : hd(t)
              : pd(t)
          },
          yd = gd,
          md = Os,
          bd = Oc
        var kd = function (t) {
          return function (e, r, n) {
            var i = Object(e)
            if (!md(e)) {
              var a = yd(r)
              ;(e = bd(e)),
                (r = function (t) {
                  return a(i[t], t, i)
                })
            }
            var o = t(e, r, n)
            return o > -1 ? i[a ? e[o] : o] : void 0
          }
        }
        var xd = /\s/
        var Md = function (t) {
            for (var e = t.length; e-- && xd.test(t.charAt(e)); );
            return e
          },
          _d = /^\s+/
        var zd = function (t) {
            return t ? t.slice(0, Md(t) + 1).replace(_d, '') : t
          },
          wd = Fl,
          Od = pf,
          Cd = /^[-+]0x[0-9a-f]+$/i,
          jd = /^0b[01]+$/i,
          Sd = /^0o[0-7]+$/i,
          Fd = parseInt
        var Pd = function (t) {
            if ('number' == typeof t) return t
            if (Od(t)) return NaN
            if (wd(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t
              t = wd(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = zd(t)
            var r = jd.test(t)
            return r || Sd.test(t) ? Fd(t.slice(2), r ? 2 : 8) : Cd.test(t) ? NaN : +t
          },
          Dd = 1 / 0
        var Ad = function (t) {
          return t
            ? (t = Pd(t)) === Dd || t === -1 / 0
              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
              : t === t
              ? t
              : 0
            : 0 === t
            ? t
            : 0
        }
        var Ed = function (t, e, r, n) {
            for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (e(t[a], a, t)) return a
            return -1
          },
          Td = gd,
          Bd = function (t) {
            var e = Ad(t),
              r = e % 1
            return e === e ? (r ? e - r : e) : 0
          },
          Ld = Math.max
        var Rd = kd(function (t, e, r) {
            var n = null == t ? 0 : t.length
            if (!n) return -1
            var i = null == r ? 0 : Bd(r)
            return i < 0 && (i = Ld(n + i, 0)), Ed(t, Td(e), i)
          }),
          Id = es,
          Vd = rs
        var Hd = function (t, e, r) {
          ;((void 0 !== r && !Vd(t[e], r)) || (void 0 === r && !(e in t))) && Id(t, e, r)
        }
        var Nd = (function (t) {
            return function (e, r, n) {
              for (var i = -1, a = Object(e), o = n(e), l = o.length; l--; ) {
                var s = o[t ? l : ++i]
                if (!1 === r(a[s], s, a)) break
              }
              return e
            }
          })(),
          Wd = { exports: {} }
        !(function (t, e) {
          var r = yl,
            n = e && !e.nodeType && e,
            i = n && t && !t.nodeType && t,
            a = i && i.exports === n ? r.Buffer : void 0,
            o = a ? a.allocUnsafe : void 0
          t.exports = function (t, e) {
            if (e) return t.slice()
            var r = t.length,
              n = o ? o(r) : new t.constructor(r)
            return t.copy(n), n
          }
        })(Wd, Wd.exports)
        var $d = Qu
        var Yd = function (t) {
          var e = new t.constructor(t.byteLength)
          return new $d(e).set(new $d(t)), e
        }
        var Ud = function (t, e) {
          var r = e ? Yd(t.buffer) : t.buffer
          return new t.constructor(r, t.byteOffset, t.length)
        }
        var Xd = function (t, e) {
            var r = -1,
              n = t.length
            for (e || (e = Array(n)); ++r < n; ) e[r] = t[r]
            return e
          },
          qd = Fl,
          Kd = Object.create,
          Zd = (function () {
            function t() {}
            return function (e) {
              if (!qd(e)) return {}
              if (Kd) return Kd(e)
              t.prototype = e
              var r = new t()
              return (t.prototype = void 0), r
            }
          })(),
          Gd = mc(Object.getPrototypeOf, Object),
          Jd = Zd,
          Qd = Gd,
          tv = Ls
        var ev = function (t) {
            return 'function' != typeof t.constructor || tv(t) ? {} : Jd(Qd(t))
          },
          rv = Os,
          nv = Is
        var iv = function (t) {
            return nv(t) && rv(t)
          },
          av = Sl,
          ov = Gd,
          lv = Is,
          sv = Function.prototype,
          cv = Object.prototype,
          uv = sv.toString,
          hv = cv.hasOwnProperty,
          fv = uv.call(Object)
        var dv = function (t) {
          if (!lv(t) || '[object Object]' != av(t)) return !1
          var e = ov(t)
          if (null === e) return !0
          var r = hv.call(e, 'constructor') && e.constructor
          return 'function' == typeof r && r instanceof r && uv.call(r) == fv
        }
        var vv = function (t, e) {
          if (('constructor' !== e || 'function' !== typeof t[e]) && '__proto__' != e) return t[e]
        }
        var pv = Fl,
          gv = Ls,
          yv = function (t) {
            var e = []
            if (null != t) for (var r in Object(t)) e.push(r)
            return e
          },
          mv = Object.prototype.hasOwnProperty
        var bv = yc,
          kv = function (t) {
            if (!pv(t)) return yv(t)
            var e = gv(t),
              r = []
            for (var n in t) ('constructor' != n || (!e && mv.call(t, n))) && r.push(n)
            return r
          },
          xv = Os
        var Mv = function (t) {
            return xv(t) ? bv(t, !0) : kv(t)
          },
          _v = cs,
          zv = Mv
        var wv = Hd,
          Ov = Wd.exports,
          Cv = Ud,
          jv = Xd,
          Sv = ev,
          Fv = qs,
          Pv = Ks,
          Dv = iv,
          Av = Zs.exports,
          Ev = Al,
          Tv = Fl,
          Bv = dv,
          Lv = cc,
          Rv = vv,
          Iv = function (t) {
            return _v(t, zv(t))
          }
        var Vv = $u,
          Hv = Hd,
          Nv = Nd,
          Wv = function (t, e, r, n, i, a, o) {
            var l = Rv(t, r),
              s = Rv(e, r),
              c = o.get(s)
            if (c) wv(t, r, c)
            else {
              var u = a ? a(l, s, r + '', t, e, o) : void 0,
                h = void 0 === u
              if (h) {
                var f = Pv(s),
                  d = !f && Av(s),
                  v = !f && !d && Lv(s)
                ;(u = s),
                  f || d || v
                    ? Pv(l)
                      ? (u = l)
                      : Dv(l)
                      ? (u = jv(l))
                      : d
                      ? ((h = !1), (u = Ov(s, !0)))
                      : v
                      ? ((h = !1), (u = Cv(s, !0)))
                      : (u = [])
                    : Bv(s) || Fv(s)
                    ? ((u = l), Fv(l) ? (u = Iv(l)) : (Tv(l) && !Ev(l)) || (u = Sv(s)))
                    : (h = !1)
              }
              h && (o.set(s, u), i(u, s, n, a, o), o.delete(s)), wv(t, r, u)
            }
          },
          $v = Fl,
          Yv = Mv,
          Uv = vv
        var Xv = function t(e, r, n, i, a) {
            e !== r &&
              Nv(
                r,
                function (o, l) {
                  if ((a || (a = new Vv()), $v(o))) Wv(e, r, l, n, t, i, a)
                  else {
                    var s = i ? i(Uv(e, l), o, l + '', e, r, a) : void 0
                    void 0 === s && (s = o), Hv(e, l, s)
                  }
                },
                Yv
              )
          },
          qv = Xv,
          Kv = Ts(function (t, e, r) {
            qv(t, e, r)
          }),
          Zv = Object(p.forwardRef)(function (t, e) {
            var r = t.className,
              n = t.customTooltips,
              i = void 0 === n || n,
              a = t.data,
              o = t.id,
              l = t.fallbackContent,
              s = t.getDatasetAtEvent,
              c = t.getElementAtEvent,
              u = t.getElementsAtEvent,
              h = t.height,
              f = void 0 === h ? 150 : h,
              d = t.options,
              v = t.plugins,
              b = void 0 === v ? [] : v,
              k = t.redraw,
              x = void 0 !== k && k,
              M = t.type,
              _ = t.width,
              z = void 0 === _ ? 300 : _,
              w = t.wrapper,
              O = void 0 === w || w,
              C = m(t, [
                'className',
                'customTooltips',
                'data',
                'id',
                'fallbackContent',
                'getDatasetAtEvent',
                'getElementAtEvent',
                'getElementsAtEvent',
                'height',
                'options',
                'plugins',
                'redraw',
                'type',
                'width',
                'wrapper'
              ]),
              j = Object(p.useRef)(null),
              S = Object(p.useMemo)(
                function () {
                  return 'function' === typeof a ? (j.current ? a(j.current) : { datasets: [] }) : Kv({}, a)
                },
                [a, j.current]
              ),
              F = Object(p.useState)(),
              P = F[0],
              D = F[1]
            Object(p.useImperativeHandle)(
              e,
              function () {
                return P
              },
              [P]
            )
            var A = function () {
                j.current &&
                  (i &&
                    ((Ie.plugins.tooltip.enabled = !1),
                    (Ie.plugins.tooltip.mode = 'index'),
                    (Ie.plugins.tooltip.position = 'nearest'),
                    (Ie.plugins.tooltip.external = dl)),
                  D(new ya(j.current, { type: M, data: S, options: d, plugins: b })))
              },
              E = function () {
                P && P.destroy()
              }
            Object(p.useEffect)(function () {
              return (
                A(),
                function () {
                  return E()
                }
              )
            }, []),
              Object(p.useEffect)(
                function () {
                  x
                    ? (E(),
                      setTimeout(function () {
                        A()
                      }, 0))
                    : (function () {
                        if (P) {
                          if ((d && (P.options = y({}, d)), !P.config.data)) return (P.config.data = S), void P.update()
                          var t = S.datasets,
                            e = void 0 === t ? [] : t,
                            r = m(S, ['datasets']),
                            n = P.config.data.datasets,
                            i = void 0 === n ? [] : n
                          Ec(P.config.data, r),
                            (P.config.data.datasets = e.map(function (t) {
                              var e = Rd(i, function (e) {
                                return e.label === t.label && e.type === t.type
                              })
                              return e && t.data
                                ? (e.data ? (e.data.length = t.data.length) : (e.data = []),
                                  Ec(e.data, t.data),
                                  y(y(y({}, e), t), { data: e.data }))
                                : t
                            })),
                            P.update()
                        }
                      })()
                },
                [t, S]
              )
            var T = function (t) {
              return g.a.createElement(
                'canvas',
                y(
                  {},
                  !O && r && { className: r },
                  {
                    'data-testid': 'canvas',
                    height: f,
                    id: o,
                    onClick: function (t) {
                      !(function (t) {
                        P &&
                          (s && s(P.getElementsAtEventForMode(t, 'dataset', { intersect: !0 }, !1), t),
                          c && c(P.getElementsAtEventForMode(t, 'nearest', { intersect: !0 }, !1), t),
                          u && u(P.getElementsAtEventForMode(t, 'index', { intersect: !0 }, !1), t))
                      })(t)
                    },
                    ref: t,
                    role: 'img',
                    width: z
                  },
                  C
                ),
                l
              )
            }
            return O ? g.a.createElement('div', y({ className: Q('chart-wrapper', r) }, C), T(j)) : T(j)
          })
        ;(Zv.propTypes = {
          className: G.string,
          customTooltips: G.bool,
          data: G.any.isRequired,
          fallbackContent: G.node,
          getDatasetAtEvent: G.func,
          getElementAtEvent: G.func,
          getElementsAtEvent: G.func,
          height: G.number,
          id: G.string,
          options: G.object,
          plugins: G.array,
          redraw: G.bool,
          type: G.oneOf(['bar', 'line', 'scatter', 'bubble', 'pie', 'doughnut', 'polarArea', 'radar']).isRequired,
          width: G.number,
          wrapper: G.bool
        }),
          (Zv.displayName = 'CChart')
        var Gv = Object(p.forwardRef)(function (t, e) {
          return g.a.createElement(Zv, y({}, t, { type: 'bar', ref: e }))
        })
        ;(Gv.displayName = 'CChartBar'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'bubble', ref: e }))
          }).displayName = 'CChartBubble'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'doughnut', ref: e }))
          }).displayName = 'CChartDoughnut')
        var Jv = Object(p.forwardRef)(function (t, e) {
          return g.a.createElement(Zv, y({}, t, { type: 'line', ref: e }))
        })
        ;(Jv.displayName = 'CChartLine'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'pie', ref: e }))
          }).displayName = 'CChartPie'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'polarArea', ref: e }))
          }).displayName = 'CChartPolarArea'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'radar', ref: e }))
          }).displayName = 'CChartRadar'),
          (Object(p.forwardRef)(function (t, e) {
            return g.a.createElement(Zv, y({}, t, { type: 'scatter', ref: e }))
          }).displayName = 'CChartScatter')
      }.call(this, r(83)))
    },
    549: function (t, e) {
      !(function (t, e) {
        for (var r in e) t[r] = e[r]
      })(
        e,
        (function (t) {
          var e = {}
          function r(n) {
            if (e[n]) return e[n].exports
            var i = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
          }
          return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
              r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
            }),
            (r.r = function (t) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (r.t = function (t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t
              var n = Object.create(null)
              if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
              )
                for (var i in t)
                  r.d(
                    n,
                    i,
                    function (e) {
                      return t[e]
                    }.bind(null, i)
                  )
              return n
            }),
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default
                    }
                  : function () {
                      return t
                    }
              return r.d(e, 'a', e), e
            }),
            (r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (r.p = ''),
            r((r.s = 0))
          )
        })([
          function (t, e, r) {
            'use strict'
            r.r(e),
              r.d(e, 'deepObjectsMerge', function () {
                return n
              }),
              r.d(e, 'getColor', function () {
                return s
              }),
              r.d(e, 'getStyle', function () {
                return l
              }),
              r.d(e, 'hexToRgb', function () {
                return c
              }),
              r.d(e, 'hexToRgba', function () {
                return u
              }),
              r.d(e, 'makeUid', function () {
                return h
              }),
              r.d(e, 'omitByKeys', function () {
                return f
              }),
              r.d(e, 'pickByKeys', function () {
                return d
              }),
              r.d(e, 'rgbToHex', function () {
                return v
              })
            var n = function t(e, r) {
                for (var n = 0, i = Object.keys(r); n < i.length; n++) {
                  var a = i[n]
                  r[a] instanceof Object && Object.assign(r[a], t(e[a], r[a]))
                }
                return Object.assign(e || {}, r), e
              },
              i = function () {
                for (var t = {}, e = document.styleSheets, r = '', n = e.length - 1; n > -1; n--) {
                  for (var i = e[n].cssRules, a = i.length - 1; a > -1; a--)
                    if ('.ie-custom-properties' === i[a].selectorText) {
                      r = i[a].cssText
                      break
                    }
                  if (r) break
                }
                return (
                  (r = r.substring(r.lastIndexOf('{') + 1, r.lastIndexOf('}'))).split(';').forEach(function (e) {
                    if (e) {
                      var r = e.split(': ')[0],
                        n = e.split(': ')[1]
                      r && n && (t['--'.concat(r.trim())] = n.trim())
                    }
                  }),
                  t
                )
              },
              a = function () {
                return Boolean(document.documentMode) && document.documentMode >= 10
              },
              o = function (t) {
                return t.match(/^--.*/i)
              },
              l = function (t) {
                var e,
                  r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body
                if (o(t) && a()) {
                  var n = i()
                  e = n[t]
                } else e = window.getComputedStyle(r, null).getPropertyValue(t).replace(/^\s/, '')
                return e
              },
              s = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
                  r = '--'.concat(t),
                  n = l(r, e)
                return n || t
              },
              c = function (t) {
                if (void 0 === t) throw new TypeError('Hex color is not defined')
                var e, r, n
                if (!t.match(/^#(?:[0-9a-f]{3}){1,2}$/i)) throw new Error(''.concat(t, ' is not a valid hex color'))
                return (
                  7 === t.length
                    ? ((e = parseInt(t.slice(1, 3), 16)),
                      (r = parseInt(t.slice(3, 5), 16)),
                      (n = parseInt(t.slice(5, 7), 16)))
                    : ((e = parseInt(t.slice(1, 2), 16)),
                      (r = parseInt(t.slice(2, 3), 16)),
                      (n = parseInt(t.slice(3, 5), 16))),
                  'rgba('.concat(e, ', ').concat(r, ', ').concat(n, ')')
                )
              },
              u = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
                if (void 0 === t) throw new TypeError('Hex color is not defined')
                var r,
                  n,
                  i,
                  a = t.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
                if (!a) throw new Error(''.concat(t, ' is not a valid hex color'))
                return (
                  7 === t.length
                    ? ((r = parseInt(t.slice(1, 3), 16)),
                      (n = parseInt(t.slice(3, 5), 16)),
                      (i = parseInt(t.slice(5, 7), 16)))
                    : ((r = parseInt(t.slice(1, 2), 16)),
                      (n = parseInt(t.slice(2, 3), 16)),
                      (i = parseInt(t.slice(3, 5), 16))),
                  'rgba('
                    .concat(r, ', ')
                    .concat(n, ', ')
                    .concat(i, ', ')
                    .concat(e / 100, ')')
                )
              },
              h = function () {
                return 'uid-' + Math.random().toString(36).substr(2)
              },
              f = function (t, e) {
                for (var r = {}, n = Object.keys(t), i = 0; i < n.length; i++) !e.includes(n[i]) && (r[n[i]] = t[n[i]])
                return r
              },
              d = function (t, e) {
                for (var r = {}, n = 0; n < e.length; n++) r[e[n]] = t[e[n]]
                return r
              },
              v = function (t) {
                if (void 0 === t) throw new TypeError('Hex color is not defined')
                if ('transparent' === t) return '#00000000'
                var e = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
                if (!e) throw new Error(''.concat(t, ' is not a valid rgb color'))
                var r = '0'.concat(parseInt(e[1], 10).toString(16)),
                  n = '0'.concat(parseInt(e[2], 10).toString(16)),
                  i = '0'.concat(parseInt(e[3], 10).toString(16))
                return '#'.concat(r.slice(-2)).concat(n.slice(-2)).concat(i.slice(-2))
              },
              p = {
                deepObjectsMerge: n,
                getColor: s,
                getStyle: l,
                hexToRgb: c,
                hexToRgba: u,
                makeUid: h,
                omitByKeys: f,
                pickByKeys: d,
                rgbToHex: v
              }
            e.default = p
          }
        ])
      )
    },
    551: function (t, e, r) {
      'use strict'
      function n(t) {
        return (
          (n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          n(t)
        )
      }
      r.d(e, 'a', function () {
        return n
      })
    },
    556: function (t, e, r) {
      'use strict'
      function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      r.d(e, 'a', function () {
        return n
      })
    },
    557: function (t, e, r) {
      'use strict'
      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      r.d(e, 'a', function () {
        return n
      })
    },
    558: function (t, e, r) {
      'use strict'
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      function i(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
      }
      r.d(e, 'a', function () {
        return i
      })
    },
    559: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return i
      })
      var n = r(164)
      function i(t, e) {
        var r
        if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (r = Object(n.a)(t)) || (e && t && 'number' === typeof t.length)) {
            r && (t = r)
            var i = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: a
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          l = !0,
          s = !1
        return {
          s: function () {
            r = t[Symbol.iterator]()
          },
          n: function () {
            var t = r.next()
            return (l = t.done), t
          },
          e: function (t) {
            ;(s = !0), (o = t)
          },
          f: function () {
            try {
              l || null == r.return || r.return()
            } finally {
              if (s) throw o
            }
          }
        }
      }
    },
    564: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return l
      })
      var n = r(551)
      function i(t) {
        return (
          (i =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && 'function' === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          i(t)
        )
      }
      var a = r(556)
      function o(t, e) {
        return !e || ('object' !== i(e) && 'function' !== typeof e) ? Object(a.a)(t) : e
      }
      function l(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var r,
            i = Object(n.a)(t)
          if (e) {
            var a = Object(n.a)(this).constructor
            r = Reflect.construct(i, arguments, a)
          } else r = i.apply(this, arguments)
          return o(this, r)
        }
      }
    },
    565: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return i
      })
      var n = r(551)
      function i(t, e, r) {
        return (
          (i =
            'undefined' !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, r) {
                  var i = (function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Object(n.a)(t)); );
                    return t
                  })(t, e)
                  if (i) {
                    var a = Object.getOwnPropertyDescriptor(i, e)
                    return a.get ? a.get.call(r) : a.value
                  }
                }),
          i(t, e, r || t)
        )
      }
    },
    566: function (t, e, r) {
      'use strict'
      function n(t, e) {
        return (
          (n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          n(t, e)
        )
      }
      function i(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function')
        ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
          e && n(t, e)
      }
      r.d(e, 'a', function () {
        return i
      })
    },
    567: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M403.6,343.656l-72.823-47.334L344.043,272h23.428a48,48,0,0,0,44.119-66.908L361.581,90.57a112.029,112.029,0,0,0-211.162,0L100.41,205.092A48,48,0,0,0,144.529,272h23.428l13.266,24.322L108.4,343.656A79.725,79.725,0,0,0,72,410.732V496H440V410.732A79.727,79.727,0,0,0,403.6,343.656ZM408,464H104V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479L186.953,240H144.529a16,16,0,0,1-14.72-22.27l50.172-114.9.448-1.143a80.029,80.029,0,0,1,151.142,0l.2.58L382.191,217.73A16,16,0,0,1,367.471,240H325.047L288.5,307.007l97.661,63.479h0A47.836,47.836,0,0,1,408,410.732Z' class='ci-primary'/>"
      ]
    },
    568: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'/>"
      ]
    },
    569: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z'/>"
      ]
    },
    570: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'/>"
      ]
    },
    571: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'/>"
      ]
    },
    572: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '300 159',
        "<g fill='none'><path fill='#FFF' d='M0 .552h300v157.895H0z'/><path fill='#B22234' d='M0 .552h300v12.146H0zM0 24.844h300V36.99H0zM0 49.135h300v12.146H0zM0 73.427h300v12.146H0zM0 97.718h300v12.146H0zM0 122.01h300v12.146H0zM0 146.301h300v12.146H0z'/><path fill='#3C3B6E' d='M0 .552h120v85.02H0z'/><path fill='#FFF' d='M5.638 7.454l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM25.533 7.454l2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077H31.25l-1.092-3.36-1.092 3.36zM45.428 7.454l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM65.323 7.454l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.534l-1.091-3.36-1.092 3.36zM85.217 7.454l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM105.112 7.454l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM15.585 15.981l2.859 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.534l-1.091-3.361-1.092 3.361zM35.48 15.981l2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zM55.375 15.981l2.859 2.077-1.092 3.36L60 19.341l2.859 2.077-1.092-3.36 2.858-2.077h-3.533L60 12.62l-1.092 3.361zM75.27 15.981l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.533l-1.092-3.361-1.092 3.361zM95.164 15.981l2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.091 3.361zM5.638 24.507l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM25.533 24.507l2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077H31.25l-1.092-3.36-1.092 3.36zM45.428 24.507l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM65.323 24.507l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.534l-1.091-3.36-1.092 3.36zM85.217 24.507l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM105.112 24.507l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM15.831 33.062l2.858 2.077-1.091 3.36 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zM35.726 33.062l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zM55.621 33.062l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.534l-1.091-3.361-1.092 3.361zM75.515 33.062l2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zM95.41 33.062l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zM5.94 41.517l2.859 2.076-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zM25.835 41.517l2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zM45.73 41.517l2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zM65.624 41.517l2.859 2.076-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.076h-3.534l-1.092-3.361-1.091 3.361zM85.519 41.517l2.858 2.076-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zM105.414 41.517l2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zM6.127 58.299l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM26.021 58.299l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM45.916 58.299l2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM65.811 58.299l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM85.705 58.299l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.077h-3.534l-1.092-3.36-1.091 3.36zM105.6 58.299l2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM5.884 75.279l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077H11.6l-1.091-3.36-1.092 3.36zM25.778 75.279l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM45.673 75.279l2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077H51.39l-1.092-3.36-1.092 3.36zM65.568 75.279l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM85.462 75.279l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.077h-3.534l-1.092-3.36-1.091 3.36zM105.357 75.279l2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM15.89 49.824l2.858 2.077-1.091 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zM35.785 49.824l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.091-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zM55.68 49.824l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.533l-1.092-3.361-1.092 3.361zM75.574 49.824l2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zM95.469 49.824l2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.091-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zM15.831 66.777l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM35.726 66.777l2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM55.621 66.777l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zM75.515 66.777l2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zM95.41 66.777l2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36z'/></g>"
      ]
    },
    573: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M26.828 24.572c0 0.378-0.255 0.65-0.622 0.65-0.378 0-0.622-0.289-0.622-0.65s0.244-0.65 0.622-0.65c0.367 0 0.622 0.289 0.622 0.65zM9.561 23.922c-0.395 0-0.622 0.289-0.622 0.65s0.228 0.65 0.622 0.65c0.361 0 0.605-0.272 0.605-0.65-0.006-0.361-0.244-0.65-0.605-0.65zM16.089 23.906c-0.3 0-0.484 0.194-0.528 0.483h1.061c-0.050-0.317-0.244-0.483-0.533-0.483zM22.078 23.922c-0.378 0-0.605 0.289-0.605 0.65s0.228 0.65 0.605 0.65c0.378 0 0.622-0.272 0.622-0.65 0-0.361-0.245-0.65-0.622-0.65zM27.961 25.372c0 0.017 0.017 0.028 0.017 0.061 0 0.017-0.017 0.028-0.017 0.061-0.017 0.017-0.017 0.028-0.028 0.044-0.017 0.017-0.028 0.028-0.061 0.028-0.017 0.017-0.028 0.017-0.061 0.017-0.017 0-0.028 0-0.061-0.017-0.017 0-0.028-0.017-0.044-0.028-0.017-0.017-0.028-0.028-0.028-0.044-0.017-0.028-0.017-0.044-0.017-0.061 0-0.028 0-0.044 0.017-0.061 0-0.028 0.017-0.044 0.028-0.061 0.017-0.017 0.028-0.017 0.044-0.028 0.028-0.017 0.044-0.017 0.061-0.017 0.028 0 0.044 0 0.061 0.017 0.028 0.016 0.044 0.016 0.061 0.028s0.011 0.033 0.028 0.061zM27.839 25.45c0.028 0 0.028-0.017 0.044-0.017 0.017-0.017 0.017-0.028 0.017-0.044s0-0.028-0.017-0.044c-0.016 0-0.028-0.017-0.061-0.017h-0.089v0.194h0.044v-0.078h0.017l0.061 0.078h0.044zM32 6.278v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM3.556 14.033c0 4.25 3.45 7.694 7.694 7.694 1.511 0 2.994-0.456 4.25-1.283-4.050-3.294-4.022-9.511 0-12.806-1.256-0.833-2.739-1.283-4.25-1.283-4.244-0.005-7.694 3.444-7.694 7.678zM16 20.078c3.917-3.056 3.9-9.011 0-12.083-3.9 3.072-3.917 9.033 0 12.083zM8.094 24.317c0-0.483-0.317-0.8-0.817-0.817-0.256 0-0.528 0.078-0.711 0.361-0.133-0.228-0.361-0.361-0.678-0.361-0.211 0-0.422 0.078-0.589 0.3v-0.244h-0.455v2.039h0.455c0-1.050-0.139-1.678 0.5-1.678 0.567 0 0.456 0.567 0.456 1.678h0.439c0-1.017-0.139-1.678 0.5-1.678 0.567 0 0.455 0.556 0.455 1.678h0.456v-1.278zM10.589 23.556h-0.439v0.244c-0.15-0.183-0.361-0.3-0.65-0.3-0.572 0-1.011 0.456-1.011 1.072 0 0.622 0.439 1.072 1.011 1.072 0.289 0 0.5-0.106 0.65-0.3v0.256h0.439zM12.839 24.978c0-0.833-1.272-0.456-1.272-0.845 0-0.317 0.661-0.266 1.028-0.061l0.183-0.361c-0.522-0.339-1.678-0.333-1.678 0.456 0 0.794 1.272 0.461 1.272 0.833 0 0.35-0.75 0.322-1.15 0.044l-0.194 0.35c0.622 0.422 1.811 0.333 1.811-0.417zM14.806 25.494l-0.122-0.378c-0.211 0.116-0.678 0.244-0.678-0.228v-0.922h0.728v-0.411h-0.728v-0.622h-0.456v0.622h-0.422v0.406h0.422v0.928c0 0.978 0.961 0.8 1.256 0.605zM15.544 24.75h1.528c0-0.9-0.411-1.256-0.967-1.256-0.589 0-1.011 0.439-1.011 1.072 0 1.139 1.256 1.328 1.878 0.789l-0.211-0.333c-0.433 0.356-1.089 0.322-1.217-0.272zM18.828 23.556c-0.255-0.111-0.644-0.1-0.844 0.244v-0.244h-0.456v2.039h0.456v-1.15c0-0.645 0.528-0.561 0.711-0.467zM19.417 24.572c0-0.634 0.645-0.839 1.15-0.467l0.211-0.361c-0.645-0.505-1.817-0.228-1.817 0.833 0 1.1 1.244 1.322 1.817 0.833l-0.211-0.361c-0.511 0.361-1.15 0.145-1.15-0.478zM23.122 23.556h-0.456v0.244c-0.461-0.611-1.661-0.266-1.661 0.772 0 1.067 1.244 1.372 1.661 0.772v0.256h0.456zM24.994 23.556c-0.133-0.067-0.611-0.161-0.844 0.244v-0.244h-0.439v2.039h0.439v-1.15c0-0.611 0.5-0.572 0.711-0.467zM27.233 22.728h-0.439v1.072c-0.456-0.605-1.661-0.283-1.661 0.772 0 1.078 1.25 1.366 1.661 0.772v0.256h0.439zM27.656 18.556v0.256h0.044v-0.256h0.105v-0.044h-0.256v0.044zM28.022 25.433c0-0.028 0-0.061-0.016-0.089-0.017-0.017-0.028-0.044-0.044-0.061s-0.044-0.028-0.061-0.044c-0.028 0-0.061-0.017-0.089-0.017-0.017 0-0.044 0.017-0.078 0.017-0.028 0.017-0.044 0.028-0.061 0.044-0.028 0.016-0.044 0.044-0.044 0.061-0.017 0.028-0.017 0.061-0.017 0.089 0 0.017 0 0.044 0.017 0.078 0 0.017 0.017 0.044 0.044 0.061 0.016 0.017 0.028 0.028 0.061 0.044 0.028 0.016 0.061 0.016 0.078 0.016 0.028 0 0.061 0 0.089-0.016 0.017-0.017 0.044-0.028 0.061-0.044s0.028-0.044 0.044-0.061c0.016-0.033 0.016-0.061 0.016-0.078zM28.2 18.506h-0.078l-0.089 0.194-0.089-0.194h-0.078v0.3h0.044v-0.228l0.089 0.194h0.061l0.078-0.194v0.228h0.061zM28.444 14.033c0-4.234-3.45-7.683-7.694-7.683-1.511 0-2.994 0.455-4.25 1.283 4.006 3.295 4.067 9.528 0 12.806 1.256 0.833 2.75 1.283 4.25 1.283 4.244 0.006 7.694-3.439 7.694-7.689z'/>"
      ]
    },
    574: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '301 211',
        "<defs><circle id='a' cx='52.5' cy='52.5' r='52.5'/></defs><g fill='none' fill-rule='evenodd'><path fill='#009B3A' fill-rule='nonzero' d='M.5.5h300v210H.5z'/><path fill='#FEDF00' fill-rule='nonzero' d='M26 105.5L150.5 185 275 105.5 150.5 26z'/><circle cx='150.5' cy='105.5' r='52.5' fill='#002776' fill-rule='nonzero'/><g transform='translate(98 53)'><mask id='b' fill='#fff'><use xlink:href='#a'/></mask><path fill='#FFF' fill-rule='nonzero' d='M-105 157.5C-105 87.084-47.916 30 22.5 30S150 87.084 150 157.5h-7.5c0-66.274-53.726-120-120-120s-120 53.726-120 120h-7.5z' mask='url(#b)'/></g><path fill='#009B3A' fill-rule='nonzero' d='M122.483 89.245l4.497.157.033-.928-3.641-.127.045-1.285 2.855.1.03-.857-2.856-.1.035-.999 3.426.12.033-.928-4.283-.15zM128.826 89.515l.854.075.299-3.415.697 3.503.783.068 1.295-3.328-.299 3.415.854.075.436-4.981-1.245-.109-1.295 3.328-.697-3.503-1.245-.109zM139.185 90.684l3.696.635.145-.845-2.851-.49.194-1.126 2.323.399.145-.845-2.323-.399.133-.774 2.763.475.145-.845-3.608-.62zM171.642 98.557l-1.736-.755.399-.917 1.736.755z'/><path fill='#009B3A' fill-rule='nonzero' d='M170.894 100.194l-.917-.399.997-2.293.917.4zM185.543 106.309c-.269.422.004.892.606 1.275.602.384 1.013.37 1.186.099.547-.859-2.615-2.11-1.641-3.607.84-1.286 2.278-.285 2.82.06.542.345 1.413 1.239.736 2.268l-.919-.586c.288-.452-.028-.886-.51-1.193-.467-.297-.846-.433-1.125.003-.466.698 2.633 2.016 1.683 3.507-.7 1.099-1.919.619-2.732.101-.693-.441-1.728-1.482-1.053-2.534l.949.607zM178.248 103.861l3.916 2.216.457-.808-3.171-1.794.633-1.119 2.487 1.407.422-.746-2.487-1.407.493-.87 2.984 1.688.457-.808-3.73-2.11zM190.907 109.856c-.29.407-.043.891.539 1.305.581.415.992.422 1.179.161.591-.829-2.501-2.244-1.449-3.688.906-1.24 2.29-.166 2.813.208.523.374 1.346 1.311.616 2.304l-.887-.632c.311-.436.018-.886-.447-1.218-.451-.321-.822-.477-1.123-.055-.502.673 2.524 2.151 1.497 3.59-.757 1.061-1.949.518-2.734-.042-.669-.477-1.648-1.57-.92-2.585l.916.652zM107.652 87.398c-.168-1.37-1.305-2.359-2.538-2.207-1.233.151-2.097 1.385-1.929 2.756.168 1.37 1.305 2.358 2.538 2.207 1.233-.152 2.097-1.385 1.929-2.756zm-2.233-1.247c1.699 0 1.699 3.047 0 3.047-1.7 0-1.7-3.047 0-3.047zM199.777 114.81c.635-1.226.256-2.684-.848-3.255-1.103-.572-2.513-.041-3.148 1.185-.635 1.226-.255 2.683.848 3.255 1.104.571 2.513.04 3.148-1.185zm-1.138-2.291c1.403.96-.319 3.475-1.721 2.514-1.402-.96.319-3.474 1.721-2.514zM120.209 85.199c-.551-.887-1.662-.929-1.662-.929l-2.5.039.087 4.999s1.983.001 2.51-.049c.527-.05 1.146-.354 1.551-.885.404-.532.4-1.161.397-1.548-.004-.387.058-.916-.383-1.627zm-2.04 3.159c-.384 0-1.123.005-1.123.005l-.055-3.142c1.034-.014 1.07-.014 1.471-.014.742.013 1.055.566 1.211.924.056.399.059.56.072.905-.046.371-.156.677-.469.97-.515.346-.775.352-1.107.352zM113.38 87.364s.523-.442.657-1.075c.135-.633-.257-1.15-.423-1.298-.166-.148-.515-.499-1.031-.479-.516.02-3.063.198-3.063.198l.278 4.993.926-.065-.129-1.853 1.608-.113.387-.027s.498.815.545 1.318c.032.296.028.547.028.547h.903s.023-.889-.234-1.422c-.257-.533-.452-.724-.452-.724zm-.563-.777c-.195.163-.742.169-.742.169l-1.546.102-.09-1.283c.235.002 1.464-.102 1.486-.102.248-.008.527-.033.527-.033s.202.007.404.182a.53.53 0 01.202.43c-.006.255-.151.486-.241.535zM166.19 94.968c.189-1.368-.656-2.615-1.886-2.784-1.231-.17-2.382.801-2.571 2.168-.189 1.368.656 2.614 1.886 2.784 1.23.17 2.382-.801 2.571-2.168zm-1.839-1.779c1.643.436.861 3.381-.782 2.945-1.642-.436-.86-3.381.782-2.945zM159.006 93.028s.638-.248.972-.801c.334-.554.133-1.171.024-1.365-.108-.195-.323-.64-.817-.79a229.97 229.97 0 00-2.959-.815l-1.371 4.809.897.242.483-1.793 1.557.42.374.101s.204.933.085 1.423c-.067.29-.153.527-.153.527l.852.295s.313-.833.244-1.42c-.069-.588-.188-.833-.188-.833zm-.278-.918c-.238.09-.757-.083-.757-.083l-1.495-.409.335-1.241c.221.078 1.416.383 1.438.389.236.074.509.142.509.142s.189.072.322.304a.529.529 0 01.05.472c-.089.238-.302.409-.402.426zM177.166 100.386s.657-.192 1.037-.716c.38-.524.232-1.156.14-1.358-.092-.203-.268-.665-.747-.857-.48-.191-2.88-1.062-2.88-1.062l-1.773 4.676.872.317.634-1.746 1.515.55.365.132s.124.946-.036 1.425c-.091.284-.197.512-.197.512l.824.366s.382-.803.364-1.394c-.02-.59-.118-.845-.118-.845zm-.199-.938c-.245.069-.747-.147-.747-.147l-1.454-.534.438-1.209c.213.097 1.379.501 1.4.51.23.093.495.184.495.184s.181.088.295.33a.531.531 0 01.01.475c-.109.23-.335.382-.437.391zM152.854 91.359s.632-.263.953-.825c.321-.562.105-1.174-.008-1.366-.114-.192-.339-.632-.836-.77-.498-.138-2.978-.743-2.978-.743l-1.255 4.84.902.22.44-1.804 1.566.382.377.092.839-.026zm-.299-.911c-.235.096-.758-.065-.758-.065l-1.504-.373.305-1.249c.223.073 1.426.349 1.447.355.239.068.512.13.512.13s.19.068.329.296a.529.529 0 01.062.471c-.085.24-.294.415-.393.435z'/><path fill='#009B3A' fill-rule='nonzero' d='M171.452 97.677c-.129-.057-.263-.097-.398-.139-.391.738-1.257 1.263-2.028.734-1.403-.959.319-3.474 1.721-2.514.339.232.492.554.515.896.212.09.441.132.654.23.09.041.178.084.267.124.072-.92-.345-1.8-1.145-2.214-1.103-.572-2.513-.041-3.148 1.184-.635 1.226-.256 2.683.848 3.255 1.103.572 2.513.041 3.148-1.184.025-.049.046-.098.068-.147-.168-.074-.334-.151-.502-.225z'/><path fill='#FFF' fill-rule='nonzero' d='M168.754 88.532l-1.111.806.425 1.307-1.112-.808-1.11.808.424-1.307-1.111-.806h1.373l.424-1.306.425 1.306zM105.503 95.376l1.322.961-.505 1.555 1.323-.961 1.322.961-.505-1.555 1.323-.961h-1.635l-.505-1.554-.505 1.554zM163.395 102.393l.915.665-.349 1.076.915-.665.915.665-.35-1.076.916-.665h-1.132l-.349-1.076-.345 1.076zM116.485 114.71l.56.392-.216.667.557-.405.556.405-.213-.655.557-.404h-.688l-.212-.655-.213.655zM112.277 115.893l-.498 1.554h-1.633l1.322.961-.505 1.555 1.323-.961 1.322.961-.505-1.555 1.323-.961h-1.635l-.505-1.554M104.074 122.278l1.102.8-.421 1.296 1.102-.801 1.102.801-.421-1.295 1.102-.801h-1.362l-.421-1.296-.421 1.296zM128.785 107.029l1.08.784-.413 1.27 1.08-.785 1.08.785-.413-1.27 1.081-.784h-1.335l-.413-1.27-.412 1.27zM121.724 122.708l.996.724-.38 1.171.996-.724.996.724-.381-1.171.997-.724h-1.231l-.381-1.17-.38 1.17zM120.243 128.202l.916.665-.35 1.076.916-.665.915.665-.35-1.076.915-.665h-1.131l-.349-1.076-.345 1.076zM127.333 132.383l1.323.961-.505 1.555 1.322-.961 1.323.961-.506-1.555 1.323-.961h-1.635l-.505-1.554-.505 1.554zM148.702 113.537l1.111.806-.424 1.307 1.111-.808 1.111.808-.424-1.307 1.11-.806h-1.379l-.418-1.306-.424 1.306zM143.713 118.265l.915.665-.349 1.076.912-.667.918.667-.35-1.076.915-.665h-1.131l-.349-1.076-.35 1.076zM146.921 121.885l.556.405-.212.654.557-.404.556.404-.213-.655.557-.404h-.688l-.212-.654-.213.654zM154.77 118.125l1.111.807-.424 1.306 1.11-.808 1.112.808-.425-1.306 1.111-.807h-1.373l-.425-1.306-.417 1.306zM148.36 128.611l1.323.961-.506 1.555 1.323-.961 1.322.961-.505-1.555 1.323-.961h-1.635l-.505-1.554-.498 1.554zM149.78 146.346l.425.308-.162.499.424-.308.424.308-.162-.499.424-.308h-.524l-.162-.498-.16.498zM160.577 134.488l.916.665-.35 1.076.916-.665.915.665-.35-1.076.915-.665h-1.131l-.349-1.076-.345 1.076zM164.395 140.251l1.111.807-.425 1.306 1.111-.808 1.112.808-.425-1.306 1.111-.807h-1.373l-.425-1.306-.424 1.306zM171.302 136.346l.915-.665h-1.131l-.349-1.076-.345 1.076h-1.137l.916.665-.35 1.076.916-.665.915.665zM175.094 133.938l.915.665-.349 1.076.915-.665.915.665-.35-1.076.915-.665h-1.131l-.349-1.076-.35 1.076zM174.912 138.903l1.111.806-.425 1.307 1.111-.808 1.111.808-.424-1.307 1.111-.806h-1.373l-.425-1.306-.424 1.306zM175.353 144.386l.915.665-.349 1.076.915-.665.915.665-.349-1.076.915-.665h-1.136l-.345-1.076-.344 1.076zM180.579 134.877l.915.665-.349 1.076.915-.665.915.665-.349-1.076.915-.665h-1.131l-.35-1.075-.35 1.075zM184.464 132.158l1.111.807-.424 1.306 1.111-.808 1.111.808-.425-1.306 1.111-.807h-1.373l-.425-1.306-.417 1.306-1.348-.007M187.619 128.062l1.111.806-.424 1.307 1.111-.808 1.111.808-.425-1.306 1.111-.807h-1.373l-.424-1.306-.425 1.306zM185.137 123.195l1.322.96-.505 1.555 1.323-.961 1.322.961-.505-1.555 1.323-.96h-1.635l-.505-1.555-.506 1.555zM193.147 123.987l.915.665-.349 1.076.915-.665.915.665-.35-1.076.916-.665h-1.131l-.35-1.076-.344 1.076z'/></g>"
      ]
    },
    575: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M26.117 14.628c0 0 0.422 2.067 0.517 2.5h-1.855c0.183-0.495 0.889-2.417 0.889-2.417-0.011 0.017 0.183-0.506 0.294-0.828zM32 6.222v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM8.472 20.178l3.511-8.622h-2.361l-2.183 5.889-0.239-1.194-0.778-3.967c-0.128-0.55-0.522-0.706-1.011-0.728h-3.594l-0.039 0.172c0.878 0.222 1.661 0.544 2.344 0.95l1.989 7.5zM13.717 20.189l1.4-8.633h-2.233l-1.394 8.633zM21.489 17.367c0.011-0.983-0.589-1.733-1.872-2.35-0.783-0.395-1.261-0.661-1.261-1.067 0.011-0.367 0.406-0.745 1.283-0.745 0.728-0.017 1.261 0.156 1.661 0.328l0.2 0.094 0.306-1.867c-0.439-0.172-1.139-0.367-2-0.367-2.206 0-3.756 1.178-3.767 2.855-0.017 1.239 1.111 1.928 1.956 2.344 0.861 0.422 1.156 0.7 1.156 1.072-0.011 0.578-0.7 0.844-1.339 0.844-0.889 0-1.367-0.139-2.095-0.461l-0.294-0.139-0.311 1.939c0.522 0.239 1.489 0.45 2.489 0.461 2.344 0.005 3.872-1.156 3.889-2.944zM29.333 20.189l-1.8-8.633h-1.728c-0.533 0-0.939 0.156-1.167 0.717l-3.317 7.917h2.344c0 0 0.383-1.067 0.467-1.294h2.867c0.067 0.306 0.267 1.294 0.267 1.294z'/>"
      ]
    },
    576: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '301 201',
        "<g fill='none'><path fill='#F93' d='M.5.5h300v200H.5z'/><path fill='#FFF' d='M.5 67.166h300v66.667H.5z'/><path fill='#128807' d='M.5 133.833h300V200.5H.5z'/><circle cx='150.5' cy='100.5' r='26.667' fill='#008'/><circle cx='150.5' cy='100.5' r='23.333' fill='#FFF'/><circle cx='150.5' cy='100.5' r='4.667' fill='#008'/><circle cx='173.634' cy='103.546' r='1.167' fill='#008'/><path fill='#008' d='M150.5 123.833l.8-14-.8-6.667-.8 6.667z'/><circle cx='172.057' cy='109.429' r='1.167' fill='#008'/><path fill='#008' d='M144.461 123.038l4.396-13.316.953-6.647-2.498 6.232z'/><circle cx='169.012' cy='114.704' r='1.167' fill='#008'/><path fill='#008' d='M138.834 120.707l7.693-11.724 2.641-6.174-4.026 5.373z'/><circle cx='164.705' cy='119.011' r='1.167' fill='#008'/><path fill='#008' d='M134.001 116.999l10.465-9.334 4.148-5.28-5.28 4.148z'/><circle cx='159.429' cy='122.057' r='1.167' fill='#008'/><path fill='#008' d='M130.293 112.166l12.525-6.307 5.373-4.026-6.174 2.641z'/><circle cx='153.546' cy='123.634' r='1.167' fill='#008'/><path fill='#008' d='M127.962 106.539l13.73-2.851 6.232-2.498-6.647.953z'/><circle cx='147.454' cy='123.634' r='1.167' fill='#008'/><path fill='#008' d='M127.167 100.5l14 .8 6.667-.8-6.667-.8z'/><circle cx='141.571' cy='122.057' r='1.167' fill='#008'/><path fill='#008' d='M127.962 94.461l13.316 4.396 6.647.953-6.232-2.498z'/><circle cx='136.296' cy='119.011' r='1.167' fill='#008'/><path fill='#008' d='M130.293 88.833l11.724 7.693 6.174 2.64-5.373-4.026z'/><circle cx='131.989' cy='114.704' r='1.167' fill='#008'/><path fill='#008' d='M134.001 84.001l9.334 10.465 5.28 4.148-4.148-5.28z'/><circle cx='128.943' cy='109.429' r='1.167' fill='#008'/><path fill='#008' d='M138.834 80.293l6.307 12.524 4.026 5.374-2.641-6.174z'/><circle cx='127.366' cy='103.546' r='1.167' fill='#008'/><path fill='#008' d='M144.461 77.962l2.851 13.73 2.498 6.232-.953-6.646z'/><circle cx='127.366' cy='97.454' r='1.167' fill='#008'/><path fill='#008' d='M150.5 77.166l-.8 14 .8 6.667.8-6.667z'/><circle cx='128.943' cy='91.57' r='1.167' fill='#008'/><path fill='#008' d='M156.539 77.962l-4.396 13.316-.953 6.646 2.498-6.232z'/><circle cx='131.989' cy='86.295' r='1.167' fill='#008'/><path fill='#008' d='M162.167 80.293l-7.693 11.724-2.64 6.174 4.026-5.374z'/><circle cx='136.296' cy='81.988' r='1.167' fill='#008'/><path fill='#008' d='M166.999 84.001l-10.465 9.334-4.148 5.28 5.28-4.148z'/><circle cx='141.571' cy='78.943' r='1.167' fill='#008'/><path fill='#008' d='M170.707 88.833l-12.524 6.307-5.373 4.026 6.174-2.64z'/><circle cx='147.454' cy='77.366' r='1.167' fill='#008'/><path fill='#008' d='M173.038 94.461l-13.73 2.851-6.232 2.498 6.646-.953z'/><circle cx='153.546' cy='77.366' r='1.167' fill='#008'/><path fill='#008' d='M173.834 100.5l-14-.8-6.667.8 6.667.8z'/><circle cx='159.429' cy='78.943' r='1.167' fill='#008'/><path fill='#008' d='M173.038 106.539l-13.316-4.396-6.646-.953 6.232 2.498z'/><circle cx='164.705' cy='81.988' r='1.167' fill='#008'/><path fill='#008' d='M170.707 112.166l-11.724-7.693-6.174-2.641 5.373 4.026z'/><circle cx='169.012' cy='86.295' r='1.167' fill='#008'/><path fill='#008' d='M166.999 116.999l-9.334-10.465-5.28-4.148 4.148 5.28z'/><circle cx='172.057' cy='91.57' r='1.167' fill='#008'/><path fill='#008' d='M162.167 120.707l-6.307-12.525-4.026-5.373 2.64 6.174z'/><circle cx='173.634' cy='97.454' r='1.167' fill='#008'/><path fill='#008' d='M156.539 123.038l-2.851-13.73-2.498-6.232.953 6.647z'/></g>"
      ]
    },
    577: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M27.355 14.044c-0.494 0-1.039 0.372-1.039 1.261h2.039c0-0.889-0.516-1.261-1-1.261zM20.833 14.189c-0.456 0-0.739 0.161-0.944 0.389l0.011 2.933c0.194 0.206 0.472 0.372 0.933 0.372 0.728 0 1.217-0.794 1.217-1.855 0-1.033-0.5-1.844-1.217-1.839zM29.333 3.556h-26.667c-1.472 0-2.667 1.194-2.667 2.667v19.556c0 1.472 1.194 2.667 2.667 2.667h26.667c1.472 0 2.667-1.194 2.667-2.667v-19.556c0-1.472-1.194-2.667-2.667-2.667zM6.789 17.395c0 1.422-1.128 2.228-2.772 2.239-0.678 0-1.422-0.133-2.156-0.45v-1.884c0.667 0.356 1.506 0.628 2.161 0.628 0.439 0 0.756-0.116 0.756-0.483 0-0.944-3-0.589-3-2.772 0-1.4 1.067-2.234 2.667-2.234 0.656 0 1.306 0.1 1.961 0.361v1.856c-0.6-0.322-1.361-0.506-1.961-0.506-0.417 0-0.672 0.122-0.672 0.428 0 0.889 3.017 0.467 3.017 2.817zM10.611 14.25h-1.5v2.806c0 1.161 1.25 0.8 1.5 0.7v1.605c-0.261 0.145-0.739 0.261-1.383 0.261-1.172 0-2.050-0.861-2.050-2.028l0.011-6.328 1.928-0.411v1.711h1.494zM14.722 14.383c-0.25-0.083-1.039-0.2-1.506 0.411v4.689h-1.972v-6.917h1.706l0.122 0.583c0.461-0.85 1.383-0.678 1.644-0.583h0.006zM17.172 19.483h-1.984v-6.917h1.984zM17.172 11.544l-1.984 0.422v-1.605l1.984-0.422zM21.289 19.628c-0.689 0-1.111-0.294-1.394-0.5l-0.006 2.233-1.972 0.417v-9.211h1.739l0.1 0.489c0.272-0.25 0.772-0.617 1.544-0.617 1.384 0 2.689 1.25 2.689 3.545 0 2.506-1.289 3.639-2.7 3.645zM30.2 16.767h-3.861c0.089 0.922 0.766 1.194 1.533 1.194 0.783 0 1.4-0.167 1.939-0.439v1.589c-0.539 0.294-1.245 0.511-2.189 0.511-1.922 0-3.267-1.206-3.267-3.583 0-2.011 1.139-3.605 3.017-3.605 1.872 0 2.85 1.594 2.85 3.616 0 0.194-0.017 0.606-0.022 0.717z'/>"
      ]
    },
    578: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '301 201',
        "<g fill='none'><path fill='#ED2939' d='M.5.5h300v200H.5z'/><path fill='#FFF' d='M.5.5h200v200H.5z'/><path fill='#002395' d='M.5.5h100v200H.5z'/></g>"
      ]
    },
    579: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M10.35 16.122c0 0.678-0.539 1.194-1.222 1.194-0.511 0-0.889-0.289-0.889-0.833 0-0.678 0.528-1.222 1.206-1.222 0.517 0 0.906 0.317 0.906 0.861zM4.472 13.428h-0.261c-0.083 0-0.167 0.056-0.178 0.15l-0.239 1.484 0.456-0.017c0.611 0 1.083-0.083 1.194-0.789 0.128-0.745-0.344-0.828-0.972-0.828zM20.25 13.428h-0.25c-0.1 0-0.167 0.056-0.178 0.15l-0.233 1.484 0.444-0.017c0.722 0 1.222-0.167 1.222-1-0.006-0.589-0.533-0.617-1.006-0.617zM32 6.222v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM7.128 13.744c0-1.167-0.9-1.556-1.928-1.556h-2.222c-0.139 0-0.278 0.111-0.289 0.261l-0.911 5.672c-0.017 0.111 0.067 0.222 0.178 0.222h1.056c0.15 0 0.289-0.161 0.306-0.317l0.25-1.478c0.056-0.4 0.733-0.261 1-0.261 1.589 0 2.561-0.944 2.561-2.544zM11.806 14.233h-1.056c-0.211 0-0.222 0.306-0.233 0.456-0.322-0.472-0.789-0.556-1.317-0.556-1.361 0-2.4 1.194-2.4 2.511 0 1.083 0.678 1.789 1.761 1.789 0.5 0 1.122-0.272 1.472-0.661-0.028 0.083-0.056 0.261-0.056 0.345 0 0.128 0.056 0.222 0.178 0.222h0.956c0.15 0 0.278-0.161 0.306-0.317l0.567-3.572c0.017-0.106-0.067-0.217-0.178-0.217zM14.056 19.672l3.539-5.145c0.028-0.028 0.028-0.056 0.028-0.094 0-0.094-0.083-0.194-0.178-0.194h-1.067c-0.094 0-0.194 0.056-0.25 0.139l-1.472 2.167-0.611-2.083c-0.044-0.122-0.167-0.222-0.306-0.222h-1.039c-0.095 0-0.178 0.1-0.178 0.194 0 0.067 1.083 3.156 1.178 3.45-0.15 0.211-1.139 1.589-1.139 1.756 0 0.1 0.083 0.178 0.178 0.178h1.067c0.1-0.005 0.194-0.061 0.25-0.144zM22.906 13.744c0-1.167-0.9-1.556-1.928-1.556h-2.206c-0.15 0-0.289 0.111-0.306 0.261l-0.9 5.667c-0.011 0.111 0.072 0.222 0.178 0.222h1.139c0.111 0 0.194-0.083 0.222-0.178l0.25-1.611c0.056-0.4 0.734-0.261 1-0.261 1.578 0 2.55-0.944 2.55-2.544zM27.583 14.233h-1.056c-0.211 0-0.222 0.306-0.239 0.456-0.306-0.472-0.778-0.556-1.317-0.556-1.361 0-2.4 1.194-2.4 2.511 0 1.083 0.678 1.789 1.761 1.789 0.517 0 1.139-0.272 1.472-0.661-0.017 0.083-0.056 0.261-0.056 0.345 0 0.128 0.056 0.222 0.178 0.222h0.961c0.15 0 0.278-0.161 0.306-0.317l0.567-3.572c0.017-0.106-0.067-0.217-0.178-0.217zM30.222 12.383c0-0.111-0.083-0.194-0.178-0.194h-1.028c-0.083 0-0.167 0.067-0.178 0.15l-0.9 5.778-0.016 0.028c0 0.1 0.083 0.194 0.194 0.194h0.917c0.139 0 0.278-0.161 0.289-0.317l0.9-5.622zM25.222 15.261c-0.678 0-1.206 0.539-1.206 1.222 0 0.539 0.389 0.833 0.9 0.833 0.667 0 1.206-0.511 1.206-1.194 0.006-0.544-0.383-0.861-0.9-0.861z'/>"
      ]
    },
    580: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '301 201',
        "<g fill='none' fill-rule='evenodd'><path fill='#C60B1E' fill-rule='nonzero' d='M.5.5h300v200H.5z'/><path fill='#FFC400' fill-rule='nonzero' d='M.5 50.5h300v100H.5z'/><path fill='#AD1519' fill-rule='nonzero' d='M67.696 89.396s-.204 0-.316-.064c-.112-.064-.452-.384-.452-.384l-.272-.196-.248-.34s-.292-.472-.16-.836c.136-.364.364-.492.568-.6.204-.104.632-.236.632-.236s.34-.148.452-.168c.112-.024.52-.128.52-.128s.112-.064.224-.108c.116-.044.272-.044.364-.064.088-.024.316-.096.452-.104.208-.008.544.04.656.04.112 0 .496.02.656.02.156 0 .72-.044.88-.044.156 0 .272-.02.452 0 .18.024.496.128.588.172.092.044.632.236.836.3.204.064.7.148.928.256.224.108.364.288.476.44.112.148.136.312.18.42a.763.763 0 010 .444 2.564 2.564 0 01-.204.324l-.248.408-.316.256s-.228.216-.408.192c-.18-.016-2.012-.344-3.188-.344-1.176 0-3.056.344-3.056.344'/><path stroke='#000' stroke-linejoin='round' stroke-width='.104' d='M67.696 89.396s-.204 0-.316-.064c-.112-.064-.452-.384-.452-.384l-.272-.196-.248-.34s-.292-.472-.16-.836c.136-.364.364-.492.568-.6.204-.104.632-.236.632-.236s.34-.148.452-.168c.112-.024.52-.128.52-.128s.112-.064.224-.108c.116-.044.272-.044.364-.064.088-.024.316-.096.452-.104.208-.008.544.04.656.04.112 0 .496.02.656.02.156 0 .72-.044.88-.044.156 0 .272-.02.452 0 .18.024.496.128.588.172.092.044.632.236.836.3.204.064.7.148.928.256.224.108.364.288.476.44.112.148.136.312.18.42a.763.763 0 010 .444 2.564 2.564 0 01-.204.324l-.248.408-.316.256s-.228.216-.408.192c-.18-.016-2.012-.344-3.188-.344-1.176 0-3.056.344-3.056.344h.004z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.212 86.772c0-.552.248-.996.552-.996.304 0 .552.444.552.996s-.248 1-.552 1c-.304 0-.552-.448-.552-1'/><path stroke='#000' stroke-width='.104' d='M70.212 86.772c0-.552.248-.996.552-.996.304 0 .552.444.552.996s-.248 1-.552 1c-.304 0-.552-.448-.552-1z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.52 86.772c0-.508.112-.92.252-.92.144 0 .256.412.256.92 0 .504-.112.916-.256.916-.14 0-.252-.412-.252-.916'/><path stroke='#000' stroke-width='.104' d='M70.52 86.772c0-.508.112-.92.252-.92.144 0 .256.412.256.92 0 .504-.112.916-.256.916-.14 0-.252-.412-.252-.916z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.4 85.716c0-.192.164-.348.372-.348.2 0 .368.156.368.348 0 .196-.168.348-.368.348-.208 0-.372-.152-.372-.348'/><path fill='#C8B100' fill-rule='nonzero' d='M71.032 85.596v.232h-.572v-.232h.188v-.528H70.4v-.228h.248v-.228h.24v.228h.248v.228h-.248v.528h.144'/><path stroke='#000' stroke-width='.12' d='M71.032 85.596v.232h-.572v-.232h.188v-.528H70.4v-.228h.248v-.228h.24v.228h.248v.228h-.248v.528h.144'/><path fill='#C8B100' fill-rule='nonzero' d='M71.284 85.596v.232h-1.012v-.232h.376v-.528H70.4v-.228h.248v-.228h.24v.228h.248v.228h-.248v.528h.396'/><path stroke='#000' stroke-width='.12' d='M71.284 85.596v.232h-1.012v-.232h.376v-.528H70.4v-.228h.248v-.228h.24v.228h.248v.228h-.248v.528h.396'/><path stroke='#000' stroke-width='.104' d='M70.876 85.38c.152.044.264.18.264.336 0 .196-.168.348-.368.348-.208 0-.372-.152-.372-.348 0-.16.116-.296.276-.336'/><path fill='#C8B100' fill-rule='nonzero' d='M70.772 89.332h-1.924l-.044-.472-.092-.492-.092-.612c-.532-.7-1.02-1.16-1.184-1.06.04-.128.088-.224.188-.284.472-.28 1.444.392 2.176 1.496.064.1.128.2.184.3h1.588c.056-.1.12-.2.184-.3.728-1.104 1.704-1.776 2.172-1.496.104.06.148.156.188.284-.164-.096-.648.36-1.184 1.06l-.092.612-.092.492-.04.472h-1.936'/><path stroke='#000' stroke-width='.104' d='M70.772 89.332h-1.924l-.044-.472-.092-.492-.092-.612c-.532-.7-1.02-1.16-1.184-1.06.04-.128.088-.224.188-.284.472-.28 1.444.392 2.176 1.496.064.1.128.2.184.3h1.588c.056-.1.12-.2.184-.3.728-1.104 1.704-1.776 2.172-1.496.104.06.148.156.188.284-.164-.096-.648.36-1.184 1.06l-.092.612-.092.492-.04.472h-1.936 0z'/><path stroke='#000' stroke-width='.104' d='M67.52 86.676c.364-.212 1.208.456 1.892 1.496m4.62-1.496c-.364-.212-1.204.456-1.892 1.496'/><path fill='#C8B100' fill-rule='nonzero' d='M67.932 90.2c-.08-.228-.232-.432-.232-.432.78-.228 1.864-.372 3.068-.376 1.204.004 2.3.148 3.076.376l-.208.364a2.75 2.75 0 00-.152.324c-.7-.216-1.608-.324-2.72-.328-1.116.004-2.184.14-2.744.344.008 0-.04-.128-.092-.272h.004'/><path stroke='#000' stroke-width='.104' d='M67.932 90.2c-.08-.228-.232-.432-.232-.432.78-.228 1.864-.372 3.068-.376 1.204.004 2.3.148 3.076.376l-.208.364a2.75 2.75 0 00-.152.324c-.7-.216-1.608-.324-2.72-.328-1.116.004-2.184.14-2.744.344.008 0-.04-.128-.092-.272h.004'/><path fill='#C8B100' fill-rule='nonzero' d='M70.768 91.192c.972-.004 2.044-.152 2.44-.252.264-.08.42-.196.392-.336-.016-.064-.072-.12-.148-.152-.584-.188-1.628-.32-2.684-.32-1.052 0-2.108.132-2.688.32-.076.032-.132.088-.148.152-.028.14.128.256.392.336.396.1 1.472.248 2.444.252'/><path stroke='#000' stroke-width='.104' d='M70.768 91.192c.972-.004 2.044-.152 2.44-.252.264-.08.42-.196.392-.336-.016-.064-.072-.12-.148-.152-.584-.188-1.628-.32-2.684-.32-1.052 0-2.108.132-2.688.32-.076.032-.132.088-.148.152-.028.14.128.256.392.336.396.1 1.472.248 2.444.252z'/><path fill='#C8B100' fill-rule='nonzero' d='M73.892 89.332l-.236-.212s-.228.136-.512.096c-.28-.044-.372-.388-.372-.388s-.316.268-.576.248c-.26-.024-.428-.248-.428-.248s-.284.204-.532.184c-.248-.024-.484-.332-.484-.332s-.252.32-.5.344c-.248.02-.452-.216-.452-.216s-.112.236-.428.288c-.316.052-.588-.248-.588-.248s-.18.292-.396.368c-.216.072-.496-.108-.496-.108s-.048.108-.08.172c-.032.064-.124.076-.124.076l.072.188c.772-.224 1.824-.364 3.012-.364s2.268.14 3.044.368l.08-.216'/><path stroke='#000' stroke-width='.104' d='M73.892 89.332l-.236-.212s-.228.136-.512.096c-.28-.044-.372-.388-.372-.388s-.316.268-.576.248c-.26-.024-.428-.248-.428-.248s-.284.204-.532.184c-.248-.024-.484-.332-.484-.332s-.252.32-.5.344c-.248.02-.452-.216-.452-.216s-.112.236-.428.288c-.316.052-.588-.248-.588-.248s-.18.292-.396.368c-.216.072-.496-.108-.496-.108s-.048.108-.08.172c-.032.064-.124.076-.124.076l.072.188c.772-.224 1.824-.364 3.012-.364s2.268.14 3.044.368l.08-.216h-.004 0z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.776 88.296l.112.02a.38.38 0 00-.024.152c0 .232.2.42.448.42a.45.45 0 00.424-.292c.004.004.044-.152.06-.152.012 0 .012.164.02.164.028.212.22.356.44.356a.431.431 0 00.444-.424c0-.016 0-.032-.004-.048l.14-.14.076.176a.413.413 0 00.384.588.428.428 0 00.352-.18l.092-.116v.144c0 .136.056.264.196.284 0 0 .152.012.364-.152.208-.164.32-.3.32-.3l.012.168s-.204.336-.388.44c-.1.06-.256.124-.38.1-.128-.02-.22-.124-.268-.244a.62.62 0 01-.32.088c-.252 0-.48-.14-.568-.344a.624.624 0 01-.464.2.656.656 0 01-.504-.232.65.65 0 01-.968-.104.657.657 0 01-.536.276.628.628 0 01-.436-.172.654.654 0 01-.968.032c-.088.204-.316.344-.568.344a.605.605 0 01-.316-.088c-.048.12-.14.224-.272.244-.12.024-.276-.04-.376-.1-.188-.104-.408-.44-.408-.44l.028-.168s.116.136.324.3c.208.164.364.152.364.152.136-.02.196-.148.196-.284v-.144l.088.116c.076.108.204.18.352.18a.413.413 0 00.384-.588l.076-.176.14.14c-.004.016-.004.032-.004.048 0 .236.196.424.444.424.22 0 .412-.144.444-.356.004 0 .004-.164.016-.164.02 0 .056.156.064.152a.442.442 0 00.424.292.433.433 0 00.444-.42c0-.056 0-.104-.02-.152l.116-.02'/><path stroke='#000' stroke-width='.104' d='M70.776 88.296l.112.02a.38.38 0 00-.024.152c0 .232.2.42.448.42a.45.45 0 00.424-.292c.004.004.044-.152.06-.152.012 0 .012.164.02.164.028.212.22.356.44.356a.431.431 0 00.444-.424c0-.016 0-.032-.004-.048l.14-.14.076.176a.413.413 0 00.384.588.428.428 0 00.352-.18l.092-.116v.144c0 .136.056.264.196.284 0 0 .152.012.364-.152.208-.164.32-.3.32-.3l.012.168s-.204.336-.388.44c-.1.06-.256.124-.38.1-.128-.02-.22-.124-.268-.244a.62.62 0 01-.32.088c-.252 0-.48-.14-.568-.344a.624.624 0 01-.464.2.656.656 0 01-.504-.232.65.65 0 01-.968-.104.657.657 0 01-.536.276.628.628 0 01-.436-.172.654.654 0 01-.968.032c-.088.204-.316.344-.568.344a.605.605 0 01-.316-.088c-.048.12-.14.224-.272.244-.12.024-.276-.04-.376-.1-.188-.104-.408-.44-.408-.44l.028-.168s.116.136.324.3c.208.164.364.152.364.152.136-.02.196-.148.196-.284v-.144l.088.116c.076.108.204.18.352.18a.413.413 0 00.384-.588l.076-.176.14.14c-.004.016-.004.032-.004.048 0 .236.196.424.444.424.22 0 .412-.144.444-.356.004 0 .004-.164.016-.164.02 0 .056.156.064.152a.442.442 0 00.424.292.433.433 0 00.444-.42c0-.056 0-.104-.02-.152l.116-.02h.004z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.768 89.392c-1.204.004-2.288.148-3.068.376-.052.016-.116-.024-.132-.068-.016-.052.02-.112.072-.128.78-.24 1.892-.392 3.128-.392 1.236 0 2.352.152 3.132.392.052.016.088.076.072.128-.016.044-.08.084-.132.068-.78-.228-1.868-.372-3.072-.376'/><path stroke='#000' stroke-linejoin='round' stroke-width='.104' d='M70.768 89.392c-1.204.004-2.288.148-3.068.376-.052.016-.116-.024-.132-.068-.016-.052.02-.112.072-.128.78-.24 1.892-.392 3.128-.392 1.236 0 2.352.152 3.132.392.052.016.088.076.072.128-.016.044-.08.084-.132.068-.78-.228-1.868-.372-3.072-.376z'/><path fill='#FFF' fill-rule='nonzero' d='M69.6 89.82c0-.088.08-.164.176-.164.096 0 .176.076.176.164 0 .092-.08.164-.176.164-.096 0-.176-.072-.176-.164'/><path stroke='#000' stroke-width='.104' d='M69.6 89.82c0-.088.08-.164.176-.164.096 0 .176.076.176.164 0 .092-.08.164-.176.164-.096 0-.176-.072-.176-.164z'/><path fill='#AD1519' fill-rule='nonzero' d='M70.78 89.892h-.384c-.072 0-.132-.056-.132-.124s.056-.124.128-.124h.784c.076 0 .132.056.132.124s-.06.124-.132.124h-.396'/><path stroke='#000' stroke-width='.104' d='M70.78 89.892h-.384c-.072 0-.132-.056-.132-.124s.056-.124.128-.124h.784c.076 0 .132.056.132.124s-.06.124-.132.124h-.396'/><path fill='#058E6E' fill-rule='nonzero' d='M68.84 90.024l-.276.044c-.072.008-.14-.036-.152-.104a.128.128 0 01.108-.14l.28-.04.284-.044c.072-.008.136.036.148.1a.126.126 0 01-.108.14l-.284.044'/><path stroke='#000' stroke-width='.104' d='M68.84 90.024l-.276.044c-.072.008-.14-.036-.152-.104a.128.128 0 01.108-.14l.28-.04.284-.044c.072-.008.136.036.148.1a.126.126 0 01-.108.14l-.284.044'/><path fill='#AD1519' fill-rule='nonzero' d='M67.72 90.22l.124-.2.26.052-.152.224-.232-.076'/><path stroke='#000' stroke-width='.104' d='M67.72 90.22l.124-.2.26.052-.152.224-.232-.076'/><path fill='#FFF' fill-rule='nonzero' d='M71.588 89.82c0-.088.076-.164.176-.164a.17.17 0 01.172.164.167.167 0 01-.172.164c-.1 0-.176-.072-.176-.164'/><path stroke='#000' stroke-width='.104' d='M71.588 89.82c0-.088.076-.164.176-.164a.17.17 0 01.172.164.167.167 0 01-.172.164c-.1 0-.176-.072-.176-.164z'/><path fill='#058E6E' fill-rule='nonzero' d='M72.7 90.024l.276.044c.072.008.14-.036.152-.104a.125.125 0 00-.108-.14l-.28-.04-.284-.044c-.072-.008-.14.036-.148.1a.12.12 0 00.108.14l.284.044'/><path stroke='#000' stroke-width='.104' d='M72.7 90.024l.276.044c.072.008.14-.036.152-.104a.125.125 0 00-.108-.14l-.28-.04-.284-.044c-.072-.008-.14.036-.148.1a.12.12 0 00.108.14l.284.044'/><path fill='#AD1519' fill-rule='nonzero' d='M73.796 90.232l-.1-.212-.268.024.128.236.24-.048'/><path stroke='#000' stroke-width='.104' d='M73.796 90.232l-.1-.212-.268.024.128.236.24-.048'/><path fill='#AD1519' fill-rule='nonzero' d='M70.764 90.964c-.972 0-1.852-.088-2.52-.26.668-.172 1.548-.276 2.52-.28.976 0 1.86.108 2.532.28-.672.172-1.556.26-2.532.26'/><path stroke='#000' stroke-linejoin='round' stroke-width='.104' d='M70.764 90.964c-.972 0-1.852-.088-2.52-.26.668-.172 1.548-.276 2.52-.28.976 0 1.86.108 2.532.28-.672.172-1.556.26-2.532.26z'/><path fill='#C8B100' fill-rule='nonzero' d='M73.836 88.852c.024-.072 0-.148-.052-.168-.056-.012-.12.036-.148.108-.024.076 0 .152.056.168.052.016.116-.032.144-.108'/><path stroke='#000' stroke-width='.104' d='M73.836 88.852c.024-.072 0-.148-.052-.168-.056-.012-.12.036-.148.108-.024.076 0 .152.056.168.052.016.116-.032.144-.108z'/><path fill='#C8B100' fill-rule='nonzero' d='M71.9 88.48c.008-.08-.032-.148-.088-.156-.056-.008-.112.052-.12.132-.008.076.028.148.084.152.056.008.112-.052.124-.128'/><path stroke='#000' stroke-width='.104' d='M71.9 88.48c.008-.08-.032-.148-.088-.156-.056-.008-.112.052-.12.132-.008.076.028.148.084.152.056.008.112-.052.124-.128z'/><path fill='#C8B100' fill-rule='nonzero' d='M69.648 88.48c-.012-.08.028-.148.084-.156.056-.008.112.052.12.132.012.076-.028.148-.084.152-.056.008-.112-.052-.12-.128'/><path stroke='#000' stroke-width='.104' d='M69.648 88.48c-.012-.08.028-.148.084-.156.056-.008.112.052.12.132.012.076-.028.148-.084.152-.056.008-.112-.052-.12-.128z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.708 88.852c-.024-.072 0-.148.052-.168.056-.012.12.036.148.108.024.076 0 .152-.056.168-.052.016-.116-.032-.144-.108'/><path stroke='#000' stroke-width='.104' d='M67.708 88.852c-.024-.072 0-.148.052-.168.056-.012.12.036.148.108.024.076 0 .152-.056.168-.052.016-.116-.032-.144-.108z'/><path fill='#C8B100' fill-rule='nonzero' d='M70.764 87.36l-.344.208.256.552.088.056.088-.056.256-.552-.344-.208'/><path stroke='#000' stroke-width='.104' d='M70.764 87.36l-.344.208.256.552.088.056.088-.056.256-.552-.344-.208'/><path fill='#C8B100' fill-rule='nonzero' d='M70.012 88.196l.16.228.536-.168.056-.072-.06-.08-.532-.156-.16.248'/><path stroke='#000' stroke-width='.104' d='M70.012 88.196l.16.228.536-.168.056-.072-.06-.08-.532-.156-.16.248'/><path fill='#C8B100' fill-rule='nonzero' d='M71.52 88.196l-.156.228-.536-.168-.056-.072.056-.08.536-.156.156.248'/><path stroke='#000' stroke-width='.104' d='M71.52 88.196l-.156.228-.536-.168-.056-.072.056-.08.536-.156.156.248'/><path fill='#C8B100' fill-rule='nonzero' d='M68.532 87.604l-.268.256.344.456.092.036.068-.072.12-.548-.356-.128'/><path stroke='#000' stroke-width='.104' d='M68.532 87.604l-.268.256.344.456.092.036.068-.072.12-.548-.356-.128'/><path fill='#C8B100' fill-rule='nonzero' d='M67.968 88.516l.204.192.488-.264.036-.084-.068-.068-.56-.048-.1.272'/><path stroke='#000' stroke-width='.104' d='M67.968 88.516l.204.192.488-.264.036-.084-.068-.068-.56-.048-.1.272'/><path fill='#C8B100' fill-rule='nonzero' d='M69.444 88.22l-.104.252-.56-.052-.072-.064.04-.088.488-.256.208.208'/><path stroke='#000' stroke-width='.104' d='M69.444 88.22l-.104.252-.56-.052-.072-.064.04-.088.488-.256.208.208'/><path fill='#C8B100' fill-rule='nonzero' d='M67.428 88.588l-.044.264-.56.06-.084-.048.016-.092.424-.348.248.164'/><path stroke='#000' stroke-width='.104' d='M67.428 88.588l-.044.264-.56.06-.084-.048.016-.092.424-.348.248.164'/><path fill='#C8B100' fill-rule='nonzero' d='M68.508 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184'/><path stroke='#000' stroke-width='.104' d='M68.508 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M73.008 87.604l.268.256-.344.456-.092.036-.068-.072-.12-.548.356-.128'/><path stroke='#000' stroke-width='.104' d='M73.008 87.604l.268.256-.344.456-.092.036-.068-.072-.12-.548.356-.128'/><path fill='#C8B100' fill-rule='nonzero' d='M73.572 88.516l-.204.192-.488-.264-.04-.084.076-.068.56-.048.096.272'/><path stroke='#000' stroke-width='.104' d='M73.572 88.516l-.204.192-.488-.264-.04-.084.076-.068.56-.048.096.272'/><path fill='#C8B100' fill-rule='nonzero' d='M72.096 88.22l.104.252.56-.052.072-.064-.04-.088-.488-.256-.208.208'/><path stroke='#000' stroke-width='.104' d='M72.096 88.22l.104.252.56-.052.072-.064-.04-.088-.488-.256-.208.208'/><path fill='#C8B100' fill-rule='nonzero' d='M74.036 88.588l.044.264.56.06.084-.048-.02-.092-.42-.348-.248.164'/><path stroke='#000' stroke-width='.104' d='M74.036 88.588l.044.264.56.06.084-.048-.02-.092-.42-.348-.248.164'/><path fill='#C8B100' fill-rule='nonzero' d='M70.572 88.184c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184'/><path stroke='#000' stroke-width='.104' d='M70.572 88.184c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M72.644 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184'/><path stroke='#000' stroke-width='.104' d='M72.644 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M66.672 88.9c-.004.004-.152-.192-.26-.292-.08-.072-.272-.132-.272-.132 0-.032.112-.112.232-.112.072 0 .14.028.18.08l.016-.08s.096.02.14.128c.048.116.02.288.02.288s-.02.08-.056.12'/><path stroke='#000' stroke-width='.104' d='M66.672 88.9c-.004.004-.152-.192-.26-.292-.08-.072-.272-.132-.272-.132 0-.032.112-.112.232-.112.072 0 .14.028.18.08l.016-.08s.096.02.14.128c.048.116.02.288.02.288s-.02.08-.056.12h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M66.68 88.8c.048-.048.144-.036.212.024.072.06.096.152.048.2-.048.052-.144.04-.212-.024-.072-.06-.096-.152-.048-.2'/><path stroke='#000' stroke-width='.104' d='M66.68 88.8c.048-.048.144-.036.212.024.072.06.096.152.048.2-.048.052-.144.04-.212-.024-.072-.06-.096-.152-.048-.2z'/><path fill='#C8B100' fill-rule='nonzero' d='M74.792 88.9c.004.004.152-.192.264-.292.076-.072.268-.132.268-.132 0-.032-.112-.112-.232-.112a.225.225 0 00-.18.08l-.016-.08s-.096.02-.144.128c-.044.116-.012.288-.012.288s.016.08.052.12'/><path stroke='#000' stroke-width='.104' d='M74.792 88.9c.004.004.152-.192.264-.292.076-.072.268-.132.268-.132 0-.032-.112-.112-.232-.112a.225.225 0 00-.18.08l-.016-.08s-.096.02-.144.128c-.044.116-.012.288-.012.288s.016.08.052.12h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M74.796 88.8c-.044-.048-.14-.036-.212.024-.072.06-.096.152-.048.2.048.052.144.04.216-.024.072-.06.092-.152.044-.2'/><path stroke='#000' stroke-width='.104' d='M74.796 88.8c-.044-.048-.14-.036-.212.024-.072.06-.096.152-.048.2.048.052.144.04.216-.024.072-.06.092-.152.044-.2z'/><path fill='#C8B100' fill-rule='nonzero' d='M66.332 93.448h8.916v-2.336h-8.916z'/><path stroke='#000' stroke-width='.156' d='M66.332 93.448h8.916v-2.336h-8.916z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.268 95.004a.364.364 0 01.164-.028h6.676c.068 0 .128.012.184.032a.56.56 0 01-.396-.528c0-.244.18-.456.412-.532a.773.773 0 01-.196.032h-6.68a.564.564 0 01-.188-.024l.036.008c.24.072.376.284.376.516a.558.558 0 01-.388.524'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M67.268 95.004a.364.364 0 01.164-.028h6.676c.068 0 .128.012.184.032a.56.56 0 01-.396-.528c0-.244.18-.456.412-.532a.773.773 0 01-.196.032h-6.68a.564.564 0 01-.188-.024l.036.008c.24.072.376.284.376.516a.558.558 0 01-.388.524z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.432 94.976h6.676c.228 0 .408.14.408.312 0 .176-.18.316-.408.316h-6.676c-.224 0-.408-.14-.408-.316 0-.172.184-.312.408-.312'/><path stroke='#000' stroke-width='.156' d='M67.432 94.976h6.676c.228 0 .408.14.408.312 0 .176-.18.316-.408.316h-6.676c-.224 0-.408-.14-.408-.316 0-.172.184-.312.408-.312z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.432 93.448h6.68c.228 0 .412.12.412.264 0 .148-.184.268-.412.268h-6.68c-.224 0-.408-.12-.408-.268 0-.144.184-.264.408-.264'/><path stroke='#000' stroke-width='.156' d='M67.432 93.448h6.68c.228 0 .412.12.412.264 0 .148-.184.268-.412.268h-6.68c-.224 0-.408-.12-.408-.268 0-.144.184-.264.408-.264z'/><path fill='#005BBF' fill-rule='nonzero' d='M77.012 132.772c-.616 0-1.164-.132-1.572-.348-.4-.204-.944-.328-1.544-.328-.604 0-1.16.128-1.564.332-.404.212-.96.344-1.568.344-.616 0-1.168-.144-1.572-.36-.4-.196-.932-.316-1.516-.316-.608 0-1.144.116-1.544.324-.408.216-.968.352-1.58.352v.964c.612 0 1.172-.14 1.58-.352.4-.208.936-.328 1.544-.328.58 0 1.116.124 1.516.32.404.212.956.36 1.572.36.608 0 1.164-.132 1.568-.344.404-.208.96-.336 1.564-.336.6 0 1.144.128 1.544.332.408.216.948.348 1.564.348l.008-.964'/><path stroke='#000' stroke-width='.156' d='M77.012 132.772c-.616 0-1.164-.132-1.572-.348-.4-.204-.944-.328-1.544-.328-.604 0-1.16.128-1.564.332-.404.212-.96.344-1.568.344-.616 0-1.168-.144-1.572-.36-.4-.196-.932-.316-1.516-.316-.608 0-1.144.116-1.544.324-.408.216-.968.352-1.58.352v.964c.612 0 1.172-.14 1.58-.352.4-.208.936-.328 1.544-.328.58 0 1.116.124 1.516.32.404.212.956.36 1.572.36.608 0 1.164-.132 1.568-.344.404-.208.96-.336 1.564-.336.6 0 1.144.128 1.544.332.408.216.948.348 1.564.348l.008-.964h0z'/><path fill='#CCC' fill-rule='nonzero' d='M77.012 133.736c-.616 0-1.164-.132-1.572-.348-.4-.204-.944-.332-1.544-.332-.604 0-1.16.128-1.564.336-.404.212-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.196-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v.964c.612 0 1.172-.14 1.58-.352.4-.208.936-.328 1.544-.328.58 0 1.116.124 1.516.32.404.216.956.36 1.572.36.608 0 1.164-.136 1.568-.344.404-.208.96-.336 1.564-.336.6 0 1.144.128 1.544.336.408.212.948.344 1.564.344l.008-.964'/><path stroke='#000' stroke-width='.156' d='M77.012 133.736c-.616 0-1.164-.132-1.572-.348-.4-.204-.944-.332-1.544-.332-.604 0-1.16.128-1.564.336-.404.212-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.196-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v.964c.612 0 1.172-.14 1.58-.352.4-.208.936-.328 1.544-.328.58 0 1.116.124 1.516.32.404.216.956.36 1.572.36.608 0 1.164-.136 1.568-.344.404-.208.96-.336 1.564-.336.6 0 1.144.128 1.544.336.408.212.948.344 1.564.344l.008-.964'/><path fill='#005BBF' fill-rule='nonzero' d='M77.012 134.7c-.616 0-1.164-.132-1.572-.344-.4-.208-.944-.336-1.544-.336-.604 0-1.16.128-1.564.336-.404.208-.96.344-1.568.344-.616 0-1.168-.144-1.572-.36-.4-.196-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v.96c.612 0 1.172-.136 1.58-.352.4-.204.936-.32 1.544-.32.58 0 1.116.12 1.516.316.404.216.956.356 1.572.356.608 0 1.164-.128 1.568-.34.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.22.948.344 1.564.344l.008-.96'/><path stroke='#000' stroke-width='.156' d='M77.012 134.7c-.616 0-1.164-.132-1.572-.344-.4-.208-.944-.336-1.544-.336-.604 0-1.16.128-1.564.336-.404.208-.96.344-1.568.344-.616 0-1.168-.144-1.572-.36-.4-.196-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v.96c.612 0 1.172-.136 1.58-.352.4-.204.936-.32 1.544-.32.58 0 1.116.12 1.516.316.404.216.956.356 1.572.356.608 0 1.164-.128 1.568-.34.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.22.948.344 1.564.344l.008-.96'/><path fill='#CCC' fill-rule='nonzero' d='M77.004 136.628c-.616 0-1.156-.132-1.564-.348-.4-.204-.944-.328-1.544-.328-.604 0-1.16.124-1.564.332-.404.208-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.2-.932-.316-1.516-.316-.608 0-1.144.116-1.544.324-.408.212-.968.352-1.58.352v-.96c.612 0 1.172-.144 1.58-.36.4-.204.936-.32 1.544-.32.58 0 1.116.12 1.516.316.404.216.956.356 1.572.356.608 0 1.164-.128 1.568-.34.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.22.956.344 1.572.344l-.008.968'/><path stroke='#000' stroke-width='.156' d='M77.004 136.628c-.616 0-1.156-.132-1.564-.348-.4-.204-.944-.328-1.544-.328-.604 0-1.16.124-1.564.332-.404.208-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.2-.932-.316-1.516-.316-.608 0-1.144.116-1.544.324-.408.212-.968.352-1.58.352v-.96c.612 0 1.172-.144 1.58-.36.4-.204.936-.32 1.544-.32.58 0 1.116.12 1.516.316.404.216.956.356 1.572.356.608 0 1.164-.128 1.568-.34.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.22.956.344 1.572.344l-.008.968'/><path fill='#005BBF' fill-rule='nonzero' d='M77.004 137.592c-.616 0-1.156-.132-1.564-.344-.4-.208-.944-.336-1.544-.336-.604 0-1.16.128-1.564.336-.404.208-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.2-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v-.956c.612 0 1.172-.148 1.58-.36.4-.208.936-.324 1.544-.324.58 0 1.116.12 1.516.316.404.212.956.36 1.572.36.608 0 1.164-.136 1.568-.344.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.216.952.348 1.572.348l-.008.964'/><path stroke='#000' stroke-width='.156' d='M77.004 137.592c-.616 0-1.156-.132-1.564-.344-.4-.208-.944-.336-1.544-.336-.604 0-1.16.128-1.564.336-.404.208-.96.344-1.568.344-.616 0-1.168-.148-1.572-.36-.4-.2-.932-.32-1.516-.32-.608 0-1.144.12-1.544.328-.408.212-.968.352-1.58.352v-.956c.612 0 1.172-.148 1.58-.36.4-.208.936-.324 1.544-.324.58 0 1.116.12 1.516.316.404.212.956.36 1.572.36.608 0 1.164-.136 1.568-.344.404-.208.96-.332 1.564-.332.6 0 1.144.124 1.544.328.408.216.952.348 1.572.348l-.008.964h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.268 128.812c.02.084.052.16.052.248 0 .584-.508 1.052-1.124 1.052h9.176c-.62 0-1.124-.468-1.124-1.052 0-.084.016-.164.036-.248a.507.507 0 01-.176.024h-6.676a.561.561 0 01-.164-.024'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M67.268 128.812c.02.084.052.16.052.248 0 .584-.508 1.052-1.124 1.052h9.176c-.62 0-1.124-.468-1.124-1.052 0-.084.016-.164.036-.248a.507.507 0 01-.176.024h-6.676a.561.561 0 01-.164-.024z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.432 128.208h6.676c.228 0 .408.14.408.312s-.18.316-.408.316h-6.676c-.224 0-.408-.144-.408-.316 0-.172.184-.312.408-.312'/><path stroke='#000' stroke-width='.156' d='M67.432 128.208h6.676c.228 0 .408.14.408.312s-.18.316-.408.316h-6.676c-.224 0-.408-.144-.408-.316 0-.172.184-.312.408-.312z'/><path fill='#C8B100' fill-rule='nonzero' d='M66.208 132.444h9.148v-2.332h-9.148z'/><path stroke='#000' stroke-width='.156' d='M66.208 132.444h9.148v-2.332h-9.148z'/><path fill='#AD1519' fill-rule='nonzero' d='M65.492 119.948c-.904.52-1.52 1.056-1.42 1.324.048.244.336.428.748.7.648.452 1.04 1.256.732 1.628a2.303 2.303 0 00.876-1.796c0-.748-.36-1.424-.936-1.856'/><path stroke='#000' stroke-width='.156' d='M65.492 119.948c-.904.52-1.52 1.056-1.42 1.324.048.244.336.428.748.7.648.452 1.04 1.256.732 1.628a2.303 2.303 0 00.876-1.796c0-.748-.36-1.424-.936-1.856z'/><path fill='#CCC' fill-rule='nonzero' d='M67.52 127.828h6.5V95.976h-6.5z'/><path stroke='#000' stroke-width='.156' d='M72.152 96.02v31.784m.732-31.784v31.784M67.52 127.828h6.5V95.976h-6.5z'/><path fill='#AD1519' fill-rule='nonzero' d='M80.66 107.888c-1.416-.584-3.828-1.02-6.596-1.112-.956.008-2.016.1-3.116.28-3.888.652-6.852 2.204-6.616 3.468l.02.104s-1.456-3.284-1.48-3.408c-.26-1.404 3.024-3.128 7.34-3.848a22.018 22.018 0 013.824-.304c2.76 0 5.16.356 6.608.892l.016 3.928'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M80.66 107.888c-1.416-.584-3.828-1.02-6.596-1.112-.956.008-2.016.1-3.116.28-3.888.652-6.852 2.204-6.616 3.468l.02.104s-1.456-3.284-1.48-3.408c-.26-1.404 3.024-3.128 7.34-3.848a22.018 22.018 0 013.824-.304c2.76 0 5.16.356 6.608.892l.016 3.928'/><path fill='#AD1519' fill-rule='nonzero' d='M67.508 111.888c-1.804-.128-3.032-.612-3.176-1.364-.112-.6.5-1.268 1.588-1.872.484.056 1.032.12 1.6.12l-.012 3.116'/><path stroke='#000' stroke-width='.156' d='M67.508 111.888c-1.804-.128-3.032-.612-3.176-1.364-.112-.6.5-1.268 1.588-1.872.484.056 1.032.12 1.6.12l-.012 3.116'/><path fill='#AD1519' fill-rule='nonzero' d='M74.032 109.452c1.128.172 1.972.452 2.392.796l.04.068c.2.412-.788 1.288-2.444 2.268l.012-3.132'/><path stroke='#000' stroke-width='.156' d='M74.032 109.452c1.128.172 1.972.452 2.392.796l.04.068c.2.412-.788 1.288-2.444 2.268l.012-3.132'/><path fill='#AD1519' fill-rule='nonzero' d='M63.468 118.032c-.172-.512 1.588-1.544 4.072-2.456 1.136-.404 2.072-.828 3.236-1.34 3.452-1.528 6-3.28 5.688-3.916l-.036-.068c.184.152.472 3.296.472 3.296.312.584-2.02 2.312-5.2 3.832-1.016.488-3.164 1.28-4.176 1.636-1.816.628-3.616 1.816-3.452 2.256l-.604-3.236'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M63.468 118.032c-.172-.512 1.588-1.544 4.072-2.456 1.136-.404 2.072-.828 3.236-1.34 3.452-1.528 6-3.28 5.688-3.916l-.036-.068c.184.152.472 3.296.472 3.296.312.584-2.02 2.312-5.2 3.832-1.016.488-3.164 1.28-4.176 1.636-1.816.628-3.616 1.816-3.452 2.256l-.604-3.236v-.004z'/><path fill='#C8B100' fill-rule='nonzero' d='M67.068 106.36c.796-.288 1.316-.632 1.064-1.256-.164-.4-.572-.476-1.188-.252l-1.084.396.976 2.412c.108-.048.216-.096.324-.136.112-.04.228-.072.34-.104l-.432-1.056v-.004zm-.472-1.164l.276-.1c.228-.084.484.04.6.32.084.212.064.452-.2.62-.084.052-.184.092-.28.132l-.396-.972zM69.612 104.188c-.116.032-.228.064-.344.088-.116.02-.236.036-.352.048l.564 2.512 1.752-.352c-.02-.048-.048-.104-.056-.152-.012-.056-.012-.112-.016-.164-.308.088-.644.184-1.044.264l-.504-2.244M73.124 106.352c.328-.912.728-1.784 1.124-2.668-.072.012-.144.024-.216.028a1.945 1.945 0 01-.216 0 22.642 22.642 0 01-.748 1.92c-.328-.604-.692-1.196-.972-1.804-.136.016-.276.036-.412.048-.136.008-.28.004-.416.008.504.824.992 1.644 1.456 2.492.064-.012.128-.024.2-.032.064-.004.132.004.2.008M76.788 104.42c.06-.124.124-.24.192-.356-.096-.088-.384-.22-.724-.252-.716-.072-1.124.244-1.172.676-.104.904 1.324.828 1.256 1.428-.028.256-.3.36-.592.332-.324-.032-.564-.212-.604-.476l-.088-.008a3.03 3.03 0 01-.192.46c.212.136.484.212.74.236.732.076 1.288-.216 1.34-.696.092-.86-1.348-.908-1.292-1.416.024-.212.188-.352.56-.316.268.028.432.172.504.38l.072.008'/><path fill='#AD1519' fill-rule='nonzero' d='M130.44 88.668s-.296.312-.512.356c-.212.04-.484-.196-.484-.196s-.192.204-.432.256c-.236.056-.564-.264-.564-.264s-.228.32-.428.396c-.204.072-.452-.096-.452-.096s-.092.156-.26.244c-.072.036-.192-.02-.192-.02l-.24-.152-.272-.288-.248-.096s-.112-.364-.124-.428a17.36 17.36 0 00-.032-.228c-.052-.26.348-.56.92-.688.328-.076.616-.072.824-.008.228-.192.712-.328 1.28-.328.516 0 .968.108 1.216.28.244-.172.696-.28 1.212-.28.568 0 1.048.136 1.276.328.212-.064.496-.068.828.008.568.128.972.428.92.688l-.032.228a9.61 9.61 0 01-.128.428l-.248.096-.272.288-.232.152s-.12.056-.192.02c-.172-.084-.264-.244-.264-.244s-.248.168-.452.096c-.204-.076-.428-.396-.428-.396s-.328.32-.568.264c-.236-.052-.428-.256-.428-.256s-.272.236-.484.196c-.216-.044-.508-.356-.508-.356'/><path stroke='#000' stroke-width='.108' d='M130.44 88.668s-.296.312-.512.356c-.212.04-.484-.196-.484-.196s-.192.204-.432.256c-.236.056-.564-.264-.564-.264s-.228.32-.428.396c-.204.072-.452-.096-.452-.096s-.092.156-.26.244c-.072.036-.192-.02-.192-.02l-.24-.152-.272-.288-.248-.096s-.112-.364-.124-.428a17.36 17.36 0 00-.032-.228c-.052-.26.348-.56.92-.688.328-.076.616-.072.824-.008.228-.192.712-.328 1.28-.328.516 0 .968.108 1.216.28.244-.172.696-.28 1.212-.28.568 0 1.048.136 1.276.328.212-.064.496-.068.828.008.568.128.972.428.92.688l-.032.228a9.61 9.61 0 01-.128.428l-.248.096-.272.288-.232.152s-.12.056-.192.02c-.172-.084-.264-.244-.264-.244s-.248.168-.452.096c-.204-.076-.428-.396-.428-.396s-.328.32-.568.264c-.236-.052-.428-.256-.428-.256s-.272.236-.484.196c-.216-.044-.508-.356-.508-.356h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M129.88 86.98c0-.436.244-.784.548-.784.304 0 .552.348.552.784 0 .432-.248.784-.552.784-.304 0-.548-.352-.548-.784'/><path stroke='#000' stroke-width='.104' d='M129.88 86.98c0-.436.244-.784.548-.784.304 0 .552.348.552.784 0 .432-.248.784-.552.784-.304 0-.548-.352-.548-.784z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.188 86.98c0-.4.112-.724.252-.724s.252.324.252.724c0 .4-.112.72-.252.72s-.252-.32-.252-.72'/><path stroke='#000' stroke-width='.104' d='M130.188 86.98c0-.4.112-.724.252-.724s.252.324.252.724c0 .4-.112.72-.252.72s-.252-.32-.252-.72z'/><path fill='#C8B100' fill-rule='nonzero' d='M127.6 90.2c-.084-.228-.236-.432-.236-.432.78-.228 1.864-.372 3.072-.376 1.204.004 2.296.148 3.076.376l-.208.364a2.75 2.75 0 00-.152.324c-.704-.216-1.608-.324-2.72-.328-1.116.004-2.188.14-2.744.344.008 0-.04-.128-.096-.272h.008'/><path stroke='#000' stroke-width='.104' d='M127.6 90.2c-.084-.228-.236-.432-.236-.432.78-.228 1.864-.372 3.072-.376 1.204.004 2.296.148 3.076.376l-.208.364a2.75 2.75 0 00-.152.324c-.704-.216-1.608-.324-2.72-.328-1.116.004-2.188.14-2.744.344.008 0-.04-.128-.096-.272h.008'/><path fill='#C8B100' fill-rule='nonzero' d='M130.436 91.192c.972-.004 2.044-.152 2.44-.252.264-.08.416-.196.388-.336-.012-.064-.068-.12-.148-.152-.58-.188-1.624-.32-2.68-.32s-2.108.132-2.688.32c-.076.032-.136.088-.148.152-.028.14.128.256.392.336.396.1 1.472.248 2.444.252'/><path stroke='#000' stroke-width='.104' d='M130.436 91.192c.972-.004 2.044-.152 2.44-.252.264-.08.416-.196.388-.336-.012-.064-.068-.12-.148-.152-.58-.188-1.624-.32-2.68-.32s-2.108.132-2.688.32c-.076.032-.136.088-.148.152-.028.14.128.256.392.336.396.1 1.472.248 2.444.252z'/><path fill='#FFF' fill-rule='nonzero' d='M132.796 87.332c0-.096.08-.176.176-.176a.18.18 0 01.184.176c0 .092-.08.168-.184.168a.173.173 0 01-.176-.168'/><path stroke='#000' stroke-width='.084' d='M132.796 87.332c0-.096.08-.176.176-.176a.18.18 0 01.184.176c0 .092-.08.168-.184.168a.173.173 0 01-.176-.168zM132.692 86.732c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .092-.08.168-.18.168-.1 0-.18-.076-.18-.168zm-.452-.376c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .096-.08.172-.18.172-.1 0-.18-.076-.18-.172zm-.568-.18c0-.096.084-.176.184-.176.1 0 .18.08.18.176 0 .092-.08.168-.18.168-.1 0-.184-.076-.184-.168zm-.572.02c0-.096.08-.172.176-.172.104 0 .184.076.184.172 0 .096-.08.168-.184.168a.17.17 0 01-.176-.168z'/><path stroke='#000' stroke-linecap='round' stroke-width='.104' d='M134.584 88.496c.052-.132.084-.28.084-.432a1.14 1.14 0 00-1.128-1.152c-.2 0-.388.052-.552.148'/><path stroke='#000' stroke-width='.104' d='M132.568 87.684c.06-.104.1-.228.1-.348 0-.46-.472-.832-1.056-.832-.248 0-.476.068-.656.18'/><path stroke='#000' stroke-width='.084' d='M134.74 87.972c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .096-.08.172-.18.172-.1 0-.18-.076-.18-.172zm-.072-.632c0-.096.084-.168.184-.168.1 0 .18.072.18.168 0 .096-.08.172-.18.172-.1 0-.184-.076-.184-.172zm-.404-.48c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .092-.08.168-.18.168-.1 0-.18-.076-.18-.168zm-.544-.26c0-.092.084-.168.184-.168.1 0 .18.076.18.168 0 .096-.08.176-.18.176-.1 0-.184-.08-.184-.176zm-.576.024c0-.096.08-.172.18-.172.1 0 .184.076.184.172 0 .092-.084.172-.184.172-.1 0-.18-.08-.18-.172z'/><path fill='#C8B100' fill-rule='nonzero' d='M133.56 89.332l-.236-.212s-.228.136-.512.096c-.28-.044-.372-.388-.372-.388s-.316.268-.576.248c-.26-.024-.428-.248-.428-.248s-.284.204-.532.184c-.248-.024-.488-.332-.488-.332s-.248.32-.496.344c-.248.02-.452-.216-.452-.216s-.116.236-.432.288c-.316.052-.588-.248-.588-.248s-.176.292-.392.368c-.216.072-.496-.108-.496-.108s-.048.108-.08.172c-.036.064-.124.076-.124.076l.068.188c.776-.224 1.828-.364 3.016-.364s2.268.14 3.04.368l.08-.216'/><path stroke='#000' stroke-width='.104' d='M133.56 89.332l-.236-.212s-.228.136-.512.096c-.28-.044-.372-.388-.372-.388s-.316.268-.576.248c-.26-.024-.428-.248-.428-.248s-.284.204-.532.184c-.248-.024-.488-.332-.488-.332s-.248.32-.496.344c-.248.02-.452-.216-.452-.216s-.116.236-.432.288c-.316.052-.588-.248-.588-.248s-.176.292-.392.368c-.216.072-.496-.108-.496-.108s-.048.108-.08.172c-.036.064-.124.076-.124.076l.068.188c.776-.224 1.828-.364 3.016-.364s2.268.14 3.04.368l.08-.216h0z'/><path fill='#FFF' fill-rule='nonzero' d='M127.692 87.332c0-.096.08-.176.18-.176.1 0 .18.08.18.176 0 .092-.08.168-.18.168-.1 0-.18-.076-.18-.168'/><path stroke='#000' stroke-width='.084' d='M127.692 87.332c0-.096.08-.176.18-.176.1 0 .18.08.18.176 0 .092-.08.168-.18.168-.1 0-.18-.076-.18-.168zM127.792 86.732c0-.096.08-.172.18-.172.1 0 .184.076.184.172 0 .092-.084.168-.184.168-.1 0-.18-.076-.18-.168zm.452-.376c0-.096.08-.172.18-.172.1 0 .184.076.184.172 0 .096-.084.172-.184.172-.1 0-.18-.076-.18-.172zm.564-.18c0-.096.084-.176.184-.176.1 0 .18.08.18.176 0 .092-.08.168-.18.168-.1 0-.184-.076-.184-.168zm.58.02c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .096-.08.168-.18.168-.1 0-.18-.072-.18-.168z'/><path stroke='#000' stroke-linecap='round' stroke-width='.104' d='M126.264 88.496a1.14 1.14 0 011.044-1.584c.2 0 .384.052.548.148'/><path stroke='#000' stroke-width='.104' d='M128.292 87.672a.692.692 0 01-.116-.336c0-.46.476-.832 1.056-.832.248 0 .48.068.66.18'/><path stroke='#000' stroke-width='.084' d='M125.744 87.972c0-.096.084-.172.184-.172.096 0 .18.076.18.172 0 .096-.084.172-.18.172-.1 0-.184-.076-.184-.172zm.068-.632c0-.096.084-.168.184-.168.1 0 .18.072.18.168 0 .096-.08.172-.18.172-.1 0-.184-.076-.184-.172zm.408-.48c0-.096.08-.172.184-.172.096 0 .18.076.18.172 0 .092-.084.168-.18.168-.104 0-.184-.076-.184-.168zm.544-.26c0-.092.08-.168.18-.168.1 0 .18.076.18.168 0 .096-.08.176-.18.176-.1 0-.18-.08-.18-.176zm.576.024c0-.096.08-.172.18-.172.1 0 .18.076.18.172 0 .092-.08.172-.18.172-.1 0-.18-.08-.18-.172z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.44 88.296l.112.02a.466.466 0 00-.02.152c0 .232.2.42.448.42a.441.441 0 00.42-.292c.008.004.044-.152.064-.152.016 0 .012.164.016.164.028.212.224.356.444.356a.434.434 0 00.444-.424c0-.016 0-.032-.004-.048l.14-.14.076.176a.358.358 0 00-.044.184c0 .224.192.404.428.404a.428.428 0 00.352-.18l.092-.116-.004.144c0 .136.06.264.196.284 0 0 .16.012.364-.152.212-.164.324-.3.324-.3l.012.168s-.204.336-.388.44c-.1.06-.256.124-.38.1-.132-.02-.22-.124-.272-.244a.605.605 0 01-.316.088c-.252 0-.48-.14-.568-.344a.654.654 0 01-.968-.032.651.651 0 01-.972-.104.644.644 0 01-.968.104.656.656 0 01-.504.232.624.624 0 01-.464-.2c-.088.204-.316.344-.568.344a.605.605 0 01-.316-.088c-.048.12-.14.224-.272.244-.12.024-.276-.04-.376-.1-.188-.104-.408-.44-.408-.44l.028-.168s.112.136.32.3c.208.164.368.152.368.152.136-.02.192-.148.192-.284v-.144l.092.116c.076.108.204.18.352.18.236 0 .428-.18.428-.404a.358.358 0 00-.044-.184l.076-.176.14.14c-.004.016-.004.032-.004.048 0 .236.2.424.44.424.224 0 .416-.144.444-.356.008 0 .004-.164.02-.164.02 0 .056.156.06.152.06.168.228.292.428.292a.433.433 0 00.444-.42.466.466 0 00-.02-.152l.116-.02'/><path stroke='#000' stroke-width='.104' d='M130.44 88.296l.112.02a.466.466 0 00-.02.152c0 .232.2.42.448.42a.441.441 0 00.42-.292c.008.004.044-.152.064-.152.016 0 .012.164.016.164.028.212.224.356.444.356a.434.434 0 00.444-.424c0-.016 0-.032-.004-.048l.14-.14.076.176a.358.358 0 00-.044.184c0 .224.192.404.428.404a.428.428 0 00.352-.18l.092-.116-.004.144c0 .136.06.264.196.284 0 0 .16.012.364-.152.212-.164.324-.3.324-.3l.012.168s-.204.336-.388.44c-.1.06-.256.124-.38.1-.132-.02-.22-.124-.272-.244a.605.605 0 01-.316.088c-.252 0-.48-.14-.568-.344a.654.654 0 01-.968-.032.651.651 0 01-.972-.104.644.644 0 01-.968.104.656.656 0 01-.504.232.624.624 0 01-.464-.2c-.088.204-.316.344-.568.344a.605.605 0 01-.316-.088c-.048.12-.14.224-.272.244-.12.024-.276-.04-.376-.1-.188-.104-.408-.44-.408-.44l.028-.168s.112.136.32.3c.208.164.368.152.368.152.136-.02.192-.148.192-.284v-.144l.092.116c.076.108.204.18.352.18.236 0 .428-.18.428-.404a.358.358 0 00-.044-.184l.076-.176.14.14c-.004.016-.004.032-.004.048 0 .236.2.424.44.424.224 0 .416-.144.444-.356.008 0 .004-.164.02-.164.02 0 .056.156.06.152.06.168.228.292.428.292a.433.433 0 00.444-.42.466.466 0 00-.02-.152l.116-.02z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.436 89.392c-1.208.004-2.288.148-3.068.376-.052.016-.116-.024-.132-.068-.016-.052.02-.112.072-.128.78-.24 1.892-.392 3.128-.392 1.232 0 2.348.152 3.132.392.052.016.088.076.072.128-.016.044-.084.084-.132.068-.78-.228-1.868-.372-3.072-.376'/><path stroke='#000' stroke-width='.104' d='M130.436 89.392c-1.208.004-2.288.148-3.068.376-.052.016-.116-.024-.132-.068-.016-.052.02-.112.072-.128.78-.24 1.892-.392 3.128-.392 1.232 0 2.348.152 3.132.392.052.016.088.076.072.128-.016.044-.084.084-.132.068-.78-.228-1.868-.372-3.072-.376z'/><path fill='#FFF' fill-rule='nonzero' d='M129.268 89.82c0-.088.08-.164.176-.164.096 0 .176.076.176.164 0 .092-.08.164-.176.164-.096 0-.176-.072-.176-.164'/><path stroke='#000' stroke-width='.104' d='M129.268 89.82c0-.088.08-.164.176-.164.096 0 .176.076.176.164 0 .092-.08.164-.176.164-.096 0-.176-.072-.176-.164z'/><path fill='#AD1519' fill-rule='nonzero' d='M130.452 89.892h-.392c-.072 0-.132-.056-.132-.124s.06-.124.132-.124h.784c.072 0 .128.056.128.124a.126.126 0 01-.128.124h-.392'/><path stroke='#000' stroke-width='.104' d='M130.452 89.892h-.392c-.072 0-.132-.056-.132-.124s.06-.124.132-.124h.784c.072 0 .128.056.128.124a.126.126 0 01-.128.124h-.392'/><path fill='#058E6E' fill-rule='nonzero' d='M128.508 90.024l-.28.044c-.072.008-.136-.036-.148-.104-.012-.068.036-.128.108-.14l.276-.04.288-.044c.068-.008.136.036.148.1a.126.126 0 01-.112.14l-.28.044'/><path stroke='#000' stroke-width='.104' d='M128.508 90.024l-.28.044c-.072.008-.136-.036-.148-.104-.012-.068.036-.128.108-.14l.276-.04.288-.044c.068-.008.136.036.148.1a.126.126 0 01-.112.14l-.28.044'/><path fill='#AD1519' fill-rule='nonzero' d='M127.388 90.22l.12-.2.264.052-.152.224-.232-.076'/><path stroke='#000' stroke-width='.104' d='M127.388 90.22l.12-.2.264.052-.152.224-.232-.076'/><path fill='#FFF' fill-rule='nonzero' d='M131.256 89.82a.17.17 0 01.172-.164c.096 0 .176.076.176.164 0 .092-.08.164-.176.164a.167.167 0 01-.172-.164'/><path stroke='#000' stroke-width='.104' d='M131.256 89.82a.17.17 0 01.172-.164c.096 0 .176.076.176.164 0 .092-.08.164-.176.164a.167.167 0 01-.172-.164z'/><path fill='#058E6E' fill-rule='nonzero' d='M132.364 90.024l.28.044c.072.008.136-.036.148-.104.012-.068-.036-.128-.104-.14l-.28-.04-.284-.044c-.072-.008-.14.036-.152.1a.126.126 0 00.112.14l.28.044'/><path stroke='#000' stroke-width='.104' d='M132.364 90.024l.28.044c.072.008.136-.036.148-.104.012-.068-.036-.128-.104-.14l-.28-.04-.284-.044c-.072-.008-.14.036-.152.1a.126.126 0 00.112.14l.28.044'/><path fill='#AD1519' fill-rule='nonzero' d='M133.464 90.232l-.1-.212-.272.024.132.236.24-.048'/><path stroke='#000' stroke-width='.104' d='M133.464 90.232l-.1-.212-.272.024.132.236.24-.048'/><path fill='#AD1519' fill-rule='nonzero' d='M130.432 90.964c-.972 0-1.852-.088-2.524-.26.672-.172 1.552-.276 2.524-.28.976 0 1.86.108 2.528.28-.668.172-1.552.26-2.528.26'/><path stroke='#000' stroke-linejoin='round' stroke-width='.104' d='M130.432 90.964c-.972 0-1.852-.088-2.524-.26.672-.172 1.552-.276 2.524-.28.976 0 1.86.108 2.528.28-.668.172-1.552.26-2.528.26z'/><path fill='#C8B100' fill-rule='nonzero' d='M133.504 88.852c.024-.072 0-.148-.056-.168-.052-.012-.116.036-.14.108-.028.076-.004.152.048.168.056.016.12-.032.148-.108'/><path stroke='#000' stroke-width='.104' d='M133.504 88.852c.024-.072 0-.148-.056-.168-.052-.012-.116.036-.14.108-.028.076-.004.152.048.168.056.016.12-.032.148-.108h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M131.564 88.48c.012-.08-.028-.148-.084-.156-.056-.008-.112.052-.12.132-.012.076.028.148.084.152.056.008.112-.052.12-.128'/><path stroke='#000' stroke-width='.104' d='M131.564 88.48c.012-.08-.028-.148-.084-.156-.056-.008-.112.052-.12.132-.012.076.028.148.084.152.056.008.112-.052.12-.128z'/><path fill='#C8B100' fill-rule='nonzero' d='M129.316 88.48c-.012-.08.024-.148.084-.156.056-.008.108.052.12.132.008.076-.028.148-.084.152-.056.008-.112-.052-.12-.128'/><path stroke='#000' stroke-width='.104' d='M129.316 88.48c-.012-.08.024-.148.084-.156.056-.008.108.052.12.132.008.076-.028.148-.084.152-.056.008-.112-.052-.12-.128z'/><path fill='#C8B100' fill-rule='nonzero' d='M127.376 88.852c-.028-.072 0-.148.052-.168.052-.012.12.036.144.108.028.076.004.152-.048.168-.056.016-.12-.032-.148-.108'/><path stroke='#000' stroke-width='.104' d='M127.376 88.852c-.028-.072 0-.148.052-.168.052-.012.12.036.144.108.028.076.004.152-.048.168-.056.016-.12-.032-.148-.108z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.432 87.36l-.34.208.252.552.088.056.088-.056.256-.552-.344-.208'/><path stroke='#000' stroke-width='.104' d='M130.432 87.36l-.34.208.252.552.088.056.088-.056.256-.552-.344-.208'/><path fill='#C8B100' fill-rule='nonzero' d='M129.68 88.196l.156.228.536-.168.056-.072-.056-.08-.536-.156-.156.248'/><path stroke='#000' stroke-width='.104' d='M129.68 88.196l.156.228.536-.168.056-.072-.056-.08-.536-.156-.156.248'/><path fill='#C8B100' fill-rule='nonzero' d='M131.188 88.196l-.156.228-.536-.168-.056-.072.056-.08.536-.156.156.248'/><path stroke='#000' stroke-width='.104' d='M131.188 88.196l-.156.228-.536-.168-.056-.072.056-.08.536-.156.156.248'/><path fill='#C8B100' fill-rule='nonzero' d='M128.2 87.604l-.268.256.344.456.092.036.068-.072.12-.548-.356-.128'/><path stroke='#000' stroke-width='.104' d='M128.2 87.604l-.268.256.344.456.092.036.068-.072.12-.548-.356-.128'/><path fill='#C8B100' fill-rule='nonzero' d='M127.636 88.516l.2.192.492-.264.036-.084-.072-.068-.556-.048-.1.272'/><path stroke='#000' stroke-width='.104' d='M127.636 88.516l.2.192.492-.264.036-.084-.072-.068-.556-.048-.1.272'/><path fill='#C8B100' fill-rule='nonzero' d='M129.112 88.22l-.104.252-.56-.052-.072-.064.036-.088.492-.256.208.208'/><path stroke='#000' stroke-width='.104' d='M129.112 88.22l-.104.252-.56-.052-.072-.064.036-.088.492-.256.208.208'/><path fill='#C8B100' fill-rule='nonzero' d='M127.096 88.588l-.044.264-.56.06-.088-.048.024-.092.42-.348.248.164'/><path stroke='#000' stroke-width='.104' d='M127.096 88.588l-.044.264-.56.06-.088-.048.024-.092.42-.348.248.164'/><path fill='#C8B100' fill-rule='nonzero' d='M128.176 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184'/><path stroke='#000' stroke-width='.104' d='M128.176 88.36c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M132.676 87.604l.268.256-.344.456-.092.036-.068-.072-.12-.548.356-.128'/><path stroke='#000' stroke-width='.104' d='M132.676 87.604l.268.256-.344.456-.092.036-.068-.072-.12-.548.356-.128'/><path fill='#C8B100' fill-rule='nonzero' d='M133.24 88.516l-.204.192-.488-.264-.04-.084.072-.068.56-.048.1.272'/><path stroke='#000' stroke-width='.104' d='M133.24 88.516l-.204.192-.488-.264-.04-.084.072-.068.56-.048.1.272'/><path fill='#C8B100' fill-rule='nonzero' d='M131.764 88.22l.104.252.56-.052.072-.064-.04-.088-.488-.256-.208.208'/><path stroke='#000' stroke-width='.104' d='M131.764 88.22l.104.252.56-.052.072-.064-.04-.088-.488-.256-.208.208'/><path fill='#C8B100' fill-rule='nonzero' d='M133.704 88.588l.044.264.56.06.084-.048-.02-.092-.42-.348-.248.164'/><path stroke='#000' stroke-width='.104' d='M133.704 88.588l.044.264.56.06.084-.048-.02-.092-.42-.348-.248.164'/><path fill='#C8B100' fill-rule='nonzero' d='M130.24 88.184c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184'/><path stroke='#000' stroke-width='.104' d='M130.24 88.184c0-.104.088-.188.196-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.196-.084-.196-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M132.308 88.36c0-.104.092-.188.2-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.2-.084-.2-.184'/><path stroke='#000' stroke-width='.104' d='M132.308 88.36c0-.104.092-.188.2-.188.108 0 .196.084.196.188 0 .1-.088.184-.196.184-.108 0-.2-.084-.2-.184z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.068 86.08c0-.192.164-.348.368-.348s.372.156.372.348a.362.362 0 01-.372.352.359.359 0 01-.368-.352'/><path fill='#C8B100' fill-rule='nonzero' d='M130.696 85.956v.232h-.568v-.232h.188v-.52h-.248v-.232h.248v-.232h.244v.232h.24v.232h-.24v.52h.136'/><path stroke='#000' stroke-width='.12' d='M130.696 85.956v.232h-.568v-.232h.188v-.52h-.248v-.232h.248v-.232h.244v.232h.24v.232h-.24v.52z'/><path fill='#C8B100' fill-rule='nonzero' d='M130.952 85.956v.232h-1.012v-.232h.376v-.52h-.248v-.232h.248v-.232h.244v.232h.244v.232h-.244v.52h.392'/><path stroke='#000' stroke-width='.104' d='M130.544 85.748a.35.35 0 01.264.332.36.36 0 01-.372.352.359.359 0 01-.368-.352c0-.16.116-.296.272-.336'/><path fill='#C8B100' fill-rule='nonzero' d='M126.34 88.9c-.004.004-.152-.192-.264-.292-.076-.072-.268-.132-.268-.132 0-.032.112-.112.232-.112.072 0 .14.028.18.08l.012-.08s.1.02.144.128c.044.116.016.288.016.288s-.02.08-.052.12'/><path stroke='#000' stroke-width='.104' d='M126.34 88.9c-.004.004-.152-.192-.264-.292-.076-.072-.268-.132-.268-.132 0-.032.112-.112.232-.112.072 0 .14.028.18.08l.012-.08s.1.02.144.128c.044.116.016.288.016.288s-.02.08-.052.12h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M126.348 88.8c.044-.048.14-.036.212.024.072.06.092.152.044.2-.044.052-.14.04-.212-.024-.072-.06-.092-.152-.044-.2'/><path stroke='#000' stroke-width='.104' d='M126.348 88.8c.044-.048.14-.036.212.024.072.06.092.152.044.2-.044.052-.14.04-.212-.024-.072-.06-.092-.152-.044-.2z'/><path fill='#C8B100' fill-rule='nonzero' d='M134.46 88.9c.004.004.152-.192.26-.292.08-.072.272-.132.272-.132 0-.032-.112-.112-.236-.112a.222.222 0 00-.176.08l-.016-.08s-.1.02-.144.128c-.044.116-.016.288-.016.288s.02.08.056.12'/><path stroke='#000' stroke-width='.104' d='M134.46 88.9c.004.004.152-.192.26-.292.08-.072.272-.132.272-.132 0-.032-.112-.112-.236-.112a.222.222 0 00-.176.08l-.016-.08s-.1.02-.144.128c-.044.116-.016.288-.016.288s.02.08.056.12z'/><path fill='#C8B100' fill-rule='nonzero' d='M134.464 88.8c-.048-.048-.144-.036-.216.024-.072.06-.092.152-.044.2.044.052.14.04.212-.024.072-.06.096-.152.048-.2'/><path stroke='#000' stroke-width='.104' d='M134.464 88.8c-.048-.048-.144-.036-.216.024-.072.06-.092.152-.044.2.044.052.14.04.212-.024.072-.06.096-.152.048-.2z'/><path fill='#C8B100' fill-rule='nonzero' d='M125.984 93.448h8.916v-2.336h-8.916z'/><path stroke='#000' stroke-width='.156' d='M125.984 93.448h8.916v-2.336h-8.916z'/><path fill='#C8B100' fill-rule='nonzero' d='M133.964 95.004a.364.364 0 00-.164-.028h-6.676a.538.538 0 00-.184.032.562.562 0 00.392-.528.577.577 0 00-.408-.532.744.744 0 00.196.032h6.68a.564.564 0 00.188-.024l-.04.008a.527.527 0 00-.372.516c0 .224.148.452.388.524'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M133.964 95.004a.364.364 0 00-.164-.028h-6.676a.538.538 0 00-.184.032.562.562 0 00.392-.528.577.577 0 00-.408-.532.744.744 0 00.196.032h6.68a.564.564 0 00.188-.024l-.04.008a.527.527 0 00-.372.516c0 .224.148.452.388.524h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M127.124 94.976h6.676c.224 0 .408.14.408.312 0 .176-.184.316-.408.316h-6.676c-.228 0-.408-.14-.408-.316 0-.172.18-.312.408-.312'/><path stroke='#000' stroke-width='.156' d='M127.124 94.976h6.676c.224 0 .408.14.408.312 0 .176-.184.316-.408.316h-6.676c-.228 0-.408-.14-.408-.316 0-.172.18-.312.408-.312z'/><path fill='#C8B100' fill-rule='nonzero' d='M127.12 93.448h6.68c.224 0 .408.12.408.264 0 .148-.184.268-.408.268h-6.68c-.228 0-.412-.12-.412-.268 0-.144.184-.264.412-.264'/><path stroke='#000' stroke-width='.156' d='M127.12 93.448h6.68c.224 0 .408.12.408.264 0 .148-.184.268-.408.268h-6.68c-.228 0-.412-.12-.412-.268 0-.144.184-.264.412-.264z'/><path fill='#005BBF' fill-rule='nonzero' d='M124.22 132.772c.616 0 1.164-.132 1.568-.348.404-.204.948-.328 1.548-.328.604 0 1.16.128 1.564.332.4.212.96.344 1.568.344.616 0 1.168-.144 1.572-.36.4-.196.932-.316 1.516-.316.608 0 1.14.116 1.544.324.404.216.968.352 1.58.352v.964c-.612 0-1.176-.14-1.58-.352-.404-.208-.936-.328-1.544-.328-.584 0-1.116.124-1.516.32-.404.212-.956.36-1.572.36-.608 0-1.164-.132-1.568-.344-.404-.208-.96-.336-1.564-.336-.6 0-1.144.128-1.548.332-.404.216-.944.348-1.56.348l-.008-.964'/><path stroke='#000' stroke-width='.156' d='M124.22 132.772c.616 0 1.164-.132 1.568-.348.404-.204.948-.328 1.548-.328.604 0 1.16.128 1.564.332.4.212.96.344 1.568.344.616 0 1.168-.144 1.572-.36.4-.196.932-.316 1.516-.316.608 0 1.14.116 1.544.324.404.216.968.352 1.58.352v.964c-.612 0-1.176-.14-1.58-.352-.404-.208-.936-.328-1.544-.328-.584 0-1.116.124-1.516.32-.404.212-.956.36-1.572.36-.608 0-1.164-.132-1.568-.344-.404-.208-.96-.336-1.564-.336-.6 0-1.144.128-1.548.332-.404.216-.944.348-1.56.348l-.008-.964h0z'/><path fill='#CCC' fill-rule='nonzero' d='M124.22 133.736c.616 0 1.164-.132 1.568-.348.404-.204.948-.332 1.548-.332.604 0 1.16.128 1.564.336.4.212.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.196.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v.964c-.612 0-1.176-.14-1.58-.352-.404-.208-.936-.328-1.544-.328-.584 0-1.116.124-1.516.32-.404.216-.956.36-1.572.36-.608 0-1.164-.136-1.568-.344-.404-.208-.96-.336-1.564-.336-.6 0-1.144.128-1.548.336-.404.212-.944.344-1.56.344l-.008-.964'/><path stroke='#000' stroke-width='.156' d='M124.22 133.736c.616 0 1.164-.132 1.568-.348.404-.204.948-.332 1.548-.332.604 0 1.16.128 1.564.336.4.212.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.196.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v.964c-.612 0-1.176-.14-1.58-.352-.404-.208-.936-.328-1.544-.328-.584 0-1.116.124-1.516.32-.404.216-.956.36-1.572.36-.608 0-1.164-.136-1.568-.344-.404-.208-.96-.336-1.564-.336-.6 0-1.144.128-1.548.336-.404.212-.944.344-1.56.344l-.008-.964'/><path fill='#005BBF' fill-rule='nonzero' d='M124.22 134.7c.616 0 1.164-.132 1.568-.344.404-.208.948-.336 1.548-.336.604 0 1.16.128 1.564.336.4.208.96.344 1.568.344.616 0 1.168-.144 1.572-.36.4-.196.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v.96c-.612 0-1.176-.136-1.58-.352-.404-.204-.936-.32-1.544-.32-.584 0-1.116.12-1.516.316-.404.216-.956.356-1.572.356-.608 0-1.164-.128-1.568-.34-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.22-.944.344-1.56.344l-.008-.96'/><path stroke='#000' stroke-width='.156' d='M124.22 134.7c.616 0 1.164-.132 1.568-.344.404-.208.948-.336 1.548-.336.604 0 1.16.128 1.564.336.4.208.96.344 1.568.344.616 0 1.168-.144 1.572-.36.4-.196.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v.96c-.612 0-1.176-.136-1.58-.352-.404-.204-.936-.32-1.544-.32-.584 0-1.116.12-1.516.316-.404.216-.956.356-1.572.356-.608 0-1.164-.128-1.568-.34-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.22-.944.344-1.56.344l-.008-.96'/><path fill='#CCC' fill-rule='nonzero' d='M124.228 136.628c.616 0 1.156-.132 1.56-.348.404-.204.948-.328 1.548-.328.604 0 1.16.124 1.564.332.4.208.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.2.932-.316 1.516-.316.608 0 1.14.116 1.544.324.404.212.968.352 1.58.352v-.96c-.612 0-1.176-.144-1.58-.36-.404-.204-.936-.32-1.544-.32-.584 0-1.116.12-1.516.316-.404.216-.956.356-1.572.356-.608 0-1.164-.128-1.568-.34-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.22-.952.344-1.568.344l.008.968'/><path stroke='#000' stroke-width='.156' d='M124.228 136.628c.616 0 1.156-.132 1.56-.348.404-.204.948-.328 1.548-.328.604 0 1.16.124 1.564.332.4.208.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.2.932-.316 1.516-.316.608 0 1.14.116 1.544.324.404.212.968.352 1.58.352v-.96c-.612 0-1.176-.144-1.58-.36-.404-.204-.936-.32-1.544-.32-.584 0-1.116.12-1.516.316-.404.216-.956.356-1.572.356-.608 0-1.164-.128-1.568-.34-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.22-.952.344-1.568.344l.008.968'/><path fill='#005BBF' fill-rule='nonzero' d='M124.228 137.592c.616 0 1.156-.132 1.56-.344.404-.208.948-.336 1.548-.336.604 0 1.16.128 1.564.336.4.208.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.2.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v-.956c-.612 0-1.176-.148-1.58-.36-.404-.208-.936-.324-1.544-.324-.584 0-1.116.12-1.516.316-.404.212-.956.36-1.572.36-.608 0-1.164-.136-1.568-.344-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.216-.952.348-1.568.348l.008.964'/><path stroke='#000' stroke-width='.156' d='M124.228 137.592c.616 0 1.156-.132 1.56-.344.404-.208.948-.336 1.548-.336.604 0 1.16.128 1.564.336.4.208.96.344 1.568.344.616 0 1.168-.148 1.572-.36.4-.2.932-.32 1.516-.32.608 0 1.14.12 1.544.328.404.212.968.352 1.58.352v-.956c-.612 0-1.176-.148-1.58-.36-.404-.208-.936-.324-1.544-.324-.584 0-1.116.12-1.516.316-.404.212-.956.36-1.572.36-.608 0-1.164-.136-1.568-.344-.404-.208-.96-.332-1.564-.332-.6 0-1.144.124-1.548.328-.404.216-.952.348-1.568.348l.008.964h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M133.964 128.812c-.024.084-.052.16-.052.248 0 .584.508 1.052 1.124 1.052h-9.176c.62 0 1.124-.468 1.124-1.052 0-.084-.016-.164-.036-.248.048.02.112.024.176.024h6.672c.056 0 .12-.008.164-.024'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M133.964 128.812c-.024.084-.052.16-.052.248 0 .584.508 1.052 1.124 1.052h-9.176c.62 0 1.124-.468 1.124-1.052 0-.084-.016-.164-.036-.248.048.02.112.024.176.024h6.672c.056 0 .12-.008.164-.024h.004z'/><path fill='#C8B100' fill-rule='nonzero' d='M127.124 128.208h6.676c.224 0 .408.14.408.312s-.184.316-.408.316h-6.676c-.228 0-.408-.144-.408-.316 0-.172.18-.312.408-.312'/><path stroke='#000' stroke-width='.156' d='M127.124 128.208h6.676c.224 0 .408.14.408.312s-.184.316-.408.316h-6.676c-.228 0-.408-.144-.408-.316 0-.172.18-.312.408-.312z'/><path fill='#C8B100' fill-rule='nonzero' d='M125.872 132.444h9.152v-2.332h-9.152z'/><path stroke='#000' stroke-width='.156' d='M125.872 132.444h9.152v-2.332h-9.152z'/><path fill='#AD1519' fill-rule='nonzero' d='M135.74 119.948c.904.52 1.52 1.056 1.42 1.324-.048.244-.336.428-.748.7-.648.452-1.04 1.256-.732 1.628a2.3 2.3 0 01.06-3.652'/><path stroke='#000' stroke-width='.156' d='M135.74 119.948c.904.52 1.52 1.056 1.42 1.324-.048.244-.336.428-.748.7-.648.452-1.04 1.256-.732 1.628a2.3 2.3 0 01.06-3.652z'/><path fill='#CCC' fill-rule='nonzero' d='M127.212 127.828h6.5V95.976h-6.5z'/><path stroke='#000' stroke-width='.156' d='M131.928 95.964v31.784m.732-31.784v31.784M127.212 127.828h6.5V95.976h-6.5z'/><path fill='#AD1519' fill-rule='nonzero' d='M120.568 107.888c1.42-.584 3.832-1.02 6.6-1.112.956.008 2.016.1 3.116.28 3.888.652 6.848 2.204 6.616 3.468-.008.024-.016.08-.02.104 0 0 1.456-3.284 1.48-3.408.26-1.404-3.024-3.128-7.34-3.848a22.048 22.048 0 00-3.824-.304c-2.764 0-5.164.356-6.608.892l-.02 3.928'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M120.568 107.888c1.42-.584 3.832-1.02 6.6-1.112.956.008 2.016.1 3.116.28 3.888.652 6.848 2.204 6.616 3.468-.008.024-.016.08-.02.104 0 0 1.456-3.284 1.48-3.408.26-1.404-3.024-3.128-7.34-3.848a22.048 22.048 0 00-3.824-.304c-2.764 0-5.164.356-6.608.892l-.02 3.928'/><path fill='#AD1519' fill-rule='nonzero' d='M133.724 111.888c1.804-.128 3.036-.612 3.176-1.364.112-.6-.5-1.268-1.588-1.872-.488.056-1.036.12-1.6.12l.012 3.116'/><path stroke='#000' stroke-width='.156' d='M133.724 111.888c1.804-.128 3.036-.612 3.176-1.364.112-.6-.5-1.268-1.588-1.872-.488.056-1.036.12-1.6.12l.012 3.116'/><path fill='#AD1519' fill-rule='nonzero' d='M127.2 109.452c-1.128.172-1.972.452-2.396.796l-.036.068c-.204.412.788 1.288 2.44 2.268l-.008-3.132'/><path stroke='#000' stroke-width='.156' d='M127.2 109.452c-1.128.172-1.972.452-2.396.796l-.036.068c-.204.412.788 1.288 2.44 2.268l-.008-3.132'/><path fill='#AD1519' fill-rule='nonzero' d='M137.76 118.032c.172-.512-1.584-1.544-4.068-2.456-1.136-.404-2.076-.828-3.236-1.34-3.452-1.528-6.004-3.28-5.688-3.916l.036-.068c-.184.152-.468 3.296-.468 3.296-.316.584 2.02 2.312 5.192 3.832 1.02.488 3.168 1.28 4.18 1.636 1.816.628 3.616 1.816 3.452 2.256l.6-3.236'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M137.76 118.032c.172-.512-1.584-1.544-4.068-2.456-1.136-.404-2.076-.828-3.236-1.34-3.452-1.528-6.004-3.28-5.688-3.916l.036-.068c-.184.152-.468 3.296-.468 3.296-.316.584 2.02 2.312 5.192 3.832 1.02.488 3.168 1.28 4.18 1.636 1.816.628 3.616 1.816 3.452 2.256l.6-3.236v-.004h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M124.62 106.492c.248-.932.564-1.832.876-2.748-.068.02-.14.036-.212.044-.068.012-.144.016-.216.02a21.942 21.942 0 01-.568 1.976c-.384-.576-.8-1.136-1.132-1.72-.136.028-.272.06-.408.08-.136.02-.276.028-.416.044a54.83 54.83 0 011.68 2.364c.064-.016.128-.04.2-.048.064-.008.132-.008.196-.012M127.092 103.764c-.116.004-.236.016-.352.012-.12 0-.24-.016-.356-.024l-.048 2.564 1.796.032a.773.773 0 01-.024-.164c0-.052.016-.108.028-.16-.324.02-.672.04-1.084.032l.04-2.292M129.908 104.184c.288.024.564.076.84.124-.004-.052-.012-.108-.008-.164.004-.052.024-.104.04-.156l-2.428-.2c.004.056.012.108.008.16-.004.056-.024.108-.04.16.248-.008.548-.008.884.02l-.212 2.308c.116 0 .236 0 .352.012.12.008.236.028.352.044l.212-2.308M130.904 106.712c.116.02.236.036.352.06.112.024.228.06.34.092l.288-1.176.032.004c.064.164.152.36.196.476l.36.888c.144.024.284.044.42.072.144.032.28.072.416.112l-.124-.268c-.192-.4-.396-.804-.564-1.208.448.016.792-.144.88-.504.06-.248-.04-.444-.272-.612-.176-.124-.512-.188-.732-.24l-.976-.212-.616 2.516m1.256-2.168c.284.064.636.108.636.428-.004.084-.012.14-.024.192-.092.376-.376.504-.852.364l.24-.984M135.528 107.484c-.02.276-.072.548-.124.84.12.056.244.108.36.176.12.064.228.136.344.208l.24-2.892a1.169 1.169 0 01-.312-.172l-2.552 1.62c.068.032.14.064.204.1.068.036.124.076.188.112.216-.18.44-.328.696-.52l.956.524v.004zm-.724-.664l.852-.548-.1.96-.752-.412z'/><path stroke='#000' stroke-width='.02' d='M90.58 80.68c0-.456.388-.824.868-.824.476 0 .864.368.864.824 0 .452-.388.82-.864.82-.48 0-.868-.368-.868-.82z'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.104' d='M100.36 73.588c2.656 0 5.024.396 6.564 1.004.88.4 2.064.692 3.36.868.988.132 1.924.156 2.74.096 1.092-.024 2.668.296 4.248.992 1.304.58 2.396 1.284 3.12 1.964l-.628.56-.18 1.584-1.72 1.968-.86.732-2.036 1.628-1.04.084-.316.9-13.164-1.544-13.208 1.544-.316-.9-1.044-.084-2.032-1.628-.86-.732-1.72-1.968-.176-1.584-.632-.56c.728-.68 1.816-1.384 3.12-1.964 1.58-.696 3.156-1.016 4.248-.992.816.06 1.752.036 2.74-.096 1.296-.176 2.48-.468 3.36-.868 1.544-.608 3.776-1.004 6.432-1.004h0z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.56 90.972c-4.904-.008-9.3-.588-12.436-1.532a.482.482 0 01-.336-.5.469.469 0 01.336-.468c3.136-.944 7.532-1.524 12.436-1.532 4.908.008 9.3.588 12.436 1.532.22.068.336.26.332.468a.483.483 0 01-.332.5c-3.136.944-7.528 1.524-12.436 1.532'/><path fill='#AD1519' fill-rule='nonzero' d='M100.548 90.328c-4.424-.004-8.428-.516-11.472-1.304 3.044-.788 7.048-1.268 11.472-1.276 4.428.008 8.452.488 11.496 1.276-3.044.788-7.068 1.3-11.496 1.304'/><path stroke='#000' stroke-width='.036' d='M100.88 90.356v-2.628'/><path stroke='#000' stroke-width='.056' d='M100.164 90.356v-2.628'/><path stroke='#000' stroke-width='.072' d='M99.492 90.356v-2.628'/><path stroke='#000' stroke-width='.092' d='M98.824 90.356v-2.628'/><path stroke='#000' stroke-width='.112' d='M98.228 90.356v-2.628'/><path stroke='#000' stroke-width='.132' d='M97.092 90.212l-.016-2.388m.556 2.42v-2.5'/><path stroke='#000' stroke-width='.148' d='M96.044 90.104v-2.2m.532 2.264l-.016-2.344'/><path stroke='#000' stroke-width='.168' d='M94.64 89.98v-1.936m.46 1.968V87.98m.476 2.096v-2.112'/><path stroke='#000' stroke-width='.184' d='M94.148 89.964v-1.872'/><path stroke='#000' stroke-width='.204' d='M93.688 89.868v-1.744'/><path stroke='#000' stroke-width='.224' d='M93.196 89.824V88.2'/><path stroke='#000' stroke-width='.24' d='M92.188 89.68l-.016-1.288m.532 1.352v-1.448'/><path stroke='#000' stroke-width='.252' d='M91.672 89.572v-1.136'/><path stroke='#000' stroke-width='.272' d='M91.196 89.48v-.944'/><path stroke='#000' stroke-width='.292' d='M90.68 89.352v-.74'/><path stroke='#000' stroke-width='.308' d='M90.148 89.292v-.552'/><path stroke='#000' stroke-width='.364' d='M89.588 89.164v-.268'/><path stroke='#000' stroke-width='.02' d='M103.716 90.212v-2.404m-1.208 2.484l.016-2.548m-.896 2.58v-2.596'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.528 86.936c-4.964.012-9.42.632-12.556 1.6.26-.124.236-.448-.088-1.28-.392-1.012-1-.968-1-.968 3.464-1.024 8.292-1.664 13.664-1.672 5.376.008 10.24.648 13.708 1.672 0 0-.612-.044-1.004.968-.324.832-.348 1.156-.084 1.28-3.136-.968-7.676-1.588-12.64-1.6'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.548 84.62c-5.372.008-10.2.648-13.664 1.672-.232.068-.476-.02-.552-.24a.424.424 0 01.28-.54c3.484-1.068 8.432-1.74 13.936-1.752 5.508.012 10.476.684 13.96 1.752.232.068.356.32.28.54-.076.22-.32.308-.552.24-3.468-1.024-8.312-1.664-13.688-1.672'/><path stroke='#000' stroke-linejoin='round' stroke-width='.156' d='M100.548 90.328c-4.424-.004-8.428-.516-11.472-1.304 3.044-.788 7.048-1.268 11.472-1.276 4.428.008 8.452.488 11.496 1.276-3.044.788-7.068 1.3-11.496 1.304z'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M96.716 85.84c0-.232.196-.416.44-.416.24 0 .44.184.44.416 0 .228-.2.416-.44.416a.429.429 0 01-.44-.416'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.56 86.164h-1.316c-.24 0-.444-.184-.444-.412 0-.232.196-.416.44-.416h2.656c.244 0 .44.184.44.416 0 .228-.204.412-.444.412h-1.332'/><path fill='#058E6E' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M93.956 86.528l-.944.108c-.244.028-.468-.132-.496-.36-.032-.228.14-.436.384-.46l.948-.112.968-.112c.24-.028.46.132.488.36a.425.425 0 01-.384.464l-.964.112'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M90.112 86.612c0-.232.196-.416.44-.416s.44.184.44.416a.429.429 0 01-.44.416.429.429 0 01-.44-.416'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M87.188 87.364l.488-.636 1.348.172-1.076.784-.76-.32'/><path fill='#058E6E' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M107.164 86.528l.944.108c.24.028.468-.132.496-.36a.419.419 0 00-.384-.46l-.948-.112-.968-.112c-.244-.028-.46.132-.488.36-.032.228.144.436.384.464l.964.112'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M103.524 85.84c0-.232.2-.416.44-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416M110.128 86.612c0-.232.196-.416.44-.416s.44.184.44.416a.429.429 0 01-.44.416.429.429 0 01-.44-.416'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M113.928 87.364l-.484-.636-1.348.172 1.076.784.756-.32'/><path stroke='#000' stroke-width='.156' d='M88.548 89.164c3.1-.872 7.316-1.408 12-1.416 4.688.008 8.924.544 12.024 1.416'/><path fill='#C8B100' fill-rule='nonzero' d='M90.636 77.068l.552.444.832-1.36c-.9-.552-1.52-1.512-1.52-2.604 0-.124.008-.244.024-.364.084-1.736 2.2-3.168 4.88-3.168 1.392 0 2.652.38 3.536.992.024-.268.048-.5.084-.744-.972-.568-2.24-.912-3.62-.912-3.084 0-5.496 1.756-5.612 3.828a3.78 3.78 0 00-.02.368c0 1.104.504 2.104 1.304 2.796l-.44.724'/><path stroke='#000' stroke-width='.156' d='M90.636 77.068l.552.444.832-1.36c-.9-.552-1.52-1.512-1.52-2.604 0-.124.008-.244.024-.364.084-1.736 2.2-3.168 4.88-3.168 1.392 0 2.652.38 3.536.992.024-.268.048-.5.084-.744-.972-.568-2.24-.912-3.62-.912-3.084 0-5.496 1.756-5.612 3.828a3.78 3.78 0 00-.02.368c0 1.104.504 2.104 1.304 2.796l-.44.724'/><path fill='#C8B100' fill-rule='nonzero' d='M90.672 77.084c-1.052-.788-1.708-1.856-1.708-3.032 0-1.352.888-2.56 2.232-3.364-.828.668-1.332 1.532-1.404 2.492a3.78 3.78 0 00-.02.368c0 1.104.504 2.104 1.304 2.796l-.404.74'/><path stroke='#000' stroke-width='.156' d='M90.672 77.084c-1.052-.788-1.708-1.856-1.708-3.032 0-1.352.888-2.56 2.232-3.364-.828.668-1.332 1.532-1.404 2.492a3.78 3.78 0 00-.02.368c0 1.104.504 2.104 1.304 2.796l-.404.74'/><path fill='#C8B100' fill-rule='nonzero' d='M81.384 78.456a3.658 3.658 0 01-.952-2.448c0-.564.132-1.1.364-1.58.852-1.752 3.528-3.028 6.704-3.028.864 0 1.692.092 2.456.268-.168.184-.3.388-.432.592a10.598 10.598 0 00-2.024-.192c-2.908 0-5.344 1.132-6.048 2.66a2.932 2.932 0 00-.292 1.28c0 .928.436 1.76 1.116 2.328l-1.052 1.72-.564-.448.724-1.152'/><path stroke='#000' stroke-width='.156' d='M81.384 78.456a3.658 3.658 0 01-.952-2.448c0-.564.132-1.1.364-1.58.852-1.752 3.528-3.028 6.704-3.028.864 0 1.692.092 2.456.268-.168.184-.3.388-.432.592a10.598 10.598 0 00-2.024-.192c-2.908 0-5.344 1.132-6.048 2.66a2.932 2.932 0 00-.292 1.28c0 .928.436 1.76 1.116 2.328l-1.052 1.72-.564-.448.724-1.152h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M82.46 72.692c-.764.484-1.344 1.076-1.664 1.736a3.623 3.623 0 00-.364 1.58c0 .932.36 1.788.952 2.448l-.64 1.036c-.612-.784-.968-1.704-.968-2.68 0-1.68 1.068-3.148 2.684-4.12'/><path stroke='#000' stroke-width='.156' d='M82.46 72.692c-.764.484-1.344 1.076-1.664 1.736a3.623 3.623 0 00-.364 1.58c0 .932.36 1.788.952 2.448l-.64 1.036c-.612-.784-.968-1.704-.968-2.68 0-1.68 1.068-3.148 2.684-4.12z'/><path fill='#C8B100' fill-rule='nonzero' d='M100.516 69.008c.704 0 1.312.464 1.456 1.092.092.552.152 1.18.164 1.848.004.072-.004.14-.004.208 0 .08.016.164.02.244.024 1.408.224 2.648.508 3.408l-2.144 2.056-2.172-2.056c.288-.76.488-2 .516-3.408 0-.08.016-.164.016-.244 0-.068-.004-.136-.004-.208.012-.668.072-1.296.164-1.848.144-.628.776-1.092 1.48-1.092'/><path stroke='#000' stroke-width='.156' d='M100.516 69.008c.704 0 1.312.464 1.456 1.092.092.552.152 1.18.164 1.848.004.072-.004.14-.004.208 0 .08.016.164.02.244.024 1.408.224 2.648.508 3.408l-2.144 2.056-2.172-2.056c.288-.76.488-2 .516-3.408 0-.08.016-.164.016-.244 0-.068-.004-.136-.004-.208.012-.668.072-1.296.164-1.848.144-.628.776-1.092 1.48-1.092h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M100.516 69.676c.364 0 .672.232.748.556.092.524.148 1.12.16 1.752 0 .064-.004.128-.004.192 0 .08.012.156.016.236.02 1.328.212 2.5.484 3.22l-1.416 1.34-1.416-1.34c.268-.72.46-1.892.484-3.22 0-.08.016-.156.016-.236 0-.064-.004-.128-.004-.192.012-.632.068-1.228.16-1.752.072-.324.408-.556.772-.556'/><path stroke='#000' stroke-width='.156' d='M100.516 69.676c.364 0 .672.232.748.556.092.524.148 1.12.16 1.752 0 .064-.004.128-.004.192 0 .08.012.156.016.236.02 1.328.212 2.5.484 3.22l-1.416 1.34-1.416-1.34c.268-.72.46-1.892.484-3.22 0-.08.016-.156.016-.236 0-.064-.004-.128-.004-.192.012-.632.068-1.228.16-1.752.072-.324.408-.556.772-.556z'/><path fill='#C8B100' fill-rule='nonzero' d='M110.38 77.068l-.556.444-.832-1.36c.904-.552 1.524-1.512 1.524-2.604 0-.124-.008-.244-.024-.364-.084-1.736-2.2-3.168-4.88-3.168-1.396 0-2.652.38-3.536.992a10 10 0 00-.088-.744c.976-.568 2.24-.912 3.624-.912 3.084 0 5.496 1.756 5.612 3.828.012.124.02.244.02.368 0 1.104-.508 2.104-1.308 2.796l.444.724'/><path stroke='#000' stroke-width='.156' d='M110.38 77.068l-.556.444-.832-1.36c.904-.552 1.524-1.512 1.524-2.604 0-.124-.008-.244-.024-.364-.084-1.736-2.2-3.168-4.88-3.168-1.396 0-2.652.38-3.536.992a10 10 0 00-.088-.744c.976-.568 2.24-.912 3.624-.912 3.084 0 5.496 1.756 5.612 3.828.012.124.02.244.02.368 0 1.104-.508 2.104-1.308 2.796l.444.724'/><path fill='#C8B100' fill-rule='nonzero' d='M110.344 77.084c1.052-.788 1.708-1.856 1.708-3.032 0-1.352-.888-2.56-2.232-3.364.828.668 1.332 1.532 1.404 2.492.012.124.02.244.02.368 0 1.104-.508 2.104-1.308 2.796l.408.74'/><path stroke='#000' stroke-width='.156' d='M110.344 77.084c1.052-.788 1.708-1.856 1.708-3.032 0-1.352-.888-2.56-2.232-3.364.828.668 1.332 1.532 1.404 2.492.012.124.02.244.02.368 0 1.104-.508 2.104-1.308 2.796l.408.74'/><path fill='#C8B100' fill-rule='nonzero' d='M119.632 78.456c.588-.66.952-1.516.952-2.448 0-.564-.132-1.1-.364-1.58-.856-1.752-3.528-3.028-6.704-3.028-.864 0-1.692.092-2.46.268.172.184.304.388.436.592a10.567 10.567 0 012.024-.192c2.908 0 5.34 1.132 6.044 2.66.188.388.292.824.292 1.28 0 .928-.436 1.76-1.116 2.328l1.052 1.72.568-.448-.724-1.152'/><path stroke='#000' stroke-width='.156' d='M119.632 78.456c.588-.66.952-1.516.952-2.448 0-.564-.132-1.1-.364-1.58-.856-1.752-3.528-3.028-6.704-3.028-.864 0-1.692.092-2.46.268.172.184.304.388.436.592a10.567 10.567 0 012.024-.192c2.908 0 5.34 1.132 6.044 2.66.188.388.292.824.292 1.28 0 .928-.436 1.76-1.116 2.328l1.052 1.72.568-.448-.724-1.152z'/><path fill='#C8B100' fill-rule='nonzero' d='M118.556 72.692c.764.484 1.344 1.076 1.664 1.736.232.48.364 1.016.364 1.58 0 .932-.364 1.788-.952 2.448l.64 1.036c.612-.784.964-1.704.964-2.68 0-1.68-1.068-3.148-2.68-4.12'/><path stroke='#000' stroke-width='.156' d='M118.556 72.692c.764.484 1.344 1.076 1.664 1.736.232.48.364 1.016.364 1.58 0 .932-.364 1.788-.952 2.448l.64 1.036c.612-.784.964-1.704.964-2.68 0-1.68-1.068-3.148-2.68-4.12z'/><path fill='#FFF' fill-rule='nonzero' d='M99.752 76.072c0-.396.34-.716.764-.716.42 0 .76.32.76.716 0 .4-.34.724-.76.724-.424 0-.764-.324-.764-.724'/><path stroke='#000' stroke-width='.156' d='M99.752 76.072c0-.396.34-.716.764-.716.42 0 .76.32.76.716 0 .4-.34.724-.76.724-.424 0-.764-.324-.764-.724z'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M99.752 74.66c0-.396.34-.72.764-.72.42 0 .76.324.76.72 0 .4-.34.72-.76.72-.424 0-.764-.32-.764-.72M99.904 73.14c0-.32.276-.576.612-.576.332 0 .604.256.604.576 0 .32-.272.576-.604.576-.336 0-.612-.256-.612-.576M100.076 71.768c0-.228.196-.412.44-.412.24 0 .436.184.436.412 0 .232-.196.42-.436.42a.43.43 0 01-.44-.42M100.164 70.572c0-.184.156-.332.352-.332a.34.34 0 01.348.332.34.34 0 01-.348.332.341.341 0 01-.352-.332'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.58 80.412l.492.088c-.076.2-.096.42-.096.652 0 1.028.884 1.86 1.968 1.86.872 0 1.616-.54 1.868-1.284.032.02.188-.672.272-.664.068.008.06.72.088.708.124.936.984 1.572 1.948 1.572 1.084 0 1.964-.832 1.964-1.86 0-.076-.004-.152-.016-.228l.616-.608.332.776c-.132.244-.184.52-.184.812 0 .984.84 1.776 1.876 1.776a1.9 1.9 0 001.56-.788l.396-.5-.004.612c0 .62.264 1.172.864 1.272 0 0 .692.04 1.612-.68.916-.72 1.42-1.316 1.42-1.316l.08.72s-.76 1.18-1.588 1.66c-.456.264-1.144.54-1.692.452-.576-.096-.992-.56-1.204-1.096-.412.244-.9.388-1.42.388-1.124 0-2.132-.616-2.528-1.544-.516.56-1.236.9-2.08.9-.896 0-1.716-.404-2.228-1.024a2.88 2.88 0 01-1.952.748c-.992 0-1.876-.488-2.376-1.22-.5.732-1.384 1.22-2.376 1.22a2.87 2.87 0 01-1.948-.748c-.512.62-1.336 1.024-2.232 1.024-.844 0-1.56-.34-2.076-.9-.4.928-1.408 1.544-2.528 1.544a2.775 2.775 0 01-1.42-.388c-.216.536-.628 1-1.208 1.096-.544.088-1.232-.188-1.688-.452-.832-.48-1.592-1.66-1.592-1.66l.08-.72s.508.596 1.424 1.316c.916.724 1.608.68 1.608.68.604-.1.864-.652.864-1.272l-.004-.612.396.5c.336.476.912.788 1.56.788 1.036 0 1.876-.792 1.876-1.776 0-.292-.052-.568-.184-.812l.332-.776.616.608a2.184 2.184 0 00-.016.228c0 1.028.88 1.86 1.964 1.86.968 0 1.824-.636 1.952-1.572.024.012.02-.7.088-.708.08-.008.24.684.268.664.256.744.996 1.284 1.872 1.284 1.084 0 1.964-.832 1.964-1.86 0-.232-.012-.452-.096-.652l.516-.088'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M114.084 82.864c.112-.332.012-.66-.228-.732-.24-.076-.528.132-.644.464-.112.332-.012.66.228.736.24.072.528-.136.644-.468M105.532 81.208c.044-.348-.12-.652-.372-.68-.252-.028-.492.228-.536.576-.044.344.124.652.372.68.252.028.492-.228.536-.576M95.604 81.208c-.044-.348.124-.652.372-.68.252-.028.492.228.536.576.044.344-.12.652-.372.68-.248.028-.488-.228-.536-.576M87.056 82.864c-.112-.332-.012-.66.228-.732.24-.076.528.132.64.464.112.332.012.66-.228.736-.24.072-.524-.136-.64-.468'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M90.772 77.16c.424.268.792.716.92 1.212 0 0 .052-.1.284-.236.236-.132.436-.128.436-.128s-.068.388-.1.528c-.036.136-.036.552-.128.928-.092.372-.252.672-.252.672a.793.793 0 00-.632-.164.748.748 0 00-.528.36s-.264-.232-.484-.552c-.22-.324-.372-.712-.452-.832-.084-.12-.288-.46-.288-.46s.188-.072.456-.02c.268.048.352.128.352.128a2.03 2.03 0 01.416-1.436'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M90.948 81.244a.736.736 0 01-.268-.432.697.697 0 01.092-.492s-.352-.176-.732-.276c-.288-.076-.796-.08-.948-.08-.152-.008-.46-.012-.46-.012a2.489 2.489 0 00.312.52c-.508.116-.94.448-1.212.836.396.272.92.44 1.44.388 0 0-.048.136-.08.344-.024.172-.024.244-.024.244l.428-.156c.14-.052.616-.22.86-.384.32-.216.592-.5.592-.5M92.088 81.052a.691.691 0 00-.168-.92s.268-.284.588-.504c.24-.164.72-.328.86-.38.144-.052.428-.16.428-.16s0 .072-.024.244c-.032.208-.08.348-.08.348.52-.056 1.048.116 1.444.392a2.102 2.102 0 01-1.216.832 2.52 2.52 0 00.312.52l-.46-.012c-.152 0-.66-.004-.948-.08-.38-.1-.736-.276-.736-.276'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M90.58 80.68c0-.456.388-.824.868-.824.476 0 .864.368.864.824 0 .452-.388.82-.864.82-.48 0-.868-.368-.868-.82'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M100.544 75.844c.42.38.74.944.78 1.528 0 0 .076-.108.364-.212.292-.104.512-.064.512-.064s-.156.42-.22.568c-.068.148-.156.612-.336 1.012-.176.4-.42.704-.42.704a.896.896 0 00-1.336 0s-.244-.304-.42-.704c-.18-.4-.268-.864-.336-1.012-.068-.148-.224-.568-.224-.568s.224-.04.512.064c.288.104.368.212.368.212.04-.584.344-1.148.756-1.528'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M99.9 80.432a.801.801 0 01-.212-.532c0-.2.076-.388.204-.528 0 0-.356-.268-.756-.448-.308-.14-.872-.236-1.04-.268l-.512-.096s.016.08.08.268c.08.224.16.372.16.372-.588.032-1.14.324-1.524.704.384.376.936.664 1.524.7 0 0-.08.144-.16.372-.064.184-.08.268-.08.268l.512-.096c.168-.032.732-.128 1.04-.268.4-.184.764-.444.764-.444M101.204 80.432a.782.782 0 00.008-1.06s.356-.268.76-.448c.304-.14.868-.236 1.04-.268l.504-.096s-.008.08-.076.268c-.08.224-.16.372-.16.372.588.032 1.144.324 1.524.704-.38.376-.932.664-1.524.7 0 0 .08.144.16.372.064.184.076.268.076.268l-.504-.096c-.172-.032-.736-.128-1.04-.268-.404-.184-.768-.444-.768-.444M110.368 77.16c-.424.268-.792.716-.924 1.212 0 0-.048-.1-.284-.236-.232-.132-.436-.128-.436-.128s.068.388.104.528c.036.136.036.552.124.928.092.372.256.672.256.672a.788.788 0 01.628-.164c.236.04.424.176.532.36 0 0 .264-.232.484-.552.216-.324.368-.712.448-.832.084-.12.288-.46.288-.46s-.188-.072-.456-.02c-.268.048-.352.128-.352.128a2.028 2.028 0 00-.412-1.436'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M110.188 81.244a.699.699 0 00.268-.432.676.676 0 00-.088-.492s.352-.176.732-.276c.288-.076.796-.08.944-.08.156-.008.46-.012.46-.012s-.024.068-.112.22c-.104.184-.196.3-.196.3.504.116.936.448 1.212.836-.396.272-.924.44-1.44.388 0 0 .044.136.076.344.024.172.024.244.024.244l-.424-.156c-.144-.052-.62-.22-.864-.384-.316-.216-.592-.5-.592-.5M109.052 81.052a.718.718 0 01-.1-.492.714.714 0 01.268-.428s-.268-.284-.588-.504c-.244-.164-.72-.328-.864-.38l-.424-.16s-.004.072.024.244c.032.208.076.348.076.348-.516-.056-1.044.116-1.44.392.272.388.708.716 1.212.832 0 0-.092.112-.196.296a1.67 1.67 0 00-.112.224l.456-.012c.152 0 .664-.004.948-.08.38-.1.736-.276.736-.276'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M108.824 80.68c0-.456.388-.824.868-.824s.868.368.868.824c0 .452-.388.82-.868.82s-.868-.368-.868-.82M118.52 82.504c-.204-.216-.628-.172-.944.1-.316.268-.408.664-.204.876.204.216.628.168.944-.1.316-.272.408-.664.204-.876'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M117.288 83.028a.926.926 0 01.288-.424c.316-.272.74-.316.944-.1a.421.421 0 01.072.1s.44-.832.96-1.112c.52-.28 1.4-.208 1.4-.208 0-.64-.524-1.156-1.2-1.156-.396 0-.768.164-.988.444l-.092-.428s-.544.108-.792.728.02 1.52.02 1.52-.132-.384-.336-.644c-.204-.256-.724-.536-.996-.664-.272-.124-.548-.316-.548-.316s-.012.072-.024.244c-.008.204.008.332.008.332a3.25 3.25 0 00-1.532.192c.192.38.56.736 1.044.92 0 0-.172.144-.332.3a1.68 1.68 0 00-.172.196s.34.052.508.076c.172.02.736.112 1.072.088a6.17 6.17 0 00.696-.088M83.848 83.028a.896.896 0 00-.288-.424c-.316-.272-.736-.316-.944-.1a.403.403 0 00-.068.1s-.444-.832-.964-1.112c-.516-.28-1.396-.208-1.396-.208 0-.64.52-1.156 1.196-1.156.396 0 .768.164.992.444l.092-.428s.544.108.792.728-.024 1.52-.024 1.52.136-.384.34-.644c.204-.256.724-.536.996-.664.268-.124.548-.316.548-.316s.012.072.02.244c.012.204-.004.332-.004.332a3.262 3.262 0 011.532.192c-.196.38-.564.736-1.048.92 0 0 .176.144.332.3.136.136.176.196.176.196s-.34.052-.508.076c-.172.02-.736.112-1.076.088a6.294 6.294 0 01-.696-.088'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M82.616 82.504c.208-.216.628-.172.944.1.32.268.408.664.204.876-.204.216-.628.168-.944-.1-.316-.272-.408-.664-.204-.876M99.688 79.9c0-.452.388-.82.868-.82.476 0 .868.368.868.82 0 .456-.388.824-.868.824s-.868-.368-.868-.824'/><path fill='#005BBF' fill-rule='nonzero' stroke='#000' stroke-width='.104' d='M98.748 67.42c0-.928.796-1.68 1.772-1.68.98 0 1.772.752 1.772 1.68 0 .928-.792 1.676-1.772 1.676-.976 0-1.772-.748-1.772-1.676'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.104' d='M100.056 62.716v.904h-.968v.92h.968v2.644h-1.22c-.012.084-.088.148-.088.236 0 .232.048.456.14.656 0 .008.008.008.012.012h3.248c0-.004.008-.004.012-.012.088-.2.14-.424.14-.656 0-.088-.076-.152-.088-.236h-1.184V64.54h.968v-.92h-.968v-.904h-.972 0z'/><path fill='#CCC' fill-rule='nonzero' d='M100.696 138.232c-5.232 0-10.42-1.28-14.78-3.416-3.212-1.592-5.344-4.8-5.344-8.476v-13.32h40.168v13.32c0 3.676-2.128 6.884-5.344 8.476-4.36 2.136-9.464 3.416-14.7 3.416'/><path stroke='#000' stroke-width='.208' d='M100.696 138.232c-5.232 0-10.42-1.28-14.78-3.416-3.212-1.592-5.344-4.8-5.344-8.476v-13.32h40.168v13.32c0 3.676-2.128 6.884-5.344 8.476-4.36 2.136-9.464 3.416-14.7 3.416h0z'/><path fill='#CCC' fill-rule='nonzero' d='M100.612 113h20.128V90.712h-20.128V113z'/><path stroke='#000' stroke-width='.208' d='M100.612 113h20.128V90.712h-20.128V113z'/><path fill='#AD1519' fill-rule='nonzero' d='M100.628 126.328c0 5.264-4.464 9.528-10.02 9.528-5.556 0-10.06-4.264-10.06-9.528v-13.34h20.08v13.34'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M84.932 134.192c.628.332 1.488.888 2.412 1.108l-.06-22.784h-2.352v21.676z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-linejoin='round' stroke-width='.2' d='M80.512 126.148c.06 2.808 1.18 4.9 2.292 6.268v-19.788H80.54l-.028 13.52h0z'/><path fill='#C7B500' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M89.412 135.8c.92.092 1.604.076 2.348 0v-23.284h-2.348V135.8z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M93.828 135.3c.92-.184 1.96-.756 2.412-1.052v-21.732h-2.352l-.06 22.784h0z'/><path fill='#AD1519' fill-rule='nonzero' d='M80.548 113h20.072V90.712H80.548z'/><path stroke='#000' stroke-width='.208' d='M80.548 113h20.072V90.712H80.548z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M98.424 132.196c.98-.872 1.9-2.848 2.236-5.104l.056-14.576h-2.348l.056 19.68z'/><path stroke='#000' stroke-width='.208' d='M100.628 126.328c0 5.264-4.464 9.528-10.02 9.528-5.556 0-10.06-4.264-10.06-9.528v-13.34h20.08v13.34'/><path fill='#AD1519' fill-rule='nonzero' d='M120.76 112.988v13.34c0 5.264-4.512 9.528-10.068 9.528-5.56 0-10.064-4.264-10.064-9.528v-13.34h20.132'/><path stroke='#000' stroke-width='.208' d='M120.76 112.988v13.34c0 5.264-4.512 9.528-10.068 9.528-5.56 0-10.064-4.264-10.064-9.528v-13.34h20.132'/><path fill='#C8B100' fill-rule='nonzero' d='M104.288 123.056a.485.485 0 01.052.208c0 .244-.208.44-.468.44s-.468-.196-.468-.44c0-.072.016-.14.048-.2l-.652-.008a1.043 1.043 0 00.74 1.196v1.604l.684.004.004-1.616c.316-.104.568-.344.676-.648h1.84v-.54h-2.456zm9.032 0v.54l-1.656.008c-.024.072-.064.136-.104.2l1.92 2.184-.516.42-1.912-2.188c-.036.012-.052.024-.088.036l-.008 3.612h-.676l-.004-3.628a.265.265 0 01-.076-.036l-1.992 2.204-.516-.42 1.988-2.208a.852.852 0 01-.08-.184h-1.712v-.54h5.436-.004zm1.104 0v.54h1.844c.108.304.356.544.676.648v1.616l.684-.004v-1.604c.444-.132.764-.524.764-.988a.897.897 0 00-.024-.208h-.652a.48.48 0 01.048.208c0 .244-.208.44-.464.44-.26 0-.468-.196-.468-.44 0-.072.016-.14.048-.2l-2.456-.008zm-2.784 9.216a6.357 6.357 0 001.524-.44l.336.572a7.332 7.332 0 01-1.8.512c-.108.468-.544.816-1.068.816s-.96-.344-1.068-.808a7.231 7.231 0 01-1.892-.52l.336-.572c.516.22 1.064.364 1.632.444.124-.264.344-.464.632-.56l.004-2.8h.68l.004 2.792c.3.088.552.296.68.564zm-4.596-.94l-.336.576a7.01 7.01 0 01-1.516-1.288 1.13 1.13 0 01-1.04-.2.99.99 0 01-.12-1.456l.056-.064a6.37 6.37 0 01-.528-2l.684.004c.056.6.204 1.172.436 1.708.196-.024.4-.004.584.064l1.712-1.892.516.416-1.7 1.892c.228.348.22.8-.044 1.14.376.42.812.792 1.296 1.1zm-2.536-1.984a.484.484 0 01.66-.052c.196.16.22.44.052.624a.484.484 0 01-.66.052.427.427 0 01-.052-.624zm-.864-1.876l-.704-.156-.1-1.78.7-.232v1.024c0 .396.036.768.104 1.144zm.584-2.208l.7.164s.036 1.148.02.888c-.016-.296.076.896.076.896l-.704.232a5.707 5.707 0 01-.096-1.116l.004-1.064zm2.308 5.7c.592.46 1.276.832 2.016 1.072l.156-.68a5.727 5.727 0 01-1.668-.836l-.504.444zm-.34.584c.6.452 1.284.812 2.016 1.064l-.52.488a7.715 7.715 0 01-1.648-.844l.152-.708zm.916-3.924l.668.284 1.224-1.36-.4-.576-1.492 1.652zm-.52-.42l-.4-.58 1.224-1.36.668.288-1.492 1.652zm7.536 4.128l.332.576a6.938 6.938 0 001.52-1.288c.348.104.74.044 1.036-.2a.997.997 0 00.124-1.456l-.06-.064c.28-.624.468-1.296.528-2l-.68.004a5.598 5.598 0 01-.44 1.708 1.27 1.27 0 00-.584.064l-1.708-1.892-.516.416 1.7 1.892a.98.98 0 00.04 1.14 6.21 6.21 0 01-1.292 1.1zm2.536-1.984a.484.484 0 00-.66-.052.427.427 0 00-.052.624.484.484 0 00.66.052c.196-.16.22-.44.052-.624zm.86-1.876l.704-.156.1-1.78-.696-.232-.004 1.024c0 .396-.032.768-.104 1.144zm-.58-2.208l-.7.164s-.04 1.148-.024.888c.02-.296-.076.896-.076.896l.708.232c.068-.36.092-.736.092-1.116v-1.064zm-2.312 5.7a6.592 6.592 0 01-2.016 1.072l-.156-.68a5.678 5.678 0 001.668-.836l.504.444zm.34.584c-.6.452-1.28.812-2.016 1.064l.524.488a7.81 7.81 0 001.648-.844l-.156-.708zm-.912-3.924l-.672.284-1.224-1.36.404-.576 1.492 1.652zm.516-.42l.404-.58-1.224-1.36-.668.288 1.488 1.652zM106.2 123.6l.204.668h1.888l.2-.668H106.2zm8.808 0l-.208.668h-1.884l-.204-.668h2.296zm-4.844 9.1c0-.248.208-.448.468-.448.256 0 .468.2.468.448 0 .244-.212.44-.468.44-.26 0-.468-.196-.468-.44zm.792-3.232l.704-.196v-1.784l-.704-.192v2.172zm-.68 0l-.704-.196v-1.784l.704-.192v2.172z'/><path fill='#C8B100' fill-rule='nonzero' d='M102.8 123.072c.08-.372.372-.676.744-.788l-.004-2.2h.68v2.212c.336.108.592.352.696.672l1.828.004v.1h-2.456a.48.48 0 00-.416-.236c-.184 0-.34.1-.42.244l-.652-.008zm5.084 0v-.1h1.7a.735.735 0 01.076-.16l-2.1-2.34.516-.416 2.072 2.3a.556.556 0 01.112-.048v-3.064h.676v3.044c.032.012.076.02.108.028l2.024-2.304.52.412-2.032 2.292c.052.08.088.164.116.256h1.648v.1h-5.436zm8.996 0a.483.483 0 01.42-.236c.18 0 .34.1.416.244l.652-.008a1.068 1.068 0 00-.744-.788l.004-2.2h-.676l-.004 2.216a1.033 1.033 0 00-.692.668l-1.832.004v.1h2.456zm-12.552-6.216l2.524 2.828.516-.42-2.536-2.816c.048-.076.084-.156.116-.248h1.844v-.644h-1.844c-.144-.416-.556-.712-1.044-.712-.604 0-1.092.464-1.092 1.036 0 .452.304.84.736.98l-.004 2.18h.676v-2.168c.028-.008.08-.008.108-.016zm13.308.012l-.008 2.172h-.676v-2.18a1 1 0 01-.152-.06l-2.508 2.828-.52-.412 2.556-2.884c-.02-.04-.044-.084-.056-.132h-1.856v-.644h1.848a1.085 1.085 0 011.04-.712c.6 0 1.092.464 1.092 1.036 0 .464-.316.856-.76.988zm-6.692-.008l-.004 1.336h-.68l.004-1.324c-.34-.1-.604-.348-.716-.672h-1.652v-.644h1.652a1.084 1.084 0 011.036-.712c.488 0 .9.296 1.04.712h1.688v.644h-1.692a1.049 1.049 0 01-.676.66zm-7.396 1.624l-.704.2v1.784l.704.196v-2.18zm.684 0l.7.2v1.784l-.7.196v-2.18zm12.712 0l-.7.2v1.784l.7.196v-2.18zm.684 0l.704.2v1.784l-.704.196v-2.18zm-10.644.352l.668-.284 1.224 1.36-.4.58-1.492-1.656zm-.52.424l-.4.58 1.224 1.36.668-.288-1.492-1.652zm7.688-.476l-.672-.28-1.212 1.372.408.576 1.476-1.668zm.52.416l.408.58-1.212 1.368-.672-.28 1.476-1.668zm-8.472 3.772l.204-.668h1.888l.2.668H106.2zm-2.764-7.092c0-.244.208-.444.468-.444.256 0 .468.2.468.444a.459.459 0 01-.468.444c-.26 0-.468-.2-.468-.444zm5.04.324l-.204.668h-1.884l-.204-.668h2.292zm0-.648l-.204-.668h-1.884l-.204.668h2.292zm6.532 7.416l-.208-.668h-1.884l-.204.668h2.296zm1.828-7.092c0-.244.208-.444.468-.444.256 0 .464.2.464.444a.455.455 0 01-.464.444c-.26 0-.468-.2-.468-.444zm-6.72 0c0-.244.212-.444.468-.444.26 0 .468.2.468.444a.456.456 0 01-.468.444.459.459 0 01-.468-.444zm2.612.324l.208.668h1.884l.204-.668h-2.296zm0-.648l.208-.668h1.884l.204.668h-2.296zm-2.46 2.088l-.704.196v1.788l.704.192v-2.176zm.676 0l.7.196v1.788l-.7.192v-2.176z'/><path stroke='#C8B100' stroke-width='.104' d='M111.64 132.272a6.357 6.357 0 001.524-.44l.336.572a7.332 7.332 0 01-1.8.512c-.108.468-.544.816-1.068.816s-.96-.344-1.068-.808a7.231 7.231 0 01-1.892-.52l.336-.572c.516.22 1.064.364 1.632.444.124-.264.344-.464.632-.56l.004-2.8h.68l.004 2.792c.3.088.552.296.68.564h0zm-1.96-8.492a.86.86 0 01-.084-.184h-1.712v-.64h1.7c.02-.056.048-.108.076-.16l-2.1-2.332.516-.42 2.072 2.296a3.14 3.14 0 01.112-.048v-3.056h.676v3.04c.032.008.076.016.108.028l2.024-2.3.52.412-2.032 2.288c.052.076.088.16.116.252h1.648v.64l-1.656.008c-.024.072-.068.136-.104.2l1.92 2.188-.516.416-1.912-2.188c-.036.012-.052.028-.092.036l-.004 3.616h-.68v-3.632a.353.353 0 01-.08-.036l-1.992 2.204-.516-.416 1.992-2.212h0zm-5.352-6.928l2.524 2.82.516-.416-2.536-2.812c.048-.076.084-.156.116-.244h1.844v-.644h-1.844c-.144-.416-.556-.712-1.044-.712-.604 0-1.092.46-1.092 1.032 0 .452.304.84.736.98l-.004 2.176h.676v-2.164c.028-.008.08-.008.108-.016h0zm2.716 14.48l-.336.576a7.01 7.01 0 01-1.516-1.288 1.13 1.13 0 01-1.04-.2.99.99 0 01-.12-1.456l.056-.064a6.37 6.37 0 01-.528-2l.684.004c.056.6.204 1.172.436 1.708.196-.024.4-.004.584.064l1.712-1.892.516.416-1.7 1.892c.228.348.22.8-.044 1.14.376.42.812.792 1.296 1.1zm-3.504-5.476v-1.604c-.44-.132-.764-.524-.764-.988 0-.46.328-.86.768-.992l-.004-2.196h.68v2.208c.336.104.592.352.696.668l1.828.004v.64h-1.84c-.108.304-.36.544-.676.648l-.004 1.616-.684-.004h0zm.968 3.492a.484.484 0 01.66-.052c.196.16.22.44.052.624a.484.484 0 01-.66.052.427.427 0 01-.052-.624zm-.864-1.876l-.704-.156-.1-1.78.7-.232v1.024c0 .396.036.768.104 1.144h0zm.584-2.208l.7.164s.036 1.148.02.888c-.016-.296.076.896.076.896l-.704.232a5.707 5.707 0 01-.096-1.116l.004-1.064h0zm2.308 5.7c.592.46 1.276.832 2.016 1.072l.156-.68a5.727 5.727 0 01-1.668-.836l-.504.444h0zm-.34.584c.6.452 1.284.812 2.016 1.064l-.52.488a7.715 7.715 0 01-1.648-.844l.152-.708h0z'/><path stroke='#C8B100' stroke-width='.104' d='M107.112 127.624l.668.284 1.224-1.36-.4-.576-1.492 1.652h0zm-.52-.42l-.4-.58 1.224-1.36.668.288-1.492 1.652h0zm-3.188-3.94c0-.244.208-.444.468-.444.256 0 .464.2.464.444s-.208.44-.464.44c-.26 0-.468-.196-.468-.44zm10.724 8.068l.332.576a6.938 6.938 0 001.52-1.288c.348.104.74.044 1.036-.2a.997.997 0 00.124-1.456l-.06-.064c.28-.624.468-1.296.528-2l-.68.004a5.598 5.598 0 01-.44 1.708 1.27 1.27 0 00-.584.064l-1.708-1.892-.516.416 1.7 1.892a.98.98 0 00.04 1.14 6.21 6.21 0 01-1.292 1.1h0zm3.504-5.476l-.004-1.604c.444-.132.764-.524.764-.988 0-.46-.324-.86-.768-.992l.004-2.196h-.676l-.004 2.208a1.042 1.042 0 00-.692.668l-1.832.004v.64h1.844c.108.304.356.544.676.648v1.616l.684-.004h.004zm-.968 3.492a.484.484 0 00-.66-.052.427.427 0 00-.052.624.484.484 0 00.66.052c.196-.16.22-.44.052-.624zm.86-1.876l.704-.156.1-1.78-.696-.232-.004 1.024c0 .396-.032.768-.104 1.144h0zm-.58-2.208l-.7.164s-.04 1.148-.024.888c.02-.296-.076.896-.076.896l.708.232c.068-.36.092-.736.092-1.116v-1.064h0zm.692-8.4l-.008 2.168h-.676v-2.176a1 1 0 01-.152-.06l-2.508 2.824-.52-.412 2.556-2.88c-.02-.04-.044-.084-.056-.128h-1.856v-.644h1.848a1.085 1.085 0 011.04-.712c.6 0 1.092.46 1.092 1.032 0 .464-.316.856-.76.988h0zm-6.692-.008l-.004 1.336h-.68l.004-1.324a1.07 1.07 0 01-.716-.668h-1.652v-.644h1.652a1.084 1.084 0 011.036-.712c.488 0 .9.296 1.04.712h1.688v.644h-1.692a1.052 1.052 0 01-.676.656h0zm3.688 14.108a6.592 6.592 0 01-2.016 1.072l-.156-.68a5.678 5.678 0 001.668-.836l.504.444h0zm.34.584c-.6.452-1.28.812-2.016 1.064l.524.488a7.81 7.81 0 001.648-.844l-.156-.708h0zm-11.424-13.072l-.704.2v1.784l.704.192v-2.176h0zm.684 0l.7.2v1.784l-.7.192v-2.176h0zm12.712 0l-.7.2v1.784l.7.192v-2.176h0z'/><path stroke='#C8B100' stroke-width='.104' d='M117.628 118.476l.704.2v1.784l-.704.192v-2.176h0zm-3.568 9.148l-.672.284-1.224-1.36.404-.576 1.492 1.652h0zm.516-.42l.404-.58-1.224-1.36-.668.288 1.488 1.652h0zm-7.592-8.376l.668-.284 1.224 1.36-.4.58-1.492-1.656h0zm-.52.42l-.4.584 1.224 1.356.668-.288-1.492-1.652h0zm7.688-.472l-.672-.276-1.212 1.368.408.572 1.476-1.664h0zm.52.416l.408.576-1.212 1.368-.672-.28 1.476-1.664h0zm-8.472 3.764l.204-.668h1.888l.2.668H106.2h0zm0 .644l.204.668h1.888l.2-.668H106.2h0zm-2.764-7.724c0-.24.208-.44.468-.44.256 0 .468.2.468.44a.456.456 0 01-.468.444.454.454 0 01-.468-.444zm5.04.324l-.204.668h-1.884l-.204-.668h2.292zm0-.644l-.204-.668h-1.884l-.204.668h2.292zm8.356 7.708c0-.244.208-.444.468-.444.256 0 .464.2.464.444s-.208.44-.464.44c-.26 0-.468-.196-.468-.44zm-1.824-.308l-.208-.668h-1.884l-.204.668h2.296zm0 .644l-.208.668h-1.884l-.204-.668h2.296zm-4.844 9.1c0-.248.208-.448.468-.448.256 0 .468.2.468.448 0 .244-.212.44-.468.44-.26 0-.468-.196-.468-.44zm.792-3.232l.704-.196v-1.784l-.704-.192v2.172h0zm-.68 0l-.704-.196v-1.784l.704-.192v2.172h0zm6.56-13.592c0-.24.208-.44.468-.44.256 0 .464.2.464.44a.453.453 0 01-.464.444.454.454 0 01-.468-.444zm-6.72 0c0-.24.212-.44.468-.44.26 0 .468.2.468.44a.454.454 0 01-.468.444.456.456 0 01-.468-.444zm2.612.324l.208.668h1.884l.204-.668h-2.296 0zm0-.644l.208-.668h1.884l.204.668h-2.296 0zM110.268 117.636l-.704.2v1.784l.704.192v-2.176m.676 0l.7.2v1.784l-.7.192v-2.176'/><path fill='#058E6E' fill-rule='nonzero' d='M109.536 123.276c0-.576.492-1.04 1.096-1.04.604 0 1.092.464 1.092 1.04 0 .572-.488 1.032-1.092 1.032-.604 0-1.096-.46-1.096-1.032'/><path fill='#DB4446' fill-rule='nonzero' d='M110.872 96.204l.02-.248.036-.136s-.644.052-.984-.044a2.466 2.466 0 01-.96-.5c-.316-.272-.44-.44-.668-.472-.544-.088-.96.16-.96.16s.408.148.712.524.636.564.78.612c.236.072 1.064.02 1.288.028.228.012.736.076.736.076'/><path stroke='#000' stroke-width='.156' d='M110.872 96.204l.02-.248.036-.136s-.644.052-.984-.044a2.466 2.466 0 01-.96-.5c-.316-.272-.44-.44-.668-.472-.544-.088-.96.16-.96.16s.408.148.712.524.636.564.78.612c.236.072 1.064.02 1.288.028.228.012.736.076.736.076z'/><path fill='#ED72AA' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M113.884 95.3s.004.288.032.56c.024.268-.088.496-.044.644.044.148.064.264.12.372.056.104.084.376.084.376l-.296-.216c-.14-.108-.24-.176-.24-.176l.04.412c.016.124.088.356.204.496.116.132.348.356.42.532.072.18.056.576.056.576s-.184-.3-.348-.356c-.156-.056-.504-.248-.504-.248s.316.316.316.62c0 .3-.128.64-.128.64s-.144-.272-.332-.448c-.188-.18-.452-.36-.452-.36s.208.468.208.78c0 .316-.06.988-.06.988s-.156-.256-.316-.384c-.16-.124-.348-.232-.408-.312-.056-.084.192.256.216.464.028.204.128.94.768 1.876.376.548.956 1.508 2.2 1.192 1.244-.312.784-1.988.52-2.768-.26-.78-.392-1.644-.376-1.948.016-.3.232-1.188.204-1.356-.028-.164-.096-.8.056-1.312.16-.532.292-.74.38-.96.084-.22.156-.344.184-.536.028-.192.028-.548.028-.548s.232.424.292.576c.056.152.056.6.056.6s.044-.448.392-.668c.348-.22.752-.452.852-.576a.907.907 0 00.132-.204s-.032.768-.248 1.068c-.144.196-.708.836-.708.836s.292-.112.492-.12c.204-.016.348 0 .348 0s-.248.192-.564.656c-.32.464-.188.504-.42.888-.232.384-.42.4-.712.632-.432.348-.2 1.736-.144 1.944.06.204.812 1.904.828 2.316.012.412.084 1.332-.64 1.92-.464.38-1.228.384-1.404.492-.172.112-.516.452-.516 1.164 0 .716.256.824.46 1.004.204.176.464.08.52.22.06.136.088.216.176.3.084.08.144.176.116.328-.032.152-.364.492-.48.74-.116.244-.348.892-.348.988 0 .096-.028.396.072.548 0 0 .364.424.116.504-.16.056-.312-.1-.388-.08-.216.056-.332.188-.392.18-.144-.028-.144-.1-.16-.304-.012-.204-.004-.288-.068-.288-.088 0-.132.072-.148.18-.016.108-.016.356-.116.356s-.244-.18-.332-.22c-.088-.04-.332-.08-.348-.192-.012-.108.144-.34.304-.384.16-.04.304-.12.204-.204-.104-.08-.204-.08-.304 0-.1.084-.316.016-.304-.108.016-.124.044-.276.028-.344-.012-.068-.188-.204.04-.328.236-.124.336.108.568.068.232-.04.344-.124.432-.26.088-.136.072-.424-.088-.6-.156-.18-.316-.208-.376-.32-.056-.108-.144-.368-.144-.368s.044.48.016.548c-.028.068-.016.356-.016.356s-.156-.18-.288-.316c-.128-.136-.26-.548-.26-.548s-.012.384-.012.536c0 .148.172.288.116.344-.06.052-.332-.288-.408-.344-.072-.056-.304-.232-.404-.424-.1-.192-.176-.464-.204-.564-.028-.096-.076-.524-.028-.632.072-.16.188-.452.188-.452h-.564c-.304 0-.52-.092-.636.112-.116.204-.06.616.084 1.152.148.532.232.792.192.888-.044.096-.232.316-.304.356-.076.044-.276.028-.364-.012a1.057 1.057 0 00-.504-.108c-.276 0-.448.012-.548-.012-.104-.028-.352-.152-.468-.124-.116.028-.316.128-.26.288.088.244-.084.3-.204.288-.116-.016-.212-.056-.36-.096-.144-.044-.36 0-.332-.168.028-.164.088-.176.16-.296.072-.128.1-.208.016-.216-.1-.008-.204-.02-.28.044-.08.064-.204.204-.304.152-.104-.056-.184-.172-.184-.432 0-.256-.272-.48-.02-.468.248.012.564.192.62.052.056-.14.024-.204-.112-.312-.136-.108-.304-.172-.124-.308.18-.14.224-.14.296-.216.068-.072.164-.316.292-.256.248.12.008.292.26.568.248.276.404.376.824.332.416-.044.532-.096.532-.216 0-.116-.036-.328-.048-.416-.008-.084.06-.396.06-.396s-.192.12-.252.236c-.052.116-.168.32-.168.32s-.044-.24-.032-.436c.008-.116.048-.316.044-.356a3.412 3.412 0 00-.092-.376s-.064.292-.112.376c-.044.084-.064.428-.064.428s-.268-.232-.192-.62c.052-.3-.048-.696.044-.824.088-.132.3-.656.824-.676.52-.02.924.02 1.108.012.18-.012.824-.132.824-.132s-1.188-.608-1.456-.792c-.272-.18-.692-.652-.828-.864-.136-.216-.26-.632-.26-.632s-.212.008-.408.116a2.054 2.054 0 00-.496.396c-.112.128-.292.42-.292.42s.032-.376.032-.492c0-.116-.024-.344-.024-.344s-.132.512-.404.704c-.272.196-.588.46-.588.46s.032-.284.032-.352c0-.064.068-.396.068-.396s-.192.288-.484.344c-.296.052-.724.044-.76.224-.032.18.08.428.012.556a.658.658 0 01-.216.216s-.168-.14-.316-.152a.58.58 0 00-.284.064s-.124-.16-.076-.268c.044-.104.268-.264.216-.332-.06-.064-.24.024-.352.076-.112.056-.352.108-.328-.076.02-.18.08-.288.02-.416-.056-.128-.02-.212.072-.244.088-.032.448.008.484-.076.032-.084-.088-.192-.328-.244-.236-.056-.352-.196-.228-.312.128-.12.16-.152.216-.256.056-.108.08-.304.296-.204.212.096.168.332.396.404.224.076.756-.032.868-.096.112-.064.476-.332.6-.396.124-.06.644-.448.644-.448s-.304-.212-.42-.32c-.112-.108-.312-.364-.416-.42-.1-.052-.6-.244-.768-.256-.168-.008-.688-.192-.688-.192s.236-.076.316-.14c.076-.064.256-.224.348-.212.088.008.112.008.112.008s-.484-.02-.588-.052c-.1-.032-.396-.216-.508-.216-.112 0-.336.044-.336.044s.304-.192.552-.236c.248-.04.44-.032.44-.032s-.384-.108-.476-.232c-.088-.132-.18-.32-.248-.408-.068-.084-.112-.224-.236-.236-.124-.012-.34.152-.464.14-.124-.012-.216-.088-.228-.268-.008-.184 0-.12-.04-.216-.048-.096-.228-.32-.06-.372.172-.056.532.032.568-.032.032-.064-.192-.26-.34-.332-.148-.076-.384-.204-.26-.312.124-.104.248-.148.316-.244s.148-.364.296-.28c.144.084.348.504.464.472.112-.032.12-.332.1-.46-.024-.128 0-.352.112-.332.112.02.204.172.384.184.18.008.452-.044.428.084-.02.128-.124.284-.248.424-.12.144-.18.42-.1.6.08.184.284.476.464.592.18.116.52.204.736.34.212.14.712.536.88.58.168.044.34.128.34.128s.192-.084.452-.084.856.04 1.084-.056c.228-.096.52-.256.432-.46-.092-.204-.588-.384-.544-.544.044-.16.228-.172.532-.184.304-.008.72.056.8-.376.08-.424.104-.672-.324-.768-.432-.096-.748-.108-.828-.416-.08-.312-.156-.388-.068-.472.092-.084.248-.128.564-.148.32-.024.68-.024.784-.1.1-.072.12-.276.244-.364.124-.084.612-.16.612-.16s.584.284 1.12.684c.484.36.92.892.92.892'/><path fill='#000' fill-rule='nonzero' d='M109.72 94.996s-.068-.192-.08-.248c-.012-.052-.048-.116-.048-.116s.352 0 .34.108c-.008.108-.112.108-.136.148a.603.603 0 01-.076.108'/><path stroke='#000' stroke-width='.104' d='M109.72 94.996s-.068-.192-.08-.248c-.012-.052-.048-.116-.048-.116s.352 0 .34.108c-.008.108-.112.108-.136.148a.603.603 0 01-.076.108z'/><path fill='#000' fill-rule='nonzero' d='M111.324 94.44l-.024-.172s.308 0 .452.104c.228.16.372.408.364.42-.04.036-.216-.108-.34-.148 0 0-.092.02-.18.02-.092 0-.136-.044-.148-.084-.012-.048.012-.12.012-.12l-.136-.02'/><path stroke='#000' stroke-width='.02' d='M111.324 94.44l-.024-.172s.308 0 .452.104c.228.16.372.408.364.42-.04.036-.216-.108-.34-.148 0 0-.092.02-.18.02-.092 0-.136-.044-.148-.084-.012-.048.012-.12.012-.12l-.136-.02z'/><path stroke='#000' stroke-width='.104' d='M113.528 96.86s-.136-.192-.168-.26a2.173 2.173 0 01-.092-.192'/><path fill='#DB4446' fill-rule='nonzero' d='M105.252 94.932s.192.136.34.16c.148.02.304.02.328.02.02 0 .068-.216.044-.364-.08-.48-.52-.588-.52-.588s.132.292.068.428a1.28 1.28 0 01-.26.344'/><path stroke='#000' stroke-width='.156' d='M105.252 94.932s.192.136.34.16c.148.02.304.02.328.02.02 0 .068-.216.044-.364-.08-.48-.52-.588-.52-.588s.132.292.068.428a1.28 1.28 0 01-.26.344h0z'/><path fill='#DB4446' fill-rule='nonzero' d='M104.336 95.348s-.172-.308-.532-.268c-.36.044-.6.324-.6.324s.4-.012.5.052c.148.096.192.344.192.344s.216-.128.284-.216c.064-.084.156-.236.156-.236'/><path stroke='#000' stroke-width='.156' d='M104.336 95.348s-.172-.308-.532-.268c-.36.044-.6.324-.6.324s.4-.012.5.052c.148.096.192.344.192.344s.216-.128.284-.216c.064-.084.156-.236.156-.236h0z'/><path fill='#DB4446' fill-rule='nonzero' d='M103.896 96.6s-.308.044-.476.236c-.172.196-.144.56-.144.56s.2-.216.38-.216c.184 0 .464.064.464.064s-.088-.224-.088-.32-.136-.324-.136-.324'/><path stroke='#000' stroke-width='.156' d='M103.896 96.6s-.308.044-.476.236c-.172.196-.144.56-.144.56s.2-.216.38-.216c.184 0 .464.064.464.064s-.088-.224-.088-.32-.136-.324-.136-.324h0z'/><path fill='#000' fill-rule='nonzero' d='M109.732 96.556l.132-.212.136.196-.268.016'/><path stroke='#000' stroke-width='.104' d='M109.732 96.556l.132-.212.136.196-.268.016'/><path fill='#000' fill-rule='nonzero' d='M110.056 96.548l.16-.212.172.192-.332.02'/><path stroke='#000' stroke-width='.104' d='M110.056 96.548l.16-.212.172.192-.332.02'/><path fill='#000' fill-rule='nonzero' d='M109.912 95.232l.328.116-.296.152-.032-.268'/><path stroke='#000' stroke-width='.104' d='M109.912 95.232l.328.116-.296.152-.032-.268'/><path fill='#000' fill-rule='nonzero' d='M110.308 95.34l.292.072-.236.184-.056-.256'/><path stroke='#000' stroke-width='.104' d='M110.308 95.34l.292.072-.236.184-.056-.256'/><path stroke='#000' stroke-width='.156' d='M108.1 97.856s-.32.092-.44.268c-.148.212-.136.428-.136.428s.272-.224.624-.132c.348.096.384.132.532.12.148-.012.508-.14.508-.14s-.296.344-.26.58c.032.232.076.34.068.46-.024.288-.24.644-.24.644s.124-.076.42-.14a1.84 1.84 0 00.7-.324c.156-.116.36-.408.36-.408s-.064.4 0 .568c.068.176.092.668.092.668s.188-.168.34-.248c.076-.044.28-.152.36-.28.056-.088.128-.424.128-.424s.044.36.156.536c.112.168.28.696.28.696s.116-.344.24-.484c.124-.14.272-.32.28-.428.012-.108-.032-.34-.032-.34l.156.34m-4.564.244s.192-.332.372-.44c.184-.104.432-.296.5-.32.064-.02.36-.184.36-.184m.396 2.068s.436-.22.564-.3c.272-.16.464-.448.464-.448'/><path fill='#DB4446' fill-rule='nonzero' d='M104.924 100.648s-.168-.18-.464-.128c-.296.056-.488.388-.488.388s.252-.068.4-.032c.144.032.248.18.248.18s.136-.116.18-.18c.044-.064.124-.228.124-.228'/><path stroke='#000' stroke-width='.156' d='M104.924 100.648s-.168-.18-.464-.128c-.296.056-.488.388-.488.388s.252-.068.4-.032c.144.032.248.18.248.18s.136-.116.18-.18c.044-.064.124-.228.124-.228z'/><path fill='#DB4446' fill-rule='nonzero' d='M104.584 101.836s-.248-.04-.464.132c-.212.172-.224.5-.224.5s.204-.172.364-.148c.156.02.348.108.348.108s.032-.204.044-.256c.036-.152-.068-.336-.068-.336'/><path stroke='#000' stroke-width='.156' d='M104.584 101.836s-.248-.04-.464.132c-.212.172-.224.5-.224.5s.204-.172.364-.148c.156.02.348.108.348.108s.032-.204.044-.256c.036-.152-.068-.336-.068-.336h0z'/><path fill='#DB4446' fill-rule='nonzero' d='M105.164 102.932s-.02.316.132.512c.16.204.452.236.452.236s-.096-.212-.112-.32c-.024-.16.136-.3.136-.3s-.148-.152-.292-.152c-.148 0-.316.024-.316.024'/><path stroke='#000' stroke-width='.156' d='M105.164 102.932s-.02.316.132.512c.16.204.452.236.452.236s-.096-.212-.112-.32c-.024-.16.136-.3.136-.3s-.148-.152-.292-.152c-.148 0-.316.024-.316.024h0zM111.832 103.464s.816.504.792.924c-.024.416-.452.964-.452.964'/><path fill='#DB4446' fill-rule='nonzero' d='M108.1 105.748s-.204-.256-.484-.248c-.284.012-.58.276-.58.276s.352-.028.444.088c.092.12.18.268.18.268s.16-.084.228-.14c.068-.052.212-.244.212-.244'/><path stroke='#000' stroke-width='.156' d='M108.1 105.748s-.204-.256-.484-.248c-.284.012-.58.276-.58.276s.352-.028.444.088c.092.12.18.268.18.268s.16-.084.228-.14c.068-.052.212-.244.212-.244z'/><path fill='#DB4446' fill-rule='nonzero' d='M107.232 106.872s-.372-.056-.556.14c-.18.192-.168.544-.168.544s.224-.244.428-.224c.204.02.432.128.432.128s-.036-.212-.06-.312c-.02-.096-.076-.276-.076-.276'/><path stroke='#000' stroke-width='.156' d='M107.232 106.872s-.372-.056-.556.14c-.18.192-.168.544-.168.544s.224-.244.428-.224c.204.02.432.128.432.128s-.036-.212-.06-.312c-.02-.096-.076-.276-.076-.276h0z'/><path fill='#DB4446' fill-rule='nonzero' d='M108.036 108.06s-.184.256-.048.46c.136.204.42.3.42.3s-.104-.148-.056-.32c.036-.136.268-.32.268-.32l-.584-.12'/><path stroke='#000' stroke-width='.156' d='M108.036 108.06s-.184.256-.048.46c.136.204.42.3.42.3s-.104-.148-.056-.32c.036-.136.268-.32.268-.32l-.584-.12z'/><path fill='#DB4446' fill-rule='nonzero' d='M112.996 108.544s-.324-.076-.508.032c-.18.104-.328.556-.328.556s.296-.248.512-.216c.212.032.372.12.372.12s.032-.184.008-.312c-.012-.076-.056-.18-.056-.18'/><path stroke='#000' stroke-width='.156' d='M112.996 108.544s-.324-.076-.508.032c-.18.104-.328.556-.328.556s.296-.248.512-.216c.212.032.372.12.372.12s.032-.184.008-.312c-.012-.076-.056-.18-.056-.18h0z'/><path fill='#DB4446' fill-rule='nonzero' d='M113.156 109.74s-.248.256-.16.472c.092.216.248.44.248.44s-.008-.32.092-.408c.148-.128.42-.148.42-.148s-.216-.192-.284-.216c-.068-.02-.316-.14-.316-.14'/><path stroke='#000' stroke-width='.156' d='M113.156 109.74s-.248.256-.16.472c.092.216.248.44.248.44s-.008-.32.092-.408c.148-.128.42-.148.42-.148s-.216-.192-.284-.216c-.068-.02-.316-.14-.316-.14z'/><path fill='#DB4446' fill-rule='nonzero' d='M114.4 110.116s-.124.312.112.512c.236.208.444.228.444.228s-.184-.324-.128-.492a.634.634 0 01.216-.288s-.296-.1-.34-.088c-.044.008-.304.128-.304.128'/><path stroke='#000' stroke-width='.156' d='M114.4 110.116s-.124.312.112.512c.236.208.444.228.444.228s-.184-.324-.128-.492a.634.634 0 01.216-.288s-.296-.1-.34-.088c-.044.008-.304.128-.304.128h0z'/><path fill='#FFD691' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M101.664 132.32c.836.252 1.26.876 1.26 1.604 0 .952-.92 1.672-2.12 1.672-1.196 0-2.168-.72-2.168-1.672 0-.716.4-1.52 1.232-1.576 0 0-.024-.076-.096-.2l-.256-.264s.316-.06.5.008c.184.072.308.188.308.188s.084-.172.208-.304c.12-.132.28-.212.28-.212s.184.152.244.256c.06.108.1.236.1.236s.168-.14.316-.196c.148-.06.336-.104.336-.104s-.052.184-.088.276c-.036.092-.056.288-.056.288'/><path fill='#058E6E' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M100.628 136.628s-1.592-1.072-2.28-1.216c-.884-.188-1.876-.036-2.304-.06.012.012.516.372.736.592.22.22.956.66 1.372.764 1.288.324 2.476-.08 2.476-.08M101.084 136.724s1.016-1.064 2.084-1.208c1.26-.176 2.088.104 2.576.232.012 0-.404.196-.624.348-.22.148-.788.628-1.656.636-.872.012-1.832-.092-1.988-.068l-.392.06'/><path fill='#AD1519' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M100.776 135.412a2.023 2.023 0 01.004-2.972 2.032 2.032 0 01-.004 2.972'/><path fill='#058E6E' fill-rule='nonzero' stroke='#000' stroke-width='.208' d='M100.372 137.584s.244-.608.268-1.132c.024-.436-.06-.868-.06-.868h.32s.156.464.156.868c0 .408-.072.948-.072.948s-.22.032-.292.068c-.076.036-.32.116-.32.116'/><path fill='#FFF' fill-rule='nonzero' d='M120.5 79.968c0-.228.2-.412.44-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416c-.24 0-.44-.184-.44-.416'/><path stroke='#000' stroke-width='.156' d='M120.5 79.968c0-.228.2-.412.44-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416c-.24 0-.44-.184-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M121.1 78.908c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.425.425 0 01-.436.416.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M121.1 78.908c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.425.425 0 01-.436.416.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M121.5 77.676c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M121.5 77.676c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M121.552 76.356c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M121.552 76.356c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M121.228 75.06c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M121.228 75.06c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M120.552 73.88c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M120.552 73.88c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M119.652 72.908c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M119.652 72.908c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M118.604 72.104c0-.228.2-.416.44-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416'/><path stroke='#000' stroke-width='.156' d='M118.604 72.104c0-.228.2-.416.44-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M117.356 71.444c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M117.356 71.444c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M116.06 70.976c0-.228.196-.416.44-.416.24 0 .44.188.44.416 0 .228-.2.416-.44.416a.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M116.06 70.976c0-.228.196-.416.44-.416.24 0 .44.188.44.416 0 .228-.2.416-.44.416a.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M114.612 70.716c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M114.612 70.716c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M113.236 70.644c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M113.236 70.644c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M111.888 70.692c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M111.888 70.692c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M110.54 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M110.54 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M111.212 71.848c0-.228.2-.416.44-.416.244 0 .436.188.436.416a.425.425 0 01-.436.416c-.24 0-.44-.188-.44-.416M111.488 73.128c0-.232.196-.416.44-.416.24 0 .436.184.436.416 0 .228-.196.412-.436.412-.244 0-.44-.184-.44-.412M111.536 74.4c0-.228.2-.416.44-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416M111.14 75.56c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416M110.392 76.628c0-.232.196-.416.44-.416.24 0 .436.184.436.416 0 .228-.196.412-.436.412-.244 0-.44-.184-.44-.412'/><path fill='#FFF' fill-rule='nonzero' d='M109.516 69.888c0-.228.2-.412.44-.412.244 0 .44.184.44.412a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416'/><path stroke='#000' stroke-width='.156' d='M109.516 69.888c0-.228.2-.412.44-.412.244 0 .44.184.44.412a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M108.32 69.224c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M108.32 69.224c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M106.996 68.828c0-.232.2-.416.44-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416'/><path stroke='#000' stroke-width='.156' d='M106.996 68.828c0-.232.2-.416.44-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M105.624 68.592c0-.228.196-.416.436-.416.244 0 .44.188.44.416 0 .228-.196.412-.44.412-.24 0-.436-.184-.436-.412'/><path stroke='#000' stroke-width='.156' d='M105.624 68.592c0-.228.196-.416.436-.416.244 0 .44.188.44.416 0 .228-.196.412-.44.412-.24 0-.436-.184-.436-.412z'/><path fill='#FFF' fill-rule='nonzero' d='M104.28 68.612c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M104.28 68.612c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M102.88 68.848c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M102.88 68.848c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M101.584 69.296c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M101.584 69.296c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M79.636 79.968c0-.228.196-.412.44-.412.24 0 .436.184.436.412a.425.425 0 01-.436.416.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M79.636 79.968c0-.228.196-.412.44-.412.24 0 .436.184.436.412a.425.425 0 01-.436.416.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M79.036 78.908c0-.228.196-.416.44-.416.24 0 .44.188.44.416 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M79.036 78.908c0-.228.196-.416.44-.416.24 0 .44.188.44.416 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M78.636 77.676c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M78.636 77.676c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M78.588 76.356c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M78.588 76.356c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M78.912 75.06c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M78.912 75.06c0-.232.196-.416.436-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M79.584 73.88c0-.232.2-.416.44-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416'/><path stroke='#000' stroke-width='.156' d='M79.584 73.88c0-.232.2-.416.44-.416.244 0 .44.184.44.416a.429.429 0 01-.44.416c-.24 0-.44-.188-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M80.484 72.908c0-.228.2-.416.44-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416c-.24 0-.44-.184-.44-.416'/><path stroke='#000' stroke-width='.156' d='M80.484 72.908c0-.228.2-.416.44-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416c-.24 0-.44-.184-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M81.532 72.104c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M81.532 72.104c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M82.78 71.444c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M82.78 71.444c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M84.076 70.976c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M84.076 70.976c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M85.528 70.716c0-.228.196-.416.436-.416s.44.188.44.416c0 .228-.2.416-.44.416a.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M85.528 70.716c0-.228.196-.416.436-.416s.44.188.44.416c0 .228-.2.416-.44.416a.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M86.9 70.644c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M86.9 70.644c0-.228.196-.412.44-.412.24 0 .44.184.44.412 0 .232-.2.416-.44.416a.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M88.252 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M88.252 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M89.6 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M89.6 70.692c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.429.429 0 01-.44.416.428.428 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' stroke='#000' stroke-width='.156' d='M88.924 71.848c0-.228.196-.416.44-.416.24 0 .44.188.44.416 0 .228-.2.416-.44.416a.429.429 0 01-.44-.416M88.652 73.128c0-.232.192-.416.436-.416s.44.184.44.416c0 .228-.196.412-.44.412a.422.422 0 01-.436-.412M88.6 74.4c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416M89 75.56c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416M89.744 76.628c0-.232.2-.416.44-.416.244 0 .44.184.44.416 0 .228-.196.412-.44.412-.24 0-.44-.184-.44-.412'/><path fill='#FFF' fill-rule='nonzero' d='M90.62 69.888c0-.228.196-.412.44-.412.24 0 .436.184.436.412a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M90.62 69.888c0-.228.196-.412.44-.412.24 0 .436.184.436.412a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M91.82 69.224c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M91.82 69.224c0-.228.196-.416.436-.416.244 0 .44.188.44.416a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M93.14 68.828c0-.232.196-.416.44-.416.24 0 .436.184.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M93.14 68.828c0-.232.196-.416.44-.416.24 0 .436.184.436.416a.428.428 0 01-.436.416.429.429 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M94.516 68.592c0-.228.196-.416.436-.416.244 0 .44.188.44.416 0 .228-.196.412-.44.412-.24 0-.436-.184-.436-.412'/><path stroke='#000' stroke-width='.156' d='M94.516 68.592c0-.228.196-.416.436-.416.244 0 .44.188.44.416 0 .228-.196.412-.44.412-.24 0-.436-.184-.436-.412z'/><path fill='#FFF' fill-rule='nonzero' d='M95.86 68.612c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.425.425 0 01-.436.416.426.426 0 01-.44-.416'/><path stroke='#000' stroke-width='.156' d='M95.86 68.612c0-.228.196-.416.44-.416.24 0 .436.188.436.416a.425.425 0 01-.436.416.426.426 0 01-.44-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M97.26 68.848c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M97.26 68.848c0-.228.196-.412.436-.412.244 0 .44.184.44.412a.426.426 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#FFF' fill-rule='nonzero' d='M98.556 69.296c0-.228.192-.416.436-.416s.44.188.44.416a.429.429 0 01-.44.416.425.425 0 01-.436-.416'/><path stroke='#000' stroke-width='.156' d='M98.556 69.296c0-.228.192-.416.436-.416s.44.188.44.416a.429.429 0 01-.44.416.425.425 0 01-.436-.416z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.184' d='M87.436 95.864h-.368v-.368h-.648v1.476h.648v1.02H85.68v2.956h.74v5.916h-1.48v3.052h11.368v-3.052h-1.476v-5.916h.74v-2.956h-1.388v-1.02h.648v-1.476h-.648v.368h-.372v-.368h-.644v.368h-.464v-.368h-.648v1.476h.648v1.02H91.32v-3.236h.736v-1.48h-.736v.372h-.372v-.372H90.3v.372h-.368v-.372h-.74v1.48h.74v3.236h-1.388v-1.02h.648v-1.476h-.648v.368h-.368v-.368h-.74v.368h0zm-2.496 14.052h11.368H84.94zm0-.74h11.368H84.94zm0-.74h11.368H84.94zm0-.74h11.368H84.94zm0-.832h11.368H84.94zm1.48-.648h8.412-8.412zm0-.74h8.412-8.412zm0-.832h8.412-8.412zm0-.736h8.412-8.412zm0-.74h8.412-8.412zm0-.74h8.412-8.412zm0-.74h8.412-8.412zm-.74-.74h9.892-9.892zm0-.74h9.892-9.892zm0-.74h9.892-9.892zm0-.736h9.892-9.892zm1.388-.74h7.116-7.116zm2.864-.74h1.388-1.388zm0-.74h1.388-1.388zm0-.74h1.388-1.388zm0-.74h1.388-1.388zm-.74-.924h2.864-2.864zm-2.124 3.144h1.476-1.476zm-.648-.924h2.772-2.772zm0 13.588v-.74.74zm0-1.48v-.74.74zm-.74 0v.74-.74zm1.388.74v-.74.74zm.736.74v-.74.74zm0-1.48v-.74.74zm0-1.572v-.648.648zm0-1.388v-.832.832zm-.736 2.22v-.832.832zm-1.388 0v-.832.832zm2.864-.832v.832-.832zm.648 0v-.648.648zm-2.124-1.388v.74-.74zm1.476 0v.74-.74zm1.388 0v.74-.74zm-.74 0v-.832.832zm.74-1.568v.736-.736zm0-1.48v.74-.74zm-.74-.74v.74-.74zm.74-.74v.74-.74zm-1.388 0v.74-.74zm-1.476 0v.74-.74zm-.648-.74v.74-.74zm1.384 0v.74-.74zm1.388 0v.74-.74zm.74-.74v.74-.74zm-1.388 0v.74-.74zm-1.476 0v.74-.74zm-.648-.736v.736-.736zm2.772 0v.736-.736zm-1.388-1.48v.74-.74zm6.38 0h-1.48 1.48zm.648-.924h-2.776 2.776zm0 13.588v-.74.74zm0-1.48v-.74.74zm.74 0v.74-.74zm-1.388.74v-.74.74zm-.74.74v-.74.74zm0-1.48v-.74.74zm0-1.572v-.648.648zm0-1.388v-.832.832zm.74 2.22v-.832.832zm1.388 0v-.832.832zm-2.868-.832v.832-.832zm-.648 0v-.648.648zm2.128-1.388v.74-.74zm-1.48 0v.74-.74zm-1.384 0v.74-.74zm.736 0v-.832.832zm-.736-1.568v.736-.736zm0-1.48v.74-.74zm.736-.74v.74-.74zm-.736-.74v.74-.74zm1.384 0v.74-.74zm1.48 0v.74-.74zm.648-.74v.74-.74zm-1.388 0v.74-.74zm-1.388 0v.74-.74zm-.736-.74v.74-.74zm1.384 0v.74-.74zm1.48 0v.74-.74zm.648-.736v.736-.736zm-2.776 0v.736-.736zm1.388-1.48v.74-.74zm-2.864 8.224v-.832.832zm0-3.048v-.74.74zm0 1.48v-.74.74zm0-2.96v-.74.74zm0-1.48v-.736.736zm0-2.216v-.74.74zm0-1.48v-.74.74zm-3.512 1.2h1.476-1.476zm2.864-2.216h1.388-1.388zm2.772 2.216h1.48-1.48z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.184' d='M92.52 109.916v-1.944c0-.368-.184-1.48-1.94-1.48-1.664 0-1.848 1.112-1.848 1.48v1.944h3.788z'/><path fill='#C8B100' fill-rule='nonzero' stroke='#000' stroke-width='.184' d='M89.376 108.064l-.924-.092c0-.368.092-.924.372-1.108l.832.648c-.092.092-.28.368-.28.552zM91.872 108.064l.924-.092c0-.368-.092-.924-.368-1.108l-.832.648c.092.092.276.368.276.552zM90.948 107.14l.464-.832a2.219 2.219 0 00-.832-.184c-.184 0-.556.092-.74.184l.46.832h.648zM89.192 104.832v-2.036c0-.552-.368-1.016-1.016-1.016s-1.016.464-1.016 1.016v2.036h2.032zM92.056 104.832v-2.036c0-.552.372-1.016 1.02-1.016.644 0 1.016.464 1.016 1.016v2.036h-2.036zM91.32 99.84l.184-1.848h-1.756l.092 1.848zM92.704 99.84l-.184-1.848h1.848l-.184 1.848zM88.544 99.84l.092-1.848H86.88l.188 1.848z'/><path fill='#0039F0' fill-rule='nonzero' d='M91.872 109.916v-1.664c0-.28-.184-1.112-1.292-1.112-1.016 0-1.204.832-1.204 1.112v1.664h2.496zM89.008 104.644v-1.756c0-.46-.276-.924-.832-.924-.556 0-.832.464-.832.924v1.756h1.664zM92.244 104.644v-1.756c0-.46.276-.924.832-.924.552 0 .832.464.832.924v1.756h-1.664z'/><path fill='#AD1519' fill-rule='nonzero' d='M94.172 112.904c0-4.044 2.908-7.32 6.5-7.32s6.504 3.276 6.504 7.32c0 4.04-2.912 7.316-6.504 7.316-3.592 0-6.5-3.276-6.5-7.316'/><path stroke='#000' stroke-width='.244' d='M94.172 112.904c0-4.044 2.908-7.32 6.5-7.32s6.504 3.276 6.504 7.32c0 4.04-2.912 7.316-6.504 7.316-3.592 0-6.5-3.276-6.5-7.316h0z'/><path fill='#005BBF' fill-rule='nonzero' d='M96.1 112.888c0-2.964 2.048-5.364 4.576-5.364 2.524 0 4.572 2.4 4.572 5.364s-2.048 5.368-4.572 5.368c-2.528 0-4.576-2.404-4.576-5.368'/><path stroke='#000' stroke-width='.244' d='M96.1 112.888c0-2.964 2.048-5.364 4.576-5.364 2.524 0 4.572 2.4 4.572 5.364s-2.048 5.368-4.572 5.368c-2.528 0-4.576-2.404-4.576-5.368z'/><path fill='#C8B100' fill-rule='nonzero' d='M98.512 109.196s-.54.592-.54 1.144c0 .556.228 1.016.228 1.016a.598.598 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .088.056.232.096.308l.196.396c.064-.148.216-.228.392-.228.236 0 .432.18.432.404a.276.276 0 01-.016.1l-.488.004v.412h.436l-.324.644.428-.168.324.364.336-.364.428.168-.32-.644h.432v-.412l-.488-.004c-.008-.032-.008-.064-.008-.1 0-.224.188-.404.424-.404.176 0 .328.08.392.228l.196-.396a.839.839 0 00.096-.308.582.582 0 00-.596-.568.59.59 0 00-.564.376s.228-.46.228-1.016c0-.552-.556-1.144-.556-1.144'/><path stroke='#000' stroke-linejoin='round' stroke-width='.136' d='M98.512 109.196s-.54.592-.54 1.144c0 .556.228 1.016.228 1.016a.598.598 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .088.056.232.096.308l.196.396c.064-.148.216-.228.392-.228.236 0 .432.18.432.404a.276.276 0 01-.016.1l-.488.004v.412h.436l-.324.644.428-.168.324.364.336-.364.428.168-.32-.644h.432v-.412l-.488-.004c-.008-.032-.008-.064-.008-.1 0-.224.188-.404.424-.404.176 0 .328.08.392.228l.196-.396a.839.839 0 00.096-.308.582.582 0 00-.596-.568.59.59 0 00-.564.376s.228-.46.228-1.016c0-.552-.556-1.144-.556-1.144h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M97.648 112.944h1.744v-.412h-1.744z'/><path stroke='#000' stroke-width='.136' d='M97.648 112.944h1.744v-.412h-1.744z'/><path fill='#C8B100' fill-rule='nonzero' d='M102.764 109.196s-.54.592-.54 1.144c0 .556.228 1.016.228 1.016a.598.598 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .088.056.232.096.308l.196.396c.064-.148.216-.228.392-.228.24 0 .428.18.428.404a.403.403 0 01-.012.1l-.488.004v.412h.436l-.324.644.428-.168.324.364.336-.364.428.168-.324-.644h.436v-.412l-.488-.004a.403.403 0 01-.012-.1c0-.224.192-.404.428-.404.176 0 .328.08.392.228l.196-.396a.839.839 0 00.096-.308.582.582 0 00-.596-.568.603.603 0 00-.568.376s.232-.46.232-1.016c0-.552-.556-1.144-.556-1.144'/><path stroke='#000' stroke-linejoin='round' stroke-width='.136' d='M102.764 109.196s-.54.592-.54 1.144c0 .556.228 1.016.228 1.016a.598.598 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .088.056.232.096.308l.196.396c.064-.148.216-.228.392-.228.24 0 .428.18.428.404a.403.403 0 01-.012.1l-.488.004v.412h.436l-.324.644.428-.168.324.364.336-.364.428.168-.324-.644h.436v-.412l-.488-.004a.403.403 0 01-.012-.1c0-.224.192-.404.428-.404.176 0 .328.08.392.228l.196-.396a.839.839 0 00.096-.308.582.582 0 00-.596-.568.603.603 0 00-.568.376s.232-.46.232-1.016c0-.552-.556-1.144-.556-1.144h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M101.9 112.944h1.74v-.412h-1.74z'/><path stroke='#000' stroke-width='.136' d='M101.9 112.944h1.74v-.412h-1.74z'/><path fill='#C8B100' fill-rule='nonzero' d='M100.64 112.852s-.544.596-.544 1.148c0 .552.228 1.012.228 1.012a.6.6 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .092.056.232.1.312l.192.392c.068-.144.216-.228.396-.228.236 0 .428.18.428.408a.276.276 0 01-.016.1h-.484v.416h.436l-.324.64.428-.168.324.364.336-.364.428.168-.328-.64h.44v-.416h-.488a.414.414 0 01.416-.508c.176 0 .324.084.392.228l.196-.392c.04-.08.096-.22.096-.312 0-.316-.268-.568-.6-.568-.26 0-.48.16-.564.376 0 0 .228-.46.228-1.012s-.556-1.148-.556-1.148'/><path stroke='#000' stroke-linejoin='round' stroke-width='.136' d='M100.64 112.852s-.544.596-.544 1.148c0 .552.228 1.012.228 1.012a.6.6 0 00-.564-.376c-.332 0-.6.252-.6.568 0 .092.056.232.1.312l.192.392c.068-.144.216-.228.396-.228.236 0 .428.18.428.408a.276.276 0 01-.016.1h-.484v.416h.436l-.324.64.428-.168.324.364.336-.364.428.168-.328-.64h.44v-.416h-.488a.414.414 0 01.416-.508c.176 0 .324.084.392.228l.196-.392c.04-.08.096-.22.096-.312 0-.316-.268-.568-.6-.568-.26 0-.48.16-.564.376 0 0 .228-.46.228-1.012s-.556-1.148-.556-1.148h.004z'/><path fill='#C8B100' fill-rule='nonzero' d='M99.776 116.604h1.74v-.416h-1.74z'/><path stroke='#000' stroke-width='.136' d='M99.776 116.604h1.74v-.416h-1.74z'/><path fill='#C8B100' fill-rule='nonzero' d='M113.652 93.584l-.116.008a.597.597 0 01-.104.14c-.104.1-.26.112-.344.028a.194.194 0 01-.056-.164.197.197 0 01-.204-.004c-.104-.06-.128-.2-.056-.316.012-.024.024-.056.044-.072l-.008-.128-.14.032-.04.076c-.088.1-.216.124-.28.068a.21.21 0 01-.052-.108.148.148 0 01-.068.044c-.216.052-.3-.42-.308-.54l-.068.1s.064.28.032.52a2.81 2.81 0 01-.116.476c.296.076.744.32 1.188.66.444.34.792.712.936.968 0 0 .232-.128.472-.204.24-.076.544-.08.544-.08l.088-.084c-.128.02-.632.04-.624-.172 0-.032.028-.072.032-.072a.279.279 0 01-.12-.024c-.072-.052-.072-.172.008-.276l.072-.052.004-.136-.136.02c-.012.016-.044.036-.06.052-.108.092-.26.1-.344.012a.167.167 0 01-.044-.184.232.232 0 01-.18-.02c-.104-.06-.124-.208-.044-.32a.534.534 0 01.124-.128l-.028-.12'/><path stroke='#000' stroke-width='.104' d='M113.652 93.584l-.116.008a.597.597 0 01-.104.14c-.104.1-.26.112-.344.028a.194.194 0 01-.056-.164.197.197 0 01-.204-.004c-.104-.06-.128-.2-.056-.316.012-.024.024-.056.044-.072l-.008-.128-.14.032-.04.076c-.088.1-.216.124-.28.068a.21.21 0 01-.052-.108.148.148 0 01-.068.044c-.216.052-.3-.42-.308-.54l-.068.1s.064.28.032.52a2.81 2.81 0 01-.116.476c.296.076.744.32 1.188.66.444.34.792.712.936.968 0 0 .232-.128.472-.204.24-.076.544-.08.544-.08l.088-.084c-.128.02-.632.04-.624-.172 0-.032.028-.072.032-.072a.279.279 0 01-.12-.024c-.072-.052-.072-.172.008-.276l.072-.052.004-.136-.136.02c-.012.016-.044.036-.06.052-.108.092-.26.1-.344.012a.167.167 0 01-.044-.184.232.232 0 01-.18-.02c-.104-.06-.124-.208-.044-.32a.534.534 0 01.124-.128l-.028-.12h-.004 0z'/><path fill='#000' fill-rule='nonzero' d='M112.752 93.86c.02-.028.06-.024.092 0s.04.064.024.084c-.02.024-.06.024-.096-.004-.028-.02-.04-.06-.02-.08'/><path stroke='#000' stroke-width='.02' d='M112.752 93.86c.02-.028.06-.024.092 0s.04.064.024.084c-.02.024-.06.024-.096-.004-.028-.02-.04-.06-.02-.08h0z'/><path fill='#000' fill-rule='nonzero' d='M113.132 94.176l-.132-.1c-.024-.016-.028-.048-.016-.064.016-.016.048-.016.072 0l.132.104.132.1c.02.016.032.048.016.064s-.048.016-.072 0l-.132-.104'/><path stroke='#000' stroke-width='.02' d='M113.132 94.176l-.132-.1c-.024-.016-.028-.048-.016-.064.016-.016.048-.016.072 0l.132.104.132.1c.02.016.032.048.016.064s-.048.016-.072 0l-.132-.104'/><path fill='#000' fill-rule='nonzero' d='M112.436 93.7l-.104-.06c-.028-.016-.04-.048-.028-.068.012-.02.044-.024.068-.008l.104.064.104.06c.024.012.036.044.028.064-.012.02-.044.024-.068.008l-.104-.06'/><path stroke='#000' stroke-width='.02' d='M112.436 93.7l-.104-.06c-.028-.016-.04-.048-.028-.068.012-.02.044-.024.068-.008l.104.064.104.06c.024.012.036.044.028.064-.012.02-.044.024-.068.008l-.104-.06'/><path fill='#000' fill-rule='nonzero' d='M112.02 93.416c.02-.024.064-.024.096 0 .032.028.04.064.02.088-.02.02-.06.02-.092-.004s-.04-.06-.024-.084'/><path stroke='#000' stroke-width='.02' d='M112.02 93.416c.02-.024.064-.024.096 0 .032.028.04.064.02.088-.02.02-.06.02-.092-.004s-.04-.06-.024-.084h0z'/><path fill='#000' fill-rule='nonzero' d='M113.552 94.468c.02-.02.012-.056-.02-.084-.032-.024-.076-.024-.096 0-.016.02-.008.06.024.084.032.024.072.024.092 0'/><path stroke='#000' stroke-width='.02' d='M113.552 94.468c.02-.02.012-.056-.02-.084-.032-.024-.076-.024-.096 0-.016.02-.008.06.024.084.032.024.072.024.092 0h0z'/><path fill='#000' fill-rule='nonzero' d='M113.78 94.732l.088.084c.02.02.052.028.072.012.016-.016.016-.044-.004-.064l-.084-.084-.088-.084c-.02-.02-.056-.028-.072-.012-.02.012-.016.044.004.064l.084.084'/><path stroke='#000' stroke-width='.02' d='M113.78 94.732l.088.084c.02.02.052.028.072.012.016-.016.016-.044-.004-.064l-.084-.084-.088-.084c-.02-.02-.056-.028-.072-.012-.02.012-.016.044.004.064l.084.084'/><path fill='#000' fill-rule='nonzero' d='M114.16 95.056c.02-.024.012-.06-.02-.084-.032-.028-.072-.028-.092-.004-.02.024-.012.06.02.088.032.02.072.024.092 0'/><path stroke='#000' stroke-width='.02' d='M114.16 95.056c.02-.024.012-.06-.02-.084-.032-.028-.072-.028-.092-.004-.02.024-.012.06.02.088.032.02.072.024.092 0z'/><path fill='#C8B100' fill-rule='nonzero' d='M113.06 92.644l-.236.004-.044.348.024.056.06-.004.304-.204-.108-.2'/><path stroke='#000' stroke-width='.104' d='M113.06 92.644l-.236.004-.044.348.024.056.06-.004.304-.204-.108-.2'/><path fill='#C8B100' fill-rule='nonzero' d='M112.42 92.836l-.008.216.368.048.06-.028-.008-.06-.212-.284-.2.108'/><path stroke='#000' stroke-width='.104' d='M112.42 92.836l-.008.216.368.048.06-.028-.008-.06-.212-.284-.2.108'/><path fill='#C8B100' fill-rule='nonzero' d='M113.18 93.268l-.196.108-.216-.284-.004-.06.056-.024.372.044-.012.216'/><path stroke='#000' stroke-width='.104' d='M113.18 93.268l-.196.108-.216-.284-.004-.06.056-.024.372.044-.012.216'/><path fill='#C8B100' fill-rule='nonzero' d='M112.704 93a.115.115 0 01.156-.036.103.103 0 01.04.148.115.115 0 01-.156.036.104.104 0 01-.04-.148'/><path stroke='#000' stroke-width='.104' d='M112.704 93a.115.115 0 01.156-.036.103.103 0 01.04.148.115.115 0 01-.156.036.104.104 0 01-.04-.148z'/><path fill='#C8B100' fill-rule='nonzero' d='M111.844 92.64c-.008.004-.052-.184-.104-.284a.621.621 0 00-.156-.172c.012-.02.168-.076.348.036.152.124-.012.348-.012.348s-.036.056-.076.072'/><path stroke='#000' stroke-width='.104' d='M111.844 92.64c-.008.004-.052-.184-.104-.284a.621.621 0 00-.156-.172c.012-.02.168-.076.348.036.152.124-.012.348-.012.348s-.036.056-.076.072h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M112.256 92.764l-.168.148-.272-.24.024-.032.012-.06.368-.028.036.212'/><path stroke='#000' stroke-width='.104' d='M112.256 92.764l-.168.148-.272-.24.024-.032.012-.06.368-.028.036.212'/><path fill='#C8B100' fill-rule='nonzero' d='M111.796 92.616c.02-.06.072-.092.112-.08.044.016.06.072.04.132-.02.06-.072.092-.116.08-.044-.016-.06-.072-.036-.132'/><path stroke='#000' stroke-width='.104' d='M111.796 92.616c.02-.06.072-.092.112-.08.044.016.06.072.04.132-.02.06-.072.092-.116.08-.044-.016-.06-.072-.036-.132z'/><path fill='#C8B100' fill-rule='nonzero' d='M113.968 93.208l-.236-.024-.1.34.02.056.06.004.332-.164-.076-.212'/><path stroke='#000' stroke-width='.104' d='M113.968 93.208l-.236-.024-.1.34.02.056.06.004.332-.164-.076-.212'/><path fill='#C8B100' fill-rule='nonzero' d='M113.304 93.312l-.04.216.36.092.06-.016.004-.056-.172-.316-.212.08'/><path stroke='#000' stroke-width='.104' d='M113.304 93.312l-.04.216.36.092.06-.016.004-.056-.172-.316-.212.08'/><path fill='#C8B100' fill-rule='nonzero' d='M113.992 93.844l-.212.08-.168-.312.004-.06.06-.012.356.092-.04.212'/><path stroke='#000' stroke-width='.104' d='M113.992 93.844l-.212.08-.168-.312.004-.06.06-.012.356.092-.04.212'/><path fill='#C8B100' fill-rule='nonzero' d='M113.56 93.516a.118.118 0 01.16-.016c.052.036.06.104.02.152-.04.048-.112.052-.164.016a.104.104 0 01-.016-.152'/><path stroke='#000' stroke-width='.104' d='M113.56 93.516a.118.118 0 01.16-.016c.052.036.06.104.02.152-.04.048-.112.052-.164.016a.104.104 0 01-.016-.152h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M114.756 93.944l.044.22-.348.12-.064-.016-.004-.056.144-.324.228.056'/><path stroke='#000' stroke-width='.104' d='M114.756 93.944l.044.22-.348.12-.064-.016-.004-.056.144-.324.228.056'/><path fill='#C8B100' fill-rule='nonzero' d='M114.696 94.58l-.224.052-.124-.332.016-.06.06-.008.34.14-.068.208'/><path stroke='#000' stroke-width='.104' d='M114.696 94.58l-.224.052-.124-.332.016-.06.06-.008.34.14-.068.208'/><path fill='#C8B100' fill-rule='nonzero' d='M114.088 93.964l-.072.208.34.136.064-.008.012-.056-.12-.332-.224.052'/><path stroke='#000' stroke-width='.104' d='M114.088 93.964l-.072.208.34.136.064-.008.012-.056-.12-.332-.224.052'/><path fill='#C8B100' fill-rule='nonzero' d='M114.464 94.352a.109.109 0 00.008-.156.127.127 0 00-.164-.008c-.044.044-.048.112-.004.156.04.044.116.048.16.008'/><path stroke='#000' stroke-width='.104' d='M114.464 94.352a.109.109 0 00.008-.156.127.127 0 00-.164-.008c-.044.044-.048.112-.004.156.04.044.116.048.16.008h0z'/><path fill='#C8B100' fill-rule='nonzero' d='M115.016 95.072c0 .004.2.012.316.036.08.016.208.108.208.108.024-.016.048-.168-.112-.316-.156-.112-.352.088-.352.088s-.048.048-.06.084'/><path stroke='#000' stroke-width='.104' d='M115.016 95.072c0 .004.2.012.316.036.08.016.208.108.208.108.024-.016.048-.168-.112-.316-.156-.112-.352.088-.352.088s-.048.048-.06.084z'/><path fill='#C8B100' fill-rule='nonzero' d='M114.8 94.716l-.116.184.304.204.036-.032.052-.016-.048-.352-.228.012'/><path stroke='#000' stroke-width='.104' d='M114.8 94.716l-.116.184.304.204.036-.032.052-.016-.048-.352-.228.012'/><path fill='#C8B100' fill-rule='nonzero' d='M115.048 95.112c.056-.028.084-.088.06-.124-.024-.036-.088-.04-.144-.008-.056.032-.08.088-.056.124.02.036.084.04.14.008'/><path stroke='#000' stroke-width='.104' d='M115.048 95.112c.056-.028.084-.088.06-.124-.024-.036-.088-.04-.144-.008-.056.032-.08.088-.056.124.02.036.084.04.14.008z'/><path stroke='#000' stroke-width='.12' d='M130.952 85.956v.232h-1.012v-.232h.376v-.52h-.248v-.232h.248v-.232h.244v.232h.244v.232h-.244v.52h.392'/><path stroke='#000' stroke-width='.008' d='M70.676 90.96v-.508'/><path stroke='#000' stroke-width='.012' d='M70.536 90.96v-.508'/><path stroke='#000' stroke-width='.016' d='M70.408 90.96v-.508M70.276 90.96v-.508'/><path stroke='#000' stroke-width='.02' d='M70.164 90.96v-.508'/><path stroke='#000' stroke-width='.024' d='M69.944 90.932l-.004-.46m.108.468v-.484'/><path stroke='#000' stroke-width='.028' d='M69.74 90.912v-.424m.104.436l-.004-.452'/><path stroke='#000' stroke-width='.032' d='M69.468 90.888v-.372m.092.376V90.5m.092.408V90.5'/><path stroke='#000' stroke-width='.036' d='M69.376 90.884v-.36'/><path stroke='#000' stroke-width='.04' d='M69.288 90.868v-.34'/><path stroke='#000' stroke-width='.044' d='M69.192 90.856v-.312'/><path stroke='#000' stroke-width='.048' d='M68.996 90.828l-.004-.248m.104.264v-.28M68.896 90.808v-.22'/><path stroke='#000' stroke-width='.052' d='M68.804 90.792v-.184'/><path stroke='#000' stroke-width='.056' d='M68.704 90.768v-.144'/><path stroke='#000' stroke-width='.06' d='M68.604 90.756v-.108'/><path stroke='#000' stroke-width='.072' d='M68.496 90.732v-.052'/><path stroke='#000' stroke-width='.004' d='M71.22 90.932v-.464m-.232.48l.004-.492m-.172.5v-.504'/><path stroke='#000' stroke-width='.008' d='M130.408 90.968v-.508'/><path stroke='#000' stroke-width='.012' d='M130.268 90.968v-.508'/><path stroke='#000' stroke-width='.016' d='M130.14 90.968v-.508M130.012 90.968v-.508'/><path stroke='#000' stroke-width='.02' d='M129.896 90.968v-.508'/><path stroke='#000' stroke-width='.024' d='M129.676 90.94l-.004-.46m.108.468v-.484'/><path stroke='#000' stroke-width='.028' d='M129.476 90.92v-.424m.1.436l-.004-.452'/><path stroke='#000' stroke-width='.032' d='M129.204 90.896v-.372m.088.38v-.392m.092.404v-.408'/><path stroke='#000' stroke-width='.036' d='M129.108 90.892v-.36'/><path stroke='#000' stroke-width='.04' d='M129.02 90.876v-.336'/><path stroke='#000' stroke-width='.044' d='M128.924 90.868v-.316'/><path stroke='#000' stroke-width='.048' d='M128.732 90.84l-.004-.252m.1.264v-.28M128.628 90.816V90.6'/><path stroke='#000' stroke-width='.052' d='M128.54 90.8v-.184'/><path stroke='#000' stroke-width='.056' d='M128.44 90.776v-.144'/><path stroke='#000' stroke-width='.06' d='M128.336 90.764v-.108'/><path stroke='#000' stroke-width='.072' d='M128.228 90.74v-.052'/><path stroke='#000' stroke-width='.004' d='M130.956 90.94v-.464m-.232.48v-.492m-.172.5v-.504'/></g>"
      ]
    },
    581: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M16.789 13.911c0 0.956-0.583 1.506-1.611 1.506h-1.35v-3.011h1.356c1.022 0 1.605 0.544 1.605 1.505zM19.428 17.389c0 0.461 0.4 0.761 1.028 0.761 0.8 0 1.4-0.505 1.4-1.217v-0.428l-1.306 0.083c-0.739 0.050-1.122 0.322-1.122 0.8zM32 6.167v19.556c0 1.472-1.194 2.667-2.667 2.667h-26.667c-1.472 0-2.667-1.194-2.667-2.667v-19.556c0-1.472 1.194-2.667 2.667-2.667h26.667c1.472 0 2.667 1.194 2.667 2.667zM7.1 12.733c0.467 0.039 0.933-0.233 1.228-0.578 0.289-0.356 0.478-0.833 0.428-1.317-0.411 0.017-0.922 0.272-1.217 0.628-0.267 0.306-0.494 0.8-0.439 1.267zM10.467 16.872c-0.011-0.011-1.089-0.422-1.1-1.667-0.011-1.039 0.85-1.539 0.889-1.567-0.489-0.722-1.245-0.8-1.506-0.817-0.678-0.039-1.256 0.383-1.578 0.383-0.328 0-0.817-0.367-1.35-0.355-0.694 0.011-1.344 0.406-1.694 1.033-0.728 1.256-0.189 3.111 0.517 4.133 0.344 0.505 0.761 1.061 1.306 1.039 0.516-0.022 0.722-0.333 1.344-0.333 0.628 0 0.806 0.333 1.35 0.328 0.567-0.011 0.917-0.505 1.267-1.011 0.383-0.578 0.544-1.133 0.556-1.167zM17.989 13.906c0-1.478-1.028-2.489-2.495-2.489h-2.844v7.578h1.178v-2.589h1.628c1.489 0 2.533-1.022 2.533-2.5zM22.989 15.222c0-1.094-0.878-1.8-2.222-1.8-1.25 0-2.172 0.717-2.206 1.694h1.061c0.089-0.467 0.522-0.772 1.111-0.772 0.722 0 1.122 0.333 1.122 0.956v0.417l-1.467 0.089c-1.367 0.083-2.105 0.645-2.105 1.617 0 0.983 0.761 1.633 1.855 1.633 0.739 0 1.422-0.372 1.733-0.967h0.022v0.911h1.089v-3.778zM28.667 13.494h-1.194l-1.383 4.478h-0.022l-1.383-4.478h-1.239l1.994 5.517-0.105 0.333c-0.178 0.567-0.472 0.789-0.994 0.789-0.095 0-0.272-0.011-0.345-0.017v0.911c0.067 0.022 0.361 0.028 0.45 0.028 1.15 0 1.689-0.439 2.161-1.767z'/>"
      ]
    },
    582: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '301 189',
        "<g fill='none'><path fill='#FFF' d='M.5.75h300v187.5H.5z'/><path fill='#DC143C' d='M.5 94.5h300v93.75H.5z'/></g>"
      ]
    },
    583: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '32 32',
        "<path d='M18.061 11.1c0-0.911-0.783-1.022-1.522-1.022l-2.172-0.016v3.85h0.911v-1.394h1c1.022 0 0.806 0.572 0.822 1.394h0.922v-0.75c0-0.511-0.083-0.839-0.611-1.022 0.411-0.167 0.656-0.594 0.65-1.039zM16.428 11.728h-1.15v-0.85h1.167c0.283 0 0.594 0.056 0.594 0.411 0 0.367-0.294 0.439-0.611 0.439zM15.5 16.7h-2.928l-1.167 1.266-1.139-1.266h-3.694l-0.006 3.85h3.634l1.183-1.278 1.133 1.278h1.789l0.006-1.294c1.050 0 2.739 0.255 2.739-1.294 0-0.961-0.683-1.261-1.55-1.261zM9.733 19.739h-2.255v-0.767h2.016v-0.783h-2.016v-0.694h2.317l0.994 1.122zM13.389 20.194l-1.406-1.561 1.406-1.522zM15.489 18.472h-1.178v-0.978h1.194c0.311 0 0.567 0.128 0.567 0.467 0 0.355-0.256 0.511-0.583 0.511zM13.733 10.878v-0.811h-3.083v3.85h3.083v-0.794h-2.161v-0.767h2.1v-0.783h-2.1v-0.694zM32 15.967h-0.011zM21.189 17.739c0-0.911-0.783-1.039-1.505-1.039h-2.189l-0.005 3.85h0.922l0.006-1.405h0.978c0.611 0 0.822 0.111 0.822 0.766l-0.005 0.639h0.922l0.006-0.766c0-0.495-0.1-0.839-0.611-1.022 0.428-0.172 0.656-0.6 0.661-1.022zM19.567 18.361h-1.15v-0.867h1.167c0.283 0 0.594 0.056 0.594 0.411 0 0.383-0.3 0.456-0.611 0.456zM9.967 13.917v-3.85h-1.533l-1.094 2.611-1.206-2.611h-1.505v3.65l-1.561-3.65h-1.361l-1.65 3.85h0.994l0.356-0.85h1.917l0.355 0.85h1.878v-3.011l1.333 3.011h0.811l1.333-3.011v3.011zM1.733 12.267l0.622-1.533 0.639 1.533zM28.256 21.094v-0.25c-0.6 0.311-0.217 0.25-8.706 0.25 0-1.4 0.006-1.328 0-1.4-0.094-0.006-0.178-0.006-0.522-0.006 0 0.995-0.006 0.378-0.006 1.406h-2.2c0-0.672 0.005-0.85 0.005-1.622-0.556 0.333-1.266 0.355-1.905 0.344 0 0.817-0.006 0.461-0.006 1.278h-2.717c-0.283-0.317-0.15-0.172-0.856-0.967-0.178 0.194-0.711 0.772-0.894 0.967h-4.556v-5.128h4.617c0.278 0.311 0.156 0.172 0.861 0.956 0.178-0.194 0.678-0.745 0.872-0.956h3.222c0.545 0 1 0.106 1.35 0.311v-0.311c3.017 0 3.572-0.078 4.206 0.283v-0.283h4.345v0.289c0.633-0.383 1.089-0.289 3.605-0.289v0.278c0.572-0.328 0.922-0.289 3.017-0.278v-9.744c0-1.472-1.194-2.667-2.667-2.667h-26.667c-1.472 0-2.667 1.194-2.667 2.667v6.1c0.522-1.217 1.094-2.556 1.283-2.995h2.206c0.239 0.561 0.089 0.206 0.5 1.172v-1.172h2.556c0.161 0.345 0.617 1.333 0.772 1.667 0.322-0.755 0.561-1.328 0.7-1.667h5.722c0-0.005 0.639 0 0.644 0 2.428 0.011 2.978-0.044 3.578 0.294v-0.294h2.217v0.517c0.422-0.339 0.994-0.517 1.706-0.517h1.533c0 0.028 0.105 0.017 0.128 0.017h1.8c0.233 0.544 0.145 0.333 0.489 1.145v-1.145h2.406c0.272 0.444-0.056-0.1 0.622 1.022v-1.022h2.217v5.111h-2.311c-0.3-0.5-0.078-0.122-0.734-1.217v1.217h-2.933c-0.356-0.822-0.006-0.017-0.367-0.85h-1.056c-0.233 0.556-0.122 0.289-0.355 0.85h-1.489c-0.683 0-1.239-0.167-1.65-0.494v0.494h-3.694c-0.017-0.772-0.006-1.378-0.006-1.378-0.1-0.016-0.189-0.011-0.544-0.011v1.395h-7.528v-0.633c-0.139 0.311-0.15 0.328-0.283 0.633h-1.639c-0.222-0.495-0.161-0.356-0.283-0.633v0.633h-2.939c-0.234-0.561-0.122-0.294-0.356-0.85h-1.067c-0.233 0.556-0.122 0.289-0.355 0.85h-1.478v11.317c0 1.472 1.194 2.667 2.667 2.667h26.672c1.472 0 2.667-1.194 2.667-2.667v-5.022c-0.706 0.461-1.817 0.339-3.75 0.339zM30.272 17.511h1.672v-0.811h-1.828c-0.711 0-1.322 0.366-1.322 1.15 0 1.833 2.372 0.711 2.372 1.522 0 0.283-0.239 0.356-0.467 0.356h-1.778l-0.006 0.822h1.778c0.467 0 0.978-0.1 1.25-0.494v-1.433c-0.583-0.767-2.183-0.072-2.183-0.75 0-0.322 0.256-0.361 0.511-0.361zM27.105 19.722h-1.789l-0.005 0.822h1.789c0.822 0 1.456-0.311 1.456-1.222 0-1.844-2.383-0.622-2.383-1.461 0-0.311 0.272-0.355 0.511-0.355h1.689v-0.811h-1.844c-0.711 0-1.306 0.367-1.306 1.15 0 1.833 2.372 0.694 2.372 1.522-0.005 0.3-0.261 0.355-0.489 0.355zM24.761 17.494v-0.794h-3.067l-0.006 3.85h3.067l0.005-0.794-2.144-0.017v-0.767h2.105v-0.783h-2.1v-0.694zM21.633 11.489c-0.016 0.011-0.078 0.122-0.078 0.422 0 0.333 0.050 0.428 0.061 0.439 0.011 0.005 0.061 0.028 0.189 0.028l0.406-0.939c-0.061 0-0.117-0.005-0.172-0.005-0.311 0-0.389 0.039-0.406 0.056zM22.767 10.906h-0.006zM21.867 10.061c-1.306 0-1.889 0.667-1.889 1.961 0 1.234 0.567 1.889 1.833 1.889h1.067l0.355-0.85h1.906l0.367 0.85h1.872v-2.883l1.733 2.883h1.311v-3.833h-0.939v2.672l-1.616-2.672h-1.406v3.633l-1.55-3.633h-1.378l-1.306 3.028h-0.411c-0.739 0-0.894-0.45-0.894-1.105 0-1.322 0.872-1.111 1.839-1.094v-0.844zM24.206 10.733l0.622 1.533h-1.266zM18.589 10.067v3.85h0.939v-3.85z'/>"
      ]
    },
    584: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '512 512',
        "<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"
      ]
    },
    585: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z' class='ci-primary'/>"
      ]
    }
  }
])
//# sourceMappingURL=1.8764c0a6.chunk.js.map
