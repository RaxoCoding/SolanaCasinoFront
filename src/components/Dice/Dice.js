import React from "react";
import Countdown from 'react-countdown';
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Progress} from 'antd';
import DiceRoll from './DiceRoll'

const Dice = (props) => {

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
                title={"Dice " + props.price + " SOL"}
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
            </div>
            </Modal>
            </>
            : props.state === 'starting' ? <>
            <Modal
                title={"Dice " + props.price + " SOL"}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
            <div className="coinflip-div">
                <div id="dice" className={props.rolluser1}>
                    <DiceRoll state={props.state} rolluser1={props.rolluser1} rolluser2={props.rolluser2} />
                </div>
                <div className="loading-container" style={{marginTop: '30px'}}>
                    <div className="loading">
                        {splitText('Starting...')}
                    </div>
                </div>
                <p>{props.wallet1} <br/> vs <br/> {props.wallet2}</p>
            </div>
            </Modal>
            </> : props.state === 'started' ? <>
            <Modal
                title={"Dice " + props.price + " SOL"}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
            <div className="coinflip-div">
                <div id="dice" className={props.rolluser1}>
                    <DiceRoll state={props.state} rolluser1={props.rolluser1} rolluser2={props.rolluser2} />
                </div>
                <p className="countdownTimer" id="countdown"> <Countdown 
                date={Date.now() + 5000}
                intervalDelay={1000}
                precision={0}
                onComplete={props.diceFinish}
                renderer={data => <div>{data.seconds}</div>} 
                /> </p>
                <p>{props.wallet1} <br/> vs <br/> {props.wallet2}</p>
            </div>
            </Modal>
            </> : props.state === 'open' ? <>
            <Modal
                title={"Dice " + props.price + ' SOL'}
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
                    <div id="dice" className={props.rolluser1}>
                        <DiceRoll state={props.state} rolluser1={props.rolluser1} rolluser2={props.rolluser2} />
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
                title={"Dice " + props.price + ' SOL'}
                visible={props.visible}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                    Back
                    </Button>,
                ]}
            >
                <div className="coinflip-div">
                    <div id="dice" className={props.rolluser1 + '2'}>
                    <DiceRoll state={props.state} rolluser1={props.rolluser1} rolluser2={props.rolluser2} />
                </div>
                    <p className="countdownTimer">Finished </p>
                   <p>Winner: <br /> {props.rolluser1 > props.rolluser2 ? props.wallet1 : props.wallet2}</p>
                </div>
                
            </Modal>
            </>
            }
        </>
    );
}

export default Dice;
