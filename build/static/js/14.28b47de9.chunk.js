;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [14],
  {
    586: function (e, n, t) {
      'use strict'
      t.r(n)
      var c = t(52),
        r = t(17),
        a = t(137),
        s = t(32),
        i = t(0),
        o = t(148),
        l = t.n(o),
        j = t(228),
        u = t(7),
        h = t(147),
        m = t(1)
      n.default = function () {
        var e = Object(h.b)(),
          n = e.error,
          t = e.warn,
          o = (e.info, e.success),
          d = Object(i.useRef)(null),
          b = Object(i.useState)({
            name: '',
            description: '',
            category: '',
            sizes: [],
            images: [],
            price: '',
            originalPrice: ''
          }),
          p = Object(s.a)(b, 2),
          x = p[0],
          O = p[1],
          f = Object(i.useState)([{ name: '', numberInStock: '' }]),
          g = Object(s.a)(f, 2),
          v = g[0],
          k = g[1],
          C = Object(i.useState)([]),
          F = Object(s.a)(C, 2),
          w = F[0],
          N = F[1],
          y = Object(i.useState)('0'),
          I = Object(s.a)(y, 2),
          S = I[0],
          z = I[1],
          _ = Object(i.useState)([]),
          T = Object(s.a)(_, 2),
          D = T[0],
          V = T[1]
        Object(i.useEffect)(
          function () {
            Object(j.c)().then(function (e) {
              V(e.data.data)
            })
          },
          [S]
        )
        var E = function (e) {
            return O(Object(r.a)(Object(r.a)({}, x), {}, Object(c.a)({}, e.target.name, e.target.value)))
          },
          L = function (e, n) {
            var t = e.target,
              c = t.name,
              r = t.value,
              s = Object(a.a)(v)
            ;(s[n][c] = r), k(s), (x.sizes = v)
          },
          P = function () {
            '' == v[v.length - 1].name || '' == v[v.length - 1].name
              ? t(
                  'Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ee7 th\xf4ng tin v\u1ec1 k\xedch th\u01b0\u1edbc tr\u01b0\u1edbc khi th\xeam m\u1edbi'
                )
              : k([].concat(Object(a.a)(v), [{ name: '', numberInStock: '' }]))
          }
        return Object(m.jsxs)('div', {
          children: [
            Object(m.jsx)('div', {
              className: 'mb-3',
              children: Object(m.jsxs)(u.w, {
                'aria-label': 'Default select example',
                onChange: function (e) {
                  return z(e.target.value)
                },
                children: [
                  Object(m.jsx)('option', { value: '0', children: 'Ch\u1ecdn shop' }),
                  D.map(function (e) {
                    return Object(m.jsx)('option', { value: e._id, children: e.name }, e._id)
                  })
                ]
              })
            }),
            Object(m.jsxs)(u.t, {
              className: 'row g-3',
              children: [
                Object(m.jsxs)('div', {
                  className: 'mb-3',
                  children: [
                    Object(m.jsx)(u.v, { htmlFor: 'exampleFormControlInput1', children: 'T\xean s\u1ea3n ph\u1ea9m' }),
                    Object(m.jsx)(u.u, {
                      type: 'text',
                      id: 'exampleFormControlInput1',
                      name: 'name',
                      placeholder: 'Nh\u1eadp t\xean s\u1ea3n ph\u1ea9m',
                      onChange: function (e) {
                        return E(e)
                      }
                    })
                  ]
                }),
                Object(m.jsxs)('div', {
                  className: 'mb-3',
                  children: [
                    Object(m.jsx)(u.v, {
                      htmlFor: 'exampleFormControlInput1',
                      children: 'Lo\u1ea1i s\u1ea3n ph\u1ea9m'
                    }),
                    Object(m.jsx)(u.u, {
                      type: 'text',
                      id: 'exampleFormControlInput1',
                      name: 'category',
                      placeholder:
                        'Nh\u1eadp lo\u1ea1i m\u1eb7t h\xe0ng m\xe0 b\u1ea1n mu\u1ed1n \u0111\u1ec1 xu\u1ea5t',
                      onChange: function (e) {
                        return E(e)
                      },
                      value: x.category
                    })
                  ]
                }),
                Object(m.jsxs)('div', {
                  className: 'mb-3',
                  children: [
                    Object(m.jsx)(u.v, {
                      htmlFor: 'exampleFormControlTextarea1',
                      children: 'M\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m'
                    }),
                    Object(m.jsx)(u.x, {
                      id: 'exampleFormControlTextarea1',
                      rows: '3',
                      name: 'description',
                      onChange: function (e) {
                        return E(e)
                      },
                      value: x.description
                    })
                  ]
                }),
                Object(m.jsxs)(u.k, {
                  xs: 12,
                  children: [
                    Object(m.jsx)(u.v, { htmlFor: 'inputAddress', children: 'K\xedch th\u01b0\u1edbc' }),
                    v.map(function (e, n) {
                      return Object(m.jsxs)(
                        'div',
                        {
                          className: 'box',
                          id: 'inputSize',
                          children: [
                            Object(m.jsxs)(u.L, {
                              children: [
                                Object(m.jsx)(u.k, {
                                  xs: !0,
                                  children: Object(m.jsx)(u.u, {
                                    name: 'name',
                                    value: e.name,
                                    placeholder: 'Nh\u1eadp k\xedch th\u01b0\u1edbc',
                                    onChange: function (e) {
                                      return L(e, n)
                                    }
                                  })
                                }),
                                Object(m.jsx)(u.k, {
                                  xs: !0,
                                  children: Object(m.jsx)(u.u, {
                                    name: 'numberInStock',
                                    value: e.numberInStock,
                                    placeholder: 'Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng',
                                    onChange: function (e) {
                                      return L(e, n)
                                    }
                                  })
                                })
                              ]
                            }),
                            v.length - 1 === n &&
                              Object(m.jsx)(u.e, {
                                color: 'dark',
                                shape: 'rounded-pill',
                                onClick: P,
                                size: 'sm',
                                children: 'Th\xeam'
                              }),
                            1 !== v.length &&
                              Object(m.jsx)(u.e, {
                                color: 'dark',
                                shape: 'rounded-pill',
                                size: 'sm',
                                onClick: function () {
                                  return (function (e) {
                                    var n = Object(a.a)(v)
                                    n.splice(e, 1), k(n), x.sizes.splice(e, 1)
                                  })(n)
                                },
                                children: 'X\xf3a'
                              })
                          ]
                        },
                        n
                      )
                    })
                  ]
                }),
                Object(m.jsxs)(u.k, {
                  xs: 12,
                  children: [
                    Object(m.jsx)(u.u, {
                      type: 'file',
                      onChange: function (e) {
                        !(function (e) {
                          var n = new FormData()
                          n.append('file', e),
                            n.append('upload_preset', 'new_preset'),
                            l.a
                              .post('https://api.cloudinary.com/v1_1/accomerce/image/upload', n)
                              .then(function (e) {
                                N([].concat(Object(a.a)(w), [e.data.secure_url]))
                              })
                              .catch(function (e) {
                                return console.error(e)
                              })
                        })(e.target.files[0])
                      },
                      ref: d,
                      style: { display: 'none' }
                    }),
                    Object(m.jsx)(u.e, {
                      onClick: function () {
                        d.current.click()
                      },
                      color: 'secondary',
                      shape: 'rounded-pill',
                      children: 'Th\xeam \u1ea3nh'
                    })
                  ]
                }),
                Object(m.jsx)(u.k, {
                  xs: 12,
                  id: 'imageShow',
                  children:
                    w &&
                    w.map(function (e, n) {
                      return Object(m.jsx)(
                        u.D,
                        {
                          fluid: !0,
                          src: e,
                          width: 150,
                          onClick: function () {
                            return (function (e) {
                              var n = w.filter(function (n, t) {
                                return t !== e
                              })
                              N(n), console.log(n)
                            })(n)
                          }
                        },
                        n
                      )
                    })
                }),
                Object(m.jsx)('div', {
                  className: 'mb-3',
                  children: Object(m.jsxs)(u.L, {
                    children: [
                      Object(m.jsxs)(u.k, {
                        xs: !0,
                        children: [
                          Object(m.jsx)(u.v, { htmlFor: 'exampleFormControlInput1', children: 'Gi\xe1 b\xe1n' }),
                          Object(m.jsxs)(u.E, {
                            children: [
                              Object(m.jsx)(u.u, {
                                'aria-label': 'Amount (to the nearest dollar)',
                                name: 'price',
                                onChange: function (e) {
                                  return E(e)
                                },
                                value: x.price
                              }),
                              Object(m.jsx)(u.F, { children: 'VN\u0110' })
                            ]
                          })
                        ]
                      }),
                      Object(m.jsxs)(u.k, {
                        xs: !0,
                        children: [
                          Object(m.jsx)(u.v, { htmlFor: 'exampleFormControlInput1', children: 'Gi\xe1 g\u1ed1c' }),
                          Object(m.jsxs)(u.E, {
                            children: [
                              Object(m.jsx)(u.u, {
                                type: 'text',
                                id: 'exampleFormControlInput1',
                                name: 'originalPrice',
                                placeholder: 'Nh\u1eadp gi\xe1 g\u1ed1c s\u1ea3n ph\u1ea9m c\u1ee7a b\u1ea1n',
                                onChange: function (e) {
                                  return E(e)
                                },
                                value: x.originalPrice
                              }),
                              Object(m.jsx)(u.F, { children: 'VN\u0110' })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                }),
                Object(m.jsx)(u.k, {
                  xs: 12,
                  children: Object(m.jsx)(u.e, {
                    onClick: function (e) {
                      e.preventDefault(),
                        (x.images = w),
                        0 == S
                          ? t('Vui l\xf2ng ch\u1ecdn c\u1eeda h\xe0ng')
                          : Object(j.d)(S, x)
                              .then(function (e) {
                                1 == e.data.success
                                  ? (o(e.data.message), window.location.reload(!1))
                                  : n(e.data.message)
                              })
                              .catch(function (e) {
                                n(e.response.data.message)
                              })
                    },
                    type: 'submit',
                    color: 'primary',
                    children: '\u0110\u0103ng s\u1ea3n ph\u1ea9m'
                  })
                })
              ]
            })
          ]
        })
      }
    }
  }
])
//# sourceMappingURL=14.28b47de9.chunk.js.map
