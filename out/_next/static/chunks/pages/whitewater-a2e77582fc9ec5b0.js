;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [463],
  {
    5334: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/whitewater',
        function () {
          return n(5475)
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
      var r = n(6690),
        i = (n(1720), n(9582)),
        a = n(2370),
        o = n(9224),
        c = n(2806),
        l = n(1359),
        s = n(9647),
        u = n(2497)
      function m(t) {
        return (
          console.log(t),
          (0, r.tZ)(a.ZP, {
            item: !0,
            xs: 12,
            md: 6,
            children: (0, r.tZ)(c.Z, {
              component: 'a',
              href: '#',
              children: (0, r.BX)(o.Z, {
                sx: { display: 'flex' },
                children: [
                  (0, r.BX)(l.Z, {
                    sx: { flex: 1 },
                    children: [
                      (0, r.tZ)(i.Z, { component: 'h2', variant: 'h5', children: t.post.title }),
                      (0, r.tZ)(i.Z, {
                        variant: 'subtitle1',
                        color: 'text.secondary',
                        children: (0, u.Z)(t.post.date),
                      }),
                      (0, r.tZ)(i.Z, {
                        variant: 'subtitle1',
                        paragraph: !0,
                        children: t.post.summary,
                      }),
                    ],
                  }),
                  (0, r.tZ)(s.Z, {
                    component: 'img',
                    sx: { width: 160, display: { xs: 'none', sm: 'block' } },
                    image: t.post.image,
                  }),
                ],
              }),
            }),
          })
        )
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
        i = n(9008),
        a = n.n(i),
        o = n(1163),
        c = n(7059),
        l = n.n(c),
        s = function (t) {
          var e = t.title,
            n = t.description,
            i = t.ogType,
            c = t.ogImage,
            s = t.twImage,
            u = t.canonicalUrl,
            m = (0, o.useRouter)()
          return (0, r.BX)(a(), {
            children: [
              (0, r.tZ)('title', { children: e }),
              (0, r.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, r.tZ)('meta', { name: 'description', content: n }),
              (0, r.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(l().siteUrl).concat(m.asPath),
              }),
              (0, r.tZ)('meta', { property: 'og:type', content: i }),
              (0, r.tZ)('meta', { property: 'og:site_name', content: l().title }),
              (0, r.tZ)('meta', { property: 'og:description', content: n }),
              (0, r.tZ)('meta', { property: 'og:title', content: e }),
              Array.isArray(c)
                ? c.map(function (t) {
                    var e = t.url
                    return (0, r.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, r.tZ)('meta', { property: 'og:image', content: c }, c),
              (0, r.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, r.tZ)('meta', { name: 'twitter:site', content: l().twitter }),
              (0, r.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, r.tZ)('meta', { name: 'twitter:description', content: n }),
              (0, r.tZ)('meta', { name: 'twitter:image', content: s }),
              (0, r.tZ)('link', {
                rel: 'canonical',
                href: u || ''.concat(l().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        u = function (t) {
          var e = t.title,
            n = t.description,
            i = l().siteUrl + l().socialBanner,
            a = l().siteUrl + l().socialBanner
          return (0, r.tZ)(s, {
            title: e,
            description: n,
            ogType: 'website',
            ogImage: i,
            twImage: a,
          })
        },
        m = function (t) {
          var e = t.title,
            n = t.description,
            i = l().siteUrl + l().socialBanner,
            c = l().siteUrl + l().socialBanner,
            u = (0, o.useRouter)()
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(s, { title: e, description: n, ogType: 'website', ogImage: i, twImage: c }),
              (0, r.tZ)(a(), {
                children: (0, r.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(n, ' - RSS feed'),
                  href: ''.concat(l().siteUrl).concat(u.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        p = function (t) {
          var e = t.authorDetails,
            n = t.title,
            i = t.summary,
            o = t.date,
            c = t.lastmod,
            u = t.url,
            m = t.images,
            p = void 0 === m ? [] : m,
            d = t.canonicalUrl,
            g = new Date(o).toISOString(),
            Z = new Date(c || o).toISOString(),
            h = (0 === p.length ? [l().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(t) }
              }
            ),
            f = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': u },
              headline: n,
              image: h,
              datePublished: g,
              dateModified: Z,
              author: e
                ? e.map(function (t) {
                    return { '@type': 'Person', name: t.name }
                  })
                : { '@type': 'Person', name: l().author },
              publisher: {
                '@type': 'Organization',
                name: l().author,
                logo: { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(l().siteLogo) },
              },
              description: i,
            },
            y = h[0].url
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(s, {
                title: n,
                description: i,
                ogType: 'article',
                ogImage: h,
                twImage: y,
                canonicalUrl: d,
              }),
              (0, r.BX)(a(), {
                children: [
                  o && (0, r.tZ)('meta', { property: 'article:published_time', content: g }),
                  c && (0, r.tZ)('meta', { property: 'article:modified_time', content: Z }),
                  (0, r.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(f, null, 2) },
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
        i = n.n(r)
      e.Z = function (t) {
        return new Date(t).toLocaleDateString(i().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    5475: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return s
          },
          default: function () {
            return u
          },
        })
      var r = n(6690),
        i = n(7059),
        a = n.n(i),
        o = n(1476),
        c = n(9582),
        l = n(2023),
        s = !0
      function u(t) {
        var e = t.allPosts
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(o.TQ, {
              title: 'Projects - '.concat(a().author),
              description: a().description,
            }),
            (0, r.tZ)('div', {
              className: 'container py-12',
              children: (0, r.tZ)('div', {
                className: '-m-4 flex flex-wrap',
                children: e.map(function (t) {
                  return (0, r.tZ)(l.Z, { post: t }, t.title)
                }),
              }),
            }),
            (0, r.tZ)(c.Z, { children: 'Hello' }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [842, 929, 888, 774, 179], function () {
      return (e = 5334), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
