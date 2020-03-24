const {orderItemsForChange} = require('../refactor1')
const {functionalOrderItemsForChange} = require('../refactor1')

describe('pure functions test', () => {
  test('both function should be correct', () => {
    const updated = [2, 3, 4,6];
    const original = [1, 2, 3, 4, 5];

    const result = orderItemsForChange(original, updated)
    const resultFunctional = functionalOrderItemsForChange(original, updated)
    
    console.log(result)
    expect(result).toEqual([1,5,6, 2,3,4])
    expect(resultFunctional).toEqual(result)
  })
})

