import React from 'react'
import { Modal, Form, Input, Button, } from 'antd'

export default 
Form.create({
  mapPropsToFields({ formdata }){
    return {
        name:Form.createFormField({
            // value:props.username.value
            value: formdata.name
        }),
        age:Form.createFormField({
            // value:props.username.value
            value: formdata.age
        }),
        msg:Form.createFormField({
          // value:props.username.value
          value: formdata.msg
        }),
        id:Form.createFormField({
          // value:props.username.value
          value: formdata.id
        }),
    }
  }
})(Model)
function Model (props) {
  const { visible, handleCancel, handleOk, ref, formdata, title }  = props
  const { getFieldDecorator } = props.form
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
  })}

  return (
    <div>
       <Modal
          title={title}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onSubmit={handleSubmit} className="login-form" 
            ref={ref}
          >
            {title=='添加'?'':
            <Form.Item>
              {getFieldDecorator('id', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
                <Input
                  placeholder="id"
                  type="hidden"
                />,
              )}
            </Form.Item>}
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
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age!' }],
              })(
                <Input
                  placeholder="age"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('msg', {
                rules: [{ required: true, message: 'Please input your msg!' }],
              })(
                <Input
                  placeholder="msg"
                />,
              )}
            </Form.Item>
            
          </Form>
        </Modal>
    </div>
  )
}