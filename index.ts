
type doorType =  "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX" | 1 | 2 | 3 | 4 | 5 | 6;

interface carConfiguration{
    barndValue:string;
    modelValue:string;
    engineValue:string;
    speedValue:number;
    milageValue:number;
    doorsValue:doorType;
}

class Car{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:doorType

    constructor(CarData:carConfiguration){
        this.carBrand = CarData.barndValue
        this.carModel = CarData.modelValue
        this.engine = CarData.engineValue
        this.topSpeed = CarData.speedValue
        this.milage = CarData.milageValue
        this.noOfDoors = CarData.doorsValue
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
    getData(car:carConfiguration){
        console.log(car.barndValue, car.modelValue, car.engineValue, car.speedValue, car.milageValue,car.doorsValue )
    }
}

let obj:carConfiguration = {barndValue:"Tesla",modelValue:"model 3",engineValue:"battery",speedValue:160,milageValue:500,doorsValue:"SIX"}


let car = new Car(obj)
car.carStart()
car.carAccelerate()
car.carLightsON()
car.carMove()
car.carHorn()
car.carOFF()
car.getData(obj)