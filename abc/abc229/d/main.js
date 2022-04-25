const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const K = parseInt(input[1])

const sLen = S.length
const sum = Array(sLen)
sum[0] = S[0] === '.' ? 1 : 0

for (let i = 1; i < sLen; i++) {
  sum[i] = sum[i - 1] + (S[i] === '.' ? 1 : 0)
}

let ans = 0
for (let i = 0; i < sLen; i++) {
  let ok = i - 1
  let ng = sLen

  while (ng - ok > 1) {
    const mid = Math.floor((ok + ng) / 2)

    if (sum[mid] - (sum[i - 1] || 0) <= K) {
      ok = mid
    } else {
      ng = mid
    }
  }

  ans = Math.max(ans, ok - i + 1)
}

console.log(ans)
