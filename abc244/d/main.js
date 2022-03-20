const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0].split(' ')
const T = input[1].split(' ')

let diff = 0
for (let i = 0; i < 3; i++) {
  if (S[i] !== T[i]) diff++
}

const ans = diff !== 2
console.log(ans ? 'Yes' : 'No')
