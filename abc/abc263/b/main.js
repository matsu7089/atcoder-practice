const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const P = [0, 0, ...input[1].split(' ').map((v) => parseInt(v))]

let i = N
let ans = 0

while (i !== 1) {
  i = P[i]
  ans++
}

console.log(ans)
