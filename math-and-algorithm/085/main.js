const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X, Y] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  for (let a = 1; a <= N; a++) {
    for (let b = a; b <= N; b++) {
      for (let c = b; c <= N; c++) {
        for (let d = c; d <= N; d++) {
          if (a + b + c + d === X && a * b * c * d === Y) return true
        }
      }
    }
  }
  return false
})()

console.log(ans ? 'Yes' : 'No')
