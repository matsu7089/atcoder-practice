const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, X] = input.map((v) => parseInt(v))

let ans = 0
for (let a = 0; a <= A; a++) {
  for (let b = 0; b <= B; b++) {
    for (let c = 0; c <= C; c++) {
      if (a * 500 + b * 100 + c * 50 === X) ans++
    }
  }
}

console.log(ans)
