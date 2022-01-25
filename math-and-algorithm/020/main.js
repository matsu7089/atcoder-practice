const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

let ans = 0
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      for (let l = k + 1; l < N; l++) {
        for (let m = l + 1; m < N; m++) {
          if (A[i] + A[j] + A[k] + A[l] + A[m] === 1000) ans++
        }
      }
    }
  }
}

console.log(ans)
