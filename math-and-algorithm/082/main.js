const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])

const Movie = []
for (let i = 1; i <= N; i++) {
  const [L, R] = input[i].split(' ').map((v) => parseInt(v))
  Movie.push({ L, R })
}
Movie.sort((a, b) => a.R - b.R)

let ans = 1
let now = Movie[0].R

for (let i = 1; i < N; i++) {
  if (Movie[i].L < now) continue

  ans++
  now = Movie[i].R
}

console.log(ans)
