const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const ans = A.reduce((a, c) => {
  return a + (c - 1)
}, 0)

console.log(ans)
