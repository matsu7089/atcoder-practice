const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))
const B = input[2].split(' ').map((v) => parseInt(v))

const dict = B.reduce((acc, cur, i) => {
  acc[cur] = i
  return acc
}, {})

let ans1 = 0
let ans2 = 0

A.forEach((a, i) => {
  const bi = dict[a]
  if (bi === i) {
    ans1++
  } else if (bi >= 0) {
    ans2++
  }
})

console.log(ans1)
console.log(ans2)
