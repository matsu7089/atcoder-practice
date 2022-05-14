const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const set = new Set()
let ans = 0
let score = 0

for (let i = 0; i < N; i++) {
  const [S, T] = input[i + 1].split(' ')
  if (set.has(S)) {
    continue
  }

  const t = parseInt(T)
  if (score < t) {
    score = t
    ans = i
  }

  set.add(S)
}

console.log(ans + 1)
