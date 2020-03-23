
const validateList = items => new Promise(function(resolve, reject) {
  if ((!items || items.length === 0)){
    reject({items: [], message: 'empty items list'})
  }
  else {
    resolve({}) 
  }
})
const validateNames = items => new Promise(function(resolve, reject) {
  const invalid = items.filter(item => !item.name || item.name.size === 0 || !(/^[a-zA-Z]+$/.test(item.name)))
  if (invalid.length > 0){
    reject({items: invalid, message: "invalid name"})
  }
  else{
    resolve({})
  }
})

const validatePrices = items => new Promise(function(resolve, reject) {
  const invalid = items.filter(item => !(typeof item.price == 'number'))
  if (invalid.length > 0){
    reject({items: invalid, message: "invalid price"})
  }
  else{
    resolve({})
  }
})

const createErrorResponse = ({items, message}) => {
  return {
   invalidItems: items, validationError: message}
  }

const functionalValidateItems = async (items = []) => 
  await validateList(items)
  .then(() => validatePrices(items))
  .then(() => validateNames(items))
  .catch(createErrorResponse)

const validateItems = (items = []) => {
  if (!items || items.length === 0){
    return {invalidItems: [], validationError: "empty items list"}
  }
  const itemsWithoutPrice = items.filter(item => !(typeof item.price == 'number'))
  if (itemsWithoutPrice.length > 0){
    return {invalidItems: itemsWithoutPrice, validationError: "invalid price"}
  }
  const itemsWithInvalidName = items.filter(item => !item.name || item.name.size === 0 || !(/^[a-zA-Z]+$/.test(item.name)))
  if (itemsWithInvalidName.length > 0){
    return {invalidItems: itemsWithInvalidName, validationError: "invalid name"}
  }
  return {}
}

module.exports = {
  validateItems,
  functionalValidateItems
}


