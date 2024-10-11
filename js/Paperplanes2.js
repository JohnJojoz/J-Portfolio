!(function (t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).enquire = t());
})(function () {
  return (function i(o, r, s) {
    function u(e, t) {
      if (!r[e]) {
        if (!o[e]) {
          var n = "function" == typeof require && require;
          if (!t && n) return n(e, !0);
          if (c) return c(e, !0);
          t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        n = r[e] = { exports: {} };
        o[e][0].call(
          n.exports,
          function (t) {
            var n = o[e][1][t];
            return u(n || t);
          },
          n,
          n.exports,
          i,
          o,
          r,
          s
        );
      }
      return r[e].exports;
    }
    for (
      var c = "function" == typeof require && require, t = 0;
      t < s.length;
      t++
    )
      u(s[t]);
    return u;
  })(
    {
      1: [
        function (t, n, e) {
          function i(t, n) {
            (this.query = t),
              (this.isUnconditional = n),
              (this.handlers = []),
              (this.mql = window.matchMedia(t));
            var e = this;
            (this.listener = function (t) {
              (e.mql = t.currentTarget || t), e.assess();
            }),
              this.mql.addListener(this.listener);
          }
          var o = t(3),
            r = t(4).each;
          (i.prototype = {
            constuctor: i,
            addHandler: function (t) {
              t = new o(t);
              this.handlers.push(t), this.matches() && t.on();
            },
            removeHandler: function (e) {
              var i = this.handlers;
              r(i, function (t, n) {
                if (t.equals(e)) return t.destroy(), !i.splice(n, 1);
              });
            },
            matches: function () {
              return this.mql.matches || this.isUnconditional;
            },
            clear: function () {
              r(this.handlers, function (t) {
                t.destroy();
              }),
                this.mql.removeListener(this.listener),
                (this.handlers.length = 0);
            },
            assess: function () {
              var n = this.matches() ? "on" : "off";
              r(this.handlers, function (t) {
                t[n]();
              });
            },
          }),
            (n.exports = i);
        },
        { 3: 3, 4: 4 },
      ],
      2: [
        function (t, n, e) {
          function i() {
            if (!window.matchMedia)
              throw new Error(
                "matchMedia not present, legacy browsers require a polyfill"
              );
            (this.queries = {}),
              (this.browserIsIncapable =
                !window.matchMedia("only all").matches);
          }
          var o = t(1),
            t = t(4),
            r = t.each,
            s = t.isFunction,
            u = t.isArray;
          (i.prototype = {
            constructor: i,
            register: function (n, t, e) {
              var i = this.queries,
                e = e && this.browserIsIncapable;
              return (
                i[n] || (i[n] = new o(n, e)),
                s(t) && (t = { match: t }),
                u(t) || (t = [t]),
                r(t, function (t) {
                  s(t) && (t = { match: t }), i[n].addHandler(t);
                }),
                this
              );
            },
            unregister: function (t, n) {
              var e = this.queries[t];
              return (
                e &&
                  (n
                    ? e.removeHandler(n)
                    : (e.clear(), delete this.queries[t])),
                this
              );
            },
          }),
            (n.exports = i);
        },
        { 1: 1, 4: 4 },
      ],
      3: [
        function (t, n, e) {
          function i(t) {
            (this.options = t).deferSetup || this.setup();
          }
          (i.prototype = {
            constructor: i,
            setup: function () {
              this.options.setup && this.options.setup(),
                (this.initialised = !0);
            },
            on: function () {
              this.initialised || this.setup(),
                this.options.match && this.options.match();
            },
            off: function () {
              this.options.unmatch && this.options.unmatch();
            },
            destroy: function () {
              this.options.destroy ? this.options.destroy() : this.off();
            },
            equals: function (t) {
              return this.options === t || this.options.match === t;
            },
          }),
            (n.exports = i);
        },
        {},
      ],
      4: [
        function (t, n, e) {
          n.exports = {
            isFunction: function (t) {
              return "function" == typeof t;
            },
            isArray: function (t) {
              return "[object Array]" === Object.prototype.toString.apply(t);
            },
            each: function (t, n) {
              for (var e = 0, i = t.length; e < i && !1 !== n(t[e], e); e++);
            },
          };
        },
        {},
      ],
      5: [
        function (t, n, e) {
          t = t(2);
          n.exports = new t();
        },
        { 2: 2 },
      ],
    },
    {},
    [5]
  )(5);
});
!(function (n, e) {
  "function" == typeof define && define.amd
    ? define(e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (n.NProgress = e());
})(this, function () {
  var e,
    t,
    s = { version: "0.2.0" },
    a = (s.settings = {
      minimum: 0.08,
      easing: "linear",
      positionUsing: "",
      speed: 350,
      trickle: !0,
      trickleSpeed: 250,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template:
        '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    });
  function u(n, e, t) {
    return n < e ? e : t < n ? t : n;
  }
  function c(n) {
    return 100 * (-1 + n);
  }
  (s.configure = function (n) {
    var e, t;
    for (e in n) void 0 !== (t = n[e]) && n.hasOwnProperty(e) && (a[e] = t);
    return this;
  }),
    (s.status = null),
    (s.set = function (e) {
      var n = s.isStarted(),
        t =
          ((e = u(e, a.minimum, 1)),
          (s.status = 1 === e ? null : e),
          s.render(!n)),
        r = t.querySelector(a.barSelector),
        i = a.speed,
        o = a.easing;
      return (
        t.offsetWidth,
        l(function (n) {
          "" === a.positionUsing && (a.positionUsing = s.getPositioningCSS()),
            f(
              r,
              (function (n, e, t) {
                n =
                  "translate3d" === a.positionUsing
                    ? { transform: "translate3d(" + c(n) + "%,0,0)" }
                    : "translate" === a.positionUsing
                    ? { transform: "translate(" + c(n) + "%,0)" }
                    : { "margin-left": c(n) + "%" };
                return (n.transition = "all " + e + "ms " + t), n;
              })(e, i, o)
            ),
            1 === e
              ? (f(t, { transition: "none", opacity: 1 }),
                t.offsetWidth,
                setTimeout(function () {
                  f(t, { transition: "all " + i + "ms linear", opacity: 0 }),
                    setTimeout(function () {
                      s.remove(), n();
                    }, i);
                }, i))
              : setTimeout(n, i);
        }),
        this
      );
    }),
    (s.isStarted = function () {
      return "number" == typeof s.status;
    }),
    (s.start = function () {
      s.status || s.set(0);
      var n = function () {
        setTimeout(function () {
          s.status && (s.trickle(), n());
        }, a.trickleSpeed);
      };
      return a.trickle && n(), this;
    }),
    (s.done = function (n) {
      return n || s.status ? s.inc(0.3 + 0.5 * Math.random()).set(1) : this;
    }),
    (s.inc = function (n) {
      var e = s.status;
      return e
        ? 1 < e
          ? void 0
          : ((e = u(
              e +
                (n =
                  "number" != typeof n
                    ? 0 <= e && e < 0.25
                      ? (3 * Math.random() + 3) / 100
                      : 0.25 <= e && e < 0.65
                      ? (3 * Math.random()) / 100
                      : 0.65 <= e && e < 0.9
                      ? (2 * Math.random()) / 100
                      : 0.9 <= e && e < 0.99
                      ? 0.005
                      : 0
                    : n),
              0,
              0.994
            )),
            s.set(e))
        : s.start();
    }),
    (s.trickle = function () {
      return s.inc();
    }),
    (t = e = 0),
    (s.promise = function (n) {
      return (
        n &&
          "resolved" !== n.state() &&
          (0 === t && s.start(),
          e++,
          t++,
          n.always(function () {
            0 === --t ? ((e = 0), s.done()) : s.set((e - t) / e);
          })),
        this
      );
    }),
    (s.render = function (n) {
      if (s.isRendered()) return document.getElementById("nprogress");
      v(document.documentElement, "nprogress-busy");
      var e = document.createElement("div"),
        t =
          ((e.id = "nprogress"),
          (e.innerHTML = a.template),
          e.querySelector(a.barSelector)),
        n = n ? "-100" : c(s.status || 0),
        r = document.querySelector(a.parent);
      return (
        f(t, {
          transition: "all 0 linear",
          transform: "translate3d(" + n + "%,0,0)",
        }),
        a.showSpinner || ((t = e.querySelector(a.spinnerSelector)) && b(t)),
        r != document.body && v(r, "nprogress-custom-parent"),
        r.appendChild(e),
        e
      );
    }),
    (s.remove = function () {
      y(document.documentElement, "nprogress-busy"),
        y(document.querySelector(a.parent), "nprogress-custom-parent");
      var n = document.getElementById("nprogress");
      n && b(n);
    }),
    (s.isRendered = function () {
      return !!document.getElementById("nprogress");
    }),
    (s.getPositioningCSS = function () {
      var n = document.body.style,
        e =
          "WebkitTransform" in n
            ? "Webkit"
            : "MozTransform" in n
            ? "Moz"
            : "msTransform" in n
            ? "ms"
            : "OTransform" in n
            ? "O"
            : "";
      return e + "Perspective" in n
        ? "translate3d"
        : e + "Transform" in n
        ? "translate"
        : "margin";
    });
  r = [];
  var r,
    l = function (n) {
      r.push(n), 1 == r.length && i();
    };
  function i() {
    var n = r.shift();
    n && n(i);
  }
  (o = ["Webkit", "O", "Moz", "ms"]), (d = {});
  var o,
    d,
    f = function (n, e) {
      var t,
        r,
        i = arguments;
      if (2 == i.length)
        for (t in e) void 0 !== (r = e[t]) && e.hasOwnProperty(t) && p(n, t, r);
      else p(n, i[1], i[2]);
    };
  function m(n) {
    return (
      (n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (n, e) {
        return e.toUpperCase();
      })),
      d[n] ||
        (d[n] = (function (n) {
          var e = document.body.style;
          if (!(n in e))
            for (
              var t, r = o.length, i = n.charAt(0).toUpperCase() + n.slice(1);
              r--;

            )
              if ((t = o[r] + i) in e) return t;
          return n;
        })(n))
    );
  }
  function p(n, e, t) {
    (e = m(e)), (n.style[e] = t);
  }
  function g(n, e) {
    return 0 <= ("string" == typeof n ? n : h(n)).indexOf(" " + e + " ");
  }
  function v(n, e) {
    var t = h(n),
      r = t + e;
    g(t, e) || (n.className = r.substring(1));
  }
  function y(n, e) {
    var t = h(n);
    g(n, e) &&
      ((t = t.replace(" " + e + " ", " ")),
      (n.className = t.substring(1, t.length - 1)));
  }
  function h(n) {
    return (" " + ((n && n.className) || "") + " ").replace(/\s+/gi, " ");
  }
  function b(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  return s;
});
!(function (f) {
  f.fn.isOnScreen = function (t, o) {
    (null != t && void 0 !== t) || (t = 1),
      (null != o && void 0 !== o) || (o = 1);
    var i = f(window),
      r = { top: i.scrollTop(), left: i.scrollLeft() },
      i =
        ((r.right = r.left + i.width()),
        (r.bottom = r.top + i.height()),
        this.outerHeight()),
      e = this.outerWidth();
    if (!e || !i) return !1;
    var h = this.offset();
    if (
      ((h.right = h.left + e),
      (h.bottom = h.top + i),
      !!(
        r.right < h.left ||
        r.left > h.right ||
        r.bottom < h.top ||
        r.top > h.bottom
      ))
    )
      return !1;
    var n = Math.min(1, (h.bottom - r.top) / i),
      i = Math.min(1, (r.bottom - h.top) / i);
    return (
      t <=
        Math.min(1, (h.right - r.left) / e) *
          Math.min(1, (r.right - h.left) / e) && o <= n * i
    );
  };
})(jQuery);
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipe = t());
})(this, function () {
  "use strict";
  return function (p, _, t, z) {
    function e() {
      return { x: 0, y: 0 };
    }
    function N(e, t) {
      y.extend(x, t.publicMethods), We.push(e);
    }
    function U(e) {
      var t = Z();
      return t - 1 < e ? e - t : e < 0 ? t + e : e;
    }
    function a(e, t) {
      return Ve[e] || (Ve[e] = []), Ve[e].push(t);
    }
    function H(e, t, n, i) {
      i === x.currItem.initialZoomLevel
        ? (n[e] = x.currItem.initialPosition[e])
        : ((n[e] = Je(e, i)),
          n[e] > t.min[e]
            ? (n[e] = t.min[e])
            : n[e] < t.max[e] && (n[e] = t.max[e]));
    }
    function Y(e) {
      var t = "";
      g.escKey && 27 === e.keyCode
        ? (t = "close")
        : g.arrowKeys &&
          (37 === e.keyCode ? (t = "prev") : 39 === e.keyCode && (t = "next")),
        !t ||
          e.ctrlKey ||
          e.altKey ||
          e.shiftKey ||
          e.metaKey ||
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          x[t]());
    }
    function B(e) {
      e && (Se || Te || h || Ce) && (e.preventDefault(), e.stopPropagation());
    }
    function W() {
      x.setScrollOffset(0, y.getScrollY());
    }
    function G(e) {
      var t;
      ("mousedown" === e.type && 0 < e.button) ||
        (Jt
          ? e.preventDefault()
          : (De && "mousedown" === e.type) ||
            (Ot(e, !0) && e.preventDefault(),
            C("pointerDown"),
            pe &&
              ((t = y.arraySearch(ft, e.pointerId, "id")) < 0 &&
                (t = ft.length),
              (ft[t] = { x: e.pageX, y: e.pageY, id: e.pointerId })),
            (e = (t = zt(e)).length),
            (c = null),
            st(),
            (s && 1 !== e) ||
              ((s = Ze = !0),
              y.bind(window, Q, x),
              (Ie = Le = Pe = Ce = Ee = Se = Me = Te = !1),
              (Re = null),
              C("firstTouchStart", t),
              S(Ue, v),
              (Ne.x = Ne.y = 0),
              S(k, t[0]),
              S(mt, k),
              (ht.x = b.x * He),
              (yt = [{ x: k.x, y: k.y }]),
              (we = ve = D()),
              nt(f, !0),
              Mt(),
              Tt()),
            !u &&
              1 < e &&
              !h &&
              !Ee &&
              ((te = f),
              (u = Me = !(Te = !1)),
              (Ne.y = Ne.x = 0),
              S(Ue, v),
              S(E, t[0]),
              S(pt, t[1]),
              Rt(E, pt, It),
              (bt.x = Math.abs(It.x) - v.x),
              (bt.y = Math.abs(It.y) - v.y),
              (Oe = Dt(E, pt)))));
    }
    function X(e) {
      var t;
      e.preventDefault(),
        pe &&
          -1 < (t = y.arraySearch(ft, e.pointerId, "id")) &&
          (((t = ft[t]).x = e.pageX), (t.y = e.pageY)),
        s &&
          ((t = zt(e)),
          Re || Se || u
            ? (c = t)
            : R.x !== b.x * He
            ? (Re = "h")
            : ((e = Math.abs(t[0].x - k.x) - Math.abs(t[0].y - k.y)),
              Math.abs(e) >= dt && ((Re = 0 < e ? "h" : "v"), (c = t))));
    }
    function V(e) {
      if (l.isOldAndroid) {
        if (De && "mouseup" === e.type) return;
        -1 < e.type.indexOf("touch") &&
          (clearTimeout(De),
          (De = setTimeout(function () {
            De = 0;
          }, 600)));
      }
      C("pointerUp"),
        Ot(e, !1) && e.preventDefault(),
        pe &&
          -1 < (a = y.arraySearch(ft, e.pointerId, "id")) &&
          ((t = ft.splice(a, 1)[0]),
          navigator.pointerEnabled
            ? (t.type = e.pointerType || "mouse")
            : ((t.type = { 4: "mouse", 2: "touch", 3: "pen" }[e.pointerType]),
              t.type || (t.type = e.pointerType || "mouse")));
      var t,
        n = (a = zt(e)).length;
      if (2 === (n = "mouseup" === e.type ? 0 : n)) return !(c = null);
      1 === n && S(mt, a[0]),
        0 !== n ||
          Re ||
          h ||
          (t ||
            ("mouseup" === e.type
              ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
              : e.changedTouches &&
                e.changedTouches[0] &&
                (t = {
                  x: e.changedTouches[0].pageX,
                  y: e.changedTouches[0].pageY,
                  type: "touch",
                })),
          C("touchRelease", e, t));
      var i,
        o,
        a = -1;
      if (
        (0 === n &&
          ((s = !1),
          y.unbind(window, Q, x),
          Mt(),
          u ? (a = 0) : -1 !== wt && (a = D() - wt)),
        (wt = 1 === n ? D() : -1),
        (e = -1 !== a && a < 150 ? "zoom" : "swipe"),
        u &&
          n < 2 &&
          ((u = !1), 1 === n && (e = "zoomPointerUp"), C("zoomGestureEnded")),
        (c = null),
        Se || Te || h || Ce)
      )
        if ((st(), (be = be || Ht()).calculateSwipeSpeed("x"), Ce))
          Pt() < g.verticalDragRange
            ? x.close()
            : ((i = v.y),
              (o = Fe),
              ct("verticalDrag", 0, 1, 300, y.easing.cubic.out, function (e) {
                (v.y = (x.currItem.initialPosition.y - i) * e + i),
                  M((1 - o) * e + o),
                  T();
              }),
              C("onVerticalDrag", 1));
        else {
          if ((Ee || h) && 0 === n) {
            if (Bt(e, be)) return;
            e = "zoomPointerUp";
          }
          h ||
            ("swipe" !== e ? Gt() : !Ee && f > x.currItem.fitRatio && Yt(be));
        }
    }
    var K,
      q,
      $,
      m,
      j,
      J,
      Q,
      ee,
      i,
      f,
      te,
      ne,
      ie,
      oe,
      ae,
      r,
      re,
      le,
      se,
      ce,
      ue,
      de,
      pe,
      o,
      me,
      fe,
      he,
      ye,
      xe,
      ge,
      l,
      ve,
      we,
      be,
      Ie,
      Ce,
      De,
      s,
      Me,
      Te,
      Se,
      Ae,
      Ee,
      c,
      u,
      Oe,
      d,
      ke,
      h,
      Re,
      Ze,
      Pe,
      Fe,
      Le,
      _e,
      y = {
        features: null,
        bind: function (e, t, n, i) {
          var o = (i ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1);
        },
        isArray: function (e) {
          return e instanceof Array;
        },
        createEl: function (e, t) {
          t = document.createElement(t || "div");
          return e && (t.className = e), t;
        },
        getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop;
        },
        unbind: function (e, t, n) {
          y.bind(e, t, n, !0);
        },
        removeClass: function (e, t) {
          t = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className
            .replace(t, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function (e, t) {
          y.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
        },
        hasClass: function (e, t) {
          return (
            e.className &&
            new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          );
        },
        getChildByClass: function (e, t) {
          for (var n = e.firstChild; n; ) {
            if (y.hasClass(n, t)) return n;
            n = n.nextSibling;
          }
        },
        arraySearch: function (e, t, n) {
          for (var i = e.length; i--; ) if (e[i][n] === t) return i;
          return -1;
        },
        extend: function (e, t, n) {
          for (var i in t)
            !t.hasOwnProperty(i) || (n && e.hasOwnProperty(i)) || (e[i] = t[i]);
        },
        easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            },
          },
          cubic: {
            out: function (e) {
              return --e * e * e + 1;
            },
          },
        },
        detectFeatures: function () {
          if (y.features) return y.features;
          for (
            var e,
              t,
              n,
              i,
              o,
              a = y.createEl().style,
              r = "",
              l = {},
              s =
                ((l.oldIE = document.all && !document.addEventListener),
                (l.touch = ("ontouchstart" in window)),
                window.requestAnimationFrame &&
                  ((l.raf = window.requestAnimationFrame),
                  (l.caf = window.cancelAnimationFrame)),
                (l.pointerEvent =
                  navigator.pointerEnabled || navigator.msPointerEnabled),
                l.pointerEvent ||
                  ((e = navigator.userAgent),
                  /iP(hone|od)/.test(navigator.platform) &&
                    (t = navigator.appVersion.match(
                      /OS (\d+)_(\d+)_?(\d+)?/
                    )) &&
                    0 < t.length &&
                    1 <= (t = parseInt(t[1], 10)) &&
                    t < 8 &&
                    (l.isOldIOSPhone = !0),
                  (t = (t = e.match(/Android\s([0-9\.]*)/)) ? t[1] : 0),
                  1 <= (t = parseFloat(t)) &&
                    (t < 4.4 && (l.isOldAndroid = !0), (l.androidVersion = t)),
                  (l.isMobileOpera = /opera mini|opera mobi/i.test(e))),
                ["transform", "perspective", "animationName"]),
              c = ["", "webkit", "Moz", "ms", "O"],
              u = 0;
            u < 4;
            u++
          ) {
            for (var r = c[u], d = 0; d < 3; d++)
              (n = s[d]),
                (i = r + (r ? n.charAt(0).toUpperCase() + n.slice(1) : n)),
                !l[n] && i in a && (l[n] = i);
            r &&
              !l.raf &&
              ((r = r.toLowerCase()),
              (l.raf = window[r + "RequestAnimationFrame"]),
              l.raf &&
                (l.caf =
                  window[r + "CancelAnimationFrame"] ||
                  window[r + "CancelRequestAnimationFrame"]));
          }
          return (
            l.raf ||
              ((o = 0),
              (l.raf = function (e) {
                var t = new Date().getTime(),
                  n = Math.max(0, 16 - (t - o)),
                  i = window.setTimeout(function () {
                    e(t + n);
                  }, n);
                return (o = t + n), i;
              }),
              (l.caf = function (e) {
                clearTimeout(e);
              })),
            (l.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (y.features = l)
          );
        },
      },
      x =
        (y.detectFeatures(),
        y.features.oldIE &&
          (y.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (
              var o,
                a = (i ? "detach" : "attach") + "Event",
                r = function () {
                  n.handleEvent.call(n);
                },
                l = 0;
              l < t.length;
              l++
            )
              if ((o = t[l]))
                if ("object" == typeof n && n.handleEvent) {
                  if (i) {
                    if (!n["oldIE" + o]) return !1;
                  } else n["oldIE" + o] = r;
                  e[a]("on" + o, n["oldIE" + o]);
                } else e[a]("on" + o, n);
          }),
        this),
      ze = 25,
      g = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (e) {
          return "A" === e.tagName;
        },
        getDoubleTapZoom: function (e, t) {
          return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit",
      },
      Ne = (y.extend(g, z), e()),
      Ue = e(),
      v = e(),
      w = {},
      He = 0,
      Ye = {},
      b = e(),
      I = 0,
      Be = !0,
      We = [],
      Ge = {},
      Xe = !1,
      Ve = {},
      C = function (e) {
        var t = Ve[e];
        if (t) {
          var n = Array.prototype.slice.call(arguments);
          n.shift();
          for (var i = 0; i < t.length; i++) t[i].apply(x, n);
        }
      },
      D = function () {
        return new Date().getTime();
      },
      M = function (e) {
        (Fe = e), (x.bg.style.opacity = e * g.bgOpacity);
      },
      Ke = function (e, t, n, i, o) {
        (!Xe || (o && o !== x.currItem)) && (i /= (o || x.currItem).fitRatio),
          (e[de] = ne + t + "px, " + n + "px" + ie + " scale(" + i + ")");
      },
      T = function (e) {
        ke &&
          (e &&
            (f > x.currItem.fitRatio
              ? Xe || (sn(x.currItem, !1, !0), (Xe = !0))
              : Xe && (sn(x.currItem), (Xe = !1))),
          Ke(ke, v.x, v.y, f));
      },
      qe = function (e) {
        e.container &&
          Ke(
            e.container.style,
            e.initialPosition.x,
            e.initialPosition.y,
            e.initialZoomLevel,
            e
          );
      },
      $e = function (e, t) {
        t[de] = ne + e + "px, 0px" + ie;
      },
      je = function (e, t) {
        var n;
        !g.loop &&
          t &&
          ((t = m + (b.x * He - e) / b.x),
          (n = Math.round(e - R.x)),
          ((t < 0 && 0 < n) || (t >= Z() - 1 && n < 0)) &&
            (e = R.x + n * g.mainScrollEndFriction)),
          (R.x = e),
          $e(e, j);
      },
      Je = function (e, t) {
        var n = bt[e] - Ye[e];
        return Ue[e] + Ne[e] + n - (t / te) * n;
      },
      S = function (e, t) {
        (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
      },
      Qe = function (e) {
        (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
      },
      et = null,
      tt = function () {
        et &&
          (y.unbind(document, "mousemove", tt),
          y.addClass(p, "pswp--has_mouse"),
          (g.mouseUsed = !0),
          C("mouseUsed")),
          (et = setTimeout(function () {
            et = null;
          }, 100));
      },
      nt = function (e, t) {
        e = rn(x.currItem, w, e);
        return t && (d = e), e;
      },
      it = function (e) {
        return (e = e || x.currItem).initialZoomLevel;
      },
      ot = function (e) {
        return 0 < (e = e || x.currItem).w ? g.maxSpreadZoom : 1;
      },
      A = {},
      at = 0,
      rt = function (e) {
        A[e] && (A[e].raf && fe(A[e].raf), at--, delete A[e]);
      },
      lt = function (e) {
        A[e] && rt(e), A[e] || (at++, (A[e] = {}));
      },
      st = function () {
        for (var e in A) A.hasOwnProperty(e) && rt(e);
      },
      ct = function (e, t, n, i, o, a, r) {
        function l() {
          A[e] &&
            ((s = D() - c),
            i <= s
              ? (rt(e), a(n), r && r())
              : (a((n - t) * o(s / i) + t), (A[e].raf = me(l))));
        }
        var s,
          c = D();
        lt(e);
        l();
      },
      z = {
        shout: C,
        listen: a,
        viewportSize: w,
        options: g,
        isMainScrollAnimating: function () {
          return h;
        },
        getZoomLevel: function () {
          return f;
        },
        getCurrentIndex: function () {
          return m;
        },
        isDragging: function () {
          return s;
        },
        isZooming: function () {
          return u;
        },
        setScrollOffset: function (e, t) {
          (Ye.x = e), (ge = Ye.y = t), C("updateScrollOffset", Ye);
        },
        applyZoomPan: function (e, t, n, i) {
          (v.x = t), (v.y = n), (f = e), T(i);
        },
        init: function () {
          if (!K && !q) {
            (x.framework = y),
              (x.template = p),
              (x.bg = y.getChildByClass(p, "pswp__bg")),
              (he = p.className),
              (K = !0),
              (l = y.detectFeatures()),
              (me = l.raf),
              (fe = l.caf),
              (de = l.transform),
              (xe = l.oldIE),
              (x.scrollWrap = y.getChildByClass(p, "pswp__scroll-wrap")),
              (x.container = y.getChildByClass(
                x.scrollWrap,
                "pswp__container"
              )),
              (j = x.container.style),
              (x.itemHolders = r =
                [
                  { el: x.container.children[0], wrap: 0, index: -1 },
                  { el: x.container.children[1], wrap: 0, index: -1 },
                  { el: x.container.children[2], wrap: 0, index: -1 },
                ]),
              (r[0].el.style.display = r[2].el.style.display = "none"),
              de
                ? ((t = l.perspective && !o),
                  (ne = "translate" + (t ? "3d(" : "(")),
                  (ie = l.perspective ? ", 0px)" : ")"))
                : ((de = "left"),
                  y.addClass(p, "pswp--ie"),
                  ($e = function (e, t) {
                    t.left = e + "px";
                  }),
                  (qe = function (e) {
                    var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                      n = e.container.style,
                      i = t * e.w,
                      t = t * e.h;
                    (n.width = i + "px"),
                      (n.height = t + "px"),
                      (n.left = e.initialPosition.x + "px"),
                      (n.top = e.initialPosition.y + "px");
                  }),
                  (T = function () {
                    var e, t, n, i;
                    ke &&
                      ((e = ke),
                      (n =
                        (i = 1 < (t = x.currItem).fitRatio ? 1 : t.fitRatio) *
                        t.w),
                      (i = i * t.h),
                      (e.width = n + "px"),
                      (e.height = i + "px"),
                      (e.left = v.x + "px"),
                      (e.top = v.y + "px"));
                  })),
              (i = { resize: x.updateSize, scroll: W, keydown: Y, click: B });
            var e,
              t = l.isOldIOSPhone || l.isOldAndroid || l.isMobileOpera;
            for (
              (l.animationName && l.transform && !t) ||
                (g.showAnimationDuration = g.hideAnimationDuration = 0),
                e = 0;
              e < We.length;
              e++
            )
              x["init" + We[e]]();
            _ && (x.ui = new _(x, y)).init(),
              C("firstUpdate"),
              (m = m || g.index || 0),
              (isNaN(m) || m < 0 || m >= Z()) && (m = 0),
              (x.currItem = Qt(m)),
              (l.isOldIOSPhone || l.isOldAndroid) && (Be = !1),
              p.setAttribute("aria-hidden", "false"),
              g.modal &&
                (Be
                  ? (p.style.position = "fixed")
                  : ((p.style.position = "absolute"),
                    (p.style.top = y.getScrollY() + "px"))),
              void 0 === ge && (C("initialLayout"), (ge = ye = y.getScrollY()));
            var n = "pswp--open ";
            for (
              g.mainClass && (n += g.mainClass + " "),
                g.showHideOpacity && (n += "pswp--animate_opacity "),
                n =
                  (n =
                    (n += o ? "pswp--touch" : "pswp--notouch") +
                    (l.animationName ? " pswp--css_animation" : "")) +
                  (l.svg ? " pswp--svg" : ""),
                y.addClass(p, n),
                x.updateSize(),
                J = -1,
                I = null,
                e = 0;
              e < 3;
              e++
            )
              $e((e + J) * b.x, r[e].el.style);
            xe || y.bind(x.scrollWrap, ee, x),
              a("initialZoomInEnd", function () {
                x.setContent(r[0], m - 1),
                  x.setContent(r[2], m + 1),
                  (r[0].el.style.display = r[2].el.style.display = "block"),
                  g.focus && p.focus(),
                  y.bind(document, "keydown", x),
                  l.transform && y.bind(x.scrollWrap, "click", x),
                  g.mouseUsed || y.bind(document, "mousemove", tt),
                  y.bind(window, "resize scroll", x),
                  C("bindEvents");
              }),
              x.setContent(r[1], m),
              x.updateCurrItem(),
              C("afterInit"),
              Be ||
                (oe = setInterval(function () {
                  at ||
                    s ||
                    u ||
                    f !== x.currItem.initialZoomLevel ||
                    x.updateSize();
                }, 1e3)),
              y.addClass(p, "pswp--visible");
          }
        },
        close: function () {
          K &&
            ((q = !(K = !1)),
            C("close"),
            y.unbind(window, "resize", x),
            y.unbind(window, "scroll", i.scroll),
            y.unbind(document, "keydown", x),
            y.unbind(document, "mousemove", tt),
            l.transform && y.unbind(x.scrollWrap, "click", x),
            s && y.unbind(window, Q, x),
            C("unbindEvents"),
            en(x.currItem, null, !0, x.destroy));
        },
        destroy: function () {
          C("destroy"),
            qt && clearTimeout(qt),
            p.setAttribute("aria-hidden", "true"),
            (p.className = he),
            oe && clearInterval(oe),
            y.unbind(x.scrollWrap, ee, x),
            y.unbind(window, "scroll", x),
            Mt(),
            st(),
            (Ve = null);
        },
        panTo: function (e, t, n) {
          n ||
            (e > d.min.x ? (e = d.min.x) : e < d.max.x && (e = d.max.x),
            t > d.min.y ? (t = d.min.y) : t < d.max.y && (t = d.max.y)),
            (v.x = e),
            (v.y = t),
            T();
        },
        handleEvent: function (e) {
          (e = e || window.event), i[e.type] && i[e.type](e);
        },
        goTo: function (e) {
          var t = (e = U(e)) - m;
          (I = t),
            (m = e),
            (x.currItem = Qt(m)),
            (He -= t),
            je(b.x * He),
            st(),
            (h = !1),
            x.updateCurrItem();
        },
        next: function () {
          x.goTo(m + 1);
        },
        prev: function () {
          x.goTo(m - 1);
        },
        updateCurrZoomItem: function (e) {
          var t;
          e && C("beforeChange", 0),
            (ke = r[1].el.children.length
              ? ((t = r[1].el.children[0]),
                y.hasClass(t, "pswp__zoom-wrap") ? t.style : null)
              : null),
            (d = x.currItem.bounds),
            (te = f = x.currItem.initialZoomLevel),
            (v.x = d.center.x),
            (v.y = d.center.y),
            e && C("afterChange");
        },
        invalidateCurrItems: function () {
          ae = !0;
          for (var e = 0; e < 3; e++) r[e].item && (r[e].item.needsUpdate = !0);
        },
        updateCurrItem: function (e) {
          if (0 !== I) {
            var t,
              n = Math.abs(I);
            if (!(e && n < 2)) {
              (x.currItem = Qt(m)),
                (Xe = !1),
                C("beforeChange", I),
                3 <= n && ((J += I + (0 < I ? -3 : 3)), (n = 3));
              for (var i = 0; i < n; i++)
                0 < I
                  ? ((t = r.shift()),
                    (r[2] = t),
                    $e((++J + 2) * b.x, t.el.style),
                    x.setContent(t, m - n + i + 1 + 1))
                  : ((t = r.pop()),
                    r.unshift(t),
                    $e(--J * b.x, t.el.style),
                    x.setContent(t, m + n - i - 1 - 1));
              !ke ||
                1 !== Math.abs(I) ||
                ((e = Qt(re)).initialZoomLevel !== f &&
                  (rn(e, w), sn(e), qe(e))),
                (I = 0),
                x.updateCurrZoomItem(),
                (re = m),
                C("afterChange");
            }
          }
        },
        updateSize: function (e) {
          if (!Be && g.modal) {
            var t = y.getScrollY();
            if (
              (ge !== t && ((p.style.top = t + "px"), (ge = t)),
              !e && Ge.x === window.innerWidth && Ge.y === window.innerHeight)
            )
              return;
            (Ge.x = window.innerWidth),
              (Ge.y = window.innerHeight),
              (p.style.height = Ge.y + "px");
          }
          if (
            ((w.x = x.scrollWrap.clientWidth),
            (w.y = x.scrollWrap.clientHeight),
            W(),
            (b.x = w.x + Math.round(w.x * g.spacing)),
            (b.y = w.y),
            je(b.x * He),
            C("beforeResize"),
            void 0 !== J)
          ) {
            for (var n, i, o, a = 0; a < 3; a++)
              (n = r[a]),
                $e((a + J) * b.x, n.el.style),
                (o = m + a - 1),
                g.loop && 2 < Z() && (o = U(o)),
                (i = Qt(o)) && (ae || i.needsUpdate || !i.bounds)
                  ? (x.cleanSlide(i),
                    x.setContent(n, o),
                    1 === a && ((x.currItem = i), x.updateCurrZoomItem(!0)),
                    (i.needsUpdate = !1))
                  : -1 === n.index && 0 <= o && x.setContent(n, o),
                i && i.container && (rn(i, w), sn(i), qe(i));
            ae = !1;
          }
          (te = f = x.currItem.initialZoomLevel),
            (d = x.currItem.bounds) &&
              ((v.x = d.center.x), (v.y = d.center.y), T(!0)),
            C("resize");
        },
        zoomTo: function (t, e, n, i, o) {
          e &&
            ((te = f),
            (bt.x = Math.abs(e.x) - v.x),
            (bt.y = Math.abs(e.y) - v.y),
            S(Ue, v));
          function a(e) {
            1 === e
              ? ((f = t), (v.x = r.x), (v.y = r.y))
              : ((f = (t - l) * e + l),
                (v.x = (r.x - s.x) * e + s.x),
                (v.y = (r.y - s.y) * e + s.y)),
              o && o(e),
              T(1 === e);
          }
          var e = nt(t, !1),
            r = {},
            l = (H("x", e, r, t), H("y", e, r, t), f),
            s = { x: v.x, y: v.y };
          Qe(r);
          n ? ct("customZoomTo", 0, 1, n, i || y.easing.sine.inOut, a) : a(1);
        },
      },
      ut = 30,
      dt = 10,
      E = {},
      pt = {},
      O = {},
      k = {},
      mt = {},
      ft = [],
      ht = {},
      yt = [],
      xt = {},
      gt = 0,
      vt = e(),
      wt = 0,
      R = e(),
      bt = e(),
      It = e(),
      Ct = function (e, t) {
        return e.x === t.x && e.y === t.y;
      },
      Dt = function (e, t) {
        return (
          (xt.x = Math.abs(e.x - t.x)),
          (xt.y = Math.abs(e.y - t.y)),
          Math.sqrt(xt.x * xt.x + xt.y * xt.y)
        );
      },
      Mt = function () {
        Ae && (fe(Ae), (Ae = null));
      },
      Tt = function () {
        s && ((Ae = me(Tt)), Ut());
      },
      St = function () {
        return !("fit" === g.scaleMode && f === x.currItem.initialZoomLevel);
      },
      At = function (e, t) {
        return (
          !(!e || e === document) &&
          !(
            e.getAttribute("class") &&
            -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")
          ) &&
          (t(e) ? e : At(e.parentNode, t))
        );
      },
      Et = {},
      Ot = function (e, t) {
        return (
          (Et.prevent = !At(e.target, g.isClickableElement)),
          C("preventDragEvent", e, t, Et),
          Et.prevent
        );
      },
      kt = function (e, t) {
        return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
      },
      Rt = function (e, t, n) {
        (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
      },
      Zt = function (e, t, n) {
        var i;
        50 < e - we &&
          (((i = 2 < yt.length ? yt.shift() : {}).x = t),
          (i.y = n),
          yt.push(i),
          (we = e));
      },
      Pt = function () {
        var e = v.y - x.currItem.initialPosition.y;
        return 1 - Math.abs(e / (w.y / 2));
      },
      Ft = {},
      Lt = {},
      _t = [],
      zt = function (e) {
        for (; 0 < _t.length; ) _t.pop();
        return (
          pe
            ? ((_e = 0),
              ft.forEach(function (e) {
                0 === _e ? (_t[0] = e) : 1 === _e && (_t[1] = e), _e++;
              }))
            : -1 < e.type.indexOf("touch")
            ? e.touches &&
              0 < e.touches.length &&
              ((_t[0] = kt(e.touches[0], Ft)),
              1 < e.touches.length && (_t[1] = kt(e.touches[1], Lt)))
            : ((Ft.x = e.pageX), (Ft.y = e.pageY), (Ft.id = ""), (_t[0] = Ft)),
          _t
        );
      },
      Nt = function (e, t) {
        var n,
          i,
          o,
          a = v[e] + t[e],
          r = 0 < t[e],
          l = R.x + t.x,
          s = R.x - ht.x,
          c = a > d.min[e] || a < d.max[e] ? g.panEndFriction : 1,
          a = v[e] + t[e] * c;
        if (
          (g.allowPanToNext || f === x.currItem.initialZoomLevel) &&
          (ke
            ? "h" !== Re ||
              "x" !== e ||
              Te ||
              (r
                ? (a > d.min[e] &&
                    ((c = g.panEndFriction), d.min[e], (n = d.min[e] - Ue[e])),
                  (n <= 0 || s < 0) && 1 < Z()
                    ? ((o = l), s < 0 && l > ht.x && (o = ht.x))
                    : d.min.x !== d.max.x && (i = a))
                : (a < d.max[e] &&
                    ((c = g.panEndFriction), d.max[e], (n = Ue[e] - d.max[e])),
                  (n <= 0 || 0 < s) && 1 < Z()
                    ? ((o = l), 0 < s && l < ht.x && (o = ht.x))
                    : d.min.x !== d.max.x && (i = a)))
            : (o = l),
          "x" === e)
        )
          return (
            void 0 !== o && (je(o, !0), (Ee = o !== ht.x)),
            d.min.x !== d.max.x &&
              (void 0 !== i ? (v.x = i) : Ee || (v.x += t.x * c)),
            void 0 !== o
          );
        h || Ee || (f > x.currItem.fitRatio && (v[e] += t[e] * c));
      },
      Ut = function () {
        if (c) {
          var e,
            t,
            n,
            i,
            o,
            a = c.length;
          if (0 !== a)
            if ((S(E, c[0]), (O.x = E.x - k.x), (O.y = E.y - k.y), u && 1 < a))
              (k.x = E.x),
                (k.y = E.y),
                (!O.x && !O.y && Ct(c[1], pt)) ||
                  (S(pt, c[1]),
                  Te || ((Te = !0), C("zoomGestureStarted")),
                  (a = Dt(E, pt)),
                  (e = Wt(a)) >
                    x.currItem.initialZoomLevel +
                      x.currItem.initialZoomLevel / 15 && (Le = !0),
                  (t = 1),
                  (n = it()),
                  (i = ot()),
                  e < n
                    ? g.pinchToClose && !Le && te <= x.currItem.initialZoomLevel
                      ? (M((o = 1 - (n - e) / (n / 1.2))),
                        C("onPinchClose", o),
                        (Pe = !0))
                      : (e = n - (t = 1 < (t = (n - e) / n) ? 1 : t) * (n / 3))
                    : i < e &&
                      (e = i + (t = 1 < (t = (e - i) / (6 * n)) ? 1 : t) * n),
                  t < 0 && (t = 0),
                  Rt(E, pt, vt),
                  (Ne.x += vt.x - It.x),
                  (Ne.y += vt.y - It.y),
                  S(It, vt),
                  (v.x = Je("x", e)),
                  (v.y = Je("y", e)),
                  (Ie = f < e),
                  (f = e),
                  T());
            else if (
              Re &&
              (Ze &&
                ((Ze = !1),
                Math.abs(O.x) >= dt && (O.x -= c[0].x - mt.x),
                Math.abs(O.y) >= dt && (O.y -= c[0].y - mt.y)),
              (k.x = E.x),
              (k.y = E.y),
              0 !== O.x || 0 !== O.y)
            ) {
              if ("v" === Re && g.closeOnVerticalDrag)
                if (!St())
                  return (
                    (Ne.y += O.y),
                    (v.y += O.y),
                    (o = Pt()),
                    (Ce = !0),
                    C("onVerticalDrag", o),
                    M(o),
                    void T()
                  );
              Zt(D(), E.x, E.y),
                (Se = !0),
                (d = x.currItem.bounds),
                Nt("x", O) || (Nt("y", O), Qe(v), T());
            }
        }
      },
      Ht = function () {
        var t,
          n,
          i = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (e) {
              (n =
                1 < yt.length
                  ? ((t = D() - we + 50), yt[yt.length - 2][e])
                  : ((t = D() - ve), mt[e])),
                (i.lastFlickOffset[e] = k[e] - n),
                (i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e])),
                20 < i.lastFlickDist[e]
                  ? (i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t)
                  : (i.lastFlickSpeed[e] = 0),
                Math.abs(i.lastFlickSpeed[e]) < 0.1 &&
                  (i.lastFlickSpeed[e] = 0),
                (i.slowDownRatio[e] = 0.95),
                (i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e]),
                (i.speedDecelerationRatio[e] = 1);
            },
            calculateOverBoundsAnimOffset: function (t, e) {
              i.backAnimStarted[t] ||
                (v[t] > d.min[t]
                  ? (i.backAnimDestination[t] = d.min[t])
                  : v[t] < d.max[t] && (i.backAnimDestination[t] = d.max[t]),
                void 0 !== i.backAnimDestination[t] &&
                  ((i.slowDownRatio[t] = 0.7),
                  (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                  i.speedDecelerationRatioAbs[t] < 0.05 &&
                    ((i.lastFlickSpeed[t] = 0),
                    (i.backAnimStarted[t] = !0),
                    ct(
                      "bounceZoomPan" + t,
                      v[t],
                      i.backAnimDestination[t],
                      e || 300,
                      y.easing.sine.out,
                      function (e) {
                        (v[t] = e), T();
                      }
                    ))));
            },
            calculateAnimOffset: function (e) {
              i.backAnimStarted[e] ||
                ((i.speedDecelerationRatio[e] =
                  i.speedDecelerationRatio[e] *
                  (i.slowDownRatio[e] +
                    i.slowDownRatioReverse[e] -
                    (i.slowDownRatioReverse[e] * i.timeDiff) / 10)),
                (i.speedDecelerationRatioAbs[e] = Math.abs(
                  i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]
                )),
                (i.distanceOffset[e] =
                  i.lastFlickSpeed[e] *
                  i.speedDecelerationRatio[e] *
                  i.timeDiff),
                (v[e] += i.distanceOffset[e]));
            },
            panAnimLoop: function () {
              A.zoomPan &&
                ((A.zoomPan.raf = me(i.panAnimLoop)),
                (i.now = D()),
                (i.timeDiff = i.now - i.lastNow),
                (i.lastNow = i.now),
                i.calculateAnimOffset("x"),
                i.calculateAnimOffset("y"),
                T(),
                i.calculateOverBoundsAnimOffset("x"),
                i.calculateOverBoundsAnimOffset("y"),
                i.speedDecelerationRatioAbs.x < 0.05 &&
                  i.speedDecelerationRatioAbs.y < 0.05 &&
                  ((v.x = Math.round(v.x)),
                  (v.y = Math.round(v.y)),
                  T(),
                  rt("zoomPan")));
            },
          };
        return i;
      },
      Yt = function (e) {
        if (
          (e.calculateSwipeSpeed("y"),
          (d = x.currItem.bounds),
          (e.backAnimDestination = {}),
          (e.backAnimStarted = {}),
          Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(e.lastFlickSpeed.y) <= 0.05)
        )
          return (
            (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0),
            e.calculateOverBoundsAnimOffset("x"),
            e.calculateOverBoundsAnimOffset("y"),
            !0
          );
        lt("zoomPan"), (e.lastNow = D()), e.panAnimLoop();
      },
      Bt = function (e, t) {
        h || (gt = m),
          "swipe" === e &&
            ((e = k.x - mt.x),
            (a = t.lastFlickDist.x < 10),
            ut < e && (a || 20 < t.lastFlickOffset.x)
              ? (i = -1)
              : e < -ut && (a || t.lastFlickOffset.x < -20) && (i = 1)),
          i &&
            ((m += i) < 0
              ? ((m = g.loop ? Z() - 1 : 0), (o = !0))
              : m >= Z() && ((m = g.loop ? 0 : Z() - 1), (o = !0)),
            (o && !g.loop) || ((I += i), (He -= i), (n = !0)));
        var n,
          i,
          o,
          e = b.x * He,
          a = Math.abs(e - R.x),
          r =
            n || e > R.x == 0 < t.lastFlickSpeed.x
              ? ((r =
                  0 < Math.abs(t.lastFlickSpeed.x)
                    ? a / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (r = Math.min(r, 400)),
                Math.max(r, 250))
              : 333;
        return (
          gt === m && (n = !1),
          (h = !0),
          C("mainScrollAnimStart"),
          ct("mainScroll", R.x, e, r, y.easing.cubic.out, je, function () {
            st(),
              (h = !1),
              (gt = -1),
              (!n && gt === m) || x.updateCurrItem(),
              C("mainScrollAnimComplete");
          }),
          n && x.updateCurrItem(!0),
          n
        );
      },
      Wt = function (e) {
        return (1 / Oe) * e * te;
      },
      Gt = function () {
        var e,
          t = f,
          n = it(),
          i = ot(),
          o = (f < n ? (t = n) : i < f && (t = i), Fe);
        return (
          Pe && !Ie && !Le && f < n
            ? x.close()
            : (Pe &&
                (e = function (e) {
                  M((1 - o) * e + o);
                }),
              x.zoomTo(t, 0, 200, y.easing.cubic.out, e)),
          !0
        );
      };
    N("Gestures", {
      publicMethods: {
        initGestures: function () {
          function e(e, t, n, i, o) {
            (le = e + t), (se = e + n), (ce = e + i), (ue = o ? e + o : "");
          }
          (pe = l.pointerEvent) && l.touch && (l.touch = !1),
            pe
              ? navigator.pointerEnabled
                ? e("pointer", "down", "move", "up", "cancel")
                : e("MSPointer", "Down", "Move", "Up", "Cancel")
              : l.touch
              ? (e("touch", "start", "move", "end", "cancel"), (o = !0))
              : e("mouse", "down", "move", "up"),
            (Q = se + " " + ce + " " + ue),
            (ee = le),
            pe &&
              !o &&
              (o =
                1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints),
            (x.likelyTouchDevice = o),
            (i[le] = G),
            (i[se] = X),
            (i[ce] = V),
            ue && (i[ue] = i[ce]),
            l.touch &&
              ((ee += " mousedown"),
              (Q += " mousemove mouseup"),
              (i.mousedown = i[le]),
              (i.mousemove = i[se]),
              (i.mouseup = i[ce])),
            o || (g.allowPanToNext = !1);
        },
      },
    });
    function Xt(e) {
      function t() {
        (e.loading = !1),
          (e.loaded = !0),
          e.loadComplete ? e.loadComplete(e) : (e.img = null),
          (n.onload = n.onerror = null),
          (n = null);
      }
      (e.loading = !0), (e.loaded = !1);
      var n = (e.img = y.createEl("pswp__img", "img"));
      (n.onload = t),
        (n.onerror = function () {
          (e.loadError = !0), t();
        }),
        (n.src = e.src);
    }
    function Vt(e, t) {
      return (
        e.src &&
        e.loadError &&
        e.container &&
        (t && (e.container.innerHTML = ""),
        (e.container.innerHTML = g.errorMsg.replace("%url%", e.src)),
        1)
      );
    }
    function Kt() {
      if (tn.length) {
        for (var e, t = 0; t < tn.length; t++)
          (e = tn[t]).holder.index === e.index &&
            ln(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
        tn = [];
      }
    }
    var qt,
      $t,
      jt,
      Jt,
      Qt,
      Z,
      en = function (a, e, r, t) {
        function l() {
          rt("initialZoom"),
            r
              ? (x.template.removeAttribute("style"),
                x.bg.removeAttribute("style"))
              : (M(1),
                e && (e.style.display = "block"),
                y.addClass(p, "pswp--animated-in"),
                C("initialZoom" + (r ? "OutEnd" : "InEnd"))),
            t && t(),
            (Jt = !1);
        }
        qt && clearTimeout(qt),
          (jt = Jt = !0),
          a.initialLayout
            ? ((s = a.initialLayout), (a.initialLayout = null))
            : (s = g.getThumbBoundsFn && g.getThumbBoundsFn(m));
        var s,
          c,
          u,
          d = r ? g.hideAnimationDuration : g.showAnimationDuration;
        d && s && void 0 !== s.x
          ? ((c = $),
            (u = !x.currItem.src || x.currItem.loadError || g.showHideOpacity),
            a.miniImg && (a.miniImg.style.webkitBackfaceVisibility = "hidden"),
            r ||
              ((f = s.w / a.w),
              (v.x = s.x),
              (v.y = s.y - ye),
              (x[u ? "template" : "bg"].style.opacity = 0.001),
              T()),
            lt("initialZoom"),
            r && !c && y.removeClass(p, "pswp--animated-in"),
            u &&
              (r
                ? y[(c ? "remove" : "add") + "Class"](
                    p,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    y.addClass(p, "pswp--animate_opacity");
                  }, 30)),
            (qt = setTimeout(
              function () {
                var t, n, i, o, e;
                C("initialZoom" + (r ? "Out" : "In")),
                  r
                    ? ((t = s.w / a.w),
                      (n = { x: v.x, y: v.y }),
                      (i = f),
                      (o = Fe),
                      (e = function (e) {
                        1 === e
                          ? ((f = t), (v.x = s.x), (v.y = s.y - ge))
                          : ((f = (t - i) * e + i),
                            (v.x = (s.x - n.x) * e + n.x),
                            (v.y = (s.y - ge - n.y) * e + n.y)),
                          T(),
                          u ? (p.style.opacity = 1 - e) : M(o - e * o);
                      }),
                      c
                        ? ct("initialZoom", 0, 1, d, y.easing.cubic.out, e, l)
                        : (e(1), (qt = setTimeout(l, d + 20))))
                    : ((f = a.initialZoomLevel),
                      S(v, a.initialPosition),
                      T(),
                      M(1),
                      u ? (p.style.opacity = 1) : M(1),
                      (qt = setTimeout(l, d + 20)));
              },
              r ? 25 : 90
            )))
          : (C("initialZoom" + (r ? "Out" : "In")),
            (f = a.initialZoomLevel),
            S(v, a.initialPosition),
            T(),
            (p.style.opacity = r ? 0 : 1),
            M(1),
            d
              ? setTimeout(function () {
                  l();
                }, d)
              : l());
      },
      P = {},
      tn = [],

      on = function () {
        return {
          center: { x: 0, y: 0 },
          max: { x: 0, y: 0 },
          min: { x: 0, y: 0 },
        };
      },
      an = function (e, t, n) {
        var i = e.bounds;
        (i.center.x = Math.round((P.x - t) / 2)),
          (i.center.y = Math.round((P.y - n) / 2) + e.vGap.top),
          (i.max.x = t > P.x ? Math.round(P.x - t) : i.center.x),
          (i.max.y = n > P.y ? Math.round(P.y - n) + e.vGap.top : i.center.y),
          (i.min.x = t > P.x ? 0 : i.center.x),
          (i.min.y = n > P.y ? e.vGap.top : i.center.y);
      },
      rn = function (e, t, n) {
        if (!e.src || e.loadError)
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = on()),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        var i,
          o = !n;
        return (
          o &&
            (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
            C("parseVerticalMargin", e)),
          (P.x = t.x),
          (P.y = t.y - e.vGap.top - e.vGap.bottom),
          o &&
            ((t = P.x / e.w),
            (i = P.y / e.h),
            (e.fitRatio = t < i ? t : i),
            "orig" === (t = g.scaleMode)
              ? (n = 1)
              : "fit" === t && (n = e.fitRatio),
            (e.initialZoomLevel = n = 1 < n ? 1 : n),
            e.bounds || (e.bounds = on())),
          n
            ? (an(e, e.w * n, e.h * n),
              o &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds)
            : void 0
        );
      },
      ln = function (e, t, n, i, o, a) {
        t.loadError ||
          (i &&
            ((t.imageAppended = !0),
            sn(t, i, t === x.currItem && Xe),
            n.appendChild(i),
            a &&
              setTimeout(function () {
                t &&
                  t.loaded &&
                  t.placeholder &&
                  ((t.placeholder.style.display = "none"),
                  (t.placeholder = null));
              }, 500)));
      },
      sn = function (e, t, n) {
        var i;
        e.src &&
          ((t = t || e.container.lastChild),
          (i = n ? e.w : Math.round(e.w * e.fitRatio)),
          (n = n ? e.h : Math.round(e.h * e.fitRatio)),
          e.placeholder &&
            !e.loaded &&
            ((e.placeholder.style.width = i + "px"),
            (e.placeholder.style.height = n + "px")),
          (t.style.width = i + "px"),
          (t.style.height = n + "px"));
      };
    N("Controller", {
      publicMethods: {
        lazyLoadItem: function (e) {
          e = U(e);
          var t = Qt(e);
          t &&
            ((!t.loaded && !t.loading) || ae) &&
            (C("gettingData", e, t), t.src && Xt(t));
        },
        initController: function () {
          y.extend(g, nn, !0),
            (x.items = $t = t),
            (Qt = x.getItemAt),
            (Z = g.getNumItemsFn),
            g.loop,
            Z() < 3 && (g.loop = !1),
            a("beforeChange", function (e) {
              for (
                var t = g.preload,
                  n = null === e || 0 <= e,
                  i = Math.min(t[0], Z()),
                  o = Math.min(t[1], Z()),
                  a = 1;
                a <= (n ? o : i);
                a++
              )
                x.lazyLoadItem(m + a);
              for (a = 1; a <= (n ? i : o); a++) x.lazyLoadItem(m - a);
            }),
            a("initialLayout", function () {
              x.currItem.initialLayout =
                g.getThumbBoundsFn && g.getThumbBoundsFn(m);
            }),
            a("mainScrollAnimComplete", Kt),
            a("initialZoomInEnd", Kt),
            a("destroy", function () {
              for (var e, t = 0; t < $t.length; t++)
                (e = $t[t]).container && (e.container = null),
                  e.placeholder && (e.placeholder = null),
                  e.img && (e.img = null),
                  e.preloader && (e.preloader = null),
                  e.loadError && (e.loaded = e.loadError = !1);
              tn = null;
            });
        },
        getItemAt: function (e) {
          return 0 <= e && void 0 !== $t[e] && $t[e];
        },
        allowProgressiveImg: function () {
          return (
            g.forceProgressiveLoading ||
            !o ||
            g.mouseUsed ||
            1200 < screen.width
          );
        },
        setContent: function (t, n) {
          g.loop && (n = U(n));
          var e,
            i,
            o,
            a = x.getItemAt(t.index),
            a = (a && (a.container = null), x.getItemAt(n));
          a
            ? (C("gettingData", n, a),
              (t.index = n),
              (i = (t.item = a).container = y.createEl("pswp__zoom-wrap")),
              !a.src &&
                a.html &&
                (a.html.tagName
                  ? i.appendChild(a.html)
                  : (i.innerHTML = a.html)),
              Vt(a),
              rn(a, w),
              !a.src || a.loadError || a.loaded
                ? a.src &&
                  !a.loadError &&
                  (((e = y.createEl("pswp__img", "img")).style.opacity = 1),
                  (e.src = a.src),
                  sn(a, e),
                  ln(n, a, i, e, !0))
                : ((a.loadComplete = function (e) {
                    if (K) {
                      if (t && t.index === n) {
                        if (Vt(e, !0))
                          return (
                            (e.loadComplete = e.img = null),
                            rn(e, w),
                            qe(e),
                            void (t.index === m && x.updateCurrZoomItem())
                          );
                        e.imageAppended
                          ? !Jt &&
                            e.placeholder &&
                            ((e.placeholder.style.display = "none"),
                            (e.placeholder = null))
                          : l.transform && (h || Jt)
                          ? tn.push({
                              item: e,
                              baseDiv: i,
                              img: e.img,
                              index: n,
                              holder: t,
                              clearPlaceholder: !0,
                            })
                          : ln(n, e, i, e.img, h || Jt, !0);
                      }
                      (e.loadComplete = null),
                        (e.img = null),
                        C("imageLoadComplete", n, e);
                    }
                  }),
                  y.features.transform &&
                    ((o = "pswp__img pswp__img--placeholder"),
                    (o += a.msrc ? "" : " pswp__img--placeholder--blank"),
                    (o = y.createEl(o, a.msrc ? "img" : "")),
                    a.msrc && (o.src = a.msrc),
                    sn(a, o),
                    i.appendChild(o),
                    (a.placeholder = o)),
                  a.loading || Xt(a),
                  x.allowProgressiveImg() &&
                    (!jt && l.transform
                      ? tn.push({
                          item: a,
                          baseDiv: i,
                          img: a.img,
                          index: n,
                          holder: t,
                        })
                      : ln(n, a, i, a.img, !0, !0))),
              jt || n !== m ? qe(a) : ((ke = i.style), en(a, e || a.img)),
              (t.el.innerHTML = ""),
              t.el.appendChild(i))
            : (t.el.innerHTML = "");
        },
        cleanSlide: function (e) {
          e.img && (e.img.onload = e.img.onerror = null),
            (e.loaded = e.loading = e.img = e.imageAppended = !1);
        },
      },
    });
    function cn(e, t, n) {
      var i = document.createEvent("CustomEvent"),
        t = {
          origEvent: e,
          target: e.target,
          releasePoint: t,
          pointerType: n || "touch",
        };
      i.initCustomEvent("pswpTap", !0, !0, t), e.target.dispatchEvent(i);
    }
    function un() {
      mn && clearTimeout(mn), hn && clearTimeout(hn);
    }
    function dn() {
      var e = Mn(),
        t = {};
      if (!(e.length < 5)) {
        var n,
          i = e.split("&");
        for (a = 0; a < i.length; a++)
          i[a] && ((n = i[a].split("=")).length < 2 || (t[n[0]] = n[1]));
        if (g.galleryPIDs) {
          for (var o = t.pid, a = (t.pid = 0); a < $t.length; a++)
            if ($t[a].pid === o) {
              t.pid = a;
              break;
            }
        } else t.pid = parseInt(t.pid, 10) - 1;
        t.pid < 0 && (t.pid = 0);
      }
      return t;
    }
    var pn,
      F,
      mn,
      fn,
      hn,
      yn,
      xn,
      gn,
      n,
      vn,
      wn,
      bn,
      L,
      In,
      Cn = {},
      Dn =
        (N("Tap", {
          publicMethods: {
            initTap: function () {
              a("firstTouchStart", x.onTapStart),
                a("touchRelease", x.onTapRelease),
                a("destroy", function () {
                  (Cn = {}), (pn = null);
                });
            },
            onTapStart: function (e) {
              1 < e.length && (clearTimeout(pn), (pn = null));
            },
            onTapRelease: function (e, t) {
              var n, i, o;
              !t ||
                Se ||
                Me ||
                at ||
                ((n = t),
                pn &&
                (clearTimeout(pn),
                (pn = null),
                (i = n),
                (o = Cn),
                Math.abs(i.x - o.x) < ze && Math.abs(i.y - o.y) < ze)
                  ? C("doubleTap", n)
                  : "mouse" === t.type
                  ? cn(e, t, "mouse")
                  : "BUTTON" === e.target.tagName.toUpperCase() ||
                    y.hasClass(e.target, "pswp__single-tap")
                  ? cn(e, t)
                  : (S(Cn, n),
                    (pn = setTimeout(function () {
                      cn(e, t), (pn = null);
                    }, 300))));
            },
          },
        }),
        N("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              xe ||
                (o
                  ? a("mouseUsed", function () {
                      x.setupDesktopZoom();
                    })
                  : x.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function (e) {
              F = {};
              var t = "wheel mousewheel DOMMouseScroll";
              a("bindEvents", function () {
                y.bind(p, t, x.handleMouseWheel);
              }),
                a("unbindEvents", function () {
                  F && y.unbind(p, t, x.handleMouseWheel);
                }),
                (x.mouseZoomedIn = !1);
              function n() {
                x.mouseZoomedIn &&
                  (y.removeClass(p, "pswp--zoomed-in"), (x.mouseZoomedIn = !1)),
                  f < 1
                    ? y.addClass(p, "pswp--zoom-allowed")
                    : y.removeClass(p, "pswp--zoom-allowed"),
                  o();
              }
              var i,
                o = function () {
                  i && (y.removeClass(p, "pswp--dragging"), (i = !1));
                };
              a("resize", n),
                a("afterChange", n),
                a("pointerDown", function () {
                  x.mouseZoomedIn &&
                    ((i = !0), y.addClass(p, "pswp--dragging"));
                }),
                a("pointerUp", o),
                e || n();
            },
            handleMouseWheel: function (e) {
              if (f <= x.currItem.fitRatio)
                return (
                  g.modal &&
                    (!g.closeOnScroll || at || s
                      ? e.preventDefault()
                      : de && 2 < Math.abs(e.deltaY) && (($ = !0), x.close())),
                  !0
                );
              if ((e.stopPropagation(), (F.x = 0), "deltaX" in e))
                1 === e.deltaMode
                  ? ((F.x = 18 * e.deltaX), (F.y = 18 * e.deltaY))
                  : ((F.x = e.deltaX), (F.y = e.deltaY));
              else if ("wheelDelta" in e)
                e.wheelDeltaX && (F.x = -0.16 * e.wheelDeltaX),
                  e.wheelDeltaY
                    ? (F.y = -0.16 * e.wheelDeltaY)
                    : (F.y = -0.16 * e.wheelDelta);
              else {
                if (!("detail" in e)) return;
                F.y = e.detail;
              }
              nt(f, !0);
              var t = v.x - F.x,
                n = v.y - F.y;
              (g.modal ||
                (t <= d.min.x &&
                  t >= d.max.x &&
                  n <= d.min.y &&
                  n >= d.max.y)) &&
                e.preventDefault(),
                x.panTo(t, n);
            },
            toggleDesktopZoom: function (e) {
              e = e || { x: w.x / 2 + Ye.x, y: w.y / 2 + Ye.y };
              var t = g.getDoubleTapZoom(!0, x.currItem),
                n = f === t;
              (x.mouseZoomedIn = !n),
                x.zoomTo(n ? x.currItem.initialZoomLevel : t, e, 333),
                y[(n ? "remove" : "add") + "Class"](p, "pswp--zoomed-in");
            },
          },
        }),
        { history: !0, galleryUID: 1 }),
      Mn = function () {
        return L.hash.substring(1);
      },
      Tn = function () {
        var e, t;
        hn && clearTimeout(hn),
          at || s
            ? (hn = setTimeout(Tn, 500))
            : (yn ? clearTimeout(fn) : (yn = !0),
              (t = m + 1),
              (e = Qt(m)).hasOwnProperty("pid") && (t = e.pid),
              (e = n + "&gid=" + g.galleryUID + "&pid=" + t),
              vn || (-1 === L.hash.indexOf(e) && (bn = !0)),
              (t = L.href.split("#")[0] + "#" + e),
              In
                ? "#" + e !== window.location.hash &&
                  history[vn ? "replaceState" : "pushState"](
                    "",
                    document.title,
                    t
                  )
                : vn
                ? L.replace(t)
                : (L.hash = e),
              (vn = !0),
              (fn = setTimeout(function () {
                yn = !1;
              }, 60)));
      };
    N("History", {
      publicMethods: {
        initHistory: function () {
          var e, t;
          y.extend(g, Dn, !0),
            g.history &&
              ((L = window.location),
              (vn = wn = bn = !1),
              (n = Mn()),
              (In = "pushState" in history),
              -1 < n.indexOf("gid=") &&
                (n = (n = n.split("&gid=")[0]).split("?gid=")[0]),
              a("afterChange", x.updateURL),
              a("unbindEvents", function () {
                y.unbind(window, "hashchange", x.onHashChange);
              }),
              (e = function () {
                (gn = !0),
                  wn ||
                    (bn
                      ? history.back()
                      : n
                      ? (L.hash = n)
                      : In
                      ? history.pushState(
                          "",
                          document.title,
                          L.pathname + L.search
                        )
                      : (L.hash = "")),
                  un();
              }),
              a("unbindEvents", function () {
                $ && e();
              }),
              a("destroy", function () {
                gn || e();
              }),
              a("firstUpdate", function () {
                m = dn().pid;
              }),
              -1 < (t = n.indexOf("pid=")) &&
                "&" === (n = n.substring(0, t)).slice(-1) &&
                (n = n.slice(0, -1)),
              setTimeout(function () {
                K && y.bind(window, "hashchange", x.onHashChange);
              }, 40));
        },
        onHashChange: function () {
          Mn() === n
            ? ((wn = !0), x.close())
            : yn || ((xn = !0), x.goTo(dn().pid), (xn = !1));
        },
        updateURL: function () {
          un(), xn || (vn ? (mn = setTimeout(Tn, 800)) : Tn());
        },
      },
    }),
      y.extend(x, z);
  };
});
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipeUI_Default = t());
})(this, function () {
  "use strict";
  return function (o, s) {
    function e(e) {
      if (x) return !0;
      (e = e || window.event), F.timeToIdle && F.mouseUsed && !_ && a();
      for (
        var t,
          n,
          o = (e.target || e.srcElement).getAttribute("class") || "",
          l = 0;
        l < M.length;
        l++
      )
        (t = M[l]).onTap &&
          -1 < o.indexOf("pswp__" + t.name) &&
          (t.onTap(), (n = !0));
      n &&
        (e.stopPropagation && e.stopPropagation(),
        (x = !0),
        (e = s.features.isOldAndroid ? 600 : 30),
        setTimeout(function () {
          x = !1;
        }, e));
    }
    function n() {
      var e = 1 === F.getNumItemsFn();
      e !== E && (y(m, "ui--one-slide", e), (E = e));
    }
    function i() {
      y(g, "share-modal--hidden", R);
    }
    function l() {
      if (
        ((R = !R)
          ? (s.removeClass(g, "pswp__share-modal--fade-in"),
            setTimeout(function () {
              R && i();
            }, 300))
          : (i(),
            setTimeout(function () {
              R || s.addClass(g, "pswp__share-modal--fade-in");
            }, 30)),
        !R)
      ) {
        for (var e, t, n, o, l = "", r = 0; r < F.shareButtons.length; r++) {
          e = F.shareButtons[r];
          t = F.getImageURLForShare(e);
          n = F.getPageURLForShare(e);
          o = F.getTextForShare(e);
          n = e.url
            .replace("{{url}}", encodeURIComponent(n))
            .replace("{{image_url}}", encodeURIComponent(t))
            .replace("{{raw_image_url}}", t)
            .replace("{{text}}", encodeURIComponent(o));
          l +=
            '<a href="' +
            n +
            '" target="_blank" ' +
            'class="pswp__share--' +
            e.id +
            '"' +
            (e.download ? "download" : "") +
            ">" +
            e.label +
            "</a>";
          if (F.parseShareButtonOut) l = F.parseShareButtonOut(e, l);
        }
        (g.children[0].innerHTML = l), (g.children[0].onclick = P);
      }
    }
    function r(e) {
      for (var t = 0; t < F.closeElClasses.length; t++)
        if (s.hasClass(e, "pswp__" + F.closeElClasses[t])) return !0;
    }
    function a() {
      clearTimeout(k), (z = 0), _ && K.setIdle(!1);
    }
    function u(e) {
      ((e = (e = e || window.event).relatedTarget || e.toElement) &&
        "HTML" !== e.nodeName) ||
        (clearTimeout(k),
        (k = setTimeout(function () {
          K.setIdle(!0);
        }, F.timeToIdleOutside)));
    }
    function c(e) {
      T !== e && (y(C, "preloader--active", !e), (T = e));
    }
    function p(e) {
      var t,
        n = e.vGap;
      !o.likelyTouchDevice || F.mouseUsed || screen.width > F.fitControlsWidth
        ? ((t = F.barsSize),
          F.captionEl && "auto" === t.bottom
            ? (h ||
                ((h = s.createEl(
                  "pswp__caption pswp__caption--fake"
                )).appendChild(s.createEl("pswp__caption__center")),
                m.insertBefore(h, f),
                s.addClass(m, "pswp__ui--fit")),
              F.addCaptionHTMLFn(e, h, !0)
                ? ((e = h.clientHeight), (n.bottom = parseInt(e, 10) || 44))
                : (n.bottom = t.top))
            : (n.bottom = "auto" === t.bottom ? 0 : t.bottom),
          (n.top = t.top))
        : (n.top = n.bottom = 0);
    }
    function D() {
      function e(e) {
        if (e)
          for (var t = e.length, n = 0; n < t; n++) {
            (l = e[n]), (r = l.className);
            for (var o = 0; o < M.length; o++)
              (i = M[o]),
                -1 < r.indexOf("pswp__" + i.name) &&
                  (F[i.option]
                    ? (s.removeClass(l, "pswp__element--disabled"),
                      i.onInit && i.onInit(l))
                    : s.addClass(l, "pswp__element--disabled"));
          }
      }
      e(m.children);
      var l,
        r,
        i,
        t = s.getChildByClass(m, "pswp__top-bar");
      t && e(t.children);
    }
    var d,
      m,
      f,
      h,
      t,
      w,
      g,
      b,
      _,
      v,
      C,
      T,
      I,
      E,
      F,
      x,
      S,
      k,
      K = this,
      L = !1,
      O = !0,
      R = !0,
      A = {
        barsSize: { top: 62, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (e, t) {
          return e.title
            ? ((t.children[0].innerHTML = e.title), !0)
            : ((t.children[0].innerHTML = ""), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
          },
          {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
          },
          {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
          },
          {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0,
          },
        ],
        getImageURLForShare: function () {
          return o.currItem.src || "";
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return o.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200,
      },
      y = function (e, t, n) {
        s[(n ? "add" : "remove") + "Class"](e, "pswp__" + t);
      },
      P = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        if ((o.shout("shareLinkClick", e, t), t.href)) {
          if (t.hasAttribute("download")) return !0;
          window.open(
            t.href,
            "pswp_share",
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
              (window.screen ? Math.round(screen.width / 2 - 275) : 100)
          ),
            R || l();
        }
        return !1;
      },
      z = 0,
      M = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function (e) {
            f = e;
          },
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function (e) {
            g = e;
          },
          onTap: function () {
            l();
          },
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function (e) {
            w = e;
          },
          onTap: function () {
            l();
          },
        },
        { name: "button--zoom", option: "zoomEl", onTap: o.toggleDesktopZoom },
        {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            t = e;
          },
        },
        { name: "button--close", option: "closeEl", onTap: o.close },
        { name: "button--arrow--left", option: "arrowEl", onTap: o.prev },
        { name: "button--arrow--right", option: "arrowEl", onTap: o.next },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            d.isFullscreen() ? d.exit() : d.enter();
          },
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (e) {
            C = e;
          },
        },
      ];
    (K.init = function () {
      var t;
      s.extend(o.options, A, !0),
        (F = o.options),
        (m = s.getChildByClass(o.scrollWrap, "pswp__ui")),
        (v = o.listen)("onVerticalDrag", function (e) {
          O && e < 0.95
            ? K.hideControls()
            : !O && 0.95 <= e && K.showControls();
        }),
        v("onPinchClose", function (e) {
          O && e < 0.9
            ? (K.hideControls(), (t = !0))
            : t && !O && 0.9 < e && K.showControls();
        }),
        v("zoomGestureEnded", function () {
          (t = !1) && !O && K.showControls();
        }),
        v("beforeChange", K.update),
        v("doubleTap", function (e) {
          var t = o.currItem.initialZoomLevel;
          o.getZoomLevel() !== t
            ? o.zoomTo(t, e, 333)
            : o.zoomTo(F.getDoubleTapZoom(!1, o.currItem), e, 333);
        }),
        v("preventDragEvent", function (e, t, n) {
          var o = e.target || e.srcElement;
          o &&
            o.getAttribute("class") &&
            -1 < e.type.indexOf("mouse") &&
            (0 < o.getAttribute("class").indexOf("__caption") ||
              /(SMALL|STRONG|EM)/i.test(o.tagName)) &&
            (n.prevent = !1);
        }),
        v("bindEvents", function () {
          s.bind(m, "pswpTap click", e),
            s.bind(o.scrollWrap, "pswpTap", K.onGlobalTap),
            o.likelyTouchDevice ||
              s.bind(o.scrollWrap, "mouseover", K.onMouseOver);
        }),
        v("unbindEvents", function () {
          R || l(),
            S && clearInterval(S),
            s.unbind(document, "mouseout", u),
            s.unbind(document, "mousemove", a),
            s.unbind(m, "pswpTap click", e),
            s.unbind(o.scrollWrap, "pswpTap", K.onGlobalTap),
            s.unbind(o.scrollWrap, "mouseover", K.onMouseOver),
            d &&
              (s.unbind(document, d.eventK, K.updateFullscreen),
              d.isFullscreen() && ((F.hideAnimationDuration = 0), d.exit()),
              (d = null));
        }),
        v("destroy", function () {
          F.captionEl &&
            (h && m.removeChild(h), s.removeClass(f, "pswp__caption--empty")),
            g && (g.children[0].onclick = null),
            s.removeClass(m, "pswp__ui--over-close"),
            s.addClass(m, "pswp__ui--hidden"),
            K.setIdle(!1);
        }),
        F.showAnimationDuration || s.removeClass(m, "pswp__ui--hidden"),
        v("initialZoomIn", function () {
          F.showAnimationDuration && s.removeClass(m, "pswp__ui--hidden");
        }),
        v("initialZoomOut", function () {
          s.addClass(m, "pswp__ui--hidden");
        }),
        v("parseVerticalMargin", p),
        D(),
        F.shareEl && w && g && (R = !0),
        n(),
        F.timeToIdle &&
          v("mouseUsed", function () {
            s.bind(document, "mousemove", a),
              s.bind(document, "mouseout", u),
              (S = setInterval(function () {
                2 === ++z && K.setIdle(!0);
              }, F.timeToIdle / 2));
          }),
        F.fullscreenEl &&
          !s.features.isOldAndroid &&
          ((d = d || K.getFullscreenAPI())
            ? (s.bind(document, d.eventK, K.updateFullscreen),
              K.updateFullscreen(),
              s.addClass(o.template, "pswp--supports-fs"))
            : s.removeClass(o.template, "pswp--supports-fs")),
        F.preloaderEl &&
          (c(!0),
          v("beforeChange", function () {
            clearTimeout(I),
              (I = setTimeout(function () {
                o.currItem && o.currItem.loading
                  ? (o.allowProgressiveImg() &&
                      (!o.currItem.img || o.currItem.img.naturalWidth)) ||
                    c(!1)
                  : c(!0);
              }, F.loadingIndicatorDelay));
          }),
          v("imageLoadComplete", function (e, t) {
            o.currItem === t && c(!0);
          }));
    }),
      (K.setIdle = function (e) {
        y(m, "ui--idle", (_ = e));
      }),
      (K.update = function () {
        (L =
          !(!O || !o.currItem) &&
          (K.updateIndexIndicator(),
          F.captionEl &&
            (F.addCaptionHTMLFn(o.currItem, f),
            y(f, "caption--empty", !o.currItem.title)),
          !0)),
          R || l(),
          n();
      }),
      (K.updateFullscreen = function (e) {
        e &&
          setTimeout(function () {
            o.setScrollOffset(0, s.getScrollY());
          }, 50),
          s[(d.isFullscreen() ? "add" : "remove") + "Class"](
            o.template,
            "pswp--fs"
          );
      }),
      (K.updateIndexIndicator = function () {
        F.counterEl &&
          (t.innerHTML =
            o.getCurrentIndex() + 1 + F.indexIndicatorSep + F.getNumItemsFn());
      }),
      (K.onGlobalTap = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        x ||
          (e.detail && "mouse" === e.detail.pointerType
            ? r(t)
              ? o.close()
              : s.hasClass(t, "pswp__img") &&
                (1 === o.getZoomLevel() &&
                o.getZoomLevel() <= o.currItem.fitRatio
                  ? F.clickToCloseNonZoomable && o.close()
                  : o.toggleDesktopZoom(e.detail.releasePoint))
            : (F.tapToToggleControls &&
                (O ? K.hideControls() : K.showControls()),
              F.tapToClose &&
                (s.hasClass(t, "pswp__img") || r(t)) &&
                o.close()));
      }),
      (K.onMouseOver = function (e) {
        e = (e = e || window.event).target || e.srcElement;
        y(m, "ui--over-close", r(e));
      }),
      (K.hideControls = function () {
        s.addClass(m, "pswp__ui--hidden"), (O = !1);
      }),
      (K.showControls = function () {
        (O = !0), L || K.update(), s.removeClass(m, "pswp__ui--hidden");
      }),
      (K.supportsFullscreen = function () {
        var e = document;
        return !!(
          e.exitFullscreen ||
          e.mozCancelFullScreen ||
          e.webkitExitFullscreen ||
          e.msExitFullscreen
        );
      }),
      (K.getFullscreenAPI = function () {
        var e,
          t = document.documentElement,
          n = "fullscreenchange";
        return (
          t.requestFullscreen
            ? (e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n,
              })
            : t.mozRequestFullScreen
            ? (e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n,
              })
            : t.webkitRequestFullscreen
            ? (e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n,
              })
            : t.msRequestFullscreen &&
              (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange",
              }),
          e &&
            ((e.enter = function () {
              if (
                ((b = F.closeOnScroll),
                (F.closeOnScroll = !1),
                "webkitRequestFullscreen" !== this.enterK)
              )
                return o.template[this.enterK]();
              o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
            }),
            (e.exit = function () {
              return (F.closeOnScroll = b), document[this.exitK]();
            }),
            (e.isFullscreen = function () {
              return document[this.elementK];
            })),
          e
        );
      });
  };
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "undefined" != typeof module && null !== module && module.exports
    ? (module.exports = e)
    : e();
})(function () {
  var o = Object.assign || (window.jQuery && jQuery.extend),
    d = 8,
    a =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e, t) {
        return window.setTimeout(function () {
          e();
        }, 25);
      };
  function e(e, t) {
    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }
  "function" != typeof window.CustomEvent &&
    ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
  var i,
    n = { textarea: !0, input: !0, select: !0, button: !0 },
    c = { move: "mousemove", cancel: "mouseup dragstart", end: "mouseup" },
    u = { move: "touchmove", cancel: "touchend", end: "touchend" },
    r = /\s+/,
    m = { bubbles: !0, cancelable: !0 },
    t = "function" == typeof Symbol ? Symbol("events") : {};
  function v(e) {
    return e[t] || (e[t] = {});
  }
  function s(e, t, n, o) {
    t = t.split(r);
    var i,
      a = v(e),
      c = t.length;
    function u(e) {
      n(e, o);
    }
    for (; c--; )
      (a[(i = t[c])] || (a[i] = [])).push([n, u]), e.addEventListener(i, u);
  }
  function f(e, t, n) {
    t = t.split(r);
    var o,
      i,
      a,
      c = v(e),
      u = t.length;
    if (c)
      for (; u--; )
        if ((i = c[(o = t[u])]))
          for (a = i.length; a--; )
            i[a][0] === n &&
              (e.removeEventListener(o, i[a][1]), i.splice(a, 1));
  }
  function l(e, t, n) {
    t = new CustomEvent(t, m);
    n && o(t, n), e.dispatchEvent(t);
  }
  function p(e) {
    var n = e,
      o = !1,
      i = !1;
    function t(e) {
      o ? (n(), a(t), (o = !(i = !0))) : (i = !1);
    }
    (this.kick = function (e) {
      (o = !0), i || t();
    }),
      (this.end = function (e) {
        var t = n;
        e &&
          (i
            ? ((n = o
                ? function () {
                    t(), e();
                  }
                : e),
              (o = !0))
            : e());
      });
  }
  function g() {}
  function h(e) {
    e.preventDefault();
  }
  function X(e, t) {
    var n, o;
    if (e.identifiedTouch) return e.identifiedTouch(t);
    for (n = -1, o = e.length; ++n < o; )
      if (e[n].identifier === t) return e[n];
  }
  function Y(e, t) {
    e = X(e.changedTouches, t.identifier);
    if (e && (e.pageX !== t.pageX || e.pageY !== t.pageY)) return e;
  }
  function y(e, t) {
    E(e, t, e, b);
  }
  function w(e, t) {
    b();
  }
  function b() {
    f(document, c.move, y), f(document, c.cancel, w);
  }
  function T(e) {
    f(document, u.move, e.touchmove), f(document, u.cancel, e.touchend);
  }
  function E(e, t, n, o) {
    var i,
      a,
      c,
      u = n.pageX - t.pageX,
      r = n.pageY - t.pageY;
    u * u + r * r < d * d ||
      ((t = t),
      (a = n),
      (o = o),
      (e = (i = e).targetTouches),
      (c = i.timeStamp - t.timeStamp),
      (a = {
        altKey: i.altKey,
        ctrlKey: i.ctrlKey,
        shiftKey: i.shiftKey,
        startX: t.pageX,
        startY: t.pageY,
        distX: u,
        distY: r,
        deltaX: u,
        deltaY: r,
        pageX: n.pageX,
        pageY: n.pageY,
        velocityX: u / c,
        velocityY: r / c,
        identifier: t.identifier,
        targetTouches: e,
        finger: e ? e.length : 1,
        enableMove: function () {
          (this.moveEnabled = !0), (this.enableMove = g), i.preventDefault();
        },
      }),
      l(t.target, "movestart", a),
      o(t));
  }
  function S(e, t) {
    var n = t.timer;
    (t.touch = e), (t.timeStamp = e.timeStamp), n.kick();
  }
  function k(e, t) {
    var n = t.target,
      o = t.event,
      t = t.timer;
    f(document, c.move, S),
      f(document, c.end, k),
      j(n, o, t, function () {
        setTimeout(function () {
          f(n, "click", h);
        }, 0);
      });
  }
  function K(e, t) {
    var n = t.target,
      o = t.event,
      i = t.timer;
    X(e.changedTouches, o.identifier) &&
      ((e = t),
      f(document, u.move, e.activeTouchmove),
      f(document, u.end, e.activeTouchend),
      j(n, o, i));
  }
  function j(e, t, n, o) {
    n.end(function () {
      return l(e, "moveend", t), o && o();
    });
  }
  function C(e) {
    e.enableMove();
  }
  function Q(e) {
    e.enableMove();
  }
  function q(e) {
    e.enableMove();
  }
  function A(e) {
    var o = e.handler;
    e.handler = function (e) {
      for (var t, n = i.length; n--; ) e[(t = i[n])] = e.originalEvent[t];
      o.apply(this, arguments);
    };
  }
  s(document, "mousedown", function (e) {
    var t;
    1 !== (t = e).which ||
      t.ctrlKey ||
      t.altKey ||
      n[e.target.tagName.toLowerCase()] ||
      (s(document, c.move, y, e), s(document, c.cancel, w, e));
  }),
    s(document, "touchstart", function (e) {
      n[e.target.tagName.toLowerCase()] ||
        ((e = {
          target: (e = e.changedTouches[0]).target,
          pageX: e.pageX,
          pageY: e.pageY,
          identifier: e.identifier,
          touchmove: function (e, t) {
            var n;
            (n = Y((e = e), (t = t))) && E(e, t, n, T);
          },
          touchend: function (e, t) {
            (t = t), X(e.changedTouches, t.identifier) && T(t);
          },
        }),
        s(document, u.move, e.touchmove, e),
        s(document, u.cancel, e.touchend, e));
    }),
    s(document, "movestart", function (e) {
      var t, n;
      e.defaultPrevented ||
        (e.moveEnabled &&
          ((t = {
            startX: e.startX,
            startY: e.startY,
            pageX: e.pageX,
            pageY: e.pageY,
            distX: e.distX,
            distY: e.distY,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            identifier: e.identifier,
            targetTouches: e.targetTouches,
            finger: e.finger,
          }),
          (n = {
            target: e.target,
            event: t,
            timer: new p(function (e) {
              (function (e, t, n) {
                (n -= e.timeStamp),
                  (e.distX = t.pageX - e.startX),
                  (e.distY = t.pageY - e.startY),
                  (e.deltaX = t.pageX - e.pageX),
                  (e.deltaY = t.pageY - e.pageY),
                  (e.velocityX = 0.3 * e.velocityX + (0.7 * e.deltaX) / n),
                  (e.velocityY = 0.3 * e.velocityY + (0.7 * e.deltaY) / n),
                  (e.pageX = t.pageX),
                  (e.pageY = t.pageY);
              })(t, n.touch, n.timeStamp),
                l(n.target, "move", t);
            }),
            touch: void 0,
            timeStamp: e.timeStamp,
          }),
          void 0 === e.identifier
            ? (s(e.target, "click", h),
              s(document, c.move, S, n),
              s(document, c.end, k, n))
            : ((n.activeTouchmove = function (e, t) {
                var n, o, i;
                (e = e),
                  (n = (t = t).event),
                  (o = t.timer),
                  (i = Y(e, n)) &&
                    (e.preventDefault(),
                    (n.targetTouches = e.targetTouches),
                    (t.touch = i),
                    (t.timeStamp = e.timeStamp),
                    o.kick());
              }),
              (n.activeTouchend = function (e, t) {
                K(e, t);
              }),
              s(document, u.move, n.activeTouchmove, n),
              s(document, u.end, n.activeTouchend, n))));
    }),
    window.jQuery &&
      ((i =
        "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(
          " "
        )),
      (jQuery.event.special.movestart = {
        setup: function () {
          return s(this, "movestart", C), !1;
        },
        teardown: function () {
          return f(this, "movestart", C), !1;
        },
        add: A,
      }),
      (jQuery.event.special.move = {
        setup: function () {
          return s(this, "movestart", Q), !1;
        },
        teardown: function () {
          return f(this, "movestart", Q), !1;
        },
        add: A,
      }),
      (jQuery.event.special.moveend = {
        setup: function () {
          return s(this, "movestart", q), !1;
        },
        teardown: function () {
          return f(this, "movestart", q), !1;
        },
        add: A,
      }));
});
!(function (Y) {
  Y.fn.twentytwenty = function (X) {
    X = Y.extend(
      {
        default_offset_pct: 0.5,
        orientation: "horizontal",
        before_label: "Before",
        after_label: "After",
        no_overlay: !1,
        move_slider_on_hover: !1,
        move_with_handle_only: !0,
        click_to_move: !1,
      },
      X
    );
    return this.each(function () {
      function t(t) {
        ((((t.distX > t.distY && t.distX < -t.distY) ||
          (t.distX < t.distY && t.distX > -t.distY)) &&
          "vertical" !== o) ||
          (((t.distX < t.distY && t.distX < -t.distY) ||
            (t.distX > t.distY && t.distX > -t.distY)) &&
            "vertical" === o)) &&
          t.preventDefault(),
          i.addClass("active"),
          (u = i.offset().left),
          (_ = i.offset().top),
          (m = d.width()),
          (g = d.height());
      }
      function e(t) {
        i.hasClass("active") && ((a = p(t.pageX, t.pageY)), y(a));
      }
      function n() {
        i.removeClass("active");
      }
      var a = X.default_offset_pct,
        i = Y(this),
        o = X.orientation,
        r = "vertical" === o ? "down" : "left",
        s = "vertical" === o ? "up" : "right",
        w =
          '<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L13 13L2 24" stroke-width="3" stroke-miterlimit="10"/></svg>',
        d =
          (i.wrap(
            "<div class='twentytwenty-wrapper twentytwenty-" + o + "'></div>"
          ),
          X.no_overlay ||
            (i.append("<div class='twentytwenty-overlay'></div>"),
            (b = i.find(".twentytwenty-overlay")).append(
              "<div class='twentytwenty-arrow twentytwenty-before-label' data-content='" +
                X.before_label +
                "'>" +
                w +
                "</div>"
            ),
            b.append(
              "<div class='twentytwenty-arrow twentytwenty-after-label' data-content='" +
                X.after_label +
                "'>" +
                w +
                "</div>"
            )),
          i.find("img:first")),
        c = i.find("img:last"),
        l =
          (i.append("<div class='twentytwenty-handle ba-handle'></div>"),
          i.find(".twentytwenty-handle")),
        f =
          (l.append(
            "<span class='twentytwenty-arrow twentytwenty-" +
              r +
              "-arrow ba-arrow' data-ba-arrow-direction='" +
              r +
              "'>" +
              w +
              "</span>"
          ),
          l.append("<div class='ba-bar'></div>"),
          l.append(
            "<span class='twentytwenty-arrow twentytwenty-" +
              s +
              "-arrow ba-arrow' data-ba-arrow-direction='" +
              s +
              "'>" +
              w +
              "</span>"
          ),
          i.addClass("twentytwenty-container"),
          d.addClass("twentytwenty-before"),
          c.addClass("twentytwenty-after"),
          function (t) {
            var e = d.width(),
              n = d.height();
            return {
              w: e + "px",
              h: n + "px",
              cw: t * e + "px",
              ch: t * n + "px",
            };
          }),
        v = function (t) {
          "vertical" === o
            ? (d.css("clip", "rect(0," + t.w + "," + t.ch + ",0)"),
              c.css("clip", "rect(" + t.ch + "," + t.w + "," + t.h + ",0)"))
            : (d.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"),
              c.css("clip", "rect(0," + t.w + "," + t.h + "," + t.cw + ")")),
            i.css("height", t.h);
        },
        y = function (t) {
          t = f(t);
          l.css(
            "vertical" === o ? "top" : "left",
            "vertical" === o ? t.ch : t.cw
          ),
            v(t);
        },
        h = function (t, e, n) {
          return Math.max(e, Math.min(n, t));
        },
        p = function (t, e) {
          return h("vertical" === o ? (e - _) / g : (t - u) / m, 0, 1);
        },
        u =
          (Y(window).on("resize.twentytwenty", function (t) {
            y(a);
          }),
          0),
        _ = 0,
        m = 0,
        g = 0,
        b = X.move_with_handle_only ? l : i;
      b.on("movestart", t),
        b.on("move", e),
        b.on("moveend", n),
        X.move_slider_on_hover &&
          (i.on("mouseenter", t), i.on("mousemove", e), i.on("mouseleave", n)),
        l.on("touchmove", function (t) {
          t.preventDefault();
        }),
        i.find("img").on("mousedown", function (t) {
          t.preventDefault();
        }),
        X.click_to_move &&
          i.on("click", function (t) {
            (u = i.offset().left),
              (_ = i.offset().top),
              (m = d.width()),
              (g = d.height()),
              (a = p(t.pageX, t.pageY)),
              y(a);
          }),
        Y(window).trigger("resize.twentytwenty");
    });
  };
})(jQuery);
!(function (t, o) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
    ? define(o)
    : ((t = t || self).Headroom = o());
})(this, function () {
  "use strict";
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return (i = t) && i.document && 9 === i.document.nodeType
      ? ((i = (e = t).document),
        (n = i.body),
        (s = i.documentElement),
        {
          scrollHeight: function () {
            return Math.max(
              n.scrollHeight,
              s.scrollHeight,
              n.offsetHeight,
              s.offsetHeight,
              n.clientHeight,
              s.clientHeight
            );
          },
          height: function () {
            return e.innerHeight || s.clientHeight || n.clientHeight;
          },
          scrollY: function () {
            return void 0 !== e.pageYOffset
              ? e.pageYOffset
              : (s || n.parentNode || n).scrollTop;
          },
        })
      : ((o = t),
        {
          scrollHeight: function () {
            return Math.max(o.scrollHeight, o.offsetHeight, o.clientHeight);
          },
          height: function () {
            return Math.max(o.offsetHeight, o.clientHeight);
          },
          scrollY: function () {
            return o.scrollTop;
          },
        });
    var o, e, n, s, i;
  }
  function o(t, n, s) {
    var o,
      e = (function () {
        var o = !1;
        try {
          var t = {
            get passive() {
              o = !0;
            },
          };
          window.addEventListener("test", t, t),
            window.removeEventListener("test", t, t);
        } catch (t) {
          o = !1;
        }
        return o;
      })(),
      i = !1,
      a = u(t),
      r = a.scrollY(),
      h = {};
    function l() {
      var t = Math.round(a.scrollY()),
        o = a.height(),
        e = a.scrollHeight();
      (h.scrollY = t),
        (h.lastScrollY = r),
        (h.direction = r < t ? "down" : "up"),
        (h.distance = Math.abs(t - r)),
        (h.isOutOfBounds = t < 0 || e < t + o),
        (h.top = t <= n.offset[h.direction]),
        (h.bottom = e <= t + o),
        (h.toleranceExceeded = h.distance > n.tolerance[h.direction]),
        s(h),
        (r = t),
        (i = !1);
    }
    function c() {
      i || ((i = !0), (o = requestAnimationFrame(l)));
    }
    var d = !!e && { passive: !0, capture: !1 };
    return (
      t.addEventListener("scroll", c, d),
      l(),
      {
        destroy: function () {
          cancelAnimationFrame(o), t.removeEventListener("scroll", c, d);
        },
      }
    );
  }
  function e(t) {
    return t === Object(t) ? t : { down: t, up: t };
  }
  function n(t, o) {
    (o = o || {}),
      Object.assign(this, n.options, o),
      (this.classes = Object.assign({}, n.options.classes, o.classes)),
      (this.elem = t),
      (this.tolerance = e(this.tolerance)),
      (this.offset = e(this.offset)),
      (this.initialised = !1),
      (this.frozen = !1);
  }
  return (
    (n.prototype = {
      constructor: n,
      init: function () {
        return (
          n.cutsTheMustard &&
            !this.initialised &&
            (this.addClass("initial"),
            (this.initialised = !0),
            setTimeout(
              function (t) {
                t.scrollTracker = o(
                  t.scroller,
                  { offset: t.offset, tolerance: t.tolerance },
                  t.update.bind(t)
                );
              },
              100,
              this
            )),
          this
        );
      },
      destroy: function () {
        (this.initialised = !1),
          Object.keys(this.classes).forEach(this.removeClass, this),
          this.scrollTracker.destroy();
      },
      unpin: function () {
        (!this.hasClass("pinned") && this.hasClass("unpinned")) ||
          (this.addClass("unpinned"),
          this.removeClass("pinned"),
          this.onUnpin && this.onUnpin.call(this));
      },
      pin: function () {
        this.hasClass("unpinned") &&
          (this.addClass("pinned"),
          this.removeClass("unpinned"),
          this.onPin && this.onPin.call(this));
      },
      freeze: function () {
        (this.frozen = !0), this.addClass("frozen");
      },
      unfreeze: function () {
        (this.frozen = !1), this.removeClass("frozen");
      },
      top: function () {
        this.hasClass("top") ||
          (this.addClass("top"),
          this.removeClass("notTop"),
          this.onTop && this.onTop.call(this));
      },
      notTop: function () {
        this.hasClass("notTop") ||
          (this.addClass("notTop"),
          this.removeClass("top"),
          this.onNotTop && this.onNotTop.call(this));
      },
      bottom: function () {
        this.hasClass("bottom") ||
          (this.addClass("bottom"),
          this.removeClass("notBottom"),
          this.onBottom && this.onBottom.call(this));
      },
      notBottom: function () {
        this.hasClass("notBottom") ||
          (this.addClass("notBottom"),
          this.removeClass("bottom"),
          this.onNotBottom && this.onNotBottom.call(this));
      },
      shouldUnpin: function (t) {
        return "down" === t.direction && !t.top && t.toleranceExceeded;
      },
      shouldPin: function (t) {
        return ("up" === t.direction && t.toleranceExceeded) || t.top;
      },
      addClass: function (t) {
        this.elem.classList.add.apply(
          this.elem.classList,
          this.classes[t].split(" ")
        );
      },
      removeClass: function (t) {
        this.elem.classList.remove.apply(
          this.elem.classList,
          this.classes[t].split(" ")
        );
      },
      hasClass: function (t) {
        return this.classes[t].split(" ").every(function (t) {
          return this.classList.contains(t);
        }, this.elem);
      },
      update: function (t) {
        t.isOutOfBounds ||
          (!0 !== this.frozen &&
            (t.top ? this.top() : this.notTop(),
            t.bottom ? this.bottom() : this.notBottom(),
            this.shouldUnpin(t)
              ? this.unpin()
              : this.shouldPin(t) && this.pin()));
      },
    }),
    (n.options = {
      tolerance: { up: 0, down: 0 },
      offset: 0,
      scroller: t() ? window : null,
      classes: {
        frozen: "headroom--frozen",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        initial: "headroom",
      },
    }),
    (n.cutsTheMustard = !!(
      t() &&
      function () {}.bind &&
      "classList" in document.documentElement &&
      Object.assign &&
      Object.keys &&
      requestAnimationFrame
    )),
    n
  );
}),
  (function (s) {
    s &&
      ((s.fn.headroom = function (n) {
        return this.each(function () {
          var t = s(this),
            o = t.data("headroom"),
            e = "object" == typeof n && n,
            e = s.extend(!0, {}, Headroom.options, e);
          o || ((o = new Headroom(this, e)).init(), t.data("headroom", o)),
            "string" == typeof n &&
              (o[n](), "destroy" === n && t.removeData("headroom"));
        });
      }),
      s("[data-headroom]").each(function () {
        var t = s(this);
        t.headroom(t.data());
      }));
  })(window.Zepto || window.jQuery);
