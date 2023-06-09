
class Animal {
  constructor(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
