const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))

const P = Array(360).fill(false)
P[0] = true

let deg = 0
A.forEach((a) => {
  deg += a
  P[deg % 360] = true
})

let ans = 0
let c = 1
for (let i = 0; i <= 360; i++) {
  if (P[i % 360]) {
    ans = Math.max(ans, c)
    c = 1
  } else {
    c++
  }
}

console.log(ans)
