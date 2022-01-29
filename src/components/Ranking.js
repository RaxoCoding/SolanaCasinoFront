import React, { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty, Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Alert, Card, Select } from 'antd';
import Icon, {
  StockOutlined,
  UserOutlined,
  RobotOutlined,
  ReloadOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import SolanaLogo from './solanaLogo.png'
import { Line } from '@ant-design/charts';
import Logo from './solanaLogo.png';
import ProfilePopup from './ProfilePopup';


const { Option } = Select;
const { Meta } = Card;

function Ranking(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState('1');
    const [userRanking, setUserRanking] = useState(0);
    const [profileData, setProfileData] = useState({});
    const [showProfile, setShowProfile] = useState(false);

    const loadNewData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://SolanaCasinoServer.gomez0015.repl.co/getUsers')
        .then(res => res.json())
        .then((body) => {
            list == '1' ? body.sort((a, b) => (parseFloat(a.totalCoinflips) < parseFloat(b.totalCoinflips)) ? 1 : -1) : list == '2' ? body.sort((a, b) => (parseFloat(a.totalDice) < parseFloat(b.totalDice)) ? 1 : -1) : body.sort((a, b) => (parseFloat(a.totalGambled) < parseFloat(b.totalGambled)) ? 1 : -1);
            setData([...body]);
            getRanking([...body], props.userWallet);
            setTimeout(() => {setLoading(false);}, 1000);
        })
        .catch((e) => {
            console.log(e);
            setTimeout(() => {setLoading(false);}, 1000);
        });
    };

    React.useEffect(async() => {
        loadNewData();
    }, [list, props.userWallet]);

    const getRanking = (body, wallet) => {
        if(wallet == 'none') {
            setUserRanking(0);
            return;
        } else if(list == '1') {
            var result = body.filter(obj => {
                return obj.wallet === wallet;
            })
            setUserRanking(body.indexOf(result[0]) + 1);
        } else {
            var result = body.filter(obj => {
                return obj.wallet === wallet;
            })
            setUserRanking(body.indexOf(result[0]) + 1);
        }
    }
    

    return ( 
        <>
        <ProfilePopup userData={profileData} visible={showProfile} onCancel={() => {setShowProfile(false)}}/>
        <Select defaultValue="1" style={{ width: 180 }} onChange={(e) => {setList(e);}}>
        <Option value="1">Most Coinflips</Option>
        <Option value="2">Most Dice Games</Option>
        <Option value="3">Most SOL Gambled</Option>
        </Select>
        <p style={{ display: 'inline', marginLeft: '10px'}}>Your Ranking: {userRanking}</p>
        <div style={{textAlign: 'center'}}>
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
            hasMore={false}
            endMessage={<Divider plain>Thats all, folks!</Divider>}
            scrollableTarget="scrollableDiv"
        >
            <List
            dataSource={data}
            renderItem={item => (
                <List.Item key={item.id}>
                <List.Item.Meta
                    key={item.id}
                    avatar={<Avatar src={item.picture == 'none' ? SolanaLogo : item.picture} />}
                    title={<a onClick={() => {setProfileData(item); setShowProfile(true);}}>{item.name == 'none' ? item.wallet.substring(0, 8) : item.name}</a>}
                    description={item.wallet}
                />
                {list == '1' ? <p>{item.totalCoinflips} Coinflips</p> : list == '2' ? <p>{item.totalDice} Dice Games</p> : <p>{item.totalGambled} SOL Gambled</p>}
                </List.Item>
            )}
            />
        </InfiniteScroll>
        </div>
        </div>
        </>
    );
}

export default Ranking;