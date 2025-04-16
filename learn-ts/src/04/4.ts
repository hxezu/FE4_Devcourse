{
  //헝가리언
  type TUser = {};
  interface IUser {}

  const user: IUser = {};
  const user2: TUser = {};

  type User = {};
  type Car = {};
  type Color = {};
}

{
  //구별된 유니온 타입
  interface User {
    name: string;
  }
  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "hyeju" };
  const car: Car = { name: "bmw", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(obj.speed);
    else console.log(`${obj.name}`);
  }

  printValue(user);
  printValue(car);
}

{
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
  };

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda" };

  //구조적 타이핑
  //type interface 모두 가능
  // 구조만 비교
  //car = vehicle;
  vehicle = car;

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }

  printValue(vehicle);
}
