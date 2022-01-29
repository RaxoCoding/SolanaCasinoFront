import React, {useRef, useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Empty, Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Alert } from 'antd';
import Icon, {
  StockOutlined,
  UserOutlined,
  RobotOutlined,
  ReloadOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import SolanaLogo from './solanaLogo.png'
import SolanaLogoInvert from './solanaLogoInvert.png'
import InfiniteScroll from 'react-infinite-scroll-component';
import Coinflip from './Coinflip.js'
import CreateCoinflip from './CreateCoinflip.js'
import sendTransferInstruction from './Phantom/SendTransaction.tsx'
import Chat from './Chat.js'

function CoinflipMenu(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [createVisibile, setCreateVisibile] = useState(false);
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [transactionPercent, setTransactionPercent] = useState(0);
    const [transactionError, setTransactionError] = useState(false);

    const loadNewData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://SolanaCasinoServer.gomez0015.repl.co/getCoinflips')
        .then(res => res.json())
        .then(body => {
          body.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price)) ? 1 : -1);
          body.sort((a, b) => (a.state != 'finished' && b.state == 'finished') ? 1 : -1);
          for (let i = 0; i < data.length; i++) {
            if(i > (body.length - 1)) {
              i = data.length;
              return;
            }
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
        })
        .catch((e) => {
            console.log(e);
            setTimeout(() => {setLoading(false);}, 1000);
        });
    };

    React.useEffect(() => {
      loadNewData();
    }, [])

    React.useEffect(() => {
      if(needsUpdate) {
        var handle=setInterval(needsUpdate ? loadNewData : null,5000);    
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
        setCreateVisibile(false);
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const childCompRef = useRef();

    let EmptyList = {
      emptyText: (
        <Empty description="No Coinflips :(" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )
    };

    return (
    <div>
    <div style={{textAlign: 'right',}}>
      {loading ? 
      <LoadingOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '110px', right: '21vw'}}/> 
      : 
      <ReloadOutlined style={{fontSize: '26px', cursor: 'pointer', position: 'absolute', top: '110px', right: '21vw'}} onClick={() => {loadNewData();}}/>}
    </div>
    <Button
    style={{
      marginBottom: '25px', marginTop: '-25px',
    }}
    onClick={() => {setCreateVisibile(true); 
    if(transactionError == true || transactionPercent == 100) {
      setTransactionPercent(0); 
      setTransactionError(false);
    }}}
    >Create Coinflip</Button>
    <CreateCoinflip transactionPercentage={transactionPercent} transactionError={transactionError} visible={createVisibile} onCancel={() => {setCreateVisibile(false)}} onCreateFlip={(item) => {sendTransferInstruction(item, createCoinflip, setTransactionPercent, setTransactionError, 'add')}}/>
    <div
      id="scrollableDiv"
      style={{
        height: 750,
        textAlign: 'left',
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        marginRight: '300px',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        hasMore={false}
        endMessage={<Divider plain>Thats all, folks!</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          locale={EmptyList}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                key={item.id}
                avatar={<Avatar src={item.user1.coin == '1' ? SolanaLogo : SolanaLogoInvert} />}
                title={<a href="#">{item.user1.name + ' - ' + item.price + 'sol'}</a>}
                description={item.user1.wallet}
              />
              <div>
              {item.result == 'none' ||  item.state != 'finished' ? null :  item.result == 'heads' ? <img src={SolanaLogo} style={{width: '25px', marginRight: '5px'}} /> : <img src={SolanaLogoInvert} style={{width: '25px', marginRight: '5px'}} />}
              <Button 
              onClick={() => {
                if(transactionError == true || transactionPercent == 100) {
                  setTransactionPercent(0); 
                  setTransactionError(false);
                }
                item.visible = true;
                setData([...data])
                setNeedsUpdate(true);
              }
              }
              >{item.state != 'open' || item.user1.wallet === props.userData.wallet ? 'Watch' : 'Join'}</Button>
              <Coinflip userWallet={props.userData.wallet} transactionPercentage={transactionPercent} transactionError={transactionError} coinflipFinish={() => {setTimeout(() => {setNeedsUpdate(true); endCoinflip(item);}, 2000);}} coin={item.user1.coin} state={item.state} visible={item.visible} price={item.price} wallet1={item.user1.wallet} wallet2={item.user2.wallet} onCancel={() => {item.visible = false; setNeedsUpdate(false); setData([...data]);}} onJoin={() => {setNeedsUpdate(false); sendTransferInstruction(item, updateData, setTransactionPercent, setTransactionError, 'update')}} result={item.result}/>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
    <div className="chat">
      <Chat walletName={props.userData.name === 'none' ? 'Guest' : props.userData.name}/>
    </div>
    </div>
    );
}

export default CoinflipMenu;