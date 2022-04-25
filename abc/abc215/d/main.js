/**
 * https://atcoder.jp/contests/abc215/editorial/2482
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))
const A = input[1].split(' ').map((v) => parseInt(v))

let arr = Array(M + 1).fill(true)

const primeFact = (n) => {
  const ret = new Set()
  const s = Math.sqrt(n)
  for (let i = 2; i <= s; i++) {
    while (n % i === 0) {
      n /= i
      ret.add(i)
    }
  }
  if (n !== 1) {
    ret.add(n)
  }
  return [...ret]
}

A.forEach((a) => {
  primeFact(a).forEach((f) => {
    if (!arr[f]) return
    for (let i = f; i <= M; i += f) {
      arr[i] = false
    }
  })
})

const ans = []
for (let i = 1; i <= M; i++) {
  if (arr[i]) ans.push(i)
}

console.log(ans.length)
console.log(ans.join('\n'))
