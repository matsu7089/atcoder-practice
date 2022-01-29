const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

const pa = 1 / 3
const pb = 2 / 3

let ans = 0
for (let i = 0; i < N; i++) {
  ans += pa * A[i] + pb * B[i]
}

console.log(ans)
