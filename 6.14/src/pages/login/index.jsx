import React from 'react'
import { Form, Input, Button, } from 'antd'
import { getName } from '@/actions/login'
import { connect } from 'react-redux'

export default 
Form.create({})(connect(state => {
  return {
    data: state.login.data
  }
},{
  getName
})(Login))
function Login (props) {
  const { getName } = props
  const { getFieldDecorator } = props.form
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        getName(values)
      }
  })}
  const formItemLayout = {
    labelCol: {
      xs: { span: 12 },
      sm: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 12 },
    },
  };
  return (
    <div>
       <Form { ...formItemLayout } onSubmit={handleSubmit} className="login-form" >
        
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input
              placeholder="name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your age!' }],
          })(
            <Input
              type="password"
              placeholder="password"
            />,
          )}
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
        
      </Form>
    </div>
  )
}