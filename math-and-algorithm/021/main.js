const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [n, r] = input[0].split(' ').map((v) => parseInt(v))

const factorial = (n) => {
  let ret = 1
  for (let i = 2; i <= n; i++) {
    ret *= i
  }
  return ret
}

const permutation = (n, r) => {
  let ret = n
  for (let i = 1; i < r; i++) {
    ret *= n - i
  }
  return ret
}

const combination = (n, r) => {
  return permutation(n, r) / factorial(r)
}

console.log(combination(n, r))
