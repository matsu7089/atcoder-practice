const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const ans = (() => {
  const sum = A.reduce((a, c) => a + c)
  if (sum % 2 !== K % 2) {
    return false
  }
  return sum <= K
})()

console.log(ans ? 'Yes' : 'No')
