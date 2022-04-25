/**
 * https://atcoder.jp/contests/abc215/editorial/2484
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [S, K] = input[0].split(' ')

const set = new Set()
const len = S.length

const findAll = (flag, str) => {
  if (flag === 0) {
    set.add(str)
  }
  for (let i = 0; i < len; i++) {
    if (flag & (1 << i)) {
      findAll(flag ^ (1 << i), str + S[i])
    }
  }
}

findAll((1 << len) - 1, '')

const sorted = [...set].sort()
console.log(sorted[parseInt(K) - 1])
