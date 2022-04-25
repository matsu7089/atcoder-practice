const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const set = new Set()

for (let i = 0; i < N; i++) {
  set.add(input[i + 1])
}

console.log(set.size)
