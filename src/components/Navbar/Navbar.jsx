import React from 'react'
import './Navbar.css'
import { scroller } from "react-scroll";

import {
  BookOutlined,
  CiOutlined,
  FileDoneOutlined,
  FolderOutlined,
  HomeOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,

} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-scroll';
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const handleScroll = (section) => {
  scroller.scrollTo(section, {
    smooth: true,
    duration: 500,
    offset: -50, 
  });
};

const items = [
  { key: "home", icon: <HomeOutlined />, label: "" },
  { key: "services", icon: <UserOutlined />, label: "" },
  { key: "education", icon: <FileDoneOutlined />, label: "" },
  { key: "recomendation", icon: <MessageOutlined />, label: "" },
  { key: "portfolio", icon: <FolderOutlined />, label: "" },
  { key: "blog", icon: <BookOutlined />, label: "" },
  { key: "contact", icon: <TeamOutlined />, label: "" },
];



const Navbar = () => {

      const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <div className='nav-head'>
      <div className='navbar'>
            <Layout hasSider>
                <Sider  style={siderStyle} >
                    <div className="demo-logo-vertical" />
                    <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={["home"]}
                      items={items}
                      onClick={({ key }) => handleScroll(key)} // 🔑 shu joyni qo‘shasan
                    />
                </Sider>
                </Layout>
            <div className="nav-top">
                <div className="nav-language"></div>
                <div className="nav-theme"></div>
            </div>
            <div className="nav-box">
                <div className="nav-option">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