!(function () {
  "use strict";
  var y, e;
  function t(e) {
    return void 0 === this || Object.getPrototypeOf(this) !== t.prototype
      ? new t(e)
      : (((y = this).version = "3.3.2"),
        (y.tools = new i()),
        y.isSupported()
          ? (y.tools.extend(y.defaults, e || {}),
            (y.defaults.container = m(y.defaults)),
            (y.store = { elements: {}, containers: [] }),
            (y.sequences = {}),
            (y.history = []),
            (y.uid = 0),
            (y.initialized = !1))
          : "undefined" != typeof console &&
            null !== console &&
            console.log("ScrollReveal is not supported in this browser."),
        y);
  }
  function m(e) {
    if (e && e.container) {
      if ("string" == typeof e.container)
        return window.document.documentElement.querySelector(e.container);
      if (y.tools.isNode(e.container)) return e.container;
      console.log(
        'ScrollReveal: invalid container "' + e.container + '" provided.'
      ),
        console.log("ScrollReveal: falling back to default container.");
    }
    return y.defaults.container;
  }
  function p() {
    return ++y.uid;
  }
  function g(e, t) {
    var n = e.config;
    return (
      "-webkit-transition: " +
      e.styles.computed.transition +
      "-webkit-transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; transition: " +
      e.styles.computed.transition +
      "transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; "
    );
  }
  function w(e) {
    var t = e.config,
      n = e.styles.transform,
      i =
        "top" === t.origin || "left" === t.origin
          ? /^-/.test(t.distance)
            ? t.distance.substr(1)
            : "-" + t.distance
          : t.distance;
    parseInt(t.distance) &&
      ((n.initial += " translate" + t.axis + "(" + i + ")"),
      (n.target += " translate" + t.axis + "(0)")),
      t.scale &&
        ((n.initial += " scale(" + t.scale + ")"), (n.target += " scale(1)")),
      t.rotate.x &&
        ((n.initial += " rotateX(" + t.rotate.x + "deg)"),
        (n.target += " rotateX(0)")),
      t.rotate.y &&
        ((n.initial += " rotateY(" + t.rotate.y + "deg)"),
        (n.target += " rotateY(0)")),
      t.rotate.z &&
        ((n.initial += " rotateZ(" + t.rotate.z + "deg)"),
        (n.target += " rotateZ(0)")),
      (n.initial += "; opacity: " + t.opacity + ";"),
      (n.target += "; opacity: " + e.styles.computed.opacity + ";");
  }
  function v() {
    if (y.isSupported()) {
      n();
      for (var e = 0; e < y.store.containers.length; e++)
        y.store.containers[e].addEventListener("scroll", a),
          y.store.containers[e].addEventListener("resize", a);
      y.initialized ||
        (window.addEventListener("scroll", a),
        window.addEventListener("resize", a),
        (y.initialized = !0));
    }
    return y;
  }
  function a() {
    e(n);
  }
  function n() {
    var s, r, n, i, o;
    y.tools.forOwn(y.sequences, function (e) {
      (o = y.sequences[e]), (n = !1);
      for (var t = 0; t < o.elemIds.length; t++)
        (i = o.elemIds[t]), c(y.store.elements[i]) && !n && (n = !0);
      o.active = n;
    }),
      y.tools.forOwn(y.store.elements, function (e) {
        var t, n, i, o;
        (r = y.store.elements[e]),
          (n = (e = r).config.useDelay),
          (s =
            "always" === n ||
            ("onload" === n && !y.initialized) ||
            ("once" === n && !e.seen)),
          !(function (e) {
            {
              var t;
              if (e.sequence)
                return (
                  (t = y.sequences[e.sequence.id]).active &&
                  !t.blocked &&
                  !e.revealing &&
                  !e.disabled
                );
            }
            return c(e) && !e.revealing && !e.disabled;
          })(r)
            ? (function (e) {
                if (e.sequence)
                  return (
                    !y.sequences[e.sequence.id].active &&
                    e.config.reset &&
                    e.revealing &&
                    !e.disabled
                  );
                return !c(e) && e.config.reset && e.revealing && !e.disabled;
              })(r) &&
              (r.config.beforeReset(r.domEl),
              r.domEl.setAttribute(
                "style",
                r.styles.inline +
                  r.styles.transform.initial +
                  r.styles.transition.instant
              ),
              l("reset", r),
              (r.revealing = !1))
            : (r.config.beforeReveal(r.domEl),
              s
                ? r.domEl.setAttribute(
                    "style",
                    r.styles.inline +
                      r.styles.transform.target +
                      r.styles.transition.delayed
                  )
                : r.domEl.setAttribute(
                    "style",
                    r.styles.inline +
                      r.styles.transform.target +
                      r.styles.transition.instant
                  ),
              l("reveal", r, s),
              (r.revealing = !0),
              (r.seen = !0),
              r.sequence &&
                ((t = r),
                (n = s),
                (i = e = 0),
                ((o = y.sequences[t.sequence.id]).blocked = !0),
                n && "onload" === t.config.useDelay && (i = t.config.delay),
                t.sequence.timer &&
                  ((e = Math.abs(t.sequence.timer.started - new Date())),
                  window.clearTimeout(t.sequence.timer)),
                (t.sequence.timer = { started: new Date() }),
                (t.sequence.timer.clock = window.setTimeout(function () {
                  (o.blocked = !1), (t.sequence.timer = null), a();
                }, Math.abs(o.interval) + i - e))));
      });
  }
  function l(e, t, n) {
    var i = 0,
      o = 0,
      s = "after";
    switch (e) {
      case "reveal":
        (o = t.config.duration), n && (o += t.config.delay), (s += "Reveal");
        break;
      case "reset":
        (o = t.config.duration), (s += "Reset");
    }
    t.timer &&
      ((i = Math.abs(t.timer.started - new Date())),
      window.clearTimeout(t.timer.clock)),
      (t.timer = { started: new Date() }),
      (t.timer.clock = window.setTimeout(function () {
        t.config[s](t.domEl), (t.timer = null);
      }, o - i));
  }
  function f(e) {
    for (
      var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth;
      isNaN(e.offsetTop) || (t += e.offsetTop),
        isNaN(e.offsetLeft) || (n += e.offsetLeft),
        (e = e.offsetParent);

    );
    return { top: t, left: n, height: i, width: o };
  }
  function c(e) {
    var t,
      n,
      i,
      o = f(e.domEl),
      s = {
        width: (s = e.config.container).clientWidth,
        height: s.clientHeight,
      },
      r =
        (r = e.config.container) && r !== window.document.documentElement
          ? ((a = f(r)), { x: r.scrollLeft + a.left, y: r.scrollTop + a.top })
          : { x: window.pageXOffset, y: window.pageYOffset },
      a = e.config.viewFactor,
      l = o.height,
      c = o.width,
      d = o.top,
      o = o.left;
    return (
      (t = d + l * a),
      (n = o + c * a),
      (d = d + l - l * a),
      (l = o + c - c * a),
      (o = r.y + e.config.viewOffset.top),
      (c = r.x + e.config.viewOffset.left),
      (i = r.y - e.config.viewOffset.bottom + s.height),
      (r = r.x - e.config.viewOffset.right + s.width),
      (t < i && o < d && c < n && l < r) ||
        "fixed" === window.getComputedStyle(e.domEl).position
    );
  }
  function i() {}
  (t.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: function (e) {},
    beforeReset: function (e) {},
    afterReveal: function (e) {},
    afterReset: function (e) {},
  }),
    (t.prototype.isSupported = function () {
      var e = document.documentElement.style;
      return (
        ("WebkitTransition" in e && "WebkitTransform" in e) ||
        ("transition" in e && "transform" in e)
      );
    }),
    (t.prototype.reveal = function (e, t, n, i) {
      var o, s, r, a;
      if (
        (void 0 !== t && "number" == typeof t
          ? ((n = t), (t = {}))
          : null == t && (t = {}),
        (o = m(t)),
        (s = (function (e, t) {
          {
            if ("string" == typeof e)
              return Array.prototype.slice.call(t.querySelectorAll(e));
            if (y.tools.isNode(e)) return [e];
            if (y.tools.isNodeList(e)) return Array.prototype.slice.call(e);
          }
          return [];
        })(e, o)).length)
      ) {
        n &&
          "number" == typeof n &&
          ((l = p()),
          (a = y.sequences[l] =
            { id: l, interval: n, elemIds: [], active: !1 }));
        for (var l, c = 0; c < s.length; c++) {
          (d = s[c].getAttribute("data-sr-id"))
            ? (r = y.store.elements[d])
            : (r = {
                id: p(),
                domEl: s[c],
                seen: !1,
                revealing: !1,
              }).domEl.setAttribute("data-sr-id", r.id),
            a &&
              ((r.sequence = { id: a.id, index: a.elemIds.length }),
              a.elemIds.push(r.id)),
            (u = f = d = void 0);
          var d = r,
            f = t,
            u = o,
            u =
              (f.container && (f.container = u),
              d.config
                ? (d.config = y.tools.extendClone(d.config, f))
                : (d.config = y.tools.extendClone(y.defaults, f)),
              "top" === d.config.origin || "bottom" === d.config.origin
                ? (d.config.axis = "Y")
                : (d.config.axis = "X"),
              (f = u = void 0),
              r),
            f = window.getComputedStyle(u.domEl),
            d =
              (u.styles ||
                ((u.styles = { transition: {}, transform: {}, computed: {} }),
                (u.styles.inline = u.domEl.getAttribute("style") || ""),
                (u.styles.inline += "; visibility: visible; "),
                (u.styles.computed.opacity = f.opacity),
                f.transition && "all 0s ease 0s" !== f.transition
                  ? (u.styles.computed.transition = f.transition + ", ")
                  : (u.styles.computed.transition = "")),
              (u.styles.transition.instant = g(u, 0)),
              (u.styles.transition.delayed = g(u, u.config.delay)),
              (u.styles.transform.initial = " -webkit-transform:"),
              (u.styles.transform.target = " -webkit-transform:"),
              w(u),
              (u.styles.transform.initial += "transform:"),
              (u.styles.transform.target += "transform:"),
              w(u),
              (f = d = void 0),
              r),
            f = d.config.container;
          f &&
            -1 === y.store.containers.indexOf(f) &&
            y.store.containers.push(d.config.container),
            (y.store.elements[d.id] = d),
            (y.tools.isMobile() && !r.config.mobile) || !y.isSupported()
              ? (r.domEl.setAttribute("style", r.styles.inline),
                (r.disabled = !0))
              : r.revealing ||
                r.domEl.setAttribute(
                  "style",
                  r.styles.inline + r.styles.transform.initial
                );
        }
        !i &&
          y.isSupported() &&
          ((l = { target: (l = e), config: t, interval: n }),
          y.history.push(l),
          y.initTimeout && window.clearTimeout(y.initTimeout),
          (y.initTimeout = window.setTimeout(v, 0)));
      } else
        console.log(
          'ScrollReveal: reveal on "' + e + '" failed, no elements found.'
        );
      return y;
    }),
    (t.prototype.sync = function () {
      if (y.history.length && y.isSupported()) {
        for (var e = 0; e < y.history.length; e++) {
          var t = y.history[e];
          y.reveal(t.target, t.config, t.interval, !0);
        }
        v();
      } else console.log("ScrollReveal: sync failed, no reveals found.");
      return y;
    }),
    (i.prototype.isObject = function (e) {
      return null !== e && "object" == typeof e && e.constructor === Object;
    }),
    (i.prototype.isNode = function (e) {
      return "object" == typeof window.Node
        ? e instanceof window.Node
        : e &&
            "object" == typeof e &&
            "number" == typeof e.nodeType &&
            "string" == typeof e.nodeName;
    }),
    (i.prototype.isNodeList = function (e) {
      var t = Object.prototype.toString.call(e);
      return "object" == typeof window.NodeList
        ? e instanceof window.NodeList
        : e &&
            "object" == typeof e &&
            /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) &&
            "number" == typeof e.length &&
            (0 === e.length || this.isNode(e[0]));
    }),
    (i.prototype.forOwn = function (e, t) {
      if (!this.isObject(e))
        throw new TypeError(
          'Expected "object", but received "' + typeof e + '".'
        );
      for (var n in e) e.hasOwnProperty(n) && t(n);
    }),
    (i.prototype.extend = function (t, n) {
      return (
        this.forOwn(
          n,
          function (e) {
            this.isObject(n[e])
              ? ((t[e] && this.isObject(t[e])) || (t[e] = {}),
                this.extend(t[e], n[e]))
              : (t[e] = n[e]);
          }.bind(this)
        ),
        t
      );
    }),
    (i.prototype.extendClone = function (e, t) {
      return this.extend(this.extend({}, e), t);
    }),
    (i.prototype.isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }),
    (e =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? define(function () {
          return t;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = t)
      : (window.ScrollReveal = t);
})();