import engineConfiguration from "./engineConfiguration"

export default class Engine{
    fuelType:string
    rpm:number
    torque:number
    cylinders:number

    constructor(engine:engineConfiguration){
        this.fuelType = engine.fuelType
        this.rpm = engine.rpm
        this.torque = engine.torque
        this.cylinders = engine.cylinders

    }

    // getEngineDetails(){
    //     return `${this.fuelType}, ${this.rpm}, ${this.torque}, ${this.cylinders}`
    // }

}