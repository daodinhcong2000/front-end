;(this.webpackJsonpwebapp = this.webpackJsonpwebapp || []).push([
  [12],
  {
    597: function (e, t, a) {
      'use strict'
      a.r(t)
      var s = a(32),
        l = a(0),
        c = a(47),
        r = Object(c.b)(!0),
        n = a(550),
        i = a(1)
      t.default = function () {
        var e = Object(l.useState)([]),
          t = Object(s.a)(e, 2),
          a = t[0],
          c = t[1]
        Object(l.useEffect)(function () {
          r({ url: ''.concat('/user-service/api', '/users'), method: 'GET' }).then(function (e) {
            c(e.data.data.users), console.log(e.data.data)
          })
        }, [])
        return Object(i.jsx)('div', {
          children: Object(i.jsx)(n.d, {
            activePage: 3,
            cleaner: !0,
            clickableRows: !0,
            columns: [
              {
                label: 'T\xean s\u1ea3n Ph\u1ea9m',
                key: 'username',
                _style: { width: '40%' },
                _props: { className: 'fw-semibold' }
              },
              { label: 'Email', key: 'email' },
              {
                label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                key: 'phoneNumber',
                filter: !0,
                sorter: !1,
                _style: { width: '20%' }
              },
              { label: 'Tr\u1ea1ng th\xe1i', key: 'isActive', _style: { width: '20%' } }
            ],
            columnFilter: !0,
            columnSorter: !0,
            items: a,
            itemsPerPageSelect: !0,
            itemsPerPage: 5,
            pagination: !0,
            copedColumns: {
              approvalStatus: function (e) {
                return Object(i.jsx)('td', { children: Object(i.jsx)('p', { children: 'test' }) })
              }
            },
            sorterValue: { column: 'name', state: 'asc' },
            tableFilter: !0,
            tableHeadProps: { color: 'none' },
            tableProps: { striped: !0, hover: !0 }
          })
        })
      }
    }
  }
])
//# sourceMappingURL=12.2a368891.chunk.js.map
