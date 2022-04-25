const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const N = parseInt(input[0])
const TKA = [,]

for (let i = 0; i < N; i++) {
  const [t, k, ...arr] = input[i + 1].split(' ').map((v) => parseInt(v))
  TKA.push({ t, k, arr })
}

const set = new Set()
const task = [...TKA[N].arr]

while (task.length) {
  const x = task.pop()
  if (set.has(x)) continue

  set.add(x)
  task.push(...TKA[x].arr)
}

let ans = TKA[N].t
for (const i of set.values()) {
  ans += TKA[i].t
}

console.log(ans)
