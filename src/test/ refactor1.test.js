const {orderItemsForChange} = require('../refactor1')
// const {functionalOrderItemsForChange} = require('../refactor1')

describe('orderItemsForChange test', () => {
  test('should return array of item ids to delete, then to add, then to keep', () => {
    const original = [1, 2, 3, 4, 5]
    const updated = [2, 3, 4,6]

    const result = orderItemsForChange(original, updated)
    // const functionalResult = functionalOrderItemsForChange(original, updated)
    
    expect(result).toEqual([1,5,6,2,3,4])
    // expect(functionalResult).toEqual(result)
  })
})

