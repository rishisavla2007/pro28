class lancher{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness:0.004,
            length: 10
        }
        this.pointB = PointB;
        this.lanch = Constraint.create(options);
        World.add(world, this.lanch);
    }

    fly(){
        this.lanch.bodyA = null;
    }

    display(){
        push();
        if(this.lanch.bodyA){
            var pointA = this.lanch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop();
    }
    
}