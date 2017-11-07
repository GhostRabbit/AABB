const SPEED = 1
let p
let blocks = []

function setup() {
	createCanvas(600, 400)
	stroke('white')
	strokeWeight(4)

	p = {
		pos: createVector(width / 2, height / 2),
		w: 30,
		h: 30
	}
	while (blocks.length < 10) {
		blocks.push({
			pos: createVector(random(width), random(height)),
			w: random(10, 50),
			h: random(10, 50)
		})
		console.log(blocks)
	}
}

function draw() {
	update()
	paint()
}

function update() {
	let xDir = moveInX()
	p.pos.x += xDir
	if (collides())
		p.pos.x -= xDir
	let yDir = moveInY()
	p.pos.y += yDir
	if (collides())
		p.pos.y -= yDir
}

function moveInX() {
	return mouseX > p.pos.x ? SPEED : -SPEED
}

function moveInY() {
	return mouseY > p.pos.y ? SPEED : -SPEED
}

function collides() {
	for (let i = 0; i < blocks.length; i++) {
		let b = blocks[i]
		if (p.pos.x < b.pos.x + b.w &&
			p.pos.x + p.w > b.pos.x &&
			p.pos.y < b.pos.y + b.h &&
			p.h + p.pos.y > b.pos.y) {
			return true
		}
	}
	return false
}

function paint() {
	background(0)
	fill('red')
	rect(p.pos.x, p.pos.y, p.w, p.h)
	fill('lightGrey')
	blocks.forEach(b => rect(b.pos.x, b.pos.y, b.w, b.h))
}