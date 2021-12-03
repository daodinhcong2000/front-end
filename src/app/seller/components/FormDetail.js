import React from 'react'
import axios from 'axios'
import { updateProduct } from '../../../services/api/sellerApi'
import { useState, useRef } from 'react'
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
  CRow
} from '@coreui/react'
import { useToast } from '../../../contexts/toast'

const FormDetail = (recvData) => {
  const { error, warn, info, success } = useToast()
  const inputFile = useRef(null)
  const [data, setData] = useState(recvData.data)
  const [sizes, setSizes] = useState(data.sizes)
  const [imageUrls, setImageUrls] = useState(data.images)

  const handleSubmit = (event) => {
    event.preventDefault()
    delete data.views
    delete data._id
    delete data.rating
    delete data.createdAt
    delete data.sold
    delete data.updatedAt
    delete data.__v
    var idProduct
    var idShop
    data.images = imageUrls

    //console.log(data);
    if (idProduct == null) {
      idProduct = data.idProduct
      delete data.idProduct
    }
    if (idShop == null) {
      idShop = data.shop._id
      delete data.shop
    }
    // console.log(data);
    updateProduct(idShop, idProduct, data)
      .then((respone) => {
        if (respone.data.success == true) {
          success(respone.data.message)
          //setTimeout(setData(recvData.data), 3000);
          window.location.reload(false)
        } else {
          error(respone.data.message)
        }
      })
      .catch((err) => {
        error(err.response.data.message)
      })
  }
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const uploadImage = (image) => {
    // Tạo một form data chứa dữ liệu gửi lên
    const formData = new FormData()
    // Hình ảnh cần upload
    formData.append('file', image)
    // Tên preset vừa tạo ở bước 1
    formData.append('upload_preset', 'new_preset')
    // Tải ảnh lên cloudinary
    // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
    axios
      .post('https://api.cloudinary.com/v1_1/accomerce/image/upload', formData)
      .then((response) => {
        setImageUrls([...imageUrls, response.data.secure_url])
      })
      .catch((err) => console.error(err))
  }
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...sizes]
    list[index][name] = value
    setSizes(list)
    data.sizes = sizes
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...sizes]
    list.splice(index, 1)
    setSizes(list)
    data.sizes.splice(index, 1)
  }
  //console.log(data);
  // handle click event of the Add button
  const handleAddClick = () => {
    if (sizes[sizes.length - 1].name == '' || sizes[sizes.length - 1].name == '') {
      warn('Vui lòng điền đủ thông tin về kích thước trước khi thêm mới')
    } else {
      setSizes([...sizes, { name: '', numberInStock: '' }])
    }
  }
  const deleteFile = (e) => {
    const s = imageUrls.filter((image, index) => index !== e)
    setImageUrls(s)
    //console.log(s);
  }
  const onButtonClick = () => {
    inputFile.current.click()
  }
  return (
    <div>
      <CForm className="row g-3">
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">Tên sản phẩm</CFormLabel>
          <CFormInput
            type="text"
            id="exampleFormControlInput1"
            name="name"
            placeholder="Nhập tên sản phẩm"
            onChange={(e) => handleChange(e)}
            value={data.name}
          />
        </div>
        <div className="mb-3">
          <CRow>
            <CCol xs>
              <CFormLabel htmlFor="exampleFormControlInput1">Loại sản phẩm</CFormLabel>
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                name="category"
                placeholder="Nhập loại mặt hàng mà bạn muốn đề xuất"
                onChange={(e) => handleChange(e)}
                value={data.category}
              />
            </CCol>
            <CCol xs>
              <CFormLabel htmlFor="exampleFormControlInput1">Giá sản phẩm</CFormLabel>
              <CInputGroup>
                <CFormInput
                  aria-label="Amount (to the nearest dollar)"
                  name="price"
                  onChange={(e) => handleChange(e)}
                  value={data.price}
                />
                <CInputGroupText>VNĐ</CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</CFormLabel>
          <CFormTextarea
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={(e) => handleChange(e)}
          ></CFormTextarea>
        </div>
        <CCol xs={12}>
          <CFormLabel htmlFor="inputAddress">Size</CFormLabel>
          {sizes.map((size, i) => {
            return (
              <div className="box" key={i} id="inputSize">
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
                  <CButton color="dark" shape="rounded-pill" onClick={handleAddClick} size="sm">
                    Thêm
                  </CButton>
                )}
                {sizes.length !== 1 && (
                  <CButton color="dark" shape="rounded-pill" size="sm" onClick={() => handleRemoveClick(i)}>
                    Xóa
                  </CButton>
                )}
              </div>
            )
          })}
        </CCol>
        <CCol xs={12}>
          <CFormInput
            type="file"
            onChange={(e) => {
              uploadImage(e.target.files[0])
            }}
            ref={inputFile}
            style={{ display: 'none' }}
          />
          <CButton onClick={onButtonClick} color="secondary" shape="rounded-pill">
            Thêm ảnh
          </CButton>
        </CCol>
        <CCol xs id="imageShow">
          {imageUrls &&
            imageUrls.map((imageUrl, index) => {
              return (
                <CImage fluid src={imageUrl} key={index} width={150} height={150} onClick={() => deleteFile(index)} />
              )
            })}
        </CCol>
        <CCol xs={12}>
          <CButton onClick={handleSubmit} type="submit">
            Lưu
          </CButton>
        </CCol>
      </CForm>
    </div>
  )
}
export default FormDetail
