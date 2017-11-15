webpackJsonp(
  [0],
  [
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var i = n(59)("wks"),
        o = n(21),
        r = n(5).Symbol,
        a = "function" == typeof r;
      (t.exports = function(t) {
        return i[t] || (i[t] = (a && r[t]) || (a ? r : o)("Symbol." + t));
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
      t.exports = !n(22)(function() {
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
      var i = n(5),
        o = n(10),
        r = n(8),
        a = n(21)("src"),
        s = Function.toString,
        l = ("" + s).split("toString");
      (n(15).inspectSource = function(t) {
        return s.call(t);
      }),
        (t.exports = function(t, e, n, s) {
          var c = "function" == typeof n;
          c && (r(n, "name") || o(n, "name", e)),
            t[e] !== n &&
              (c && (r(n, a) || o(n, a, t[e] ? "" + t[e] : l.join(String(e)))),
              t === i
                ? (t[e] = n)
                : s
                  ? t[e] ? (t[e] = n) : o(t, e, n)
                  : (delete t[e], o(t, e, n)));
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && this[a]) || s.call(this);
        });
    },
    function(t, e, n) {
      var i = n(11),
        o = n(31);
      t.exports = n(7)
        ? function(t, e, n) {
            return i.f(t, e, o(1, n));
          }
        : function(t, e, n) {
            return (t[e] = n), t;
          };
    },
    function(t, e, n) {
      var i = n(12),
        o = n(60),
        r = n(62),
        a = Object.defineProperty;
      e.f = n(7)
        ? Object.defineProperty
        : function(t, e, n) {
            if ((i(t), (e = r(e, !0)), i(n), o))
              try {
                return a(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    function(t, e, n) {
      var i = n(6);
      t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    ,
    ,
    function(t, e) {
      var n = (t.exports = { version: "2.5.1" });
      "number" == typeof __e && (__e = n);
    },
    function(t, e) {
      t.exports = {};
    },
    ,
    ,
    ,
    ,
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
      var i = n(129);
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
      var i = n(133),
        o = n(33);
      t.exports = function(t) {
        return i(o(t));
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      t.exports = n.p + "371ade47f35aa04c66a518f3d1524e7b.png";
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
      var i = n(128),
        o = n(64),
        r = n(9),
        a = n(10),
        s = n(8),
        l = n(16),
        c = n(130),
        u = n(36),
        h = n(137),
        d = n(4)("iterator"),
        f = !([].keys && "next" in [].keys()),
        p = function() {
          return this;
        };
      t.exports = function(t, e, n, g, m, v, w) {
        c(n, e, g);
        var y,
          x,
          b,
          k = function(t) {
            if (!f && t in E) return E[t];
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
          C = e + " Iterator",
          M = "values" == m,
          L = !1,
          E = t.prototype,
          D = E[d] || E["@@iterator"] || (m && E[m]),
          _ = D || k(m),
          N = m ? (M ? k("entries") : _) : void 0,
          T = "Array" == e ? E.entries || D : D;
        if (
          (T &&
            (b = h(T.call(new t()))) !== Object.prototype &&
            b.next &&
            (u(b, C, !0), i || s(b, d) || a(b, d, p)),
          M &&
            D &&
            "values" !== D.name &&
            ((L = !0),
            (_ = function() {
              return D.call(this);
            })),
          (i && !w) || (!f && !L && E[d]) || a(E, d, _),
          (l[e] = _),
          (l[C] = p),
          m)
        )
          if (
            ((y = {
              values: M ? _ : k("values"),
              keys: v ? _ : k("keys"),
              entries: N
            }),
            w)
          )
            for (x in y) x in E || r(E, x, y[x]);
          else o(o.P + o.F * (f || L), e, y);
        return y;
      };
    },
    function(t, e, n) {
      var i = n(59)("keys"),
        o = n(21);
      t.exports = function(t) {
        return i[t] || (i[t] = o(t));
      };
    },
    function(t, e, n) {
      var i = n(11).f,
        o = n(8),
        r = n(4)("toStringTag");
      t.exports = function(t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), r) &&
          i(t, r, { configurable: !0, value: e });
      };
    },
    function(t, e, n) {
      var i = n(6);
      t.exports = function(t, e) {
        if (!i(t) || t._t !== e)
          throw TypeError("Incompatible receiver, " + e + " required!");
        return t;
      };
    },
    ,
    ,
    ,
    function(t, e, n) {
      (function(e) {
        /*! UIkit 3.0.0-beta.34 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */
        !(function(e, n) {
          t.exports = n();
        })(0, function() {
          "use strict";
          function t(t) {
            (this.state = Ze), (this.value = void 0), (this.deferred = []);
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
          function a(t) {
            return t.replace(en, s);
          }
          function s(t, e) {
            return e ? e.toUpperCase() : "";
          }
          function l(t) {
            return t.length ? s(null, t.charAt(0)) + t.slice(1) : "";
          }
          function c(t, e) {
            return on.call(t, e);
          }
          function u(t, e) {
            return rn.call(t, e);
          }
          function h(t, e) {
            return t && (w(t) ? sn : ln).call(t, e);
          }
          function d(t) {
            return "function" == typeof t;
          }
          function f(t) {
            return null !== t && "object" == typeof t;
          }
          function p(t) {
            return f(t) && Object.getPrototypeOf(t) === Object.prototype;
          }
          function g(t) {
            return f(t) && t === t.window;
          }
          function m(t) {
            return f(t) && 9 === t.nodeType;
          }
          function v(t) {
            return "boolean" == typeof t;
          }
          function w(t) {
            return "string" == typeof t;
          }
          function y(t) {
            return "number" == typeof t;
          }
          function x(t) {
            return y(t) || (w(t) && !isNaN(t - parseFloat(t)));
          }
          function b(t) {
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
          function C(t) {
            var e = Number(t);
            return !isNaN(e) && e;
          }
          function M(t) {
            return parseFloat(t) || 0;
          }
          function L(t) {
            return cn(t)
              ? t
              : w(t)
                ? t.split(",").map(function(t) {
                    return x(t) ? C(t) : k(t.trim());
                  })
                : [t];
          }
          function E(t) {
            if (w(t))
              if ("@" === t[0]) {
                var e = "media-" + t.substr(1);
                t = un[e] || (un[e] = M(Bt(e)));
              } else if (isNaN(t)) return t;
            return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
          }
          function D(t, e, n) {
            return t === Boolean
              ? k(e)
              : t === Number
                ? C(e)
                : "query" === t
                  ? F(e, n)
                  : "list" === t ? L(e) : "media" === t ? E(e) : t ? t(e) : e;
          }
          function _(t) {
            return t ? (u(t, "ms") ? M(t) : 1e3 * M(t)) : 0;
          }
          function N(t, e, n) {
            return t.replace(new RegExp(e + "|" + n, "mg"), function(t) {
              return t === e ? n : e;
            });
          }
          function T(t, e) {
            for (var n in t) if (!1 === e.call(t[n], t[n], n)) break;
          }
          function S(t, e, n) {
            return (
              void 0 === e && (e = 0),
              void 0 === n && (n = 1),
              Math.min(Math.max(t, e), n)
            );
          }
          function O() {}
          function I(t, e) {
            return (
              t.left <= e.right &&
              e.left <= t.right &&
              t.top <= e.bottom &&
              e.top <= t.bottom
            );
          }
          function B(t, e) {
            return I({ top: t.y, bottom: t.y, left: t.x, right: t.x }, e);
          }
          function A(t, e) {
            return new Xe(function(n, i) {
              var o = hn(
                  {
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest(),
                    beforeSend: O,
                    responseType: ""
                  },
                  e
                ),
                r = o.xhr;
              o.beforeSend(o);
              for (var a in o)
                if (a in r)
                  try {
                    r[a] = o[a];
                  } catch (t) {}
              r.open(o.method.toUpperCase(), t);
              for (var s in o.headers) r.setRequestHeader(s, o.headers[s]);
              qt(r, "load", function() {
                0 === r.status ||
                (r.status >= 200 && r.status < 300) ||
                304 === r.status
                  ? n(r)
                  : i(hn(Error(r.statusText), { xhr: r, status: r.status }));
              }),
                qt(r, "error", function() {
                  return i(hn(Error("Network Error"), { xhr: r }));
                }),
                qt(r, "timeout", function() {
                  return i(hn(Error("Network Timeout"), { xhr: r }));
                }),
                r.send(o.data);
            });
          }
          function P(t, e) {
            return w(t) ? (H(t) ? tt(Tt(t)) : z(t, e)) : tt(t);
          }
          function j(t, e) {
            return w(t) ? (H(t) ? et(Tt(t)) : R(t, e)) : et(t);
          }
          function H(t) {
            return "<" === t[0] || t.match(/^\s*</);
          }
          function F(t, e) {
            return P(t, U(t) ? e : yn);
          }
          function Y(t, e) {
            return j(t, U(t) ? e : yn);
          }
          function z(t, e) {
            return tt(W(t, e, "querySelector"));
          }
          function R(t, e) {
            return et(W(t, e, "querySelectorAll"));
          }
          function W(t, e, n) {
            if ((void 0 === e && (e = yn), !t || !w(t))) return null;
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
                    (o = J(e.parentNode, r[0])), (t = r.slice(1).join(" "));
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
              (e = yn));
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
          function Z(t, e) {
            return j(t).filter(function(t) {
              return q(t, e);
            });
          }
          function V(t, e) {
            return w(e) ? q(t, e) || J(t, e) : t === e || tt(e).contains(tt(t));
          }
          function U(t) {
            return w(t) && t.match(fn);
          }
          function q(t, e) {
            return et(t).some(function(t) {
              return mn.call(t, e);
            });
          }
          function J(t, e) {
            return (
              c(e, ">") && (e = e.slice(1)),
              X(t)
                ? t.parentNode && vn.call(t, e)
                : et(t)
                    .map(function(t) {
                      return t.parentNode && vn.call(t, e);
                    })
                    .filter(Boolean)
            );
          }
          function G(t, e) {
            for (var n = [], i = tt(t).parentNode; i && 1 === i.nodeType; )
              q(i, e) && n.push(i), (i = i.parentNode);
            return n;
          }
          function K(t) {
            return f(t) && !!t.jquery;
          }
          function X(t) {
            return t instanceof Node || (f(t) && 1 === t.nodeType);
          }
          function Q(t) {
            return t instanceof NodeList || t instanceof HTMLCollection;
          }
          function tt(t) {
            return X(t) || g(t) || m(t)
              ? t
              : Q(t) || K(t) ? t[0] : cn(t) ? tt(t[0]) : null;
          }
          function et(t) {
            return X(t)
              ? [t]
              : Q(t)
                ? dn.slice.call(t)
                : cn(t) ? t.map(tt).filter(Boolean) : K(t) ? t.toArray() : [];
          }
          function nt(t, e, n) {
            if (f(e)) for (var i in e) nt(t, i, e[i]);
            else {
              if (b(n)) return (t = tt(t)) && t.getAttribute(e);
              et(t).forEach(function(t) {
                d(n) && (n = n.call(t, nt(t, e))),
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
          function at(t, e) {
            for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
              if (it(t, i[n])) return nt(t, i[n]);
          }
          function st() {
            return (
              "complete" === yn.readyState ||
              ("loading" !== yn.readyState && !xn.doScroll)
            );
          }
          function lt(t) {
            if (st()) return void t();
            var e = function() {
                n(), i(), t();
              },
              n = qt(yn, "DOMContentLoaded", e),
              i = qt(wn, "load", e);
          }
          function ct(t, e, n, i) {
            return (
              void 0 === n && (n = 400),
              void 0 === i && (i = "linear"),
              Xe.all(
                et(t).map(function(t) {
                  return new Xe(function(o, r) {
                    for (var a in e) {
                      var s = St(t, a);
                      "" === s && St(t, a, s);
                    }
                    var l = setTimeout(function() {
                      return Kt(t, Jn);
                    }, n);
                    Gt(
                      t,
                      Jn + " " + kn,
                      function(e) {
                        var n = e.type;
                        clearTimeout(l),
                          Ht(t, "uk-transition"),
                          St(t, "transition", ""),
                          n === kn ? r() : o();
                      },
                      !1,
                      function(e) {
                        var n = e.target;
                        return t === n;
                      }
                    ),
                      jt(t, "uk-transition"),
                      St(t, hn({ transition: "all " + n + "ms " + i }, e));
                  });
                })
              )
            );
          }
          function ut(t, e, n, i, o) {
            var r = arguments;
            return (
              void 0 === n && (n = 200),
              Xe.all(
                et(t).map(function(t) {
                  return new Xe(function(a, s) {
                    function l() {
                      St(t, "animationDuration", ""), Ft(t, Ln + "\\S*");
                    }
                    if (zt(t, En))
                      return void Fn(function() {
                        return Xe.resolve().then(function() {
                          return ut.apply(null, r).then(a, s);
                        });
                      });
                    var u = e + " " + Ln + (o ? "leave" : "enter");
                    c(e, Ln) &&
                      (i && (u += " " + Ln + i),
                      o && (u += " " + Ln + "reverse")),
                      l(),
                      Gt(
                        t,
                        (Kn || "animationend") + " " + Mn,
                        function(e) {
                          var n = e.type,
                            i = !1;
                          n === Mn
                            ? (s(), l())
                            : (a(),
                              Xe.resolve().then(function() {
                                (i = !0), l();
                              })),
                            Fn(function() {
                              i ||
                                (jt(t, En),
                                Fn(function() {
                                  return Ht(t, En);
                                }));
                            });
                        },
                        !1,
                        function(e) {
                          var n = e.target;
                          return t === n;
                        }
                      ),
                      St(t, "animationDuration", n + "ms"),
                      jt(t, u),
                      Kn ||
                        Fn(function() {
                          return _n.cancel(t);
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
              I(tt(t).getBoundingClientRect(), {
                top: e,
                left: n,
                bottom: e + li(wn),
                right: n + ci(wn)
              })
            );
          }
          function dt(t) {
            t = tt(t);
            var e = t.offsetHeight,
              n = ft(t),
              i = li(wn),
              o = i + Math.min(0, n - i),
              r = Math.max(0, i - (li(yn) - (n + e)));
            return S(
              (o + wn.pageYOffset - n) /
                ((o + (e - (r < i ? r : 0))) / 100) /
                100
            );
          }
          function ft(t) {
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
                (x(t)
                  ? C(t)
                  : "next" === t
                    ? n + 1
                    : "previous" === t ? n - 1 : $t(e, t)) % i),
              t < 0 ? t + i : t
            );
          }
          function gt(t) {
            return Nn[tt(t).tagName.toLowerCase()];
          }
          function mt() {
            var t = setTimeout(function() {
              return Kt(yn, "click");
            }, 0);
            Gt(
              yn,
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
          function wt(t) {
            return et(t).some(function(t) {
              return q(t, $n);
            });
          }
          function yt(t) {
            return (t = tt(t)), (t.innerHTML = ""), t;
          }
          function xt(t, e) {
            return (
              (t = tt(t)),
              b(e) ? t.innerHTML : kt(t.hasChildNodes() ? yt(t) : t, e)
            );
          }
          function bt(t, e) {
            return (
              (t = tt(t)),
              t.hasChildNodes()
                ? Lt(e, function(e) {
                    return t.insertBefore(e, t.firstChild);
                  })
                : kt(t, e)
            );
          }
          function kt(t, e) {
            return (
              (t = tt(t)),
              Lt(e, function(e) {
                return t.appendChild(e);
              })
            );
          }
          function Ct(t, e) {
            return (
              (t = tt(t)),
              Lt(e, function(e) {
                return t.parentNode.insertBefore(e, t);
              })
            );
          }
          function Mt(t, e) {
            return (
              (t = tt(t)),
              Lt(e, function(e) {
                return t.nextSibling
                  ? Ct(t.nextSibling, e)
                  : kt(t.parentNode, e);
              })
            );
          }
          function Lt(t, e) {
            return (t = w(t) ? Tt(t) : t), "length" in t ? et(t).map(e) : e(t);
          }
          function Et(t) {
            et(t).map(function(t) {
              return t.parentNode && t.parentNode.removeChild(t);
            });
          }
          function Dt(t, e) {
            for (e = tt(Ct(t, e)); e.firstChild; ) e = e.firstChild;
            return kt(e, t), e;
          }
          function _t(t, e) {
            return et(
              et(t).map(function(t) {
                return t.hasChildNodes ? Dt(et(t.childNodes), e) : kt(t, e);
              })
            );
          }
          function Nt(t) {
            et(t)
              .map(function(t) {
                return t.parentNode;
              })
              .filter(function(t, e, n) {
                return n.indexOf(t) === e;
              })
              .forEach(function(t) {
                Ct(t, t.childNodes), Et(t);
              });
          }
          function Tt(t) {
            var e;
            if ((e = On.exec(t))) return yn.createElement(e[1]);
            var n = yn.createElement("div");
            return (
              Sn.test(t)
                ? n.insertAdjacentHTML("beforeend", t.trim())
                : (n.textContent = t),
              n.childNodes.length > 1 ? et(n.childNodes) : n.firstChild
            );
          }
          function $t(t, e) {
            return e
              ? et(t).indexOf(tt(e))
              : et((t = tt(t)) && t.parentNode.children).indexOf(t);
          }
          function St(t, e, n) {
            return et(t).map(function(t) {
              if (w(e)) {
                if (((e = At(e)), b(n))) return It(t, e);
                n || 0 === n
                  ? (t.style[e] = x(n) && !In[e] ? n + "px" : n)
                  : t.style.removeProperty(e);
              } else {
                if (cn(e)) {
                  var i = Ot(t);
                  return e.reduce(function(t, e) {
                    return (t[e] = At(i[e])), t;
                  }, {});
                }
                f(e) &&
                  T(e, function(e, n) {
                    return St(t, n, e);
                  });
              }
              return t;
            })[0];
          }
          function Ot(t, e) {
            return (
              (t = tt(t)), t.ownerDocument.defaultView.getComputedStyle(t, e)
            );
          }
          function It(t, e, n) {
            return Ot(t, n)[e];
          }
          function Bt(t) {
            if (!(t in Bn)) {
              var e = kt(xn, yn.createElement("div"));
              jt(e, "var-" + t);
              try {
                (Bn[t] = It(e, "content", ":before").replace(
                  /^["'](.*)["']$/,
                  "$1"
                )),
                  (Bn[t] = JSON.parse(Bn[t]));
              } catch (t) {}
              xn.removeChild(e);
            }
            return Bn[t];
          }
          function At(t) {
            var e = An[t];
            return e || (e = An[t] = Pt(t) || t), e;
          }
          function Pt(t) {
            if ((t = r(t)) in jn) return t;
            for (var e, n = Pn.length; n--; )
              if ((e = "-" + Pn[n] + t) in jn) return e;
          }
          function jt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            Wt(t, e, "add");
          }
          function Ht(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            Wt(t, e, "remove");
          }
          function Ft(t, e) {
            rt(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "");
          }
          function Yt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            e[0] && Ht(t, e[0]), e[1] && jt(t, e[1]);
          }
          function zt(t, e) {
            return (
              qe &&
              et(t).some(function(t) {
                return t.classList.contains(e);
              })
            );
          }
          function Rt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            if (qe && e.length) {
              e = Zt(e);
              var i = w(e[e.length - 1]) ? void 0 : e.pop();
              et(t).forEach(function(t) {
                for (var n = t.classList, o = 0; o < e.length; o++)
                  Ge
                    ? n.toggle(e[o], i)
                    : n[(b(i) ? !n.contains(e[o]) : i) ? "add" : "remove"](
                        e[o]
                      );
              });
            }
          }
          function Wt(t, e, n) {
            (e = Zt(e).filter(function(t) {
              return t;
            })),
              qe &&
                e.length &&
                et(t).forEach(function(t) {
                  var i = t.classList;
                  Je
                    ? i[n].apply(i, e)
                    : e.forEach(function(t) {
                        return i[n](t);
                      });
                });
          }
          function Zt(t) {
            return t.reduce(function(t, e) {
              return (
                t.push.apply(t, w(e) && h(e, " ") ? e.trim().split(" ") : [e]),
                t
              );
            }, []);
          }
          function Vt(t) {
            return new Xe(function(e, n) {
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
              a = o(e),
              s = yn.body || xn,
              l = ((n = {}),
              (n[t] = r),
              (n["Webkit" + i] = "webkit" + a),
              (n["Moz" + i] = r),
              (n["o" + i] = "o" + a + " o" + r),
              n);
            for (t in l) if (void 0 !== s.style[t]) return l[t];
          }
          function qt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var n = Qt(t),
              i = n[0],
              o = n[1],
              r = n[2],
              a = n[3],
              s = n[4];
            return (
              (i = ie(i)),
              r && (a = te(i, r, a)),
              a.length > 1 && (a = ee(a)),
              o.split(" ").forEach(function(t) {
                return i.addEventListener(t, a, s);
              }),
              function() {
                return Jt(i, o, a, s);
              }
            );
          }
          function Jt(t, e, n, i) {
            void 0 === i && (i = !1),
              e.split(" ").forEach(function(e) {
                return ie(t).removeEventListener(e, n, i);
              });
          }
          function Gt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var n = Qt(t),
              i = n[0],
              o = n[1],
              r = n[2],
              a = n[3],
              s = n[4],
              l = n[5],
              c = qt(
                i,
                o,
                r,
                function(t) {
                  var e = !l || l(t);
                  e && (c(), a(t, e));
                },
                s
              );
            return c;
          }
          function Kt(t, e, n) {
            return oe(t).reduce(function(t, i) {
              return t && i.dispatchEvent(Xt(e, !0, !0, n));
            }, !0);
          }
          function Xt(t, e, n, i) {
            if ((void 0 === e && (e = !0), void 0 === n && (n = !1), w(t))) {
              var o = yn.createEvent("CustomEvent");
              o.initCustomEvent(t, e, n, i), (t = o);
            }
            return t;
          }
          function Qt(t) {
            return (
              w(t[0]) && (t[0] = P(t[0])), d(t[2]) && t.splice(2, 0, !1), t
            );
          }
          function te(t, e, n) {
            var i = this;
            return function(o) {
              var r = o.target,
                a =
                  ">" === e[0]
                    ? j(e, t).filter(function(t) {
                        return V(r, t);
                      })[0]
                    : J(r, e);
              a && ((o.delegate = t), (o.current = a), n.call(i, o));
            };
          }
          function ee(t) {
            return function(e) {
              return cn(e.detail) ? t.apply(t, [e].concat(e.detail)) : t(e);
            };
          }
          function ne(t) {
            return "EventTarget" in wn
              ? t instanceof EventTarget
              : "addEventListener" in t;
          }
          function ie(t) {
            return ne(t) ? t : tt(t);
          }
          function oe(t) {
            return ne(t) ? [t] : cn(t) ? t.map(ie).filter(Boolean) : et(t);
          }
          function re() {
            Xn.scheduled || ((Xn.scheduled = !0), Fn(Xn.flush.bind(Xn)));
          }
          function ae(t) {
            for (var e; (e = t.shift()); ) e();
          }
          function se(t, e) {
            var n = t.indexOf(e);
            return !!~n && !!t.splice(n, 1);
          }
          function le() {}
          function ce(t, e) {
            return (e.y - t.y) / (e.x - t.x);
          }
          function ue(t, e) {
            function n(n) {
              r[n] = (Qn[n] || ti)(t[n], e[n]);
            }
            var o,
              r = {};
            if (e.mixins)
              for (var a = 0, s = e.mixins.length; a < s; a++)
                t = ue(t, e.mixins[a]);
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
          function de(t) {
            return new Xe(function(e) {
              Gt(
                wn,
                "message",
                function(t, n) {
                  return e(n);
                },
                !1,
                function(e) {
                  var n = e.data;
                  if (n && w(n)) {
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
          function fe(t, e, n, i, o, r, a, s) {
            (n = ke(n)), (i = ke(i));
            var l = { element: n, target: i };
            if (!t || !e) return l;
            var c = ge(t),
              u = ge(e),
              d = u;
            return (
              be(d, n, c, -1),
              be(d, i, u, 1),
              (o = Ce(o, c.width, c.height)),
              (r = Ce(r, u.width, u.height)),
              (o.x += r.x),
              (o.y += r.y),
              (d.left += o.x),
              (d.top += o.y),
              (s = ge(s || xe(t))),
              a &&
                T(si, function(t, e) {
                  function r(t, n) {
                    var i = d[p] + t + n - 2 * o[f];
                    if (i >= s[p] && i + c[e] <= s[g])
                      return (
                        (d[p] = i),
                        ["element", "target"].forEach(function(n) {
                          l[n][f] = t
                            ? l[n][f] === si[e][1] ? si[e][2] : si[e][1]
                            : l[n][f];
                        }),
                        !0
                      );
                  }
                  var f = t[0],
                    p = t[1],
                    g = t[2];
                  if (!0 === a || h(a, f)) {
                    var m = n[f] === p ? -c[e] : n[f] === g ? c[e] : 0,
                      v = i[f] === p ? u[e] : i[f] === g ? -u[e] : 0;
                    if (d[p] < s[p] || d[p] + c[e] > s[g]) {
                      var w = c[e] / 2,
                        y = "center" === i[f] ? -u[e] / 2 : 0;
                      ("center" === n[f] && (r(w, y) || r(-w, -y))) || r(m, v);
                    }
                  }
                }),
              pe(t, d),
              l
            );
          }
          function pe(t, e) {
            if (((t = tt(t)), e)) {
              var n = pe(t),
                i = St(t, "position");
              return void ["left", "top"].forEach(function(o) {
                if (o in e) {
                  var r = St(t, o);
                  t.style[o] =
                    e[o] -
                    n[o] +
                    M("absolute" === i && "auto" === r ? me(t)[o] : r) +
                    "px";
                }
              });
            }
            return ge(t);
          }
          function ge(t) {
            t = tt(t);
            var e = xe(t),
              n = e.pageYOffset,
              i = e.pageXOffset;
            if (g(t)) {
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
            var a = !1;
            vt(t) || ((a = t.style.display), (t.style.display = "block"));
            var s = t.getBoundingClientRect();
            return (
              !1 !== a && (t.style.display = a),
              {
                height: s.height,
                width: s.width,
                top: s.top + n,
                left: s.left + i,
                bottom: s.bottom + n,
                right: s.right + i
              }
            );
          }
          function me(t) {
            t = tt(t);
            var e = ve(t),
              n = e === Ee(t) ? { top: 0, left: 0 } : pe(e);
            return ["top", "left"].reduce(function(i, o) {
              var r = l(o);
              return (
                (i[o] -=
                  n[o] +
                  (M(St(t, "margin" + r)) || 0) +
                  (M(St(e, "border" + r + "Width")) || 0)),
                i
              );
            }, pe(t));
          }
          function ve(t) {
            for (
              var e = tt(t).offsetParent;
              e && "static" === St(e, "position");

            )
              e = e.offsetParent;
            return e || Ee(t);
          }
          function we(t) {
            var e = l(t);
            return function(n, i) {
              if (((n = tt(n)), b(i))) {
                if (g(n)) return n["inner" + e];
                if (m(n)) {
                  var o = n.documentElement;
                  return Math.max(o.offsetHeight, o.scrollHeight);
                }
                return (
                  (i = St(n, t)),
                  (i = "auto" === i ? n["offset" + e] : M(i) || 0),
                  ye(t, n, i)
                );
              }
              St(n, t, i || 0 === i ? ye(t, n, i) + "px" : "");
            };
          }
          function ye(t, e, n) {
            return "border-box" === St(e, "boxSizing")
              ? si[t]
                  .slice(1)
                  .map(l)
                  .reduce(function(t, n) {
                    return (
                      t -
                      M(St(e, "padding" + n)) -
                      M(St(e, "border" + n + "Width"))
                    );
                  }, n)
              : n;
          }
          function xe(t) {
            return g(t) ? t : Le(t).defaultView;
          }
          function be(t, e, n, i) {
            T(si, function(o, r) {
              var a = o[0],
                s = o[1],
                l = o[2];
              e[a] === l
                ? (t[s] += n[r] * i)
                : "center" === e[a] && (t[s] += n[r] * i / 2);
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
          function Ce(t, e, n) {
            var i = (t || "").split(" "),
              o = i[0],
              r = i[1];
            return {
              x: o ? M(o) * (u(o, "%") ? e / 100 : 1) : 0,
              y: r ? M(r) * (u(r, "%") ? n / 100 : 1) : 0
            };
          }
          function Me(t) {
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
          function Le(t) {
            return tt(t).ownerDocument;
          }
          function Ee(t) {
            return Le(t).documentElement;
          }
          function De(t) {
            var e = t.x1,
              n = t.x2,
              i = t.y1,
              o = t.y2;
            return Math.abs(e - n) >= Math.abs(i - o)
              ? e - n > 0 ? "Left" : "Right"
              : i - o > 0 ? "Up" : "Down";
          }
          function _e() {
            ii && clearTimeout(ii),
              oi && clearTimeout(oi),
              ri && clearTimeout(ri),
              (ii = oi = ri = null),
              (ui = {});
          }
          function Ne(t) {
            return hi || "touch" === t.pointerType;
          }
          function Te(t) {
            var e = t.touches,
              n = t.changedTouches,
              i = (e && e[0]) || (n && n[0]) || t;
            return { x: i.pageX, y: i.pageY };
          }
          function $e() {
            gi ||
              (gi = [
                qt(xn, "click", function(t) {
                  var e = t.target,
                    n = t.defaultPrevented;
                  pi && pi.bgClose && !n && !V(e, pi.panel) && pi.hide();
                }),
                qt(yn, "keydown", function(t) {
                  27 === t.keyCode &&
                    pi &&
                    pi.escClose &&
                    (t.preventDefault(), pi.hide());
                })
              ]);
          }
          function Se() {
            gi &&
              gi.forEach(function(t) {
                return t();
              }),
              (gi = null);
          }
          function Oe(t) {
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
            if (!Oe.installed) {
              var n = t.util,
                i = n.$,
                o = n.doc,
                r = n.empty,
                a = n.html;
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
                            a(
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
          function Ie(t) {
            function e(t, e) {
              return t.sort(function(t, n) {
                return t[e] > n[e] ? 1 : n[e] > t[e] ? -1 : 0;
              });
            }
            if (!Ie.installed) {
              var n = t.util,
                i = n.$$,
                o = n.addClass,
                r = n.css,
                a = n.scrolledOver,
                s = n.toFloat,
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
                              s(
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
                        this.scrolled = a(this.$el) * this.translate;
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
          function Be(t) {
            return (
              void 0 === t && (t = 0),
              "translate(" + t + (t ? "%" : "") + ", 0)"
            );
          }
          function Ae(t) {
            return "scale3d(" + t + ", " + t + ", 1)";
          }
          function Pe(t) {
            function e(t, e, i, o, r, a) {
              var s = t.percent,
                l = t.translate,
                c = t.show,
                u = c(r);
              return {
                animation: t,
                dir: r,
                current: i,
                next: o,
                show: function(t, s, l) {
                  var c = this;
                  void 0 === s && (s = 0);
                  var h = l ? "linear" : e;
                  return (
                    (t -= Math.round(t * s)),
                    this.translate(s),
                    n(o, "itemin", {
                      percent: s,
                      duration: t,
                      ease: h,
                      dir: r
                    }),
                    i &&
                      n(i, "itemout", {
                        percent: 1 - s,
                        duration: t,
                        ease: h,
                        dir: r
                      }),
                    T.all([
                      I.start(o, u[1], t, h),
                      i && I.start(i, u[0], t, h)
                    ]).then(function() {
                      c.reset(), a();
                    }, C)
                  );
                },
                stop: function() {
                  return I.stop([o, i]);
                },
                cancel: function() {
                  I.cancel([o, i]);
                },
                reset: function() {
                  for (var t in u[0]) f([o, i], t, "");
                },
                forward: function(t) {
                  var e = this.percent();
                  I.cancel([o, i]), this.show(t, e, !0);
                },
                translate: function(t) {
                  var e = l(t, r);
                  f(o, e[1]),
                    i && f(i, e[0]),
                    n(o, "itemtranslatein", { percent: t, dir: r }),
                    i && n(i, "itemtranslateout", { percent: 1 - t, dir: r });
                },
                percent: function() {
                  return s(i, o, r);
                }
              };
            }
            function n(t, e, n) {
              B(t, d(e, !1, !1, n));
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
            function a(t) {
              return !t.children.length && t.childNodes.length;
            }
            if (!Pe.installed) {
              var s = t.util,
                l = s.$$,
                c = s.$,
                u = s.addClass,
                h = s.assign,
                d = s.createEvent,
                f = s.css,
                p = s.data,
                g = s.doc,
                m = s.endsWith,
                v = s.fastdom,
                w = s.getIndex,
                y = s.getPos,
                x = s.hasClass,
                b = s.index,
                k = s.isTouch,
                C = s.noop,
                M = s.off,
                L = s.on,
                E = s.pointerDown,
                D = s.pointerMove,
                _ = s.pointerUp,
                N = s.preventClick,
                T = s.Promise,
                $ = s.removeClass,
                S = s.toggleClass,
                O = s.toNodes,
                I = s.Transition,
                B = s.trigger,
                A = s.win,
                P = Math.abs;
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
                    return c(n, e);
                  },
                  slides: function() {
                    return O(this.list.children);
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
                      var i = y(e).x;
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
                      (!k(t) && a(t.target)) || this.start(t);
                    }
                  },
                  {
                    name: "visibilitychange",
                    el: g,
                    handler: function() {
                      g.hidden ? this.stopAutoplay() : this.startAutoplay();
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
                      u(e, this.clsActive);
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
                      u(e, this.clsActivated);
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
                      S(
                        l(
                          "[" +
                            this.attrItem +
                            '="' +
                            b(n) +
                            '"],[data-' +
                            this.attrItem +
                            '="' +
                            b(n) +
                            '"]',
                          this.$el
                        ),
                        this.clsActive,
                        m(e, "show")
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
                      $(e, this.clsActive), $(e, this.clsActivated);
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
                          a = n.translate;
                        (e = o() * i),
                          (this.percent = P(e) * -i),
                          this.stack.splice(0, this.stack.length),
                          r(),
                          a(P(e)),
                          (this.index = this.getIndex(this.index - i)),
                          (this.dragging = !0);
                      }
                      (this.unbindMove = L(g, D, this.move, {
                        capture: !0,
                        passive: !1
                      })),
                        L(A, "scroll", this.unbindMove),
                        L(g, _, this.end, !0),
                        (this.drag = this.pos + this.$el.offsetWidth * e);
                    }
                  },
                  move: function(n) {
                    var o = this,
                      r = this.pos - this.drag;
                    if (
                      !(
                        this.prevPos === this.pos ||
                        (!this.dragging && P(r) < this.threshold)
                      )
                    ) {
                      n.cancelable && n.preventDefault(), (this.dragging = !0);
                      var a = r / this.$el.offsetWidth;
                      if (this.percent !== a) {
                        var s = this.getIndex(this.index - i(this.percent)),
                          l = this.getIndex(this.index - i(a)),
                          c = this.slides[l],
                          u = a < 0 ? 1 : -1,
                          h = w(a < 0 ? "next" : "previous", this.slides, l),
                          d = this.slides[h];
                        this.slides.forEach(function(t, e) {
                          return S(t, o.clsActive, e === l || e === h);
                        }),
                          this._animation && this._animation.reset(),
                          l !== s &&
                            (B(this.slides[s], "itemhide", [this]),
                            B(c, "itemshow", [this])),
                          (this._animation = new e(
                            this.animation,
                            this.easing,
                            c,
                            d,
                            u,
                            C
                          )),
                          this._animation.translate(P(a % 1)),
                          (this.percent = a),
                          t.update(null, c),
                          t.update(null, d);
                      }
                    }
                  },
                  end: function() {
                    if (
                      (M(A, "scroll", this.unbindMove),
                      this.unbindMove(),
                      M(g, _, this.end, !0),
                      this.dragging)
                    ) {
                      var t = this.percent;
                      (this.percent = P(this.percent) % 1),
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
                        N();
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
                        a = x(this.slides, "uk-active") && this.slides[i],
                        s = this.slides[r];
                      if (a === s)
                        return void this.stack[e ? "shift" : "pop"]();
                      a && B(a, "beforeitemhide", [this]),
                        B(s, "beforeitemshow", [this]),
                        (this.index = r);
                      var l = function() {
                        a && B(a, "itemhidden", [n]),
                          B(s, "itemshown", [n]),
                          v.mutate(function() {
                            n.stack.shift(),
                              n.stack.length
                                ? n.show(n.stack.shift(), !0)
                                : (n._animation = null);
                          });
                      };
                      (a || this.initialAnimation) &&
                        this._show(
                          a
                            ? this.animation
                            : this.Animations[this.initialAnimation],
                          e
                            ? "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
                            : this.easing,
                          a,
                          s,
                          o(t, i),
                          this.stack.length > 1,
                          l
                        ),
                        a && B(a, "itemhide", [this]),
                        B(s, "itemshow", [this]),
                        a || this.initialAnimation || l(),
                        a && v.flush();
                    }
                  },
                  _show: function(t, n, i, o, r, a, s) {
                    (this._animation = new e(t, n, i, o, r, s)),
                      this._animation.show(
                        i === o ? 300 : a ? 150 : this.duration,
                        this.percent,
                        a
                      );
                  },
                  getIndex: function(t) {
                    return (
                      void 0 === t && (t = this.index),
                      w(t, this.slides, this.index)
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
          function je(t) {
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
            if (!je.installed) {
              t.use(Pe);
              var n = t.mixin,
                i = t.util,
                o = i.$,
                r = i.$$,
                a = i.addClass,
                s = i.ajax,
                l = i.append,
                c = i.assign,
                u = i.attr,
                h = i.css,
                d = i.doc,
                f = i.docEl,
                p = i.data,
                g = i.getImage,
                m = i.html,
                v = i.index,
                w = i.on,
                y = i.pointerDown,
                x = i.pointerMove,
                b = i.removeClass,
                k = i.Transition,
                C = i.trigger;
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
                        c({}, this.$props, {
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
                    Animations: Xi(t),
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
                    { name: x + " " + y + " keydown", handler: "showControls" },
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
                        a(f, this.clsPage);
                      }
                    },
                    { name: "shown", self: !0, handler: "showControls" },
                    { name: "hide", self: !0, handler: "hideControls" },
                    {
                      name: "hidden",
                      self: !0,
                      handler: function() {
                        b(f, this.clsPage);
                      }
                    },
                    {
                      name: "keyup",
                      el: function() {
                        return d;
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
                          m(this.caption, o);
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
                          a = n.source,
                          l = n.type;
                        if ((this.setItem(n, "<span uk-spinner></span>"), a))
                          if (
                            "image" === l ||
                            a.match(/\.(jp(e)?g|png|gif|svg)$/i)
                          )
                            g(a).then(
                              function(t) {
                                return r.setItem(
                                  n,
                                  '<img width="' +
                                    t.width +
                                    '" height="' +
                                    t.height +
                                    '" src="' +
                                    a +
                                    '">'
                                );
                              },
                              function() {
                                return r.setError(n);
                              }
                            );
                          else if (
                            "video" === l ||
                            a.match(/\.(mp4|webm|ogv)$/i)
                          ) {
                            var c = o(
                              "<video controls playsinline" +
                                (n.poster ? ' poster="' + n.poster + '"' : "") +
                                ' uk-video="autoplay: ' +
                                this.videoAutoplay +
                                '"></video>'
                            );
                            u(c, "src", a),
                              w(c, "error", function() {
                                return r.setError(n);
                              }),
                              w(c, "loadedmetadata", function() {
                                u(c, {
                                  width: c.videoWidth,
                                  height: c.videoHeight
                                }),
                                  r.setItem(n, c);
                              });
                          } else if ("iframe" === l)
                            this.setItem(
                              n,
                              '<iframe class="uk-lightbox-iframe" src="' +
                                a +
                                '" frameborder="0" allowfullscreen></iframe>'
                            );
                          else if (
                            (i =
                              a.match(
                                /\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/
                              ) || a.match(/youtu\.be\/(.*)/))
                          ) {
                            var h = i[1],
                              d = function(t, i) {
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
                            g(
                              "//img.youtube.com/vi/" + h + "/maxresdefault.jpg"
                            ).then(function(t) {
                              var e = t.width,
                                n = t.height;
                              120 === e && 90 === n
                                ? g(
                                    "//img.youtube.com/vi/" + h + "/0.jpg"
                                  ).then(function(t) {
                                    var e = t.width,
                                      n = t.height;
                                    return d(e, n);
                                  }, d)
                                : d(e, n);
                            }, d);
                          } else
                            (i = a.match(
                              /(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/
                            )) &&
                              s(
                                "//vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                                  encodeURI(a),
                                { responseType: "json" }
                              ).then(function(t) {
                                var o = t.response,
                                  a = o.height,
                                  s = o.width;
                                return r.setItem(
                                  n,
                                  e(
                                    "//player.vimeo.com/video/" + i[2],
                                    s,
                                    a,
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
                        b(this.slides, this.clsActive),
                        k.stop(this.slides),
                        delete this.index,
                        delete this.percent,
                        delete this._animation;
                    },
                    loadItem: function(t) {
                      void 0 === t && (t = this.index);
                      var e = this.getItem(t);
                      e.content || C(this.$el, "itemload", [e]);
                    },
                    getItem: function(t) {
                      return (
                        void 0 === t && (t = this.index), this.items[t] || {}
                      );
                    },
                    setItem: function(e, n) {
                      c(e, { content: n });
                      var i = m(this.slides[this.items.indexOf(e)], n);
                      C(this.$el, "itemloaded", [this, i]), t.update(null, i);
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
                        u(
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
                        a(this.$el, "uk-active uk-transition-active");
                    },
                    hideControls: function() {
                      b(this.$el, "uk-active uk-transition-active");
                    }
                  }
                });
            }
          }
          function He(t) {
            if (!He.installed) {
              var e = t.util,
                n = e.append,
                i = e.closest,
                o = e.css,
                r = e.each,
                a = e.pointerEnter,
                s = e.pointerLeave,
                l = e.remove,
                c = e.toFloat,
                u = e.Transition,
                h = e.trigger,
                d = {};
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
                  d[this.pos] ||
                    (d[this.pos] = n(
                      t.container,
                      '<div class="uk-notification uk-notification-' +
                        this.pos +
                        '"></div>'
                    ));
                  var e = o(d[this.pos], "display", "block");
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
                    e = c(o(this.$el, "marginBottom"));
                  u
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
                events: ((f = {
                  click: function(t) {
                    i(t.target, 'a[href="#"]') && t.preventDefault(),
                      this.close();
                  }
                }),
                (f[a] = function() {
                  this.timer && clearTimeout(this.timer);
                }),
                (f[s] = function() {
                  this.timeout &&
                    (this.timer = setTimeout(this.close, this.timeout));
                }),
                f),
                methods: {
                  close: function(t) {
                    var e = this,
                      n = function() {
                        h(e.$el, "close", [e]),
                          l(e.$el),
                          d[e.pos].children.length ||
                            o(d[e.pos], "display", "none");
                      };
                    this.timer && clearTimeout(this.timer),
                      t
                        ? n()
                        : u
                            .start(this.$el, {
                              opacity: 0,
                              marginTop: -1 * this.$el.offsetHeight,
                              marginBottom: 0
                            })
                            .then(n);
                  }
                }
              });
              var f;
              t.notification.closeAll = function(e, n) {
                r(t.instances, function(t) {
                  "notification" !== t.$options.name ||
                    (e && e !== t.group) ||
                    t.close(n);
                });
              };
            }
          }
          function Fe(t) {
            function e(t, e) {
              return s(t * (1 - (e - e * t)));
            }
            function n(t, e) {
              return l(l(t, "color", e), "color")
                .split(/[(),]/g)
                .slice(1, -1)
                .concat(1)
                .slice(0, 4)
                .map(function(t) {
                  return m(t);
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
                a = n[2];
              return (f(o)
                ? o + Math.abs(o - r) * a * (o < r ? 1 : -1)
                : +r
              ).toFixed(2);
            }
            if (!Fe.installed) {
              var r = t.mixin,
                a = t.util,
                s = a.clamp,
                l = a.css,
                c = a.Dimensions,
                u = a.each,
                h = a.getImage,
                d = a.includes,
                f = a.isNumber,
                p = a.isUndefined,
                g = a.scrolledOver,
                m = a.toFloat,
                v = a.query,
                w = a.win,
                y = [
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
                props: y.reduce(
                  function(t, e) {
                    return (t[e] = "list"), t;
                  },
                  { media: "media" }
                ),
                defaults: y.reduce(
                  function(t, e) {
                    return (t[e] = void 0), t;
                  },
                  { media: !1 }
                ),
                computed: {
                  props: function(t, e) {
                    var i = this;
                    return y.reduce(function(o, r) {
                      if (p(t[r])) return o;
                      var a,
                        s,
                        c,
                        u = r.match(/color/i),
                        h = u || "opacity" === r,
                        f = t[r].slice(0);
                      h && l(e, r, ""),
                        f.length < 2 &&
                          f.unshift(("scale" === r ? 1 : h ? l(e, r) : 0) || 0);
                      var g = d(f.join(""), "%") ? "%" : "px";
                      if (u) {
                        var v = e.style.color;
                        (f = f.map(function(t) {
                          return n(e, t);
                        })),
                          (e.style.color = v);
                      } else f = f.map(m);
                      if (r.match(/^bg/))
                        if (
                          (l(e, "background-position-" + r[2], ""),
                          (s = l(e, "backgroundPosition").split(" ")[
                            "x" === r[2] ? 0 : 1
                          ]),
                          i.covers)
                        ) {
                          var w = Math.min.apply(Math, f),
                            y = Math.max.apply(Math, f),
                            x = f.indexOf(w) < f.indexOf(y);
                          (c = y - w),
                            (f = f.map(function(t) {
                              return t - (x ? w : y);
                            })),
                            (a = (x ? -c : 0) + "px");
                        } else a = s;
                      return (
                        (o[r] = {
                          steps: f,
                          unit: g,
                          pos: a,
                          bgPos: s,
                          diff: c
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
                          !this.media || w.matchMedia(this.media).matches),
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
                          i = c.cover(e, n);
                        this.bgProps.forEach(function(o) {
                          var r = t.props[o],
                            a = r.diff,
                            s = r.bgPos,
                            l = r.steps,
                            u = "bgy" === o ? "height" : "width",
                            h = i[u] - n[u];
                          s.match(/%$|0px/) &&
                            (h < a
                              ? (n[u] = i[u] + a - h)
                              : h > a &&
                                (s = parseFloat(s)) &&
                                (t.props[o].steps = l.map(function(t) {
                                  return t - (h - a) / (100 / s);
                                })),
                            (i = c.cover(e, n)));
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
                    u(this.getCss(0), function(e, n) {
                      return l(t.$el, n, "");
                    });
                  },
                  getCss: function(t) {
                    var e = !1,
                      n = this.props;
                    return Object.keys(n).reduce(
                      function(r, a) {
                        var s = n[a],
                          l = s.steps,
                          c = s.unit,
                          u = s.pos,
                          h = o(l, t);
                        switch (a) {
                          case "x":
                          case "y":
                            if (e) break;
                            var d = ["x", "y"].map(function(e) {
                                return a === e
                                  ? h + c
                                  : n[e] ? o(n[e].steps, t) + n[e].unit : 0;
                              }),
                              f = d[0],
                              p = d[1];
                            e = r.transform +=
                              " translate3d(" + f + ", " + p + ", 0)";
                            break;
                          case "rotate":
                            r.transform += " rotate(" + h + "deg)";
                            break;
                          case "scale":
                            r.transform += " scale(" + h + ")";
                            break;
                          case "bgy":
                          case "bgx":
                            r["background-position-" + a[2]] =
                              "calc(" + u + " + " + (h + c) + ")";
                            break;
                          case "color":
                          case "backgroundColor":
                          case "borderColor":
                            var g = i(l, t),
                              v = g[0],
                              w = g[1],
                              y = g[2];
                            r[a] =
                              "rgba(" +
                              v
                                .map(function(t, e) {
                                  return (
                                    (t += y * (w[e] - t)),
                                    3 === e ? m(t) : parseInt(t, 10)
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
                            r.filter += " " + a + "(" + h + "%)";
                            break;
                          default:
                            r[a] = h;
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
                          g(this.target) / (this.viewport || 1),
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
          function Ye(t) {
            function e(t) {
              return l(t, "in");
            }
            function n(t, n, i) {
              return (i /= 2), e(t) ? (n < 0 ? 1 - i : i) : n < 0 ? i : 1 - i;
            }
            if (!Ye.installed) {
              t.use(Fe), t.use(Pe);
              var i = t.mixin,
                o = t.util,
                r = o.closest,
                a = o.css,
                s = o.fastdom,
                l = o.endsWith,
                c = o.height,
                u = o.noop,
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
                  s.mutate(function() {
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
                    c(this.list, Math.floor(this.height));
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
                        a(this.$el, this.getCss(0.5));
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
                          s = o.duration,
                          l = o.ease,
                          c = o.dir;
                        h.cancel(this.$el),
                          a(this.$el, this.getCss(n(i, c, r))),
                          h
                            .start(
                              this.$el,
                              this.getCss(e(i) ? 0.5 : c > 0 ? 1 : 0),
                              s,
                              l
                            )
                            .catch(u);
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
                          a(this.$el, this.getCss(n(e, r, o)));
                      }
                    }
                  ]
                });
            }
          }
          function ze(t) {
            function e(n) {
              return n && (t.getComponent(n, "sortable") || e(n.parentNode));
            }
            function n(t, e) {
              return t.parentNode === e.parentNode && y(t) > y(e);
            }
            if (!ze.installed) {
              var i = t.mixin,
                o = t.util,
                r = o.addClass,
                a = o.after,
                s = o.assign,
                l = o.append,
                c = o.attr,
                u = o.before,
                h = o.closest,
                d = o.css,
                f = o.doc,
                p = o.docEl,
                g = o.height,
                m = o.fastdom,
                v = o.getPos,
                w = o.includes,
                y = o.index,
                x = o.isInput,
                b = o.noop,
                k = o.offset,
                C = o.off,
                M = o.on,
                L = o.pointerDown,
                E = o.pointerMove,
                D = o.pointerUp,
                _ = o.position,
                N = o.preventClick,
                T = o.Promise,
                $ = o.remove,
                S = o.removeClass,
                O = o.toggleClass,
                I = o.toNodes,
                B = o.Transition,
                A = o.trigger,
                P = o.win,
                j = o.within;
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
                      t.scrollY = P.scrollY;
                      var i = v(e),
                        o = i.x,
                        r = i.y;
                      (t.pos = { x: o, y: r }), n(e);
                    };
                  });
                },
                events: ((H = {}), (H[L] = "init"), H),
                update: {
                  write: function() {
                    if (
                      (this.clsEmpty &&
                        O(this.$el, this.clsEmpty, !this.$el.children.length),
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
                        : n < g(f) &&
                          n > g(P) + this.scrollY &&
                          (t = this.scrollY + 5),
                        t &&
                          setTimeout(function() {
                            return P.scrollTo(P.scrollX, t);
                          }, 5);
                    }
                  }
                },
                methods: {
                  init: function(t) {
                    var e = t.target,
                      n = t.button,
                      i = t.defaultPrevented,
                      o = I(this.$el.children).filter(function(t) {
                        return j(e, t);
                      })[0];
                    !o ||
                      x(t.target) ||
                      (this.handle && !j(e, this.handle)) ||
                      0 !== n ||
                      j(e, "." + this.clsNoDrag) ||
                      i ||
                      (t.preventDefault(),
                      (this.touched = [this]),
                      (this.placeholder = o),
                      (this.origin = s({ target: e, index: y(o) }, this.pos)),
                      M(p, E, this.move),
                      M(p, D, this.end),
                      M(P, "scroll", this.scroll),
                      this.threshold || this.start(t));
                  },
                  start: function(e) {
                    (this.drag = l(
                      t.container,
                      this.placeholder.outerHTML
                        .replace(/^<li/i, "<div")
                        .replace(/li>$/i, "div>")
                    )),
                      d(
                        this.drag,
                        s(
                          {
                            boxSizing: "border-box",
                            width: this.placeholder.offsetWidth,
                            height: this.placeholder.offsetHeight
                          },
                          d(this.placeholder, [
                            "paddingLeft",
                            "paddingRight",
                            "paddingTop",
                            "paddingBottom"
                          ])
                        )
                      ),
                      c(this.drag, "uk-no-boot", ""),
                      r(this.drag, this.clsDrag + " " + this.clsCustom),
                      g(
                        this.drag.firstElementChild,
                        g(this.placeholder.firstElementChild)
                      );
                    var n = k(this.placeholder),
                      i = n.left,
                      o = n.top;
                    s(this.origin, {
                      left: i - this.pos.x,
                      top: o - this.pos.y
                    }),
                      r(this.placeholder, this.clsPlaceholder),
                      r(this.$el.children, this.clsItem),
                      r(p, this.clsDragState),
                      A(this.$el, "start", [this, this.placeholder, this.drag]),
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
                          : f.elementFromPoint(
                              this.pos.x - f.body.scrollLeft,
                              this.pos.y - f.body.scrollTop
                            ),
                      i = e(n),
                      o = e(this.placeholder),
                      r = i !== o;
                    if (
                      i &&
                      !j(n, this.placeholder) &&
                      (!r || (i.group && i.group === o.group))
                    ) {
                      if (
                        ((n =
                          (i.$el === n.parentNode && n) ||
                          I(i.$el.children).filter(function(t) {
                            return j(n, t);
                          })[0]),
                        r)
                      )
                        o.remove(this.placeholder);
                      else if (!n) return;
                      i.insert(this.placeholder, n),
                        w(this.touched, i) || this.touched.push(i);
                    }
                  },
                  scroll: function() {
                    var t = P.scrollY;
                    t !== this.scrollY &&
                      ((this.pos.y += t - this.scrollY),
                      (this.scrollY = t),
                      this.$emit());
                  },
                  end: function(t) {
                    if (
                      (C(p, E, this.move),
                      C(p, D, this.end),
                      C(P, "scroll", this.scroll),
                      !this.drag)
                    )
                      return void (
                        "mouseup" !== t.type &&
                        j(t.target, "a[href]") &&
                        (location.href = h(t.target, "a[href]").href)
                      );
                    N();
                    var n = e(this.placeholder);
                    this === n
                      ? this.origin.index !== y(this.placeholder) &&
                        A(this.$el, "moved", [this, this.placeholder])
                      : (A(n.$el, "added", [n, this.placeholder]),
                        A(this.$el, "removed", [this, this.placeholder])),
                      A(this.$el, "stop", [this]),
                      $(this.drag),
                      (this.drag = null);
                    var i = this.touched
                      .map(function(t) {
                        return t.clsPlaceholder + " " + t.clsItem;
                      })
                      .join(" ");
                    this.touched.forEach(function(t) {
                      return S(t.$el.children, i);
                    }),
                      S(p, this.clsDragState);
                  },
                  insert: function(t, e) {
                    var i = this;
                    r(this.$el.children, this.clsItem);
                    var o = function() {
                      e
                        ? !j(t, i.$el) || n(t, e) ? u(e, t) : a(e, t)
                        : l(i.$el, t);
                    };
                    this.animation ? this.animate(o) : o();
                  },
                  remove: function(t) {
                    j(t, this.$el) &&
                      (this.animation
                        ? this.animate(function() {
                            return $(t);
                          })
                        : $(t));
                  },
                  animate: function(t) {
                    var e = this,
                      n = [],
                      i = I(this.$el.children),
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
                        s(
                          {
                            position: "absolute",
                            pointerEvents: "none",
                            width: t.offsetWidth,
                            height: t.offsetHeight
                          },
                          _(t)
                        )
                      );
                    }),
                      t(),
                      i.forEach(B.cancel),
                      d(this.$el.children, o),
                      this.$update("update", !0),
                      m.flush(),
                      d(this.$el, "minHeight", g(this.$el));
                    var r = i.map(function(t) {
                      return _(t);
                    });
                    T.all(
                      i.map(function(t, i) {
                        return B.start(d(t, n[i]), r[i], e.animation);
                      })
                    ).then(function() {
                      d(e.$el, "minHeight", ""),
                        d(i, o),
                        e.$update("update", !0),
                        m.flush();
                    }, b);
                  }
                }
              });
              var H;
            }
          }
          function Re(t) {
            if (!Re.installed) {
              var e = t.util,
                n = t.mixin,
                i = e.append,
                o = e.attr,
                r = e.doc,
                a = e.fastdom,
                s = e.flipPosition,
                l = e.includes,
                c = e.isTouch,
                u = e.isVisible,
                h = e.matches,
                d = e.on,
                f = e.pointerDown,
                p = e.pointerEnter,
                g = e.pointerLeave,
                m = e.remove,
                v = e.within,
                w = [];
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
                  a.mutate(function() {
                    return o(t.$el, { title: null, "aria-expanded": !1 });
                  });
                },
                disconnected: function() {
                  this.hide();
                },
                methods: {
                  show: function() {
                    var t = this;
                    l(w, this) ||
                      (w.forEach(function(t) {
                        return t.hide();
                      }),
                      w.push(this),
                      (this._unbind = d(r, "click", function(e) {
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
                          ? s(this.dir) + "-" + this.align
                          : this.align + "-" + s(this.dir)),
                      (this.showTimer = setTimeout(function() {
                        t.toggleElement(t.tooltip, !0),
                          (t.hideTimer = setInterval(function() {
                            u(t.$el) || t.hide();
                          }, 150));
                      }, this.delay)));
                  },
                  hide: function() {
                    var t = w.indexOf(this);
                    !~t ||
                      (h(this.$el, "input") && this.$el === r.activeElement) ||
                      (w.splice(t, 1),
                      clearTimeout(this.showTimer),
                      clearInterval(this.hideTimer),
                      o(this.$el, "aria-expanded", !1),
                      this.toggleElement(this.tooltip, !1),
                      this.tooltip && m(this.tooltip),
                      (this.tooltip = !1),
                      this._unbind());
                  }
                },
                events: ((y = { blur: "hide" }),
                (y["focus " + p + " " + f] = function(t) {
                  (t.type === f && c(t)) || this.show();
                }),
                (y[g] = function(t) {
                  c(t) || this.hide();
                }),
                y)
              });
              var y;
            }
          }
          function We(t) {
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
            if (!We.installed) {
              var o = t.util,
                r = o.addClass,
                a = o.ajax,
                s = o.matches,
                l = o.noop,
                c = o.on,
                u = o.removeClass,
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
                    s(t.target, 'input[type="file"]') &&
                      (t.preventDefault(),
                      t.target.files && this.upload(t.target.files),
                      (t.target.value = ""));
                  },
                  drop: function(t) {
                    i(t);
                    var e = t.dataTransfer;
                    e &&
                      e.files &&
                      (u(this.$el, this.clsDragover), this.upload(e.files));
                  },
                  dragenter: function(t) {
                    i(t);
                  },
                  dragover: function(t) {
                    i(t), r(this.$el, this.clsDragover);
                  },
                  dragleave: function(t) {
                    i(t), u(this.$el, this.clsDragover);
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
                        s = function(t) {
                          var e = new FormData();
                          t.forEach(function(t) {
                            return e.append(i.name, t);
                          });
                          for (var n in i.params) e.append(n, i.params[n]);
                          a(i.url, {
                            data: e,
                            method: i.type,
                            beforeSend: function(t) {
                              var e = t.xhr;
                              e.upload && c(e.upload, "progress", i.progress),
                                [
                                  "loadStart",
                                  "load",
                                  "loadEnd",
                                  "abort"
                                ].forEach(function(t) {
                                  return c(e, t.toLowerCase(), i[t]);
                                }),
                                i.beforeSend(t);
                            }
                          }).then(
                            function(t) {
                              i.complete(t),
                                r.length ? s(r.shift()) : i.completeAll(t);
                            },
                            function(t) {
                              return i.error(t.message);
                            }
                          );
                        };
                      s(r.shift());
                    }
                  }
                }
              });
            }
          }
          var Ze = 2,
            Ve = "setImmediate" in window ? e : setTimeout;
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
                for (var a = 0; a < e.length; a += 1)
                  t.resolve(e[a]).then(
                    (function(t) {
                      return function(i) {
                        (r[t] = i), (o += 1) === e.length && n(r);
                      };
                    })(a),
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
            if (e.state === Ze) {
              if (t === e) throw new TypeError("Promise settled with itself.");
              var n = !1;
              try {
                var i = t && t.then;
                if (null !== t && f(t) && d(i))
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
              if (e.state === Ze) {
                if (t === e)
                  throw new TypeError("Promise settled with itself.");
                (e.state = 1), (e.value = t), e.notify();
              }
            }),
            (Ue.notify = function() {
              var t = this;
              Ve(function() {
                if (t.state !== Ze)
                  for (; t.deferred.length; ) {
                    var e = t.deferred.shift(),
                      n = e[0],
                      i = e[1],
                      o = e[2],
                      r = e[3];
                    try {
                      0 === t.state
                        ? o(d(n) ? n.call(void 0, t.value) : t.value)
                        : 1 === t.state &&
                          (d(i) ? o(i.call(void 0, t.value)) : r(t.value));
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
          var qe,
            Je,
            Ge,
            Ke = Object.prototype.hasOwnProperty,
            Xe = "Promise" in window ? window.Promise : t,
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
            an = function(t) {
              return ~this.indexOf(t);
            },
            sn = nn.includes || an,
            ln = Array.prototype.includes || an,
            cn = Array.isArray,
            un = {},
            hn =
              Object.assign ||
              function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0; )
                  e[n] = arguments[n + 1];
                t = Object(t);
                for (var o = 0; o < e.length; o++) {
                  var r = e[o];
                  if (null !== r) for (var a in r) i(r, a) && (t[a] = r[a]);
                }
                return t;
              },
            dn = Array.prototype,
            fn = /(^|,)\s*[!>+~]/,
            pn = /([!>+~])(?=\s+[!>+~]|\s*$)/g,
            gn = Element.prototype,
            mn = gn.matches || gn.msMatchesSelector,
            vn =
              gn.closest ||
              function(t) {
                var e = this;
                do {
                  if (q(e, t)) return e;
                  e = e.parentNode;
                } while (e && 1 === e.nodeType);
              },
            wn = window,
            yn = document,
            xn = yn.documentElement,
            bn = "rtl" === nt(xn, "dir"),
            kn = "transitioncanceled",
            Cn = {
              start: ct,
              stop: function(t) {
                return Kt(t, Jn), Xe.resolve();
              },
              cancel: function(t) {
                Kt(t, kn);
              },
              inProgress: function(t) {
                return zt(t, "uk-transition");
              }
            },
            Mn = "animationcancel",
            Ln = "uk-animation-",
            En = "uk-cancel-animation",
            Dn = new RegExp(Ln + "(enter|leave)"),
            _n = {
              in: function(t, e, n, i) {
                return ut(t, e, n, i, !1);
              },
              out: function(t, e, n, i) {
                return ut(t, e, n, i, !0);
              },
              inProgress: function(t) {
                return Dn.test(nt(t, "class"));
              },
              cancel: function(t) {
                Kt(t, Mn);
              }
            },
            Nn = {
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
            Tn = {
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
                  T(t, function(i, o) {
                    return (t = t[o] > e[o] ? n.ratio(t, o, e[o]) : t);
                  }),
                  t
                );
              },
              cover: function(t, e) {
                var n = this;
                return (
                  (t = this.contain(t, e)),
                  T(t, function(i, o) {
                    return (t = t[o] < e[o] ? n.ratio(t, o, e[o]) : t);
                  }),
                  t
                );
              }
            },
            $n = "input,select,textarea,button",
            Sn = /^\s*<(\w+|!)[^>]*>/,
            On = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            In = {
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
            Bn = {},
            An = {},
            Pn = ["webkit", "moz", "ms"],
            jn = yn.createElement("div").style;
          !(function() {
            var t = yn.createElement("_").classList;
            t &&
              (t.add("a", "b"),
              t.toggle("c", !1),
              (Je = t.contains("b")),
              (Ge = !t.contains("c")),
              (qe = !0)),
              (t = null);
          })();
          var Hn = wn.MutationObserver || wn.WebKitMutationObserver,
            Fn =
              wn.requestAnimationFrame ||
              function(t) {
                return setTimeout(t, 1e3 / 60);
              },
            Yn = "ontouchstart" in wn,
            zn = wn.PointerEvent,
            Rn =
              "ontouchstart" in wn ||
              (wn.DocumentTouch && yn instanceof DocumentTouch) ||
              (navigator.msPointerEnabled && navigator.msMaxTouchPoints) ||
              (navigator.pointerEnabled && navigator.maxTouchPoints),
            Wn = Rn
              ? "mousedown " + (Yn ? "touchstart" : "pointerdown")
              : "mousedown",
            Zn = Rn
              ? "mousemove " + (Yn ? "touchmove" : "pointermove")
              : "mousemove",
            Vn = Rn ? "mouseup " + (Yn ? "touchend" : "pointerup") : "mouseup",
            Un = Rn && zn ? "pointerenter" : "mouseenter",
            qn = Rn && zn ? "pointerleave" : "mouseleave",
            Jn = Ut("transition", "transition-end"),
            Gn = Ut("animation", "animation-start"),
            Kn = Ut("animation", "animation-end"),
            Xn = {
              reads: [],
              writes: [],
              measure: function(t) {
                return this.reads.push(t), re(), t;
              },
              mutate: function(t) {
                return this.writes.push(t), re(), t;
              },
              clear: function(t) {
                return se(this.reads, t) || se(this.writes, t);
              },
              flush: function() {
                ae(this.reads),
                  ae(this.writes.splice(0, this.writes.length)),
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
              this.unbind = qt(yn, "mousemove", function(n) {
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
                    t + (ce(i, e[0]) < ce(n, e[0]) && ce(i, e[1]) > ce(n, e[1]))
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
              (t = t && !cn(t) ? [t] : t),
              e ? (t ? t.concat(e) : cn(e) ? e : [e]) : t
            );
          }),
            (Qn.update = function(t, e) {
              return Qn.args(t, d(e) ? { read: e } : e);
            }),
            (Qn.props = function(t, e) {
              return (
                cn(e) &&
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
              return b(e) ? t : e;
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
                ? (this.ready = new Xe(function(o) {
                    Gt(t.el, "load", function() {
                      if (n) {
                        var i = function() {
                          return he(t.el, { event: "listening", id: t.id });
                        };
                        (e = setInterval(i, 100)), i();
                      }
                    }),
                      de(function(e) {
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
                : Xe.resolve();
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
            ai,
            si = {
              width: ["x", "left", "right"],
              height: ["y", "top", "bottom"]
            },
            li = we("height"),
            ci = we("width"),
            ui = {};
          lt(function() {
            qt(
              yn,
              "click",
              function() {
                return (ai = !0);
              },
              !0
            ),
              qt(yn, Wn, function(t) {
                var e = t.target,
                  n = Te(t),
                  i = n.x,
                  o = n.y,
                  r = Date.now();
                (ui.el = "tagName" in e ? e : e.parentNode),
                  ii && clearTimeout(ii),
                  (ui.x1 = i),
                  (ui.y1 = o),
                  ui.last && r - ui.last <= 250 && (ui = {}),
                  (ui.last = r),
                  (ai = t.button > 0);
              }),
              qt(yn, Zn, function(t) {
                var e = Te(t),
                  n = e.x,
                  i = e.y;
                (ui.x2 = n), (ui.y2 = i);
              }),
              qt(yn, Vn, function(t) {
                var e = t.target;
                (ui.x2 && Math.abs(ui.x1 - ui.x2) > 30) ||
                (ui.y2 && Math.abs(ui.y1 - ui.y2) > 30)
                  ? (oi = setTimeout(function() {
                      ui.el &&
                        (Kt(ui.el, "swipe"), Kt(ui.el, "swipe" + De(ui))),
                        (ui = {});
                    }))
                  : "last" in ui
                    ? ((ri = setTimeout(function() {
                        return ui.el && Kt(ui.el, "tap");
                      })),
                      ui.el &&
                        V(e, ui.el) &&
                        (ii = setTimeout(function() {
                          (ii = null),
                            ui.el && !ai && Kt(ui.el, "click"),
                            (ui = {});
                        }, 350)))
                    : (ui = {});
              }),
              qt(yn, "touchcancel", _e),
              qt(wn, "scroll", _e);
          });
          var hi = !1;
          qt(
            yn,
            "touchstart",
            function() {
              return (hi = !0);
            },
            !0
          ),
            qt(yn, "click", function() {
              hi = !1;
            }),
            qt(
              yn,
              "touchcancel",
              function() {
                return (hi = !1);
              },
              !0
            );
          var di = Object.freeze({
              bind: n,
              hasOwn: i,
              Promise: Xe,
              classify: o,
              hyphenate: r,
              camelize: a,
              ucfirst: l,
              startsWith: c,
              endsWith: u,
              includes: h,
              isArray: cn,
              isFunction: d,
              isObject: f,
              isPlainObject: p,
              isWindow: g,
              isDocument: m,
              isBoolean: v,
              isString: w,
              isNumber: y,
              isNumeric: x,
              isUndefined: b,
              toBoolean: k,
              toNumber: C,
              toFloat: M,
              toList: L,
              toMedia: E,
              coerce: D,
              toMs: _,
              swap: N,
              assign: hn,
              each: T,
              clamp: S,
              noop: O,
              intersectRect: I,
              pointInRect: B,
              ajax: A,
              $: P,
              $$: j,
              query: F,
              queryAll: Y,
              filter: Z,
              within: V,
              matches: q,
              closest: J,
              parents: G,
              isJQuery: K,
              toNode: tt,
              toNodes: et,
              attr: nt,
              hasAttr: it,
              removeAttr: ot,
              filterAttr: rt,
              data: at,
              win: wn,
              doc: yn,
              docEl: xn,
              isRtl: bn,
              isReady: st,
              ready: lt,
              transition: ct,
              Transition: Cn,
              animate: ut,
              Animation: _n,
              isInView: ht,
              scrolledOver: dt,
              getIndex: pt,
              isVoidElement: gt,
              Dimensions: Tn,
              preventClick: mt,
              isVisible: vt,
              selInput: $n,
              isInput: wt,
              empty: yt,
              html: xt,
              prepend: bt,
              append: kt,
              before: Ct,
              after: Mt,
              remove: Et,
              wrapAll: Dt,
              wrapInner: _t,
              unwrap: Nt,
              fragment: Tt,
              index: $t,
              css: St,
              getStyles: Ot,
              getStyle: It,
              getCssVar: Bt,
              addClass: jt,
              removeClass: Ht,
              removeClasses: Ft,
              replaceClass: Yt,
              hasClass: zt,
              toggleClass: Rt,
              Observer: Hn,
              requestAnimationFrame: Fn,
              hasTouch: Rn,
              pointerDown: Wn,
              pointerMove: Zn,
              pointerUp: Vn,
              pointerEnter: Un,
              pointerLeave: qn,
              transitionend: Jn,
              animationstart: Gn,
              animationend: Kn,
              getImage: Vt,
              on: qt,
              off: Jt,
              once: Gt,
              trigger: Kt,
              createEvent: Xt,
              toEventTargets: oe,
              fastdom: Xn,
              MouseTracker: le,
              mergeOptions: ue,
              Player: ni,
              positionAt: fe,
              offset: pe,
              position: me,
              height: li,
              width: ci,
              flipPosition: Me,
              isTouch: Ne,
              getPos: Te
            }),
            fi = function(t) {
              this._init(t);
            };
          (fi.util = di),
            (fi.data = "__uikit__"),
            (fi.prefix = "uk-"),
            (fi.options = {}),
            (fi.instances = {}),
            (fi.elements = []),
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
                  (n = (w(n) ? t.components[n] : n) || this),
                    (e = ue({}, e)),
                    (e.mixins = n.options.mixins),
                    delete n.options.mixins,
                    (n.options = ue(e, n.options));
                }),
                (t.extend = function(t) {
                  t = t || {};
                  var n = this,
                    i = t.name || n.options.name,
                    o = e(i || "UIkitComponent");
                  return (
                    (o.prototype = Object.create(n.prototype)),
                    (o.prototype.constructor = o),
                    (o.options = ue(n.options, t)),
                    (o.super = n),
                    (o.extend = n.extend),
                    o
                  );
                }),
                (t.update = function(e, o, a) {
                  if ((void 0 === a && (a = !1), (e = Xt(e || "update")), !o))
                    return void i(t.instances, e);
                  if (((o = tt(o)), a))
                    do {
                      i(o[r], e), (o = o.parentNode);
                    } while (o);
                  else
                    n(o, function(t) {
                      return i(t[r], e);
                    });
                });
              var a;
              Object.defineProperty(t, "container", {
                get: function() {
                  return a || yn.body;
                },
                set: function(t) {
                  a = t;
                }
              });
            })(fi),
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
                  t = Xt(t || "update");
                  var n = t.type,
                    i = t.detail;
                  "update" === n && i && i.mutation && (this._computeds = {});
                  var o = this.$options.update;
                  o &&
                    o.forEach(function(i, o) {
                      ("update" === n || h(i.events, n)) &&
                        (i.read &&
                          !h(Xn.reads, e._frames.reads[o]) &&
                          (e._frames.reads[o] = Xn.measure(function() {
                            i.read.call(e, t), delete e._frames.reads[o];
                          })),
                        i.write &&
                          !h(Xn.writes, e._frames.writes[o]) &&
                          (e._frames.writes[o] = Xn.mutate(function() {
                            i.write.call(e, t), delete e._frames.writes[o];
                          })));
                    });
                });
            })(fi),
            (function(t) {
              function e(t, e) {
                var n = {},
                  i = t.args;
                void 0 === i && (i = []);
                var s = t.props;
                void 0 === s && (s = {});
                var l,
                  u,
                  h = t.el;
                if (!s) return n;
                for (l in s)
                  if (((u = r(l)), it(h, u))) {
                    var d = D(s[l], nt(h, u), h);
                    if ("target" === u && (!d || c(d, "_"))) continue;
                    n[l] = d;
                  }
                var f = o(at(h, e), i);
                for (l in f)
                  (u = a(l)), void 0 !== s[u] && (n[u] = D(s[u], f[l], h));
                return n;
              }
              function o(t, e) {
                void 0 === e && (e = []);
                try {
                  return t
                    ? c(t, "{")
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
              function s(t, e, n) {
                Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: function() {
                    var o = t._computeds,
                      r = t.$props,
                      a = t.$el;
                    return i(o, e) || (o[e] = n.call(t, r, a)), o[e];
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
                  a = e.delegate,
                  s = e.self,
                  c = e.filter,
                  h = e.handler;
                if (((r = d(r) ? r.call(t) : r || t.$el), cn(r)))
                  return void r.forEach(function(n) {
                    return l(t, hn({}, e, { el: n }), i);
                  });
                !r ||
                  (c && !c.call(t)) ||
                  ((h = g(w(h) ? t[h] : n(h, t))),
                  s && (h = u(h)),
                  t._events.push(
                    qt(r, o, a ? (w(a) ? a : a.call(t)) : null, h)
                  ));
              }
              function u(t) {
                return function(e) {
                  if (e.target === e.currentTarget || e.target === e.current)
                    return t.call(null, e);
                };
              }
              function f(t, e) {
                return t.every(function(t) {
                  return !t || !i(t, e);
                });
              }
              function g(t) {
                return function(e) {
                  return cn(e.detail) ? t.apply(t, [e].concat(e.detail)) : t(e);
                };
              }
              var m = 0;
              (t.prototype.props = {}),
                (t.prototype._init = function(e) {
                  (e = e || {}),
                    (e = this.$options = ue(this.constructor.options, e, this)),
                    (this.$el = null),
                    (this.$name = t.prefix + r(this.$options.name)),
                    (this.$props = {}),
                    (this._frames = { reads: {}, writes: {} }),
                    (this._events = []),
                    (this._uid = m++),
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
                  var a = e.props;
                  void 0 === a && (a = {});
                  var s = e.el;
                  r.length &&
                    cn(o) &&
                    (o = o.slice(0, r.length).reduce(function(t, e, n) {
                      return p(e) ? hn(t, e) : (t[r[n]] = e), t;
                    }, {}));
                  for (var l in n)
                    t.$props[l] = t[l] =
                      i(o, l) && !b(o[l])
                        ? D(a[l], o[l], s)
                        : cn(n[l]) ? n[l].concat() : n[l];
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
                    for (var n in e) s(t, n, e[n]);
                }),
                (t.prototype._initProps = function(t) {
                  var n = this;
                  (this._computeds = {}),
                    hn(this.$props, t || e(this.$options, this.$name));
                  var i = [this.$options.computed, this.$options.methods];
                  for (var o in n.$props) f(i, o) && (n[o] = n.$props[o]);
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
                    a = n.el;
                  !this._observer &&
                    o &&
                    i &&
                    Hn &&
                    ((i = cn(i)
                      ? i
                      : Object.keys(o).map(function(t) {
                          return r(t);
                        })),
                    (this._observer = new Hn(function() {
                      var n = e(t.$options, t.$name);
                      i.some(function(e) {
                        return !b(n[e]) && n[e] !== t.$props[e];
                      }) && t.$reset(n);
                    })),
                    this._observer.observe(a, {
                      attributes: !0,
                      attributeFilter: i.concat([
                        this.$name,
                        "data-" + this.$name
                      ])
                    }));
                });
            })(fi),
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
                    V(t, xn) && this._callConnected());
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
            })(fi),
            (function(t) {
              var e = t.data;
              (t.components = {}),
                (t.component = function(e, n) {
                  var i = a(e);
                  if (p(n)) (n.name = i), (n = t.extend(n));
                  else {
                    if (b(n)) return t.components[i];
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
                      for (var r = arguments.length, a = Array(r); r--; )
                        a[r] = arguments[r];
                      return p(e)
                        ? new t.components[i]({ data: e })
                        : t.components[i].options.functional
                          ? new t.components[i]({ data: [].concat(a) })
                          : e && e.nodeType ? o(e) : j(e).map(o)[0];
                    }),
                    t._initialized &&
                      !n.options.functional &&
                      Xn.measure(function() {
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
                      (c(i, "uk-") || c(i, "data-uk-")) &&
                        ((i = a(i.replace("data-uk-", "").replace("uk-", ""))),
                        t[i] && t[i](n));
                }),
                (t.disconnect = function(t) {
                  for (var n in t[e]) t[e][n]._callDisconnected();
                });
            })(fi);
          var pi,
            gi,
            mi,
            vi = {
              init: function() {
                jt(this.$el, this.$name);
              }
            },
            wi = {
              props: { container: Boolean },
              defaults: { container: !0 },
              computed: {
                container: function(t) {
                  var e = t.container;
                  return (
                    (!0 === e && fi.container) || (e && $(e)) || fi.container
                  );
                }
              }
            },
            yi = {
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
                  return new Xe(function(o) {
                    t = et(t);
                    var r,
                      a = function(t) {
                        return Xe.all(
                          t.map(function(t) {
                            return i._toggleElement(t, e, n);
                          })
                        );
                      },
                      s = t.filter(function(t) {
                        return i.isToggled(t);
                      }),
                      l = t.filter(function(t) {
                        return !h(s, t);
                      });
                    if (
                      i.queued &&
                      b(n) &&
                      b(e) &&
                      i.hasAnimation &&
                      !(t.length < 2)
                    ) {
                      var c = yn.body,
                        u = c.scrollTop,
                        d = s[0],
                        f =
                          (_n.inProgress(d) && zt(d, "uk-animation-leave")) ||
                          (Cn.inProgress(d) && "0px" === d.style.height);
                      (r = a(s)),
                        f ||
                          (r = r.then(function() {
                            var t = a(l);
                            return (c.scrollTop = u), t;
                          }));
                    } else r = a(l.concat(s));
                    r.then(o, O);
                  });
                },
                toggleNow: function(t, e) {
                  var n = this;
                  return new Xe(function(i) {
                    return Xe.all(
                      et(t).map(function(t) {
                        return n._toggleElement(t, e, !1);
                      })
                    ).then(i, O);
                  });
                },
                isToggled: function(t) {
                  var e = et(t || this.$el);
                  return this.cls
                    ? zt(e, this.cls.split(" ")[0])
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
                      : _n.inProgress(t)
                        ? zt(t, "uk-animation-leave")
                        : Cn.inProgress(t)
                          ? "0px" === t.style.height
                          : !this.isToggled(t)),
                    !Kt(t, "before" + (e ? "show" : "hide"), [this]))
                  )
                    return Xe.reject();
                  var o = (!1 !== n && this.hasAnimation
                    ? this.hasTransition
                      ? this._toggleHeight
                      : this._toggleAnimation
                    : this._toggleImmediate)(t, e);
                  return (
                    Kt(t, e ? "show" : "hide", [this]),
                    o.then(function() {
                      Kt(t, e ? "shown" : "hidden", [i]), fi.update(null, t);
                    })
                  );
                },
                _toggle: function(t, e) {
                  this.cls
                    ? Rt(t, this.cls, h(this.cls, " ") ? void 0 : e)
                    : nt(t, "hidden", e ? null : ""),
                    j("[autofocus]", t).some(function(t) {
                      return vt(t) && (t.focus() || !0);
                    }),
                    this.updateAria(t),
                    fi.update(null, t);
                },
                _toggleImmediate: function(t, e) {
                  return this._toggle(t, e), Xe.resolve();
                },
                _toggleHeight: function(t, e) {
                  var n,
                    i = this,
                    o = Cn.inProgress(t),
                    r = t.hasChildNodes
                      ? M(St(t.firstElementChild, "marginTop")) +
                        M(St(t.lastElementChild, "marginBottom"))
                      : 0,
                    a = vt(t) ? li(t) + (o ? 0 : r) : 0;
                  return (
                    Cn.cancel(t),
                    this.isToggled(t) || this._toggle(t, !0),
                    li(t, ""),
                    Xn.flush(),
                    (n = li(t) + (o ? 0 : r)),
                    li(t, a),
                    (e
                      ? Cn.start(
                          t,
                          hn({}, this.initProps, {
                            overflow: "hidden",
                            height: n
                          }),
                          Math.round(this.duration * (1 - a / n)),
                          this.transition
                        )
                      : Cn.start(
                          t,
                          this.hideProps,
                          Math.round(this.duration * (a / n)),
                          this.transition
                        ).then(function() {
                          return i._toggle(t, !1);
                        })
                    ).then(function() {
                      return St(t, i.initProps);
                    })
                  );
                },
                _toggleAnimation: function(t, e) {
                  var n = this;
                  return (
                    _n.cancel(t),
                    e
                      ? (this._toggle(t, !0),
                        _n.in(t, this.animation[0], this.duration, this.origin))
                      : _n
                          .out(
                            t,
                            this.animation[1] || this.animation[0],
                            this.duration,
                            this.origin
                          )
                          .then(function() {
                            return n._toggle(t, !1);
                          })
                  );
                }
              }
            },
            xi = {
              mixins: [vi, wi, yi],
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
                  return P("." + t.clsPanel, e);
                },
                transitionElement: function() {
                  return this.panel;
                },
                transitionDuration: function() {
                  return _(St(this.transitionElement, "transitionDuration"));
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
                    zt(xn, this.clsPage) ||
                      ((this.scrollbarWidth = ci(wn) - xn.offsetWidth),
                      St(
                        yn.body,
                        "overflowY",
                        this.scrollbarWidth && this.overlay ? "scroll" : ""
                      )),
                      jt(xn, this.clsPage);
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
                    t || Ht(xn, this.clsPage),
                      !this.prev && St(yn.body, "overflowY", "");
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
                    return $e(), this.toggleNow(this.$el, !0);
                  }
                },
                hide: function() {
                  if (this.isToggled())
                    return (
                      (pi = (pi && pi !== this && pi) || this.prev),
                      pi || Se(),
                      this.toggleNow(this.$el, !1)
                    );
                },
                getActive: function() {
                  return pi;
                },
                _toggleImmediate: function(t, e) {
                  var n = this;
                  return new Xe(function(i) {
                    return Fn(function() {
                      n._toggle(t, e),
                        n.transitionDuration
                          ? Gt(n.transitionElement, Jn, i, !1, function(t) {
                              return t.target === n.transitionElement;
                            })
                          : i();
                    });
                  });
                }
              }
            },
            bi = {
              props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
              },
              defaults: {
                pos: "bottom-" + (bn ? "right" : "left"),
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
                  Ft(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"),
                    St(t, { top: "", left: "" });
                  var i = C(this.offset) || 0,
                    o = this.getAxis(),
                    r = fe(
                      t,
                      e,
                      "x" === o
                        ? Me(this.dir) + " " + this.align
                        : this.align + " " + Me(this.dir),
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
                    a = r.x,
                    s = r.y;
                  (this.dir = "x" === o ? a : s),
                    (this.align = "x" === o ? s : a),
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
                mixins: [vi, yi],
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
                    return j(t.targets, e);
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
                          $t(
                            j(
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
                    !zt(t, this.clsOpen);
                  t && this.toggle(t, !1);
                },
                update: function() {
                  var t = this;
                  this.items.forEach(function(e) {
                    return t.toggleNow(P(t.content, e), zt(e, t.clsOpen));
                  });
                  var e =
                    !this.collapsible &&
                    !zt(this.items, this.clsOpen) &&
                    this.items[0];
                  e && this.toggle(e, !1);
                },
                methods: {
                  toggle: function(t, e) {
                    var n = this,
                      i = pt(t, this.items),
                      o = Z(this.items, "." + this.clsOpen);
                    (t = this.items[i]) &&
                      [t]
                        .concat((!this.multiple && !h(o, t) && o) || [])
                        .forEach(function(i) {
                          var r = i === t,
                            a = r && !zt(i, n.clsOpen);
                          if (a || !r || n.collapsible || !(o.length < 2)) {
                            Rt(i, n.clsOpen, a);
                            var s = i._wrapper
                              ? i._wrapper.firstElementChild
                              : P(n.content, i);
                            i._wrapper ||
                              ((i._wrapper = Dt(s, "<div>")),
                              nt(i._wrapper, "hidden", a ? "" : null)),
                              n._toggleImmediate(s, !0),
                              n
                                .toggleElement(i._wrapper, a, e)
                                .then(function() {
                                  zt(i, n.clsOpen) === a &&
                                    (a || n._toggleImmediate(s, !1),
                                    (i._wrapper = null),
                                    Nt(s));
                                });
                          }
                        });
                  }
                }
              });
            },
            Ci = function(t) {
              t.component("alert", {
                attrs: !0,
                mixins: [vi, yi],
                args: "animation",
                props: { close: String },
                defaults: {
                  animation: [!0],
                  selClose: ".uk-alert-close",
                  duration: 150,
                  hideProps: hn({ opacity: 0 }, yi.defaults.hideProps)
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
            Mi = function(t) {
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
                      St(
                        St(t, { width: "", height: "" }),
                        Tn.cover(
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
            Li = function(t) {
              function e() {
                i ||
                  ((i = !0),
                  qt(xn, "click", function(t) {
                    var e,
                      i = t.target,
                      o = t.defaultPrevented;
                    if (!o)
                      for (
                        ;
                        n &&
                        n !== e &&
                        !V(i, n.$el) &&
                        (!n.toggle || !V(i, n.toggle.$el));

                      )
                        (e = n), n.hide(!1);
                  }));
              }
              var n;
              t.component("drop", {
                mixins: [bi, yi],
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
                  boundary: wn,
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
                    jt(this.$el, this.clsDrop);
                },
                ready: function() {
                  this.updateAria(this.$el),
                    this.toggle &&
                      (this.toggle = t.toggle(
                        w(this.toggle)
                          ? F(this.toggle, this.$el)
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
                          (e && V(e, this.$el)) || this.hide(!1);
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
                      Ne(t) ||
                        (n &&
                          n !== this &&
                          n.toggle &&
                          h(n.toggle.mode, "hover") &&
                          !V(t.target, n.toggle.$el) &&
                          !B({ x: t.pageX, y: t.pageY }, pe(n.$el)) &&
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
                    name: "togglehide " + qn,
                    handler: function(t, e) {
                      Ne(t) ||
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
                        jt(this.toggle.$el, this.cls),
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
                          null === n && V(e, this.$el) && this.isToggled()
                            ? this
                            : n);
                      (n = this.isActive() ? null : n),
                        Ht(this.toggle.$el, this.cls),
                        nt(this.toggle.$el, "aria-expanded", "false"),
                        this.toggle.$el.blur(),
                        j("a, button", this.toggle.$el).forEach(function(t) {
                          return t.blur();
                        }),
                        this.tracker.cancel();
                    }
                  }
                ],
                update: {
                  write: function() {
                    this.isToggled() &&
                      !_n.inProgress(this.$el) &&
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
                      ? (Gt(this.$el, "hide", r), this.hide(!1))
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
                    return t && t !== this && V(this.$el, t.$el);
                  },
                  isParentOf: function(t) {
                    return t && t !== this && V(t.$el, this.$el);
                  },
                  position: function() {
                    Ft(this.$el, this.clsDrop + "-(stack|boundary)"),
                      St(this.$el, { top: "", left: "", display: "block" }),
                      Rt(
                        this.$el,
                        this.clsDrop + "-boundary",
                        this.boundaryAlign
                      );
                    var t = pe(this.boundary),
                      e = this.boundaryAlign ? t : pe(this.toggle.$el);
                    if ("justify" === this.align) {
                      var n = "y" === this.getAxis() ? "width" : "height";
                      St(this.$el, n, e[n]);
                    } else
                      this.$el.offsetWidth >
                        Math.max(t.right - e.left, e.right - t.left) &&
                        (jt(this.$el, this.clsDrop + "-stack"),
                        Kt(this.$el, "stack", [this]));
                    this.positionAt(
                      this.$el,
                      this.boundaryAlign ? this.boundary : this.toggle.$el,
                      this.boundary
                    ),
                      St(this.$el, "display", "");
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
            Di = function(t) {
              t.component("form-custom", {
                mixins: [vi],
                args: "target",
                props: { target: Boolean },
                defaults: { target: !1 },
                computed: {
                  input: function(t, e) {
                    return P($n, e);
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
                        F(n, e))
                    );
                  }
                },
                connected: function() {
                  Kt(this.input, "change");
                },
                events: [
                  {
                    name: "focusin focusout mouseenter mouseleave",
                    delegate: $n,
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
                        (e[wt(e) ? "value" : "textContent"] =
                          n.files && n.files[0]
                            ? n.files[0].name
                            : q(n, "select") &&
                              (t = j("option", n).filter(function(t) {
                                return t.selected;
                              })[0])
                              ? t.textContent
                              : n.value);
                    }
                  }
                ]
              });
            },
            _i = function(t) {
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
            Ni = function(t) {
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
            Ti = function(t) {
              t.component("height-match", {
                args: "target",
                props: { target: String, row: Boolean },
                defaults: { target: "> *", row: !0 },
                computed: {
                  elements: function(t, e) {
                    return j(t.target, e);
                  }
                },
                update: {
                  read: function() {
                    var t = this,
                      e = !1;
                    St(this.elements, "minHeight", ""),
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
                      return St(t.elements, "minHeight", e);
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
                          b(i) || nt(t, { style: i, hidden: o });
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
            $i = function(t) {
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
                    St(this.$el, "boxSizing", "border-box");
                    var t,
                      n = li(wn),
                      i = 0;
                    if (this.expand) {
                      St(this.$el, { height: "", minHeight: "" });
                      var o = n - e(xn);
                      o > 0 && (t = e(this.$el) + o);
                    } else {
                      var r = pe(this.$el).top;
                      r < n / 2 && this.offsetTop && (i += r),
                        !0 === this.offsetBottom
                          ? (i += e(this.$el.nextElementSibling))
                          : x(this.offsetBottom)
                            ? (i += n / 100 * this.offsetBottom)
                            : this.offsetBottom && u(this.offsetBottom, "px")
                              ? (i += M(this.offsetBottom))
                              : w(this.offsetBottom) &&
                                (i += e(F(this.offsetBottom, this.$el))),
                        (t = i ? "calc(100vh - " + i + "px)" : "100vh");
                    }
                    if (t) {
                      St(this.$el, { height: "", minHeight: t });
                      var a = this.$el.offsetHeight;
                      this.minHeight &&
                        this.minHeight > a &&
                        St(this.$el, "minHeight", this.minHeight),
                        n - i >= a && St(this.$el, "height", t);
                    }
                  },
                  events: ["load", "resize"]
                }
              });
            },
            Si = function(t) {
              lt(function() {
                if (Rn) {
                  var e = "uk-hover";
                  qt(yn, "tap", function(t) {
                    var n = t.target;
                    return j("." + e).forEach(function(t, i) {
                      return !V(n, i) && Ht(i, e);
                    });
                  }),
                    Object.defineProperty(t, "hoverSelector", {
                      set: function(t) {
                        qt(yn, "tap", t, function(t) {
                          return jt(t.current, e);
                        });
                      }
                    }),
                    (t.hoverSelector =
                      ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]");
                }
              });
            },
            Oi = function(t) {
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
                return o[t] ? (i[t] || (i[t] = P(o[t].trim())), i[t]) : null;
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
                    jt(this.$el, "uk-icon"),
                      bn &&
                        (this.icon = N(
                          N(this.icon, "left", "right"),
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
                      return t ? Xe.resolve(t) : Xe.reject("Icon not found.");
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
                      jt(this.$el, "uk-slidenav"),
                        zt(this.$el, "uk-slidenav-large") &&
                          (this.icon += "-large");
                    }
                  });
                }),
                e("search-icon", {
                  init: function() {
                    zt(this.$el, "uk-search-icon") &&
                    G(this.$el, ".uk-search-large").length
                      ? (this.icon = "search-large")
                      : G(this.$el, ".uk-search-navbar").length &&
                        (this.icon = "search-navbar");
                  }
                }),
                e("close", {
                  init: function() {
                    this.icon =
                      "close-" +
                      (zt(this.$el, "uk-close-large") ? "large" : "icon");
                  }
                }),
                e("spinner", {
                  connected: function() {
                    var t = this;
                    this.svg.then(function(e) {
                      return (
                        1 !== t.ratio &&
                        St(P("circle", e), "stroke-width", 1 / t.ratio)
                      );
                    }, O);
                  }
                }),
                (t.icon.add = function(e) {
                  Object.keys(e).forEach(function(t) {
                    (o[t] = e[t]), delete i[t];
                  }),
                    t._initialized &&
                      T(t.instances, function(t) {
                        "icon" === t.$options.name && t.$reset();
                      });
                });
            },
            Ii = function(t) {
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
                    return t.fill || Bt("leader-fill");
                  }
                },
                connected: function() {
                  this.wrapper = _t(
                    this.$el,
                    '<span class="' + this.clsWrapper + '">'
                  )[0];
                },
                disconnected: function() {
                  Nt(this.wrapper.childNodes), delete this._width;
                },
                update: [
                  {
                    read: function() {
                      var t = this._width;
                      (this._width = Math.floor(this.$el.offsetWidth / 2)),
                        (this._changed = t !== this._width),
                        (this._hide =
                          this.media && !wn.matchMedia(this.media).matches);
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
            Bi = function(t) {
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
                        for (var a = n.length - 1; a >= 0; a--) {
                          var s = n[a];
                          if (!s[0]) {
                            s.push(o);
                            break;
                          }
                          var l = s[0].getBoundingClientRect();
                          if (r.top >= Math.floor(l.bottom)) {
                            n.push([o]);
                            break;
                          }
                          if (Math.floor(r.bottom) > l.top) {
                            if (((t.stacks = !1), r.left < l.left && !bn)) {
                              s.unshift(o);
                              break;
                            }
                            s.push(o);
                            break;
                          }
                          if (0 === a) {
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
            Ai = function(t) {
              t.component("modal", {
                mixins: [xi],
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
                      zt(this.panel, "uk-margin-auto-vertical")
                        ? jt(this.$el, "uk-flex")
                        : St(this.$el, "display", "block"),
                        li(this.$el);
                    }
                  },
                  {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                      St(this.$el, "display", ""), Ht(this.$el, "uk-flex");
                    }
                  }
                ]
              }),
                t.component("overflow-auto", {
                  mixins: [vi],
                  computed: {
                    modal: function(t, e) {
                      return J(e, ".uk-modal");
                    },
                    panel: function(t, e) {
                      return J(e, ".uk-modal-dialog");
                    }
                  },
                  connected: function() {
                    St(this.$el, "minHeight", 150);
                  },
                  update: {
                    write: function() {
                      if (this.panel && this.modal) {
                        var t = St(this.$el, "maxHeight");
                        St(
                          St(this.$el, "maxHeight", 150),
                          "maxHeight",
                          Math.max(
                            150,
                            150 + li(this.modal) - this.panel.offsetHeight
                          )
                        ),
                          t !== St(this.$el, "maxHeight") &&
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
                    qt(i.$el, "hidden", function(t) {
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
                    new Xe(function(i) {
                      return qt(
                        t.modal.dialog(
                          ' <div class="uk-modal-body">' +
                            (w(e) ? e : xt(e)) +
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
                    new Xe(function(i, o) {
                      return qt(
                        t.modal.dialog(
                          ' <div class="uk-modal-body">' +
                            (w(e) ? e : xt(e)) +
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
                          return 0 === $t(t.target) ? o() : i();
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
                    new Xe(function(o) {
                      var r = !1,
                        a = t.modal.dialog(
                          ' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                            (w(e) ? e : xt(e)) +
                            '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                            i.labels.cancel +
                            '</button> <button class="uk-button uk-button-primary">' +
                            i.labels.ok +
                            "</button> </div> </form> ",
                          i
                        ),
                        s = P("input", a.$el);
                      (s.value = n),
                        qt(a.$el, "submit", "form", function(t) {
                          t.preventDefault(), o(s.value), (r = !0), a.hide();
                        }),
                        qt(a.$el, "hide", function() {
                          r || o(null);
                        });
                    })
                  );
                }),
                (t.modal.labels = { ok: "Ok", cancel: "Cancel" });
            },
            Pi = function(t) {
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
            ji = function(t) {
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
                  align: bn ? "right" : "left",
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
                      F(this.dropbar, this.$el) ||
                        Mt(this.dropbarAnchor || this.$el, "<div></div>"),
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
                    j(this.dropdown + " ." + this.clsDrop, this.$el).filter(
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
                        !V(n.toggle.$el, e) &&
                        !n.tracker.movesTo(n.$el) &&
                        n.hide(!1);
                    }
                  }
                ],
                methods: {
                  getActive: function() {
                    var e = t.drop.getActive();
                    return (
                      e && h(e.mode, "hover") && V(e.toggle.$el, this.$el) && e
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
                      jt(this.$el, "uk-navbar-dropbar-slide");
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
                          V(n, this.$el) ||
                          (kt(this.$el, n), e.show(), t.preventDefault());
                      }
                    },
                    {
                      name: "mouseleave",
                      handler: function() {
                        var t = this.navbar.getActive();
                        t && !q(this.$el, ":hover") && t.hide();
                      }
                    },
                    {
                      name: "show",
                      handler: function(t, e) {
                        var n = e.$el;
                        this.clsDrop && jt(n, this.clsDrop + "-dropbar"),
                          this.transitionTo(
                            n.offsetHeight +
                              M(St(n, "margin-top")) +
                              M(St(n, "margin-bottom"))
                          );
                      }
                    },
                    {
                      name: "beforehide",
                      handler: function(t, e) {
                        var n = e.$el,
                          i = this.navbar.getActive();
                        q(this.$el, ":hover") &&
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
                        Cn.cancel(this.$el),
                        Cn.start(this.$el, { height: t }, this.duration).catch(
                          O
                        )
                      );
                    }
                  }
                });
            },
            Hi = function(t) {
              t.component("offcanvas", {
                mixins: [xi],
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
                    return P(t.content);
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
                        ci(this.content, ci(wn) - this.scrollbarWidth),
                      this.overlay &&
                        (li(this.content, li(wn)),
                        mi && (this.content.scrollTop = mi.y)));
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
                        P(e.hash, this.content) &&
                        ((mi = null), this.hide());
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
                        P(n, this.content) &&
                        (Gt(this.$el, "hidden", function() {
                          return e.scrollTo(n);
                        }),
                        t.preventDefault());
                    }
                  },
                  {
                    name: "show",
                    self: !0,
                    handler: function() {
                      (mi = mi || { x: wn.pageXOffset, y: wn.pageYOffset }),
                        "reveal" !== this.mode ||
                          zt(this.panel, this.clsMode) ||
                          (Dt(this.panel, "<div>"),
                          jt(this.panel.parentNode, this.clsMode)),
                        St(
                          xn,
                          "overflowY",
                          (!this.clsContentAnimation || this.flip) &&
                          this.scrollbarWidth &&
                          this.overlay
                            ? "scroll"
                            : ""
                        ),
                        jt(
                          yn.body,
                          this.clsContainer +
                            " " +
                            this.clsFlip +
                            " " +
                            this.clsOverlay
                        ),
                        li(yn.body),
                        jt(this.content, this.clsContentAnimation),
                        jt(
                          this.panel,
                          this.clsSidebarAnimation +
                            " " +
                            ("reveal" !== this.mode ? this.clsMode : "")
                        ),
                        jt(this.$el, this.clsOverlay),
                        St(this.$el, "display", "block"),
                        li(this.$el);
                    }
                  },
                  {
                    name: "hide",
                    self: !0,
                    handler: function() {
                      Ht(this.content, this.clsContentAnimation);
                      var t = this.getActive();
                      ("none" === this.mode ||
                        (t && t !== this && t !== this.prev)) &&
                        Kt(this.panel, Jn);
                    }
                  },
                  {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                      if (
                        ("reveal" === this.mode && Nt(this.panel), this.overlay)
                      ) {
                        if (!mi) {
                          var t = this.content,
                            e = t.scrollLeft,
                            n = t.scrollTop;
                          mi = { x: e, y: n };
                        }
                      } else mi = { x: wn.pageXOffset, y: wn.pageYOffset };
                      Ht(
                        this.panel,
                        this.clsSidebarAnimation + " " + this.clsMode
                      ),
                        Ht(this.$el, this.clsOverlay),
                        St(this.$el, "display", ""),
                        Ht(
                          yn.body,
                          this.clsContainer +
                            " " +
                            this.clsFlip +
                            " " +
                            this.clsOverlay
                        ),
                        (yn.body.scrollTop = mi.y),
                        St(xn, "overflow-y", ""),
                        ci(this.content, ""),
                        li(this.content, ""),
                        wn.scrollTo(mi.x, mi.y),
                        (mi = null);
                    }
                  },
                  {
                    name: "swipeLeft swipeRight",
                    handler: function(t) {
                      this.isToggled() &&
                        Ne(t) &&
                        (("swipeLeft" === t.type && !this.flip) ||
                          ("swipeRight" === t.type && this.flip)) &&
                        this.hide();
                    }
                  }
                ]
              });
            },
            Fi = function(t) {
              t.component("responsive", {
                props: ["width", "height"],
                init: function() {
                  jt(this.$el, "uk-responsive-width");
                },
                update: {
                  read: function() {
                    this.dim = !!(
                      vt(this.$el) &&
                      this.width &&
                      this.height
                    ) && {
                      width: ci(this.$el.parentNode),
                      height: this.height
                    };
                  },
                  write: function() {
                    this.dim &&
                      li(
                        this.$el,
                        Tn.contain(
                          { height: this.height, width: this.width },
                          this.dim
                        ).height
                      );
                  },
                  events: ["load", "resize"]
                }
              });
            },
            Yi = function(t) {
              function e(t) {
                return 0.5 * (1 - Math.cos(Math.PI * t));
              }
              t.component("scroll", {
                props: { duration: Number, offset: Number },
                defaults: { duration: 1e3, offset: 0 },
                methods: {
                  scrollTo: function(t) {
                    var n = this;
                    t = (t && P(w(t) ? t.replace(/\//g, "\\/") : t)) || yn.body;
                    var i = pe(t).top - this.offset,
                      o = li(yn),
                      r = li(wn);
                    if (
                      (i + r > o && (i = o - r),
                      Kt(this.$el, "beforescroll", [this, t]))
                    ) {
                      var a = Date.now(),
                        s = wn.pageYOffset,
                        l = function() {
                          var o =
                            s + (i - s) * e(S((Date.now() - a) / n.duration));
                          wn.scrollTo(wn.pageXOffset, o),
                            o !== i ? Fn(l) : Kt(n.$el, "scrolled", [n, t]);
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
            zi = function(t) {
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
                    return (n && j(n, e)) || [e];
                  }
                },
                update: [
                  {
                    write: function() {
                      this.hidden &&
                        St(
                          Z(this.elements, ":not(." + this.inViewClass + ")"),
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
                            var a = function() {
                              St(n, "visibility", ""),
                                jt(n, t.inViewClass),
                                Rt(n, r),
                                Kt(n, "inview"),
                                t.$update(),
                                (o.inview = !0),
                                delete o.timer;
                            };
                            t.delay && e
                              ? (o.timer = setTimeout(a, t.delay * e))
                              : a(),
                              e++;
                          }
                        } else o.inview && t.repeat && (o.timer && (clearTimeout(o.timer), delete o.timer), St(n, "visibility", t.hidden ? "hidden" : ""), Ht(n, t.inViewClass), Rt(n, r), Kt(n, "outview"), t.$update(), (o.inview = !1));
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
                    return j('a[href^="#"]', e).filter(function(t) {
                      return t.hash;
                    });
                  },
                  elements: function() {
                    return this.closest
                      ? J(this.links, this.closest)
                      : this.links;
                  },
                  targets: function() {
                    return j(
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
                        e = wn.pageYOffset + this.offset + 1,
                        n = li(yn) - li(wn) + this.offset;
                      (this.active = !1),
                        this.targets.every(function(i, o) {
                          var r = pe(i).top,
                            a = o + 1 === t.targets.length;
                          if (
                            !t.overflow &&
                            ((0 === o && r > e) || (a && r + i.offsetTop < e))
                          )
                            return !1;
                          if (!a && pe(t.targets[o + 1]).top <= e) return !0;
                          if (e >= n)
                            for (var s = t.targets.length - 1; s > o; s--)
                              if (ht(t.targets[s])) {
                                i = t.targets[s];
                                break;
                              }
                          return !(t.active = P(
                            Z(t.links, '[href="#' + i.id + '"]')
                          ));
                        });
                    },
                    write: function() {
                      this.links.forEach(function(t) {
                        return t.blur();
                      }),
                        Ht(this.elements, this.cls),
                        this.active &&
                          Kt(this.$el, "active", [
                            this.active,
                            jt(
                              this.closest
                                ? J(this.active, this.closest)
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
            Wi = function(t) {
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
                    return (n && P(n, e)) || e;
                  }
                },
                connected: function() {
                  (this.placeholder = P(
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
                    Ht(this.$el, this.clsInactive)),
                    Et(this.placeholder),
                    (this.placeholder = null),
                    (this.widthElement = null);
                },
                ready: function() {
                  var t = this;
                  if (this.target && location.hash && wn.pageYOffset > 0) {
                    var e = P(location.hash);
                    e &&
                      Fn(function() {
                        var n = pe(e).top,
                          i = pe(t.$el).top,
                          o = t.$el.offsetHeight;
                        i + o >= n &&
                          i <= n + e.offsetHeight &&
                          wn.scrollTo(0, n - o - t.target - t.offset);
                      });
                  }
                },
                events: [
                  {
                    name: "active",
                    self: !0,
                    handler: function() {
                      Yt(this.selTarget, this.clsInactive, this.clsActive);
                    }
                  },
                  {
                    name: "inactive",
                    self: !0,
                    handler: function() {
                      Yt(this.selTarget, this.clsActive, this.clsInactive);
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
                      St(
                        n,
                        hn(
                          {
                            height:
                              "absolute" !== St(this.$el, "position") ? i : ""
                          },
                          St(this.$el, [
                            "marginTop",
                            "marginBottom",
                            "marginLeft",
                            "marginRight"
                          ])
                        )
                      ),
                        V(n, xn) || (Mt(this.$el, n), nt(n, "hidden", "")),
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
                              (x(e[n])
                                ? (e[n] = e[n + "Offset"] + M(e[n]))
                                : w(e[n]) && e[n].match(/^-?\d+vh$/)
                                  ? (e[n] = li(wn) * M(e[n]) / 100)
                                  : (t =
                                      !0 === e[n]
                                        ? e.$el.parentNode
                                        : F(e[n], e.$el)) &&
                                    (e[n] = pe(t).top + t.offsetHeight));
                        }),
                        (this.top =
                          Math.max(M(this.top), this.topOffset) - this.offset),
                        (this.bottom = this.bottom && this.bottom - i),
                        (this.inactive =
                          this.media && !wn.matchMedia(this.media).matches),
                        this.isActive && this.update();
                    },
                    events: ["load", "resize"]
                  },
                  {
                    read: function() {
                      (this.offsetTop = pe(this.$el).top),
                        (this.scroll = wn.pageYOffset),
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
                              ? (_n.cancel(this.$el),
                                _n
                                  .out(this.$el, this.animation)
                                  .then(function() {
                                    return e.hide();
                                  }, O))
                              : this.hide();
                        } else
                          this.isActive
                            ? this.update()
                            : this.animation
                              ? (_n.cancel(this.$el),
                                this.show(),
                                _n.in(this.$el, this.animation).catch(O))
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
                    (this.isActive && !zt(this.selTarget, this.clsActive)) ||
                      Kt(this.$el, "inactive"),
                      Ht(this.$el, this.clsFixed, this.clsBelow),
                      St(this.$el, { position: "", top: "", width: "" }),
                      nt(this.placeholder, "hidden", "");
                  },
                  update: function() {
                    var t = Math.max(0, this.offset),
                      e = this.scroll > this.top;
                    this.bottom &&
                      this.scroll > this.bottom - this.offset &&
                      (t = this.bottom - this.scroll),
                      St(this.$el, {
                        position: "fixed",
                        top: t + "px",
                        width: this.width
                      }),
                      zt(this.selTarget, this.clsActive)
                        ? e || Kt(this.$el, "inactive")
                        : e && Kt(this.$el, "active"),
                      Rt(
                        this.$el,
                        this.clsBelow,
                        this.scroll > this.bottomOffset
                      ),
                      jt(this.$el, this.clsFixed);
                  }
                }
              });
            },
            Zi = {},
            Vi = function(t) {
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
                      (w(n)
                        ? (t.icon && h(n, "<symbol") && (n = e(n, t.icon) || n),
                          (i = P(n.substr(n.indexOf("<svg")))))
                        : (i = n.cloneNode(!0)),
                      !i)
                    )
                      return Xe.reject("SVG not found.");
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
                    var a = t.$el;
                    if (gt(a) || "CANVAS" === a.tagName) {
                      nt(a, { hidden: !0, id: null });
                      var s = a.nextElementSibling;
                      s && i.isEqualNode(s) ? (i = s) : Mt(a, i);
                    } else {
                      var l = a.lastElementChild;
                      l && i.isEqualNode(l) ? (i = l) : kt(a, i);
                    }
                    return (t.svgEl = i), i;
                  }, O);
                },
                disconnected: function() {
                  var t = this;
                  gt(this.$el) &&
                    nt(this.$el, { hidden: null, id: this.id || null }),
                    this.svg &&
                      this.svg.then(function(e) {
                        return (!t._connected || e !== t.svgEl) && Et(e);
                      }, O),
                    (this.svg = this.svgEl = null);
                },
                methods: {
                  getSvg: function() {
                    var t = this;
                    return this.src
                      ? Zi[this.src]
                        ? Zi[this.src]
                        : ((Zi[this.src] = new Xe(function(e, n) {
                            c(t.src, "data:")
                              ? e(decodeURIComponent(t.src.split(",")[1]))
                              : A(t.src).then(
                                  function(t) {
                                    return e(t.response);
                                  },
                                  function() {
                                    return n("SVG not found.");
                                  }
                                );
                          })),
                          Zi[this.src])
                      : Xe.reject();
                  }
                }
              });
              var n = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
                i = {};
            },
            Ui = function(t) {
              t.component("switcher", {
                mixins: [yi],
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
                    return Y(t.connect, e);
                  },
                  toggles: function(t, e) {
                    return j(t.toggle, e);
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
                        this.show(at(t.current, this.attrItem));
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
                      Ne(t) &&
                        (t.preventDefault(),
                        wn.getSelection().toString() ||
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
                      Z(this.toggles, "." + this.cls)[0] ||
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
                          $t(Z(this.connects[0].children, "." + this.cls)[0]),
                        r = o >= 0,
                        a = pt(t, this.toggles, o),
                        s = "previous" === t ? -1 : 1,
                        l = 0;
                      l < i;
                      l++, a = (a + s + i) % i
                    )
                      if (!q(n.toggles[a], ".uk-disabled, [disabled]")) {
                        e = n.toggles[a];
                        break;
                      }
                    !e ||
                      (o >= 0 && zt(e, this.cls)) ||
                      o === a ||
                      (Ht(this.toggles, this.cls),
                      nt(this.toggles, "aria-expanded", !1),
                      jt(e, this.cls),
                      nt(e, "aria-expanded", !0),
                      this.connects.forEach(function(t) {
                        r
                          ? n.toggleElement([t.children[o], t.children[a]])
                          : n.toggleNow(t.children[a]);
                      }));
                  }
                }
              });
            },
            qi = function(t) {
              t.component(
                "tab",
                t.components.switcher.extend({
                  mixins: [vi],
                  name: "tab",
                  props: { media: "media" },
                  defaults: { media: 960, attrItem: "uk-tab-item" },
                  init: function() {
                    var e = zt(this.$el, "uk-tab-left")
                      ? "uk-tab-left"
                      : !!zt(this.$el, "uk-tab-right") && "uk-tab-right";
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
            Ji = function(t) {
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
                    return (i = Y(i || n, e)), (i.length && i) || [e];
                  }
                },
                events: [
                  {
                    name: Un + " " + qn,
                    filter: function() {
                      return h(this.mode, "hover");
                    },
                    handler: function(t) {
                      Ne(t) ||
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
                      if (Ne(t) || h(this.mode, "click")) {
                        var e;
                        (J(t.target, 'a[href="#"], button') ||
                          ((e = J(t.target, "a[href]")) &&
                            (this.cls ||
                              !vt(this.target) ||
                              (e.hash && q(this.target, e.hash))))) &&
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
                      (wn.matchMedia(this.media).matches ? !t : t) &&
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
            Gi = function(t) {
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
                      (vt(this.$el) && "hidden" !== St(this.$el, "visibility")
                        ? this.autoplay && this.player.play()
                        : this.player.pause());
                  },
                  events: ["load"]
                }
              });
            };
          (fi.version = "3.0.0-beta.34"),
            (function(t) {
              (t.mixin.class = vi),
                (t.mixin.container = wi),
                (t.mixin.modal = xi),
                (t.mixin.position = bi),
                (t.mixin.togglable = yi);
            })(fi),
            (function(t) {
              var e = 0,
                n = 0;
              qt(wn, "load resize", t.update),
                qt(wn, "scroll", function(n) {
                  (n.dir = e < wn.pageYOffset ? "down" : "up"),
                    (e = wn.pageYOffset),
                    t.update(n),
                    Xn.flush();
                }),
                Gn &&
                  qt(
                    yn,
                    Gn,
                    function(t) {
                      var e = t.target;
                      (St(e, "animationName") || "").match(
                        /^uk-.*(left|right)/
                      ) &&
                        (n++,
                        (yn.body.style.overflowX = "hidden"),
                        setTimeout(function() {
                          --n || (yn.body.style.overflowX = "");
                        }, _(St(e, "animationDuration")) + 100));
                    },
                    !0
                  ),
                t.use(Ji),
                t.use(ki),
                t.use(Ci),
                t.use(Gi),
                t.use(Mi),
                t.use(Li),
                t.use(Ei),
                t.use(Di),
                t.use(Ti),
                t.use($i),
                t.use(Si),
                t.use(Bi),
                t.use(_i),
                t.use(Ni),
                t.use(Ii),
                t.use(Ai),
                t.use(Pi),
                t.use(ji),
                t.use(Hi),
                t.use(Fi),
                t.use(Yi),
                t.use(zi),
                t.use(Ri),
                t.use(Wi),
                t.use(Vi),
                t.use(Oi),
                t.use(Ui),
                t.use(qi);
            })(fi);
          var Ki = function(t) {
              var e = t.util,
                n = e.css,
                i = {
                  slide: {
                    show: function(t) {
                      return [{ transform: Be(-100 * t) }, { transform: Be() }];
                    },
                    percent: function(t) {
                      return i.translated(t);
                    },
                    translate: function(t, e) {
                      return [
                        { transform: Be(-100 * e * t) },
                        { transform: Be(100 * e * (1 - t)) }
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
            Xi = function(t) {
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
                      { opacity: 0, transform: Ae(0.8) },
                      { opacity: 1, transform: Ae(1) }
                    ];
                  },
                  percent: function(t) {
                    return 1 - o(t, "opacity");
                  },
                  translate: function(t) {
                    return [
                      { opacity: 1 - t, transform: Ae(1 - 0.2 * t) },
                      { opacity: t, transform: Ae(0.8 + 0.2 * t) }
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
                        { opacity: 0, transform: Ae(1.5), zIndex: 0 },
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
                          transform: Ae(1 + 0.5 * t),
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
                            { transform: Be(30), zIndex: -1 },
                            { transform: Be(), zIndex: 0 }
                          ]
                        : [
                            { transform: Be(-100), zIndex: 0 },
                            { transform: Be(), zIndex: -1 }
                          ];
                    },
                    percent: function(t, e, n) {
                      return n < 0 ? 1 - r.translated(e) : r.translated(t);
                    },
                    translate: function(t, e) {
                      return e < 0
                        ? [
                            { transform: Be(30 * t), zIndex: -1 },
                            { transform: Be(-100 * (1 - t)), zIndex: 0 }
                          ]
                        : [
                            { transform: Be(100 * -t), zIndex: 0 },
                            { transform: Be(30 * (1 - t)), zIndex: -1 }
                          ];
                    }
                  },
                  push: {
                    show: function(t) {
                      return t < 0
                        ? [
                            { transform: Be(100), zIndex: 0 },
                            { transform: Be(), zIndex: -1 }
                          ]
                        : [
                            { transform: Be(-30), zIndex: -1 },
                            { transform: Be(), zIndex: 0 }
                          ];
                    },
                    percent: function(t, e, n) {
                      return n > 0 ? 1 - r.translated(e) : r.translated(t);
                    },
                    translate: function(t, e) {
                      return e < 0
                        ? [
                            { transform: Be(100 * t), zIndex: 0 },
                            { transform: Be(-30 * (1 - t)), zIndex: -1 }
                          ]
                        : [
                            { transform: Be(-30 * t), zIndex: -1 },
                            { transform: Be(100 * (1 - t)), zIndex: 0 }
                          ];
                    }
                  }
                });
              return r;
            };
          return (
            fi.use(Oe),
            fi.use(Ie),
            fi.use(je),
            fi.use(He),
            fi.use(Fe),
            fi.use(Ye),
            fi.use(ze),
            fi.use(Re),
            fi.use(We),
            (function(t) {
              function e() {
                n(yn.body, i),
                  Xn.flush(),
                  new Hn(function(e) {
                    return e.forEach(function(e) {
                      for (
                        var r = e.addedNodes,
                          a = e.removedNodes,
                          s = e.target,
                          l = 0;
                        l < r.length;
                        l++
                      )
                        n(r[l], i);
                      for (l = 0; l < a.length; l++) n(a[l], o);
                      t.update(Xt("update", !0, !1, { mutation: !0 }), s, !0);
                    });
                  }).observe(xn, {
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
              Hn
                ? yn.body
                  ? e()
                  : new Hn(function() {
                      yn.body && (this.disconnect(), e());
                    }).observe(xn, { childList: !0, subtree: !0 })
                : lt(function() {
                    n(yn.body, i),
                      qt(xn, "DOMNodeInserted", function(t) {
                        return n(t.target, i);
                      }),
                      qt(xn, "DOMNodeRemoved", function(t) {
                        return n(t.target, o);
                      });
                  });
            })(fi),
            fi
          );
        });
      }.call(e, n(88).setImmediate));
    },
    function(t, e, n) {
      /*! UIkit 3.0.0-beta.34 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */
      !(function(e, n) {
        t.exports = n();
      })(0, function() {
        "use strict";
        function t(n) {
          t.installed || n.icon.add(e);
        }
        var e = {
          album:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1"></rect> <rect x="3" y="4" width="14" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"></rect></svg>',
          ban:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>',
          behance:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"></path> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"></path> <rect x="13" y="4" width="5" height="1.4"></rect></svg>',
          bell:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"></path> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"></path></svg>',
          bold:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"></path></svg>',
          bolt:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path></svg>',
          bookmark:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"></polygon></svg>',
          calendar:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path> <rect width="1" height="3" x="6" y="2"></rect> <rect width="1" height="3" x="13" y="2"></rect></svg>',
          camera:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"></circle> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"></path></svg>',
          cart:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4"></circle> <circle cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg>',
          check:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg>',
          clock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"></path></svg>',
          close:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path></svg>',
          code:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"></polyline></svg>',
          cog:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"></circle> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"></path></svg>',
          comment:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"></path></svg>',
          commenting:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"></polygon> <circle cx="10" cy="8" r="1"></circle> <circle cx="6" cy="8" r="1"></circle> <circle cx="14" cy="8" r="1"></circle></svg>',
          comments:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"></polyline> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"></path></svg>',
          copy:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"></rect> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"></polyline></svg>',
          database:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"></ellipse> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"></path> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"></path> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"></path></svg>',
          desktop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2"></rect> <rect x="11" y="15" width="1" height="2"></rect> <rect x="5" y="16" width="10" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"></rect></svg>',
          download:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"></line></svg>',
          dribbble:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"></path> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"></circle></svg>',
          expand:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3"></polygon> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"></path></svg>',
          facebook:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg>',
          file:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"></rect></svg>',
          flickr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5"></circle> <circle cx="14.5" cy="9.5" r="3.5"></circle></svg>',
          folder:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"></polygon></svg>',
          forward:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"></path></svg>',
          foursquare:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"></path></svg>',
          future:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"></path></svg>',
          github:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"></path></svg>',
          gitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471"></rect> <rect x="7.324" y="4.059" width="1.529" height="15.294"></rect> <rect x="11.148" y="4.059" width="1.527" height="15.294"></rect> <rect x="14.971" y="4.059" width="1.529" height="8.412"></rect></svg>',
          google:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"></path></svg>',
          grid:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3"></rect> <rect x="8" y="2" width="3" height="3"></rect> <rect x="14" y="2" width="3" height="3"></rect> <rect x="2" y="8" width="3" height="3"></rect> <rect x="8" y="8" width="3" height="3"></rect> <rect x="14" y="8" width="3" height="3"></rect> <rect x="2" y="14" width="3" height="3"></rect> <rect x="8" y="14" width="3" height="3"></rect> <rect x="14" y="14" width="3" height="3"></rect></svg>',
          happy:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1"></circle> <circle cx="7" cy="7" r="1"></circle> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"></circle> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"></path></svg>',
          hashtag:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"></path></svg>',
          heart:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path></svg>',
          history:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape"></path></svg>',
          home:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"></polygon> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5"></polygon> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"></polygon></svg>',
          image:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1"></circle> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15"></rect> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"></polyline></svg>',
          info:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"></path> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
          instagram:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path> <circle cx="14.87" cy="5.26" r="1.09"></circle> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg>',
          italic:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"></path></svg>',
          joomla:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"></path> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"></path> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"></path> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"></path></svg>',
          laptop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1"></rect> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"></rect></svg>',
          lifesaver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"></path></svg>',
          link:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>',
          linkedin:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>',
          list:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1"></rect> <rect x="6" y="9" width="12" height="1"></rect> <rect x="6" y="14" width="12" height="1"></rect> <rect x="2" y="4" width="2" height="1"></rect> <rect x="2" y="9" width="2" height="1"></rect> <rect x="2" y="14" width="2" height="1"></rect></svg>',
          location:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg>',
          lock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"></rect> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"></path></svg>',
          mail:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg>',
          menu:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1"></rect> <rect x="2" y="9" width="16" height="1"></rect> <rect x="2" y="14" width="16" height="1"></rect></svg>',
          minus:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1"></rect></svg>',
          more:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="17" cy="10" r="2"></circle></svg>',
          move:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 "></polygon> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 "></polygon> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 "></polygon> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"></rect> <rect x="1" y="11" width="1" height="3"></rect> <rect x="6" y="18" width="3" height="1"></rect></svg>',
          nut:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"></polygon> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"></circle></svg>',
          pagekit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 "></polygon></svg>',
          pencil:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg>',
          phone:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"></path> <circle cx="10.5" cy="16.5" r="0.8"></circle></svg>',
          pinterest:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"></path></svg>',
          play:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"></polygon></svg>',
          plus:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17"></rect> <rect x="1" y="9" width="17" height="1"></rect></svg>',
          pull:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"></line> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"></polyline></svg>',
          push:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"></line> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"></polyline></svg>',
          question:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <circle cx="10.44" cy="14.42" r="1.05"></circle> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"></path></svg>',
          receiver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg>',
          refresh:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"></path> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"></polyline></svg>',
          reply:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"></path></svg>',
          rss:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"></path></svg>',
          search:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
          server:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2"></rect> <rect x="5" y="3" width="1" height="2"></rect> <rect x="7" y="3" width="1" height="2"></rect> <rect x="16" y="3" width="1" height="1"></rect> <rect x="16" y="10" width="1" height="1"></rect> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"></circle> <rect x="3" y="10" width="1" height="2"></rect> <rect x="5" y="10" width="1" height="2"></rect> <rect x="9.5" y="14" width="1" height="2"></rect> <rect x="3" y="17" width="6" height="1"></rect> <rect x="11" y="17" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"></rect> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"></rect></svg>',
          settings:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"></ellipse> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"></ellipse> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"></circle> <rect x="1" y="3" width="3" height="1"></rect> <rect x="10" y="3" width="8" height="1"></rect> <rect x="1" y="9" width="8" height="1"></rect> <rect x="15" y="9" width="3" height="1"></rect> <rect x="1" y="15" width="3" height="1"></rect> <rect x="10" y="15" width="8" height="1"></rect></svg>',
          shrink:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9"></polygon> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"></path></svg>',
          social:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"></line> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"></line> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"></circle></svg>',
          soundcloud:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"></path> <rect x="6" y="6.5" width="1.5" height="8.5"></rect> <rect x="3" y="8" width="1.5" height="7"></rect> <rect y="10" width="1.5" height="5"></rect></svg>',
          star:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"></polygon></svg>',
          strikethrough:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"></path> <rect x="3" y="10" width="15" height="1"></rect></svg>',
          table:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1"></rect> <rect x="1" y="7" width="18" height="1"></rect> <rect x="1" y="11" width="18" height="1"></rect> <rect x="1" y="15" width="18" height="1"></rect></svg>',
          tablet:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"></path> <circle cx="10.5" cy="16.3" r="0.8"></circle></svg>',
          tag:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"></path> <circle cx="14" cy="6" r="1"></circle></svg>',
          thumbnails:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"></rect></svg>',
          trash:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline> <rect x="8" y="7" width="1" height="9"></rect> <rect x="11" y="7" width="1" height="9"></rect> <rect x="2" y="3" width="16" height="1"></rect></svg>',
          tripadvisor:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path></svg>',
          tumblr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"></path></svg>',
          tv:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11"></rect></svg>',
          twitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path></svg>',
          uikit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"></polygon> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"></polygon></svg>',
          unlock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"></rect> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"></path></svg>',
          upload:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 "></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"></line></svg>',
          user:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>',
          users:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"></path></svg>',
          vimeo:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"></path></svg>',
          warning:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"></path></svg>',
          whatsapp:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path></svg>',
          wordpress:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"></path></svg>',
          world:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5"></path> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"></path> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"></path> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"></circle></svg>',
          xing:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"></path> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"></path></svg>',
          yelp:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"></path></svg>',
          youtube:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg>',
          "500px":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"></path> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"></path> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"></path> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"></path></svg>',
          "arrow-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"></line></svg>',
          "arrow-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"></polyline> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"></line></svg>',
          "arrow-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"></polyline> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"></line></svg>',
          "arrow-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line></svg>',
          "chevron-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg>',
          "chevron-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"></polyline></svg>',
          "chevron-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>',
          "chevron-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"></polyline></svg>',
          "cloud-download":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
          "cloud-upload":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
          "credit-card":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"></rect> <rect x="1" y="7" width="18" height="3"></rect></svg>',
          "file-edit":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline></svg>',
          "git-branch":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"></circle> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"></path></svg>',
          "git-fork":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"></circle> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79"></ellipse> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"></path></svg>',
          "github-alt":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"></path></svg>',
          "google-plus":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"></path> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 "></polygon></svg>',
          "minus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
          "more-vertical":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="10" cy="17" r="2"></circle></svg>',
          "paint-bucket":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"></path> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"></path></svg>',
          "phone-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"></path> <circle cx="3.8" cy="10.5" r="0.8"></circle></svg>',
          "play-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"></polygon> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
          "plus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"></line> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
          "quote-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"></path> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"></path></svg>',
          "sign-in":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"></polygon> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"></polygon></svg>',
          "sign-out":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"></polygon> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"></polygon></svg>',
          "tablet-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"></path> <circle cx="3.7" cy="10.5" r="0.8"></circle></svg>',
          "triangle-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12"></polygon></svg>',
          "triangle-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15"></polygon></svg>',
          "triangle-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15"></polygon></svg>',
          "triangle-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13"></polygon></svg>',
          "video-camera":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 "></polygon> <rect x="2" y="5" width="12" height="10"></rect></svg>'
        };
        return (
          "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
        );
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      var i = n(57),
        o = {};
      (o[n(4)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          n(9)(
            Object.prototype,
            "toString",
            function() {
              return "[object " + i(this) + "]";
            },
            !0
          );
    },
    function(t, e, n) {
      var i = n(58),
        o = n(4)("toStringTag"),
        r =
          "Arguments" ==
          i(
            (function() {
              return arguments;
            })()
          ),
        a = function(t, e) {
          try {
            return t[e];
          } catch (t) {}
        };
      t.exports = function(t) {
        var e, n, s;
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" == typeof (n = a((e = Object(t)), o))
              ? n
              : r
                ? i(e)
                : "Object" == (s = i(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : s;
      };
    },
    function(t, e) {
      var n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    function(t, e, n) {
      var i = n(5),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
      t.exports = function(t) {
        return o[t] || (o[t] = {});
      };
    },
    function(t, e, n) {
      t.exports =
        !n(7) &&
        !n(22)(function() {
          return (
            7 !=
            Object.defineProperty(n(61)("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(t, e, n) {
      var i = n(6),
        o = n(5).document,
        r = i(o) && i(o.createElement);
      t.exports = function(t) {
        return r ? o.createElement(t) : {};
      };
    },
    function(t, e, n) {
      var i = n(6);
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
      var i = n(127)(!0);
      n(34)(
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
      var i = n(5),
        o = n(15),
        r = n(10),
        a = n(9),
        s = n(23),
        l = function(t, e, n) {
          var c,
            u,
            h,
            d,
            f = t & l.F,
            p = t & l.G,
            g = t & l.S,
            m = t & l.P,
            v = t & l.B,
            w = p ? i : g ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
            y = p ? o : o[e] || (o[e] = {}),
            x = y.prototype || (y.prototype = {});
          p && (n = e);
          for (c in n)
            (u = !f && w && void 0 !== w[c]),
              (h = (u ? w : n)[c]),
              (d =
                v && u
                  ? s(h, i)
                  : m && "function" == typeof h ? s(Function.call, h) : h),
              w && a(w, c, h, t & l.U),
              y[c] != h && r(y, c, d),
              m && x[c] != h && (x[c] = h);
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
      var i = n(12),
        o = n(131),
        r = n(68),
        a = n(35)("IE_PROTO"),
        s = function() {},
        l = function() {
          var t,
            e = n(61)("iframe"),
            i = r.length;
          for (
            e.style.display = "none",
              n(136).appendChild(e),
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
              ? ((s.prototype = i(t)),
                (n = new s()),
                (s.prototype = null),
                (n[a] = t))
              : (n = l()),
            void 0 === e ? n : o(n, e)
          );
        };
    },
    function(t, e, n) {
      var i = n(132),
        o = n(68);
      t.exports =
        Object.keys ||
        function(t) {
          return i(t, o);
        };
    },
    function(t, e, n) {
      var i = n(32),
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
        var i = n(139),
          o = n(66),
          r = n(9),
          a = n(5),
          s = n(10),
          l = n(16),
          c = n(4),
          u = c("iterator"),
          h = c("toStringTag"),
          d = l.Array,
          f = {
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
          p = o(f),
          g = 0;
        g < p.length;
        g++
      ) {
        var m,
          v = p[g],
          w = f[v],
          y = a[v],
          x = y && y.prototype;
        if (x && (x[u] || s(x, u, d), x[h] || s(x, h, v), (l[v] = d), w))
          for (m in i) x[m] || r(x, m, i[m], !0);
      }
    },
    function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t };
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(11).f,
        o = n(65),
        r = n(72),
        a = n(23),
        s = n(73),
        l = n(74),
        c = n(34),
        u = n(70),
        h = n(145),
        d = n(7),
        f = n(75).fastKey,
        p = n(37),
        g = d ? "_s" : "size",
        m = function(t, e) {
          var n,
            i = f(e);
          if ("F" !== i) return t._i[i];
          for (n = t._f; n; n = n.n) if (n.k == e) return n;
        };
      t.exports = {
        getConstructor: function(t, e, n, c) {
          var u = t(function(t, i) {
            s(t, u, e, "_i"),
              (t._t = e),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[g] = 0),
              void 0 != i && l(i, n, t[c], t);
          });
          return (
            r(u.prototype, {
              clear: function() {
                for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n)
                  (i.r = !0), i.p && (i.p = i.p.n = void 0), delete n[i.i];
                (t._f = t._l = void 0), (t[g] = 0);
              },
              delete: function(t) {
                var n = p(this, e),
                  i = m(n, t);
                if (i) {
                  var o = i.n,
                    r = i.p;
                  delete n._i[i.i],
                    (i.r = !0),
                    r && (r.n = o),
                    o && (o.p = r),
                    n._f == i && (n._f = o),
                    n._l == i && (n._l = r),
                    n[g]--;
                }
                return !!i;
              },
              forEach: function(t) {
                p(this, e);
                for (
                  var n,
                    i = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (i(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function(t) {
                return !!m(p(this, e), t);
              }
            }),
            d &&
              i(u.prototype, "size", {
                get: function() {
                  return p(this, e)[g];
                }
              }),
            u
          );
        },
        def: function(t, e, n) {
          var i,
            o,
            r = m(t, e);
          return (
            r
              ? (r.v = n)
              : ((t._l = r = {
                  i: (o = f(e, !0)),
                  k: e,
                  v: n,
                  p: (i = t._l),
                  n: void 0,
                  r: !1
                }),
                t._f || (t._f = r),
                i && (i.n = r),
                t[g]++,
                "F" !== o && (t._i[o] = r)),
            t
          );
        },
        getEntry: m,
        setStrong: function(t, e, n) {
          c(
            t,
            e,
            function(t, n) {
              (this._t = p(t, e)), (this._k = n), (this._l = void 0);
            },
            function() {
              for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
              return t._t && (t._l = n = n ? n.n : t._t._f)
                ? "keys" == e
                  ? u(0, n.k)
                  : "values" == e ? u(0, n.v) : u(0, [n.k, n.v])
                : ((t._t = void 0), u(1));
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
      var i = n(9);
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
      var i = n(23),
        o = n(142),
        r = n(143),
        a = n(12),
        s = n(67),
        l = n(144),
        c = {},
        u = {},
        e = (t.exports = function(t, e, n, h, d) {
          var f,
            p,
            g,
            m,
            v = d
              ? function() {
                  return t;
                }
              : l(t),
            w = i(n, h, e ? 2 : 1),
            y = 0;
          if ("function" != typeof v) throw TypeError(t + " is not iterable!");
          if (r(v)) {
            for (f = s(t.length); f > y; y++)
              if (
                (m = e ? w(a((p = t[y]))[0], p[1]) : w(t[y])) === c ||
                m === u
              )
                return m;
          } else
            for (g = v.call(t); !(p = g.next()).done; )
              if ((m = o(g, w, p.value, e)) === c || m === u) return m;
        });
      (e.BREAK = c), (e.RETURN = u);
    },
    function(t, e, n) {
      var i = n(21)("meta"),
        o = n(6),
        r = n(8),
        a = n(11).f,
        s = 0,
        l =
          Object.isExtensible ||
          function() {
            return !0;
          },
        c = !n(22)(function() {
          return l(Object.preventExtensions({}));
        }),
        u = function(t) {
          a(t, i, { value: { i: "O" + ++s, w: {} } });
        },
        h = function(t, e) {
          if (!o(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!r(t, i)) {
            if (!l(t)) return "F";
            if (!e) return "E";
            u(t);
          }
          return t[i].i;
        },
        d = function(t, e) {
          if (!r(t, i)) {
            if (!l(t)) return !0;
            if (!e) return !1;
            u(t);
          }
          return t[i].w;
        },
        f = function(t) {
          return c && p.NEED && l(t) && !r(t, i) && u(t), t;
        },
        p = (t.exports = {
          KEY: i,
          NEED: !1,
          fastKey: h,
          getWeak: d,
          onFreeze: f
        });
    },
    function(t, e, n) {
      "use strict";
      var i = n(5),
        o = n(64),
        r = n(9),
        a = n(72),
        s = n(75),
        l = n(74),
        c = n(73),
        u = n(6),
        h = n(22),
        d = n(146),
        f = n(36),
        p = n(147);
      t.exports = function(t, e, n, g, m, v) {
        var w = i[t],
          y = w,
          x = m ? "set" : "add",
          b = y && y.prototype,
          k = {},
          C = function(t) {
            var e = b[t];
            r(
              b,
              t,
              "delete" == t
                ? function(t) {
                    return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                  ? function(t) {
                      return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t);
                    }
                  : "get" == t
                    ? function(t) {
                        return v && !u(t)
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
          "function" == typeof y &&
          (v ||
            (b.forEach &&
              !h(function() {
                new y().entries().next();
              })))
        ) {
          var M = new y(),
            L = M[x](v ? {} : -0, 1) != M,
            E = h(function() {
              M.has(1);
            }),
            D = d(function(t) {
              new y(t);
            }),
            _ =
              !v &&
              h(function() {
                for (var t = new y(), e = 5; e--; ) t[x](e, e);
                return !t.has(-0);
              });
          D ||
            ((y = e(function(e, n) {
              c(e, y, t);
              var i = p(new w(), e, y);
              return void 0 != n && l(n, m, i[x], i), i;
            })),
            (y.prototype = b),
            (b.constructor = y)),
            (E || _) && (C("delete"), C("has"), m && C("get")),
            (_ || L) && C(x),
            v && b.clear && delete b.clear;
        } else
          (y = g.getConstructor(e, t, m, x)), a(y.prototype, n), (s.NEED = !0);
        return (
          f(y, t),
          (k[t] = y),
          o(o.G + o.W + o.F * (y != w), k),
          v || g.setStrong(y, t, m),
          y
        );
      };
    },
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(0),
        r = i(o),
        a = n(40),
        s = i(a),
        l = n(41),
        c = i(l),
        u = n(42),
        h = i(u);
      n(92);
      var d = n(93),
        f = i(d);
      n(126),
        n(151),
        c.default.use(h.default),
        "serviceWorker" in navigator &&
          window.addEventListener("load", function() {
            navigator.serviceWorker
              .register("/sw.js")
              .then(function(t) {}, function(t) {});
          }),
        s.default.render(
          r.default.createElement(f.default, null),
          document.getElementById("root")
        );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
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
        n(89),
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
            return (c[l] = i), s(l), l++;
          }
          function o(t) {
            delete c[t];
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
          function a(t) {
            if (u) setTimeout(a, 0, t);
            else {
              var e = c[t];
              if (e) {
                u = !0;
                try {
                  r(e);
                } finally {
                  o(t), (u = !1);
                }
              }
            }
          }
          if (!t.setImmediate) {
            var s,
              l = 1,
              c = {},
              u = !1,
              h = t.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (d = d && d.setTimeout ? d : t),
              "[object process]" === {}.toString.call(t.process)
                ? (function() {
                    s = function(t) {
                      e.nextTick(function() {
                        a(t);
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
                            a(+n.data.slice(e.length));
                        };
                      t.addEventListener
                        ? t.addEventListener("message", n, !1)
                        : t.attachEvent("onmessage", n),
                        (s = function(n) {
                          t.postMessage(e + n, "*");
                        });
                    })()
                  : t.MessageChannel
                    ? (function() {
                        var t = new MessageChannel();
                        (t.port1.onmessage = function(t) {
                          a(t.data);
                        }),
                          (s = function(e) {
                            t.port2.postMessage(e);
                          });
                      })()
                    : h && "onreadystatechange" in h.createElement("script")
                      ? (function() {
                          var t = h.documentElement;
                          s = function(e) {
                            var n = h.createElement("script");
                            (n.onreadystatechange = function() {
                              a(e),
                                (n.onreadystatechange = null),
                                t.removeChild(n),
                                (n = null);
                            }),
                              t.appendChild(n);
                          };
                        })()
                      : (function() {
                          s = function(t) {
                            setTimeout(a, 0, t);
                          };
                        })(),
              (d.setImmediate = i),
              (d.clearImmediate = o);
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(e, n(90), n(91)));
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
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout)
          return (u = setTimeout), setTimeout(t, 0);
        try {
          return u(t, 0);
        } catch (e) {
          try {
            return u.call(null, t, 0);
          } catch (e) {
            return u.call(this, t, 0);
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
      function a() {
        g &&
          f &&
          ((g = !1), f.length ? (p = f.concat(p)) : (m = -1), p.length && s());
      }
      function s() {
        if (!g) {
          var t = o(a);
          g = !0;
          for (var e = p.length; e; ) {
            for (f = p, p = []; ++m < e; ) f && f[m].run();
            (m = -1), (e = p.length);
          }
          (f = null), (g = !1), r(t);
        }
      }
      function l(t, e) {
        (this.fun = t), (this.array = e);
      }
      function c() {}
      var u,
        h,
        d = (t.exports = {});
      !(function() {
        try {
          u = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          u = n;
        }
        try {
          h = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          h = i;
        }
      })();
      var f,
        p = [],
        g = !1,
        m = -1;
      (d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || g || o(s);
      }),
        (l.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (d.title = "browser"),
        (d.browser = !0),
        (d.env = {}),
        (d.argv = []),
        (d.version = ""),
        (d.versions = {}),
        (d.on = c),
        (d.addListener = c),
        (d.once = c),
        (d.off = c),
        (d.removeListener = c),
        (d.removeAllListeners = c),
        (d.emit = c),
        (d.prependListener = c),
        (d.prependOnceListener = c),
        (d.listeners = function(t) {
          return [];
        }),
        (d.binding = function(t) {
          throw new Error("process.binding is not supported");
        }),
        (d.cwd = function() {
          return "/";
        }),
        (d.chdir = function(t) {
          throw new Error("process.chdir is not supported");
        }),
        (d.umask = function() {
          return 0;
        });
    },
    function(t, e) {},
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        l = n(0),
        c = i(l),
        u = n(43),
        h = n(117),
        d = (i(h), n(125)),
        f = i(d),
        p = (function(t) {
          function e() {
            return (
              o(this, e),
              r(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            a(e, t),
            s(e, [
              {
                key: "render",
                value: function() {
                  return c.default.createElement(
                    u.BrowserRouter,
                    null,
                    c.default.createElement(
                      "div",
                      null,
                      c.default.createElement(f.default, null)
                    )
                  );
                }
              }
            ]),
            e
          );
        })(c.default.Component);
      e.default = p;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        l = n(0),
        c = i(l),
        u = n(30),
        h = (i(u), n(118)),
        d = i(h),
        f = n(119),
        p = i(f),
        g = (function(t) {
          function e(t) {
            return (
              o(this, e),
              r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            );
          }
          return (
            a(e, t),
            s(e, [
              {
                key: "render",
                value: function() {
                  return c.default.createElement(
                    "div",
                    { className: "uk-section uk-padding" },
                    c.default.createElement(
                      "div",
                      { className: "uk-container" },
                      c.default.createElement(
                        "div",
                        { "data-uk-grid": !0 },
                        c.default.createElement(d.default, null),
                        c.default.createElement(p.default, null)
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(c.default.Component);
      e.default = g;
    },
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        return a.default.createElement(
          "div",
          { className: "uk-width-1-2@m hero" },
          a.default.createElement(
            "a",
            { className: "uk-logo", href: "index.html" },
            a.default.createElement("img", {
              className: "brand-logo",
              src: l.default,
              alt: "FindCare"
            })
          ),
          a.default.createElement(
            "h1",
            { className: "herot uk-light uk-position-medium" },
            "Register or Book your appointment now."
          )
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        a = i(r),
        s = n(30),
        l = i(s);
      e.default = o;
    },
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        return a.default.createElement(
          "div",
          { className: "uk-width-1-2@m" },
          a.default.createElement(
            "div",
            {
              className:
                "mform uk-card uk-card-small centre uk-card-default uk-card-body"
            },
            a.default.createElement(
              "div",
              {
                className: "uk-hidden",
                "uk-switcher": "animation: uk-animation-fade"
              },
              a.default.createElement(
                "button",
                {
                  className: "uk-button uk-width-1-1 uk-button-default",
                  type: "button"
                },
                "Item"
              ),
              a.default.createElement(
                "button",
                {
                  className: "uk-button uk-width-1-1 uk-button-default",
                  type: "button"
                },
                "Item"
              ),
              a.default.createElement(
                "button",
                {
                  className: "uk-button uk-width-1-1 uk-button-default",
                  type: "button"
                },
                "Item"
              )
            ),
            a.default.createElement(
              "ul",
              { className: "uk-switcher" },
              a.default.createElement(u.default, null)
            )
          )
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        a = i(r),
        s = n(120),
        l = (i(s), n(121)),
        c = (i(l), n(122)),
        u = i(c);
      e.default = o;
    },
    function(t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function r(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        s = n(0),
        l = (function(t) {
          return t && t.__esModule ? t : { default: t };
        })(s),
        c = (function(t) {
          function e() {
            return (
              i(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            r(e, t),
            a(e, [
              {
                key: "render",
                value: function() {
                  return l.default.createElement(
                    "li",
                    null,
                    l.default.createElement("h2", null, "Login"),
                    l.default.createElement(
                      "p",
                      { className: "uk-text-meta" },
                      "Login to book and view your profile."
                    ),
                    l.default.createElement("hr", {
                      className: "uk-margin-small"
                    }),
                    l.default.createElement(
                      "form",
                      { className: "uk-form-stacked" },
                      l.default.createElement(
                        "div",
                        { id: "phone", className: "uk-margin-small" },
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Phone Number"
                        ),
                        l.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          l.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: phone"
                          }),
                          l.default.createElement("input", {
                            id: "phone",
                            className: "uk-input",
                            type: "text"
                          })
                        )
                      ),
                      l.default.createElement(
                        "div",
                        {
                          id: "otp",
                          className: "uk-margin-small uk-margin-remove-top"
                        },
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Password"
                        ),
                        l.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          l.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: hashtag"
                          }),
                          l.default.createElement("input", {
                            className: "uk-input",
                            type: "text",
                            autofocus: !0
                          })
                        )
                      ),
                      l.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        l.default.createElement(
                          "button",
                          {
                            className:
                              "uk-button reg uk-button-primary uk-width-1-1"
                          },
                          "Login and Book"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(l.default.Component);
      e.default = c;
    },
    function(t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function r(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        s = n(0),
        l = (function(t) {
          return t && t.__esModule ? t : { default: t };
        })(s),
        c = (function(t) {
          function e() {
            return (
              i(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            r(e, t),
            a(e, [
              {
                key: "render",
                value: function() {
                  return l.default.createElement(
                    "li",
                    null,
                    l.default.createElement("h2", null, "Register"),
                    l.default.createElement(
                      "p",
                      { className: "uk-text-meta" },
                      "Registration allows you to book appointments."
                    ),
                    l.default.createElement("hr", {
                      className: "uk-margin-small"
                    }),
                    l.default.createElement(
                      "form",
                      { className: "uk-form-stacked" },
                      l.default.createElement(
                        "div",
                        { id: "phone", className: "uk-margin-small" },
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Phone Number"
                        ),
                        l.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          l.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: phone"
                          }),
                          l.default.createElement("input", {
                            id: "phone",
                            className: "uk-input",
                            type: "text"
                          })
                        ),
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label uk-text-right",
                            htmlFor: "form-stacked-text"
                          },
                          "Enter OTP Below"
                        )
                      ),
                      l.default.createElement(
                        "div",
                        {
                          id: "otp",
                          className: "uk-margin-small uk-margin-remove-top"
                        },
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "OTP"
                        ),
                        l.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          l.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: hashtag"
                          }),
                          l.default.createElement("input", {
                            className: "uk-input",
                            type: "text"
                          })
                        ),
                        l.default.createElement(
                          "label",
                          {
                            className: "uk-form-label uk-text-right",
                            htmlFor: "form-stacked-text"
                          },
                          l.default.createElement(
                            "a",
                            { className: "uk-link-reset", href: "" },
                            "Resend?"
                          )
                        )
                      ),
                      l.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        l.default.createElement(
                          "button",
                          {
                            className:
                              "uk-button reg uk-button-primary uk-width-1-1"
                          },
                          "Register"
                        )
                      ),
                      l.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        l.default.createElement(
                          "button",
                          {
                            className:
                              "uk-button uk-hidden nreg uk-button-primary uk-width-1-1"
                          },
                          "Book Appointment"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(l.default.Component);
      e.default = c;
    },
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        l = n(0),
        c = i(l),
        u = n(123),
        h = i(u);
      n(124);
      var d = n(41),
        f = (i(d),
        (function(t) {
          function e() {
            return (
              o(this, e),
              r(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            a(e, t),
            s(e, [
              {
                key: "componentDidMount",
                value: function() {
                  (0, h.default)("#datepicker", {
                    enableTime: !1,
                    minDate: "today",
                    dateFormat: "d/m/Y",
                    maxDate: new Date().fp_incr(60)
                  }),
                    (0, h.default)("#timepicker", {
                      enableTime: !0,
                      noCalendar: !0,
                      enableSeconds: !1,
                      time_24hr: !1,
                      dateFormat: "H:i",
                      defaultHour: 12,
                      defaultMinute: 0
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return c.default.createElement(
                    "li",
                    null,
                    c.default.createElement(
                      "h2",
                      {
                        className:
                          "uk-padding-small uk-padding-remove-bottom uk-padding-remove-left"
                      },
                      "Book Appointment"
                    ),
                    c.default.createElement(
                      "p",
                      { className: "uk-text-meta" },
                      "Book appponment to any doctor."
                    ),
                    c.default.createElement("hr", {
                      className: "uk-margin-small"
                    }),
                    c.default.createElement(
                      "form",
                      { className: "uk-form-stacked" },
                      c.default.createElement(
                        "div",
                        { id: "phone", className: "uk-margin-small" },
                        c.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Phone Number"
                        ),
                        c.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          c.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: phone"
                          }),
                          c.default.createElement("input", {
                            id: "phone",
                            className: "uk-input",
                            type: "text",
                            placeholder: "eg: 9961464050"
                          })
                        )
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-margin" },
                        c.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Select Department"
                        ),
                        c.default.createElement("select", {
                          id: "sectionSel",
                          className: "uk-select"
                        })
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-margin" },
                        c.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Select Doctor"
                        ),
                        c.default.createElement("select", {
                          id: "serviceSel",
                          className: "uk-select"
                        })
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        c.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Date"
                        ),
                        c.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          c.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: calendar"
                          }),
                          c.default.createElement("input", {
                            className: "uk-input",
                            id: "datepicker",
                            placeholder: "dd-mm-yyyy"
                          })
                        )
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        c.default.createElement(
                          "label",
                          {
                            className: "uk-form-label",
                            htmlFor: "form-stacked-text"
                          },
                          "Time"
                        ),
                        c.default.createElement(
                          "div",
                          { className: "uk-inline uk-width-1-1" },
                          c.default.createElement("span", {
                            className: "uk-form-icon",
                            "uk-icon": "icon: clock"
                          }),
                          c.default.createElement("input", {
                            className: "uk-input",
                            id: "timepicker",
                            placeholder: "HH:mm"
                          })
                        )
                      ),
                      c.default.createElement("hr", null),
                      c.default.createElement(
                        "div",
                        { className: "uk-margin-small" },
                        c.default.createElement(
                          "button",
                          {
                            className:
                              "uk-button reg uk-button-primary uk-width-1-1",
                            "uk-switcher-item": "next"
                          },
                          "Continue"
                        )
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-child-width-1-2", "data-uk-grid": !0 },
                        c.default.createElement(
                          "div",
                          null,
                          c.default.createElement(
                            "button",
                            {
                              className:
                                "uk-button-link nreg uk-button-primary uk-width-1-1",
                              "uk-switcher-item": "next"
                            },
                            "Login"
                          )
                        ),
                        c.default.createElement(
                          "div",
                          null,
                          c.default.createElement(
                            "button",
                            {
                              className:
                                "uk-button-link nreg uk-button-primary uk-width-1-1",
                              "uk-switcher-item": "2"
                            },
                            "Register"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(c.default.Component));
      e.default = f;
    },
    function(t, e, n) {
      /* flatpickr v4.1.0, @license MIT */
      !(function(e, n) {
        t.exports = n();
      })(0, function() {
        "use strict";
        function t(t, e, n) {
          return !1 !== n
            ? new Date(t.getTime()).setHours(0, 0, 0, 0) -
                new Date(e.getTime()).setHours(0, 0, 0, 0)
            : t.getTime() - e.getTime();
        }
        function e(t, e, n) {
          void 0 === n && (n = !1);
          var i;
          return function() {
            var o = this,
              r = arguments;
            null !== i && clearTimeout(i),
              (i = window.setTimeout(function() {
                (i = null), n || t.apply(o, r);
              }, e)),
              n && !i && t.apply(o, r);
          };
        }
        function n(t) {
          return (t.wheelDelta || -t.deltaY) >= 0 ? 1 : -1;
        }
        function i(t, e, n) {
          if (!0 === n) return t.classList.add(e);
          t.classList.remove(e);
        }
        function o(t, e, n) {
          var i = window.document.createElement(t);
          return (
            (e = e || ""),
            (n = n || ""),
            (i.className = e),
            void 0 !== n && (i.textContent = n),
            i
          );
        }
        function r(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        function a(t, e) {
          return e(t) ? t : t.parentNode ? a(t.parentNode, e) : void 0;
        }
        function s(t) {
          var e = o("div", "numInputWrapper"),
            n = o("input", "numInput " + t),
            i = o("span", "arrowUp"),
            r = o("span", "arrowDown");
          return (
            (n.type = "text"),
            (n.pattern = "\\d*"),
            e.appendChild(n),
            e.appendChild(i),
            e.appendChild(r),
            e
          );
        }
        function l(l, c) {
          function d() {
            $t.utils = {
              getDaysInMonth: function(t, e) {
                return (
                  void 0 === t && (t = $t.currentMonth),
                  void 0 === e && (e = $t.currentYear),
                  1 === t && ((e % 4 == 0 && e % 100 != 0) || e % 400 == 0)
                    ? 29
                    : $t.l10n.daysInMonth[t]
                );
              }
            };
          }
          function p(t) {
            return t.bind($t);
          }
          function g(t) {
            $t.config.noCalendar &&
              !$t.selectedDates.length &&
              ($t.setDate(
                new Date().setHours(
                  $t.config.defaultHour,
                  $t.config.defaultMinute,
                  $t.config.defaultSeconds
                ),
                !1
              ),
              L(),
              Dt()),
              Tt(t),
              0 !== $t.selectedDates.length &&
                (!$t.minDateHasTime ||
                "input" !== t.type ||
                t.target.value.length >= 2
                  ? (L(), Dt())
                  : setTimeout(function() {
                      L(), Dt();
                    }, 1e3));
          }
          function y(t, e) {
            return t % 12 + 12 * v("PM" === e);
          }
          function M(t) {
            switch (t % 24) {
              case 0:
              case 12:
                return 12;
              default:
                return t % 12;
            }
          }
          function L() {
            if (void 0 !== $t.hourElement && void 0 !== $t.minuteElement) {
              var e = (parseInt($t.hourElement.value.slice(-2), 10) || 0) % 24,
                n = (parseInt($t.minuteElement.value, 10) || 0) % 60,
                i =
                  void 0 !== $t.secondElement
                    ? (parseInt($t.secondElement.value, 10) || 0) % 60
                    : 0;
              void 0 !== $t.amPM && (e = y(e, $t.amPM.textContent)),
                $t.config.minDate &&
                  $t.minDateHasTime &&
                  $t.latestSelectedDateObj &&
                  0 === t($t.latestSelectedDateObj, $t.config.minDate) &&
                  (e = Math.max(e, $t.config.minDate.getHours())) ===
                    $t.config.minDate.getHours() &&
                  (n = Math.max(n, $t.config.minDate.getMinutes())),
                $t.config.maxDate &&
                  $t.maxDateHasTime &&
                  $t.latestSelectedDateObj &&
                  0 === t($t.latestSelectedDateObj, $t.config.maxDate) &&
                  (e = Math.min(e, $t.config.maxDate.getHours())) ===
                    $t.config.maxDate.getHours() &&
                  (n = Math.min(n, $t.config.maxDate.getMinutes())),
                D(e, n, i);
            }
          }
          function E(t) {
            var e = t || $t.latestSelectedDateObj;
            e && D(e.getHours(), e.getMinutes(), e.getSeconds());
          }
          function D(t, e, n) {
            void 0 !== $t.latestSelectedDateObj &&
              $t.latestSelectedDateObj.setHours(t % 24, e, n || 0, 0),
              $t.hourElement &&
                $t.minuteElement &&
                !$t.isMobile &&
                (($t.hourElement.value = m(
                  $t.config.time_24hr ? t : (12 + t) % 12 + 12 * v(t % 12 == 0)
                )),
                ($t.minuteElement.value = m(e)),
                void 0 !== $t.amPM &&
                  ($t.amPM.textContent = t >= 12 ? "PM" : "AM"),
                void 0 !== $t.secondElement && ($t.secondElement.value = m(n)));
          }
          function _(t) {
            var e = parseInt(t.target.value) + (t.delta || 0);
            (4 !== e.toString().length && "Enter" !== t.key) ||
              ($t.currentYearElement.blur(),
              /[^\d]/.test(e.toString()) || tt(e));
          }
          function N(t, e, n) {
            return e instanceof Array
              ? e.forEach(function(e) {
                  return N(t, e, n);
                })
              : t instanceof Array
                ? t.forEach(function(t) {
                    return N(t, e, n);
                  })
                : (t.addEventListener(e, n),
                  void $t._handlers.push({ element: t, event: e, handler: n }));
          }
          function T(t) {
            return function(e) {
              return 1 === e.which && t(e);
            };
          }
          function $() {
            kt("onChange");
          }
          function S() {
            if (
              ($t.config.wrap &&
                ["open", "close", "toggle", "clear"].forEach(function(t) {
                  Array.prototype.forEach.call(
                    $t.element.querySelectorAll("[data-" + t + "]"),
                    function(e) {
                      return N(e, "click", $t[t]);
                    }
                  );
                }),
              $t.isMobile)
            )
              return void xt();
            var t = e(ot, 50);
            if (
              (($t._debouncedChange = e($, 300)),
              "range" === $t.config.mode &&
                $t.daysContainer &&
                N($t.daysContainer, "mouseover", function(t) {
                  return it(t.target);
                }),
              N(window.document.body, "keydown", nt),
              $t.config.static || N($t._input, "keydown", nt),
              $t.config.inline || $t.config.static || N(window, "resize", t),
              void 0 !== window.ontouchstart &&
                N(window.document.body, "touchstart", Q),
              N(window.document.body, "mousedown", T(Q)),
              N($t._input, "blur", Q),
              !0 === $t.config.clickOpens &&
                (N($t._input, "focus", $t.open),
                N($t._input, "mousedown", T($t.open))),
              void 0 !== $t.daysContainer &&
                ($t.monthNav.addEventListener("wheel", function(t) {
                  return t.preventDefault();
                }),
                N($t.monthNav, "wheel", e(_t, 10)),
                N($t.monthNav, "mousedown", T(Nt)),
                N($t.monthNav, ["keyup", "increment"], _),
                N($t.daysContainer, "mousedown", T(ht)),
                $t.config.animate &&
                  (N(
                    $t.daysContainer,
                    ["webkitAnimationEnd", "animationend"],
                    I
                  ),
                  N($t.monthNav, ["webkitAnimationEnd", "animationend"], B))),
              void 0 !== $t.timeContainer &&
                void 0 !== $t.minuteElement &&
                void 0 !== $t.hourElement)
            ) {
              var n = function(t) {
                return t.target.select();
              };
              N($t.timeContainer, ["wheel", "input", "increment"], g),
                N($t.timeContainer, "mousedown", T(P)),
                N(
                  $t.timeContainer,
                  ["wheel", "increment"],
                  $t._debouncedChange
                ),
                N($t.timeContainer, "input", $),
                N([$t.hourElement, $t.minuteElement], ["focus", "click"], n),
                void 0 !== $t.secondElement &&
                  N($t.secondElement, "focus", function() {
                    return $t.secondElement && $t.secondElement.select();
                  }),
                void 0 !== $t.amPM &&
                  N(
                    $t.amPM,
                    "mousedown",
                    T(function(t) {
                      g(t), $();
                    })
                  );
            }
          }
          function O() {
            $t._animationLoop.forEach(function(t) {
              return t();
            }),
              ($t._animationLoop = []);
          }
          function I(t) {
            if ($t.daysContainer && $t.daysContainer.childNodes.length > 1)
              switch (t.animationName) {
                case "fpSlideLeft":
                  $t.daysContainer.lastChild &&
                    $t.daysContainer.lastChild.classList.remove("slideLeftNew"),
                    $t.daysContainer.removeChild($t.daysContainer.firstChild),
                    ($t.days = $t.daysContainer.firstChild),
                    O();
                  break;
                case "fpSlideRight":
                  $t.daysContainer.firstChild &&
                    $t.daysContainer.firstChild.classList.remove(
                      "slideRightNew"
                    ),
                    $t.daysContainer.removeChild($t.daysContainer.lastChild),
                    ($t.days = $t.daysContainer.firstChild),
                    O();
              }
          }
          function B(t) {
            switch (t.animationName) {
              case "fpSlideLeftNew":
              case "fpSlideRightNew":
                $t.navigationCurrentMonth.classList.remove("slideLeftNew"),
                  $t.navigationCurrentMonth.classList.remove("slideRightNew");
                for (
                  var e = $t.navigationCurrentMonth;
                  e.nextSibling && /curr/.test(e.nextSibling.className);

                )
                  $t.monthNav.removeChild(e.nextSibling);
                for (
                  ;
                  e.previousSibling && /curr/.test(e.previousSibling.className);

                )
                  $t.monthNav.removeChild(e.previousSibling);
                $t.oldCurMonth = void 0;
            }
          }
          function A(t) {
            var e =
              void 0 !== t
                ? wt(t)
                : $t.latestSelectedDateObj ||
                  ($t.config.minDate && $t.config.minDate > $t.now
                    ? $t.config.minDate
                    : $t.config.maxDate && $t.config.maxDate < $t.now
                      ? $t.config.maxDate
                      : $t.now);
            try {
              void 0 !== e &&
                (($t.currentYear = e.getFullYear()),
                ($t.currentMonth = e.getMonth()));
            } catch (t) {}
            $t.redraw();
          }
          function P(t) {
            ~t.target.className.indexOf("arrow") &&
              j(t, t.target.classList.contains("arrowUp") ? 1 : -1);
          }
          function j(t, e, n) {
            var i = t && t.target,
              o = n || (i && i.parentNode && i.parentNode.firstChild),
              r = Ct("increment");
            (r.delta = e), o && o.dispatchEvent(r);
          }
          function H() {
            var t = window.document.createDocumentFragment();
            if (
              (($t.calendarContainer = o("div", "flatpickr-calendar")),
              ($t.calendarContainer.tabIndex = -1),
              !$t.config.noCalendar)
            ) {
              if (
                (t.appendChild(W()),
                ($t.innerContainer = o("div", "flatpickr-innerContainer")),
                $t.config.weekNumbers)
              ) {
                var e = U(),
                  n = e.weekWrapper,
                  r = e.weekNumbers;
                $t.innerContainer.appendChild(n),
                  ($t.weekNumbers = r),
                  ($t.weekWrapper = n);
              }
              ($t.rContainer = o("div", "flatpickr-rContainer")),
                $t.rContainer.appendChild(V()),
                $t.daysContainer ||
                  (($t.daysContainer = o("div", "flatpickr-days")),
                  ($t.daysContainer.tabIndex = -1)),
                R(),
                $t.rContainer.appendChild($t.daysContainer),
                $t.innerContainer.appendChild($t.rContainer),
                t.appendChild($t.innerContainer);
            }
            $t.config.enableTime && t.appendChild(Z()),
              i($t.calendarContainer, "rangeMode", "range" === $t.config.mode),
              i($t.calendarContainer, "animate", $t.config.animate),
              $t.calendarContainer.appendChild(t);
            var a =
              void 0 !== $t.config.appendTo && $t.config.appendTo.nodeType;
            if (
              ($t.config.inline || $t.config.static) &&
              ($t.calendarContainer.classList.add(
                $t.config.inline ? "inline" : "static"
              ),
              $t.config.inline &&
                (!a && $t.element.parentNode
                  ? $t.element.parentNode.insertBefore(
                      $t.calendarContainer,
                      $t._input.nextSibling
                    )
                  : void 0 !== $t.config.appendTo &&
                    $t.config.appendTo.appendChild($t.calendarContainer)),
              $t.config.static)
            ) {
              var s = o("div", "flatpickr-wrapper");
              $t.element.parentNode &&
                $t.element.parentNode.insertBefore(s, $t.element),
                s.appendChild($t.element),
                $t.altInput && s.appendChild($t.altInput),
                s.appendChild($t.calendarContainer);
            }
            $t.config.static ||
              $t.config.inline ||
              (void 0 !== $t.config.appendTo
                ? $t.config.appendTo
                : window.document.body
              ).appendChild($t.calendarContainer);
          }
          function F(e, n, r, a) {
            var s = et(n, !0),
              l = o("span", "flatpickr-day " + e, n.getDate().toString());
            return (
              (l.dateObj = n),
              (l.$i = a),
              l.setAttribute(
                "aria-label",
                $t.formatDate(n, $t.config.ariaDateFormat)
              ),
              0 === t(n, $t.now) &&
                (($t.todayDateElem = l), l.classList.add("today")),
              s
                ? ((l.tabIndex = -1),
                  Mt(n) &&
                    (l.classList.add("selected"),
                    ($t.selectedDateElem = l),
                    "range" === $t.config.mode &&
                      (i(
                        l,
                        "startRange",
                        $t.selectedDates[0] && 0 === t(n, $t.selectedDates[0])
                      ),
                      i(
                        l,
                        "endRange",
                        $t.selectedDates[1] && 0 === t(n, $t.selectedDates[1])
                      ))))
                : (l.classList.add("disabled"),
                  $t.selectedDates[0] &&
                  $t.minRangeDate &&
                  n > $t.minRangeDate &&
                  n < $t.selectedDates[0]
                    ? ($t.minRangeDate = n)
                    : $t.selectedDates[0] &&
                      $t.maxRangeDate &&
                      n < $t.maxRangeDate &&
                      n > $t.selectedDates[0] &&
                      ($t.maxRangeDate = n)),
              "range" === $t.config.mode &&
                (Lt(n) && !Mt(n) && l.classList.add("inRange"),
                1 === $t.selectedDates.length &&
                  void 0 !== $t.minRangeDate &&
                  void 0 !== $t.maxRangeDate &&
                  (n < $t.minRangeDate || n > $t.maxRangeDate) &&
                  l.classList.add("notAllowed")),
              $t.weekNumbers &&
                "prevMonthDay" !== e &&
                r % 7 == 1 &&
                $t.weekNumbers.insertAdjacentHTML(
                  "beforeend",
                  "<span class='disabled flatpickr-day'>" +
                    $t.config.getWeek(n) +
                    "</span>"
                ),
              kt("onDayCreate", l),
              l
            );
          }
          function Y(t, e) {
            var n = t + e || 0,
              i =
                void 0 !== t
                  ? $t.days.childNodes[n]
                  : $t.selectedDateElem ||
                    $t.todayDateElem ||
                    $t.days.childNodes[0],
              o = function() {
                (i = i || $t.days.childNodes[n]),
                  i.focus(),
                  "range" === $t.config.mode && it(i);
              };
            if (void 0 === i && 0 !== e)
              return (
                e > 0
                  ? ($t.changeMonth(1, !0, void 0, !0), (n %= 42))
                  : e < 0 && ($t.changeMonth(-1, !0, void 0, !0), (n += 42)),
                z(o)
              );
            o();
          }
          function z(t) {
            !0 === $t.config.animate ? $t._animationLoop.push(t) : t();
          }
          function R(t) {
            if (void 0 !== $t.daysContainer) {
              var e =
                  (new Date($t.currentYear, $t.currentMonth, 1).getDay() -
                    $t.l10n.firstDayOfWeek +
                    7) %
                  7,
                n = "range" === $t.config.mode,
                i = $t.utils.getDaysInMonth(($t.currentMonth - 1 + 12) % 12),
                a = $t.utils.getDaysInMonth(),
                s = window.document.createDocumentFragment(),
                l = i + 1 - e,
                c = 0;
              for (
                $t.weekNumbers &&
                  $t.weekNumbers.firstChild &&
                  ($t.weekNumbers.textContent = ""),
                  n &&
                    (($t.minRangeDate = new Date(
                      $t.currentYear,
                      $t.currentMonth - 1,
                      l
                    )),
                    ($t.maxRangeDate = new Date(
                      $t.currentYear,
                      $t.currentMonth + 1,
                      (42 - e) % a
                    )));
                l <= i;
                l++, c++
              )
                s.appendChild(
                  F(
                    "prevMonthDay",
                    new Date($t.currentYear, $t.currentMonth - 1, l),
                    l,
                    c
                  )
                );
              for (l = 1; l <= a; l++, c++)
                s.appendChild(
                  F("", new Date($t.currentYear, $t.currentMonth, l), l, c)
                );
              for (var u = a + 1; u <= 42 - e; u++, c++)
                s.appendChild(
                  F(
                    "nextMonthDay",
                    new Date($t.currentYear, $t.currentMonth + 1, u % a),
                    u,
                    c
                  )
                );
              n && 1 === $t.selectedDates.length && s.childNodes[0]
                ? (($t._hidePrevMonthArrow =
                    $t._hidePrevMonthArrow ||
                    (!!$t.minRangeDate &&
                      $t.minRangeDate > s.childNodes[0].dateObj)),
                  ($t._hideNextMonthArrow =
                    $t._hideNextMonthArrow ||
                    (!!$t.maxRangeDate &&
                      $t.maxRangeDate <
                        new Date($t.currentYear, $t.currentMonth + 1, 1))))
                : Et();
              var h = o("div", "dayContainer");
              if ((h.appendChild(s), $t.config.animate && void 0 !== t))
                for (; $t.daysContainer.childNodes.length > 1; )
                  $t.daysContainer.removeChild($t.daysContainer.firstChild);
              else r($t.daysContainer);
              t && t >= 0
                ? $t.daysContainer.appendChild(h)
                : $t.daysContainer.insertBefore(h, $t.daysContainer.firstChild),
                ($t.days = $t.daysContainer.childNodes[0]);
            }
          }
          function W() {
            var t = window.document.createDocumentFragment();
            ($t.monthNav = o("div", "flatpickr-month")),
              ($t.prevMonthNav = o("span", "flatpickr-prev-month")),
              ($t.prevMonthNav.innerHTML = $t.config.prevArrow),
              ($t.currentMonthElement = o("span", "cur-month")),
              ($t.currentMonthElement.title = $t.l10n.scrollTitle);
            var e = s("cur-year");
            return (
              ($t.currentYearElement = e.childNodes[0]),
              ($t.currentYearElement.title = $t.l10n.scrollTitle),
              $t.config.minDate &&
                ($t.currentYearElement.min = $t.config.minDate
                  .getFullYear()
                  .toString()),
              $t.config.maxDate &&
                (($t.currentYearElement.max = $t.config.maxDate
                  .getFullYear()
                  .toString()),
                ($t.currentYearElement.disabled =
                  !!$t.config.minDate &&
                  $t.config.minDate.getFullYear() ===
                    $t.config.maxDate.getFullYear())),
              ($t.nextMonthNav = o("span", "flatpickr-next-month")),
              ($t.nextMonthNav.innerHTML = $t.config.nextArrow),
              ($t.navigationCurrentMonth = o("div", "flatpickr-current-month")),
              $t.navigationCurrentMonth.appendChild($t.currentMonthElement),
              $t.navigationCurrentMonth.appendChild(e),
              t.appendChild($t.prevMonthNav),
              t.appendChild($t.navigationCurrentMonth),
              t.appendChild($t.nextMonthNav),
              $t.monthNav.appendChild(t),
              Object.defineProperty($t, "_hidePrevMonthArrow", {
                get: function() {
                  return $t.__hidePrevMonthArrow;
                },
                set: function(t) {
                  $t.__hidePrevMonthArrow !== t &&
                    ($t.prevMonthNav.style.display = t ? "none" : "block"),
                    ($t.__hidePrevMonthArrow = t);
                }
              }),
              Object.defineProperty($t, "_hideNextMonthArrow", {
                get: function() {
                  return $t.__hideNextMonthArrow;
                },
                set: function(t) {
                  $t.__hideNextMonthArrow !== t &&
                    ($t.nextMonthNav.style.display = t ? "none" : "block"),
                    ($t.__hideNextMonthArrow = t);
                }
              }),
              Et(),
              $t.monthNav
            );
          }
          function Z() {
            $t.calendarContainer.classList.add("hasTime"),
              $t.config.noCalendar &&
                $t.calendarContainer.classList.add("noCalendar"),
              ($t.timeContainer = o("div", "flatpickr-time")),
              ($t.timeContainer.tabIndex = -1);
            var t = o("span", "flatpickr-time-separator", ":"),
              e = s("flatpickr-hour");
            $t.hourElement = e.childNodes[0];
            var n = s("flatpickr-minute");
            if (
              (($t.minuteElement = n.childNodes[0]),
              ($t.hourElement.tabIndex = $t.minuteElement.tabIndex = -1),
              ($t.hourElement.value = m(
                $t.latestSelectedDateObj
                  ? $t.latestSelectedDateObj.getHours()
                  : $t.config.time_24hr
                    ? $t.config.defaultHour
                    : M($t.config.defaultHour)
              )),
              ($t.minuteElement.value = m(
                $t.latestSelectedDateObj
                  ? $t.latestSelectedDateObj.getMinutes()
                  : $t.config.defaultMinute
              )),
              ($t.hourElement.step = $t.config.hourIncrement.toString()),
              ($t.minuteElement.step = $t.config.minuteIncrement.toString()),
              ($t.hourElement.min = $t.config.time_24hr ? "0" : "1"),
              ($t.hourElement.max = $t.config.time_24hr ? "23" : "12"),
              ($t.minuteElement.min = "0"),
              ($t.minuteElement.max = "59"),
              ($t.hourElement.title = $t.minuteElement.title =
                $t.l10n.scrollTitle),
              $t.timeContainer.appendChild(e),
              $t.timeContainer.appendChild(t),
              $t.timeContainer.appendChild(n),
              $t.config.time_24hr && $t.timeContainer.classList.add("time24hr"),
              $t.config.enableSeconds)
            ) {
              $t.timeContainer.classList.add("hasSeconds");
              var i = s("flatpickr-second");
              ($t.secondElement = i.childNodes[0]),
                ($t.secondElement.value = m(
                  $t.latestSelectedDateObj
                    ? $t.latestSelectedDateObj.getSeconds()
                    : $t.config.defaultSeconds
                )),
                ($t.secondElement.step = $t.minuteElement.step),
                ($t.secondElement.min = $t.minuteElement.min),
                ($t.secondElement.max = $t.minuteElement.max),
                $t.timeContainer.appendChild(
                  o("span", "flatpickr-time-separator", ":")
                ),
                $t.timeContainer.appendChild(i);
            }
            return (
              $t.config.time_24hr ||
                (($t.amPM = o(
                  "span",
                  "flatpickr-am-pm",
                  $t.l10n.amPM[
                    v(
                      ($t.latestSelectedDateObj
                        ? $t.hourElement.value
                        : $t.config.defaultHour) > 11
                    )
                  ]
                )),
                ($t.amPM.title = $t.l10n.toggleTitle),
                ($t.amPM.tabIndex = -1),
                $t.timeContainer.appendChild($t.amPM)),
              $t.timeContainer
            );
          }
          function V() {
            $t.weekdayContainer ||
              ($t.weekdayContainer = o("div", "flatpickr-weekdays"));
            var t = $t.l10n.firstDayOfWeek,
              e = $t.l10n.weekdays.shorthand.slice();
            return (
              t > 0 &&
                t < e.length &&
                (e = e.splice(t, e.length).concat(e.splice(0, t))),
              ($t.weekdayContainer.innerHTML =
                "\n    <span class=flatpickr-weekday>\n      " +
                e.join("</span><span class=flatpickr-weekday>") +
                "\n    </span>\n    "),
              $t.weekdayContainer
            );
          }
          function U() {
            $t.calendarContainer.classList.add("hasWeeks");
            var t = o("div", "flatpickr-weekwrapper");
            t.appendChild(
              o("span", "flatpickr-weekday", $t.l10n.weekAbbreviation)
            );
            var e = o("div", "flatpickr-weeks");
            return t.appendChild(e), { weekWrapper: t, weekNumbers: e };
          }
          function q(t, e, n, i) {
            void 0 === e && (e = !0),
              void 0 === n && (n = $t.config.animate),
              void 0 === i && (i = !1);
            var o = e ? t : t - $t.currentMonth;
            if (
              !(
                (o < 0 && $t._hidePrevMonthArrow) ||
                (o > 0 && $t._hideNextMonthArrow)
              )
            ) {
              if (
                (($t.currentMonth += o),
                ($t.currentMonth < 0 || $t.currentMonth > 11) &&
                  (($t.currentYear += $t.currentMonth > 11 ? 1 : -1),
                  ($t.currentMonth = ($t.currentMonth + 12) % 12),
                  kt("onYearChange")),
                R(n ? o : void 0),
                !n)
              )
                return kt("onMonthChange"), Et();
              var r = $t.navigationCurrentMonth;
              if (o < 0)
                for (; r.nextSibling && /curr/.test(r.nextSibling.className); )
                  $t.monthNav.removeChild(r.nextSibling);
              else if (o > 0)
                for (
                  ;
                  r.previousSibling && /curr/.test(r.previousSibling.className);

                )
                  $t.monthNav.removeChild(r.previousSibling);
              ($t.oldCurMonth = $t.navigationCurrentMonth),
                ($t.navigationCurrentMonth = $t.monthNav.insertBefore(
                  $t.oldCurMonth.cloneNode(!0),
                  o > 0 ? $t.oldCurMonth.nextSibling : $t.oldCurMonth
                ));
              var a = $t.daysContainer;
              if (
                (a.firstChild &&
                  a.lastChild &&
                  (o > 0
                    ? (a.firstChild.classList.add("slideLeft"),
                      a.lastChild.classList.add("slideLeftNew"),
                      $t.oldCurMonth.classList.add("slideLeft"),
                      $t.navigationCurrentMonth.classList.add("slideLeftNew"))
                    : o < 0 &&
                      (a.firstChild.classList.add("slideRightNew"),
                      a.lastChild.classList.add("slideRight"),
                      $t.oldCurMonth.classList.add("slideRight"),
                      $t.navigationCurrentMonth.classList.add(
                        "slideRightNew"
                      ))),
                ($t.currentMonthElement = $t.navigationCurrentMonth.firstChild),
                ($t.currentYearElement =
                  $t.navigationCurrentMonth.lastChild.childNodes[0]),
                Et(),
                $t.oldCurMonth.firstChild &&
                  ($t.oldCurMonth.firstChild.textContent = h(
                    $t.currentMonth - o,
                    $t.config.shorthandCurrentMonth,
                    $t.l10n
                  )),
                z(function() {
                  return kt("onMonthChange");
                }),
                i && document.activeElement && document.activeElement.$i)
              ) {
                var s = document.activeElement.$i;
                z(function() {
                  Y(s, 0);
                });
              }
            }
          }
          function J(t) {
            void 0 === t && (t = !0),
              ($t.input.value = ""),
              $t.altInput && ($t.altInput.value = ""),
              $t.mobileInput && ($t.mobileInput.value = ""),
              ($t.selectedDates = []),
              ($t.latestSelectedDateObj = void 0),
              ($t.showTimeInput = !1),
              $t.redraw(),
              t && kt("onChange");
          }
          function G() {
            ($t.isOpen = !1),
              $t.isMobile ||
                ($t.calendarContainer.classList.remove("open"),
                $t._input.classList.remove("active")),
              kt("onClose");
          }
          function K() {
            void 0 !== $t.config && kt("onDestroy");
            for (var t = $t._handlers.length; t--; ) {
              var e = $t._handlers[t];
              e.element.removeEventListener(e.event, e.handler);
            }
            ($t._handlers = []),
              $t.mobileInput
                ? ($t.mobileInput.parentNode &&
                    $t.mobileInput.parentNode.removeChild($t.mobileInput),
                  ($t.mobileInput = void 0))
                : $t.calendarContainer &&
                  $t.calendarContainer.parentNode &&
                  $t.calendarContainer.parentNode.removeChild(
                    $t.calendarContainer
                  ),
              $t.altInput &&
                (($t.input.type = "text"),
                $t.altInput.parentNode &&
                  $t.altInput.parentNode.removeChild($t.altInput),
                delete $t.altInput),
              $t.input &&
                (($t.input.type = $t.input._type),
                $t.input.classList.remove("flatpickr-input"),
                $t.input.removeAttribute("readonly"),
                ($t.input.value = "")),
              [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config"
              ].forEach(function(t) {
                try {
                  delete $t[t];
                } catch (t) {}
              });
          }
          function X(t) {
            return (
              !(!$t.config.appendTo || !$t.config.appendTo.contains(t)) ||
              $t.calendarContainer.contains(t)
            );
          }
          function Q(t) {
            if ($t.isOpen && !$t.config.inline) {
              var e = X(t.target),
                n =
                  t.target === $t.input ||
                  t.target === $t.altInput ||
                  $t.element.contains(t.target) ||
                  (t.path &&
                    t.path.indexOf &&
                    (~t.path.indexOf($t.input) ||
                      ~t.path.indexOf($t.altInput)));
              ("blur" === t.type
                ? n && t.relatedTarget && !X(t.relatedTarget)
                : !n && !e) &&
                -1 === $t.config.ignoredFocusElements.indexOf(t.target) &&
                ($t.close(),
                "range" === $t.config.mode &&
                  1 === $t.selectedDates.length &&
                  ($t.clear(!1), $t.redraw()));
            }
          }
          function tt(t) {
            if (
              !(
                !t ||
                ($t.currentYearElement.min &&
                  t < parseInt($t.currentYearElement.min)) ||
                ($t.currentYearElement.max &&
                  t > parseInt($t.currentYearElement.max))
              )
            ) {
              var e = t,
                n = $t.currentYear !== e;
              ($t.currentYear = e || $t.currentYear),
                $t.config.maxDate &&
                $t.currentYear === $t.config.maxDate.getFullYear()
                  ? ($t.currentMonth = Math.min(
                      $t.config.maxDate.getMonth(),
                      $t.currentMonth
                    ))
                  : $t.config.minDate &&
                    $t.currentYear === $t.config.minDate.getFullYear() &&
                    ($t.currentMonth = Math.max(
                      $t.config.minDate.getMonth(),
                      $t.currentMonth
                    )),
                n && ($t.redraw(), kt("onYearChange"));
            }
          }
          function et(e, n) {
            void 0 === n && (n = !0);
            var i = $t.parseDate(e, void 0, n);
            if (
              ($t.config.minDate &&
                i &&
                t(i, $t.config.minDate, void 0 !== n ? n : !$t.minDateHasTime) <
                  0) ||
              ($t.config.maxDate &&
                i &&
                t(i, $t.config.maxDate, void 0 !== n ? n : !$t.maxDateHasTime) >
                  0)
            )
              return !1;
            if (!$t.config.enable.length && !$t.config.disable.length)
              return !0;
            if (void 0 === i) return !1;
            for (
              var o = $t.config.enable.length > 0,
                r = o ? $t.config.enable : $t.config.disable,
                a = 0,
                s = void 0;
              a < r.length;
              a++
            ) {
              if ("function" == typeof (s = r[a]) && s(i)) return o;
              if (
                s instanceof Date &&
                void 0 !== i &&
                s.getTime() === i.getTime()
              )
                return o;
              if ("string" == typeof s && void 0 !== i) {
                var l = $t.parseDate(s, void 0, !0);
                return l && l.getTime() === i.getTime() ? o : !o;
              }
              if (
                "object" == typeof s &&
                void 0 !== i &&
                s.from &&
                s.to &&
                i.getTime() >= s.from.getTime() &&
                i.getTime() <= s.to.getTime()
              )
                return o;
            }
            return !o;
          }
          function nt(t) {
            var e = t.target === $t._input,
              n = X(t.target),
              i = $t.config.allowInput,
              o = $t.isOpen && (!i || !e),
              r = $t.config.inline && e && !i;
            if ("Enter" === t.key && e) {
              if (i)
                return (
                  $t.setDate(
                    $t._input.value,
                    !0,
                    t.target === $t.altInput
                      ? $t.config.altFormat
                      : $t.config.dateFormat
                  ),
                  t.target.blur()
                );
              $t.open();
            } else if (n || o || r) {
              var a = !!$t.timeContainer && $t.timeContainer.contains(t.target);
              switch (t.key) {
                case "Enter":
                  a ? Dt() : ht(t);
                  break;
                case "Escape":
                  t.preventDefault(), $t.close();
                  break;
                case "Backspace":
                case "Delete":
                  e && !$t.config.allowInput && $t.clear();
                  break;
                case "ArrowLeft":
                case "ArrowRight":
                  if (a) $t.hourElement && $t.hourElement.focus();
                  else if ((t.preventDefault(), $t.daysContainer)) {
                    var s = "ArrowRight" === t.key ? 1 : -1;
                    t.ctrlKey ? q(s, !0, void 0, !0) : Y(t.target.$i, s);
                  }
                  break;
                case "ArrowUp":
                case "ArrowDown":
                  t.preventDefault();
                  var l = "ArrowDown" === t.key ? 1 : -1;
                  $t.daysContainer && void 0 !== t.target.$i
                    ? t.ctrlKey
                      ? (tt($t.currentYear - l), Y(t.target.$i, 0))
                      : a || Y(t.target.$i, 7 * l)
                    : $t.config.enableTime &&
                      (!a && $t.hourElement && $t.hourElement.focus(),
                      g(t),
                      $t._debouncedChange());
                  break;
                case "Tab":
                  t.target === $t.hourElement
                    ? (t.preventDefault(), $t.minuteElement.select())
                    : t.target === $t.minuteElement &&
                      ($t.secondElement || $t.amPM)
                      ? (t.preventDefault(),
                        void 0 !== $t.secondElement
                          ? $t.secondElement.focus()
                          : void 0 !== $t.amPM && $t.amPM.focus())
                      : t.target === $t.secondElement &&
                        $t.amPM &&
                        (t.preventDefault(), $t.amPM.focus());
                  break;
                case "a":
                  void 0 !== $t.amPM &&
                    t.target === $t.amPM &&
                    (($t.amPM.textContent = "AM"), L(), Dt());
                  break;
                case "p":
                  void 0 !== $t.amPM &&
                    t.target === $t.amPM &&
                    (($t.amPM.textContent = "PM"), L(), Dt());
              }
              kt("onKeyDown", t);
            }
          }
          function it(t) {
            if (
              1 === $t.selectedDates.length &&
              t.classList.contains("flatpickr-day") &&
              void 0 !== $t.minRangeDate &&
              void 0 !== $t.maxRangeDate
            ) {
              for (
                var e = t.dateObj,
                  n = $t.parseDate($t.selectedDates[0], void 0, !0),
                  i = Math.min(e.getTime(), $t.selectedDates[0].getTime()),
                  o = Math.max(e.getTime(), $t.selectedDates[0].getTime()),
                  r = !1,
                  a = i;
                a < o;
                a += f.DAY
              )
                if (!et(new Date(a))) {
                  r = !0;
                  break;
                }
              for (
                var s = 0, l = $t.days.childNodes[s].dateObj;
                s < 42;
                s++, l = $t.days.childNodes[s] && $t.days.childNodes[s].dateObj
              )
                !(function(a, s) {
                  var l = s.getTime(),
                    c =
                      l < $t.minRangeDate.getTime() ||
                      l > $t.maxRangeDate.getTime(),
                    u = $t.days.childNodes[a];
                  if (c)
                    return (
                      u.classList.add("notAllowed"),
                      ["inRange", "startRange", "endRange"].forEach(function(
                        t
                      ) {
                        u.classList.remove(t);
                      }),
                      "continue"
                    );
                  if (r && !c) return "continue";
                  ["startRange", "inRange", "endRange", "notAllowed"].forEach(
                    function(t) {
                      u.classList.remove(t);
                    }
                  );
                  var h = Math.max($t.minRangeDate.getTime(), i),
                    d = Math.min($t.maxRangeDate.getTime(), o);
                  t.classList.add(
                    e < $t.selectedDates[0] ? "startRange" : "endRange"
                  ),
                    n < e && l === n.getTime()
                      ? u.classList.add("startRange")
                      : n > e &&
                        l === n.getTime() &&
                        u.classList.add("endRange"),
                    l >= h && l <= d && u.classList.add("inRange");
                })(s, l);
            }
          }
          function ot() {
            !$t.isOpen || $t.config.static || $t.config.inline || ct();
          }
          function rt(t, e) {
            if ((void 0 === e && (e = $t._input), $t.isMobile))
              return (
                t && (t.preventDefault(), t.target && t.target.blur()),
                setTimeout(function() {
                  void 0 !== $t.mobileInput && $t.mobileInput.click();
                }, 0),
                void kt("onOpen")
              );
            if (!$t._input.disabled && !$t.config.inline) {
              var n = $t.isOpen;
              ($t.isOpen = !0),
                ct(e),
                $t.calendarContainer.classList.add("open"),
                $t._input.classList.add("active"),
                !n && kt("onOpen");
            }
          }
          function at(t) {
            return function(e) {
              var n = ($t.config["_" + t + "Date"] = $t.parseDate(e)),
                i = $t.config["_" + ("min" === t ? "max" : "min") + "Date"];
              void 0 !== n &&
                ($t["min" === t ? "minDateHasTime" : "maxDateHasTime"] =
                  n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
                $t.selectedDates &&
                  (($t.selectedDates = $t.selectedDates.filter(function(t) {
                    return et(t);
                  })),
                  $t.selectedDates.length || "min" !== t || E(n),
                  Dt()),
                $t.daysContainer &&
                  (ut(),
                  void 0 !== n
                    ? ($t.currentYearElement[t] = n.getFullYear().toString())
                    : $t.currentYearElement.removeAttribute(t),
                  ($t.currentYearElement.disabled =
                    !!i &&
                    void 0 !== n &&
                    i.getFullYear() === n.getFullYear()));
            };
          }
          function st() {
            var t = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile"
              ],
              e = [
                "onChange",
                "onClose",
                "onDayCreate",
                "onDestroy",
                "onKeyDown",
                "onMonthChange",
                "onOpen",
                "onParseConfig",
                "onReady",
                "onValueUpdate",
                "onYearChange"
              ];
            $t.config = u({}, C.defaultConfig);
            var n = u({}, c, JSON.parse(JSON.stringify(l.dataset || {}))),
              i = {};
            Object.defineProperty($t.config, "enable", {
              get: function() {
                return $t.config._enable || [];
              },
              set: function(t) {
                $t.config._enable = gt(t);
              }
            }),
              Object.defineProperty($t.config, "disable", {
                get: function() {
                  return $t.config._disable || [];
                },
                set: function(t) {
                  $t.config._disable = gt(t);
                }
              }),
              !n.dateFormat &&
                n.enableTime &&
                (i.dateFormat = n.noCalendar
                  ? "H:i" + (n.enableSeconds ? ":S" : "")
                  : C.defaultConfig.dateFormat +
                    " H:i" +
                    (n.enableSeconds ? ":S" : "")),
              n.altInput &&
                n.enableTime &&
                !n.altFormat &&
                (i.altFormat = n.noCalendar
                  ? "h:i" + (n.enableSeconds ? ":S K" : " K")
                  : C.defaultConfig.altFormat +
                    " h:i" +
                    (n.enableSeconds ? ":S" : "") +
                    " K"),
              Object.defineProperty($t.config, "minDate", {
                get: function() {
                  return $t.config._minDate;
                },
                set: at("min")
              }),
              Object.defineProperty($t.config, "maxDate", {
                get: function() {
                  return $t.config._maxDate;
                },
                set: at("max")
              }),
              Object.assign($t.config, i, n);
            for (var o = 0; o < t.length; o++)
              $t.config[t[o]] =
                !0 === $t.config[t[o]] || "true" === $t.config[t[o]];
            for (var o = e.length; o--; )
              void 0 !== $t.config[e[o]] &&
                ($t.config[e[o]] = w($t.config[e[o]] || []).map(p));
            for (var o = 0; o < $t.config.plugins.length; o++) {
              var r = $t.config.plugins[o]($t) || {};
              for (var a in r)
                ~e.indexOf(a)
                  ? ($t.config[a] = w(r[a])
                      .map(p)
                      .concat($t.config[a]))
                  : void 0 === n[a] && ($t.config[a] = r[a]);
            }
            ($t.isMobile =
              !$t.config.disableMobile &&
              !$t.config.inline &&
              "single" === $t.config.mode &&
              !$t.config.disable.length &&
              !$t.config.enable.length &&
              !$t.config.weekNumbers &&
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )),
              kt("onParseConfig");
          }
          function lt() {
            "object" != typeof $t.config.locale && C.l10ns[$t.config.locale],
              ($t.l10n = u(
                {},
                C.l10ns.default,
                "object" == typeof $t.config.locale
                  ? $t.config.locale
                  : "default" !== $t.config.locale
                    ? C.l10ns[$t.config.locale]
                    : void 0
              ));
          }
          function ct(t) {
            if (
              (void 0 === t && (t = $t._positionElement),
              void 0 !== $t.calendarContainer)
            ) {
              var e = $t.calendarContainer.offsetHeight,
                n = $t.calendarContainer.offsetWidth,
                o = $t.config.position,
                r = t.getBoundingClientRect(),
                a = window.innerHeight - r.bottom,
                s = "above" === o || ("below" !== o && a < e && r.top > e),
                l =
                  window.pageYOffset +
                  r.top +
                  (s ? -e - 2 : t.offsetHeight + 2);
              if (
                (i($t.calendarContainer, "arrowTop", !s),
                i($t.calendarContainer, "arrowBottom", s),
                !$t.config.inline)
              ) {
                var c = window.pageXOffset + r.left,
                  u = window.document.body.offsetWidth - r.right,
                  h = c + n > window.document.body.offsetWidth;
                i($t.calendarContainer, "rightMost", h),
                  $t.config.static ||
                    (($t.calendarContainer.style.top = l + "px"),
                    h
                      ? (($t.calendarContainer.style.left = "auto"),
                        ($t.calendarContainer.style.right = u + "px"))
                      : (($t.calendarContainer.style.left = c + "px"),
                        ($t.calendarContainer.style.right = "auto")));
              }
            }
          }
          function ut() {
            $t.config.noCalendar || $t.isMobile || (V(), Et(), R());
          }
          function ht(e) {
            e.preventDefault(), e.stopPropagation();
            var n = function(t) {
                return (
                  t.classList &&
                  t.classList.contains("flatpickr-day") &&
                  !t.classList.contains("disabled") &&
                  !t.classList.contains("notAllowed")
                );
              },
              i = a(e.target, n);
            if (void 0 !== i) {
              var o = i,
                r = ($t.latestSelectedDateObj = new Date(o.dateObj.getTime())),
                s =
                  r.getMonth() !== $t.currentMonth &&
                  "range" !== $t.config.mode;
              if ((($t.selectedDateElem = o), "single" === $t.config.mode))
                $t.selectedDates = [r];
              else if ("multiple" === $t.config.mode) {
                var l = Mt(r);
                l
                  ? $t.selectedDates.splice(parseInt(l), 1)
                  : $t.selectedDates.push(r);
              } else
                "range" === $t.config.mode &&
                  (2 === $t.selectedDates.length && $t.clear(),
                  $t.selectedDates.push(r),
                  0 !== t(r, $t.selectedDates[0], !0) &&
                    $t.selectedDates.sort(function(t, e) {
                      return t.getTime() - e.getTime();
                    }));
              if ((L(), s)) {
                var c = $t.currentYear !== r.getFullYear();
                ($t.currentYear = r.getFullYear()),
                  ($t.currentMonth = r.getMonth()),
                  c && kt("onYearChange"),
                  kt("onMonthChange");
              }
              if (
                (R(),
                $t.config.minDate &&
                  $t.minDateHasTime &&
                  $t.config.enableTime &&
                  0 === t(r, $t.config.minDate) &&
                  E($t.config.minDate),
                Dt(),
                $t.config.enableTime &&
                  setTimeout(function() {
                    return ($t.showTimeInput = !0);
                  }, 50),
                "range" === $t.config.mode &&
                  (1 === $t.selectedDates.length
                    ? (it(o),
                      ($t._hidePrevMonthArrow =
                        $t._hidePrevMonthArrow ||
                        (void 0 !== $t.minRangeDate &&
                          $t.minRangeDate > $t.days.childNodes[0].dateObj)),
                      ($t._hideNextMonthArrow =
                        $t._hideNextMonthArrow ||
                        (void 0 !== $t.maxRangeDate &&
                          $t.maxRangeDate <
                            new Date($t.currentYear, $t.currentMonth + 1, 1))))
                    : Et()),
                kt("onChange"),
                s
                  ? z(function() {
                      return $t.selectedDateElem && $t.selectedDateElem.focus();
                    })
                  : Y(o.$i, 0),
                void 0 !== $t.hourElement &&
                  setTimeout(function() {
                    return void 0 !== $t.hourElement && $t.hourElement.select();
                  }, 451),
                $t.config.closeOnSelect)
              ) {
                var u = "single" === $t.config.mode && !$t.config.enableTime,
                  h =
                    "range" === $t.config.mode &&
                    2 === $t.selectedDates.length &&
                    !$t.config.enableTime;
                (u || h) && $t.close();
              }
            }
          }
          function dt(t, e) {
            null !== t && "object" == typeof t
              ? Object.assign($t.config, t)
              : ($t.config[t] = e),
              $t.redraw(),
              A();
          }
          function ft(t, e) {
            var n = [];
            if (t instanceof Array)
              n = t.map(function(t) {
                return $t.parseDate(t, e);
              });
            else if (t instanceof Date || "number" == typeof t)
              n = [$t.parseDate(t, e)];
            else if ("string" == typeof t)
              switch ($t.config.mode) {
                case "single":
                  n = [$t.parseDate(t, e)];
                  break;
                case "multiple":
                  n = t.split($t.config.conjunction).map(function(t) {
                    return $t.parseDate(t, e);
                  });
                  break;
                case "range":
                  n = t.split($t.l10n.rangeSeparator).map(function(t) {
                    return $t.parseDate(t, e);
                  });
              }
            ($t.selectedDates = n.filter(function(t) {
              return t instanceof Date && et(t, !1);
            })),
              $t.selectedDates.sort(function(t, e) {
                return t.getTime() - e.getTime();
              });
          }
          function pt(t, e, n) {
            if ((void 0 === e && (e = !1), 0 !== t && !t)) return $t.clear(e);
            ft(t, n),
              ($t.showTimeInput = $t.selectedDates.length > 0),
              ($t.latestSelectedDateObj = $t.selectedDates[0]),
              $t.redraw(),
              A(),
              E(),
              Dt(e),
              e && kt("onChange");
          }
          function gt(t) {
            return t
              .map(function(t) {
                return "string" == typeof t ||
                  "number" == typeof t ||
                  t instanceof Date
                  ? $t.parseDate(t, void 0, !0)
                  : t && "object" == typeof t && t.from && t.to
                    ? {
                        from: $t.parseDate(t.from, void 0),
                        to: $t.parseDate(t.to, void 0)
                      }
                    : t;
              })
              .filter(function(t) {
                return t;
              });
          }
          function mt() {
            ($t.selectedDates = []), ($t.now = new Date());
            var t = $t.config.defaultDate || $t.input.value;
            t && ft(t, $t.config.dateFormat);
            var e = $t.selectedDates.length
              ? $t.selectedDates[0]
              : $t.config.minDate &&
                $t.config.minDate.getTime() > $t.now.getTime()
                ? $t.config.minDate
                : $t.config.maxDate &&
                  $t.config.maxDate.getTime() < $t.now.getTime()
                  ? $t.config.maxDate
                  : $t.now;
            ($t.currentYear = e.getFullYear()),
              ($t.currentMonth = e.getMonth()),
              $t.selectedDates.length &&
                ($t.latestSelectedDateObj = $t.selectedDates[0]),
              ($t.minDateHasTime =
                !!$t.config.minDate &&
                ($t.config.minDate.getHours() > 0 ||
                  $t.config.minDate.getMinutes() > 0 ||
                  $t.config.minDate.getSeconds() > 0)),
              ($t.maxDateHasTime =
                !!$t.config.maxDate &&
                ($t.config.maxDate.getHours() > 0 ||
                  $t.config.maxDate.getMinutes() > 0 ||
                  $t.config.maxDate.getSeconds() > 0)),
              Object.defineProperty($t, "showTimeInput", {
                get: function() {
                  return $t._showTimeInput;
                },
                set: function(t) {
                  ($t._showTimeInput = t),
                    $t.calendarContainer &&
                      i($t.calendarContainer, "showTimeInput", t),
                    ct();
                }
              });
          }
          function vt(t, e) {
            return void 0 !== $t.config && void 0 !== $t.config.formatDate
              ? $t.config.formatDate(t, e)
              : e
                  .split("")
                  .map(function(e, n, i) {
                    return k[e] && "\\" !== i[n - 1]
                      ? k[e](t, $t.l10n, $t.config)
                      : "\\" !== e ? e : "";
                  })
                  .join("");
          }
          function wt(t, e, n) {
            if (0 === t || t) {
              var i;
              if (t instanceof Date) i = new Date(t.getTime());
              else if ("string" != typeof t && void 0 !== t.toFixed)
                i = new Date(t);
              else if ("string" == typeof t) {
                var o = e || ($t.config || C.defaultConfig).dateFormat,
                  r = String(t).trim();
                if ("today" === r) (i = new Date()), (n = !0);
                else if (/Z$/.test(r) || /GMT$/.test(r)) i = new Date(t);
                else if ($t.config && $t.config.parseDate)
                  i = $t.config.parseDate(t, o);
                else {
                  i =
                    $t.config && $t.config.noCalendar
                      ? new Date(new Date().setHours(0, 0, 0, 0))
                      : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
                  for (
                    var a = void 0, s = [], l = 0, c = 0, u = "";
                    l < o.length;
                    l++
                  ) {
                    var h = o[l],
                      d = "\\" === h,
                      f = "\\" === o[l - 1] || d;
                    if (b[h] && !f) {
                      u += b[h];
                      var p = new RegExp(u).exec(t);
                      p &&
                        (a = !0) &&
                        s["Y" !== h ? "push" : "unshift"]({
                          fn: x[h],
                          val: p[++c]
                        });
                    } else d || (u += ".");
                    s.forEach(function(t) {
                      var e = t.fn,
                        n = t.val;
                      return (i = e(i, n, $t.l10n) || i);
                    });
                  }
                  i = a ? i : void 0;
                }
              }
              if (i instanceof Date)
                return !0 === n && i.setHours(0, 0, 0, 0), i;
            }
          }
          function yt() {
            ($t.input = $t.config.wrap ? l.querySelector("[data-input]") : l),
              $t.input &&
                (($t.input._type = $t.input.type),
                ($t.input.type = "text"),
                $t.input.classList.add("flatpickr-input"),
                ($t._input = $t.input),
                $t.config.altInput &&
                  (($t.altInput = o(
                    $t.input.nodeName,
                    $t.input.className + " " + $t.config.altInputClass
                  )),
                  ($t._input = $t.altInput),
                  ($t.altInput.placeholder = $t.input.placeholder),
                  ($t.altInput.disabled = $t.input.disabled),
                  ($t.altInput.required = $t.input.required),
                  ($t.altInput.type = "text"),
                  ($t.input.type = "hidden"),
                  !$t.config.static &&
                    $t.input.parentNode &&
                    $t.input.parentNode.insertBefore(
                      $t.altInput,
                      $t.input.nextSibling
                    )),
                $t.config.allowInput ||
                  $t._input.setAttribute("readonly", "readonly"),
                ($t._positionElement = $t.config.positionElement || $t._input));
          }
          function xt() {
            var t = $t.config.enableTime
              ? $t.config.noCalendar ? "time" : "datetime-local"
              : "date";
            ($t.mobileInput = o(
              "input",
              $t.input.className + " flatpickr-mobile"
            )),
              ($t.mobileInput.step = $t.input.getAttribute("step") || "any"),
              ($t.mobileInput.tabIndex = 1),
              ($t.mobileInput.type = t),
              ($t.mobileInput.disabled = $t.input.disabled),
              ($t.mobileInput.placeholder = $t.input.placeholder),
              ($t.mobileFormatStr =
                "datetime-local" === t
                  ? "Y-m-d\\TH:i:S"
                  : "date" === t ? "Y-m-d" : "H:i:S"),
              $t.selectedDates.length &&
                ($t.mobileInput.defaultValue = $t.mobileInput.value = $t.formatDate(
                  $t.selectedDates[0],
                  $t.mobileFormatStr
                )),
              $t.config.minDate &&
                ($t.mobileInput.min = $t.formatDate(
                  $t.config.minDate,
                  "Y-m-d"
                )),
              $t.config.maxDate &&
                ($t.mobileInput.max = $t.formatDate(
                  $t.config.maxDate,
                  "Y-m-d"
                )),
              ($t.input.type = "hidden"),
              void 0 !== $t.altInput && ($t.altInput.type = "hidden");
            try {
              $t.input.parentNode &&
                $t.input.parentNode.insertBefore(
                  $t.mobileInput,
                  $t.input.nextSibling
                );
            } catch (t) {}
            N($t.mobileInput, "change", function(t) {
              $t.setDate(t.target.value, !1, $t.mobileFormatStr),
                kt("onChange"),
                kt("onClose");
            });
          }
          function bt() {
            if ($t.isOpen) return $t.close();
            $t.open();
          }
          function kt(t, e) {
            var n = $t.config[t];
            if (void 0 !== n && n.length > 0)
              for (var i = 0; n[i] && i < n.length; i++)
                n[i]($t.selectedDates, $t.input.value, $t, e);
            "onChange" === t &&
              ($t.input.dispatchEvent(Ct("change")),
              $t.input.dispatchEvent(Ct("input")));
          }
          function Ct(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e;
          }
          function Mt(e) {
            for (var n = 0; n < $t.selectedDates.length; n++)
              if (0 === t($t.selectedDates[n], e)) return "" + n;
            return !1;
          }
          function Lt(e) {
            return (
              !("range" !== $t.config.mode || $t.selectedDates.length < 2) &&
              (t(e, $t.selectedDates[0]) >= 0 && t(e, $t.selectedDates[1]) <= 0)
            );
          }
          function Et() {
            $t.config.noCalendar ||
              $t.isMobile ||
              !$t.monthNav ||
              (($t.currentMonthElement.textContent =
                h($t.currentMonth, $t.config.shorthandCurrentMonth, $t.l10n) +
                " "),
              ($t.currentYearElement.value = $t.currentYear.toString()),
              ($t._hidePrevMonthArrow =
                void 0 !== $t.config.minDate &&
                ($t.currentYear === $t.config.minDate.getFullYear()
                  ? $t.currentMonth <= $t.config.minDate.getMonth()
                  : $t.currentYear < $t.config.minDate.getFullYear())),
              ($t._hideNextMonthArrow =
                void 0 !== $t.config.maxDate &&
                ($t.currentYear === $t.config.maxDate.getFullYear()
                  ? $t.currentMonth + 1 > $t.config.maxDate.getMonth()
                  : $t.currentYear > $t.config.maxDate.getFullYear())));
          }
          function Dt(t) {
            if ((void 0 === t && (t = !0), !$t.selectedDates.length))
              return $t.clear(t);
            void 0 !== $t.mobileInput &&
              $t.mobileFormatStr &&
              ($t.mobileInput.value =
                void 0 !== $t.latestSelectedDateObj
                  ? $t.formatDate($t.latestSelectedDateObj, $t.mobileFormatStr)
                  : "");
            var e =
              "range" !== $t.config.mode
                ? $t.config.conjunction
                : $t.l10n.rangeSeparator;
            ($t.input.value = $t.selectedDates
              .map(function(t) {
                return $t.formatDate(t, $t.config.dateFormat);
              })
              .join(e)),
              void 0 !== $t.altInput &&
                ($t.altInput.value = $t.selectedDates
                  .map(function(t) {
                    return $t.formatDate(t, $t.config.altFormat);
                  })
                  .join(e)),
              !1 !== t && kt("onValueUpdate");
          }
          function _t(t) {
            t.preventDefault();
            var e =
              $t.currentYearElement.parentNode &&
              $t.currentYearElement.parentNode.contains(t.target);
            if (t.target === $t.currentMonthElement || e) {
              var i = n(t);
              e
                ? (tt($t.currentYear + i),
                  (t.target.value = $t.currentYear.toString()))
                : $t.changeMonth(i, !0, !1);
            }
          }
          function Nt(t) {
            var e = $t.prevMonthNav.contains(t.target),
              n = $t.nextMonthNav.contains(t.target);
            e || n
              ? q(e ? -1 : 1)
              : t.target === $t.currentYearElement
                ? (t.preventDefault(), $t.currentYearElement.select())
                : "arrowUp" === t.target.className
                  ? $t.changeYear($t.currentYear + 1)
                  : "arrowDown" === t.target.className &&
                    $t.changeYear($t.currentYear - 1);
          }
          function Tt(t) {
            t.preventDefault();
            var e = "keydown" === t.type,
              n = t.target;
            void 0 !== $t.amPM &&
              t.target === $t.amPM &&
              ($t.amPM.textContent =
                $t.l10n.amPM["AM" === $t.amPM.textContent ? 1 : 0]);
            var i = Number(n.min),
              o = Number(n.max),
              r = Number(n.step),
              a = parseInt(n.value, 10),
              s =
                t.delta ||
                (e
                  ? 38 === t.which ? 1 : -1
                  : Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY)) || 0),
              l = a + r * s;
            if (void 0 !== n.value && 2 === n.value.length) {
              var c = n === $t.hourElement,
                u = n === $t.minuteElement;
              l < i
                ? ((l = o + l + v(!c) + (v(c) && v(!$t.amPM))),
                  u && j(void 0, -1, $t.hourElement))
                : l > o &&
                  ((l = n === $t.hourElement ? l - o - v(!$t.amPM) : i),
                  u && j(void 0, 1, $t.hourElement)),
                $t.amPM &&
                  c &&
                  (1 === r ? l + a === 23 : Math.abs(l - a) > r) &&
                  ($t.amPM.textContent =
                    "PM" === $t.amPM.textContent ? "AM" : "PM"),
                (n.value = m(l));
            }
          }
          var $t = {};
          return (
            ($t.parseDate = wt),
            ($t.formatDate = vt),
            ($t._animationLoop = []),
            ($t._handlers = []),
            ($t._bind = N),
            ($t._setHoursFromDate = E),
            ($t.changeMonth = q),
            ($t.changeYear = tt),
            ($t.clear = J),
            ($t.close = G),
            ($t._createElement = o),
            ($t.destroy = K),
            ($t.isEnabled = et),
            ($t.jumpToDate = A),
            ($t.open = rt),
            ($t.redraw = ut),
            ($t.set = dt),
            ($t.setDate = pt),
            ($t.toggle = bt),
            (function() {
              ($t.element = $t.input = l),
                ($t.isOpen = !1),
                st(),
                lt(),
                yt(),
                mt(),
                d(),
                $t.isMobile || H(),
                S(),
                ($t.selectedDates.length || $t.config.noCalendar) &&
                  ($t.config.enableTime &&
                    E(
                      $t.config.noCalendar
                        ? $t.latestSelectedDateObj || $t.config.minDate
                        : void 0
                    ),
                  Dt(!1)),
                ($t.showTimeInput =
                  $t.selectedDates.length > 0 || $t.config.noCalendar),
                void 0 !== $t.weekWrapper &&
                  void 0 !== $t.daysContainer &&
                  ($t.calendarContainer.style.width =
                    $t.daysContainer.offsetWidth +
                    $t.weekWrapper.offsetWidth +
                    "px"),
                $t.isMobile || ct(),
                kt("onReady");
            })(),
            $t
          );
        }
        function c(t, e) {
          for (
            var n = Array.prototype.slice.call(t), i = [], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o];
            try {
              if (null !== r.getAttribute("data-fp-omit")) continue;
              void 0 !== r._flatpickr &&
                (r._flatpickr.destroy(), (r._flatpickr = void 0)),
                (r._flatpickr = l(r, e || {})),
                i.push(r._flatpickr);
            } catch (t) {}
          }
          return 1 === i.length ? i[0] : i;
        } /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var u =
            Object.assign ||
            function(t) {
              for (var e, n = 1, i = arguments.length; n < i; n++) {
                e = arguments[n];
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }
              return t;
            },
          h = function(t, e, n) {
            return n.months[e ? "shorthand" : "longhand"][t];
          },
          d = function(t) {
            var e = new Date(t.getFullYear(), 0, 1);
            return Math.ceil(
              ((t.getTime() - e.getTime()) / 864e5 + e.getDay() + 1) / 7
            );
          },
          f = { DAY: 864e5 },
          p = {
            _disable: [],
            _enable: [],
            allowInput: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate:
              "object" == typeof window &&
              -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enable: [],
            enableSeconds: !1,
            enableTime: !1,
            getWeek: d,
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            nextArrow:
              "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow:
              "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
          },
          g = {
            weekdays: {
              shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ]
            },
            months: {
              shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ],
              longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(t) {
              var e = t % 100;
              if (e > 3 && e < 21) return "th";
              switch (e % 10) {
                case 1:
                  return "st";
                case 2:
                  return "nd";
                case 3:
                  return "rd";
                default:
                  return "th";
              }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"]
          },
          m = function(t) {
            return ("0" + t).slice(-2);
          },
          v = function(t) {
            return !0 === t ? 1 : 0;
          },
          w = function(t) {
            return t instanceof Array ? t : [t];
          },
          y = function() {},
          x = {
            D: y,
            F: function(t, e, n) {
              t.setMonth(n.months.longhand.indexOf(e));
            },
            G: function(t, e) {
              t.setHours(parseFloat(e));
            },
            H: function(t, e) {
              t.setHours(parseFloat(e));
            },
            J: function(t, e) {
              t.setDate(parseFloat(e));
            },
            K: function(t, e) {
              t.setHours(t.getHours() % 12 + 12 * v(/pm/i.test(e)));
            },
            M: function(t, e, n) {
              t.setMonth(n.months.shorthand.indexOf(e));
            },
            S: function(t, e) {
              t.setSeconds(parseFloat(e));
            },
            U: function(t, e) {
              return new Date(1e3 * parseFloat(e));
            },
            W: function(t, e) {
              var n = parseInt(e);
              return new Date(t.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
            },
            Y: function(t, e) {
              t.setFullYear(parseFloat(e));
            },
            Z: function(t, e) {
              return new Date(e);
            },
            d: function(t, e) {
              t.setDate(parseFloat(e));
            },
            h: function(t, e) {
              t.setHours(parseFloat(e));
            },
            i: function(t, e) {
              t.setMinutes(parseFloat(e));
            },
            j: function(t, e) {
              t.setDate(parseFloat(e));
            },
            l: y,
            m: function(t, e) {
              t.setMonth(parseFloat(e) - 1);
            },
            n: function(t, e) {
              t.setMonth(parseFloat(e) - 1);
            },
            s: function(t, e) {
              t.setSeconds(parseFloat(e));
            },
            w: y,
            y: function(t, e) {
              t.setFullYear(2e3 + parseFloat(e));
            }
          },
          b = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
          },
          k = {
            Z: function(t) {
              return t.toISOString();
            },
            D: function(t, e, n) {
              return e.weekdays.shorthand[k.w(t, e, n)];
            },
            F: function(t, e, n) {
              return h(k.n(t, e, n) - 1, !1, e);
            },
            G: function(t, e, n) {
              return m(k.h(t, e, n));
            },
            H: function(t) {
              return m(t.getHours());
            },
            J: function(t, e) {
              return void 0 !== e.ordinal
                ? t.getDate() + e.ordinal(t.getDate())
                : t.getDate();
            },
            K: function(t) {
              return t.getHours() > 11 ? "PM" : "AM";
            },
            M: function(t, e) {
              return h(t.getMonth(), !0, e);
            },
            S: function(t) {
              return m(t.getSeconds());
            },
            U: function(t) {
              return t.getTime() / 1e3;
            },
            W: function(t, e, n) {
              return n.getWeek(t);
            },
            Y: function(t) {
              return t.getFullYear();
            },
            d: function(t) {
              return m(t.getDate());
            },
            h: function(t) {
              return t.getHours() % 12 ? t.getHours() % 12 : 12;
            },
            i: function(t) {
              return m(t.getMinutes());
            },
            j: function(t) {
              return t.getDate();
            },
            l: function(t, e) {
              return e.weekdays.longhand[t.getDay()];
            },
            m: function(t) {
              return m(t.getMonth() + 1);
            },
            n: function(t) {
              return t.getMonth() + 1;
            },
            s: function(t) {
              return t.getSeconds();
            },
            w: function(t) {
              return t.getDay();
            },
            y: function(t) {
              return String(t.getFullYear()).substring(2);
            }
          };
        "function" != typeof Object.assign &&
          (Object.assign = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            if (!t)
              throw TypeError("Cannot convert undefined or null to object");
            for (var i = 0, o = e; i < o.length; i++) {
              var r = o[i];
              !(function(e) {
                e &&
                  Object.keys(e).forEach(function(n) {
                    return (t[n] = e[n]);
                  });
              })(r);
            }
            return t;
          }),
          "undefined" != typeof HTMLElement &&
            ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(
              t
            ) {
              return c(this, t);
            }),
            (HTMLElement.prototype.flatpickr = function(t) {
              return c([this], t);
            }));
        var C;
        return (
          (C = function(t, e) {
            return t instanceof NodeList
              ? c(t, e)
              : "string" == typeof t
                ? c(window.document.querySelectorAll(t), e)
                : c([t], e);
          }),
          "object" == typeof window && (window.flatpickr = C),
          (C.defaultConfig = p),
          (C.l10ns = { en: u({}, g), default: u({}, g) }),
          (C.localize = function(t) {
            C.l10ns.default = u({}, C.l10ns.default, t);
          }),
          (C.setDefaults = function(t) {
            C.defaultConfig = u({}, C.defaultConfig, t);
          }),
          "undefined" != typeof jQuery &&
            (jQuery.fn.flatpickr = function(t) {
              return c(this, t);
            }),
          (Date.prototype.fp_incr = function(t) {
            return new Date(
              this.getFullYear(),
              this.getMonth(),
              this.getDate() + ("string" == typeof t ? parseInt(t, 10) : t)
            );
          }),
          C
        );
      });
    },
    function(t, e) {},
    function(t, e, n) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        l = n(0),
        c = i(l),
        u = n(30),
        h = i(u),
        d = n(42),
        f = (i(d),
        (function(t) {
          function e(t) {
            return (
              o(this, e),
              r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            );
          }
          return (
            a(e, t),
            s(e, [
              {
                key: "render",
                value: function() {
                  return c.default.createElement(
                    "section",
                    null,
                    c.default.createElement(
                      "nav",
                      {
                        className: "uk-navbar-container",
                        "data-uk-navbar": !0
                      },
                      c.default.createElement(
                        "div",
                        { className: "uk-navbar-left" },
                        c.default.createElement(
                          "a",
                          {
                            className:
                              "uk-navbar-item uk-logo uk-margin-remove-bottom",
                            href: "index.html"
                          },
                          c.default.createElement("img", {
                            className: "brand-logo",
                            src: h.default,
                            alt: "FindCare"
                          })
                        )
                      ),
                      c.default.createElement(
                        "div",
                        { className: "uk-navbar-right" },
                        c.default.createElement("a", {
                          className: "uk-navbar-toggle uk-hidden@m",
                          "data-uk-navbar-toggle-icon": !0,
                          href: "#",
                          type: "button",
                          "uk-toggle": "target: #offcanvas-push"
                        }),
                        c.default.createElement(
                          "div",
                          { className: "uk-container uk-visible@m" },
                          c.default.createElement(
                            "ul",
                            { className: "uk-navbar-nav" },
                            c.default.createElement(
                              "li",
                              {
                                className: "uk-button uk-padding-remove-right"
                              },
                              c.default.createElement(
                                "a",
                                { className: "uk-margin-remove", href: "#" },
                                "Book Appointment"
                              )
                            ),
                            c.default.createElement(
                              "li",
                              { className: "uk-button uk-padding-remove-left" },
                              c.default.createElement(
                                "a",
                                { className: "uk-margin-remove", href: "#" },
                                "Logout"
                              )
                            )
                          )
                        )
                      ),
                      c.default.createElement(
                        "div",
                        {
                          id: "offcanvas-push",
                          "uk-offcanvas": "flip: true; overlay: true"
                        },
                        c.default.createElement(
                          "div",
                          {
                            className: "uk-offcanvas-bar uk-flex uk-flex-column"
                          },
                          c.default.createElement("button", {
                            className: "uk-offcanvas-close",
                            type: "button",
                            "data-uk-close": !0
                          }),
                          c.default.createElement(
                            "ul",
                            {
                              className:
                                "uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"
                            },
                            c.default.createElement(
                              "li",
                              { className: "uk-nav-header" },
                              "Menu"
                            ),
                            c.default.createElement("li", {
                              className: "uk-divider-icon"
                            }),
                            c.default.createElement(
                              "li",
                              { className: "uk-parent" },
                              c.default.createElement(
                                "a",
                                { href: "index.html" },
                                "Book Appointment"
                              )
                            ),
                            c.default.createElement(
                              "li",
                              { className: "uk-parent" },
                              c.default.createElement(
                                "a",
                                { href: "about.html" },
                                "Logout"
                              )
                            )
                          )
                        )
                      )
                    ),
                    c.default.createElement(
                      "div",
                      { className: "uk-section uk-padding-remove" },
                      c.default.createElement(
                        "div",
                        { className: "uk-container" },
                        c.default.createElement(
                          "div",
                          { className: "uk-grid uk-padding-small" },
                          c.default.createElement(
                            "div",
                            { className: "uk-width-1-3@m" },
                            c.default.createElement(
                              "div",
                              {
                                className:
                                  "uk- pcard uk-card-default uk-card-body"
                              },
                              c.default.createElement(
                                "p",
                                { className: "uk-text-meta" },
                                "Welcome"
                              ),
                              c.default.createElement(
                                "h2",
                                {
                                  className:
                                    "uk-card-title uk-margin-remove-top"
                                },
                                "Akkshay Lawrence"
                              ),
                              c.default.createElement(
                                "p",
                                null,
                                "Your Appointments"
                              ),
                              c.default.createElement("hr", null),
                              c.default.createElement(
                                "dl",
                                { className: "uk-description-list" },
                                c.default.createElement(
                                  "dt",
                                  null,
                                  c.default.createElement("span", {
                                    "uk-icon": "icon: calendar"
                                  }),
                                  " 5th, November 2017"
                                ),
                                c.default.createElement(
                                  "dd",
                                  null,
                                  c.default.createElement("span", {
                                    "uk-icon": "icon: user"
                                  }),
                                  " Dr. Unnikrishnan"
                                ),
                                c.default.createElement(
                                  "dt",
                                  null,
                                  c.default.createElement("span", {
                                    "uk-icon": "icon: calendar"
                                  }),
                                  " 7th, December 2017"
                                ),
                                c.default.createElement(
                                  "dd",
                                  null,
                                  c.default.createElement("span", {
                                    "uk-icon": "icon: user"
                                  }),
                                  " Dr. Unnikrishnan"
                                )
                              )
                            )
                          ),
                          c.default.createElement(
                            "div",
                            { className: "uk-width-2-3@m" },
                            c.default.createElement(
                              "div",
                              {
                                className:
                                  "uk- pcard uk-card-default uk-card-body"
                              },
                              c.default.createElement(
                                "h3",
                                { className: "uk-card-title" },
                                "Your Appointments"
                              ),
                              c.default.createElement(
                                "p",
                                null,
                                "Lorem ipsum ",
                                c.default.createElement(
                                  "a",
                                  { href: "#" },
                                  "dolor"
                                ),
                                " sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                              )
                            )
                          )
                        )
                      )
                    ),
                    c.default.createElement(
                      "div",
                      {
                        className:
                          "uk-section uk-padding-remove uk-section-default footer"
                      },
                      c.default.createElement(
                        "div",
                        { className: "footer-bottom" },
                        c.default.createElement(
                          "p",
                          {
                            className:
                              "uk-text-center uk-text-middle uk-text-small uk-padding-small uk-padding-remove-vertical uk-margin-remove-bottom"
                          },
                          "Made by Phoenix"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(c.default.Component));
      e.default = f;
    },
    function(t, e, n) {
      n(56), n(63), n(69), n(141), (t.exports = n(15).Map);
    },
    function(t, e, n) {
      var i = n(32),
        o = n(33);
      t.exports = function(t) {
        return function(e, n) {
          var r,
            a,
            s = String(o(e)),
            l = i(n),
            c = s.length;
          return l < 0 || l >= c
            ? t ? "" : void 0
            : ((r = s.charCodeAt(l)),
              r < 55296 ||
              r > 56319 ||
              l + 1 === c ||
              (a = s.charCodeAt(l + 1)) < 56320 ||
              a > 57343
                ? t ? s.charAt(l) : r
                : t
                  ? s.slice(l, l + 2)
                  : a - 56320 + ((r - 55296) << 10) + 65536);
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
      var i = n(65),
        o = n(31),
        r = n(36),
        a = {};
      n(10)(a, n(4)("iterator"), function() {
        return this;
      }),
        (t.exports = function(t, e, n) {
          (t.prototype = i(a, { next: o(1, n) })), r(t, e + " Iterator");
        });
    },
    function(t, e, n) {
      var i = n(11),
        o = n(12),
        r = n(66);
      t.exports = n(7)
        ? Object.defineProperties
        : function(t, e) {
            o(t);
            for (var n, a = r(e), s = a.length, l = 0; s > l; )
              i.f(t, (n = a[l++]), e[n]);
            return t;
          };
    },
    function(t, e, n) {
      var i = n(8),
        o = n(24),
        r = n(134)(!1),
        a = n(35)("IE_PROTO");
      t.exports = function(t, e) {
        var n,
          s = o(t),
          l = 0,
          c = [];
        for (n in s) n != a && i(s, n) && c.push(n);
        for (; e.length > l; ) i(s, (n = e[l++])) && (~r(c, n) || c.push(n));
        return c;
      };
    },
    function(t, e, n) {
      var i = n(58);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == i(t) ? t.split("") : Object(t);
          };
    },
    function(t, e, n) {
      var i = n(24),
        o = n(67),
        r = n(135);
      t.exports = function(t) {
        return function(e, n, a) {
          var s,
            l = i(e),
            c = o(l.length),
            u = r(a, c);
          if (t && n != n) {
            for (; c > u; ) if ((s = l[u++]) != s) return !0;
          } else
            for (; c > u; u++)
              if ((t || u in l) && l[u] === n) return t || u || 0;
          return !t && -1;
        };
      };
    },
    function(t, e, n) {
      var i = n(32),
        o = Math.max,
        r = Math.min;
      t.exports = function(t, e) {
        return (t = i(t)), t < 0 ? o(t + e, 0) : r(t, e);
      };
    },
    function(t, e, n) {
      var i = n(5).document;
      t.exports = i && i.documentElement;
    },
    function(t, e, n) {
      var i = n(8),
        o = n(138),
        r = n(35)("IE_PROTO"),
        a = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = o(t)),
            i(t, r)
              ? t[r]
              : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object ? a : null
          );
        };
    },
    function(t, e, n) {
      var i = n(33);
      t.exports = function(t) {
        return Object(i(t));
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(140),
        o = n(70),
        r = n(16),
        a = n(24);
      (t.exports = n(34)(
        Array,
        "Array",
        function(t, e) {
          (this._t = a(t)), (this._i = 0), (this._k = e);
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
      var i = n(4)("unscopables"),
        o = Array.prototype;
      void 0 == o[i] && n(10)(o, i, {}),
        (t.exports = function(t) {
          o[i][t] = !0;
        });
    },
    function(t, e, n) {
      "use strict";
      var i = n(71),
        o = n(37);
      t.exports = n(76)(
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
      var i = n(12);
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
      var i = n(16),
        o = n(4)("iterator"),
        r = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (i.Array === t || r[o] === t);
      };
    },
    function(t, e, n) {
      var i = n(57),
        o = n(4)("iterator"),
        r = n(16);
      t.exports = n(15).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || r[i(t)];
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(5),
        o = n(11),
        r = n(7),
        a = n(4)("species");
      t.exports = function(t) {
        var e = i[t];
        r &&
          e &&
          !e[a] &&
          o.f(e, a, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    function(t, e, n) {
      var i = n(4)("iterator"),
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
            a = r[i]();
          (a.next = function() {
            return { done: (n = !0) };
          }),
            (r[i] = function() {
              return a;
            }),
            t(r);
        } catch (t) {}
        return n;
      };
    },
    function(t, e, n) {
      var i = n(6),
        o = n(148).set;
      t.exports = function(t, e, n) {
        var r,
          a = e.constructor;
        return (
          a !== n &&
            "function" == typeof a &&
            (r = a.prototype) !== n.prototype &&
            i(r) &&
            o &&
            o(t, r),
          t
        );
      };
    },
    function(t, e, n) {
      var i = n(6),
        o = n(12),
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
                  (i = n(23)(
                    Function.call,
                    n(149).f(Object.prototype, "__proto__").set,
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
      var i = n(150),
        o = n(31),
        r = n(24),
        a = n(62),
        s = n(8),
        l = n(60),
        c = Object.getOwnPropertyDescriptor;
      e.f = n(7)
        ? c
        : function(t, e) {
            if (((t = r(t)), (e = a(e, !0)), l))
              try {
                return c(t, e);
              } catch (t) {}
            if (s(t, e)) return o(!i.f.call(t, e), t[e]);
          };
    },
    function(t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function(t, e, n) {
      n(56), n(63), n(69), n(152), (t.exports = n(15).Set);
    },
    function(t, e, n) {
      "use strict";
      var i = n(71),
        o = n(37);
      t.exports = n(76)(
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
  [77]
);
