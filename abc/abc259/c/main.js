const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]
const T = input[1]

const sLen = S.length
const tLen = T.length
let b = ''

const arr1 = []
const arr2 = []

for (let i = 0; i < sLen; i++) {
  const s = S[i]
  if (b === s) {
    arr1[arr1.length - 1][1]++
  } else {
    cnt = 0
    arr1.push([s, 0])
  }
  b = s
}

b = ''

for (let i = 0; i < tLen; i++) {
  const t = T[i]
  if (b === t) {
    arr2[arr2.length - 1][1]++
  } else {
    cnt = 0
    arr2.push([t, 0])
  }
  b = t
}

const ans =
  arr1.length === arr2.length &&
  arr1.every((v1, i) => {
    const v2 = arr2[i]
    if (v1[0] !== v2[0]) {
      return false
    }
    if (v1[1] === 0) {
      return v2[1] === 0
    }
    return v1[1] <= v2[1]
  })

console.log(ans ? 'Yes' : 'No')
