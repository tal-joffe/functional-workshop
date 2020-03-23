const {pureAdd} = require('./pure-function')

const increment = a => pureAdd(a,1)


module.exports = {
  increment
} 