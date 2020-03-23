const {  pureAdd,impureAdd,impureDoubleArrayElements,pureDoubleArrayElements} = require('./src/pure-function')
const {increment} = require('./src/closure')


console.log(pureAdd(2,4))
console.log(impureAdd(2,4))


const array = [1,2,3]
impureDoubleArrayElements([1,2,3])
console.log(pureDoubleArrayElements(array))
console.log(impureDoubleArrayElements(array))
console.log(array)

console.log(increment(4))