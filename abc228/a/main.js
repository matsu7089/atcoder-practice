const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [S, T, X] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (S < T) {
    return S <= X && X < T
  } else {
    return S <= X || X < T
  }
})()

console.log(ans ? 'Yes' : 'No')
