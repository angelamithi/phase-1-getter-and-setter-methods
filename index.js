// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
    return this.radius+this.radius;
    }
    get circumference(){
    return Math.PI*(this.radius+this.radius)
    }
    get area(){
    return Math.PI*(this.radius*this.radius)

    }

    set diameter(value){
     this.radius=value/2;
    }
    set circumference(value){
    this.radius=value/(2*Math.PI);
    }
    set area(value){
    this.radius=Math.sqrt(value/Math.PI);

    }
}

const circle= new Circle(18);

 