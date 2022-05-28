const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const Q = parseInt(input[0])

const nhq = () => {
  const hq = {
    d: [],
    len: () => hq.d.length,
    top: () => hq.d[0],
    push: (v) => {
      let i = hq.d.push(v) - 1
      let p = (i - 1) >> 1

      while (v < hq.d[p]) {
        hq.d[i] = hq.d[p]
        hq.d[p] = v
        i = p
        p = (i - 1) >> 1
      }
    },
    _c: (i) => {
      const l = (i << 1) + 1
      const r = l + 1
      return hq.d[r] < hq.d[l] ? r : l
    },
    pop: () => {
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
  return hq
}

const S = {}
const maxHq = nhq()
const minHq = nhq()

const q1 = (x) => {
  if (S[x]) {
    S[x]++
    return
  }

  maxHq.push(-x)
  minHq.push(x)
  S[x] = 1
}

const q2 = (x, c) => {
  if (!S[x]) return

  S[x] -= c
  if (S[x] <= 0) {
    delete S[x]
  }
}

const ans = []

const q3 = () => {
  let min = minHq.top()
  while (!S[min]) {
    minHq.pop()
    min = minHq.top()
  }

  let max = -maxHq.top()
  while (!S[max]) {
    maxHq.pop()
    max = -maxHq.top()
  }

  ans.push(max - min)
}

for (let i = 0; i < Q; i++) {
  const [q, x, c] = input[i + 1].split(' ').map((v) => parseInt(v))

  switch (q) {
    case 1:
      q1(x)
      break

    case 2:
      q2(x, c)
      break

    case 3:
      q3()
      break
  }
}

console.log(ans.join('\n'))
