var Car = /** @class */ (function () {
    function Car(barndValue, modelValue, engineValue, speedValue, milageValue, doorsValue) {
        this.carBrand = barndValue;
        this.carModel = modelValue;
        this.engine = engineValue;
        this.topSpeed = speedValue;
        this.milage = milageValue;
        this.noOfDoors = doorsValue;
    }
    Car.prototype.carStart = function () {
        console.log("Car Started");
    };
    Car.prototype.carAccelerate = function () {
        console.log("Car Accelerated");
    };
    Car.prototype.carLightsON = function () {
        console.log("Car lights ON");
    };
    Car.prototype.carMove = function () {
        console.log("Car Moved");
    };
    Car.prototype.carHorn = function () {
        console.log("Car Horned");
    };
    Car.prototype.carOFF = function () {
        console.log("Car Stopped");
    };
    Car.prototype.getData = function (carBrand, carModel, engine, topSpeed, milage, noOfDoors) {
        console.log(carBrand, carModel, engine, topSpeed, milage, noOfDoors);
    };
    return Car;
}());
var car = new Car("Tesla", "model 3", "battery", 160, 500, "SIX");
car.carStart();
car.carAccelerate();
car.carLightsON();
car.carMove();
car.carHorn();
car.carOFF();
car.getData("Tesla", "model 3", "battery", 160, 500, "SIX");
