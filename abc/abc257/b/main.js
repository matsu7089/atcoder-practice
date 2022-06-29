const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K, Q] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))
const L = input[2].split(' ').map((v) => parseInt(v))

const cell = Array(N + 1).fill(false)

A.forEach((v) => {
  cell[v] = true
})

const dict = A.reduce((a, c, i) => {
  a[i + 1] = c
  return a
}, {})

L.forEach((l) => {
  const cur = dict[l]

  if (cur <= N && cell[cur + 1] === false) {
    cell[cur] = false
    cell[cur + 1] = true
    dict[l]++
  }
})

const ans = []
for (let i = 1; i <= K; i++) {
  ans.push(dict[i])
}

console.log(ans.join(' '))
