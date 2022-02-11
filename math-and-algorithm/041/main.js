const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const T = parseInt(input[0])
const N = parseInt(input[1])

const diff = Array(T).fill(0)

for (let i = 0; i < N; i++) {
  const [L, R] = input[i + 2].split(' ').map((v) => parseInt(v))

  diff[L]++
  diff[R]--
}

const sum = Array(T).fill(0)
sum[0] = diff[0]

for (let i = 1; i < T; i++) {
  sum[i] = sum[i - 1] + diff[i]
}

for (let t = 0; t < T; t++) {
  console.log(sum[t])
}
