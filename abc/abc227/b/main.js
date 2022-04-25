const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const S = input[1].split(' ').map((v) => parseInt(v))

const dict = {}

a: for (let a = 1; ; a++) {
  for (let b = 1; ; b++) {
    const area = 4 * a * b + 3 * (a + b)

    if (area > 1000) {
      if (b === 1) break a
      continue a
    }
    dict[area] = true
  }
}

let ans = 0
S.forEach((s) => {
  if (!dict[s]) ans++
})

console.log(ans)
