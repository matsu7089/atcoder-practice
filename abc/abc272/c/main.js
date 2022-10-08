const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => b - a)

const odd = []
const even = []

for (let i = 0; i < N; i++) {
  const a = A[i]
  if (a % 2 === 0) {
    even.push(a)
  } else {
    odd.push(a)
  }
}

const e = even[0] + even[1]
const o = odd[0] + odd[1]

let ans

if (e || o) {
  ans = Math.max(e || 0, o || 0)
} else {
  ans = -1
}

console.log(ans)
