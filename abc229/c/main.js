const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, W] = input[0].split(' ').map((v) => parseInt(v))
const C = []

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => parseInt(v))
  C.push({ a, b })
}
C.sort((a, b) => b.a - a.a)

let ans = 0n
let w = W
for (let i = 0; i < N; i++) {
  const m = Math.min(C[i].b, w)
  ans += BigInt(C[i].a * m)
  w -= m
}

console.log(ans.toString())
