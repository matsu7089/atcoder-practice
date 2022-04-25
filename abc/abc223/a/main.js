const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = parseInt(input[0])

const ans = (() => {
  if (X === 0) return false
  return X % 100 === 0
})()

console.log(ans ? 'Yes' : 'No')
