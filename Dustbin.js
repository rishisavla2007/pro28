class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 300;
        this.dustbinHeight = 200;
        this.wallThickness =20;
        this.angle = 0;


        this.image=loadImage("dustbin.png")
        this.boxBottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.wallThickness , {isStatic:true} );
        this.boxLeftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        this.boxRightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        
        //Body.setAngle(this.boxLeftBody,this.angle);
        
       


        
        Body.setAngle(this.boxRightBody,-1*this.angle);
         

         World.add(world, this.boxBottomBody);
         World.add(world, this.boxLeftBody);
         World.add(world, this.boxRightBody);
         
    }

    display(){
 
        var posBottom = this.boxBottomBody.position;
        var posLeft = this.boxLeftBody.position;
        var posRight = this.boxRightBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
       fill(255);
        // stroke('green');
        rotate(this.angle);
        //rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
		translate(posRight.x, posRight.y);
		rectMode(CENTER);
        // stroke('green');
		angleMode(RADIANS);
		fill(255);
        rotate(-1*this.angle);
		//rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();  

		push();
		translate(posBottom.x, posBottom.y+10);
		rectMode(CENTER);
		//stroke('green');
        angleMode(RADIANS);
        imageMode(CENTER)
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
		fill(255);
		//rect(0,0,this.dustbinWidth, this.wallThickness);
		pop();

    }
};