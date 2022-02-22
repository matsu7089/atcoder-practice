const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, A, B] = input[0].split(' ').map((v) => parseInt(v))

let ans = 0
for (let i = 1; i <= N; i++) {
  const sum = i
    .toString()
    .split('')
    .reduce((a, c) => a + parseInt(c), 0)

  if (A <= sum && sum <= B) ans += i
}

console.log(ans)
