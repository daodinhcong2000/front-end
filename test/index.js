const regex = require('../src/helpers/validating/regex')

const username = 'ab'

console.log(regex.username.exec(username))