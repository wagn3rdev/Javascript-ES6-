class Human {
  hungry = true;
  awake = true

  eat() {
    this.hungry = false;
  }
}

Human.prototype.sleep = function () {
    this.awake = false
}

const person = new Human();
person.sleep()
console.log(person);
