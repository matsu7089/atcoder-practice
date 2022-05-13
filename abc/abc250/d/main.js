const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const max = Math.ceil(Math.pow(N, 1 / 3))
const arr = Array(max + 1).fill(true)

for (let i = 2; i <= max; i++) {
  if (arr[i]) {
    for (let j = i * 2; j <= max; j += i) {
      arr[j] = false
    }
  }
}

const pns = []
for (let i = 2; i <= max; i++) {
  arr[i] && pns.push(i)
}

const search = (x) => {
  let ok = -1
  let ng = pns.length

  while (ng - ok > 1) {
    const m = Math.floor((ok + ng) / 2)
    if (pns[m] <= x) {
      ok = m
    } else {
      ng = m
    }
  }

  return ok + 1
}

let ans = 0
for (let i = pns.length - 1; i > 0; i--) {
  const q3 = pns[i] ** 3
  const pm = Math.min(Math.floor(N / q3), pns[i] - 1)

  ans += search(pm)
}

console.log(ans)
