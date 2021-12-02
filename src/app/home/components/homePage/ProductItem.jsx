import { Row, Col, Image, Rate, Button, Card } from "antd"
import { Link } from "react-router-dom"
import { ShoppingCartOutlined, EyeOutlined, ShopOutlined } from "@ant-design/icons"

const ProductItem = props => {
    const { product } = props
    const { _id, name, rating, images, price, sold = 0, views = 0, shop } = product

    const showView = views => {
        if (views > 1000000) {
            return `${Math.floor(views / 100000) / 10}M`
        }

        if (views > 1000) {
            return `${Math.floor(views / 100) / 10}K`
        }

        return views
    }

    const showShopName = name => {
        if (name.length > 20) {
            return `${name.slice(0, 20)}...`
        }
        return name
    }

    const handleClickViewProduct = () => {

    }

    const handleClickViewShop = () => {

    }

    const addToCart = e => { console.log(e) }

    return (
        <Col span={24} style={{ textAlign: 'center' }} >
            <Card
                style={{ width: '100%', textAlign: 'center' }}
                hoverable
            >
                <Link to={`/shops/${_id}`} style={{ textDecoration: 'none' }}>
                    <Image
                        style={{ padding: '10px', height: '300px', width: '300px' }}
                        alt="example"
                        src={images[0] || '/img/product.jpeg'}
                        preview={false}
                    />

                    <Row >
                        <Col span={24} >
                            <h3 style={{ textAlign: 'center', color: 'mediumseagreen', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {name}
                            </h3>
                        </Col>
                    </Row>

                    <Row >
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Rate allowHalf defaultValue={rating} disabled />
                        </Col>
                    </Row>

                    <Row >
                        <Col span={10} style={{ paddingTop: '10px' }}>
                            <Row>
                                <Col span={24}>
                                    <strong style={{ color: 'blue' }}>Lượt xem: </strong>
                                    {showView(views)}
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <strong style={{ color: 'green' }}>Đã bán: </strong>
                                    {sold}
                                </Col>
                            </Row>
                        </Col>

                        <Col span={14} style={{ textAlign: 'center' }}>
                            <Row>
                                <Col span={24} style={{ color: 'red' }}>
                                    <b style={{ fontSize: '150%' }}>{price}</b>
                                    VNĐ
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24} style={{ color: 'silver' }}>
                                    <b style={{ textAlign: 'center', textDecoration: 'line-through' }}>
                                        {price}VNĐ
                                    </b>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Link>

                <Row style={{ textAlign: 'center', paddingTop: '20px' }}>
                    <Col span={20} >
                        <Button shape='round' style={{ height: '40px', paddingBottom: '5px', background: 'orange', color: 'white' }}>
                            <Link to={`/shops/${shop._id}`} style={{ textDecoration: 'none' }}>
                                <ShopOutlined style={{ fontSize: '25px' }} />
                                <b style={{ width: '160px', overflow: "hidden", whiteSpace: "nowrap", textOverflow: "...v.v..." }}>
                                    {showShopName(shop.name)}
                                </b>
                            </Link>
                        </Button>
                    </Col>

                    <Col span={4} >
                        <Button shape='circle'
                            style={{ height: '40px', width: '40px', paddingBottom: '5px', background: 'mediumseagreen', color: 'white' }}>
                            <ShoppingCartOutlined style={{ fontSize: '25px' }} />
                        </Button>
                    </Col>
                </Row>

            </Card>
        </Col >
    )
}

export default ProductItem