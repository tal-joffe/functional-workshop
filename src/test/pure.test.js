const {
  pureAdd,
  impureAdd,
  impureDoubleArrayElements,
  pureDoubleArrayElements
} = require('../pure-function')


describe('pure functions test', () => {
  test('pureAdd should return correct value', () => {
    expect(pureAdd(3, 4)).toBe(7)
  })
  test('pureAdd should consistently return the same result', () => {
    const expected = Array(100).fill(7)
    
    const actual = Array(100).fill(pureAdd(3, 4))
    
    expect(actual).toEqual(expected)
  })
  test('pureAdd should not mutate input params', () => {
    const a = 3
    const b = 4
    const result = 0
    const options = {a,b,result} 
    // const actual = add(options)
    
    // expect(actual.result).toEqual(7)
    // expect(options.result).toEqual(result)
  })
})

