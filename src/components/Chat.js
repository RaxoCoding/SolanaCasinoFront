import React, {useState, componentDidMount} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, message, Avatar, Skeleton, Divider, Button, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import SolanaLogo from './solanaLogo.png'

function Chat(props) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
    

    React.useEffect(() => {
      fetch('https://SolanaCasinoServer.gomez0015.repl.co/messages')
        .then((res) => res.json())
        .then((res) => {
          setMessages(res);
        })
    })

  async function addToMessageBoard (event) {
    try{
      event.preventDefault()
    } catch (e) {
      console.log(e.message)
    }
    fetch('https://SolanaCasinoServer.gomez0015.repl.co/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: props.walletName.substring(0, 8),
        message: message,
      }),
    })
      .then((res) => {
        setMessage('');
      })
      .catch((error) => {
        console.log('Request failure: ', error)
      })
  }

  function handleChange (e) {
    setMessage(e.target.value);
  }
  

  return ( 
    <div>
      <div
        id="scrollableDiv"
        style={{
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          dataLength={messages.length}
          hasMore={false}
          scrollableTarget="scrollableDiv"
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
        >
        <List
          style={{height: '695px', textAlign: 'left', display: 'flex', flexDirection: 'column-reverse'}}
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={SolanaLogo} />}
                title={item.name}
                description={item.message}
              />
            </List.Item>
          )}
        />
        </InfiniteScroll>
      </div>
      <div>
        <form onSubmit={addToMessageBoard} id='chatForm'>
          <Input
            className="MessageinputForm"
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Message: "
          />
          <div className="Submit">
            <Button className="guestbook-message" onClick={() => {addToMessageBoard();}}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;