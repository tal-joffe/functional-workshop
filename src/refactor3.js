// compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const removeWhitespaces = str => str.replace(/\s/g, '')

const normalizeItemName = (name = '') => {
  if (!name) {
    return ''
  }
  const nameNoSpaces = removeWhitespaces(name)
  const nameNoSpacesLowerCase = nameNoSpaces.toLowerCase()
  return nameNoSpacesLowerCase.substring(0, 10)
}

module.exports = {
  normalizeItemName
}
