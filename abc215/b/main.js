const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = BigInt(input[0])

let ans = 0n
let i = 1n
while (true) {
  if (2n ** i > N) break
  ans = i
  i++
}

console.log(ans.toString())
