import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { getShops, postProduct } from "../../../../services/api/sellerApi";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CFormTextarea,
  CInputGroupText,
  CImage,
  CRow,
  CFormSelect,
} from "@coreui/react";
import { useToast } from "../../../../contexts/toast";

const AddProduct = () => {
  const initData = {
    name: "",
    description: "",
    category: "",
    sizes: [],
    images: [],
    price: "",
  }
  const { error, warn, info, success } = useToast();
  const inputFile = useRef(null);
  const [data, setData] = useState(initData);

  const [sizes, setSizes] = useState([{ name: "", numberInStock: "" }]);
  const [images, setImages] = useState([]);
  const [shopId, setShopId] = useState("0");
  const [listShop, setListShop] = useState([]);
  useEffect(() => {
    getShops().then((response) => {
      setListShop(response.data.data);
    });
  }, [listShop]);

  //
  const uploadImage = (image) => {
      // Tạo một form data chứa dữ liệu gửi lên
      const formData = new FormData();
      // Hình ảnh cần upload
      formData.append("file", image);
      // Tên preset vừa tạo ở bước 1
      formData.append("upload_preset", "new_preset");
      // Tải ảnh lên cloudinary
      // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
      axios
        .post(
          "https://api.cloudinary.com/v1_1/accomerce/image/upload",
          formData
        )
        .then((response) => {
          //data.images.push(response.data.secure_url);
          setImages([...images,response.data.secure_url ])
        })
        .catch((err) => console.error(err));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    data.images = images
    if(shopId == 0) {
      warn("Vui lòng chọn cửa hàng")
    }
    else{
      postProduct(shopId, data)
      .then((respone) => {
        if (respone.data.success == true) {
          success(respone.data.message)
          window.location.reload(false);
        } else{
          error(respone.data.message);
        }
      })
      .catch((err) => {
        error(err.response.data.message)
      }
        );
    }
  };

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...sizes];
    list[index][name] = value;
    setSizes(list);
    data.sizes = sizes;
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...sizes];
    list.splice(index, 1);
    setSizes(list);
    data.sizes.splice(index, 1);
  };
  //console.log(data);
  // handle click event of the Add button
  const handleAddClick = () => {
    setSizes([...sizes, { name: "", numberInStock: "" }]);
  };

  // const handleAddImage = (e) => {
  //     setImages((images) => [...images, e.target.files[i]]);
  // };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const deleteFile = (e) => {
    const s = images.filter((image, index) => index !== e);
    setImages(s);
    console.log(s);
  };
  return (
    <div>
      <div className="mb-3">
        <CFormSelect
          aria-label="Default select example"
          onChange={(e) => setShopId(e.target.value)}
        >
          <option value = "0">Chọn shop</option>
          {listShop.map((shop) => {
            return <option value={shop._id} key ={shop._id}>{shop.name}</option>;
          })}
        </CFormSelect>
      </div>
      <CForm className="row g-3">
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            Tên sản phẩm
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
            Mô tả sản phẩm
          </CFormLabel>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={(e) => handleChange(e)}
          ></CFormTextarea>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            Loại sản phẩm
          </CFormLabel>
          <CFormInput
            type="text"
            id="exampleFormControlInput1"
            name="category"
            placeholder="Nhập loại mặt hàng mà bạn muốn đề xuất"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <CCol xs={12}>
          <CFormLabel htmlFor="inputAddress">Kích thước</CFormLabel>
          {sizes.map((size, i) => {
            return (
              <div className="box" key={i}>
                <CRow>
                  <CCol xs>
                    <CFormInput
                      name="name"
                      value={size.name}
                      placeholder="Nhập kích thước"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>
                  <CCol xs>
                    <CFormInput
                      name="numberInStock"
                      value={size.numberInStock}
                      placeholder="Nhập số lượng"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </CCol>
                </CRow>
                {sizes.length - 1 === i && (
                  <CButton
                    color="dark"
                    shape="rounded-pill"
                    onClick={handleAddClick}
                    size="sm"
                  >
                    Thêm
                  </CButton>
                )}
                {sizes.length !== 1 && (
                  <CButton
                    color="dark"
                    shape="rounded-pill"
                    size="sm"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Xóa
                  </CButton>
                )}
              </div>
            );
          })}
        </CCol>
        <CCol xs={12}>
          <CFormInput
            type="file"
            onChange={(e) => {
              uploadImage(e.target.files[0])
            }}
            ref={inputFile}
            style={{ display: "none" }}
          />
          <CButton onClick={onButtonClick}>Thêm ảnh</CButton>
        </CCol>
        <CCol xs={12}>
          {images &&
            images.map((image, index) => {
              return (
                <CImage
                  fluid
                  src={image}
                  width={150}
                  height={150}
                  onClick={() => deleteFile(index)}
                  key={index}
                />
              );
            })}
        </CCol>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            aria-label="Amount (to the nearest dollar)"
            name="price"
            onChange={(e) => handleChange(e)}
          />
          <CInputGroupText>VNĐ</CInputGroupText>
        </CInputGroup>
        <CCol xs={12}>
          <CButton onClick={handleSubmit} type="submit">
            Đăng sản phẩm
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
};

export default AddProduct;
