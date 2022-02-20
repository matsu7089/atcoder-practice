const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const X = input[0]
const N = parseInt(input[1])

const dict = X.split('').reduce((a, c, i) => {
  a[c] = i + 1
  return a
}, {})

const names = []
for (let i = 0; i < N; i++) {
  names.push(input[i + 2])
}

names.sort((a, b) => {
  const len = Math.min(a.length, b.length)
  for (let i = 0; i < len; i++) {
    const orderA = dict[a[i]]
    const orderB = dict[b[i]]

    if (orderA < orderB) {
      return -1
    }
    if (orderA > orderB) {
      return 1
    }
  }
  if (a.length === b.length) {
    return 0
  } else {
    return a.length < b.length ? -1 : 1
  }
})

console.log(names.join('\n'))
