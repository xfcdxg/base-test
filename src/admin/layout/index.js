import React from 'react'
import { browserHistory } from 'react-router'

import { Layout, Menu, Breadcrumb } from 'antd';
import './admin.css'
import menuList, { getCurrentBread } from './menu'
const { Header, Content, Footer } = Layout

const { SubMenu } = Menu

// <img src={ logo } width='50px' />
export default (props => {
  const { children, location } = props
  const { pathname } = location

  const defaultKey = pathname.lastIndexOf('/') === pathname.length - 1 ? pathname.substr(0, pathname.length - 1) : pathname

  const breadName = getCurrentBread(defaultKey)

  return (
    <Layout className="layout">
        <Header>
          <div className="logo" style={{ marginRight: '50px', lineHeight: '35px' }}>

          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[ defaultKey ]}
            style={{ lineHeight: '64px' }}
          >
            {
              menuList.map(o => {
                const { name, children = [] } = o

                const createItem = ({ name, url }) => (
                  <Menu.Item key={ url } onClick={ () => browserHistory.push(url) }>{ name }</Menu.Item>
                )

                if (children.length > 0) {
                  return (
                    <SubMenu title={ name }>
                      {
                        children.map(o2 => createItem(o2))
                      }
                    </SubMenu>
                  )
                } else {
                  return createItem(o)
                }
              })
            }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{ breadName }</Breadcrumb.Item>
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
