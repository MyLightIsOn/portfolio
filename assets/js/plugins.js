// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

/*
Countdown Clock
================================== */
function makeTimer() {
  var endTime = new Date("29 April 2019 9:56:00 GMT+01:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60,
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + "<h4>Days</h4>");
  $("#hours").html(hours + "<h4>Hours</h4>");
  $("#minutes").html(minutes + "<h4>Minutes</h4>");
  $("#seconds").html(seconds + "<h4>Seconds</h4>");
}
setInterval(function () {
  makeTimer();
}, 1000);

// Place any jQuery/helper plugins in here.

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType,
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*
 * VenoBox - jQuery Plugin
 * version: 1.8.3
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
 *
 */
!(function (e) {
  "use strict";
  var s,
    i,
    c,
    a,
    o,
    t,
    d,
    l,
    r,
    n,
    v,
    u,
    b,
    k,
    p,
    m,
    h,
    f,
    g,
    x,
    y,
    w,
    C,
    _,
    B,
    P,
    E,
    O,
    D,
    M,
    N,
    U,
    V,
    I,
    z,
    R,
    X,
    Y,
    j,
    W,
    q;
  e.fn.extend({
    venobox: function ($) {
      var A = this,
        H = e.extend(
          {
            arrowsColor: "#B6B6B6",
            autoplay: !1,
            bgcolor: "#fff",
            border: "0",
            closeBackground: "#161617",
            closeColor: "#d2d2d2",
            framewidth: "",
            frameheight: "",
            gallItems: !1,
            infinigall: !1,
            htmlClose: "&times;",
            htmlNext: "<span>Next</span>",
            htmlPrev: "<span>Prev</span>",
            numeratio: !1,
            numerationBackground: "#161617",
            numerationColor: "#d2d2d2",
            numerationPosition: "top",
            overlayClose: !0,
            overlayColor: "rgba(23,23,23,0.85)",
            spinner: "double-bounce",
            spinColor: "#d2d2d2",
            titleattr: "title",
            titleBackground: "#161617",
            titleColor: "#d2d2d2",
            titlePosition: "top",
            cb_pre_open: function () {
              return !0;
            },
            cb_post_open: function () {},
            cb_pre_close: function () {
              return !0;
            },
            cb_post_close: function () {},
            cb_post_resize: function () {},
            cb_after_nav: function () {},
            cb_init: function () {},
          },
          $,
        );
      return (
        H.cb_init(A),
        this.each(function () {
          if ((D = e(this)).data("venobox")) return !0;
          function $() {
            (y = D.data("gall")),
              (h = D.data("numeratio")),
              (u = D.data("gallItems")),
              (b = D.data("infinigall")),
              (k = u || e('.vbox-item[data-gall="' + y + '"]')),
              (w = k.eq(k.index(D) + 1)),
              (C = k.eq(k.index(D) - 1)),
              w.length || !0 !== b || (w = k.eq(0)),
              k.length > 1
                ? ((M = k.index(D) + 1), c.html(M + " / " + k.length))
                : (M = 1),
              !0 === h ? c.show() : c.hide(),
              "" !== x ? a.show() : a.hide(),
              w.length || !0 === b
                ? (e(".vbox-next").css("display", "block"), (_ = !0))
                : (e(".vbox-next").css("display", "none"), (_ = !1)),
              k.index(D) > 0 || !0 === b
                ? (e(".vbox-prev").css("display", "block"), (B = !0))
                : (e(".vbox-prev").css("display", "none"), (B = !1)),
              (!0 !== B && !0 !== _) ||
                (d.on(K.DOWN, F), d.on(K.MOVE, G), d.on(K.UP, J));
          }
          function Q(e) {
            return (
              !(e.length < 1) &&
              !p &&
              ((p = !0),
              (f = e.data("overlay") || e.data("overlaycolor")),
              (n = e.data("framewidth")),
              (v = e.data("frameheight")),
              (o = e.data("border")),
              (i = e.data("bgcolor")),
              (l = e.data("href") || e.attr("href")),
              (s = e.data("autoplay")),
              (x = e.attr(e.data("titleattr")) || ""),
              e === C && d.addClass("animated").addClass("swipe-right"),
              e === w && d.addClass("animated").addClass("swipe-left"),
              E.show(),
              void d.animate({ opacity: 0 }, 500, function () {
                g.css("background", f),
                  d
                    .removeClass("animated")
                    .removeClass("swipe-left")
                    .removeClass("swipe-right")
                    .css({ "margin-left": 0, "margin-right": 0 }),
                  "iframe" == e.data("vbtype")
                    ? ce()
                    : "inline" == e.data("vbtype")
                      ? oe()
                      : "ajax" == e.data("vbtype")
                        ? ie()
                        : "video" == e.data("vbtype")
                          ? ae(s)
                          : (d.html('<img src="' + l + '">'), te()),
                  (D = e),
                  $(),
                  (p = !1),
                  H.cb_after_nav(D, M, w, C);
              }))
            );
          }
          function S(e) {
            27 === e.keyCode && T(),
              37 == e.keyCode && !0 === B && Q(C),
              39 == e.keyCode && !0 === _ && Q(w);
          }
          function T() {
            if (!1 === H.cb_pre_close(D, M, w, C)) return !1;
            e("body").off("keydown", S).removeClass("vbox-open"),
              D.focus(),
              g.animate({ opacity: 0 }, 500, function () {
                g.remove(), (p = !1), H.cb_post_close();
              });
          }
          (A.VBclose = function () {
            T();
          }),
            D.addClass("vbox-item"),
            D.data("framewidth", H.framewidth),
            D.data("frameheight", H.frameheight),
            D.data("border", H.border),
            D.data("bgcolor", H.bgcolor),
            D.data("numeratio", H.numeratio),
            D.data("gallItems", H.gallItems),
            D.data("infinigall", H.infinigall),
            D.data("overlaycolor", H.overlayColor),
            D.data("titleattr", H.titleattr),
            D.data("venobox", !0),
            D.on("click", function (u) {
              if ((u.preventDefault(), (D = e(this)), !1 === H.cb_pre_open(D)))
                return !1;
              switch (
                ((A.VBnext = function () {
                  Q(w);
                }),
                (A.VBprev = function () {
                  Q(C);
                }),
                (f = D.data("overlay") || D.data("overlaycolor")),
                (n = D.data("framewidth")),
                (v = D.data("frameheight")),
                (s = D.data("autoplay") || H.autoplay),
                (o = D.data("border")),
                (i = D.data("bgcolor")),
                (_ = !1),
                (B = !1),
                (p = !1),
                (l = D.data("href") || D.attr("href")),
                (r = D.data("css") || ""),
                (x = D.attr(D.data("titleattr")) || ""),
                (P = '<div class="vbox-preloader">'),
                H.spinner)
              ) {
                case "rotating-plane":
                  P += '<div class="sk-rotating-plane"></div>';
                  break;
                case "double-bounce":
                  P +=
                    '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                  break;
                case "wave":
                  P +=
                    '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                  break;
                case "wandering-cubes":
                  P +=
                    '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                  break;
                case "spinner-pulse":
                  P += '<div class="sk-spinner sk-spinner-pulse"></div>';
                  break;
                case "chasing-dots":
                  P +=
                    '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                  break;
                case "three-bounce":
                  P +=
                    '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                  break;
                case "circle":
                  P +=
                    '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                  break;
                case "cube-grid":
                  P +=
                    '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                  break;
                case "fading-circle":
                  P +=
                    '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                  break;
                case "folding-cube":
                  P +=
                    '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>';
              }
              return (
                (P += "</div>"),
                (O =
                  '<a class="vbox-next">' +
                  H.htmlNext +
                  '</a><a class="vbox-prev">' +
                  H.htmlPrev +
                  "</a>"),
                (U =
                  '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' +
                  H.htmlClose +
                  "</div>"),
                (t =
                  '<div class="vbox-overlay ' +
                  r +
                  '" style="background:' +
                  f +
                  '">' +
                  P +
                  '<div class="vbox-container"><div class="vbox-content"></div></div>' +
                  U +
                  O +
                  "</div>"),
                e("body").append(t).addClass("vbox-open"),
                e(
                  ".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse",
                ).css("background-color", H.spinColor),
                (g = e(".vbox-overlay")),
                e(".vbox-container"),
                (d = e(".vbox-content")),
                (c = e(".vbox-num")),
                (a = e(".vbox-title")),
                (E = e(".vbox-preloader")).show(),
                a.css(H.titlePosition, "-1px"),
                a.css({
                  color: H.titleColor,
                  "background-color": H.titleBackground,
                }),
                e(".vbox-close").css({
                  color: H.closeColor,
                  "background-color": H.closeBackground,
                }),
                e(".vbox-num").css(H.numerationPosition, "-1px"),
                e(".vbox-num").css({
                  color: H.numerationColor,
                  "background-color": H.numerationBackground,
                }),
                e(".vbox-next span, .vbox-prev span").css({
                  "border-top-color": H.arrowsColor,
                  "border-right-color": H.arrowsColor,
                }),
                d.html(""),
                d.css("opacity", "0"),
                g.css("opacity", "0"),
                $(),
                g.animate({ opacity: 1 }, 250, function () {
                  "iframe" == D.data("vbtype")
                    ? ce()
                    : "inline" == D.data("vbtype")
                      ? oe()
                      : "ajax" == D.data("vbtype")
                        ? ie()
                        : "video" == D.data("vbtype")
                          ? ae(s)
                          : (d.html('<img src="' + l + '">'), te()),
                    H.cb_post_open(D, M, w, C);
                }),
                e("body").keydown(S),
                e(".vbox-prev").on("click", function () {
                  Q(C);
                }),
                e(".vbox-next").on("click", function () {
                  Q(w);
                }),
                !1
              );
            });
          var Z = ".vbox-overlay";
          function F(e) {
            d.addClass("animated"),
              (I = R = e.pageY),
              (z = X = e.pageX),
              (N = !0);
          }
          function G(e) {
            if (!0 === N) {
              (X = e.pageX), (R = e.pageY), (j = X - z), (W = R - I);
              var s = Math.abs(j);
              s > Math.abs(W) &&
                s <= 100 &&
                (e.preventDefault(), d.css("margin-left", j));
            }
          }
          function J(e) {
            if (!0 === N) {
              N = !1;
              var s = D,
                i = !1;
              (Y = X - z) < 0 && !0 === _ && ((s = w), (i = !0)),
                Y > 0 && !0 === B && ((s = C), (i = !0)),
                Math.abs(Y) >= q && !0 === i
                  ? Q(s)
                  : d.css({ "margin-left": 0, "margin-right": 0 });
            }
          }
          H.overlayClose || (Z = ".vbox-close"),
            e("body").on("click", Z, function (s) {
              (e(s.target).is(".vbox-overlay") ||
                e(s.target).is(".vbox-content") ||
                e(s.target).is(".vbox-close") ||
                e(s.target).is(".vbox-preloader")) &&
                T();
            }),
            (z = 0),
            (X = 0),
            (Y = 0),
            (q = 50),
            (N = !1);
          var K = {
              DOWN: "touchmousedown",
              UP: "touchmouseup",
              MOVE: "touchmousemove",
            },
            L = function (s) {
              var i;
              switch (s.type) {
                case "mousedown":
                  i = K.DOWN;
                  break;
                case "mouseup":
                case "mouseout":
                  i = K.UP;
                  break;
                case "mousemove":
                  i = K.MOVE;
                  break;
                default:
                  return;
              }
              var c = se(i, s, s.pageX, s.pageY);
              e(s.target).trigger(c);
            },
            ee = function (s) {
              var i;
              switch (s.type) {
                case "touchstart":
                  i = K.DOWN;
                  break;
                case "touchend":
                  i = K.UP;
                  break;
                case "touchmove":
                  i = K.MOVE;
                  break;
                default:
                  return;
              }
              var c,
                a = s.originalEvent.touches[0];
              (c =
                i == K.UP ? se(i, s, null, null) : se(i, s, a.pageX, a.pageY)),
                e(s.target).trigger(c);
            },
            se = function (s, i, c, a) {
              return e.Event(s, { pageX: c, pageY: a, originalEvent: i });
            };
          function ie() {
            e.ajax({ url: l, cache: !1 })
              .done(function (e) {
                d.html('<div class="vbox-inline">' + e + "</div>"), te();
              })
              .fail(function () {
                d.html(
                  '<div class="vbox-inline"><p>Error retrieving contents, please retry</div>',
                ),
                  de();
              });
          }
          function ce() {
            d.html('<iframe class="venoframe" src="' + l + '"></iframe>'), de();
          }
          function ae(e) {
            var s,
              i = (function (e) {
                var s;
                e.match(
                  /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
                ),
                  RegExp.$3.indexOf("youtu") > -1
                    ? (s = "youtube")
                    : RegExp.$3.indexOf("vimeo") > -1 && (s = "vimeo");
                return { type: s, id: RegExp.$6 };
              })(l),
              c =
                (e ? "?rel=0&autoplay=1" : "?rel=0") +
                (function (e) {
                  var s = "",
                    i = decodeURIComponent(e).split("?");
                  if (void 0 !== i[1]) {
                    var c,
                      a,
                      o = i[1].split("&");
                    for (a = 0; a < o.length; a++)
                      (c = o[a].split("=")), (s = s + "&" + c[0] + "=" + c[1]);
                  }
                  return encodeURI(s);
                })(l);
            "vimeo" == i.type
              ? (s = "https://player.vimeo.com/video/")
              : "youtube" == i.type && (s = "https://www.youtube.com/embed/"),
              d.html(
                '<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="' +
                  s +
                  i.id +
                  c +
                  '"></iframe>',
              ),
              de();
          }
          function oe() {
            d.html('<div class="vbox-inline">' + e(l).html() + "</div>"), de();
          }
          function te() {
            (V = d.find("img")).length
              ? V.each(function () {
                  e(this).one("load", function () {
                    de();
                  });
                })
              : de();
          }
          function de() {
            a.html(x),
              d
                .find(">:first-child")
                .addClass("figlio")
                .css({ width: n, height: v, padding: o, background: i }),
              e("img.figlio").on("dragstart", function (e) {
                e.preventDefault();
              }),
              le(),
              d.animate({ opacity: "1" }, "slow", function () {
                E.hide();
              });
          }
          function le() {
            var s = d.outerHeight(),
              i = e(window).height();
            (m = s + 60 < i ? (i - s) / 2 : "30px"),
              d.css("margin-top", m),
              d.css("margin-bottom", m),
              H.cb_post_resize();
          }
          "ontouchstart" in window
            ? (e(document).on("touchstart", ee),
              e(document).on("touchmove", ee),
              e(document).on("touchend", ee))
            : (e(document).on("mousedown", L),
              e(document).on("mouseup", L),
              e(document).on("mouseout", L),
              e(document).on("mousemove", L)),
            e(window).resize(function () {
              e(".vbox-content").length && setTimeout(le(), 800);
            });
        })
      );
    },
  });
})(jQuery);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke(this, "disable");
      },
      enable: function () {
        return d._invoke(this, "enable");
      },
      destroy: function () {
        return d._invoke(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option.",
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints.",
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */
!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  var i = Array.prototype.slice,
    n = t.console,
    o =
      void 0 === n
        ? function () {}
        : function (t) {
            n.error(t);
          };
  function s(n, s, a) {
    (a = a || e || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }),
      (a.fn[n] = function (t) {
        if ("string" == typeof t) {
          var e = i.call(arguments, 1);
          return (
            (h = e),
            (l = "$()." + n + '("' + (u = t) + '")'),
            (r = this).each(function (t, e) {
              var i = a.data(e, n);
              if (i) {
                var s = i[u];
                if (s && "_" != u.charAt(0)) {
                  var r = s.apply(i, h);
                  d = void 0 === d ? r : d;
                } else o(l + " is not a valid method");
              } else o(n + " not initialized. Cannot call methods, i.e. " + l);
            }),
            void 0 !== d ? d : r
          );
        }
        var r, u, h, d, l, f;
        return (
          (f = t),
          this.each(function (t, e) {
            var i = a.data(e, n);
            i ? (i.option(f), i._init()) : ((i = new s(e, f)), a.data(e, n, i));
          }),
          this
        );
      }),
      r(a));
  }
  function r(t) {
    !t || (t && t.bridget) || (t.bridget = s);
  }
  return r(e || t.jQuery), s;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var s = this._onceEvents && this._onceEvents[t]; o; ) {
            var r = s && s[o];
            r && (this.off(t, o), delete s[o]),
              o.apply(this, e),
              (o = i[(n += r ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      i = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      n = i.length;
    function o(t) {
      var i = getComputedStyle(t);
      return (
        i ||
          e(
            "Style returned " +
              i +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1",
          ),
        i
      );
    }
    var s,
      r = !1;
    function a(e) {
      if (
        ((function () {
          if (!r) {
            r = !0;
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style.boxSizing = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            (a.isBoxSizeOuter = s = 200 == t(n.width)), i.removeChild(e);
          }
        })(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var u = o(e);
        if ("none" == u.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < n;
              e++
            )
              t[i[e]] = 0;
            return t;
          })();
        var h = {};
        (h.width = e.offsetWidth), (h.height = e.offsetHeight);
        for (
          var d = (h.isBorderBox = "border-box" == u.boxSizing), l = 0;
          l < n;
          l++
        ) {
          var f = i[l],
            m = u[f],
            c = parseFloat(m);
          h[f] = isNaN(c) ? 0 : c;
        }
        var p = h.paddingLeft + h.paddingRight,
          y = h.paddingTop + h.paddingBottom,
          g = h.marginLeft + h.marginRight,
          v = h.marginTop + h.marginBottom,
          _ = h.borderLeftWidth + h.borderRightWidth,
          I = h.borderTopWidth + h.borderBottomWidth,
          z = d && s,
          x = t(u.width);
        !1 !== x && (h.width = x + (z ? 0 : p + _));
        var S = t(u.height);
        return (
          !1 !== S && (h.height = S + (z ? 0 : y + I)),
          (h.innerWidth = h.width - (p + _)),
          (h.innerHeight = h.height - (y + I)),
          (h.outerWidth = h.width + g),
          (h.outerHeight = h.height + v),
          h
        );
      }
    }
    return a;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("desandro-matches-selector")))
        : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function (t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e;
        },
        removeFrom: function (t, e) {
          var i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        },
        getParent: function (t, i) {
          for (; t != document.body; )
            if (((t = t.parentNode), e(t, i))) return t;
        },
        getQueryElement: function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function (t, n) {
          var o = [];
          return (
            (t = i.makeArray(t)).forEach(function (t) {
              if (t instanceof HTMLElement)
                if (n) {
                  e(t, n) && o.push(t);
                  for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                    o.push(i[s]);
                } else o.push(t);
            }),
            o
          );
        },
        debounceMethod: function (t, e, i) {
          var n = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
              s = this;
            this[o] = setTimeout(function () {
              n.apply(s, e), delete s[o];
            }, i || 100);
          };
        },
        docReady: function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e
            ? t()
            : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        },
      },
      n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, i);
            l && l.data(t, o, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("ev-emitter"), require("get-size")))
        : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    var i = document.documentElement.style,
      n = "string" == typeof i.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[n],
      r = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay",
      };
    function a(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var u = (a.prototype = Object.create(t.prototype));
    (u.constructor = a),
      (u._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.getSize = function () {
        this.size = e(this.element);
      }),
      (u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[r[i] || i] = t[i];
        }
      }),
      (u.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * s.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * s.height
              : parseInt(o, 10);
        (r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (u.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (u._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10),
          r = o === this.position.x && s === this.position.y;
        if ((this.setPosition(t, e), !r || this.isTransitioning)) {
          var a = t - i,
            u = e - n,
            h = {};
          (h.transform = this.getTranslate(a, u)),
            this.transition({
              to: h,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (u.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          "translate3d(" +
          (t = i ? t : -t) +
          "px, " +
          (e = n ? e : -e) +
          "px, 0)"
        );
      }),
      (u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (u.moveTo = u._transitionTo),
      (u.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (u._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (u.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var h =
      "opacity," +
      o.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (u.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: h,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(s, this, !1);
      }
    }),
      (u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (u.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var d = { "-webkit-transform": "transform" };
    (u.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = d[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (u.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(s, this, !1),
          (this.isTransitioning = !1);
      }),
      (u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var l = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (u.removeTransitionStyles = function () {
        this.css(l);
      }),
      (u.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (u.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (u.remove = function () {
        n && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (u.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (u.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (u.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      a
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, s) {
            return e(t, i, n, o, s);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            t,
            require("ev-emitter"),
            require("get-size"),
            require("fizzy-ui-utils"),
            require("./item"),
          ))
        : (t.Outlayer = e(
            t,
            t.EvEmitter,
            t.getSize,
            t.fizzyUIUtils,
            t.Outlayer.Item,
          ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    var s = t.console,
      r = t.jQuery,
      a = function () {},
      u = 0,
      h = {};
    function d(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        (this.element = i),
          r && (this.$element = r(this.element)),
          (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e);
        var o = ++u;
        (this.element.outlayerGUID = o),
          (h[o] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else
        s &&
          s.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t),
          );
    }
    (d.namespace = "outlayer"),
      (d.Item = o),
      (d.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var l = d.prototype;
    function f(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    n.extend(l, e.prototype),
      (l.option = function (t) {
        n.extend(this.options, t);
      }),
      (l._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (d.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (l._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (l.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (l._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var s = new i(e[o], this);
          n.push(s);
        }
        return n;
      }),
      (l._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (l.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (l.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (l._init = l.layout),
      (l._resetLayout = function () {
        this.getSize();
      }),
      (l.getSize = function () {
        this.size = i(this.element);
      }),
      (l._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (l.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (l._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (l._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (l._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (l._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (l.updateStagger = function () {
        var t = this.options.stagger;
        if (null !== t && void 0 !== t)
          return (
            (this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
              if (!i.length) return 0;
              i = parseFloat(i);
              var o = m[n] || 1;
              return i * o;
            })(t)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (l._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (l._postLayout = function () {
        this.resizeContainer();
      }),
      (l.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (l._getContainerSize = a),
      (l._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (l._emitCompleteOnItems = function (t, e) {
        var i = this;
        function n() {
          i.dispatchEvent(t + "Complete", null, [e]);
        }
        var o = e.length;
        if (e && o) {
          var s = 0;
          e.forEach(function (e) {
            e.once(t, r);
          });
        } else n();
        function r() {
          ++s == o && n();
        }
      }),
      (l.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), r))
          if (((this.$element = this.$element || r(this.element)), e)) {
            var o = r.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (l.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (l.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (l.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (l.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (l._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t))
          );
      }),
      (l._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (l._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (l._manageStamp = a),
      (l._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t);
        return {
          left: e.left - n.left - o.marginLeft,
          top: e.top - n.top - o.marginTop,
          right: n.right - e.right - o.marginRight,
          bottom: n.bottom - e.bottom - o.marginBottom,
        };
      }),
      (l.handleEvent = n.handleEvent),
      (l.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (l.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (l.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(d, "onresize", 100),
      (l.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (l.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (l.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (l.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (l.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (l.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (l.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (l.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (l.getItems = function (t) {
        var e = [];
        return (
          (t = n.makeArray(t)).forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (l.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (l.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e],
          delete this.element.outlayerGUID,
          r && r.removeData(this.element, this.constructor.namespace);
      }),
      (d.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && h[e];
      }),
      (d.create = function (t, e) {
        var i = f(d);
        return (
          (i.defaults = n.extend({}, d.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, d.compatOptions)),
          (i.namespace = t),
          (i.data = d.data),
          (i.Item = f(o)),
          n.htmlInit(i, t),
          r && r.bridget && r.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (d.Item = o), d;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("outlayer")))
        : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var n = e[i];
            this.sortData[i] = n(this.element, this);
          }
        }
      });
    var o = i.destroy;
    return (
      (i.destroy = function () {
        o.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("get-size"), require("outlayer")))
        : ((t.Isotope = t.Isotope || {}),
          (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var n = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        n[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return (
          this.isotope.size &&
          e &&
          e.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        if ((this._getMeasurement(i, n), !this[i])) {
          var o = this.getFirstItemSize();
          this[i] = (o && o[n]) || this.isotope.size["inner" + e];
        }
      }),
      (n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function o() {
          i.apply(this, arguments);
        }
        return (
          (o.prototype = Object.create(n)),
          (o.prototype.constructor = o),
          e && (o.options = e),
          (o.prototype.namespace = t),
          (i.modes[t] = o),
          o
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("outlayer"), require("get-size")))
        : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          s = o / n,
          r = n - (o % n);
        (s = Math[r && r < 1 ? "round" : "floor"](s)),
          (this.cols = Math.max(s, 1));
      }),
      (i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth,
          );
        i = Math.min(i, this.cols);
        for (
          var n = this._getColGroup(i),
            o = Math.min.apply(Math, n),
            s = n.indexOf(o),
            r = { x: this.columnWidth * s, y: o },
            a = o + t.size.outerHeight,
            u = this.cols + 1 - n.length,
            h = 0;
          h < u;
          h++
        )
          this.colYs[s + h] = a;
        return r;
      }),
      (i.prototype._getColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
          var o = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, o);
        }
        return e;
      }),
      (i.prototype._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft") ? n.left : n.right,
          s = o + i.outerWidth,
          r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        (a -= s % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
        for (
          var u =
              (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight,
            h = r;
          h <= a;
          h++
        )
          this.colYs[h] = Math.max(u, this.colYs[h]);
      }),
      (i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            require("../layout-mode"),
            require("masonry-layout"),
          ))
        : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var n = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          n
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            t,
            require("outlayer"),
            require("get-size"),
            require("desandro-matches-selector"),
            require("fizzy-ui-utils"),
            require("isotope/js/item"),
            require("isotope/js/layout-mode"),
            require("isotope/js/layout-modes/masonry"),
            require("isotope/js/layout-modes/fit-rows"),
            require("isotope/js/layout-modes/vertical"),
          ))
        : (t.Isotope = e(
            t,
            t.Outlayer,
            t.getSize,
            t.matchesSelector,
            t.fizzyUIUtils,
            t.Isotope.Item,
            t.Isotope.LayoutMode,
          ));
  })(window, function (t, e, i, n, o, s, r) {
    var a = t.jQuery,
      u = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      h = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (h.Item = s), (h.LayoutMode = r);
    var d = h.prototype;
    (d._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (d.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (d._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (d._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? o.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (d.layout = function () {
        this._isLayoutInited || !this._getOption("initLayout")
          ? this._layout()
          : this.arrange();
      }),
      (d._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (d.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (d._init = d.arrange),
      (d._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (d._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (d._bindArrangeComplete = function () {
        var t,
          e,
          i,
          n = this;
        function o() {
          t &&
            e &&
            i &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        this.once("layoutComplete", function () {
          (t = !0), o();
        }),
          this.once("hideComplete", function () {
            (e = !0), o();
          }),
          this.once("revealComplete", function () {
            (i = !0), o();
          });
      }),
      (d._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a);
          }
        }
        return { matches: i, needReveal: n, needHide: o };
      }),
      (d._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering
          ? function (e) {
              return a(e.element).is(t);
            }
          : "function" == typeof t
            ? function (e) {
                return t(e.element);
              }
            : function (e) {
                return n(e.element, t);
              };
      }),
      (d.updateSortData = function (t) {
        var e;
        t ? ((t = o.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (d._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = l(i);
        }
      }),
      (d._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var l = (function () {
      return function (t) {
        if ("string" != typeof t) return t;
        var e = u(t).split(" "),
          i = e[0],
          n = i.match(/^\[(.+)\]$/),
          o =
            ((r = n && n[1]),
            (a = i),
            r
              ? function (t) {
                  return t.getAttribute(r);
                }
              : function (t) {
                  var e = t.querySelector(a);
                  return e && e.textContent;
                }),
          s = h.sortDataParsers[e[1]];
        var r, a;
        return (t = s
          ? function (t) {
              return t && s(o(t));
            }
          : function (t) {
              return t && o(t);
            });
      };
    })();
    (h.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (d._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e,
            i,
            n = [].concat.apply(t, this.sortHistory),
            o =
              ((e = n),
              (i = this.options.sortAscending),
              function (t, n) {
                for (var o = 0; o < e.length; o++) {
                  var s = e[o],
                    r = t.sortData[s],
                    a = n.sortData[s];
                  if (r > a || r < a) {
                    var u = void 0 !== i[s] ? i[s] : i,
                      h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h;
                  }
                }
                return 0;
              });
          this.filteredItems.sort(o),
            t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (d._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (d._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (d._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (d._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (d._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (d.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (d.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (d.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (d._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (d.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            n,
            o = e.length;
          for (i = 0; i < o; i++)
            (n = e[i]), this.element.appendChild(n.element);
          var s = this._filter(e).matches;
          for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var f = d.remove;
    return (
      (d.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
          var s = e[n];
          o.removeFrom(this.filteredItems, s);
        }
      }),
      (d.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (d._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return (this.options.transitionDuration = i), n;
      }),
      (d.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      h
    );
  });

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "undefined" != typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
})(function (a) {
  "use strict";
  var b = window.Slick || {};
  (b = (function () {
    function c(c, d) {
      var f,
        e = this;
      (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (a, b) {
          return (
            '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' +
            (b + 1) +
            "</button>"
          );
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        a.extend(e, e.initials),
        (e.activeBreakpoint = null),
        (e.animType = null),
        (e.animProp = null),
        (e.breakpoints = []),
        (e.breakpointSettings = []),
        (e.cssTransitions = !1),
        (e.hidden = "hidden"),
        (e.paused = !1),
        (e.positionProp = null),
        (e.respondTo = null),
        (e.rowCount = 1),
        (e.shouldClick = !0),
        (e.$slider = a(c)),
        (e.$slidesCache = null),
        (e.transformType = null),
        (e.transitionType = null),
        (e.visibilityChange = "visibilitychange"),
        (e.windowWidth = 0),
        (e.windowTimer = null),
        (f = a(c).data("slick") || {}),
        (e.options = a.extend({}, e.defaults, f, d)),
        (e.currentSlide = e.options.initialSlide),
        (e.originalSettings = e.options),
        "undefined" != typeof document.mozHidden
          ? ((e.hidden = "mozHidden"),
            (e.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((e.hidden = "webkitHidden"),
            (e.visibilityChange = "webkitvisibilitychange")),
        (e.autoPlay = a.proxy(e.autoPlay, e)),
        (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
        (e.changeSlide = a.proxy(e.changeSlide, e)),
        (e.clickHandler = a.proxy(e.clickHandler, e)),
        (e.selectHandler = a.proxy(e.selectHandler, e)),
        (e.setPosition = a.proxy(e.setPosition, e)),
        (e.swipeHandler = a.proxy(e.swipeHandler, e)),
        (e.dragHandler = a.proxy(e.dragHandler, e)),
        (e.keyHandler = a.proxy(e.keyHandler, e)),
        (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
        (e.instanceUid = b++),
        (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        e.registerBreakpoints(),
        e.init(!0),
        e.checkResponsive(!0);
    }
    var b = 0;
    return c;
  })()),
    (b.prototype.addSlide = b.prototype.slickAdd =
      function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) (d = c), (c = null);
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
                ? a(b).insertBefore(e.$slides.eq(c))
                : a(b).insertAfter(e.$slides.eq(c))
            : d === !0
              ? a(b).prependTo(e.$slideTrack)
              : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
          }),
          (e.$slidesCache = e.$slides),
          e.reinit();
      }),
    (b.prototype.animateHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({ height: b }, a.options.speed);
      }
    }),
    (b.prototype.animateSlide = function (b, c) {
      var d = {},
        e = this;
      e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1
          ? e.options.vertical === !1
            ? e.$slideTrack.animate(
                { left: b },
                e.options.speed,
                e.options.easing,
                c,
              )
            : e.$slideTrack.animate(
                { top: b },
                e.options.speed,
                e.options.easing,
                c,
              )
          : e.cssTransitions === !1
            ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
              a({ animStart: e.currentLeft }).animate(
                { animStart: b },
                {
                  duration: e.options.speed,
                  easing: e.options.easing,
                  step: function (a) {
                    (a = Math.ceil(a)),
                      e.options.vertical === !1
                        ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                          e.$slideTrack.css(d))
                        : ((d[e.animType] = "translate(0px," + a + "px)"),
                          e.$slideTrack.css(d));
                  },
                  complete: function () {
                    c && c.call();
                  },
                },
              ))
            : (e.applyTransition(),
              (b = Math.ceil(b)),
              e.options.vertical === !1
                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
              e.$slideTrack.css(d),
              c &&
                setTimeout(function () {
                  e.disableTransition(), c.call();
                }, e.options.speed));
    }),
    (b.prototype.asNavFor = function (b) {
      var c = this,
        d = c.options.asNavFor;
      d && null !== d && (d = a(d).not(c.$slider)),
        null !== d &&
          "object" == typeof d &&
          d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0);
          });
    }),
    (b.prototype.applyTransition = function (a) {
      var b = this,
        c = {};
      b.options.fade === !1
        ? (c[b.transitionType] =
            b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
        : (c[b.transitionType] =
            "opacity " + b.options.speed + "ms " + b.options.cssEase),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer),
        a.slideCount > a.options.slidesToShow &&
          a.paused !== !0 &&
          (a.autoPlayTimer = setInterval(
            a.autoPlayIterator,
            a.options.autoplaySpeed,
          ));
    }),
    (b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }),
    (b.prototype.autoPlayIterator = function () {
      var a = this;
      a.options.infinite === !1
        ? 1 === a.direction
          ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0),
            a.slideHandler(a.currentSlide + a.options.slidesToScroll))
          : (a.currentSlide - 1 === 0 && (a.direction = 1),
            a.slideHandler(a.currentSlide - a.options.slidesToScroll))
        : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
    }),
    (b.prototype.buildArrows = function () {
      var b = this;
      b.options.arrows === !0 &&
        ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
        (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
        b.slideCount > b.options.slidesToShow
          ? (b.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.htmlExpr.test(b.options.prevArrow) &&
              b.$prevArrow.prependTo(b.options.appendArrows),
            b.htmlExpr.test(b.options.nextArrow) &&
              b.$nextArrow.appendTo(b.options.appendArrows),
            b.options.infinite !== !0 &&
              b.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : b.$prevArrow
              .add(b.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (b.prototype.buildDots = function () {
      var c,
        d,
        b = this;
      if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
        for (
          d = '<ul class="' + b.options.dotsClass + '">', c = 0;
          c <= b.getDotCount();
          c += 1
        )
          d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
        (d += "</ul>"),
          (b.$dots = a(d).appendTo(b.options.appendDots)),
          b.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (b.prototype.buildOut = function () {
      var b = this;
      (b.$slides = b.$slider
        .children(b.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.$slides.each(function (b, c) {
          a(c)
            .attr("data-slick-index", b)
            .data("originalStyling", a(c).attr("style") || "");
        }),
        b.$slider.addClass("slick-slider"),
        (b.$slideTrack =
          0 === b.slideCount
            ? a('<div class="slick-track"/>').appendTo(b.$slider)
            : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (b.$list = b.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
          (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0,
        ),
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }),
    (b.prototype.buildRows = function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;
      if (
        ((e = document.createDocumentFragment()),
        (g = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0;
          f > b;
          b++
        ) {
          var i = document.createElement("div");
          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");
            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }
            i.appendChild(j);
          }
          e.appendChild(i);
        }
        a.$slider.html(e),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (b.prototype.checkResponsive = function (b, c) {
      var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();
      if (
        ("window" === d.respondTo
          ? (g = j)
          : "slider" === d.respondTo
            ? (g = i)
            : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive &&
          d.options.responsive.length &&
          null !== d.options.responsive)
      ) {
        f = null;
        for (e in d.breakpoints)
          d.breakpoints.hasOwnProperty(e) &&
            (d.originalSettings.mobileFirst === !1
              ? g < d.breakpoints[e] && (f = d.breakpoints[e])
              : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        null !== f
          ? null !== d.activeBreakpoint
            ? (f !== d.activeBreakpoint || c) &&
              ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f],
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
            : ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f],
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
          : null !== d.activeBreakpoint &&
            ((d.activeBreakpoint = null),
            (d.options = d.originalSettings),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            (h = f)),
          b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
      }
    }),
    (b.prototype.changeSlide = function (b, c) {
      var f,
        g,
        h,
        d = this,
        e = a(b.target);
      switch (
        (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        (h = d.slideCount % d.options.slidesToScroll !== 0),
        (f = h
          ? 0
          : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
        b.data.message)
      ) {
        case "previous":
          (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide - g, !1, c);
          break;
        case "next":
          (g = 0 === f ? d.options.slidesToScroll : f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide + g, !1, c);
          break;
        case "index":
          var i =
            0 === b.data.index
              ? 0
              : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (b.prototype.checkNavigable = function (a) {
      var c,
        d,
        b = this;
      if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
        a = c[c.length - 1];
      else
        for (var e in c) {
          if (a < c[e]) {
            a = d;
            break;
          }
          d = c[e];
        }
      return a;
    }),
    (b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots &&
        null !== b.$dots &&
        (a("li", b.$dots).off("click.slick", b.changeSlide),
        b.options.pauseOnDotsHover === !0 &&
          b.options.autoplay === !0 &&
          a("li", b.$dots)
            .off("mouseenter.slick", a.proxy(b.setPaused, b, !0))
            .off("mouseleave.slick", a.proxy(b.setPaused, b, !1))),
        b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
          b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        b.options.accessibility === !0 &&
          b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + b.instanceUid,
          b.orientationChange,
        ),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off(
          "dragstart",
          b.preventDefault,
        ),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.cleanUpRows = function () {
      var b,
        a = this;
      a.options.rows > 1 &&
        ((b = a.$slides.children().children()),
        b.removeAttr("style"),
        a.$slider.html(b));
    }),
    (b.prototype.clickHandler = function (a) {
      var b = this;
      b.shouldClick === !1 &&
        (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }),
    (b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(),
        (c.touchObject = {}),
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow &&
          c.$prevArrow.length &&
          (c.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow &&
          c.$nextArrow.length &&
          (c.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides &&
          (c.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current",
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          c.$slideTrack.children(this.options.slide).detach(),
          c.$slideTrack.detach(),
          c.$list.detach(),
          c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        (c.unslicked = !0),
        b || c.$slider.trigger("destroy", [c]);
    }),
    (b.prototype.disableTransition = function (a) {
      var b = this,
        c = {};
      (c[b.transitionType] = ""),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.fadeSlide = function (a, b) {
      var c = this;
      c.cssTransitions === !1
        ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
          c.$slides
            .eq(a)
            .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a),
          c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
          b &&
            setTimeout(function () {
              c.disableTransition(a), b.call();
            }, c.options.speed));
    }),
    (b.prototype.fadeSlideOut = function (a) {
      var b = this;
      b.cssTransitions === !1
        ? b.$slides
            .eq(a)
            .animate(
              { opacity: 0, zIndex: b.options.zIndex - 2 },
              b.options.speed,
              b.options.easing,
            )
        : (b.applyTransition(a),
          b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }),
    (b.prototype.filterSlides = b.prototype.slickFilter =
      function (a) {
        var b = this;
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit());
      }),
    (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
      function () {
        var a = this;
        return a.currentSlide;
      }),
    (b.prototype.getDotCount = function () {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (a.options.infinite === !0)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else if (a.options.centerMode === !0) d = a.slideCount;
      else
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      return d - 1;
    }),
    (b.prototype.getLeft = function (a) {
      var c,
        d,
        f,
        b = this,
        e = 0;
      return (
        (b.slideOffset = 0),
        (d = b.$slides.first().outerHeight(!0)),
        b.options.infinite === !0
          ? (b.slideCount > b.options.slidesToShow &&
              ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
              (e = d * b.options.slidesToShow * -1)),
            b.slideCount % b.options.slidesToScroll !== 0 &&
              a + b.options.slidesToScroll > b.slideCount &&
              b.slideCount > b.options.slidesToShow &&
              (a > b.slideCount
                ? ((b.slideOffset =
                    (b.options.slidesToShow - (a - b.slideCount)) *
                    b.slideWidth *
                    -1),
                  (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                : ((b.slideOffset =
                    (b.slideCount % b.options.slidesToScroll) *
                    b.slideWidth *
                    -1),
                  (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
          : a + b.options.slidesToShow > b.slideCount &&
            ((b.slideOffset =
              (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
        b.slideCount <= b.options.slidesToShow &&
          ((b.slideOffset = 0), (e = 0)),
        b.options.centerMode === !0 && b.options.infinite === !0
          ? (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
              b.slideWidth)
          : b.options.centerMode === !0 &&
            ((b.slideOffset = 0),
            (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
        (c =
          b.options.vertical === !1
            ? a * b.slideWidth * -1 + b.slideOffset
            : a * d * -1 + e),
        b.options.variableWidth === !0 &&
          ((f =
            b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
              ? b.$slideTrack.children(".slick-slide").eq(a)
              : b.$slideTrack
                  .children(".slick-slide")
                  .eq(a + b.options.slidesToShow)),
          (c =
            b.options.rtl === !0
              ? f[0]
                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                : 0
              : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
          b.options.centerMode === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow + 1)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                  ? -1 * f[0].offsetLeft
                  : 0),
            (c += (b.$list.width() - f.outerWidth()) / 2))),
        c
      );
    }),
    (b.prototype.getOption = b.prototype.slickGetOption =
      function (a) {
        var b = this;
        return b.options[a];
      }),
    (b.prototype.getNavigableIndexes = function () {
      var e,
        a = this,
        b = 0,
        c = 0,
        d = [];
      for (
        a.options.infinite === !1
          ? (e = a.slideCount)
          : ((b = -1 * a.options.slidesToScroll),
            (c = -1 * a.options.slidesToScroll),
            (e = 2 * a.slideCount));
        e > b;

      )
        d.push(b),
          (b = c + a.options.slidesToScroll),
          (c +=
            a.options.slidesToScroll <= a.options.slidesToShow
              ? a.options.slidesToScroll
              : a.options.slidesToShow);
      return d;
    }),
    (b.prototype.getSlick = function () {
      return this;
    }),
    (b.prototype.getSlideCount = function () {
      var c,
        d,
        e,
        b = this;
      return (
        (e =
          b.options.centerMode === !0
            ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
            : 0),
        b.options.swipeToSlide === !0
          ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
              return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                ? ((d = f), !1)
                : void 0;
            }),
            (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
          : b.options.slidesToScroll
      );
    }),
    (b.prototype.goTo = b.prototype.slickGoTo =
      function (a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
      }),
    (b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") ||
        (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA();
    }),
    (b.prototype.initArrowEvents = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.on("click.slick", { message: "previous" }, a.changeSlide),
        a.$nextArrow.on("click.slick", { message: "next" }, a.changeSlide));
    }),
    (b.prototype.initDotEvents = function () {
      var b = this;
      b.options.dots === !0 &&
        b.slideCount > b.options.slidesToShow &&
        a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
        b.options.dots === !0 &&
          b.options.pauseOnDotsHover === !0 &&
          b.options.autoplay === !0 &&
          a("li", b.$dots)
            .on("mouseenter.slick", a.proxy(b.setPaused, b, !0))
            .on("mouseleave.slick", a.proxy(b.setPaused, b, !1));
    }),
    (b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(),
        b.initDotEvents(),
        b.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          b.swipeHandler,
        ),
        b.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          b.swipeHandler,
        ),
        b.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          b.swipeHandler,
        ),
        b.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          b.swipeHandler,
        ),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
        b.options.accessibility === !0 &&
          b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + b.instanceUid,
          a.proxy(b.orientationChange, b),
        ),
        a(window).on(
          "resize.slick.slick-" + b.instanceUid,
          a.proxy(b.resize, b),
        ),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.initUI = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.show(), a.$nextArrow.show()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.show(),
        a.options.autoplay === !0 && a.autoPlay();
    }),
    (b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === a.keyCode && b.options.accessibility === !0
          ? b.changeSlide({ data: { message: "previous" } })
          : 39 === a.keyCode &&
            b.options.accessibility === !0 &&
            b.changeSlide({ data: { message: "next" } }));
    }),
    (b.prototype.lazyLoad = function () {
      function g(b) {
        a("img[data-lazy]", b).each(function () {
          var b = a(this),
            c = a(this).attr("data-lazy"),
            d = document.createElement("img");
          (d.onload = function () {
            b.animate({ opacity: 0 }, 100, function () {
              b.attr("src", c).animate({ opacity: 1 }, 200, function () {
                b.removeAttr("data-lazy").removeClass("slick-loading");
              });
            });
          }),
            (d.src = c);
        });
      }
      var c,
        d,
        e,
        f,
        b = this;
      b.options.centerMode === !0
        ? b.options.infinite === !0
          ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
            (f = e + b.options.slidesToShow + 2))
          : ((e = Math.max(
              0,
              b.currentSlide - (b.options.slidesToShow / 2 + 1),
            )),
            (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
        : ((e = b.options.infinite
            ? b.options.slidesToShow + b.currentSlide
            : b.currentSlide),
          (f = e + b.options.slidesToShow),
          b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
        (c = b.$slider.find(".slick-slide").slice(e, f)),
        g(c),
        b.slideCount <= b.options.slidesToShow
          ? ((d = b.$slider.find(".slick-slide")), g(d))
          : b.currentSlide >= b.slideCount - b.options.slidesToShow
            ? ((d = b.$slider
                .find(".slick-cloned")
                .slice(0, b.options.slidesToShow)),
              g(d))
            : 0 === b.currentSlide &&
              ((d = b.$slider
                .find(".slick-cloned")
                .slice(-1 * b.options.slidesToShow)),
              g(d));
    }),
    (b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(),
        a.$slideTrack.css({ opacity: 1 }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }),
    (b.prototype.next = b.prototype.slickNext =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "next" } });
      }),
    (b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }),
    (b.prototype.pause = b.prototype.slickPause =
      function () {
        var a = this;
        a.autoPlayClear(), (a.paused = !0);
      }),
    (b.prototype.play = b.prototype.slickPlay =
      function () {
        var a = this;
        (a.paused = !1), a.autoPlay();
      }),
    (b.prototype.postSlide = function (a) {
      var b = this;
      b.$slider.trigger("afterChange", [b, a]),
        (b.animating = !1),
        b.setPosition(),
        (b.swipeLeft = null),
        b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA();
    }),
    (b.prototype.prev = b.prototype.slickPrev =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "previous" } });
      }),
    (b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }),
    (b.prototype.progressiveLazyLoad = function () {
      var c,
        d,
        b = this;
      (c = a("img[data-lazy]", b.$slider).length),
        c > 0 &&
          ((d = a("img[data-lazy]", b.$slider).first()),
          d.attr("src", null),
          d
            .attr("src", d.attr("data-lazy"))
            .removeClass("slick-loading")
            .load(function () {
              d.removeAttr("data-lazy"),
                b.progressiveLazyLoad(),
                b.options.adaptiveHeight === !0 && b.setPosition();
            })
            .error(function () {
              d.removeAttr("data-lazy"), b.progressiveLazyLoad();
            }));
    }),
    (b.prototype.refresh = function (b) {
      var d,
        e,
        c = this;
      (e = c.slideCount - c.options.slidesToShow),
        c.options.infinite ||
          (c.slideCount <= c.options.slidesToShow
            ? (c.currentSlide = 0)
            : c.currentSlide > e && (c.currentSlide = e)),
        (d = c.currentSlide),
        c.destroy(!0),
        a.extend(c, c.initials, { currentSlide: d }),
        c.init(),
        b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }),
    (b.prototype.registerBreakpoints = function () {
      var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";
        for (c in f)
          if (
            ((e = b.breakpoints.length - 1),
            (d = f[c].breakpoint),
            f.hasOwnProperty(c))
          ) {
            for (; e >= 0; )
              b.breakpoints[e] &&
                b.breakpoints[e] === d &&
                b.breakpoints.splice(e, 1),
                e--;
            b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
          }
        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }),
    (b.prototype.reinit = function () {
      var b = this;
      (b.$slides = b.$slideTrack
        .children(b.options.slide)
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.currentSlide >= b.slideCount &&
          0 !== b.currentSlide &&
          (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(0),
        b.setPosition(),
        b.$slider.trigger("reInit", [b]),
        b.options.autoplay === !0 && b.focusHandler();
    }),
    (b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth &&
        (clearTimeout(b.windowDelay),
        (b.windowDelay = window.setTimeout(function () {
          (b.windowWidth = a(window).width()),
            b.checkResponsive(),
            b.unslicked || b.setPosition();
        }, 50)));
    }),
    (b.prototype.removeSlide = b.prototype.slickRemove =
      function (a, b, c) {
        var d = this;
        return (
          "boolean" == typeof a
            ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
            : (a = b === !0 ? --a : a),
          d.slideCount < 1 || 0 > a || a > d.slideCount - 1
            ? !1
            : (d.unload(),
              c === !0
                ? d.$slideTrack.children().remove()
                : d.$slideTrack.children(this.options.slide).eq(a).remove(),
              (d.$slides = d.$slideTrack.children(this.options.slide)),
              d.$slideTrack.children(this.options.slide).detach(),
              d.$slideTrack.append(d.$slides),
              (d.$slidesCache = d.$slides),
              void d.reinit())
        );
      }),
    (b.prototype.setCSS = function (a) {
      var d,
        e,
        b = this,
        c = {};
      b.options.rtl === !0 && (a = -a),
        (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (c[b.positionProp] = a),
        b.transformsEnabled === !1
          ? b.$slideTrack.css(c)
          : ((c = {}),
            b.cssTransitions === !1
              ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                b.$slideTrack.css(c))
              : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                b.$slideTrack.css(c)));
    }),
    (b.prototype.setDimensions = function () {
      var a = this;
      a.options.vertical === !1
        ? a.options.centerMode === !0 &&
          a.$list.css({ padding: "0px " + a.options.centerPadding })
        : (a.$list.height(
            a.$slides.first().outerHeight(!0) * a.options.slidesToShow,
          ),
          a.options.centerMode === !0 &&
            a.$list.css({ padding: a.options.centerPadding + " 0px" })),
        (a.listWidth = a.$list.width()),
        (a.listHeight = a.$list.height()),
        a.options.vertical === !1 && a.options.variableWidth === !1
          ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
            a.$slideTrack.width(
              Math.ceil(
                a.slideWidth * a.$slideTrack.children(".slick-slide").length,
              ),
            ))
          : a.options.variableWidth === !0
            ? a.$slideTrack.width(5e3 * a.slideCount)
            : ((a.slideWidth = Math.ceil(a.listWidth)),
              a.$slideTrack.height(
                Math.ceil(
                  a.$slides.first().outerHeight(!0) *
                    a.$slideTrack.children(".slick-slide").length,
                ),
              ));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 &&
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }),
    (b.prototype.setFade = function () {
      var c,
        b = this;
      b.$slides.each(function (d, e) {
        (c = b.slideWidth * d * -1),
          b.options.rtl === !0
            ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              });
      }),
        b.$slides
          .eq(b.currentSlide)
          .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }),
    (b.prototype.setHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }),
    (b.prototype.setOption = b.prototype.slickSetOption =
      function (b, c, d) {
        var f,
          g,
          e = this;
        if ("responsive" === b && "array" === a.type(c))
          for (g in c)
            if ("array" !== a.type(e.options.responsive))
              e.options.responsive = [c[g]];
            else {
              for (f = e.options.responsive.length - 1; f >= 0; )
                e.options.responsive[f].breakpoint === c[g].breakpoint &&
                  e.options.responsive.splice(f, 1),
                  f--;
              e.options.responsive.push(c[g]);
            }
        else e.options[b] = c;
        d === !0 && (e.unload(), e.reinit());
      }),
    (b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1
          ? a.setCSS(a.getLeft(a.currentSlide))
          : a.setFade(),
        a.$slider.trigger("setPosition", [a]);
    }),
    (b.prototype.setProps = function () {
      var a = this,
        b = document.body.style;
      (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
        "top" === a.positionProp
          ? a.$slider.addClass("slick-vertical")
          : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition ||
          void 0 !== b.MozTransition ||
          void 0 !== b.msTransition) &&
          a.options.useCSS === !0 &&
          (a.cssTransitions = !0),
        a.options.fade &&
          ("number" == typeof a.options.zIndex
            ? a.options.zIndex < 3 && (a.options.zIndex = 3)
            : (a.options.zIndex = a.defaults.zIndex)),
        void 0 !== b.OTransform &&
          ((a.animType = "OTransform"),
          (a.transformType = "-o-transform"),
          (a.transitionType = "OTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.MozTransform &&
          ((a.animType = "MozTransform"),
          (a.transformType = "-moz-transform"),
          (a.transitionType = "MozTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.MozPerspective &&
            (a.animType = !1)),
        void 0 !== b.webkitTransform &&
          ((a.animType = "webkitTransform"),
          (a.transformType = "-webkit-transform"),
          (a.transitionType = "webkitTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.msTransform &&
          ((a.animType = "msTransform"),
          (a.transformType = "-ms-transform"),
          (a.transitionType = "msTransition"),
          void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform &&
          a.animType !== !1 &&
          ((a.animType = "transform"),
          (a.transformType = "transform"),
          (a.transitionType = "transition")),
        (a.transformsEnabled =
          a.options.useTransform && null !== a.animType && a.animType !== !1);
    }),
    (b.prototype.setSlideClasses = function (a) {
      var c,
        d,
        e,
        f,
        b = this;
      (d = b.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0
          ? ((c = Math.floor(b.options.slidesToShow / 2)),
            b.options.infinite === !0 &&
              (a >= c && a <= b.slideCount - 1 - c
                ? b.$slides
                    .slice(a - c, a + c + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((e = b.options.slidesToShow + a),
                  d
                    .slice(e - c + 1, e + c + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? d
                    .eq(d.length - 1 - b.options.slidesToShow)
                    .addClass("slick-center")
                : a === b.slideCount - 1 &&
                  d.eq(b.options.slidesToShow).addClass("slick-center")),
            b.$slides.eq(a).addClass("slick-center"))
          : a >= 0 && a <= b.slideCount - b.options.slidesToShow
            ? b.$slides
                .slice(a, a + b.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : d.length <= b.options.slidesToShow
              ? d.addClass("slick-active").attr("aria-hidden", "false")
              : ((f = b.slideCount % b.options.slidesToShow),
                (e =
                  b.options.infinite === !0 ? b.options.slidesToShow + a : a),
                b.options.slidesToShow == b.options.slidesToScroll &&
                b.slideCount - a < b.options.slidesToShow
                  ? d
                      .slice(e - (b.options.slidesToShow - f), e + f)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : d
                      .slice(e, e + b.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }),
    (b.prototype.setupInfinite = function () {
      var c,
        d,
        e,
        b = this;
      if (
        (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 &&
          b.options.fade === !1 &&
          ((d = null), b.slideCount > b.options.slidesToShow))
      ) {
        for (
          e =
            b.options.centerMode === !0
              ? b.options.slidesToShow + 1
              : b.options.slidesToShow,
            c = b.slideCount;
          c > b.slideCount - e;
          c -= 1
        )
          (d = c - 1),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d - b.slideCount)
              .prependTo(b.$slideTrack)
              .addClass("slick-cloned");
        for (c = 0; e > c; c += 1)
          (d = c),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d + b.slideCount)
              .appendTo(b.$slideTrack)
              .addClass("slick-cloned");
        b.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (b.prototype.setPaused = function (a) {
      var b = this;
      b.options.autoplay === !0 &&
        b.options.pauseOnHover === !0 &&
        ((b.paused = a), a ? b.autoPlayClear() : b.autoPlay());
    }),
    (b.prototype.selectHandler = function (b) {
      var c = this,
        d = a(b.target).is(".slick-slide")
          ? a(b.target)
          : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      return (
        e || (e = 0),
        c.slideCount <= c.options.slidesToShow
          ? (c.setSlideClasses(e), void c.asNavFor(e))
          : void c.slideHandler(e)
      );
    }),
    (b.prototype.slideHandler = function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = null,
        i = this;
      return (
        (b = b || !1),
        (i.animating === !0 && i.options.waitForAnimate === !0) ||
        (i.options.fade === !0 && i.currentSlide === a) ||
        i.slideCount <= i.options.slidesToShow
          ? void 0
          : (b === !1 && i.asNavFor(a),
            (d = a),
            (h = i.getLeft(d)),
            (g = i.getLeft(i.currentSlide)),
            (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
            i.options.infinite === !1 &&
            i.options.centerMode === !1 &&
            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : i.options.infinite === !1 &&
                  i.options.centerMode === !0 &&
                  (0 > a || a > i.slideCount - i.options.slidesToScroll)
                ? void (
                    i.options.fade === !1 &&
                    ((d = i.currentSlide),
                    c !== !0
                      ? i.animateSlide(g, function () {
                          i.postSlide(d);
                        })
                      : i.postSlide(d))
                  )
                : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer),
                  (e =
                    0 > d
                      ? i.slideCount % i.options.slidesToScroll !== 0
                        ? i.slideCount -
                          (i.slideCount % i.options.slidesToScroll)
                        : i.slideCount + d
                      : d >= i.slideCount
                        ? i.slideCount % i.options.slidesToScroll !== 0
                          ? 0
                          : d - i.slideCount
                        : d),
                  (i.animating = !0),
                  i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                  (f = i.currentSlide),
                  (i.currentSlide = e),
                  i.setSlideClasses(i.currentSlide),
                  i.updateDots(),
                  i.updateArrows(),
                  i.options.fade === !0
                    ? (c !== !0
                        ? (i.fadeSlideOut(f),
                          i.fadeSlide(e, function () {
                            i.postSlide(e);
                          }))
                        : i.postSlide(e),
                      void i.animateHeight())
                    : void (c !== !0
                        ? i.animateSlide(h, function () {
                            i.postSlide(e);
                          })
                        : i.postSlide(e))))
      );
    }),
    (b.prototype.startLoad = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.hide(), a.$nextArrow.hide()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.hide(),
        a.$slider.addClass("slick-loading");
    }),
    (b.prototype.swipeDirection = function () {
      var a,
        b,
        c,
        d,
        e = this;
      return (
        (a = e.touchObject.startX - e.touchObject.curX),
        (b = e.touchObject.startY - e.touchObject.curY),
        (c = Math.atan2(b, a)),
        (d = Math.round((180 * c) / Math.PI)),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : 360 >= d && d >= 315
            ? e.options.rtl === !1
              ? "left"
              : "right"
            : d >= 135 && 225 >= d
              ? e.options.rtl === !1
                ? "right"
                : "left"
              : e.options.verticalSwiping === !0
                ? d >= 35 && 135 >= d
                  ? "left"
                  : "right"
                : "vertical"
      );
    }),
    (b.prototype.swipeEnd = function (a) {
      var c,
        b = this;
      if (
        ((b.dragging = !1),
        (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
        void 0 === b.touchObject.curX)
      )
        return !1;
      if (
        (b.touchObject.edgeHit === !0 &&
          b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
      )
        switch (b.swipeDirection()) {
          case "left":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide + b.getSlideCount())
              : b.currentSlide + b.getSlideCount()),
              b.slideHandler(c),
              (b.currentDirection = 0),
              (b.touchObject = {}),
              b.$slider.trigger("swipe", [b, "left"]);
            break;
          case "right":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide - b.getSlideCount())
              : b.currentSlide - b.getSlideCount()),
              b.slideHandler(c),
              (b.currentDirection = 1),
              (b.touchObject = {}),
              b.$slider.trigger("swipe", [b, "right"]);
        }
      else
        b.touchObject.startX !== b.touchObject.curX &&
          (b.slideHandler(b.currentSlide), (b.touchObject = {}));
    }),
    (b.prototype.swipeHandler = function (a) {
      var b = this;
      if (
        !(
          b.options.swipe === !1 ||
          ("ontouchend" in document && b.options.swipe === !1) ||
          (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
        )
      )
        switch (
          ((b.touchObject.fingerCount =
            a.originalEvent && void 0 !== a.originalEvent.touches
              ? a.originalEvent.touches.length
              : 1),
          (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
          b.options.verticalSwiping === !0 &&
            (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
          a.data.action)
        ) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a);
        }
    }),
    (b.prototype.swipeMove = function (a) {
      var d,
        e,
        f,
        g,
        h,
        b = this;
      return (
        (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
        !b.dragging || (h && 1 !== h.length)
          ? !1
          : ((d = b.getLeft(b.currentSlide)),
            (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
            (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2)),
            )),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(b.touchObject.curY - b.touchObject.startY, 2),
                ),
              )),
            (e = b.swipeDirection()),
            "vertical" !== e
              ? (void 0 !== a.originalEvent &&
                  b.touchObject.swipeLength > 4 &&
                  a.preventDefault(),
                (g =
                  (b.options.rtl === !1 ? 1 : -1) *
                  (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                b.options.verticalSwiping === !0 &&
                  (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                (f = b.touchObject.swipeLength),
                (b.touchObject.edgeHit = !1),
                b.options.infinite === !1 &&
                  ((0 === b.currentSlide && "right" === e) ||
                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                  ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                  (b.touchObject.edgeHit = !0)),
                b.options.vertical === !1
                  ? (b.swipeLeft = d + f * g)
                  : (b.swipeLeft =
                      d + f * (b.$list.height() / b.listWidth) * g),
                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                b.options.fade === !0 || b.options.touchMove === !1
                  ? !1
                  : b.animating === !0
                    ? ((b.swipeLeft = null), !1)
                    : void b.setCSS(b.swipeLeft))
              : void 0)
      );
    }),
    (b.prototype.swipeStart = function (a) {
      var c,
        b = this;
      return 1 !== b.touchObject.fingerCount ||
        b.slideCount <= b.options.slidesToShow
        ? ((b.touchObject = {}), !1)
        : (void 0 !== a.originalEvent &&
            void 0 !== a.originalEvent.touches &&
            (c = a.originalEvent.touches[0]),
          (b.touchObject.startX = b.touchObject.curX =
            void 0 !== c ? c.pageX : a.clientX),
          (b.touchObject.startY = b.touchObject.curY =
            void 0 !== c ? c.pageY : a.clientY),
          void (b.dragging = !0));
    }),
    (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
      function () {
        var a = this;
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit());
      }),
    (b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow &&
          b.htmlExpr.test(b.options.prevArrow) &&
          b.$prevArrow.remove(),
        b.$nextArrow &&
          b.htmlExpr.test(b.options.nextArrow) &&
          b.$nextArrow.remove(),
        b.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }),
    (b.prototype.updateArrows = function () {
      var b,
        a = this;
      (b = Math.floor(a.options.slidesToShow / 2)),
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          !a.options.infinite &&
          (a.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          a.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === a.currentSlide
            ? (a.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                a.options.centerMode === !1
              ? (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : a.currentSlide >= a.slideCount - 1 &&
                a.options.centerMode === !0 &&
                (a.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                a.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
    }),
    (b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots &&
        (a.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        a.$dots
          .find("li")
          .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (b.prototype.visibility = function () {
      var a = this;
      document[a.hidden]
        ? ((a.paused = !0), a.autoPlayClear())
        : a.options.autoplay === !0 && ((a.paused = !1), a.autoPlay());
    }),
    (b.prototype.initADA = function () {
      var b = this;
      b.$slides
        .add(b.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
          a(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + b.instanceUid + c,
          });
        }),
        null !== b.$dots &&
          b.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (c) {
              a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        b.activateADA();
    }),
    (b.prototype.activateADA = function () {
      var a = this;
      a.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (b.prototype.focusHandler = function () {
      var b = this;
      b.$slider.on("focus.slick blur.slick", "*", function (c) {
        c.stopImmediatePropagation();
        var d = a(this);
        setTimeout(function () {
          b.isPlay &&
            (d.is(":focus")
              ? (b.autoPlayClear(), (b.paused = !0))
              : ((b.paused = !1), b.autoPlay()));
        }, 0);
      });
    }),
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;
      for (f = 0; e > f; f++)
        if (
          ("object" == typeof c || "undefined" == typeof c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          "undefined" != typeof g)
        )
          return g;
      return a;
    });
});

/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function (c) {
  c.extend(c.fn, {
    validate: function (a) {
      if (this.length) {
        var b = c.data(this[0], "validator");
        if (b) return b;
        this.attr("novalidate", "novalidate");
        b = new c.validator(a, this[0]);
        c.data(this[0], "validator", b);
        if (b.settings.onsubmit) {
          a = this.find("input, button");
          a.filter(".cancel").click(function () {
            b.cancelSubmit = true;
          });
          b.settings.submitHandler &&
            a.filter(":submit").click(function () {
              b.submitButton = this;
            });
          this.submit(function (d) {
            function e() {
              if (b.settings.submitHandler) {
                if (b.submitButton)
                  var f = c("<input type='hidden'/>")
                    .attr("name", b.submitButton.name)
                    .val(b.submitButton.value)
                    .appendTo(b.currentForm);
                b.settings.submitHandler.call(b, b.currentForm);
                b.submitButton && f.remove();
                return false;
              }
              return true;
            }
            b.settings.debug && d.preventDefault();
            if (b.cancelSubmit) {
              b.cancelSubmit = false;
              return e();
            }
            if (b.form()) {
              if (b.pendingRequest) {
                b.formSubmitted = true;
                return false;
              }
              return e();
            } else {
              b.focusInvalid();
              return false;
            }
          });
        }
        return b;
      } else
        a &&
          a.debug &&
          window.console &&
          console.warn("nothing selected, can't validate, returning nothing");
    },
    valid: function () {
      if (c(this[0]).is("form")) return this.validate().form();
      else {
        var a = true,
          b = c(this[0].form).validate();
        this.each(function () {
          a &= b.element(this);
        });
        return a;
      }
    },
    removeAttrs: function (a) {
      var b = {},
        d = this;
      c.each(a.split(/\s/), function (e, f) {
        b[f] = d.attr(f);
        d.removeAttr(f);
      });
      return b;
    },
    rules: function (a, b) {
      var d = this[0];
      if (a) {
        var e = c.data(d.form, "validator").settings,
          f = e.rules,
          g = c.validator.staticRules(d);
        switch (a) {
          case "add":
            c.extend(g, c.validator.normalizeRule(b));
            f[d.name] = g;
            if (b.messages)
              e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
            break;
          case "remove":
            if (!b) {
              delete f[d.name];
              return g;
            }
            var h = {};
            c.each(b.split(/\s/), function (j, i) {
              h[i] = g[i];
              delete g[i];
            });
            return h;
        }
      }
      d = c.validator.normalizeRules(
        c.extend(
          {},
          c.validator.metadataRules(d),
          c.validator.classRules(d),
          c.validator.attributeRules(d),
          c.validator.staticRules(d),
        ),
        d,
      );
      if (d.required) {
        e = d.required;
        delete d.required;
        d = c.extend({ required: e }, d);
      }
      return d;
    },
  });
  c.extend(c.expr[":"], {
    blank: function (a) {
      return !c.trim("" + a.value);
    },
    filled: function (a) {
      return !!c.trim("" + a.value);
    },
    unchecked: function (a) {
      return !a.checked;
    },
  });
  c.validator = function (a, b) {
    this.settings = c.extend(true, {}, c.validator.defaults, a);
    this.currentForm = b;
    this.init();
  };
  c.validator.format = function (a, b) {
    if (arguments.length == 1)
      return function () {
        var d = c.makeArray(arguments);
        d.unshift(a);
        return c.validator.format.apply(this, d);
      };
    if (arguments.length > 2 && b.constructor != Array)
      b = c.makeArray(arguments).slice(1);
    if (b.constructor != Array) b = [b];
    c.each(b, function (d, e) {
      a = a.replace(RegExp("\\{" + d + "\\}", "g"), e);
    });
    return a;
  };
  c.extend(c.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: true,
      errorContainer: c([]),
      errorLabelContainer: c([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (a) {
        this.lastActive = a;
        if (this.settings.focusCleanup && !this.blockFocusCleanup) {
          this.settings.unhighlight &&
            this.settings.unhighlight.call(
              this,
              a,
              this.settings.errorClass,
              this.settings.validClass,
            );
          this.addWrapper(this.errorsFor(a)).hide();
        }
      },
      onfocusout: function (a) {
        if (
          !this.checkable(a) &&
          (a.name in this.submitted || !this.optional(a))
        )
          this.element(a);
      },
      onkeyup: function (a) {
        if (a.name in this.submitted || a == this.lastElement) this.element(a);
      },
      onclick: function (a) {
        if (a.name in this.submitted) this.element(a);
        else a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function (a, b, d) {
        a.type === "radio"
          ? this.findByName(a.name).addClass(b).removeClass(d)
          : c(a).addClass(b).removeClass(d);
      },
      unhighlight: function (a, b, d) {
        a.type === "radio"
          ? this.findByName(a.name).removeClass(b).addClass(d)
          : c(a).removeClass(b).addClass(d);
      },
    },
    setDefaults: function (a) {
      c.extend(c.validator.defaults, a);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      accept: "Please enter a value with a valid extension.",
      maxlength: c.validator.format(
        "Please enter no more than {0} characters.",
      ),
      minlength: c.validator.format("Please enter at least {0} characters."),
      rangelength: c.validator.format(
        "Please enter a value between {0} and {1} characters long.",
      ),
      range: c.validator.format("Please enter a value between {0} and {1}."),
      max: c.validator.format(
        "Please enter a value less than or equal to {0}.",
      ),
      min: c.validator.format(
        "Please enter a value greater than or equal to {0}.",
      ),
    },
    autoCreateRanges: false,
    prototype: {
      init: function () {
        function a(e) {
          var f = c.data(this[0].form, "validator"),
            g = "on" + e.type.replace(/^validate/, "");
          f.settings[g] && f.settings[g].call(f, this[0], e);
        }
        this.labelContainer = c(this.settings.errorLabelContainer);
        this.errorContext =
          (this.labelContainer.length && this.labelContainer) ||
          c(this.currentForm);
        this.containers = c(this.settings.errorContainer).add(
          this.settings.errorLabelContainer,
        );
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var b = (this.groups = {});
        c.each(this.settings.groups, function (e, f) {
          c.each(f.split(/\s/), function (g, h) {
            b[h] = e;
          });
        });
        var d = this.settings.rules;
        c.each(d, function (e, f) {
          d[e] = c.validator.normalizeRule(f);
        });
        c(this.currentForm)
          .validateDelegate(
            "[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
            "focusin focusout keyup",
            a,
          )
          .validateDelegate(
            "[type='radio'], [type='checkbox'], select, option",
            "click",
            a,
          );
        this.settings.invalidHandler &&
          c(this.currentForm).bind(
            "invalid-form.validate",
            this.settings.invalidHandler,
          );
      },
      form: function () {
        this.checkForm();
        c.extend(this.submitted, this.errorMap);
        this.invalid = c.extend({}, this.errorMap);
        this.valid() ||
          c(this.currentForm).triggerHandler("invalid-form", [this]);
        this.showErrors();
        return this.valid();
      },
      checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++)
          this.check(b[a]);
        return this.valid();
      },
      element: function (a) {
        this.lastElement = a = this.validationTargetFor(this.clean(a));
        this.prepareElement(a);
        this.currentElements = c(a);
        var b = this.check(a);
        if (b) delete this.invalid[a.name];
        else this.invalid[a.name] = true;
        if (!this.numberOfInvalids())
          this.toHide = this.toHide.add(this.containers);
        this.showErrors();
        return b;
      },
      showErrors: function (a) {
        if (a) {
          c.extend(this.errorMap, a);
          this.errorList = [];
          for (var b in a)
            this.errorList.push({
              message: a[b],
              element: this.findByName(b)[0],
            });
          this.successList = c.grep(this.successList, function (d) {
            return !(d.name in a);
          });
        }
        this.settings.showErrors
          ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
          : this.defaultShowErrors();
      },
      resetForm: function () {
        c.fn.resetForm && c(this.currentForm).resetForm();
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass);
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (a) {
        var b = 0,
          d;
        for (d in a) b++;
        return b;
      },
      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },
      valid: function () {
        return this.size() == 0;
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid)
          try {
            c(
              this.findLastActive() ||
                (this.errorList.length && this.errorList[0].element) ||
                [],
            )
              .filter(":visible")
              .focus()
              .trigger("focusin");
          } catch (a) {}
      },
      findLastActive: function () {
        var a = this.lastActive;
        return (
          a &&
          c.grep(this.errorList, function (b) {
            return b.element.name == a.name;
          }).length == 1 &&
          a
        );
      },
      elements: function () {
        var a = this,
          b = {};
        return c(this.currentForm)
          .find("input, select, textarea")
          .not(":submit, :reset, :image, [disabled]")
          .not(this.settings.ignore)
          .filter(function () {
            !this.name &&
              a.settings.debug &&
              window.console &&
              console.error("%o has no name assigned", this);
            if (this.name in b || !a.objectLength(c(this).rules()))
              return false;
            return (b[this.name] = true);
          });
      },
      clean: function (a) {
        return c(a)[0];
      },
      errors: function () {
        return c(
          this.settings.errorElement + "." + this.settings.errorClass,
          this.errorContext,
        );
      },
      reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = c([]);
        this.toHide = c([]);
        this.currentElements = c([]);
      },
      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (a) {
        this.reset();
        this.toHide = this.errorsFor(a);
      },
      check: function (a) {
        a = this.validationTargetFor(this.clean(a));
        var b = c(a).rules(),
          d = false,
          e;
        for (e in b) {
          var f = { method: e, parameters: b[e] };
          try {
            var g = c.validator.methods[e].call(
              this,
              a.value.replace(/\r/g, ""),
              a,
              f.parameters,
            );
            if (g == "dependency-mismatch") d = true;
            else {
              d = false;
              if (g == "pending") {
                this.toHide = this.toHide.not(this.errorsFor(a));
                return;
              }
              if (!g) {
                this.formatAndAdd(a, f);
                return false;
              }
            }
          } catch (h) {
            this.settings.debug &&
              window.console &&
              console.log(
                "exception occured when checking element " +
                  a.id +
                  ", check the '" +
                  f.method +
                  "' method",
                h,
              );
            throw h;
          }
        }
        if (!d) {
          this.objectLength(b) && this.successList.push(a);
          return true;
        }
      },
      customMetaMessage: function (a, b) {
        if (c.metadata) {
          var d = this.settings.meta
            ? c(a).metadata()[this.settings.meta]
            : c(a).metadata();
          return d && d.messages && d.messages[b];
        }
      },
      customMessage: function (a, b) {
        var d = this.settings.messages[a];
        return d && (d.constructor == String ? d : d[b]);
      },
      findDefined: function () {
        for (var a = 0; a < arguments.length; a++)
          if (arguments[a] !== undefined) return arguments[a];
      },
      defaultMessage: function (a, b) {
        return this.findDefined(
          this.customMessage(a.name, b),
          this.customMetaMessage(a, b),
          (!this.settings.ignoreTitle && a.title) || undefined,
          c.validator.messages[b],
          "<strong>Warning: No message defined for " + a.name + "</strong>",
        );
      },
      formatAndAdd: function (a, b) {
        var d = this.defaultMessage(a, b.method),
          e = /\$?\{(\d+)\}/g;
        if (typeof d == "function") d = d.call(this, b.parameters, a);
        else if (e.test(d))
          d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
        this.errorList.push({ message: d, element: a });
        this.errorMap[a.name] = d;
        this.submitted[a.name] = d;
      },
      addWrapper: function (a) {
        if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
        return a;
      },
      defaultShowErrors: function () {
        for (var a = 0; this.errorList[a]; a++) {
          var b = this.errorList[a];
          this.settings.highlight &&
            this.settings.highlight.call(
              this,
              b.element,
              this.settings.errorClass,
              this.settings.validClass,
            );
          this.showLabel(b.element, b.message);
        }
        if (this.errorList.length)
          this.toShow = this.toShow.add(this.containers);
        if (this.settings.success)
          for (a = 0; this.successList[a]; a++)
            this.showLabel(this.successList[a]);
        if (this.settings.unhighlight) {
          a = 0;
          for (b = this.validElements(); b[a]; a++)
            this.settings.unhighlight.call(
              this,
              b[a],
              this.settings.errorClass,
              this.settings.validClass,
            );
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return c(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (a, b) {
        var d = this.errorsFor(a);
        if (d.length) {
          d.removeClass(this.settings.validClass).addClass(
            this.settings.errorClass,
          );
          d.attr("generated") && d.html(b);
        } else {
          d = c("<" + this.settings.errorElement + "/>")
            .attr({ for: this.idOrName(a), generated: true })
            .addClass(this.settings.errorClass)
            .html(b || "");
          if (this.settings.wrapper)
            d = d
              .hide()
              .show()
              .wrap("<" + this.settings.wrapper + "/>")
              .parent();
          this.labelContainer.append(d).length ||
            (this.settings.errorPlacement
              ? this.settings.errorPlacement(d, c(a))
              : d.insertAfter(a));
        }
        if (!b && this.settings.success) {
          d.text("");
          typeof this.settings.success == "string"
            ? d.addClass(this.settings.success)
            : this.settings.success(d);
        }
        this.toShow = this.toShow.add(d);
      },
      errorsFor: function (a) {
        var b = this.idOrName(a);
        return this.errors().filter(function () {
          return c(this).attr("for") == b;
        });
      },
      idOrName: function (a) {
        return (
          this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
        );
      },
      validationTargetFor: function (a) {
        if (this.checkable(a))
          a = this.findByName(a.name).not(this.settings.ignore)[0];
        return a;
      },
      checkable: function (a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function (a) {
        var b = this.currentForm;
        return c(document.getElementsByName(a)).map(function (d, e) {
          return (e.form == b && e.name == a && e) || null;
        });
      },
      getLength: function (a, b) {
        switch (b.nodeName.toLowerCase()) {
          case "select":
            return c("option:selected", b).length;
          case "input":
            if (this.checkable(b))
              return this.findByName(b.name).filter(":checked").length;
        }
        return a.length;
      },
      depend: function (a, b) {
        return this.dependTypes[typeof a]
          ? this.dependTypes[typeof a](a, b)
          : true;
      },
      dependTypes: {
        boolean: function (a) {
          return a;
        },
        string: function (a, b) {
          return !!c(a, b.form).length;
        },
        function: function (a, b) {
          return a(b);
        },
      },
      optional: function (a) {
        return (
          !c.validator.methods.required.call(this, c.trim(a.value), a) &&
          "dependency-mismatch"
        );
      },
      startRequest: function (a) {
        if (!this.pending[a.name]) {
          this.pendingRequest++;
          this.pending[a.name] = true;
        }
      },
      stopRequest: function (a, b) {
        this.pendingRequest--;
        if (this.pendingRequest < 0) this.pendingRequest = 0;
        delete this.pending[a.name];
        if (
          b &&
          this.pendingRequest == 0 &&
          this.formSubmitted &&
          this.form()
        ) {
          c(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
          c(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function (a) {
        return (
          c.data(a, "previousValue") ||
          c.data(a, "previousValue", {
            old: null,
            valid: true,
            message: this.defaultMessage(a, "remote"),
          })
        );
      },
    },
    classRuleSettings: {
      required: { required: true },
      email: { email: true },
      url: { url: true },
      date: { date: true },
      dateISO: { dateISO: true },
      dateDE: { dateDE: true },
      number: { number: true },
      numberDE: { numberDE: true },
      digits: { digits: true },
      creditcard: { creditcard: true },
    },
    addClassRules: function (a, b) {
      a.constructor == String
        ? (this.classRuleSettings[a] = b)
        : c.extend(this.classRuleSettings, a);
    },
    classRules: function (a) {
      var b = {};
      (a = c(a).attr("class")) &&
        c.each(a.split(" "), function () {
          this in c.validator.classRuleSettings &&
            c.extend(b, c.validator.classRuleSettings[this]);
        });
      return b;
    },
    attributeRules: function (a) {
      var b = {};
      a = c(a);
      for (var d in c.validator.methods) {
        var e;
        if (
          (e =
            d === "required" && typeof c.fn.prop === "function"
              ? a.prop(d)
              : a.attr(d))
        )
          b[d] = e;
        else if (a[0].getAttribute("type") === d) b[d] = true;
      }
      b.maxlength &&
        /-1|2147483647|524288/.test(b.maxlength) &&
        delete b.maxlength;
      return b;
    },
    metadataRules: function (a) {
      if (!c.metadata) return {};
      var b = c.data(a.form, "validator").settings.meta;
      return b ? c(a).metadata()[b] : c(a).metadata();
    },
    staticRules: function (a) {
      var b = {},
        d = c.data(a.form, "validator");
      if (d.settings.rules)
        b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
      return b;
    },
    normalizeRules: function (a, b) {
      c.each(a, function (d, e) {
        if (e === false) delete a[d];
        else if (e.param || e.depends) {
          var f = true;
          switch (typeof e.depends) {
            case "string":
              f = !!c(e.depends, b.form).length;
              break;
            case "function":
              f = e.depends.call(b, b);
          }
          if (f) a[d] = e.param !== undefined ? e.param : true;
          else delete a[d];
        }
      });
      c.each(a, function (d, e) {
        a[d] = c.isFunction(e) ? e(b) : e;
      });
      c.each(["minlength", "maxlength", "min", "max"], function () {
        if (a[this]) a[this] = Number(a[this]);
      });
      c.each(["rangelength", "range"], function () {
        if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])];
      });
      if (c.validator.autoCreateRanges) {
        if (a.min && a.max) {
          a.range = [a.min, a.max];
          delete a.min;
          delete a.max;
        }
        if (a.minlength && a.maxlength) {
          a.rangelength = [a.minlength, a.maxlength];
          delete a.minlength;
          delete a.maxlength;
        }
      }
      a.messages && delete a.messages;
      return a;
    },
    normalizeRule: function (a) {
      if (typeof a == "string") {
        var b = {};
        c.each(a.split(/\s/), function () {
          b[this] = true;
        });
        a = b;
      }
      return a;
    },
    addMethod: function (a, b, d) {
      c.validator.methods[a] = b;
      c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
      b.length < 3 &&
        c.validator.addClassRules(a, c.validator.normalizeRule(a));
    },
    methods: {
      required: function (a, b, d) {
        if (!this.depend(d, b)) return "dependency-mismatch";
        switch (b.nodeName.toLowerCase()) {
          case "select":
            return (a = c(b).val()) && a.length > 0;
          case "input":
            if (this.checkable(b)) return this.getLength(a, b) > 0;
          default:
            return c.trim(a).length > 0;
        }
      },
      remote: function (a, b, d) {
        if (this.optional(b)) return "dependency-mismatch";
        var e = this.previousValue(b);
        this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
        e.originalMessage = this.settings.messages[b.name].remote;
        this.settings.messages[b.name].remote = e.message;
        d = (typeof d == "string" && { url: d }) || d;
        if (this.pending[b.name]) return "pending";
        if (e.old === a) return e.valid;
        e.old = a;
        var f = this;
        this.startRequest(b);
        var g = {};
        g[b.name] = a;
        c.ajax(
          c.extend(
            true,
            {
              url: d,
              mode: "abort",
              port: "validate" + b.name,
              dataType: "json",
              data: g,
              success: function (h) {
                f.settings.messages[b.name].remote = e.originalMessage;
                var j = h === true;
                if (j) {
                  var i = f.formSubmitted;
                  f.prepareElement(b);
                  f.formSubmitted = i;
                  f.successList.push(b);
                  f.showErrors();
                } else {
                  i = {};
                  h = h || f.defaultMessage(b, "remote");
                  i[b.name] = e.message = c.isFunction(h) ? h(a) : h;
                  f.showErrors(i);
                }
                e.valid = j;
                f.stopRequest(b, j);
              },
            },
            d,
          ),
        );
        return "pending";
      },
      minlength: function (a, b, d) {
        return this.optional(b) || this.getLength(c.trim(a), b) >= d;
      },
      maxlength: function (a, b, d) {
        return this.optional(b) || this.getLength(c.trim(a), b) <= d;
      },
      rangelength: function (a, b, d) {
        a = this.getLength(c.trim(a), b);
        return this.optional(b) || (a >= d[0] && a <= d[1]);
      },
      min: function (a, b, d) {
        return this.optional(b) || a >= d;
      },
      max: function (a, b, d) {
        return this.optional(b) || a <= d;
      },
      range: function (a, b, d) {
        return this.optional(b) || (a >= d[0] && a <= d[1]);
      },
      email: function (a, b) {
        return (
          this.optional(b) ||
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
            a,
          )
        );
      },
      url: function (a, b) {
        return (
          this.optional(b) ||
          /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
            a,
          )
        );
      },
      date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a));
      },
      dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a);
      },
      number: function (a, b) {
        return (
          this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
        );
      },
      digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      creditcard: function (a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 -]+/.test(a)) return false;
        var d = 0,
          e = 0,
          f = false;
        a = a.replace(/\D/g, "");
        for (var g = a.length - 1; g >= 0; g--) {
          e = a.charAt(g);
          e = parseInt(e, 10);
          if (f) if ((e *= 2) > 9) e -= 9;
          d += e;
          f = !f;
        }
        return d % 10 == 0;
      },
      accept: function (a, b, d) {
        d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
        return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"));
      },
      equalTo: function (a, b, d) {
        d = c(d)
          .unbind(".validate-equalTo")
          .bind("blur.validate-equalTo", function () {
            c(b).valid();
          });
        return a == d.val();
      },
    },
  });
  c.format = c.validator.format;
})(jQuery);
(function (c) {
  var a = {};
  if (c.ajaxPrefilter)
    c.ajaxPrefilter(function (d, e, f) {
      e = d.port;
      if (d.mode == "abort") {
        a[e] && a[e].abort();
        a[e] = f;
      }
    });
  else {
    var b = c.ajax;
    c.ajax = function (d) {
      var e = ("port" in d ? d : c.ajaxSettings).port;
      if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
        a[e] && a[e].abort();
        return (a[e] = b.apply(this, arguments));
      }
      return b.apply(this, arguments);
    };
  }
})(jQuery);
(function (c) {
  !jQuery.event.special.focusin &&
    !jQuery.event.special.focusout &&
    document.addEventListener &&
    c.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
      function d(e) {
        e = c.event.fix(e);
        e.type = b;
        return c.event.handle.call(this, e);
      }
      c.event.special[b] = {
        setup: function () {
          this.addEventListener(a, d, true);
        },
        teardown: function () {
          this.removeEventListener(a, d, true);
        },
        handler: function (e) {
          arguments[0] = c.event.fix(e);
          arguments[0].type = b;
          return c.event.handle.apply(this, arguments);
        },
      };
    });
  c.extend(c.fn, {
    validateDelegate: function (a, b, d) {
      return this.bind(b, function (e) {
        var f = c(e.target);
        if (f.is(a)) return d.apply(f, arguments);
      });
    },
  });
})(jQuery);

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
  return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, a, t) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var s =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r &&
            void 0 != e.value.g &&
            void 0 != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h &&
              void 0 != e.value.s &&
              void 0 != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var r = i.particles.shape.type;
      if ("object" == typeof r) {
        if (r instanceof Array) {
          var c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if ("image" == this.shape) {
        var o = i.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            void 0 != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      function e() {
        i.canvas.ctx.drawImage(
          r,
          a.x - t,
          a.y - t,
          2 * t,
          (2 * t) / a.img.ratio,
        );
      }
      var a = this;
      if (void 0 != a.radius_bubble) var t = a.radius_bubble;
      else var t = a.radius;
      if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
      else var s = a.opacity;
      if (a.color.rgb)
        var n =
          "rgba(" +
          a.color.rgb.r +
          "," +
          a.color.rgb.g +
          "," +
          a.color.rgb.b +
          "," +
          s +
          ")";
      else
        var n =
          "hsla(" +
          a.color.hsl.h +
          "," +
          a.color.hsl.s +
          "%," +
          a.color.hsl.l +
          "%," +
          s +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t,
            a.y + t / 1.66,
            2 * t,
            3,
            2,
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            a.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1,
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            a.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2,
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var r = a.img.obj;
          else var r = i.tmp.img_obj;
          r && e();
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value),
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        if (i.particles.move.enable) {
          var t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == a.opacity_status
              ? (a.opacity >= i.particles.opacity.value &&
                  (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                  (a.opacity_status = !0),
                (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == a.size_status
              ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= i.particles.size.anim.size_min &&
                  (a.size_status = !0),
                (a.radius -= a.vs)),
            a.radius < 0 && (a.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var s = {
            x_left: a.radius,
            x_right: i.canvas.w,
            y_top: a.radius,
            y_bottom: i.canvas.h,
          };
        else
          var s = {
            x_left: -a.radius,
            x_right: i.canvas.w + a.radius,
            y_top: -a.radius,
            y_bottom: i.canvas.h + a.radius,
          };
        switch (
          (a.x - a.radius > i.canvas.w
            ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h))
            : a.x + a.radius < 0 &&
              ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h
            ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w))
            : a.y + a.radius < 0 &&
              ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            a.x + a.radius > i.canvas.w
              ? (a.vx = -a.vx)
              : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h
                ? (a.vy = -a.vy)
                : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var n = e + 1; n < i.particles.array.length; n++) {
            var r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(a, r),
              i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        a.draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r =
          i.particles.line_linked.opacity -
          n /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (r > 0) {
          var c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, a) {
      var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
      n >= s &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function (e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; e > t; t++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h,
          }),
        ),
          t == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function a() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function t(a, t, s, n, c) {
        if (a != t)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != s) {
              var o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration,
                l = a - o;
              (d = a + l),
                "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else if (r <= i.interactivity.modes.bubble.distance) {
            if (void 0 != s) var v = s;
            else var v = n;
            if (v != a) {
              var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
              "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else
            "size" == c && (e.radius_bubble = void 0),
              "opacity" == c && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;
        if (r <= i.interactivity.modes.bubble.distance) {
          if (c >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var o = e.radius + i.interactivity.modes.bubble.size * c;
                o >= 0 && (e.radius_bubble = o);
              } else {
                var l = e.radius - i.interactivity.modes.bubble.size,
                  o = e.radius - l * c;
                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                var v = i.interactivity.modes.bubble.opacity * c;
                v > e.opacity &&
                  v <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              } else {
                var v =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    c;
                v < e.opacity &&
                  v >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              }
          }
        } else a();
        "mouseleave" == i.interactivity.status && a();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            p > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (t(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size",
          ),
          t(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity",
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      function a() {
        var a = Math.atan2(d, p);
        if (
          ((e.vx = u * Math.cos(a)),
          (e.vy = u * Math.sin(a)),
          "bounce" == i.particles.move.out_mode)
        ) {
          var t = { x: e.x + e.vx, y: e.y + e.vy };
          t.x + e.radius > i.canvas.w
            ? (e.vx = -e.vx)
            : t.x - e.radius < 0 && (e.vx = -e.vx),
            t.y + e.radius > i.canvas.h
              ? (e.vy = -e.vy)
              : t.y - e.radius < 0 && (e.vy = -e.vy);
        }
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };
        "bounce" == i.particles.move.out_mode
          ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
            v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y))
          : ((e.x = v.x), (e.y = v.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            p = i.interactivity.mouse.click_pos_x - e.x,
            d = i.interactivity.mouse.click_pos_y - e.y,
            m = p * p + d * d,
            u = (-c / m) * 1;
          c >= m && a();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);
        if (s <= i.interactivity.modes.grab.distance) {
          var n =
            i.interactivity.modes.grab.line_linked.opacity -
            s /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (n > 0) {
            var r = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y,
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      "window" == i.interactivity.detect_on
        ? (i.interactivity.el = window)
        : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var a = e.clientX,
                t = e.clientY;
            else
              var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = a),
              (i.interactivity.mouse.pos_y = t),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse,
                      )
                    : 1 == i.interactivity.modes.push.particles_nb
                      ? i.fn.modes.pushParticles(
                          i.interactivity.modes.push.particles_nb,
                          i.interactivity.mouse,
                        )
                      : i.interactivity.modes.push.particles_nb > 1 &&
                        i.fn.modes.pushParticles(
                          i.interactivity.modes.push.particles_nb,
                        );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb,
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var a =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area,
          t = i.particles.array.length - a;
        0 > t
          ? i.fn.modes.pushParticles(Math.abs(t))
          : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, a) {
      for (var t = 0; t < i.particles.array.length; t++) {
        var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
        c <= e.radius + s.radius &&
          ((e.x = a ? a.x : Math.random() * i.canvas.w),
          (e.y = a ? a.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
          if (e.color.rgb)
            var n =
              "rgba(" +
              e.color.rgb.r +
              "," +
              e.color.rgb.g +
              "," +
              e.color.rgb.b +
              "," +
              e.opacity +
              ")";
          else
            var n =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return n;
        }),
        n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
      o.addEventListener("load", function () {
        (e.img.obj = o),
          (e.img.loaded = !0),
          r.revokeObjectURL(c),
          i.tmp.count_svg++;
      }),
        (o.src = c);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
      var r = s * n,
        c = s / n,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
      for (var v = 0; r > v; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var a = new XMLHttpRequest();
          a.open("GET", i.particles.shape.image.src),
            (a.onreadystatechange = function (e) {
              4 == a.readyState &&
                (200 == a.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            a.send();
        } else {
          var t = new Image();
          t.addEventListener("load", function () {
            (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
          }),
            (t.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : void 0 != i.tmp.img_obj
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color,
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3,
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
  for (var t in a)
    a[t] && a[t].constructor && a[t].constructor === Object
      ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t]))
      : (e[t] = a[t]);
  return e;
}),
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
    );
  })()),
  (window.pJSDom = []),
  (window.particlesJS = function (e, a) {
    "string" != typeof e && ((a = e), (e = "particles-js")),
      e || (e = "particles-js");
    var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    var n = document.createElement("canvas");
    (n.className = i), (n.style.width = "100%"), (n.style.height = "100%");
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
  }),
  (window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest();
    i.open("GET", a),
      (i.onreadystatechange = function (a) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  });
