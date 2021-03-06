import React, { useState, useEffect } from 'react'
import './style.less'
import { Layout, Menu, Icon } from 'antd'
import { NavLink, Switch, Redirect, Route } from 'react-router-dom'
import Tables from '@/pages/table'
import Tagg from '@/pages/table/tag'
import { connect } from 'react-redux'


const { Header, Content, Sider } = Layout


function Home (props) {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const { tagdata } = props
  const fn = () => {

  }
  return (
    <div className="pages-home">
      <Layout
        className="layout"   //容器 className
        style={{background:"#FFF"}}  //指定样式
        >
        <Header style={{background:"white",color:"black",fontSize:"18px"}}>
          <p>
            <span style={{float:'left'}}>AppUl Admin </span>
            <span style={{float:'right'}}>John Doe</span>
          </p>
        </Header>
        <Layout>
          <Sider style={{height:"300px",background:"#f1f1f1"}}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"Collapsed={collapsed}
              style={{color:"black"}}
              >
              <Menu.Item key="1">
                <Icon type="mail" />
                <span><NavLink exact to="/home/table">Home</NavLink></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="calendar" />
                Frentend
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="calendar" />
                UI Elements
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="calendar" />
                Forms
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="calendar" />
                Tables
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="calendar" />
                Pages
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="calendar" />
                Js plugins
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{background:"white"}}>
            {/* <Switch>
              <Route path="/home/table" component={Tables}/>
              <Redirect to="/home/table"/>
            </Switch> */}
            <Tagg data={tagdata} fn/>
            <Tables />
            

          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default connect(state => {
  return {
    tagdata: state.tag.data,
  }
},{

})(Home)