/**
 * https://atcoder.jp/contests/abc251/editorial/3958
 */
const ans = []

for (let i = 1; i < 100; i++) {
  ans.push(i)
  ans.push(i * 100)
  ans.push(i * 10000)
}

console.log(ans.length)
console.log(ans.join(' '))
