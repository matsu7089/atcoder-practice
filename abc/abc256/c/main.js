const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [h1, h2, h3, w1, w2, w3] = input[0].split(' ').map((v) => parseInt(v))
const max = Math.max(h1, h2)

const h1a = []
const h2a = []

for (let a = 1; a < max; a++) {
  for (let b = 1; b < max; b++) {
    const c1 = h1 - a - b
    const c2 = h2 - a - b
    if (c1 > 0) {
      h1a.push([a, b, c1])
    }
    if (c2 > 0) {
      h2a.push([a, b, c2])
    }
  }
}

let ans = 0

for (let i = 0; i < h1a.length; i++) {
  const a = h1a[i]
  for (let j = 0; j < h2a.length; j++) {
    const b = h2a[j]

    const c1 = w1 - a[0] - b[0]
    const c2 = w2 - a[1] - b[1]
    const c3 = w3 - a[2] - b[2]

    if (c1 + c2 + c3 === h3 && c1 > 0 && c2 > 0 && c3 > 0) {
      ans++
    }
  }
}

console.log(ans)
