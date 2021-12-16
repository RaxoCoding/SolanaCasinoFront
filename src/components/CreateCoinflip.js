import React, {useState} from "react";
import SolanaLogo from './solanaLogo.png'
import SolanaLogoInvert from './solanaLogoInvert.png'
import Countdown from 'react-countdown';
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Radio, InputNumber } from 'antd';


const CreateCoinflip = (props) => {
    const [coin, setCoin] = useState('0');
    const [price, setPrice] = useState(1);

    const handleCoinChange = (e) => {
        setCoin(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e);
    };

    return (
        <>
            <Modal
                title={"Coinflip " + props.price + " SOL"}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={() => {props.onCreateFlip(
                    {
                        price: price,
                        name: 'Test',
                        wallet: null,
                        coin: coin,
                    }
                )}}
                cancelText={"Cancel"}
                okText={"Create Coinflip"}
            >
            <div class="coinflip-div">
                    <p>Pick your side</p>
                    <Radio.Group value={coin} onChange={handleCoinChange}>
                        <Radio.Button style={{height: '0px', textAlign: 'center', transform: 'rotateX(180deg)', marginTop: '50px'}} value="1"><img style={{width: '50px', border: 'solid 2px #DC1FFF', borderRadius: '100%', marginTop: '5px', transform: 'rotateX(180deg)'}} src={SolanaLogo}/></Radio.Button>
                        <Radio.Button style={{height: '0px', textAlign: 'center', transform: 'rotateX(180deg)', marginTop: '50px'}} value="2"><img style={{width: '50px', border: 'solid 2px #DC1FFF', borderRadius: '100%', marginTop: '5px', transform: 'rotateX(180deg)'}} src={SolanaLogoInvert}/></Radio.Button>
                    </Radio.Group>
                    <p style={{marginTop: '-30px'}}>Amount to Wager:</p>
                    <InputNumber
                        onChange={handlePriceChange}
                        defaultValue={price}
                        min="0.05"
                        step="0.05"
                        stringMode
                    />
            </div>
            </Modal>
        </>
    );
}

export default CreateCoinflip;
