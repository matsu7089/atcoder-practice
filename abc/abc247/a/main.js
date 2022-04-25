const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

console.log(('0' + S).slice(0, 4))
