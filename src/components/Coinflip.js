import React from "react";
import SolanaLogo from './solanaLogo.png'
import SolanaLogoInvert from './solanaLogoInvert.png'
import Countdown from 'react-countdown';
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal } from 'antd';


const Coinflip = (props) => {

    return (
        <>
            {props.state === 'started' ? <>
            <Modal
                title={"Coinflip " + props.price + " SOL"}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
            <div class="coinflip-div">
                <div id="coin" class={props.result}>
                    <div class="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                <p class="countdownTimer" id="countdown"> <Countdown 
                date={Date.now() + 5000} 
                intervalDelay={0}
                precision={0}
                onComplete={props.coinflipFinish}
                renderer={props => <div>{props.seconds}</div>} 
                /> </p>
                <p>{props.wallet1} <br/> vs <br/> {props.wallet2}</p>
            </div>
            </Modal>
            </> : props.state === 'open' ? <>
            <Modal
                title={"Coinflip " + props.price}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={props.onJoin}
                okText="Join"
                cancelText="Cancel"
            >
                <div class="coinflip-div">
                                <div id="coin" className={props.result}>
                    <div class="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                    <p class="countdownTimer"> Not Started </p>
                    <p> Join Against {props.wallet1} <br/> for {props.price} SOL</p>
                </div>
                
            </Modal>
            </> : <>
            <Modal
                title={"Coinflip " + props.price}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
                <div class="coinflip-div">
                    <div id="coin" className={props.result + '2'}>
                    <div class="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                    <p class="countdownTimer">Finished </p>
                   <p>Winner: <br /> {props.result === 'heads' && props.coin === '1' ? props.wallet1 : props.result === 'tails' && props.coin === '2' ? props.wallet1 : props.wallet2}</p>
                </div>
                
            </Modal>
            </>
            }
        </>
    );
}

export default Coinflip;
