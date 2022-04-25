const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const Q = parseInt(input[0])

const queue = {
  d: Array(Q),
  h: 0,
  t: 0,
  len: () => queue.t - queue.h,
  put: (v) => (queue.d[queue.t++] = v),
  get: () => (queue.len() ? queue.d[queue.h] : null),
  pop: () => (queue.len() ? queue.h++ : null),
}

let ans = []

for (let i = 0; i < Q; i++) {
  const [q, p1, p2] = input[i + 1].split(' ').map((v) => parseInt(v))

  if (q === 1) {
    queue.put({ x: p1, c: p2 })
    continue
  }

  let sum = 0n
  let cnt = p1

  while (cnt) {
    const head = queue.get()

    if (head.c > cnt) {
      sum += BigInt(head.x) * BigInt(cnt)
      head.c -= cnt
      break
    }

    sum += BigInt(head.x) * BigInt(head.c)
    cnt -= head.c
    queue.pop()
  }

  ans.push(sum.toString())
}

console.log(ans.join('\n'))
