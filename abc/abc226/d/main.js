const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const X = []
const Y = []

for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map((v) => BigInt(v))
  X.push(x)
  Y.push(y)
}

const magicSet = new Set()

const gcd = (a, b) => {
  if (a < b) {
    ;[a, b] = [b, a]
  }
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let a = X[j] - X[i]
    let b = Y[j] - Y[i]

    const d = gcd(a, b)
    a /= d
    b /= d

    magicSet.add(a.toString() + ',' + b.toString())
    magicSet.add((-a).toString() + ',' + (-b).toString())
  }
}

console.log(magicSet.size)
