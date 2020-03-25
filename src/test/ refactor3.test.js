const {normalizeItemName: _normalizeItemName} = require('../refactor3')

describe('name normalizer test', () => {
  test('should normalize item name', () => {
    const name = 'Me  Ssy and Also Way Too Long'
    
    const result = _normalizeItemName(name)

    expect(result).toBe('messyandal')
  })
  test('should return empty string for empty name', () => {
    const name = ''
    
    const result = _normalizeItemName(name)

    expect(result).toBe('')
  })
  test('should return empty string for null name', () => {
    const name = null
    
    const result = _normalizeItemName(name)

    expect(result).toBe('')
  })

  test('should return empty string for undefined name', async () => {
    const name = undefined
    
    const result = _normalizeItemName(name)

    expect(result).toBe('')
  })
})

