var Car = /** @class */ (function () {
    function Car() {
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
var c = new Car();
c.carStart();
c.carAccelerate();
c.carLightsON();
c.carMove();
c.carHorn();
c.carOFF();
c.getData("Tesla", "model 3", "battery", 160, 500, "SEVEN");
