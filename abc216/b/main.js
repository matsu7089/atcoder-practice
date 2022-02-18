const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const ans = (() => {
  const set = new Set()
  for (let i = 1; i <= N; i++) {
    const name = input[i]
    if (set.has(name)) return true
    set.add(name)
  }
  return false
})()

console.log(ans ? 'Yes' : 'No')
