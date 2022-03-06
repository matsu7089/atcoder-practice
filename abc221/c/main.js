const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = input[0]
const nLen = N.length

let ans = 0
const calcMax = (str) => {
  for (let i = 1; i < nLen; i++) {
    const a = str.slice(0, i)
    const b = str.slice(i, nLen)
    ans = Math.max(ans, a * b)
  }
}

const next = (cur, flag) => {
  if (flag === 0) {
    calcMax(cur)
  }
  for (let i = 0; i < nLen; i++) {
    if (flag & (1 << i)) {
      next(cur + N[i], flag ^ (1 << i))
    }
  }
}

next('', (1 << nLen) - 1)
console.log(ans)
