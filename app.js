

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('Beep');
    }
    toString() {
        console.log(`this ${this.make} is a ${this.model} from ${this.year}.`)
    }
};

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;


    }
};

class Motorcycle extends Vehicle {

    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;


    }
    revEngine() {
        console.log("VROOM!!!!")
    }
};


class Garage {
    constructor(Vehicles, Capacity) {
        this.Vehicles = [];
        this.Capacity = 0;

    }
    add(newVehicle) {
        if (this.Vehicles !== String) {
            console.log('Only vehicles are allowed in here!')
        }
        else if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        else {
            this.Vehicles.push(newVehicle);
            return "Vehicle added"
        }

    }
}
