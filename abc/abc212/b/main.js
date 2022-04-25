const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = input[0].split('').map((v) => parseInt(v))

const ans = () => {
  if (X.every((v) => v === X[0])) {
    return 'Weak'
  }
  const step = [0, 1, 2].every((i) => {
    return (X[i] + 1) % 10 === X[i + 1]
  })
  return step ? 'Weak' : 'Strong'
}

console.log(ans())
