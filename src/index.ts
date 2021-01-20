import carConfiguration from "./carConfiguration"

import Car from "./car"

let carObj:carConfiguration = {
    barndValue:"Tesla",
    modelValue:"model 3",
    engineValue:"battery",
    speedValue:160,
    milageValue:500,
    doorsValue:"SIX"
}
let engineObj = {
    fuelType:"BATTERY",
    rpm:700,
    torque:1000,
    cylinders:4
}

let car = new Car(carObj,engineObj)

car.getData()
car.getEngineData()