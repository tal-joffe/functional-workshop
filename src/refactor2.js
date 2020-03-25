const validateItems = (items = []) => {
  if (!items || items.length === 0) {
    return { invalidItems: [], validationError: 'empty items list' }
  }
  const itemsWithInvalidPrice = items.filter(
    item => !(typeof item.price == 'number')
  )
  if (itemsWithInvalidPrice.length > 0) {
    return {
      invalidItems: itemsWithInvalidPrice,
      validationError: 'invalid price'
    }
  }
  const itemsWithInvalidName = items.filter(
    item => !item.name || item.name.size === 0 || !/^[a-zA-Z]+$/.test(item.name)
  )
  if (itemsWithInvalidName.length > 0) {
    return {
      invalidItems: itemsWithInvalidName,
      validationError: 'invalid name'
    }
  }
  return {}
}

module.exports = {
  validateItems
}
