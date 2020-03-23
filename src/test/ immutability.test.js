const {
  pureAdd,
  impureAdd,
  impureDoubleArrayElements,
  pureDoubleArrayElements
} = require('../pure-function')

const func = array => array.splice(0,1)
const func2 = array => array.slice(0,1)

describe('pure functions test', () => {
  test('func should not mutate array', () => {
    const array = [1,6,7,2,4]

    const result = func2(array)
    
    expect(result).toEqual([1])
    expect(array).toEqual([1,6,7,2,4])
  })
  test('func should not mutate array', () => {
    const array = [1,6,7,2,4]

    const result = func2(array)
    
    expect(result).toEqual([1])
    expect(array).toEqual([1,6,7,2,4])
  })
})

