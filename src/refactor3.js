compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const handleEmpty = str =>  (!str || str.length === 0) ? '' : str
const removeWhitespaces = str => str.replace(/\s/g, '')
const toLower = str => str.toLowerCase()
const truncate = str => str.substring(0, 10)

const functionalNormalizeItemName = (name = '') =>
  compose(
    truncate, 
    toLower, 
    removeWhitespaces, 
    handleEmpty
    )(name)

const normalizeItemName = (name = '') => {
  if (!name || name.length === 0) {
    return ''
  }
  const nameNoSpaces = removeWhitespaces(name)
  const nameNoSpacesLowerCase = nameNoSpaces.toLowerCase()
  return nameNoSpacesLowerCase.substring(0, 10)
}

module.exports = {
  normalizeItemName, functionalNormalizeItemName
}
