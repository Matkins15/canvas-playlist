let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// c = context
let c = canvas.getContext('2d')

c.fillStyle = 'purple'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'blue'
c.fillRect(400, 200, 100, 100)
c.fillStyle = 'orange'
c.fillRect(600, 500, 100, 100)

console.log(canvas)

// lines

// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = 'green'
// c.stroke()

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  c.beginPath()
  c.moveTo(600, 300)
  c.lineTo(x, y)
  c.lineTo(x, y)
  c.strokeStyle = 'green'
  c.stroke()
}

// Arch / Circle

for (var i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  c.beginPath()
  c.arc(x, y, 30, 0, Math.PI * 2, false)
  c.strokeStyle = 'black'
  c.stroke()
}
