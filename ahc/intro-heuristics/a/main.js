const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const D = parseInt(input[0])
const C = ('-1 ' + input[1]).split(' ').map((v) => parseInt(v))
const S = [-1]

for (let i = 0; i < D; i++) {
  S.push(('-1 ' + input[i + 2]).split(' ').map((v) => parseInt(v)))
}

let last = {}

const calcScore = (d, i) => {
  let s = S[d][i]
  for (let j = 1; j <= 26; j++) {
    if (i === j) continue
    s -= C[j] * (d - (last[j] || 0))
  }
  return s
}

let ans = []
let maxScore = -Infinity

for (let i = 0; i < 10; i++) {
  last = {}
  let score = 0
  let ansTmp = []
  for (let j = 1; j <= D; j++) {
    let max = -Infinity
    let select = 0
    let add = 0
    for (let k = 1; k <= 26; k++) {
      const s = calcScore(j, k)
      const s2 = s + (j - (last[k] || 1)) * C[k] * i
      if (max < s2) {
        add = s
        max = s2
        select = k
      }
    }
    last[select] = j
    score += add
    ansTmp.push(select)
  }

  if (maxScore < score) {
    maxScore = score
    ans = ansTmp
  }
}

console.log(ans.join('\n'))

// // スコア確認用
// ;(() => {
//   const last = {}
//   const score = (d, i) => {
//     last[i] = d
//     let ret = S[d][i]
//     for (let j = 1; j <= 26; j++) {
//       ret -= C[j] * (d - (last[j] || 0))
//     }
//     return ret
//   }
//   const s = ans.reduce((a, c, i) => a + score(i + 1, c), 0)
//   console.log(s)
// })()
