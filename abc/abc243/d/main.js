const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

let [N, X] = input[0].split(' ').map((v) => BigInt(v))
const S = input[1]

const L = []
L.last = () => L[L.length - 1] || 'U'

for (let i = 0; i < N; i++) {
  if (S[i] === 'U' && L.last() !== 'U') {
    L.pop()
  } else {
    L.push(S[i])
  }
}

let dep = 0n
let pos = 0n
for (let i = 0n; ; i++) {
  if (X < 1n << i) {
    dep = i - 1n
    pos = X - (1n << dep) + 1n
    break
  }
}

L.forEach((s) => {
  switch (s) {
    case 'U': {
      dep--
      pos = (pos + 1n) / 2n
      break
    }
    case 'L': {
      dep++
      pos = pos * 2n - 1n
      break
    }
    case 'R': {
      dep++
      pos *= 2n
      break
    }
  }
})

const ans = (1n << dep) + pos - 1n
console.log(ans.toString())
