const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printEachPasstime(passTimes);
  })
  .catch((error) => {
    console.log("it didnt work", error.message)
  });


const printEachPasstime = ((timers) => {
  for (const time of timers) {
    const nextPass = '';
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds! `);
  }
})
