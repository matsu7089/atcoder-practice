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
