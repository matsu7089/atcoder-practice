const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))

const { max, min, abs } = Math
let cnt = 0
for (let a = 1; a <= N; a++) {
  for (let b = max(1, a - (K - 1)); b <= min(N, a + (K - 1)); b++) {
    for (let c = max(1, a - (K - 1)); c <= min(N, a + (K - 1)); c++) {
      if (abs(b - c) <= K - 1) cnt++
    }
  }
}

console.log(N ** 3 - cnt)
