import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import CoinflipMenu from './components/CoinflipMenu'
import Home from './components/Home'
import Logo from './components/solanaLogo.png'
import ConnectToPhantom from "./components/Phantom/ConnectToPhantom.tsx";
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  StockOutlined,
  UserOutlined,
  HomeOutlined,
  ClockCircleOutlined,
  DollarOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  React.useEffect(() => {
    const parsedData = localStorage.getItem("currentPage") || "Home"
    setCurrentPage(parsedData);
  }, [])

  async function changeCurrentPage(page) {
    localStorage.setItem("currentPage", page);
    setCurrentPage(page)
  }

  return (
    <Layout>
      <Header className="header" >
        <img style={{width: '50px', display: 'inline', position: 'relative', bottom: '0px', display: 'inline'}} src={Logo} alt="Logo" />
        <Menu style={{display: 'inline', float: 'right'}}theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <ConnectToPhantom />
        </Menu>
      </Header>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => { setCollapsed(!collapsed)}}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={currentPage == "CoinflipMenu" ? ['2'] : ['1']} mode="inline">
            <Menu.Item key="1" style={{ marginTop: '0px'}} icon={<HomeOutlined />} onClick={() => changeCurrentPage("Home")}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DollarOutlined />} onClick={() => changeCurrentPage("CoinflipMenu")}>
              1v1 Coinflip
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {currentPage == "CoinflipMenu" ? <CoinflipMenu /> : <Home />}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@RaxoCoding</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
