;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94],
  {
    3303: function (t, n, u) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/blog/[...slug]',
        function () {
          return u(3274)
        },
      ])
    },
    3274: function (t, n, u) {
      'use strict'
      u.r(n),
        u.d(n, {
          __N_SSG: function () {
            return e
          },
          default: function () {
            return c
          },
        })
      var o = u(6690),
        r = u(1486),
        e = !0
      function c(t) {
        var n = t.post,
          u = t.authorDetails,
          e = t.prev,
          c = t.next
        return (0, o.tZ)(o.HY, {
          children: (0, o.tZ)(r.J, {
            layout: n.layout || 'PostLayout',
            toc: n.toc,
            content: n,
            authorDetails: u,
            prev: e,
            next: c,
          }),
        })
      }
    },
  },
  function (t) {
    t.O(0, [675, 266, 486, 888, 774, 179], function () {
      return (n = 3303), t((t.s = n))
      var n
    })
    var n = t.O()
    _N_E = n
  },
])
