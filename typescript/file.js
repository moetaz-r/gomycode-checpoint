var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started -- ".concat(this.make, " ").concat(this.model, " ").concat(this.year, " is now runnig smoothly"));
    };
    return Car;
}());
var Cars = new Car("Toyota", "Corolla", 2018);
Cars.start();
