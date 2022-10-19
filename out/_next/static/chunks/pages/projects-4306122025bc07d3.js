;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    5542: function (t, e, n) {
      'use strict'
      function r() {
        return (
          (r =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          r.apply(this, arguments)
        )
      }
      function i() {
        return r.apply(this, arguments)
      }
      n.d(e, {
        Z: function () {
          return i
        },
      })
    },
    7670: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return n(7571)
        },
      ])
    },
    7753: function (t, e, n) {
      'use strict'
      var r = n(5542),
        i = n(18),
        a = n(6690),
        o = n(5675),
        c = n.n(o)
      e.Z = function (t) {
        var e = (0, r.Z)({}, t)
        return (0, a.tZ)(c(), (0, i.Z)({}, e))
      }
    },
    1476: function (t, e, n) {
      'use strict'
      n.d(e, {
        $t: function () {
          return m
        },
        TQ: function () {
          return d
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
            d = t.canonicalUrl,
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
                href: d || ''.concat(l().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        d = function (t) {
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
            d = (0, o.useRouter)()
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(s, { title: e, description: n, ogType: 'website', ogImage: i, twImage: c }),
              (0, r.tZ)(a(), {
                children: (0, r.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(n, ' - RSS feed'),
                  href: ''.concat(l().siteUrl).concat(d.asPath, '/feed.xml'),
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
            d = t.url,
            m = t.images,
            p = void 0 === m ? [] : m,
            h = t.canonicalUrl,
            g = new Date(o).toISOString(),
            u = new Date(c || o).toISOString(),
            f = (0 === p.length ? [l().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(l().siteUrl).concat(t) }
              }
            ),
            y = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': d },
              headline: n,
              image: f,
              datePublished: g,
              dateModified: u,
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
            Z = f[0].url
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(s, {
                title: n,
                description: i,
                ogType: 'article',
                ogImage: f,
                twImage: Z,
                canonicalUrl: h,
              }),
              (0, r.BX)(a(), {
                children: [
                  o && (0, r.tZ)('meta', { property: 'article:published_time', content: g }),
                  c && (0, r.tZ)('meta', { property: 'article:modified_time', content: u }),
                  (0, r.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(y, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    7571: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          default: function () {
            return m
          },
        })
      var r = n(6690),
        i = n(7059),
        a = n.n(i),
        o = [
          {
            title: 'A Search Engine',
            description:
              "What if you could look up any information in the world? Webpages, images, videos\n    and more. Google has many features to help you find exactly what you're looking\n    for.",
            imgSrc: '/static/images/google.png',
            href: 'https://www.google.com',
          },
          {
            title: 'The Time Machine',
            description:
              'Imagine being able to travel back in time or to the future. Simple turn the knob\n    to the desired date and press "Go". No more worrying about lost keys or\n    forgotten headphones with this simple yet affordable solution.',
            imgSrc: '/static/images/time-machine.jpg',
            href: '/blog/the-time-machine',
          },
        ],
        c = n(7753),
        l = n(5741),
        s = function (t) {
          var e = t.title,
            n = t.description,
            i = t.imgSrc,
            a = t.href
          return (0, r.tZ)('div', {
            className: 'md p-4 md:w-1/2',
            style: { maxWidth: '272px' },
            children: (0, r.BX)('div', {
              className: ''.concat(
                i && 'h-full',
                '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
              ),
              children: [
                i &&
                  (a
                    ? (0, r.tZ)(l.Z, {
                        href: a,
                        'aria-label': 'Link to '.concat(e),
                        children: (0, r.tZ)(c.Z, {
                          alt: e,
                          src: i,
                          className: 'object-cover object-center md:h-36 lg:h-48',
                          width: 272,
                          height: 153,
                        }),
                      })
                    : (0, r.tZ)(c.Z, {
                        alt: e,
                        src: i,
                        className: 'object-cover object-center md:h-36 lg:h-48',
                        width: 272,
                        height: 153,
                      })),
                (0, r.BX)('div', {
                  className: 'p-6',
                  children: [
                    (0, r.tZ)('h2', {
                      className: 'mb-3 text-2xl font-bold leading-8 tracking-tight',
                      children: a
                        ? (0, r.tZ)(l.Z, {
                            href: a,
                            'aria-label': 'Link to '.concat(e),
                            children: e,
                          })
                        : e,
                    }),
                    (0, r.tZ)('p', {
                      className: 'prose mb-3 max-w-none text-gray-500 dark:text-gray-400',
                      children: n,
                    }),
                    a &&
                      (0, r.tZ)(l.Z, {
                        href: a,
                        className:
                          'text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'Link to '.concat(e),
                        children: 'Learn more \u2192',
                      }),
                  ],
                }),
              ],
            }),
          })
        },
        d = n(1476)
      function m() {
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(d.TQ, {
              title: 'Projects - '.concat(a().author),
              description: a().description,
            }),
            (0, r.BX)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, r.BX)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, r.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Projects',
                    }),
                    (0, r.tZ)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: 'Showcase your projects with a hero image (16 x 9)',
                    }),
                  ],
                }),
                (0, r.tZ)('div', {
                  className: 'container py-12',
                  children: (0, r.tZ)('div', {
                    className: '-m-4 flex flex-wrap',
                    children: o.map(function (t) {
                      return (0,
                      r.tZ)(s, { title: t.title, description: t.description, imgSrc: t.imgSrc, href: t.href }, t.title)
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
    1163: function (t, e, n) {
      t.exports = n(387)
    },
  },
  function (t) {
    t.O(0, [675, 888, 774, 179], function () {
      return (e = 7670), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
