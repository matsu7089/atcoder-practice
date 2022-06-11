const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [R, C] = input[0].split(' ').map((v) => parseInt(v) - 1)
const A = input[1].split(' ').map((v) => parseInt(v))
A.push(...input[2].split(' ').map((v) => parseInt(v)))

console.log(A[R * 2 + C])
