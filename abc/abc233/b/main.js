const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [L, R] = input[0].split(' ').map((v) => parseInt(v))
const S = input[1]

const ans =
  S.slice(0, L - 1) +
  S.slice(L - 1, R)
    .split('')
    .reverse()
    .join('') +
  S.slice(R, S.length)

console.log(ans)
