const net = require('net');
const stdin = process.stdin;

stdin.setEncoding('utf8')

const client = net.connect({
  host: '192.168.88.218',
  port: 50541,
  encoding: 'utf8'
})

client.on('data', (data) => {
  console.log(data);
});