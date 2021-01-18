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
    Car.prototype.getData = function () {
        console.log(this.carBrand, this.carModel, this.engine, this.topSpeed, this.milage, this.noOfDoors);
    };
    return Car;
}());
var c = new Car("Tesla", "model 3", "battery", 160, 500, "SEVEN");
c.carStart();
c.carAccelerate();
c.carLightsON();
c.carMove();
c.carHorn();
c.carOFF();
c.getData();
