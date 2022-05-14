const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const len = S.length

const ans = (() => {
  if (len === 1) {
    return S + S + S + S + S + S
  }
  if (len === 2) {
    return S + S + S
  }
  if (len === 3) {
    return S + S
  }
})()

console.log(ans)
