const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, K] = input[0].split(' ').map((v) => parseInt(v))
const P = input[1].split(' ').map((v) => parseInt(v))

const hq = {
  d: [],
  top() {
    return hq.d[0]
  },
  push(v) {
    let i = hq.d.push(v) - 1
    let p = Math.trunc((i - 1) / 2)

    while (v < hq.d[p]) {
      hq.d[i] = hq.d[p]
      hq.d[p] = v

      i = p
      p = Math.trunc((i - 1) / 2)
    }
  },
  pop() {
    if (!hq.d.length) return null

    const top = hq.top()
    const pop = hq.d.pop()

    if (!hq.d.length) return top

    const cf = (i) => {
      const l = i * 2 + 1
      const r = i * 2 + 2
      return hq.d[r] < hq.d[l] ? r : l
    }

    hq.d[0] = pop
    let i = 0
    let c = cf(i)

    while (hq.d[c] < pop) {
      hq.d[i] = hq.d[c]
      hq.d[c] = pop

      i = c
      c = cf(i)
    }

    return top
  },
}

for (let i = 0; i < K; i++) {
  hq.push(P[i])
}

const ans = [hq.top()]

for (let i = K; i < N; i++) {
  const pi = P[i]

  if (hq.top() < pi) {
    hq.pop()
    hq.push(pi)
  }

  ans.push(hq.top())
}

console.log(ans.join('\n'))
