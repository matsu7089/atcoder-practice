const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X, Y, Z] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

const SA = A.map((v, i) => ({
  v,
  i,
})).sort((a, b) => b.v - a.v)

const set = new Set()
for (let i = 0; i < X; i++) {
  set.add(SA[i].i)
}

const SB = B.map((v, i) => ({
  v,
  i,
})).sort((a, b) => b.v - a.v)

let idx = 0
for (let i = 0; i < Y; i++) {
  while (set.has(SB[idx].i)) {
    idx++
  }
  set.add(SB[idx].i)
}

const SC = A.map((v, i) => ({
  v: v + B[i],
  i,
})).sort((a, b) => b.v - a.v)

idx = 0
for (let i = 0; i < Z; i++) {
  while (set.has(SC[idx].i)) {
    idx++
  }
  set.add(SC[idx].i)
}

const ans = [...set].map((v) => v + 1).sort((a, b) => a - b)
console.log(ans.join('\n'))
