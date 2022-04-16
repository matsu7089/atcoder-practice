const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const G1 = Array.from({ length: N }, () => [])
const G2 = Array.from({ length: N }, () => [])

for (let i = 0; i < M; i++) {
  const [A, B] = input[i + 1].split(' ').map((v) => parseInt(v) - 1)
  const [C, D] = input[i + M + 1].split(' ').map((v) => parseInt(v) - 1)

  G1[A].push(B)
  G1[B].push(A)

  G2[C].push(D)
  G2[D].push(C)
}

for (let i = 0; i < N; i++) {
  G1[i].sort((a, b) => a - b)
}

const solve = (str) => {
  const dict = {}
  for (let i = 0; i < N; i++) {
    dict[str[i]] = i
  }

  for (let i = 0; i < N; i++) {
    const nodes1 = G1[i]
    const nodes2 = G2[str[i]].map((v) => dict[v]).sort((a, b) => a - b)

    if (nodes1.length !== nodes2.length) {
      return false
    }

    const match = nodes1.every((v, i) => v === nodes2[i])

    if (!match) {
      return false
    }
  }
  return true
}

let ans = false

const next = (flag, str) => {
  if (flag === 0) {
    solve(str) && (ans = true)
  }
  for (let i = 0; i < N; i++) {
    if ((flag & (1 << i)) > 0) {
      next(flag ^ (1 << i), str + i)
    }
  }
}

next((1 << N) - 1, '')
console.log(ans ? 'Yes' : 'No')
