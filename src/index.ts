import carConfiguration from "./carConfiguration"

import Car from "./car"

// let carObj:carConfiguration = {
//     barndValue:"Tesla",
//     modelValue:"model 3",
//     engineValue:"battery",
//     speedValue:160,
//     milageValue:500,
//     doorsValue:"SIX"
// }
// let engineObj = {
//     fuelType:"BATTERY",
//     rpm:700,
//     torque:1000,
//     cylinders:4
// }

// let car = new Car(carObj,engineObj)

// car.getData()
// car.getEngineData()



(<HTMLButtonElement>document.getElementById("button")).addEventListener("click",function(){
    let barndValue = (<HTMLInputElement>document.getElementById("barndValue")).value
    let modelValue = (<HTMLInputElement>document.getElementById("modelValue")).value
    let engineValue = (<HTMLInputElement>document.getElementById("engineValue")).value
    let speedValue = (<HTMLInputElement>document.getElementById("speedValue")).value
    let milageValue = (<HTMLInputElement>document.getElementById("milageValue")).value
    let doorsValue = (<HTMLSelectElement>document.getElementById("doorsValue")).value

    let fuelType = (<HTMLSelectElement>document.getElementById("fuelType")).value
    let rpm = (<HTMLInputElement>document.getElementById("rpm")).value
    let torque = (<HTMLInputElement>document.getElementById("torque")).value
    let cylinders = (<HTMLSelectElement>document.getElementById("cylinders")).value

    console.log(barndValue,modelValue,engineValue,speedValue,milageValue,doorsValue,fuelType,rpm,torque,cylinders)
})