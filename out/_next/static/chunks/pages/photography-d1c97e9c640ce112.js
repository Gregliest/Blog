;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    3290: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/photography',
        function () {
          return r(5160)
        },
      ])
    },
    1476: function (t, e, r) {
      'use strict'
      r.d(e, {
        $t: function () {
          return u
        },
        TQ: function () {
          return m
        },
        Uy: function () {
          return p
        },
      })
      var n = r(6690),
        a = r(9008),
        o = r.n(a),
        i = r(1163),
        c = r(7059),
        s = r.n(c),
        l = function (t) {
          var e = t.title,
            r = t.description,
            a = t.ogType,
            c = t.ogImage,
            l = t.twImage,
            m = t.canonicalUrl,
            u = (0, i.useRouter)()
          return (0, n.BX)(o(), {
            children: [
              (0, n.tZ)('title', { children: e }),
              (0, n.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, n.tZ)('meta', { name: 'description', content: r }),
              (0, n.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(s().siteUrl).concat(u.asPath),
              }),
              (0, n.tZ)('meta', { property: 'og:type', content: a }),
              (0, n.tZ)('meta', { property: 'og:site_name', content: s().title }),
              (0, n.tZ)('meta', { property: 'og:description', content: r }),
              (0, n.tZ)('meta', { property: 'og:title', content: e }),
              Array.isArray(c)
                ? c.map(function (t) {
                    var e = t.url
                    return (0, n.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, n.tZ)('meta', { property: 'og:image', content: c }, c),
              (0, n.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, n.tZ)('meta', { name: 'twitter:site', content: s().twitter }),
              (0, n.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, n.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, n.tZ)('meta', { name: 'twitter:image', content: l }),
              (0, n.tZ)('link', {
                rel: 'canonical',
                href: m || ''.concat(s().siteUrl).concat(u.asPath),
              }),
            ],
          })
        },
        m = function (t) {
          var e = t.title,
            r = t.description,
            a = s().siteUrl + s().socialBanner,
            o = s().siteUrl + s().socialBanner
          return (0, n.tZ)(l, {
            title: e,
            description: r,
            ogType: 'website',
            ogImage: a,
            twImage: o,
          })
        },
        u = function (t) {
          var e = t.title,
            r = t.description,
            a = s().siteUrl + s().socialBanner,
            c = s().siteUrl + s().socialBanner,
            m = (0, i.useRouter)()
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, { title: e, description: r, ogType: 'website', ogImage: a, twImage: c }),
              (0, n.tZ)(o(), {
                children: (0, n.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(s().siteUrl).concat(m.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        p = function (t) {
          var e = t.authorDetails,
            r = t.title,
            a = t.summary,
            i = t.date,
            c = t.lastmod,
            m = t.url,
            u = t.images,
            p = void 0 === u ? [] : u,
            d = t.canonicalUrl,
            g = new Date(i).toISOString(),
            f = new Date(c || i).toISOString(),
            h = (0 === p.length ? [s().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(s().siteUrl).concat(t) }
              }
            ),
            y = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': m },
              headline: r,
              image: h,
              datePublished: g,
              dateModified: f,
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
            Z = h[0].url
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, {
                title: r,
                description: a,
                ogType: 'article',
                ogImage: h,
                twImage: Z,
                canonicalUrl: d,
              }),
              (0, n.BX)(o(), {
                children: [
                  i && (0, n.tZ)('meta', { property: 'article:published_time', content: g }),
                  c && (0, n.tZ)('meta', { property: 'article:modified_time', content: f }),
                  (0, n.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(y, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    5160: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return H
          },
          default: function () {
            return M
          },
        })
      var n = r(6690),
        a = r(7059),
        o = r.n(a),
        i = r(1476),
        c = r(6964),
        s = r(9756),
        l = r(2122),
        m = r(4780),
        u = r(6010),
        p = r(1720)
      r(9864)
      var d = p.createContext({}),
        g = r(7074),
        f = r(4135)
      var h = function (t, e) {
          return p.isValidElement(t) && -1 !== e.indexOf(t.type.muiName)
        },
        y = r(4867)
      function Z(t) {
        return (0, y.Z)('MuiImageListItem', t)
      }
      var v = (0, r(1588).Z)('MuiImageListItem', [
        'root',
        'img',
        'standard',
        'woven',
        'masonry',
        'quilted',
      ])
      const w = ['children', 'className', 'cols', 'component', 'rows', 'style'],
        b = (0, g.ZP)('li', {
          name: 'MuiImageListItem',
          slot: 'Root',
          overridesResolver: (t, e) => {
            const { ownerState: r } = t
            return [{ [`& .${v.img}`]: e.img }, e.root, e[r.variant]]
          },
        })(({ ownerState: t }) =>
          (0, l.Z)(
            { display: 'block', position: 'relative' },
            'standard' === t.variant && { display: 'flex', flexDirection: 'column' },
            'woven' === t.variant && {
              height: '100%',
              alignSelf: 'center',
              '&:nth-of-type(even)': { height: '70%' },
            },
            {
              [`& .${v.img}`]: (0, l.Z)(
                { objectFit: 'cover', width: '100%', height: '100%', display: 'block' },
                'standard' === t.variant && { height: 'auto', flexGrow: 1 }
              ),
            }
          )
        )
      var S = p.forwardRef(function (t, e) {
          const r = (0, f.Z)({ props: t, name: 'MuiImageListItem' }),
            {
              children: a,
              className: o,
              cols: i = 1,
              component: c = 'li',
              rows: g = 1,
              style: y,
            } = r,
            v = (0, s.Z)(r, w),
            { rowHeight: S = 'auto', gap: x, variant: _ } = p.useContext(d)
          let N = 'auto'
          'woven' === _ ? (N = void 0) : 'auto' !== S && (N = S * g + x * (g - 1))
          const I = (0, l.Z)({}, r, {
              cols: i,
              component: c,
              gap: x,
              rowHeight: S,
              rows: g,
              variant: _,
            }),
            P = ((t) => {
              const { classes: e, variant: r } = t,
                n = { root: ['root', r], img: ['img'] }
              return (0, m.Z)(n, Z, e)
            })(I)
          return (0,
          n.tZ)(b, (0, l.Z)({ as: c, className: (0, u.Z)(P.root, P[_], o), ref: e, style: (0, l.Z)({ height: N, gridColumnEnd: 'masonry' !== _ ? `span ${i}` : void 0, gridRowEnd: 'masonry' !== _ ? `span ${g}` : void 0, marginBottom: 'masonry' === _ ? x : void 0 }, y), ownerState: I }, v, { children: p.Children.map(a, (t) => (p.isValidElement(t) ? ('img' === t.type || h(t, ['Image']) ? p.cloneElement(t, { className: (0, u.Z)(P.img, t.props.className) }) : t) : null)) }))
        }),
        x = r(2962),
        _ = r(6523),
        N = r(9707),
        I = r(1938)
      const P = ['className', 'component']
      var B = r(7078)
      const U = (function (t = {}) {
        const {
            defaultTheme: e,
            defaultClassName: r = 'MuiBox-root',
            generateClassName: a,
            styleFunctionSx: o = _.Z,
          } = t,
          i = (0, x.ZP)('div', {
            shouldForwardProp: (t) => 'theme' !== t && 'sx' !== t && 'as' !== t,
          })(o)
        return p.forwardRef(function (t, o) {
          const c = (0, I.Z)(e),
            m = (0, N.Z)(t),
            { className: p, component: d = 'div' } = m,
            g = (0, s.Z)(m, P)
          return (0,
          n.tZ)(i, (0, l.Z)({ as: d, ref: o, className: (0, u.Z)(p, a ? a(r) : r), theme: c }, g))
        })
      })({
        defaultTheme: (0, r(9762).Z)(),
        defaultClassName: 'MuiBox-root',
        generateClassName: B.Z.generate,
      })
      var T = U,
        C = r(5675),
        E = r.n(C),
        k = r(1664),
        O = r.n(k)
      function $(t) {
        var e = t.posts.map(function (t) {
          var e = t.originalHeight / (t.originalWidth / 248)
          return (0,
          n.tZ)(O(), { href: '/blog/'.concat(t.slug), passHref: !0, children: (0, n.tZ)(S, { component: 'a', children: (0, n.tZ)(E(), { layout: 'responsive', width: 248, height: e, src: t.image, alt: t.title }) }) }, t.title)
        })
        return (0, n.tZ)(T, {
          sx: (0, c.Z)(
            {
              height: 450,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
            },
            '& .'.concat(v.root),
            { display: 'flex', flexDirection: 'column' }
          ),
          children: e,
        })
      }
      var H = !0
      function M(t) {
        var e = t.photographyPosts
        return (0, n.tZ)(n.HY, {
          children: (0, n.BX)('div', {
            className: 'divide-y',
            children: [
              (0, n.tZ)('div', {
                className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                children: (0, n.tZ)('h1', {
                  className:
                    'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                  children: 'Photography',
                }),
              }),
              (0, n.tZ)(i.TQ, {
                title: 'Projects - '.concat(o().author),
                description: o().description,
              }),
              (0, n.tZ)($, { posts: e }),
            ],
          }),
        })
      }
    },
    9921: function (t, e) {
      'use strict'
      var r,
        n = Symbol.for('react.element'),
        a = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        c = Symbol.for('react.profiler'),
        s = Symbol.for('react.provider'),
        l = Symbol.for('react.context'),
        m = Symbol.for('react.server_context'),
        u = Symbol.for('react.forward_ref'),
        p = Symbol.for('react.suspense'),
        d = Symbol.for('react.suspense_list'),
        g = Symbol.for('react.memo'),
        f = Symbol.for('react.lazy'),
        h = Symbol.for('react.offscreen')
      function y(t) {
        if ('object' === typeof t && null !== t) {
          var e = t.$$typeof
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case o:
                case c:
                case i:
                case p:
                case d:
                  return t
                default:
                  switch ((t = t && t.$$typeof)) {
                    case m:
                    case l:
                    case u:
                    case f:
                    case g:
                    case s:
                      return t
                    default:
                      return e
                  }
              }
            case a:
              return e
          }
        }
      }
      r = Symbol.for('react.module.reference')
    },
    9864: function (t, e, r) {
      'use strict'
      r(9921)
    },
  },
  function (t) {
    t.O(0, [842, 675, 888, 774, 179], function () {
      return (e = 3290), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
