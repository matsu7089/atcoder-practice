/**
 * https://atcoder.jp/contests/abc237/editorial/3323
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = input[1]

const L = []
const R = []

for (let i = 0; i < N; i++) {
  if (S.charAt(i) === 'L') {
    R.push(i)
  } else {
    L.push(i)
  }
}

const A = [...L, N, ...R.reverse()]
console.log(A.join(' '))
