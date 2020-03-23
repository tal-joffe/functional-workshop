const impureAdd = (a,b) => {
  console.log(`adding ${a} and ${b}`)
  return a+b
}

const pureAdd = (a,b) => a + b

const impureDoubleArrayElements = array => array.forEach((x,i) =>  array[i] = x*2)

const pureDoubleArrayElements = array => array.map(x => x * 2)


module.exports = {
  pureAdd,
  impureAdd,
  impureDoubleArrayElements,
  pureDoubleArrayElements
}