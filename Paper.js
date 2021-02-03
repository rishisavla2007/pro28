class Paper {
    constructor(x,y,radius) {
        var options = {
           isStatic: false,
           restitution:1,
           density:2,
           friction:2,
        }
        this.body=Matter.Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }
  
    display(){
      var angle = this.body.angle
      push();
      // rectMode(CENTER);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,50,50);
      pop();
       //strokeWeight(0);
        //fill('blue')
        
    }
};  