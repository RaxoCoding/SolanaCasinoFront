import React, { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button, Popover, Input, Form, Card, Row, Col, Carousel, Rate, Statistic } from 'antd';
import {
  StockOutlined,
  UserOutlined,
  RobotOutlined
} from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import Logo from './casinoLogo.png'

const { Meta } = Card;

function Home() {
  const [totalCoinflips, setTotalCoinflips] = useState(0);
  const [totalDice, setTotalDice] = useState('0 SOL');
  const [totalGambled, setTotalGambled] = useState('0 SOL');


  const loadNewData = () => {
    axios.get('https://SolanaCasinoServer.gomez0015.repl.co/getData')
    .then(res => {
      setTotalCoinflips(res.data[0].count);
      setTotalDice(res.data[2].count);
      setTotalGambled(res.data[1].count + ' SOL');
    }).catch(err => {
      console.error(err);
    })
  };

  React.useEffect(() => {
    loadNewData();
  }, []);


  React.useEffect(() => {
    var handle=setInterval(loadNewData, 30000);    

    return ()=>{
        clearInterval(handle);
    }
  });

  const contentStyle = {
    height: '500px',
    marginTop: '20px',
    color: '#fff',
    lineHeight: '160px',
    background: '#001529',
    padding: '50px',
    width: '100%',
  };

  return ( 
    <div style={{textAlign: 'center'}}>
        <Row gutter={[16, 16]}>
          <Col span={24}>  
            <Card title={<div><img style={{width: '150px'}} src={Logo} alt="Logo" /><h2 style={{marginBottom: '0px'}}>Solana Casino</h2><h5>('The Best Solana Casino')</h5></div>}> 
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{marginTop: "25px"}}>
          <Col span={24}>  <Card> 
            <Statistic title="Total Coinflips" value={totalCoinflips} /> 
            <Statistic title="Total Dice Games" value={totalDice} /> 
            <Statistic title="Total Gambled" value={totalGambled} /> 
          </Card> </Col>
        </Row>
    </div>
  );
}

export default Home;