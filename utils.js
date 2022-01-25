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
