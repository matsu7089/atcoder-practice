const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const T = input[1]

let x = 0
let y = 0
let d = 0
let dx = 1
let dy = 0

for (let i = 0; i < N; i++) {
  if (T[i] === 'S') {
    x += dx
    y += dy
    continue
  }
  switch (++d % 4) {
    case 0: {
      dx = 1
      dy = 0
      break
    }
    case 1: {
      dx = 0
      dy = -1
      break
    }
    case 2: {
      dx = -1
      dy = 0
      break
    }
    case 3: {
      dx = 0
      dy = 1
      break
    }
  }
}

console.log(x, y)
