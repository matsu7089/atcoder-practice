const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = input[1].split(' ').map((v) => parseInt(v))
const T = input[2].split(' ').map((v) => parseInt(v))

let ans = Array(N)

const minT = T.reduce((a, b) => Math.min(a, b))
const first = T.indexOf(minT)
ans[first] = minT

for (let i = 1; i < N; i++) {
  const cur = (first + i) % N
  const prev = (cur - 1 + N) % N
  ans[cur] = Math.min(ans[prev] + S[prev], T[cur])
}

console.log(ans.join('\n'))
