const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const K = parseInt(input[0])
const [A, B] = input[1].split(' ').map((v) => parseInt(v, K))

console.log(A * B)
