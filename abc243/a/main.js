const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [V, ...ABC] = input[0].split(' ').map((v) => parseInt(v))

const ans = (() => {
  let cur = V
  for (let i = 0; ; i++) {
    const j = i % 3
    if (cur < ABC[j]) {
      return ['F', 'M', 'T'][j]
    }
    cur -= ABC[j]
  }
})()

console.log(ans)
