class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static desc = 'person is very smart'

  static Age(age) {
    return age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fullName) {
    const [firstName , lastName] = fullName.split(' ')
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person('sameer' , 'sattar' ,22);
console.log(person1.fullName)
person1.firstName = 'wasey'
person1.lastName = 'khan'
console.log(person1.fullName)
person1.fullName = 'aliza khan'
console.log(person1.fullName)
const info = Person.Age(22)
console.log(info)
