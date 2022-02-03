const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X, Y] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (Math.abs(X) + Math.abs(Y) > N) {
    return false
  }
  return N % 2 === (X + Y) % 2
})()

console.log(ans ? 'Yes' : 'No')
