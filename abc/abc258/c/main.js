const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))
const S = input[1]

let head = 0
const ans = []

for (let i = 0; i < Q; i++) {
  const [t, x] = input[i + 2].split(' ').map((v) => parseInt(v))

  if (t === 1) {
    head -= x
    head = (head + N) % N
  } else {
    ans.push(S[(head + x - 1) % N])
  }
}

console.log(ans.join('\n'))
