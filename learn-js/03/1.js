//ES5
//자바스크립트는 prototype 기반의 언어
//생성자 함수 (원래는 자바스크립는 OOP 가 아니었음 생성자 함수로 흉내내기 시작)
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.teacher = "못생겼다";
Car.prototype.getMaxSpeed = function () {
  return `Max Speed : ${this.speed * 2}`;
};

//객체 구조를 상세하게 보여주는 메소드
console.dir(Car);

// 프로토타입은 함수에만 존재
// 모든 함수는 자신과 1대1로 매칭이되는 공간이 있다.
// 그 공간을 프로토타입이라고 함.

//인스턴스 - 생성자 함수로 찍어낸 객체를 가리키는 용어
const car3 = new Car("bmw", 200);
const car4 = new Car("g90", 200);
const car5 = new Car("g90", 200);
console.log(car3);
console.log(car3.__proto__);
console.log(car3.__proto__.teacher);
//프로토타입 체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
console.log(car3.teacher);
console.log(car3.getMaxSpeed());
//위아래 결과 다름, 위에서 this: car3 -> 400, 아래에서 this: prototype -> NaN
console.log(car3.__proto__.getMaxSpeed());

const car1 = {
  name: "bmw",
  speed: 100,
  maxSpeed() {},
};

const car2 = {
  name: "avante",
  speed: 200,
  maxSpeed() {},
};

console.log(car1);
