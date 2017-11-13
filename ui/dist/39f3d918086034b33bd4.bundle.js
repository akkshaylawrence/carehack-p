webpackJsonp(
  [0],
  [
    function(t, e, n) {
      var i = n(25)("wks"),
        o = n(11),
        r = n(1).Symbol,
        s = "function" == typeof r;
      (t.exports = function(t) {
        return i[t] || (i[t] = (s && r[t]) || (s ? r : o)("Symbol." + t));
      }).store = i;
    },
    function(t, e) {
      var n = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
      "number" == typeof __g && (__g = n);
    },
    function(t, e) {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function(t, e, n) {
      t.exports = !n(12)(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    function(t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function(t, e) {
        return n.call(t, e);
      };
    },
    function(t, e, n) {
      var i = n(1),
        o = n(6),
        r = n(4),
        s = n(11)("src"),
        a = Function.toString,
        l = ("" + a).split("toString");
      (n(9).inspectSource = function(t) {
        return a.call(t);
      }),
        (t.exports = function(t, e, n, a) {
          var u = "function" == typeof n;
          u && (r(n, "name") || o(n, "name", e)),
            t[e] !== n &&
              (u && (r(n, s) || o(n, s, t[e] ? "" + t[e] : l.join(String(e)))),
              t === i
                ? (t[e] = n)
                : a
                  ? t[e] ? (t[e] = n) : o(t, e, n)
                  : (delete t[e], o(t, e, n)));
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && this[s]) || a.call(this);
        });
    },
    function(t, e, n) {
      var i = n(7),
        o = n(15);
      t.exports = n(3)
        ? function(t, e, n) {
            return i.f(t, e, o(1, n));
          }
        : function(t, e, n) {
            return (t[e] = n), t;
          };
    },
    function(t, e, n) {
      var i = n(8),
        o = n(26),
        r = n(28),
        s = Object.defineProperty;
      e.f = n(3)
        ? Object.defineProperty
        : function(t, e, n) {
            if ((i(t), (e = r(e, !0)), i(n), o))
              try {
                return s(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    function(t, e, n) {
      var i = n(2);
      t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function(t, e) {
      var n = (t.exports = { version: "2.5.1" });
      "number" == typeof __e && (__e = n);
    },
    function(t, e) {
      t.exports = {};
    },
    function(t, e) {
      var n = 0,
        i = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++n + i).toString(36)
        );
      };
    },
    function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function(t, e, n) {
      var i = n(53);
      t.exports = function(t, e, n) {
        if ((i(t), void 0 === e)) return t;
        switch (n) {
          case 1:
            return function(n) {
              return t.call(e, n);
            };
          case 2:
            return function(n, i) {
              return t.call(e, n, i);
            };
          case 3:
            return function(n, i, o) {
              return t.call(e, n, i, o);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    function(t, e, n) {
      var i = n(57),
        o = n(17);
      t.exports = function(t) {
        return i(o(t));
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    },
    function(t, e) {
      var n = Math.ceil,
        i = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(52),
        o = n(30),
        r = n(5),
        s = n(6),
        a = n(4),
        l = n(10),
        u = n(54),
        c = n(20),
        h = n(61),
        f = n(0)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function() {
          return this;
        };
      t.exports = function(t, e, n, m, g, v, y) {
        u(n, e, m);
        var w,
          b,
          x,
          k = function(t) {
            if (!d && t in E) return E[t];
            switch (t) {
              case "keys":
              case "values":
                return function() {
                  return new n(this, t);
                };
            }
            return function() {
              return new n(this, t);
            };
          },
          $ = e + " Iterator",
          _ = "values" == g,
          T = !1,
          E = t.prototype,
          S = E[f] || E["@@iterator"] || (g && E[g]),
          A = S || k(g),
          C = g ? (_ ? k("entries") : A) : void 0,
          I = "Array" == e ? E.entries || S : S;
        if (
          (I &&
            (x = h(I.call(new t()))) !== Object.prototype &&
            x.next &&
            (c(x, $, !0), i || a(x, f) || s(x, f, p)),
          _ &&
            S &&
            "values" !== S.name &&
            ((T = !0),
            (A = function() {
              return S.call(this);
            })),
          (i && !y) || (!d && !T && E[f]) || s(E, f, A),
          (l[e] = A),
          (l[$] = p),
          g)
        )
          if (
            ((w = {
              values: _ ? A : k("values"),
              keys: v ? A : k("keys"),
              entries: C
            }),
            y)
          )
            for (b in w) b in E || r(E, b, w[b]);
          else o(o.P + o.F * (d || T), e, w);
        return w;
      };
    },
    function(t, e, n) {
      var i = n(25)("keys"),
        o = n(11);
      t.exports = function(t) {
        return i[t] || (i[t] = o(t));
      };
    },
    function(t, e, n) {
      var i = n(7).f,
        o = n(4),
        r = n(0)("toStringTag");
      t.exports = function(t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), r) &&
          i(t, r, { configurable: !0, value: e });
      };
    },
    function(t, e, n) {
      var i = n(2);
      t.exports = function(t, e) {
        if (!i(t) || t._t !== e)
          throw TypeError("Incompatible receiver, " + e + " required!");
        return t;
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(23),
        o = {};
      (o[n(0)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          n(5)(
            Object.prototype,
            "toString",
            function() {
              return "[object " + i(this) + "]";
            },
            !0
          );
    },
    function(t, e, n) {
      var i = n(24),
        o = n(0)("toStringTag"),
        r =
          "Arguments" ==
          i(
            (function() {
              return arguments;
            })()
          ),
        s = function(t, e) {
          try {
            return t[e];
          } catch (t) {}
        };
      t.exports = function(t) {
        var e, n, a;
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" == typeof (n = s((e = Object(t)), o))
              ? n
              : r
                ? i(e)
                : "Object" == (a = i(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : a;
      };
    },
    function(t, e) {
      var n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    function(t, e, n) {
      var i = n(1),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
      t.exports = function(t) {
        return o[t] || (o[t] = {});
      };
    },
    function(t, e, n) {
      t.exports =
        !n(3) &&
        !n(12)(function() {
          return (
            7 !=
            Object.defineProperty(n(27)("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(t, e, n) {
      var i = n(2),
        o = n(1).document,
        r = i(o) && i(o.createElement);
      t.exports = function(t) {
        return r ? o.createElement(t) : {};
      };
    },
    function(t, e, n) {
      var i = n(2);
      t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !i((o = n.call(t))))
          return o;
        if ("function" == typeof (n = t.valueOf) && !i((o = n.call(t))))
          return o;
        if (!e && "function" == typeof (n = t.toString) && !i((o = n.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(51)(!0);
      n(18)(
        String,
        "String",
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            e = this._t,
            n = this._i;
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function(t, e, n) {
      var i = n(1),
        o = n(9),
        r = n(6),
        s = n(5),
        a = n(13),
        l = function(t, e, n) {
          var u,
            c,
            h,
            f,
            d = t & l.F,
            p = t & l.G,
            m = t & l.S,
            g = t & l.P,
            v = t & l.B,
            y = p ? i : m ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
            w = p ? o : o[e] || (o[e] = {}),
            b = w.prototype || (w.prototype = {});
          p && (n = e);
          for (u in n)
            (c = !d && y && void 0 !== y[u]),
              (h = (c ? y : n)[u]),
              (f =
                v && c
                  ? a(h, i)
                  : g && "function" == typeof h ? a(Function.call, h) : h),
              y && s(y, u, h, t & l.U),
              w[u] != h && r(w, u, f),
              g && b[u] != h && (b[u] = h);
        };
      (i.core = o),
        (l.F = 1),
        (l.G = 2),
        (l.S = 4),
        (l.P = 8),
        (l.B = 16),
        (l.W = 32),
        (l.U = 64),
        (l.R = 128),
        (t.exports = l);
    },
    function(t, e, n) {
      var i = n(8),
        o = n(55),
        r = n(34),
        s = n(19)("IE_PROTO"),
        a = function() {},
        l = function() {
          var t,
            e = n(27)("iframe"),
            i = r.length;
          for (
            e.style.display = "none",
              n(60).appendChild(e),
              e.src = "javascript:",
              t = e.contentWindow.document,
              t.open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              l = t.F;
            i--;

          )
            delete l.prototype[r[i]];
          return l();
        };
      t.exports =
        Object.create ||
        function(t, e) {
          var n;
          return (
            null !== t
              ? ((a.prototype = i(t)),
                (n = new a()),
                (a.prototype = null),
                (n[s] = t))
              : (n = l()),
            void 0 === e ? n : o(n, e)
          );
        };
    },
    function(t, e, n) {
      var i = n(56),
        o = n(34);
      t.exports =
        Object.keys ||
        function(t) {
          return i(t, o);
        };
    },
    function(t, e, n) {
      var i = n(16),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0;
      };
    },
    function(t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function(t, e, n) {
      for (
        var i = n(63),
          o = n(32),
          r = n(5),
          s = n(1),
          a = n(6),
          l = n(10),
          u = n(0),
          c = u("iterator"),
          h = u("toStringTag"),
          f = l.Array,
          d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          p = o(d),
          m = 0;
        m < p.length;
        m++
      ) {
        var g,
          v = p[m],
          y = d[v],
          w = s[v],
          b = w && w.prototype;
        if (b && (b[c] || a(b, c, f), b[h] || a(b, h, v), (l[v] = f), y))
          for (g in i) b[g] || r(b, g, i[g], !0);
      }
    },
    function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t };
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(7).f,
        o = n(31),
        r = n(38),
        s = n(13),
        a = n(39),
        l = n(40),
        u = n(18),
        c = n(36),
        h = n(69),
        f = n(3),
        d = n(41).fastKey,
        p = n(21),
        m = f ? "_s" : "size",
        g = function(t, e) {
          var n,
            i = d(e);
          if ("F" !== i) return t._i[i];
          for (n = t._f; n; n = n.n) if (n.k == e) return n;
        };
      t.exports = {
        getConstructor: function(t, e, n, u) {
          var c = t(function(t, i) {
            a(t, c, e, "_i"),
              (t._t = e),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[m] = 0),
              void 0 != i && l(i, n, t[u], t);
          });
          return (
            r(c.prototype, {
              clear: function() {
                for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n)
                  (i.r = !0), i.p && (i.p = i.p.n = void 0), delete n[i.i];
                (t._f = t._l = void 0), (t[m] = 0);
              },
              delete: function(t) {
                var n = p(this, e),
                  i = g(n, t);
                if (i) {
                  var o = i.n,
                    r = i.p;
                  delete n._i[i.i],
                    (i.r = !0),
                    r && (r.n = o),
                    o && (o.p = r),
                    n._f == i && (n._f = o),
                    n._l == i && (n._l = r),
                    n[m]--;
                }
                return !!i;
              },
              forEach: function(t) {
                p(this, e);
                for (
                  var n,
                    i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (i(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function(t) {
                return !!g(p(this, e), t);
              }
            }),
            f &&
              i(c.prototype, "size", {
                get: function() {
                  return p(this, e)[m];
                }
              }),
            c
          );
        },
        def: function(t, e, n) {
          var i,
            o,
            r = g(t, e);
          return (
            r
              ? (r.v = n)
              : ((t._l = r = {
                  i: (o = d(e, !0)),
                  k: e,
                  v: n,
                  p: (i = t._l),
                  n: void 0,
                  r: !1
                }),
                t._f || (t._f = r),
                i && (i.n = r),
                t[m]++,
                "F" !== o && (t._i[o] = r)),
            t
          );
        },
        getEntry: g,
        setStrong: function(t, e, n) {
          u(
            t,
            e,
            function(t, n) {
              (this._t = p(t, e)), (this._k = n), (this._l = void 0);
            },
            function() {
              for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
              return t._t && (t._l = n = n ? n.n : t._t._f)
                ? "keys" == e
                  ? c(0, n.k)
                  : "values" == e ? c(0, n.v) : c(0, [n.k, n.v])
                : ((t._t = void 0), c(1));
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            h(e);
        }
      };
    },
    function(t, e, n) {
      var i = n(5);
      t.exports = function(t, e, n) {
        for (var o in e) i(t, o, e[o], n);
        return t;
      };
    },
    function(t, e) {
      t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || (void 0 !== i && i in t))
          throw TypeError(n + ": incorrect invocation!");
        return t;
      };
    },
    function(t, e, n) {
      var i = n(13),
        o = n(66),
        r = n(67),
        s = n(8),
        a = n(33),
        l = n(68),
        u = {},
        c = {},
        e = (t.exports = function(t, e, n, h, f) {
          var d,
            p,
            m,
            g,
            v = f
              ? function() {
                  return t;
                }
              : l(t),
            y = i(n, h, e ? 2 : 1),
            w = 0;
          if ("function" != typeof v) throw TypeError(t + " is not iterable!");
          if (r(v)) {
            for (d = a(t.length); d > w; w++)
              if (
                (g = e ? y(s((p = t[w]))[0], p[1]) : y(t[w])) === u ||
                g === c
              )
                return g;
          } else
            for (m = v.call(t); !(p = m.next()).done; )
              if ((g = o(m, y, p.value, e)) === u || g === c) return g;
        });
      (e.BREAK = u), (e.RETURN = c);
    },
    function(t, e, n) {
      var i = n(11)("meta"),
        o = n(2),
        r = n(4),
        s = n(7).f,
        a = 0,
        l =
          Object.isExtensible ||
          function() {
            return !0;
          },
        u = !n(12)(function() {
          return l(Object.preventExtensions({}));
        }),
        c = function(t) {
          s(t, i, { value: { i: "O" + ++a, w: {} } });
        },
        h = function(t, e) {
          if (!o(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!r(t, i)) {
            if (!l(t)) return "F";
            if (!e) return "E";
            c(t);
          }
          return t[i].i;
        },
        f = function(t, e) {
          if (!r(t, i)) {
            if (!l(t)) return !0;
            if (!e) return !1;
            c(t);
          }
          return t[i].w;
        },
        d = function(t) {
          return u && p.NEED && l(t) && !r(t, i) && c(t), t;
        },
        p = (t.exports = {
          KEY: i,
          NEED: !1,
          fastKey: h,
          getWeak: f,
          onFreeze: d
        });
    },
    function(t, e, n) {
      "use strict";
      var i = n(1),
        o = n(30),
        r = n(5),
        s = n(38),
        a = n(41),
        l = n(40),
        u = n(39),
        c = n(2),
        h = n(12),
        f = n(70),
        d = n(20),
        p = n(71);
      t.exports = function(t, e, n, m, g, v) {
        var y = i[t],
          w = y,
          b = g ? "set" : "add",
          x = w && w.prototype,
          k = {},
          $ = function(t) {
            var e = x[t];
            r(
              x,
              t,
              "delete" == t
                ? function(t) {
                    return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                  ? function(t) {
                      return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
                    }
                  : "get" == t
                    ? function(t) {
                        return v && !c(t)
                          ? void 0
                          : e.call(this, 0 === t ? 0 : t);
                      }
                    : "add" == t
                      ? function(t) {
                          return e.call(this, 0 === t ? 0 : t), this;
                        }
                      : function(t, n) {
                          return e.call(this, 0 === t ? 0 : t, n), this;
                        }
            );
          };
        if (
          "function" == typeof w &&
          (v ||
            (x.forEach &&
              !h(function() {
                new w().entries().next();
              })))
        ) {
          var _ = new w(),
            T = _[b](v ? {} : -0, 1) != _,
            E = h(function() {
              _.has(1);
            }),
            S = f(function(t) {
              new w(t);
            }),
            A =
              !v &&
              h(function() {
                for (var t = new w(), e = 5; e--; ) t[b](e, e);
                return !t.has(-0);
              });
          S ||
            ((w = e(function(e, n) {
              u(e, w, t);
              var i = p(new y(), e, w);
              return void 0 != n && l(n, g, i[b], i), i;
            })),
            (w.prototype = x),
            (x.constructor = w)),
            (E || A) && ($("delete"), $("has"), g && $("get")),
            (A || T) && $(b),
            v && x.clear && delete x.clear;
        } else
          (w = m.getConstructor(e, t, g, b)), s(w.prototype, n), (a.NEED = !0);
        return (
          d(w, t),
          (k[t] = w),
          o(o.G + o.W + o.F * (w != y), k),
          v || m.setStrong(w, t, g),
          w
        );
      };
    },
    function(t, e, n) {
      "use strict";
      n(44);
      var i = n(45);
      !(function(t) {
        t && t.__esModule;
      })(i);
      n(50),
        n(75),
        "serviceWorker" in navigator &&
          window.addEventListener("load", function() {
            navigator.serviceWorker
              .register("/sw.js")
              .then(function(t) {}, function(t) {});
          });
    },
    function(t, e) {},
    function(t, e, n) {
      (function(e) {
        /*! UIkit 3.0.0-beta.34 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */
        !(function(e, n) {
          t.exports = n();
        })(0, function() {
          "use strict";
          function t(t) {
            (this.state = Ye), (this.value = void 0), (this.deferred = []);
            var e = this;
            try {
              t(
                function(t) {
                  e.resolve(t);
                },
                function(t) {
                  e.reject(t);
                }
              );
            } catch (t) {
              e.reject(t);
            }
          }
          function n(t, e) {
            return function(n) {
              var i = arguments.length;
              return i
                ? i > 1 ? t.apply(e, arguments) : t.call(e, n)
                : t.call(e);
            };
          }
          function i(t, e) {
            return Ke.call(t, e);
          }
          function o(t) {
            return t.replace(Qe, function(t, e) {
              return e ? e.toUpperCase() : "";
            });
          }
          function r(t) {
            return t.replace(tn, "$1-$2").toLowerCase();
          }
          function s(t) {
            return t.replace(en, a);
          }
          function a(t, e) {
            return e ? e.toUpperCase() : "";
          }
          function l(t) {
            return t.length ? a(null, t.charAt(0)) + t.slice(1) : "";
          }
          function u(t, e) {
            return on.call(t, e);
          }
          function c(t, e) {
            return rn.call(t, e);
          }
          function h(t, e) {
            return t && (y(t) ? an : ln).call(t, e);
          }
          function f(t) {
            return "function" == typeof t;
          }
          function d(t) {
            return null !== t && "object" == typeof t;
          }
          function p(t) {
            return d(t) && Object.getPrototypeOf(t) === Object.prototype;
          }
          function m(t) {
            return d(t) && t === t.window;
          }
          function g(t) {
            return d(t) && 9 === t.nodeType;
          }
          function v(t) {
            return "boolean" == typeof t;
          }
          function y(t) {
            return "string" == typeof t;
          }
          function w(t) {
            return "number" == typeof t;
          }
          function b(t) {
            return w(t) || (y(t) && !isNaN(t - parseFloat(t)));
          }
          function x(t) {
            return void 0 === t;
          }
          function k(t) {
            return v(t)
              ? t
              : "true" === t ||
                  "1" === t ||
                  "" === t ||
                  ("false" !== t && "0" !== t && t);
          }
          function _(t) {
            var e = Number(t);
            return !isNaN(e) && e;
          }
          function T(t) {
            return parseFloat(t) || 0;
          }
          function E(t) {
            return un(t)
              ? t
              : y(t)
                ? t.split(",").map(function(t) {
                    return b(t) ? _(t) : k(t.trim());
                  })
                : [t];
          }
          function S(t) {
            if (y(t))
              if ("@" === t[0]) {
                var e = "media-" + t.substr(1);
                t = cn[e] || (cn[e] = T(Dt(e)));
              } else if (isNaN(t)) return t;
            return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
          }
          function A(t, e, n) {
            return t === Boolean
              ? k(e)
              : t === Number
                ? _(e)
                : "query" === t
                  ? z(e, n)
                  : "list" === t ? E(e) : "media" === t ? S(e) : t ? t(e) : e;
          }
          function C(t) {
            return t ? (c(t, "ms") ? T(t) : 1e3 * T(t)) : 0;
          }
          function I(t, e, n) {
            return t.replace(new RegExp(e + "|" + n, "mg"), function(t) {
              return t === e ? n : e;
            });
          }
          function O(t, e) {
            for (var n in t) if (!1 === e.call(t[n], t[n], n)) break;
          }
          function N(t, e, n) {
            return (
              void 0 === e && (e = 0),
              void 0 === n && (n = 1),
              Math.min(Math.max(t, e), n)
            );
          }
          function M() {}
          function P(t, e) {
            return (
              t.left <= e.right &&
              e.left <= t.right &&
              t.top <= e.bottom &&
              e.top <= t.bottom
            );
          }
          function D(t, e) {
            return P({ top: t.y, bottom: t.y, left: t.x, right: t.x }, e);
          }
          function B(t, e) {
            return new Ze(function(n, i) {
              var o = hn(
                  {
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest(),
                    beforeSend: M,
                    responseType: ""
                  },
                  e
                ),
                r = o.xhr;
              o.beforeSend(o);
              for (var s in o)
                if (s in r)
                  try {
                    r[s] = o[s];
                  } catch (t) {}
              r.open(o.method.toUpperCase(), t);
              for (var a in o.headers) r.setRequestHeader(a, o.headers[a]);
              Gt(r, "load", function() {
                0 === r.status ||
                (r.status >= 200 && r.status < 300) ||
                304 === r.status
                  ? n(r)
                  : i(hn(Error(r.statusText), { xhr: r, status: r.status }));
              }),
                Gt(r, "error", function() {
                  return i(hn(Error("Network Error"), { xhr: r }));
                }),
                Gt(r, "timeout", function() {
                  return i(hn(Error("Network Timeout"), { xhr: r }));
                }),
                r.send(o.data);
            });
          }
          function L(t, e) {
            return y(t) ? (j(t) ? tt(It(t)) : W(t, e)) : tt(t);
          }
          function H(t, e) {
            return y(t) ? (j(t) ? et(It(t)) : R(t, e)) : et(t);
          }
          function j(t) {
            return "<" === t[0] || t.match(/^\s*</);
          }
          function z(t, e) {
            return L(t, U(t) ? e : wn);
          }
          function F(t, e) {
            return H(t, U(t) ? e : wn);
          }
          function W(t, e) {
            return tt(V(t, e, "querySelector"));
          }
          function R(t, e) {
            return et(V(t, e, "querySelectorAll"));
          }
          function V(t, e, n) {
            if ((void 0 === e && (e = wn), !t || !y(t))) return null;
            t = t.replace(pn, "$1 *");
            var i;
            U(t) &&
              ((i = []),
              (t = t
                .split(",")
                .map(function(t, n) {
                  var o = e;
                  if (((t = t.trim()), "!" === t[0])) {
                    var r = t
                      .substr(1)
                      .trim()
                      .split(" ");
                    (o = X(e.parentNode, r[0])), (t = r.slice(1).join(" "));
                  }
                  return o
                    ? (o.id ||
                        ((o.id = "uk-" + Date.now() + n),
                        i.push(function() {
                          return ot(o, "id");
                        })),
                      "#" + o.id + " " + t)
                    : null;
                })
                .filter(Boolean)
                .join(",")),
              (e = wn));
            try {
              return e[n](t);
            } catch (t) {
              return null;
            } finally {
              i &&
                i.forEach(function(t) {
                  return t();
                });
            }
          }
          function Y(t, e) {
            return H(t).filter(function(t) {
              return G(t, e);
            });
          }
          function q(t, e) {
            return y(e) ? G(t, e) || X(t, e) : t === e || tt(e).contains(tt(t));
          }
          function U(t) {
            return y(t) && t.match(dn);
          }
          function G(t, e) {
            return et(t).some(function(t) {
              return gn.call(t, e);
            });
          }
          function X(t, e) {
            return (
              u(e, ">") && (e = e.slice(1)),
              Z(t)
                ? t.parentNode && vn.call(t, e)
                : et(t)
                    .map(function(t) {
                      return t.parentNode && vn.call(t, e);
                    })
                    .filter(Boolean)
            );
          }
          function J(t, e) {
            for (var n = [], i = tt(t).parentNode; i && 1 === i.nodeType; )
              G(i, e) && n.push(i), (i = i.parentNode);
            return n;
          }
          function K(t) {
            return d(t) && !!t.jquery;
          }
          function Z(t) {
            return t instanceof Node || (d(t) && 1 === t.nodeType);
          }
          function Q(t) {
            return t instanceof NodeList || t instanceof HTMLCollection;
          }
          function tt(t) {
            return Z(t) || m(t) || g(t)
              ? t
              : Q(t) || K(t) ? t[0] : un(t) ? tt(t[0]) : null;
          }
          function et(t) {
            return Z(t)
              ? [t]
              : Q(t)
                ? fn.slice.call(t)
                : un(t) ? t.map(tt).filter(Boolean) : K(t) ? t.toArray() : [];
          }
          function nt(t, e, n) {
            if (d(e)) for (var i in e) nt(t, i, e[i]);
            else {
              if (x(n)) return (t = tt(t)) && t.getAttribute(e);
              et(t).forEach(function(t) {
                f(n) && (n = n.call(t, nt(t, e))),
                  null === n ? ot(t, e) : t.setAttribute(e, n);
              });
            }
          }
          function it(t, e) {
            return et(t).some(function(t) {
              return t.hasAttribute(e);
            });
          }
          function ot(t, e) {
            (t = et(t)),
              e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                  return t.removeAttribute(e);
                });
              });
          }
          function rt(t, e, n, i) {
            nt(t, e, function(t) {
              return t ? t.replace(n, i) : t;
            });
          }
          function st(t, e) {
            for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
              if (it(t, i[n])) return nt(t, i[n]);
          }
          function at() {
            return (
              "complete" === wn.readyState ||
              ("loading" !== wn.readyState && !bn.doScroll)
            );
          }
          function lt(t) {
            if (at()) return void t();
            var e = function() {
                n(), i(), t();
              },
              n = Gt(wn, "DOMContentLoaded", e),
              i = Gt(yn, "load", e);
          }
          function ut(t, e, n, i) {
            return (
              void 0 === n && (n = 400),
              void 0 === i && (i = "linear"),
              Ze.all(
                et(t).map(function(t) {
                  return new Ze(function(o, r) {
                    for (var s in e) {
                      var a = Nt(t, s);
                      "" === a && Nt(t, s, a);
                    }
                    var l = setTimeout(function() {
                      return Kt(t, Xn);
                    }, n);
                    Jt(
                      t,
                      Xn + " " + kn,
                      function(e) {
                        var n = e.type;
                        clearTimeout(l),
                          jt(t, "uk-transition"),
                          Nt(t, "transition", ""),
                          n === kn ? r() : o();
                      },
                      !1,
                      function(e) {
                        var n = e.target;
                        return t === n;
                      }
                    ),
                      Ht(t, "uk-transition"),
                      Nt(t, hn({ transition: "all " + n + "ms " + i }, e));
                  });
                })
              )
            );
          }
          function ct(t, e, n, i, o) {
            var r = arguments;
            return (
              void 0 === n && (n = 200),
              Ze.all(
                et(t).map(function(t) {
                  return new Ze(function(s, a) {
                    function l() {
                      Nt(t, "animationDuration", ""), zt(t, Tn + "\\S*");
                    }
                    if (Wt(t, En))
                      return void zn(function() {
                        return Ze.resolve().then(function() {
                          return ct.apply(null, r).then(s, a);
                        });
                      });
                    var c = e + " " + Tn + (o ? "leave" : "enter");
                    u(e, Tn) &&
                      (i && (c += " " + Tn + i),
                      o && (c += " " + Tn + "reverse")),
                      l(),
                      Jt(
                        t,
                        (Kn || "animationend") + " " + _n,
                        function(e) {
                          var n = e.type,
                            i = !1;
                          n === _n
                            ? (a(), l())
                            : (s(),
                              Ze.resolve().then(function() {
                                (i = !0), l();
                              })),
                            zn(function() {
                              i ||
                                (Ht(t, En),
                                zn(function() {
                                  return jt(t, En);
                                }));
                            });
                        },
                        !1,
                        function(e) {
                          var n = e.target;
                          return t === n;
                        }
                      ),
                      Nt(t, "animationDuration", n + "ms"),
                      Ht(t, c),
                      Kn ||
                        zn(function() {
                          return An.cancel(t);
                        });
                  });
                })
              )
            );
          }
          function ht(t, e, n) {
            return (
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              P(tt(t).getBoundingClientRect(), {
                top: e,
                left: n,
                bottom: e + li(yn),
                right: n + ui(yn)
              })
            );
          }
          function ft(t) {
            t = tt(t);
            var e = t.offsetHeight,
              n = dt(t),
              i = li(yn),
              o = i + Math.min(0, n - i),
              r = Math.max(0, i - (li(wn) - (n + e)));
            return N(
              (o + yn.pageYOffset - n) /
                ((o + (e - (r < i ? r : 0))) / 100) /
                100
            );
          }
          function dt(t) {
            var e = 0;
            do {
              e += t.offsetTop;
            } while ((t = t.offsetParent));
            return e;
          }
          function pt(t, e, n) {
            void 0 === n && (n = 0), (e = et(e));
            var i = e.length;
            return (
              (t =
                (b(t)
                  ? _(t)
                  : "next" === t
                    ? n + 1
                    : "previous" === t ? n - 1 : Ot(e, t)) % i),
              t < 0 ? t + i : t
            );
          }
          function mt(t) {
            return Cn[tt(t).tagName.toLowerCase()];
          }
          function gt() {
            var t = setTimeout(function() {
              return Kt(wn, "click");
            }, 0);
            Jt(
              wn,
              "click",
              function(e) {
                e.preventDefault(),
                  e.stopImmediatePropagation(),
                  clearTimeout(t);
              },
              !0
            );
          }
          function vt(t) {
            return et(t).some(function(t) {
              return t.offsetHeight;
            });
          }
          function yt(t) {
            return et(t).some(function(t) {
              return G(t, On);
            });
          }
          function wt(t) {
            return (t = tt(t)), (t.innerHTML = ""), t;
          }
          function bt(t, e) {
            return (
              (t = tt(t)),
              x(e) ? t.innerHTML : kt(t.hasChildNodes() ? wt(t) : t, e)
            );
          }
          function xt(t, e) {
            return (
              (t = tt(t)),
              t.hasChildNodes()
                ? Tt(e, function(e) {
                    return t.insertBefore(e, t.firstChild);
                  })
                : kt(t, e)
            );
          }
          function kt(t, e) {
            return (
              (t = tt(t)),
              Tt(e, function(e) {
                return t.appendChild(e);
              })
            );
          }
          function $t(t, e) {
            return (
              (t = tt(t)),
              Tt(e, function(e) {
                return t.parentNode.insertBefore(e, t);
              })
            );
          }
          function _t(t, e) {
            return (
              (t = tt(t)),
              Tt(e, function(e) {
                return t.nextSibling
                  ? $t(t.nextSibling, e)
                  : kt(t.parentNode, e);
              })
            );
          }
          function Tt(t, e) {
            return (t = y(t) ? It(t) : t), "length" in t ? et(t).map(e) : e(t);
          }
          function Et(t) {
            et(t).map(function(t) {
              return t.parentNode && t.parentNode.removeChild(t);
            });
          }
          function St(t, e) {
            for (e = tt($t(t, e)); e.firstChild; ) e = e.firstChild;
            return kt(e, t), e;
          }
          function At(t, e) {
            return et(
              et(t).map(function(t) {
                return t.hasChildNodes ? St(et(t.childNodes), e) : kt(t, e);
              })
            );
          }
          function Ct(t) {
            et(t)
              .map(function(t) {
                return t.parentNode;
              })
              .filter(function(t, e, n) {
                return n.indexOf(t) === e;
              })
              .forEach(function(t) {
                $t(t, t.childNodes), Et(t);
              });
          }
          function It(t) {
            var e;
            if ((e = Mn.exec(t))) return wn.createElement(e[1]);
            var n = wn.createElement("div");
            return (
              Nn.test(t)
                ? n.insertAdjacentHTML("beforeend", t.trim())
                : (n.textContent = t),
              n.childNodes.length > 1 ? et(n.childNodes) : n.firstChild
            );
          }
          function Ot(t, e) {
            return e
              ? et(t).indexOf(tt(e))
              : et((t = tt(t)) && t.parentNode.children).indexOf(t);
          }
          function Nt(t, e, n) {
            return et(t).map(function(t) {
              if (y(e)) {
                if (((e = Bt(e)), x(n))) return Pt(t, e);
                n || 0 === n
                  ? (t.style[e] = b(n) && !Pn[e] ? n + "px" : n)
                  : t.style.removeProperty(e);
              } else {
                if (un(e)) {
                  var i = Mt(t);
                  return e.reduce(function(t, e) {
                    return (t[e] = Bt(i[e])), t;
                  }, {});
                }
                d(e) &&
                  O(e, function(e, n) {
                    return Nt(t, n, e);
                  });
              }
              return t;
            })[0];
          }
          function Mt(t, e) {
            return (
              (t = tt(t)), t.ownerDocument.defaultView.getComputedStyle(t, e)
            );
          }
          function Pt(t, e, n) {
            return Mt(t, n)[e];
          }
          function Dt(t) {
            if (!(t in Dn)) {
              var e = kt(bn, wn.createElement("div"));
              Ht(e, "var-" + t);
              try {
                (Dn[t] = Pt(e, "content", ":before").replace(
                  /^["'](.*)["']$/,
                  "$1"
                )),
                  (Dn[t] = JSON.parse(Dn[t]));
              } catch (t) {}
              bn.removeChild(e);
            }
            return Dn[t];
          }
          function Bt(t) {
            var e = Bn[t];
            return e || (e = Bn[t] = Lt(t) || t), e;
          }
          function Lt(t) {
            if ((t = r(t)) in Hn) return t;
            for (var e, n = Ln.length; n--; )
              if ((e = "-" + Ln[n] + t) in Hn) return e;
          }
          function Ht(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            Vt(t, e, "add");
          }
          function jt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            Vt(t, e, "remove");
          }
          function zt(t, e) {
            rt(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "");
          }
          function Ft(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            e[0] && jt(t, e[0]), e[1] && Ht(t, e[1]);
          }
          function Wt(t, e) {
            return (
              Ge &&
              et(t).some(function(t) {
                return t.classList.contains(e);
              })
            );
          }
          function Rt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            if (Ge && e.length) {
              e = Yt(e);
              var i = y(e[e.length - 1]) ? void 0 : e.pop();
              et(t).forEach(function(t) {
                for (var n = t.classList, o = 0; o < e.length; o++)
                  Je
                    ? n.toggle(e[o], i)
                    : n[(x(i) ? !n.contains(e[o]) : i) ? "add" : "remove"](
                        e[o]
                      );
              });
            }
          }
          function Vt(t, e, n) {
            (e = Yt(e).filter(function(t) {
              return t;
            })),
              Ge &&
                e.length &&
                et(t).forEach(function(t) {
                  var i = t.classList;
                  Xe
                    ? i[n].apply(i, e)
                    : e.forEach(function(t) {
                        return i[n](t);
                      });
                });
          }
          function Yt(t) {
            return t.reduce(function(t, e) {
              return (
                t.push.apply(t, y(e) && h(e, " ") ? e.trim().split(" ") : [e]),
                t
              );
            }, []);
          }
          function qt(t) {
            return new Ze(function(e, n) {
              var i = new Image();
              (i.onerror = n),
                (i.onload = function() {
                  return e(i);
                }),
                (i.src = t);
            });
          }
          function Ut(t, e) {
            var n,
              i = o(t),
              r = o(e).toLowerCase(),
              s = o(e),
              a = wn.body || bn,
              l = ((n = {}),
              (n[t] = r),
              (n["Webkit" + i] = "webkit" + s),
              (n["Moz" + i] = r),
              (n["o" + i] = "o" + s + " o" + r),
              n);
            for (t in l) if (void 0 !== a.style[t]) return l[t];
          }
          function Gt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var n = Qt(t),
              i = n[0],
              o = n[1],
              r = n[2],
              s = n[3],
              a = n[4];
            return (
              (i = ie(i)),
              r && (s = te(i, r, s)),
              s.length > 1 && (s = ee(s)),
              o.split(" ").forEach(function(t) {
                return i.addEventListener(t, s, a);
              }),
              function() {
                return Xt(i, o, s, a);
              }
            );
          }
          function Xt(t, e, n, i) {
            void 0 === i && (i = !1),
              e.split(" ").forEach(function(e) {
                return ie(t).removeEventListener(e, n, i);
              });
          }
          function Jt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var n = Qt(t),
              i = n[0],
              o = n[1],
              r = n[2],
              s = n[3],
              a = n[4],
              l = n[5],
              u = Gt(
                i,
                o,
                r,
                function(t) {
                  var e = !l || l(t);
                  e && (u(), s(t, e));
                },
                a
              );
            return u;
          }
          function Kt(t, e, n) {
            return oe(t).reduce(function(t, i) {
              return t && i.dispatchEvent(Zt(e, !0, !0, n));
            }, !0);
          }
          function Zt(t, e, n, i) {
            if ((void 0 === e && (e = !0), void 0 === n && (n = !1), y(t))) {
              var o = wn.createEvent("CustomEvent");
              o.initCustomEvent(t, e, n, i), (t = o);
            }
            return t;
          }
          function Qt(t) {
            return (
              y(t[0]) && (t[0] = L(t[0])), f(t[2]) && t.splice(2, 0, !1), t
            );
          }
          function te(t, e, n) {
            var i = this;
            return function(o) {
              var r = o.target,
                s =
                  ">" === e[0]
                    ? H(e, t).filter(function(t) {
                        return q(r, t);
                      })[0]
                    : X(r, e);
              s && ((o.delegate = t), (o.current = s), n.call(i, o));
            };
          }
          function ee(t) {
            return function(e) {
              return un(e.detail) ? t.apply(t, [e].concat(e.detail)) : t(e);
            };
          }
          function ne(t) {
            return "EventTarget" in yn
              ? t instanceof EventTarget
              : "addEventListener" in t;
          }
          function ie(t) {
            return ne(t) ? t : tt(t);
          }
          function oe(t) {
            return ne(t) ? [t] : un(t) ? t.map(ie).filter(Boolean) : et(t);
          }
          function re() {
            Zn.scheduled || ((Zn.scheduled = !0), zn(Zn.flush.bind(Zn)));
          }
          function se(t) {
            for (var e; (e = t.shift()); ) e();
          }
          function ae(t, e) {
            var n = t.indexOf(e);
            return !!~n && !!t.splice(n, 1);
          }
          function le() {}
          function ue(t, e) {
            return (e.y - t.y) / (e.x - t.x);
          }
          function ce(t, e) {
            function n(n) {
              r[n] = (Qn[n] || ti)(t[n], e[n]);
            }
            var o,
              r = {};
            if (e.mixins)
              for (var s = 0, a = e.mixins.length; s < a; s++)
                t = ce(t, e.mixins[s]);
            for (o in t) n(o);
            for (o in e) i(t, o) || n(o);
            return r;
          }
          function he(t, e) {
            try {
              t.contentWindow.postMessage(
                JSON.stringify(hn({ event: "command" }, e)),
                "*"
              );
            } catch (t) {}
          }
          function fe(t) {
            return new Ze(function(e) {
              Jt(
                yn,
                "message",
                function(t, n) {
                  return e(n);
                },
                !1,
                function(e) {
                  var n = e.data;
                  if (n && y(n)) {
                    try {
                      n = JSON.parse(n);
                    } catch (t) {
                      return;
                    }
                    return n && t(n);
                  }
                }
              );
            });
          }
          function de(t, e, n, i, o, r, s, a) {
            (n = ke(n)), (i = ke(i));
            var l = { element: n, target: i };
            if (!t || !e) return l;
            var u = me(t),
              c = me(e),
              f = c;
            return (
              xe(f, n, u, -1),
              xe(f, i, c, 1),
              (o = $e(o, u.width, u.height)),
              (r = $e(r, c.width, c.height)),
              (o.x += r.x),
              (o.y += r.y),
              (f.left += o.x),
              (f.top += o.y),
              (a = me(a || be(t))),
              s &&
                O(ai, function(t, e) {
                  function r(t, n) {
                    var i = f[p] + t + n - 2 * o[d];
                    if (i >= a[p] && i + u[e] <= a[m])
                      return (
                        (f[p] = i),
                        ["element", "target"].forEach(function(n) {
                          l[n][d] = t
                            ? l[n][d] === ai[e][1] ? ai[e][2] : ai[e][1]
                            : l[n][d];
                        }),
                        !0
                      );
                  }
                  var d = t[0],
                    p = t[1],
                    m = t[2];
                  if (!0 === s || h(s, d)) {
                    var g = n[d] === p ? -u[e] : n[d] === m ? u[e] : 0,
                      v = i[d] === p ? c[e] : i[d] === m ? -c[e] : 0;
                    if (f[p] < a[p] || f[p] + u[e] > a[m]) {
                      var y = u[e] / 2,
                        w = "center" === i[d] ? -c[e] / 2 : 0;
                      ("center" === n[d] && (r(y, w) || r(-y, -w))) || r(g, v);
                    }
                  }
                }),
              pe(t, f),
              l
            );
          }
          function pe(t, e) {
            if (((t = tt(t)), e)) {
              var n = pe(t),
                i = Nt(t, "position");
              return void ["left", "top"].forEach(function(o) {
                if (o in e) {
                  var r = Nt(t, o);
                  t.style[o] =
                    e[o] -
                    n[o] +
                    T("absolute" === i && "auto" === r ? ge(t)[o] : r) +
                    "px";
                }
              });
            }
            return me(t);
          }
          function me(t) {
            t = tt(t);
            var e = be(t),
              n = e.pageYOffset,
              i = e.pageXOffset;
            if (m(t)) {
              var o = t.innerHeight,
                r = t.innerWidth;
              return {
                top: n,
                left: i,
                height: o,
                width: r,
                bottom: n + o,
                right: i + r
              };
            }
            var s = !1;
            vt(t) || ((s = t.style.display), (t.style.display = "block"));
            var a = t.getBoundingClientRect();
            return (
              !1 !== s && (t.style.display = s),
              {
                height: a.height,
                width: a.width,
                top: a.top + n,
                left: a.left + i,
                bottom: a.bottom + n,
                right: a.right + i
              }
            );
          }
          function ge(t) {
            t = tt(t);
            var e = ve(t),
              n = e === Ee(t) ? { top: 0, left: 0 } : pe(e);
            return ["top", "left"].reduce(function(i, o) {
              var r = l(o);
              return (
                (i[o] -=
                  n[o] +
                  (T(Nt(t, "margin" + r)) || 0) +
                  (T(Nt(e, "border" + r + "Width")) || 0)),
                i
              );
            }, pe(t));
          }
          function ve(t) {
            for (
              var e = tt(t).offsetParent;
              e && "static" === Nt(e, "position");

            )
              e = e.offsetParent;
            return e || Ee(t);
          }
          function ye(t) {
            var e = l(t);
            return function(n, i) {
              if (((n = tt(n)), x(i))) {
                if (m(n)) return n["inner" + e];
                if (g(n)) {
                  var o = n.documentElement;
                  return Math.max(o.offsetHeight, o.scrollHeight);
                }
                return (
                  (i = Nt(n, t)),
                  (i = "auto" === i ? n["offset" + e] : T(i) || 0),
                  we(t, n, i)
                );
              }
              Nt(n, t, i || 0 === i ? we(t, n, i) + "px" : "");
            };
          }
          function we(t, e, n) {
            return "border-box" === Nt(e, "boxSizing")
              ? ai[t]
                  .slice(1)
                  .map(l)
                  .reduce(function(t, n) {
                    return (
                      t -
                      T(Nt(e, "padding" + n)) -
                      T(Nt(e, "border" + n + "Width"))
                    );
                  }, n)
              : n;
          }
          function be(t) {
            return m(t) ? t : Te(t).defaultView;
          }
          function xe(t, e, n, i) {
            O(ai, function(o, r) {
              var s = o[0],
                a = o[1],
                l = o[2];
              e[s] === l
                ? (t[a] += n[r] * i)
                : "center" === e[s] && (t[a] += n[r] * i / 2);
            });
          }
          function ke(t) {
            var e = /left|center|right/,
              n = /top|center|bottom/;
            return (
              (t = (t || "").split(" ")),
              1 === t.length &&
                (t = e.test(t[0])
                  ? t.concat(["center"])
                  : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]),
              {
                x: e.test(t[0]) ? t[0] : "center",
                y: n.test(t[1]) ? t[1] : "center"
              }
            );
          }
          function $e(t, e, n) {
            var i = (t || "").split(" "),
              o = i[0],
              r = i[1];
            return {
              x: o ? T(o) * (c(o, "%") ? e / 100 : 1) : 0,
              y: r ? T(r) * (c(r, "%") ? n / 100 : 1) : 0
            };
          }
          function _e(t) {
            switch (t) {
              case "left":
                return "right";
              case "right":
                return "left";
              case "top":
                return "bottom";
              case "bottom":
                return "top";
              default:
                return t;
            }
          }
          function Te(t) {
            return tt(t).ownerDocument;
          }
          function Ee(t) {
            return Te(t).documentElement;
          }
          function Se(t) {
            var e = t.x1,
              n = t.x2,
              i = t.y1,
              o = t.y2;
            return Math.abs(e - n) >= Math.abs(i - o)
              ? e - n > 0 ? "Left" : "Right"
              : i - o > 0 ? "Up" : "Down";
          }
          function Ae() {
            ii && clearTimeout(ii),
              oi && clearTimeout(oi),
              ri && clearTimeout(ri),
              (ii = oi = ri = null),
              (ci = {});
          }
          function Ce(t) {
            return hi || "touch" === t.pointerType;
          }
          function Ie(t) {
            var e = t.touches,
              n = t.changedTouches,
              i = (e && e[0]) || (n && n[0]) || t;
            return { x: i.pageX, y: i.pageY };
          }
          function Oe() {
            mi ||
              (mi = [
                Gt(bn, "click", function(t) {
                  var e = t.target,
                    n = t.defaultPrevented;
                  pi && pi.bgClose && !n && !q(e, pi.panel) && pi.hide();
                }),
                Gt(wn, "keydown", function(t) {
                  27 === t.keyCode &&
                    pi &&
                    pi.escClose &&
                    (t.preventDefault(), pi.hide());
                })
              ]);
          }
          function Ne() {
            mi &&
              mi.forEach(function(t) {
                return t();
              }),
              (mi = null);
          }
          function Me(t) {
            function e(t) {
              var e = t - Date.now();
              return {
                total: e,
                seconds: (e / 1e3) % 60,
                minutes: (e / 1e3 / 60) % 60,
                hours: (e / 1e3 / 60 / 60) % 24,
                days: e / 1e3 / 60 / 60 / 24
              };
            }
            if (!Me.installed) {
              var n = t.util,
                i = n.$,
                o = n.doc,
                r = n.empty,
                s = n.html;
              t.component("countdown", {
                mixins: [t.mixin.class],
                attrs: !0,
                props: { date: String, clsWrapper: String },
                defaults: { date: "", clsWrapper: ".uk-countdown-%unit%" },
                computed: {
                  date: function(t) {
                    var e = t.date;
                    return Date.parse(e);
                  },
                  days: function(t, e) {
                    var n = t.clsWrapper;
                    return i(n.replace("%unit%", "days"), e);
                  },
                  hours: function(t, e) {
                    var n = t.clsWrapper;
                    return i(n.replace("%unit%", "hours"), e);
                  },
                  minutes: function(t, e) {
                    var n = t.clsWrapper;
                    return i(n.replace("%unit%", "minutes"), e);
                  },
                  seconds: function(t, e) {
                    var n = t.clsWrapper;
                    return i(n.replace("%unit%", "seconds"), e);
                  },
                  units: function() {
                    var t = this;
                    return ["days", "hours", "minutes", "seconds"].filter(
                      function(e) {
                        return t[e];
                      }
                    );
                  }
                },
                connected: function() {
                  this.start();
                },
                disconnected: function() {
                  var t = this;
                  this.stop(),
                    this.units.forEach(function(e) {
                      return r(t[e]);
                    });
                },
                events: [
                  {
                    name: "visibilitychange",
                    el: o,
                    handler: function() {
                      o.hidden ? this.stop() : this.start();
                    }
                  }
                ],
                update: {
                  write: function() {
                    var t = this,
                      n = e(this.date);
                    n.total <= 0 &&
                      (this.stop(),
                      (n.days = n.hours = n.minutes = n.seconds = 0)),
                      this.units.forEach(function(e) {
                        var i = String(Math.floor(n[e]));
                        i = i.length < 2 ? "0" + i : i;
                        var o = t[e];
                        o.textContent !== i &&
                          ((i = i.split("")),
                          i.length !== o.children.length &&
                            s(
                              o,
                              i
                                .map(function() {
                                  return "<span></span>";
                                })
                                .join("")
                            ),
                          i.forEach(function(t, e) {
                            return (o.children[e].textContent = t);
                          }));
                      });
                  }
                },
                methods: {
                  start: function() {
                    var t = this;
                    this.stop(),
                      this.date &&
                        this.units.length &&
                        (this.$emit(),
                        (this.timer = setInterval(function() {
                          return t.$emit();
                        }, 1e3)));
                  },
                  stop: function() {
                    this.timer &&
                      (clearInterval(this.timer), (this.timer = null));
                  }
                }
              });
            }
          }
          function Pe(t) {
            function e(t, e) {
              return t.sort(function(t, n) {
                return t[e] > n[e] ? 1 : n[e] > t[e] ? -1 : 0;
              });
            }
            if (!Pe.installed) {
              var n = t.util,
                i = n.$$,
                o = n.addClass,
                r = n.css,
                s = n.scrolledOver,
                a = n.toFloat,
                l = n.toNodes;
              t.component(
                "grid-parallax",
                t.components.grid.extend({
                  props: { target: String, translate: Number },
                  defaults: { target: !1, translate: 150 },
                  computed: {
                    translate: function(t) {
                      var e = t.translate;
                      return Math.abs(e);
                    },
                    items: function(t, e) {
                      var n = t.target;
                      return n ? i(n, e) : l(e.children);
                    }
                  },
                  init: function() {
                    o(this.$el, "uk-grid");
                  },
                  disconnected: function() {
                    this.reset(), r(this.$el, "marginBottom", "");
                  },
                  update: [
                    {
                      read: function() {
                        (this.columns =
                          (this.rows && this.rows[0] && this.rows[0].length) ||
                          0),
                          (this.rows =
                            this.rows &&
                            this.rows.map(function(t) {
                              return e(t, "offsetLeft");
                            }));
                      },
                      write: function() {
                        r(
                          this.$el,
                          "marginBottom",
                          this.columns > 1
                            ? this.translate +
                              a(
                                r(
                                  r(this.$el, "marginBottom", ""),
                                  "marginBottom"
                                )
                              )
                            : ""
                        );
                      },
                      events: ["load", "resize"]
                    },
                    {
                      read: function() {
                        this.scrolled = s(this.$el) * this.translate;
                      },
                      write: function() {
                        var t = this;
                        if (!this.rows || 1 === this.columns || !this.scrolled)
                          return this.reset();
                        this.rows.forEach(function(e) {
                          return e.forEach(function(e, n) {
                            return r(
                              e,
                              "transform",
                              "translateY(" +
                                (n % 2 ? t.scrolled : t.scrolled / 8) +
                                "px)"
                            );
                          });
                        });
                      },
                      events: ["scroll", "load", "resize"]
                    }
                  ],
                  methods: {
                    reset: function() {
                      r(this.items, "transform", "");
                    }
                  }
                })
              ),
                t.component("grid-parallax").options.update.unshift({
                  read: function() {
                    this.reset();
                  },
                  events: ["load", "resize"]
                });
            }
          }
          function De(t) {
            return (
              void 0 === t && (t = 0),
              "translate(" + t + (t ? "%" : "") + ", 0)"
            );
          }
          function Be(t) {
            return "scale3d(" + t + ", " + t + ", 1)";
          }
          function Le(t) {
            function e(t, e, i, o, r, s) {
              var a = t.percent,
                l = t.translate,
                u = t.show,
                c = u(r);
              return {
                animation: t,
                dir: r,
                current: i,
                next: o,
                show: function(t, a, l) {
                  var u = this;
                  void 0 === a && (a = 0);
                  var h = l ? "linear" : e;
                  return (
                    (t -= Math.round(t * a)),
                    this.translate(a),
                    n(o, "itemin", {
                      percent: a,
                      duration: t,
                      ease: h,
                      dir: r
                    }),
                    i &&
                      n(i, "itemout", {
                        percent: 1 - a,
                        duration: t,
                        ease: h,
                        dir: r
                      }),
                    I.all([
                      P.start(o, c[1], t, h),
                      i && P.start(i, c[0], t, h)
                    ]).then(function() {
                      u.reset(), s();
                    }, $)
                  );
                },
                stop: function() {
                  return P.stop([o, i]);
                },
                cancel: function() {
                  P.cancel([o, i]);
                },
                reset: function() {
                  for (var t in c[0]) d([o, i], t, "");
                },
                forward: function(t) {
                  var e = this.percent();
                  P.cancel([o, i]), this.show(t, e, !0);
                },
                translate: function(t) {
                  var e = l(t, r);
                  d(o, e[1]),
                    i && d(i, e[0]),
                    n(o, "itemtranslatein", { percent: t, dir: r }),
                    i && n(i, "itemtranslateout", { percent: 1 - t, dir: r });
                },
                percent: function() {
                  return a(i, o, r);
                }
              };
            }
            function n(t, e, n) {
              D(t, f(e, !1, !1, n));
            }
            function i(t) {
              return ~~t;
            }
            function o(t, e) {
              return "next" === t ? 1 : "previous" === t ? -1 : t < e ? -1 : 1;
            }
            function r(t) {
              return 0.5 * t + 300;
            }
            function s(t) {
              return !t.children.length && t.childNodes.length;
            }
            if (!Le.installed) {
              var a = t.util,
                l = a.$$,
                u = a.$,
                c = a.addClass,
                h = a.assign,
                f = a.createEvent,
                d = a.css,
                p = a.data,
                m = a.doc,
                g = a.endsWith,
                v = a.fastdom,
                y = a.getIndex,
                w = a.getPos,
                b = a.hasClass,
                x = a.index,
                k = a.isTouch,
                $ = a.noop,
                _ = a.off,
                T = a.on,
                E = a.pointerDown,
                S = a.pointerMove,
                A = a.pointerUp,
                C = a.preventClick,
                I = a.Promise,
                O = a.removeClass,
                N = a.toggleClass,
                M = a.toNodes,
                P = a.Transition,
                D = a.trigger,
                B = a.win,
                L = Math.abs;
              t.mixin.slideshow = {
                attrs: !0,
                props: {
                  autoplay: Boolean,
                  autoplayInterval: Number,
                  pauseOnHover: Boolean,
                  animation: String,
                  easing: String,
                  velocity: Number
                },
                defaults: {
                  autoplay: !1,
                  autoplayInterval: 7e3,
                  pauseOnHover: !0,
                  animation: "slide",
                  easing: "ease",
                  velocity: 1,
                  index: 0,
                  stack: [],
                  threshold: 10,
                  percent: 0,
                  clsActive: "uk-active",
                  clsActivated: "uk-transition-active",
                  initialAnimation: !1,
                  Animations: Ki(t)
                },
                computed: {
                  list: function(t, e) {
                    var n = t.selList;
                    return u(n, e);
                  },
                  slides: function() {
                    return M(this.list.children);
                  },
                  animation: function(t) {
                    var e = t.animation,
                      n = t.Animations;
                    return h(e in n ? n[e] : n.slide, { name: e });
                  },
                  duration: function(t, e) {
                    var n = t.velocity;
                    return r(e.offsetWidth / n);
                  }
                },
                init: function() {
                  var t = this;
                  ["start", "move", "end"].forEach(function(e) {
                    var n = t[e];
                    t[e] = function(e) {
                      var i = w(e).x;
                      (t.prevPos = i !== t.pos ? t.pos : t.prevPos),
                        (t.pos = i),
                        n(e);
                    };
                  });
                },
                connected: function() {
                  this.startAutoplay();
                },
                disconnected: function() {
                  this.stopAutoplay();
                },
                update: [
                  {
                    read: function() {
                      delete this._computeds.duration;
                    },
                    events: ["load", "resize"]
                  }
                ],
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return (
                        "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                      );
                    },
                    handler: function(t) {
                      t.preventDefault(),
                        t.current.blur(),
                        this.show(p(t.current, this.attrItem));
                    }
                  },
                  {
                    name: E,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(t) {
                      (!k(t) && s(t.target)) || this.start(t);
                    }
                  },
                  {
                    name: "visibilitychange",
                    el: m,
                    handler: function() {
                      m.hidden ? this.stopAutoplay() : this.startAutoplay();
                    }
                  },
                  { name: E, handler: "stopAutoplay" },
                  {
                    name: "mouseenter",
                    filter: function() {
                      return this.autoplay;
                    },
                    handler: function() {
                      this.isHovering = !0;
                    }
                  },
                  {
                    name: "mouseleave",
                    filter: function() {
                      return this.autoplay;
                    },
                    handler: function() {
                      this.isHovering = !1;
                    }
                  },
                  {
                    name: "beforeitemshow",
                    self: !0,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(t) {
                      var e = t.target;
                      c(e, this.clsActive);
                    }
                  },
                  {
                    name: "itemshown",
                    self: !0,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(t) {
                      var e = t.target;
                      c(e, this.clsActivated);
                    }
                  },
                  {
                    name: "itemshow itemhide",
                    self: !0,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(t) {
                      var e = t.type,
                        n = t.target;
                      N(
                        l(
                          "[" +
                            this.attrItem +
                            '="' +
                            x(n) +
                            '"],[data-' +
                            this.attrItem +
                            '="' +
                            x(n) +
                            '"]',
                          this.$el
                        ),
                        this.clsActive,
                        g(e, "show")
                      );
                    }
                  },
                  {
                    name: "itemhidden",
                    self: !0,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(t) {
                      var e = t.target;
                      O(e, this.clsActive), O(e, this.clsActivated);
                    }
                  },
                  {
                    name: "itemshow itemhide itemshown itemhidden",
                    self: !0,
                    delegate: function() {
                      return this.selList + " > *";
                    },
                    handler: function(e) {
                      var n = e.target;
                      t.update(null, n);
                    }
                  },
                  {
                    name: "dragstart",
                    handler: function(t) {
                      t.preventDefault();
                    }
                  }
                ],
                methods: {
                  start: function(t) {
                    if (
                      !(
                        (t.button && 0 !== t.button) ||
                        this.slides.length < 2 ||
                        (this._animation &&
                          this._animation.animation !== this.animation)
                      )
                    ) {
                      var e = 0;
                      if (this.stack.length) {
                        var n = this._animation,
                          i = n.dir,
                          o = n.percent,
                          r = n.cancel,
                          s = n.translate;
                        (e = o() * i),
                          (this.percent = L(e) * -i),
                          this.stack.splice(0, this.stack.length),
                          r(),
                          s(L(e)),
                          (this.index = this.getIndex(this.index - i)),
                          (this.dragging = !0);
                      }
                      (this.unbindMove = T(m, S, this.move, {
                        capture: !0,
                        passive: !1
                      })),
                        T(B, "scroll", this.unbindMove),
                        T(m, A, this.end, !0),
                        (this.drag = this.pos + this.$el.offsetWidth * e);
                    }
                  },
                  move: function(n) {
                    var o = this,
                      r = this.pos - this.drag;
                    if (
                      !(
                        this.prevPos === this.pos ||
                        (!this.dragging && L(r) < this.threshold)
                      )
                    ) {
                      n.cancelable && n.preventDefault(), (this.dragging = !0);
                      var s = r / this.$el.offsetWidth;
                      if (this.percent !== s) {
                        var a = this.getIndex(this.index - i(this.percent)),
                          l = this.getIndex(this.index - i(s)),
                          u = this.slides[l],
                          c = s < 0 ? 1 : -1,
                          h = y(s < 0 ? "next" : "previous", this.slides, l),
                          f = this.slides[h];
                        this.slides.forEach(function(t, e) {
                          return N(t, o.clsActive, e === l || e === h);
                        }),
                          this._animation && this._animation.reset(),
                          l !== a &&
                            (D(this.slides[a], "itemhide", [this]),
                            D(u, "itemshow", [this])),
                          (this._animation = new e(
                            this.animation,
                            this.easing,
                            u,
                            f,
                            c,
                            $
                          )),
                          this._animation.translate(L(s % 1)),
                          (this.percent = s),
                          t.update(null, u),
                          t.update(null, f);
                      }
                    }
                  },
                  end: function() {
                    if (
                      (_(B, "scroll", this.unbindMove),
                      this.unbindMove(),
                      _(m, A, this.end, !0),
                      this.dragging)
                    ) {
                      var t = this.percent;
                      (this.percent = L(this.percent) % 1),
                        (this.index = this.getIndex(this.index - i(t))),
                        (this.percent < 0.1 ||
                          t < 0 == this.pos > this.prevPos) &&
                          ((this.index = this.getIndex(
                            t > 0 ? "previous" : "next"
                          )),
                          (this.percent = 1 - this.percent),
                          (t *= -1)),
                        this._animation && this._animation.reset(),
                        this.show(t > 0 ? "previous" : "next", !0),
                        C();
                    }
                    this.drag = this.dragging = this.percent = null;
                  },
                  show: function(t, e) {
                    var n = this;
                    if ((void 0 === e && (e = !1), e || !this.drag)) {
                      if (
                        (this.stack[e ? "unshift" : "push"](t),
                        !e && this.stack.length > 1)
                      )
                        return void (
                          2 === this.stack.length &&
                          this._animation.forward(250)
                        );
                      var i = this.index,
                        r = this.getIndex(t),
                        s = b(this.slides, "uk-active") && this.slides[i],
                        a = this.slides[r];
                      if (s === a)
                        return void this.stack[e ? "shift" : "pop"]();
                      s && D(s, "beforeitemhide", [this]),
                        D(a, "beforeitemshow", [this]),
                        (this.index = r);
                      var l = function() {
                        s && D(s, "itemhidden", [n]),
                          D(a, "itemshown", [n]),
                          v.mutate(function() {
                            n.stack.shift(),
                              n.stack.length
                                ? n.show(n.stack.shift(), !0)
                                : (n._animation = null);
                          });
                      };
                      (s || this.initialAnimation) &&
                        this._show(
                          s
                            ? this.animation
                            : this.Animations[this.initialAnimation],
                          e
                            ? "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
                            : this.easing,
                          s,
                          a,
                          o(t, i),
                          this.stack.length > 1,
                          l
                        ),
                        s && D(s, "itemhide", [this]),
                        D(a, "itemshow", [this]),
                        s || this.initialAnimation || l(),
                        s && v.flush();
                    }
                  },
                  _show: function(t, n, i, o, r, s, a) {
                    (this._animation = new e(t, n, i, o, r, a)),
                      this._animation.show(
                        i === o ? 300 : s ? 150 : this.duration,
                        this.percent,
                        s
                      );
                  },
                  getIndex: function(t) {
                    return (
                      void 0 === t && (t = this.index),
                      y(t, this.slides, this.index)
                    );
                  },
                  startAutoplay: function() {
                    var t = this;
                    this.stopAutoplay(),
                      this.autoplay &&
                        (this.interval = setInterval(function() {
                          (t.isHovering && t.pauseOnHover) ||
                            t.stack.length ||
                            t.show("next");
                        }, this.autoplayInterval));
                  },
                  stopAutoplay: function() {
                    this.interval && clearInterval(this.interval);
                  }
                }
              };
            }
          }
          function He(t) {
            function e(t, e, n, i) {
              return (
                '<iframe src="' +
                t +
                '" width="' +
                e +
                '" height="' +
                n +
                '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' +
                i +
                '" uk-responsive></iframe>'
              );
            }
            if (!He.installed) {
              t.use(Le);
              var n = t.mixin,
                i = t.util,
                o = i.$,
                r = i.$$,
                s = i.addClass,
                a = i.ajax,
                l = i.append,
                u = i.assign,
                c = i.attr,
                h = i.css,
                f = i.doc,
                d = i.docEl,
                p = i.data,
                m = i.getImage,
                g = i.html,
                v = i.index,
                y = i.on,
                w = i.pointerDown,
                b = i.pointerMove,
                x = i.removeClass,
                k = i.Transition,
                $ = i.trigger;
              t.component("lightbox", {
                attrs: !0,
                props: {
                  animation: String,
                  toggle: String,
                  autoplay: Boolean,
                  autoplayInterval: Number,
                  videoAutoplay: Boolean
                },
                defaults: {
                  animation: void 0,
                  toggle: "a",
                  autoplay: 0,
                  videoAutoplay: !1
                },
                computed: {
                  toggles: function(t, e) {
                    var n = this,
                      i = t.toggle,
                      o = r(i, e);
                    return (
                      (this._changed =
                        !this._toggles ||
                        o.length !== this._toggles.length ||
                        o.some(function(t, e) {
                          return t !== n._toggles[e];
                        })),
                      (this._toggles = o)
                    );
                  }
                },
                disconnected: function() {
                  this.panel && (this.panel.$destroy(!0), (this.panel = null));
                },
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return this.toggle + ":not(.uk-disabled)";
                    },
                    handler: function(t) {
                      t.preventDefault(),
                        t.current.blur(),
                        this.show(v(this.toggles, t.current));
                    }
                  }
                ],
                update: function() {
                  this.panel &&
                    this.animation &&
                    ((this.panel.$props.animation = this.animation),
                    this.panel.$emit()),
                    this.toggles.length &&
                      this._changed &&
                      this.panel &&
                      (this.panel.$destroy(!0), this._init());
                },
                methods: {
                  _init: function() {
                    return (this.panel =
                      this.panel ||
                      t.lightboxPanel(
                        u({}, this.$props, {
                          items: this.toggles.reduce(function(t, e) {
                            return (
                              t.push(
                                ["href", "caption", "type", "poster"].reduce(
                                  function(t, n) {
                                    return (
                                      (t["href" === n ? "source" : n] = p(
                                        e,
                                        n
                                      )),
                                      t
                                    );
                                  },
                                  {}
                                )
                              ),
                              t
                            );
                          }, [])
                        })
                      ));
                  },
                  show: function(t) {
                    return this.panel || this._init(), this.panel.show(t);
                  },
                  hide: function() {
                    return this.panel && this.panel.hide();
                  }
                }
              }),
                t.component("lightbox-panel", {
                  mixins: [n.container, n.togglable, n.slideshow],
                  functional: !0,
                  defaults: {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    initialAnimation: "scale",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: Zi(t),
                    template:
                      '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close uk-toggle="!.uk-lightbox"></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                  },
                  created: function() {
                    var t = this;
                    this.$mount(l(this.container, this.template)),
                      (this.caption = o(".uk-lightbox-caption", this.$el)),
                      this.items.forEach(function(e, n) {
                        return l(t.list, "<li></li>");
                      });
                  },
                  events: [
                    { name: b + " " + w + " keydown", handler: "showControls" },
                    {
                      name: "click",
                      self: !0,
                      delegate: function() {
                        return this.selList + " > *";
                      },
                      handler: function(t) {
                        t.preventDefault(), this.hide();
                      }
                    },
                    {
                      name: "show",
                      self: !0,
                      handler: function() {
                        s(d, this.clsPage);
                      }
                    },
                    { name: "shown", self: !0, handler: "showControls" },
                    { name: "hide", self: !0, handler: "hideControls" },
                    {
                      name: "hidden",
                      self: !0,
                      handler: function() {
                        x(d, this.clsPage);
                      }
                    },
                    {
                      name: "keyup",
                      el: function() {
                        return f;
                      },
                      handler: function(t) {
                        if (this.isToggled(this.$el))
                          switch (t.keyCode) {
                            case 27:
                              this.hide();
                              break;
                            case 37:
                              this.show("previous");
                              break;
                            case 39:
                              this.show("next");
                          }
                      }
                    },
                    {
                      name: "toggle",
                      handler: function(t) {
                        t.preventDefault(), this.toggle();
                      }
                    },
                    {
                      name: "beforeitemshow",
                      self: !0,
                      delegate: function() {
                        return this.selList + " > *";
                      },
                      handler: function() {
                        this.isToggled() || this.toggleNow(this.$el, !0);
                      }
                    },
                    {
                      name: "itemshow",
                      self: !0,
                      delegate: function() {
                        return this.selList + " > *";
                      },
                      handler: function(t) {
                        var e = this,
                          n = t.target,
                          i = v(n),
                          o = this.getItem(i).caption;
                        h(this.caption, "display", o ? "" : "none"),
                          g(this.caption, o);
                        for (var r = 0; r <= this.preload; r++)
                          e.loadItem(e.getIndex(i + r)),
                            e.loadItem(e.getIndex(i - r));
                      }
                    },
                    {
                      name: "itemload",
                      handler: function(t, n) {
                        var i,
                          r = this,
                          s = n.source,
                          l = n.type;
                        if ((this.setItem(n, "<span uk-spinner></span>"), s))
                          if (
                            "image" === l ||
                            s.match(/\.(jp(e)?g|png|gif|svg)$/i)
                          )
                            m(s).then(
                              function(t) {
                                return r.setItem(
                                  n,
                                  '<img width="' +
                                    t.width +
                                    '" height="' +
                                    t.height +
                                    '" src="' +
                                    s +
                                    '">'
                                );
                              },
                              function() {
                                return r.setError(n);
                              }
                            );
                          else if (
                            "video" === l ||
                            s.match(/\.(mp4|webm|ogv)$/i)
                          ) {
                            var u = o(
                              "<video controls playsinline" +
                                (n.poster ? ' poster="' + n.poster + '"' : "") +
                                ' uk-video="autoplay: ' +
                                this.videoAutoplay +
                                '"></video>'
                            );
                            c(u, "src", s),
                              y(u, "error", function() {
                                return r.setError(n);
                              }),
                              y(u, "loadedmetadata", function() {
                                c(u, {
                                  width: u.videoWidth,
                                  height: u.videoHeight
                                }),
                                  r.setItem(n, u);
                              });
                          } else if ("iframe" === l)
                            this.setItem(
                              n,
                              '<iframe class="uk-lightbox-iframe" src="' +
                                s +
                                '" frameborder="0" allowfullscreen></iframe>'
                            );
                          else if (
                            (i =
                              s.match(
                                /\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/
                              ) || s.match(/youtu\.be\/(.*)/))
                          ) {
                            var h = i[1],
                              f = function(t, i) {
                                return (
                                  void 0 === t && (t = 640),
                                  void 0 === i && (i = 450),
                                  r.setItem(
                                    n,
                                    e(
                                      "//www.youtube.com/embed/" + h,
                                      t,
                                      i,
                                      r.videoAutoplay
                                    )
                                  )
                                );
                              };
                            m(
                              "//img.youtube.com/vi/" + h + "/maxresdefault.jpg"
                            ).then(function(t) {
                              var e = t.width,
                                n = t.height;
                              120 === e && 90 === n
                                ? m(
                                    "//img.youtube.com/vi/" + h + "/0.jpg"
                                  ).then(function(t) {
                                    var e = t.width,
                                      n = t.height;
                                    return f(e, n);
                                  }, f)
                                : f(e, n);
                            }, f);
                          } else
                            (i = s.match(
                              /(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/
                            )) &&
                              a(
                                "//vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                                  encodeURI(s),
                                { responseType: "json" }
                              ).then(function(t) {
                                var o = t.response,
                                  s = o.height,
                                  a = o.width;
                                return r.setItem(
                                  n,
                                  e(
                                    "//player.vimeo.com/video/" + i[2],
                                    a,
                                    s,
                                    r.videoAutoplay
                                  )
                                );
                              });
                      }
                    }
                  ],
                  methods: {
                    toggle: function() {
                      return this.isToggled() ? this.hide() : this.show();
                    },
                    hide: function() {
                      this.isToggled() && this.toggleNow(this.$el, !1),
                        x(this.slides, this.clsActive),
                        k.stop(this.slides),
                        delete this.index,
                        delete this.percent,
                        delete this._animation;
                    },
                    loadItem: function(t) {
                      void 0 === t && (t = this.index);
                      var e = this.getItem(t);
                      e.content || $(this.$el, "itemload", [e]);
                    },
                    getItem: function(t) {
                      return (
                        void 0 === t && (t = this.index), this.items[t] || {}
                      );
                    },
                    setItem: function(e, n) {
                      u(e, { content: n });
                      var i = g(this.slides[this.items.indexOf(e)], n);
                      $(this.$el, "itemloaded", [this, i]), t.update(null, i);
                    },
                    setError: function(t) {
                      this.setItem(
                        t,
                        '<span uk-icon="icon: bolt; ratio: 2"></span>'
                      );
                    },
                    showControls: function() {
                      clearTimeout(this.controlsTimer),
                        (this.controlsTimer = setTimeout(
                          this.hideControls,
                          this.delayControls
                        )),
                        c(
                          r(
                            "[" +
                              this.attrItem +
                              "],[data-" +
                              this.attrItem +
                              "]",
                            this.$el
                          ),
                          "hidden",
                          this.items.length < 2 ? "" : null
                        ),
                        s(this.$el, "uk-active uk-transition-active");
                    },
                    hideControls: function() {
                      x(this.$el, "uk-active uk-transition-active");
                    }
                  }
                });
            }
          }
          function je(t) {
            if (!je.installed) {
              var e = t.util,
                n = e.append,
                i = e.closest,
                o = e.css,
                r = e.each,
                s = e.pointerEnter,
                a = e.pointerLeave,
                l = e.remove,
                u = e.toFloat,
                c = e.Transition,
                h = e.trigger,
                f = {};
              t.component("notification", {
                functional: !0,
                args: ["message", "status"],
                defaults: {
                  message: "",
                  status: "",
                  timeout: 5e3,
                  group: null,
                  pos: "top-center",
                  clsClose: "uk-notification-close",
                  clsMsg: "uk-notification-message"
                },
                created: function() {
                  f[this.pos] ||
                    (f[this.pos] = n(
                      t.container,
                      '<div class="uk-notification uk-notification-' +
                        this.pos +
                        '"></div>'
                    ));
                  var e = o(f[this.pos], "display", "block");
                  this.$mount(
                    n(
                      e,
                      '<div class="' +
                        this.clsMsg +
                        (this.status
                          ? " " + this.clsMsg + "-" + this.status
                          : "") +
                        '"> <a href="#" class="' +
                        this.clsClose +
                        '" data-uk-close></a> <div>' +
                        this.message +
                        "</div> </div>"
                    )
                  );
                },
                ready: function() {
                  var t = this,
                    e = u(o(this.$el, "marginBottom"));
                  c
                    .start(
                      o(this.$el, {
                        opacity: 0,
                        marginTop: -1 * this.$el.offsetHeight,
                        marginBottom: 0
                      }),
                      { opacity: 1, marginTop: 0, marginBottom: e }
                    )
                    .then(function() {
                      t.timeout && (t.timer = setTimeout(t.close, t.timeout));
                    });
                },
                events: ((d = {
                  click: function(t) {
                    i(t.target, 'a[href="#"]') && t.preventDefault(),
                      this.close();
                  }
                }),
                (d[s] = function() {
                  this.timer && clearTimeout(this.timer);
                }),
                (d[a] = function() {
                  this.timeout &&
                    (this.timer = setTimeout(this.close, this.timeout));
                }),
                d),
                methods: {
                  close: function(t) {
                    var e = this,
                      n = function() {
                        h(e.$el, "close", [e]),
                          l(e.$el),
                          f[e.pos].children.length ||
                            o(f[e.pos], "display", "none");
                      };
                    this.timer && clearTimeout(this.timer),
                      t
                        ? n()
                        : c
                            .start(this.$el, {
                              opacity: 0,
                              marginTop: -1 * this.$el.offsetHeight,
                              marginBottom: 0
                            })
                            .then(n);
                  }
                }
              });
              var d;
              t.notification.closeAll = function(e, n) {
                r(t.instances, function(t) {
                  "notification" !== t.$options.name ||
                    (e && e !== t.group) ||
                    t.close(n);
                });
              };
            }
          }
          function ze(t) {
            function e(t, e) {
              return a(t * (1 - (e - e * t)));
            }
            function n(t, e) {
              return l(l(t, "color", e), "color")
                .split(/[(),]/g)
                .slice(1, -1)
                .concat(1)
                .slice(0, 4)
                .map(function(t) {
                  return g(t);
                });
            }
            function i(t, e) {
              var n = t.length - 1,
                i = Math.min(Math.floor(n * e), n - 1),
                o = t.slice(i, i + 2);
              return o.push(1 === e ? 1 : (e % (1 / n)) * n), o;
            }
            function o(t, e) {
              var n = i(t, e),
                o = n[0],
                r = n[1],
                s = n[2];
              return (d(o)
                ? o + Math.abs(o - r) * s * (o < r ? 1 : -1)
                : +r
              ).toFixed(2);
            }
            if (!ze.installed) {
              var r = t.mixin,
                s = t.util,
                a = s.clamp,
                l = s.css,
                u = s.Dimensions,
                c = s.each,
                h = s.getImage,
                f = s.includes,
                d = s.isNumber,
                p = s.isUndefined,
                m = s.scrolledOver,
                g = s.toFloat,
                v = s.query,
                y = s.win,
                w = [
                  "x",
                  "y",
                  "bgx",
                  "bgy",
                  "rotate",
                  "scale",
                  "color",
                  "backgroundColor",
                  "borderColor",
                  "opacity",
                  "blur",
                  "hue",
                  "grayscale",
                  "invert",
                  "saturate",
                  "sepia",
                  "fopacity"
                ];
              (r.parallax = {
                props: w.reduce(
                  function(t, e) {
                    return (t[e] = "list"), t;
                  },
                  { media: "media" }
                ),
                defaults: w.reduce(
                  function(t, e) {
                    return (t[e] = void 0), t;
                  },
                  { media: !1 }
                ),
                computed: {
                  props: function(t, e) {
                    var i = this;
                    return w.reduce(function(o, r) {
                      if (p(t[r])) return o;
                      var s,
                        a,
                        u,
                        c = r.match(/color/i),
                        h = c || "opacity" === r,
                        d = t[r].slice(0);
                      h && l(e, r, ""),
                        d.length < 2 &&
                          d.unshift(("scale" === r ? 1 : h ? l(e, r) : 0) || 0);
                      var m = f(d.join(""), "%") ? "%" : "px";
                      if (c) {
                        var v = e.style.color;
                        (d = d.map(function(t) {
                          return n(e, t);
                        })),
                          (e.style.color = v);
                      } else d = d.map(g);
                      if (r.match(/^bg/))
                        if (
                          (l(e, "background-position-" + r[2], ""),
                          (a = l(e, "backgroundPosition").split(" ")[
                            "x" === r[2] ? 0 : 1
                          ]),
                          i.covers)
                        ) {
                          var y = Math.min.apply(Math, d),
                            w = Math.max.apply(Math, d),
                            b = d.indexOf(y) < d.indexOf(w);
                          (u = w - y),
                            (d = d.map(function(t) {
                              return t - (b ? y : w);
                            })),
                            (s = (b ? -u : 0) + "px");
                        } else s = a;
                      return (
                        (o[r] = {
                          steps: d,
                          unit: m,
                          pos: s,
                          bgPos: a,
                          diff: u
                        }),
                        o
                      );
                    }, {});
                  },
                  bgProps: function() {
                    var t = this;
                    return ["bgx", "bgy"].filter(function(e) {
                      return e in t.props;
                    });
                  },
                  covers: function(t, e) {
                    return (
                      "cover" ===
                      l(
                        "" !== e.style.backgroundSize
                          ? l(e, "backgroundSize", "")
                          : e,
                        "backgroundSize"
                      )
                    );
                  }
                },
                disconnected: function() {
                  delete this._image;
                },
                update: [
                  {
                    read: function() {
                      var t = this;
                      if (
                        (delete this._computeds.props,
                        (this._active =
                          !this.media || y.matchMedia(this.media).matches),
                        this._image &&
                          (this._image.dimEl = {
                            width: this.$el.offsetWidth,
                            height: this.$el.offsetHeight
                          }),
                        p(this._image) && this.covers && this.bgProps.length)
                      ) {
                        var e = l(this.$el, "backgroundImage").replace(
                          /^none|url\(["']?(.+?)["']?\)$/,
                          "$1"
                        );
                        e &&
                          ((this._image = !1),
                          h(e).then(function(e) {
                            (t._image = {
                              width: e.naturalWidth,
                              height: e.naturalHeight
                            }),
                              t.$emit();
                          }));
                      }
                    },
                    write: function() {
                      var t = this;
                      if (this._image) {
                        if (!this._active)
                          return void l(this.$el, {
                            backgroundSize: "",
                            backgroundRepeat: ""
                          });
                        var e = this._image,
                          n = e.dimEl,
                          i = u.cover(e, n);
                        this.bgProps.forEach(function(o) {
                          var r = t.props[o],
                            s = r.diff,
                            a = r.bgPos,
                            l = r.steps,
                            c = "bgy" === o ? "height" : "width",
                            h = i[c] - n[c];
                          a.match(/%$|0px/) &&
                            (h < s
                              ? (n[c] = i[c] + s - h)
                              : h > s &&
                                (a = parseFloat(a)) &&
                                (t.props[o].steps = l.map(function(t) {
                                  return t - (h - s) / (100 / a);
                                })),
                            (i = u.cover(e, n)));
                        }),
                          l(this.$el, {
                            backgroundSize: i.width + "px " + i.height + "px",
                            backgroundRepeat: "no-repeat"
                          });
                      }
                    },
                    events: ["load", "resize"]
                  }
                ],
                methods: {
                  reset: function() {
                    var t = this;
                    c(this.getCss(0), function(e, n) {
                      return l(t.$el, n, "");
                    });
                  },
                  getCss: function(t) {
                    var e = !1,
                      n = this.props;
                    return Object.keys(n).reduce(
                      function(r, s) {
                        var a = n[s],
                          l = a.steps,
                          u = a.unit,
                          c = a.pos,
                          h = o(l, t);
                        switch (s) {
                          case "x":
                          case "y":
                            if (e) break;
                            var f = ["x", "y"].map(function(e) {
                                return s === e
                                  ? h + u
                                  : n[e] ? o(n[e].steps, t) + n[e].unit : 0;
                              }),
                              d = f[0],
                              p = f[1];
                            e = r.transform +=
                              " translate3d(" + d + ", " + p + ", 0)";
                            break;
                          case "rotate":
                            r.transform += " rotate(" + h + "deg)";
                            break;
                          case "scale":
                            r.transform += " scale(" + h + ")";
                            break;
                          case "bgy":
                          case "bgx":
                            r["background-position-" + s[2]] =
                              "calc(" + c + " + " + (h + u) + ")";
                            break;
                          case "color":
                          case "backgroundColor":
                          case "borderColor":
                            var m = i(l, t),
                              v = m[0],
                              y = m[1],
                              w = m[2];
                            r[s] =
                              "rgba(" +
                              v
                                .map(function(t, e) {
                                  return (
                                    (t += w * (y[e] - t)),
                                    3 === e ? g(t) : parseInt(t, 10)
                                  );
                                })
                                .join(",") +
                              ")";
                            break;
                          case "blur":
                            r.filter += " blur(" + h + "px)";
                            break;
                          case "hue":
                            r.filter += " hue-rotate(" + h + "deg)";
                            break;
                          case "fopacity":
                            r.filter += " opacity(" + h + "%)";
                            break;
                          case "grayscale":
                          case "invert":
                          case "saturate":
                          case "sepia":
                            r.filter += " " + s + "(" + h + "%)";
                            break;
                          default:
                            r[s] = h;
                        }
                        return r;
                      },
                      { transform: "", filter: "" }
                    );
                  }
                }
              }),
                t.component("parallax", {
                  mixins: [r.parallax],
                  props: { target: String, viewport: Number, easing: Number },
                  defaults: { target: !1, viewport: 1, easing: 1 },
                  computed: {
                    target: function(t, e) {
                      var n = t.target;
                      return (n && v(n, e)) || e;
                    }
                  },
                  disconnected: function() {
                    delete this._prev;
                  },
                  update: [
                    {
                      read: function() {
                        this._percent = e(
                          m(this.target) / (this.viewport || 1),
                          this.easing
                        );
                      },
                      write: function(t) {
                        if (
                          ("scroll" !== t.type && delete this._prev,
                          !this._active)
                        )
                          return void this.reset();
                        this._prev !== this._percent &&
                          (l(this.$el, this.getCss(this._percent)),
                          (this._prev = this._percent));
                      },
                      events: ["scroll", "load", "resize"]
                    }
                  ]
                });
            }
          }
          function Fe(t) {
            function e(t) {
              return l(t, "in");
            }
            function n(t, n, i) {
              return (i /= 2), e(t) ? (n < 0 ? 1 - i : i) : n < 0 ? i : 1 - i;
            }
            if (!Fe.installed) {
              t.use(ze), t.use(Le);
              var i = t.mixin,
                o = t.util,
                r = o.closest,
                s = o.css,
                a = o.fastdom,
                l = o.endsWith,
                u = o.height,
                c = o.noop,
                h = o.Transition;
              t.component("slideshow", {
                mixins: [i.class, i.slideshow],
                props: {
                  ratio: String,
                  minHeight: Boolean,
                  maxHeight: Boolean
                },
                defaults: {
                  ratio: "16:9",
                  minHeight: !1,
                  maxHeight: !1,
                  selList: ".uk-slideshow-items",
                  attrItem: "uk-slideshow-item",
                  Animations: Qi(t)
                },
                ready: function() {
                  var t = this;
                  a.mutate(function() {
                    return t.show(t.index);
                  });
                },
                update: {
                  read: function() {
                    var t = this.ratio.split(":").map(Number),
                      e = t[0],
                      n = t[1];
                    (this.height = n * this.$el.offsetWidth / e),
                      this.minHeight &&
                        (this.height = Math.max(this.minHeight, this.height)),
                      this.maxHeight &&
                        (this.height = Math.min(this.maxHeight, this.height));
                  },
                  write: function() {
                    u(this.list, Math.floor(this.height));
                  },
                  events: ["load", "resize"]
                }
              }),
                t.component("slideshow-parallax", {
                  mixins: [i.parallax],
                  computed: {
                    item: function() {
                      var e = t.getComponent(
                        r(this.$el, ".uk-slideshow"),
                        "slideshow"
                      );
                      return e && r(this.$el, e.selList + " > *");
                    }
                  },
                  events: [
                    {
                      name: "itemshown",
                      self: !0,
                      el: function() {
                        return this.item;
                      },
                      handler: function() {
                        s(this.$el, this.getCss(0.5));
                      }
                    },
                    {
                      name: "itemin itemout",
                      self: !0,
                      el: function() {
                        return this.item;
                      },
                      handler: function(t) {
                        var i = t.type,
                          o = t.detail,
                          r = o.percent,
                          a = o.duration,
                          l = o.ease,
                          u = o.dir;
                        h.cancel(this.$el),
                          s(this.$el, this.getCss(n(i, u, r))),
                          h
                            .start(
                              this.$el,
                              this.getCss(e(i) ? 0.5 : u > 0 ? 1 : 0),
                              a,
                              l
                            )
                            .catch(c);
                      }
                    },
                    {
                      name: "transitioncanceled transitionend",
                      self: !0,
                      el: function() {
                        return this.item;
                      },
                      handler: function() {
                        h.cancel(this.$el);
                      }
                    },
                    {
                      name: "itemtranslatein itemtranslateout",
                      self: !0,
                      el: function() {
                        return this.item;
                      },
                      handler: function(t) {
                        var e = t.type,
                          i = t.detail,
                          o = i.percent,
                          r = i.dir;
                        h.cancel(this.$el),
                          s(this.$el, this.getCss(n(e, r, o)));
                      }
                    }
                  ]
                });
            }
          }
          function We(t) {
            function e(n) {
              return n && (t.getComponent(n, "sortable") || e(n.parentNode));
            }
            function n(t, e) {
              return t.parentNode === e.parentNode && w(t) > w(e);
            }
            if (!We.installed) {
              var i = t.mixin,
                o = t.util,
                r = o.addClass,
                s = o.after,
                a = o.assign,
                l = o.append,
                u = o.attr,
                c = o.before,
                h = o.closest,
                f = o.css,
                d = o.doc,
                p = o.docEl,
                m = o.height,
                g = o.fastdom,
                v = o.getPos,
                y = o.includes,
                w = o.index,
                b = o.isInput,
                x = o.noop,
                k = o.offset,
                $ = o.off,
                _ = o.on,
                T = o.pointerDown,
                E = o.pointerMove,
                S = o.pointerUp,
                A = o.position,
                C = o.preventClick,
                I = o.Promise,
                O = o.remove,
                N = o.removeClass,
                M = o.toggleClass,
                P = o.toNodes,
                D = o.Transition,
                B = o.trigger,
                L = o.win,
                H = o.within;
              t.component("sortable", {
                mixins: [i.class],
                props: {
                  group: String,
                  animation: Number,
                  threshold: Number,
                  clsItem: String,
                  clsPlaceholder: String,
                  clsDrag: String,
                  clsDragState: String,
                  clsBase: String,
                  clsNoDrag: String,
                  clsEmpty: String,
                  clsCustom: String,
                  handle: String
                },
                defaults: {
                  group: !1,
                  animation: 150,
                  threshold: 5,
                  clsItem: "uk-sortable-item",
                  clsPlaceholder: "uk-sortable-placeholder",
                  clsDrag: "uk-sortable-drag",
                  clsDragState: "uk-drag",
                  clsBase: "uk-sortable",
                  clsNoDrag: "uk-sortable-nodrag",
                  clsEmpty: "uk-sortable-empty",
                  clsCustom: "",
                  handle: !1
                },
                init: function() {
                  var t = this;
                  ["init", "start", "move", "end"].forEach(function(e) {
                    var n = t[e];
                    t[e] = function(e) {
                      t.scrollY = L.scrollY;
                      var i = v(e),
                        o = i.x,
                        r = i.y;
                      (t.pos = { x: o, y: r }), n(e);
                    };
                  });
                },
                events: ((j = {}), (j[T] = "init"), j),
                update: {
                  write: function() {
                    if (
                      (this.clsEmpty &&
                        M(this.$el, this.clsEmpty, !this.$el.children.length),
                      this.drag)
                    ) {
                      k(this.drag, {
                        top: this.pos.y + this.origin.top,
                        left: this.pos.x + this.origin.left
                      });
                      var t,
                        e = k(this.drag).top,
                        n = e + this.drag.offsetHeight;
                      e > 0 && e < this.scrollY
                        ? (t = this.scrollY - 5)
                        : n < m(d) &&
                          n > m(L) + this.scrollY &&
                          (t = this.scrollY + 5),
                        t &&
                          setTimeout(function() {
                            return L.scrollTo(L.scrollX, t);
                          }, 5);
                    }
                  }
                },
                methods: {
                  init: function(t) {
                    var e = t.target,
                      n = t.button,
                      i = t.defaultPrevented,
                      o = P(this.$el.children).filter(function(t) {
                        return H(e, t);
                      })[0];
                    !o ||
                      b(t.target) ||
                      (this.handle && !H(e, this.handle)) ||
                      0 !== n ||
                      H(e, "." + this.clsNoDrag) ||
                      i ||
                      (t.preventDefault(),
                      (this.touched = [this]),
                      (this.placeholder = o),
                      (this.origin = a({ target: e, index: w(o) }, this.pos)),
                      _(p, E, this.move),
                      _(p, S, this.end),
                      _(L, "scroll", this.scroll),
                      this.threshold || this.start(t));
                  },
                  start: function(e) {
                    (this.drag = l(
                      t.container,
                      this.placeholder.outerHTML
                        .replace(/^<li/i, "<div")
                        .replace(/li>$/i, "div>")
                    )),
                      f(
                        this.drag,
                        a(
                          {
                            boxSizing: "border-box",
                            width: this.placeholder.offsetWidth,
                            height: this.placeholder.offsetHeight
                          },
                          f(this.placeholder, [
                            "paddingLeft",
                            "paddingRight",
                            "paddingTop",
                            "paddingBottom"
                          ])
                        )
                      ),
                      u(this.drag, "uk-no-boot", ""),
                      r(this.drag, this.clsDrag + " " + this.clsCustom),
                      m(
                        this.drag.firstElementChild,
                        m(this.placeholder.firstElementChild)
                      );
                    var n = k(this.placeholder),
                      i = n.left,
                      o = n.top;
                    a(this.origin, {
                      left: i - this.pos.x,
                      top: o - this.pos.y
                    }),
                      r(this.placeholder, this.clsPlaceholder),
                      r(this.$el.children, this.clsItem),
                      r(p, this.clsDragState),
                      B(this.$el, "start", [this, this.placeholder, this.drag]),
                      this.move(e);
                  },
                  move: function(t) {
                    if (!this.drag)
                      return void (
                        (Math.abs(this.pos.x - this.origin.x) >
                          this.threshold ||
                          Math.abs(this.pos.y - this.origin.y) >
                            this.threshold) &&
                        this.start(t)
                      );
                    this.$emit();
                    var n =
                        "mousemove" === t.type
                          ? t.target
                          : d.elementFromPoint(
                              this.pos.x - d.body.scrollLeft,
                              this.pos.y - d.body.scrollTop
                            ),
                      i = e(n),
                      o = e(this.placeholder),
                      r = i !== o;
                    if (
                      i &&
                      !H(n, this.placeholder) &&
                      (!r || (i.group && i.group === o.group))
                    ) {
                      if (
                        ((n =
                          (i.$el === n.parentNode && n) ||
                          P(i.$el.children).filter(function(t) {
                            return H(n, t);
                          })[0]),
                        r)
                      )
                        o.remove(this.placeholder);
                      else if (!n) return;
                      i.insert(this.placeholder, n),
                        y(this.touched, i) || this.touched.push(i);
                    }
                  },
                  scroll: function() {
                    var t = L.scrollY;
                    t !== this.scrollY &&
                      ((this.pos.y += t - this.scrollY),
                      (this.scrollY = t),
                      this.$emit());
                  },
                  end: function(t) {
                    if (
                      ($(p, E, this.move),
                      $(p, S, this.end),
                      $(L, "scroll", this.scroll),
                      !this.drag)
                    )
                      return void (
                        "mouseup" !== t.type &&
                        H(t.target, "a[href]") &&
                        (location.href = h(t.target, "a[href]").href)
                      );
                    C();
                    var n = e(this.placeholder);
                    this === n
                      ? this.origin.index !== w(this.placeholder) &&
                        B(this.$el, "moved", [this, this.placeholder])
                      : (B(n.$el, "added", [n, this.placeholder]),
                        B(this.$el, "removed", [this, this.placeholder])),
                      B(this.$el, "stop", [this]),
                      O(this.drag),
                      (this.drag = null);
                    var i = this.touched
                      .map(function(t) {
                        return t.clsPlaceholder + " " + t.clsItem;
                      })
                      .join(" ");
                    this.touched.forEach(function(t) {
                      return N(t.$el.children, i);
                    }),
                      N(p, this.clsDragState);
                  },
                  insert: function(t, e) {
                    var i = this;
                    r(this.$el.children, this.clsItem);
                    var o = function() {
                      e
                        ? !H(t, i.$el) || n(t, e) ? c(e, t) : s(e, t)
                        : l(i.$el, t);
                    };
                    this.animation ? this.animate(o) : o();
                  },
                  remove: function(t) {
                    H(t, this.$el) &&
                      (this.animation
                        ? this.animate(function() {
                            return O(t);
                          })
                        : O(t));
                  },
                  animate: function(t) {
                    var e = this,
                      n = [],
                      i = P(this.$el.children),
                      o = {
                        position: "",
                        width: "",
                        height: "",
                        pointerEvents: "",
                        top: "",
                        left: "",
                        bottom: "",
                        right: ""
                      };
                    i.forEach(function(t) {
                      n.push(
                        a(
                          {
                            position: "absolute",
                            pointerEvents: "none",
                            width: t.offsetWidth,
                            height: t.offsetHeight
                          },
                          A(t)
                        )
                      );
                    }),
                      t(),
                      i.forEach(D.cancel),
                      f(this.$el.children, o),
                      this.$update("update", !0),
                      g.flush(),
                      f(this.$el, "minHeight", m(this.$el));
                    var r = i.map(function(t) {
                      return A(t);
                    });
                    I.all(
                      i.map(function(t, i) {
                        return D.start(f(t, n[i]), r[i], e.animation);
                      })
                    ).then(function() {
                      f(e.$el, "minHeight", ""),
                        f(i, o),
                        e.$update("update", !0),
                        g.flush();
                    }, x);
                  }
                }
              });
              var j;
            }
          }
          function Re(t) {
            if (!Re.installed) {
              var e = t.util,
                n = t.mixin,
                i = e.append,
                o = e.attr,
                r = e.doc,
                s = e.fastdom,
                a = e.flipPosition,
                l = e.includes,
                u = e.isTouch,
                c = e.isVisible,
                h = e.matches,
                f = e.on,
                d = e.pointerDown,
                p = e.pointerEnter,
                m = e.pointerLeave,
                g = e.remove,
                v = e.within,
                y = [];
              t.component("tooltip", {
                attrs: !0,
                mixins: [n.container, n.togglable, n.position],
                props: { delay: Number, title: String },
                defaults: {
                  pos: "top",
                  title: "",
                  delay: 0,
                  animation: ["uk-animation-scale-up"],
                  duration: 100,
                  cls: "uk-active",
                  clsPos: "uk-tooltip"
                },
                connected: function() {
                  var t = this;
                  s.mutate(function() {
                    return o(t.$el, { title: null, "aria-expanded": !1 });
                  });
                },
                disconnected: function() {
                  this.hide();
                },
                methods: {
                  show: function() {
                    var t = this;
                    l(y, this) ||
                      (y.forEach(function(t) {
                        return t.hide();
                      }),
                      y.push(this),
                      (this._unbind = f(r, "click", function(e) {
                        return !v(e.target, t.$el) && t.hide();
                      })),
                      clearTimeout(this.showTimer),
                      (this.tooltip = i(
                        this.container,
                        '<div class="' +
                          this.clsPos +
                          '" aria-hidden><div class="' +
                          this.clsPos +
                          '-inner">' +
                          this.title +
                          "</div></div>"
                      )),
                      o(this.$el, "aria-expanded", !0),
                      this.positionAt(this.tooltip, this.$el),
                      (this.origin =
                        "y" === this.getAxis()
                          ? a(this.dir) + "-" + this.align
                          : this.align + "-" + a(this.dir)),
                      (this.showTimer = setTimeout(function() {
                        t.toggleElement(t.tooltip, !0),
                          (t.hideTimer = setInterval(function() {
                            c(t.$el) || t.hide();
                          }, 150));
                      }, this.delay)));
                  },
                  hide: function() {
                    var t = y.indexOf(this);
                    !~t ||
                      (h(this.$el, "input") && this.$el === r.activeElement) ||
                      (y.splice(t, 1),
                      clearTimeout(this.showTimer),
                      clearInterval(this.hideTimer),
                      o(this.$el, "aria-expanded", !1),
                      this.toggleElement(this.tooltip, !1),
                      this.tooltip && g(this.tooltip),
                      (this.tooltip = !1),
                      this._unbind());
                  }
                },
                events: ((w = { blur: "hide" }),
                (w["focus " + p + " " + d] = function(t) {
                  (t.type === d && u(t)) || this.show();
                }),
                (w[m] = function(t) {
                  u(t) || this.hide();
                }),
                w)
              });
              var w;
            }
          }
          function Ve(t) {
            function e(t, e) {
              return e.match(
                new RegExp(
                  "^" +
                    t
                      .replace(/\//g, "\\/")
                      .replace(/\*\*/g, "(\\/[^\\/]+)*")
                      .replace(/\*/g, "[^\\/]+")
                      .replace(/((?!\\))\?/g, "$1.") +
                    "$",
                  "i"
                )
              );
            }
            function n(t, e) {
              for (var n = [], i = 0; i < t.length; i += e) {
                for (var o = [], r = 0; r < e; r++) o.push(t[i + r]);
                n.push(o);
              }
              return n;
            }
            function i(t) {
              t.preventDefault(), t.stopPropagation();
            }
            if (!Ve.installed) {
              var o = t.util,
                r = o.addClass,
                s = o.ajax,
                a = o.matches,
                l = o.noop,
                u = o.on,
                c = o.removeClass,
                h = o.trigger;
              t.component("upload", {
                props: {
                  allow: String,
                  clsDragover: String,
                  concurrent: Number,
                  mime: String,
                  msgInvalidMime: String,
                  msgInvalidName: String,
                  multiple: Boolean,
                  name: String,
                  params: Object,
                  type: String,
                  url: String
                },
                defaults: {
                  allow: !1,
                  clsDragover: "uk-dragover",
                  concurrent: 1,
                  mime: !1,
                  msgInvalidMime: "Invalid File Type: %s",
                  msgInvalidName: "Invalid File Name: %s",
                  multiple: !1,
                  name: "files[]",
                  params: {},
                  type: "POST",
                  url: "",
                  abort: l,
                  beforeAll: l,
                  beforeSend: l,
                  complete: l,
                  completeAll: l,
                  error: l,
                  fail: l,
                  load: l,
                  loadEnd: l,
                  loadStart: l,
                  progress: l
                },
                events: {
                  change: function(t) {
                    a(t.target, 'input[type="file"]') &&
                      (t.preventDefault(),
                      t.target.files && this.upload(t.target.files),
                      (t.target.value = ""));
                  },
                  drop: function(t) {
                    i(t);
                    var e = t.dataTransfer;
                    e &&
                      e.files &&
                      (c(this.$el, this.clsDragover), this.upload(e.files));
                  },
                  dragenter: function(t) {
                    i(t);
                  },
                  dragover: function(t) {
                    i(t), r(this.$el, this.clsDragover);
                  },
                  dragleave: function(t) {
                    i(t), c(this.$el, this.clsDragover);
                  }
                },
                methods: {
                  upload: function(t) {
                    var i = this;
                    if (t.length) {
                      h(this.$el, "upload", [t]);
                      for (var o = 0; o < t.length; o++) {
                        if (i.allow && !e(i.allow, t[o].name))
                          return void i.fail(
                            i.msgInvalidName.replace(/%s/, i.allow)
                          );
                        if (i.mime && !e(i.mime, t[o].type))
                          return void i.fail(
                            i.msgInvalidMime.replace(/%s/, i.mime)
                          );
                      }
                      this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                      var r = n(t, this.concurrent),
                        a = function(t) {
                          var e = new FormData();
                          t.forEach(function(t) {
                            return e.append(i.name, t);
                          });
                          for (var n in i.params) e.append(n, i.params[n]);
                          s(i.url, {
                            data: e,
                            method: i.type,
                            beforeSend: function(t) {
                              var e = t.xhr;
                              e.upload && u(e.upload, "progress", i.progress),
                                [
                                  "loadStart",
                                  "load",
                                  "loadEnd",
                                  "abort"
                                ].forEach(function(t) {
                                  return u(e, t.toLowerCase(), i[t]);
                                }),
                                i.beforeSend(t);
                            }
                          }).then(
                            function(t) {
                              i.complete(t),
                                r.length ? a(r.shift()) : i.completeAll(t);
                            },
                            function(t) {
                              return i.error(t.message);
                            }
                          );
                        };
                      a(r.shift());
                    }
                  }
                }
              });
            }
          }
          var Ye = 2,
            qe = "setImmediate" in window ? e : setTimeout;
          (t.reject = function(e) {
            return new t(function(t, n) {
              n(e);
            });
          }),
            (t.resolve = function(e) {
              return new t(function(t, n) {
                t(e);
              });
            }),
            (t.all = function(e) {
              return new t(function(n, i) {
                var o = 0,
                  r = [];
                0 === e.length && n(r);
                for (var s = 0; s < e.length; s += 1)
                  t.resolve(e[s]).then(
                    (function(t) {
                      return function(i) {
                        (r[t] = i), (o += 1) === e.length && n(r);
                      };
                    })(s),
                    i
                  );
              });
            }),
            (t.race = function(e) {
              return new t(function(n, i) {
                for (var o = 0; o < e.length; o += 1)
                  t.resolve(e[o]).then(n, i);
              });
            });
          var Ue = t.prototype;
          (Ue.resolve = function(t) {
            var e = this;
            if (e.state === Ye) {
              if (t === e) throw new TypeError("Promise settled with itself.");
              var n = !1;
              try {
                var i = t && t.then;
                if (null !== t && d(t) && f(i))
                  return void i.call(
                    t,
                    function(t) {
                      n || e.resolve(t), (n = !0);
                    },
                    function(t) {
                      n || e.reject(t), (n = !0);
                    }
                  );
              } catch (t) {
                return void (n || e.reject(t));
              }
              (e.state = 0), (e.value = t), e.notify();
            }
          }),
            (Ue.reject = function(t) {
              var e = this;
              if (e.state === Ye) {
                if (t === e)
                  throw new TypeError("Promise settled with itself.");
                (e.state = 1), (e.value = t), e.notify();
              }
            }),
            (Ue.notify = function() {
              var t = this;
              qe(function() {
                if (t.state !== Ye)
                  for (; t.deferred.length; ) {
                    var e = t.deferred.shift(),
                      n = e[0],
                      i = e[1],
                      o = e[2],
                      r = e[3];
                    try {
                      0 === t.state
                        ? o(f(n) ? n.call(void 0, t.value) : t.value)
                        : 1 === t.state &&
                          (f(i) ? o(i.call(void 0, t.value)) : r(t.value));
                    } catch (t) {
                      r(t);
                    }
                  }
              });
            }),
            (Ue.then = function(e, n) {
              var i = this;
              return new t(function(t, o) {
                i.deferred.push([e, n, t, o]), i.notify();
              });
            }),
            (Ue.catch = function(t) {
              return this.then(void 0, t);
            });
          var Ge,
            Xe,
            Je,
            Ke = Object.prototype.hasOwnProperty,
            Ze = "Promise" in window ? window.Promise : t,
            Qe = /(?:^|[-_\/])(\w)/g,
            tn = /([a-z\d])([A-Z])/g,
            en = /-(\w)/g,
            nn = String.prototype,
            on =
              nn.startsWith ||
              function(t) {
                return 0 === this.lastIndexOf(t, 0);
              },
            rn =
              nn.endsWith ||
              function(t) {
                return this.substr(-1 * t.length) === t;
              },
            sn = function(t) {
              return ~this.indexOf(t);
            },
            an = nn.includes || sn,
            ln = Array.prototype.includes || sn,
            un = Array.isArray,
            cn = {},
            hn =
              Object.assign ||
              function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0; )
                  e[n] = arguments[n + 1];
                t = Object(t);
                for (var o = 0; o < e.length; o++) {
                  var r = e[o];
                  if (null !== r) for (var s in r) i(r, s) && (t[s] = r[s]);
                }
                return t;
              },
            fn = Array.prototype,
            dn = /(^|,)\s*[!>+~]/,
            pn = /([!>+~])(?=\s+[!>+~]|\s*$)/g,
            mn = Element.prototype,
            gn = mn.matches || mn.msMatchesSelector,
            vn =
              mn.closest ||
              function(t) {
                var e = this;
                do {
                  if (G(e, t)) return e;
                  e = e.parentNode;
                } while (e && 1 === e.nodeType);
              },
            yn = window,
            wn = document,
            bn = wn.documentElement,
            xn = "rtl" === nt(bn, "dir"),
            kn = "transitioncanceled",
            $n = {
              start: ut,
              stop: function(t) {
                return Kt(t, Xn), Ze.resolve();
              },
              cancel: function(t) {
                Kt(t, kn);
              },
              inProgress: function(t) {
                return Wt(t, "uk-transition");
              }
            },
            _n = "animationcancel",
            Tn = "uk-animation-",
            En = "uk-cancel-animation",
            Sn = new RegExp(Tn + "(enter|leave)"),
            An = {
              in: function(t, e, n, i) {
                return ct(t, e, n, i, !1);
              },
              out: function(t, e, n, i) {
                return ct(t, e, n, i, !0);
              },
              inProgress: function(t) {
                return Sn.test(nt(t, "class"));
              },
              cancel: function(t) {
                Kt(t, _n);
              }
            },
            Cn = {
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
              menuitem: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0
            },
            In = {
              ratio: function(t, e, n) {
                var i = "width" === e ? "height" : "width";
                return (
                  (o = {}), (o[i] = Math.round(n * t[i] / t[e])), (o[e] = n), o
                );
                var o;
              },
              contain: function(t, e) {
                var n = this;
                return (
                  (t = hn({}, t)),
                  O(t, function(i, o) {
                    return (t = t[o] > e[o] ? n.ratio(t, o, e[o]) : t);
                  }),
                  t
                );
              },
              cover: function(t, e) {
                var n = this;
                return (
                  (t = this.contain(t, e)),
                  O(t, function(i, o) {
                    return (t = t[o] < e[o] ? n.ratio(t, o, e[o]) : t);
                  }),
                  t
                );
              }
            },
            On = "input,select,textarea,button",
            Nn = /^\s*<(\w+|!)[^>]*>/,
            Mn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            Pn = {
              "animation-iteration-count": !0,
              "column-count": !0,
              "fill-opacity": !0,
              "flex-grow": !0,
              "flex-shrink": !0,
              "font-weight": !0,
              "line-height": !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              "z-index": !0,
              zoom: !0
            },
            Dn = {},
            Bn = {},
            Ln = ["webkit", "moz", "ms"],
            Hn = wn.createElement("div").style;
          !(function() {
            var t = wn.createElement("_").classList;
            t &&
              (t.add("a", "b"),
              t.toggle("c", !1),
              (Xe = t.contains("b")),
              (Je = !t.contains("c")),
              (Ge = !0)),
              (t = null);
          })();
          var jn = yn.MutationObserver || yn.WebKitMutationObserver,
            zn =
              yn.requestAnimationFrame ||
              function(t) {
                return setTimeout(t, 1e3 / 60);
              },
            Fn = "ontouchstart" in yn,
            Wn = yn.PointerEvent,
            Rn =
              "ontouchstart" in yn ||
              (yn.DocumentTouch && wn instanceof DocumentTouch) ||
              (navigator.msPointerEnabled && navigator.msMaxTouchPoints) ||
              (navigator.pointerEnabled && navigator.maxTouchPoints),
            Vn = Rn
              ? "mousedown " + (Fn ? "touchstart" : "pointerdown")
              : "mousedown",
            Yn = Rn
              ? "mousemove " + (Fn ? "touchmove" : "pointermove")
              : "mousemove",
            qn = Rn ? "mouseup " + (Fn ? "touchend" : "pointerup") : "mouseup",
            Un = Rn && Wn ? "pointerenter" : "mouseenter",
            Gn = Rn && Wn ? "pointerleave" : "mouseleave",
            Xn = Ut("transition", "transition-end"),
            Jn = Ut("animation", "animation-start"),
            Kn = Ut("animation", "animation-end"),
            Zn = {
              reads: [],
              writes: [],
              measure: function(t) {
                return this.reads.push(t), re(), t;
              },
              mutate: function(t) {
                return this.writes.push(t), re(), t;
              },
              clear: function(t) {
                return ae(this.reads, t) || ae(this.writes, t);
              },
              flush: function() {
                se(this.reads),
                  se(this.writes.splice(0, this.writes.length)),
                  (this.scheduled = !1),
                  (this.reads.length || this.writes.length) && re();
              }
            };
          le.prototype = {
            positions: [],
            position: null,
            init: function() {
              var t = this;
              (this.positions = []), (this.position = null);
              var e = !1;
              this.unbind = Gt(wn, "mousemove", function(n) {
                e ||
                  (setTimeout(function() {
                    var i = Date.now(),
                      o = t.positions.length;
                    o &&
                      i - t.positions[o - 1].time > 100 &&
                      t.positions.splice(0, o),
                      t.positions.push({ time: i, x: n.pageX, y: n.pageY }),
                      t.positions.length > 5 && t.positions.shift(),
                      (e = !1);
                  }, 5),
                  (e = !0));
              });
            },
            cancel: function() {
              this.unbind && this.unbind();
            },
            movesTo: function(t) {
              if (this.positions.length < 2) return !1;
              var e = pe(t),
                n = this.positions[this.positions.length - 1],
                i = this.positions[0];
              if (
                e.left <= n.x &&
                n.x <= e.right &&
                e.top <= n.y &&
                n.y <= e.bottom
              )
                return !1;
              var o = [
                [{ x: e.left, y: e.top }, { x: e.right, y: e.bottom }],
                [{ x: e.right, y: e.top }, { x: e.left, y: e.bottom }]
              ];
              return (
                e.right <= n.x ||
                  (e.left >= n.x
                    ? (o[0].reverse(), o[1].reverse())
                    : e.bottom <= n.y
                      ? o[0].reverse()
                      : e.top >= n.y && o[1].reverse()),
                !!o.reduce(function(t, e) {
                  return (
                    t + (ue(i, e[0]) < ue(n, e[0]) && ue(i, e[1]) > ue(n, e[1]))
                  );
                }, 0)
              );
            }
          };
          var Qn = {};
          (Qn.args = Qn.created = Qn.events = Qn.init = Qn.ready = Qn.connected = Qn.disconnected = Qn.destroy = function(
            t,
            e
          ) {
            return (
              (t = t && !un(t) ? [t] : t),
              e ? (t ? t.concat(e) : un(e) ? e : [e]) : t
            );
          }),
            (Qn.update = function(t, e) {
              return Qn.args(t, f(e) ? { read: e } : e);
            }),
            (Qn.props = function(t, e) {
              return (
                un(e) &&
                  (e = e.reduce(function(t, e) {
                    return (t[e] = String), t;
                  }, {})),
                Qn.methods(t, e)
              );
            }),
            (Qn.computed = Qn.defaults = Qn.methods = function(t, e) {
              return e ? (t ? hn({}, t, e) : e) : t;
            });
          var ti = function(t, e) {
              return x(e) ? t : e;
            },
            ei = 0,
            ni = function(t) {
              (this.id = ++ei), (this.el = tt(t));
            };
          (ni.prototype.isVideo = function() {
            return this.isYoutube() || this.isVimeo() || this.isHTML5();
          }),
            (ni.prototype.isHTML5 = function() {
              return "VIDEO" === this.el.tagName;
            }),
            (ni.prototype.isIFrame = function() {
              return "IFRAME" === this.el.tagName;
            }),
            (ni.prototype.isYoutube = function() {
              return (
                this.isIFrame() &&
                !!this.el.src.match(
                  /\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
                )
              );
            }),
            (ni.prototype.isVimeo = function() {
              return (
                this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
              );
            }),
            (ni.prototype.enableApi = function() {
              var t = this;
              if (this.ready) return this.ready;
              var e,
                n = this.isYoutube(),
                i = this.isVimeo();
              return n || i
                ? (this.ready = new Ze(function(o) {
                    Jt(t.el, "load", function() {
                      if (n) {
                        var i = function() {
                          return he(t.el, { event: "listening", id: t.id });
                        };
                        (e = setInterval(i, 100)), i();
                      }
                    }),
                      fe(function(e) {
                        return (
                          (n && e.id === t.id && "onReady" === e.event) ||
                          (i && Number(e.player_id) === t.id)
                        );
                      }).then(function() {
                        o(), e && clearInterval(e);
                      }),
                      nt(
                        t.el,
                        "src",
                        t.el.src +
                          (h(t.el.src, "?") ? "&" : "?") +
                          (n ? "enablejsapi=1" : "api=1&player_id=" + ei)
                      );
                  }))
                : Ze.resolve();
            }),
            (ni.prototype.play = function() {
              var t = this;
              this.isVideo() &&
                (this.isIFrame()
                  ? this.enableApi().then(function() {
                      return he(t.el, { func: "playVideo", method: "play" });
                    })
                  : this.isHTML5() && this.el.play());
            }),
            (ni.prototype.pause = function() {
              var t = this;
              this.isVideo() &&
                (this.isIFrame()
                  ? this.enableApi().then(function() {
                      return he(t.el, { func: "pauseVideo", method: "pause" });
                    })
                  : this.isHTML5() && this.el.pause());
            }),
            (ni.prototype.mute = function() {
              var t = this;
              this.isVideo() &&
                (this.isIFrame()
                  ? this.enableApi().then(function() {
                      return he(t.el, {
                        func: "mute",
                        method: "setVolume",
                        value: 0
                      });
                    })
                  : this.isHTML5() &&
                    ((this.el.muted = !0), nt(this.el, "muted", "")));
            });
          var ii,
            oi,
            ri,
            si,
            ai = {
              width: ["x", "left", "right"],
              height: ["y", "top", "bottom"]
            },
            li = ye("height"),
            ui = ye("width"),
            ci = {};
          lt(function() {
            Gt(
              wn,
              "click",
              function() {
                return (si = !0);
              },
              !0
            ),
              Gt(wn, Vn, function(t) {
                var e = t.target,
                  n = Ie(t),
                  i = n.x,
                  o = n.y,
                  r = Date.now();
                (ci.el = "tagName" in e ? e : e.parentNode),
                  ii && clearTimeout(ii),
                  (ci.x1 = i),
                  (ci.y1 = o),
                  ci.last && r - ci.last <= 250 && (ci = {}),
                  (ci.last = r),
                  (si = t.button > 0);
              }),
              Gt(wn, Yn, function(t) {
                var e = Ie(t),
                  n = e.x,
                  i = e.y;
                (ci.x2 = n), (ci.y2 = i);
              }),
              Gt(wn, qn, function(t) {
                var e = t.target;
                (ci.x2 && Math.abs(ci.x1 - ci.x2) > 30) ||
                (ci.y2 && Math.abs(ci.y1 - ci.y2) > 30)
                  ? (oi = setTimeout(function() {
                      ci.el &&
                        (Kt(ci.el, "swipe"), Kt(ci.el, "swipe" + Se(ci))),
                        (ci = {});
                    }))
                  : "last" in ci
                    ? ((ri = setTimeout(function() {
                        return ci.el && Kt(ci.el, "tap");
                      })),
                      ci.el &&
                        q(e, ci.el) &&
                        (ii = setTimeout(function() {
                          (ii = null),
                            ci.el && !si && Kt(ci.el, "click"),
                            (ci = {});
                        }, 350)))
                    : (ci = {});
              }),
              Gt(wn, "touchcancel", Ae),
              Gt(yn, "scroll", Ae);
          });
          var hi = !1;
          Gt(
            wn,
            "touchstart",
            function() {
              return (hi = !0);
            },
            !0
          ),
            Gt(wn, "click", function() {
              hi = !1;
            }),
            Gt(
              wn,
              "touchcancel",
              function() {
                return (hi = !1);
              },
              !0
            );
          var fi = Object.freeze({
              bind: n,
              hasOwn: i,
              Promise: Ze,
              classify: o,
              hyphenate: r,
              camelize: s,
              ucfirst: l,
              startsWith: u,
              endsWith: c,
              includes: h,
              isArray: un,
              isFunction: f,
              isObject: d,
              isPlainObject: p,
              isWindow: m,
              isDocument: g,
              isBoolean: v,
              isString: y,
              isNumber: w,
              isNumeric: b,
              isUndefined: x,
              toBoolean: k,
              toNumber: _,
              toFloat: T,
              toList: E,
              toMedia: S,
              coerce: A,
              toMs: C,
              swap: I,
              assign: hn,
              each: O,
              clamp: N,
              noop: M,
              intersectRect: P,
              pointInRect: D,
              ajax: B,
              $: L,
              $$: H,
              query: z,
              queryAll: F,
              filter: Y,
              within: q,
              matches: G,
              closest: X,
              parents: J,
              isJQuery: K,
              toNode: tt,
              toNodes: et,
              attr: nt,
              hasAttr: it,
              removeAttr: ot,
              filterAttr: rt,
              data: st,
              win: yn,
              doc: wn,
              docEl: bn,
              isRtl: xn,
              isReady: at,
              ready: lt,
              transition: ut,
              Transition: $n,
              animate: ct,
              Animation: An,
              isInView: ht,
              scrolledOver: ft,
              getIndex: pt,
              isVoidElement: mt,
              Dimensions: In,
              preventClick: gt,
              isVisible: vt,
              selInput: On,
              isInput: yt,
              empty: wt,
              html: bt,
              prepend: xt,
              append: kt,
              before: $t,
              after: _t,
              remove: Et,
              wrapAll: St,
              wrapInner: At,
              unwrap: Ct,
              fragment: It,
              index: Ot,
              css: Nt,
              getStyles: Mt,
              getStyle: Pt,
              getCssVar: Dt,
              addClass: Ht,
              removeClass: jt,
              removeClasses: zt,
              replaceClass: Ft,
              hasClass: Wt,
              toggleClass: Rt,
              Observer: jn,
              requestAnimationFrame: zn,
              hasTouch: Rn,
              pointerDown: Vn,
              pointerMove: Yn,
              pointerUp: qn,
              pointerEnter: Un,
              pointerLeave: Gn,
              transitionend: Xn,
              animationstart: Jn,
              animationend: Kn,
              getImage: qt,
              on: Gt,
              off: Xt,
              once: Jt,
              trigger: Kt,
              createEvent: Zt,
              toEventTargets: oe,
              fastdom: Zn,
              MouseTracker: le,
              mergeOptions: ce,
              Player: ni,
              positionAt: de,
              offset: pe,
              position: ge,
              height: li,
              width: ui,
              flipPosition: _e,
              isTouch: Ce,
              getPos: Ie
            }),
            di = function(t) {
              this._init(t);
            };
          (di.util = fi),
            (di.data = "__uikit__"),
            (di.prefix = "uk-"),
            (di.options = {}),
            (di.instances = {}),
            (di.elements = []),
            (function(t) {
              function e(t) {
                return new Function(
                  "return function " +
                    o(t) +
                    " (options) { this._init(options); }"
                )();
              }
              function n(t, e) {
                if (1 === t.nodeType)
                  for (e(t), t = t.firstElementChild; t; )
                    n(t, e), (t = t.nextElementSibling);
              }
              function i(t, e) {
                if (t) for (var n in t) t[n]._isReady && t[n]._callUpdate(e);
              }
              var r = t.data;
              (t.use = function(t) {
                if (!t.installed)
                  return t.call(null, this), (t.installed = !0), this;
              }),
                (t.mixin = function(e, n) {
                  (n = (y(n) ? t.components[n] : n) || this),
                    (e = ce({}, e)),
                    (e.mixins = n.options.mixins),
                    delete n.options.mixins,
                    (n.options = ce(e, n.options));
                }),
                (t.extend = function(t) {
                  t = t || {};
                  var n = this,
                    i = t.name || n.options.name,
                    o = e(i || "UIkitComponent");
                  return (
                    (o.prototype = Object.create(n.prototype)),
                    (o.prototype.constructor = o),
                    (o.options = ce(n.options, t)),
                    (o.super = n),
                    (o.extend = n.extend),
                    o
                  );
                }),
                (t.update = function(e, o, s) {
                  if ((void 0 === s && (s = !1), (e = Zt(e || "update")), !o))
                    return void i(t.instances, e);
                  if (((o = tt(o)), s))
                    do {
                      i(o[r], e), (o = o.parentNode);
                    } while (o);
                  else
                    n(o, function(t) {
                      return i(t[r], e);
                    });
                });
              var s;
              Object.defineProperty(t, "container", {
                get: function() {
                  return s || wn.body;
                },
                set: function(t) {
                  s = t;
                }
              });
            })(di),
            (function(t) {
              (t.prototype._callHook = function(t) {
                var e = this,
                  n = this.$options[t];
                n &&
                  n.forEach(function(t) {
                    return t.call(e);
                  });
              }),
                (t.prototype._callReady = function() {
                  this._isReady ||
                    ((this._isReady = !0),
                    this._callHook("ready"),
                    this._callUpdate());
                }),
                (t.prototype._callConnected = function() {
                  var e = this;
                  this._connected ||
                    (h(t.elements, this.$options.el) ||
                      t.elements.push(this.$options.el),
                    (t.instances[this._uid] = this),
                    this._initEvents(),
                    this._callHook("connected"),
                    (this._connected = !0),
                    this._initObserver(),
                    this._isReady ||
                      lt(function() {
                        return e._callReady();
                      }),
                    this._callUpdate());
                }),
                (t.prototype._callDisconnected = function() {
                  if (this._connected) {
                    this._observer &&
                      (this._observer.disconnect(), (this._observer = null));
                    var e = t.elements.indexOf(this.$options.el);
                    ~e && t.elements.splice(e, 1),
                      delete t.instances[this._uid],
                      this._unbindEvents(),
                      this._callHook("disconnected"),
                      (this._connected = !1);
                  }
                }),
                (t.prototype._callUpdate = function(t) {
                  var e = this;
                  t = Zt(t || "update");
                  var n = t.type,
                    i = t.detail;
                  "update" === n && i && i.mutation && (this._computeds = {});
                  var o = this.$options.update;
                  o &&
                    o.forEach(function(i, o) {
                      ("update" === n || h(i.events, n)) &&
                        (i.read &&
                          !h(Zn.reads, e._frames.reads[o]) &&
                          (e._frames.reads[o] = Zn.measure(function() {
                            i.read.call(e, t), delete e._frames.reads[o];
                          })),
                        i.write &&
                          !h(Zn.writes, e._frames.writes[o]) &&
                          (e._frames.writes[o] = Zn.mutate(function() {
                            i.write.call(e, t), delete e._frames.writes[o];
                          })));
                    });
                });
            })(di),
            (function(t) {
              function e(t, e) {
                var n = {},
                  i = t.args;
                void 0 === i && (i = []);
                var a = t.props;
                void 0 === a && (a = {});
                var l,
                  c,
                  h = t.el;
                if (!a) return n;
                for (l in a)
                  if (((c = r(l)), it(h, c))) {
                    var f = A(a[l], nt(h, c), h);
                    if ("target" === c && (!f || u(f, "_"))) continue;
                    n[l] = f;
                  }
                var d = o(st(h, e), i);
                for (l in d)
                  (c = s(l)), void 0 !== a[c] && (n[c] = A(a[c], d[l], h));
                return n;
              }
              function o(t, e) {
                void 0 === e && (e = []);
                try {
                  return t
                    ? u(t, "{")
                      ? JSON.parse(t)
                      : e.length && !h(t, ":")
                        ? ((n = {}), (n[e[0]] = t), n)
                        : t.split(";").reduce(function(t, e) {
                            var n = e.split(/:(.+)/),
                              i = n[0],
                              o = n[1];
                            return i && o && (t[i.trim()] = o.trim()), t;
                          }, {})
                    : {};
                  var n;
                } catch (t) {
                  return {};
                }
              }
              function a(t, e, n) {
                Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: function() {
                    var o = t._computeds,
                      r = t.$props,
                      s = t.$el;
                    return i(o, e) || (o[e] = n.call(t, r, s)), o[e];
                  },
                  set: function(n) {
                    t._computeds[e] = n;
                  }
                });
              }
              function l(t, e, i) {
                p(e) || (e = { name: i, handler: e });
                var o = e.name,
                  r = e.el,
                  s = e.delegate,
                  a = e.self,
                  u = e.filter,
                  h = e.handler;
                if (((r = f(r) ? r.call(t) : r || t.$el), un(r)))
                  return void r.forEach(function(n) {
                    return l(t, hn({}, e, { el: n }), i);
                  });
                !r ||
                  (u && !u.call(t)) ||
                  ((h = m(y(h) ? t[h] : n(h, t))),
                  a && (h = c(h)),
                  t._events.push(
                    Gt(r, o, s ? (y(s) ? s : s.call(t)) : null, h)
                  ));
              }
              function c(t) {
                return function(e) {
                  if (e.target === e.currentTarget || e.target === e.current)
                    return t.call(null, e);
                };
              }
              function d(t, e) {
                return t.every(function(t) {
                  return !t || !i(t, e);
                });
              }
              function m(t) {
                return function(e) {
                  return un(e.detail) ? t.apply(t, [e].concat(e.detail)) : t(e);
                };
              }
              var g = 0;
              (t.prototype.props = {}),
                (t.prototype._init = function(e) {
                  (e = e || {}),
                    (e = this.$options = ce(this.constructor.options, e, this)),
                    (this.$el = null),
                    (this.$name = t.prefix + r(this.$options.name)),
                    (this.$props = {}),
                    (this._frames = { reads: {}, writes: {} }),
                    (this._events = []),
                    (this._uid = g++),
                    this._initData(),
                    this._initMethods(),
                    this._initComputeds(),
                    this._callHook("created"),
                    e.el && this.$mount(e.el);
                }),
                (t.prototype._initData = function() {
                  var t = this,
                    e = this.$options,
                    n = e.defaults,
                    o = e.data;
                  void 0 === o && (o = {});
                  var r = e.args;
                  void 0 === r && (r = []);
                  var s = e.props;
                  void 0 === s && (s = {});
                  var a = e.el;
                  r.length &&
                    un(o) &&
                    (o = o.slice(0, r.length).reduce(function(t, e, n) {
                      return p(e) ? hn(t, e) : (t[r[n]] = e), t;
                    }, {}));
                  for (var l in n)
                    t.$props[l] = t[l] =
                      i(o, l) && !x(o[l])
                        ? A(s[l], o[l], a)
                        : un(n[l]) ? n[l].concat() : n[l];
                }),
                (t.prototype._initMethods = function() {
                  var t = this,
                    e = this.$options.methods;
                  if (e) for (var i in e) t[i] = n(e[i], t);
                }),
                (t.prototype._initComputeds = function() {
                  var t = this,
                    e = this.$options.computed;
                  if (((this._computeds = {}), e))
                    for (var n in e) a(t, n, e[n]);
                }),
                (t.prototype._initProps = function(t) {
                  var n = this;
                  (this._computeds = {}),
                    hn(this.$props, t || e(this.$options, this.$name));
                  var i = [this.$options.computed, this.$options.methods];
                  for (var o in n.$props) d(i, o) && (n[o] = n.$props[o]);
                }),
                (t.prototype._initEvents = function() {
                  var t = this,
                    e = this.$options.events;
                  e &&
                    e.forEach(function(e) {
                      if (i(e, "handler")) l(t, e);
                      else for (var n in e) l(t, e[n], n);
                    });
                }),
                (t.prototype._unbindEvents = function() {
                  this._events.forEach(function(t) {
                    return t();
                  }),
                    (this._events = []);
                }),
                (t.prototype._initObserver = function() {
                  var t = this,
                    n = this.$options,
                    i = n.attrs,
                    o = n.props,
                    s = n.el;
                  !this._observer &&
                    o &&
                    i &&
                    jn &&
                    ((i = un(i)
                      ? i
                      : Object.keys(o).map(function(t) {
                          return r(t);
                        })),
                    (this._observer = new jn(function() {
                      var n = e(t.$options, t.$name);
                      i.some(function(e) {
                        return !x(n[e]) && n[e] !== t.$props[e];
                      }) && t.$reset(n);
                    })),
                    this._observer.observe(s, {
                      attributes: !0,
                      attributeFilter: i.concat([
                        this.$name,
                        "data-" + this.$name
                      ])
                    }));
                });
            })(di),
            (function(t) {
              var e = t.data;
              (t.prototype.$mount = function(t) {
                var n = this.$options.name;
                t[e] || (t[e] = {}),
                  t[e][n] ||
                    ((t[e][n] = this),
                    (this.$el = this.$options.el = this.$options.el || t),
                    this._initProps(),
                    this._callHook("init"),
                    q(t, bn) && this._callConnected());
              }),
                (t.prototype.$emit = function(t) {
                  this._callUpdate(t);
                }),
                (t.prototype.$update = function(e, n) {
                  t.update(e, this.$options.el, n);
                }),
                (t.prototype.$reset = function(t) {
                  this._callDisconnected(),
                    this._initProps(t),
                    this._callConnected();
                }),
                (t.prototype.$destroy = function(t) {
                  void 0 === t && (t = !1);
                  var n = this.$options,
                    i = n.el,
                    o = n.name;
                  i && this._callDisconnected(),
                    this._callHook("destroy"),
                    i &&
                      i[e] &&
                      (delete i[e][o],
                      Object.keys(i[e]).length || delete i[e],
                      t && Et(this.$el));
                });
            })(di),
            (function(t) {
              var e = t.data;
              (t.components = {}),
                (t.component = function(e, n) {
                  var i = s(e);
                  if (p(n)) (n.name = i), (n = t.extend(n));
                  else {
                    if (x(n)) return t.components[i];
                    n.options.name = i;
                  }
                  return (
                    (t.components[i] = n),
                    (t[i] = function(e, n) {
                      function o(e) {
                        return (
                          t.getComponent(e, i) ||
                          new t.components[i]({ el: e, data: n || {} })
                        );
                      }
                      for (var r = arguments.length, s = Array(r); r--; )
                        s[r] = arguments[r];
                      return p(e)
                        ? new t.components[i]({ data: e })
                        : t.components[i].options.functional
                          ? new t.components[i]({ data: [].concat(s) })
                          : e && e.nodeType ? o(e) : H(e).map(o)[0];
                    }),
                    t._initialized &&
                      !n.options.functional &&
                      Zn.measure(function() {
                        return t[i]("[uk-" + e + "],[data-uk-" + e + "]");
                      }),
                    t.components[i]
                  );
                }),
                (t.getComponents = function(t) {
                  return (t && (t = K(t) ? t[0] : t) && t[e]) || {};
                }),
                (t.getComponent = function(e, n) {
                  return t.getComponents(e)[n];
                }),
                (t.connect = function(n) {
                  var i;
                  if (n[e]) for (i in n[e]) n[e][i]._callConnected();
                  for (var o = 0; o < n.attributes.length; o++)
                    (i = n.attributes[o].name),
                      (u(i, "uk-") || u(i, "data-uk-")) &&
                        ((i = s(i.replace("data-uk-", "").replace("uk-", ""))),
                        t[i] && t[i](n));
                }),
                (t.disconnect = function(t) {
                  for (var n in t[e]) t[e][n]._callDisconnected();
                });
            })(di);
          var pi,
            mi,
            gi,
            vi = {
              init: function() {
                Ht(this.$el, this.$name);
              }
            },
            yi = {
              props: { container: Boolean },
              defaults: { container: !0 },
              computed: {
                container: function(t) {
                  var e = t.container;
                  return (
                    (!0 === e && di.container) || (e && $(e)) || di.container
                  );
                }
              }
            },
            wi = {
              props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String,
                queued: Boolean
              },
              defaults: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {
                  overflow: "",
                  height: "",
                  paddingTop: "",
                  paddingBottom: "",
                  marginTop: "",
                  marginBottom: ""
                },
                hideProps: {
                  overflow: "hidden",
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginBottom: 0
                }
              },
              computed: {
                hasAnimation: function(t) {
                  return !!t.animation[0];
                },
                hasTransition: function(t) {
                  var e = t.animation;
                  return this.hasAnimation && !0 === e[0];
                }
              },
              methods: {
                toggleElement: function(t, e, n) {
                  var i = this;
                  return new Ze(function(o) {
                    t = et(t);
                    var r,
                      s = function(t) {
                        return Ze.all(
                          t.map(function(t) {
                            return i._toggleElement(t, e, n);
                          })
                        );
                      },
                      a = t.filter(function(t) {
                        return i.isToggled(t);
                      }),
                      l = t.filter(function(t) {
                        return !h(a, t);
                      });
                    if (
                      i.queued &&
                      x(n) &&
                      x(e) &&
                      i.hasAnimation &&
                      !(t.length < 2)
                    ) {
                      var u = wn.body,
                        c = u.scrollTop,
                        f = a[0],
                        d =
                          (An.inProgress(f) && Wt(f, "uk-animation-leave")) ||
                          ($n.inProgress(f) && "0px" === f.style.height);
                      (r = s(a)),
                        d ||
                          (r = r.then(function() {
                            var t = s(l);
                            return (u.scrollTop = c), t;
                          }));
                    } else r = s(l.concat(a));
                    r.then(o, M);
                  });
                },
                toggleNow: function(t, e) {
                  var n = this;
                  return new Ze(function(i) {
                    return Ze.all(
                      et(t).map(function(t) {
                        return n._toggleElement(t, e, !1);
                      })
                    ).then(i, M);
                  });
                },
                isToggled: function(t) {
                  var e = et(t || this.$el);
                  return this.cls
                    ? Wt(e, this.cls.split(" ")[0])
                    : !it(e, "hidden");
                },
                updateAria: function(t) {
                  !1 === this.cls && nt(t, "aria-hidden", !this.isToggled(t));
                },
                _toggleElement: function(t, e, n) {
                  var i = this;
                  if (
                    ((e = v(e)
                      ? e
                      : An.inProgress(t)
                        ? Wt(t, "uk-animation-leave")
                        : $n.inProgress(t)
                          ? "0px" === t.style.height
                          : !this.isToggled(t)),
                    !Kt(t, "before" + (e ? "show" : "hide"), [this]))
                  )
                    return Ze.reject();
                  var o = (!1 !== n && this.hasAnimation
                    ? this.hasTransition
                      ? this._toggleHeight
                      : this._toggleAnimation
                    : this._toggleImmediate)(t, e);
                  return (
                    Kt(t, e ? "show" : "hide", [this]),
                    o.then(function() {
                      Kt(t, e ? "shown" : "hidden", [i]), di.update(null, t);
                    })
                  );
                },
                _toggle: function(t, e) {
                  this.cls
                    ? Rt(t, this.cls, h(this.cls, " ") ? void 0 : e)
                    : nt(t, "hidden", e ? null : ""),
                    H("[autofocus]", t).some(function(t) {
                      return vt(t) && (t.focus() || !0);
                    }),
                    this.updateAria(t),
                    di.update(null, t);
                },
                _toggleImmediate: function(t, e) {
                  return this._toggle(t, e), Ze.resolve();
                },
                _toggleHeight: function(t, e) {
                  var n,
                    i = this,
                    o = $n.inProgress(t),
                    r = t.hasChildNodes
                      ? T(Nt(t.firstElementChild, "marginTop")) +
                        T(Nt(t.lastElementChild, "marginBottom"))
                      : 0,
                    s = vt(t) ? li(t) + (o ? 0 : r) : 0;
                  return (
                    $n.cancel(t),
                    this.isToggled(t) || this._toggle(t, !0),
                    li(t, ""),
                    Zn.flush(),
                    (n = li(t) + (o ? 0 : r)),
                    li(t, s),
                    (e
                      ? $n.start(
                          t,
                          hn({}, this.initProps, {
                            overflow: "hidden",
                            height: n
                          }),
                          Math.round(this.duration * (1 - s / n)),
                          this.transition
                        )
                      : $n
                          .start(
                            t,
                            this.hideProps,
                            Math.round(this.duration * (s / n)),
                            this.transition
                          )
                          .then(function() {
                            return i._toggle(t, !1);
                          })
                    ).then(function() {
                      return Nt(t, i.initProps);
                    })
                  );
                },
                _toggleAnimation: function(t, e) {
                  var n = this;
                  return (
                    An.cancel(t),
                    e
                      ? (this._toggle(t, !0),
                        An.in(t, this.animation[0], this.duration, this.origin))
                      : An.out(
                          t,
                          this.animation[1] || this.animation[0],
                          this.duration,
                          this.origin
                        ).then(function() {
                          return n._toggle(t, !1);
                        })
                  );
                }
              }
            },
            bi = {
              mixins: [vi, yi, wi],
              props: {
                clsPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean
              },
              defaults: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1
              },
              computed: {
                panel: function(t, e) {
                  return L("." + t.clsPanel, e);
                },
                transitionElement: function() {
                  return this.panel;
                },
                transitionDuration: function() {
                  return C(Nt(this.transitionElement, "transitionDuration"));
                }
              },
              events: [
                {
                  name: "click",
                  delegate: function() {
                    return this.selClose;
                  },
                  handler: function(t) {
                    t.preventDefault(), this.hide();
                  }
                },
                {
                  name: "toggle",
                  handler: function(t) {
                    t.defaultPrevented || (t.preventDefault(), this.toggle());
                  }
                },
                {
                  name: "show",
                  self: !0,
                  handler: function() {
                    Wt(bn, this.clsPage) ||
                      ((this.scrollbarWidth = ui(yn) - bn.offsetWidth),
                      Nt(
                        wn.body,
                        "overflowY",
                        this.scrollbarWidth && this.overlay ? "scroll" : ""
                      )),
                      Ht(bn, this.clsPage);
                  }
                },
                {
                  name: "hidden",
                  self: !0,
                  handler: function() {
                    for (var t, e = this, n = this.prev; n; ) {
                      if (n.clsPage === e.clsPage) {
                        t = !0;
                        break;
                      }
                      n = n.prev;
                    }
                    t || jt(bn, this.clsPage),
                      !this.prev && Nt(wn.body, "overflowY", "");
                  }
                }
              ],
              methods: {
                toggle: function() {
                  return this.isToggled() ? this.hide() : this.show();
                },
                show: function() {
                  if (!this.isToggled()) {
                    this.container &&
                      this.$el.parentNode !== this.container &&
                      (kt(this.container, this.$el), this._callConnected());
                    var t = pi && pi !== this && pi;
                    if (((pi = this), t)) {
                      if (!this.stack) return void t.hide().then(this.show);
                      this.prev = t;
                    }
                    return Oe(), this.toggleNow(this.$el, !0);
                  }
                },
                hide: function() {
                  if (this.isToggled())
                    return (
                      (pi = (pi && pi !== this && pi) || this.prev),
                      pi || Ne(),
                      this.toggleNow(this.$el, !1)
                    );
                },
                getActive: function() {
                  return pi;
                },
                _toggleImmediate: function(t, e) {
                  var n = this;
                  return new Ze(function(i) {
                    return zn(function() {
                      n._toggle(t, e),
                        n.transitionDuration
                          ? Jt(n.transitionElement, Xn, i, !1, function(t) {
                              return t.target === n.transitionElement;
                            })
                          : i();
                    });
                  });
                }
              }
            },
            xi = {
              props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
              },
              defaults: {
                pos: "bottom-" + (xn ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: ""
              },
              computed: {
                pos: function(t) {
                  var e = t.pos;
                  return (e + (h(e, "-") ? "" : "-center")).split("-");
                },
                dir: function() {
                  return this.pos[0];
                },
                align: function() {
                  return this.pos[1];
                }
              },
              methods: {
                positionAt: function(t, e, n) {
                  zt(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"),
                    Nt(t, { top: "", left: "" });
                  var i = _(this.offset) || 0,
                    o = this.getAxis(),
                    r = de(
                      t,
                      e,
                      "x" === o
                        ? _e(this.dir) + " " + this.align
                        : this.align + " " + _e(this.dir),
                      "x" === o
                        ? this.dir + " " + this.align
                        : this.align + " " + this.dir,
                      "x" === o
                        ? "" + ("left" === this.dir ? -1 * i : i)
                        : " " + ("top" === this.dir ? -1 * i : i),
                      null,
                      this.flip,
                      n
                    ).target,
                    s = r.x,
                    a = r.y;
                  (this.dir = "x" === o ? s : a),
                    (this.align = "x" === o ? a : s),
                    Rt(
                      t,
                      this.clsPos + "-" + this.dir + "-" + this.align,
                      !1 === this.offset
                    );
                },
                getAxis: function() {
                  return "top" === this.dir || "bottom" === this.dir
                    ? "y"
                    : "x";
                }
              }
            },
            ki = function(t) {
              t.component("accordion", {
                mixins: [vi, wi],
                props: {
                  targets: String,
                  active: null,
                  collapsible: Boolean,
                  multiple: Boolean,
                  toggle: String,
                  content: String,
                  transition: String
                },
                defaults: {
                  targets: "> *",
                  active: !1,
                  animation: [!0],
                  collapsible: !0,
                  multiple: !1,
                  clsOpen: "uk-open",
                  toggle: "> .uk-accordion-title",
                  content: "> .uk-accordion-content",
                  transition: "ease"
                },
                computed: {
                  items: function(t, e) {
                    return H(t.targets, e);
                  }
                },
                events: [
                  {
                    name: "click",
                    self: !0,
                    delegate: function() {
                      return this.targets + " " + this.$props.toggle;
                    },
                    handler: function(t) {
                      t.preventDefault(),
                        this.toggle(
                          Ot(
                            H(
                              this.targets + " " + this.$props.toggle,
                              this.$el
                            ),
                            t.current
                          )
                        );
                    }
                  }
                ],
                ready: function() {
                  var t =
                    !1 !== this.active &&
                    this.items[Number(this.active)] &&
                    !Wt(t, this.clsOpen);
                  t && this.toggle(t, !1);
                },
                update: function() {
                  var t = this;
                  this.items.forEach(function(e) {
                    return t.toggleNow(L(t.content, e), Wt(e, t.clsOpen));
                  });
                  var e =
                    !this.collapsible &&
                    !Wt(this.items, this.clsOpen) &&
                    this.items[0];
                  e && this.toggle(e, !1);
                },
                methods: {
                  toggle: function(t, e) {
                    var n = this,
                      i = pt(t, this.items),
                      o = Y(this.items, "." + this.clsOpen);
                    (t = this.items[i]) &&
                      [t]
                        .concat((!this.multiple && !h(o, t) && o) || [])
                        .forEach(function(i) {
                          var r = i === t,
                            s = r && !Wt(i, n.clsOpen);
                          if (s || !r || n.collapsible || !(o.length < 2)) {
                            Rt(i, n.clsOpen, s);
                            var a = i._wrapper
                              ? i._wrapper.firstElementChild
                              : L(n.content, i);
                            i._wrapper ||
                              ((i._wrapper = St(a, "<div>")),
                              nt(i._wrapper, "hidden", s ? "" : null)),
                              n._toggleImmediate(a, !0),
                              n
                                .toggleElement(i._wrapper, s, e)
                                .then(function() {
                                  Wt(i, n.clsOpen) === s &&
                                    (s || n._toggleImmediate(a, !1),
                                    (i._wrapper = null),
                                    Ct(a));
                                });
                          }
                        });
                  }
                }
              });
            },
            $i = function(t) {
              t.component("alert", {
                attrs: !0,
                mixins: [vi, wi],
                args: "animation",
                props: { close: String },
                defaults: {
                  animation: [!0],
                  selClose: ".uk-alert-close",
                  duration: 150,
                  hideProps: hn({ opacity: 0 }, wi.defaults.hideProps)
                },
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return this.selClose;
                    },
                    handler: function(t) {
                      t.preventDefault(), this.close();
                    }
                  }
                ],
                methods: {
                  close: function() {
                    var t = this;
                    this.toggleElement(this.$el).then(function() {
                      return t.$destroy(!0);
                    });
                  }
                }
              });
            },
            _i = function(t) {
              t.component("cover", {
                mixins: [vi, t.components.video.options],
                props: { width: Number, height: Number },
                defaults: { automute: !0 },
                update: {
                  write: function() {
                    var t = this.$el;
                    if (vt(t)) {
                      var e = t.parentNode,
                        n = e.offsetHeight,
                        i = e.offsetWidth;
                      Nt(
                        Nt(t, { width: "", height: "" }),
                        In.cover(
                          {
                            width: this.width || t.clientWidth,
                            height: this.height || t.clientHeight
                          },
                          {
                            width: i + (i % 2 ? 1 : 0),
                            height: n + (n % 2 ? 1 : 0)
                          }
                        )
                      );
                    }
                  },
                  events: ["load", "resize"]
                },
                events: {
                  loadedmetadata: function() {
                    this.$emit();
                  }
                }
              });
            },
            Ti = function(t) {
              function e() {
                i ||
                  ((i = !0),
                  Gt(bn, "click", function(t) {
                    var e,
                      i = t.target,
                      o = t.defaultPrevented;
                    if (!o)
                      for (
                        ;
                        n &&
                        n !== e &&
                        !q(i, n.$el) &&
                        (!n.toggle || !q(i, n.toggle.$el));

                      )
                        (e = n), n.hide(!1);
                  }));
              }
              var n;
              t.component("drop", {
                mixins: [xi, wi],
                args: "pos",
                props: {
                  mode: "list",
                  toggle: Boolean,
                  boundary: "query",
                  boundaryAlign: Boolean,
                  delayShow: Number,
                  delayHide: Number,
                  clsDrop: String
                },
                defaults: {
                  mode: ["click", "hover"],
                  toggle: !0,
                  boundary: yn,
                  boundaryAlign: !1,
                  delayShow: 0,
                  delayHide: 800,
                  clsDrop: !1,
                  hoverIdle: 200,
                  animation: ["uk-animation-fade"],
                  cls: "uk-open"
                },
                init: function() {
                  (this.tracker = new le()),
                    (this.clsDrop = this.clsDrop || "uk-" + this.$options.name),
                    (this.clsPos = this.clsDrop),
                    Ht(this.$el, this.clsDrop);
                },
                ready: function() {
                  this.updateAria(this.$el),
                    this.toggle &&
                      (this.toggle = t.toggle(
                        y(this.toggle)
                          ? z(this.toggle, this.$el)
                          : this.$el.previousElementSibling,
                        { target: this.$el, mode: this.mode }
                      ));
                },
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return "." + this.clsDrop + "-close";
                    },
                    handler: function(t) {
                      t.preventDefault(), this.hide(!1);
                    }
                  },
                  {
                    name: "click",
                    delegate: function() {
                      return 'a[href^="#"]';
                    },
                    handler: function(t) {
                      if (!t.defaultPrevented) {
                        var e = t.target.hash;
                        e || t.preventDefault(),
                          (e && q(e, this.$el)) || this.hide(!1);
                      }
                    }
                  },
                  {
                    name: "beforescroll",
                    handler: function() {
                      this.hide(!1);
                    }
                  },
                  {
                    name: "toggle",
                    self: !0,
                    handler: function(t, e) {
                      t.preventDefault(),
                        this.isToggled() ? this.hide(!1) : this.show(e, !1);
                    }
                  },
                  {
                    name: Un,
                    filter: function() {
                      return h(this.mode, "hover");
                    },
                    handler: function(t) {
                      Ce(t) ||
                        (n &&
                          n !== this &&
                          n.toggle &&
                          h(n.toggle.mode, "hover") &&
                          !q(t.target, n.toggle.$el) &&
                          !D({ x: t.pageX, y: t.pageY }, pe(n.$el)) &&
                          n.hide(!1),
                        t.preventDefault(),
                        this.show(this.toggle));
                    }
                  },
                  {
                    name: "toggleshow",
                    handler: function(t, e) {
                      (e && !h(e.target, this.$el)) ||
                        (t.preventDefault(), this.show(e || this.toggle));
                    }
                  },
                  {
                    name: "togglehide " + Gn,
                    handler: function(t, e) {
                      Ce(t) ||
                        (e && !h(e.target, this.$el)) ||
                        (t.preventDefault(),
                        this.toggle &&
                          h(this.toggle.mode, "hover") &&
                          this.hide());
                    }
                  },
                  {
                    name: "beforeshow",
                    self: !0,
                    handler: function() {
                      this.clearTimers();
                    }
                  },
                  {
                    name: "show",
                    self: !0,
                    handler: function() {
                      this.tracker.init(),
                        Ht(this.toggle.$el, this.cls),
                        nt(this.toggle.$el, "aria-expanded", "true"),
                        e();
                    }
                  },
                  {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                      this.clearTimers();
                    }
                  },
                  {
                    name: "hide",
                    handler: function(t) {
                      var e = t.target;
                      if (this.$el !== e)
                        return void (n =
                          null === n && q(e, this.$el) && this.isToggled()
                            ? this
                            : n);
                      (n = this.isActive() ? null : n),
                        jt(this.toggle.$el, this.cls),
                        nt(this.toggle.$el, "aria-expanded", "false"),
                        this.toggle.$el.blur(),
                        H("a, button", this.toggle.$el).forEach(function(t) {
                          return t.blur();
                        }),
                        this.tracker.cancel();
                    }
                  }
                ],
                update: {
                  write: function() {
                    this.isToggled() &&
                      !An.inProgress(this.$el) &&
                      this.position();
                  },
                  events: ["resize"]
                },
                methods: {
                  show: function(t, e) {
                    var i = this;
                    void 0 === e && (e = !0);
                    var o = function() {
                        i.isToggled() ||
                          (i.position(), i.toggleElement(i.$el, !0));
                      },
                      r = function() {
                        if (
                          ((i.toggle = t || i.toggle),
                          i.clearTimers(),
                          !i.isActive())
                        ) {
                          if (e && n && n !== i && n.isDelaying)
                            return void (i.showTimer = setTimeout(i.show, 10));
                          if (i.isParentOf(n)) {
                            if (!n.hideTimer) return;
                            n.hide(!1);
                          } else if (n && !i.isChildOf(n) && !i.isParentOf(n))
                            for (var r; n && n !== r && !i.isChildOf(n); )
                              (r = n), n.hide(!1);
                          e && i.delayShow
                            ? (i.showTimer = setTimeout(o, i.delayShow))
                            : o(),
                            (n = i);
                        }
                      };
                    t && this.toggle && t.$el !== this.toggle.$el
                      ? (Jt(this.$el, "hide", r), this.hide(!1))
                      : r();
                  },
                  hide: function(t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var n = function() {
                      return e.toggleNow(e.$el, !1);
                    };
                    this.clearTimers(),
                      (this.isDelaying = this.tracker.movesTo(this.$el)),
                      t && this.isDelaying
                        ? (this.hideTimer = setTimeout(
                            this.hide,
                            this.hoverIdle
                          ))
                        : t && this.delayHide
                          ? (this.hideTimer = setTimeout(n, this.delayHide))
                          : n();
                  },
                  clearTimers: function() {
                    clearTimeout(this.showTimer),
                      clearTimeout(this.hideTimer),
                      (this.showTimer = null),
                      (this.hideTimer = null),
                      (this.isDelaying = !1);
                  },
                  isActive: function() {
                    return n === this;
                  },
                  isChildOf: function(t) {
                    return t && t !== this && q(this.$el, t.$el);
                  },
                  isParentOf: function(t) {
                    return t && t !== this && q(t.$el, this.$el);
                  },
                  position: function() {
                    zt(this.$el, this.clsDrop + "-(stack|boundary)"),
                      Nt(this.$el, { top: "", left: "", display: "block" }),
                      Rt(
                        this.$el,
                        this.clsDrop + "-boundary",
                        this.boundaryAlign
                      );
                    var t = pe(this.boundary),
                      e = this.boundaryAlign ? t : pe(this.toggle.$el);
                    if ("justify" === this.align) {
                      var n = "y" === this.getAxis() ? "width" : "height";
                      Nt(this.$el, n, e[n]);
                    } else
                      this.$el.offsetWidth >
                        Math.max(t.right - e.left, e.right - t.left) &&
                        (Ht(this.$el, this.clsDrop + "-stack"),
                        Kt(this.$el, "stack", [this]));
                    this.positionAt(
                      this.$el,
                      this.boundaryAlign ? this.boundary : this.toggle.$el,
                      this.boundary
                    ),
                      Nt(this.$el, "display", "");
                  }
                }
              }),
                (t.drop.getActive = function() {
                  return n;
                });
              var i;
            },
            Ei = function(t) {
              t.component(
                "dropdown",
                t.components.drop.extend({ name: "dropdown" })
              );
            },
            Si = function(t) {
              t.component("form-custom", {
                mixins: [vi],
                args: "target",
                props: { target: Boolean },
                defaults: { target: !1 },
                computed: {
                  input: function(t, e) {
                    return L(On, e);
                  },
                  state: function() {
                    return this.input.nextElementSibling;
                  },
                  target: function(t, e) {
                    var n = t.target;
                    return (
                      n &&
                      ((!0 === n &&
                        this.input.parentNode === e &&
                        this.input.nextElementSibling) ||
                        z(n, e))
                    );
                  }
                },
                connected: function() {
                  Kt(this.input, "change");
                },
                events: [
                  {
                    name: "focusin focusout mouseenter mouseleave",
                    delegate: On,
                    handler: function(t) {
                      var e = t.type;
                      t.current === this.input &&
                        Rt(
                          this.state,
                          "uk-" + (h(e, "focus") ? "focus" : "hover"),
                          h(["focusin", "mouseenter"], e)
                        );
                    }
                  },
                  {
                    name: "change",
                    handler: function() {
                      var t,
                        e = this.target,
                        n = this.input;
                      e &&
                        (e[yt(e) ? "value" : "textContent"] =
                          n.files && n.files[0]
                            ? n.files[0].name
                            : G(n, "select") &&
                              (t = H("option", n).filter(function(t) {
                                return t.selected;
                              })[0])
                              ? t.textContent
                              : n.value);
                    }
                  }
                ]
              });
            },
            Ai = function(t) {
              t.component("gif", {
                update: {
                  read: function() {
                    var t = ht(this.$el);
                    !this.isInView && t && (this.$el.src = this.$el.src),
                      (this.isInView = t);
                  },
                  events: ["scroll", "load", "resize"]
                }
              });
            },
            Ci = function(t) {
              t.component(
                "grid",
                t.components.margin.extend({
                  mixins: [vi],
                  name: "grid",
                  defaults: {
                    margin: "uk-grid-margin",
                    clsStack: "uk-grid-stack"
                  },
                  update: {
                    write: function() {
                      Rt(this.$el, this.clsStack, this.stacks);
                    },
                    events: ["load", "resize"]
                  }
                })
              );
            },
            Ii = function(t) {
              t.component("height-match", {
                args: "target",
                props: { target: String, row: Boolean },
                defaults: { target: "> *", row: !0 },
                computed: {
                  elements: function(t, e) {
                    return H(t.target, e);
                  }
                },
                update: {
                  read: function() {
                    var t = this,
                      e = !1;
                    Nt(this.elements, "minHeight", ""),
                      (this.rows = this.row
                        ? this.elements
                            .reduce(function(t, n) {
                              return (
                                e !== n.offsetTop
                                  ? t.push([n])
                                  : t[t.length - 1].push(n),
                                (e = n.offsetTop),
                                t
                              );
                            }, [])
                            .map(function(e) {
                              return t.match(e);
                            })
                        : [this.match(this.elements)]);
                  },
                  write: function() {
                    this.rows.forEach(function(t) {
                      var e = t.height;
                      return Nt(t.elements, "minHeight", e);
                    });
                  },
                  events: ["load", "resize"]
                },
                methods: {
                  match: function(t) {
                    if (t.length < 2) return {};
                    var e = 0,
                      n = [];
                    return (
                      t.forEach(function(t) {
                        var i, o;
                        vt(t) ||
                          ((i = nt(t, "style")),
                          (o = nt(t, "hidden")),
                          nt(t, {
                            style: (i || "") + ";display:block !important;",
                            hidden: null
                          })),
                          (e = Math.max(e, t.offsetHeight)),
                          n.push(t.offsetHeight),
                          x(i) || nt(t, { style: i, hidden: o });
                      }),
                      (t = t.filter(function(t, i) {
                        return n[i] < e;
                      })),
                      { height: e, elements: t }
                    );
                  }
                }
              });
            },
            Oi = function(t) {
              function e(t) {
                return (t && t.offsetHeight) || 0;
              }
              t.component("height-viewport", {
                props: {
                  expand: Boolean,
                  offsetTop: Boolean,
                  offsetBottom: Boolean,
                  minHeight: Number
                },
                defaults: {
                  expand: !1,
                  offsetTop: !1,
                  offsetBottom: !1,
                  minHeight: 0
                },
                update: {
                  write: function() {
                    Nt(this.$el, "boxSizing", "border-box");
                    var t,
                      n = li(yn),
                      i = 0;
                    if (this.expand) {
                      Nt(this.$el, { height: "", minHeight: "" });
                      var o = n - e(bn);
                      o > 0 && (t = e(this.$el) + o);
                    } else {
                      var r = pe(this.$el).top;
                      r < n / 2 && this.offsetTop && (i += r),
                        !0 === this.offsetBottom
                          ? (i += e(this.$el.nextElementSibling))
                          : b(this.offsetBottom)
                            ? (i += n / 100 * this.offsetBottom)
                            : this.offsetBottom && c(this.offsetBottom, "px")
                              ? (i += T(this.offsetBottom))
                              : y(this.offsetBottom) &&
                                (i += e(z(this.offsetBottom, this.$el))),
                        (t = i ? "calc(100vh - " + i + "px)" : "100vh");
                    }
                    if (t) {
                      Nt(this.$el, { height: "", minHeight: t });
                      var s = this.$el.offsetHeight;
                      this.minHeight &&
                        this.minHeight > s &&
                        Nt(this.$el, "minHeight", this.minHeight),
                        n - i >= s && Nt(this.$el, "height", t);
                    }
                  },
                  events: ["load", "resize"]
                }
              });
            },
            Ni = function(t) {
              lt(function() {
                if (Rn) {
                  var e = "uk-hover";
                  Gt(wn, "tap", function(t) {
                    var n = t.target;
                    return H("." + e).forEach(function(t, i) {
                      return !q(n, i) && jt(i, e);
                    });
                  }),
                    Object.defineProperty(t, "hoverSelector", {
                      set: function(t) {
                        Gt(wn, "tap", t, function(t) {
                          return Ht(t.current, e);
                        });
                      }
                    }),
                    (t.hoverSelector =
                      ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]");
                }
              });
            },
            Mi = function(t) {
              function e(e, n) {
                t.component(
                  e,
                  t.components.icon.extend({
                    name: e,
                    mixins: n ? [n] : [],
                    defaults: { icon: e }
                  })
                );
              }
              function n(t) {
                return o[t] ? (i[t] || (i[t] = L(o[t].trim())), i[t]) : null;
              }
              var i = {},
                o = {
                  spinner:
                    '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle></svg>',
                  totop:
                    '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "></polyline></svg>',
                  marker:
                    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"></rect><rect x="4" y="9" width="11" height="1"></rect></svg>',
                  "close-icon":
                    '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>',
                  "close-large":
                    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line></svg>',
                  "navbar-toggle-icon":
                    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg>',
                  "overlay-icon":
                    '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"></rect><rect x="0" y="19" width="40" height="1"></rect></svg>',
                  "pagination-next":
                    '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline></svg>',
                  "pagination-previous":
                    '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline></svg>',
                  "search-icon":
                    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
                  "search-large":
                    '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"></circle><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"></line></svg>',
                  "search-navbar":
                    '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                  "slidenav-next":
                    '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>',
                  "slidenav-next-large":
                    '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "></polyline></svg>',
                  "slidenav-previous":
                    '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>',
                  "slidenav-previous-large":
                    '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "></polyline></svg>'
                };
              t.component(
                "icon",
                t.components.svg.extend({
                  attrs: ["icon", "ratio"],
                  mixins: [vi],
                  name: "icon",
                  args: "icon",
                  props: ["icon"],
                  defaults: {
                    exclude: ["id", "style", "class", "src", "icon"]
                  },
                  init: function() {
                    Ht(this.$el, "uk-icon"),
                      xn &&
                        (this.icon = I(
                          I(this.icon, "left", "right"),
                          "previous",
                          "next"
                        ));
                  },
                  disconnected: function() {
                    delete this.delay;
                  },
                  methods: {
                    getSvg: function() {
                      var t = n(this.icon);
                      return t ? Ze.resolve(t) : Ze.reject("Icon not found.");
                    }
                  }
                })
              ),
                [
                  "marker",
                  "navbar-toggle-icon",
                  "overlay-icon",
                  "pagination-previous",
                  "pagination-next",
                  "totop"
                ].forEach(function(t) {
                  return e(t);
                }),
                ["slidenav-previous", "slidenav-next"].forEach(function(t) {
                  return e(t, {
                    init: function() {
                      Ht(this.$el, "uk-slidenav"),
                        Wt(this.$el, "uk-slidenav-large") &&
                          (this.icon += "-large");
                    }
                  });
                }),
                e("search-icon", {
                  init: function() {
                    Wt(this.$el, "uk-search-icon") &&
                    J(this.$el, ".uk-search-large").length
                      ? (this.icon = "search-large")
                      : J(this.$el, ".uk-search-navbar").length &&
                        (this.icon = "search-navbar");
                  }
                }),
                e("close", {
                  init: function() {
                    this.icon =
                      "close-" +
                      (Wt(this.$el, "uk-close-large") ? "large" : "icon");
                  }
                }),
                e("spinner", {
                  connected: function() {
                    var t = this;
                    this.svg.then(function(e) {
                      return (
                        1 !== t.ratio &&
                        Nt(L("circle", e), "stroke-width", 1 / t.ratio)
                      );
                    }, M);
                  }
                }),
                (t.icon.add = function(e) {
                  Object.keys(e).forEach(function(t) {
                    (o[t] = e[t]), delete i[t];
                  }),
                    t._initialized &&
                      O(t.instances, function(t) {
                        "icon" === t.$options.name && t.$reset();
                      });
                });
            },
            Pi = function(t) {
              t.component("leader", {
                mixins: [vi],
                props: { fill: String, media: "media" },
                defaults: {
                  fill: "",
                  media: !1,
                  clsWrapper: "uk-leader-fill",
                  clsHide: "uk-leader-hide",
                  attrFill: "data-fill"
                },
                computed: {
                  fill: function(t) {
                    return t.fill || Dt("leader-fill");
                  }
                },
                connected: function() {
                  this.wrapper = At(
                    this.$el,
                    '<span class="' + this.clsWrapper + '">'
                  )[0];
                },
                disconnected: function() {
                  Ct(this.wrapper.childNodes), delete this._width;
                },
                update: [
                  {
                    read: function() {
                      var t = this._width;
                      (this._width = Math.floor(this.$el.offsetWidth / 2)),
                        (this._changed = t !== this._width),
                        (this._hide =
                          this.media && !yn.matchMedia(this.media).matches);
                    },
                    write: function() {
                      Rt(this.wrapper, this.clsHide, this._hide),
                        this._changed &&
                          nt(
                            this.wrapper,
                            this.attrFill,
                            new Array(this._width).join(this.fill)
                          );
                    },
                    events: ["load", "resize"]
                  }
                ]
              });
            },
            Di = function(t) {
              t.component("margin", {
                props: { margin: String, firstColumn: Boolean },
                defaults: {
                  margin: "uk-margin-small-top",
                  firstColumn: "uk-first-column"
                },
                update: {
                  read: function() {
                    var t = this,
                      e = this.$el.children;
                    if (!e.length || !vt(this.$el))
                      return void (this.rows = !1);
                    this.stacks = !0;
                    for (var n = [[]], i = 0; i < e.length; i++) {
                      var o = e[i],
                        r = o.getBoundingClientRect();
                      if (r.height)
                        for (var s = n.length - 1; s >= 0; s--) {
                          var a = n[s];
                          if (!a[0]) {
                            a.push(o);
                            break;
                          }
                          var l = a[0].getBoundingClientRect();
                          if (r.top >= Math.floor(l.bottom)) {
                            n.push([o]);
                            break;
                          }
                          if (Math.floor(r.bottom) > l.top) {
                            if (((t.stacks = !1), r.left < l.left && !xn)) {
                              a.unshift(o);
                              break;
                            }
                            a.push(o);
                            break;
                          }
                          if (0 === s) {
                            n.unshift([o]);
                            break;
                          }
                        }
                    }
                    this.rows = n;
                  },
                  write: function() {
                    var t = this;
                    this.rows &&
                      this.rows.forEach(function(e, n) {
                        return e.forEach(function(e, i) {
                          Rt(e, t.margin, 0 !== n),
                            Rt(e, t.firstColumn, 0 === i);
                        });
                      });
                  },
                  events: ["load", "resize"]
                }
              });
            },
            Bi = function(t) {
              t.component("modal", {
                mixins: [bi],
                defaults: {
                  clsPage: "uk-modal-page",
                  clsPanel: "uk-modal-dialog",
                  selClose:
                    ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
                },
                events: [
                  {
                    name: "show",
                    self: !0,
                    handler: function() {
                      Wt(this.panel, "uk-margin-auto-vertical")
                        ? Ht(this.$el, "uk-flex")
                        : Nt(this.$el, "display", "block"),
                        li(this.$el);
                    }
                  },
                  {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                      Nt(this.$el, "display", ""), jt(this.$el, "uk-flex");
                    }
                  }
                ]
              }),
                t.component("overflow-auto", {
                  mixins: [vi],
                  computed: {
                    modal: function(t, e) {
                      return X(e, ".uk-modal");
                    },
                    panel: function(t, e) {
                      return X(e, ".uk-modal-dialog");
                    }
                  },
                  connected: function() {
                    Nt(this.$el, "minHeight", 150);
                  },
                  update: {
                    write: function() {
                      if (this.panel && this.modal) {
                        var t = Nt(this.$el, "maxHeight");
                        Nt(
                          Nt(this.$el, "maxHeight", 150),
                          "maxHeight",
                          Math.max(
                            150,
                            150 + li(this.modal) - this.panel.offsetHeight
                          )
                        ),
                          t !== Nt(this.$el, "maxHeight") &&
                            Kt(this.$el, "resize");
                      }
                    },
                    events: ["load", "resize"]
                  }
                }),
                (t.modal.dialog = function(e, n) {
                  var i = t.modal(
                    ' <div class="uk-modal"> <div class="uk-modal-dialog">' +
                      e +
                      "</div> </div> ",
                    n
                  );
                  return (
                    Gt(i.$el, "hidden", function(t) {
                      t.target === t.current && i.$destroy(!0);
                    }),
                    i.show(),
                    i
                  );
                }),
                (t.modal.alert = function(e, n) {
                  return (
                    (n = hn(
                      { bgClose: !1, escClose: !1, labels: t.modal.labels },
                      n
                    )),
                    new Ze(function(i) {
                      return Gt(
                        t.modal.dialog(
                          ' <div class="uk-modal-body">' +
                            (y(e) ? e : bt(e)) +
                            '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                            n.labels.ok +
                            "</button> </div> ",
                          n
                        ).$el,
                        "hide",
                        i
                      );
                    })
                  );
                }),
                (t.modal.confirm = function(e, n) {
                  return (
                    (n = hn(
                      { bgClose: !1, escClose: !1, labels: t.modal.labels },
                      n
                    )),
                    new Ze(function(i, o) {
                      return Gt(
                        t.modal.dialog(
                          ' <div class="uk-modal-body">' +
                            (y(e) ? e : bt(e)) +
                            '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close">' +
                            n.labels.cancel +
                            '</button> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                            n.labels.ok +
                            "</button> </div> ",
                          n
                        ).$el,
                        "click",
                        ".uk-modal-footer button",
                        function(t) {
                          return 0 === Ot(t.target) ? o() : i();
                        }
                      );
                    })
                  );
                }),
                (t.modal.prompt = function(e, n, i) {
                  return (
                    (i = hn(
                      { bgClose: !1, escClose: !1, labels: t.modal.labels },
                      i
                    )),
                    new Ze(function(o) {
                      var r = !1,
                        s = t.modal.dialog(
                          ' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                            (y(e) ? e : bt(e)) +
                            '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                            i.labels.cancel +
                            '</button> <button class="uk-button uk-button-primary">' +
                            i.labels.ok +
                            "</button> </div> </form> ",
                          i
                        ),
                        a = L("input", s.$el);
                      (a.value = n),
                        Gt(s.$el, "submit", "form", function(t) {
                          t.preventDefault(), o(a.value), (r = !0), s.hide();
                        }),
                        Gt(s.$el, "hide", function() {
                          r || o(null);
                        });
                    })
                  );
                }),
                (t.modal.labels = { ok: "Ok", cancel: "Cancel" });
            },
            Li = function(t) {
              t.component(
                "nav",
                t.components.accordion.extend({
                  name: "nav",
                  defaults: {
                    targets: "> .uk-parent",
                    toggle: "> a",
                    content: "> ul"
                  }
                })
              );
            },
            Hi = function(t) {
              t.component("navbar", {
                mixins: [vi],
                props: {
                  dropdown: String,
                  mode: "list",
                  align: String,
                  offset: Number,
                  boundary: Boolean,
                  boundaryAlign: Boolean,
                  clsDrop: String,
                  delayShow: Number,
                  delayHide: Number,
                  dropbar: Boolean,
                  dropbarMode: String,
                  dropbarAnchor: "query",
                  duration: Number
                },
                defaults: {
                  dropdown: ".uk-navbar-nav > li",
                  align: xn ? "right" : "left",
                  clsDrop: "uk-navbar-dropdown",
                  mode: void 0,
                  offset: void 0,
                  delayShow: void 0,
                  delayHide: void 0,
                  boundaryAlign: void 0,
                  flip: "x",
                  boundary: !0,
                  dropbar: !1,
                  dropbarMode: "slide",
                  dropbarAnchor: !1,
                  duration: 200
                },
                computed: {
                  boundary: function(t, e) {
                    var n = t.boundary,
                      i = t.boundaryAlign;
                    return !0 === n || i ? e : n;
                  },
                  pos: function(t) {
                    return "bottom-" + t.align;
                  }
                },
                ready: function() {
                  this.dropbar &&
                    t.navbarDropbar(
                      z(this.dropbar, this.$el) ||
                        _t(this.dropbarAnchor || this.$el, "<div></div>"),
                      {
                        clsDrop: this.clsDrop,
                        mode: this.dropbarMode,
                        duration: this.duration,
                        navbar: this
                      }
                    );
                },
                update: function() {
                  t.drop(
                    H(this.dropdown + " ." + this.clsDrop, this.$el).filter(
                      function(e) {
                        return !t.getComponent(e, "dropdown");
                      }
                    ),
                    hn({}, this.$props, {
                      boundary: this.boundary,
                      pos: this.pos
                    })
                  );
                },
                events: [
                  {
                    name: "mouseover",
                    delegate: function() {
                      return this.dropdown;
                    },
                    handler: function(t) {
                      var e = t.current,
                        n = this.getActive();
                      n &&
                        n.toggle &&
                        !q(n.toggle.$el, e) &&
                        !n.tracker.movesTo(n.$el) &&
                        n.hide(!1);
                    }
                  }
                ],
                methods: {
                  getActive: function() {
                    var e = t.drop.getActive();
                    return (
                      e && h(e.mode, "hover") && q(e.toggle.$el, this.$el) && e
                    );
                  }
                }
              }),
                t.component("navbar-dropbar", {
                  mixins: [vi],
                  defaults: {
                    clsDrop: "",
                    mode: "slide",
                    navbar: null,
                    duration: 200
                  },
                  init: function() {
                    "slide" === this.mode &&
                      Ht(this.$el, "uk-navbar-dropbar-slide");
                  },
                  events: [
                    {
                      name: "beforeshow",
                      el: function() {
                        return this.navbar.$el;
                      },
                      handler: function(t, e) {
                        var n = e.$el;
                        "bottom" !== e.dir ||
                          q(n, this.$el) ||
                          (kt(this.$el, n), e.show(), t.preventDefault());
                      }
                    },
                    {
                      name: "mouseleave",
                      handler: function() {
                        var t = this.navbar.getActive();
                        t && !G(this.$el, ":hover") && t.hide();
                      }
                    },
                    {
                      name: "show",
                      handler: function(t, e) {
                        var n = e.$el;
                        this.clsDrop && Ht(n, this.clsDrop + "-dropbar"),
                          this.transitionTo(
                            n.offsetHeight +
                              T(Nt(n, "margin-top")) +
                              T(Nt(n, "margin-bottom"))
                          );
                      }
                    },
                    {
                      name: "beforehide",
                      handler: function(t, e) {
                        var n = e.$el,
                          i = this.navbar.getActive();
                        G(this.$el, ":hover") &&
                          i &&
                          i.$el === n &&
                          t.preventDefault();
                      }
                    },
                    {
                      name: "hide",
                      handler: function(t, e) {
                        var n = e.$el,
                          i = this.navbar.getActive();
                        (!i || (i && i.$el === n)) && this.transitionTo(0);
                      }
                    }
                  ],
                  methods: {
                    transitionTo: function(t) {
                      return (
                        li(this.$el, vt(this.$el) ? li(this.$el) : 0),
                        $n.cancel(this.$el),
                        $n
                          .start(this.$el, { height: t }, this.duration)
                          .catch(M)
                      );
                    }
                  }
                });
            },
            ji = function(t) {
              t.component("offcanvas", {
                mixins: [bi],
                args: "mode",
                props: {
                  content: String,
                  mode: String,
                  flip: Boolean,
                  overlay: Boolean
                },
                defaults: {
                  content: ".uk-offcanvas-content",
                  mode: "slide",
                  flip: !1,
                  overlay: !1,
                  clsPage: "uk-offcanvas-page",
                  clsContainer: "uk-offcanvas-container",
                  clsPanel: "uk-offcanvas-bar",
                  clsFlip: "uk-offcanvas-flip",
                  clsContent: "uk-offcanvas-content",
                  clsContentAnimation: "uk-offcanvas-content-animation",
                  clsSidebarAnimation: "uk-offcanvas-bar-animation",
                  clsMode: "uk-offcanvas",
                  clsOverlay: "uk-offcanvas-overlay",
                  selClose: ".uk-offcanvas-close"
                },
                computed: {
                  content: function(t) {
                    return L(t.content);
                  },
                  clsFlip: function(t) {
                    var e = t.flip,
                      n = t.clsFlip;
                    return e ? n : "";
                  },
                  clsOverlay: function(t) {
                    var e = t.overlay,
                      n = t.clsOverlay;
                    return e ? n : "";
                  },
                  clsMode: function(t) {
                    var e = t.mode;
                    return t.clsMode + "-" + e;
                  },
                  clsSidebarAnimation: function(t) {
                    var e = t.mode,
                      n = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : n;
                  },
                  clsContentAnimation: function(t) {
                    var e = t.mode,
                      n = t.clsContentAnimation;
                    return "push" !== e && "reveal" !== e ? "" : n;
                  },
                  transitionElement: function(t) {
                    return "reveal" === t.mode
                      ? this.panel.parentNode
                      : this.panel;
                  }
                },
                update: {
                  write: function() {
                    this.getActive() === this &&
                      ((this.overlay || this.clsContentAnimation) &&
                        ui(this.content, ui(yn) - this.scrollbarWidth),
                      this.overlay &&
                        (li(this.content, li(yn)),
                        gi && (this.content.scrollTop = gi.y)));
                  },
                  events: ["resize"]
                },
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return 'a[href^="#"]';
                    },
                    handler: function(t) {
                      var e = t.current;
                      e.hash &&
                        L(e.hash, this.content) &&
                        ((gi = null), this.hide());
                    }
                  },
                  {
                    name: "beforescroll",
                    filter: function() {
                      return this.overlay;
                    },
                    handler: function(t, e, n) {
                      e &&
                        n &&
                        this.isToggled() &&
                        L(n, this.content) &&
                        (Jt(this.$el, "hidden", function() {
                          return e.scrollTo(n);
                        }),
                        t.preventDefault());
                    }
                  },
                  {
                    name: "show",
                    self: !0,
                    handler: function() {
                      (gi = gi || { x: yn.pageXOffset, y: yn.pageYOffset }),
                        "reveal" !== this.mode ||
                          Wt(this.panel, this.clsMode) ||
                          (St(this.panel, "<div>"),
                          Ht(this.panel.parentNode, this.clsMode)),
                        Nt(
                          bn,
                          "overflowY",
                          (!this.clsContentAnimation || this.flip) &&
                          this.scrollbarWidth &&
                          this.overlay
                            ? "scroll"
                            : ""
                        ),
                        Ht(
                          wn.body,
                          this.clsContainer +
                            " " +
                            this.clsFlip +
                            " " +
                            this.clsOverlay
                        ),
                        li(wn.body),
                        Ht(this.content, this.clsContentAnimation),
                        Ht(
                          this.panel,
                          this.clsSidebarAnimation +
                            " " +
                            ("reveal" !== this.mode ? this.clsMode : "")
                        ),
                        Ht(this.$el, this.clsOverlay),
                        Nt(this.$el, "display", "block"),
                        li(this.$el);
                    }
                  },
                  {
                    name: "hide",
                    self: !0,
                    handler: function() {
                      jt(this.content, this.clsContentAnimation);
                      var t = this.getActive();
                      ("none" === this.mode ||
                        (t && t !== this && t !== this.prev)) &&
                        Kt(this.panel, Xn);
                    }
                  },
                  {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                      if (
                        ("reveal" === this.mode && Ct(this.panel), this.overlay)
                      ) {
                        if (!gi) {
                          var t = this.content,
                            e = t.scrollLeft,
                            n = t.scrollTop;
                          gi = { x: e, y: n };
                        }
                      } else gi = { x: yn.pageXOffset, y: yn.pageYOffset };
                      jt(
                        this.panel,
                        this.clsSidebarAnimation + " " + this.clsMode
                      ),
                        jt(this.$el, this.clsOverlay),
                        Nt(this.$el, "display", ""),
                        jt(
                          wn.body,
                          this.clsContainer +
                            " " +
                            this.clsFlip +
                            " " +
                            this.clsOverlay
                        ),
                        (wn.body.scrollTop = gi.y),
                        Nt(bn, "overflow-y", ""),
                        ui(this.content, ""),
                        li(this.content, ""),
                        yn.scrollTo(gi.x, gi.y),
                        (gi = null);
                    }
                  },
                  {
                    name: "swipeLeft swipeRight",
                    handler: function(t) {
                      this.isToggled() &&
                        Ce(t) &&
                        (("swipeLeft" === t.type && !this.flip) ||
                          ("swipeRight" === t.type && this.flip)) &&
                        this.hide();
                    }
                  }
                ]
              });
            },
            zi = function(t) {
              t.component("responsive", {
                props: ["width", "height"],
                init: function() {
                  Ht(this.$el, "uk-responsive-width");
                },
                update: {
                  read: function() {
                    this.dim = !!(
                      vt(this.$el) &&
                      this.width &&
                      this.height
                    ) && {
                      width: ui(this.$el.parentNode),
                      height: this.height
                    };
                  },
                  write: function() {
                    this.dim &&
                      li(
                        this.$el,
                        In.contain(
                          { height: this.height, width: this.width },
                          this.dim
                        ).height
                      );
                  },
                  events: ["load", "resize"]
                }
              });
            },
            Fi = function(t) {
              function e(t) {
                return 0.5 * (1 - Math.cos(Math.PI * t));
              }
              t.component("scroll", {
                props: { duration: Number, offset: Number },
                defaults: { duration: 1e3, offset: 0 },
                methods: {
                  scrollTo: function(t) {
                    var n = this;
                    t = (t && L(y(t) ? t.replace(/\//g, "\\/") : t)) || wn.body;
                    var i = pe(t).top - this.offset,
                      o = li(wn),
                      r = li(yn);
                    if (
                      (i + r > o && (i = o - r),
                      Kt(this.$el, "beforescroll", [this, t]))
                    ) {
                      var s = Date.now(),
                        a = yn.pageYOffset,
                        l = function() {
                          var o =
                            a + (i - a) * e(N((Date.now() - s) / n.duration));
                          yn.scrollTo(yn.pageXOffset, o),
                            o !== i ? zn(l) : Kt(n.$el, "scrolled", [n, t]);
                        };
                      l();
                    }
                  }
                },
                events: {
                  click: function(t) {
                    t.defaultPrevented ||
                      (t.preventDefault(), this.scrollTo(this.$el.hash));
                  }
                }
              });
            },
            Wi = function(t) {
              t.component("scrollspy", {
                args: "cls",
                props: {
                  cls: "list",
                  target: String,
                  hidden: Boolean,
                  offsetTop: Number,
                  offsetLeft: Number,
                  repeat: Boolean,
                  delay: Number
                },
                defaults: {
                  cls: ["uk-scrollspy-inview"],
                  target: !1,
                  hidden: !0,
                  offsetTop: 0,
                  offsetLeft: 0,
                  repeat: !1,
                  delay: 0,
                  inViewClass: "uk-scrollspy-inview"
                },
                computed: {
                  elements: function(t, e) {
                    var n = t.target;
                    return (n && H(n, e)) || [e];
                  }
                },
                update: [
                  {
                    write: function() {
                      this.hidden &&
                        Nt(
                          Y(this.elements, ":not(." + this.inViewClass + ")"),
                          "visibility",
                          "hidden"
                        );
                    }
                  },
                  {
                    read: function() {
                      var t = this;
                      this.elements.forEach(function(e) {
                        if (!e._scrollspy) {
                          var n = nt(e, "uk-scrollspy-class");
                          e._scrollspy = {
                            toggles: (n && n.split(",")) || t.cls
                          };
                        }
                        e._scrollspy.show = ht(e, t.offsetTop, t.offsetLeft);
                      });
                    },
                    write: function() {
                      var t = this,
                        e = 1 === this.elements.length ? 1 : 0;
                      this.elements.forEach(function(n, i) {
                        var o = n._scrollspy,
                          r = o.toggles[i] || o.toggles[0];
                        if (o.show) {
                          if (!o.inview && !o.timer) {
                            var s = function() {
                              Nt(n, "visibility", ""),
                                Ht(n, t.inViewClass),
                                Rt(n, r),
                                Kt(n, "inview"),
                                t.$update(),
                                (o.inview = !0),
                                delete o.timer;
                            };
                            t.delay && e
                              ? (o.timer = setTimeout(s, t.delay * e))
                              : s(),
                              e++;
                          }
                        } else o.inview && t.repeat && (o.timer && (clearTimeout(o.timer), delete o.timer), Nt(n, "visibility", t.hidden ? "hidden" : ""), jt(n, t.inViewClass), Rt(n, r), Kt(n, "outview"), t.$update(), (o.inview = !1));
                      });
                    },
                    events: ["scroll", "load", "resize"]
                  }
                ]
              });
            },
            Ri = function(t) {
              t.component("scrollspy-nav", {
                props: {
                  cls: String,
                  closest: String,
                  scroll: Boolean,
                  overflow: Boolean,
                  offset: Number
                },
                defaults: {
                  cls: "uk-active",
                  closest: !1,
                  scroll: !1,
                  overflow: !0,
                  offset: 0
                },
                computed: {
                  links: function(t, e) {
                    return H('a[href^="#"]', e).filter(function(t) {
                      return t.hash;
                    });
                  },
                  elements: function() {
                    return this.closest
                      ? X(this.links, this.closest)
                      : this.links;
                  },
                  targets: function() {
                    return H(
                      this.links
                        .map(function(t) {
                          return t.hash;
                        })
                        .join(",")
                    );
                  }
                },
                update: [
                  {
                    read: function() {
                      this.scroll &&
                        t.scroll(this.links, { offset: this.offset || 0 });
                    }
                  },
                  {
                    read: function() {
                      var t = this,
                        e = yn.pageYOffset + this.offset + 1,
                        n = li(wn) - li(yn) + this.offset;
                      (this.active = !1),
                        this.targets.every(function(i, o) {
                          var r = pe(i).top,
                            s = o + 1 === t.targets.length;
                          if (
                            !t.overflow &&
                            ((0 === o && r > e) || (s && r + i.offsetTop < e))
                          )
                            return !1;
                          if (!s && pe(t.targets[o + 1]).top <= e) return !0;
                          if (e >= n)
                            for (var a = t.targets.length - 1; a > o; a--)
                              if (ht(t.targets[a])) {
                                i = t.targets[a];
                                break;
                              }
                          return !(t.active = L(
                            Y(t.links, '[href="#' + i.id + '"]')
                          ));
                        });
                    },
                    write: function() {
                      this.links.forEach(function(t) {
                        return t.blur();
                      }),
                        jt(this.elements, this.cls),
                        this.active &&
                          Kt(this.$el, "active", [
                            this.active,
                            Ht(
                              this.closest
                                ? X(this.active, this.closest)
                                : this.active,
                              this.cls
                            )
                          ]);
                    },
                    events: ["scroll", "load", "resize"]
                  }
                ]
              });
            },
            Vi = function(t) {
              t.component("sticky", {
                mixins: [vi],
                attrs: !0,
                props: {
                  top: null,
                  bottom: Boolean,
                  offset: Number,
                  animation: String,
                  clsActive: String,
                  clsInactive: String,
                  clsFixed: String,
                  clsBelow: String,
                  selTarget: String,
                  widthElement: "query",
                  showOnUp: Boolean,
                  media: "media",
                  target: Number
                },
                defaults: {
                  top: 0,
                  bottom: !1,
                  offset: 0,
                  animation: "",
                  clsActive: "uk-active",
                  clsInactive: "",
                  clsFixed: "uk-sticky-fixed",
                  clsBelow: "uk-sticky-below",
                  selTarget: "",
                  widthElement: !1,
                  showOnUp: !1,
                  media: !1,
                  target: !1
                },
                computed: {
                  selTarget: function(t, e) {
                    var n = t.selTarget;
                    return (n && L(n, e)) || e;
                  }
                },
                connected: function() {
                  (this.placeholder = L(
                    '<div class="uk-sticky-placeholder"></div>'
                  )),
                    (this.widthElement =
                      this.$props.widthElement || this.placeholder),
                    this.isActive || this.hide();
                },
                disconnected: function() {
                  this.isActive &&
                    ((this.isActive = !1),
                    this.hide(),
                    jt(this.$el, this.clsInactive)),
                    Et(this.placeholder),
                    (this.placeholder = null),
                    (this.widthElement = null);
                },
                ready: function() {
                  var t = this;
                  if (this.target && location.hash && yn.pageYOffset > 0) {
                    var e = L(location.hash);
                    e &&
                      zn(function() {
                        var n = pe(e).top,
                          i = pe(t.$el).top,
                          o = t.$el.offsetHeight;
                        i + o >= n &&
                          i <= n + e.offsetHeight &&
                          yn.scrollTo(0, n - o - t.target - t.offset);
                      });
                  }
                },
                events: [
                  {
                    name: "active",
                    self: !0,
                    handler: function() {
                      Ft(this.selTarget, this.clsInactive, this.clsActive);
                    }
                  },
                  {
                    name: "inactive",
                    self: !0,
                    handler: function() {
                      Ft(this.selTarget, this.clsActive, this.clsInactive);
                    }
                  }
                ],
                update: [
                  {
                    write: function() {
                      var t,
                        e = this,
                        n = this.placeholder,
                        i = (this.isActive ? n : this.$el).offsetHeight;
                      Nt(
                        n,
                        hn(
                          {
                            height:
                              "absolute" !== Nt(this.$el, "position") ? i : ""
                          },
                          Nt(this.$el, [
                            "marginTop",
                            "marginBottom",
                            "marginLeft",
                            "marginRight"
                          ])
                        )
                      ),
                        q(n, bn) || (_t(this.$el, n), nt(n, "hidden", "")),
                        nt(this.widthElement, "hidden", null),
                        (this.width = this.widthElement.offsetWidth),
                        nt(
                          this.widthElement,
                          "hidden",
                          this.isActive ? null : ""
                        ),
                        (this.topOffset = pe(this.isActive ? n : this.$el).top),
                        (this.bottomOffset = this.topOffset + i),
                        ["top", "bottom"].forEach(function(n) {
                          (e[n] = e.$props[n]),
                            e[n] &&
                              (b(e[n])
                                ? (e[n] = e[n + "Offset"] + T(e[n]))
                                : y(e[n]) && e[n].match(/^-?\d+vh$/)
                                  ? (e[n] = li(yn) * T(e[n]) / 100)
                                  : (t =
                                      !0 === e[n]
                                        ? e.$el.parentNode
                                        : z(e[n], e.$el)) &&
                                    (e[n] = pe(t).top + t.offsetHeight));
                        }),
                        (this.top =
                          Math.max(T(this.top), this.topOffset) - this.offset),
                        (this.bottom = this.bottom && this.bottom - i),
                        (this.inactive =
                          this.media && !yn.matchMedia(this.media).matches),
                        this.isActive && this.update();
                    },
                    events: ["load", "resize"]
                  },
                  {
                    read: function() {
                      (this.offsetTop = pe(this.$el).top),
                        (this.scroll = yn.pageYOffset),
                        (this.visible = vt(this.$el));
                    },
                    write: function(t) {
                      var e = this;
                      void 0 === t && (t = {});
                      var n = t.dir,
                        i = this.scroll;
                      if (
                        !(
                          i < 0 ||
                          !this.visible ||
                          this.disabled ||
                          (this.showOnUp && !n)
                        )
                      )
                        if (
                          this.inactive ||
                          i < this.top ||
                          (this.showOnUp &&
                            (i <= this.top ||
                              "down" === n ||
                              ("up" === n &&
                                !this.isActive &&
                                i <= this.bottomOffset)))
                        ) {
                          if (!this.isActive) return;
                          (this.isActive = !1),
                            this.animation && i > this.topOffset
                              ? (An.cancel(this.$el),
                                An.out(this.$el, this.animation).then(
                                  function() {
                                    return e.hide();
                                  },
                                  M
                                ))
                              : this.hide();
                        } else
                          this.isActive
                            ? this.update()
                            : this.animation
                              ? (An.cancel(this.$el),
                                this.show(),
                                An.in(this.$el, this.animation).catch(M))
                              : this.show();
                    },
                    events: ["scroll"]
                  }
                ],
                methods: {
                  show: function() {
                    (this.isActive = !0),
                      this.update(),
                      nt(this.placeholder, "hidden", null);
                  },
                  hide: function() {
                    (this.isActive && !Wt(this.selTarget, this.clsActive)) ||
                      Kt(this.$el, "inactive"),
                      jt(this.$el, this.clsFixed, this.clsBelow),
                      Nt(this.$el, { position: "", top: "", width: "" }),
                      nt(this.placeholder, "hidden", "");
                  },
                  update: function() {
                    var t = Math.max(0, this.offset),
                      e = this.scroll > this.top;
                    this.bottom &&
                      this.scroll > this.bottom - this.offset &&
                      (t = this.bottom - this.scroll),
                      Nt(this.$el, {
                        position: "fixed",
                        top: t + "px",
                        width: this.width
                      }),
                      Wt(this.selTarget, this.clsActive)
                        ? e || Kt(this.$el, "inactive")
                        : e && Kt(this.$el, "active"),
                      Rt(
                        this.$el,
                        this.clsBelow,
                        this.scroll > this.bottomOffset
                      ),
                      Ht(this.$el, this.clsFixed);
                  }
                }
              });
            },
            Yi = {},
            qi = function(t) {
              function e(t, e) {
                if (!i[t]) {
                  i[t] = {};
                  for (var o; (o = n.exec(t)); )
                    i[t][o[3]] =
                      '<svg xmlns="http://www.w3.org/2000/svg"' + o[1] + "svg>";
                }
                return i[t][e];
              }
              t.component("svg", {
                attrs: !0,
                props: {
                  id: String,
                  icon: String,
                  src: String,
                  style: String,
                  width: Number,
                  height: Number,
                  ratio: Number,
                  class: String
                },
                defaults: { ratio: 1, id: !1, exclude: ["src"], class: "" },
                init: function() {
                  this.class += " uk-svg";
                },
                connected: function() {
                  var t = this;
                  if (!this.icon && h(this.src, "#")) {
                    var n = this.src.split("#");
                    n.length > 1 && ((this.src = n[0]), (this.icon = n[1]));
                  }
                  this.svg = this.getSvg().then(function(n) {
                    var i;
                    if (
                      (y(n)
                        ? (t.icon && h(n, "<symbol") && (n = e(n, t.icon) || n),
                          (i = L(n.substr(n.indexOf("<svg")))))
                        : (i = n.cloneNode(!0)),
                      !i)
                    )
                      return Ze.reject("SVG not found.");
                    var o = nt(i, "viewBox");
                    o &&
                      ((o = o.split(" ")),
                      (t.width = t.$props.width || o[2]),
                      (t.height = t.$props.height || o[3])),
                      (t.width *= t.ratio),
                      (t.height *= t.ratio);
                    for (var r in t.$options.props)
                      t[r] && !h(t.exclude, r) && nt(i, r, t[r]);
                    t.id || ot(i, "id"),
                      t.width && !t.height && ot(i, "height"),
                      t.height && !t.width && ot(i, "width");
                    var s = t.$el;
                    if (mt(s) || "CANVAS" === s.tagName) {
                      nt(s, { hidden: !0, id: null });
                      var a = s.nextElementSibling;
                      a && i.isEqualNode(a) ? (i = a) : _t(s, i);
                    } else {
                      var l = s.lastElementChild;
                      l && i.isEqualNode(l) ? (i = l) : kt(s, i);
                    }
                    return (t.svgEl = i), i;
                  }, M);
                },
                disconnected: function() {
                  var t = this;
                  mt(this.$el) &&
                    nt(this.$el, { hidden: null, id: this.id || null }),
                    this.svg &&
                      this.svg.then(function(e) {
                        return (!t._connected || e !== t.svgEl) && Et(e);
                      }, M),
                    (this.svg = this.svgEl = null);
                },
                methods: {
                  getSvg: function() {
                    var t = this;
                    return this.src
                      ? Yi[this.src]
                        ? Yi[this.src]
                        : ((Yi[this.src] = new Ze(function(e, n) {
                            u(t.src, "data:")
                              ? e(decodeURIComponent(t.src.split(",")[1]))
                              : B(t.src).then(
                                  function(t) {
                                    return e(t.response);
                                  },
                                  function() {
                                    return n("SVG not found.");
                                  }
                                );
                          })),
                          Yi[this.src])
                      : Ze.reject();
                  }
                }
              });
              var n = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
                i = {};
            },
            Ui = function(t) {
              t.component("switcher", {
                mixins: [wi],
                args: "connect",
                props: {
                  connect: String,
                  toggle: String,
                  active: Number,
                  swiping: Boolean
                },
                defaults: {
                  connect: "~.uk-switcher",
                  toggle: "> *",
                  active: 0,
                  swiping: !0,
                  cls: "uk-active",
                  clsContainer: "uk-switcher",
                  attrItem: "uk-switcher-item",
                  queued: !0
                },
                computed: {
                  connects: function(t, e) {
                    return F(t.connect, e);
                  },
                  toggles: function(t, e) {
                    return H(t.toggle, e);
                  }
                },
                events: [
                  {
                    name: "click",
                    delegate: function() {
                      return this.toggle + ":not(.uk-disabled)";
                    },
                    handler: function(t) {
                      t.preventDefault(), this.show(t.current);
                    }
                  },
                  {
                    name: "click",
                    el: function() {
                      return this.connects;
                    },
                    delegate: function() {
                      return (
                        "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                      );
                    },
                    handler: function(t) {
                      t.preventDefault(),
                        this.show(st(t.current, this.attrItem));
                    }
                  },
                  {
                    name: "swipeRight swipeLeft",
                    filter: function() {
                      return this.swiping;
                    },
                    el: function() {
                      return this.connects;
                    },
                    handler: function(t) {
                      Ce(t) &&
                        (t.preventDefault(),
                        yn.getSelection().toString() ||
                          this.show(
                            "swipeLeft" === t.type ? "next" : "previous"
                          ));
                    }
                  }
                ],
                update: function() {
                  var t = this;
                  this.connects.forEach(function(e) {
                    return t.updateAria(e.children);
                  }),
                    this.show(
                      Y(this.toggles, "." + this.cls)[0] ||
                        this.toggles[this.active] ||
                        this.toggles[0]
                    );
                },
                methods: {
                  show: function(t) {
                    for (
                      var e,
                        n = this,
                        i = this.toggles.length,
                        o =
                          this.connects.length &&
                          Ot(Y(this.connects[0].children, "." + this.cls)[0]),
                        r = o >= 0,
                        s = pt(t, this.toggles, o),
                        a = "previous" === t ? -1 : 1,
                        l = 0;
                      l < i;
                      l++, s = (s + a + i) % i
                    )
                      if (!G(n.toggles[s], ".uk-disabled, [disabled]")) {
                        e = n.toggles[s];
                        break;
                      }
                    !e ||
                      (o >= 0 && Wt(e, this.cls)) ||
                      o === s ||
                      (jt(this.toggles, this.cls),
                      nt(this.toggles, "aria-expanded", !1),
                      Ht(e, this.cls),
                      nt(e, "aria-expanded", !0),
                      this.connects.forEach(function(t) {
                        r
                          ? n.toggleElement([t.children[o], t.children[s]])
                          : n.toggleNow(t.children[s]);
                      }));
                  }
                }
              });
            },
            Gi = function(t) {
              t.component(
                "tab",
                t.components.switcher.extend({
                  mixins: [vi],
                  name: "tab",
                  props: { media: "media" },
                  defaults: { media: 960, attrItem: "uk-tab-item" },
                  init: function() {
                    var e = Wt(this.$el, "uk-tab-left")
                      ? "uk-tab-left"
                      : !!Wt(this.$el, "uk-tab-right") && "uk-tab-right";
                    e &&
                      t.toggle(this.$el, {
                        cls: e,
                        mode: "media",
                        media: this.media
                      });
                  }
                })
              );
            },
            Xi = function(t) {
              t.component("toggle", {
                mixins: [t.mixin.togglable],
                args: "target",
                props: {
                  href: String,
                  target: null,
                  mode: "list",
                  media: "media"
                },
                defaults: {
                  href: !1,
                  target: !1,
                  mode: "click",
                  queued: !0,
                  media: !1
                },
                computed: {
                  target: function(t, e) {
                    var n = t.href,
                      i = t.target;
                    return (i = F(i || n, e)), (i.length && i) || [e];
                  }
                },
                events: [
                  {
                    name: Un + " " + Gn,
                    filter: function() {
                      return h(this.mode, "hover");
                    },
                    handler: function(t) {
                      Ce(t) ||
                        this.toggle(
                          "toggle" + (t.type === Un ? "show" : "hide")
                        );
                    }
                  },
                  {
                    name: "click",
                    filter: function() {
                      return h(this.mode, "click") || Rn;
                    },
                    handler: function(t) {
                      if (Ce(t) || h(this.mode, "click")) {
                        var e;
                        (X(t.target, 'a[href="#"], button') ||
                          ((e = X(t.target, "a[href]")) &&
                            (this.cls ||
                              !vt(this.target) ||
                              (e.hash && G(this.target, e.hash))))) &&
                          t.preventDefault(),
                          this.toggle();
                      }
                    }
                  }
                ],
                update: {
                  write: function() {
                    if (h(this.mode, "media") && this.media) {
                      var t = this.isToggled(this.target);
                      (yn.matchMedia(this.media).matches ? !t : t) &&
                        this.toggle();
                    }
                  },
                  events: ["load", "resize"]
                },
                methods: {
                  toggle: function(t) {
                    Kt(this.target, t || "toggle", [this]) &&
                      this.toggleElement(this.target);
                  }
                }
              });
            },
            Ji = function(t) {
              t.component("video", {
                props: { automute: Boolean, autoplay: Boolean },
                defaults: { automute: !1, autoplay: !0 },
                ready: function() {
                  (this.player = new ni(this.$el)),
                    this.automute && this.player.mute();
                },
                update: {
                  write: function() {
                    this.player &&
                      (vt(this.$el) && "hidden" !== Nt(this.$el, "visibility")
                        ? this.autoplay && this.player.play()
                        : this.player.pause());
                  },
                  events: ["load"]
                }
              });
            };
          (di.version = "3.0.0-beta.34"),
            (function(t) {
              (t.mixin.class = vi),
                (t.mixin.container = yi),
                (t.mixin.modal = bi),
                (t.mixin.position = xi),
                (t.mixin.togglable = wi);
            })(di),
            (function(t) {
              var e = 0,
                n = 0;
              Gt(yn, "load resize", t.update),
                Gt(yn, "scroll", function(n) {
                  (n.dir = e < yn.pageYOffset ? "down" : "up"),
                    (e = yn.pageYOffset),
                    t.update(n),
                    Zn.flush();
                }),
                Jn &&
                  Gt(
                    wn,
                    Jn,
                    function(t) {
                      var e = t.target;
                      (Nt(e, "animationName") || "").match(
                        /^uk-.*(left|right)/
                      ) &&
                        (n++,
                        (wn.body.style.overflowX = "hidden"),
                        setTimeout(function() {
                          --n || (wn.body.style.overflowX = "");
                        }, C(Nt(e, "animationDuration")) + 100));
                    },
                    !0
                  ),
                t.use(Xi),
                t.use(ki),
                t.use($i),
                t.use(Ji),
                t.use(_i),
                t.use(Ti),
                t.use(Ei),
                t.use(Si),
                t.use(Ii),
                t.use(Oi),
                t.use(Ni),
                t.use(Di),
                t.use(Ai),
                t.use(Ci),
                t.use(Pi),
                t.use(Bi),
                t.use(Li),
                t.use(Hi),
                t.use(ji),
                t.use(zi),
                t.use(Fi),
                t.use(Wi),
                t.use(Ri),
                t.use(Vi),
                t.use(qi),
                t.use(Mi),
                t.use(Ui),
                t.use(Gi);
            })(di);
          var Ki = function(t) {
              var e = t.util,
                n = e.css,
                i = {
                  slide: {
                    show: function(t) {
                      return [{ transform: De(-100 * t) }, { transform: De() }];
                    },
                    percent: function(t) {
                      return i.translated(t);
                    },
                    translate: function(t, e) {
                      return [
                        { transform: De(-100 * e * t) },
                        { transform: De(100 * e * (1 - t)) }
                      ];
                    }
                  },
                  translated: function(t) {
                    return Math.abs(
                      n(t, "transform").split(",")[4] / t.offsetWidth
                    );
                  }
                };
              return i;
            },
            Zi = function(t) {
              var e = t.mixin,
                n = t.util,
                i = n.assign,
                o = n.css;
              return i({}, e.slideshow.defaults.Animations, {
                fade: {
                  show: function() {
                    return [{ opacity: 0 }, { opacity: 1 }];
                  },
                  percent: function(t) {
                    return 1 - o(t, "opacity");
                  },
                  translate: function(t) {
                    return [{ opacity: 1 - t }, { opacity: t }];
                  }
                },
                scale: {
                  show: function() {
                    return [
                      { opacity: 0, transform: Be(0.8) },
                      { opacity: 1, transform: Be(1) }
                    ];
                  },
                  percent: function(t) {
                    return 1 - o(t, "opacity");
                  },
                  translate: function(t) {
                    return [
                      { opacity: 1 - t, transform: Be(1 - 0.2 * t) },
                      { opacity: t, transform: Be(0.8 + 0.2 * t) }
                    ];
                  }
                }
              });
            },
            Qi = function(t) {
              var e = t.mixin,
                n = t.util,
                i = n.assign,
                o = n.css,
                r = i({}, e.slideshow.defaults.Animations, {
                  fade: {
                    show: function() {
                      return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
                    },
                    percent: function(t) {
                      return 1 - o(t, "opacity");
                    },
                    translate: function(t) {
                      return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
                    }
                  },
                  scale: {
                    show: function() {
                      return [
                        { opacity: 0, transform: Be(1.5), zIndex: 0 },
                        { zIndex: -1 }
                      ];
                    },
                    percent: function(t) {
                      return 1 - o(t, "opacity");
                    },
                    translate: function(t) {
                      return [
                        {
                          opacity: 1 - t,
                          transform: Be(1 + 0.5 * t),
                          zIndex: 0
                        },
                        { zIndex: -1 }
                      ];
                    }
                  },
                  pull: {
                    show: function(t) {
                      return t < 0
                        ? [
                            { transform: De(30), zIndex: -1 },
                            { transform: De(), zIndex: 0 }
                          ]
                        : [
                            { transform: De(-100), zIndex: 0 },
                            { transform: De(), zIndex: -1 }
                          ];
                    },
                    percent: function(t, e, n) {
                      return n < 0 ? 1 - r.translated(e) : r.translated(t);
                    },
                    translate: function(t, e) {
                      return e < 0
                        ? [
                            { transform: De(30 * t), zIndex: -1 },
                            { transform: De(-100 * (1 - t)), zIndex: 0 }
                          ]
                        : [
                            { transform: De(100 * -t), zIndex: 0 },
                            { transform: De(30 * (1 - t)), zIndex: -1 }
                          ];
                    }
                  },
                  push: {
                    show: function(t) {
                      return t < 0
                        ? [
                            { transform: De(100), zIndex: 0 },
                            { transform: De(), zIndex: -1 }
                          ]
                        : [
                            { transform: De(-30), zIndex: -1 },
                            { transform: De(), zIndex: 0 }
                          ];
                    },
                    percent: function(t, e, n) {
                      return n > 0 ? 1 - r.translated(e) : r.translated(t);
                    },
                    translate: function(t, e) {
                      return e < 0
                        ? [
                            { transform: De(100 * t), zIndex: 0 },
                            { transform: De(-30 * (1 - t)), zIndex: -1 }
                          ]
                        : [
                            { transform: De(-30 * t), zIndex: -1 },
                            { transform: De(100 * (1 - t)), zIndex: 0 }
                          ];
                    }
                  }
                });
              return r;
            };
          return (
            di.use(Me),
            di.use(Pe),
            di.use(He),
            di.use(je),
            di.use(ze),
            di.use(Fe),
            di.use(We),
            di.use(Re),
            di.use(Ve),
            (function(t) {
              function e() {
                n(wn.body, i),
                  Zn.flush(),
                  new jn(function(e) {
                    return e.forEach(function(e) {
                      for (
                        var r = e.addedNodes,
                          s = e.removedNodes,
                          a = e.target,
                          l = 0;
                        l < r.length;
                        l++
                      )
                        n(r[l], i);
                      for (l = 0; l < s.length; l++) n(s[l], o);
                      t.update(Zt("update", !0, !1, { mutation: !0 }), a, !0);
                    });
                  }).observe(bn, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributes: !0,
                    attributeFilter: ["href"]
                  }),
                  (t._initialized = !0);
              }
              function n(t, e) {
                if (1 === t.nodeType && !it(t, "uk-no-boot"))
                  for (e(t), t = t.firstElementChild; t; ) {
                    var i = t.nextElementSibling;
                    n(t, e), (t = i);
                  }
              }
              var i = t.connect,
                o = t.disconnect;
              jn
                ? wn.body
                  ? e()
                  : new jn(function() {
                      wn.body && (this.disconnect(), e());
                    }).observe(bn, { childList: !0, subtree: !0 })
                : lt(function() {
                    n(wn.body, i),
                      Gt(bn, "DOMNodeInserted", function(t) {
                        return n(t.target, i);
                      }),
                      Gt(bn, "DOMNodeRemoved", function(t) {
                        return n(t.target, o);
                      });
                  });
            })(di),
            di
          );
        });
      }.call(e, n(46).setImmediate));
    },
    function(t, e, n) {
      function i(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      var o = Function.prototype.apply;
      (e.setTimeout = function() {
        return new i(o.call(setTimeout, window, arguments), clearTimeout);
      }),
        (e.setInterval = function() {
          return new i(o.call(setInterval, window, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval = function(t) {
          t && t.close();
        }),
        (i.prototype.unref = i.prototype.ref = function() {}),
        (i.prototype.close = function() {
          this._clearFn.call(window, this._id);
        }),
        (e.enroll = function(t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function(t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active = function(t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 &&
            (t._idleTimeoutId = setTimeout(function() {
              t._onTimeout && t._onTimeout();
            }, e));
        }),
        n(47),
        (e.setImmediate = setImmediate),
        (e.clearImmediate = clearImmediate);
    },
    function(t, e, n) {
      (function(t, e) {
        !(function(t, n) {
          "use strict";
          function i(t) {
            "function" != typeof t && (t = new Function("" + t));
            for (
              var e = new Array(arguments.length - 1), n = 0;
              n < e.length;
              n++
            )
              e[n] = arguments[n + 1];
            var i = { callback: t, args: e };
            return (u[l] = i), a(l), l++;
          }
          function o(t) {
            delete u[t];
          }
          function r(t) {
            var e = t.callback,
              i = t.args;
            switch (i.length) {
              case 0:
                e();
                break;
              case 1:
                e(i[0]);
                break;
              case 2:
                e(i[0], i[1]);
                break;
              case 3:
                e(i[0], i[1], i[2]);
                break;
              default:
                e.apply(n, i);
            }
          }
          function s(t) {
            if (c) setTimeout(s, 0, t);
            else {
              var e = u[t];
              if (e) {
                c = !0;
                try {
                  r(e);
                } finally {
                  o(t), (c = !1);
                }
              }
            }
          }
          if (!t.setImmediate) {
            var a,
              l = 1,
              u = {},
              c = !1,
              h = t.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (f = f && f.setTimeout ? f : t),
              "[object process]" === {}.toString.call(t.process)
                ? (function() {
                    a = function(t) {
                      e.nextTick(function() {
                        s(t);
                      });
                    };
                  })()
                : (function() {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        n = t.onmessage;
                      return (
                        (t.onmessage = function() {
                          e = !1;
                        }),
                        t.postMessage("", "*"),
                        (t.onmessage = n),
                        e
                      );
                    }
                  })()
                  ? (function() {
                      var e = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                          n.source === t &&
                            "string" == typeof n.data &&
                            0 === n.data.indexOf(e) &&
                            s(+n.data.slice(e.length));
                        };
                      t.addEventListener
                        ? t.addEventListener("message", n, !1)
                        : t.attachEvent("onmessage", n),
                        (a = function(n) {
                          t.postMessage(e + n, "*");
                        });
                    })()
                  : t.MessageChannel
                    ? (function() {
                        var t = new MessageChannel();
                        (t.port1.onmessage = function(t) {
                          s(t.data);
                        }),
                          (a = function(e) {
                            t.port2.postMessage(e);
                          });
                      })()
                    : h && "onreadystatechange" in h.createElement("script")
                      ? (function() {
                          var t = h.documentElement;
                          a = function(e) {
                            var n = h.createElement("script");
                            (n.onreadystatechange = function() {
                              s(e),
                                (n.onreadystatechange = null),
                                t.removeChild(n),
                                (n = null);
                            }),
                              t.appendChild(n);
                          };
                        })()
                      : (function() {
                          a = function(t) {
                            setTimeout(s, 0, t);
                          };
                        })(),
              (f.setImmediate = i),
              (f.clearImmediate = o);
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(e, n(48), n(49)));
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout)
          return (c = setTimeout), setTimeout(t, 0);
        try {
          return c(t, 0);
        } catch (e) {
          try {
            return c.call(null, t, 0);
          } catch (e) {
            return c.call(this, t, 0);
          }
        }
      }
      function r(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === i || !h) && clearTimeout)
          return (h = clearTimeout), clearTimeout(t);
        try {
          return h(t);
        } catch (e) {
          try {
            return h.call(null, t);
          } catch (e) {
            return h.call(this, t);
          }
        }
      }
      function s() {
        m &&
          d &&
          ((m = !1), d.length ? (p = d.concat(p)) : (g = -1), p.length && a());
      }
      function a() {
        if (!m) {
          var t = o(s);
          m = !0;
          for (var e = p.length; e; ) {
            for (d = p, p = []; ++g < e; ) d && d[g].run();
            (g = -1), (e = p.length);
          }
          (d = null), (m = !1), r(t);
        }
      }
      function l(t, e) {
        (this.fun = t), (this.array = e);
      }
      function u() {}
      var c,
        h,
        f = (t.exports = {});
      !(function() {
        try {
          c = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          c = n;
        }
        try {
          h = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          h = i;
        }
      })();
      var d,
        p = [],
        m = !1,
        g = -1;
      (f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || m || o(a);
      }),
        (l.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (f.title = "browser"),
        (f.browser = !0),
        (f.env = {}),
        (f.argv = []),
        (f.version = ""),
        (f.versions = {}),
        (f.on = u),
        (f.addListener = u),
        (f.once = u),
        (f.off = u),
        (f.removeListener = u),
        (f.removeAllListeners = u),
        (f.emit = u),
        (f.prependListener = u),
        (f.prependOnceListener = u),
        (f.listeners = function(t) {
          return [];
        }),
        (f.binding = function(t) {
          throw new Error("process.binding is not supported");
        }),
        (f.cwd = function() {
          return "/";
        }),
        (f.chdir = function(t) {
          throw new Error("process.chdir is not supported");
        }),
        (f.umask = function() {
          return 0;
        });
    },
    function(t, e, n) {
      n(22), n(29), n(35), n(65), (t.exports = n(9).Map);
    },
    function(t, e, n) {
      var i = n(16),
        o = n(17);
      t.exports = function(t) {
        return function(e, n) {
          var r,
            s,
            a = String(o(e)),
            l = i(n),
            u = a.length;
          return l < 0 || l >= u
            ? t ? "" : void 0
            : ((r = a.charCodeAt(l)),
              r < 55296 ||
              r > 56319 ||
              l + 1 === u ||
              (s = a.charCodeAt(l + 1)) < 56320 ||
              s > 57343
                ? t ? a.charAt(l) : r
                : t
                  ? a.slice(l, l + 2)
                  : s - 56320 + ((r - 55296) << 10) + 65536);
        };
      };
    },
    function(t, e) {
      t.exports = !1;
    },
    function(t, e) {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(31),
        o = n(15),
        r = n(20),
        s = {};
      n(6)(s, n(0)("iterator"), function() {
        return this;
      }),
        (t.exports = function(t, e, n) {
          (t.prototype = i(s, { next: o(1, n) })), r(t, e + " Iterator");
        });
    },
    function(t, e, n) {
      var i = n(7),
        o = n(8),
        r = n(32);
      t.exports = n(3)
        ? Object.defineProperties
        : function(t, e) {
            o(t);
            for (var n, s = r(e), a = s.length, l = 0; a > l; )
              i.f(t, (n = s[l++]), e[n]);
            return t;
          };
    },
    function(t, e, n) {
      var i = n(4),
        o = n(14),
        r = n(58)(!1),
        s = n(19)("IE_PROTO");
      t.exports = function(t, e) {
        var n,
          a = o(t),
          l = 0,
          u = [];
        for (n in a) n != s && i(a, n) && u.push(n);
        for (; e.length > l; ) i(a, (n = e[l++])) && (~r(u, n) || u.push(n));
        return u;
      };
    },
    function(t, e, n) {
      var i = n(24);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == i(t) ? t.split("") : Object(t);
          };
    },
    function(t, e, n) {
      var i = n(14),
        o = n(33),
        r = n(59);
      t.exports = function(t) {
        return function(e, n, s) {
          var a,
            l = i(e),
            u = o(l.length),
            c = r(s, u);
          if (t && n != n) {
            for (; u > c; ) if ((a = l[c++]) != a) return !0;
          } else
            for (; u > c; c++)
              if ((t || c in l) && l[c] === n) return t || c || 0;
          return !t && -1;
        };
      };
    },
    function(t, e, n) {
      var i = n(16),
        o = Math.max,
        r = Math.min;
      t.exports = function(t, e) {
        return (t = i(t)), t < 0 ? o(t + e, 0) : r(t, e);
      };
    },
    function(t, e, n) {
      var i = n(1).document;
      t.exports = i && i.documentElement;
    },
    function(t, e, n) {
      var i = n(4),
        o = n(62),
        r = n(19)("IE_PROTO"),
        s = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = o(t)),
            i(t, r)
              ? t[r]
              : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object ? s : null
          );
        };
    },
    function(t, e, n) {
      var i = n(17);
      t.exports = function(t) {
        return Object(i(t));
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(64),
        o = n(36),
        r = n(10),
        s = n(14);
      (t.exports = n(18)(
        Array,
        "Array",
        function(t, e) {
          (this._t = s(t)), (this._i = 0), (this._k = e);
        },
        function() {
          var t = this._t,
            e = this._k,
            n = this._i++;
          return !t || n >= t.length
            ? ((this._t = void 0), o(1))
            : "keys" == e
              ? o(0, n)
              : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
        },
        "values"
      )),
        (r.Arguments = r.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    function(t, e, n) {
      var i = n(0)("unscopables"),
        o = Array.prototype;
      void 0 == o[i] && n(6)(o, i, {}),
        (t.exports = function(t) {
          o[i][t] = !0;
        });
    },
    function(t, e, n) {
      "use strict";
      var i = n(37),
        o = n(21);
      t.exports = n(42)(
        "Map",
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function(t) {
            var e = i.getEntry(o(this, "Map"), t);
            return e && e.v;
          },
          set: function(t, e) {
            return i.def(o(this, "Map"), 0 === t ? 0 : t, e);
          }
        },
        i,
        !0
      );
    },
    function(t, e, n) {
      var i = n(8);
      t.exports = function(t, e, n, o) {
        try {
          return o ? e(i(n)[0], n[1]) : e(n);
        } catch (e) {
          var r = t.return;
          throw (void 0 !== r && i(r.call(t)), e);
        }
      };
    },
    function(t, e, n) {
      var i = n(10),
        o = n(0)("iterator"),
        r = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (i.Array === t || r[o] === t);
      };
    },
    function(t, e, n) {
      var i = n(23),
        o = n(0)("iterator"),
        r = n(10);
      t.exports = n(9).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || r[i(t)];
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(1),
        o = n(7),
        r = n(3),
        s = n(0)("species");
      t.exports = function(t) {
        var e = i[t];
        r &&
          e &&
          !e[s] &&
          o.f(e, s, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    function(t, e, n) {
      var i = n(0)("iterator"),
        o = !1;
      try {
        var r = [7][i]();
        (r.return = function() {
          o = !0;
        }),
          Array.from(r, function() {
            throw 2;
          });
      } catch (t) {}
      t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
          var r = [7],
            s = r[i]();
          (s.next = function() {
            return { done: (n = !0) };
          }),
            (r[i] = function() {
              return s;
            }),
            t(r);
        } catch (t) {}
        return n;
      };
    },
    function(t, e, n) {
      var i = n(2),
        o = n(72).set;
      t.exports = function(t, e, n) {
        var r,
          s = e.constructor;
        return (
          s !== n &&
            "function" == typeof s &&
            (r = s.prototype) !== n.prototype &&
            i(r) &&
            o &&
            o(t, r),
          t
        );
      };
    },
    function(t, e, n) {
      var i = n(2),
        o = n(8),
        r = function(t, e) {
          if ((o(t), !i(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(t, e, i) {
                try {
                  (i = n(13)(
                    Function.call,
                    n(73).f(Object.prototype, "__proto__").set,
                    2
                  )),
                    i(t, []),
                    (e = !(t instanceof Array));
                } catch (t) {
                  e = !0;
                }
                return function(t, n) {
                  return r(t, n), e ? (t.__proto__ = n) : i(t, n), t;
                };
              })({}, !1)
            : void 0),
        check: r
      };
    },
    function(t, e, n) {
      var i = n(74),
        o = n(15),
        r = n(14),
        s = n(28),
        a = n(4),
        l = n(26),
        u = Object.getOwnPropertyDescriptor;
      e.f = n(3)
        ? u
        : function(t, e) {
            if (((t = r(t)), (e = s(e, !0)), l))
              try {
                return u(t, e);
              } catch (t) {}
            if (a(t, e)) return o(!i.f.call(t, e), t[e]);
          };
    },
    function(t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function(t, e, n) {
      n(22), n(29), n(35), n(76), (t.exports = n(9).Set);
    },
    function(t, e, n) {
      "use strict";
      var i = n(37),
        o = n(21);
      t.exports = n(42)(
        "Set",
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return i.def(o(this, "Set"), (t = 0 === t ? 0 : t), t);
          }
        },
        i
      );
    }
  ],
  [43]
);
