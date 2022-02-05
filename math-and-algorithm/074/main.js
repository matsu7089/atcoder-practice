const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

let ans = 0
for (let i = 0; i < N; i++) {
  ans += A[i] * (2 * i - N + 1)
}

console.log(ans)
