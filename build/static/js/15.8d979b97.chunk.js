;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [15],
  {
    590: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n(52),
        c = n(17),
        r = n(32),
        s = n(0),
        o = n(228),
        l = n(7),
        i = n(147),
        m = n(1)
      t.default = function () {
        var e = Object(s.useState)({ name: '', email: '', address: '' }),
          t = Object(r.a)(e, 2),
          n = t[0],
          j = t[1],
          u = Object(i.b)(),
          b = u.error,
          d = (u.warn, u.info, u.success),
          h = function (e) {
            return j(Object(c.a)(Object(c.a)({}, n), {}, Object(a.a)({}, e.target.name, e.target.value)))
          }
        return Object(m.jsxs)(l.t, {
          className: 'row g-3',
          children: [
            Object(m.jsxs)('div', {
              className: 'mb-3',
              children: [
                Object(m.jsx)(l.v, { htmlFor: 'exampleFormControlInput1', children: 'T\xean c\u1ee7a h\xe0ng ' }),
                Object(m.jsx)(l.u, {
                  type: 'text',
                  id: 'exampleFormControlInput1',
                  name: 'name',
                  placeholder: 'Nh\u1eadp t\xean s\u1ea3n ph\u1ea9m',
                  onChange: function (e) {
                    return h(e)
                  }
                })
              ]
            }),
            Object(m.jsxs)('div', {
              className: 'mb-3',
              children: [
                Object(m.jsx)(l.v, { htmlFor: 'exampleFormControlTextarea1', children: 'Email c\u1eeda h\xe0ng' }),
                Object(m.jsx)(l.u, {
                  id: 'exampleFormControlTextarea1',
                  name: 'email',
                  onChange: function (e) {
                    return h(e)
                  }
                })
              ]
            }),
            Object(m.jsxs)('div', {
              className: 'mb-3',
              children: [
                Object(m.jsx)(l.v, {
                  htmlFor: 'exampleFormControlInput1',
                  children: '\u0110\u1ecba ch\u1ec9 c\u1eeda h\xe0ng'
                }),
                Object(m.jsx)(l.u, {
                  type: 'text',
                  id: 'exampleFormControlInput1',
                  name: 'address',
                  onChange: function (e) {
                    return h(e)
                  }
                })
              ]
            }),
            Object(m.jsx)(l.k, {
              xs: 12,
              children: Object(m.jsx)(l.e, {
                onClick: function (e) {
                  e.preventDefault(),
                    Object(o.e)(n)
                      .then(function (e) {
                        1 == e.data.success
                          ? (window.location.reload(), d(e.data.message), setTimeout(j([]), 3e3))
                          : b(e.data.message)
                      })
                      .catch(function (e) {
                        b(e.response.data.message)
                      })
                },
                children: 'G\u1eedi'
              })
            })
          ]
        })
      }
    }
  }
])
//# sourceMappingURL=15.8d979b97.chunk.js.map
