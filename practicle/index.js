var Circle = /** @class */ (function () {
    function Circle(radiusValue, colorValue) {
        this.PI = 3.14;
        this.radius = radiusValue;
        this.color = colorValue;
    }
    Circle.prototype.toString = function () {
        console.log("Circle [radius = " + this.radius + " , color = " + this.color + " ]");
    };
    Circle.prototype.getArea = function (radius) {
        if (radius === void 0) { radius = 1; }
        console.log(Math.PI * this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function (PI) {
        console.log(2 * this.PI * this.radius);
    };
    return Circle;
}());
var c = new Circle(1, "red");
c.toString();
c.getArea();
c.getCircumference();
