const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const G = Array.from({ length: N }, () => [])

for (let i = 0; i < M; i++) {
  const [A, B] = input[i + 1].split(' ').map((v) => parseInt(v) - 1)

  G[A].push(B)
  G[B].push(A)
}

const visited = Array(N).fill(false)
let ans = true

i: for (let i = 0; i < N; i++) {
  if (visited[i] || !G[i].length) continue

  let node = 0
  let edge = 0
  const task = [i]

  while (task.length) {
    const n = task.pop()
    if (visited[n]) continue

    visited[n] = true
    node++

    if (G[n].length > 2) {
      ans = false
      break i
    }

    G[n].forEach((v) => {
      if (visited[v]) return

      task.push(v)
      edge++
    })
  }

  if (node - edge !== 1) {
    ans = false
    break
  }
}

console.log(ans ? 'Yes' : 'No')
