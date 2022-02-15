const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const G = Array.from({ length: N + 1 }, () => [])

for (let i = 1; i <= N - 1; i++) {
  const [A, B] = input[i].split(' ').map((v) => parseInt(v))

  G[A].push(B)
  G[B].push(A)
}

for (let i = 1; i <= N; i++) {
  G[i].sort((a, b) => a - b)
}

const ans = []
const stack = [1]
const visit = Array(N + 1).fill(false)
visit[1] = true

while (stack.length) {
  const cur = stack.pop()
  ans.push(cur)

  const adj = G[cur]
  while (adj.length) {
    const next = adj.pop()
    if (visit[next]) continue

    visit[next] = true
    stack.push(cur)
    stack.push(next)
  }
}

console.log(ans.join(' '))
