const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const T = input[1]

const diff = []
S.split('').forEach((s, i) => {
  if (s !== T[i]) diff.push(i)
})

const ans = (() => {
  if (diff.length === 0) {
    return true
  }
  if (diff.length !== 2) {
    return false
  }

  const d1 = diff[0]
  const d2 = diff[1]
  if (d2 - d1 !== 1) {
    return false
  }

  if (S[d1] === T[d2] && S[d2] === T[d1]) {
    return true
  }
  return false
})()

console.log(ans ? 'Yes' : 'No')
