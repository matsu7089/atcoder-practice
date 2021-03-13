const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))
const B = A.map((v, i) => v - (i + 1)).sort((a, b) => a - b)

const b = B[Math.floor(N / 2)]

const ans = A.reduce((a, c, i) => {
  return a + Math.abs(c - (i + 1 + b))
}, 0)

console.log(ans)
