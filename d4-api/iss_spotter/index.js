const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("error", error);
  } else {
    printEachPasstime(passTimes);
  }
});


const printEachPasstime = (passTimes) => {
  for (const time of passTimes) {
    const nextPass = '';
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds! `);
  }
}


module.exports = { nextISSTimesForMyLocation }