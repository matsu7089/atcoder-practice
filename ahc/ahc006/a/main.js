const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const R = []
const abs = Math.abs

for (let i = 0; i < 1000; i++) {
  const r = input[i].split(' ').map((v) => parseInt(v))
  r.push(i, null)

  // r = [a, b, c, d, i, dist]
  R.push(r)
}

const calcScore = (mx, my) => {
  for (let i = 0; i < 1000; i++) {
    const r = R[i]

    let dist = abs(r[0] - r[2]) + abs(r[1] - r[3])
    dist += abs(r[0] - mx) + abs(r[1] - my)
    dist += abs(r[1] - mx) + abs(r[3] - my)

    r[5] = dist
  }

  R.sort((a, b) => a[5] - b[5])

  const M = []
  const task = []

  for (let i = 0; i < 50; i++) {
    const r = R[i]
    M.push(r[4] + 1)

    // t = [visited, x, y, i?]
    task.push([false, r[0], r[1], i])
  }

  const N = [400, 400]
  let cx = 400
  let cy = 400
  let remain = 50
  let score = 0

  while (remain) {
    const len = task.length

    let minDist = Infinity
    let select = null

    for (let i = 0; i < len; i++) {
      const t = task[i]
      if (t[0]) continue

      let dist = abs(cx - t[1]) + abs(cy - t[2])

      if (dist < minDist) {
        minDist = dist
        select = i
      }
    }
    score += minDist

    const t = task[select]
    t[0] = true
    cx = t[1]
    cy = t[2]

    N.push(cx, cy)
    remain--

    if (t[3] >= 0) {
      const n = R[t[3]]
      task.push([false, n[2], n[3]])
      remain++
    }
  }

  score += abs(cx - 400) + abs(cy - 400)
  N.push(400, 400)

  const output = [
    M.length + ' ' + M.join(' '),
    N.length / 2 + ' ' + N.join(' '),
  ]

  return [score, output]
}

let minScore = Infinity
let ans = null

for (let mx = 10; mx <= 790; mx += 10) {
  for (let my = 10; my <= 790; my += 10) {
    const [score, output] = calcScore(mx, my)

    if (score < minScore) {
      minScore = score
      ans = output
    }
  }
}

console.log(ans.join('\n'))
