var Car = /** @class */ (function () {
    function Car() {
        this.carBrand = "Tesla";
        this.carModel = "model 3";
        this.engine = "battery";
        this.topSpeed = 160;
        this.milage = 500;
        this.noOfDoors = "SEVEN";
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
var c = new Car();
c.carStart();
c.carAccelerate();
c.carLightsON();
c.carMove();
c.carHorn();
c.carOFF();
c.getData();
