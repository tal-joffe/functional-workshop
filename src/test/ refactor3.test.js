const {normalizeItemName, functionalNormalizeItemName} = require('../refactor3')

describe('name normalizer test', async () => {
  test('should normalize item name', async () => {
    const name = 'Me  Ssy'
    
    const result = normalizeItemName(name)
    const resultFunctional = functionalNormalizeItemName(name)

    expect(result).toBe('messy')
    expect(resultFunctional).toBe(result)
  })
  test('should return empty string for empty name', async () => {
    const name = ''
    
    const result = normalizeItemName(name)
    const resultFunctional = functionalNormalizeItemName(name)

    expect(result).toBe('')
    expect(resultFunctional).toBe(result)
  })
  test('should return empty string for null name', async () => {
    const name = null
    
    const result = normalizeItemName(name)
    const resultFunctional = functionalNormalizeItemName(name)

    expect(result).toBe('')
    expect(resultFunctional).toBe(result)
  })

  test('should return empty string for undefined name', async () => {
    const name = undefined
    
    const result = normalizeItemName(name)
    const resultFunctional = functionalNormalizeItemName(name)

    expect(result).toBe('')
    expect(resultFunctional).toBe(result)
  })
})

