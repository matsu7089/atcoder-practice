const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, X] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v) - 1)

let set = new Set()

let cur = X - 1
set.add(cur)

while (true) {
  cur = A[cur]
  if (set.has(cur)) break
  set.add(cur)
}

console.log(set.size)
