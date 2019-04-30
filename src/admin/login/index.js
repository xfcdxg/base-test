import React from 'react'
import {
  Form, Icon, Input, Button, Message,
} from 'antd'
import { browserHistory } from 'react-router'
import { get, setStore } from 'mulan-lib'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '管理后台'
    }
  }
  handleLogin(values) {
    const { userName, password } = values
    // mockLogin start
    if (userName === 'admin' && password === '111111') {
      setStore('admininfo', { adminKey: 'test' }, 'session')
      Message.info('登陆成功', 2, () => {
        browserHistory.push('/admin')
      })
    } else {
      Message.info('用户名或密码错误', 1)
    }
    // mockLogin end



    // get('/api/adminLogin', { userName, pwd: password }).then(({ code, data, msg }) => {
    //   if(code === '9999') {
    //     setStore('admininfo', data, 'session')
    //
    //     Message.info('登陆成功', 2, () => {
    //       browserHistory.push('/admin')
    //     })
    //
    //   } else {
    //     Message.info(msg, 10)
    //   }
    // })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleLogin(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { title } = this.state
    return (
      <div style={{ width: '300px', height: '200px', margin: '10% auto' }}>
        <h5 style={{ textAlign: 'center', marginBottom: '20px' }}>{ title }</h5>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入账号' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'login' })(Login);
