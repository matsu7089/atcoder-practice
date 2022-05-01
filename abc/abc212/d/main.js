const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const Q = parseInt(input[0])

const hq = {
  d: [],
  len() {
    return hq.d.length
  },
  top() {
    return hq.d[0]
  },
  push(v) {
    let i = hq.d.push(v) - 1
    let p = (i - 1) >> 1

    while (v < hq.d[p]) {
      hq.d[i] = hq.d[p]
      hq.d[p] = v
      i = p
      p = (i - 1) >> 1
    }
  },
  _c(i) {
    const l = (i << 1) + 1
    const r = l + 1
    return hq.d[r] < hq.d[l] ? r : l
  },
  pop() {
    if (!hq.len()) return null

    const h = hq.top()
    const l = hq.d.pop()

    if (!hq.len()) return h

    hq.d[0] = l
    let i = 0
    let c = hq._c(i)

    while (hq.d[c] < l) {
      hq.d[i] = hq.d[c]
      hq.d[c] = l
      i = c
      c = hq._c(i)
    }

    return h
  },
}

const ans = []
let add = 0

for (let i = 0; i < Q; i++) {
  const [q, x] = input[i + 1].split(' ').map((v) => parseInt(v))

  switch (q) {
    case 1: {
      hq.push(x - add)
      break
    }
    case 2: {
      add += x
      break
    }
    case 3: {
      ans.push(hq.pop() + add)
      break
    }
  }
}

console.log(ans.join('\n'))
