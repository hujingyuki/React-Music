import React from 'react';
import {
  Form, Icon, Input, Button
} from 'antd';

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', { 
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" size="large" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" size="large" />
          )}
        </Form.Item>
        <div className="forgot-div"><span>忘记密码</span></div>
        <div className="login-form-button">
          <Button type="primary" htmlType="submit">
            登 录
          </Button>
        </div>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login;