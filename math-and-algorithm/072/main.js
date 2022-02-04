const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B] = input[0].split(' ').map((v) => parseInt(v))

let ans = 1
for (let i = 2; i <= B; i++) {
  if (Math.floor(B / i) - Math.ceil(A / i) >= 1) {
    ans = i
  }
}

console.log(ans)
