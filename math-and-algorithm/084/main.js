const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b, c] = input[0].split(' ').map((v) => BigInt(v))

const ans = (() => {
  if (c - a - b < 0) return false
  return 4n * a * b < (c - a - b) ** 2n
})()

console.log(ans ? 'Yes' : 'No')
