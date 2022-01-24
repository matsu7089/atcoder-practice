const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const div = [N]
const s = Math.sqrt(N)
for (let i = 2; i <= s; i++) {
  if (N % i === 0) {
    div.push(i, N / i)
  }
}

const ans = []
let n = N
for (const i of div.sort((a, b) => a - b)) {
  while (n % i === 0) {
    ans.push(i)
    n /= i
  }
}

console.log(ans.join(' '))
