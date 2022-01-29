import React, { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button, Popover, Input, Form, Card, Row, Col, Carousel, Rate, Statistic, Modal } from 'antd';
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

function ProfilePopup(props) {
  return ( 
    <div style={{textAlign: 'center'}}>
        <Modal
          visible={props.visible}
          title="User Profile"
          footer={null}
          onCancel={props.onCancel}
        >
        <Row gutter={[16, 16]} style={{marginTop: "25px"}}>
          <Col span={24}>  <Card>
            <>
                <p>Name: {props.userData.name}</p>
                <p>Wallet: {props.userData.wallet}</p>
                <Statistic title="Total Coinflips" value={props.userData.totalCoinflips} /> 
                <Statistic title="Total Gambled" value={props.userData.totalGambled} />
            </>
          </Card> </Col>
        </Row>
        </Modal>
    </div>
  );
}

export default ProfilePopup;