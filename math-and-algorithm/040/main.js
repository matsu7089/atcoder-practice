const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))
const M = parseInt(input[2])

const sumA = Array(N - 1)
sumA[0] = BigInt(A[0])

for (let i = 1; i < N - 1; i++) {
  sumA[i] = sumA[i - 1] + BigInt(A[i])
}

let ans = 0n
let cur = parseInt(input[3]) - 1

const abs = (v) => (v > 0n ? v : -v)

for (let i = 1; i < M; i++) {
  const B = parseInt(input[i + 3]) - 1

  ans += abs((sumA[cur - 1] || 0n) - (sumA[B - 1] || 0n))
  cur = B
}

console.log(ans.toString())
