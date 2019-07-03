const net = require('net');
const stdin = process.stdin

stdin.setEncoding('utf8');

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.218', // change to IP address
    port: 50541,
    encoding: 'utf8'
  });

  conn.on('connect', (data) => {
    conn.write("Name: =,)")
  })
  return conn;
}

module.exports = { connect }