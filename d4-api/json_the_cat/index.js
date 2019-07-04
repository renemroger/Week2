const { fetchBreedDescription } = require('./breedFetcher')
const args = process.argv.splice(2, 3);
const breed = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


fetchBreedDescription(url, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
})