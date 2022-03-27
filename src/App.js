import {useEffect} from 'react';

function App()
{
  useEffect(() =>{
    const ws = new WebSocket('wss://streamer.finance.yahoo.com');

    ws.onopen = function open() {
      console.log('connected');
      ws.send(JSON.stringify({
        subscribe: ['MSFT']
      }));
    };
    
    ws.onclose = function close() {
      console.log('disconnected');
    };
    
    ws.onmessage = function incoming(data) {
      console.log('comming message')
      console.log(Yaticker.decode(new Buffer(data.data, 'base64')))
    };
  }, []);
}
function App() {
  return (
    <div >
      <h1>STONKS</h1>
     
    </div>
  );
}

export default App;
