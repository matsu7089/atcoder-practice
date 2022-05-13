const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))

const dict = {}

for (let i = 1; i <= N; i++) {
  dict[i] = {
    prev: i === 1 ? null : i - 1,
    next: i === N ? null : i + 1,
  }
}

for (let i = 0; i < Q; i++) {
  const x = parseInt(input[i + 1])
  const c = dict[x]

  if (c.next) {
    const y = c.next
    const n = dict[y]
    const l = c.prev
    const r = n.next

    c.prev = c.next
    n.next = n.prev
    c.next = r
    n.prev = l

    if (l) {
      dict[l].next = y
    }
    if (r) {
      dict[r].prev = x
    }
  } else {
    const b = dict[c.prev]
    const l = b.prev

    c.next = c.prev
    b.prev = b.next
    c.prev = l
    b.next = null

    if (l) {
      dict[l].next = x
    }
  }
}

let n = Object.keys(dict).find((i) => dict[i].prev === null)
const ans = [n]

while (true) {
  n = dict[n].next
  if (!n) break
  ans.push(n)
}

console.log(ans.join(' '))
