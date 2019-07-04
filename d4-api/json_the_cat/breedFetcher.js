const request = require('request');


const fetchBreedDescription = (url, callback) => {
  request(url, (error, reponse, body) => {
    let data = '';
    if (body) {
      data = JSON.parse(body);
    }
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(null, null);
    }
  })
}

module.exports = { fetchBreedDescription }