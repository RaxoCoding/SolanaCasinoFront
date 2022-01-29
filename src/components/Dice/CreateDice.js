import React, {useState} from "react";
import SolanaLogo from '../solanaLogo.png'
import { Button, Skeleton, Col, Row, Popover, List, Avatar, Divider, Modal, Radio, InputNumber, Input, Progress } from 'antd';


const CreateCoinflip = (props) => {
    const [price, setPrice] = useState(1);
    const [name, setName] = useState('Hello World!');

    const handlePriceChange = (e) => {
        setPrice(e);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

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
            <Modal 
                title="Dice Creation"
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
                        <Button key="close" onClick={() => {props.onCreateDice(
                            {
                                price: price,
                                name: name,
                                wallet: null,
                            }
                        )}}>
                            Create Dice
                        </Button> 
                    </> }
            >
                <div class="coinflip-div">
                        <p style={{marginTop: '0'}}>Amount to Wager:</p>
                        <InputNumber
                            onChange={handlePriceChange}
                            defaultValue={price}
                            min="0.05"
                            step="0.05"
                            stringMode
                        />
                        <p style={{marginTop: '10px'}}>Dice Name:</p>
                        <Input
                            maxLength={12}
                            style={{width: '125px'}}
                            onChange={handleNameChange}
                            value={name}
                        />
                        <Progress percent={props.transactionPercentage} status={props.transactionError ? 'exception' : 'none'} size="small"  />
                        {props.transactionPercentage == 75 && !props.transactionError ?                 
                        <div className="loading-container">
                            <div className="loading">
                                {splitText('Confirming Transaction...')}
                            </div>
                        </div> : props.transactionPercentage == 25 && !props.transactionError ||  props.transactionPercentage == 50 && !props.transactionError ?
                        <div className="loading-container">
                            <div className="loading">
                                {splitText('Creating Dice...')}
                            </div>
                        </div> : null
                        }
                </div>
            </Modal>
        </>
    );
}

export default CreateCoinflip;
