const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, S] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const dp = (v, i) => {
  if (i === N - 1) {
    return v === S || v + A[i] === S
  }

  if (v === S) {
    return true
  }
  if (v > S) {
    return false
  }

  const r1 = dp(v, i + 1)
  const r2 = dp(v + A[i], i + 1)

  return r1 || r2
}

const ans = dp(0, 0) ? 'Yes' : 'No'
console.log(ans)
