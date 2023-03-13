const globals = require('./globals')
const rx = require('./index')
const assert = require('assert').strict

describe('test helloWorld', function () {
  console.log('Testing HelloWorld')
  it('should see hello world text', function () {
    assert.equal(rx.helloWorld(), globals.HWORLD)
  })
})

describe('test helloWorld explicitly', function () {
  console.log('Testing HelloWorld explicitly')
  it('should see explicit hello world text', function () {
    assert.equal(rx.helloWorld(), 'Hello World!')
  })
})
