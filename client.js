const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:1337', {
  perMessageDeflate: false
});

ws.on('open', function open() {
  ws.send(JSON.stringify({
    message: 'hi'
  }))
});

ws.on('message', function incoming(data) {
  console.log(data);
});