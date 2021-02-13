class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, width,height,options);
        World.add(world, this.body);        
    }
    display() {
        rectMode(CENTER);
        fill("brown");
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}