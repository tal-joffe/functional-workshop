const {validateItems, functionalValidateItems} = require('../refactor2')

describe('pure functions test', async () => {
  test('should return empty items list validation error', async () => {
    const items = []

    const result = validateItems(items)
    const result2 = await functionalValidateItems(items)

    expect(result).toEqual({invalidItems: [], validationError: "empty items list"})
    expect(result2).toEqual(result)
  })
  test('should return invalid name validation error', async () => {
    const items = [{name: 'valid', price:123}, {name: 'invalid123'}]

    const result = validateItems(items)
    const result2 = await functionalValidateItems(items)
    
    expect(result).toEqual({invalidItems: [{name: "invalid123"}], validationError: "invalid price"})
    expect(result2).toEqual(result)
  })
  test('should return invalid price validation error', async () => {
    const items = [{name: 'valid', price:123}, {name: 'invalid123', price:123}]

    const result = validateItems(items)
    const result2 = await functionalValidateItems(items)
    
    expect(result).toEqual({invalidItems: [{name: "invalid123", price:123}], validationError: "invalid name"})
    expect(result2).toEqual(result)
  })
})

