const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, M] = input[0].split(' ').map((v) => parseInt(v))

const cell = Array.from({ length: N }, () => Array(N).fill(-1))
cell[0][0] = 0

const Q = {
  d: [],
  h: 0,
  t: 0,
  len: () => Q.t - Q.h,
  put: (v) => (Q.d[Q.t++] = v),
  get: () => (Q.len() ? Q.d[Q.h++] : null),
}

Q.put({ y: 0, x: 0, cur: 0 })

const pat = []

for (let x = 0; x <= Math.sqrt(M); x++) {
  const y = Math.sqrt(M - x ** 2)

  if (Number.isInteger(y)) {
    pat.push({ mx: x, my: y })
    pat.push({ mx: -x, my: y })
    pat.push({ mx: x, my: -y })
    pat.push({ mx: -x, my: -y })
    pat.push({ mx: y, my: x })
    pat.push({ mx: -y, my: x })
    pat.push({ mx: y, my: -x })
    pat.push({ mx: -y, my: -x })
  }
}

const inRange = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < N
}

while (Q.len()) {
  const { x, y, cur } = Q.get()
  const next = cur + 1

  pat.forEach(({ mx, my }) => {
    const cy = y + my
    const cx = x + mx

    if (inRange(cy, cx) && cell[cy][cx] === -1) {
      cell[cy][cx] = next
      Q.put({ y: cy, x: cx, cur: next })
    }
  })
}

console.log(cell.map((r) => r.join(' ')).join('\n'))
