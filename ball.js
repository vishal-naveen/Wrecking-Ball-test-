class Ball{
    constructor(x,y,width,height,angle){
        var options = {
            density: 1,
            frictionAir: 0.005
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        var pos = this.body.position
        translate(pos.x,pos.y)
        rotate(angle);
        fill("red")
        ellipse(0,0,this.width,this.height);
        pop();
    }
}