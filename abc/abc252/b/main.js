const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

let max = -Infinity
let dict = {}

A.forEach((a, i) => {
  if (max === a) {
    dict[i + 1] = true
  }
  if (max < a) {
    max = a
    dict = { [i + 1]: true }
  }
})

const ans = B.some((b) => dict[b])

console.log(ans ? 'Yes' : 'No')
