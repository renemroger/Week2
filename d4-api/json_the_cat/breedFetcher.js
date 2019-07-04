
const request = require('request');
const fetchBreedDescription = function (breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('error')
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        callback(error, data[0].description.trim());
        //ERROR
      } else {
        callback(error, null)
      }
    }
  });
}

module.exports = { fetchBreedDescription }
