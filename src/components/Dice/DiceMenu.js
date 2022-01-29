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
import SolanaLogo from '../solanaLogo.png'
import InfiniteScroll from 'react-infinite-scroll-component';
import Dice from './Dice.js'
import CreateDice from './CreateDice.js'
import sendTransferInstruction from '../Phantom/SendTransaction.tsx'
import Chat from '../Chat.js'

function DiceMenu(props) {
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
        fetch('https://SolanaCasinoServer.gomez0015.repl.co/getDice')
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
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/getDiceResults', {diceData: item})
      .then(function (response) {
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    const endDice = (item) => { 
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/endDice', {diceData: item})
      .then(function (response) {
        loadNewData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const createDice = (item) => {
      axios.post('https://SolanaCasinoServer.gomez0015.repl.co/addDice', {name: item.name, price: item.price, wallet: item.wallet})
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
        <Empty description="No Dice Games :(" image={Empty.PRESENTED_IMAGE_SIMPLE} />
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
    >Create Dice</Button>
    <CreateDice transactionPercentage={transactionPercent} transactionError={transactionError} visible={createVisibile} onCancel={() => {setCreateVisibile(false)}} onCreateDice={(item) => {sendTransferInstruction(item, createDice, setTransactionPercent, setTransactionError, 'add')}}/>
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
                avatar={<Avatar src={SolanaLogo} />}
                title={<a href="#">{item.user1.name + ' - ' + item.price + 'sol'}</a>}
                description={item.user1.wallet}
              />
              <div>
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
              <Dice userWallet={props.userData.wallet} transactionPercentage={transactionPercent} transactionError={transactionError} diceFinish={() => {setTimeout(() => {setNeedsUpdate(true); endDice(item);}, 2000);}} state={item.state} visible={item.visible} price={item.price} wallet1={item.user1.wallet} wallet2={item.user2.wallet} onCancel={() => {item.visible = false; setNeedsUpdate(false); setData([...data]);}} onJoin={() => {setNeedsUpdate(false); sendTransferInstruction(item, updateData, setTransactionPercent, setTransactionError, 'update')}} rolluser1={item.rolluser1} rolluser2={item.rolluser2}/>
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

export default DiceMenu;