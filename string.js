class String{
    constructor(a,d){
        var propiters = {
            bodyA:a, bodyB:d, length: 22,stiffness:0.5
        }
        this.b=Constraint.create(propiters)
        World.add(world,this.b)
    }
    display(){
        line (this.b.bodyA.position.x,this.b.bodyA.position.y,this.b.bodyB.position.x,this.b.bodyB.position.y)
    }
}