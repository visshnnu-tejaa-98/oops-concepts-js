class Car{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:string

    constructor(barndValue:string,modelValue:string,engineValue:string,speedValue:number,milageValue:number,doorsValue:string){
        this.carBrand = barndValue
        this.carModel = modelValue
        this.engine = engineValue
        this.topSpeed = speedValue
        this.milage = milageValue
        this.noOfDoors = doorsValue
    }

    carStart(){
        console.log("Car Started")
    }
    carAccelerate(){
        console.log("Car Accelerated")
    }
    carLightsON(){
        console.log("Car lights ON")
    }
    carMove(){
        console.log("Car Moved")
    }
    carHorn(){
        console.log("Car Horned")
    }
    carOFF(){
        console.log("Car Stopped")
    }
    getData(){
        console.log(this.carBrand,this.carModel,this.engine,this.topSpeed,this.milage,this.noOfDoors)
    }
}

let c = new Car("Tesla","model 3","battery",160,500,"SEVEN")
c.carStart()
c.carAccelerate()
c.carLightsON()
c.carMove()
c.carHorn()
c.carOFF()
c.getData()