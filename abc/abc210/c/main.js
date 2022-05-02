const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const C = input[1].split(' ').map((v) => parseInt(v))

let ans = 0
const map = new Map()

for (let i = 0; i < K; i++) {
  const c = C[i]
  if (map.has(c)) {
    map.set(c, map.get(c) + 1)
  } else {
    map.set(c, 1)
  }
  ans = map.size
}

for (let i = K; i < N; i++) {
  const last = C[i - K]
  const c = C[i]

  const cnt = map.get(last) - 1
  if (cnt === 0) {
    map.delete(last)
  } else {
    map.set(last, cnt)
  }

  if (map.has(c)) {
    map.set(c, map.get(c) + 1)
  } else {
    map.set(c, 1)
  }

  ans = Math.max(ans, map.size)
}

console.log(ans)
