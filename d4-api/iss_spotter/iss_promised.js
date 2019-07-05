const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

fetchCoordsByIP = (myIP) => {
  const ip = JSON.parse(myIP).ip;
  return request(`https://api.ipdata.co/${ip}?api-key=test`)
}

fetchISSFlyOverTimes = (data) => {
  const parsedData = JSON.parse(data);
  const LAT = parsedData.latitude;
  const LON = parsedData.longitude;

  return request(`http://api.open-notify.org/iss-pass.json?lat=${LAT}&lon=${LON}`)
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    })
}

module.exports = { nextISSTimesForMyLocation }