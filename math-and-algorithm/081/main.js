const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

let N = parseInt(input[0])

let ans = 0
;[10000, 5000, 1000].forEach((y) => {
  const num = Math.floor(N / y)
  N -= y * num
  ans += num
})

console.log(ans)
