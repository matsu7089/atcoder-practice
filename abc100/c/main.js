const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

let ans = A.reduce((a, c) => {
  let cnt = 0
  while (true) {
    if (c % 2 === 0) {
      c /= 2
      cnt++
    } else {
      break
    }
  }
  return a + cnt
}, 0)

console.log(ans)
