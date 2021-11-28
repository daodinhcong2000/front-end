import React, { useState, useRef } from 'react'
import axios from "axios";
import { getShops, postProduct } from '../../../../services/api/sellerApi'
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
} from '@coreui/react'

const AddProduct = () => {
  const inputFile = useRef(null)
  const [data, setData] = useState(
    {
      name: "",
      description: "",
      category: "",
      sizes: [],
      images: [],
      price: "",
    })

  const [sizes, setSizes] = useState([{ name: "", numberInStock: "" }]);
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [shopId, setShopId] = useState("");

  const listShop = getShops();
  console.log(listShop)
  // data.images = data.images.concat(imageUrls);
  const uploadImage = (e) => {
    setImageUrls([])
    images.map((image, i) => {
      // Tạo một form data chứa dữ liệu gửi lên
      const formData = new FormData();
      // Hình ảnh cần upload
      formData.append("file", image);
      // Tên preset vừa tạo ở bước 1
      formData.append("upload_preset", "new_preset");
      // Tải ảnh lên cloudinary
      // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
      axios
        .post("https://api.cloudinary.com/v1_1/accomerce/image/upload", formData)
        .then((response) => {
          setImageUrls(imageUrls => [...imageUrls, response.data.secure_url]);

        })
        .catch((err) => console.error(err));
    });
  };


  const handleSubmit = event => {
    event.preventDefault();
    console.log(data)
    postProduct(1, data);
  }

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...sizes];
    list[index][name] = value;
    setSizes(list);
    data.sizes = sizes;
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...sizes];
    list.splice(index, 1);
    setSizes(list);
    data.sizes.splice(index, 1);
  };
  console.log(data);
  // handle click event of the Add button
  const handleAddClick = () => {
    setSizes([...sizes, { name: "", numberInStock: "" }]);
  };

  const handleAddImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      setImages(images => [...images, e.target.files[i]]);
    };
    ;
  };

  const onButtonClick = () => {
    inputFile.current.click();
    uploadImage();
  };
  return (

  <div>
      <div className="mb-3">
      <CFormSelect
        className="row g-3"
        aria-label="Default select example"
        options={[
          'Vui lòng chọn shop của bạn',
          { label: 'One', value: '1' },
          { label: 'Two', value: '2' },
          { label: 'Three', value: '3'}
        ]}
      />
      </div>
    <CForm className="row g-3">
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1" >Tên sản phẩm</CFormLabel>
        <CFormInput type="text" id="exampleFormControlInput1" name="name" placeholder="Nhập tên sản phẩm" onChange={e => handleChange(e)} invalid required />
        <CFormFeedback invalid>Vui lòng nhập tên sản phẩm</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</CFormLabel>
        <CFormTextarea id="exampleFormControlTextarea1" rows="3" name="description" onChange={e => handleChange(e)} invalid required></CFormTextarea>
        <CFormFeedback invalid>Vui lòng nhập tên sản phẩm</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="exampleFormControlInput1">Loại sản phẩm</CFormLabel>
        <CFormInput invalid required type="text" id="exampleFormControlInput1" name="category" placeholder="Nhập loại mặt hàng mà bạn muốn đề xuất" onChange={e => handleChange(e)} />
      </div>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputAddress">Kích thước</CFormLabel>
        {sizes.map((size, i) => {
          return (
            <div className="box">
              <CRow>
                <CCol xs>
                  <CFormInput
                    name="name"
                    value={size.name}
                    placeholder="Nhập kích thước"
                    onChange={e => handleInputChange(e, i)}
                  />
                </CCol>
                <CCol xs>
                  <CFormInput
                    name="numberInStock"
                    value={size.numberInStock}
                    placeholder="Nhập số lượng"
                    onChange={e => handleInputChange(e, i)}
                  />
                </CCol>
              </CRow>
              {sizes.length - 1 === i && <CButton color="dark" shape="rounded-pill" onClick={handleAddClick} size="sm" >Thêm</CButton>}
              {sizes.length !== 1 && <CButton
                color="dark" shape="rounded-pill" size="sm"
                onClick={() => handleRemoveClick(i)}>Xóa</CButton>}
            </div>
          )
        })
        }
      </CCol>
      <CCol xs={12}>
        <CFormInput type="file" multiple onChange={(e) => { handleAddImage(e) }} ref={inputFile} style={{ display: 'none' }} />
        <CButton onClick={onButtonClick}>Thêm ảnh</CButton>
        {/* <CButton onClick={uploadImage}>Xem ảnh</CButton> */}
      </CCol>
      <CCol xs={12}>
        {imageUrls.map((imageUrl) => {
          return (
            <CImage fluid src={imageUrl} width={150} height={150} />
          )
        })}
      </CCol>
      <CInputGroup className="mb-3">
        <CInputGroupText>$</CInputGroupText>
        <CFormInput aria-label="Amount (to the nearest dollar)" name="price" onChange={e => handleChange(e)} />
        <CInputGroupText>VNĐ</CInputGroupText>
      </CInputGroup>
      <CCol xs={12}>
        <CButton onClick={handleSubmit} type="submit" >Đăng sản phẩm</CButton>
      </CCol>
    </CForm>
  </div>
  )
}

export default AddProduct