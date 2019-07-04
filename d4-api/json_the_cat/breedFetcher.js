const request = require('request');
const breed = process.argv.slice(2, 3);

console.log(breed)


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else {

    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log('no data for:', breed)
    }
  }
});
