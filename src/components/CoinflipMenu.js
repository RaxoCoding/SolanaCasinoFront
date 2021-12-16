import React, {useRef, useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Alert } from 'antd';
import {
  StockOutlined,
  UserOutlined,
  RobotOutlined,
  ReloadOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import SolanaLogo from './solanaLogo.png'
import SolanaLogoInvert from './solanaLogoInvert.png'
import InfiniteScroll from 'react-infinite-scroll-component';
import Coinflip from './Coinflip.js'
import CreateCoinflip from './CreateCoinflip.js'
import sendTransferInstruction from './Phantom/SendTransaction.tsx'

function CoinflipMenu() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [createVisibile, setCreateVisibile] = useState(false);
    const [needsUpdate, setNeedsUpdate] = useState(false);

    const loadNewData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://SolanaCasinoServer.gomez0015.repl.co/getCoinflips')
        .then(res => res.json())
        .then(body => {
          if(body != data) {
            body.sort((a, b) => (parseInt(a.price) < parseInt(b.price)) ? 1 : -1)
            for (let i = 0; i < body.length; i++) {
              if(data.length != 0) {
                if(data[i].visible == true) {
                  body[i].visible = true;
                } else {
                  body[i].visible = false;
                }
              } else {
                body[i].visible = false;
              }
            }
            setData([...body]);
            setTimeout(() => {setLoading(false);}, 1000);
          } else {
            setTimeout(() => {setLoading(false);}, 1000);
          }
        })
        .catch(() => {
            setTimeout(() => {setLoading(false);}, 1000);
        });
    };

    React.useEffect(() => {
      loadNewData();
    }, [])

    React.useEffect(() => {
      if(needsUpdate) {
        var handle=setInterval(loadNewData,5000);    

        return ()=>{
          clearInterval(handle);
        }
      }
    });

    const updateData = (item) => { 
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/getCoinflipResults', {coinflipData: item})
      .then(function (response) {
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    const endCoinflip = (item) => { 
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/endCoinflip', {coinflipData: item})
      .then(function (response) {
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const createCoinflip = (item) => {
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/addCoinflip', {name: item.name, price: item.price, coin: item.coin, wallet: item.wallet})
      .then(function (response) {
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const childCompRef = useRef();

    return (
    <div style={{
      textAlign: 'center',
      }} >
    <div style={{textAlign: 'right',}}>
      {loading ? 
      <LoadingOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '110px', right: '50px'}}/> 
      : 
      <ReloadOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '110px', right: '50px'}} onClick={() => {loadNewData();}}/>}
    </div>
    <Button
    style={{
      marginBottom: '25px', marginTop: '-25px',
    }}
    onClick={() => {setCreateVisibile(true)}}
    >Create Coinflip</Button>
    <CreateCoinflip visible={createVisibile} onCancel={() => {setCreateVisibile(false)}} onCreateFlip={(item) => {sendTransferInstruction(item, createCoinflip, 'add')}}/>
    <div
      id="scrollableDiv"
      style={{
        height: 750,
        textAlign: 'left',
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadNewData}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>Thats all, folks!</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.user1.coin == '1' ? SolanaLogo : SolanaLogoInvert} />}
                title={<a href="#">{item.user1.name + ' - ' + item.price + 'sol'}</a>}
                description={item.user1.wallet}
              />
              <div>
              {item.result == 'none' ||  item.state != 'finished' ? null :  item.result == 'heads' ? <img src={SolanaLogo} style={{width: '25px', marginRight: '5px'}} /> : <img src={SolanaLogoInvert} style={{width: '25px', marginRight: '5px'}} />}
              <Button 
              onClick={() => {
                item.visible = true
                setData([...data])
                setNeedsUpdate(true);
              }
              }
              >{item.state != 'open' ? 'Watch' : 'Join'}</Button>
              <Coinflip coinflipFinish={() => {endCoinflip(item);}} coin={item.user1.coin} state={item.state} visible={item.visible} price={item.price} wallet1={item.user1.wallet} wallet2={item.user2.wallet} onCancel={() => {item.visible = false; setNeedsUpdate(false); setData([...data]);}} onJoin={() => {sendTransferInstruction(item, updateData, 'update')}} result={item.result}/>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
    </div>
    );
}

export default CoinflipMenu;