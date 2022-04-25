const rl = require('readline').createInterface({
  input: process.stdin,
})

let N = null
const set = new Set()

rl.on('line', (line) => {
  let input = parseInt(line)

  if (N === null) {
    N = input
    for (let i = N * 2 + 1; i > 0; i--) {
      set.add(i)
    }
    input = null
  }

  if (input === 0) {
    process.exit(0)
  }
  set.delete(input)

  const out = [...set][0]
  if (out > 0) {
    console.log(out)
    set.delete(out)
  } else {
    console.log(0)
    process.exit(0)
  }
})
