import React, { useState, useEffect } from "react";
import {
  CSmartTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react-pro";
import FormDetail from "./FormDetail";
import FormDetailDelete from "./FormDetailDelete";
import { deleteProduct } from "../../../services/api/sellerApi";
import { useToast} from "../../../contexts/toast"


const TableProduct = ({ columns, usersData, type }) => {
  const { error, warn, info, success } = useToast();
  const [details, setDetails] = useState([]);
  const [idDelete, setIdDelete] = useState([]);
  const idProduct = [];
  const idDeleteProduct = {
    productIds: [],
  };
  usersData.map((data, i) => {
    idProduct[i] = data._id;
    data.idProduct = data._id;
  });

  const handleDelete = () => {
    console.log(usersData[0].shop._id);
    idDelete.map((id, i) => (idDeleteProduct.productIds[i] = idProduct[id]));
    if(idDeleteProduct.productIds.length == 0){
      warn("Vui lòng chọn sản phẩm cần xóa")
    }
    else{
      deleteProduct(usersData[0].shop._id, idDeleteProduct)
      .then((respone) => {
        console.log("res", respone);
        if (respone.data.success == true) {
          setIdDelete([])
          success(respone.data.message);
          setTimeout(window.location.reload(), 3000);
        } else {
          error(respone.data.message);
        }
      })
      .catch((err) => {
        error(err.response.data.message);
      });
    }
  };
  const getBadge = (rate) => {
    switch (rate) {
      case "5":
        return "success";
      case "5":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const handleCheck = (id) => {
    setIdDelete((prev) => {
      const isChecked = idDelete.includes(id);
      if (isChecked) {
        return idDelete.filter((item) => item != id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        items={usersData}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <div>
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(item._id);
                    }}
                  >
                    {details.includes(item._id) ? "Hide" : "Show"}
                  </CButton>
                  {type === "fix" ? (
                    ""
                  ) : (
                    <input
                      class="form-check-input"
                      type="checkbox"
                      idDelete={idDelete.includes(item._id)}
                      onChange={() => handleCheck(item._id)}
                      id="checkProduct"
                    ></input>
                  )}
                </div>
              </td>
            );
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item._id)}>
                <CCardBody>
                  {type === "fix" ? (
                    <FormDetail data={item} />
                  ) : (
                    <FormDetailDelete data={item} />
                  )}
                </CCardBody>
              </CCollapse>
            );
          },
        }}
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
      {type === "fix" ? "" : <CButton onClick={handleDelete}> xóa </CButton>}
    </div>
  );
};

export default TableProduct;
