class Circle{
    radius:number
    color:string
    PI:number = 3.14

    constructor(radiusValue:number,colorValue:string){
        this.radius = radiusValue
        this.color = colorValue
    }

    toString(){
        console.log(`Circle [radius = ${this.radius} , color = ${this.color} ]`)
    }

    getArea(radius:number = 1){
        console.log(Math.PI * this.radius * this.radius)
    }

    getCircumference(PI?:number){
        console.log( 2 * this.PI * this.radius)
    }
}

let c = new Circle(1,"red")
c.toString()
c.getArea()
c.getCircumference()