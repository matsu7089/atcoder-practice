const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((x, y) => x - y)

const B = input[2]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((x, y) => x - y)

let ans = A.reduce((a, c, i) => a + BigInt(Math.abs(c - B[i])), 0n)
console.log(ans.toString())
