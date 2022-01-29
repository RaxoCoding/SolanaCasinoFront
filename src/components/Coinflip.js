import React from "react";
import SolanaLogo from './solanaLogo.png'
import SolanaLogoInvert from './solanaLogoInvert.png'
import Countdown from 'react-countdown';
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Progress} from 'antd';


const Coinflip = (props) => {

    const splitText = (text) => {
        let container = [];
        for (var x = 0; x < text.length; x++)
        {
            container.push(<div className="loading__letter" style={{animationDelay: ((0.1 * (x + 1)) + 's')}}>{text.charAt(x)}</div>);
        } 
        return container;
    }

    return (
        <>
            {props.userWallet == props.wallet1 && props.state == "open" ?
            <>
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
            <div className="coinflip-div">
                <div className="loading-container">
                    <div className="loading">
                        {splitText('Waiting...')}
                    </div>
                </div>
                <p>Your Side:</p>
                <img style={{width: '45px', border: 'solid 2px #DC1FFF', borderRadius: '100%'}} src={props.coin == '1' ? SolanaLogo : SolanaLogoInvert}/>
            </div>
            </Modal>
            </>
            : props.state === 'started' ? <>
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
            <div className="coinflip-div">
                <div id="coin" className={props.result}>
                    <div className="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                <p className="countdownTimer" id="countdown"> <Countdown 
                date={Date.now() + 5000} 
                intervalDelay={1000}
                precision={0}
                onComplete={props.coinflipFinish}
                renderer={data => <div>{data.seconds}</div>} 
                /> </p>
                <p>{props.wallet1} <br/> vs <br/> {props.wallet2}</p>
            </div>
            </Modal>
            </> : props.state === 'starting' ? <>
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
            <div className="coinflip-div">
                <div id="coin" className={props.result}>
                    <div className="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                 <div className="loading-container" style={{marginTop: '30px'}}>
                    <div className="loading">
                        {splitText('Starting...')}
                    </div>
                </div>
                <p>{props.wallet1} <br/> vs <br/> {props.wallet2}</p>
            </div>
            </Modal> </> : props.state === 'open' ? <>
            <Modal
                title={"Coinflip " + props.price + ' SOL'}
                visible={props.visible}
                onCancel={props.onCancel}
                footer=
                {props.transactionPercentage != 0 ? 
                <Button key="close" onClick={props.onCancel}>
                Close
                </Button> 
                :
                <>
                    <Button key="close" onClick={props.onCancel}>
                        Cancel
                    </Button>
                    <Button key="close" onClick={props.onJoin}>
                        Join
                    </Button> 
                </> }
            >
                <div className="coinflip-div">
                    <div id="coin" className={props.result}>
                    <div className="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                    <p className="countdownTimer"> Not Started </p>
                    <p> Join Against {props.wallet1} <br/> for {props.price} SOL</p>
                </div>
                <Progress percent={props.transactionPercentage} status={props.transactionError ? 'exception' : 'none'} size="small"  />
                {props.transactionPercentage == 75 && !props.transactionError ?                 
                <div className="loading-container">
                    <div className="loading">
                        {splitText('Confirming Transaction...')}
                    </div>
                </div> : props.transactionPercentage == 25 && !props.transactionError ||  props.transactionPercentage == 50 && !props.transactionError ?
                <div className="loading-container">
                    <div className="loading">
                        {splitText('Joining...')}
                    </div>
                </div> : null
                }
            </Modal>
            </> : <>
            <Modal
                title={"Coinflip " + props.price + ' SOL'}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
                <div className="coinflip-div">
                    <div id="coin" className={props.result + '2'}>
                    <div className="side-a">
                        <img src={SolanaLogoInvert}/>
                    </div>
                    <div className="side-b">
                        <img src={SolanaLogo}/>
                    </div>
                </div>
                    <p className="countdownTimer">Finished </p>
                   <p>Winner: <br /> {props.result === 'heads' && props.coin === '1' ? props.wallet1 : props.result === 'tails' && props.coin === '2' ? props.wallet1 : props.wallet2}</p>
                </div>
                
            </Modal>
            </>
            }
        </>
    );
}

export default Coinflip;
