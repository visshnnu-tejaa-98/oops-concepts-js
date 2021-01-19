import carConfiguration from "./carConfiguration"

export default class Car{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:string

    constructor(CarData:carConfiguration){
        this.carBrand = CarData.barndValue
        this.carModel = CarData.modelValue
        this.engine = CarData.engineValue
        this.topSpeed = CarData.speedValue
        this.milage = CarData.milageValue
        this.noOfDoors = CarData.doorsValue
    }

    getData(car:carConfiguration){
        console.log(car.barndValue, car.modelValue, car.engineValue, car.speedValue, car.milageValue,car.doorsValue )
    }
}