const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const S = input[1].split(' ')

const T = input[2].split(' ').reduce((a, c) => {
  a[c] = true
  return a
}, {})

S.forEach((s) => {
  console.log(T[s] ? 'Yes' : 'No')
})
