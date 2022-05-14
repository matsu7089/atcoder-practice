const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, W] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const set = new Set()

for (let i = 0; i < N; i++) {
  const a = A[i]
  a <= W && set.add(a)
  for (let j = i + 1; j < N; j++) {
    const b = a + A[j]
    b <= W && set.add(b)
    for (let k = j + 1; k < N; k++) {
      const c = b + A[k]
      c <= W && set.add(c)
    }
  }
}

console.log(set.size)
