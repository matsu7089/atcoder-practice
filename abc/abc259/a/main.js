const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M, X, T, D] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  if (X <= M && M <= N) {
    return T
  }
  if (M < X) {
    return T - (X - M) * D
  }
  return T + (M - N) * D
})()

console.log(ans)
