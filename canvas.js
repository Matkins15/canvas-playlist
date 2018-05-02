let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// c = context
let c = canvas.getContext('2d')

// c.fillStyle = 'purple'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'blue'
// c.fillRect(400, 200, 100, 100)
// c.fillStyle = 'orange'
// c.fillRect(600, 500, 100, 100)

console.log(canvas)

// lines

// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = 'green'
// c.stroke()

// for (let i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.moveTo(600, 300)
//   c.lineTo(x, y)
//   c.lineTo(x, y)
//   c.strokeStyle = 'green'
//   c.stroke()
// }

// Arch / Circle

// for (var i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false)
//   c.strokeStyle = 'black'
//   c.stroke()
// }

// animation works by constantly refreshing the page while chaging the x and y values
let mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x
  mouse.y = event.y
})

function Circle (x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = 'lightgrey'
    c.fill()
    c.stroke()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      this.radius += 1
    } else if (this.radius > 2) {
      this.radius -= 1
    }

    this.draw()
  }
}

let circleArray = []
for (let i = 0; i < 100; i++) {
  let radius = 30
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerHeight - radius * 2) + radius
  let dx = (Math.random() - 0.5) * 3
  let dy = (Math.random() - 0.5) * 3
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

const animate = () => {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()
