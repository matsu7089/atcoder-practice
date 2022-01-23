const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const a = input[1].split(' ').map((v) => parseInt(v))
const sum = a.reduce((a, c) => a + c)

console.log(sum % 100)
