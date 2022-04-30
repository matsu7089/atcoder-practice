const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

const S = [A[0]]
for (let i = 1; i < N; i++) {
  S[i] = S[i - 1] + A[i]
}

const dict = S.reduce((a, c, i) => {
  if (a[c]) {
    a[c].push(i)
  } else {
    a[c] = [i]
  }
  return a
}, {})

let ans = 0

for (let l = 0; l < N; l++) {
  const t = K - A[l] + S[l]

  const arr = dict[t]
  if (!arr) continue

  let ok = arr.length
  let ng = -1

  while (ok - ng > 1) {
    const m = Math.trunc((ok + ng) / 2)
    if (l <= arr[m]) {
      ok = m
    } else {
      ng = m
    }
  }

  ans += arr.length - ok
}

console.log(ans)
