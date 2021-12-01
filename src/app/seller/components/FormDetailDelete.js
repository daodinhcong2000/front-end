import React from "react";
import { Form, Input } from "antd";
import axios from "axios";
import { useState, useRef } from "react";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormCheck,
  CFormTextarea,
  CInputGroupText,
  CImage,
  CRow,
  CFormFeedback,
  CFormSelect,
} from "@coreui/react";
const { TextArea } = Input;

const FormDetailDelete = (recvData) => {
  const [data, setData] = useState(recvData.data);
  const [imageUrls, setImageUrls] = useState(data.images);
  const [sizes, setSizes] = useState(data.sizes);

  return (
    <div>
      <CForm className="row g-3">
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            Tên sản phẩm
          </CFormLabel>
          <CFormInput
            disabled
            type="text"
            id="exampleFormControlInput1"
            name="name"
            placeholder="Nhập tên sản phẩm"
            value={data.name}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            Mô tả sản phẩm
          </CFormLabel>
          <CFormTextarea
            disabled
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={data.description}
          ></CFormTextarea>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            Loại sản phẩm
          </CFormLabel>
          <CFormInput
            disabled
            type="text"
            id="exampleFormControlInput1"
            name="category"
            value={data.description}
          />
        </div>
        <CCol xs={12}>
          <CFormLabel htmlFor="inputAddress">Kích thước</CFormLabel>
          {sizes.map((size, i) => {
            return (
              <div className="box">
                <CRow>
                  <CCol xs>
                    <CFormInput name="name" value={size.name} disabled />
                  </CCol>
                  <CCol xs>
                    <CFormInput
                      name="numberInStock"
                      value={size.numberInStock}
                      disabled
                    />
                  </CCol>
                </CRow>
              </div>
            );
          })}
        </CCol>
        <CCol xs={12}>
          {imageUrls &&
            imageUrls.map((imageUrl , idx) => {
              return <CImage fluid src={imageUrl} width={150} height={150} key = {idx}/>;
            })}
        </CCol>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            aria-label="Amount (to the nearest dollar)"
            name="price"
            disabled
            value={data.price}
          />
          <CInputGroupText>VNĐ</CInputGroupText>
        </CInputGroup>
      </CForm>
    </div>
  );
};
export default FormDetailDelete;
