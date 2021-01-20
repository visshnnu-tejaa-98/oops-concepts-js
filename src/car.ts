import carConfiguration from "./carConfiguration"
import Engine from "./engine"
import engineConfiguration from "./engineConfiguration"

export default class Car extends Engine{
    carBrand:string
    carModel:string 
    engine:string 
    topSpeed:number 
    milage:number 
    noOfDoors:string

    constructor(CarData:carConfiguration, engineData:engineConfiguration){
        super(engineData)
        this.carBrand = CarData.barndValue
        this.carModel = CarData.modelValue
        this.engine = CarData.engineValue
        this.topSpeed = CarData.speedValue
        this.milage = CarData.milageValue
        this.noOfDoors = CarData.doorsValue
    }

    getData(){
        console.log(this.carBrand,this.carModel,this.engine,this.topSpeed,this.milage,this.noOfDoors )
    }

    getEngineData(){
        console.log(this.fuelType,this.rpm,this.torque,this.cylinders)
    }
}