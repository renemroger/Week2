const request = require('request');

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIp('https://api.ipify.org/?format=json', (error, ip) => {
    if (error) {
      console.log('we couldn\'t retrieve the inf', error);
      return;
    } else {
      fetchCoordsByIP('https://ipvigilante.com/162.245.144.188', (error, coords) => {
        if (error) {
          console.log('we couldn\'t retrieve the inf', error);
          return;
        } else {
          fetchISSFlyOverTimes(coords, (error, passtime) => {
            if (error) {
              console.log('we couldn\'t retrieve the inf', error);
              return;
            }
            callback(null, passtime);
          })
        }
      })
    }
  })
}


const fetchMyIp = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  })
}

const fetchCoordsByIP = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const location = {
        latitude: 49.2849,
        longitude: -123.115
      }
      callback(null, location);
      //callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const myData = JSON.parse(body);
    const location = {
      latitude: myData.data.latitude,
      longitude: myData.data.longitude
    }
    callback(null, location);
  })
}

const fetchISSFlyOverTimes = (coords, callback) => {

  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const passes = JSON.parse(body);
    callback(null, passes.response);
  })
}




module.exports = { nextISSTimesForMyLocation }