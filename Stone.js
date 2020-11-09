class stone{
    constructor(x,y){
      var options = {
      isStatic : false,
      restitution : 1,
      friction : 1
        }
        this.body = Bodies.rectangle(x,y,50,options);
        this.radius = 50;
        this.image =("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }

    display(){
        var ang = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}