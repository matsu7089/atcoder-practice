const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = input[0]

const mod = 998244353n
const sum = (n) => (n * (n + 1n)) / 2n

let ans = 0n
const len = BigInt(N.length)
for (let i = 0n; i < len - 1n; i++) {
  ans += sum(9n * 10n ** i)
  ans %= mod
}

const r = BigInt(N) - 10n ** (len - 1n) + 1n
ans += sum(r)
ans %= mod

console.log(ans.toString())
