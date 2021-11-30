import { Row, Col, Image, Rate, Button } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"

const ProductItem = props => {
    console.log(props)
    const { name, description, rating, images, price, sold = 0, views = 0, shop } = props

    const showView = views => {
        if (views > 1000000) {
            return `${Math.floor(views / 100000) / 10}M`
        }

        if (views > 1000) {
            return `${Math.floor(views / 100) / 10}K`
        }

        return views
    }

    return (
        <div className="product-item" style={{ textAlign: 'center', padding: '5px', background: 'mintcream' }}
            onClick={e => { console.log(e.target) }}
        >
            <Row ><Col span={24} >
                <h3 style={{ textAlign: 'center' }}>{name}</h3>
            </Col></Row>
            <Image src={images[0] || '/img/product.jpeg'} height='300px' preview={false} />
            <Row>
                <Col span={10}>
                    <Rate span={24} allowHalf defaultValue={rating} disabled />
                </Col>
                <Col span={14}>
                    <Button type="link" href="/seller" style={{ textDecoration: 'none' }}><b>{shop}</b></Button>
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col span={8} style={{ verticalAlign: 'text-bottom', fontSize: '90%', paddingTop: '10px' }} >
                    <Row><Col span={24}><strong style={{ color: 'blue' }}>Lượt xem: </strong>{showView(views)}</Col></Row>
                    <Row><Col span={24}><strong style={{ color: 'green' }}>Đã bán: </strong>{sold}</Col></Row>
                </Col>
                <Col span={8} style={{ verticalAlign: '', fontSize: '90%' }} >
                    <Row><Col span={24}><h4 style={{ color: 'red' }}>${price}</h4></Col></Row>
                    <Row><Col span={24}><h6 style={{ color: 'silver', textDecoration: 'line-through' }}>${price}</h6></Col></Row>


                </Col>
                <Col span={8} >
                    <Button shape="circle" style={{width: '50px', height: '50px', backgroundColor: 'orange', color: 'white'}}>
                        <ShoppingCartOutlined style={{fontSize: '200%'}} />
                        </Button>
                </Col>
            </Row>
        </div >
    )
}

export default ProductItem