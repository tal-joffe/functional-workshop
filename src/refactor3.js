compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const handleEmptyString = str => !str ? '' : str

const removeWhitespaces = str => str.replace(/\s/g,'')
const toLowerCase = str => str.toLowerCase()
const truncate = str => str.substring(0, 10)

const functionalNormalizeItemName = (name = '') =>
  compose(
    truncate,
    toLowerCase,
    removeWhitespaces,
    handleEmptyString
  )(name)

const normalizeItemName = (name = '') => {
  if (!name) {
    return ''
  }
  const nameNoSpaces = removeWhitespaces(name)
  const nameNoSpacesLowerCase = nameNoSpaces.toLowerCase()
  return nameNoSpacesLowerCase.substring(0, 10)
}

module.exports = {
  normalizeItemName,
  functionalNormalizeItemName
}
