import { Form, Input } from 'antd'
import axios from 'axios';
import { useState } from 'react'

const { TextArea } = Input;

const FormUpProduct = () => {
    // const [name, setVisible] = useState('');
    // const [description, setVisible] = useState(false);
    // const [visible, setVisible] = useState(false);
    // const [visible, setVisible] = useState(false);
    // const [visible, setVisible] = useState(false);
    // const [visible, setVisible] = useState(false);
    
    const onChange = e => {
        //console.log(e);
      };
    
    const handleSubmit = () => {

    // const user = {
    //     name: this.name
    // };
    console.log(1);
    axios.post(`https://jsonplaceholder.typicode.com/users`, 1)
        .then(res => {
        console.log(res);
        console.log(res.data);
        })
    }
    
    return (
        <Form   
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
            >
                <Input allowClear onChange={onChange}/>
            </Form.Item>

            <Form.Item
                label="Miêu tả"
                name="description"
                rules={[{ required: true, message: 'Vui lòng nhập miêu tả về sản phẩm' }]}
            >
                <TextArea placeholder="Nhập miêu tả về sản phẩm" autoSize={{ minRows: 2, maxRows: 6 }} allowClear onChange={onChange} />
            </Form.Item>

            <Form.Item
                label="Loại hàng"
                name="category"
                rules={[{ required: true, message: 'Vui lòng nhập loại hàng hóa' }]}
            >
                <Input allowClear onChange={onChange}/>
            </Form.Item>

            <Form.Item
                label="Kích thước"
                name="sizes"
                rules={[{ required: true, message: 'Please input your phone username!' }]}
            >
                <Input allowClear onChange={onChange}/>
            </Form.Item>

            <Form.Item
                label="Ảnh"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input type="file" multiple allowClear onChange={onChange}/>
            </Form.Item>

            <Form.Item
                label="Giá"
                name="price"
                rules={[{ required: true, message: 'Please input your re password!' }]}
            >
                <Input allowClear suffix="VNĐ" onChange={onChange}/>
            </Form.Item>

            <Form.Item
                label="Số lượng hàng"
                name="numberInStock"
                rules={[{ required: true, message: 'Please input your re password!' }]}
            >
                <Input allowClear type="number" suffix="chiếc" onChange={onChange}/>
            </Form.Item>
            <button type="submit" onClick={handleSubmit}>Add</button>
        </Form>
    )
}

export default FormUpProduct 