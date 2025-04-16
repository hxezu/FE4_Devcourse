{
  // 1. 인터페이스
  // 1.1 객체 타입을 지정할 때 사용합니다. (나만의 객체 타입)  // (타입별칭 - 나만의 타입)
  // 1.2 선언 병합
  // 1.3 상속

  // *
  // 단순한 객체의 구조를 정의할 때는 인터페이스(타입 별칭)
  // 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender?: string;
  }

  const user1: User = {
    name: "alice",
    age: 20,
  };
}
{
  interface User {
    name?: string;
    age: number;
    // greet: () => void;
    greet?: () => void;
  }

  const user = {
    name: "sucoding",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
}
{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }

  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}
{
  // 상속
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    bark(): void; // 왈왈
  }

  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void;
  }

  const cat: Cat = {
    name: "냥이",
    bark() {
      console.log("야옹");
    },
  };
}

{
  interface A {
    a: string;
  }

  interface B {
    b: number;
  }

  interface C extends A, B {
    c: boolean;
  }

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}

{
  type A = {
    a: string;
  };

  type B = {
    b: number;
  };

  type C = A &
    B & {
      c: boolean;
    };

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}
