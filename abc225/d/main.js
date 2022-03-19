const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [N, Q] = input[0].split(' ').map((v) => parseInt(v))

const T = Array.from({ length: N + 1 }, () => ({
  before: null,
  after: null,
}))

const query3 = (x) => {
  let b
  while ((b = T[x].before)) x = b

  const arr = [x]
  while ((x = T[x].after)) {
    arr.push(x)
  }
  return arr.length + ' ' + arr.join(' ')
}

const ans = []
for (let i = 0; i < Q; i++) {
  const [type, x, y] = input[i + 1].split(' ').map((v) => parseInt(v))

  switch (type) {
    case 1: {
      T[x].after = y
      T[y].before = x
      break
    }
    case 2: {
      T[x].after = null
      T[y].before = null
      break
    }
    case 3: {
      ans.push(query3(x))
      break
    }
  }
}

console.log(ans.join('\n'))
