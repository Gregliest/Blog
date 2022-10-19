;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [486],
  {
    9618: function (e, t, r) {
      var a = {
        './AuthorLayout': 8139,
        './AuthorLayout.tsx': 8139,
        './ListLayout': 951,
        './ListLayout.tsx': 951,
        './PostLayout': 5104,
        './PostLayout.tsx': 5104,
        './PostSimple': 8218,
        './PostSimple.tsx': 8218,
      }
      function n(e) {
        var t = i(e)
        return r(t)
      }
      function i(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return a[e]
      }
      ;(n.keys = function () {
        return Object.keys(a)
      }),
        (n.resolve = i),
        (e.exports = n),
        (n.id = 9618)
    },
    7753: function (e, t, r) {
      'use strict'
      var a = r(5542),
        n = r(18),
        i = r(6690),
        l = r(5675),
        c = r.n(l)
      t.Z = function (e) {
        var t = (0, a.Z)({}, e)
        return (0, i.tZ)(c(), (0, n.Z)({}, t))
      }
    },
    1486: function (e, t, r) {
      'use strict'
      r.d(t, {
        J: function () {
          return g
        },
      })
      var a = r(18),
        n = r(5138),
        i = r(6690),
        l = r(1720),
        c = r(5929)
      r(423)
      function o(e) {
        return (function (e, t) {
          var r = Object.assign({}, e)
          return (
            t.forEach(function (e) {
              delete r[e]
            }),
            r
          )
        })(e, ['body', '_raw', '_id'])
      }
      var d = r(7753),
        s = r(5741),
        u = function (e) {
          var t = e.toc,
            r = e.indentDepth,
            a = void 0 === r ? 3 : r,
            n = e.fromHeading,
            l = void 0 === n ? 1 : n,
            c = e.toHeading,
            o = void 0 === c ? 6 : c,
            d = e.asDisclosure,
            s = void 0 !== d && d,
            u = e.exclude,
            m = void 0 === u ? '' : u,
            h = Array.isArray(m)
              ? new RegExp('^(' + m.join('|') + ')$', 'i')
              : new RegExp('^(' + m + ')$', 'i'),
            p = t.filter(function (e) {
              return e.depth >= l && e.depth <= o && !h.test(e.value)
            }),
            g = (0, i.tZ)('ul', {
              children: p.map(function (e) {
                return (0,
                i.tZ)('li', { className: ''.concat(e.depth >= a && 'ml-6'), children: (0, i.tZ)('a', { href: e.url, children: e.value }) }, e.value)
              }),
            })
          return (0, i.tZ)(i.HY, {
            children: s
              ? (0, i.BX)('details', {
                  open: !0,
                  children: [
                    (0, i.tZ)('summary', {
                      className: 'ml-6 pt-2 pb-2 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, i.tZ)('div', { className: 'ml-6', children: g }),
                  ],
                })
              : g,
          })
        },
        m = function (e) {
          var t = e.children,
            r = (0, l.useRef)(null),
            a = (0, l.useState)(!1),
            n = a[0],
            c = a[1],
            o = (0, l.useState)(!1),
            d = o[0],
            s = o[1]
          return (0, i.BX)('div', {
            ref: r,
            onMouseEnter: function () {
              c(!0)
            },
            onMouseLeave: function () {
              c(!1), s(!1)
            },
            className: 'relative',
            children: [
              n &&
                (0, i.tZ)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className:
                    'absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 '.concat(
                      d
                        ? 'border-green-400 focus:border-green-400 focus:outline-none'
                        : 'border-gray-300'
                    ),
                  onClick: function () {
                    s(!0),
                      navigator.clipboard.writeText(r.current.textContent),
                      setTimeout(function () {
                        s(!1)
                      }, 2e3)
                  },
                  children: (0, i.tZ)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: d ? 'text-green-400' : 'text-gray-300',
                    children: d
                      ? (0, i.tZ)(i.HY, {
                          children: (0, i.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, i.tZ)(i.HY, {
                          children: (0, i.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, i.tZ)('pre', { children: t }),
            ],
          })
        },
        h = r(1862),
        p = {
          Image: d.Z,
          TOCInline: u,
          a: s.Z,
          pre: m,
          wrapper: function (e) {
            var t = e.layout,
              l = e.content,
              c = (0, n.Z)(e, ['layout', 'content']),
              o = r(9618)('./'.concat(t)).default
            return (0, i.tZ)(o, (0, a.Z)({ content: l }, c))
          },
          BlogNewsletterForm: h.w,
        },
        g = function (e) {
          var t = e.layout,
            r = e.content,
            l = (0, n.Z)(e, ['layout', 'content']),
            d = (0, c.z)(r.body.code),
            s = o(r)
          return (0, i.tZ)(d, (0, a.Z)({ layout: t, content: s, components: p }, l))
        }
    },
    1862: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return s
        },
      })
      var a = r(1098),
        n = r(655),
        i = r(6690),
        l = r(1720),
        c = r(7059),
        o = r.n(c),
        d = function (e) {
          var t = e.title,
            r = void 0 === t ? 'Subscribe to the newsletter' : t,
            c = (0, l.useRef)(null),
            d = (0, l.useState)(!1),
            s = d[0],
            u = d[1],
            m = (0, l.useState)(''),
            h = m[0],
            p = m[1],
            g = (0, l.useState)(!1),
            y = g[0],
            x = g[1],
            f = (function () {
              var e = (0, a.Z)(function (e) {
                return (0, n.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        e.preventDefault(),
                        [
                          4,
                          fetch('/api/'.concat(o().newsletter.provider), {
                            body: JSON.stringify({ email: c.current.value }),
                            headers: { 'Content-Type': 'application/json' },
                            method: 'POST',
                          }),
                        ]
                      )
                    case 1:
                      return [4, t.sent().json()]
                    case 2:
                      return t.sent().error
                        ? (u(!0),
                          p('Your e-mail address is invalid or you are already subscribed!'),
                          [2])
                        : ((c.current.value = ''),
                          u(!1),
                          x(!0),
                          p('Successfully! \ud83c\udf89 You are now subscribed.'),
                          [2])
                  }
                })
              })
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return (0, i.BX)('div', {
            children: [
              (0, i.tZ)('div', {
                className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
                children: r,
              }),
              (0, i.BX)('form', {
                className: 'flex flex-col sm:flex-row',
                onSubmit: f,
                children: [
                  (0, i.BX)('div', {
                    children: [
                      (0, i.tZ)('label', {
                        className: 'sr-only',
                        htmlFor: 'email-input',
                        children: 'Email address',
                      }),
                      (0, i.tZ)('input', {
                        autoComplete: 'email',
                        className:
                          'w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black',
                        id: 'email-input',
                        name: 'email',
                        placeholder: y ? "You're subscribed !  \ud83c\udf89" : 'Enter your email',
                        ref: c,
                        required: !0,
                        type: 'email',
                        disabled: y,
                      }),
                    ],
                  }),
                  (0, i.tZ)('div', {
                    className: 'mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3',
                    children: (0, i.tZ)('button', {
                      className:
                        'w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 '.concat(
                          y ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400',
                          ' focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black'
                        ),
                      type: 'submit',
                      disabled: y,
                      children: y ? 'Thank you!' : 'Sign up',
                    }),
                  }),
                ],
              }),
              s &&
                (0, i.tZ)('div', {
                  className: 'w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96',
                  children: h,
                }),
            ],
          })
        }
      t.Z = d
      var s = function (e) {
        var t = e.title
        return (0, i.tZ)('div', {
          className: 'flex items-center justify-center',
          children: (0, i.tZ)('div', {
            className: 'bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, i.tZ)(d, { title: t }),
          }),
        })
      }
    },
    5941: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return n
        },
      })
      var a = r(6690)
      function n(e) {
        var t = e.children
        return (0, a.tZ)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: t,
        })
      }
    },
    1476: function (e, t, r) {
      'use strict'
      r.d(t, {
        $t: function () {
          return u
        },
        TQ: function () {
          return s
        },
        Uy: function () {
          return m
        },
      })
      var a = r(6690),
        n = r(9008),
        i = r.n(n),
        l = r(1163),
        c = r(7059),
        o = r.n(c),
        d = function (e) {
          var t = e.title,
            r = e.description,
            n = e.ogType,
            c = e.ogImage,
            d = e.twImage,
            s = e.canonicalUrl,
            u = (0, l.useRouter)()
          return (0, a.BX)(i(), {
            children: [
              (0, a.tZ)('title', { children: t }),
              (0, a.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, a.tZ)('meta', { name: 'description', content: r }),
              (0, a.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(o().siteUrl).concat(u.asPath),
              }),
              (0, a.tZ)('meta', { property: 'og:type', content: n }),
              (0, a.tZ)('meta', { property: 'og:site_name', content: o().title }),
              (0, a.tZ)('meta', { property: 'og:description', content: r }),
              (0, a.tZ)('meta', { property: 'og:title', content: t }),
              Array.isArray(c)
                ? c.map(function (e) {
                    var t = e.url
                    return (0, a.tZ)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, a.tZ)('meta', { property: 'og:image', content: c }, c),
              (0, a.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, a.tZ)('meta', { name: 'twitter:site', content: o().twitter }),
              (0, a.tZ)('meta', { name: 'twitter:title', content: t }),
              (0, a.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, a.tZ)('meta', { name: 'twitter:image', content: d }),
              (0, a.tZ)('link', {
                rel: 'canonical',
                href: s || ''.concat(o().siteUrl).concat(u.asPath),
              }),
            ],
          })
        },
        s = function (e) {
          var t = e.title,
            r = e.description,
            n = o().siteUrl + o().socialBanner,
            i = o().siteUrl + o().socialBanner
          return (0, a.tZ)(d, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: n,
            twImage: i,
          })
        },
        u = function (e) {
          var t = e.title,
            r = e.description,
            n = o().siteUrl + o().socialBanner,
            c = o().siteUrl + o().socialBanner,
            s = (0, l.useRouter)()
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)(d, { title: t, description: r, ogType: 'website', ogImage: n, twImage: c }),
              (0, a.tZ)(i(), {
                children: (0, a.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(o().siteUrl).concat(s.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        m = function (e) {
          var t = e.authorDetails,
            r = e.title,
            n = e.summary,
            l = e.date,
            c = e.lastmod,
            s = e.url,
            u = e.images,
            m = void 0 === u ? [] : u,
            h = e.canonicalUrl,
            p = new Date(l).toISOString(),
            g = new Date(c || l).toISOString(),
            y = (0 === m.length ? [o().socialBanner] : 'string' === typeof m ? [m] : m).map(
              function (e) {
                return { '@type': 'ImageObject', url: ''.concat(o().siteUrl).concat(e) }
              }
            ),
            x = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': s },
              headline: r,
              image: y,
              datePublished: p,
              dateModified: g,
              author: t
                ? t.map(function (e) {
                    return { '@type': 'Person', name: e.name }
                  })
                : { '@type': 'Person', name: o().author },
              publisher: {
                '@type': 'Organization',
                name: o().author,
                logo: { '@type': 'ImageObject', url: ''.concat(o().siteUrl).concat(o().siteLogo) },
              },
              description: n,
            },
            f = y[0].url
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)(d, {
                title: r,
                description: n,
                ogType: 'article',
                ogImage: y,
                twImage: f,
                canonicalUrl: h,
              }),
              (0, a.BX)(i(), {
                children: [
                  l && (0, a.tZ)('meta', { property: 'article:published_time', content: p }),
                  c && (0, a.tZ)('meta', { property: 'article:modified_time', content: g }),
                  (0, a.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(x, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    1580: function (e, t, r) {
      'use strict'
      var a = r(6690),
        n = r(1720)
      t.Z = function () {
        var e = (0, n.useState)(!1),
          t = e[0],
          r = e[1]
        ;(0, n.useEffect)(function () {
          var e = function () {
            window.scrollY > 50 ? r(!0) : r(!1)
          }
          return (
            window.addEventListener('scroll', e),
            function () {
              return window.removeEventListener('scroll', e)
            }
          )
        }, [])
        return (0, a.BX)('div', {
          className: 'fixed right-8 bottom-8 hidden flex-col gap-3 '.concat(
            t ? 'md:flex' : 'md:hidden'
          ),
          children: [
            (0, a.tZ)('button', {
              'aria-label': 'Scroll To Comment',
              type: 'button',
              onClick: function () {
                document.getElementById('comment').scrollIntoView()
              },
              className:
                'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
              children: (0, a.tZ)('svg', {
                className: 'h-5 w-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, a.tZ)('path', {
                  fillRule: 'evenodd',
                  d: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
            (0, a.tZ)('button', {
              'aria-label': 'Scroll To Top',
              type: 'button',
              onClick: function () {
                window.scrollTo({ top: 0 })
              },
              className:
                'rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
              children: (0, a.tZ)('svg', {
                className: 'h-5 w-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, a.tZ)('path', {
                  fillRule: 'evenodd',
                  d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
          ],
        })
      }
    },
    5437: function (e, t, r) {
      'use strict'
      var a = r(6690),
        n = r(1664),
        i = r.n(n),
        l = r(423)
      t.Z = function (e) {
        var t = e.text
        return (0, a.tZ)(i(), {
          href: '/tags/'.concat((0, l.Z)(t)),
          children: (0, a.tZ)('a', {
            className:
              'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
            children: t.split(' ').join('-'),
          }),
        })
      }
    },
    3044: function (e, t, r) {
      'use strict'
      var a = r(6690),
        n = r(7059),
        i = r.n(n),
        l = r(5152),
        c = r.n(l),
        o = c()(
          function () {
            return r.e(147).then(r.bind(r, 6147))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6147]
              },
            },
            ssr: !1,
          }
        ),
        d = c()(
          function () {
            return r.e(414).then(r.bind(r, 6414))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6414]
              },
            },
            ssr: !1,
          }
        ),
        s = c()(
          function () {
            return r.e(939).then(r.bind(r, 9939))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9939]
              },
            },
            ssr: !1,
          }
        )
      t.Z = function (e) {
        var t = e.frontMatter,
          r = null === i() || void 0 === i() ? void 0 : i().comment
        return r && 0 !== Object.keys(r).length
          ? (0, a.BX)('div', {
              id: 'comment',
              children: [
                i().comment && 'giscus' === i().comment.provider && (0, a.tZ)(d, {}),
                i().comment && 'utterances' === i().comment.provider && (0, a.tZ)(o, {}),
                i().comment &&
                  'disqus' === i().comment.provider &&
                  (0, a.tZ)(s, { frontMatter: t }),
              ],
            })
          : (0, a.tZ)(a.HY, {})
      }
    },
    8139: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return c
          },
        })
      var a = r(6690),
        n = r(6515),
        i = r(7753),
        l = r(1476)
      function c(e) {
        var t = e.children,
          r = e.content,
          c = r.name,
          o = r.avatar,
          d = r.occupation,
          s = r.company,
          u = r.email,
          m = r.twitter,
          h = r.linkedin,
          p = r.github
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.tZ)(l.TQ, { title: 'About - '.concat(c), description: 'About me - '.concat(c) }),
            (0, a.BX)('div', {
              className: 'divide-y',
              children: [
                (0, a.tZ)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: (0, a.tZ)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'About',
                  }),
                }),
                (0, a.BX)('div', {
                  className: 'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                  children: [
                    (0, a.BX)('div', {
                      className: 'flex flex-col items-center pt-8',
                      children: [
                        (0, a.tZ)(i.Z, {
                          src: o,
                          alt: 'avatar',
                          width: '192px',
                          height: '192px',
                          className: 'h-48 w-48 rounded-full',
                        }),
                        (0, a.tZ)('h3', {
                          className: 'pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight',
                          children: c,
                        }),
                        (0, a.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: d,
                        }),
                        (0, a.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: s,
                        }),
                        (0, a.BX)('div', {
                          className: 'flex space-x-3 pt-6',
                          children: [
                            (0, a.tZ)(n.Z, { kind: 'mail', href: 'mailto:'.concat(u) }),
                            (0, a.tZ)(n.Z, { kind: 'github', href: p }),
                            (0, a.tZ)(n.Z, { kind: 'linkedin', href: h }),
                            (0, a.tZ)(n.Z, { kind: 'twitter', href: m }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.tZ)('div', {
                      className: 'prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2',
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    951: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return d
          },
        })
      var a = r(6690),
        n = r(5741),
        i = r(5437),
        l = r(1720)
      function c(e) {
        var t = e.totalPages,
          r = e.currentPage,
          i = r - 1 > 0,
          l = r + 1 <= t
        return (0, a.tZ)('div', {
          className: 'space-y-2 pt-6 pb-8 md:space-y-5',
          children: (0, a.BX)('nav', {
            className: 'flex justify-between',
            children: [
              !i &&
                (0, a.tZ)('button', {
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !i,
                  children: 'Previous',
                }),
              i &&
                (0, a.tZ)(n.Z, {
                  href: r - 1 === 1 ? '/blog/' : '/blog/page/'.concat(r - 1),
                  children: (0, a.tZ)('button', { children: 'Previous' }),
                }),
              (0, a.BX)('span', { children: [r, ' of ', t] }),
              !l &&
                (0, a.tZ)('button', {
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !l,
                  children: 'Next',
                }),
              l &&
                (0, a.tZ)(n.Z, {
                  href: '/blog/page/'.concat(r + 1),
                  children: (0, a.tZ)('button', { children: 'Next' }),
                }),
            ],
          }),
        })
      }
      var o = r(2497)
      function d(e) {
        var t = e.posts,
          r = e.title,
          d = e.initialDisplayPosts,
          s = void 0 === d ? [] : d,
          u = e.pagination,
          m = (0, l.useState)(''),
          h = m[0],
          p = m[1],
          g = t.filter(function (e) {
            return (e.title + e.summary + e.tags.join(' ')).toLowerCase().includes(h.toLowerCase())
          }),
          y = s.length > 0 && !h ? s : g
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.BX)('div', {
              className: 'divide-y',
              children: [
                (0, a.BX)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, a.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: r,
                    }),
                    (0, a.BX)('div', {
                      className: 'relative max-w-lg',
                      children: [
                        (0, a.tZ)('input', {
                          'aria-label': 'Search articles',
                          type: 'text',
                          onChange: function (e) {
                            return p(e.target.value)
                          },
                          placeholder: 'Search articles',
                          className:
                            'block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
                        }),
                        (0, a.tZ)('svg', {
                          className:
                            'absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300',
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          stroke: 'currentColor',
                          children: (0, a.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.BX)('ul', {
                  children: [
                    !g.length && 'No posts found.',
                    y.map(function (e) {
                      var t = e.slug,
                        r = e.date,
                        l = e.title,
                        c = e.summary,
                        d = e.tags
                      return (0, a.tZ)(
                        'li',
                        {
                          className: 'py-4',
                          children: (0, a.BX)('article', {
                            className:
                              'space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0',
                            children: [
                              (0, a.BX)('dl', {
                                children: [
                                  (0, a.tZ)('dt', {
                                    className: 'sr-only',
                                    children: 'Published on',
                                  }),
                                  (0, a.tZ)('dd', {
                                    className:
                                      'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                    children: (0, a.tZ)('time', {
                                      dateTime: r,
                                      children: (0, o.Z)(r),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.BX)('div', {
                                className: 'space-y-3 xl:col-span-3',
                                children: [
                                  (0, a.BX)('div', {
                                    children: [
                                      (0, a.tZ)('h3', {
                                        className: 'text-2xl font-bold leading-8 tracking-tight',
                                        children: (0, a.tZ)(n.Z, {
                                          href: '/blog/'.concat(t),
                                          className: 'text-gray-900 dark:text-gray-100',
                                          children: l,
                                        }),
                                      }),
                                      (0, a.tZ)('div', {
                                        className: 'flex flex-wrap',
                                        children: d.map(function (e) {
                                          return (0, a.tZ)(i.Z, { text: e }, e)
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.tZ)('div', {
                                    className: 'prose max-w-none text-gray-500 dark:text-gray-400',
                                    children: c,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    }),
                  ],
                }),
              ],
            }),
            u &&
              u.totalPages > 1 &&
              !h &&
              (0, a.tZ)(c, { currentPage: u.currentPage, totalPages: u.totalPages }),
          ],
        })
      }
    },
    5104: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return f
          },
        })
      var a = r(18),
        n = r(6690),
        i = r(5741),
        l = r(5941),
        c = r(3653),
        o = r(1476),
        d = r(7753),
        s = r(5437),
        u = r(7059),
        m = r.n(u),
        h = r(3044),
        p = r(1580),
        g = function (e) {
          return ''.concat(m().siteRepo, '/blob/master/data/blog/').concat(e)
        },
        y = function (e) {
          return 'https://mobile.twitter.com/search?q='.concat(
            encodeURIComponent(''.concat(m().siteUrl, '/blog/').concat(e))
          )
        },
        x = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function f(e) {
        var t = e.content,
          r = e.authorDetails,
          u = e.next,
          f = e.prev,
          v = e.children,
          Z = t.slug,
          b = t.date,
          w = t.title,
          N = t.tags
        return (0, n.BX)(c.Z, {
          children: [
            (0, n.tZ)(
              o.Uy,
              (0, a.Z)({ url: ''.concat(m().siteUrl, '/blog/').concat(Z), authorDetails: r }, t)
            ),
            (0, n.tZ)(p.Z, {}),
            (0, n.tZ)('article', {
              children: (0, n.BX)('div', {
                className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                children: [
                  (0, n.tZ)('header', {
                    className: 'pt-6 xl:pb-6',
                    children: (0, n.BX)('div', {
                      className: 'space-y-1 text-center',
                      children: [
                        (0, n.tZ)('dl', {
                          className: 'space-y-10',
                          children: (0, n.BX)('div', {
                            children: [
                              (0, n.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, n.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, n.tZ)('time', {
                                  dateTime: b,
                                  children: new Date(b).toLocaleDateString(m().locale, x),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)('div', { children: (0, n.tZ)(l.Z, { children: w }) }),
                      ],
                    }),
                  }),
                  (0, n.BX)('div', {
                    className:
                      'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, n.BX)('dl', {
                        className:
                          'pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700',
                        children: [
                          (0, n.tZ)('dt', { className: 'sr-only', children: 'Authors' }),
                          (0, n.tZ)('dd', {
                            children: (0, n.tZ)('ul', {
                              className:
                                'flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8',
                              children: r.map(function (e) {
                                return (0,
                                n.BX)('li', { className: 'flex items-center space-x-2', children: [e.avatar && (0, n.tZ)(d.Z, { src: e.avatar, width: '38px', height: '38px', alt: 'avatar', className: 'h-10 w-10 rounded-full' }), (0, n.BX)('dl', { className: 'whitespace-nowrap text-sm font-medium leading-5', children: [(0, n.tZ)('dt', { className: 'sr-only', children: 'Name' }), (0, n.tZ)('dd', { className: 'text-gray-900 dark:text-gray-100', children: e.name }), (0, n.tZ)('dt', { className: 'sr-only', children: 'Twitter' }), (0, n.tZ)('dd', { children: e.twitter && (0, n.tZ)(i.Z, { href: e.twitter, className: 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400', children: e.twitter.replace('https://twitter.com/', '@') }) })] })] }, e.name)
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, n.BX)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: [
                          (0, n.tZ)('div', {
                            className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                            children: v,
                          }),
                          (0, n.BX)('div', {
                            className: 'pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300',
                            children: [
                              (0, n.tZ)(i.Z, {
                                href: y(Z),
                                rel: 'nofollow',
                                children: 'Discuss on Twitter',
                              }),
                              ' \u2022 ',
                              (0, n.tZ)(i.Z, { href: g(Z), children: 'View on GitHub' }),
                            ],
                          }),
                          (0, n.tZ)(h.Z, { frontMatter: t }),
                        ],
                      }),
                      (0, n.BX)('footer', {
                        children: [
                          (0, n.BX)('div', {
                            className:
                              'divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y',
                            children: [
                              N &&
                                (0, n.BX)('div', {
                                  className: 'py-4 xl:py-8',
                                  children: [
                                    (0, n.tZ)('h2', {
                                      className:
                                        'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                      children: 'Tags',
                                    }),
                                    (0, n.tZ)('div', {
                                      className: 'flex flex-wrap',
                                      children: N.map(function (e) {
                                        return (0, n.tZ)(s.Z, { text: e }, e)
                                      }),
                                    }),
                                  ],
                                }),
                              (u || f) &&
                                (0, n.BX)('div', {
                                  className:
                                    'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                  children: [
                                    f &&
                                      (0, n.BX)('div', {
                                        children: [
                                          (0, n.tZ)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Previous Article',
                                          }),
                                          (0, n.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, n.tZ)(i.Z, {
                                              href: '/blog/'.concat(f.slug),
                                              children: f.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                    u &&
                                      (0, n.BX)('div', {
                                        children: [
                                          (0, n.tZ)('h2', {
                                            className:
                                              'text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                            children: 'Next Article',
                                          }),
                                          (0, n.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, n.tZ)(i.Z, {
                                              href: '/blog/'.concat(u.slug),
                                              children: u.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, n.tZ)('div', {
                            className: 'pt-4 xl:pt-8',
                            children: (0, n.tZ)(i.Z, {
                              href: '/blog',
                              className:
                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                              children: '\u2190 Back to the blog',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    8218: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return p
          },
        })
      var a = r(18),
        n = r(6690),
        i = r(5741),
        l = r(5941),
        c = r(3653),
        o = r(1476),
        d = r(7059),
        s = r.n(d),
        u = r(2497),
        m = r(3044),
        h = r(1580)
      function p(e) {
        var t = e.content,
          r = e.next,
          d = e.prev,
          p = e.children,
          g = t.slug,
          y = t.date,
          x = t.title
        return (0, n.BX)(c.Z, {
          children: [
            (0, n.tZ)(o.Uy, (0, a.Z)({ url: ''.concat(s().siteUrl, '/blog/').concat(g) }, t)),
            (0, n.tZ)(h.Z, {}),
            (0, n.tZ)('article', {
              children: (0, n.BX)('div', {
                children: [
                  (0, n.tZ)('header', {
                    children: (0, n.BX)('div', {
                      className:
                        'space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700',
                      children: [
                        (0, n.tZ)('dl', {
                          children: (0, n.BX)('div', {
                            children: [
                              (0, n.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, n.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, n.tZ)('time', { dateTime: y, children: (0, u.Z)(y) }),
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)('div', { children: (0, n.tZ)(l.Z, { children: x }) }),
                      ],
                    }),
                  }),
                  (0, n.BX)('div', {
                    className: 'divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, n.tZ)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0',
                        children: (0, n.tZ)('div', {
                          className: 'prose max-w-none pt-10 pb-8 dark:prose-dark',
                          children: p,
                        }),
                      }),
                      (0, n.tZ)(m.Z, { frontMatter: t }),
                      (0, n.tZ)('footer', {
                        children: (0, n.BX)('div', {
                          className:
                            'flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base',
                          children: [
                            d &&
                              (0, n.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, n.BX)(i.Z, {
                                  href: '/blog/'.concat(d.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: ['\u2190 ', d.title],
                                }),
                              }),
                            r &&
                              (0, n.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, n.BX)(i.Z, {
                                  href: '/blog/'.concat(r.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: [r.title, ' \u2192'],
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    2497: function (e, t, r) {
      'use strict'
      var a = r(7059),
        n = r.n(a)
      t.Z = function (e) {
        return new Date(e).toLocaleDateString(n().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    423: function (e, t, r) {
      'use strict'
      var a = r(7478)
      t.Z = function (e) {
        return (0, a.slug)(e)
      }
    },
  },
])
