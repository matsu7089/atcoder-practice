const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let S = ['1']

for (let i = 1; i < N; i++) {
  S[i] = S[i - 1] + ' ' + (i + 1) + ' ' + S[i - 1]
}

console.log(S[N - 1])
