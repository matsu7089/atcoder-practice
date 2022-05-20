const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const D = parseInt(input[0])
const C = ('0 ' + input[1]).split(' ').map((v) => parseInt(v))
const S = [0]

for (let i = 0; i < D; i++) {
  S.push(('0 ' + input[i + 2]).split(' ').map((v) => parseInt(v)))
}

let last = {}

const score = (d, i) => {
  last[i] = d
  let s = S[d][i]
  for (let i = 1; i <= 26; i++) {
    s -= C[i] * (d - (last[i] || 0))
  }
  return s
}

const ans = []
let cur = 0

for (let i = 1; i <= D; i++) {
  const t = parseInt(input[i + D + 1])
  cur += score(i, t)
  ans.push(cur)
}

console.log(ans.join('\n'))
