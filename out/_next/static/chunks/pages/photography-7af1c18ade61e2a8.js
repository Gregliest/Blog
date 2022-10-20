;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1953: function (t, e, r) {
      'use strict'
      r.d(e, {
        Z: function () {
          return g
        },
      })
      var n = r(2122),
        a = r(9756),
        o = r(1720),
        i = r(6010),
        c = r(2962),
        s = r(6523),
        l = r(9707),
        m = r(1938),
        u = r(6690)
      const p = ['className', 'component']
      var d = r(7078)
      const f = (function (t = {}) {
        const {
            defaultTheme: e,
            defaultClassName: r = 'MuiBox-root',
            generateClassName: d,
            styleFunctionSx: f = s.Z,
          } = t,
          g = (0, c.ZP)('div', {
            shouldForwardProp: (t) => 'theme' !== t && 'sx' !== t && 'as' !== t,
          })(f)
        return o.forwardRef(function (t, o) {
          const c = (0, m.Z)(e),
            s = (0, l.Z)(t),
            { className: f, component: y = 'div' } = s,
            h = (0, a.Z)(s, p)
          return (0,
          u.tZ)(g, (0, n.Z)({ as: y, ref: o, className: (0, i.Z)(f, d ? d(r) : r), theme: c }, h))
        })
      })({
        defaultTheme: (0, r(9762).Z)(),
        defaultClassName: 'MuiBox-root',
        generateClassName: d.Z.generate,
      })
      var g = f
    },
    3290: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/photography',
        function () {
          return r(132)
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
            f = new Date(i).toISOString(),
            g = new Date(c || i).toISOString(),
            y = (0 === p.length ? [s().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(s().siteUrl).concat(t) }
              }
            ),
            h = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': m },
              headline: r,
              image: y,
              datePublished: f,
              dateModified: g,
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
            Z = y[0].url
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, {
                title: r,
                description: a,
                ogType: 'article',
                ogImage: y,
                twImage: Z,
                canonicalUrl: d,
              }),
              (0, n.BX)(o(), {
                children: [
                  i && (0, n.tZ)('meta', { property: 'article:published_time', content: f }),
                  c && (0, n.tZ)('meta', { property: 'article:modified_time', content: g }),
                  (0, n.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(h, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    132: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return U
          },
          default: function () {
            return T
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
        f = r(7074),
        g = r(4135)
      var y = function (t, e) {
          return p.isValidElement(t) && -1 !== e.indexOf(t.type.muiName)
        },
        h = r(4867)
      function Z(t) {
        return (0, h.Z)('MuiImageListItem', t)
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
        b = (0, f.ZP)('li', {
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
          const r = (0, g.Z)({ props: t, name: 'MuiImageListItem' }),
            {
              children: a,
              className: o,
              cols: i = 1,
              component: c = 'li',
              rows: f = 1,
              style: h,
            } = r,
            v = (0, s.Z)(r, w),
            { rowHeight: S = 'auto', gap: x, variant: _ } = p.useContext(d)
          let N = 'auto'
          'woven' === _ ? (N = void 0) : 'auto' !== S && (N = S * f + x * (f - 1))
          const I = (0, l.Z)({}, r, {
              cols: i,
              component: c,
              gap: x,
              rowHeight: S,
              rows: f,
              variant: _,
            }),
            P = ((t) => {
              const { classes: e, variant: r } = t,
                n = { root: ['root', r], img: ['img'] }
              return (0, m.Z)(n, Z, e)
            })(I)
          return (0,
          n.tZ)(b, (0, l.Z)({ as: c, className: (0, u.Z)(P.root, P[_], o), ref: e, style: (0, l.Z)({ height: N, gridColumnEnd: 'masonry' !== _ ? `span ${i}` : void 0, gridRowEnd: 'masonry' !== _ ? `span ${f}` : void 0, marginBottom: 'masonry' === _ ? x : void 0 }, h), ownerState: I }, v, { children: p.Children.map(a, (t) => (p.isValidElement(t) ? ('img' === t.type || y(t, ['Image']) ? p.cloneElement(t, { className: (0, u.Z)(P.img, t.props.className) }) : t) : null)) }))
        }),
        x = r(1953),
        _ = r(5675),
        N = r.n(_),
        I = r(1664),
        P = r.n(I)
      function B(t) {
        var e = t.posts.map(function (t) {
          var e = t.originalHeight / (t.originalWidth / 248)
          return (0,
          n.tZ)(P(), { href: '/blog/'.concat(t.slug), passHref: !0, children: (0, n.tZ)(S, { component: 'a', children: (0, n.tZ)(N(), { layout: 'responsive', width: 248, height: e, src: t.image, alt: t.title }) }) }, t.title)
        })
        return (0, n.tZ)(x.Z, {
          sx: (0, c.Z)(
            {
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
      var U = !0
      function T(t) {
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
              (0, n.tZ)(B, { posts: e }),
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
        f = Symbol.for('react.memo'),
        g = Symbol.for('react.lazy'),
        y = Symbol.for('react.offscreen')
      function h(t) {
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
                    case g:
                    case f:
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
