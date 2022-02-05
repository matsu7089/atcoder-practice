const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => BigInt(v))

const mod = 10n ** 9n + 7n

const modPow = (a, b) => {
  let p = a
  let ret = 1n
  for (let i = 0n; i < 30n; i++) {
    if ((b & (1n << i)) !== 0n) {
      ret *= p
      ret %= mod
    }
    p *= p
    p %= mod
  }
  return ret
}
const modDiv = (a, b) => {
  return (a * modPow(b, mod - 2n)) % mod
}

const F = 200000
const fact = Array(F)
fact[0] = 1n

for (let i = 1; i < F; i++) {
  fact[i] = (BigInt(i) * fact[i - 1]) % mod
}

const combination = (n, r) => {
  return modDiv(fact[n], (fact[r] * fact[n - r]) % mod)
}

let ans = 0n
for (let i = 0; i < N; i++) {
  ans += A[i] * combination(N - 1, i)
}
ans %= mod

console.log(ans.toString())
