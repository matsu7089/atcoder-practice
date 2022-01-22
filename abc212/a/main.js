const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ').map((v) => parseInt(v))

const ans = () => {
  if (0 < A && B === 0) {
    return 'Gold'
  }
  if (A === 0 && 0 < B) {
    return 'Silver'
  }
  if (0 < A && 0 < B) {
    return 'Alloy'
  }
}

console.log(ans())
