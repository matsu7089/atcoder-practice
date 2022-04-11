const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => a - b)

const ans = []

for (let i = 0; i < Q; i++) {
  const x = parseInt(input[i + 2])

  let ok = N
  let ng = -1
  while (ok - ng > 1) {
    const mid = Math.floor((ok + ng) / 2)
    if (x <= A[mid]) {
      ok = mid
    } else {
      ng = mid
    }
  }

  ans.push(N - ok)
}

console.log(ans.join('\n'))
