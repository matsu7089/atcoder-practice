const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = [input[0], input[1], input[2]]
const T = input[3]

const ans = T.split('').reduce((a, c) => {
  return a + S[parseInt(c) - 1]
}, '')

console.log(ans)
