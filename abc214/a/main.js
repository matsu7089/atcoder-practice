const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const ans = (() => {
  if (N <= 125) return 4
  if (N <= 211) return 6
  return 8
})()

console.log(ans)
