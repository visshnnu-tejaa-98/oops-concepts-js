
type doorType =  "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX" | 1 | 2 | 3 | 4 | 5 | 6;

class Car{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:doorType

    constructor(barndValue:string,modelValue:string,engineValue:string,speedValue:number,milageValue:number,doorsValue:doorType){
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
    getData(carBrand:string,carModel:string,engine:string,topSpeed:number,milage:number,noOfDoors:doorType){
        console.log(carBrand, carModel, engine, topSpeed, milage,noOfDoors )
    }
}

let car = new Car("Tesla","model 3","battery",160,500,"SIX")
car.carStart()
car.carAccelerate()
car.carLightsON()
car.carMove()
car.carHorn()
car.carOFF()
car.getData("Tesla","model 3","battery",160,500,"SIX")