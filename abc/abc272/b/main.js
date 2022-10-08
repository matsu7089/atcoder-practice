const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const arr = Array.from({ length: N + 1 }, () => new Set())

for (let i = 0; i < M; i++) {
  const [k, ...x] = input[i + 1].split(' ').map((v) => parseInt(v))

  for (let m = 0; m < k; m++) {
    for (let n = m + 1; n < k; n++) {
      arr[x[m]].add(x[n])
      arr[x[n]].add(x[m])
    }
  }
}

let ans = true

for (let i = 1; i <= N; i++) {
  if (arr[i].size !== N - 1) {
    ans = false
  }
}

console.log(ans ? 'Yes' : 'No')
