const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => BigInt(v))

const gcd = (a, b) => {
  if (a < b) {
    ;[a, b] = [b, a]
  }
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b)
}

const ans = A.reduce((a, c) => lcm(a, c))
console.log(ans.toString())
