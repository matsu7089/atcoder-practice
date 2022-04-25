const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const X = Array(N)
const S = input[N + 1]

const dict = {}

for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map((v) => parseInt(v))
  X[i] = x

  if (dict[y]) {
    dict[y].push(i)
  } else {
    dict[y] = [i]
  }
}

const ans = Object.keys(dict).some((y) => {
  if (dict[y].length === 1) {
    return false
  }

  const list = dict[y]
    .map((i) => ({ s: S[i], x: X[i] }))
    .sort((a, b) => a.x - b.x)

  const len = list.length

  let i = 0
  for (; i < len; i++) {
    if (list[i].s === 'R') break
  }
  for (; i < len; i++) {
    if (list[i].s === 'L') return true
  }
  return false
})

console.log(ans ? 'Yes' : 'No')
