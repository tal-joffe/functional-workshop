const doValidation = (getInvalids, validationError) => items =>
  new Promise(function (resolve, reject) {
    const invalidItems = getInvalids(items)
    if (items.length === 0 || invalidItems.length > 0) {
      reject({ invalidItems, validationError })
    } else {
      resolve(items)
    }
  })

const validateItemList = items =>
  doValidation(items => [], 'empty items list')(items)

const getItemsWithInvalidPrice = items =>
  items.filter(item => !(typeof item.price == 'number'))

const validatePrices = items =>
  doValidation(getItemsWithInvalidPrice, 'invalid price')(items)

const getItemsWithInvalidNames = items =>
  items.filter(
    item => !item.name || item.name.size === 0 || !/^[a-zA-Z]+$/.test(item.name)
  )

const validateNames = items =>
  doValidation(getItemsWithInvalidNames, 'invalid name')(items)

const createSuccessObject = () => ({})

const createErrorObject = error => error

const functionalValidateItems = (items = []) =>
  validateItemList(items)
    .then(validatePrices)
    .then(validateNames)
    .then(createSuccessObject)
    .catch(createErrorObject)

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
  validateItems,
  functionalValidateItems
}
