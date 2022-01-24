const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const ans = [1, N]

const s = Math.sqrt(N)
for (let i = 2; i <= s; i++) {
  if (N % i === 0) {
    ans.push(i, N / i)
  }
}

console.log(ans.join('\n'))
