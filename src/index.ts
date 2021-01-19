import carConfiguration from "./carConfiguration"

import Car from "./car"

let obj:carConfiguration = {
    barndValue:"Tesla",
    modelValue:"model 3",
    engineValue:"battery",
    speedValue:160,
    milageValue:500,
    doorsValue:"SIX"
}

let car = new Car(obj)

car.getData(obj)