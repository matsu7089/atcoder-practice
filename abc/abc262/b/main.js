const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const G = Array.from({ length: N + 1 }, (_) => new Set())

for (let i = 0; i < M; i++) {
  const [u, v] = input[i + 1].split(' ').map((v) => parseInt(v))
  G[u].add(v)
  G[v].add(u)
}

let ans = 0

for (let a = 1; a <= N; a++) {
  for (let b = a + 1; b <= N; b++) {
    if (!G[a].has(b)) continue
    for (let c = b + 1; c <= N; c++) {
      if (!G[b].has(c) || !G[c].has(a)) continue
      ans++
    }
  }
}

console.log(ans)
