! function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(o, r, function (t) {
        return e[t]
      }.bind(null, r));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function (e, t) {
  $(function () {
    $("#drop-down").on("change", function (e) {
      e.preventDefault();
      const t = $("#drop-down").val();
      $(".site-header").addClass("small-header"), "" !== t && ($(".ajax-loader").show(), function (e) {
        $(".top-stories ul").empty(), $.ajax({
          method: "GET",
          url: "https://api.nytimes.com/svc/topstories/v2/" + e + ".json?api-key=g6kpkfDKZ7PlqdA4ds2KEggP82QRbUyZ",
          dataType: "json"
        }).done(function (e) {
          if (0 === e.results.length) $(".top-stories ul").append("<li> Please select another section. </li>");
          else {
            const t = e.results.filter(function (e) {
                return void 0 !== e.multimedia[4]
              }),
              n = t.slice(0, 12);
            console.log(n), $.each(n, function (e, t) {
              const n = '<p class="abstract">' + t.abstract + "</p>";
              let o = '<div class="article-image" style="background-image:url(' + t.multimedia[4].url + ');">' + n + "</div>";
              const r = t.url;
              console.log(t), $(".top-stories ul").append('<li class="article-list"><a href="' + r + '">' + o + "</a></li>")
            })
          }
        }).fail(function () {
          console.log("Sorry, no articles were found. Please select another section.")
        }).always(function () {
          $(".ajax-loader").hide()
        })
      }(t))
    })
  })
}]);