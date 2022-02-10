const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')

const [A, B, H, M] = input[0].split(' ').map((v) => parseInt(v))

const ar = (H * 30 + M / 2) * (Math.PI / 180)
const [ax, ay] = [Math.cos(ar) * A, Math.sin(ar) * A]

const br = M * 6 * (Math.PI / 180)
const [bx, by] = [Math.cos(br) * B, Math.sin(br) * B]

const ans = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2)
console.log(ans)
