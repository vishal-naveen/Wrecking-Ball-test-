class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        push();
        stroke("white");
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointB.x, point.y, pointA.x, pointA.y);
        pop();
    }
}