const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [ax, ay] = input[0].split(' ').map((v) => parseInt(v))
const [bx, by] = input[1].split(' ').map((v) => parseInt(v))
const [cx, cy] = input[2].split(' ').map((v) => parseInt(v))

const [BAx, BAy] = [ax - bx, ay - by]
const [BCx, BCy] = [cx - bx, cy - by]
const [CAx, CAy] = [ax - cx, ay - cy]
const [CBx, CBy] = [bx - cx, by - cy]

const ans = (() => {
  if (BAx * BCx + BAy * BCy < 0) {
    return Math.sqrt(BAx * BAx + BAy * BAy)
  }
  if (CAx * CBx + CAy * CBy < 0) {
    return Math.sqrt(CAx * CAx + CAy * CAy)
  }
  const cross = Math.abs(BAx * BCy - BAy * BCx)
  return cross / Math.sqrt(BCx * BCx + BCy * BCy)
})()

console.log(ans)
