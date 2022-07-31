const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v) - 1)

let ans = 0

const C = A.reduce((a, c, i) => {
  let b = a[i - 1] || 0
  if (c === i) b += 1
  a.push(b)
  return a
}, [])

const dict = {}

for (let i = 0; i < N; i++) {
  if (A[i] === i) {
    const b = C[i - 1] || 0
    ans += C[N - 1] - b - 1
  } else {
    if (!A[A[i]] === i) {
      continue
    }

    let [s, b] = [A[i], i].sort((a, b) => a - b)

    if (dict[s] && dict[s].has(b)) {
      continue
    }

    if (dict[s]) {
      dict[s].add(b)
    } else {
      dict[s] = new Set([b])
    }

    ans++
  }
}

console.log(ans)
