;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [11],
  {
    596: function (e, s, a) {
      'use strict'
      a.r(s)
      var t = a(0),
        c = a(7),
        r = a(548),
        i = a(549),
        l = a(18),
        n = a(510),
        d = a(567),
        o = a(568),
        j = a(569),
        m = a(570),
        u = a(571),
        b = a(572),
        x = a(573),
        h = a(574),
        p = a(575),
        O = a(576),
        v = a(577),
        g = a(578),
        y = a(579),
        N = a(580),
        f = a(581),
        w = a(582),
        k = a(583),
        J = a(584),
        S = a(585),
        T = a.p + 'static/media/1.34eedf58.jpg',
        C = a.p + 'static/media/2.0c06e43d.jpg',
        M = a.p + 'static/media/3.07e357f5.jpg',
        L = a.p + 'static/media/4.3ddf28ab.jpg',
        A = a.p + 'static/media/5.3e55ee5f.jpg',
        R = a.p + 'static/media/6.edefb235.jpg',
        z = a(1),
        U = Object(t.lazy)(function () {
          return a.e(7).then(a.bind(null, 593))
        }),
        V = Object(t.lazy)(function () {
          return a.e(9).then(a.bind(null, 594))
        })
      s.default = function () {
        var e = function (e, s) {
            return Math.floor(Math.random() * (s - e + 1) + e)
          },
          s = [
            { title: 'Male', icon: n.a, value: 53 },
            { title: 'Female', icon: d.a, value: 43 }
          ],
          a = [
            { title: 'Organic Search', icon: o.a, percent: 56, value: '191,235' },
            { title: 'Facebook', icon: j.a, percent: 15, value: '51,223' },
            { title: 'Twitter', icon: m.a, percent: 11, value: '37,564' },
            { title: 'LinkedIn', icon: u.a, percent: 8, value: '27,319' }
          ],
          t = [
            {
              avatar: { src: T, status: 'success' },
              user: { name: 'Yiorgos Avraamu', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'USA', flag: b.a },
              usage: { value: 50, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'success' },
              payment: { name: 'Mastercard', icon: x.a },
              activity: '10 sec ago'
            },
            {
              avatar: { src: C, status: 'danger' },
              user: { name: 'Avram Tarasios', new: !1, registered: 'Jan 1, 2021' },
              country: { name: 'Brazil', flag: h.a },
              usage: { value: 22, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'info' },
              payment: { name: 'Visa', icon: p.a },
              activity: '5 minutes ago'
            },
            {
              avatar: { src: M, status: 'warning' },
              user: { name: 'Quintin Ed', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'India', flag: O.a },
              usage: { value: 74, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'warning' },
              payment: { name: 'Stripe', icon: v.a },
              activity: '1 hour ago'
            },
            {
              avatar: { src: L, status: 'secondary' },
              user: { name: 'En\xe9as Kwadwo', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'France', flag: g.a },
              usage: { value: 98, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'danger' },
              payment: { name: 'PayPal', icon: y.a },
              activity: 'Last month'
            },
            {
              avatar: { src: A, status: 'success' },
              user: { name: 'Agapetus Tade\xe1\u0161', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'Spain', flag: N.a },
              usage: { value: 22, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'primary' },
              payment: { name: 'Google Wallet', icon: f.a },
              activity: 'Last week'
            },
            {
              avatar: { src: R, status: 'danger' },
              user: { name: 'Friderik D\xe1vid', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'Poland', flag: w.a },
              usage: { value: 43, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'success' },
              payment: { name: 'Amex', icon: k.a },
              activity: 'Last week'
            }
          ]
        return Object(z.jsxs)(z.Fragment, {
          children: [
            Object(z.jsx)(U, {}),
            Object(z.jsxs)(c.g, {
              className: 'mb-4',
              children: [
                Object(z.jsxs)(c.h, {
                  children: [
                    Object(z.jsxs)(c.L, {
                      children: [
                        Object(z.jsxs)(c.k, {
                          sm: 5,
                          children: [
                            Object(z.jsx)('h4', { id: 'traffic', className: 'card-title mb-0', children: 'Traffic' }),
                            Object(z.jsx)('div', {
                              className: 'small text-medium-emphasis',
                              children: 'January - July 2021'
                            })
                          ]
                        }),
                        Object(z.jsxs)(c.k, {
                          sm: 7,
                          className: 'd-none d-md-block',
                          children: [
                            Object(z.jsx)(c.e, {
                              color: 'primary',
                              className: 'float-end',
                              children: Object(z.jsx)(l.a, { icon: J.a })
                            }),
                            Object(z.jsx)(c.f, {
                              className: 'float-end me-3',
                              children: ['Day', 'Month', 'Year'].map(function (e) {
                                return Object(z.jsx)(
                                  c.e,
                                  { color: 'outline-secondary', className: 'mx-0', active: 'Month' === e, children: e },
                                  e
                                )
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    Object(z.jsx)(r.c, {
                      style: { height: '300px', marginTop: '40px' },
                      data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: Object(i.hexToRgba)(Object(i.getStyle)('--cui-info'), 10),
                            borderColor: Object(i.getStyle)('--cui-info'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-info'),
                            borderWidth: 2,
                            data: [e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200)],
                            fill: !0
                          },
                          {
                            label: 'My Second dataset',
                            backgroundColor: 'transparent',
                            borderColor: Object(i.getStyle)('--cui-success'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-success'),
                            borderWidth: 2,
                            data: [e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200), e(50, 200)]
                          },
                          {
                            label: 'My Third dataset',
                            backgroundColor: 'transparent',
                            borderColor: Object(i.getStyle)('--cui-danger'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-danger'),
                            borderWidth: 1,
                            borderDash: [8, 5],
                            data: [65, 65, 65, 65, 65, 65, 65]
                          }
                        ]
                      },
                      options: {
                        maintainAspectRatio: !1,
                        plugins: { legend: { display: !1 } },
                        scales: {
                          x: { grid: { drawOnChartArea: !1 } },
                          y: { ticks: { beginAtZero: !0, maxTicksLimit: 5, stepSize: Math.ceil(50), max: 250 } }
                        },
                        elements: {
                          line: { tension: 0.4 },
                          point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 }
                        }
                      }
                    })
                  ]
                }),
                Object(z.jsx)(c.i, {
                  children: Object(z.jsx)(c.L, {
                    xs: { cols: 1 },
                    md: { cols: 5 },
                    className: 'text-center',
                    children: [
                      { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
                      { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
                      { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
                      { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
                      { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' }
                    ].map(function (e, s) {
                      return Object(z.jsxs)(
                        c.k,
                        {
                          className: 'mb-sm-2 mb-0',
                          children: [
                            Object(z.jsx)('div', { className: 'text-medium-emphasis', children: e.title }),
                            Object(z.jsxs)('strong', { children: [e.value, ' (', e.percent, '%)'] }),
                            Object(z.jsx)(c.K, { thin: !0, className: 'mt-2', color: e.color, value: e.percent })
                          ]
                        },
                        s
                      )
                    })
                  })
                })
              ]
            }),
            Object(z.jsx)(V, { withCharts: !0 }),
            Object(z.jsx)(c.L, {
              children: Object(z.jsx)(c.k, {
                xs: !0,
                children: Object(z.jsxs)(c.g, {
                  className: 'mb-4',
                  children: [
                    Object(z.jsxs)(c.j, { children: ['Traffic ', ' & ', ' Sales'] }),
                    Object(z.jsxs)(c.h, {
                      children: [
                        Object(z.jsxs)(c.L, {
                          children: [
                            Object(z.jsxs)(c.k, {
                              xs: 12,
                              md: 6,
                              xl: 6,
                              children: [
                                Object(z.jsxs)(c.L, {
                                  children: [
                                    Object(z.jsx)(c.k, {
                                      sm: 6,
                                      children: Object(z.jsxs)('div', {
                                        className: 'border-start border-start-4 border-start-info py-1 px-3',
                                        children: [
                                          Object(z.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'New Clients'
                                          }),
                                          Object(z.jsx)('div', { className: 'fs-5 fw-semibold', children: '9,123' })
                                        ]
                                      })
                                    }),
                                    Object(z.jsx)(c.k, {
                                      sm: 6,
                                      children: Object(z.jsxs)('div', {
                                        className: 'border-start border-start-4 border-start-danger py-1 px-3 mb-3',
                                        children: [
                                          Object(z.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Recurring Clients'
                                          }),
                                          Object(z.jsx)('div', { className: 'fs-5 fw-semibold', children: '22,643' })
                                        ]
                                      })
                                    })
                                  ]
                                }),
                                Object(z.jsx)('hr', { className: 'mt-0' }),
                                [
                                  { title: 'Monday', value1: 34, value2: 78 },
                                  { title: 'Tuesday', value1: 56, value2: 94 },
                                  { title: 'Wednesday', value1: 12, value2: 67 },
                                  { title: 'Thursday', value1: 43, value2: 91 },
                                  { title: 'Friday', value1: 22, value2: 73 },
                                  { title: 'Saturday', value1: 53, value2: 82 },
                                  { title: 'Sunday', value1: 9, value2: 69 }
                                ].map(function (e, s) {
                                  return Object(z.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group mb-4',
                                      children: [
                                        Object(z.jsx)('div', {
                                          className: 'progress-group-prepend',
                                          children: Object(z.jsx)('span', {
                                            className: 'text-medium-emphasis small',
                                            children: e.title
                                          })
                                        }),
                                        Object(z.jsxs)('div', {
                                          className: 'progress-group-bars',
                                          children: [
                                            Object(z.jsx)(c.K, { thin: !0, color: 'info', value: e.value1 }),
                                            Object(z.jsx)(c.K, { thin: !0, color: 'danger', value: e.value2 })
                                          ]
                                        })
                                      ]
                                    },
                                    s
                                  )
                                })
                              ]
                            }),
                            Object(z.jsxs)(c.k, {
                              xs: 12,
                              md: 6,
                              xl: 6,
                              children: [
                                Object(z.jsxs)(c.L, {
                                  children: [
                                    Object(z.jsx)(c.k, {
                                      sm: 6,
                                      children: Object(z.jsxs)('div', {
                                        className: 'border-start border-start-4 border-start-warning py-1 px-3 mb-3',
                                        children: [
                                          Object(z.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Pageviews'
                                          }),
                                          Object(z.jsx)('div', { className: 'fs-5 fw-semibold', children: '78,623' })
                                        ]
                                      })
                                    }),
                                    Object(z.jsx)(c.k, {
                                      sm: 6,
                                      children: Object(z.jsxs)('div', {
                                        className: 'border-start border-start-4 border-start-success py-1 px-3 mb-3',
                                        children: [
                                          Object(z.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Organic'
                                          }),
                                          Object(z.jsx)('div', { className: 'fs-5 fw-semibold', children: '49,123' })
                                        ]
                                      })
                                    })
                                  ]
                                }),
                                Object(z.jsx)('hr', { className: 'mt-0' }),
                                s.map(function (e, s) {
                                  return Object(z.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group mb-4',
                                      children: [
                                        Object(z.jsxs)('div', {
                                          className: 'progress-group-header',
                                          children: [
                                            Object(z.jsx)(l.a, { className: 'me-2', icon: e.icon, size: 'lg' }),
                                            Object(z.jsx)('span', { children: e.title }),
                                            Object(z.jsxs)('span', {
                                              className: 'ms-auto fw-semibold',
                                              children: [e.value, '%']
                                            })
                                          ]
                                        }),
                                        Object(z.jsx)('div', {
                                          className: 'progress-group-bars',
                                          children: Object(z.jsx)(c.K, { thin: !0, color: 'warning', value: e.value })
                                        })
                                      ]
                                    },
                                    s
                                  )
                                }),
                                Object(z.jsx)('div', { className: 'mb-5' }),
                                a.map(function (e, s) {
                                  return Object(z.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group',
                                      children: [
                                        Object(z.jsxs)('div', {
                                          className: 'progress-group-header',
                                          children: [
                                            Object(z.jsx)(l.a, { className: 'me-2', icon: e.icon, size: 'lg' }),
                                            Object(z.jsx)('span', { children: e.title }),
                                            Object(z.jsxs)('span', {
                                              className: 'ms-auto fw-semibold',
                                              children: [
                                                e.value,
                                                ' ',
                                                Object(z.jsxs)('span', {
                                                  className: 'text-medium-emphasis small',
                                                  children: ['(', e.percent, '%)']
                                                })
                                              ]
                                            })
                                          ]
                                        }),
                                        Object(z.jsx)('div', {
                                          className: 'progress-group-bars',
                                          children: Object(z.jsx)(c.K, { thin: !0, color: 'success', value: e.percent })
                                        })
                                      ]
                                    },
                                    s
                                  )
                                })
                              ]
                            })
                          ]
                        }),
                        Object(z.jsx)('br', {}),
                        Object(z.jsxs)(c.R, {
                          align: 'middle',
                          className: 'mb-0 border',
                          hover: !0,
                          responsive: !0,
                          children: [
                            Object(z.jsx)(c.U, {
                              color: 'light',
                              children: Object(z.jsxs)(c.W, {
                                children: [
                                  Object(z.jsx)(c.V, {
                                    className: 'text-center',
                                    children: Object(z.jsx)(l.a, { icon: S.a })
                                  }),
                                  Object(z.jsx)(c.V, { children: 'User' }),
                                  Object(z.jsx)(c.V, { className: 'text-center', children: 'Country' }),
                                  Object(z.jsx)(c.V, { children: 'Usage' }),
                                  Object(z.jsx)(c.V, { className: 'text-center', children: 'Payment Method' }),
                                  Object(z.jsx)(c.V, { children: 'Activity' })
                                ]
                              })
                            }),
                            Object(z.jsx)(c.S, {
                              children: t.map(function (e, s) {
                                return Object(z.jsxs)(
                                  c.W,
                                  {
                                    'v-for': 'item in tableItems',
                                    children: [
                                      Object(z.jsx)(c.T, {
                                        className: 'text-center',
                                        children: Object(z.jsx)(c.a, {
                                          size: 'md',
                                          src: e.avatar.src,
                                          status: e.avatar.status
                                        })
                                      }),
                                      Object(z.jsxs)(c.T, {
                                        children: [
                                          Object(z.jsx)('div', { children: e.user.name }),
                                          Object(z.jsxs)('div', {
                                            className: 'small text-medium-emphasis',
                                            children: [
                                              Object(z.jsx)('span', { children: e.user.new ? 'New' : 'Recurring' }),
                                              ' | Registered: ',
                                              e.user.registered
                                            ]
                                          })
                                        ]
                                      }),
                                      Object(z.jsx)(c.T, {
                                        className: 'text-center',
                                        children: Object(z.jsx)(l.a, {
                                          size: 'xl',
                                          icon: e.country.flag,
                                          title: e.country.name
                                        })
                                      }),
                                      Object(z.jsxs)(c.T, {
                                        children: [
                                          Object(z.jsxs)('div', {
                                            className: 'clearfix',
                                            children: [
                                              Object(z.jsx)('div', {
                                                className: 'float-start',
                                                children: Object(z.jsxs)('strong', { children: [e.usage.value, '%'] })
                                              }),
                                              Object(z.jsx)('div', {
                                                className: 'float-end',
                                                children: Object(z.jsx)('small', {
                                                  className: 'text-medium-emphasis',
                                                  children: e.usage.period
                                                })
                                              })
                                            ]
                                          }),
                                          Object(z.jsx)(c.K, { thin: !0, color: e.usage.color, value: e.usage.value })
                                        ]
                                      }),
                                      Object(z.jsx)(c.T, {
                                        className: 'text-center',
                                        children: Object(z.jsx)(l.a, { size: 'xl', icon: e.payment.icon })
                                      }),
                                      Object(z.jsxs)(c.T, {
                                        children: [
                                          Object(z.jsx)('div', {
                                            className: 'small text-medium-emphasis',
                                            children: 'Last login'
                                          }),
                                          Object(z.jsx)('strong', { children: e.activity })
                                        ]
                                      })
                                    ]
                                  },
                                  s
                                )
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            })
          ]
        })
      }
    }
  }
])
//# sourceMappingURL=11.a2cf92d2.chunk.js.map
