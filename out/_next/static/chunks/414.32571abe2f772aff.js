'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [414],
  {
    6414: function (t, e, a) {
      a.r(e)
      var n = a(6690),
        i = a(1720),
        s = a(2010),
        r = a(7059),
        c = a.n(r)
      e.default = function () {
        var t = (0, i.useState)(!0),
          e = t[0],
          a = t[1],
          r = (0, s.F)(),
          o = r.theme,
          u = r.resolvedTheme,
          m =
            '' === c().comment.giscusConfig.themeURL
              ? 'dark' === o || 'dark' === u
                ? c().comment.giscusConfig.darkTheme
                : c().comment.giscusConfig.theme
              : c().comment.giscusConfig.themeURL,
          d = 'comments-container',
          g = (0, i.useCallback)(
            function () {
              a(!1)
              var t = c().comment.giscusConfig,
                e = t.repo,
                n = t.repositoryId,
                i = t.category,
                s = t.categoryId,
                r = t.mapping,
                o = t.reactions,
                u = t.metadata,
                g = t.inputPosition,
                p = t.lang,
                l = document.createElement('script')
              ;(l.src = 'https://giscus.app/client.js'),
                l.setAttribute('data-repo', e),
                l.setAttribute('data-repo-id', n),
                l.setAttribute('data-category', i),
                l.setAttribute('data-category-id', s),
                l.setAttribute('data-mapping', r),
                l.setAttribute('data-reactions-enabled', o),
                l.setAttribute('data-emit-metadata', u),
                l.setAttribute('data-input-position', g),
                l.setAttribute('data-lang', p),
                l.setAttribute('data-theme', m),
                l.setAttribute('crossorigin', 'anonymous'),
                (l.async = !0)
              var b = document.getElementById(d)
              return (
                b && b.appendChild(l),
                function () {
                  var t = document.getElementById(d)
                  t && (t.innerHTML = '')
                }
              )
            },
            [m]
          )
        return (
          (0, i.useEffect)(
            function () {
              document.querySelector('iframe.giscus-frame') && g()
            },
            [g]
          ),
          (0, n.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              e && (0, n.tZ)('button', { onClick: g, children: 'Load Comments' }),
              (0, n.tZ)('div', { className: 'giscus', id: d }),
            ],
          })
        )
      }
    },
  },
])
