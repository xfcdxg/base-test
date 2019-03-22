import React from 'react'
import { browserHistory } from 'react-router'

import { Layout, Menu, Breadcrumb } from 'antd';
import './admin.css'
const { Header, Content, Footer } = Layout
  // <img src={ logo } width='50px' />
export default (props => {
  const { children, location } = props
  const { pathname } = location
  const defaultKey = pathname.indexOf('resource') > 0 ? '2' : '1'
  return (
    <Layout className="layout">
        <Header>
          <div className="logo" style={{ marginRight: '50px', lineHeight: '35px' }}>

          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={ () => browserHistory.push('/admin') }>page1</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{ 'page1' }</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, overflow:'hidden', overflowY: 'scroll' }}>
            { children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Co.
        </Footer>
      </Layout>
  )
})
