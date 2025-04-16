const a = new String("Hello");
console.log(a.toLowerCase());
console.log(a.__proto__.toLowerCase());

// String, Boolean, Number 이 세가지만 아래처럼 사용 가능
// 레퍼객체
const b = "Hello"; //기본 자료형
console.dir(b);
console.log(b.toUpperCase());
console.log(new String(b).toUpperCase());
console.dir(b.toUpperCase());
