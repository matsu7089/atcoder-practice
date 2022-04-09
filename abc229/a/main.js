const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S1 = input[0]
const S2 = input[1]

const ans = (() => {
  if (S1 === '.#' && S2 === '#.') {
    return false
  }
  if (S2 === '.#' && S1 === '#.') {
    return false
  }
  return true
})()

console.log(ans ? 'Yes' : 'No')
