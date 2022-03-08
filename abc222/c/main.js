const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const _2N = 2 * N

const A = []
const gcp = { G: 0, C: 1, P: 2 }

for (let i = 0; i < _2N; i++) {
  A.push(input[i + 1].split('').map((v) => gcp[v]))
}

const ranking = Array.from({ length: _2N }, (_, i) => ({
  num: i,
  win: 0,
}))

for (let i = 0; i < M; i++) {
  for (let k = 0; k < N; k++) {
    const p1 = ranking[2 * k]
    const p2 = ranking[2 * k + 1]

    const result = (A[p1.num][i] - A[p2.num][i] + 3) % 3

    switch (result) {
      case 1: {
        p2.win++
        break
      }
      case 2: {
        p1.win++
        break
      }
    }
  }

  ranking.sort((a, b) => (a.win === b.win ? a.num - b.num : b.win - a.win))
}

console.log(ranking.map((v) => v.num + 1).join('\n'))
