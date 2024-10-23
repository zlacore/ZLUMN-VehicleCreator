//TODOs checked for first time on 10/23/2024


// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number; 
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
constructor(vin: string, color: string, make:string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
  super() 
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  this.wheels = wheels;
  this.towingCapacity = towingCapacity
}
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists (Checked)
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity (Checked)
    // TODO: If it is, log that the vehicle is being towed (Checked)
    // TODO: If it is not, log that the vehicle is too heavy to be towed (Checked)
    if (this.make && this.model) {
      if (this.weight <= this.towingCapacity) {
        console.log("This vehicle is being towed.")
      } else {
        console.log("This vehicle is too heavy to be towed!")
      }
      }
    }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails() {
    console.log(`${this.vin}`)
    console.log(`${this.make}`)
    console.log(`${this.model}`)
    console.log(`${this.year}`)
    console.log(`${this.weight}`)
    console.log(`${this.topSpeed}`)
    console.log(`${this.color}`)
    console.log(`${this.towingCapacity}`)
    console.log(`${this.wheels}`)
  }
  // TODO: The method should call the printDetails method of the parent class (Checked)
  // TODO: The method should log the details of the Truck(Checked)
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels (Checked)
}

// Export the Truck class as the default export
export default Truck;
