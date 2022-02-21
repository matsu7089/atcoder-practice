/**
 * https://atcoder.jp/contests/abc240/editorial/3424
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const stack = []
const ans = []

for (let i = 0; i < N; i++) {
  const a = A[i]
  const top = stack[stack.length - 1]

  if (stack.length === 0 || a !== top.num) {
    stack.push({
      num: a,
      cnt: 1,
    })

    const prev = ans[i - 1] || 0
    ans.push(prev + 1)
    continue
  }

  if (++top.cnt === top.num) {
    ans.push(ans[i - 1] - (top.num - 1))
    stack.pop()
  } else {
    ans.push(ans[i - 1] + 1)
  }
}

console.log(ans.join('\n'))
