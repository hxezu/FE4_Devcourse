//생성자 함수
//객체를 생성할 때 사용하는 함수

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

const person = new Person("John", 20);
console.log(person);
console.log(person instanceof Person);
console.log(person instanceof Function);
console.log(Person instanceof Function);

console.log(person.name);
console.log(person.age);
console.log(person.greet());

function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const developer = new Developer("James", 19, "Javascript");
console.log(dev);
console.log(developer.greet());
