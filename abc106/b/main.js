const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const N = parseInt(input[0])

let ans = 0
for (let i = 105; i <= N; i += 2) {
  let cnt = 0
  for (let j = 1; j <= N; j++) {
    if (i % j === 0) cnt++
  }
  if (cnt === 8) ans++
}

console.log(ans)
