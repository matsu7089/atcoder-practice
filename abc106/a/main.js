const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const [A, B] = input[0].split(' ').map((v) => parseInt(v))

console.log((A - 1) * (B - 1))
