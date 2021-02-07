class Slingshot {
	constructor(pointA, bodyB) {
		//pointA is the hand
		//BodyB is the rock
		var options = {
			pointA: pointA,
			bodyB: bodyB,
			length: 20,
			stiffness: 0.00005,
		};
		this.pointA = pointA;
		this.bodyB = bodyB;
		this.slingshot = Matter.Constraint.create(options);
		World.add(world, this.slingshot);
	}
	move(body) {
		Matter.Body.setPosition(body, {x: mouseX, y: mouseY});
	}

	release() {
		this.slingshot.pointA = null;
	}

	attach(body) {
		this.slingshot.pointA = {x: 140, y: 525};
	}

	display() {
		if (this.slingshot.pointA != null) {
			strokeWeight(5);
			stroke('#000000');
			line(this.pointA.x, this.pointA.y, this.slingshot.bodyB.position.x, this.slingshot.bodyB.position.y);
		}
	}
}
