const {messyFunction, cleanFunction} = require('../refactor1')

describe('pure functions test', () => {
  test('both function should be correct', () => {
    const updated = [2, 3, 4,6];
    const original = [1, 2, 3, 4, 5];

    const resultMessy = messyFunction(original, updated)
    const resultClean = cleanFunction(original, updated)
    
    console.log(resultMessy)
    expect(resultMessy).toEqual([1,5,6, 2,3,4])
    expect(resultClean).toEqual(resultMessy)
  })
})

