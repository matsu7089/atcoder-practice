const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const set = new Set(input[0].split(''))

console.log([1, 3, 6][set.size - 1])
