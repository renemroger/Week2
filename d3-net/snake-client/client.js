const net = require('net');
const { IP, PORT } = require('./constants');

const stdin = process.stdin

stdin.setEncoding('utf8');

const connect = function () {
  const conn = net.createConnection({
    host: IP, // change to IP address
    port: PORT,
    encoding: 'utf8'
  });

  conn.on('connect', (data) => {
    conn.write("Name: =,)")
  })
  return conn;
}

module.exports = { connect }