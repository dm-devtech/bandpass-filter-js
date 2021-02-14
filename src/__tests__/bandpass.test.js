import Bandpass from '../bandpass.js'

describe('test class exists', () => {
  test('bandpass class', () => {
    test = new Bandpass
    expect(test).toBeInstanceOf(Bandpass)
  })
})

describe('input outputs array', () => {
  test('bandpass class', () => {
    test = new Bandpass
    expect(test.filter()).toEqual([])
  })
})
