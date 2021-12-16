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
import Logo from './solanaLogo.png'

const { Meta } = Card;

function Account() {

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
          <Col span={24}>  <Card> <Statistic title="Active Users" value={112893} /> <Statistic title="Total Gambled" value={'10,230 SOL'} /> <Rate disabled defaultValue={4} /></Card> </Col>
        </Row>
    </div>
  );
}

export default Account;