const {orderItemsForChange: _orderItemsForChange} = require('../refactor1')

describe('orderItemsForChange test', () => {
  test('should return array of item ids to delete, then to add, then to keep', () => {
    const original = [1, 2, 3, 4, 5]
    const updated = [2, 3, 4,6]

    const result = _orderItemsForChange(original, updated)
    
    expect(result).toEqual([1,5,6,2,3,4])
  })
})

