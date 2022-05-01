const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const mod = 10 ** 9 + 7

const char = 'chokudai'
const cl = char.length
const sl = S.length

let dp1 = Array(sl).fill(0)
let dp2 = dp1.slice()

for (let i = 0; i < sl; i++) {
  const b = dp1[i - 1] || 0

  if (S[i] === char[0]) {
    dp1[i] = b + 1
  } else {
    dp1[i] = b
  }
}

for (let c = 1; c < cl; c++) {
  for (let i = 0; i < sl; i++) {
    const b1 = dp1[i - 1] || 0
    const b2 = dp2[i - 1] || 0

    if (S[i] === char[c]) {
      dp2[i] = (b1 + b2) % mod
    } else {
      dp2[i] = b2
    }
  }

  ;[dp1, dp2] = [dp2, dp1]
}

console.log(dp1[sl - 1])
