const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

let ans = 0

a: for (let a = 1; ; a++) {
  for (let b = a; ; b++) {
    const m = Math.floor(N / (a * b))
    if (m < b) {
      if (b === a) break a
      continue a
    }

    ans += m - b + 1
  }
}

console.log(ans)
