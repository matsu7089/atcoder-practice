const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [a, b] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (b === 10) return a === 1 || a === 9
  return b - a === 1
})()

console.log(ans ? 'Yes' : 'No')
