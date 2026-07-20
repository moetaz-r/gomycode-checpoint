interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log(
      `Car engine started -- ${this.make} ${this.model} ${this.year} is now runnig smoothly`
    );
  }
}

const Cars = new Car("Toyota", "Corolla", 2018);

Cars.start();
