// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) {
      callback(data);
    } else {
    } callback(undefined);
  });
}


breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay) // => print out details correctly.
});

module.exports = breedDetailsFromFile;