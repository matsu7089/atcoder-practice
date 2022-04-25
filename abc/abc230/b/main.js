const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

const len = S.length
const t = 'oxxoxxoxxoxx'

const ans =
  S === t.slice(0, len) ||
  S === t.slice(1, len + 1) ||
  S === t.slice(2, len + 2)

console.log(ans ? 'Yes' : 'No')
