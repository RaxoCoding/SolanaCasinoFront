import React, { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button, Popover, Input, Form, Card, Row, Col, Carousel, Rate, Statistic } from 'antd';
import Icon, {
  StockOutlined,
  UserOutlined,
  RobotOutlined,
  ReloadOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import Logo from './solanaLogo.png'

const { Meta } = Card;

function Profile(props) {
    const [loading, setLoading] = useState(false);

    const changeName = () => {
        if(props.userWallet === 'none' || document.getElementById('name').value === ''){
            return;
        }
        props.userData.name = document.getElementById('name').value;
        axios.post('https://SolanaCasinoServer.gomez0015.repl.co/user/update', {updatedUser: props.userData})
        .then(res => {
            props.setUserData(res.data);
        }).catch(err => {
        console.error(err);
        })
    };

  return ( 
    <div style={{textAlign: 'center'}}>
        <div style={{textAlign: 'right',}}>
            {loading ? 
            <LoadingOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '80px', right: '5vw'}}/> 
            : 
            <ReloadOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '80px', right: '5vw'}} onClick={() => {props.loadNewUserData(); setLoading(true);  setTimeout(() => {setLoading(false);}, 1000);}}/>}
        </div>
        <Row gutter={[16, 16]} style={{marginTop: "25px"}}>
          <Col span={24}>  <Card>
            {props.userWallet === 'none' ? 
            <p>Not Logged In.</p>
            :
            <>
                <p>Name: {props.userData.name}</p>
                <p>Wallet: {props.userData.wallet}</p>
                <Statistic title="Total Coinflips" value={props.userData.totalCoinflips} /> 
                <Statistic title="Total Dice Games" value={props.userData.totalDice} />
                <Statistic title="Total Gambled" value={props.userData.totalGambled} />
                <Input id='name' placeholder='New Name' style={{width: '20%'}}/>
                <Button onClick={() => {changeName()}} >Set Name</Button>
            </>
            }
          </Card> </Col>
        </Row>
    </div>
  );
}

export default Profile;