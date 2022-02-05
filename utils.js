/**
 * 素数判定
 * @param {Number} n 数字
 * @returns {Boolean} 判定結果
 */
const isPrime = (n) => {
  const s = Math.sqrt(n)
  for (let i = 2; i <= s; i++) {
    if (n % i === 0) return false
  }
  return true
}

/**
 * 2数の最大公約数
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} 最大公約数
 */
const gcd = (a, b) => {
  if (a < b) {
    ;[a, b] = [b, a]
  }
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

/**
 * 2数の最小公倍数
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} 最小公倍数
 */
const lcm = (a, b) => {
  return (a * b) / gcd(a, b)
}

/**
 * 階乗計算
 * @param {Number} n
 * @returns {Number}
 */
const factorial = (n) => {
  let ret = 1
  for (let i = 2; i <= n; i++) {
    ret *= i
  }
  return ret
}

/**
 * 順列計算
 * @param {Number} n
 * @param {Number} r
 * @returns {Number}
 */
const permutation = (n, r) => {
  let ret = 1
  for (let i = 0; i < r; i++) {
    ret *= n - i
  }
  return ret
}

/**
 * 組み合わせ計算
 * @param {Number} n
 * @param {Number} r
 * @returns {Number}
 */
const combination = (n, r) => {
  return permutation(n, r) / factorial(r)
}

/**
 * a ** b % m を算出
 * @param {BigInt} a
 * @param {BigInt} b
 * @param {BigInt} m
 */
const modPow = (a, b, m) => {
  let p = a
  let ret = 1n
  for (let i = 0n; i < 30n; i++) {
    if ((b & (1n << i)) !== 0n) {
      ret *= p
      ret %= m
    }
    p *= p
    p %= m
  }
  return ret
}

/**
 * a / b % m を算出
 * @param {BigInt} a
 * @param {BigInt} b
 * @param {BigInt} m
 * @returns
 */
const modDiv = (a, b, m) => {
  return (a * modPow(b, m - 2n)) % m
}
