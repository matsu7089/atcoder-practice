/**
 * https://youtu.be/I120G6rwz5A
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const mod = 10 ** 9 + 7

const G = Array.from({ length: N }, () => [])

for (let i = 0; i < M; i++) {
  const [A, B] = input[i + 1].split(' ').map((v) => parseInt(v) - 1)
  G[A].push(B)
  G[B].push(A)
}

const q = {
  d: [],
  h: 0,
  len: () => q.d.length - q.h,
  push: (v) => q.d.push(v),
  top: () => (q.len() ? q.d[q.h] : null),
  pop: () => (q.len() ? q.d[q.h++] : null),
}

const dist = Array(N).fill(Infinity)
dist[0] = 0
q.push(0)

const route = []

while (q.len()) {
  const cur = q.pop()
  route.push(cur)

  G[cur].forEach((next) => {
    if (dist[next] !== Infinity) return
    dist[next] = dist[cur] + 1
    q.push(next)
  })
}

const dp = Array(N).fill(0)
dp[0] = 1

route.forEach((n) => {
  const short = dist[n] + 1

  G[n].forEach((next) => {
    if (dist[next] === short) {
      dp[next] += dp[n]
      dp[next] %= mod
    }
  })
})

console.log(dp[N - 1])
