class Car {
  constructor(color, doors ) {
    this.color = color
    this.doors = doors
  }

  drive(){
    console.log('Car is drivinng');
  }

  brake() {
    console.log('Brakes activated');
  }
}

class BMW extends Car{
  constructor(cylinders, price) {
    super('red', 6);
    this.cylinders = cylinders
    this.price = price
  }

  accelerate() {
    console.log('This car is going up to 130 km/hr');
  }
}

const bmw = new BMW(6, 60000);

console.log(bmw );