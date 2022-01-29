import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import CoinflipMenu from './components/CoinflipMenu'
import DiceMenu from './components/Dice//DiceMenu'
import Home from './components/Home'
import Profile from './components/Profile'
import Ranking from './components/Ranking'
import Logo from './components/solanaLogo.png'
import ConnectToPhantom from "./components/Phantom/ConnectToPhantom.tsx";
import adTest1 from "./components/adTest1.jpg";
import adTest2 from "./components/adTest2.jpg";
import { Layout, Menu, Breadcrumb, Button, Typography, Carousel } from 'antd';
import {
  StockOutlined,
  UserOutlined,
  HomeOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [userWallet, setUserWallet] = useState('none');
  const [userData, setUserData] = useState({
    wallet: 'none',
    totalCoinflips: 0,
    totalGambled: 0,
    name: 'none',
    picture: 'none'
  });

  React.useEffect(() => {
    const parsedData = localStorage.getItem("currentPage") || "Home"
    setCurrentPage(parsedData);
  }, [])

  const loadNewUserData = () => {
    if(userWallet === 'none'){
        return;
    }
    axios.post('https://SolanaCasinoServer.gomez0015.repl.co/user', {userWallet: userWallet})
    .then(res => {
      setUserData(res.data);
    }).catch(err => {
      console.error(err);
    })
  };

  React.useEffect(() => {
    loadNewUserData();
  }, [userWallet]);

  async function changeCurrentPage(page) {
    localStorage.setItem("currentPage", page);
    setCurrentPage(page)
  }

  return (
    <>
    <BrowserView>
    <Layout>
      <Header className="header" >
        <img style={{width: '50px', display: 'inline', position: 'relative', bottom: '0px'}} src={Logo} alt="Logo" />
        {/* <div className="slideshow" style={{position: 'absolute', width: '800px', height: '50px', display: 'inline', top: '7px', bottom: '0px', left: '300px', overflow: 'hidden'}}>
          <img style={{position: 'absolute', height: '50px'}} src={adTest1} alt="ad" />
          <img style={{position: 'absolute', height: '50px', left: '800px'}} src={adTest2} alt="ad" />
         </div> Ad SlideShow */}
        <Menu style={{display: 'inline', float: 'right'}}theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <ConnectToPhantom setUserWallet={setUserWallet}/>
        </Menu>
      </Header>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => { setCollapsed(!collapsed)}}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={currentPage == "CoinflipMenu" ? ['2'] : ['1']} mode="inline">
            <Menu.Item key="1" style={{ marginTop: '0px'}} icon={<HomeOutlined />} onClick={() => changeCurrentPage("Home")}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />} onClick={() => changeCurrentPage("Profile")}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<TrophyOutlined />} onClick={() => changeCurrentPage("Ranking")}>
              Ranking
            </Menu.Item>
            <Menu.Item key="4" icon={<DollarOutlined />} onClick={() => changeCurrentPage("CoinflipMenu")}>
              1v1 Coinflip
            </Menu.Item>
            <Menu.Item key="5" icon={<DollarOutlined />} onClick={() => changeCurrentPage("DiceMeu")}>
              1v1 Dice
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {currentPage == "CoinflipMenu" ? <CoinflipMenu userData={userData}/> : currentPage == "Home" ? <Home /> : currentPage == "Profile" ? <Profile loadNewUserData={() => {loadNewUserData();}} userWallet={userWallet} userData={userData} setUserData={setUserData}/> : currentPage == "Ranking" ? <Ranking userWallet={userWallet} /> : <DiceMenu userData={userData} />}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><a href="https://twitter.com/RaxoCoding" target="_blank">@RaxoCoding</a></Footer>
        </Layout>
      </Layout>
    </Layout>
    </BrowserView>
    <MobileView style={{ textAlign: 'center' }}>
      <Title>Available for mobile soon...</Title>
    </MobileView>
    </>
  );
}

export default App;
