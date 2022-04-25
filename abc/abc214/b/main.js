const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [S, T] = input[0].split(' ').map((v) => parseInt(v))

let ans = 0
for (let a = 0; a <= S; a++) {
  for (let b = 0; b <= S; b++) {
    if (a + b > S) continue
    for (let c = 0; c <= S; c++) {
      if (a + b + c <= S && a * b * c <= T) ans++
    }
  }
}

console.log(ans)
