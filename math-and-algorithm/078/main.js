const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const G = Array.from({ length: N }, (_) => [])

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(' ').map((v) => parseInt(v) - 1)
  G[A].push(B)
  G[B].push(A)
}

const Q = {
  d: Array(N),
  h: 0,
  t: 0,
  len: () => Q.t - Q.h,
  put: (v) => (Q.d[Q.t++] = v),
  get: () => (Q.len() ? Q.d[Q.h++] : null),
}

const dist = Array(N).fill(-1)
dist[0] = 0
Q.put(0)

while (Q.len()) {
  const i = Q.get()

  G[i].forEach((j) => {
    if (dist[j] !== -1) return

    dist[j] = dist[i] + 1
    Q.put(j)
  })
}

for (let i = 0; i < N; i++) {
  console.log(dist[i] === -1 ? 120 : Math.min(dist[i], 120))
}
