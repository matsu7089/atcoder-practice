const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[0]

const d = S.split('').reduce((a, c) => {
  if (a[c]) {
    a[c]++
  } else {
    a[c] = 1
  }
  return a
}, {})

let ans = -1
Object.keys(d).forEach((k) => {
  if (d[k] === 1) ans = k
})

console.log(ans)
