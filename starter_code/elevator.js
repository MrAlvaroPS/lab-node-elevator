let Person = require('./person.js');

let person = new Person();


class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }

  _passengersEnter() {}

  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      console.log(this.floor)
    }
  }

  floorDown() {
    if (this.floor < this.MAXFLOOR && this.floor > 0) {
      this.floor--;
    }
  }

  call(person) {

  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
