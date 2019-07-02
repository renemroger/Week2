
const say = function (x) {
  console.log(x);
}

const sayFirstWord = (callback) => {
  setTimeout(() => {
    say('4311o');
    callback()
  }, 1000)
}


const saySecondtWord = (callback) => {
  setTimeout(() => {
    say('th3r3')
    callback()
  }, 1000)
}


const sayThirdWord = (allback) => {
  setTimeout(() => {
    say('w0r1d')
  }, 1000)
}


sayFirstWord(() => {
  saySecondtWord(() => {
    sayThirdWord(() => {

    })
  })
})

