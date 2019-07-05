const request = require('request');
const fs = require("fs");
const domainAndIndex = process.argv.slice(2);

const domain = domainAndIndex[0];
const file = domainAndIndex[1];

request(domain, (error, response, body) => {
  var stream = fs.createWriteStream(file);
  stream.once('open', function (fd) {
    stream.write(body);
    stream.end();

    fs.stat(file, (error, stat) => {
      console.log(`Downloaded and saved ${stat.size} bytes to ${file}`)
    })
  })
});
