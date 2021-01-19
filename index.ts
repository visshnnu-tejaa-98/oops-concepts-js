
type doorType =  "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX" | 1 | 2 | 3 | 4 | 5 | 6;

class Car{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:doorType

    constructor(
        CarData:{
            barndValue:string,
            modelValue:string,
            engineValue:string,
            speedValue:number,
            milageValue:number,
            doorsValue:doorType
        }
    ){
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
    getData(car:{carBrand:string,carModel:string,engine:string,topSpeed:number,milage:number,noOfDoors:doorType}){
        console.log(car.carBrand, car.carModel, car.engine, car.topSpeed, car.milage,car.noOfDoors )
    }
}

let obj:{
    barndValue:string,
    modelValue:string,
    engineValue:string,
    speedValue:number,
    milageValue:number,
    doorsValue:doorType
} = {barndValue:"Tesla",modelValue:"model 3",engineValue:"battery",speedValue:160,milageValue:500,doorsValue:"SIX"}

let obj1:{
    carBrand:string,
    carModel:string,
    engine:string,
    topSpeed:number,
    milage:number,
    noOfDoors:doorType
} = {carBrand:"Tesla",carModel:"model 3",engine:"battery",topSpeed:160,milage:500,noOfDoors:"SIX"}

let car = new Car(obj)
car.carStart()
car.carAccelerate()
car.carLightsON()
car.carMove()
car.carHorn()
car.carOFF()
car.getData(obj1)