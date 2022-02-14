const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const sorted = [...A].sort((a, b) => a - b)
const target = sorted[N - 2]
const ans = A.findIndex((v) => v === target) + 1

console.log(ans)
