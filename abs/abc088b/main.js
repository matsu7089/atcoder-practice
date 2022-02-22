const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1]
  .split(' ')
  .map((v) => parseInt(v))
  .sort((a, b) => b - a)

let alice = 0
let bob = 0
A.forEach((a, i) => {
  if (i % 2 === 0) {
    alice += a
  } else {
    bob += a
  }
})

console.log(alice - bob)
