const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, X] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (X <= A) return 1
  if (B < X) return 0
  return C / (B - A)
})()

console.log(ans)
