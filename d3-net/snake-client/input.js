let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin)
  connection = conn;
  return stdin;
}

const handleUserInput = function (stdin) {
  stdin.on('data', key => {
    console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
  })
}

module.exports = { setupInput }