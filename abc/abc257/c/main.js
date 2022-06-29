const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = input[1]
const W = input[2].split(' ').map((v) => parseInt(v))

const w2 = []

const dict = W.reduce((a, c, i) => {
  if (a[c]) {
    if (S[i] === '0') {
      a[c].child++
    } else {
      a[c].adult++
    }
  } else {
    const isChild = S[i] === '0'
    a[c] = {
      child: isChild ? 1 : 0,
      adult: isChild ? 0 : 1,
    }
    w2.push(c)
  }
  return a
}, {})

w2.sort((a, b) => a - b)
const w2l = w2.length

let childCnt = 0
let adultCnt = w2.reduce((a, c) => a + dict[c].adult, 0)

let ans = adultCnt
for (let i = 0; i < w2l; i++) {
  const w = w2[i]

  childCnt += dict[w].child
  adultCnt -= dict[w].adult

  ans = Math.max(childCnt + adultCnt, ans)
}

console.log(ans)
