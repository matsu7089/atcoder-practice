const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = []

for (let i = 0; i < N; i++) {
  A.push(input[i + 1].split(''))
}

let ans = 0

for (let i = 0; i < N; i++) {
  const str = A[i].reduce((a, c) => a + c)

  for (let j = 0; j < N; j++) {
    const v = str.slice(-N + j) + str.slice(0, j)
    const v2 = [...v].reverse().join('')
    ans = Math.max(ans, parseInt(v), parseInt(v2))
  }
}

for (let i = 0; i < N; i++) {
  let str = ''
  for (let j = 0; j < N; j++) {
    str += A[j][i]
  }

  for (let j = 0; j < N; j++) {
    const v = str.slice(-N + j) + str.slice(0, j)
    const v2 = [...v].reverse().join('')
    ans = Math.max(ans, parseInt(v), parseInt(v2))
  }
}

for (let i = 0; i < N; i++) {
  let str = ''
  for (let j = 0; j < N; j++) {
    str += A[j][(i + j) % N]
  }

  for (let j = 0; j < N; j++) {
    const v = str.slice(-N + j) + str.slice(0, j)
    const v2 = [...v].reverse().join('')
    ans = Math.max(ans, parseInt(v), parseInt(v2))
  }
}

for (let i = 0; i < N; i++) {
  let str = ''
  for (let j = 0; j < N; j++) {
    str += A[j][(i - j + N) % N]
  }

  for (let j = 0; j < N; j++) {
    const v = str.slice(-N + j) + str.slice(0, j)
    const v2 = [...v].reverse().join('')
    ans = Math.max(ans, parseInt(v), parseInt(v2))
  }
}

console.log(ans)
