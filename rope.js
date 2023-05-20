class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body2,
			pointA:{x:offsetX,y:0},
			bodyB:body1
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		line(pointA.x+this.offsetX,pointA.y,pointB.x,pointB.y)
		
	}

}