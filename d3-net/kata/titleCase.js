const titleCase = (toCapitalCase) => {
  if (toCapitalCase.length === 0) return '';
  let capitalizedArray = []
  toCapitalCase.split(' ').forEach(word => {
    capitalizedArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
  });
  return capitalizedArray.join(' ');
}

console.log(titleCase('this is an example'))