import React, { useState ,useEffect} from "react";
import { getShops } from "../../../../services/api/sellerApi";
import {
  CSmartTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react-pro";

const TableShop = () => {
  const columns = [
    {
      label: "Tên sản Phẩm",
      key: "name",
      _style: { width: "40%" },
      _props: { className: "fw-semibold" },
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Địa chỉ",
      key: "address",
      filter: true,
      sorter: false,
      _style: { width: "20%" },
    },
    { label: "Trạng thái", key: "approvalStatus", _style: { width: "20%" } },
  ];
  const [listShop, setListShop] = useState([]);
  useEffect(() => {
    getShops().then((response) => {
      setListShop(response.data.data);
    });
  }, []);

  return (
    <div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        items={listShop}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        sorterValue={{ column: "name", state: "asc" }}
        tableFilter
        tableHeadProps={{
          color: "none",
        }}
        tableProps={{
          striped: true,
          hover: true,
        }}
      />
    </div>
  );
};

export default TableShop;
