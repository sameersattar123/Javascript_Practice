class UserCreator {
  constructor(firstName, lastName, userAge) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = userAge;
  }

  sing() {
    return "I'm singing";
  }

  age() {
    return `${this.userAge}`;
  }

  name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new UserCreator("Sameer", "Sattar", 20);
const user3 = new UserCreator("Sameer3", "Sattar3", 230);
const user2 = new UserCreator("Sameer2", "Sattar2", 220);

console.log(user1);
console.log(user1.name());
console.log(user2.sing());
console.log(user3.age());
console.log(Object.getPrototypeOf(user1));

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return "I'm eating";
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run(){
    return `I'm running at a speed of ${this.speed} km/h`;
  }

  eat(){
    return "I'm a dog and I'm eating";
  }
}

const animal1 = new Animal("wasi", 33);
const animal2 = new Dog("waseem", 333 , 44.4);
console.log(animal1);
console.log(animal2);
console.log(animal1.eat()); // I'm eating
console.log(animal2.eat()); // I'm a dog and I'm eating
console.log(animal2.run()); // I'm running at a speed of 44.4 km/h
