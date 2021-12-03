;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [16],
  {
    589: function (e, t, a) {
      'use strict'
      a.r(t)
      var s = a(32),
        l = a(0),
        c = a(228),
        n = a(550),
        r = a(1)
      t.default = function () {
        var e = Object(l.useState)([]),
          t = Object(s.a)(e, 2),
          a = t[0],
          i = t[1]
        Object(l.useEffect)(function () {
          Object(c.c)().then(function (e) {
            i(e.data.data)
          })
        }, [])
        return Object(r.jsx)('div', {
          children: Object(r.jsx)(l.Suspense, {
            fallback: Object(r.jsx)('h1', { children: 'Loading posts...' }),
            children: Object(r.jsx)(n.d, {
              activePage: 3,
              cleaner: !0,
              clickableRows: !0,
              columns: [
                {
                  label: 'T\xean s\u1ea3n Ph\u1ea9m',
                  key: 'name',
                  _style: { width: '40%' },
                  _props: { className: 'fw-semibold' }
                },
                { label: 'Email', key: 'email' },
                { label: '\u0110\u1ecba ch\u1ec9', key: 'address', filter: !0, sorter: !1, _style: { width: '20%' } },
                { label: 'Tr\u1ea1ng th\xe1i', key: 'approvalStatus', _style: { width: '20%' } }
              ],
              columnFilter: !0,
              columnSorter: !0,
              items: a,
              itemsPerPageSelect: !0,
              itemsPerPage: 5,
              pagination: !0,
              copedColumns: {
                approvalStatus: function (e) {
                  return Object(r.jsx)('td', { children: Object(r.jsx)('p', { children: 'test' }) })
                }
              },
              sorterValue: { column: 'name', state: 'asc' },
              tableFilter: !0,
              tableHeadProps: { color: 'none' },
              tableProps: { striped: !0, hover: !0 }
            })
          })
        })
      }
    }
  }
])
//# sourceMappingURL=16.523b45c5.chunk.js.map
