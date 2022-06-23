const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const L = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => b - a)

let ans = 0
for (let i = 0; i < K; i++) {
  ans += L[i]
}

console.log(ans)
