const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const isPrime = (n) => {
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false
  }
  return true
}

let ans = []
for (let i = 2; i <= N; i++) {
  if (isPrime(i)) ans.push(i)
}

console.log(ans.join(' '))
