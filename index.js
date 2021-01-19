var Car = /** @class */ (function () {
    function Car(CarData) {
        this.carBrand = CarData.barndValue;
        this.carModel = CarData.modelValue;
        this.engine = CarData.engineValue;
        this.topSpeed = CarData.speedValue;
        this.milage = CarData.milageValue;
        this.noOfDoors = CarData.doorsValue;
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
    Car.prototype.getData = function (car) {
        console.log(car.carBrand, car.carModel, car.engine, car.topSpeed, car.milage, car.noOfDoors);
    };
    return Car;
}());
var obj = { barndValue: "Tesla", modelValue: "model 3", engineValue: "battery", speedValue: 160, milageValue: 500, doorsValue: "SIX" };
var obj1 = { carBrand: "Tesla", carModel: "model 3", engine: "battery", topSpeed: 160, milage: 500, noOfDoors: "SIX" };
var car = new Car(obj);
car.carStart();
car.carAccelerate();
car.carLightsON();
car.carMove();
car.carHorn();
car.carOFF();
car.getData(obj1);
