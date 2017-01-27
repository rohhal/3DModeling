! function(e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var i in n)("object" == typeof exports ? exports : e)[i] = n[i]
  }
}(this, function() {
  return webpackJsonp([12, 22], {
    0: function(e, t, n) {
      n(1162), e.exports = n(1191)
    },
    48: function(e, t, n) {
      "use strict";
      n(49), n(92), n(215);
      var i = n(216),
        o = n(220),
        r = n(221);
      r.set();
      var a = n(223);
      a();
      var s = n(225);
      s();
      var l = n(227);
      l.install();
      var c = n(272);
      c(), window.publicLibraries = {
        $: o,
        _: i
      }
    },
    49: function(e, t, n) {
      n(50), n(83), n(85), n(86), n(87), n(88), n(89), n(90), e.exports = n(54)
    },
    50: function(e, t, n) {
      "use strict";
      var i, o = n(51),
        r = n(52),
        a = n(57),
        s = n(56),
        l = n(63),
        c = n(64),
        u = n(66),
        d = n(67),
        h = n(68),
        p = n(58),
        g = n(69),
        f = n(62),
        m = n(65),
        v = n(70),
        b = n(72),
        w = n(74),
        x = n(75),
        y = n(76),
        k = n(73),
        E = n(60)("__proto__"),
        _ = n(77),
        T = n(82)(!1),
        S = Object.prototype,
        C = Array.prototype,
        M = C.slice,
        O = C.join,
        F = o.setDesc,
        D = o.getDesc,
        W = o.setDescs,
        L = {};
      a || (i = !p(function() {
        return 7 != F(c("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }), o.setDesc = function(e, t, n) {
        if (i) try {
          return F(e, t, n)
        } catch (o) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (g(e)[t] = n.value), e
      }, o.getDesc = function(e, t) {
        if (i) try {
          return D(e, t)
        } catch (n) {}
        if (u(e, t)) return s(!S.propertyIsEnumerable.call(e, t), e[t])
      }, o.setDescs = W = function(e, t) {
        g(e);
        for (var n, i = o.getKeys(t), r = i.length, a = 0; r > a;) o.setDesc(e, n = i[a++], t[n]);
        return e
      }), r(r.S + r.F * !a, "Object", {
        getOwnPropertyDescriptor: o.getDesc,
        defineProperty: o.setDesc,
        defineProperties: W
      });
      var P = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        A = P.concat("length", "prototype"),
        N = P.length,
        I = function() {
          var e, t = c("iframe"),
            n = N,
            i = ">";
          for (t.style.display = "none", l.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script" + i), e.close(), I = e.F; n--;) delete I.prototype[P[n]];
          return I()
        },
        $ = function(e, t) {
          return function(n) {
            var i, o = b(n),
              r = 0,
              a = [];
            for (i in o) i != E && u(o, i) && a.push(i);
            for (; t > r;) u(o, i = e[r++]) && (~T(a, i) || a.push(i));
            return a
          }
        },
        R = function() {};
      r(r.S, "Object", {
        getPrototypeOf: o.getProto = o.getProto || function(e) {
          return e = v(e), u(e, E) ? e[E] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? S : null
        },
        getOwnPropertyNames: o.getNames = o.getNames || $(A, A.length, !0),
        create: o.create = o.create || function(e, t) {
          var n;
          return null !== e ? (R.prototype = g(e), n = new R, R.prototype = null, n[E] = e) : n = I(), void 0 === t ? n : W(n, t)
        },
        keys: o.getKeys = o.getKeys || $(P, N, !1)
      });
      var j = function(e, t, n) {
        if (!(t in L)) {
          for (var i = [], o = 0; o < t; o++) i[o] = "a[" + o + "]";
          L[t] = Function("F,a", "return new F(" + i.join(",") + ")")
        }
        return L[t](e, n)
      };
      r(r.P, "Function", {
        bind: function(e) {
          var t = f(this),
            n = M.call(arguments, 1),
            i = function() {
              var o = n.concat(M.call(arguments));
              return this instanceof i ? j(t, o.length, o) : h(t, o, e)
            };
          return m(t.prototype) && (i.prototype = t.prototype), i
        }
      }), r(r.P + r.F * p(function() {
        l && M.call(l)
      }), "Array", {
        slice: function(e, t) {
          var n = y(this.length),
            i = d(this);
          if (t = void 0 === t ? n : t, "Array" == i) return M.call(this, e, t);
          for (var o = x(e, n), r = x(t, n), a = y(r - o), s = Array(a), l = 0; l < a; l++) s[l] = "String" == i ? this.charAt(o + l) : this[o + l];
          return s
        }
      }), r(r.P + r.F * (k != Object), "Array", {
        join: function(e) {
          return O.call(k(this), void 0 === e ? "," : e)
        }
      }), r(r.S, "Array", {
        isArray: n(79)
      });
      var B = function(e) {
          return function(t, n) {
            f(t);
            var i = k(this),
              o = y(i.length),
              r = e ? o - 1 : 0,
              a = e ? -1 : 1;
            if (arguments.length < 2)
              for (;;) {
                if (r in i) {
                  n = i[r], r += a;
                  break
                }
                if (r += a, e ? r < 0 : o <= r) throw TypeError("Reduce of empty array with no initial value")
              }
            for (; e ? r >= 0 : o > r; r += a) r in i && (n = t(n, i[r], r, this));
            return n
          }
        },
        G = function(e) {
          return function(t) {
            return e(this, t, arguments[1])
          }
        };
      r(r.P, "Array", {
        forEach: o.each = o.each || G(_(0)),
        map: G(_(1)),
        filter: G(_(2)),
        some: G(_(3)),
        every: G(_(4)),
        reduce: B(!1),
        reduceRight: B(!0),
        indexOf: G(T),
        lastIndexOf: function(e, t) {
          var n = b(this),
            i = y(n.length),
            o = i - 1;
          for (arguments.length > 1 && (o = Math.min(o, w(t))), o < 0 && (o = y(i + o)); o >= 0; o--)
            if (o in n && n[o] === e) return o;
          return -1
        }
      }), r(r.S, "Date", {
        now: function() {
          return +new Date
        }
      });
      var V = function(e) {
        return e > 9 ? e : "0" + e
      };
      r(r.P + r.F * (p(function() {
        return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
      }) || !p(function() {
        new Date(NaN).toISOString()
      })), "Date", {
        toISOString: function() {
          if (!isFinite(this)) throw RangeError("Invalid time value");
          var e = this,
            t = e.getUTCFullYear(),
            n = e.getUTCMilliseconds(),
            i = t < 0 ? "-" : t > 9999 ? "+" : "";
          return i + ("00000" + Math.abs(t)).slice(i ? -6 : -4) + "-" + V(e.getUTCMonth() + 1) + "-" + V(e.getUTCDate()) + "T" + V(e.getUTCHours()) + ":" + V(e.getUTCMinutes()) + ":" + V(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + V(n)) + "Z"
        }
      })
    },
    51: function(e, t) {
      var n = Object;
      e.exports = {
        create: n.create,
        getProto: n.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: n.getOwnPropertyDescriptor,
        setDesc: n.defineProperty,
        setDescs: n.defineProperties,
        getKeys: n.keys,
        getNames: n.getOwnPropertyNames,
        getSymbols: n.getOwnPropertySymbols,
        each: [].forEach
      }
    },
    52: function(e, t, n) {
      var i = n(53),
        o = n(54),
        r = n(55),
        a = n(59),
        s = n(61),
        l = "prototype",
        c = function(e, t, n) {
          var u, d, h, p, g = e & c.F,
            f = e & c.G,
            m = e & c.S,
            v = e & c.P,
            b = e & c.B,
            w = f ? i : m ? i[t] || (i[t] = {}) : (i[t] || {})[l],
            x = f ? o : o[t] || (o[t] = {}),
            y = x[l] || (x[l] = {});
          f && (n = t);
          for (u in n) d = !g && w && u in w, h = (d ? w : n)[u], p = b && d ? s(h, i) : v && "function" == typeof h ? s(Function.call, h) : h, w && !d && a(w, u, h), x[u] != h && r(x, u, p), v && y[u] != h && (y[u] = h)
        };
      i.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, e.exports = c
    },
    53: function(e, t) {
      var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n)
    },
    54: function(e, t) {
      var n = e.exports = {
        version: "1.2.6"
      };
      "number" == typeof __e && (__e = n)
    },
    55: function(e, t, n) {
      var i = n(51),
        o = n(56);
      e.exports = n(57) ? function(e, t, n) {
        return i.setDesc(e, t, o(1, n))
      } : function(e, t, n) {
        return e[t] = n, e
      }
    },
    56: function(e, t) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }
    },
    57: function(e, t, n) {
      e.exports = !n(58)(function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      })
    },
    58: function(e, t) {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (t) {
          return !0
        }
      }
    },
    59: function(e, t, n) {
      var i = n(53),
        o = n(55),
        r = n(60)("src"),
        a = "toString",
        s = Function[a],
        l = ("" + s).split(a);
      n(54).inspectSource = function(e) {
        return s.call(e)
      }, (e.exports = function(e, t, n, a) {
        "function" == typeof n && (n.hasOwnProperty(r) || o(n, r, e[t] ? "" + e[t] : l.join(String(t))), n.hasOwnProperty("name") || o(n, "name", t)), e === i ? e[t] = n : (a || delete e[t], o(e, t, n))
      })(Function.prototype, a, function() {
        return "function" == typeof this && this[r] || s.call(this)
      })
    },
    60: function(e, t) {
      var n = 0,
        i = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
      }
    },
    61: function(e, t, n) {
      var i = n(62);
      e.exports = function(e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            };
          case 2:
            return function(n, i) {
              return e.call(t, n, i)
            };
          case 3:
            return function(n, i, o) {
              return e.call(t, n, i, o)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    62: function(e, t) {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }
    },
    63: function(e, t, n) {
      e.exports = n(53).document && document.documentElement
    },
    64: function(e, t, n) {
      var i = n(65),
        o = n(53).document,
        r = i(o) && i(o.createElement);
      e.exports = function(e) {
        return r ? o.createElement(e) : {}
      }
    },
    65: function(e, t) {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    },
    66: function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t)
      }
    },
    67: function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1)
      }
    },
    68: function(e, t) {
      e.exports = function(e, t, n) {
        var i = void 0 === n;
        switch (t.length) {
          case 0:
            return i ? e() : e.call(n);
          case 1:
            return i ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
      }
    },
    69: function(e, t, n) {
      var i = n(65);
      e.exports = function(e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
      }
    },
    70: function(e, t, n) {
      var i = n(71);
      e.exports = function(e) {
        return Object(i(e))
      }
    },
    71: function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
      }
    },
    72: function(e, t, n) {
      var i = n(73),
        o = n(71);
      e.exports = function(e) {
        return i(o(e))
      }
    },
    73: function(e, t, n) {
      var i = n(67);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
      }
    },
    74: function(e, t) {
      var n = Math.ceil,
        i = Math.floor;
      e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
      }
    },
    75: function(e, t, n) {
      var i = n(74),
        o = Math.max,
        r = Math.min;
      e.exports = function(e, t) {
        return e = i(e), e < 0 ? o(e + t, 0) : r(e, t)
      }
    },
    76: function(e, t, n) {
      var i = n(74),
        o = Math.min;
      e.exports = function(e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
      }
    },
    77: function(e, t, n) {
      var i = n(61),
        o = n(73),
        r = n(70),
        a = n(76),
        s = n(78);
      e.exports = function(e) {
        var t = 1 == e,
          n = 2 == e,
          l = 3 == e,
          c = 4 == e,
          u = 6 == e,
          d = 5 == e || u;
        return function(h, p, g) {
          for (var f, m, v = r(h), b = o(v), w = i(p, g, 3), x = a(b.length), y = 0, k = t ? s(h, x) : n ? s(h, 0) : void 0; x > y; y++)
            if ((d || y in b) && (f = b[y], m = w(f, y, v), e))
              if (t) k[y] = m;
              else if (m) switch (e) {
            case 3:
              return !0;
            case 5:
              return f;
            case 6:
              return y;
            case 2:
              k.push(f)
          } else if (c) return !1;
          return u ? -1 : l || c ? c : k
        }
      }
    },
    78: function(e, t, n) {
      var i = n(65),
        o = n(79),
        r = n(80)("species");
      e.exports = function(e, t) {
        var n;
        return o(e) && (n = e.constructor, "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0), i(n) && (n = n[r], null === n && (n = void 0))), new(void 0 === n ? Array : n)(t)
      }
    },
    79: function(e, t, n) {
      var i = n(67);
      e.exports = Array.isArray || function(e) {
        return "Array" == i(e)
      }
    },
    80: function(e, t, n) {
      var i = n(81)("wks"),
        o = n(60),
        r = n(53).Symbol;
      e.exports = function(e) {
        return i[e] || (i[e] = r && r[e] || (r || o)("Symbol." + e))
      }
    },
    81: function(e, t, n) {
      var i = n(53),
        o = "__core-js_shared__",
        r = i[o] || (i[o] = {});
      e.exports = function(e) {
        return r[e] || (r[e] = {})
      }
    },
    82: function(e, t, n) {
      var i = n(72),
        o = n(76),
        r = n(75);
      e.exports = function(e) {
        return function(t, n, a) {
          var s, l = i(t),
            c = o(l.length),
            u = r(a, c);
          if (e && n != n) {
            for (; c > u;)
              if (s = l[u++], s != s) return !0
          } else
            for (; c > u; u++)
              if ((e || u in l) && l[u] === n) return e || u; return !e && -1
        }
      }
    },
    83: function(e, t, n) {
      var i = n(65);
      n(84)("freeze", function(e) {
        return function(t) {
          return e && i(t) ? e(t) : t
        }
      })
    },
    84: function(e, t, n) {
      var i = n(52),
        o = n(54),
        r = n(58);
      e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e],
          a = {};
        a[e] = t(n), i(i.S + i.F * r(function() {
          n(1)
        }), "Object", a)
      }
    },
    85: function(e, t, n) {
      var i = n(65);
      n(84)("seal", function(e) {
        return function(t) {
          return e && i(t) ? e(t) : t
        }
      })
    },
    86: function(e, t, n) {
      var i = n(65);
      n(84)("preventExtensions", function(e) {
        return function(t) {
          return e && i(t) ? e(t) : t
        }
      })
    },
    87: function(e, t, n) {
      var i = n(65);
      n(84)("isFrozen", function(e) {
        return function(t) {
          return !i(t) || !!e && e(t)
        }
      })
    },
    88: function(e, t, n) {
      var i = n(65);
      n(84)("isSealed", function(e) {
        return function(t) {
          return !i(t) || !!e && e(t)
        }
      })
    },
    89: function(e, t, n) {
      var i = n(65);
      n(84)("isExtensible", function(e) {
        return function(t) {
          return !!i(t) && (!e || e(t))
        }
      })
    },
    90: function(e, t, n) {
      "use strict";
      n(91)("trim", function(e) {
        return function() {
          return e(this, 3)
        }
      })
    },
    91: function(e, t, n) {
      var i = n(52),
        o = n(71),
        r = n(58),
        a = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
        s = "[" + a + "]",
        l = "​",
        c = RegExp("^" + s + s + "*"),
        u = RegExp(s + s + "*$"),
        d = function(e, t) {
          var n = {};
          n[e] = t(h), i(i.P + i.F * r(function() {
            return !!a[e]() || l[e]() != l
          }), "String", n)
        },
        h = d.trim = function(e, t) {
          return e = String(o(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
        };
      e.exports = d
    },
    92: function(e, t, n) {
      n(93), n(99), n(101), n(103), n(105), n(83), n(85), n(86), n(87), n(88), n(89), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(115), n(116), n(117), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(127), n(128), n(129), n(131), n(132), n(133), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(90), n(147), n(152), n(153), n(157), n(158), n(160), n(161), n(166), n(167), n(169), n(172), n(174), n(176), n(177), n(178), n(180), n(181), n(183), n(184), n(185), n(186), n(193), n(196), n(197), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(212), n(213), n(214), e.exports = n(54)
    },
    93: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(53),
        r = n(66),
        a = n(57),
        s = n(52),
        l = n(59),
        c = n(58),
        u = n(81),
        d = n(94),
        h = n(60),
        p = n(80),
        g = n(95),
        f = n(96),
        m = n(97),
        v = n(79),
        b = n(69),
        w = n(72),
        x = n(56),
        y = i.getDesc,
        k = i.setDesc,
        E = i.create,
        _ = f.get,
        T = o.Symbol,
        S = o.JSON,
        C = S && S.stringify,
        M = !1,
        O = p("_hidden"),
        F = i.isEnum,
        D = u("symbol-registry"),
        W = u("symbols"),
        L = "function" == typeof T,
        P = Object.prototype,
        A = a && c(function() {
          return 7 != E(k({}, "a", {
            get: function() {
              return k(this, "a", {
                value: 7
              }).a
            }
          })).a
        }) ? function(e, t, n) {
          var i = y(P, t);
          i && delete P[t], k(e, t, n), i && e !== P && k(P, t, i)
        } : k,
        N = function(e) {
          var t = W[e] = E(T.prototype);
          return t._k = e, a && M && A(P, e, {
            configurable: !0,
            set: function(t) {
              r(this, O) && r(this[O], e) && (this[O][e] = !1), A(this, e, x(1, t))
            }
          }), t
        },
        I = function(e) {
          return "symbol" == typeof e
        },
        $ = function(e, t, n) {
          return n && r(W, t) ? (n.enumerable ? (r(e, O) && e[O][t] && (e[O][t] = !1), n = E(n, {
            enumerable: x(0, !1)
          })) : (r(e, O) || k(e, O, x(1, {})), e[O][t] = !0), A(e, t, n)) : k(e, t, n)
        },
        R = function(e, t) {
          b(e);
          for (var n, i = m(t = w(t)), o = 0, r = i.length; r > o;) $(e, n = i[o++], t[n]);
          return e
        },
        j = function(e, t) {
          return void 0 === t ? E(e) : R(E(e), t)
        },
        B = function(e) {
          var t = F.call(this, e);
          return !(t || !r(this, e) || !r(W, e) || r(this, O) && this[O][e]) || t
        },
        G = function(e, t) {
          var n = y(e = w(e), t);
          return !n || !r(W, t) || r(e, O) && e[O][t] || (n.enumerable = !0), n
        },
        V = function(e) {
          for (var t, n = _(w(e)), i = [], o = 0; n.length > o;) r(W, t = n[o++]) || t == O || i.push(t);
          return i
        },
        z = function(e) {
          for (var t, n = _(w(e)), i = [], o = 0; n.length > o;) r(W, t = n[o++]) && i.push(W[t]);
          return i
        },
        U = function(e) {
          if (void 0 !== e && !I(e)) {
            for (var t, n, i = [e], o = 1, r = arguments; r.length > o;) i.push(r[o++]);
            return t = i[1], "function" == typeof t && (n = t), !n && v(t) || (t = function(e, t) {
              if (n && (t = n.call(this, e, t)), !I(t)) return t
            }), i[1] = t, C.apply(S, i)
          }
        },
        H = c(function() {
          var e = T();
          return "[null]" != C([e]) || "{}" != C({
            a: e
          }) || "{}" != C(Object(e))
        });
      L || (T = function() {
        if (I(this)) throw TypeError("Symbol is not a constructor");
        return N(h(arguments.length > 0 ? arguments[0] : void 0))
      }, l(T.prototype, "toString", function() {
        return this._k
      }), I = function(e) {
        return e instanceof T
      }, i.create = j, i.isEnum = B, i.getDesc = G, i.setDesc = $, i.setDescs = R, i.getNames = f.get = V, i.getSymbols = z, a && !n(98) && l(P, "propertyIsEnumerable", B, !0));
      var X = {
        "for": function(e) {
          return r(D, e += "") ? D[e] : D[e] = T(e)
        },
        keyFor: function(e) {
          return g(D, e)
        },
        useSetter: function() {
          M = !0
        },
        useSimple: function() {
          M = !1
        }
      };
      i.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(e) {
        var t = p(e);
        X[e] = L ? t : N(t)
      }), M = !0, s(s.G + s.W, {
        Symbol: T
      }), s(s.S, "Symbol", X), s(s.S + s.F * !L, "Object", {
        create: j,
        defineProperty: $,
        defineProperties: R,
        getOwnPropertyDescriptor: G,
        getOwnPropertyNames: V,
        getOwnPropertySymbols: z
      }), S && s(s.S + s.F * (!L || H), "JSON", {
        stringify: U
      }), d(T, "Symbol"), d(Math, "Math", !0), d(o.JSON, "JSON", !0)
    },
    94: function(e, t, n) {
      var i = n(51).setDesc,
        o = n(66),
        r = n(80)("toStringTag");
      e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, r) && i(e, r, {
          configurable: !0,
          value: t
        })
      }
    },
    95: function(e, t, n) {
      var i = n(51),
        o = n(72);
      e.exports = function(e, t) {
        for (var n, r = o(e), a = i.getKeys(r), s = a.length, l = 0; s > l;)
          if (r[n = a[l++]] === t) return n
      }
    },
    96: function(e, t, n) {
      var i = n(72),
        o = n(51).getNames,
        r = {}.toString,
        a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) {
          try {
            return o(e)
          } catch (t) {
            return a.slice()
          }
        };
      e.exports.get = function(e) {
        return a && "[object Window]" == r.call(e) ? s(e) : o(i(e))
      }
    },
    97: function(e, t, n) {
      var i = n(51);
      e.exports = function(e) {
        var t = i.getKeys(e),
          n = i.getSymbols;
        if (n)
          for (var o, r = n(e), a = i.isEnum, s = 0; r.length > s;) a.call(e, o = r[s++]) && t.push(o);
        return t
      }
    },
    98: function(e, t) {
      e.exports = !1
    },
    99: function(e, t, n) {
      var i = n(52);
      i(i.S + i.F, "Object", {
        assign: n(100)
      })
    },
    100: function(e, t, n) {
      var i = n(51),
        o = n(70),
        r = n(73);
      e.exports = n(58)(function() {
        var e = Object.assign,
          t = {},
          n = {},
          i = Symbol(),
          o = "abcdefghijklmnopqrst";
        return t[i] = 7, o.split("").forEach(function(e) {
          n[e] = e
        }), 7 != e({}, t)[i] || Object.keys(e({}, n)).join("") != o
      }) ? function(e, t) {
        for (var n = o(e), a = arguments, s = a.length, l = 1, c = i.getKeys, u = i.getSymbols, d = i.isEnum; s > l;)
          for (var h, p = r(a[l++]), g = u ? c(p).concat(u(p)) : c(p), f = g.length, m = 0; f > m;) d.call(p, h = g[m++]) && (n[h] = p[h]);
        return n
      } : Object.assign
    },
    101: function(e, t, n) {
      var i = n(52);
      i(i.S, "Object", {
        is: n(102)
      })
    },
    102: function(e, t) {
      e.exports = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
      }
    },
    103: function(e, t, n) {
      var i = n(52);
      i(i.S, "Object", {
        setPrototypeOf: n(104).set
      })
    },
    104: function(e, t, n) {
      var i = n(51).getDesc,
        o = n(65),
        r = n(69),
        a = function(e, t) {
          if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
      e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, o) {
          try {
            o = n(61)(Function.call, i(Object.prototype, "__proto__").set, 2), o(e, []), t = !(e instanceof Array)
          } catch (r) {
            t = !0
          }
          return function(e, n) {
            return a(e, n), t ? e.__proto__ = n : o(e, n), e
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    105: function(e, t, n) {
      "use strict";
      var i = n(106),
        o = {};
      o[n(80)("toStringTag")] = "z", o + "" != "[object z]" && n(59)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
      }, !0)
    },
    106: function(e, t, n) {
      var i = n(67),
        o = n(80)("toStringTag"),
        r = "Arguments" == i(function() {
          return arguments
        }());
      e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = (t = Object(e))[o]) ? n : r ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
      }
    },
    107: function(e, t, n) {
      var i = n(72);
      n(84)("getOwnPropertyDescriptor", function(e) {
        return function(t, n) {
          return e(i(t), n)
        }
      })
    },
    108: function(e, t, n) {
      var i = n(70);
      n(84)("getPrototypeOf", function(e) {
        return function(t) {
          return e(i(t))
        }
      })
    },
    109: function(e, t, n) {
      var i = n(70);
      n(84)("keys", function(e) {
        return function(t) {
          return e(i(t))
        }
      })
    },
    110: function(e, t, n) {
      n(84)("getOwnPropertyNames", function() {
        return n(96).get
      })
    },
    111: function(e, t, n) {
      var i = n(51).setDesc,
        o = n(56),
        r = n(66),
        a = Function.prototype,
        s = /^\s*function ([^ (]*)/,
        l = "name";
      l in a || n(57) && i(a, l, {
        configurable: !0,
        get: function() {
          var e = ("" + this).match(s),
            t = e ? e[1] : "";
          return r(this, l) || i(this, l, o(5, t)), t
        }
      })
    },
    112: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(65),
        r = n(80)("hasInstance"),
        a = Function.prototype;
      r in a || i.setDesc(a, r, {
        value: function(e) {
          if ("function" != typeof this || !o(e)) return !1;
          if (!o(this.prototype)) return e instanceof this;
          for (; e = i.getProto(e);)
            if (this.prototype === e) return !0;
          return !1
        }
      })
    },
    113: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(53),
        r = n(66),
        a = n(67),
        s = n(114),
        l = n(58),
        c = n(91).trim,
        u = "Number",
        d = o[u],
        h = d,
        p = d.prototype,
        g = a(i.create(p)) == u,
        f = "trim" in String.prototype,
        m = function(e) {
          var t = s(e, !1);
          if ("string" == typeof t && t.length > 2) {
            t = f ? t.trim() : c(t, 3);
            var n, i, o, r = t.charCodeAt(0);
            if (43 === r || 45 === r) {
              if (n = t.charCodeAt(2), 88 === n || 120 === n) return NaN
            } else if (48 === r) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  i = 2, o = 49;
                  break;
                case 79:
                case 111:
                  i = 8, o = 55;
                  break;
                default:
                  return +t
              }
              for (var a, l = t.slice(2), u = 0, d = l.length; u < d; u++)
                if (a = l.charCodeAt(u), a < 48 || a > o) return NaN;
              return parseInt(l, i)
            }
          }
          return +t
        };
      d(" 0o1") && d("0b1") && !d("+0x1") || (d = function(e) {
        var t = arguments.length < 1 ? 0 : e,
          n = this;
        return n instanceof d && (g ? l(function() {
          p.valueOf.call(n)
        }) : a(n) != u) ? new h(m(t)) : m(t)
      }, i.each.call(n(57) ? i.getNames(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), function(e) {
        r(h, e) && !r(d, e) && i.setDesc(d, e, i.getDesc(h, e))
      }), d.prototype = p, p.constructor = d, n(59)(o, u, d))
    },
    114: function(e, t, n) {
      var i = n(65);
      e.exports = function(e, t) {
        if (!i(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    115: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        EPSILON: Math.pow(2, -52)
      })
    },
    116: function(e, t, n) {
      var i = n(52),
        o = n(53).isFinite;
      i(i.S, "Number", {
        isFinite: function(e) {
          return "number" == typeof e && o(e)
        }
      })
    },
    117: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        isInteger: n(118)
      })
    },
    118: function(e, t, n) {
      var i = n(65),
        o = Math.floor;
      e.exports = function(e) {
        return !i(e) && isFinite(e) && o(e) === e
      }
    },
    119: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        isNaN: function(e) {
          return e != e
        }
      })
    },
    120: function(e, t, n) {
      var i = n(52),
        o = n(118),
        r = Math.abs;
      i(i.S, "Number", {
        isSafeInteger: function(e) {
          return o(e) && r(e) <= 9007199254740991
        }
      })
    },
    121: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
      })
    },
    122: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
      })
    },
    123: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        parseFloat: parseFloat
      })
    },
    124: function(e, t, n) {
      var i = n(52);
      i(i.S, "Number", {
        parseInt: parseInt
      })
    },
    125: function(e, t, n) {
      var i = n(52),
        o = n(126),
        r = Math.sqrt,
        a = Math.acosh;
      i(i.S + i.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE))), "Math", {
        acosh: function(e) {
          return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + r(e - 1) * r(e + 1))
        }
      })
    },
    126: function(e, t) {
      e.exports = Math.log1p || function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
      }
    },
    127: function(e, t, n) {
      function i(e) {
        return isFinite(e = +e) && 0 != e ? e < 0 ? -i(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
      }
      var o = n(52);
      o(o.S, "Math", {
        asinh: i
      })
    },
    128: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        atanh: function(e) {
          return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
      })
    },
    129: function(e, t, n) {
      var i = n(52),
        o = n(130);
      i(i.S, "Math", {
        cbrt: function(e) {
          return o(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
      })
    },
    130: function(e, t) {
      e.exports = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
      }
    },
    131: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        clz32: function(e) {
          return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
      })
    },
    132: function(e, t, n) {
      var i = n(52),
        o = Math.exp;
      i(i.S, "Math", {
        cosh: function(e) {
          return (o(e = +e) + o(-e)) / 2
        }
      })
    },
    133: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        expm1: n(134)
      })
    },
    134: function(e, t) {
      e.exports = Math.expm1 || function(e) {
        return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
      }
    },
    135: function(e, t, n) {
      var i = n(52),
        o = n(130),
        r = Math.pow,
        a = r(2, -52),
        s = r(2, -23),
        l = r(2, 127) * (2 - s),
        c = r(2, -126),
        u = function(e) {
          return e + 1 / a - 1 / a
        };
      i(i.S, "Math", {
        fround: function(e) {
          var t, n, i = Math.abs(e),
            r = o(e);
          return i < c ? r * u(i / c / s) * c * s : (t = (1 + s / a) * i, n = t - (t - i), n > l || n != n ? r * (1 / 0) : r * n)
        }
      })
    },
    136: function(e, t, n) {
      var i = n(52),
        o = Math.abs;
      i(i.S, "Math", {
        hypot: function(e, t) {
          for (var n, i, r = 0, a = 0, s = arguments, l = s.length, c = 0; a < l;) n = o(s[a++]), c < n ? (i = c / n, r = r * i * i + 1, c = n) : n > 0 ? (i = n / c, r += i * i) : r += n;
          return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(r)
        }
      })
    },
    137: function(e, t, n) {
      var i = n(52),
        o = Math.imul;
      i(i.S + i.F * n(58)(function() {
        return o(4294967295, 5) != -5 || 2 != o.length
      }), "Math", {
        imul: function(e, t) {
          var n = 65535,
            i = +e,
            o = +t,
            r = n & i,
            a = n & o;
          return 0 | r * a + ((n & i >>> 16) * a + r * (n & o >>> 16) << 16 >>> 0)
        }
      })
    },
    138: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        log10: function(e) {
          return Math.log(e) / Math.LN10
        }
      })
    },
    139: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        log1p: n(126)
      })
    },
    140: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        log2: function(e) {
          return Math.log(e) / Math.LN2
        }
      })
    },
    141: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        sign: n(130)
      })
    },
    142: function(e, t, n) {
      var i = n(52),
        o = n(134),
        r = Math.exp;
      i(i.S + i.F * n(58)(function() {
        return !Math.sinh(-2e-17) != -2e-17
      }), "Math", {
        sinh: function(e) {
          return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (r(e - 1) - r(-e - 1)) * (Math.E / 2)
        }
      })
    },
    143: function(e, t, n) {
      var i = n(52),
        o = n(134),
        r = Math.exp;
      i(i.S, "Math", {
        tanh: function(e) {
          var t = o(e = +e),
            n = o(-e);
          return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (r(e) + r(-e))
        }
      })
    },
    144: function(e, t, n) {
      var i = n(52);
      i(i.S, "Math", {
        trunc: function(e) {
          return (e > 0 ? Math.floor : Math.ceil)(e)
        }
      })
    },
    145: function(e, t, n) {
      var i = n(52),
        o = n(75),
        r = String.fromCharCode,
        a = String.fromCodePoint;
      i(i.S + i.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function(e) {
          for (var t, n = [], i = arguments, a = i.length, s = 0; a > s;) {
            if (t = +i[s++], o(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
            n.push(t < 65536 ? r(t) : r(((t -= 65536) >> 10) + 55296, t % 1024 + 56320))
          }
          return n.join("")
        }
      })
    },
    146: function(e, t, n) {
      var i = n(52),
        o = n(72),
        r = n(76);
      i(i.S, "String", {
        raw: function(e) {
          for (var t = o(e.raw), n = r(t.length), i = arguments, a = i.length, s = [], l = 0; n > l;) s.push(String(t[l++])), l < a && s.push(String(i[l]));
          return s.join("")
        }
      })
    },
    147: function(e, t, n) {
      "use strict";
      var i = n(148)(!0);
      n(149)(String, "String", function(e) {
        this._t = String(e), this._i = 0
      }, function() {
        var e, t = this._t,
          n = this._i;
        return n >= t.length ? {
          value: void 0,
          done: !0
        } : (e = i(t, n), this._i += e.length, {
          value: e,
          done: !1
        })
      })
    },
    148: function(e, t, n) {
      var i = n(74),
        o = n(71);
      e.exports = function(e) {
        return function(t, n) {
          var r, a, s = String(o(t)),
            l = i(n),
            c = s.length;
          return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l), r < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : (r - 55296 << 10) + (a - 56320) + 65536)
        }
      }
    },
    149: function(e, t, n) {
      "use strict";
      var i = n(98),
        o = n(52),
        r = n(59),
        a = n(55),
        s = n(66),
        l = n(150),
        c = n(151),
        u = n(94),
        d = n(51).getProto,
        h = n(80)("iterator"),
        p = !([].keys && "next" in [].keys()),
        g = "@@iterator",
        f = "keys",
        m = "values",
        v = function() {
          return this
        };
      e.exports = function(e, t, n, b, w, x, y) {
        c(n, t, b);
        var k, E, _ = function(e) {
            if (!p && e in M) return M[e];
            switch (e) {
              case f:
                return function() {
                  return new n(this, e)
                };
              case m:
                return function() {
                  return new n(this, e)
                }
            }
            return function() {
              return new n(this, e)
            }
          },
          T = t + " Iterator",
          S = w == m,
          C = !1,
          M = e.prototype,
          O = M[h] || M[g] || w && M[w],
          F = O || _(w);
        if (O) {
          var D = d(F.call(new e));
          u(D, T, !0), !i && s(M, g) && a(D, h, v), S && O.name !== m && (C = !0, F = function() {
            return O.call(this)
          })
        }
        if (i && !y || !p && !C && M[h] || a(M, h, F), l[t] = F, l[T] = v, w)
          if (k = {
              values: S ? F : _(m),
              keys: x ? F : _(f),
              entries: S ? _("entries") : F
            }, y)
            for (E in k) E in M || r(M, E, k[E]);
          else o(o.P + o.F * (p || C), t, k);
        return k
      }
    },
    150: function(e, t) {
      e.exports = {}
    },
    151: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(56),
        r = n(94),
        a = {};
      n(55)(a, n(80)("iterator"), function() {
        return this
      }), e.exports = function(e, t, n) {
        e.prototype = i.create(a, {
          next: o(1, n)
        }), r(e, t + " Iterator")
      }
    },
    152: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(148)(!1);
      i(i.P, "String", {
        codePointAt: function(e) {
          return o(this, e)
        }
      })
    },
    153: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(76),
        r = n(154),
        a = "endsWith",
        s = "" [a];
      i(i.P + i.F * n(156)(a), "String", {
        endsWith: function(e) {
          var t = r(this, e, a),
            n = arguments,
            i = n.length > 1 ? n[1] : void 0,
            l = o(t.length),
            c = void 0 === i ? l : Math.min(o(i), l),
            u = String(e);
          return s ? s.call(t, u, c) : t.slice(c - u.length, c) === u
        }
      })
    },
    154: function(e, t, n) {
      var i = n(155),
        o = n(71);
      e.exports = function(e, t, n) {
        if (i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(e))
      }
    },
    155: function(e, t, n) {
      var i = n(65),
        o = n(67),
        r = n(80)("match");
      e.exports = function(e) {
        var t;
        return i(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == o(e))
      }
    },
    156: function(e, t, n) {
      var i = n(80)("match");
      e.exports = function(e) {
        var t = /./;
        try {
          "/./" [e](t)
        } catch (n) {
          try {
            return t[i] = !1, !"/./" [e](t)
          } catch (o) {}
        }
        return !0
      }
    },
    157: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(154),
        r = "includes";
      i(i.P + i.F * n(156)(r), "String", {
        includes: function(e) {
          return !!~o(this, e, r).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    158: function(e, t, n) {
      var i = n(52);
      i(i.P, "String", {
        repeat: n(159)
      })
    },
    159: function(e, t, n) {
      "use strict";
      var i = n(74),
        o = n(71);
      e.exports = function(e) {
        var t = String(o(this)),
          n = "",
          r = i(e);
        if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
        for (; r > 0;
          (r >>>= 1) && (t += t)) 1 & r && (n += t);
        return n
      }
    },
    160: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(76),
        r = n(154),
        a = "startsWith",
        s = "" [a];
      i(i.P + i.F * n(156)(a), "String", {
        startsWith: function(e) {
          var t = r(this, e, a),
            n = arguments,
            i = o(Math.min(n.length > 1 ? n[1] : void 0, t.length)),
            l = String(e);
          return s ? s.call(t, l, i) : t.slice(i, i + l.length) === l
        }
      })
    },
    161: function(e, t, n) {
      "use strict";
      var i = n(61),
        o = n(52),
        r = n(70),
        a = n(162),
        s = n(163),
        l = n(76),
        c = n(164);
      o(o.S + o.F * !n(165)(function(e) {
        Array.from(e)
      }), "Array", {
        from: function(e) {
          var t, n, o, u, d = r(e),
            h = "function" == typeof this ? this : Array,
            p = arguments,
            g = p.length,
            f = g > 1 ? p[1] : void 0,
            m = void 0 !== f,
            v = 0,
            b = c(d);
          if (m && (f = i(f, g > 2 ? p[2] : void 0, 2)), void 0 == b || h == Array && s(b))
            for (t = l(d.length), n = new h(t); t > v; v++) n[v] = m ? f(d[v], v) : d[v];
          else
            for (u = b.call(d), n = new h; !(o = u.next()).done; v++) n[v] = m ? a(u, f, [o.value, v], !0) : o.value;
          return n.length = v, n
        }
      })
    },
    162: function(e, t, n) {
      var i = n(69);
      e.exports = function(e, t, n, o) {
        try {
          return o ? t(i(n)[0], n[1]) : t(n)
        } catch (r) {
          var a = e["return"];
          throw void 0 !== a && i(a.call(e)), r
        }
      }
    },
    163: function(e, t, n) {
      var i = n(150),
        o = n(80)("iterator"),
        r = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (i.Array === e || r[o] === e)
      }
    },
    164: function(e, t, n) {
      var i = n(106),
        o = n(80)("iterator"),
        r = n(150);
      e.exports = n(54).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || r[i(e)]
      }
    },
    165: function(e, t, n) {
      var i = n(80)("iterator"),
        o = !1;
      try {
        var r = [7][i]();
        r["return"] = function() {
          o = !0
        }, Array.from(r, function() {
          throw 2
        })
      } catch (a) {}
      e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
          var r = [7],
            a = r[i]();
          a.next = function() {
            return {
              done: n = !0
            }
          }, r[i] = function() {
            return a
          }, e(r)
        } catch (s) {}
        return n
      }
    },
    166: function(e, t, n) {
      "use strict";
      var i = n(52);
      i(i.S + i.F * n(58)(function() {
        function e() {}
        return !(Array.of.call(e) instanceof e)
      }), "Array", {
        of: function() {
          for (var e = 0, t = arguments, n = t.length, i = new("function" == typeof this ? this : Array)(n); n > e;) i[e] = t[e++];
          return i.length = n, i
        }
      })
    },
    167: function(e, t, n) {
      n(168)("Array")
    },
    168: function(e, t, n) {
      "use strict";
      var i = n(53),
        o = n(51),
        r = n(57),
        a = n(80)("species");
      e.exports = function(e) {
        var t = i[e];
        r && t && !t[a] && o.setDesc(t, a, {
          configurable: !0,
          get: function() {
            return this
          }
        })
      }
    },
    169: function(e, t, n) {
      "use strict";
      var i = n(170),
        o = n(171),
        r = n(150),
        a = n(72);
      e.exports = n(149)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
      }, function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
      }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
    },
    170: function(e, t, n) {
      var i = n(80)("unscopables"),
        o = Array.prototype;
      void 0 == o[i] && n(55)(o, i, {}), e.exports = function(e) {
        o[i][e] = !0
      }
    },
    171: function(e, t) {
      e.exports = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      }
    },
    172: function(e, t, n) {
      var i = n(52);
      i(i.P, "Array", {
        copyWithin: n(173)
      }), n(170)("copyWithin")
    },
    173: function(e, t, n) {
      "use strict";
      var i = n(70),
        o = n(75),
        r = n(76);
      e.exports = [].copyWithin || function(e, t) {
        var n = i(this),
          a = r(n.length),
          s = o(e, a),
          l = o(t, a),
          c = arguments,
          u = c.length > 2 ? c[2] : void 0,
          d = Math.min((void 0 === u ? a : o(u, a)) - l, a - s),
          h = 1;
        for (l < s && s < l + d && (h = -1, l += d - 1, s += d - 1); d-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += h, l += h;
        return n
      }
    },
    174: function(e, t, n) {
      var i = n(52);
      i(i.P, "Array", {
        fill: n(175)
      }), n(170)("fill")
    },
    175: function(e, t, n) {
      "use strict";
      var i = n(70),
        o = n(75),
        r = n(76);
      e.exports = [].fill || function(e) {
        for (var t = i(this), n = r(t.length), a = arguments, s = a.length, l = o(s > 1 ? a[1] : void 0, n), c = s > 2 ? a[2] : void 0, u = void 0 === c ? n : o(c, n); u > l;) t[l++] = e;
        return t
      }
    },
    176: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(77)(5),
        r = "find",
        a = !0;
      r in [] && Array(1)[r](function() {
        a = !1
      }), i(i.P + i.F * a, "Array", {
        find: function(e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
      }), n(170)(r)
    },
    177: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(77)(6),
        r = "findIndex",
        a = !0;
      r in [] && Array(1)[r](function() {
        a = !1
      }), i(i.P + i.F * a, "Array", {
        findIndex: function(e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
      }), n(170)(r)
    },
    178: function(e, t, n) {
      var i = n(51),
        o = n(53),
        r = n(155),
        a = n(179),
        s = o.RegExp,
        l = s,
        c = s.prototype,
        u = /a/g,
        d = /a/g,
        h = new s(u) !== u;
      !n(57) || h && !n(58)(function() {
        return d[n(80)("match")] = !1, s(u) != u || s(d) == d || "/a/i" != s(u, "i")
      }) || (s = function(e, t) {
        var n = r(e),
          i = void 0 === t;
        return this instanceof s || !n || e.constructor !== s || !i ? h ? new l(n && !i ? e.source : e, t) : l((n = e instanceof s) ? e.source : e, n && i ? a.call(e) : t) : e
      }, i.each.call(i.getNames(l), function(e) {
        e in s || i.setDesc(s, e, {
          configurable: !0,
          get: function() {
            return l[e]
          },
          set: function(t) {
            l[e] = t
          }
        })
      }), c.constructor = s, s.prototype = c, n(59)(o, "RegExp", s)), n(168)("RegExp")
    },
    179: function(e, t, n) {
      "use strict";
      var i = n(69);
      e.exports = function() {
        var e = i(this),
          t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
      }
    },
    180: function(e, t, n) {
      var i = n(51);
      n(57) && "g" != /./g.flags && i.setDesc(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(179)
      })
    },
    181: function(e, t, n) {
      n(182)("match", 1, function(e, t) {
        return function(n) {
          "use strict";
          var i = e(this),
            o = void 0 == n ? void 0 : n[t];
          return void 0 !== o ? o.call(n, i) : new RegExp(n)[t](String(i))
        }
      })
    },
    182: function(e, t, n) {
      "use strict";
      var i = n(55),
        o = n(59),
        r = n(58),
        a = n(71),
        s = n(80);
      e.exports = function(e, t, n) {
        var l = s(e),
          c = "" [e];
        r(function() {
          var t = {};
          return t[l] = function() {
            return 7
          }, 7 != "" [e](t)
        }) && (o(String.prototype, e, n(a, l, c)), i(RegExp.prototype, l, 2 == t ? function(e, t) {
          return c.call(e, this, t)
        } : function(e) {
          return c.call(e, this)
        }))
      }
    },
    183: function(e, t, n) {
      n(182)("replace", 2, function(e, t, n) {
        return function(i, o) {
          "use strict";
          var r = e(this),
            a = void 0 == i ? void 0 : i[t];
          return void 0 !== a ? a.call(i, r, o) : n.call(String(r), i, o)
        }
      })
    },
    184: function(e, t, n) {
      n(182)("search", 1, function(e, t) {
        return function(n) {
          "use strict";
          var i = e(this),
            o = void 0 == n ? void 0 : n[t];
          return void 0 !== o ? o.call(n, i) : new RegExp(n)[t](String(i));
        }
      })
    },
    185: function(e, t, n) {
      n(182)("split", 2, function(e, t, n) {
        return function(i, o) {
          "use strict";
          var r = e(this),
            a = void 0 == i ? void 0 : i[t];
          return void 0 !== a ? a.call(i, r, o) : n.call(String(r), i, o)
        }
      })
    },
    186: function(e, t, n) {
      "use strict";
      var i, o = n(51),
        r = n(98),
        a = n(53),
        s = n(61),
        l = n(106),
        c = n(52),
        u = n(65),
        d = n(69),
        h = n(62),
        p = n(187),
        g = n(188),
        f = n(104).set,
        m = n(102),
        v = n(80)("species"),
        b = n(189),
        w = n(190),
        x = "Promise",
        y = a.process,
        k = "process" == l(y),
        E = a[x],
        _ = function() {},
        T = function(e) {
          var t, n = new E(_);
          return e && (n.constructor = function(e) {
            e(_, _)
          }), (t = E.resolve(n))["catch"](_), t === n
        },
        S = function() {
          function e(t) {
            var n = new E(t);
            return f(n, e.prototype), n
          }
          var t = !1;
          try {
            if (t = E && E.resolve && T(), f(e, E), e.prototype = o.create(E.prototype, {
                constructor: {
                  value: e
                }
              }), e.resolve(5).then(function() {}) instanceof e || (t = !1), t && n(57)) {
              var i = !1;
              E.resolve(o.setDesc({}, "then", {
                get: function() {
                  i = !0
                }
              })), t = i
            }
          } catch (r) {
            t = !1
          }
          return t
        }(),
        C = function(e, t) {
          return !(!r || e !== E || t !== i) || m(e, t)
        },
        M = function(e) {
          var t = d(e)[v];
          return void 0 != t ? t : e
        },
        O = function(e) {
          var t;
          return !(!u(e) || "function" != typeof(t = e.then)) && t
        },
        F = function(e) {
          var t, n;
          this.promise = new e(function(e, i) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = i
          }), this.resolve = h(t), this.reject = h(n)
        },
        D = function(e) {
          try {
            e()
          } catch (t) {
            return {
              error: t
            }
          }
        },
        W = function(e, t) {
          if (!e.n) {
            e.n = !0;
            var n = e.c;
            w(function() {
              for (var i = e.v, o = 1 == e.s, r = 0, s = function(t) {
                  var n, r, a = o ? t.ok : t.fail,
                    s = t.resolve,
                    l = t.reject;
                  try {
                    a ? (o || (e.h = !0), n = a === !0 ? i : a(i), n === t.promise ? l(TypeError("Promise-chain cycle")) : (r = O(n)) ? r.call(n, s, l) : s(n)) : l(i)
                  } catch (c) {
                    l(c)
                  }
                }; n.length > r;) s(n[r++]);
              n.length = 0, e.n = !1, t && setTimeout(function() {
                var t, n, o = e.p;
                L(o) && (k ? y.emit("unhandledRejection", i, o) : (t = a.onunhandledrejection) ? t({
                  promise: o,
                  reason: i
                }) : (n = a.console) && n.error && n.error("Unhandled promise rejection", i)), e.a = void 0
              }, 1)
            })
          }
        },
        L = function(e) {
          var t, n = e._d,
            i = n.a || n.c,
            o = 0;
          if (n.h) return !1;
          for (; i.length > o;)
            if (t = i[o++], t.fail || !L(t.promise)) return !1;
          return !0
        },
        P = function(e) {
          var t = this;
          t.d || (t.d = !0, t = t.r || t, t.v = e, t.s = 2, t.a = t.c.slice(), W(t, !0))
        },
        A = function(e) {
          var t, n = this;
          if (!n.d) {
            n.d = !0, n = n.r || n;
            try {
              if (n.p === e) throw TypeError("Promise can't be resolved itself");
              (t = O(e)) ? w(function() {
                var i = {
                  r: n,
                  d: !1
                };
                try {
                  t.call(e, s(A, i, 1), s(P, i, 1))
                } catch (o) {
                  P.call(i, o)
                }
              }): (n.v = e, n.s = 1, W(n, !1))
            } catch (i) {
              P.call({
                r: n,
                d: !1
              }, i)
            }
          }
        };
      S || (E = function(e) {
        h(e);
        var t = this._d = {
          p: p(this, E, x),
          c: [],
          a: void 0,
          s: 0,
          d: !1,
          v: void 0,
          h: !1,
          n: !1
        };
        try {
          e(s(A, t, 1), s(P, t, 1))
        } catch (n) {
          P.call(t, n)
        }
      }, n(192)(E.prototype, {
        then: function(e, t) {
          var n = new F(b(this, E)),
            i = n.promise,
            o = this._d;
          return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, o.c.push(n), o.a && o.a.push(n), o.s && W(o, !1), i
        },
        "catch": function(e) {
          return this.then(void 0, e)
        }
      })), c(c.G + c.W + c.F * !S, {
        Promise: E
      }), n(94)(E, x), n(168)(x), i = n(54)[x], c(c.S + c.F * !S, x, {
        reject: function(e) {
          var t = new F(this),
            n = t.reject;
          return n(e), t.promise
        }
      }), c(c.S + c.F * (!S || T(!0)), x, {
        resolve: function(e) {
          if (e instanceof E && C(e.constructor, this)) return e;
          var t = new F(this),
            n = t.resolve;
          return n(e), t.promise
        }
      }), c(c.S + c.F * !(S && n(165)(function(e) {
        E.all(e)["catch"](function() {})
      })), x, {
        all: function(e) {
          var t = M(this),
            n = new F(t),
            i = n.resolve,
            r = n.reject,
            a = [],
            s = D(function() {
              g(e, !1, a.push, a);
              var n = a.length,
                s = Array(n);
              n ? o.each.call(a, function(e, o) {
                var a = !1;
                t.resolve(e).then(function(e) {
                  a || (a = !0, s[o] = e, --n || i(s))
                }, r)
              }) : i(s)
            });
          return s && r(s.error), n.promise
        },
        race: function(e) {
          var t = M(this),
            n = new F(t),
            i = n.reject,
            o = D(function() {
              g(e, !1, function(e) {
                t.resolve(e).then(n.resolve, i)
              })
            });
          return o && i(o.error), n.promise
        }
      })
    },
    187: function(e, t) {
      e.exports = function(e, t, n) {
        if (!(e instanceof t)) throw TypeError(n + ": use the 'new' operator!");
        return e
      }
    },
    188: function(e, t, n) {
      var i = n(61),
        o = n(162),
        r = n(163),
        a = n(69),
        s = n(76),
        l = n(164);
      e.exports = function(e, t, n, c) {
        var u, d, h, p = l(e),
          g = i(n, c, t ? 2 : 1),
          f = 0;
        if ("function" != typeof p) throw TypeError(e + " is not iterable!");
        if (r(p))
          for (u = s(e.length); u > f; f++) t ? g(a(d = e[f])[0], d[1]) : g(e[f]);
        else
          for (h = p.call(e); !(d = h.next()).done;) o(h, g, d.value, t)
      }
    },
    189: function(e, t, n) {
      var i = n(69),
        o = n(62),
        r = n(80)("species");
      e.exports = function(e, t) {
        var n, a = i(e).constructor;
        return void 0 === a || void 0 == (n = i(a)[r]) ? t : o(n)
      }
    },
    190: function(e, t, n) {
      var i, o, r, a = n(53),
        s = n(191).set,
        l = a.MutationObserver || a.WebKitMutationObserver,
        c = a.process,
        u = a.Promise,
        d = "process" == n(67)(c),
        h = function() {
          var e, t, n;
          for (d && (e = c.domain) && (c.domain = null, e.exit()); i;) t = i.domain, n = i.fn, t && t.enter(), n(), t && t.exit(), i = i.next;
          o = void 0, e && e.enter()
        };
      if (d) r = function() {
        c.nextTick(h)
      };
      else if (l) {
        var p = 1,
          g = document.createTextNode("");
        new l(h).observe(g, {
          characterData: !0
        }), r = function() {
          g.data = p = -p
        }
      } else r = u && u.resolve ? function() {
        u.resolve().then(h)
      } : function() {
        s.call(a, h)
      };
      e.exports = function(e) {
        var t = {
          fn: e,
          next: void 0,
          domain: d && c.domain
        };
        o && (o.next = t), i || (i = t, r()), o = t
      }
    },
    191: function(e, t, n) {
      var i, o, r, a = n(61),
        s = n(68),
        l = n(63),
        c = n(64),
        u = n(53),
        d = u.process,
        h = u.setImmediate,
        p = u.clearImmediate,
        g = u.MessageChannel,
        f = 0,
        m = {},
        v = "onreadystatechange",
        b = function() {
          var e = +this;
          if (m.hasOwnProperty(e)) {
            var t = m[e];
            delete m[e], t()
          }
        },
        w = function(e) {
          b.call(e.data)
        };
      h && p || (h = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return m[++f] = function() {
          s("function" == typeof e ? e : Function(e), t)
        }, i(f), f
      }, p = function(e) {
        delete m[e]
      }, "process" == n(67)(d) ? i = function(e) {
        d.nextTick(a(b, e, 1))
      } : g ? (o = new g, r = o.port2, o.port1.onmessage = w, i = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function(e) {
        u.postMessage(e + "", "*")
      }, u.addEventListener("message", w, !1)) : i = v in c("script") ? function(e) {
        l.appendChild(c("script"))[v] = function() {
          l.removeChild(this), b.call(e)
        }
      } : function(e) {
        setTimeout(a(b, e, 1), 0)
      }), e.exports = {
        set: h,
        clear: p
      }
    },
    192: function(e, t, n) {
      var i = n(59);
      e.exports = function(e, t) {
        for (var n in t) i(e, n, t[n]);
        return e
      }
    },
    193: function(e, t, n) {
      "use strict";
      var i = n(194);
      n(195)("Map", function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      }, {
        get: function(e) {
          var t = i.getEntry(this, e);
          return t && t.v
        },
        set: function(e, t) {
          return i.def(this, 0 === e ? 0 : e, t)
        }
      }, i, !0)
    },
    194: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(55),
        r = n(192),
        a = n(61),
        s = n(187),
        l = n(71),
        c = n(188),
        u = n(149),
        d = n(171),
        h = n(60)("id"),
        p = n(66),
        g = n(65),
        f = n(168),
        m = n(57),
        v = Object.isExtensible || g,
        b = m ? "_s" : "size",
        w = 0,
        x = function(e, t) {
          if (!g(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!p(e, h)) {
            if (!v(e)) return "F";
            if (!t) return "E";
            o(e, h, ++w)
          }
          return "O" + e[h]
        },
        y = function(e, t) {
          var n, i = x(t);
          if ("F" !== i) return e._i[i];
          for (n = e._f; n; n = n.n)
            if (n.k == t) return n
        };
      e.exports = {
        getConstructor: function(e, t, n, o) {
          var u = e(function(e, r) {
            s(e, u, t), e._i = i.create(null), e._f = void 0, e._l = void 0, e[b] = 0, void 0 != r && c(r, n, e[o], e)
          });
          return r(u.prototype, {
            clear: function() {
              for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
              e._f = e._l = void 0, e[b] = 0
            },
            "delete": function(e) {
              var t = this,
                n = y(t, e);
              if (n) {
                var i = n.n,
                  o = n.p;
                delete t._i[n.i], n.r = !0, o && (o.n = i), i && (i.p = o), t._f == n && (t._f = i), t._l == n && (t._l = o), t[b] --
              }
              return !!n
            },
            forEach: function(e) {
              for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                for (n(t.v, t.k, this); t && t.r;) t = t.p
            },
            has: function(e) {
              return !!y(this, e)
            }
          }), m && i.setDesc(u.prototype, "size", {
            get: function() {
              return l(this[b])
            }
          }), u
        },
        def: function(e, t, n) {
          var i, o, r = y(e, t);
          return r ? r.v = n : (e._l = r = {
            i: o = x(t, !0),
            k: t,
            v: n,
            p: i = e._l,
            n: void 0,
            r: !1
          }, e._f || (e._f = r), i && (i.n = r), e[b] ++, "F" !== o && (e._i[o] = r)), e
        },
        getEntry: y,
        setStrong: function(e, t, n) {
          u(e, t, function(e, t) {
            this._t = e, this._k = t, this._l = void 0
          }, function() {
            for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
            return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [n.k, n.v]) : (e._t = void 0, d(1))
          }, n ? "entries" : "values", !n, !0), f(t)
        }
      }
    },
    195: function(e, t, n) {
      "use strict";
      var i = n(53),
        o = n(52),
        r = n(59),
        a = n(192),
        s = n(188),
        l = n(187),
        c = n(65),
        u = n(58),
        d = n(165),
        h = n(94);
      e.exports = function(e, t, n, p, g, f) {
        var m = i[e],
          v = m,
          b = g ? "set" : "add",
          w = v && v.prototype,
          x = {},
          y = function(e) {
            var t = w[e];
            r(w, e, "delete" == e ? function(e) {
              return !(f && !c(e)) && t.call(this, 0 === e ? 0 : e)
            } : "has" == e ? function(e) {
              return !(f && !c(e)) && t.call(this, 0 === e ? 0 : e)
            } : "get" == e ? function(e) {
              return f && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
            } : "add" == e ? function(e) {
              return t.call(this, 0 === e ? 0 : e), this
            } : function(e, n) {
              return t.call(this, 0 === e ? 0 : e, n), this
            })
          };
        if ("function" == typeof v && (f || w.forEach && !u(function() {
            (new v).entries().next()
          }))) {
          var k, E = new v,
            _ = E[b](f ? {} : -0, 1) != E,
            T = u(function() {
              E.has(1)
            }),
            S = d(function(e) {
              new v(e)
            });
          S || (v = t(function(t, n) {
            l(t, v, e);
            var i = new m;
            return void 0 != n && s(n, g, i[b], i), i
          }), v.prototype = w, w.constructor = v), f || E.forEach(function(e, t) {
            k = 1 / t === -(1 / 0)
          }), (T || k) && (y("delete"), y("has"), g && y("get")), (k || _) && y(b), f && w.clear && delete w.clear
        } else v = p.getConstructor(t, e, g, b), a(v.prototype, n);
        return h(v, e), x[e] = v, o(o.G + o.W + o.F * (v != m), x), f || p.setStrong(v, e, g), v
      }
    },
    196: function(e, t, n) {
      "use strict";
      var i = n(194);
      n(195)("Set", function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      }, {
        add: function(e) {
          return i.def(this, e = 0 === e ? 0 : e, e)
        }
      }, i)
    },
    197: function(e, t, n) {
      "use strict";
      var i = n(51),
        o = n(59),
        r = n(198),
        a = n(65),
        s = n(66),
        l = r.frozenStore,
        c = r.WEAK,
        u = Object.isExtensible || a,
        d = {},
        h = n(195)("WeakMap", function(e) {
          return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        }, {
          get: function(e) {
            if (a(e)) {
              if (!u(e)) return l(this).get(e);
              if (s(e, c)) return e[c][this._i]
            }
          },
          set: function(e, t) {
            return r.def(this, e, t)
          }
        }, r, !0, !0);
      7 != (new h).set((Object.freeze || Object)(d), 7).get(d) && i.each.call(["delete", "has", "get", "set"], function(e) {
        var t = h.prototype,
          n = t[e];
        o(t, e, function(t, i) {
          if (a(t) && !u(t)) {
            var o = l(this)[e](t, i);
            return "set" == e ? this : o
          }
          return n.call(this, t, i)
        })
      })
    },
    198: function(e, t, n) {
      "use strict";
      var i = n(55),
        o = n(192),
        r = n(69),
        a = n(65),
        s = n(187),
        l = n(188),
        c = n(77),
        u = n(66),
        d = n(60)("weak"),
        h = Object.isExtensible || a,
        p = c(5),
        g = c(6),
        f = 0,
        m = function(e) {
          return e._l || (e._l = new v)
        },
        v = function() {
          this.a = []
        },
        b = function(e, t) {
          return p(e.a, function(e) {
            return e[0] === t
          })
        };
      v.prototype = {
        get: function(e) {
          var t = b(this, e);
          if (t) return t[1]
        },
        has: function(e) {
          return !!b(this, e)
        },
        set: function(e, t) {
          var n = b(this, e);
          n ? n[1] = t : this.a.push([e, t])
        },
        "delete": function(e) {
          var t = g(this.a, function(t) {
            return t[0] === e
          });
          return ~t && this.a.splice(t, 1), !!~t
        }
      }, e.exports = {
        getConstructor: function(e, t, n, i) {
          var r = e(function(e, o) {
            s(e, r, t), e._i = f++, e._l = void 0, void 0 != o && l(o, n, e[i], e)
          });
          return o(r.prototype, {
            "delete": function(e) {
              return !!a(e) && (h(e) ? u(e, d) && u(e[d], this._i) && delete e[d][this._i] : m(this)["delete"](e))
            },
            has: function(e) {
              return !!a(e) && (h(e) ? u(e, d) && u(e[d], this._i) : m(this).has(e))
            }
          }), r
        },
        def: function(e, t, n) {
          return h(r(t)) ? (u(t, d) || i(t, d, {}), t[d][e._i] = n) : m(e).set(t, n), e
        },
        frozenStore: m,
        WEAK: d
      }
    },
    199: function(e, t, n) {
      "use strict";
      var i = n(198);
      n(195)("WeakSet", function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      }, {
        add: function(e) {
          return i.def(this, e, !0)
        }
      }, i, !1, !0)
    },
    200: function(e, t, n) {
      var i = n(52),
        o = Function.apply,
        r = n(69);
      i(i.S, "Reflect", {
        apply: function(e, t, n) {
          return o.call(e, t, r(n))
        }
      })
    },
    201: function(e, t, n) {
      var i = n(51),
        o = n(52),
        r = n(62),
        a = n(69),
        s = n(65),
        l = Function.bind || n(54).Function.prototype.bind;
      o(o.S + o.F * n(58)(function() {
        function e() {}
        return !(Reflect.construct(function() {}, [], e) instanceof e)
      }), "Reflect", {
        construct: function(e, t) {
          r(e), a(t);
          var n = arguments.length < 3 ? e : r(arguments[2]);
          if (e == n) {
            switch (t.length) {
              case 0:
                return new e;
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3])
            }
            var o = [null];
            return o.push.apply(o, t), new(l.apply(e, o))
          }
          var c = n.prototype,
            u = i.create(s(c) ? c : Object.prototype),
            d = Function.apply.call(e, u, t);
          return s(d) ? d : u
        }
      })
    },
    202: function(e, t, n) {
      var i = n(51),
        o = n(52),
        r = n(69);
      o(o.S + o.F * n(58)(function() {
        Reflect.defineProperty(i.setDesc({}, 1, {
          value: 1
        }), 1, {
          value: 2
        })
      }), "Reflect", {
        defineProperty: function(e, t, n) {
          r(e);
          try {
            return i.setDesc(e, t, n), !0
          } catch (o) {
            return !1
          }
        }
      })
    },
    203: function(e, t, n) {
      var i = n(52),
        o = n(51).getDesc,
        r = n(69);
      i(i.S, "Reflect", {
        deleteProperty: function(e, t) {
          var n = o(r(e), t);
          return !(n && !n.configurable) && delete e[t]
        }
      })
    },
    204: function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(69),
        r = function(e) {
          this._t = o(e), this._i = 0;
          var t, n = this._k = [];
          for (t in e) n.push(t)
        };
      n(151)(r, "Object", function() {
        var e, t = this,
          n = t._k;
        do
          if (t._i >= n.length) return {
            value: void 0,
            done: !0
          };
        while (!((e = n[t._i++]) in t._t));
        return {
          value: e,
          done: !1
        }
      }), i(i.S, "Reflect", {
        enumerate: function(e) {
          return new r(e)
        }
      })
    },
    205: function(e, t, n) {
      function i(e, t) {
        var n, a, c = arguments.length < 3 ? e : arguments[2];
        return l(e) === c ? e[t] : (n = o.getDesc(e, t)) ? r(n, "value") ? n.value : void 0 !== n.get ? n.get.call(c) : void 0 : s(a = o.getProto(e)) ? i(a, t, c) : void 0
      }
      var o = n(51),
        r = n(66),
        a = n(52),
        s = n(65),
        l = n(69);
      a(a.S, "Reflect", {
        get: i
      })
    },
    206: function(e, t, n) {
      var i = n(51),
        o = n(52),
        r = n(69);
      o(o.S, "Reflect", {
        getOwnPropertyDescriptor: function(e, t) {
          return i.getDesc(r(e), t)
        }
      })
    },
    207: function(e, t, n) {
      var i = n(52),
        o = n(51).getProto,
        r = n(69);
      i(i.S, "Reflect", {
        getPrototypeOf: function(e) {
          return o(r(e))
        }
      })
    },
    208: function(e, t, n) {
      var i = n(52);
      i(i.S, "Reflect", {
        has: function(e, t) {
          return t in e
        }
      })
    },
    209: function(e, t, n) {
      var i = n(52),
        o = n(69),
        r = Object.isExtensible;
      i(i.S, "Reflect", {
        isExtensible: function(e) {
          return o(e), !r || r(e)
        }
      })
    },
    210: function(e, t, n) {
      var i = n(52);
      i(i.S, "Reflect", {
        ownKeys: n(211)
      })
    },
    211: function(e, t, n) {
      var i = n(51),
        o = n(69),
        r = n(53).Reflect;
      e.exports = r && r.ownKeys || function(e) {
        var t = i.getNames(o(e)),
          n = i.getSymbols;
        return n ? t.concat(n(e)) : t
      }
    },
    212: function(e, t, n) {
      var i = n(52),
        o = n(69),
        r = Object.preventExtensions;
      i(i.S, "Reflect", {
        preventExtensions: function(e) {
          o(e);
          try {
            return r && r(e), !0
          } catch (t) {
            return !1
          }
        }
      })
    },
    213: function(e, t, n) {
      function i(e, t, n) {
        var a, u, d = arguments.length < 4 ? e : arguments[3],
          h = o.getDesc(l(e), t);
        if (!h) {
          if (c(u = o.getProto(e))) return i(u, t, n, d);
          h = s(0)
        }
        return r(h, "value") ? !(h.writable === !1 || !c(d)) && (a = o.getDesc(d, t) || s(0), a.value = n, o.setDesc(d, t, a), !0) : void 0 !== h.set && (h.set.call(d, n), !0)
      }
      var o = n(51),
        r = n(66),
        a = n(52),
        s = n(56),
        l = n(69),
        c = n(65);
      a(a.S, "Reflect", {
        set: i
      })
    },
    214: function(e, t, n) {
      var i = n(52),
        o = n(104);
      o && i(i.S, "Reflect", {
        setPrototypeOf: function(e, t) {
          o.check(e, t);
          try {
            return o.set(e, t), !0
          } catch (n) {
            return !1
          }
        }
      })
    },
    223: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(224),
        r = {
          "http:": "80",
          "https:": "443"
        };
      e.exports = function() {
        i(document).ajaxSend(function(e, t, n) {
          var i = window.location,
            a = document.createElement("a");
          a.href = n.url, a.href = a.href;
          var s = a.port;
          s = "0" !== s ? s : r[a.protocol], s = s !== r[a.protocol] ? s : "";
          var l = a.protocol !== i.protocol || a.hostname !== i.hostname || s !== i.port;
          l || t.setRequestHeader("X-CsrfToken", o.get("csrftoken"))
        })
      }
    },
    225: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(226),
        a = n(215);
      e.exports = function() {
        var e = i.ajax;
        i.ajax = function() {
          var t = arguments.length >= 2 ? arguments[1] : arguments[0];
          if (t = o.extend({
              allowPrefetching: !0,
              cacheBusting: !0
            }, t), t.method) throw new Error('The "method" option is actually "type" ;)');
          if (t.allowPrefetch) throw new Error('The "allowPrefetch" option is actually "allowPrefetching" ;)');
          if (t.immediate && !t.allowPrefetching) throw new Error('The "immediate" option cannot be used with "allowPrefetching" false (mutually exclusives)');
          if ("GET" === t.type.toUpperCase() || t.url.indexOf(a.esSearchHost) > -1) {
            var n = r.get(t.url);
            if (!n && t.immediate) throw new Error('The "' + t.url + '" URL should be prefetched: immediate loading required');
            if (n && t.allowPrefetching) {
              var s = {
                status: 200,
                data: n
              };
              t.success && t.success(s.data, "success", s), t.complete && t.complete(s, "success");
              var l = i.Deferred().resolve(s.data, "success", s);
              return l.readyState = 4, l.status = 200, l.abort = function() {}, l
            }
            var c = e.apply(this, arguments);
            return c.then(function(e, n, o) {
              return r.register(t.url, e), i.Deferred().resolve(e, n, o)
            }), c
          }
          return "PATCH" === t.type.toUpperCase() ? (r.update(t.url, "string" == typeof t.data ? JSON.parse(t.data) : t.data), e.apply(this, arguments)) : t.cacheBusting ? (r.invalidate(t.url), e.apply(this, arguments)) : e.apply(this, arguments)
        }
      }
    },
    227: function(e, t, n) {
      "use strict";
      var i = n(228),
        o = n(215),
        r = n(233);
      e.exports = {
        install: function() {
          var e = {
              ignoreUrls: [/extensions\//i, /^chrome:\/\//i, /webtoolbar\//i],
              shouldSendCallback: function() {
                var e = n(271);
                if (e() && window.MSInputMethodContext && document.documentMode) return !1;
                var t = navigator.userAgent.toLowerCase();
                return t.indexOf("msie") === -1 || 9 !== parseInt(t.split("msie")[1])
              },
              release: o.version
            },
            t = i.config(o.sentryDSN, e);
          o.useSentry ? t.install() : console.warn("Sentry was not installed ; it is manually disabled.");
          var a = r.me();
          return a.isAuthenticated() && i.setUserContext({
            uid: a.get("uid"),
            username: a.get("username"),
            email: a.get("email")
          }), i
        },
        client: i
      }
    },
    228: function(e, t, n) {
      "use strict";
      var i = n(229),
        o = window.Raven,
        r = new i;
      r.noConflict = function() {
        return window.Raven = o, r
      }, r.afterLoad(), e.exports = r
    },
    229: function(e, t, n) {
      (function(t) {
        "use strict";

        function i() {
          return +new Date
        }

        function o() {
          this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = "undefined" != typeof document, this._lastCapturedException = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
            logger: "javascript",
            ignoreErrors: [],
            ignoreUrls: [],
            whitelistUrls: [],
            includePaths: [],
            crossOrigin: "anonymous",
            collectWindowErrors: !0,
            maxMessageLength: 0,
            stackTraceLimit: 50
          }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = window.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = i(), this._wrappedBuiltIns = [];
          for (var e in this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e]
        }
        var r = n(230),
          a = n(232),
          s = n(231),
          l = s.isFunction,
          c = s.isUndefined,
          u = s.isError,
          d = s.isEmptyObject,
          h = s.hasKey,
          p = s.joinRegExp,
          g = s.each,
          f = s.objectMerge,
          m = s.truncate,
          v = s.urlencode,
          b = s.uuid4,
          w = "source protocol user pass host port path".split(" "),
          x = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
        o.prototype = {
          VERSION: "2.3.0",
          debug: !1,
          TraceKit: r,
          config: function(e, t) {
            var n = this;
            if (this._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), this;
            if (!e) return this;
            t && g(t, function(e, t) {
              "tags" === e || "extra" === e ? n._globalContext[e] = t : n._globalOptions[e] = t
            });
            var i = this._parseDSN(e),
              o = i.path.lastIndexOf("/"),
              a = i.path.substr(1, o);
            return this._dsn = e, this._globalOptions.ignoreErrors.push(/^Script error\.?$/), this._globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), this._globalOptions.ignoreErrors = p(this._globalOptions.ignoreErrors), this._globalOptions.ignoreUrls = !!this._globalOptions.ignoreUrls.length && p(this._globalOptions.ignoreUrls), this._globalOptions.whitelistUrls = !!this._globalOptions.whitelistUrls.length && p(this._globalOptions.whitelistUrls), this._globalOptions.includePaths = p(this._globalOptions.includePaths), this._globalKey = i.user, this._globalSecret = i.pass && i.pass.substr(1), this._globalProject = i.path.substr(o + 1), this._globalServer = this._getGlobalServer(i), this._globalEndpoint = this._globalServer + "/" + a + "api/" + this._globalProject + "/store/", this._globalOptions.fetchContext && (r.remoteFetching = !0), this._globalOptions.linesOfContext && (r.linesOfContext = this._globalOptions.linesOfContext), r.collectWindowErrors = !!this._globalOptions.collectWindowErrors, this
          },
          install: function() {
            var e = this;
            return this.isSetup() && !this._isRavenInstalled && (r.report.subscribe(function() {
              e._handleOnErrorStackInfo.apply(e, arguments)
            }), this._wrapBuiltIns(), this._drainPlugins(), this._isRavenInstalled = !0), Error.stackTraceLimit = this._globalOptions.stackTraceLimit, this
          },
          context: function(e, t, n) {
            return l(e) && (n = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, n)
          },
          wrap: function(e, t) {
            function n() {
              for (var n = [], o = arguments.length, r = !e || e && e.deep !== !1; o--;) n[o] = r ? i.wrap(e, arguments[o]) : arguments[o];
              try {
                return t.apply(this, n)
              } catch (a) {
                throw i._ignoreNextOnError(), i.captureException(a, e), a
              }
            }
            var i = this;
            if (c(t) && !l(e)) return e;
            if (l(e) && (t = e, e = void 0), !l(t)) return t;
            try {
              if (t.__raven__) return t
            } catch (o) {
              return t
            }
            if (t.__raven_wrapper__) return t.__raven_wrapper__;
            for (var r in t) h(t, r) && (n[r] = t[r]);
            return t.__raven_wrapper__ = n, n.prototype = t.prototype, n.__raven__ = !0, n.__inner__ = t, n
          },
          uninstall: function() {
            return r.report.uninstall(), this._restoreBuiltIns(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
          },
          captureException: function(e, t) {
            if (!u(e)) return this.captureMessage(e, t);
            this._lastCapturedException = e;
            try {
              var n = r.computeStackTrace(e);
              this._handleStackInfo(n, t)
            } catch (i) {
              if (e !== i) throw i
            }
            return this
          },
          captureMessage: function(e, t) {
            if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) return this._send(f({
              message: e + ""
            }, t)), this
          },
          addPlugin: function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this
          },
          setUserContext: function(e) {
            return this._globalContext.user = e, this
          },
          setExtraContext: function(e) {
            return this._mergeContext("extra", e), this
          },
          setTagsContext: function(e) {
            return this._mergeContext("tags", e), this
          },
          clearContext: function() {
            return this._globalContext = {}, this
          },
          getContext: function() {
            return JSON.parse(JSON.stringify(this._globalContext))
          },
          setRelease: function(e) {
            return this._globalOptions.release = e, this
          },
          setDataCallback: function(e) {
            return this._globalOptions.dataCallback = e, this
          },
          setShouldSendCallback: function(e) {
            return this._globalOptions.shouldSendCallback = e, this
          },
          setTransport: function(e) {
            return this._globalOptions.transport = e, this
          },
          lastException: function() {
            return this._lastCapturedException
          },
          lastEventId: function() {
            return this._lastEventId
          },
          isSetup: function() {
            return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
          },
          afterLoad: function() {
            var e = window.RavenConfig;
            e && this.config(e.dsn, e.config).install()
          },
          showReportDialog: function(e) {
            if (window.document) {
              e = e || {};
              var t = e.eventId || this.lastEventId();
              if (!t) throw new a("Missing eventId");
              var n = e.dsn || this._dsn;
              if (!n) throw new a("Missing DSN");
              var i = encodeURIComponent,
                o = "";
              o += "?eventId=" + i(t), o += "&dsn=" + i(n);
              var r = e.user || this._globalContext.user;
              r && (r.name && (o += "&name=" + i(r.name)), r.email && (o += "&email=" + i(r.email)));
              var s = this._getGlobalServer(this._parseDSN(n)),
                l = document.createElement("script");
              l.async = !0, l.src = s + "/api/embed/error-page/" + o, (document.head || document.body).appendChild(l)
            }
          },
          _ignoreNextOnError: function() {
            var e = this;
            this._ignoreOnError += 1, setTimeout(function() {
              e._ignoreOnError -= 1
            })
          },
          _triggerEvent: function(e, t) {
            var n, i;
            if (this._hasDocument) {
              t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), n.eventType = e);
              for (i in t) h(t, i) && (n[i] = t[i]);
              if (document.createEvent) document.dispatchEvent(n);
              else try {
                document.fireEvent("on" + n.eventType.toLowerCase(), n)
              } catch (o) {}
            }
          },
          _wrapBuiltIns: function() {
            function e(e, t, n, o) {
              var r = e[t];
              e[t] = n(r), o || i._wrappedBuiltIns.push([e, t, r])
            }

            function n(e) {
              return function(t, n) {
                var o = [].slice.call(arguments),
                  r = o[0];
                return l(r) && (o[0] = i.wrap(r)), e.apply ? e.apply(this, o) : e(o[0], o[1])
              }
            }
            var i = this;
            e(window, "setTimeout", n), e(window, "setInterval", n), window.requestAnimationFrame && e(window, "requestAnimationFrame", function(e) {
              return function(t) {
                return e(i.wrap(t))
              }
            }), "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(t) {
              var n = window[t] && window[t].prototype;
              n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (e(n, "addEventListener", function(e) {
                return function(t, n, o, r) {
                  try {
                    n && n.handleEvent && (n.handleEvent = i.wrap(n.handleEvent))
                  } catch (a) {}
                  return e.call(this, t, i.wrap(n), o, r)
                }
              }), e(n, "removeEventListener", function(e) {
                return function(t, n, i, o) {
                  return n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n), e.call(this, t, n, i, o)
                }
              }))
            }), "XMLHttpRequest" in window && e(XMLHttpRequest.prototype, "send", function(t) {
              return function(n) {
                var o = this;
                return "onreadystatechange onload onerror onprogress".replace(/\w+/g, function(t) {
                  t in o && "[object Function]" === Object.prototype.toString.call(o[t]) && e(o, t, function(e) {
                    return i.wrap(e)
                  }, !0)
                }), t.apply(this, arguments)
              }
            });
            var o = t || window.$;
            o && o.fn && o.fn.ready && e(o.fn, "ready", function(e) {
              return function(t) {
                return e.call(this, i.wrap(t))
              }
            })
          },
          _restoreBuiltIns: function() {
            for (var e; this._wrappedBuiltIns.length;) {
              e = this._wrappedBuiltIns.shift();
              var t = e[0],
                n = e[1],
                i = e[2];
              t[n] = i
            }
          },
          _drainPlugins: function() {
            var e = this;
            g(this._plugins, function(t, n) {
              var i = n[0],
                o = n[1];
              i.apply(e, [e].concat(o))
            })
          },
          _parseDSN: function(e) {
            var t = x.exec(e),
              n = {},
              i = 7;
            try {
              for (; i--;) n[w[i]] = t[i] || ""
            } catch (o) {
              throw new a("Invalid DSN: " + e)
            }
            if (n.pass && !this._globalOptions.allowSecretKey) throw new a("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
            return n
          },
          _getGlobalServer: function(e) {
            var t = "//" + e.host + (e.port ? ":" + e.port : "");
            return e.protocol && (t = e.protocol + ":" + t), t
          },
          _handleOnErrorStackInfo: function() {
            this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
          },
          _handleStackInfo: function(e, t) {
            var n = this,
              i = [];
            e.stack && e.stack.length && g(e.stack, function(e, t) {
              var o = n._normalizeFrame(t);
              o && i.push(o)
            }), this._triggerEvent("handle", {
              stackInfo: e,
              options: t
            }), this._processException(e.name, e.message, e.url, e.lineno, i.slice(0, this._globalOptions.stackTraceLimit), t)
          },
          _normalizeFrame: function(e) {
            if (e.url) {
              var t, n = {
                  filename: e.url,
                  lineno: e.line,
                  colno: e.column,
                  "function": e.func || "?"
                },
                i = this._extractContextFromFrame(e);
              if (i) {
                var o = ["pre_context", "context_line", "post_context"];
                for (t = 3; t--;) n[o[t]] = i[t]
              }
              return n.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n["function"]) || /raven\.(min\.)?js$/.test(n.filename)), n
            }
          },
          _extractContextFromFrame: function(e) {
            if (e.context && this._globalOptions.fetchContext) {
              for (var t = e.context, n = ~~(t.length / 2), i = t.length, o = !1; i--;)
                if (t[i].length > 300) {
                  o = !0;
                  break
                }
              if (o) {
                if (c(e.column)) return;
                return [
                  [], t[n].substr(e.column, 50), []
                ]
              }
              return [t.slice(0, n), t[n], t.slice(n + 1)]
            }
          },
          _processException: function(e, t, n, i, o, r) {
            var a, s;
            if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) && (t += "", t = m(t, this._globalOptions.maxMessageLength), s = (e ? e + ": " : "") + t, s = m(s, this._globalOptions.maxMessageLength), o && o.length ? (n = o[0].filename || n, o.reverse(), a = {
                frames: o
              }) : n && (a = {
                frames: [{
                  filename: n,
                  lineno: i,
                  in_app: !0
                }]
              }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
              var l = f({
                exception: {
                  values: [{
                    type: e,
                    value: t,
                    stacktrace: a
                  }]
                },
                culprit: n,
                message: s
              }, r);
              this._send(l)
            }
          },
          _trimPacket: function(e) {
            var t = this._globalOptions.maxMessageLength;
            if (e.message = m(e.message, t), e.exception) {
              var n = e.exception.values[0];
              n.value = m(n.value, t)
            }
            return e
          },
          _getHttpData: function() {
            if (this._hasDocument && document.location && document.location.href) {
              var e = {
                headers: {
                  "User-Agent": navigator.userAgent
                }
              };
              return e.url = document.location.href, document.referrer && (e.headers.Referer = document.referrer), e
            }
          },
          _send: function(e) {
            var t = this,
              n = this._globalOptions,
              o = {
                project: this._globalProject,
                logger: n.logger,
                platform: "javascript"
              },
              r = this._getHttpData();
            if (r && (o.request = r), e = f(o, e), e.tags = f(f({}, this._globalContext.tags), e.tags), e.extra = f(f({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = i() - this._startTime, d(e.tags) && delete e.tags, this._globalContext.user && (e.user = this._globalContext.user), n.release && (e.release = n.release), n.serverName && (e.server_name = n.serverName), l(n.dataCallback) && (e = n.dataCallback(e) || e), e && !d(e) && (!l(n.shouldSendCallback) || n.shouldSendCallback(e)) && (this._lastEventId = e.event_id || (e.event_id = b()), e = this._trimPacket(e), this._logDebug("debug", "Raven about to send:", e), this.isSetup())) {
              var a = {
                sentry_version: "7",
                sentry_client: "raven-js/" + this.VERSION,
                sentry_key: this._globalKey
              };
              this._globalSecret && (a.sentry_secret = this._globalSecret);
              var s = this._globalEndpoint;
              (n.transport || this._makeRequest).call(this, {
                url: s,
                auth: a,
                data: e,
                options: n,
                onSuccess: function() {
                  t._triggerEvent("success", {
                    data: e,
                    src: s
                  })
                },
                onError: function() {
                  t._triggerEvent("failure", {
                    data: e,
                    src: s
                  })
                }
              })
            }
          },
          _makeImageRequest: function(e) {
            e.auth.sentry_data = JSON.stringify(e.data);
            var t = this._newImage(),
              n = e.url + "?" + v(e.auth),
              i = e.options.crossOrigin;
            (i || "" === i) && (t.crossOrigin = i), t.onload = e.onSuccess, t.onerror = t.onabort = e.onError, t.src = n
          },
          _makeXhrRequest: function(e) {
            function t() {
              200 === n.status ? e.onSuccess && e.onSuccess() : e.onError && e.onError()
            }
            var n, i = e.url;
            n = new XMLHttpRequest, "withCredentials" in n ? n.onreadystatechange = function() {
              4 === n.readyState && t()
            } : (n = new XDomainRequest, i = i.replace(/^https?:/, ""), n.onload = t), n.open("POST", i + "?" + v(e.auth)), n.send(JSON.stringify(e.data))
          },
          _makeRequest: function(e) {
            var t = "withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest;
            return (t ? this._makeXhrRequest : this._makeImageRequest)(e)
          },
          _newImage: function() {
            return document.createElement("img")
          },
          _logDebug: function(e) {
            this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
          },
          _mergeContext: function(e, t) {
            c(t) ? delete this._globalContext[e] : this._globalContext[e] = f(this._globalContext[e] || {}, t)
          }
        }, o.prototype.setUser = o.prototype.setUserContext, o.prototype.setReleaseContext = o.prototype.setRelease, e.exports = o
      }).call(t, n(220))
    },
    230: function(e, t, n) {
      "use strict";

      function i() {
        return "undefined" == typeof document ? "" : document.location.href
      }
      var o = n(231),
        r = o.hasKey,
        a = o.isString,
        s = o.isUndefined,
        l = {
          remoteFetching: !1,
          collectWindowErrors: !0,
          linesOfContext: 7,
          debug: !1
        },
        c = [].slice,
        u = "?",
        d = /^(?:Uncaught )?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error)\: ?(.*)$/;
      l.report = function() {
        function e(e) {
          u(), v.push(e)
        }

        function t(e) {
          for (var t = v.length - 1; t >= 0; --t) v[t] === e && v.splice(t, 1)
        }

        function n() {
          h(), v = []
        }

        function o(e, t) {
          var n = null;
          if (!t || l.collectWindowErrors) {
            for (var i in v)
              if (r(v, i)) try {
                v[i].apply(null, [e].concat(c.call(arguments, 2)))
              } catch (o) {
                n = o
              }
              if (n) throw n
          }
        }

        function s(e, t, n, r, s) {
          var c = null;
          if (x) l.computeStackTrace.augmentStackTraceWithInitialElement(x, t, n, e), p();
          else if (s) c = l.computeStackTrace(s), o(c, !0);
          else {
            var u = {
              url: t,
              line: n,
              column: r
            };
            u.func = l.computeStackTrace.guessFunctionName(u.url, u.line), u.context = l.computeStackTrace.gatherContext(u.url, u.line);
            var h, g = void 0,
              m = e;
            if (a(e)) {
              var h = e.match(d);
              h && (g = h[1], m = h[2])
            }
            c = {
              name: g,
              message: m,
              url: i(),
              stack: [u]
            }, o(c, !0)
          }
          return !!f && f.apply(this, arguments)
        }

        function u() {
          m || (f = window.onerror, window.onerror = s, m = !0)
        }

        function h() {
          m && (window.onerror = f, m = !1, f = void 0)
        }

        function p() {
          var e = x,
            t = b;
          b = null, x = null, w = null, o.apply(null, [e, !1].concat(t))
        }

        function g(e, t) {
          var n = c.call(arguments, 1);
          if (x) {
            if (w === e) return;
            p()
          }
          var i = l.computeStackTrace(e);
          if (x = i, w = e, b = n, window.setTimeout(function() {
              w === e && p()
            }, i.incomplete ? 2e3 : 0), t !== !1) throw e
        }
        var f, m, v = [],
          b = null,
          w = null,
          x = null;
        return g.subscribe = e, g.unsubscribe = t, g.uninstall = n, g
      }(), l.computeStackTrace = function() {
        function e(e) {
          if (!l.remoteFetching) return "";
          try {
            var t = function() {
                try {
                  return new window.XMLHttpRequest
                } catch (e) {
                  return new window.ActiveXObject("Microsoft.XMLHTTP")
                }
              },
              n = t();
            return n.open("GET", e, !1), n.send(""), n.responseText
          } catch (i) {
            return ""
          }
        }

        function t(t) {
          if (!a(t)) return [];
          if (!r(y, t)) {
            var n = "",
              i = "";
            try {
              i = document.domain
            } catch (o) {}
            t.indexOf(i) !== -1 && (n = e(t)), y[t] = n ? n.split("\n") : []
          }
          return y[t]
        }

        function n(e, n) {
          var i, o = /function ([^(]*)\(([^)]*)\)/,
            r = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
            a = "",
            l = 10,
            c = t(e);
          if (!c.length) return u;
          for (var d = 0; d < l; ++d)
            if (a = c[n - d] + a, !s(a)) {
              if (i = r.exec(a)) return i[1];
              if (i = o.exec(a)) return i[1]
            }
          return u
        }

        function o(e, n) {
          var i = t(e);
          if (!i.length) return null;
          var o = [],
            r = Math.floor(l.linesOfContext / 2),
            a = r + l.linesOfContext % 2,
            c = Math.max(0, n - r - 1),
            u = Math.min(i.length, n + a - 1);
          n -= 1;
          for (var d = c; d < u; ++d) s(i[d]) || o.push(i[d]);
          return o.length > 0 ? o : null
        }

        function c(e) {
          return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }

        function d(e) {
          return c(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }

        function h(e, n) {
          for (var i, o, r = 0, a = n.length; r < a; ++r)
            if ((i = t(n[r])).length && (i = i.join("\n"), o = e.exec(i))) return {
              url: n[r],
              line: i.substring(0, o.index).split("\n").length,
              column: o.index - i.lastIndexOf("\n", o.index) - 1
            };
          return null
        }

        function p(e, n, i) {
          var o, r = t(n),
            a = new RegExp("\\b" + c(e) + "\\b");
          return i -= 1, r && r.length > i && (o = a.exec(r[i])) ? o.index : null
        }

        function g(e) {
          if ("undefined" != typeof document) {
            for (var t, n, i, o, r = [window.location.href], a = document.getElementsByTagName("script"), s = "" + e, l = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, u = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, p = 0; p < a.length; ++p) {
              var g = a[p];
              g.src && r.push(g.src)
            }
            if (i = l.exec(s)) {
              var f = i[1] ? "\\s+" + i[1] : "",
                m = i[2].split(",").join("\\s*,\\s*");
              t = c(i[3]).replace(/;$/, ";?"), n = new RegExp("function" + f + "\\s*\\(\\s*" + m + "\\s*\\)\\s*{\\s*" + t + "\\s*}")
            } else n = new RegExp(c(s).replace(/\s+/g, "\\s+"));
            if (o = h(n, r)) return o;
            if (i = u.exec(s)) {
              var v = i[1];
              if (t = d(i[2]), n = new RegExp("on" + v + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), o = h(n, r[0])) return o;
              if (n = new RegExp(t), o = h(n, r)) return o
            }
            return null
          }
        }

        function f(e) {
          if (!s(e.stack) && e.stack) {
            for (var t, r, a = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, d = e.stack.split("\n"), h = [], g = /^(.*) is undefined$/.exec(e.message), f = 0, m = d.length; f < m; ++f) {
              if (t = a.exec(d[f])) {
                var v = t[2] && t[2].indexOf("native") !== -1;
                r = {
                  url: v ? null : t[2],
                  func: t[1] || u,
                  args: v ? [t[2]] : [],
                  line: t[3] ? +t[3] : null,
                  column: t[4] ? +t[4] : null
                }
              } else if (t = c.exec(d[f])) r = {
                url: t[2],
                func: t[1] || u,
                args: [],
                line: +t[3],
                column: t[4] ? +t[4] : null
              };
              else {
                if (!(t = l.exec(d[f]))) continue;
                r = {
                  url: t[3],
                  func: t[1] || u,
                  args: t[2] ? t[2].split(",") : [],
                  line: t[4] ? +t[4] : null,
                  column: t[5] ? +t[5] : null
                }
              }!r.func && r.line && (r.func = n(r.url, r.line)), r.line && (r.context = o(r.url, r.line)), h.push(r)
            }
            return h.length ? (h[0].line && !h[0].column && g ? h[0].column = p(g[1], h[0].url, h[0].line) : h[0].column || s(e.columnNumber) || (h[0].column = e.columnNumber + 1), {
              name: e.name,
              message: e.message,
              url: i(),
              stack: h
            }) : null
          }
        }

        function m(e) {
          var t = e.stacktrace;
          if (!s(e.stacktrace) && e.stacktrace) {
            for (var r, a = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, l = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, c = t.split("\n"), u = [], d = 0; d < c.length; d += 2) {
              var h = null;
              if ((r = a.exec(c[d])) ? h = {
                  url: r[2],
                  line: +r[1],
                  column: null,
                  func: r[3],
                  args: []
                } : (r = l.exec(c[d])) && (h = {
                  url: r[6],
                  line: +r[1],
                  column: +r[2],
                  func: r[3] || r[4],
                  args: r[5] ? r[5].split(",") : []
                }), h) {
                if (!h.func && h.line && (h.func = n(h.url, h.line)), h.line) try {
                  h.context = o(h.url, h.line)
                } catch (p) {}
                h.context || (h.context = [c[d + 1]]), u.push(h)
              }
            }
            return u.length ? {
              name: e.name,
              message: e.message,
              url: i(),
              stack: u
            } : null
          }
        }

        function v(e) {
          var a = e.message.split("\n");
          if (a.length < 4) return null;
          var s, l = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
            c = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
            u = /^\s*Line (\d+) of function script\s*$/i,
            p = [],
            g = document.getElementsByTagName("script"),
            f = [];
          for (var m in g) r(g, m) && !g[m].src && f.push(g[m]);
          for (var v = 2; v < a.length; v += 2) {
            var b = null;
            if (s = l.exec(a[v])) b = {
              url: s[2],
              func: s[3],
              args: [],
              line: +s[1],
              column: null
            };
            else if (s = c.exec(a[v])) {
              b = {
                url: s[3],
                func: s[4],
                args: [],
                line: +s[1],
                column: null
              };
              var w = +s[1],
                x = f[s[2] - 1];
              if (x) {
                var y = t(b.url);
                if (y) {
                  y = y.join("\n");
                  var k = y.indexOf(x.innerText);
                  k >= 0 && (b.line = w + y.substring(0, k).split("\n").length)
                }
              }
            } else if (s = u.exec(a[v])) {
              var E = window.location.href.replace(/#.*$/, ""),
                _ = new RegExp(d(a[v + 1])),
                T = h(_, [E]);
              b = {
                url: E,
                func: "",
                args: [],
                line: T ? T.line : s[1],
                column: null
              }
            }
            if (b) {
              b.func || (b.func = n(b.url, b.line));
              var S = o(b.url, b.line),
                C = S ? S[Math.floor(S.length / 2)] : null;
              S && C.replace(/^\s*/, "") === a[v + 1].replace(/^\s*/, "") ? b.context = S : b.context = [a[v + 1]], p.push(b)
            }
          }
          return p.length ? {
            name: e.name,
            message: a[0],
            url: i(),
            stack: p
          } : null
        }

        function b(e, t, i, r) {
          var a = {
            url: t,
            line: i
          };
          if (a.url && a.line) {
            e.incomplete = !1, a.func || (a.func = n(a.url, a.line)), a.context || (a.context = o(a.url, a.line));
            var s = / '([^']+)' /.exec(r);
            if (s && (a.column = p(s[1], a.url, a.line)), e.stack.length > 0 && e.stack[0].url === a.url) {
              if (e.stack[0].line === a.line) return !1;
              if (!e.stack[0].line && e.stack[0].func === a.func) return e.stack[0].line = a.line, e.stack[0].context = a.context, !1
            }
            return e.stack.unshift(a), e.partial = !0, !0
          }
          return e.incomplete = !0, !1
        }

        function w(e, t) {
          for (var o, r, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], d = {}, h = !1, f = w.caller; f && !h; f = f.caller)
            if (f !== x && f !== l.report) {
              if (r = {
                  url: null,
                  func: u,
                  line: null,
                  column: null
                }, f.name ? r.func = f.name : (o = s.exec(f.toString())) && (r.func = o[1]), "undefined" == typeof r.func) try {
                r.func = o.input.substring(0, o.input.indexOf("{"))
              } catch (m) {}
              if (a = g(f)) {
                r.url = a.url, r.line = a.line, r.func === u && (r.func = n(r.url, r.line));
                var v = / '([^']+)' /.exec(e.message || e.description);
                v && (r.column = p(v[1], a.url, a.line))
              }
              d["" + f] ? h = !0 : d["" + f] = !0, c.push(r)
            }
          t && c.splice(0, t);
          var y = {
            name: e.name,
            message: e.message,
            url: i(),
            stack: c
          };
          return b(y, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), y
        }

        function x(e, t) {
          var n = null;
          t = null == t ? 0 : +t;
          try {
            if (n = m(e)) return n
          } catch (o) {
            if (l.debug) throw o
          }
          try {
            if (n = f(e)) return n
          } catch (o) {
            if (l.debug) throw o
          }
          try {
            if (n = v(e)) return n
          } catch (o) {
            if (l.debug) throw o
          }
          try {
            if (n = w(e, t + 1)) return n
          } catch (o) {
            if (l.debug) throw o
          }
          return {
            name: e.name,
            message: e.message,
            url: i()
          }
        }
        var y = {};
        return x.augmentStackTraceWithInitialElement = b, x.computeStackTraceFromStackProp = f, x.guessFunctionName = n, x.gatherContext = o, x
      }(), e.exports = l
    },
    231: function(e, t) {
      "use strict";

      function n(e) {
        return void 0 === e
      }

      function i(e) {
        return "function" == typeof e
      }

      function o(e) {
        return "[object String]" === f.toString.call(e)
      }

      function r(e) {
        return "object" == typeof e && null !== e
      }

      function a(e) {
        for (var t in e) return !1;
        return !0
      }

      function s(e) {
        var t = f.toString.call(e);
        return r(e) && "[object Error]" === t || "[object Exception]" === t || e instanceof Error
      }

      function l(e, t) {
        var i, o;
        if (n(e.length))
          for (i in e) d(e, i) && t.call(null, i, e[i]);
        else if (o = e.length)
          for (i = 0; i < o; i++) t.call(null, i, e[i])
      }

      function c(e, t) {
        return t ? (l(t, function(t, n) {
          e[t] = n
        }), e) : e
      }

      function u(e, t) {
        return !t || e.length <= t ? e : e.substr(0, t) + "…"
      }

      function d(e, t) {
        return f.hasOwnProperty.call(e, t)
      }

      function h(e) {
        for (var t, n = [], i = 0, r = e.length; i < r; i++) t = e[i], o(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
        return new RegExp(n.join("|"), "i")
      }

      function p(e) {
        var t = [];
        return l(e, function(e, n) {
          t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
        }), t.join("&")
      }

      function g() {
        var e = window.crypto || window.msCrypto;
        if (!n(e) && e.getRandomValues) {
          var t = new Uint16Array(8);
          e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
          var i = function(e) {
            for (var t = e.toString(16); t.length < 4;) t = "0" + t;
            return t
          };
          return i(t[0]) + i(t[1]) + i(t[2]) + i(t[3]) + i(t[4]) + i(t[5]) + i(t[6]) + i(t[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
          var t = 16 * Math.random() | 0,
            n = "x" === e ? t : 3 & t | 8;
          return n.toString(16)
        })
      }
      var f = Object.prototype;
      e.exports = {
        isUndefined: n,
        isFunction: i,
        isString: o,
        isObject: r,
        isEmptyObject: a,
        isError: s,
        each: l,
        objectMerge: c,
        truncate: u,
        hasKey: d,
        joinRegExp: h,
        urlencode: p,
        uuid4: g
      }
    },
    232: function(e, t) {
      "use strict";

      function n(e) {
        this.name = "RavenConfigError", this.message = e
      }
      n.prototype = new Error, n.prototype.constructor = n, e.exports = n
    },
    272: function(e, t, n) {
      "use strict";
      var i = n(220);
      e.exports = function() {
        i(document).on("focus blur", "*", function(e) {
          var t = i(e.target).attr("id"),
            n = e.target === document.activeElement;
          "undefined" != typeof t && i("label[for]").filter(function() {
            return i(this).attr("for") === t
          }).toggleClass("focused", n)
        }), i(document).on("input", "input, textarea", function(e) {
          i(e.target).addClass("edited").toggleClass("empty", "" === i(e.target).val())
        }), i(document).on("submit", "form:not([action])", function(e) {
          e.preventDefault()
        }), i(".hover-menu").css("display", "none"), i(document.documentElement).addClass("ready"), i(document).on("keydown", "form textarea", function(e) {
          e.ctrlKey && 13 === e.keyCode && i(e.target).closest("form").submit()
        }), i(document).on("click", "[data-link]", function(e) {
          var t = e.currentTarget !== e.target ? i(e.target).parentsUntil(e.currentTarget) : i();
          t.andSelf().filter("a, [data-link], [data-action]").length > 0 || (e.metaKey || e.ctrlKey ? window.open(i(e.currentTarget).attr("data-link")) : document.location = i(e.currentTarget).attr("data-link"))
        }), i(document).on("click", "a", function(e) {
          var t = e.currentTarget !== e.target ? i(e.target).parentsUntil(e.currentTarget) : i();
          0 !== t.andSelf().filter("[data-link], [data-action]").length && e.preventDefault()
        }), i(document).on("mousedown", "label[for]", function(e) {
          if (e.target === e.currentTarget) {
            var t = i(e.currentTarget).attr("for"),
              n = document.getElementById(t);
            n && n === document.activeElement && e.preventDefault()
          }
        }), i(document).on("mouseover", ":has(> .hover-menu)", function(e) {
          var t = i(e.currentTarget);
          t.children(".hover-menu").css("display", ""), i(".hover-menu").not(t.parents(".hover-menu")).not(t.find(".hover-menu")).css("display", "none")
        })
      }
    },
    277: function(e, t, n) {
      var i, o, r;
      /*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
       * Licensed under the MIT License (LICENSE.txt).
       *
       * Version: 3.1.4
       *
       * Requires: 1.2.2+
       */
      ! function(a) {
        o = [n(220)], i = a, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r))
      }(function(e) {
        function t(t) {
          var o, r = t || window.event,
            a = [].slice.call(arguments, 1),
            s = 0,
            l = 0,
            c = 0,
            u = 0,
            d = 0;
          return t = e.event.fix(r), t.type = "mousewheel", r.wheelDelta && (s = r.wheelDelta), r.detail && (s = r.detail * -1), c = s, void 0 !== r.axis && r.axis === r.HORIZONTAL_AXIS && (c = 0, l = s * -1), r.deltaY && (c = r.deltaY * -1, s = c), r.deltaX && (l = r.deltaX, s = l * -1), void 0 !== r.wheelDeltaY && (c = r.wheelDeltaY), void 0 !== r.wheelDeltaX && (l = r.wheelDeltaX * -1), u = Math.abs(s), (!n || u < n) && (n = u), d = Math.max(Math.abs(c), Math.abs(l)), (!i || d < i) && (i = d), o = s > 0 ? "floor" : "ceil", s = Math[o](s / n), l = Math[o](l / i), c = Math[o](c / i), a.unshift(t, s, l, c), (e.event.dispatch || e.event.handle).apply(this, a)
        }
        var n, i, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
        if (e.event.fixHooks)
          for (var a = o.length; a;) e.event.fixHooks[o[--a]] = e.event.mouseHooks;
        e.event.special.mousewheel = {
          setup: function() {
            if (this.addEventListener)
              for (var e = r.length; e;) this.addEventListener(r[--e], t, !1);
            else this.onmousewheel = t
          },
          teardown: function() {
            if (this.removeEventListener)
              for (var e = r.length; e;) this.removeEventListener(r[--e], t, !1);
            else this.onmousewheel = null
          }
        }, e.fn.extend({
          mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
          },
          unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
          }
        })
      })
    },
    278: function(e, t, n) {
      "use strict";
      var i = n(220);
      i.fn.toggleAttr = function(e, t, n) {
        return arguments.length < 3 && (n = t, t = e), this.each(function() {
          if ("undefined" == typeof n) {
            var o = i(this).attr(e),
              r = !("undefined" == typeof o || o === !1);
            i(this).toggleAttr(e, t, !r)
          } else n ? i(this).attr(e, t) : i(this).removeAttr(e)
        })
      }, e.exports = i.fn.toggleAttr
    },
    280: function(e, t, n) {
      "use strict";
      var i = n(234);
      e.exports = i.Router
    },
    286: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(233);
      e.exports = {
        _dragAndDropEnabled: !1,
        initializeDragAndDrop: function(e) {
          "boolean" == typeof this.options.dragAndDrop && (this.options.dragAndDrop = {
            enabled: this.options.dragAndDrop
          }), this.options.dragAndDrop = this.options.dragAndDrop || {}, e && o.extend(this.options.dragAndDrop, e), this._dragAndDropEnabled = void 0 === this.options.dragAndDrop.enabled || this.options.dragAndDrop.enabled, this.onDragEnter = this.onDragEnter.bind(this), this.onDragOver = this.onDragOver.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.onDrop = this.onDrop.bind(this), this._dragAndDropInitialized = !0, this.delegateDragAndDrop()
        },
        getDragAndDropEnabled: function() {
          return this._dragAndDropEnabled
        },
        setDragAndDropElements: function() {
          this.setDragAndDropTargetElement(), this.setDragAndDropDropboxElement()
        },
        setDragAndDropTargetElement: function() {
          this.options.dragAndDrop.target ? "object" == typeof this.options.dragAndDrop.target || this.options.dragAndDrop.external ? this._$dragAndDropTarget = i(this.options.dragAndDrop.target) : this.options.dragAndDrop.external || (this._$dragAndDropTarget = this.$(this.options.dragAndDrop.target)) : this._$dragAndDropTarget = this.$el
        },
        getDragAndDropTarget: function() {
          return this._$dragAndDropTarget
        },
        getDragAndDropDropbox: function() {
          return this._$dropbox
        },
        setDragAndDropDropboxElement: function() {
          if (this.options.dragAndDrop.dropbox) {
            var e = this.options.dragAndDrop.dropbox,
              t = typeof e;
            "string" === t ? this._$dropbox = this.$(e) : "function" === t ? this._$dropbox = i(e.call(this)) : this._$dropbox = i(e)
          } else this._$dropbox = this._$dragAndDropTarget
        },
        delegateDragAndDrop: function() {
          this._dragAndDropInitialized && (this.setDragAndDropElements(), this._$dragAndDropTarget && r.me().isAuthenticated() && this.getDragAndDropEnabled() && (this._$dragAndDropTarget.on("dragenter", this.onDragEnter), this._$dragAndDropTarget.on("dragover", this.onDragOver), this._$dragAndDropTarget.on("drop", this.onDrop), this._$dragAndDropTarget.on("dragend", this.onDragEnd), this._$dragAndDropTarget.on("dragleave", this.onDragEnd)))
        },
        undelegateDragAndDrop: function() {
          this._$dragAndDropTarget && (this._$dragAndDropTarget.off("dragenter", this.onDragEnter), this._$dragAndDropTarget.off("dragover", this.onDragOver), this._$dragAndDropTarget.off("drop", this.onDrop), this._$dragAndDropTarget.off("dragend", this.onDragEnd), this._$dragAndDropTarget.off("dragleave", this.onDragEnd))
        },
        isNotDraggingFile: function(e) {
          var t = (e.originalEvent ? e.originalEvent : e).dataTransfer;
          return t && t.types && t.types.concat && t.types.indexOf("Files") === -1
        },
        isDropPending: function() {
          return !1
        },
        onDragEnter: function(e) {
          if (!this.isNotDraggingFile(e) && !this.isDropPending()) {
            e.preventDefault();
            var t = this.getDragAndDropDropbox();
            t.addClass("file-upload-drag"), e.target === t[0] && t.addClass("accepting")
          }
        },
        onDragEnd: function(e) {
          var t = this.getDragAndDropDropbox(),
            n = this.getDragAndDropTarget();
          e.target === t[0] && t.removeClass("accepting"), e.target === n[0] && t.removeClass("file-upload-drag"), e.preventDefault()
        },
        onDragOver: function(e) {
          e.preventDefault()
        },
        onDrop: function(e) {
          e.preventDefault(), e = e.originalEvent ? e.originalEvent : e;
          var t = e.dataTransfer.files,
            n = this.getDragAndDropDropbox();
          n.removeClass("file-upload-drag accepting"), t && t.length && e.target === n[0] && this.onFilesDrop(t)
        },
        onFilesDrop: function(e) {
          console.info(e.length + " files were dropped on the following element : ", this._$dropbox, " nothing has been done with them.")
        }
      }
    },
    392: function(e, t) {
      "use strict";
      e.exports = function(e) {
        var t = Array.prototype.slice.call(arguments, 1),
          n = e.bind.apply(e, t);
        return n(), n
      }
    },
    393: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(235),
        a = n(234),
        s = n(394);
      e.exports = i.extend({}, s, {
        initializeMarkdown: function(e) {
          this.options.markdown = this.options.markdown || {}, e && i.extend(this.options.markdown, e), this._markdownReady = !1, this._markdownLoading = !1, this._promise = null, this.options.markdown.editor && this.initializeEditor(this.options.markdown.editor)
        },
        initializeEditor: function() {
          var e = o(this.options.markdown.input),
            t = i.isObject(this.options.markdown.editor) ? this.options.markdown.editor : {};
          e.addClass("loading-editor"), n.e(4, function() {
            var r = n(395),
              a = new r(i.extend({}, {
                element: e[0],
                forceSync: !0,
                autoDownloadFontAwesome: !1,
                status: !1,
                spellChecker: !1
              }, t));
            t.container && o(t.container).addClass("wysiwyg"), e.removeClass("loading-editor"), a.codemirror.on("beforeChange", function(e, t) {
              var n = o(e.getTextArea()).val().length + t.text[0].length,
                i = parseInt(o(e.getTextArea()).attr("maxlength"), 10);
              n > i && "+delete" !== t.origin && t.cancel()
            }), a.codemirror.on("change", function(e) {
              o(e.getTextArea()).trigger("input")
            })
          }.bind(this))
        },
        setMarkdownReady: function(e) {
          this._markdownReady = !0, this._markdownLoading = !1, this.options.markdown.target.html(o("<div></div>").append(e))
        },
        unsetMarkdownReady: function() {
          this._markdownReady = !1, this.options.markdown.target.html(o("<div>Loading preview...</div>"))
        },
        renderMarkdown: function() {
          return this._markdownReady ? r.resolve(this.options.markdown.target[0].innerHTML) : this._markdownLoading ? this.promise : (this._markdownLoading = !0, this.promise = new r(function(e) {
            var t = this.options.markdown.input.val();
            t ? (this.unsetMarkdownReady(), a.ajax({
              type: "POST",
              url: "/i/markdown/preview",
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify({
                text: t
              })
            }).then(function(t) {
              this.setMarkdownReady(t.result), this.handleLazyLoading(), e(t.result)
            }.bind(this), function() {
              this.setMarkdownReady("Failed to load preview"), e("")
            }.bind(this))) : (this.setMarkdownReady(""), e(""))
          }.bind(this)), this.promise)
        }
      })
    },
    428: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(429),
        a = n(383),
        s = n(430),
        l = n(251);
      e.exports = s.extend({
        shareOnFacebook: function() {
          var e = this.model.get("sharing").shortUrl;
          s.prototype.shareOnFacebook.call(this, e)
        },
        shareOnTwitter: function() {
          var e, t = this.model.get("sharing").shortUrl,
            n = o.template("<%= name %> by <%= username %>"),
            r = i.trim(this.model.get("sharing").user.twitterUsername);
          e = "" !== r ? r.match(/^@/) ? r : "@" + r : this.model.get("user").username;
          var a = n({
            name: this.model.get("name"),
            username: e
          });
          s.prototype.shareOnTwitter.call(this, t, a)
        },
        shareOnGooglePlus: function() {
          var e = this.model.get("sharing").shortUrl;
          s.prototype.shareOnGooglePlus.call(this, e)
        },
        shareOnPinterest: function() {
          var e = this.model.get("sharing").shortUrl,
            t = o.template("<%= name %> by <%= username %>"),
            n = t({
              name: this.model.get("name"),
              username: this.model.get("user").username
            }),
            i = "";
          this.model instanceof a ? i = l(this.model.toJSON().thumbnails, 1024, 768) : this.model instanceof r && (i = l(this.model.toJSON().thumbnails[0], 1024, 768)), s.prototype.shareOnPinterest.call(this, e, n, i)
        },
        shareOnReddit: function() {
          var e = this.model.get("sharing").shortUrl,
            t = this.model.get("name");
          s.prototype.shareOnReddit.call(this, e, t)
        },
        shareOnTumblr: function() {
          var e = this.model.get("sharing").shortUrl;
          s.prototype.shareOnTumblr.call(this, this.model, e)
        },
        shareOnLinkedin: function() {
          var e = this.model.get("sharing").shortUrl;
          s.prototype.shareOnLinkedin.call(this, e)
        }
      })
    },
    429: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(238);
      e.exports = r.extend({
        url: function() {
          return this.isNew() ? "/i/collections" : "/i/collections/" + this.get("uid")
        },
        sharing: function() {
          return i.ajax({
            type: "GET",
            url: o.result(this, "url") + "/sharing"
          }).then(function(e) {
            return this.set("sharing", e), e
          }.bind(this))
        },
        updateModels: function(e, t) {
          return i.ajax({
            type: e ? "DELETE" : "POST",
            url: o.result(this, "url") + "/models",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
              models: t
            })
          })
        },
        setSubscription: function(e) {
          return i.ajax({
            type: "POST",
            url: o.result(this, "url") + (e ? "/unsubscribe" : "/subscribe"),
            contentType: "application/json; charset=utf-8"
          }).then(function() {
            this.set({
              subscriberCount: e ? this.get("subscriberCount") - 1 : this.get("subscriberCount") + 1
            })
          }.bind(this))
        }
      })
    },
    430: function(e, t, n) {
      "use strict";
      var i = n(258),
        o = n(431),
        r = n(241);
      n(432), e.exports = i.extend({
        shareOnFacebook: function(e, t) {
          o.getSDK().then(function(n) {
            var i = {
              method: "share",
              href: e
            };
            void 0 !== t && (i.quote = t), n.ui(i)
          })
        },
        shareOnTwitter: function(e, t, n) {
          void 0 === n && (n = {
            via: "sketchfab"
          });
          var i = 800,
            o = 400,
            r = window.screen.width / 2 - i / 2,
            a = window.screen.height / 2 - o / 2,
            s = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(t);
          n.hasOwnProperty("via") && null !== n.via && (s += "&via=" + n.via);
          var l = window.open(s, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + o);
          l.moveTo(r, a)
        },
        shareOnGooglePlus: function(e) {
          var t = 520,
            n = 580,
            i = window.screen.width / 2 - t / 2,
            o = window.screen.height / 2 - n / 2,
            r = "https://plus.google.com/share?url=" + encodeURIComponent(e),
            a = window.open(r, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + t + ", height=" + n);
          a.moveTo(i, o)
        },
        shareOnPinterest: function(e, t, n) {
          var i = 780,
            o = 400,
            r = window.screen.width / 2 - i / 2,
            a = window.screen.height / 2 - o / 2,
            s = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(e) + "&description=" + encodeURIComponent(t) + "&media=" + encodeURIComponent(n),
            l = window.open(s, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + o);
          l.moveTo(r, a)
        },
        shareOnReddit: function(e, t) {
          var n = "https://www.reddit.com/submit?url=" + encodeURIComponent(e) + "&title=" + encodeURIComponent(t);
          window.open(n, "_blank")
        },
        shareOnTumblr: function(e, t) {
          var n = 540,
            i = 600,
            o = window.screen.width / 2 - n / 2,
            a = window.screen.height / 2 - i / 2,
            s = r.get("skfb_front/partials/embed/iframe", {
              model: e.toJSON(),
              parameters: {
                flags: []
              }
            }),
            l = "https://www.tumblr.com/widgets/share/tool?posttype=video&content=" + encodeURIComponent(s) + "&canonicalUrl=" + encodeURIComponent(t),
            c = window.open(l, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + n + ", height=" + i);
          c.moveTo(o, a)
        },
        shareOnLinkedin: function(e) {
          var t = 600,
            n = 470,
            i = window.screen.width / 2 - t / 2,
            o = window.screen.height / 2 - n / 2,
            r = "https://www.linkedin.com/cws/share?url=" + encodeURIComponent(e),
            a = window.open(r, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + t + ", height=" + n);
          a.moveTo(i, o)
        }
      })
    },
    431: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(235),
        r = n(215),
        a = ["<script>", "  (function(d, s, id){", "     var js, fjs = d.getElementsByTagName(s)[0];", "     if (d.getElementById(id)) {return;}", "     js = d.createElement(s); js.id = id;", '     js.src = "//connect.facebook.net/en_US/sdk.js";', "     fjs.parentNode.insertBefore(js, fjs);", '   }(document, "script", "facebook-jssdk"));', "</script>"].join(""),
        s = null;
      e.exports = {
        getSDK: function() {
          return window.FB ? o.resolve(window.FB) : s ? s : s = new o(function(e) {
            var t = i(a);
            i("body").append(t), window.fbAsyncInit = function() {
              window.FB.init({
                appId: r.facebookAppId,
                status: !0,
                cookie: !0,
                xfbml: !0,
                version: "v2.5"
              }), e(window.FB)
            }
          })
        }
      }
    },
    432: function(e, t, n) {
      n(433),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/partials/embed/iframe.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/macros/model.jinja", !1, "skfb_front/partials/embed/iframe.jinja", function(l, c) {
                  return l ? void o(l) : void c.getExported(function(l, c) {
                    if (l) return void o(l);
                    if (!c.hasOwnProperty("model_iframe")) return void o(new Error("cannot import 'model_iframe'"));
                    var u = c.model_iframe;
                    t.setVariable("model_iframe", u), s += '<div class="sketchfab-embed-wrapper">', s += i.suppressValue((r = 0, a = 108, i.callWrap(u, "model_iframe", [e.getFilter("query_string").call(t, i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "embedUrl", e.opts.autoescape), i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "flags", e.opts.autoescape)), {
                      width: i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "width", e.opts.autoescape),
                      height: i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "height", e.opts.autoescape)
                    }])), e.opts.autoescape), s += '\n\n<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">\n    <a href="', s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "viewerUrl", e.opts.autoescape), e.opts.autoescape), s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">', s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "name", e.opts.autoescape), e.opts.autoescape), s += '</a>\n    by <a href="', s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "profileUrl", e.opts.autoescape), e.opts.autoescape), s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">', s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "displayName", e.opts.autoescape), e.opts.autoescape), s += '</a>\n    on <a href="https://sketchfab.com', s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>\n</p>\n</div>', o(null, s)
                  })
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              root: e
            }
          }()
        }()
    },
    443: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(233),
        a = n(257),
        s = n(241),
        l = n(444);
      e.exports = a.extend({
        events: i.extend({}, a.prototype.events, {
          'click [data-action="cancel"]': "close",
          'click [data-action="validate"]': "sendConfirmationMail"
        }),
        reasons: {
          publish: "Before publishing your 3D model, you must confirm your e-mail address",
          upgrade: "Before upgrading, you must confirm your e-mail address",
          collections: "You must confirm you e-mail address to be able to create collections",
          invite: "You must confirm you e-mail address to be able to invite friends"
        },
        initialize: function() {
          var e = o(".popup-email-verification");
          e.length ? (this.setElement(e), i.defer(this.$el.removeClass.bind(this.$el, "hidden"))) : (a.prototype.initialize.apply(this, arguments), this.options.cleanOnClose = !1, this.$el.addClass("popup-loading popup-container popup-email-verification"))
        },
        template: function() {
          return n.e(7, function() {
            n(446);
            var e = o("<div></div>").html(s.get("skfb_front/popups/email-confirmation", {
              reason: this.reasons[this.options.reason],
              email: r.me().get("email")
            }));
            this.$el.html(e.find(".popup-container").html()), this.$el.removeClass("popup-loading"), this.center()
          }.bind(this)), o("<div></div>")
        },
        sendConfirmationMail: function() {
          var e = r.me();
          e.sendConfirmationMail({
            email: e.get("email"),
            after: this.options.noAfter ? null : window.location.href
          }).then(function() {
            new l({
              content: "A confirmation email has been sent to " + e.get("email"),
              "class": "success",
              delay: 5e3
            })
          })["catch"](function() {
            new l({
              content: "The confirmation email could not be sent.<br/>Please contact <a href=mailto:support@sketchfab.com>the support</a> if this problem persists.",
              "class": "error",
              delay: 5e3
            })
          }), this.close()
        }
      })
    },
    444: function(e, t, n) {
      "use strict";
      var i = n(258),
        o = n(216),
        r = n(220),
        a = n(241),
        s = n(259);
      n(445), e.exports = i.extend({
        parent: "body",
        events: {
          'click [data-action="close"]': "onClickClose"
        },
        className: "flashmessage-container notification",
        template: function() {
          return a.getFromMacro("skfb_front/macros/notification", "flashmessage", [this.options["class"], this.options.content, {
            safecontent: "True"
          }])
        },
        initialize: function() {
          i.prototype.initialize.apply(this, arguments), this.render(), this.options.delay && this.close(this.options.delay)
        },
        render: function() {
          this.$el.html(o.result(this, "template"));
          var e = r(o.result(this, "parent"));
          e.append(this.$el), this.$el.addClass("hidden"), o.defer(this.$el.removeClass.bind(this.$el, "hidden"))
        },
        onClickClose: function(e) {
          e && e.preventDefault && e.preventDefault(), this.close(0)
        },
        close: function(e) {
          return e = e || 0, setTimeout(function() {
            this.$el.addClass("hidden"), s(this.$el, function() {
              this.$el.parent()[0].removeChild(this.el)
            }.bind(this))
          }.bind(this), e), this
        }
      })
    },
    445: function(e, t) {
      ! function() {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/macros/notification.jinja"] = function() {
          function e(e, t, n, i, o) {
            var r = null,
              a = null,
              s = "";
            try {
              s += "\n\n";
              var l = i.makeMacro(["type", "content"], ["options"], function(o, r, a) {
                n = n.push(), a = a || {}, a.hasOwnProperty("caller") && n.set("caller", a.caller), n.set("type", o), n.set("content", r), n.set("options", a.hasOwnProperty("options") ? a.options : {});
                var s = "";
                s += "\n\n    ";
                var l;
                return l = e.getFilter("merge").call(t, {
                  safecontent: !1
                }, i.contextOrFrameLookup(t, n, "options")), n.set("options", l, !0), n.parent || (t.setVariable("options", l), t.addExport("options")), s += '\n\n    <div class="flashmessage ', s += i.suppressValue(o, e.opts.autoescape), s += '">\n        <div class="inner">\n            <button class="flashmessage-close" data-action="close" title="Close"></button>\n            <div class="message">\n                ', i.memberLookup(i.contextOrFrameLookup(t, n, "options"), "safecontent", e.opts.autoescape) ? (s += "\n                    ", s += i.suppressValue(e.getFilter("safe").call(t, r), e.opts.autoescape), s += "\n                ") : (s += "\n                    ", s += i.suppressValue(r, e.opts.autoescape), s += "\n                "), s += "\n            </div>\n        </div>\n    </div>\n\n", n = n.pop(), new i.SafeString(s)
              });
              t.addExport("flashmessage"), t.setVariable("flashmessage", l), s += "\n", o(null, s)
            } catch (c) {
              o(i.handleError(c, r, a))
            }
          }
          return {
            root: e
          }
        }()
      }()
    },
    447: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(428),
        r = n(241),
        a = n(255),
        s = n(448);
      n(462), e.exports = s.extend({
        template: function() {
          return r.get("skfb_front/popups/share-after-publish", {
            model: this.model.toJSON(),
            mailto: this.getMailto(),
            sharingMode: this.sharingMode
          })
        },
        initialize: function() {
          s.prototype.initialize.apply(this, arguments), this.deferred = i.Deferred(), this.promise = this.deferred.promise()
        },
        getMailto: function() {
          var e = '"' + this.model.get("name") + '" is on Sketchfab',
            t = ["I just uploaded this model to Sketchfab. Check it out:", "\n", this.model.get("name"), "\n", this.model.get("viewerUrl") + "?utm_source=email&utm_medium=email&utm_campaign=model-shared"].join("");
          return "mailto:?subject=" + encodeURIComponent(e) + "&body=" + encodeURIComponent(t)
        },
        shareOnFacebook: function() {
          a.shareButtonClicked("shareAfterPublish", "facebookShareButtonClicked", this.model.get("uid")), o.prototype.shareOnFacebook.apply(this, arguments)
        },
        shareOnTwitter: function() {
          a.shareButtonClicked("shareAfterPublish", "twitterShareButtonClicked", this.model.get("uid")), o.prototype.shareOnTwitter.apply(this, arguments)
        },
        shareOnGooglePlus: function() {
          a.shareButtonClicked("shareAfterPublish", "googlePlusShareButtonClicked", this.model.get("uid")), o.prototype.shareOnGooglePlus.apply(this, arguments)
        },
        shareOnPinterest: function() {
          a.shareButtonClicked("shareAfterPublish", "pinterestShareButtonClicked", this.model.get("uid")), o.prototype.shareOnPinterest.apply(this, arguments)
        },
        shareOnReddit: function() {
          a.shareButtonClicked("shareAfterPublish", "redditShareButtonClicked", this.model.get("uid")), o.prototype.shareOnReddit.apply(this, arguments)
        },
        shareOnTumblr: function() {
          a.shareButtonClicked("shareAfterPublish", "tumblrShareButtonClicked", this.model.get("uid")), o.prototype.shareOnTumblr.apply(this, arguments)
        },
        shareOnLinkedin: function() {
          a.shareButtonClicked("shareAfterPublish", "linkedinShareButtonClicked", this.model.get("uid")), o.prototype.shareOnLinkedin.apply(this, arguments)
        },
        _close: function() {
          this.deferred.resolve(), s.prototype._close.call(this)
        },
        then: function() {
          return this.promise.then.apply(this, arguments)
        }
      })
    },
    448: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(429),
        r = n(383),
        a = n(428),
        s = n(241),
        l = n(255),
        c = n(257),
        u = n(449),
        d = n(458),
        h = n(431),
        p = 0,
        g = 1,
        f = 2;
      n(461), e.exports = c.extend({
        template: function() {
          return s.get("skfb_front/popups/share", {
            model: this.model.toJSON(),
            mailto: this.getMailto(),
            sharingMode: this.sharingMode
          })
        },
        events: i.extend({}, c.prototype.events, {
          'click [data-action="share-on-google-plus"]': "shareOnGooglePlus",
          'click [data-action="share-on-facebook"]': "shareOnFacebook",
          'click [data-action="share-on-linkedin"]': "shareOnLinkedin",
          'click [data-action="share-on-pinterest"]': "shareOnPinterest",
          'click [data-action="share-on-reddit"]': "shareOnReddit",
          'click [data-action="share-on-tumblr"]': "shareOnTumblr",
          'click [data-action="share-on-twitter"]': "shareOnTwitter",
          'click [data-action="open-embed-popup"]': "openEmbedPopup"
        }),
        initialize: function() {
          this.sharingMode = p, this.model instanceof r ? this.sharingMode = g : this.model instanceof o && (this.sharingMode = f), c.prototype.initialize.apply(this, arguments), this.model.on("change:sharing", this.setShortUrl, this), h.getSDK(), this.model.sharing().then(function() {
            this.setIsReady()
          }.bind(this))
        },
        setIsReady: function() {
          this.$el.removeClass("popup-loading"), this.$el.find(".directlink").select()
        },
        setShortUrl: function() {
          this.$el.find(".directlink").val(this.model.get("sharing").shortUrl)
        },
        getMailto: function() {
          var e, t = this.model.get("name") + " by " + this.model.get("user").displayName;
          switch (this.sharingMode) {
            case g:
              e = ["Check out this scene in 3D and virtual reality on Sketchfab:", "\n", t, "\n", this.model.get("viewerUrl") + "?utm_source=email&utm_medium=email&utm_campaign=model-shared"].join("");
              break;
            case f:
              e = ["Check out this collection of 3D/VR scenes on Sketchfab:", "\n", t, "\n", this.model.get("collectionUrl") + "?utm_source=email&utm_medium=email&utm_campaign=collection-shared"].join("")
          }
          return "mailto:?subject=" + encodeURIComponent(t) + "&body=" + encodeURIComponent(e)
        },
        shareOnFacebook: function() {
          l.shareButtonClicked("sharePopup", "facebookShareButtonClicked", this.model.get("uid")), a.prototype.shareOnFacebook.apply(this, arguments)
        },
        shareOnTwitter: function() {
          l.shareButtonClicked("sharePopup", "twitterShareButtonClicked", this.model.get("uid")), a.prototype.shareOnTwitter.apply(this, arguments)
        },
        shareOnGooglePlus: function() {
          l.shareButtonClicked("sharePopup", "googlePlusShareButtonClicked", this.model.get("uid")), a.prototype.shareOnGooglePlus.apply(this, arguments)
        },
        shareOnPinterest: function() {
          l.shareButtonClicked("sharePopup", "pinterestShareButtonClicked", this.model.get("uid")), a.prototype.shareOnPinterest.apply(this, arguments)
        },
        shareOnReddit: function() {
          l.shareButtonClicked("sharePopup", "redditShareButtonClicked", this.model.get("uid")), a.prototype.shareOnReddit.apply(this, arguments)
        },
        shareOnTumblr: function() {
          l.shareButtonClicked("sharePopup", "tumblrShareButtonClicked", this.model.get("uid")), a.prototype.shareOnTumblr.apply(this, arguments)
        },
        shareOnLinkedin: function() {
          l.shareButtonClicked("sharePopup", "linkedinShareButtonClicked", this.model.get("uid")), a.prototype.shareOnLinkedin.apply(this, arguments)
        },
        openEmbedPopup: function(e) {
          switch (e.preventDefault(), e.stopPropagation(), l.shareButtonClicked("sharePopup", "embedButtonClicked", this.model.get("uid")), this.sharingMode) {
            case g:
              new u({
                model: this.model
              }).open();
              break;
            case f:
              new d({
                model: this.model
              }).open()
          }
        }
      })
    },
    449: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(241),
        r = n(450),
        a = n(452),
        s = n(453),
        l = n(454),
        c = n(238);
      n(432), n(455), n(456), e.exports = l.extend({
        templateName: "skfb_front/popups/embed/viewer",
        flags: ["camera"],
        resizeEnabled: !0,
        flagChangedTrackerEvent: "embedPopupOptionToggleChanged",
        toggleAdvancedEmbedTrackerEvent: "embedPopupShowOptionsButtonClicked",
        embedPopupEmbedFormatSelectedTrackerEvent: "embedPopupEmbedFormatSelected",
        events: i.extend({}, l.prototype.events, {
          'click [data-action="change-method"]': "onChangeMethod",
          "click .preselect-annotation": "onPreselectAnnotationChange",
          "change .preselect-annotation-index": "onPreselectAnnotationIndexChange"
        }),
        initializeForm: function() {
          new s({
            model: this.parameters,
            name: "type",
            el: this.$(".methods .iframe")
          }), new a({
            model: this.parameters,
            name: "width",
            el: this.$(".x")
          }), new a({
            model: this.parameters,
            name: "height",
            el: this.$(".y")
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .autostart"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .hide-infos"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .hide-controls"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .hide-related"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .animated-entrance"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .transparent"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .turntable-animation"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .preload"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .annotation-cycle"),
            multiple: !0
          }), new s({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .preselect-annotation"),
            multiple: !0
          }), this.modelHotspots = new r([], {
            filters: new c({
              modelUID: this.model.get("uid")
            })
          }), this.modelHotspots.fetch().then(this.populateAnnotationList.bind(this))
        },
        getEmbedCode: function(e, t) {
          return o.get({
            iframe: "skfb_front/partials/embed/iframe",
            bbcode: "skfb_front/partials/embed/bbcode"
          }[e.type], {
            parameters: e,
            model: t,
            anchor: "?utm_medium=embed&utm_source=website&utm_campain=share-popup"
          })
        },
        onChangeMethod: function() {
          l.prototype.onChangeMethod.apply(this, arguments), "bbcode" !== this.parameters.get("type") && this.renderAnnotationsFlags()
        },
        populateAnnotationList: function() {
          var e = this.$(".preselect-annotation-index");
          this.renderAnnotationsFlags(), this.modelHotspots.forEach(function(t, n) {
            var i = n + 1,
              o = '<option value="' + i + '">' + i + ". " + t.get("name") + "</option>";
            e.append(o)
          })
        },
        renderAnnotationsFlags: function() {
          this.$(".preselect-annotation").prop("disabled", !this.modelHotspots.length), this.$(".annotation-cycle").prop("disabled", !this.modelHotspots.length), this.$(".annotations-flags").toggleClass("hidden-options", !this.modelHotspots.length)
        },
        getSelectedAnnotationIndex: function() {
          return parseInt(this.$(".preselect-annotation-index").val(), 10)
        },
        onPreselectAnnotationChange: function() {
          var e = this.$(".preselect-annotation").is(":checked");
          this.$(".preselect-annotation-index").toggle(e)
        },
        onPreselectAnnotationIndexChange: function() {
          this.parameters.trigger("change")
        },
        onParametersChange: function(e, t) {
          e.flags.camera ? delete e.flags.camera : e.flags.camera = 0, 1 === e.flags.autospin && (e.flags.autospin = .2), 1 === e.flags.annotation_cycle && (e.flags.annotation_cycle = 5), e.flags.annotation && (e.flags.annotation = this.getSelectedAnnotationIndex()), this.$(".code").val(this.getEmbedCode(e, t))
        }
      })
    },
    452: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(258),
        r = n(392);
      e.exports = o.extend({
        events: i.extend({}, o.prototype.events, {
          input: function() {
            this.$el.addClass("edited"), this.model.set(this.options.name, this.$el.val())
          }
        }),
        initialize: function() {
          o.prototype.initialize.apply(this, arguments), this.model.on("change:" + this.options.name, r(function() {
            var e = (this.model.get(this.options.name) || "").toString();
            this.$el.toggleClass("empty", 0 === e.length), e !== this.$el.val() && this.$el.val("" !== e ? Number(e) : "")
          }, this))
        }
      })
    },
    453: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(258),
        r = n(392);
      e.exports = o.extend({
        events: i.extend({}, o.prototype.events, {
          change: function() {
            this.$el.addClass("edited");
            var e = this.options.name,
              t = this.$el.val(),
              n = "radio" === this.$el.attr("type"),
              i = this.$el.is(":checked"),
              o = this.options.multiple;
            if (!n || i)
              if (o) {
                var r = (this.model.get(e) || []).slice();
                i ? r.push(t) : r.splice(r.indexOf(t), 1), this.model.set(e, r)
              } else i ? this.model.set(e, t) : this.model.set(e, void 0)
          }
        }),
        initialize: function() {
          o.prototype.initialize.apply(this, arguments), this.model.on("change:" + this.options.name, r(function() {
            var e = [].concat(this.model.get(this.options.name) || []);
            this.$el.prop("checked", e.indexOf(this.$el.val()) !== -1)
          }, this))
        }
      })
    },
    454: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(233),
        a = n(238),
        s = n(392),
        l = n(241),
        c = n(255),
        u = n(257);
      e.exports = u.extend({
        template: function() {
          return this.user = r.me(), l.get(this.templateName, {
            model: this.model.toJSON(),
            authUser: this.user.toJSON()
          })
        },
        events: o.extend({}, u.prototype.events, {
          'click [data-action="toggle-advanced-embed"]': "toggleAdvancedEmbed",
          'click [data-action="change-method"]': "onChangeMethod",
          "focus .directlink, .code": "autoSelect",
          "mouseup .directlink, .code": "prevent"
        }),
        initialize: function() {
          u.prototype.initialize.apply(this, arguments), this.parameters = new a({
            type: this.type || "iframe",
            width: this.width || 640,
            height: this.height || 480,
            flags: this.flags || []
          }), this.initializeForm && this.initializeForm(), this.parameters.on("change", s(function() {
            var e = this.parameters.toJSON(),
              t = this.model.toJSON();
            e.flags = e.flags.reduce(function(e, t) {
              var n = "!" !== t[0] ? 1 : 0;
              return n || (t = t.substr(1)), e[t] = n, e
            }, {}), this.onParametersChange && this.onParametersChange(e, t)
          }, this)), this.parameters.on("change:flags", function() {
            if (this.flagChangedTrackerEvent) {
              var e = this.parameters.get("flags"),
                t = this.parameters.previous("flags"),
                n = o.union(e, t);
              o.each(n, function(n) {
                t.indexOf(n) === -1 != (e.indexOf(n) === -1) && c[this.flagChangedTrackerEvent](n, e.indexOf(n) !== -1)
              }.bind(this))
            }
          }.bind(this)), this.toggledAdvancedEmbed = !1
        },
        onChangeMethod: function(e) {
          e.preventDefault(), this.parameters.set("type", i(e.currentTarget).attr("data-value")), "bbcode" === this.parameters.get("type") ? (this.$(".flags").addClass("hidden-options").find('input[type="checkbox"]').prop("disabled", !0), this.$(".size").addClass("hidden").find('input[type="number"]').prop("readonly", !0), this.$("select").attr("disabled", !0)) : (this.$(".flags").removeClass("hidden-options").find('input[type="checkbox"]').prop("disabled", !1), this.$(".size").removeClass("hidden").find('input[type="number"]').prop("readonly", !1), this.$("select").removeAttr("disabled")), this.$(".method").removeClass("active"), i(e.currentTarget).addClass("active"), this.$(".code").focus(), this.embedPopupEmbedFormatSelected && c[this.embedPopupEmbedFormatSelected](this.parameters.get("type"))
        },
        toggleAdvancedEmbed: function() {
          this.$(".show-hide-toggle").toggleClass("active"), this.toggledAdvancedEmbed ? (this.toggledAdvancedEmbed = !1, this.$(".extra").hide(), this.resizeEnabled && this.resize({
            width: 400
          }), this.center()) : (this.toggledAdvancedEmbed = !0, this.$(".extra").show(), this.resizeEnabled && this.resize({
            width: 800
          }), this.center()), this.toggleAdvancedEmbedTrackerEvent && c[this.toggleAdvancedEmbedTrackerEvent]()
        },
        autoSelect: function(e) {
          i(e.target).select()
        },
        prevent: function(e) {
          e.preventDefault()
        }
      })
    },
    455: function(e, t) {
      ! function() {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/partials/embed/bbcode.jinja"] = function() {
          function e(e, t, n, i, o) {
            var r = null,
              a = null,
              s = "";
            try {
              s += "[sketchfab]", s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "uid", e.opts.autoescape), e.opts.autoescape),
                s += "[/sketchfab]\n[url=", s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "viewerUrl", e.opts.autoescape), e.opts.autoescape), s += "]", s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "name", e.opts.autoescape), e.opts.autoescape), s += "[/url] by [url=", s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "profileUrl", e.opts.autoescape), e.opts.autoescape), s += "]", s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "displayName", e.opts.autoescape), e.opts.autoescape), s += "[/url] on [url=https://sketchfab.com]Sketchfab[/url]\n", o(null, s)
            } catch (l) {
              o(i.handleError(l, r, a))
            }
          }
          return {
            root: e
          }
        }()
      }()
    },
    456: function(e, t, n) {
      n(457),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/embed/viewer.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/popups/embed.jinja", !0, "skfb_front/popups/embed/viewer.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "Embed viewer", n.set("popupTitle", c, !0), n.parent || (t.setVariable("popupTitle", c), t.addExport("popupTitle")), s += "\n";
                  var u;
                  u = "Embed viewer", n.set("title", u, !0), n.parent || (t.setVariable("title", u), t.addExport("title")), s += "\n";
                  var d;
                  d = "embedviewer", n.set("formClass", d, !0), n.parent || (t.setVariable("formClass", d), t.addExport("formClass")), s += "\n\n", s += "\n\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <ul class="methods">\n        <li><a id="method-iframe" data-value="iframe" data-action="change-method" class="iframe method active">iframe</a></li>\n        <li><a id="method-bbcode" data-value="bbcode" data-action="change-method" class="bbcode method">bbcode</a></li>\n    </ul>\n\n', o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function n(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <div class="form-label">\n        <label>\n            General\n        </label>\n    </div>\n    <div class="size">\n        Size\n        <input class="x" type="number" value="640" />\n        <div class="per">&times;</div>\n        <input class="y" type="number" value="480" />\n    </div>\n    <ul class="flags">\n        <li><input id="flag-autostart" class="autostart" type="checkbox" value="autostart" /> <label for="flag-autostart">Autostart</label></li>\n        <li><input id="flag-animated-entrance" class="animated-entrance" type="checkbox" checked="checked" value="camera"/> <label for="flag-animated-entrance">Animated entrance</label></li>\n        <li><input id="flag-turntable-animation" class="turntable-animation" type="checkbox" value="autospin" /> <label for="flag-turntable-animation">Turntable animation</label></li>\n        <li><input id="flag-preload" class="preload" type="checkbox" value="preload" /> <label for="flag-preload">Preload textures</label></li>\n    </ul>\n\n    <div class="form-label">\n        <label>\n            Annotations\n        </label>\n    </div>\n    <ul class="flags annotations-flags">\n        <li><input disabled id="flag-preselect-annotation" class="preselect-annotation" type="checkbox" value="annotation" /> <label for="flag-preselect-annotation">Preselect annotation</label></li>\n        <li><input disabled id="flag-annotation-cycle" class="annotation-cycle" type="checkbox" value="annotation_cycle" /> <label for="flag-annotation-cycle">Annotation autopilot</label></li>\n        <select id="flag-preselect-annotation-index" class="preselect-annotation-index" style="display: none">\n        </select>\n    </ul>\n\n    ', i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "uid", e.opts.autoescape) == i.memberLookup(i.contextOrFrameLookup(t, n, "authUser"), "uid", e.opts.autoescape) && (s += '\n        <div class="form-label">\n            <label for="embedviewer">\n                Pro options\n                <a href="/plans" target="_blank" class="', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += "visible "), s += 'upgrade-link">upgrade to unlock</a>\n            </label>\n        </div>\n        <ul class="flags ', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += "hidden-options"), s += '">\n            <li>\n                <input id="flag-hide-related" class="hide-related" type="checkbox" ', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' disabled="disabled" '), s += ' value="!ui_related" />\n                <label ', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) || (s += ' for="flag-hide-related" '), s += ' >Hide related models</label>\n            </li>\n            <li>\n                <input id="flag-transparent-background" class="transparent" type="checkbox" ', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' disabled="disabled" '), s += '  type="checkbox" value="transparent" />\n                <label ', "pro" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) || (s += ' for="flag-transparent-background" '), s += '>Transparent background</label>\n            </li>\n        </ul>\n        <div class="form-label">\n            <label for="embedviewer">\n                Business options\n                <a href="/plans" target="_blank" class="', "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += "visible"), s += ' upgrade-link">upgrade to unlock</a>\n            </label>\n        </div>\n        <ul class="flags ', "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += "hidden-options"), s += '">\n            <li>\n                <input id="flag-hide-controls" class="hide-controls" type="checkbox" ', "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' disabled="disabled" '), s += ' value="!ui_controls" />\n                <label ', "biz" == i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' for="flag-hide-controls" '), s += ' >Hide controls</label>\n            </li>\n            <li>\n                <input id="flag-hide-infos" class="hide-infos" type="checkbox" ', "biz" != i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' disabled="disabled" '), s += 'value="!ui_infos" />\n                <label ', "biz" == i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "user", e.opts.autoescape), "account", e.opts.autoescape) && (s += ' for="flag-hide-infos" '), s += " >Hide model infos</label>\n            </li>\n        </ul>\n    "), s += "\n\n", o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_methods: t,
              b_extra: n,
              root: e
            }
          }()
        }()
    },
    457: function(e, t, n) {
      n(261),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/embed.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/embed.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "popup-embed", n.set("popupClass", c, !0), n.parent || (t.setVariable("popupClass", c), t.addExport("popupClass")), s += "\n";
                  var u;
                  u = !0, n.set("popupClosable", u, !0), n.parent || (t.setVariable("popupClosable", u), t.addExport("popupClosable")), s += "\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <div class="form-column-layout">\n\n        <div class="form-field ', s += i.suppressValue(i.contextOrFrameLookup(t, n, "formClass"), e.opts.autoescape), s += '">\n            <div class="form-label">\n                <label for="embedviewer">\n                    ', s += i.suppressValue(i.contextOrFrameLookup(t, n, "title"), e.opts.autoescape), s += '\n                    <a class="embedviewer-help" href="https://help.sketchfab.com/hc/en-us/sections/200508566-Share-Embed?utm_source=website&amp;utm_campaign=embedpopup" target="_blank">Help</a>\n                    <a class="show-extra" data-action="toggle-advanced-embed"><span class="show-hide-toggle active">Show options</span> <span class="show-hide-toggle">Hide options</span></a>\n                </label>\n            </div>\n            <div class="options">\n\n                <div class="code-wrapper">\n                    <textarea class="form-input code" readonly></textarea>\n                    ', t.getBlock("methods")(e, t, n, i, function(r, a) {
                  return r ? void o(r) : (s += a, s += '\n                </div>\n\n                <div class="extra">\n                    ', void t.getBlock("extra")(e, t, n, i, function(e, t) {
                    return e ? void o(e) : (s += t, s += "\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n", void o(null, s))
                  }))
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function n(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function i(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_popup_content: t,
              b_methods: n,
              b_extra: i,
              root: e
            }
          }()
        }()
    },
    458: function(e, t, n) {
      "use strict";
      var i = n(241),
        o = n(452),
        r = n(453),
        a = n(454);
      n(459), n(460), e.exports = a.extend({
        templateName: "skfb_front/popups/embed/collection",
        resizeEnabled: !1,
        flagChangedTrackerEvent: "collectionEmbedPopupOptionToggleChanged",
        toggleAdvancedEmbedTrackerEvent: "collectionEmbedPopupShowOptionsButtonClicked",
        initialize: function() {
          a.prototype.initialize.apply(this, arguments);
          var e = this.parameters.toJSON(),
            t = this.model.toJSON();
          this.$(".form-input.code").val(this.getEmbedCode(e, t))
        },
        initializeForm: function() {
          new o({
            model: this.parameters,
            name: "width",
            el: this.$(".x")
          }), new o({
            model: this.parameters,
            name: "height",
            el: this.$(".y")
          }), new r({
            model: this.parameters,
            name: "flags",
            el: this.$(".flags .autostart"),
            multiple: !0
          })
        },
        getEmbedCode: function(e, t) {
          return i.get("skfb_front/partials/embed/collection-iframe", {
            parameters: e,
            collection: t,
            anchor: "?utm_source=website&utm_medium=embed&utm_campaign=share-popup"
          })
        },
        onParametersChange: function(e, t) {
          this.$(".code").val(this.getEmbedCode(e, t))
        }
      })
    },
    459: function(e, t, n) {
      n(457),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/embed/collection.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/popups/embed.jinja", !0, "skfb_front/popups/embed/collection.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "Embed collection", n.set("popupTitle", c, !0), n.parent || (t.setVariable("popupTitle", c), t.addExport("popupTitle")), s += "\n";
                  var u;
                  u = "Copy this code to embed as playlist", n.set("title", u, !0), n.parent || (t.setVariable("title", u), t.addExport("title")), s += "\n";
                  var d;
                  d = "embedcollection", n.set("formClass", d, !0), n.parent || (t.setVariable("formClass", d), t.addExport("formClass")), s += "\n\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <div class="size">\n        Size\n        <input class="x" type="number" value="640" />\n        <div class="per">x</div>\n        <input class="y" type="number" value="480" />\n    </div>\n\n    <ul class="flags">\n        <li><input id="flag-autostart" class="autostart" type="checkbox" value="autostart" /> <label for="flag-autostart">Autostart</label></li>\n    </ul>\n\n', o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_extra: t,
              root: e
            }
          }()
        }()
    },
    460: function(e, t, n) {
      n(433),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/partials/embed/collection-iframe.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/macros/model.jinja", !1, "skfb_front/partials/embed/collection-iframe.jinja", function(l, c) {
                  return l ? void o(l) : void c.getExported(function(l, c) {
                    if (l) return void o(l);
                    if (!c.hasOwnProperty("model_iframe")) return void o(new Error("cannot import 'model_iframe'"));
                    var u = c.model_iframe;
                    t.setVariable("model_iframe", u), s += i.suppressValue((r = 0, a = 71, i.callWrap(u, "model_iframe", [e.getFilter("safe").call(t, e.getFilter("query_string").call(t, i.memberLookup(i.contextOrFrameLookup(t, n, "collection"), "embedUrl", e.opts.autoescape), i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "flags", e.opts.autoescape), "&")), {
                      width: i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "width", e.opts.autoescape),
                      height: i.memberLookup(i.contextOrFrameLookup(t, n, "parameters"), "height", e.opts.autoescape)
                    }])), e.opts.autoescape), s += '\n\n<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">\n    <a href="', s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "collection"), "collectionUrl", e.opts.autoescape), e.opts.autoescape), s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">', s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "collection"), "name", e.opts.autoescape), e.opts.autoescape), s += '</a>\n    by <a href="', s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "collection"), "user", e.opts.autoescape), "profileUrl", e.opts.autoescape), e.opts.autoescape), s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">', s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "collection"), "user", e.opts.autoescape), "displayName", e.opts.autoescape), e.opts.autoescape), s += '</a>\n    on <a href="https://sketchfab.com', s += i.suppressValue(e.getFilter("safe").call(t, i.contextOrFrameLookup(t, n, "anchor")), e.opts.autoescape), s += '" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>\n</p>\n', o(null, s)
                  })
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              root: e
            }
          }()
        }()
    },
    461: function(e, t, n) {
      n(261),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/share.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/share.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "Share", n.set("popupTitle", c, !0), n.parent || (t.setVariable("popupTitle", c), t.addExport("popupTitle")), s += "\n";
                  var u;
                  u = "popup-share", n.set("popupClass", u, !0), n.parent || (t.setVariable("popupClass", u), t.addExport("popupClass")), s += "\n";
                  var d;
                  d = !0, n.set("popupClosable", d, !0), n.parent || (t.setVariable("popupClosable", d), t.addExport("popupClosable")), s += "\n";
                  var h;
                  h = !0, n.set("popupNeedsLoading", h, !0), n.parent || (t.setVariable("popupNeedsLoading", h), t.addExport("popupNeedsLoading")), s += "\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <div class="form-column-layout">\n\n        <div class="link-share">\n            <div class="form-field">\n                <label class="form-label" for="directlink">Direct link</label>\n                <input class="form-input directlink" value="', s += i.suppressValue(i.memberLookup(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "sharing", e.opts.autoescape), "shortUrl", e.opts.autoescape), e.opts.autoescape), s += '" readonly />\n            </div>\n\n            <div class="form-field">\n                <label class="form-label">Share to</label>\n                <ul class="socialmedia">\n                    <li><button class="icons-facebook" title="Facebook" data-action="share-on-facebook"></button></li>\n                    <li><button class="icons-twitter" title="Twitter" data-action="share-on-twitter"></button></li>\n                    <li><button class="icons-reddit" title="reddit" data-action="share-on-reddit"></button></li>\n                    <li><button class="icons-tumblr" title="tumblr" data-action="share-on-tumblr"></button></li>\n                    <li><button class="icons-google" title="Google+" data-action="share-on-google-plus"></button></li>\n                    <li><button class="icons-linkedin" title="Linkedin" data-action="share-on-linkedin"></button></li>\n                    <li><button class="icons-pinterest" title="Pinterest" data-action="share-on-pinterest"></button></li>\n                    <li><a class="fa fa-envelope-square" title="E-mail" href="', s += i.suppressValue(i.contextOrFrameLookup(t, n, "mailto"), e.opts.autoescape), s += '"></a></li>\n                </ul>\n            </div>\n\n            <div class="form-field">\n                <label class="form-label" for="open-embed">\n                ', 1 == i.contextOrFrameLookup(t, n, "sharingMode") ? s += "\n                    Embed viewer\n                " : 2 == i.contextOrFrameLookup(t, n, "sharingMode") && (s += "\n                    Embed collection as playlist\n                "), s += '\n                </label>\n                <a id="open-embed" class="button btn-large btn-primary open-embed" data-action="open-embed-popup">\n                    <i class="icon fa fa-code"></i>\n                    Get embed code\n                </a>\n            </div>\n\n        </div>\n\n    </div>\n\n', o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_popup_content: t,
              root: e
            }
          }()
        }()
    },
    462: function(e, t, n) {
      n(261),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/share-after-publish.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/share-after-publish.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "Model published", n.set("popupTitle", c, !0), n.parent || (t.setVariable("popupTitle", c), t.addExport("popupTitle")), s += "\n";
                  var u;
                  u = "popup-share popup-publish-share", n.set("popupClass", u, !0), n.parent || (t.setVariable("popupClass", u), t.addExport("popupClass")), s += "\n";
                  var d;
                  d = !0, n.set("popupClosable", d, !0), n.parent || (t.setVariable("popupClosable", d), t.addExport("popupClosable")), s += "\n";
                  var h;
                  h = !0, n.set("popupNeedsLoading", h, !0), n.parent || (t.setVariable("popupNeedsLoading", h), t.addExport("popupNeedsLoading")), s += "\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    <div class="form-column-layout">\n\n        <div class="link-share">\n\n            <div class="success-message">\n                <div class="success-message-icon">\n                    <span class="fa-stack fa-lg">\n                        <i class="fa fa-circle fa-stack-2x" style="color: #1FCC74"></i>\n                        <i class="fa fa-check fa-stack-1x" style="color: #ffffff"></i>\n                    </span>\n                </div>\n                <div class="success-message-text">\n                    Your model has been published\n                </div>\n            </div>\n\n            <div class="popup-publish-link">\n                <input type="text" class="form-input input directlink" value="', s += i.suppressValue(i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "viewerUrl", e.opts.autoescape), e.opts.autoescape), s += '" />\n            </div>\n\n            <div class="popup-publish-share-privacy">\n                ', i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "isProtected", e.opts.autoescape) ? s += "\n                    Only people with the link and password will have access\n                " : i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "isPrivate", e.opts.autoescape) && (s += "\n                    Only people with the link will have access\n                "), s += "\n            </div>\n\n            ", i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "isProtected", e.opts.autoescape) || i.memberLookup(i.contextOrFrameLookup(t, n, "model"), "isPrivate", e.opts.autoescape) || (s += '\n            <div class="form-field">\n                <label class="form-label">Share to</label>\n                <ul class="socialmedia">\n                    <li><button class="icons-facebook" title="Facebook" data-action="share-on-facebook"></button></li>\n                    <li><button class="icons-twitter" title="Twitter" data-action="share-on-twitter"></button></li>\n                    <li><button class="icons-reddit" title="reddit" data-action="share-on-reddit"></button></li>\n                    <li><button class="icons-tumblr" title="tumblr" data-action="share-on-tumblr"></button></li>\n                    <li><button class="icons-google" title="Google+" data-action="share-on-google-plus"></button></li>\n                    <li><button class="icons-linkedin" title="Linkedin" data-action="share-on-linkedin"></button></li>\n                    <li><button class="icons-pinterest" title="Pinterest" data-action="share-on-pinterest"></button></li>\n                    <li><a class="fa fa-envelope-square" title="E-mail" href="', s += i.suppressValue(i.contextOrFrameLookup(t, n, "mailto"), e.opts.autoescape), s += '"></a></li>\n                </ul>\n            </div>\n            '), s += "\n\n        </div>\n\n    </div>\n\n", o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_popup_content: t,
              root: e
            }
          }()
        }()
    },
    479: function(e, t, n) {
      "use strict";
      var i = n(241),
        o = n(266);
      n(480), e.exports = o.extend({
        template: function() {
          return i.get("skfb_front/popups/missing-webgl", {
            buttons: this.options.buttons
          })
        }
      })
    },
    480: function(e, t, n) {
      n(261),
        function() {
          (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/missing-webgl.jinja"] = function() {
            function e(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/missing-webgl.jinja", function(r, a) {
                  if (r) return void o(r);
                  for (var l in a.blocks) t.addBlock(l, a.blocks[l]);
                  s += "\n\n";
                  var c;
                  c = "Compatibility error", n.set("popupTitle", c, !0), n.parent || (t.setVariable("popupTitle", c), t.addExport("popupTitle")), s += "\n";
                  var u;
                  u = "popup-message", n.set("popupClass", u, !0), n.parent || (t.setVariable("popupClass", u), t.addExport("popupClass")), s += "\n\n", s += "\n\n", s += "\n", a.rootRenderFunc(e, t, n, i, o)
                })
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function t(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n\n    Sorry, your browser is not compatible with the 3D settings editor. <br>\n    Please use a WebGL-enabled browser to edit your 3D settings. <br>\n    See the <a href="https://help.sketchfab.com/hc/en-us/articles/203059088-Compatibility?utm_source=website&utm_campaign=error_webgl">FAQ</a> for more information.\n\n', o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }

            function n(e, t, n, i, o) {
              var r = null,
                a = null,
                s = "";
              try {
                s += '\n    <div class="actions">\n\n    <button class="button btn-medium btn-primary submit" type="submit">', s += i.suppressValue(e.getFilter("default").call(t, i.memberLookup(i.contextOrFrameLookup(t, n, "buttons"), "okLabel", e.opts.autoescape), "OK"), e.opts.autoescape), s += "</button>\n\n    </div>\n", o(null, s)
              } catch (l) {
                o(i.handleError(l, r, a))
              }
            }
            return {
              b_popup_content: t,
              b_popup_footer: n,
              root: e
            }
          }()
        }()
    },
    601: function(e, t) {
      ! function() {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/macros/notification_upload.jinja"] = function() {
          function e(e, t, n, i, o) {
            var r = null,
              a = null,
              s = "";
            try {
              var l = i.makeMacro([], [], function(e) {
                n = n.push(), e = e || {}, e.hasOwnProperty("caller") && n.set("caller", e.caller);
                var t = "";
                return t += '\n\n    <div class="flashmessage-upload">\n        <section class="uploading">\n            <p class="value"></p>\n            <p class="message"></p>\n        </section>\n        <section class="idle">\n            <p class="spinner-inverted"></p>\n            <p class="message"></p>\n        </section>\n        <section class="done">\n            <p class="tick fa"></p>\n            <p class="message"></p>\n        </section>\n        <button class="flashmessage-close" data-action="close" title="Close"></button>\n    </div>\n', n = n.pop(), new i.SafeString(t)
              });
              t.addExport("flashmessage_upload"), t.setVariable("flashmessage_upload", l), o(null, s)
            } catch (c) {
              o(i.handleError(c, r, a))
            }
          }
          return {
            root: e
          }
        }()
      }()
    },
    1034: function(e, t) {
      ! function() {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/partials/emptystates/editor-animations.jinja"] = function() {
          function e(e, t, n, i, o) {
            var r = null,
              a = null,
              s = "";
            try {
              s += '<!--\nHere we create a custom widget with any HTML content.\nBy convention, we wrap it inside ".widget .widget-wrapper" just like any other widget.\nThis is mandatory, please only edit the contents of the wrapper.\n-->\n<div class="widget custom-widget hotspot-infos no-animation-widget">\n    <div class="widget-wrapper">\n        <p class="icon"></p>\n        <p class="message">Your model does not have animations</p>\n        <a target="_blank" href="https://help.sketchfab.com/hc/en-us/articles/203058018-Animations?utm_source=website&utm_campaign=editor_animation_hints">How to upload animations?</a>\n    </div>\n</div>\n', o(null, s)
            } catch (l) {
              o(i.handleError(l, r, a))
            }
          }
          return {
            root: e
          }
        }()
      }()
    },
    1162: function(e, t) {},
    1191: function(e, t, n) {
      "use strict";
      n(48);
      var i = n(234);
      n(220), n(277), n(278);
      var o = n(1192),
        r = n(1845);
      r(), new o, i.history.start({
        pushState: !0
      })
    },
    1192: function(e, t, n) {
      "use strict";
      n(1193)(!0);
      var i = n(216),
        o = n(280),
        r = n(383),
        a = n(239),
        s = n(1194);
      e.exports = o.extend({
        routes: i.extend({}, o.prototype.routes, {
          "models/:modelUid/edit": "index"
        }),
        index: function(e) {
          e = a.string("model", e), r.get(e).then(function(e) {
            new s({
              model: e,
              el: "body"
            })
          })
        }
      })
    },
    1194: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(258),
        s = n(239),
        l = n(255),
        c = n(424),
        u = n(1195),
        d = n(1720),
        h = n(1805),
        p = n(1843),
        g = n(266),
        f = n(479),
        m = n(447),
        v = n(443);
      e.exports = a.extend({
        events: r.extend({}, i.View.prototype.events, {
          "click .publish-model": "onPublishClick"
        }),
        initialize: function() {
          if (a.prototype.initialize.apply(this, arguments), c()) this.viewer = new h({
            el: this.$(".viewer")
          }), this.viewer.setScene({
            uid: this.model.get("uid"),
            features: u.concat(d),
            widgetAPI: new p(s.string("tab"))
          }).start();
          else {
            var e = new f({
                buttons: {
                  okLabel: "exit"
                }
              }),
              t = this.model.get("viewerUrl");
            e.open().then(function() {
              window.location.replace(t)
            })
          }
          o(document).on("click", ".annotation-widget .tool.refresh", function() {
            l.annotationEditorCameraButtonClicked(this.viewer._currentModel.get("uid"))
          }.bind(this)), o(document).on("click", ".annotation-widget .tool.confirm", function() {
            l.annotationEditorWidgetDoneButtonClicked(this.viewer._currentModel.get("uid"))
          }.bind(this)), o(document).on("sortupdate", ":has(> .annotation-widget)", function() {
            l.annotationEditorListReordered(this.viewer._currentModel.get("uid"))
          }.bind(this))
        },
        onPublishClick: function(e) {
          var t = new g({
            title: "Save settings",
            text: ["You need to save settings before publishing your model<br>", "Do you want to save them now?"].join(""),
            safe: !0,
            buttons: {
              ok: !0,
              okLabel: "Save and Publish",
              cancel: !0
            }
          });
          t.open().then(function() {
            t.close();
            var n = this.viewer.scene.getFeatures().saveUI,
              i = n._views[0].save(e);
            i.then(function() {
              this.publish()
            }.bind(this))
          }.bind(this), function() {
            t.close()
          }.bind(this))
        },
        publish: function() {
          var e = this.$(".publish-model");
          e.addClass("progress"), this.model.publish().then(function() {
            var t = new m({
              model: this.model
            });
            t.open(), e.removeClass("progress").addClass("success"), setTimeout(function() {
              e.hide()
            }, 2e3)
          }.bind(this), function(t) {
            if (e.removeClass("progress"), t.responseText.indexOf("e-mail address is confirmed") !== -1) return void new v({
              reason: "publish",
              noAfter: !0
            }).open();
            var n = new g({
              title: "Error",
              text: ["Your model couldn't be published. Please try again later ", "or contact us at support@sketchfab.com"].join(" "),
              buttons: {
                ok: !0
              }
            });
            n.open().then(function() {
              n.close()
            })
          })
        }
      })
    },
    1720: function(e, t, n) {
      "use strict";
      var i = n(1721),
        o = n(1723),
        r = n(1725),
        a = n(1729),
        s = n(1773),
        l = n(1775),
        c = n(1779),
        u = n(1782),
        d = n(1792),
        h = n(1795),
        p = n(1797),
        g = n(1799);
      e.exports = [i, o, r, a, s, l, c, u, d, h, p, g]
    },
    1721: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1722),
        r = {
          FeatureName: "orientationUI",
          ModelName: "Orientation",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1722: function(e, t, n) {
      "use strict";
      var i = n(258);
      e.exports = i.extend({
        initialize: function() {
          i.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getGeneralGroup();
          this.fillGroup(t)
        },
        fillGroup: function(e) {
          var t = e.createWidget("Horizontal", {
            className: "editor-orientation-title"
          });
          t.createWidget("Label", {
            content: "Straighten model"
          });
          var n = t.createWidget("IconButton", {
            icon: "refresh",
            text: "Reset orientation",
            tooltipDirection: "tooltip-left"
          });
          n.model.on("click", function() {
            this.model.trigger("reset")
          }.bind(this));
          var i = e.createWidget("Horizontal"),
            o = this.model,
            r = i.createWidget("Orientation", {
              label: "X",
              eventName: "turnX"
            });
          r.on("turnX", o.trigger.bind(o, "turn", "x"));
          var a = i.createWidget("Orientation", {
            label: "Y",
            eventName: "turnY"
          });
          a.on("turnY", o.trigger.bind(o, "turn", "y"));
          var s = i.createWidget("Orientation", {
            label: "Z",
            eventName: "turnZ"
          });
          s.on("turnZ", o.trigger.bind(o, "turn", "z")), e.createWidget("Checkbox", {
            model: this.model,
            name: "showGizmo",
            label: "Show advanced rotation"
          }), e.createWidget("Separator")
        }
      })
    },
    1723: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1724),
        r = {
          FeatureName: "fovUI",
          ModelName: "Fov",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1724: function(e, t, n) {
      "use strict";
      var i = n(258);
      e.exports = i.extend({
        initialize: function() {
          i.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getGeneralGroup();
          this.fillGroup(t)
        },
        fillGroup: function(e) {
          e.createWidget("Camera Field Of View", "NumberedSlider", {
            id: "FovNumberedSlider",
            model: this.model,
            name: "fov",
            minimum: 1,
            maximum: 179,
            numberOptions: {
              unit: "°"
            }
          })
        }
      })
    },
    1725: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1726),
        r = {
          FeatureName: "shadingStyleUI",
          ModelName: "ShadingStyle",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1726: function(e, t, n) {
      "use strict";
      var i = n(238),
        o = n(258),
        r = n(1727),
        a = function(e, t) {
          e.createWidget("Shading", "Select", {
            model: t,
            name: "styleProxy",
            options: {
              lit: "Lit",
              shadeless: "Shadeless"
            },
            id: "ShadingSelect"
          })
        },
        s = function(e, t) {
          e.createWidget("Renderer", "ToggleButton", {
            model: t,
            name: "rendererProxy",
            options: {
              classic: "Classic",
              pbr: "PBR",
              matcap: "Matcap"
            },
            id: "RendererSelect"
          })
        },
        l = function(e, t) {
          var n = new i({
              rendererProxy: "pbr",
              styleProxy: "lit"
            }),
            o = function() {
              var e = t.get("style"),
                i = t.get("renderer");
              "matcap" === e ? n.set("rendererProxy", "matcap") : (n.set("styleProxy", e), n.set("rendererProxy", i))
            };
          t.on("change:renderer change:style", o), o(), n.on("change:rendererProxy change:styleProxy", function() {
            var e = n.get("styleProxy"),
              i = n.get("rendererProxy");
            "matcap" === i ? t.set("style", "matcap") : (t.set("style", e), t.set("renderer", i))
          }), s(e, n);
          var r = e.createWidget(null, "ToggleChildren", {
            model: n,
            name: "rendererProxy",
            id: "toggleShadingType",
            transform: function() {
              return "matcap" !== n.get("rendererProxy")
            }
          });
          a(r, n)
        },
        c = function(e, t) {
          var n = e.createWidget("Group", {
              label: "Wireframe",
              help: "Display wireframe",
              model: t,
              name: "wireframeEnable",
              id: "WireframeGroup",
              opened: !1
            }),
            o = new i({
              wireColor: void 0,
              wireAlpha: void 0
            }),
            a = n.createWidget(null, "Horizontal");
          a.createWidget("Image", {
            model: o,
            name: "wireColor",
            allowColor: !0,
            allowTexture: !1,
            id: "WireframeImage"
          }), a.createWidget("NumberedSlider", {
            model: o,
            name: "wireAlpha",
            id: "WireframeNumberedSlider"
          }), n.$el.addClass("wireframe-group"), new r("wireColor", "wireAlpha", "wireframeColor", o, t)
        },
        u = function(e, t) {
          var n = e.createWidget("Group", {
            label: "Vertex Color",
            help: "Vertex color settings",
            model: t,
            name: "vertexColorEnable",
            id: "VertexColorGroup",
            opened: !1
          });
          n.createWidget(null, "ToggleButton", {
            model: t,
            name: "vertexColorColorSpace",
            options: {
              linear: "Linear",
              srgb: "sRGB"
            },
            id: "vertexColorColorSpaceSelect"
          });
          var i = n.createWidget(null, "Hyde", {
            model: t,
            name: "hasVertexAlpha"
          });
          i.createWidget(null, "Checkbox", {
            model: t,
            name: "vertexAlphaEnable",
            label: "Use alpha",
            id: "vertexAlphaEnableCheck"
          })
        };
      e.exports = o.extend({
        initialize: function() {
          o.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getGeneralGroup();
          this.fillGroup(t)
        },
        fillGroup: function(e) {
          var t = this.model;
          l(e, t);
          var n = this.options.context.getWidgetAPI(),
            i = n.getTab("Scene"),
            o = i.createWidget(null, "Hyde", {
              model: t,
              name: "hasWireframe"
            });
          c(o, t);
          var r = i.createWidget(null, "Hyde", {
            model: t,
            name: "hasVertexColor"
          });
          u(r, t)
        }
      })
    },
    1727: function(e, t, n) {
      "use strict";
      var i = n(1728),
        o = function(e, t, n, o, r) {
          this._widgetColorField = e, this._widgetAlphaField = t, this._modelField = n, this._widget = o, this._model = r, this._func = i.ColorHexStr, this.init()
        };
      o.prototype = {
        init: function() {
          this.connectSignalModelToWidget(), this.connectSignalWidgetToModel(), this.changeModelToWidget()
        },
        removeSignals: function() {
          this._model.off(null, this.changeModelToWidget, this), this._widget.off(null, this.changeWidgetToModel, this)
        },
        connectSignalModelToWidget: function() {
          this._model.on("change:" + this._modelField, this.changeModelToWidget, this)
        },
        removeSignalModelToWidget: function() {
          this._model.off("change:" + this._modelField, this.changeModelToWidget)
        },
        connectSignalWidgetToModel: function() {
          this._widget.on("change:" + this._widgetColorField, this.changeWidgetToModel, this), this._widget.on("change:" + this._widgetAlphaField, this.changeWidgetToModel, this)
        },
        removeSignalWidgetToModel: function() {
          this._widget.off("change:" + this._widgetColorField, this.changeWidgetToModel), this._widget.off("change:" + this._widgetAlphaField, this.changeWidgetToModel)
        },
        changeModelToWidget: function() {
          var e = this._model.get(this._modelField),
            t = Math.round(parseInt(e.substr(6, 2), 16) / 2.55);
          this.removeSignalWidgetToModel(), this._widget.set(this._widgetColorField, this._func.modelToWidget(e)), this._widget.set(this._widgetAlphaField, t), this.connectSignalWidgetToModel()
        },
        changeWidgetToModel: function() {
          var e = this._widget.get(this._widgetColorField),
            t = Math.round(2.55 * this._widget.get(this._widgetAlphaField)).toString(16);
          t = 1 === t.length ? "0" + t : t, this.removeSignalModelToWidget(), this._model.set(this._modelField, this._func.widgetToModel(e) + t), this.connectSignalModelToWidget()
        }
      }, e.exports = o
    },
    1728: function(e, t) {
      "use strict";
      var n = {};
      n.PassThrough = {
        widgetToModel: function(e) {
          return e
        },
        modelToWidget: function(e) {
          return e
        }
      }, n.createXScale = function(e) {
        var t = {};
        return t.widgetToModel = function(t) {
          return t * e
        }, t.modelToWidget = function(t) {
          return t / e
        }, t
      }, n.createAddXScale = function(e, t) {
        var n = {};
        return n.widgetToModel = function(n) {
          return n * t + e
        }, n.modelToWidget = function(n) {
          return (n - e) / t
        }, n
      }, n.createScaleXPow = function(e, t) {
        var n = {};
        return n.widgetToModel = function(n) {
          return Math.pow(Math.abs(n), t) * (n < 0 ? -e : e)
        }, n.modelToWidget = function(n) {
          var i = n / e;
          return Math.pow(Math.abs(i), 1 / t) * (i < 0 ? -1 : 1)
        }, n
      }, n.PerCent = n.createXScale(.01), n.DegToRad = n.createXScale(Math.PI / 180), n.InversePerCent = {
        widgetToModel: function(e) {
          return (100 - e) / 100
        },
        modelToWidget: function(e) {
          return 100 * (1 - e)
        }
      }, n.Exponential = {
        widgetToModel: function(e) {
          return Math.exp(e / 10) - 1
        },
        modelToWidget: function(e) {
          return 10 * Math.log(e + 1)
        }
      }, n.ColorHexStr = {
        widgetToModel: function(e) {
          return ((1 << 24) + (255 * e.r << 16) + (255 * e.g << 8) + 255 * e.b << 0).toString(16).slice(1)
        },
        modelToWidget: function(e) {
          return {
            r: parseInt(e.substr(0, 2), 16) / 255,
            g: parseInt(e.substr(2, 2), 16) / 255,
            b: parseInt(e.substr(4, 2), 16) / 255
          }
        }
      }, n.ColorVec3sRGB = {
        widgetToModel: function(e) {
          return [e.r, e.g, e.b]
        },
        modelToWidget: function(e) {
          return {
            r: e[0],
            g: e[1],
            b: e[2]
          }
        }
      }, e.exports = n
    },
    1729: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1730),
        r = {
          FeatureName: "backgroundUI",
          ModelName: "Background",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1730: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(233),
        a = n(238),
        s = n(258),
        l = n(247),
        c = n(1632),
        u = n(1472),
        d = n(1731),
        h = n(266),
        p = n(215),
        g = n(1733),
        f = n(1728),
        m = n(444),
        v = n(1734),
        b = [0, .02, .055, .1];
      e.exports = s.extend({
        initialize: function() {
          s.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getTab("Scene"),
            n = r.me();
          this.me = n, this.buildGroup(t)
        },
        buildGroup: function(e) {
          var t;
          this.model.on("change:enable", function(e, n) {
            "none" === n ? t = new m({
              content: "Transparent background isn't compatible with antialiasing and supersampling. They have been disabled.",
              "class": "info",
              delay: 5e3
            }) : t && t.close()
          });
          var n = this.options.context.getFeatures().environment.getModel();
          this.model.proxyCollection = new l;
          var i = v.extend({
            set: function() {
              var e, t = this.model.get(this.options.name);
              if ("none" === t) {
                var i = this.previousValue || "fixed";
                e = "environment" !== i || n.get("enable") ? i : "fixed"
              } else this.previousValue = this.model.get(this.options.name), e = "none";
              return this.model.set("tabName", e), this.model.set(this.options.name, e)
            },
            get: function() {
              return "none" !== this.model.get(this.options.name)
            }
          });
          this._group = e.createWidget(i, {
            label: "Background",
            help: "Environment, image or color displayed behind your model",
            model: this.model,
            name: "enable",
            id: "BackgroundGroup",
            opened: !1
          }), this.model.set("tabName", this.model.get("enable")), this.tabbed = this._group.createWidget("Background type", "Tabbed", {
            model: this.model,
            name: "tabName",
            id: "BackgroundRendererSelect",
            className: "background-renderer-select"
          });
          var o = this.tabbed.createPanel("Environment", {
              name: "environment",
              help: "Environment background options"
            }),
            r = this.tabbed.createPanel("Image", {
              name: "fixed",
              help: "Static image background options"
            }),
            a = this.tabbed.createPanel("Color", {
              name: "color",
              help: "Plain color background options"
            });
          this.model.on("change:tabName", function(e, t) {
            this.model.set("enable", t)
          }.bind(this)), this.buildEnvironmentTab(o), this.buildImageTab(r), this.buildColorTab(a), this.onSyncCollection()
        },
        onEnvironmentDisabled: function(e, t) {
          var n = this.tabbed.$el.find('[data-tab="environment"]');
          if (t) this.previousTab && "environment" === this.previousTab && this.model.set("tabName", "environment"), n.show();
          else {
            var i = this.model.get("tabName");
            "environment" === i && "none" !== this.model.get("enable") && this.model.set("tabName", "fixed"), this.previousTab = i, n.hide()
          }
        },
        getEnvironmentLabelMessage: function(e) {
          var t = this.options.context.getFeatures().environment.getModel(),
            n = "Current environment:<br>";
          if (!e) return n;
          var i = t.environmentCollection.findWhere({
            uid: e
          }).get("name");
          return n + i + ' (<a href="#" data-action="goToLightningTab">change</a>)'
        },
        buildEnvironmentTab: function(e) {
          var t = this.options.context.getFeatures().environment.getModel(),
            n = new a({
              blur: this.getClosestBlur(t.get("blur")).toString()
            }),
            i = f.createScaleXPow(35, 4),
            o = f.DegToRad;
          new g("rotation", "rotation", n, t, o), new g("exposure", "exposure", n, t, i), n.on("change:blur", function(e, n) {
            t.set("blur", parseFloat(n))
          }.bind(this));
          var r = {};
          r[b[0]] = "0", r[b[1]] = "1", r[b[2]] = "2", r[b[3]] = "3", this.environmentLabel = e.createWidget("Label", {
            content: this.getEnvironmentLabelMessage(t.get("uid")),
            escape: !1
          }), t.on("change:enable", this.onEnvironmentDisabled.bind(this)), this.onEnvironmentDisabled(t, t.get("enable")), t.on("change:uid", function(e, t) {
            this.environmentLabel.set(this.getEnvironmentLabelMessage(t)), this.environmentLabel.render()
          }.bind(this)), this.environmentLabel.$el.on("click", 'a[data-action="goToLightningTab"]', function(e) {
            e.preventDefault();
            var t = this.options.context.getWidgetAPI();
            t.getTabbedWidget().model.set("value", "lighting")
          }.bind(this)), e.createWidget("Blur", "ToggleButton", {
            label: "Blur background",
            model: n,
            name: "blur",
            id: "EnvironmentBlurToggleButton",
            options: r
          }), e.createWidget("Brightness", "NumberedSlider", {
            model: t,
            name: "backgroundExposure",
            minimum: 0,
            maximum: 2,
            step: .01,
            id: "EnvironmentBackgroundExposureNumberedSlider"
          })
        },
        buildImageTab: function(e) {
          this.model.backgroundCollection.on("add", this.onAddedElement, this), this.model.on("uploadSelectEvent", this.onAddNewBackground, this);
          var t = e.createWidget(null, "Repeat", {
              model: this.model,
              name: "uid",
              collection: this.model.proxyCollection,
              id: "BackgroundSelect",
              className: "background-select-widget",
              widget: "OptionRow",
              widgetOptions: {
                options: {
                  image: "image",
                  name: "name",
                  value: "value",
                  select: function(e) {
                    var t = o(e.currentTarget).attr("data-value");
                    t && this.model.set("uid", t)
                  }.bind(this),
                  "delete": function(e) {
                    var t = o(e.currentTarget).closest("[data-value]").attr("data-value");
                    t && this.onRemoveBackground(t)
                  }.bind(this)
                }
              }
            }),
            n = function(e, n) {
              t.widgets.forEach(function(e) {
                e.$el.toggleClass("selected", e.model.get("value") === n)
              })
            };
          this.model.on("change:uid", n.bind(this)), this.model.proxyCollection.on("add", function() {
            n(this.model, this.model.get("uid"))
          }.bind(this)), "free" === this.me.get("account") ? e.createWidget("Label", {
            content: ['Upgrade to <a href="/plans" target="_blank">Sketchfab PRO</a> ', 'or <a href="/invite" target="_blank">invite ' + p.referrals.nbInvitesForProUnlock + " friends</a> ", "to upload your custom background images"].join(""),
            escape: !1,
            classname: "upgrade",
            id: "BackgroundLabel"
          }) : e.createWidget("FilePicker", {
            model: this.model,
            text: "Import background image",
            id: "BackgroundFilePicker",
            className: "background-file-picker",
            dragAndDrop: {
              target: e.$el
            }
          })
        },
        buildColorTab: function(e) {
          var t = new a({
            color: void 0
          });
          e.createWidget("Color", {
            model: t,
            name: "color",
            allowColor: !0,
            allowTexture: !1,
            id: "BackgroundColor"
          }), new g("color", "color", t, this.model, f.ColorVec3sRGB)
        },
        getClosestBlur: function(e) {
          for (var t = e, n = b[0], i = 0, o = b.length; i < o; i++) {
            var r = Math.abs(e - b[i]);
            r < t && (t = r, n = b[i])
          }
          return n
        },
        onRemoveBackground: function(e) {
          var t, n = this.options.context.getFeatures().background.getModel();
          t = n.id.length < 32 ? this.model.backgroundCollection.findWhere({
            id: e
          }) : this.model.backgroundCollection.findWhere({
            uid: e
          });
          var i = this.options.context.getFeatures().background.getModel()._trashbin;
          if (n && n.get("uid") === t.get("uid")) {
            var o = this.model.backgroundCollection.findWhere({
              isDefault: !0
            }).get("uid");
            this.model.set("uid", o)
          }
          this.model.proxyCollection.findWhere({
            value: e
          }).destroy(), i.push(t), t.on("restore", this.model.backgroundCollection.add.bind(this.model.backgroundCollection))
        },
        onAddNewBackground: function(e) {
          var t = this.validateBackground(e);
          if (t) {
            var n = new h({
              title: "Invalid background",
              text: t,
              buttons: {
                ok: !0
              }
            });
            return n.open().then(function() {
              n.close()
            }), n
          }
          var o = this,
            r = d(e);
          return r.then(function(t) {
            var n = i.uniqueId(),
              r = new c({
                imageFile: e,
                images: [{
                  uid: n,
                  url: t.src,
                  width: t.naturalWidth,
                  height: t.naturalHeight
                }],
                id: n,
                name: e.name
              });
            o.model.backgroundCollection.add(r), t.imageModel = r, o.model.set("uid", n)
          }), r
        },
        onSyncCollection: function() {
          this.model.backgroundCollection.each(this.onAddedElement.bind(this))
        },
        onAddedElement: function(e) {
          var t = new u({
            images: e.getImages()
          }).findImageSmallest();
          t || console.error("MISSING BACKGROUND DATA!");
          var n = e.get("isDefault");
          this.model.proxyCollection.add({
            label: e.get("name"),
            value: e.get("uid") || e.get("id"),
            image: t.url,
            imageModel: e,
            deletable: !(void 0 === n && !e.isNew()) && !n
          })
        },
        validateBackground: function(e) {
          var t = null,
            n = e.name.replace(/^.*\.([^.]*)$/, "$1").toLowerCase(),
            i = p.backgroundFiletypes,
            o = p.maxBackgroundFilesize,
            r = i.indexOf(n) !== -1,
            a = e.size < o;
          if (r) {
            if (!a) {
              var s = Math.floor(o / 1024 / 1024) + "MB",
                l = Math.ceil(e.size / 1024 / 1024) + "MB";
              t = "Maximum upload size: " + s + " (your file is " + l + ")."
            }
          } else {
            var c = i.join(", ");
            t = "Unsupported format. Please upload a " + c.toUpperCase() + "."
          }
          return t
        }
      })
    },
    1731: function(e, t, n) {
      "use strict";
      var i = n(235),
        o = n(1732),
        r = n(1637),
        a = n(1199),
        s = function(e, t, n, i) {
          var o;
          n && (o = r(e), o.name = i, e = URL.createObjectURL(o)), a.instance.getOrCreateImage(e).promise.then(function(e) {
            var n = e.getImage();
            o && (n.imageBlob = o), t.resolve(n)
          })["catch"](function() {
            t.reject("failed to read image")
          })
        },
        l = function(e) {
          var t = i.defer(),
            n = e.name;
          if (n.toLowerCase().endsWith("tga")) {
            var r = new FileReader;
            r.onload = function(e) {
              var i = new o.TGA;
              i.load(new Uint8Array(e.target.result)), s(i.getDataURL("image/png"), t, !0, n + ".png")
            }, r.readAsArrayBuffer(e)
          } else s(URL.createObjectURL(e), t);
          return t.promise
        };
      e.exports = l
    },
    1732: function(e, t, n) {
      ! function(e) {
        "use strict";

        function n() {}

        function i(e) {
          if (e.imageType === n.Type.NO_DATA) throw new Error("Targa::checkHeader() - No data");
          if (e.hasColorMap) {
            if (e.colorMapLength > 256 || 24 !== e.colorMapSize || 1 !== e.colorMapType) throw new Error("Targa::checkHeader() - Invalid colormap for indexed type")
          } else if (e.colorMapType) throw new Error("Targa::checkHeader() - Why does the image contain a palette ?");
          if (e.width <= 0 || e.height <= 0) throw new Error("Targa::checkHeader() - Invalid image size");
          if (8 !== e.pixelDepth && 16 !== e.pixelDepth && 24 !== e.pixelDepth && 32 !== e.pixelDepth) throw new Error('Targa::checkHeader() - Invalid pixel size "' + e.pixelDepth + '"')
        }

        function o(e, t, n, i) {
          var o, r, a, s, l, c;
          for (c = new Uint8Array(i), l = new Uint8Array(n), o = 0; o < i;)
            if (r = e[t++], a = (127 & r) + 1, 128 & r) {
              for (s = 0; s < n; ++s) l[s] = e[t++];
              for (s = 0; s < a; ++s) c.set(l, o), o += n
            } else
              for (a *= n, s = 0; s < a; ++s) c[o++] = e[t++];
          return c
        }

        function r(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h, p;
          for (d = 0, p = o; p !== a; p += r)
            for (h = s; h !== c; h += l, d++) u = t[d], e[4 * (h + i * p) + 3] = 255, e[4 * (h + i * p) + 2] = n[3 * u + 0], e[4 * (h + i * p) + 1] = n[3 * u + 1], e[4 * (h + i * p) + 0] = n[3 * u + 2];
          return e
        }

        function a(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h, p;
          for (d = 0, p = o; p !== a; p += r)
            for (h = s; h !== c; h += l, d += 2) u = t[d + 0] | t[d + 1] << 8, e[4 * (h + i * p) + 0] = (31744 & u) >> 7, e[4 * (h + i * p) + 1] = (992 & u) >> 2, e[4 * (h + i * p) + 2] = (31 & u) >> 3, e[4 * (h + i * p) + 3] = 32768 & u ? 0 : 255;
          return e
        }

        function s(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h;
          for (u = 0, h = o; h !== a; h += r)
            for (d = s; d !== c; d += l, u += 3) e[4 * (d + i * h) + 3] = 255, e[4 * (d + i * h) + 2] = t[u + 0], e[4 * (d + i * h) + 1] = t[u + 1], e[4 * (d + i * h) + 0] = t[u + 2];
          return e
        }

        function l(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h;
          for (u = 0, h = o; h !== a; h += r)
            for (d = s; d !== c; d += l, u += 4) e[4 * (d + i * h) + 2] = t[u + 0], e[4 * (d + i * h) + 1] = t[u + 1], e[4 * (d + i * h) + 0] = t[u + 2], e[4 * (d + i * h) + 3] = t[u + 3];
          return e
        }

        function c(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h, p;
          for (d = 0, p = o; p !== a; p += r)
            for (h = s; h !== c; h += l, d++) u = t[d], e[4 * (h + i * p) + 0] = u, e[4 * (h + i * p) + 1] = u, e[4 * (h + i * p) + 2] = u, e[4 * (h + i * p) + 3] = 255;
          return e
        }

        function u(e, t, n, i, o, r, a, s, l, c) {
          var u, d, h;
          for (u = 0, h = o; h !== a; h += r)
            for (d = s; d !== c; d += l, u += 2) e[4 * (d + i * h) + 0] = t[u + 0], e[4 * (d + i * h) + 1] = t[u + 0], e[4 * (d + i * h) + 2] = t[u + 0], e[4 * (d + i * h) + 3] = t[u + 1];
          return e
        }
        n.Type = {
          NO_DATA: 0,
          INDEXED: 1,
          RGB: 2,
          GREY: 3,
          RLE_INDEXED: 9,
          RLE_RGB: 10,
          RLE_GREY: 11
        }, n.Origin = {
          BOTTOM_LEFT: 0,
          BOTTOM_RIGHT: 1,
          TOP_LEFT: 2,
          TOP_RIGHT: 3,
          SHIFT: 4,
          MASK: 48
        }, n.prototype.open = function(e, t) {
          var n, i = this;
          n = new XMLHttpRequest, n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function() {
            200 === this.status && (i.load(new Uint8Array(n.response)), t && t.call(i))
          }, n.send(null)
        }, n.prototype.load = function(e) {
          var t = 0;
          if (e.length < 18) throw new Error("Targa::load() - Not enough data to contain header");
          if (this.header = {
              idLength: e[t++],
              colorMapType: e[t++],
              imageType: e[t++],
              colorMapIndex: e[t++] | e[t++] << 8,
              colorMapLength: e[t++] | e[t++] << 8,
              colorMapDepth: e[t++],
              offsetX: e[t++] | e[t++] << 8,
              offsetY: e[t++] | e[t++] << 8,
              width: e[t++] | e[t++] << 8,
              height: e[t++] | e[t++] << 8,
              pixelDepth: e[t++],
              flags: e[t++]
            }, this.header.hasEncoding = this.header.imageType === n.Type.RLE_INDEXED || this.header.imageType === n.Type.RLE_RGB || this.header.imageType === n.Type.RLE_GREY, this.header.hasColorMap = this.header.imageType === n.Type.RLE_INDEXED || this.header.imageType === n.Type.INDEXED, this.header.isGreyColor = this.header.imageType === n.Type.RLE_GREY || this.header.imageType === n.Type.GREY, i(this.header), t += this.header.idLength, t >= e.length) throw new Error("Targa::load() - No data");
          if (this.header.hasColorMap) {
            var r = this.header.colorMapLength * (this.header.colorMapDepth >> 3);
            this.palette = e.subarray(t, t + r), t += r
          }
          var a = this.header.pixelDepth >> 3,
            s = this.header.width * this.header.height,
            l = s * a;
          this.header.hasEncoding ? this.imageData = o(e, t, a, l) : this.imageData = e.subarray(t, t + (this.header.hasColorMap ? s : l))
        }, n.prototype.getImageData = function(e) {
          var t, i, o, d, h, p, g, f = this.header.width,
            m = this.header.height,
            v = (this.header.flags & n.Origin.MASK) >> n.Origin.SHIFT;
          switch (e || (e = document ? document.createElement("canvas").getContext("2d").createImageData(f, m) : {
            width: f,
            height: m,
            data: new Uint8ClampedArray(f * m * 4)
          }), v === n.Origin.TOP_LEFT || v === n.Origin.TOP_RIGHT ? (d = 0, h = 1, p = m) : (d = m - 1, h = -1, p = -1), v === n.Origin.TOP_LEFT || v === n.Origin.BOTTOM_LEFT ? (t = 0, i = 1, o = f) : (t = f - 1, i = -1, o = -1), this.header.pixelDepth) {
            case 8:
              g = this.header.isGreyColor ? c : r;
              break;
            case 16:
              g = this.header.isGreyColor ? u : a;
              break;
            case 24:
              g = s;
              break;
            case 32:
              g = l
          }
          return g(e.data, this.imageData, this.palette, f, d, h, p, t, i, o), e
        }, n.prototype.getCanvas = function() {
          var e, t, n;
          return e = document.createElement("canvas"), t = e.getContext("2d"), n = t.createImageData(this.header.width, this.header.height), e.width = this.header.width, e.height = this.header.height, t.putImageData(this.getImageData(n), 0, 0), e
        }, n.prototype.getDataURL = function(e) {
          return this.getCanvas().toDataURL(e || "image/png")
        };
        var d = {};
        d.exports = t, d.exports && (d.exports.TGA = n)
      }(this)
    },
    1733: function(e, t, n) {
      "use strict";
      var i = n(1728),
        o = function(e, t, n, o, r) {
          this._widgetField = e, this._modelField = t, this._widget = n, this._model = o, this._func = "string" == typeof r ? i[r] : r, r || (this._func = i.PassThrough), this.init()
        };
      o.prototype = {
        init: function() {
          this.connectSignalModelToWidget(), this.connectSignalWidgetToModel(), this.changeModelToWidget()
        },
        removeSignals: function() {
          this._model.off(null, this.changeModelToWidget, this), this._widget.off(null, this.changeWidgetToModel, this)
        },
        connectSignalModelToWidget: function() {
          this._model.on("change:" + this._modelField, this.changeModelToWidget, this)
        },
        removeSignalModelToWidget: function() {
          this._model.off("change:" + this._modelField, this.changeModelToWidget)
        },
        connectSignalWidgetToModel: function() {
          this._widget.on("change:" + this._widgetField, this.changeWidgetToModel, this)
        },
        removeSignalWidgetToModel: function() {
          this._widget.off("change:" + this._widgetField, this.changeWidgetToModel)
        },
        changeModelToWidget: function() {
          var e = this._model.get(this._modelField);
          this.removeSignalWidgetToModel(), this._widget.set(this._widgetField, this._func.modelToWidget(e)), this.connectSignalWidgetToModel()
        },
        changeWidgetToModel: function() {
          var e = this._widget.get(this._widgetField);
          this.removeSignalModelToWidget(), this._model.set(this._modelField, this._func.widgetToModel(e)), this.connectSignalModelToWidget()
        }
      }, e.exports = o
    },
    1734: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(286),
        a = n(1735),
        s = n(1737);
      e.exports = s.extend(o.extend({}, r, {
        el: ['<div class="widget group-widget">', '          <div class="widget-wrapper">', '              <div class="header">', '                  <a class="label"></a>', '                  <a class="help">', '                      <i class="fa fa-question-circle"></i>', '                      <div class="tooltip tooltip-down"></div>', "                  </a>", '                  <a class="state"></a>', "              </div>", '              <div class="inner"></div>', "          </div>", "      </div>"].join(""),
        events: o.extend({}, s.prototype.events, {
          "click .header": "toggleVisibilityEvent",
          "click .state": "toggleStateEvent"
        }),
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            inner: a.reify(e, {
              withMargins: !0
            }),
            label: "",
            opened: !0,
            dragAndDrop: !0
          }), this.inner = t.inner, s.prototype.constructor.call(this, e, t), this.$(".label").text(this.options.label), this.options.help ? this.$(".help .tooltip").html(this.options.help) : this.$(".help").hide(), this.$(".inner").append(this.inner.$el), this.options.opened && this.$el.addClass("opened"), this.initializeDragAndDrop()
        },
        delegateEvents: function() {
          s.prototype.delegateEvents.apply(this, arguments), this.delegateDragAndDrop(), this.inner.delegateEvents()
        },
        undelegateEvents: function() {
          s.prototype.undelegateEvents.apply(this, arguments), this.undelegateDragAndDrop(), this.inner.undelegateEvents()
        },
        render: function() {
          this.$el.toggleClass("static", null == this.get()), this.$el.toggleClass("active", this.get())
        },
        toggleVisibilityEvent: function(e) {
          e.preventDefault(), this.$el.toggleClass("opened")
        },
        toggleStateEvent: function(e) {
          e.preventDefault(), e.stopPropagation(), this.change(!this.model.get(this.options.name))
        },
        addWidget: function() {
          return this.inner.addWidget.apply(this.inner, arguments)
        },
        createWidget: function() {
          return this.inner.createWidget.apply(this.inner, arguments)
        },
        onDragEnter: function(e) {
          this.isNotDraggingFile(e) || this.$el.hasClass("opened") || this.toggleVisibilityEvent(e)
        },
        onDragEnd: function() {},
        onDragOver: function() {},
        onDrop: function() {}
      }))
    },
    1735: function(e, t, n) {
      "use strict";
      var i = n(1736);
      e.exports = i.extend({
        el: ['<div class="widget layout-widget vertical-widget">', '          <div class="widget-wrapper">', '              <div class="children"></div>', "          </div>", "      </div>"].join("")
      })
    },
    1736: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(1737);
      e.exports = r.extend({
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            withMargins: !0,
            withPadding: !1
          }, t), r.prototype.constructor.call(this, e, t), this.options.withMargins && this.$el.addClass("with-margins"), this.options.withPadding && this.$el.addClass("with-padding")
        },
        addWidget: function(e, t) {
          if (arguments.length <= 1 && (t = e, e = void 0), e) {
            if (i("<div/>").attr("class", "widget widget-label").append(i("<label/>").attr("class", "label").text(e)).append(t.$el).appendTo(this.$(".children")), t.options && t.options.help) {
              var n = ['<div class="help">', '   <i class="fa fa-question-circle"></i>', '   <div class="tooltip tooltip-down">', t.options.help, "   </div>", "</div>"].join("");
              t.$el.parent(".widget-label").find("label.label").append(n)
            }
          } else t.$el.appendTo(this.$(".children"));
          return t
        },
        removeWidget: function(e) {
          this.$(e.el).length < 1 || (e.$el.parent().is(this.$(".children")) && e.$el.remove(), e.$el.parentsUntil(this.$(".children")).remove())
        },
        createWidget: function(e, t, i) {
          (1 === arguments.length || 2 === arguments.length && "object" == typeof t) && (i = t, t = e, e = void 0);
          var o = "function" != typeof t ? n(1738)[t] : t;
          if (!o) throw new Error(t + ": Invalid widget type");
          var r = o.reify(this, i);
          return this.addWidget(e, r)
        }
      })
    },
    1737: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216);
      e.exports = i.View.extend({
        el: '<div class="widget"/>',
        constructor: function(e, t) {
          this.environment = r.extend({}, e ? e.environment : {}, (t || {}).environment), this.options = t || {}, this.collection = this.options.collection, this.model = this.options.model, i.View.call(this, t)
        },
        initialize: function(e) {
          i.View.prototype.initialize.call(this, e), this.render(), void 0 !== this.options.id && (this.id = this.options.id, this.$el.attr("id", this.id)), void 0 !== this.options.className && (this.className = this.options.className, this.$el.addClass(this.className))
        },
        $: function(e) {
          var t = this.$el;
          return this.$el.find(e).filter(function() {
            return o(this).parent().closest(".widget").is(t)
          })
        },
        delegateEvents: function(e) {
          e || (e = r.result(this, "events") || {});
          var t = this.$el;
          return i.View.prototype.delegateEvents.call(this, Object.keys(e).reduce(function(n, i) {
            var a = e[i];
            return r.isFunction(a) || (a = this[e[i]]), a ? (n[i] = function(e) {
              e && e.currentTarget && !o(e.currentTarget).closest(".widget").is(t) || a.apply(this, arguments)
            }.bind(this), n) : n
          }.bind(this), {})), this.model && this.model.on("change", this.modelChangeEvent, this), this
        },
        undelegateEvents: function() {
          return i.View.prototype.undelegateEvents.apply(this, arguments), this.model && this.model.off("change", this.modelChangeEvent, this), this
        },
        modelChangeEvent: function() {
          var e = this.options.name,
            t = e + ".",
            n = !e,
            i = Object.keys(this.model.changedAttributes() || {}),
            o = i.some(function(n) {
              return n === e || 0 === n.indexOf(t)
            });
          (n || o) && this.render()
        },
        change: function(e, t) {
          1 === arguments.length && (t = e, e = void 0);
          var n = !0,
            i = function() {
              n = !1
            },
            o = {
              target: this,
              which: e,
              value: t,
              preventDefault: i
            };
          return this.trigger("change.before", o), !!n && (this.defaultAction(e, t), this.trigger("change"), !0)
        },
        defaultAction: function(e, t) {
          this.set(t)
        },
        field: function(e) {
          return this.options.name + (e ? "." + e : "")
        },
        get: function(e) {
          return this.model.get(this.field(e))
        },
        set: function(e, t) {
          return 1 === arguments.length && (t = e, e = void 0), this.model.set(this.field(e), t)
        },
        disable: function() {
          this._disabled = !0, this.$el.addClass("disabled")
        },
        enable: function() {
          this._disabled = !1, this.$el.removeClass("disabled")
        }
      }, {
        reify: function() {
          var e = arguments,
            t = this,
            n = function() {
              t.apply(this, e)
            };
          return n.prototype = this.prototype, new n
        }
      })
    },
    1738: function(e, t, n) {
      "use strict";
      var i = n(1739),
        o = n(1740),
        r = n(1741),
        a = n(1744),
        s = n(1745),
        l = n(1747),
        c = n(1750),
        u = n(1755),
        d = n(1734),
        h = n(1756),
        p = n(1757),
        g = n(1758),
        f = n(1751),
        m = n(1759),
        v = n(1760),
        b = n(1762),
        w = n(1763),
        x = n(1764),
        y = n(1742),
        k = n(1743),
        E = n(1765),
        _ = n(1766),
        T = n(1767),
        S = n(1768),
        C = n(1769),
        M = n(1770),
        O = n(1761),
        F = n(1754),
        D = n(1771),
        W = n(1772),
        L = n(1746),
        P = n(1735);
      n(1737), e.exports = {
        Group: d,
        Tabbed: F,
        Vertical: P,
        Horizontal: h,
        Panel: _,
        Hyde: p,
        Repeat: T,
        ToggleChildren: W,
        IconButton: g,
        Image: f,
        ImagePreview: m,
        InfiniteSlider: v,
        Color: l,
        Checkbox: s,
        FactoredImage: c,
        SlideredImage: M,
        Number: x,
        Options: y,
        OptionRow: k,
        Select: S,
        Slider: O,
        NumberedSlider: w,
        Label: b,
        Separator: C,
        ToggleSwitch: L,
        ToggleButton: D,
        Button: a,
        FilePicker: u,
        Annotation: i,
        Animation: o,
        Axis: r,
        Orientation: E
      }
    },
    1739: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(393),
        a = n(1737),
        s = n(394);
      e.exports = a.extend(i.extend({}, r, s, {
        el: ['<div class="widget annotation-widget">', '          <div class="widget-wrapper">', "              <form>", '                  <div class="extra sort-handle">', '                      <span class="index"></span>', '                      <div class="tools-cell">', '                          <div class="tool refresh" title="Use current point of view">', '                              <i class="fa fa-camera"></i>', "                          </div>", '                          <div class="tool delete" title="Delete">', '                              <i class="fa fa-trash-o"></i>', "                          </div>", '                          <button type="submit" class="tool primary confirm" title="Save">', "                              Done", "                          </button>", '                          <div class="tool primary edit" title="Edit">', "                              Edit", "                          </div>", "                      </div>", "                  </div>", '                  <div class="content">', '                      <div class="preview-cell">', "                      </div>", '                      <div class="content-cell">', '                          <div class="title"></div>', '                          <div class="description markdown-rendered-content"></div>', "                      </div>", '                      <div class="edit-cell">', '                              <input class="title" placeholder="Title *" maxlength="64" required>', '                              <textarea class="description" placeholder="Description" maxlength="256"></textarea>', "                      </div>", "                  </div>", "              </form>", "          </div>", "      </div>"].join(""),
        events: i.extend({}, a.prototype.events, {
          "click .edit": "startEdition",
          "dblclick .content": "startEdition",
          "click .confirm": "confirmEdition",
          "click .delete": "deleteSelf",
          "click .refresh": "refreshPosition",
          "click .preview-cell": "selectSelf",
          "click .content-cell": "selectSelf",
          "keydown textarea": "unsetMarkdownReady"
        }),
        constructor: function() {
          this.clickSomeWhereElse_ = this.clickSomeWhereElse.bind(this), a.prototype.constructor.apply(this, arguments)
        },
        initialize: function() {
          a.prototype.initialize.apply(this, arguments), this.on("sorted", function() {
            this.render()
          }.bind(this)), this.initializeMarkdown({
            input: this.$(".edit-cell textarea"),
            target: this.$(".content-cell .description")
          })
        },
        delegateEvents: function() {
          a.prototype.delegateEvents.apply(this, arguments), o(document).on("click", this.clickSomeWhereElse_)
        },
        undelegateEvents: function() {
          a.prototype.undelegateEvents.apply(this, arguments), o(document).on("click", this.clickSomeWhereElse_)
        },
        render: function() {
          this.model.get("preview") && this.$(".preview-cell").css("background-image", "url(%s)".replace("%s", this.model.get("preview"))), this.model.collection ? this.$(".extra").css("display", "").find(".index").text(this.model.collection.indexOf(this.model) + 1) : this.$(".extra").hide(), this.$(".content-cell .title").text(this.model.get("name")), this.$(".content-cell .description").html(this.model.get("content").rendered), this.handleLazyLoading()
        },
        startEdition: function() {
          this.$el.hasClass("edition") || (this.$(".edit-cell .title").val(this.model.get("name")), this.$(".edit-cell .description").val(this.model.get("content").raw), this.$el.addClass("edition"))
        },
        confirmEdition: function() {
          this.$el.hasClass("edition") && this.$(".edit-cell .title").val() && (this.$el.removeClass("edition"), this.renderMarkdown().then(function(e) {
            this.model.set("name", this.$(".edit-cell .title").val()), this.model.set("content", {
              raw: this.$(".edit-cell .description").val(),
              rendered: e
            })
          }.bind(this)))
        },
        refreshPosition: function() {
          this.model.get("refreshAction")()
        },
        deleteSelf: function() {
          if (this.model.collection) {
            var e = o.Deferred(),
              t = e.promise();
            this.model.collection.trigger("beforeRemove", e, this.model), t.then(function() {
              this.model.trigger("select", void 0), this.model.collection.remove(this.model)
            }.bind(this))
          }
        },
        selectSelf: function() {
          this.model.trigger("select", this.model)
        },
        clickSomeWhereElse: function(e) {
          this.$el.has(e.target).length || this.confirmEdition()
        }
      }))
    },
    1740: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(241),
        a = n(1737),
        s = n(266);
      e.exports = a.extend({
        el: ['<div class="widget animation-widget">', '   <div class="widget-wrapper">', "   </div>", "</div>"].join(""),
        template: r.getFromString(['<div class="visibility{% if not isEnabled %} hidden{% endif %}"></div>', '<div class="name">', '    <div class="display"><p>{{ name }}</p></div>', '    <div class="edit"><input type="text" maxlength="128" value="{{ name }}" /></div>', "</div>", '<div class="spacer"></div>', '<div class="duration">{{ duration | seconds_to_duration }}</div>', '<div class="contextual-menu">', '    <ul class="menu-options">', '        <li class="seamless{% if isLoop %} enabled{% endif %}">Seamless loop</li>', '        <li class="rename">Rename</li>', '        <li class="delete">Delete</li>', "    </ul>", "</div>"].join("")),
        events: o.extend({}, a.prototype.events, {
          "click .visibility": "toggleVisibility",
          "click .name .display": "selectAnimation",
          "click .contextual-menu": "toggleContextualMenu",
          "click .contextual-menu .seamless": "toggleSeamlessLoop",
          "click .contextual-menu .rename": "enterEditionMode",
          "click .contextual-menu .delete": "deleteAnimation",
          "blur .name input": "leaveEditionMode",
          "keyup .name input": "updateName",
          "keydown .name input": "handleNameKeys"
        }),
        constructor: function() {
          this.globalCloseContextualMenu = this.globalCloseContextualMenu.bind(this), this.toggleContextualMenu = this.toggleContextualMenu.bind(this), this.toggleSeamlessLoop = this.toggleSeamlessLoop.bind(this), this.enterEditionMode = this.enterEditionMode.bind(this), this.leaveEditionMode = this.leaveEditionMode.bind(this), this.deleteAnimation = this.deleteAnimation.bind(this), a.prototype.constructor.apply(this, arguments)
        },
        initialize: function() {
          a.prototype.initialize.apply(this, arguments), this.model.on("change:isEnabled", this.onVisibilityChange.bind(this)), this.model.on("change:isLoop", this.onSeamlessLoopChange.bind(this)), this.model.on("change:name", this.onNameChange.bind(this))
        },
        render: function() {
          this.rendered || (this.$(".widget-wrapper").html(this.template(this.model.toJSON())), this.$el.attr("data-uid", this.model.get("uid")), this.onVisibilityChange(), this.rendered = !0)
        },
        selectAnimation: function(e) {
          e.preventDefault(), e.stopPropagation(), this.model.collection.trigger("selected", this.model.get("uid"))
        },
        deleteAnimation: function() {
          var e = new s({
            title: "Confirmation",
            text: "Deleting an animation is irreversible. Are you sure ?",
            buttons: {
              ok: !0,
              cancel: !0
            }
          }).open();
          e.then(function() {
            e.close(), this.model.collection._trashbin.push(this.model), this.model.collection.remove(this.model)
          }.bind(this), function() {
            e.close()
          }), this.closeContextualMenu()
        },
        updateName: function() {
          this.model.set("name", this.$(".name input").val())
        },
        onNameChange: function() {
          this.$(".name .display p").html(this.model.get("name"))
        },
        enterEditionMode: function() {
          var e = this.$(".name input");
          this.closeContextualMenu(), this.$(".name").addClass("edit-mode"), e.focus(), e.val(""), e.val(this.model.get("name"))
        },
        leaveEditionMode: function() {
          this.$(".name").removeClass("edit-mode")
        },
        handleNameKeys: function(e) {
          var t = this.$(".name input");
          13 === e.which && t.blur()
        },
        openContextualMenu: function() {
          this.$(".contextual-menu").addClass("open")
        },
        closeContextualMenu: function() {
          this.$(".contextual-menu").removeClass("open")
        },
        toggleContextualMenu: function(e) {
          var t = this.$(".contextual-menu");
          e.target === e.currentTarget && (t.hasClass("open") ? (this.closeContextualMenu(), i(document).off("click", this.globalCloseContextualMenu)) : (this.openContextualMenu(), i(document).on("click", this.globalCloseContextualMenu)))
        },
        globalCloseContextualMenu: function(e) {
          var t = this.$(".contextual-menu");
          t[0] !== e.target && 0 === t.find(e.target).length && (this.closeContextualMenu(), i(document).off("click", this.globalCloseContextualMenu))
        },
        onSeamlessLoopChange: function() {
          this.$(".contextual-menu .seamless").toggleClass("enabled", this.model.get("isLoop"))
        },
        toggleSeamlessLoop: function() {
          this.model.set("isLoop", !this.model.get("isLoop"))
        },
        onVisibilityChange: function() {
          this.$el.toggleClass("disabled", !this.model.get("isEnabled"))
        },
        toggleVisibility: function() {
          this.model.set("isEnabled", !this.model.get("isEnabled"))
        }
      })
    },
    1741: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1742);
      e.exports = o.extend({
        el: ['<div class="widget axis-widget">', '          <div class="widget-wrapper">', '              <ul class="options"></ul>', "          </div>", "      </div>"].join(""),
        initialize: function(e) {
          e = i.defaults(e || {}, {
            options: {
              x: "X",
              y: "Y",
              z: "Z"
            }
          }), o.prototype.initialize.call(this, e)
        }
      })
    },
    1742: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1743),
        s = n(1737);
      e.exports = s.extend({
        el: ['<div class="widget options-widget">', '          <div class="widget-wrapper">', '              <ul class="options"></ul>', "          </div>", "      </div>"].join(""),
        events: r.extend({}, s.prototype.events, {
          "click [data-value]": "selectEvent",
          "click .delete": "deleteEvent",
          keydown: "keydownEvent"
        }),
        constructor: function(e, t) {
          this.resetOptionEvent_ = this.resetOptionEvent.bind(this), this.addOptionEvent_ = this.addOptionEvent.bind(this), this.removeOptionEvent_ = this.removeOptionEvent.bind(this), this.changeOptionEvent_ = this.changeOptionEvent.bind(this), t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            image: null,
            options: {},
            rowClass: a,
            allowMultiple: !0,
            allowEmpty: !1
          }), Array.isArray(t.options) && (t.options = t.options.reduce(function(e, t) {
            return e[t] = t, e
          }.bind(this), {})), t.options instanceof i.Collection || (t.options = new i.Collection(Object.keys(t.options).map(function(e) {
            return {
              value: e,
              label: t.options[e]
            }
          }.bind(this)))), s.prototype.constructor.call(this, e, t), t.options.each(function(e) {
            this.addOption(e)
          }.bind(this)), t.allowMultiple === !0 && "undefined" == typeof this.get() && this.set([])
        },
        delegateEvents: function() {
          s.prototype.delegateEvents.apply(this, arguments), this.options.options.on("reset", this.resetOptionEvent_), this.options.options.on("add", this.addOptionEvent_), this.options.options.on("remove", this.removeOptionEvent_), this.options.options.on("change", this.changeOptionEvent_)
        },
        undelegateEvents: function() {
          s.prototype.undelegateEvents.apply(this, arguments), this.options.options.off("reset", this.resetOptionEvent_), this.options.options.off("add", this.addOptionEvent_), this.options.options.off("remove", this.removeOptionEvent_), this.options.options.off("change", this.changeOptionEvent_)
        },
        render: function() {
          var e = [].concat(this.get() || []);
          e = e.map(function(e) {
            return e.toString()
          }), this.$("[data-value]").each(function() {
            var t = o(this),
              n = t.attr("data-value");
            t.toggleClass("active", e.indexOf(n) !== -1)
          })
        },
        addOption: function(e, t) {
          void 0 === t && (t = !0);
          var n = o("<li/>").attr("class", "option").attr("data-cid", e.cid).attr("data-value", e.get("value")).attr("title", e.get("label")).appendTo(this.$(".options")),
            i = new this.options.rowClass(this, {
              model: e,
              options: this.options
            });
          n.append(i.$el), t && this.render()
        },
        removeOption: function(e) {
          this.$(".options .option").filter(function() {
            return o(this).attr("data-cid") === e.cid
          }).remove(), this.render()
        },
        changeOption: function(e) {
          var t = this.$(".options .option").filter(function() {
            return o(this).attr("data-cid") === e.cid
          });
          t.attr("data-value", e.get("value")).attr("title", e.get("label")), this.render()
        },
        resetOptions: function() {
          this.$(".options").empty(), this.options.options.forEach(function(e) {
            this.addOption(e, !1)
          }.bind(this)), this.render()
        },
        triggerOption: function(e) {
          var t = this.get(),
            n = Array.isArray(t);
          if (n) {
            var i = t.indexOf(e);
            if (i === -1) this.change(t.concat([e]));
            else if (this.options.allowEmpty || t.length >= 2) {
              var o = t.slice();
              o.splice(i, 1), this.change(o)
            }
          } else t !== e ? this.change(e) : this.options.allowEmpty && this.change(null)
        },
        addOptionEvent: function(e) {
          this.addOption(e)
        },
        removeOptionEvent: function(e) {
          this.removeOption(e)
        },
        changeOptionEvent: function(e) {
          this.changeOption(e)
        },
        resetOptionEvent: function() {
          this.resetOptions()
        },
        deleteEvent: function(e) {
          e.preventDefault(), e.stopPropagation();
          var t = o(e.currentTarget).closest(".option").attr("data-value");
          this.trigger("delete", t)
        },
        selectEvent: function(e) {
          e.preventDefault(), this.triggerOption(o(e.currentTarget).attr("data-value"))
        },
        keydownEvent: function(e) {
          switch (e.keyCode) {
            case 13:
              e.preventDefault();
              var t = this.$el.find(".option > a:focus");
              1 === t.length && (this.$el.find(".option").removeClass("active"), t.parent().addClass("active"))
          }
        }
      })
    },
    1743: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1737);
      e.exports = a.extend({
        el: ['<div class="option-row">', "  </div>"].join(""),
        initialize: function(e) {
          e = r.defaults(e || {}, {
            model: new i.Model,
            name: "value",
            image: e.image
          }, e), a.prototype.initialize.call(this, e)
        },
        render: function() {
          var e = o("<a/>").text(this.model.get("label"));
          this.$el.html(e), this.options.options.image && this.model.get(this.options.options.image) && o('<img crossorigin="anonymous" class="image">').attr("src", this.model.get(this.options.options.image)).prependTo(e), this.options.options.value && this.model.get(this.options.options.value) && this.$el.attr("data-value", this.model.get(this.options.options.value)), "function" == typeof this.options.options.select && this.$el.on("click", this.options.options.select.bind(this)), this.model.get("deletable") && (o('<i class="delete fa fa-trash-o"></i>').appendTo(e), "function" == typeof this.options.options["delete"] && e.find("i.delete").on("click", this.options.options["delete"].bind(this)))
        }
      })
    },
    1744: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1737);
      e.exports = r.extend({
        el: ['<div class="widget button-widget">', '          <button class="button">', "          </button>", "      </div>"].join(""),
        events: o.extend({}, r.prototype.events, {
          "click .button": "clickEvent"
        }),
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            model: new i.Model,
            event: "click",
            text: "",
            type: "btn-secondary"
          }, t), r.prototype.constructor.call(this, e, t), this.$el.find(".button").text(this.options.text), this.$el.find(".button").addClass(this.options.type)
        },
        clickEvent: function(e) {
          e.preventDefault(), this.options.event && this.options.model.trigger(this.options.event)
        }
      })
    },
    1745: function(e, t, n) {
      "use strict";
      var i = n(1746);
      e.exports = i.extend({
        el: ['<div class="widget checkbox-widget">', '          <a class="state"></a>', '          <a class="label"></a>', "      </div>"].join("")
      })
    },
    1746: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1737);
      e.exports = r.extend({
        el: ['<div class="widget toggleswitch-widget">', '          <a class="state"></a>', '          <a class="label"></a>', "      </div>"].join(""),
        events: o.extend({}, r.prototype.events, {
          "click .state": "toggleStateEvent",
          "click .label": "toggleStateEvent"
        }),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            name: "value",
            label: ""
          }), r.prototype.initialize.call(this, e), this.$(".label").text(this.options.label)
        },
        render: function() {
          this.$el.toggleClass("active", this.get())
        },
        toggleStateEvent: function(e) {
          e.preventDefault(), e.stopPropagation(), this.change(!this.model.get(this.options.name))
        }
      })
    },
    1747: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1737),
        a = n(1562),
        s = n(1748);
      e.exports = r.extend({
        el: ['<div class="widget color-widget">', '    <div class="widget-wrapper">', '        <div class="box">', '            <div class="picker-wrapper">', '                <div class="picker-padder"></div>', '                <div class="picker"><div class="cursor"></div></div>', "            </div>", '            <div class="slider-wrapper">', '                <div class="slider"><div class="cursor"></div></div>', "            </div>", "        </div>", '        <input class="value" size="8" />', "    </div>", "</div>"].join(""),
        events: o.extend({}, r.prototype.events, {
          "change .value:input": "changeEvent"
        }),
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            model: new i.Model,
            name: "value"
          }), r.prototype.constructor.call(this, e, t), void 0 === this.get() && this.set({
            r: 1,
            g: 1,
            b: 1
          })
        },
        changeEvent: function() {
          this.colorPicker.set(this.$(".value").val())
        },
        render: function() {
          var e = this.get();
          void 0 === e && (this.set({
            r: 1,
            g: 1,
            b: 1
          }), e = this.get()), this.colorPicker || (this.colorPicker = s({
            slider: this.$(".slider")[0],
            picker: this.$(".picker")[0],
            sliderCursor: this.$(".slider > .cursor")[0],
            pickerCursor: this.$(".picker > .cursor")[0]
          }, function(e, t) {
            this.change(t)
          }.bind(this))), this.colorPicker.set(e);
          var t = a.rgbToHex(e);
          this.$(".value").val(t)
        }
      })
    },
    1748: function(e, t, n) {
      "use strict";
      var i = n(1749);
      e.exports = function() {
        var e = i.apply(i, arguments),
          t = e.set;
        return e.set = function(e) {
          if ("string" != typeof e) return void t.call(this, e);
          var n = 0;
          "#" === e[0] && (e = e.slice(1));
          var i = e;
          if (e.length > 6) i = e.slice(0, 6);
          else if (e.length < 6)
            for (i = "", n = 0; n < 3; ++n) i += e[n] ? e[n] + e[n] : "00";
          var o = [0, 0, 0];
          for (n = 0; n < 3; ++n) {
            var r = parseInt(i[2 * n] + i[2 * n + 1], 16);
            o[n] = (r !== r ? 0 : r) / 255
          }
          e = {
            r: o[0],
            g: o[1],
            b: o[2]
          }, t.call(this, e)
        }, e
      }
    },
    1749: function(e, t) {
      var n = function() {
        var e = "http://www.w3.org/2000/svg",
          t = function(t, n, i) {
            var o = document.createElementNS(e, t);
            return Object.keys(n).forEach(function(e) {
              o.setAttribute(e, n[e])
            }), (i || []).forEach(function(e) {
              o.appendChild(e)
            }), o
          },
          n = function(e, t, n) {
            var o = function(o) {
                var r = e.getBoundingClientRect(),
                  a = i(o.clientX - r.left, 0, r.width),
                  s = i(o.clientY - r.top, 0, r.height);
                t.style.left = a + "px", t.style.top = s + "px";
                var l = a / r.width,
                  c = s / r.height;
                n(l, c)
              },
              r = !1;
            e.addEventListener("mousedown", function(e) {
              r = !0, o(e)
            }), t.addEventListener("mousedown", function(e) {
              r = !0, o(e)
            }), document.addEventListener("blur", function() {
              r = !1
            }), document.addEventListener("mouseup", function() {
              r = !1
            }), document.addEventListener("mousemove", function(e) {
              r && o(e)
            })
          },
          i = function(e, t, n) {
            return e = Math.max(t, e), e = Math.min(e, n)
          },
          o = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          r = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
          a = /hsv\(\s*(\d{1,3})°\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,
          s = function(e) {
            var t;
            if (t = o.exec(e)) return p(e);
            if (t = r.exec(e)) return {
              r: parseInt(t[1], 10) / 255,
              g: parseInt(t[2], 10) / 255,
              b: parseInt(t[3], 10) / 255
            };
            if (t = a.exec(e)) return {
              h: parseInt(t[1], 10) / 360,
              s: parseInt(t[2], 10) / 100,
              v: parseInt(t[3], 10) / 100
            };
            throw new Error("Invalid color format")
          },
          l = function(e) {
            return {
              r: parseInt(e.substr(1, 2), 16) / 255,
              g: parseInt(e.substr(3, 2), 16) / 255,
              b: parseInt(e.substr(5, 2), 16) / 255
            }
          },
          c = function(e) {
            var t = function(e) {
              return ("00" + Math.round(255 * e).toString(16)).substr(-2)
            };
            return "#" + [t(e.r), t(e.g), t(e.b)].join("")
          },
          u = function(e) {
            return {
              h: e.h,
              s: e.s,
              v: e.v
            }
          },
          d = function(e) {
            var t, n, i = e.r,
              o = e.g,
              r = e.b,
              a = Math.max(i, o, r),
              s = Math.min(i, o, r),
              l = a,
              c = a - s;
            if (n = 0 === a ? 0 : c / a, a === s) t = 0;
            else {
              switch (a) {
                case i:
                  t = (o - r) / c + (o < r ? 6 : 0);
                  break;
                case o:
                  t = (r - i) / c + 2;
                  break;
                case r:
                  t = (i - o) / c + 4
              }
              t /= 6
            }
            return {
              h: t,
              s: n,
              v: l
            }
          },
          h = function(e) {
            var t, n, i, o = e.h,
              r = e.s,
              a = e.v,
              s = Math.floor(6 * o),
              l = 6 * o - s,
              c = a * (1 - r),
              u = a * (1 - l * r),
              d = a * (1 - (1 - l) * r);
            switch (s % 6) {
              case 0:
                t = a, n = d, i = c;
                break;
              case 1:
                t = u, n = a, i = c;
                break;
              case 2:
                t = c, n = a, i = d;
                break;
              case 3:
                t = c, n = u, i = a;
                break;
              case 4:
                t = d, n = c, i = a;
                break;
              case 5:
                t = a, n = c, i = u
            }
            return {
              r: t,
              g: n,
              b: i
            }
          },
          p = function(e) {
            return d(l(e))
          },
          g = function(e) {
            return c(h(e))
          },
          f = function(e) {
            return t("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: "100%",
              height: "100%"
            }, [t("defs", {}, [t("linearGradient", {
              id: "svgcolorpicker-gradient-hue-" + e,
              x1: "0%",
              y1: "100%",
              x2: "0%",
              y2: "0%"
            }, [
              ["0%", "#FF0000"],
              ["17%", "#FFFF00"],
              ["33%", "#00FF00"],
              ["50%", "#00FFFF"],
              ["67%", "#0000FF"],
              ["83%", "#FF00FF"],
              ["100%", "#FF0000"]
            ].map(function(e) {
              return t("stop", {
                offset: e[0],
                "stop-color": e[1],
                "stop-opacity": "1"
              })
            }))]), t("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: "url(#svgcolorpicker-gradient-hue-" + e + ")"
            })])
          },
          m = function(e) {
            return t("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: "100%",
              height: "100%"
            }, [t("defs", {}, [t("linearGradient", {
              id: "svgcolorpicker-gradient-black-" + e,
              x1: "0%",
              y1: "100%",
              x2: "0%",
              y2: "0%"
            }, [t("stop", {
              offset: "0%",
              "stop-color": "#000000",
              "stop-opacity": "1"
            }), t("stop", {
              offset: "100%",
              "stop-color": "#000000",
              "stop-opacity": "0"
            })]), t("linearGradient", {
              id: "svgcolorpicker-gradient-white-" + e,
              x1: "0%",
              y1: "100%",
              x2: "100%",
              y2: "100%"
            }, [t("stop", {
              offset: "0%",
              "stop-color": "#FFFFFF",
              "stop-opacity": "1"
            }), t("stop", {
              offset: "100%",
              "stop-color": "#FFFFFF",
              "stop-opacity": "0"
            })])]), t("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: "url(#svgcolorpicker-gradient-white-" + e + ")"
            }), t("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: "url(#svgcolorpicker-gradient-black-" + e + ")"
            })])
          },
          v = 0;
        return function(e, t) {
          var o = v++,
            r = {
              h: 1,
              s: 1,
              v: 1
            },
            a = f(o),
            l = m(o),
            p = function() {
              e.sliderCursor.style.left = 0, e.sliderCursor.style.top = 100 * (1 - r.h) + "%", e.pickerCursor.style.left = 100 * r.s + "%", e.pickerCursor.style.top = 100 * (1 - r.v) + "%"
            },
            b = function() {
              var e = u(r),
                n = h(e),
                i = c(n);
              l.style.backgroundColor = g({
                h: r.h,
                s: 1,
                v: 1
              }), t(e, n, i)
            };
          return n(a, e.sliderCursor, function(e, t) {
            r.h = 1 - t, b()
          }), n(l, e.pickerCursor, function(e, t) {
            r.s = e, r.v = 1 - t, b()
          }), e.slider.appendChild(a), e.picker.appendChild(l), b(), {
            set: function(e) {
              "string" == typeof e && (e = s(e));
              var t = function(e, t) {
                var n = Object.keys(e);
                return t.every(function(e) {
                  return n.indexOf(e) !== -1
                })
              };
              if (t(e, ["r", "g", "b"])) r = d({
                r: i(e.r, 0, 1),
                g: i(e.g, 0, 1),
                b: i(e.b, 0, 1)
              });
              else {
                if (!t(e, ["h", "s", "v"])) throw new Error("Invalid color format");
                r.h = i(e.h, 0, 1), r.s = i(e.s, 0, 1), r.v = i(e.v, 0, 1)
              }
              p(), b()
            },
            update: function() {
              p()
            }
          }
        }
      }();
      e.exports = n
    },
    1750: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1751),
        s = n(1737),
        l = function(e) {
          return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement
        },
        c = {
          standard: function(e, t, n, i) {
            l(n) ? (t.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), t.fillStyle = "rgba(0, 0, 0, " + (1 - i) + ")", t.fillRect(0, 0, e.width, e.height)) : (t.fillStyle = "rgb(" + [n.r, n.g, n.b].map(function(e) {
              return Math.round(255 * e * i)
            }).join(",") + ")", t.fillRect(0, 0, e.width, e.height))
          },
          glossiness: function(e, t, n, i) {
            if (n instanceof Image) return c.standard(e, t, n, i);
            var o = 1 - i,
              r = .4 + .5 * i,
              a = Math.min(e.width, e.height) / 2 * o;
            t.fillStyle = "#000000", t.fillRect(0, 0, e.width, e.height), t.beginPath(), t.arc(e.width / 2, e.height / 2, a, 0, 2 * Math.PI, !0), t.fillStyle = "rgb(" + [n.r, n.g, n.b].map(function(e) {
              return Math.round(255 * e * r)
            }).join(",") + ")", t.fill()
          },
          transparency: function(e, t, n, i) {
            var r = 5 * e.width / o(e).width(),
              a = 5 * e.height / o(e).height(),
              s = Math.ceil(e.width / r),
              c = Math.ceil(e.height / a);
            t.fillStyle = "#FFFFFF", t.fillRect(0, 0, e.width, e.height), t.fillStyle = "#D0D0D0";
            for (var u = 0; u < c; ++u)
              for (var d = 0; d < s; ++d)(d + u) % 2 === 0 && t.fillRect(d * r, u * a, r, a);
            l(n) ? (t.globalAlpha = 1 - i, t.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), t.globalAlpha = 1) : (t.fillStyle = "rgba(255, 255, 255, " + (1 - i) + ")", t.fillRect(0, 0, e.width, e.height))
          }
        };
      e.exports = s.extend({
        el: ['<div class="widget image-widget factored-image-widget">', '    <div class="widget-wrapper">', '        <a class="display toggle">', '            <canvas class="false-preview"></canvas>', "        </a>", "    </div>", '    <div class="selectbox">', "    </div>", "</div>"].join(""),
        constructor: function(e, t) {
          t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            maxWidth: 1 / 0,
            maxHeight: 1 / 0,
            painter: "standard",
            convert: function(e) {
              return e / 100
            }
          }), s.prototype.constructor.call(this, e, t)
        },
        initialize: function() {
          this.canvas = this.$(".false-preview")[0] || document.createElement("canvas"), this.context = this.canvas.getContext("2d"), "string" == typeof this.options.painter && (this.options.painter = c[this.options.painter]), this.internalCanvas = document.createElement("canvas"), this.internalContext = this.internalCanvas.getContext("2d"), this.image = a.reify(this, r.defaults({}, this.options.imageOptions, {
            el: this.$el,
            model: this.model,
            name: this.field("original")
          })), void 0 === this.get("factor") && this.set("factor", 1), void 0 === this.get() && this.set({
            r: 1,
            g: 1,
            b: 1
          }), s.prototype.initialize.apply(this, arguments)
        },
        render: function() {
          s.prototype.render.apply(this, arguments);
          var e = this.get("original"),
            t = this.get("factor");
          this.canvas.width = o(this.canvas).width() || 24, this.canvas.height = o(this.canvas).height() || 24, this.options.painter(this.canvas, this.context, e, t / 100)
        }
      })
    },
    1751: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(215),
        s = n(286),
        l = n(266),
        c = n(1752),
        u = n(1754),
        d = n(1735),
        h = n(1737),
        p = n(238),
        g = function(e) {
          return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement
        };
      e.exports = h.extend(r.extend({}, s, {
        el: ['<div class="widget image-widget">', '    <div class="widget-wrapper">', '        <a class="display toggle">', '            <canvas class="preview"></canvas>', "        </a>", "    </div>", '    <div class="selectbox">', "    </div>", "</div>"].join(""),
        events: r.extend({}, h.prototype.events, {
          "click .toggle": "toggleEvent",
          "click .open": "openEvent"
        }),
        constructor: function(e, t) {
          this.globalCloseEvent_ = this.globalCloseEvent.bind(this), this.textureFileTypes = a.textureFileTypes, t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            allowColor: !0,
            allowTexture: !0,
            textureFormatOptions: null,
            textureFilteringOptions: null,
            collection: new i.Collection
          }), h.prototype.constructor.call(this, e, t);
          var n, o;
          if (this.options.allowColor && this.options.allowTexture) {
            var s = u.reify(this);
            this.$(".selectbox").append(s.$el), o = s.createPanel("Texture"), n = s.createPanel("Color")
          } else this.options.allowColor && (n = d.reify(this), this.$(".selectbox").append(n.$el)), this.options.allowTexture && (o = d.reify(this), this.$(".selectbox").append(o.$el));
          this.options.allowColor && this.createColorWidgets(n), this.options.allowTexture && this.createTextureWidgets(o)
        },
        initialize: function() {
          this.initializeDragAndDrop({
            target: window,
            dropbox: function() {
              var e = this.$el.parent().find(".dropbox");
              return e.length ? e : o('<div class="dropbox"></div>').insertAfter(this.$el)
            }
          }), this.canvas = this.$(".preview")[0] || document.createElement("canvas"), this.context = this.canvas.getContext("2d"), void 0 === this.get() && this.set({
            r: 1,
            g: 1,
            b: 1
          }), h.prototype.initialize.apply(this, arguments)
        },
        createColorWidgets: function(e) {
          this.colorWidget = e.createWidget("Color");
          var t = this.get();
          g(t) || this.colorWidget.set(t), this.colorWidget.on("change", this.applyColorEvent, this)
        },
        createTextureWidgets: function(e) {
          var t = new p,
            n = function() {
              var e = this.options.collection.length > 0;
              t.set({
                hasTextures: e,
                hasNoTextures: !e
              })
            }.bind(this);
          n(), t.listenTo(this.options.collection, "add remove", n), this.createTextureWidgetsEmptyState(e, t), this.createTextureWidgetsRegularState(e, t)
        },
        _createTextureWidgetsState: function(e, t, n, i) {
          var o = e.createWidget("Hyde", {
              model: t,
              name: n
            }),
            r = o.createWidget("Button", {
              text: i
            });
          return r.model.on("click", this.openTexturesPopup.bind(this)), o
        },
        createTextureWidgetsEmptyState: function(e, t) {
          this._createTextureWidgetsState(e, t, "hasNoTextures", "Import textures")
        },
        createTextureWidgetsRegularState: function(e, t) {
          var n = this._createTextureWidgetsState(e, t, "hasTextures", "Manage textures");
          this.textureWidget = n.createWidget("Select", {
            placeholder: "Choose texture",
            options: this.options.collection,
            image: "image"
          }), this.textureWidget.model.on("change", this.applyTextureEvent, this), this.model.on("change", this.updateTextureEvent, this), this.options.collection.on("add", this.updateTextureEvent, this), this.updateTextureEvent();
          var i = e.createWidget("Hyde", {
            model: this.textureWidget.model,
            name: "value"
          });
          this.createTextureSettingFiltering(i), this.createTextureSettingFormat(i), this.createTextureSettingWrapS(i), this.createTextureSettingWrapT(i)
        },
        createTextureSettingFiltering: function(e) {
          var t = this.options.textureFilteringOptions || {
            NEAREST: "Nearest",
            LINEAR: "Bilinear",
            LINEAR_MIPMAP_LINEAR: "Trilinear"
          };
          if (0 !== Object.keys(t).length) {
            var n = e.createWidget("Horizontal");
            n.createWidget("Label", {
              content: "Filtering:",
              classname: "setting"
            }), n.createWidget("Select", {
              model: this.model,
              name: this.field("minFilter"),
              options: t
            })
          }
        },
        createTextureSettingFormat: function(e) {
          var t = this.options.textureFormatOptions || {
            RGB: "RGB",
            ALPHA: "Alpha",
            LUMINANCE: "Luminance"
          };
          if (0 !== Object.keys(t).length) {
            var n = e.createWidget("Horizontal");
            n.createWidget("Label", {
              content: "Format:",
              classname: "setting"
            }), n.createWidget("Select", {
              model: this.model,
              name: this.field("internalFormat"),
              options: t
            })
          }
        },
        createTextureSettingWrapS: function(e) {
          this._createTextureSettingWrap(e, "wrapS", "Wrap S:")
        },
        createTextureSettingWrapT: function(e) {
          this._createTextureSettingWrap(e, "wrapT", "Wrap T:")
        },
        _createTextureSettingWrap: function(e, t, n) {
          var i = e.createWidget("Horizontal");
          i.createWidget("Label", {
            content: n,
            classname: "setting"
          }), i.createWidget("Select", {
            model: this.model,
            name: this.field(t),
            options: {
              REPEAT: "Repeat",
              MIRRORED_REPEAT: "Mirror",
              CLAMP_TO_EDGE: "Clamp"
            }
          })
        },
        openTexturesPopup: function() {
          var e = new c(this, {
            model: this.textureWidget.options.model,
            name: this.textureWidget.options.name,
            materials: this.model.get("materials"),
            isPBR: this.model.get("isPBR"),
            collection: this.options.collection
          });
          e.on("uploadRequest", function(e) {
            this.model.trigger("uploadSelectEvent", e)
          }.bind(this))
        },
        onDragEnter: function(e) {
          if (!this.isNotDraggingFile(e)) {
            e.preventDefault();
            var t = this.getDragAndDropDropbox();
            o(".texture-popup").is(":visible") ? t.removeClass("file-upload-drag") : t.addClass("file-upload-drag")
          }
        },
        onDragOver: function(e) {
          if (!this.isNotDraggingFile(e)) {
            var t = this.getDragAndDropDropbox();
            if (o(".texture-popup").is(":visible")) return t.removeClass("file-upload-drag");
            e.preventDefault();
            var n = o(e.target);
            n.hasClass("dropbox") ? n[0] === t[0] ? t.addClass("file-upload-drag accepting") : t.removeClass("file-upload-drag accepting") : t.addClass("file-upload-drag")
          }
        },
        onDragEnd: function(e) {
          e.preventDefault();
          var t = this.getDragAndDropDropbox(),
            n = o(e.target);
          n.hasClass("dropbox") && t.removeClass("file-upload-drag accepting")
        },
        onDrop: function(e) {
          e.preventDefault(), e = e.originalEvent ? e.originalEvent : e;
          var t = this.getDragAndDropDropbox(),
            n = e.dataTransfer.files[0];
          if (t.removeClass("file-upload-drag accepting"), n && e.target === t[0]) {
            var i = n.name.replace(/^.*\.([^.]*)$/, "$1").toLowerCase();
            if (this.textureFileTypes.indexOf(i) > -1) {
              this.model.trigger("uploadSelectEvent", n);
              var o = function(e) {
                  e.get("value") && this.collection.off("add", o), this.collection.off("duplicate", r), this.options.allowTexture && this.textureWidget ? this.textureWidget.set(e.get("value")) : this.set(e)
                }.bind(this),
                r = function(e) {
                  this.collection.off("add", o), this.collection.off("duplicate", r), this.options.allowTexture && this.textureWidget ? this.textureWidget.set(e.get("uid")) : this.set(e)
                }.bind(this);
              this.collection.on("add", o), this.collection.on("duplicate", r)
            } else {
              var a = this.textureFileTypes.concat([]),
                s = a.pop(),
                c = "." + a.join(", .") + " or ." + s,
                u = new l({
                  title: "Invalid image file",
                  text: "Invalid image type. Please upload a " + c + ".",
                  buttons: {
                    ok: !0
                  }
                });
              u.open().then(function() {
                u.close()
              })
            }
          }
        },
        delegateEvents: function() {
          h.prototype.delegateEvents.apply(this, arguments), o(document).on("mousedown", this.globalCloseEvent_), this.delegateDragAndDrop()
        },
        undelegateEvents: function() {
          h.prototype.undelegateEvents.apply(this, arguments), o(document).off("mousedown", this.globalCloseEvent_), this.undelegateDragAndDrop()
        },
        render: function() {
          h.prototype.render.apply(this, arguments), this.options.dragAndDrop && this.setDragAndDropElements();
          var e = this.get();
          g(e) ? (this.canvas.width = e.width, this.canvas.height = e.height, this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.drawImage(e, 0, 0)) : (this.canvas.width = this.canvas.height = 1, this.context.fillStyle = "rgb(" + Math.round(255 * e.r) + "," + Math.round(255 * e.g) + "," + Math.round(255 * e.b) + ")", this.context.fillRect(0, 0, 1, 1), this.colorWidget && this.colorWidget.set(e))
        },
        toggleEvent: function(e) {
          this.$el.hasClass("opened") ? this.closeEvent(e) : this.openEvent(e)
        },
        openEvent: function(e) {
          e.preventDefault(), e.stopPropagation(), this.$el.addClass("opened")
        },
        closeEvent: function() {
          this.$el.removeClass("opened")
        },
        globalCloseEvent: function(e) {
          o.contains(this.el, e.target) || this.closeEvent(e)
        },
        applyColorEvent: function() {
          this.change(this.colorWidget.get())
        },
        applyTextureEvent: function() {
          var e = this.textureWidget.get(),
            t = this.options.collection.findWhere({
              value: e
            });
          if (t) {
            var n = t.get("imageData"),
              i = this.flag = {},
              o = function() {
                i === this.flag && (n.imageModel ? this.change(n) : this.change({
                  r: 1,
                  g: 1,
                  b: 1
                }))
              }.bind(this);
            n.complete ? o() : (console.error("Possible asynchronous problem image set."), n.addEventListener("load", o))
          }
        },
        updateTextureEvent: function() {
          var e = this.get();
          if (e instanceof Image) {
            var t = this.options.collection.find(function(t) {
              return t.get("image") === e.src || t.get("imageData").src === e.src
            });
            this.textureWidget.set(t ? t.get("value") : null)
          } else this.textureWidget.set(null)
        }
      }))
    },
    1752: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(235),
        a = n(286),
        s = n(1753),
        l = n(266),
        c = "";
      e.exports = s.extend(o.extend({}, a, {
        events: o.extend({}, s.prototype.events, {
          "click .texture .image": "selectTextureEvent",
          "click .texture .reupload": "reuploadTextureEvent",
          "click .texture .delete": "deleteTextureEvent",
          "change .upload-input": "uploadTextureEvent",
          "change .colorspace": "onColorspaceChange",
          'keyup [name="filter"]': "filterTexture",
          'change [name="filter"]': "filterTexture",
          "submit .filter": "selectOnlyTexture",
          "click .clear": "clearFilter"
        }),
        className: "texture-popup",
        header: function() {
          return o.template(['<div class="popup-name">', "    Textures", "</div>", '<div class="popup-actions">', '    <a class="popup-action-close"></a>', "</div>"].join("\n"), {
            imports: {}
          })()
        },
        content: function() {
          return o.template(['<div class="toolbar">', '    <div class="import">', '        <input id="upload-texture" class="upload-input cloaked" type="file" accept="image/png, image/jpeg, .tga" multiple >', '        <label class="button btn-primary popup-button upload" for="upload-texture">Import texture</label>', "    </div>", '    <div class="center">', '       <span class="loader">Loading textures...</span>', "    </div>", '    <form class="filter">', '       <input type="search" name="filter" placeholder="Search in textures" autofocus>', '       <button class="clear" type="button"><i class="fa fa-times"></i></button>', "    </form>", "</div>", '<div class="textures">', "    <%= textures %>", "</div>"].join("\n"))({
            textures: o.result(this, "textures")
          })
        },
        clearFilter: function() {
          this.$('.filter [name="filter"]').val(""), this._filterTexture(), this.$('.filter [name="filter"]').focus()
        },
        filterTexture: function() {
          this.debouncedFilterTexture || (this.debouncedFilterTexture = o.debounce(this._filterTexture, 200)), this.debouncedFilterTexture()
        },
        _filterTexture: function() {
          var e = this.$('.filter [name="filter"]').val();
          if (c = e, "" !== e) {
            var t = this.options.collection.filter(function(t) {
              var n = new RegExp(e, "i");
              return t.get("label").match(n)
            });
            this.$(".textures").html(this.textures(t))
          } else this.renderContent()
        },
        selectOnlyTexture: function() {
          var e = this.$(".textures > .texture");
          if (1 === e.length) {
            var t = e.first().attr("data-value");
            this.options.model.set(this.options.name, t), this.close()
          }
        },
        textures: function(e) {
          return o.template(["<% textures.forEach( function ( texture ) { %>", '    <div class="texture" data-value="<%- texture.get( \'value\' ) %>">', '        <div class="image">', "            <div style=\"background-image: url(<%- texture.get( 'image' ) %>)\"></div>", "        </div>", "        <div class=\"name\"><%- texture.get( 'label' ) %></div>", "        <% if ( texture.get( 'value' ) !== \"\" ) { %>", '        <div class="actions">', '           <div class="texture-colorspace">', '               <div class="texture-colorspace-options">', '               <label title="Automatic colorspace"><input type="radio" class="colorspace" data-uid="<%- texture.get( \'value\' ) %>" name="colorSpace-<%- texture.get( \'value\' ) %>" value="unknown" <% if (texture.get( \'colorSpace\' ) === "unknown"){ %>checked<% } %>><span class="label">Auto</span></label>', '               <label title="Linear colorspace"><input type="radio" class="colorspace" data-uid="<%- texture.get( \'value\' ) %>" name="colorSpace-<%- texture.get( \'value\' ) %>" value="linear" <% if (texture.get( \'colorSpace\' ) === "linear"){ %>checked<% } %>><span class="label">Linear</span></label>', '               <label title="sRGB colorspace"><input type="radio" class="colorspace" data-uid="<%- texture.get( \'value\' ) %>" name="colorSpace-<%- texture.get( \'value\' ) %>" value="srgb" <% if (texture.get( \'colorSpace\' ) === "srgb"){ %>checked<% } %>><span class="label">sRGB</span></label>', "               </div>", "           </div>", '           <a class="delete" alt="delete" href="#"></a>', "        </div>", "        <% } %>", "    </div>", "<% } ); %>"].join("\n"))({
            textures: e || this.options.collection
          })
        },
        constructor: function(e, t) {
          if (s.prototype.constructor.call(this, e, t), this.listenTo(this.options.collection, "remove reset change", function() {
              window.requestAnimationFrame(function() {
                this.renderContent()
              }.bind(this))
            }.bind(this)), this.listenTo(this.options.collection, "add", function() {
              this.clearFilter(), this.renderContent(), this.scrollToBottom(), this.pendingTextures--, this.checkLoader()
            }.bind(this)), this.listenTo(this.options.collection, "duplicate", function() {
              this.clearFilter(), this.renderContent(), this.pendingTextures--, this.checkLoader()
            }.bind(this)), "" !== c && (this.$('.filter [name="filter"]').val(c), this._filterTexture()), 0 === this.options.collection.length) {
            var n = this.$(".upload-input");
            setTimeout(n.trigger.bind(n, "click"))
          }
          this.pendingTextures = 0, this.initializeDragAndDrop({
            dropbox: ".texture-popup"
          })
        },
        delegateEvents: function() {
          s.prototype.delegateEvents.apply(this, arguments), this.delegateDragAndDrop()
        },
        undelegateEvents: function() {
          s.prototype.undelegateEvents.apply(this, arguments), this.undelegateDragAndDrop()
        },
        onDrop: function(e) {
          var t = this.getDragAndDropDropbox();
          e.preventDefault(), e = e.originalEvent ? e.originalEvent : e, t.removeClass("file-upload-drag accepting");
          var n = e.dataTransfer.files,
            o = i(e.target);
          o.hasClass(this.className) && n && n.length && this.uploadTextureEvent({
            target: {
              files: n
            }
          })
        },
        startLoader: function() {
          this.$(".loader").show()
        },
        checkLoader: function() {
          0 === this.pendingTextures && this.endLoader()
        },
        endLoader: function() {
          this.$(".loader").hide()
        },
        renderContent: function() {
          this.$(".textures").html(o.result(this, "textures"))
        },
        scrollToBottom: function() {
          var e = this.$(".textures");
          e.scrollTop(e.prop("scrollHeight"))
        },
        uploadTextureEvent: function(e) {
          for (var t = e.target.files.length, n = 0, i = 0; i < t; i++) {
            var o = e.target.files[i],
              r = o.name.toLowerCase();
            r.endsWith("jpg") || r.endsWith("jpeg") || r.endsWith("png") || r.endsWith("tga") ? (this.pendingTextures++, this.startLoader(), this.trigger("uploadRequest", o)) : n++
          }
          if (e.target.value = null, 0 !== n) {
            var a = n === t ? "Invalid image type." : "Some files could not be upload.",
              s = new l({
                title: "Invalid image file",
                text: a + " Please upload a jpg, a png or a tga.",
                buttons: {
                  ok: !0
                }
              });
            s.open().then(function() {
              s.close()
            })
          }
        },
        selectTextureEvent: function(e) {
          this.options.model.set(this.options.name, i(e.currentTarget).parents(".texture").attr("data-value")), this.close()
        },
        reuploadTextureEvent: function() {},
        findTextureReferences: function(e) {
          return new r(function(t) {
            var n = [];
            o.each(this.options.materials.attributes, function(t) {
              o.each(t.getChannels(), function(i) {
                var o = i.get("texture");
                o && o.get("image").get("uid") === e && n.push({
                  channel: i,
                  material: t
                })
              })
            }.bind(this)), t(n)
          }.bind(this))
        },
        removeTextureReferences: function(e) {
          return new r(function(t) {
            e.forEach(function(e) {
              e.channel.setColor([1, 1, 1])
            }), t(e)
          })
        },
        confirmTextureDeletion: function(e) {
          return new r(function(t, n) {
            var i = o.filter(e, function(e) {
              return e.channel.shouldDisplayGUIWarningOnDeletion()
            });
            if (i.length) {
              var r = o.map(i, function(e) {
                  return {
                    materialName: e.material.get("name") || "Unnamed material",
                    channelName: e.channel.get("displayName") || "Unnamed channel"
                  }
                }.bind(this)),
                a = o.uniq(o.map(r, "materialName")),
                s = "<p>This texture is still used in the following materials:</p><ul>";
              a.forEach(function(e) {
                s += "<li><b>" + e + "</b>",
                  s += "<ul>";
                var t = o.map(o.filter(r, {
                  materialName: e
                }), "channelName");
                t.forEach(function(e) {
                  s += "<li>" + e + "</li>"
                }), s += "</ul>"
              }), s += "</ul><p>Texture will be permanently deleted after saving.</p>";
              var c = l.extend({
                  events: {
                    "reset form": "cancel",
                    "submit form": "continue"
                  }
                }),
                u = new c({
                  title: "Delete texture?",
                  text: s,
                  safe: !0,
                  popupClass: "texture-deletion",
                  buttons: {
                    ok: !0,
                    okLabel: "Delete",
                    cancel: !0
                  }
                });
              u.open().then(function() {
                u.close(), t(e)
              }, function() {
                u.close(), n(e)
              })
            } else t(e)
          }.bind(this))
        },
        deleteTextureEvent: function(e) {
          e.preventDefault();
          var t = i(e.target),
            n = t.closest(".texture").data("value"),
            o = this.options.collection.findWhere({
              value: n
            });
          return this.findTextureReferences(n).then(this.confirmTextureDeletion.bind(this)).then(this.removeTextureReferences).then(function() {
            o.destroy(), n.indexOf("tmp_") === -1 && (this.options.materials._deletedTextures = this.options.materials._deletedTextures || [], this.options.materials._deletedTextures.push(n))
          }.bind(this))["catch"](function(e) {
            console.log("Process was interrupted along the way !", e)
          }), !1
        },
        onColorspaceChange: function(e) {
          var t = i(e.target),
            n = t.attr("data-uid"),
            o = t.val();
          if ("" !== n) {
            var r = this.options.collection.findWhere({
              value: n
            });
            r && r.set("colorSpace", o)
          }
        }
      }))
    },
    1753: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = r.template(['<div class="popup-wrapper">', '    <div class="popup texture-popup">', '        <div class="popup-header">', "            <%= header %>", "        </div>", '        <div class="popup-content">', "            <%= content %>", "        </div>", '        <div class="popup-footer">', "            <%= footer %>", "        </div>", "    </div>", "</div>"].join("\n"));
      e.exports = i.View.extend({
        events: r.extend({}, i.View.prototype.events, {
          "click .popup-action-close": "close",
          click: "closeIfOverlay"
        }),
        el: function() {
          return a({
            header: r.result(this, "header"),
            content: r.result(this, "content"),
            footer: r.result(this, "footer")
          })
        },
        constructor: function(e, t) {
          this.parent = e, this.options = r.extend({}, t), this.environment = r.extend({}, e ? e.environment : {}, this.options.environment), o(document).on("keydown", function(e) {
            27 === e.keyCode && 0 !== this.environment.popupStack.length && this.environment.popupStack[0].close()
          }.bind(this)), i.View.call(this, t), this.render()
        },
        render: function() {
          for (this.setElement(r.result(this, "el")); this.environment.popupStack.length > 0 && this.environment.popupStack[0] !== this.parent;) {
            var e = this.environment.popupStack.shift();
            e.close()
          }
          this.environment.popupStack.unshift(this), this.$el.appendTo(this.environment.popupContainer)
        },
        close: function() {
          this.$el.remove()
        },
        closeIfOverlay: function(e) {
          this.$(".popup").has(e.target).length || this.close()
        }
      })
    },
    1754: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1735),
        s = n(1737);
      e.exports = s.extend({
        el: ['<div class="widget tabbed-widget">', '          <div class="widget-wrapper">', '              <ul class="tabs"></ul>', '              <div class="panels"></div>', "          </div>", "      </div>"].join(""),
        events: r.extend({}, s.prototype.events, {
          "click [data-tab]": "selectEvent",
          "touchstart [data-tab]": "selectEvent"
        }),
        constructor: function(e, t) {
          t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value"
          }), s.prototype.constructor.call(this, e, t), "undefined" == typeof this.get() && this.set(null), this._index = 0, this._panels = []
        },
        createPanel: function(e, t) {
          "undefined" == typeof t && (t = {});
          var n = t.name || "panel" + ++this._index;
          if (this._panels.indexOf(n) !== -1) throw new Error("Duplicate panel name");
          this._panels.push(n);
          var i = o('<li class="tab"/>').attr("data-tab", n).append(o("<a/>").text(e)).appendTo(this.$(".tabs")),
            r = o('<div class="panel"/>').attr("data-panel", n).appendTo(this.$(".panels")),
            s = a.reify(this, t);
          return s.$el.appendTo(r), s.removePanel = function() {
            i.remove(), r.remove();
            var e = this._panels.indexOf(n);
            this._panels.splice(e, 1), this.get() === n && (e === this._panels.length && (this._panels.length > 0 ? e -= 1 : e = null), null !== e ? this.set(this._panels[e]) : this.set(null))
          }.bind(this), null === this.get() ? this.set(n) : this.render(), s
        },
        render: function() {
          var e = this.get();
          this.$("[data-tab]").each(function() {
            o(this).toggleClass("active", o(this).attr("data-tab") === e)
          }), this.$("[data-panel]").each(function() {
            o(this).toggleClass("active", o(this).attr("data-panel") === e)
          })
        },
        selectEvent: function(e) {
          e.preventDefault(), this.change(o(e.currentTarget).attr("data-tab"))
        }
      })
    },
    1755: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1744),
        a = n(286);
      e.exports = r.extend(o.extend({}, a, {
        el: ['<div class="widget upload-button-widget">', '          <input type="file" class="file">', '          <button class="button btn-secondary">', "          </button>", "      </div>"].join(""),
        events: o.extend({}, r.prototype.events, {
          "change .file": "changeEvent"
        }),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            selectEvent: "uploadSelectEvent",
            cancelEvent: "uploadCancelEvent",
            text: "",
            action: null,
            accept: ""
          }, e), r.prototype.initialize.call(this, e), this.$el.find(".button").text(this.options.text), this.options.action && this.$el.find(".button").attr("data-action", this.options.action), this.options.accept && (this.options.accept = ("." + this.options.accept.join(",.")).replace(/\.\./gi, "."), this.$el.find(".file").attr("accept", this.options.accept)), this.initializeDragAndDrop()
        },
        onFilesDrop: function(e) {
          this.changeEvent({
            target: {
              files: e
            }
          })
        },
        clickEvent: function(e) {
          e.preventDefault(), this.$el.find(".file").trigger("click")
        },
        changeEvent: function(e) {
          e.target.files[0] ? this.options.selectEvent && this.options.model.trigger(this.options.selectEvent, e.target.files[0]) : this.options.cancelEvent && this.options.model.trigger(this.options.cancelEvent, this), this.$el.find(".file").val(null)
        }
      }))
    },
    1756: function(e, t, n) {
      "use strict";
      var i = n(1736);
      e.exports = i.extend({
        el: ['<div class="widget layout-widget horizontal-widget">', '          <div class="widget-wrapper">', '              <div class="children"></div>', "          </div>", "      </div>"].join("")
      })
    },
    1757: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1735);
      e.exports = r.extend({
        el: ['<div class="widget layout-widget vertical-widget hyde-widget">', '          <div class="widget-wrapper">', '              <div class="children"></div>', "          </div>", "      </div>"].join(""),
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            transition: !1,
            transform: null
          }), r.prototype.constructor.call(this, e, t), this.options.transition && (this.$el.addClass("has-transition"), this.$el.toggleClass("visible", Boolean(this.get())))
        },
        isEnabled: function() {
          return o.isFunction(this.options.transform) ? Boolean(this.options.transform.call(this, this.get())) : Boolean(this.get())
        },
        render: function() {
          this.options.transition ? this.$el.toggleClass("visible", this.isEnabled()) : this.$el.toggle(this.isEnabled())
        }
      })
    },
    1758: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1744);
      e.exports = a.extend({
        el: ['<div class="widget iconbutton-widget">', '   <i class="icon fa">', "   </i>", "</div>"].join(""),
        events: r.extend({}, a.prototype.events, {
          "click .icon": "clickEvent"
        }),
        initialize: function(e) {
          if (e = r.defaults(e || {}, {
              model: new i.Model,
              event: "click",
              text: "",
              icon: "",
              tooltipDirection: "tooltip-down"
            }, e), a.prototype.initialize.call(this, e), "" !== this.options.icon && this.$el.find(".icon").addClass("fa-" + this.options.icon), "" !== this.options.text) {
            var t = o('<div class="tooltip ' + this.options.tooltipDirection + '"></div>');
            t.text(this.options.text), this.$el.find(".icon").addClass("help").append(t)
          }
        }
      })
    },
    1759: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1737);
      e.exports = r.extend({
        el: ['<div class="widget imagepreview-widget">', '   <img crossorigin="anonymous" class="image" />', "</div>"].join(""),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            name: "value",
            width: "",
            height: ""
          }, e), r.prototype.initialize.call(this, e), "" !== this.options.height && this.$(".image").css("max-height", this.options.height), "" !== this.options.width && this.$(".image").css("width", this.options.width)
        },
        render: function() {
          var e = this.get();
          e && this.$(".image").attr("src", e)
        }
      })
    },
    1760: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(1761);
      e.exports = r.extend({
        events: i.extend({}, r.prototype.events, {
          "mousewheel .slide": "mousewheelEvent",
          "mouseleave .slide": "mouseleaveEvent"
        }),
        constructor: function(e, t) {
          t = i.defaults(t || {}, {
            mouseDown: !1,
            value: 0,
            initialValue: 0,
            increment: 0,
            pointerValue: 0,
            initialPointerValue: 0,
            isLocked: !1
          }, t), this._onPointerLockChange = this.onPointerLockChange.bind(this), r.prototype.constructor.call(this, e, t), this.$el.addClass("infinite-slider-widget"), this.lockElement = this.el.querySelector(".slide"), this.on("change", this.render.bind(this))
        },
        _updateValue: function(e) {
          this.options.value = e, this.change(e)
        },
        render: function() {
          var e = Math.floor(this.options.value - this.options.initialValue);
          this.$(".slide").css("background-position-x", e + "px"), this.options.isLocked ? (this.options.pointerValue = (this.options.initialPointerValue + e) % this.slideWidth, this.options.pointerValue < 0 && (this.options.pointerValue += this.slideWidth)) : this.options.pointerValue = this.options.initialPointerValue + e, this.$(".cursor").css({
            left: Math.floor(this.options.pointerValue) + "px"
          })
        },
        delegateEvents: function() {
          r.prototype.delegateEvents.apply(this, arguments), o(document).on("pointerlockchange", this._onPointerLockChange)
        },
        undelegateEvents: function() {
          r.prototype.undelegateEvents.apply(this, arguments), o(document).off("pointerlockchange", this._onPointerLockChange)
        },
        onPointerLockChange: function() {
          this.options.isLocked = document.pointerLockElement === this.lockElement
        },
        startEvent: function(e) {
          if (r.prototype.startEvent.apply(this, arguments), this.lockElement.requestPointerLock) {
            this.lockElement.requestPointerLock();
            var t = this.$(".slide").offset();
            this.$(".cursor").show().css({
              top: e.clientY - t.top + "px",
              left: e.clientX - t.left + "px"
            }), this.options.initialPointerValue = e.clientX - t.left, this.options.pointerValue = e.clientX - t.left
          } else this.options.initialPointerValue = this.options.pointerValue = e.clientX, this.options.mouseDown = !0, this.$(".slide").addClass("sliding");
          this.slideWidth = this.$(".slide").width() - this.$(".cursor").width(), this.options.initialValue = this.get(), this._updateValue(this.options.initialValue)
        },
        stopEvent: function() {
          r.prototype.stopEvent.apply(this, arguments), this.lockElement.requestPointerLock ? (document.exitPointerLock(), this.$(".cursor").hide()) : (this.options.mouseDown = !1, this.options.increment = 0, this.$(".slide").removeClass("sliding ")), this.$(".slide").removeClass("stopped")
        },
        moveEvent: function(e) {
          e.preventDefault();
          var t;
          if (this.options.isLocked) {
            var n = e.originalEvent.movementX;
            t = this.get() + n
          } else this.options.mouseDown && (this.options.increment = e.clientX - this.options.pointerValue, t = this.options.value + this.options.increment);
          void 0 === t || this.isValueLimit(t) || this._updateValue(t)
        },
        mousewheelEvent: function(e, t) {
          e.preventDefault();
          var n = this.options.value + (t > 0 ? 1 : -1);
          this.isValueLimit(n) || this._updateValue(n)
        },
        mouseleaveEvent: function(e) {
          e.preventDefault(), this.$(".slide").removeClass("stopped")
        },
        isValueLimit: function(e) {
          return e <= this.options.minimum && !this.options.disableMinimum ? (this._updateValue(this.options.minimum), this.$(".slide").addClass("stopped"), !0) : e >= this.options.maximum && !this.options.disableMaximum ? (this._updateValue(this.options.maximum), this.$(".slide").addClass("stopped"), !0) : (this.$(".slide").removeClass("stopped"), !1)
        },
        selectEvent: function(e) {
          e.preventDefault()
        }
      })
    },
    1761: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1737);
      e.exports = a.extend({
        el: ['<div class="widget slider-widget">', '          <div class="widget-wrapper">', '              <div class="bar">', '                  <div class="slide">', '                      <div class="cursor"></div>', "                  </div>", "              </div>", "          </div>", "      </div>"].join(""),
        events: r.extend({}, a.prototype.events, {
          "mousedown .bar": "trackDrag",
          "mousedown .cursor": "cursorDrag"
        }),
        constructor: function(e, t) {
          t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            minimum: 0,
            maximum: 100,
            step: 1
          }), a.prototype.constructor.call(this, e, t), "undefined" == typeof this.get() && this.set(0)
        },
        delegateEvents: function() {
          a.prototype.delegateEvents.apply(this, arguments), o(window).on("mousemove.delegateEvents" + this.cid, this.moveEvent.bind(this)), o(window).on("mouseup.delegateEvents" + this.cid, this.stopEvent.bind(this))
        },
        undelegateEvents: function() {
          a.prototype.undelegateEvents.apply(this, arguments), o(window).off(".delegateEvents" + this.cid)
        },
        render: function() {
          var e = this.options.maximum - this.options.minimum,
            t = (this.get() - this.options.minimum) / e * 100;
          this.$(".slide").css({
            width: t + "%"
          })
        },
        startEvent: function(e) {
          e.preventDefault(), this.$el.addClass("fast"), this.started = !0
        },
        stopEvent: function(e) {
          this.started && (e.preventDefault(), this.$el.removeClass("fast"), this.started = !1)
        },
        moveEvent: function(e) {
          this.started && (e.preventDefault(), this.selectEvent(e))
        },
        selectEvent: function(e) {
          e.preventDefault();
          var t = this.$el.offset().left,
            n = this.$el.width(),
            i = e.pageX,
            o = (i - t) / n;
          o = Math.min(Math.max(0, o), 1), o = this.options.minimum + o * (this.options.maximum - this.options.minimum), this.change(o)
        },
        cursorDrag: function(e) {
          this.startEvent(e), e.stopPropagation()
        },
        trackDrag: function(e) {
          this.startEvent(e), this.moveEvent(e)
        }
      })
    },
    1762: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1737);
      e.exports = r.extend({
        el: ['<div class="widget label-widget">', '          <span class="text">', '          </span class="text">', "      </div>"].join(""),
        constructor: function(e, t) {
          t = o.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            content: void 0,
            className: "",
            escape: !0
          }, t), r.prototype.constructor.call(this, e, t), "undefined" == typeof this.get() && this.set(this.options.content), this.options.className && this.$(".text").addClass(this.options.className)
        },
        render: function() {
          this.$(".text")[this.options.escape ? "text" : "html"](this.get())
        }
      })
    },
    1763: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1756);
      e.exports = r.extend({
        el: ['<div class="widget layout-widget horizontal-widget numbered-slider-widget">', '          <div class="widget-wrapper">', '              <div class="children"></div>', "          </div>", "      </div>"].join(""),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            name: "value",
            minimum: 0,
            maximum: 100,
            step: 1,
            unit: null,
            infinite: !1,
            disableMaximum: !1,
            disableMinimum: !1
          }), r.prototype.initialize.call(this, e), "undefined" == typeof this.get() && this.set(0);
          var t = {
              model: this.model,
              name: this.options.name,
              minimum: this.options.minimum,
              maximum: this.options.maximum,
              step: this.options.step,
              disableMaximum: this.options.disableMaximum,
              disableMinimum: this.options.disableMinimum
            },
            n = this.options.infinite ? "InfiniteSlider" : "Slider";
          this.slider = this.createWidget(n, o.extend({}, t, this.options.sliderOptions)), this.number = this.createWidget("Number", o.extend({}, t, this.options.numberOptions)), this.options.unit && this.createWidget("Label", {
            label: this.options.unit
          })
        }
      })
    },
    1764: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(220),
        r = n(216),
        a = n(1737);
      e.exports = a.extend({
        el: ['<div class="widget number-widget">', '          <div class="widget-wrapper">', '              <div class="decrease"><a></a></div>', '              <input class="value" />', '              <div class="increase"><a></a></div>', "          </div>", "      </div>"].join(""),
        events: r.extend({}, a.prototype.events, {
          "click .decrease": "decreaseEvent",
          "click .increase": "increaseEvent",
          "change .value:input": "changeEvent",
          "keydown .value:input": "keydownEvent",
          "mousewheel .value": "mousewheelEvent"
        }),
        constructor: function(e, t) {
          t = r.defaults(t || {}, {
            model: new i.Model,
            name: "value",
            minimum: 0,
            maximum: 100,
            step: 1,
            cycle: !1,
            unit: "",
            decimals: null,
            renderValue: null,
            inputValue: null
          }), null === t.decimals && (t.decimals = t.step.toString().replace(/^[0-9]*(?:\.([0-9]*))$/, "$1").length), a.prototype.constructor.call(this, e, t), "undefined" == typeof this.get() && this.set(0)
        },
        render: function() {
          var e = this.$(".value"),
            t = this.get();
          this.options.renderValue && (t = this.options.renderValue(t));
          var n = Math.pow(10, this.options.decimals),
            i = Math.round(t * n) / n + this.options.unit;
          e.is(":input") ? e.val(i) : e.text(i)
        },
        fixValue: function(e) {
          return e < this.options.minimum ? !!this.options.cycle && this.options.maximum - (this.options.minimum - e) % (this.options.maximum - this.options.minimum) : e >= this.options.maximum ? this.options.cycle ? this.options.minimum + (e - this.options.maximum) % (this.options.maximum - this.options.minimum) : !(e > this.options.maximum) && e : e
        },
        add: function(e) {
          var t = this.get() / this.options.step,
            n = Math.round(t),
            i = this.fixValue(this.options.step * (n + e));
          i !== !1 && this.change(i)
        },
        increaseEvent: function(e) {
          e.preventDefault(), this.add(1)
        },
        decreaseEvent: function(e) {
          e.preventDefault(), this.add(-1)
        },
        changeEvent: function(e) {
          var t = o(e.currentTarget).val(),
            n = t.match(/[^0-9.]*$/)[0],
            i = t.substr(0, t.length - n.length);
          if (n = n.trim(), i = i.trim(), !n.length || n === this.options.unit) {
            if (t = Number(i), this.options.inputValue && (t = this.options.inputValue(t)), t > this.options.maximum) t = this.options.maximum;
            else if (t < this.options.minimum) t = this.options.minimum;
            else if (isNaN(t)) return;
            this.change(t)
          }
        },
        keydownEvent: function(e) {
          switch (e.keyCode) {
            case 38:
              e.preventDefault(), this.add(1);
              break;
            case 40:
              e.preventDefault(), this.add(-1);
              break;
            case 33:
              e.preventDefault(), this.add(10);
              break;
            case 34:
              e.preventDefault(), this.add(-10)
          }
        },
        mousewheelEvent: function(e, t) {
          this.$(".value").is(":focus") && (e.preventDefault(), t > 0 ? this.add(1) : t < 0 && this.add(-1))
        }
      })
    },
    1765: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1737);
      e.exports = o.extend({
        el: ['<div class="widget orientation-widget">', '          <div class="widget-wrapper">', '              <div class="left"><a></a></div>', '              <div class="value"></div>', '              <div class="right"><a></a></div>', "          </div>", "      </div>"].join(""),
        events: i.extend({}, o.prototype.events, {
          "click .left": "leftEvent",
          "click .right": "rightEvent"
        }),
        initialize: function(e) {
          e = i.defaults(e || {}, {
            label: "",
            eventName: "turn"
          }), o.prototype.initialize.call(this, e)
        },
        render: function() {
          var e = this.$(".value");
          e.text(this.options.label)
        },
        leftEvent: function() {
          this._triggerEvent("left")
        },
        rightEvent: function() {
          this._triggerEvent("right")
        },
        _triggerEvent: i.throttle(function(e) {
          this.trigger(this.options.eventName, e)
        }, 500)
      })
    },
    1766: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1735);
      e.exports = o.extend({
        el: ['<div class="widget layout-widget panel-widget">', '          <div class="widget-wrapper">', '              <div class="header">', '                   <span class="label"></span>', "              </div>", '              <div class="children"></div>', "          </div>", "      </div>"].join(""),
        initialize: function(e) {
          e = i.defaults(e || {}, {
            label: ""
          }), o.prototype.initialize.call(this, e), this.$(".label").text(this.options.label)
        }
      })
    },
    1767: function(e, t, n) {
      "use strict";
      var i = n(220);
      n(276);
      var o = n(234),
        r = n(216),
        a = n(1736),
        s = n(1735);
      e.exports = a.extend({
        el: ['<div class="widget repeat-widget">', '    <div class="widget-wrapper">', '        <div class="children">', "        </div>", "    </div>", "</div>"].join(""),
        constructor: function(e, t) {
          t = t || {}, void 0 === t.sortable && (t.sortable = !1), void 0 === t.collection && (t.collection = new o.Collection), void 0 === t.layout && (t.layout = s), a.prototype.constructor.call(this, e, t), this.widgets = [], this.modelToWidget = {}, this.layout = this.createWidget(this.options.layout), this.options.collection.forEach(function(e, t) {
            this.onAdd(e, this.options.collection, {
              at: t
            })
          }.bind(this)), this.options.sortable && this.layout.$(".children").sortable(r.extend({
            handle: ".sort-handle",
            change: this.onMove.bind(this)
          }, this.options.sortable))
        },
        delegateEvents: function() {
          var e = a.prototype.delegateEvents.apply(this, arguments);
          return this.options.collection.on("add", this.onAdd, this), this.options.collection.on("remove", this.onRemove, this), this.options.collection.on("reset", this.onReset, this), this.options.collection.on("sort", this.onSort, this), e
        },
        undelegateEvents: function() {
          return this.options.collection.off("add", this.onAdd, this), this.options.collection.off("remove", this.onRemove, this), this.options.collection.off("reset", this.onReset, this), this.options.collection.off("sort", this.onSort, this), a.prototype.undelegateEvents.apply(this, arguments)
        },
        onAdd: function(e, t, n) {
          var i = n.at || t.length,
            o = t.slice(i).filter(function(e) {
              return this.modelToWidget[e.cid]
            }.bind(this));
          o.forEach(function(e) {
            this.onRemove(e)
          }.bind(this));
          var a = this.layout.createWidget(null, this.options.widget, r.extend({
            model: e
          }, this.options.widgetOptions));
          a.$el.attr("data-repeat-cid", e.cid), this.modelToWidget[e.cid] = a, this.widgets.push(a), o.forEach(function(e, n) {
            this.onAdd(e, t, {
              at: i + 1 + n
            })
          }.bind(this))
        },
        onRemove: function(e) {
          var t = this.modelToWidget[e.cid];
          if (t) {
            var n = this.widgets.indexOf(t);
            this.widgets.splice(n, 1), this.layout.removeWidget(t), delete this.modelToWidget[e.cid], this.widgets.slice(n).forEach(function(e) {
              e.trigger("sorted")
            })
          }
        },
        onReset: function() {
          this.widgets.forEach(function(e) {
            this.onRemove(e.model)
          }.bind(this)), this.widgets = [], this.modelToWidget = {}
        },
        onSort: function() {
          if (this.inhibNextSort) return void(this.inhibNextSort = !1);
          this.widgets = this.collection.map(function(e) {
            return this.modelToWidget[e.cid]
          }.bind(this)).filter(function(e) {
            return null !== e && void 0 !== e
          });
          var e = this.layout.$(".children");
          this.widgets.forEach(function(t) {
            t.$el.detach().appendTo(e)
          }), this.collection.forEach(function(e) {
            this.modelToWidget[e.cid].trigger("sorted")
          }.bind(this))
        },
        onMove: function(e, t) {
          var n = i(t.item),
            o = i(t.placeholder),
            r = this.collection.get(n.attr("data-repeat-cid")),
            a = this.modelToWidget[r.cid],
            s = this.collection.indexOf(r),
            l = n.siblings().index(o);
          this.collection.models.splice(s, 1), this.collection.models.splice(l, 0, r), this.widgets.splice(s, 1), this.widgets.splice(l, 0, a), this.inhibNextSort = !0, this.collection.trigger("sort");
          var c = Math.min(s, l),
            u = Math.max(s, l) + 1;
          this.collection.slice(c, u).forEach(function(e) {
            this.modelToWidget[e.cid].trigger("sorted")
          }.bind(this))
        }
      })
    },
    1768: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(1742);
      e.exports = r.extend({
        el: ['<div class="widget select-widget" tabindex="0">', '          <div class="widget-wrapper">', '              <a class="selection"></a>', '              <ul class="options"></ul>', "          </div>", "      </div>"].join(""),
        events: o.extend({}, r.prototype.events, {
          "mouseover [data-value]": "mouseoverEvent",
          blur: "cancel",
          "click .selection": "toggleEvent"
        }),
        constructor: function(e, t) {
          this._bindedCloseEvent = this.closeEvent.bind(this), this._bindedKeyDownEvent = this.keyDownEvent.bind(this), this._bindedKeyPressEvent = this.keyPressEvent.bind(this), t = o.defaults(t || {}, {
            placeholder: "Select an option",
            allowMultiple: !1,
            allowEmpty: !1
          }), r.prototype.constructor.call(this, e, t), this.options.allowMultiple && this.set(this.get()[0]), this._keyBuffer = "", this._keyBufferTimestamp = null
        },
        delegateEvents: function() {
          r.prototype.delegateEvents.apply(this, arguments), i(document).on("click", this._bindedCloseEvent), i(document).on("keydown", this._bindedKeyDownEvent), i(document).on("keypress", this._bindedKeyPressEvent)
        },
        undelegateEvents: function() {
          r.prototype.undelegateEvents.apply(this, arguments), i(document).off("click", this._bindedCloseEvent), i(document).off("keydown", this._bindedKeyDownEvent), i(document).off("keypress", this._bindedKeyPressEvent)
        },
        render: function() {
          var e = this.get(),
            t = this.options.options.filter(function(t) {
              return t.get("value") === e
            })[0],
            n = t ? t.get("label") : "",
            i = this.$(".selection");
          e && i.removeClass("placeholder"), i.text(n || this.options.placeholder), i.attr("title", n || this.options.placeholder)
        },
        isOpened: function() {
          return this.$el.hasClass("opened")
        },
        isFocused: function() {
          return this.el === document.activeElement && !this.isOpened()
        },
        toggle: function() {
          this.isOpened() ? this.close() : this.open()
        },
        open: function() {
          this.lastValue = this.get(), this.moveCursorToSelection(), this.$el.addClass("opened")
        },
        close: function() {
          this.$el.removeClass("opened"), this.moveCursorToSelection()
        },
        cancel: function() {
          this.isOpened() && (this.triggerOption(this.lastValue), this.close())
        },
        setCursor: function(e) {
          var t = this.$("[data-value]");
          e < 0 && (e = t.length + e % t.length), e >= t.length && (e %= t.length), t.removeClass("cursor"), t.eq(e).addClass("cursor"), this.cursorOffset = e
        },
        changeCursor: function(e) {
          if (0 !== e) {
            var t = this.$("[data-value]").length;
            if (null != this.cursorOffset || this.isOpened() || this.moveCursorToSelection(), null == this.cursorOffset) this.setCursor(e > 0 ? 0 : t - 1);
            else {
              var n = this.cursorOffset + e;
              n >= t && (n = t - 1), n < 0 && (n = 0), this.setCursor(n)
            }
          }
        },
        applyCursorToSelection: function() {
          null !== this.cursorOffset && this.triggerOption(this.$("[data-value]").eq(this.cursorOffset).attr("data-value"))
        },
        moveCursorToSelection: function() {
          var e = this.get();
          this.cursorOffset = this.$("[data-value]").removeClass("cursor").filter(function() {
            return i(this).attr("data-value") === e
          }).addClass("cursor").index()
        },
        toggleEvent: function(e) {
          e.preventDefault(), e.stopPropagation(), this.toggle()
        },
        closeEvent: function(e) {
          this.$el.has(e.currentTarget).length || this.$el.hasClass("opened") && (e.preventDefault(), this.close())
        },
        selectEvent: function() {
          r.prototype.selectEvent.apply(this, arguments), this.close()
        },
        mouseoverEvent: function(e) {
          this.setCursor(this.$("[data-value]").index(e.currentTarget))
        },
        keyDownEvent: function(e) {
          switch (e.keyCode) {
            case 36:
              (this.isOpened() || this.isFocused()) && (this.setCursor(0), this.applyCursorToSelection());
              break;
            case 35:
              (this.isOpened() || this.isFocused()) && (this.setCursor(-1), this.applyCursorToSelection());
              break;
            case 27:
              this.isOpened() && (e.preventDefault(), this.cancel());
              break;
            case 33:
              (this.isOpened() || this.isFocused()) && (e.preventDefault(), this.changeCursor(-10), this.applyCursorToSelection());
              break;
            case 34:
              (this.isOpened() || this.isFocused()) && (e.preventDefault(), this.changeCursor(10), this.applyCursorToSelection());
              break;
            case 38:
              (this.isOpened() || this.isFocused()) && (e.preventDefault(), this.changeCursor(-1), this.applyCursorToSelection());
              break;
            case 40:
              (this.isOpened() || this.isFocused()) && (e.preventDefault(), this.changeCursor(1), this.applyCursorToSelection());
              break;
            case 32:
            case 13:
              if (this.isOpened() || this.isFocused()) {
                e.preventDefault(), this.toggle();
                break
              }
              break;
            case 8:
              (this.isOpened() || this.isFocused()) && e.preventDefault()
          }
        },
        keyPressEvent: function(e) {
          if (this.isOpened() || this.isFocused()) {
            var t = String.fromCharCode(e.keyCode).toLowerCase();
            if (!(t.length < 1)) {
              var n = (new Date).getTime();
              n - this._keyBufferTimestamp > 700 && (this._keyBuffer = ""), this._keyBuffer += t, this._keyBufferTimestamp = n;
              var i = function() {
                  return this.options.options.find(function(e) {
                    return e.get("label").toLowerCase().indexOf(this._keyBuffer) !== -1
                  }.bind(this))
                }.bind(this),
                o = i();
              !o && this._keyBuffer.length > 1 && (this._keyBuffer = t, o = i()), o && (this.triggerOption(o.get("value")), this.setCursor(this.options.options.indexOf(o)))
            }
          }
        }
      })
    },
    1769: function(e, t, n) {
      "use strict";
      var i = n(1737);
      e.exports = i.extend({
        el: ['<div class="widget separator-widget">', "      <hr>", "  </div>"].join(""),
        initialize: function(e) {
          i.prototype.initialize.call(this, e)
        }
      })
    },
    1770: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1756);
      e.exports = r.extend({
        el: ['<div class="widget layout-widget horizontal-widget slidered-image-widget">', '          <div class="widget-wrapper">', '              <div class="children"></div>', "          </div>", "      </div>"].join(""),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            name: "value"
          }), r.prototype.initialize.call(this, e);
          var t = {
              model: this.model
            },
            n = this.options.range;
          this.image = this.createWidget("FactoredImage", o.extend({}, t, {
            name: this.field()
          }, this.options.factoredImageOptions)), this.numberedSlider = this.createWidget("NumberedSlider", o.extend({}, t, {
            name: this.field("factor"),
            slider: o.extend({}, n, this.options.sliderOptions),
            number: o.extend({}, n, this.options.numberOptions)
          }, this.options.numberedSliderOptions)), this.image = this.factoredImage, this.slider = this.numberedSlider.slider, this.number = this.numberedSlider.number
        }
      })
    },
    1771: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(1742);
      e.exports = r.extend({
        el: ['<div class="widget togglebutton-widget horizontal-widget">', '          <div class="widget-wrapper">', '              <ul class="options"></ul>', "          </div>", "      </div>"].join(""),
        events: o.extend({}, r.prototype.events),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            placeholder: "Select an option",
            allowMultiple: !1,
            allowEmpty: !1
          }), r.prototype.initialize.call(this, e), this.$(".option > a").each(function() {
            i(this).attr("tabindex", 0)
          })
        }
      })
    },
    1772: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1735);
      e.exports = r.extend({
        el: ['<div class="widget layout-widget vertical-widget togglechildren-widget">', '   <div class="widget-wrapper">', '       <div class="children"></div>', "   </div>", '   <div class="force-closed-widget"></div>', "</div>"].join(""),
        initialize: function(e) {
          e = o.defaults(e || {}, {
            model: new i.Model,
            name: "value",
            transform: null
          }), r.prototype.initialize.call(this, e)
        },
        isEnabled: function() {
          return o.isFunction(this.options.transform) ? Boolean(this.options.transform.call(this, this.get())) : Boolean(this.get())
        },
        render: function() {
          var e = this.isEnabled(),
            t = o.result(this.options, "label") || "",
            n = o.result(this.options, "message") || "",
            i = "";
          (n || t) && (i = '<span class="title">' + t + '</span><span class="message">' + n + "</span>"), this.$el.toggleClass("enabled", e), this.$(".force-closed-widget").html(i), this.$el.toggleClass("force-closed", !e), this.$el.toggleClass("enable-force-closed-widget", !e && !!i)
        }
      })
    },
    1773: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1774),
        r = {
          FeatureName: "postprocessUI",
          ModelName: "PostProcess",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1774: function(e, t, n) {
      "use strict";
      var i = n(258),
        o = n(238),
        r = n(255),
        a = n(1728),
        s = n(1733),
        l = n(1735),
        c = n(444);
      e.exports = i.extend({
        initialize: function() {
          i.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getTab("Scene"),
            n = t.createWidget("Group", {
              model: this.model,
              name: "enable",
              label: "Post Processing Filters",
              help: "Post-processing visual effects",
              id: "PostProcessGroup",
              opened: !1
            });
          this.addGrainGroup(n), this.addDofGroup(n), this.addSharpenGroup(n), this.addChromaticGroup(n), this.addVignetteGroup(n), this.addBloomGroup(n), this.addToneMappingGroup(n), this.addColorBalanceGroup(n), this.listenTo(this.model, "change:grainEnable", function(e, t) {
            r.postProcessEditorEffectToggled("grain", t)
          }), this.listenTo(this.model, "change:sharpenEnable", function(e, t) {
            r.postProcessEditorEffectToggled("sharpen", t)
          }), this.listenTo(this.model, "change:chromaticAberrationEnable", function(e, t) {
            r.postProcessEditorEffectToggled("aberration", t)
          }), this.listenTo(this.model, "change:vignetteEnable", function(e, t) {
            r.postProcessEditorEffectToggled("vignette", t)
          }), this.listenTo(this.model, "change:bloomEnable", function(e, t) {
            r.postProcessEditorEffectToggled("bloom", t)
          }), this.listenTo(this.model, "change:toneMappingEnable", function(e, t) {
            r.postProcessEditorEffectToggled("toneMapping", t)
          }), this.listenTo(this.model, "change:colorBalanceEnable", function(e, t) {
            r.postProcessEditorEffectToggled("colorBalance", t)
          }), this.listenTo(this.model, "change:dofEnable", function(e, t) {
            r.postProcessEditorEffectToggled("dof", t)
          })
        },
        addGrainGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "Grain",
              help: "Adds a grain effect",
              model: this.model,
              name: "grainEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            }),
            n = new o({
              factor: this.model.get("grainFactor")
            });
          this.addNumberedSlider(t, void 0, "factor", "GrainNumberedSlider", n), new s("factor", "grainFactor", n, this.model, a.createXScale(.5)), t.createWidget("Checkbox", {
            model: this.model,
            name: "grainAnimated",
            label: "Animated"
          })
        },
        addSharpenGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "Sharpness",
              help: "Make details sharper",
              model: this.model,
              name: "sharpenEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            }),
            n = new o({
              factor: this.model.get("sharpenFactor")
            });
          this.addNumberedSlider(t, void 0, "factor", "SharpenNumberedSlider", n), new s("factor", "sharpenFactor", n, this.model, a.createScaleXPow(5, 2))
        },
        addChromaticGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "Chromatic Aberrations",
              help: "Simulate lens chromatic aberrations",
              model: this.model,
              name: "chromaticAberrationEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            }),
            n = a.createXScale(.001);
          this.addNumberedSlider(t, void 0, "chromaticAberrationFactor", "ChromaticNumberedSlider", this.model, [0, .1, .001], n)
        },
        addVignetteGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "Vignette",
              help: "Simulate lens vignette",
              model: this.model,
              name: "vignetteEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            }),
            n = this.model.get("vignetteLens"),
            i = new o({
              radius: 1 - .5 * (n[0] + n[1]),
              hardness: 1 - .5 * (n[0] - n[1])
            });
          i.on("change", function(e) {
            var t = 1 - e.get("radius"),
              n = 1 - e.get("hardness");
            this.model.set("vignetteLens", [t + n, t - n])
          }.bind(this)), this.addNumberedSlider(t, "Amount", "radius", "VignetteRadiusNumberedSlider", i), this.addNumberedSlider(t, "Hardness", "hardness", "VignetteHardnessNumberedSlider", i)
        },
        addBloomGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "Bloom",
              help: "Add glow effect to highlights",
              model: this.model,
              name: "bloomEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            }),
            n = new o({
              threshold: this.model.get("bloomThreshold"),
              factor: this.model.get("bloomFactor")
            }),
            i = {
              widgetToModel: function(e) {
                return 1 - Math.pow(e, .5)
              },
              modelToWidget: function(e) {
                return Math.pow(1 - e, 2)
              }
            };
          this.addNumberedSlider(t, "Threshold", "threshold", "BloomThresholdNumberedSlider", n), this.addNumberedSlider(t, "Intensity", "factor", "BloomFactorNumberedSlider", n), this.addNumberedSlider(t, "Radius", "bloomRadius", "BloomRadiusNumberedSlider", this.model), new s("threshold", "bloomThreshold", n, this.model, i), new s("factor", "bloomFactor", n, this.model, a.createXScale(2))
        },
        addToneMappingGroup: function(e) {
          var t = this.model,
            n = e.createWidget("Group", {
              label: "Tone mapping",
              help: "Adjust exposure, brightness, contrast and saturation",
              model: t,
              name: "toneMappingEnable",
              inner: l.reify(void 0, {
                withMargins: !1
              }),
              opened: !1
            });
          n.createWidget("Type", "ToggleButton", {
            model: t,
            name: "toneMappingMethod",
            options: {
              "default": "Linear",
              reinhard: "Reinhard",
              filmic: "Filmic"
            }
          });
          var i = a.createAddXScale(1, .01);
          this.addNumberedSlider(n, "Exposure", "toneMappingExposure", "ToneMappingExposureNumberedSlider", t, [0, 2, .001], i), this.addNumberedSlider(n, "Brightness", "toneMappingBrightness", "ToneMappingBrightnessNumberedSlider", t, [-1, 1, .01]);
          var r = new o({
            contrast: this.model.get("toneMappingContrast")
          });
          this.addNumberedSlider(n, "Contrast", "contrast", "ToneMappingContrastNumberedSlider", r, [-1, 1, .01]), new s("contrast", "toneMappingContrast", r, this.model, a.createScaleXPow(1, 5)), this.addNumberedSlider(n, "Saturation", "toneMappingSaturation", "ToneMappingSaturationNumberedSlider", t, [0, 2, .001], i)
        },
        addColorBalanceGroup: function(e) {
          var t = this.model,
            n = e.createWidget("Group", {
              label: "Color balance",
              help: "Adjust the color balance",
              model: t,
              name: "colorBalanceEnable",
              inner: l.reify(void 0, {
                withMargins: !0
              }),
              opened: !1
            }),
            i = this.model.get("colorBalanceMid"),
            r = new o({
              tone: "Mid",
              red: i[0],
              green: i[1],
              blue: i[2]
            }),
            s = function(e) {
              var n = [e.get("red"), e.get("green"), e.get("blue")];
              t.set("colorBalance" + e.get("tone"), n)
            },
            c = function(e) {
              var n = t.get("colorBalance" + e.get("tone"));
              r.off("change:red change:green change:blue", s), r.set("red", n[0]), r.set("green", n[1]), r.set("blue", n[2]), r.on("change:red change:green change:blue", s)
            };
          r.on("change:red change:green change:blue", s), r.on("change:tone", c), n.createWidget(null, "ToggleButton", {
            model: r,
            name: "tone",
            id: "ColorBalanceToneToggleButton",
            allowMultiple: !1,
            options: {
              Low: "Shadows",
              Mid: "MidTone",
              High: "Highlights"
            }
          });
          var u = n.createWidget(null, "Vertical", {
              withMargins: !1
            }),
            d = a.createXScale(.01);
          this.addNumberedSlider(u, "Red", "red", "ColorBalanceRedNumberedSlider", r, [-1, 1, .002], d), this.addNumberedSlider(u, "Green", "green", "ColorBalanceGreenNumberedSlider", r, [-1, 1, .002], d), this.addNumberedSlider(u, "Blue", "blue", "ColorBalanceBlueNumberedSlider", r, [-1, 1, .002], d)
        },
        addDofGroup: function(e) {
          var t = this.model,
            n = this.options.context.getFeatures().background.getModel(),
            i = new o,
            r = "Depth of field",
            a = e.createWidget("ToggleChildren", {
              model: i,
              name: "usable",
              label: r,
              message: "Requires color/env. background"
            }),
            s = function() {
              var e = n.get("enable"),
                o = "environment" === e || "color" === e;
              i.set("usable", o), !o && t.get("dofEnable") && (new c({
                content: "Depth of field is not compatible with fixed background or no background, and has been disabled.",
                "class": "info",
                delay: 5e3
              }), t.set("dofEnable", !1))
            };
          i.listenTo(n, "change:enable", s), s();
          var u = a.createWidget("Group", {
            label: r,
            help: "Simulate shallow depth of field",
            model: this.model,
            name: "dofEnable",
            inner: l.reify(void 0, {
              withMargins: !1
            }),
            opened: !1
          });
          this.addNumberedSlider(u, "Foreground blur", "dofBlurNear", "DofBlurNearNumberedSlider", this.model), this.addNumberedSlider(u, "Background blur", "dofBlurFar", "DofBlurFarNumberedSlider", this.model)
        },
        addNumberedSlider: function(e, t, n, i, o, r, s) {
          return e.createWidget("Label", {
            content: t,
            withMargins: !1
          }), e.createWidget(null, "NumberedSlider", {
            id: i,
            model: o || this.model,
            name: n,
            minimum: r ? r[0] : 0,
            maximum: r ? r[1] : 1,
            step: r ? r[2] : .01,
            numberOptions: {
              renderValue: s ? s.modelToWidget : a.PerCent.modelToWidget,
              inputValue: s ? s.widgetToModel : a.PerCent.widgetToModel
            }
          })
        }
      })
    },
    1775: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1776),
        r = {
          FeatureName: "lightingUI",
          ModelName: "Lighting",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1776: function(e, t, n) {
      "use strict";
      var i = n(1777),
        o = n(1778),
        r = n(247),
        a = n(238),
        s = n(258),
        l = n(1728),
        c = n(1733),
        u = n(1545),
        d = n(1467);
      e.exports = s.extend({
        initialize: function() {
          s.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getTab("Lighting"),
            n = this.model.get("lights"),
            i = new a,
            o = function() {
              i.set("useful", u.get("mask") & u.LIT)
            };
          i.listenTo(u, "change:mask", o), o();
          var r = t.createWidget("ToggleChildren", {
            model: i,
            name: "useful"
          });
          this._group = r.createWidget("Group", {
            model: this.model,
            label: "Lights",
            name: "enable",
            help: "Ponctual lights",
            id: "LightsGroup",
            opened: !0
          }), this.model.on("lightsReady", this.buildLights.bind(this, e, t, n))
        },
        buildLights: function(e, t, n) {
          var s = new a({
              selectedLight: null
            }),
            l = new r(n);
          l.each(function(e, t) {
            e.set({
              label: "Light " + t,
              value: t,
              selected: !1
            })
          }), s.on("change:selectedLight", function(e) {
            l.each(function(t) {
              t.get("selected") && t.set("selected", !1), t.get("value").toString() === e.get("selectedLight") && t.set("selected", !0)
            })
          });
          var u = this._group.createWidget(null, "Button", {
            text: "Load lighting preset"
          });
          u.model.on("click", function() {
            new i(e.getAPI(), {
              model: u.model
            })
          }), u.model.on("change:preset", function(e) {
            var t = e.get("preset");
            switch (t) {
              case "ThreePointLight":
                this.model.initPresetThreePointLight();
                break;
              case "FullMoonNight":
                this.model.initPresetFullMoonNight();
                break;
              case "LowKeyLight":
                this.model.initPresetLowKeyLight();
                break;
              case "EvilGenius":
                this.model.initPresetEvilGenius();
                break;
              case "FairyCamp":
                this.model.initPresetFairyCamp();
                break;
              case "TwoHeadLightV1":
                this.model.initPreset2HeadLightV1()
            }
          }.bind(this)), this._group.createWidget(null, "Options", {
            allowEmpty: !0,
            id: "LightingSelect",
            model: s,
            name: "selectedLight",
            options: l,
            rowClass: o
          });
          var d = {
            widgetToModel: function(e) {
              return null === e ? -1 : parseInt(e, 10)
            },
            modelToWidget: function(e) {
              return e.toString()
            }
          };
          new c("selectedLight", "select", s, this.model, d), l.each(function(e) {
            this.createLightWidget(e)
          }.bind(this))
        },
        createLightWidget: function(e) {
          var t = this._group.createWidget("Hyde", {
              model: e,
              name: "selected"
            }),
            n = t.createWidget("Panel", {
              label: "Light properties"
            }),
            i = e.get("color"),
            o = new a({
              color: {
                r: i[0],
                g: i[1],
                b: i[2]
              },
              "color.factor": 100,
              "color.original": {
                r: i[0],
                g: i[1],
                b: i[2]
              }
            });
          o.on("change", function(t) {
            var n = t.get("color.original");
            e.set("color", [n.r, n.g, n.b])
          }), e.on("change:color", function() {
            var t = e.get("color");
            o.set({
              color: {
                r: t[0],
                g: t[1],
                b: t[2]
              },
              "color.factor": 100,
              "color.original": {
                r: t[0],
                g: t[1],
                b: t[2]
              }
            })
          }), n.createWidget("ToggleButton", {
            model: e,
            name: "type",
            options: {
              NONE: "None",
              DIRECTION: "Direction",
              POINT: "Point",
              SPOT: "Spot",
              HEMI: "Hemi"
            }
          });
          var r = new a,
            s = function(e) {
              var t = e.get("type"),
                n = e.get("attachedToCamera");
              r.set({
                isNone: "NONE" === t,
                isLight: "NONE" !== t,
                isDirectional: "DIRECTION" === t,
                isPoint: "POINT" === t,
                isSpot: "SPOT" === t,
                isHemi: "HEMI" === t,
                isAttached: n,
                isDetached: !n
              })
            };
          s(e), r.listenTo(e, "change:type", s), r.listenTo(e, "change:attachedToCamera", s), this.createCommonWidgets(r, e, o, n), this.createDirectionLightWidgets(r, e, n), this.createPointLightWidgets(r, e, n), this.createSpotLightWidgets(r, e, n), this.createHemiLightWidgets(r, e, n)
        },
        createCommonWidgets: function(e, t, n, i) {
          var o = i.createWidget("Hyde", {
              model: e,
              name: "isLight"
            }),
            r = o.createWidget("Horizontal");
          r.createWidget("FactoredImage", {
            model: n,
            name: "color",
            className: "light-color-widget",
            imageOptions: {
              allowColor: !0,
              allowTexture: !1
            }
          }), this.addIntensityWidget(r, t, "intensity")
        },
        createDirectionLightWidgets: function(e, t, n) {
          var i = n.createWidget("Hyde", {
            model: e,
            name: "isDirectional"
          });
          i.createWidget("ToggleSwitch", {
            label: "Attached to camera",
            model: t,
            name: "attachedToCamera"
          });
          var o = d().cameraShadows ? i : i.createWidget("ToggleChildren", {
            model: e,
            name: "isDetached"
          });
          this.addShadows(t, o)
        },
        createPointLightWidgets: function(e, t, n) {
          var i = n.createWidget("Hyde", {
            model: e,
            name: "isPoint"
          });
          this.addFalloffWidget(i, t)
        },
        createSpotLightWidgets: function(e, t, n) {
          var i = n.createWidget("Hyde", {
            model: e,
            name: "isSpot"
          });
          this.addFalloffWidget(i, t), i.createWidget("Angle", "NumberedSlider", {
            model: t,
            name: "angle",
            minimum: 1,
            maximum: 90,
            step: 1
          }), i.createWidget("Softness", "NumberedSlider", {
            model: t,
            name: "hardness",
            minimum: 0,
            maximum: 1,
            step: .01,
            numberOptions: {
              renderValue: l.PerCent.modelToWidget,
              inputValue: l.PerCent.widgetToModel
            }
          }), i.createWidget("Separator"), this.addShadows(t, i)
        },
        addShadows: function(e, t) {
          t.createWidget("ToggleSwitch", {
            label: "Cast shadows",
            model: e,
            name: "castShadows"
          });
          var n = new a({
            proxyShadowBias: 0
          });
          t.createWidget("Shadows bias", "NumberedSlider", {
            model: n,
            name: "proxyShadowBias",
            minimum: 0,
            maximum: 1,
            step: .001
          }), new c("proxyShadowBias", "shadowBias", n, e, l.createScaleXPow(1, 4))
        },
        createHemiLightWidgets: function(e, t, n) {
          var i = new a,
            o = function() {
              i.set("isPBR", u.get("mask") & u.PBR), i.set("isClassic", u.get("mask") & u.CLASSIC)
            };
          i.listenTo(u, "change:mask", o), o();
          var r = t.get("ground"),
            s = new a({
              color: {
                r: r[0],
                g: r[1],
                b: r[2]
              },
              "color.factor": 100,
              "color.original": {
                r: r[0],
                g: r[1],
                b: r[2]
              }
            });
          s.on("change", function(e) {
            var n = e.get("color.original");
            t.set("ground", [n.r, n.g, n.b])
          });
          var l = n.createWidget("Hyde", {
              model: e,
              name: "isHemi"
            }),
            c = l.createWidget("Hyde", {
              model: i,
              name: "isPBR"
            });
          c.createWidget("Label", {
            content: '<i class="fa fa-warning"></i> In PBR, Hemi lights work as Direction',
            escape: !1
          });
          var d = l.createWidget("Hyde", {
              model: i,
              name: "isClassic"
            }),
            h = d.createWidget("Horizontal");
          h.createWidget("FactoredImage", {
            model: s,
            name: "color",
            className: "light-color-widget",
            imageOptions: {
              allowColor: !0,
              allowTexture: !1
            }
          }), this.addIntensityWidget(h, t, "intensityGround"), l.createWidget("ToggleSwitch", {
            label: "Attached to camera",
            model: t,
            name: "attachedToCamera"
          })
        },
        addFalloffWidget: function(e, t) {
          var n = new a({
            proxyFallOff: 0
          });
          e.createWidget("Falloff", "NumberedSlider", {
            model: n,
            name: "proxyFallOff",
            minimum: .01,
            maximum: 1,
            step: .01,
            numberOptions: {
              renderValue: l.PerCent.modelToWidget,
              inputValue: l.PerCent.widgetToModel
            }
          });
          var i = Math.max(t.get("falloff"), 1e3 / this.model._root.getMinimumBound().radius2());
          t.multUI_ = 1 / i, new c("proxyFallOff", "falloff", n, t, l.createScaleXPow(i, 8))
        },
        addIntensityWidget: function(e, t, n) {
          var i = new a({
            proxyIntensity: 0
          });
          e.createWidget("NumberedSlider", {
            model: i,
            name: "proxyIntensity",
            className: "light-intensity-widget",
            minimum: 0,
            maximum: 1,
            step: .01,
            numberOptions: {
              renderValue: l.PerCent.modelToWidget,
              inputValue: l.PerCent.widgetToModel
            }
          });
          var o = 2 * Math.max(10, t.get(n)) - 2,
            r = {
              widgetToModel: function(e) {
                return e <= .5 ? 2 * e : 1 + (e - .5) * o
              },
              modelToWidget: function(e) {
                return e <= 1 ? e / 2 : (e - 1) / o + .5
              }
            };
          new c("proxyIntensity", n, i, t, r)
        }
      })
    },
    1777: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(216),
        r = n(1753),
        a = {
          ThreePointLight: {
            name: "Three-point Lighting",
            description: "2 × Direction + Hemi"
          },
          FullMoonNight: {
            name: "Full Moon Night",
            description: "Hemi + 2 × Direction"
          },
          LowKeyLight: {
            name: "Low Key Lighting",
            description: "2 × Direction"
          },
          EvilGenius: {
            name: "Evil Genius",
            description: "2 × Direction + Hemi"
          },
          FairyCamp: {
            name: "Fairy Camp",
            description: "2 × Direction + Hemi"
          },
          TwoHeadLightV1: {
            name: "Default",
            description: "2 × Direction"
          }
        };
      e.exports = r.extend({
        events: o.extend({}, r.prototype.events, {
          "click [data-preset]": "onPresetSelected"
        }),
        className: "lighting-preset-popup",
        header: function() {
          return o.template(['<div class="popup-name">', "    Select a preset", "</div>", '<div class="popup-actions">', '    <a class="popup-action-close"></a>', "</div>"].join("\n"), {})()
        },
        content: function() {
          return o.template(['<ul class="preset-list">', "   <% for (var id in presets) { %>", '   <li class="preset-list-item">', '       <div class="preset-list-preset" data-preset="<%= id %>">', '           <div class="preset-image preset-id-<%= id %>"></div>', '           <span class="preset-name"><%= presets[id].name %></span>', '           <span class="preset-description"><%= presets[id].description %></span>', "       </div>", "   </li>", "   <% } %>", "</ul>"].join("\n"))({
            presets: a
          })
        },
        onPresetSelected: function(e) {
          this.options.model.set("preset", i(e.currentTarget).attr("data-preset")), this.options.model.set("preset", ""), this.close()
        }
      })
    },
    1778: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1743);
      e.exports = o.extend({
        el: ['<div class="widget light-row-widget">', '      <div class="widget-wrapper">', "          <label>", '             <span class="name"></span>', "          </label>", '          <i class="light-color" style="display:none"></i>', '          <label class="reset-position" title="Move to center">', '              <i class="fa fa-crosshairs"></i>', "          </label>", '          <label class="toggle-enable" title="Show/Hide">', '              <i class="fa fa-eye"></i>', "          </label>", "      </div>", "</div>"].join(""),
        events: i.extend({}, o.prototype.events, {
          "click .toggle-enable": "toggle",
          "click .reset-position": "resetPosition"
        }),
        initialize: function(e) {
          e = i.defaults(e || {}, {
            name: null
          }, e), o.prototype.initialize.call(this, e)
        },
        render: function() {
          this.$el.toggleClass("enabled", this.model.get("enable"));
          var e = this.model.get("value") + 1,
            t = {
              NONE: "None",
              DIRECTION: "Direction",
              POINT: "Point",
              SPOT: "Spot",
              HEMI: "Hemi"
            }[this.model.get("type")],
            n = e + " : " + t;
          this.$(".name").text(n), this.$(".toggle-enable").toggle("NONE" !== this.model.get("type")), this.$(".reset-position").toggle("NONE" !== this.model.get("type"))
        },
        toggle: function(e) {
          e.stopPropagation();
          var t = this.model.get("enable");
          this.model.set({
            enable: !t
          })
        },
        resetPosition: function(e) {
          e.stopPropagation(), this.model.resetPosition()
        }
      })
    },
    1779: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1780),
        r = {
          FeatureName: "environmentUI",
          ModelName: "Environment",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1780: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(220),
        r = n(235),
        a = n(238),
        s = n(258),
        l = n(247),
        c = n(233),
        u = n(1611),
        d = n(1733),
        h = n(1728),
        p = n(266),
        g = n(1781),
        f = n(215),
        m = n(286),
        v = [0, .02, .055, .1];
      e.exports = s.extend(i.extend({}, m, {
        initialize: function() {
          s.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getTab("Lighting");
          this._proxyCollection = new l, this._group = t.createWidget("Group", {
            label: "Environment",
            help: "Environment for background and/or lighting",
            model: this.model,
            name: "enable",
            id: "EnvironmentGroup",
            opened: !0
          }), this._imagePreviewModel = new a({
            image: ""
          }), this.me = c.me(), this.onSyncCollection(), this.buildGroup(), this.syncPreview(), o(this._group.el).css("position", "relative"), this.initializeDragAndDrop({
            target: this._group.el,
            dropbox: this._group.el
          })
        },
        onFilesDrop: function(e) {
          i.each(e, this.onAddNewEnvironment.bind(this))
        },
        buildGroup: function() {
          this.model.environmentCollection.on("add", this.onAddedElement.bind(this)), this.model.on("uploadSelectEvent", this.onAddNewEnvironment, this), this._environmentSelect = this._group.createWidget("Select", {
            model: this.model,
            name: "uid",
            image: "image",
            options: this._proxyCollection,
            placeholder: "Select an environment",
            id: "EnvironmentSelect"
          }), this._environmentSelect.on("delete", this.onRemoveEnvironment.bind(this)), this._group.createWidget("ImagePreview", {
            model: this._imagePreviewModel,
            name: "image",
            height: 130
          }), this.me.canUpgradeToPro() ? this._group.createWidget("Label", {
            content: ['Upgrade to <a href="/plans" target="_blank">Sketchfab PRO</a> ', 'or <a href="/invite" target="_blank">invite ' + f.referrals.nbInvitesForProUnlock + " friends</a> ", "to upload your custom environments"].join(""),
            escape: !1,
            className: "upgrade",
            id: "EnvironmentLabel"
          }) : this._group.createWidget("FilePicker", {
            model: this.model,
            text: "Import environment HDR",
            id: "EnvironmentFilePicker",
            accept: f.environmentFiletypes
          });
          var e = new a({
              blur: this.getClosestBlur(this.model.get("blur")).toString()
            }),
            t = h.createScaleXPow(35, 4),
            n = h.DegToRad;
          new d("rotation", "rotation", e, this.model, n), new d("exposure", "exposure", e, this.model, t), this._group.createWidget("Orientation", "NumberedSlider", {
            id: "EnvironmentRotationNumberedSlider",
            model: e,
            name: "rotation",
            minimum: 0,
            maximum: 360,
            numberOptions: {
              unit: "°"
            },
            help: "Viewport shortcuts<br>ALT + Drag: environment &amp; lights<br>ALT + SHIFT + Drag: environment only"
          }), this._group.createWidget("Brightness", "NumberedSlider", {
            model: e,
            name: "exposure",
            minimum: 0,
            maximum: 1,
            step: .001,
            numberOptions: {
              renderValue: t.widgetToModel,
              inputValue: t.modelToWidget
            },
            id: "EnvironmentExposureNumberedSlider"
          });
          var i = this._group.createWidget("Button", {
              text: "Use environment for background",
              model: this.model,
              event: "clickOverrideBackground",
              name: "backgroundEnable",
              id: "EnvironmentBackgroundGroup"
            }),
            r = this.options.context.getFeatures().background.getModel(),
            s = function(e, t) {
              "environment" === t ? i.disable() : i.enable(), o("#EnvironmentBackgroundGroup button").blur()
            };
          r.on("change:enable", s), s(r, r.get("enable")), this.model.on("clickOverrideBackground", function() {
            r.set("tabName", "environment")
          })
        },
        onRemoveEnvironment: function(e) {
          var t = this.model.environmentCollection.get(e),
            n = this.options.context.getFeatures().environment.getModel(),
            i = this.options.context.getFeatures().environment.getModel()._trashbin;
          if (t.get("uid") === n.get("uid")) {
            var o = this.model.environmentCollection.findWhere({
              isDefault: !0
            }).get("uid");
            this.select.close(), this.model.set("uid", o)
          }
          this._proxyCollection.findWhere({
            value: e
          }).destroy(), i.push(t), t.on("restore", this.model.environmentCollection.add.bind(this.model.environmentCollection))
        },
        onAddNewEnvironment: function(e) {
          var t = this,
            n = new FormData,
            i = new g,
            a = this.validateEnvironment(e);
          if (a) {
            var s = new p({
              title: "Invalid environment",
              text: a,
              safe: !0,
              buttons: {
                ok: !0
              }
            });
            return s.open().then(function() {
              s.close()
            }), s
          }
          var l = function(e) {
            var t = (e.loaded / e.total * 100).toFixed(0) + "%";
            i.setProgress(t)
          };
          i.showSection("uploading").setMessage("Uploading your environment"), n.append("environmentFile", e);
          var c = new r(function(e, t) {
            o.ajax({
              url: "/i/environments",
              type: "POST",
              data: n,
              cache: !1,
              contentType: !1,
              processData: !1,
              xhr: function() {
                var e = o.ajaxSettings.xhr();
                return e.upload && e.upload.addEventListener("progress", l, !1), e
              },
              success: e.bind(this),
              error: t.bind(this)
            })
          });
          c.then(function(e) {
            i.showSection("idle").setDoneStatus(!0).toggleCloseButton(!0).setMessage("Processing your environment");
            var n = new u({
              uid: e.uid
            });
            n.checkStatusAndRetry().then(function(e) {
              "SUCCEEDED" === e.processing.toUpperCase() ? n.fetch().then(function() {
                t.model.environmentCollection.add(n), i.showSection("done").toggleCloseButton(!0).setDoneStatus(!0).close(5e3).setMessage("Your environment is ready for use")
              }, function() {
                i.showSection("done").toggleCloseButton(!0).setDoneStatus(!0).close(5e3).setMessage("Environment ready. Please reload the page to use it.")
              }) : i.showSection("done").toggleCloseButton(!0).setDoneStatus(!1).setMessage("Error while processing your environment")
            })
          })["catch"](function() {
            i.showSection("done").setDoneStatus(!1).toggleCloseButton(!0).setMessage("Error while uploading your environment")
          })
        },
        validateEnvironment: function(e) {
          var t = null,
            n = e.name.split(".").pop(),
            i = e.size;
          return f.environmentFiletypes.indexOf(n) === -1 && (t = "<b>" + e.name + "</b>: This file type (." + n + ") is not supported as an environment. Supported types are : " + f.environmentFiletypes.join(", ") + "."), i > f.maxEnvironmentFilesize && (t = "<b>" + e.name + "</b>: This file's size (" + (i / 1024 / 1024).toFixed(0) + "MB) is too big. Maximum supported size is " + (f.maxEnvironmentFilesize / 1024 / 1024).toFixed(0) + "MB."), t
        },
        getClosestBlur: function(e) {
          for (var t = e, n = v[0], i = 0, o = v.length; i < o; i++) {
            var r = Math.abs(e - v[i]);
            r < t && (t = r, n = v[i])
          }
          return n
        },
        onSyncCollection: function() {
          this._proxyCollection.reset(), this.model.getEnvironmentCollection().each(this.onAddedElement.bind(this)), this.model.checkEnvironmentValidity()
        },
        syncPreview: function() {
          var e = function() {
            if (this.model.get("uid")) {
              var e = this._proxyCollection.findWhere({
                value: this.model.get("uid")
              });
              e && this._imagePreviewModel.set("image", e.get("image"))
            }
          }.bind(this);
          e(), this._imagePreviewModel.listenTo(this.model, "change:uid", e)
        },
        onAddedElement: function(e) {
          var t = "",
            n = i.find(e.get("textures"), {
              type: "thumbnail"
            });
          n && n.images && (t = n.images[0].file), this._proxyCollection.add({
            label: e.get("name"),
            value: e.get("uid"),
            image: t,
            deletable: !e.get("isDefault")
          })
        }
      }))
    },
    1781: function(e, t, n) {
      "use strict";
      var i = n(241),
        o = n(444);
      n(601), e.exports = o.extend({
        template: function() {
          return i.getFromMacro("skfb_front/macros/notification_upload", "flashmessage_upload", [])
        },
        setProgress: function(e) {
          return "string" == typeof e ? this.$(".value").html(e) : this.$(".value").html(e.toFixed(0) + "%"), this
        },
        setMessage: function(e) {
          return this.$(".message").html(e), this
        },
        setDoneStatus: function(e) {
          return this.$(".done").toggleClass("error", !e), this
        },
        showSection: function(e) {
          return this.$("section.visible").removeClass("visible"), this.$("section." + e).addClass("visible"), this
        },
        toggleCloseButton: function(e) {
          return this.$(".flashmessage-close").toggleClass("visible", e), this
        }
      })
    },
    1782: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1783),
        r = {
          FeatureName: "materialUI",
          ModelName: "Material",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1783: function(e, t, n) {
      "use strict";
      var i = n(234),
        o = n(216),
        r = n(1484),
        a = n(258),
        s = n(247),
        l = n(1784),
        c = n(1785),
        u = n(1731),
        d = n(1791),
        h = n(1544),
        p = n(1545),
        g = n(1728),
        f = n(1788),
        m = function(e) {
          var t = p.get("mask"),
            n = t === p.PBR_LIT;
          if (e.set("mask", t), n) {
            var i = {
              noCopy: !0
            };
            e.set("selectWorkFlowMetalSpec", e.get("MetalnessPBR.enable") ? "metalness" : "specular", i), e.set("selectWorkFlowRoughGloss", e.get("RoughnessPBR.enable") ? "roughness" : "glossiness", i)
          }
        },
        v = function(e) {
          var t = {
              noCopy: !0
            },
            n = e.get("NormalMap.enable") || e.get("BumpMap.enable");
          e.set("NormalBump.value", e.get("BumpMap.enable") ? "BumpMap" : "NormalMap", t), e.set("NormalBump.enable", n)
        },
        b = function(e, t, n, i) {
          e.removeSignals();
          var r = n.get("material");
          if (r) {
            var a = o.find(i, function(e) {
              return e.get("id") === r
            });
            if (a) {
              var s = a.get("texCoordUnitList");
              return t.reset(), o.each(s, function(e) {
                var n = e.toString();
                t.add({
                  label: "UV " + n,
                  value: n
                })
              }), e.setModelMaterial(a), v(n), m(n), a
            }
          }
        },
        w = function(e, t, n) {
          var i = new s;
          i.comparator = function(e, t) {
            var n = e.get("label").toLowerCase(),
              i = t.get("label").toLowerCase();
            return l(n, i)
          };
          var o = n.map(function(e) {
            return {
              value: e.get("id"),
              label: e.get("name")
            }
          });
          i.set(o);
          var r = e.createWidget("Vertical", {
            withPadding: !0
          });
          r.createWidget(null, "Select", {
            model: t,
            name: "material",
            options: i,
            id: "MaterialSelect"
          })
        },
        x = function(e, t, n) {
          var i = e.createWidget(null, "Hyde", {
            model: t,
            name: "mask",
            id: "hydeMask",
            transform: function() {
              var e = p.get("mask");
              return e & p.PBR ? n & p.PBR : e & p.CLASSIC ? n & p.CLASSIC : n & p.MATCAP
            }
          });
          return i.createWidget(null, "ToggleChildren", {
            model: t,
            name: "mask",
            id: "toggleMask",
            transform: function() {
              return p.get("mask") & n
            }
          })
        },
        y = function(e, t, n, i, o, r) {
          var a = "NormalBump" === o ? "NormalMap" : o,
            s = x(e, t, h.getShadingMask(a)),
            l = s.createWidget("Group", {
              label: n,
              help: i,
              model: t,
              name: o + ".enable",
              opened: void 0 === r || r,
              id: o + "Group"
            });
          return l
        },
        k = function(e, t, n, i, o, r, a, s, l) {
          e.createWidget(a || null, "SlideredImage", {
            model: n,
            name: i,
            id: i + "SlideredImage",
            factoredImageOptions: {
              maxWidth: 32,
              maxHeight: 32,
              id: i + "FactoredImage",
              painter: s || "standard",
              imageOptions: {
                allowColor: void 0 === o || o,
                collection: t.proxyImageCollection,
                id: i + "Image",
                textureFormatOptions: h.getPossibleFormat(i),
                textureFilteringOptions: h.getPossibleFiltering(i)
              }
            },
            numberedSliderOptions: r || {
              minimum: 0,
              maximum: 100,
              id: i + "NumberedSlider"
            },
            help: l
          })
        },
        E = function(e, t, n, i) {
          var o = e.createWidget(null, "Hyde", {
            id: i + "TexCoordHyde"
          });
          n.on(i + ".original.displayUV", function(e) {
            o.model.set("value", t.length > 1 && e)
          }), o.createWidget(null, "Select", {
            model: n,
            name: i + ".original.texCoordUnit",
            options: t,
            id: i + "TexCoordSelect"
          })
        },
        _ = function(e, t, n, i) {
          var o = "DiffuseColor",
            r = "Color of the material",
            a = y(e, n, "Diffuse", r, o, !0);
          k(a, t, n, o), E(a, i, n, o)
        },
        T = function(e, t, n, i) {
          var o = "SpecularColor",
            r = "Color of the reflected light",
            a = y(e, n, "Specular", r, o, !0);
          k(a, t, n, o, !0, null, "Color"), E(a, i, n, o), o = "SpecularHardness", k(a, t, n, o, !1, {
            id: o + "NumberedSlider"
          }, "Glossiness", "glossiness"), E(a, i, n, o)
        },
        S = function(e, t, n, i) {
          var o = "Displacement",
            r = "Displace the vertices with a depth map",
            a = y(e, n, "Displacement", r, o, !1);
          k(a, t, n, o, !1), E(a, i, n, o)
        },
        C = function(e, t, n, i) {
          var o = "NormalMap",
            r = e.createWidget(null, "Hyde", {
              model: n,
              name: "NormalMap.enable",
              id: "NormalMapHyde"
            });
          k(r, t, n, o, !1), E(r, i, n, o), r.createWidget("Checkbox", {
            label: "Flip green (-Y)",
            model: n,
            name: "NormalMap.flipY",
            id: "NormalMapToggleSwitch"
          })
        },
        M = function(e, t, n, i) {
          var o = "BumpMap",
            r = e.createWidget(null, "Hyde", {
              model: n,
              name: "BumpMap.enable",
              id: "BumpMapHyde"
            });
          k(r, t, n, o, !1), E(r, i, n, o)
        },
        O = function(e, t, n, i) {
          var o = "NormalBump",
            r = "Use a texture to add bumps and dents",
            a = y(e, n, "Normal/Bump Map", r, o, !1);
          a.createWidget(null, "ToggleButton", {
            model: n,
            name: o + ".value",
            id: o + "Select",
            options: {
              NormalMap: "Normal Map",
              BumpMap: "Bump Map"
            }
          }), C(a, t, n, i), M(a, t, n, i)
        },
        F = function(e, t, n, i) {
          var o = "DiffuseIntensity",
            r = "Use a texture to simulate light and shadow impact on a material",
            a = y(e, n, "Lightmap", r, o, !1);
          k(a, t, n, o), E(a, i, n, o)
        },
        D = function(e, t, n, i) {
          var o = "Opacity",
            r = "Make the material transparent",
            a = y(e, n, "Transparency", r, o, !1);
          a.createWidget(null, "ToggleButton", {
            model: n,
            name: o + ".type",
            id: o + "TypeSelect",
            options: {
              alphaBlend: "Blending*",
              additive: "Additive*",
              dithering: "Dithered",
              alphaMask: "Mask"
            }
          }), k(a, t, n, o, !1, null, null, "transparency"), E(a, i, n, o);
          var s = a.createWidget("Horizontal");
          s.createWidget("Checkbox", {
            label: "Invert",
            model: n,
            name: "Opacity.invert",
            id: "OpacityInvertToggleSwitch"
          }), s.createWidget("Label", {
            className: "material-opacity-hint",
            content: "* does not cast shadow"
          })
        },
        W = function(e, t, n, i) {
          var o = "EmitColor",
            r = "Make the material glow",
            a = y(e, n, "Emission", r, o, !1);
          k(a, t, n, o), E(a, i, n, o)
        },
        L = function(e, t, n, i) {
          var o = "AOPBR",
            r = "Texture for large areas of occluded light",
            a = y(e, n, "Ambient Occlusion", r, o, !1);
          k(a, t, n, o, !1), E(a, i, n, o), a.createWidget("Checkbox", {
            label: "Occlude specular",
            model: n,
            name: "AOPBR.occludeSpecular",
            id: "AOPBRToggleSwitch"
          })
        },
        P = function(e, t, n, i) {
          var o = "CavityPBR",
            r = "Texture for small areas of occluded light",
            a = y(e, n, "Cavity", r, o, !1);
          k(a, t, n, o, !1), E(a, i, n, o)
        },
        A = function(e, t, n, i, o, r, a, s) {
          var l = x(e, n, h.getShadingMask(o)),
            c = l.createWidget(null, "Hyde", {
              model: n,
              name: o + ".enable"
            });
          k(c, t, n, o, r, null, a, null, s), E(c, i, n, o)
        },
        N = function(e, t, n, i) {
          var o = x(e, n, p.PBR_LIT | p.PBR_SHADELESS),
            r = o.createWidget("Group", {
              label: "PBR maps",
              help: "Main material characteristics",
              opened: !0,
              id: "PBRGroup"
            });
          r.createWidget("Workflow", "ToggleButton", {
            model: n,
            name: "selectWorkFlowMetalSpec",
            options: {
              metalness: "Metalness",
              specular: "Specular"
            }
          }), A(r, t, n, i, "AlbedoPBR", !0, "Base Color", "(s)RGB texture for reflected color for dielectrics or reflectance values for metals"), A(r, t, n, i, "MetalnessPBR", !1, "Metalness", "Linear grayscale texture for raw metal. Black means non-metal, white means raw metal"), A(r, t, n, i, "SpecularF0", !1, "Specular F0", "Linear grayscale texture for fresnel values for non-metal"), A(r, t, n, i, "DiffusePBR", !0, "Albedo", "(s)RGB texture for albedo color without reflectance values"), A(r, t, n, i, "SpecularPBR", !0, "Specular", "(s)RGB texture for reflectance values for metal and F0 for non metal")
        },
        I = function(e, t, n, i) {
          var o = x(e, n, p.PBR_LIT),
            r = o.createWidget("Group", {
              label: "Roughness/Glossiness",
              opened: !0,
              id: "RoughnessGroup",
              help: "Linear grayscale texture for describing surface irregularities"
            });
          r.createWidget(null, "ToggleButton", {
            model: n,
            name: "selectWorkFlowRoughGloss",
            options: {
              roughness: "Roughness",
              glossiness: "Glossiness"
            }
          }), A(r, t, n, i, "RoughnessPBR", !1, null), A(r, t, n, i, "GlossinessPBR", !1, null)
        },
        $ = function(e, t, n, o) {
          var r = new i.Model({
            environment: "none",
            formattedEnvironement: "Scene environment: none"
          });
          r.on("change:environment", function() {
            this.set("formattedEnvironement", "Scene environment: " + this.get("environment"))
          });
          var a = o.getFeatures().environment;
          if (a) {
            var s = a.getModel(),
              l = function() {
                r.set("environment", s.getEnvironment().get("name"))
              };
            s.listenTo(s, "change:uid", l), l()
          }
          var c = x(e, n, p.CLASSIC_LIT),
            u = c.createWidget("Group", {
              label: "Environmental Reflection",
              help: "Make the material reflect the current environment (like a mirror)",
              opened: !1,
              id: "ReflectionGroup"
            });
          u.createWidget("Label", {
            label: "Environment: none",
            model: r,
            name: "formattedEnvironement"
          }), u.createWidget(null, "NumberedSlider", {
            model: n,
            name: "reflection",
            id: "ReflectionNumberedSlider"
          })
        },
        R = function(e, t, n) {
          var i = e.createWidget("Group", {
            label: "Faces rendering",
            help: "Double sided: render both faces (slower). Single sided: render only front faces (best for 3D scans).",
            opened: !1,
            id: "CullFaceGroup"
          });
          i.createWidget(null, "ToggleButton", {
            model: n,
            name: "cullFace",
            options: {
              "double": "Double sided",
              single: "Single sided"
            },
            id: "CullFaceSelect"
          })
        },
        j = a.extend({
          initialize: function() {
            a.prototype.initialize.apply(this, arguments);
            var e = this.options.context;
            this._viewer = e.getViewer();
            var t = e.getWidgetAPI().getTab("Materials");
            r.getMaterial().then(this.buildMaterials.bind(this, t)), this.model.proxyImageCollection = new s, this.model.proxyImageCollection.on("change:colorSpace", function(e) {
              var t = e.get("value"),
                n = this.model.imageCollection.findWhere({
                  uid: t
                });
              n.set("colorSpace", e.get("colorSpace")), this.triggerSetTextureColorSpace(t)
            }.bind(this)), this.model.imageCollection.on("add", this.onAddedImageElement, this), this.model.imageCollection.on("change:uid", function(e, t) {
              this.model.proxyImageCollection.findWhere({
                value: e.previous("uid")
              }).set("value", t)
            }.bind(this)), this.onSyncImageCollection()
          },
          triggerSetTextureColorSpace: function(e) {
            for (var t = this.model.attributes, n = Object.keys(t), i = 0, o = n.length; i < o; ++i)
              for (var r = t[n[i]], a = r.getChannels(), s = Object.keys(a), l = 0, c = s.length; l < c; ++l) {
                var u = a[s[l]],
                  d = u.getTexture();
                d && d.getUID() === e && u.trigger("setTexture")
              }
          },
          buildMaterials: function(e) {
            var t = this._viewer.getOrCreateScene().getRoot().getMinimumBound().radius();
            f.functors["Displacement.factor"] = g.createXScale(t / 100);
            for (var n = this.model, r = o.values(n.toJSON()), a = {}, l = 0, u = h.length; l < u; ++l) {
              var d = h[l];
              a[d] = void 0, a[d + ".factor"] = 100, a[d + ".enable"] = !0;
              var v = d + ".original";
              a[v] = void 0, a[v + ".texCoordUnit"] = void 0, a[v + ".minFilter"] = void 0, a[v + ".internalFormat"] = void 0, a[v + ".wrapS"] = void 0, a[v + ".wrapT"] = void 0
            }
            var x = new i.Model(o.extend(a, {
              selectWorkFlowMetalSpec: "metalness",
              selectWorkFlowRoughGloss: "roughness",
              "NormalMap.flipY": !1,
              "AOPBR.occludeSpecular": !1,
              "Opacity.type": "alphaBlend",
              "Opacity.invert": !1,
              reflection: 100,
              cullFace: "double",
              "NormalBump.enable": !0,
              "NormalBump.value": "NormalMap",
              materials: n,
              material: r[0] ? r[0].get("id") : void 0
            }));
            n.uiModel = x;
            var y = new c(x),
              k = new s;
            p.bind("change:mask", m.bind(this, x)), x.on("change:material", function() {
              var e = b(y, k, x, r);
              n.trigger("displayOutline", e.get("stateSet"))
            }), this.initEvents(x), w(e, x, r), this.initGroups(e, n, x, k), b(y, k, x, r)
          },
          initEvents: function(e) {
            var t = this;
            e.on("uploadSelectEvent", this.onAddNewTexture.bind(this)), e.on("change:selectWorkFlowMetalSpec", function(n, i, o) {
              var r = "metalness" === i,
                a = !0,
                s = !o.noCopy;
              if (a) t.model.setWorkFlowMetalSpec(r, s);
              else {
                var l = t.model.get(e.get("material"));
                l.setWorkFlowMetalSpec(r, s)
              }
            }), e.on("change:selectWorkFlowRoughGloss", function(n, i, o) {
              var r = "roughness" === i,
                a = !1,
                s = !o.noCopy;
              if (a) t.model.setWorkFlowRoughGloss(r, s);
              else {
                var l = t.model.get(e.get("material"));
                l.setWorkFlowRoughGloss(r, s)
              }
            }), e.on("change:SpecularColor.enable", function(t, n) {
              e.set("SpecularHardness.enable", n)
            }), e.on("change:NormalBump.value", function(n, i, o) {
              var r = "NormalMap" === i ? "BumpMap" : "NormalMap";
              if (e.set(r + ".enable", !1), e.set(i + ".enable", !0), !o.noCopy) {
                var a = t.model.get(e.get("material"));
                a.copyDualChannel(i, r)
              }
            }), e.on("change:NormalBump.enable", function(t, n) {
              var i = "NormalMap" === e.get("NormalBump.value");
              e.set("NormalMap.enable", n && i), e.set("BumpMap.enable", n && !i)
            })
          },
          initGroups: function(e, t, n, i) {
            N(e, t, n, i), I(e, t, n, i), _(e, t, n, i), T(e, t, n, i), S(e, t, n, i), O(e, t, n, i), F(e, t, n, i), L(e, t, n, i), P(e, t, n, i), D(e, t, n, i), W(e, t, n, i), $(e, t, n, this.options.context), R(e, t, n)
          },
          getReadImageFile: function() {
            return this._readImageFile || u
          },
          onAddNewTexture: function(e) {
            var t = this,
              n = this.getReadImageFile()(e);
            return n.then(function(n) {
              var i = n.imageBlob || e,
                o = e.lastModifiedDate ? e.lastModifiedDate.getTime() : Date.now(),
                r = btoa(encodeURIComponent(e.size + i.name + o)),
                a = t.model.imageCollection.get("tmp_" + r);
              if (a) t.model.proxyImageCollection.trigger("duplicate", a);
              else {
                var s = t.model.imageCollection.addNewImage({
                  url: n.src,
                  width: n.naturalWidth,
                  height: n.naturalHeight,
                  id: r,
                  name: i.name
                });
                s.set("imageFile", i), n.imageModel = s
              }
            }), n
          },
          onSyncImageCollection: function() {
            this.model.imageCollection.each(this.onAddedImageElement.bind(this))
          },
          onAddedImageElement: function(e) {
            var t = e.get("images");
            if (t && t[0]) {
              var n, i = function(e, t) {
                var n = new Image;
                return n.imageModel = t, n.crossOrigin = "Anonymous", n.src = e, n
              };
              0 === this.model.proxyImageCollection.length && (n = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", this.model.proxyImageCollection.add({
                label: "None",
                value: "",
                image: n,
                imageModel: null,
                imageData: i(n, null),
                colorSpace: "unknown"
              })), n = e.findImageWidget().url;
              var o = i(n, e);
              e.get("uid").startsWith("tmp_") ? d(o, 128, 128).then(function(t) {
                this.model.proxyImageCollection.add({
                  label: e.get("name"),
                  value: e.get("uid") || e.get("id"),
                  image: t,
                  imageModel: e,
                  imageData: o,
                  colorSpace: "unknown"
                })
              }.bind(this)) : this.model.proxyImageCollection.add({
                label: e.get("name"),
                value: e.get("uid") || e.get("id"),
                image: n,
                imageModel: e,
                imageData: o,
                colorSpace: e.get("colorSpace")
              })
            }
          }
        });
      e.exports = j
    },
    1784: function(e, t) {
      "use strict";

      function n(e, t) {
        var i, o, r = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
          a = /(^[ ]*|[ ]*$)/g,
          s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
          l = /^0x[0-9a-f]+$/i,
          c = /^0/,
          u = function(e) {
            return n.insensitive && ("" + e).toLowerCase() || "" + e
          },
          d = u(e).replace(a, "") || "",
          h = u(t).replace(a, "") || "",
          p = d.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
          g = h.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
          f = parseInt(d.match(l)) || 1 !== p.length && d.match(s) && Date.parse(d),
          m = parseInt(h.match(l)) || f && h.match(s) && Date.parse(h) || null;
        if (m) {
          if (f < m) return -1;
          if (f > m) return 1
        }
        for (var v = 0, b = Math.max(p.length, g.length); v < b; v++) {
          if (i = !(p[v] || "").match(c) && parseFloat(p[v]) || p[v] || 0, o = !(g[v] || "").match(c) && parseFloat(g[v]) || g[v] || 0, isNaN(i) !== isNaN(o)) return isNaN(i) ? 1 : -1;
          if (typeof i != typeof o && (i += "", o += ""), i < o) return -1;
          if (i > o) return 1
        }
        return 0
      }
      e.exports = n
    },
    1785: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1786),
        r = n(1789),
        a = n(1787),
        s = function(e) {
          this._widget = e, this._signals = {}
        };
      s.prototype = {
        removeSignals: function() {
          i.each(this._signals, function(e) {
            e.removeSignals()
          })
        },
        extractFieldInformations: function(e, t) {
          var n = t.split("."),
            i = n[0],
            o = n[n.length - 1],
            r = e.get("channels")[i];
          return {
            channelName: i,
            attributeName: o,
            channel: r
          }
        },
        setModelMaterial: function(e) {
          if (e) {
            var t = this._widget,
              n = this._signals;
            i.each(this._widget.toJSON(), function(i, s) {
              var l = this.extractFieldInformations(e, s),
                c = l.channel;
              if (c) {
                var u = l.attributeName;
                "factor" === u ? n[s] = new o(s, c.getName(), t, c) : "original" === u ? n[s] = new r(s, t, c) : "type" !== u && "enable" !== u && "flipY" !== u && "occludeSpecular" !== u && "invert" !== u || (n[s] = new a(s, u, t, c))
              } else {
                var d = l.channelName;
                "reflection" !== d && "cullFace" !== d || (n[s] = new a(d, s, t, e))
              }
            }.bind(this))
          }
        }
      }, e.exports = s
    },
    1786: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1787),
        r = function(e, t, n, i) {
          this._isOpacity = "Opacity" === t, this._isOpacity && i.on("change:type", this.changeWidgetToModel.bind(this)), o.call(this, e, t, n, i)
        };
      r.prototype = i.extend({}, o.prototype, {
        connectSignalModelToWidget: function() {
          this._model.on("setFactor", this.changeModelToWidget, this)
        },
        removeSignalModelToWidget: function() {
          this._model.off("setFactor", this.changeModelToWidget)
        },
        changeModelToWidget: function() {
          var e = this._model.getFactor();
          this.removeSignalWidgetToModel(), this._isOpacity && "alphaMask" === this._model.get("type") && (e = 1 - e), this._widget.set(this._widgetField, this._func.modelToWidget(e)), this.connectSignalWidgetToModel()
        },
        changeWidgetToModel: function() {
          var e = this._widget.get(this._widgetField);
          this.removeSignalModelToWidget(), this._isOpacity && "alphaMask" === this._model.get("type") && (e = 100 - e), this._model.setFactor(this._func.widgetToModel(e)), this.connectSignalModelToWidget()
        }
      }), e.exports = r
    },
    1787: function(e, t, n) {
      "use strict";
      var i = n(1733),
        o = n(1788),
        r = function(e, t, n, r) {
          i.call(this, e, t, n, r, o.getFunctor(e))
        };
      r.prototype = i.prototype, e.exports = r
    },
    1788: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1200),
        r = n(1728),
        a = o.osg,
        s = i.invert(a.Texture),
        l = {};
      l["Opacity.factor"] = r.InversePerCent, l["SpecularHardness.factor"] = r.createScaleXPow(1e-4, 4), l["BumpMap.factor"] = l["EmitColor.factor"] = r.createXScale(.1), l["default"] = r.PassThrough, l["Opacity.type"] = r.PassThrough, l.factor = r.PerCent, l.reflection = r.PerCent, l.cullFace = {
        widgetToModel: function(e) {
          return "single" === e ? a.CullFace.BACK : a.CullFace.DISABLE
        },
        modelToWidget: function(e) {
          return e === a.CullFace.DISABLE ? "double" : "single"
        }
      }, l.textureOptions = {
        widgetToModel: function(e) {
          return a.Texture[e]
        },
        modelToWidget: function(e) {
          return s[e]
        }
      }, l.texCoordUnit = {
        widgetToModel: function(e) {
          return void 0 !== e ? parseInt(e, 10) : void 0
        },
        modelToWidget: function(e) {
          return void 0 !== e ? e.toString() : void 0
        }
      };
      var c = function(e) {
        var t = l[e];
        if (void 0 !== t) return t;
        var n = e.split("."),
          i = n[n.length - 1];
        return "factor" === i ? l.factor : "texCoordUnit" === i ? l.texCoordUnit : "minFilter" === i || "internalFormat" === i || "wrapS" === i || "wrapT" === i ? l.textureOptions : l["default"]
      };
      e.exports = {
        functors: l,
        getFunctor: c
      }
    },
    1789: function(e, t, n) {
      "use strict";
      var i = n(1533),
        o = n(1790),
        r = n(1562),
        a = n(1544),
        s = function(e, t, n) {
          this._field = e, this._widget = t, this._model = n, this._signalTexture = void 0, this.init()
        };
      s.prototype = {
        init: function() {
          var e = this._model.getTexture();
          this._signalTexture = e ? new o(this._field, this._widget, this._model) : void 0, this.connectSignalModelToWidget(), this.connectSignalWidgetToModel(), this.changeModelTextureToWidget(), this.changeModelColorToWidget()
        },
        removeSignals: function() {
          void 0 !== this._signalTexture && this._signalTexture.removeSignals(), this._model.off(null, this.changeModelTextureToWidget, this), this._model.off(null, this.changeModelColorToWidget, this), this._widget.off(null, this.changeWidgetToModel, this)
        },
        connectSignalModelToWidget: function() {
          this._model.on("setTexture", this.changeModelTextureToWidget, this), this._model.on("setColor", this.changeModelColorToWidget, this)
        },
        removeSignalModelToWidget: function() {
          this._model.off("setTexture", this.changeModelTextureToWidget), this._model.off("setColor", this.changeModelColorToWidget)
        },
        connectSignalWidgetToModel: function() {
          this._widget.on("change:" + this._field, this.changeWidgetToModel, this)
        },
        removeSignalWidgetToModel: function() {
          this._widget.off("change:" + this._field, this.changeWidgetToModel)
        },
        updateTextureSignals: function() {
          var e = !!this._model.getTexture();
          this._widget.trigger(this._field + ".displayUV", e), e && (this._signalTexture ? this._signalTexture.updateTexture() : this._signalTexture = new o(this._field, this._widget, this._model))
        },
        changeModelColorToWidget: function() {
          this.removeSignalWidgetToModel();
          var e = this._model.getColor();
          if (e) {
            e = r.linearToSrgb(e);
            var t = {
              r: e[0],
              g: e[1],
              b: e[2]
            };
            this._widget.set(this._field, t)
          }
          this.updateTextureSignals(), this.connectSignalWidgetToModel()
        },
        changeModelTextureToWidget: function() {
          var e = this._model.get("texture");
          if (e && e.getImage) {
            var t = e.getTextureProxy().getImageWidget().promise;
            t.then(function(e) {
              this.removeSignalWidgetToModel(), this._widget.set(this._field, e.getImage()), this.updateTextureSignals(), this.connectSignalWidgetToModel()
            }.bind(this))
          }
        },
        changeWidgetToModel: function() {
          this.removeSignalModelToWidget();
          var e = this._model,
            t = this._widget,
            n = t.get(this._field);
          if (n instanceof window.Image) {
            var o = e.getTexture(),
              s = !o;
            s ? o = new i({
              image: n.imageModel
            }) : o.setImage(n.imageModel), s && (1 !== e.getFactor() && e.setFactor(1), o.set("internalFormat", a.getDefaultFormat(e.getName())), o.updateTextureProxy()), e.setTexture(o)
          } else {
            var l = [n.r, n.g, n.b];
            e.setColor(r.srgbToLinear(l))
          }
          this.updateTextureSignals(), this.connectSignalModelToWidget()
        }
      }, e.exports = s
    },
    1790: function(e, t, n) {
      "use strict";
      var i = n(1200),
        o = n(216),
        r = n(1787),
        a = i.osg,
        s = function(e, t, n, i, o) {
          r.call(this, e, t, n, i), this._channel = o
        };
      s.prototype = o.extend({}, r.prototype, {
        updateTexture: function() {
          this.removeSignals(), this._model = this._channel.getTexture(), this.init()
        },
        changeWidgetToModel: function() {
          if (this._channel.getTexture()) {
            var e = this._widget.get(this._widgetField);
            this.removeSignalModelToWidget();
            var t = this._func.widgetToModel(e);
            this._model.set(this._modelField, t), "minFilter" === this._modelField && this._model.set("magFilter", t === a.Texture.LINEAR_MIPMAP_LINEAR ? a.Texture.LINEAR : t);
            var n = this._channel,
              i = n.getTexture();
            i.updateTextureProxy(), n.setTexture(i), this.connectSignalModelToWidget()
          }
        }
      });
      var l = function(e, t, n) {
        this._signals = [], this.init(e, t, n)
      };
      l.prototype = {
        init: function(e, t, n) {
          var i = n.getTexture(),
            o = this._signals;
          o.push(new s(e + ".texCoordUnit", "texCoordUnit", t, i, n)), o.push(new s(e + ".minFilter", "minFilter", t, i, n)), o.push(new s(e + ".internalFormat", "internalFormat", t, i, n)), o.push(new s(e + ".wrapS", "wrapS", t, i, n)), o.push(new s(e + ".wrapT", "wrapT", t, i, n))
        },
        updateTexture: function() {
          for (var e = this._signals, t = 0, n = this._signals.length; t < n; ++t) e[t].updateTexture()
        },
        removeSignals: function() {
          for (var e = this._signals, t = 0, n = this._signals.length; t < n; ++t) e[t].removeSignals()
        }
      }, e.exports = l
    },
    1791: function(e, t, n) {
      "use strict";
      var i = n(235),
        o = function(e, t, n) {
          var i = document.createElement("canvas");
          i.width = t, i.height = n;
          var o = i.getContext("2d");
          return o.drawImage(e, 0, 0, t, n), i.toDataURL()
        },
        r = function(e, t, n) {
          var r = i.defer();
          return e.complete ? r.resolve(o(e, t, n)) : (e.addEventListener("load", function() {
            r.resolve(o(e, t, n))
          }), e.addEventListener("error", function() {
            r.reject("Error loading image")
          })), r.promise
        };
      e.exports = r
    },
    1792: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1793),
        r = {
          FeatureName: "hotspotUI",
          ModelName: "Hotspot",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1793: function(e, t, n) {
      "use strict";
      var i = n(1794),
        o = n(1737),
        r = n(258),
        a = n(255),
        s = n(266);
      e.exports = r.extend({
        initialize: function() {
          r.prototype.initialize.apply(this, arguments);
          var e = this.options.context,
            t = e.getWidgetAPI();
          this.tab = t.getTab("Annotations"), this.initHotspots()
        },
        initHotspots: function() {
          var e = this.options.context,
            t = this.model.get("hotspots");
          t.on("beforeRemove", function(t, n) {
            var i = new s({
              title: "Delete annotation",
              text: ['Are you sure you want to delete this annotation: "' + n.get("name") + '"?'].join(" "),
              buttons: {
                "delete": !0,
                deleteLabel: "DELETE ANNOTATION",
                cancel: !0
              }
            });
            i.open().then(function() {
              a.annotationEditorDeleteButtonClicked(e.getModel().get("uid")), i.close(), t.resolve()
            }.bind(this), function() {
              i.close(), t.reject()
            }.bind(this))
          }.bind(this));
          var n = this.tab.createWidget("Hyde", {
              model: new i({
                collection: t,
                lookFor: !0
              })
            }),
            r = this.tab.createWidget("Hyde", {
              model: new i({
                collection: t,
                lookFor: !1
              })
            });
          this.infoTextWidget = n.createWidget(o.extend({
            el: ['<div class="widget custom-widget hotspot-infos">', '    <div class="widget-wrapper">', "        Double click on your model to create an annotation", "    </div>", "</div>"].join("")
          }), {}), r.createWidget("Repeat", {
            collection: t,
            sortable: {
              axis: "y",
              delay: 100
            },
            layout: "Vertical",
            widget: "Annotation"
          })
        }
      })
    },
    1794: function(e, t, n) {
      "use strict";
      var i = n(234);
      e.exports = i.Model.extend({
        initialize: function() {
          this.get("collection").on("add remove reset", this.refresh, this), this.refresh()
        },
        refresh: function() {
          var e = this.get("collection").isEmpty(),
            t = Boolean(this.get("lookFor"));
          this.set("value", e === t)
        }
      })
    },
    1797: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1798),
        r = {
          FeatureName: "animationUI",
          ModelName: "Animation",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1798: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1484),
        r = n(247),
        a = n(258),
        s = n(1737),
        l = n(241);
      n(1034), e.exports = a.extend({
        initialize: function() {
          a.prototype.initialize.apply(this, arguments), this.createTab(), o.getHasAnimation().then(function(e) {
            e ? this.initAnimations() : this.disableAnimations()
          }.bind(this))
        },
        createTab: function() {
          var e = this.options.context.getWidgetAPI();
          this.tab = e.getTab("Animation")
        },
        disableAnimations: function() {
          this.tab.createWidget(s.extend({
            el: l.get("skfb_front/partials/emptystates/editor-animations", {})
          }), {})
        },
        initAnimations: function() {
          var e = this.model.get("animations"),
            t = this.getCycleModeOptions(),
            n = new r([{
              value: .1,
              label: "x0.1"
            }, {
              value: .5,
              label: "x0.5"
            }, {
              value: 1,
              label: "x1.0"
            }, {
              value: 2,
              label: "x2.0"
            }]);
          this.settingsGroup = this.tab.createWidget("Group", {
            label: "Animation Settings",
            name: "settings",
            help: "General Animation Settings",
            id: "AnimationSettings",
            opened: !0
          }), this.cycleModeWidget = this.settingsGroup.createWidget("Cycle mode", "ToggleButton", {
            model: this.model,
            name: "cycleMode",
            id: "AnimationsCycleModeToggle",
            options: t
          }), this.settingsGroup.createWidget("Playback speed", "ToggleButton", {
            model: this.model,
            name: "speed",
            id: "AnimationsCycleModeToggle",
            options: n
          }), this.animationsGroup = this.tab.createWidget("Group", {
            label: "Animations",
            name: "animationslist",
            help: "Animations List",
            id: "AnimationsList",
            opened: !0
          }), this.animationsGroup.createWidget("Button", {
            className: "static-pose",
            text: "Static pose",
            model: this.model,
            event: "useStaticPose"
          }), this.animationsGroup.createWidget("Separator"), this.animationsGroup.createWidget("Repeat", {
            collection: e,
            sortable: {
              axis: "y",
              delay: 100,
              handle: void 0
            },
            layout: "Vertical",
            widget: "Animation"
          }), e.on("remove", function(e) {
            var t = this.model.get("animations"),
              n = this.cycleModeWidget.get(),
              o = i.map(this.getCycleModeOptions(), function(e, t) {
                return {
                  label: e,
                  value: t
                }
              });
            this.cycleModeWidget.options.options.reset(o), this.cycleModeWidget.resetOptions(), t.length <= 1 && "all" === n && this.cycleModeWidget.set("one"), 0 === t.length ? this.model.trigger("useStaticPose") : this.model.get("currentUID") === e.get("uid") && this.model.set("currentUID", t.at(0).get("uid"))
          }, this)
        },
        delegateEvents: function() {
          var e = this.model.get("animations");
          a.prototype.delegateEvents.apply(this, arguments), e.on("selected", function(e) {
            this.model.set("currentUID", e)
          }.bind(this)), this.model.on("change:currentUID", function() {
            var e = this.model.get("currentUID");
            this.animationsGroup.$el.find(".animation-widget").removeClass("playing"), this.animationsGroup.$el.find('.animation-widget[data-uid="' + e + '"]').addClass("playing")
          }.bind(this)), this.model.on("change:speed", function() {
            this.set("speed", parseFloat(this.get("speed"), 10), {
              silent: !0
            })
          }), this.model.on("useStaticPose", function() {
            this.animationsGroup.$el.find(".animation-widget").removeClass("playing"), this.model.set("currentUID", "-1")
          }.bind(this))
        },
        getCycleModeOptions: function() {
          var e = this.model.get("animations"),
            t = {
              one: "Cycle one"
            };
          return e.length > 1 && (t.all = "Cycle all"), t.none = "No cycle", t
        }
      })
    },
    1799: function(e, t, n) {
      "use strict";
      var i = n(1197),
        o = n(1800),
        r = {
          FeatureName: "webVRUI",
          ModelName: "WebVR",
          ViewListType: [o]
        };
      e.exports = i.create(r)
    },
    1800: function(e, t, n) {
      "use strict";
      var i = n(238),
        o = n(258);
      e.exports = o.extend({
        initialize: function() {
          o.prototype.initialize.apply(this, arguments);
          var e = this.options.context.getWidgetAPI(),
            t = e.getTab("VR");
          this.model.on("vrReady", this.buildWebVR.bind(this, t))
        },
        buildWebVR: function(e) {
          this.buildScaleGroup(e), this.buildFloorGroup(e), this.buildHintGroup(e), this.buildBackgroundGroup(e)
        },
        buildScaleGroup: function(e) {
          var t = e.createWidget("Group", {
              label: "WORLD SCALE",
              id: "ScaleGroup"
            }),
            i = this.model,
            o = i.get("worldFactor"),
            r = Math.min(i.get("boundingBox").radius(), i.get("boundingSphere").radius()),
            a = .001 * r,
            s = 10 * r;
          t.createWidget("Scale", "NumberedSlider", {
            model: i,
            name: "worldFactor",
            minimum: a,
            maximum: s,
            step: (s - a) / 1e3,
            numberOptions: {
              decimals: Math.abs(o) < 1 ? 6 : 2
            }
          });
          var l = t.createWidget("Horizontal");
          a <= 1 && s >= 1 && l.createWidget("Button", {
            text: "USE 1 UNIT = 1 METER",
            className: "button-scale-unit-meter"
          }).model.on("click", function() {
            i.set("worldFactor", 1)
          });
          var c = i.get("worldFactor");
          l.createWidget("Button", {
            text: "RESET SCALE",
            className: "button-scale-reset"
          }).model.on("click", function() {
            i.set("worldFactor", c)
          }), t.createWidget("Label", {
            content: ["<label>Tips for world scale</label>", '<div class="content">', '   <div class="left">Character is 1.75m tall. A floor tile is 1m<sup>2</sup>.</div>', "</div>", '<div class="content">', '   <div class="left">', '       <div class="image">', '           <img src="' + n(1801) + '">', "       </div>", '       <div class="text">A smaller world makes your model look larger</div>', "   </div>", '   <div class="right">', '       <div class="image">', '           <img src="' + n(1802) + '">', "       </div>", '       <div class="text">A large world makes your model look smaller</div>', "   </div>", "</div>"].join(""),
            escape: !1,
            className: "label-widget-custom world-scale"
          })
        },
        buildFloorGroup: function(e) {
          var t = this.model,
            i = e.createWidget("Group", {
              label: "FLOOR LEVEL",
              id: "FloorGroup"
            }),
            o = t.get("boundingBox"),
            r = o.getMin()[2],
            a = o.getMax()[2],
            s = r,
            l = r - 5 * (a - r),
            c = s,
            u = {
              widgetToModel: function(e) {
                return e * t.get("worldFactor") + c
              },
              modelToWidget: function(e) {
                return (e - c) / t.get("worldFactor")
              }
            },
            d = i.createWidget("Level", "NumberedSlider", {
              model: t,
              name: "floorHeight",
              minimum: l,
              maximum: s,
              disableMaximum: !1,
              disableMinimum: !0,
              step: (s - l) / 1e3,
              infinite: !0,
              numberOptions: {
                renderValue: u.modelToWidget,
                inputValue: u.widgetToModel,
                decimals: 2,
                unit: "m"
              }
            });
          t.on("change:worldFactor", d.number.render.bind(d.number)), i.createWidget("Label", {
            content: ["<label>Tips for floor level</label>", '<div class="content">', '   <div class="left">', '       <div class="image">', '           <img src="' + n(1803) + '">', "       </div>", '       <div class="text">Position the floor right below large models</div>', "   </div>", '   <div class="right">', '       <div class="image">', '           <img src="' + n(1804) + '">', "       </div>", '       <div class="text">Position the floor further down for smaller objects</div>', "   </div>", "</div>"].join(""),
            escape: !1,
            className: "label-widget-custom floor-height"
          })
        },
        buildHintGroup: function(e) {
          var t = this.model,
            n = e.createWidget("Group", {
              label: "INITIAL VIEWING POSITION",
              id: "initialViewingGroup"
            }),
            i = n.createWidget("Hyde", {
              model: t,
              name: "humanInAir"
            }),
            o = i.createWidget("Panel", {
              label: "Warning"
            });
          o.createWidget("Label", {
            content: ['<div class="content">', '   <div class="text">', '       <span class="icon fa fa-exclamation-triangle"></span>', "       <span>The character is floating in the air. This can cause discomfort for people viewing in VR.</span>", "   </div>", "</div>"].join(""),
            escape: !1,
            className: "label-widget-custom warning"
          }), o.createWidget("Button", {
            text: "Move to floor",
            className: "button-snap-floor",
            type: "btn-important"
          }).model.on("click", function() {
            t.trigger("snapHumanOnFloor")
          }), n.createWidget("Label", {
            content: ["<label>Tips for initial viewing position</label>", '<div class="content">', '   <div class="left">', "       Move the character to set the initial viewing position in VR.</br>", "       Double-click in the scene to quickly set the position.", "   </div>", "</div>"].join(""),
            escape: !1,
            className: "label-widget-custom info"
          })
        },
        buildBackgroundGroup: function(e) {
          var t = this.options.context.getFeatures().background.getModel(),
            n = new i,
            o = function() {
              var e = "color" === t.get("enable"),
                i = "environment" === t.get("enable");
              n.set({
                isVRCompatible: e || i,
                isColor: e,
                isEnvironment: i
              })
            };
          o(), this.listenTo(t, "change", o);
          var r = e.createWidget(null, "ToggleChildren", {
              model: n,
              name: "isVRCompatible",
              id: "vrBackgroundToggle"
            }),
            a = r.createWidget("Group", {
              label: "Background",
              id: "VrBackgroundGroup"
            });
          a.createWidget("ToggleSwitch", {
            label: "Use background for VR",
            model: t,
            name: "enableVR"
          });
          var s = a.createWidget("Hyde", {
            model: n,
            name: "isColor"
          });
          s.createWidget("Label", {
            content: ["<label>Tips for background color</label>", '<div class="content">', "   Avoid extremely bright color that can cause discomfort in virtual reality", "</div>"],
            escape: !1,
            className: "label-widget-custom info"
          });
          var l = a.createWidget("Hyde", {
            model: this.backgroundGroupState,
            name: "isEnvironment"
          });
          l.createWidget("Label", {
            content: ["<label>Tips for background environments</label>", '<div class="content">', "   Avoid environments that show objects close to the camera.", "   They break the sense of scale and can cause discomfort in virtual reality.", "   Make sure to check your environment in VR.", "</div>"],
            escape: !1,
            className: "label-widget-custom info"
          })
        }
      })
    },
    1801: function(e, t, n) {
      e.exports = n.p + "editor-vr-tips_0003_scale-small-26a334bdb199cd031a2119f1926cd2f0.png"
    },
    1802: function(e, t, n) {
      e.exports = n.p + "editor-vr-tips_0002_scale-large-ce7ab09ba7ccf221c8e893fc00292a84.png"
    },
    1803: function(e, t, n) {
      e.exports = n.p + "editor-vr-tips_0001_floor-large-c41e2934a9147b91f463319528f80558.png"
    },
    1804: function(e, t, n) {
      e.exports = n.p + "editor-vr-tips_0000_floor-small-15e11921281380a6aef3591c0e0f80d5.png"
    },
    1843: function(e, t, n) {
      "use strict";
      var i = n(220),
        o = n(1844),
        r = function(e) {
          this._defaultTab = e, this._api = void 0, this._content = {}, this.start()
        };
      r.prototype = {
        start: function() {
          this._api = o.start({
            rootContainer: i(".editor-panel"),
            popupContainer: i(".editor")
          }), this._api.$el.addClass("expand"), this._tabbedWidget = this._api.createWidget("Tabbed"), this._tabbedWidget.$el.addClass("expand"), this._tabs = {}, void 0 !== this._defaultTab && this._tabbedWidget.set(this._defaultTab)
        },
        getAPI: function() {
          return this._api
        },
        getContent: function() {
          return this._content
        },
        getTabbedWidget: function() {
          return this._tabbedWidget
        },
        getTab: function(e) {
          return void 0 === this._tabs[e] && (this._tabs[e] = this.getTabbedWidget().createPanel(e, {
            name: e.toLowerCase(),
            withMargins: !1
          })), this._tabs[e]
        },
        getGeneralGroup: function() {
          if (void 0 === this._groupGeneral) {
            var e = this.getTab("Scene");
            this._groupGeneral = e.createWidget("Group", {
              label: "General"
            })
          }
          return this._groupGeneral
        }
      }, e.exports = r
    },
    1844: function(e, t, n) {
      "use strict";
      var i = n(216),
        o = n(1735);
      n(1738), e.exports = {
        start: function(e, t) {
          var n = o.reify(null, i.extend({
            environment: i.extend({}, e, {
              popupStack: []
            })
          }, t));
          return e.rootContainer && n.$el.appendTo(e.rootContainer), n
        }
      }
    },
    1845: function(e, t, n) {
      "use strict";
      var i = n(235),
        o = n(220),
        r = n(1467),
        a = n(383),
        s = function() {
          var e = r(),
            t = e.hook_prod,
            s = e.hook_beta,
            l = e.hook_staging,
            c = e.hook_processingvm1;
          if (s || t || l || c) {
            var u = "https://";
            s && (u += "beta."), u += l ? "staging.fatvertex.com" : c ? "processingvm1.fatvertex.com" : "sketchfab.com";
            var d, h = window.prefetchedData,
              p = function(e, t) {
                var n = u + t,
                  i = h[n];
                if (i) return !0;
                var o = new e;
                o.url = function() {
                  return n
                };
                var r = o.fetch();
                return r.then(function(e) {
                  h[t] = h[n] = e
                }), r
              };
            a.get = function(e) {
              return new i(function(t) {
                ! function() {
                  var r = n(1471),
                    s = n(1610),
                    l = n(1631);
                  if (d) return t(d);
                  var c = o.get(u + "/i/models/" + e),
                    h = p(r, "/i/models/" + e + "/textures"),
                    g = p(r, "/i/models/" + e + "/hotspots"),
                    f = p(r, "/i/models/" + e + "/animations");
                  return i.all([c, g, h, f]).then(function(e) {
                    d = new a(e[0]);
                    var n = e[0].user.uid,
                      o = p(s, "/i/users/" + n + "/environments"),
                      r = p(l, "/i/users/" + n + "/backgrounds");
                    return i.all([o, r]).then(function() {
                      t(d)
                    })
                  })
                }(n)
              })
            }
          }
        };
      e.exports = s
    }
  })
});
//# sourceMappingURL=editor-91a83288a5aafa21993a.js.map