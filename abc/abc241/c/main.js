const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const S = Array(N)

for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split('').map((v) => v === '#')
}

const ans = (() => {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N - 5; x++) {
      let cnt = 0
      for (let i = 0; i < 6; i++) {
        if (S[y][x + i]) cnt++
      }
      if (cnt >= 4) return true
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N - 5; y++) {
      let cnt = 0
      for (let i = 0; i < 6; i++) {
        if (S[y + i][x]) cnt++
      }
      if (cnt >= 4) return true
    }
  }

  for (let y = 0; y < N - 5; y++) {
    for (let x = 0; x < N - 5; x++) {
      let cnt1 = 0
      let cnt2 = 0
      for (let i = 0; i < 6; i++) {
        if (S[y + i][x + i]) cnt1++
        if (S[y + i][x + 5 - i]) cnt2++
      }
      if (cnt1 >= 4 || cnt2 >= 4) return true
    }
  }

  return false
})()

console.log(ans ? 'Yes' : 'No')
