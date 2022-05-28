const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, A, B] = input[0].split(' ').map((v) => BigInt(v))

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

let ans = (N * (N + 1n)) / 2n

let aCnt = ((N / A) * (N / A + 1n)) / 2n
ans -= aCnt * A

let bCnt = ((N / B) * (N / B + 1n)) / 2n
ans -= bCnt * B

const C = lcm(A, B)
let cCnt = ((N / C) * (N / C + 1n)) / 2n
ans += cCnt * C

console.log(ans.toString())
