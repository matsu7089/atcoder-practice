const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let set = new Set()
for (let i = 1; i <= N; i++) {
  set.add(input[i])
}

console.log(set.size)
