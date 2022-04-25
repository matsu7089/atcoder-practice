const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

let N = BigInt(input[0])

let ans = ''
while (N !== 1n) {
  if (N % 2n === 0n) {
    ans = 'B' + ans
    N /= 2n
  } else {
    ans = 'A' + ans
    N -= 1n
  }
}

console.log('A' + ans)
