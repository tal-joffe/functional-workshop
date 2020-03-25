const {validateItems: _validateItems} = require('../refactor2')

describe('_validateItems test', () => {
  test('should return empty items list validation error', async () => {
    const items = []

    const result = _validateItems(items)

    expect(result).toEqual({invalidItems: [], validationError: "empty items list"})
  })
  test('should return invalid price validation error', async () => {
    const items = [{name: 'valid', price:123}, {name: 'invalid'}]

    const result = _validateItems(items)
    
    expect(result).toEqual({invalidItems: [{name: "invalid"}], validationError: "invalid price"})
  })
  test('should return invalid name validation error', async () => {
    const items = [{name: 'valid', price:123}, {name: 'invalid123', price:123}]

    const result = _validateItems(items)
    
    expect(result).toEqual({invalidItems: [{name: "invalid123", price:123}], validationError: "invalid name"})
  })
})

