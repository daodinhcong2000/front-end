import { Col, Image } from "antd"

const ProductItem = props => {
    const { name, description, rating, images, price, sold, views } = {
        "name": "Hoodie 3 (Updated)",
        "shop": {
            "_id": "61951d1bea3590a151186c25",
            "seller": {
                "_id": "618ffd3d330a4fead345adce",
                "firstName": "Hứa Văn",
                "lastName": "Cường",
                "phoneNumber": "0323456789",
                "roles": [
                    "customer",
                    "seller"
                ],
                "isActive": true,
                "username": "cuonghv2",
                "createdAt": "2021-11-13T18:00:29.591Z",
                "updatedAt": "2021-11-17T15:17:15.193Z",
                "__v": 1
            },
            "name": "Shop Hua Van Cuong 2",
            "email": "cuonghv2@shop.com",
            "address": "Hanoi, Vietnam",
            "isActive": true,
            "createdAt": "2021-11-17T15:17:47.474Z",
            "updatedAt": "2021-11-18T03:12:27.977Z",
            "__v": 0,
            "approvalStatus": "approved"
        },
        "description": "Sample description",
        "rating": 5,
        "category": "clothes",
        "images": [
            "https://cf.shopee.vn/file/64cf907b10e5bb2bc1f2c0069b90e3e1",
            "https://www.stedman.eu/out/pictures-2021/zoom/ST4100_model.jpg",
            "https://www.hetgia.com/wp-content/uploads/2018/06/Shop-%C3%A1o-hoodie-nam-H%C3%A0-N%E1%BB%99i-6.jpg"
        ],
        "price": 12.36,
        "createdAt": "2021-11-21T10:49:46.061Z",
        "updatedAt": "2021-11-28T19:55:14.801Z",
        "__v": 0,
        "sold": 0,
        "views": 15
    }
    return (
        <Col span={6} className="gutter-row">
            <Image src={images[0]} />
        </Col>
    )
}

export default ProductItem