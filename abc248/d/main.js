const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const A = input[1].split(' ').map((v) => parseInt(v))
const Q = parseInt(input[2])

const dict = A.reduce((a, c, i) => {
  if (a[c]) {
    a[c].push(i)
  } else {
    a[c] = [i]
  }
  return a
}, {})

const search = (l, r, x) => {
  const arr = dict[x]

  if (!arr) {
    return 0
  }

  let okL = arr.length
  let ngL = -1

  while (okL - ngL > 1) {
    const m = Math.trunc((okL + ngL) / 2)
    if (l <= arr[m]) {
      okL = m
    } else {
      ngL = m
    }
  }

  if (okL === arr.length) {
    return 0
  }

  let okR = -1
  let ngR = arr.length

  while (ngR - okR > 1) {
    const m = Math.trunc((okR + ngR) / 2)
    if (arr[m] <= r) {
      okR = m
    } else {
      ngR = m
    }
  }

  return okR - okL + 1
}

const ans = []

for (let i = 0; i < Q; i++) {
  const [L, R, X] = input[i + 3].split(' ').map((v) => parseInt(v))
  ans.push(search(L - 1, R - 1, X))
}

console.log(ans.join('\n'))
