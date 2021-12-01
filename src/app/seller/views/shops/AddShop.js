import { useState } from "react";
import { postShop } from "../../../../services/api/sellerApi";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormCheck,
  CFormTextarea,
} from "@coreui/react";
import { useToast } from "../../../../contexts/toast";

const AddShop = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const { error, warn, info, success } = useToast();
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();

    postShop(data)
      .then((respone) => {
        if (respone.data.success == true) {
          window.location.reload();
          success(respone.data.message);
          setTimeout(setData([]), 3000);
        } else {
          error(respone.data.message);
        }
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  };
  return (
    <CForm className="row g-3">
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1">
          Tên của hàng{" "}
        </CFormLabel>
        <CFormInput
          type="text"
          id="exampleFormControlInput1"
          name="name"
          placeholder="Nhập tên sản phẩm"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlTextarea1">
          Email cửa hàng
        </CFormLabel>
        <CFormInput
          id="exampleFormControlTextarea1"
          name="email"
          onChange={(e) => handleChange(e)}
        ></CFormInput>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1">
          Địa chỉ cửa hàng
        </CFormLabel>
        <CFormInput
          type="text"
          id="exampleFormControlInput1"
          name="address"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <CCol xs={12}>
        <CButton onClick={handleSubmit}>Gửi</CButton>
      </CCol>
    </CForm>
  );
};

export default AddShop;
