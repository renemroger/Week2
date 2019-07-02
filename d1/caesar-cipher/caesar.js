const encrypt = function (plaintext, key) {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  let encryptText = [];
  let string = plaintext.split('');

  //right shfit
  if (key > 0) {
    for (const l of string) {
      if (l !== ' ') {
        let letter = l.charCodeAt(0);

        //if space dont encryt
        if (letter + key > z) {
          //wrap around alphabet
          letter = (((letter + key) - z) + a) - 1
        } else {
          letter += key;
        }
        encryptText.push(String.fromCharCode(letter));

      } else {
        encryptText.push(l);
      }
    }
  }
  if (key < 0) {
    for (const l of string) {
      if (l !== ' ') {
        let letter = l.charCodeAt(0);

        //if space dont encryt
        if (letter + key < a) {
          //wrap around alphabet
          console.log(a % (letter - key));
          letter = z - (a - (letter + key) - 1)
        } else {
          letter += key;
        }
        encryptText.push(String.fromCharCode(letter));

      } else {
        encryptText.push(l);
      }
    }
  }
  return encryptText.join('');
}


module.exports = { encrypt };