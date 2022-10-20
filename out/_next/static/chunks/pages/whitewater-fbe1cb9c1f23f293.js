;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [463],
  {
    1953: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return Z
        },
      })
      var r = n(2122),
        a = n(9756),
        i = n(1720),
        o = n(6010),
        c = n(2962),
        s = n(6523),
        l = n(9707),
        u = n(1938),
        m = n(6690)
      const p = ['className', 'component']
      var d = n(7078)
      const g = (function (t = {}) {
        const {
            defaultTheme: e,
            defaultClassName: n = 'MuiBox-root',
            generateClassName: d,
            styleFunctionSx: g = s.Z,
          } = t,
          Z = (0, c.ZP)('div', {
            shouldForwardProp: (t) => 'theme' !== t && 'sx' !== t && 'as' !== t,
          })(g)
        return i.forwardRef(function (t, i) {
          const c = (0, u.Z)(e),
            s = (0, l.Z)(t),
            { className: g, component: f = 'div' } = s,
            h = (0, a.Z)(s, p)
          return (0,
          m.tZ)(Z, (0, r.Z)({ as: f, ref: i, className: (0, o.Z)(g, d ? d(n) : n), theme: c }, h))
        })
      })({
        defaultTheme: (0, n(9762).Z)(),
        defaultClassName: 'MuiBox-root',
        generateClassName: d.Z.generate,
      })
      var Z = g
    },
    5334: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/whitewater',
        function () {
          return n(4258)
        },
      ])
    },
    2023: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return m
        },
      })
      var r = n(3895),
        a = n(6690),
        i = (n(1720), n(9582)),
        o = n(9224),
        c = n(2806),
        s = n(1359),
        l = n(9647),
        u = n(2497)
      function m(t) {
        return (0, a.tZ)(o.Z, {
          sx: [{ maxWidth: 340 }].concat((0, r.Z)(Array.isArray(t.sx) ? t.sx : [t.sx])),
          children: (0, a.BX)(c.Z, {
            component: 'a',
            href: '#',
            sx: { width: 1, height: 1 },
            children: [
              (0, a.tZ)(l.Z, { component: 'img', sx: { width: 1 }, image: t.post.image }),
              (0, a.BX)(s.Z, {
                sx: { flex: 1 },
                children: [
                  (0, a.tZ)(i.Z, { component: 'h2', variant: 'h5', children: t.post.title }),
                  (0, a.tZ)(i.Z, {
                    variant: 'subtitle1',
                    color: 'text.secondary',
                    children: (0, u.Z)(t.post.date),
                  }),
                  (0, a.tZ)(i.Z, { variant: 'subtitle1', paragraph: !0, children: t.post.summary }),
                ],
              }),
            ],
          }),
        })
      }
    },
    1476: function (t, e, n) {
      'use strict'
      n.d(e, {
        $t: function () {
          return m
        },
        TQ: function () {
          return u
        },
        Uy: function () {
          return p
        },
      })
      var r = n(6690),
        a = n(9008),
        i = n.n(a),
        o = n(1163),
        c = n(7059),
        s = n.n(c),
        l = function (t) {
          var e = t.title,
            n = t.description,
            a = t.ogType,
            c = t.ogImage,
            l = t.twImage,
            u = t.canonicalUrl,
            m = (0, o.useRouter)()
          return (0, r.BX)(i(), {
            children: [
              (0, r.tZ)('title', { children: e }),
              (0, r.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, r.tZ)('meta', { name: 'description', content: n }),
              (0, r.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(s().siteUrl).concat(m.asPath),
              }),
              (0, r.tZ)('meta', { property: 'og:type', content: a }),
              (0, r.tZ)('meta', { property: 'og:site_name', content: s().title }),
              (0, r.tZ)('meta', { property: 'og:description', content: n }),
              (0, r.tZ)('meta', { property: 'og:title', content: e }),
              Array.isArray(c)
                ? c.map(function (t) {
                    var e = t.url
                    return (0, r.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, r.tZ)('meta', { property: 'og:image', content: c }, c),
              (0, r.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, r.tZ)('meta', { name: 'twitter:site', content: s().twitter }),
              (0, r.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, r.tZ)('meta', { name: 'twitter:description', content: n }),
              (0, r.tZ)('meta', { name: 'twitter:image', content: l }),
              (0, r.tZ)('link', {
                rel: 'canonical',
                href: u || ''.concat(s().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        u = function (t) {
          var e = t.title,
            n = t.description,
            a = s().siteUrl + s().socialBanner,
            i = s().siteUrl + s().socialBanner
          return (0, r.tZ)(l, {
            title: e,
            description: n,
            ogType: 'website',
            ogImage: a,
            twImage: i,
          })
        },
        m = function (t) {
          var e = t.title,
            n = t.description,
            a = s().siteUrl + s().socialBanner,
            c = s().siteUrl + s().socialBanner,
            u = (0, o.useRouter)()
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(l, { title: e, description: n, ogType: 'website', ogImage: a, twImage: c }),
              (0, r.tZ)(i(), {
                children: (0, r.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(n, ' - RSS feed'),
                  href: ''.concat(s().siteUrl).concat(u.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        p = function (t) {
          var e = t.authorDetails,
            n = t.title,
            a = t.summary,
            o = t.date,
            c = t.lastmod,
            u = t.url,
            m = t.images,
            p = void 0 === m ? [] : m,
            d = t.canonicalUrl,
            g = new Date(o).toISOString(),
            Z = new Date(c || o).toISOString(),
            f = (0 === p.length ? [s().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(s().siteUrl).concat(t) }
              }
            ),
            h = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': u },
              headline: n,
              image: f,
              datePublished: g,
              dateModified: Z,
              author: e
                ? e.map(function (t) {
                    return { '@type': 'Person', name: t.name }
                  })
                : { '@type': 'Person', name: s().author },
              publisher: {
                '@type': 'Organization',
                name: s().author,
                logo: { '@type': 'ImageObject', url: ''.concat(s().siteUrl).concat(s().siteLogo) },
              },
              description: a,
            },
            y = f[0].url
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(l, {
                title: n,
                description: a,
                ogType: 'article',
                ogImage: f,
                twImage: y,
                canonicalUrl: d,
              }),
              (0, r.BX)(i(), {
                children: [
                  o && (0, r.tZ)('meta', { property: 'article:published_time', content: g }),
                  c && (0, r.tZ)('meta', { property: 'article:modified_time', content: Z }),
                  (0, r.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(h, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2497: function (t, e, n) {
      'use strict'
      var r = n(7059),
        a = n.n(r)
      e.Z = function (t) {
        return new Date(t).toLocaleDateString(a().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    4258: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return u
          },
          default: function () {
            return m
          },
        })
      var r = n(6690),
        a = n(7059),
        i = n.n(a),
        o = n(1476),
        c = n(1953),
        s = n(2023)
      function l(t) {
        var e = t.articles.map(function (t) {
          return (0, r.tZ)(s.Z, { post: t, sx: { margin: 2 } }, t.title)
        })
        return (0, r.tZ)(c.Z, {
          sx: {
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
          },
          children: e,
        })
      }
      var u = !0
      function m(t) {
        var e = t.allPosts
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(o.TQ, {
              title: 'Projects - '.concat(i().author),
              description: i().description,
            }),
            (0, r.tZ)(l, { articles: e }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [842, 242, 888, 774, 179], function () {
      return (e = 5334), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
