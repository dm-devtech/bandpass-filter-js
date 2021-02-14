import Bandpass from '../bandpass.js'

beforeEach( () => {
  test = new Bandpass
})

describe('test class exists', () => {
  test('bandpass class', () => {
    expect(test).toBeInstanceOf(Bandpass)
  })
})

describe('testing filter function', () => {
  test('input min, max and frequences outputs correct array', () => {
    expect(test.filter(20, 9000,[10,15,20,600,2000,10000,18000])).toEqual([20,20,20,600,2000,9000,9000])
  })
})
