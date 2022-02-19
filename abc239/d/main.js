const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, C, D] = input[0].split(' ').map((v) => parseInt(v))

const isPrime = (n) => {
  const s = Math.sqrt(n)
  for (let i = 2; i <= s; i++) {
    if (n % i === 0) return false
  }
  return true
}

const pn = Array(200 + 1).fill(false)
for (let i = 1; i <= 200; i++) {
  if (isPrime(i)) pn[i] = true
}

const ans = (() => {
  i: for (let i = A; i <= B; i++) {
    for (let j = C; j <= D; j++) {
      if (pn[i + j]) continue i
    }
    return true
  }
  return false
})()

console.log(ans ? 'Takahashi' : 'Aoki')
