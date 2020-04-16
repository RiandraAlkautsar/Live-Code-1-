function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}


Car.prototype.startEngines = function(){
    console.log(`Mobil dinyalakan...`);
    this.enginesActive = true;
};

Car.prototype.info = function(){
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + this.manufacture ? "Active" : "Inactive");
}

var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();