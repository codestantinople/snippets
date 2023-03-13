const globals = require('./globals')

function helloWorld () {
  console.log(globals.HWORLD)
  return globals.HWORLD
}

module.exports = {
  helloWorld
}
