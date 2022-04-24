const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const S = []

for (let i = 0; i < N; i++) {
  S.push(input[i + 1])
}

const cnt = (str) => {
  const dict = {}
  const len = str.length

  for (let i = 0; i < len; i++) {
    const s = str[i]
    if (dict[s]) {
      dict[s]++
    } else {
      dict[s] = 1
    }
  }

  return Object.keys(dict).reduce((a, c) => (dict[c] === K ? a + 1 : a), 0)
}

const dp = (d, str) => {
  if (d === N) {
    return cnt(str)
  }

  return Math.max(dp(d + 1, str + S[d]), dp(d + 1, str))
}

console.log(dp(0, ''))
