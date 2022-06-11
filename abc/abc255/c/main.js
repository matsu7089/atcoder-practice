const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [X, A, D, N] = input[0].split(' ').map((v) => BigInt(v))

const ans = (() => {
  const last = A + D * (N - 1n)
  const min = A > last ? last : A
  const max = A > last ? A : last

  if (X <= min) {
    const a = min - X
    return a > 0 ? a : -a
  }
  if (max <= X) {
    const a = X - max
    return a > 0 ? a : -a
  }

  const c = (X - A) / D
  const arr = []

  for (let i = c - 1n; i <= c + 1n; i++) {
    if (i < 0) continue
    if (N < i) continue
    let a = X - (A + D * i)
    a = a > 0 ? a : -a
    arr.push(a)
  }

  return arr.reduce((a, c) => {
    return a < c ? a : c
  }, Infinity)
})()

console.log(ans.toString())
