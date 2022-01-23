const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const A = input[1].split(' ').map((v) => parseInt(v))

const cards = {}
A.forEach((v) => {
  if (cards[v]) {
    cards[v]++
  } else {
    cards[v] = 1
  }
})

const [v] = Object.entries(cards).find(([_, c]) => c !== 4)
console.log(v)
