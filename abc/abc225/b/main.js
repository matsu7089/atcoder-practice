const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const cnt = Array(N).fill(0)

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => parseInt(v) - 1)
  cnt[a]++
  cnt[b]++
}

const ans = cnt.filter((v) => v > 1).length === 1
console.log(ans ? 'Yes' : 'No')
