const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const ans = (() => {
  if (N % 4 === 1) return 2
  if (N % 4 === 2) return 4
  if (N % 4 === 3) return 8
  if (N % 4 === 0) return 6
})()

console.log(ans)
