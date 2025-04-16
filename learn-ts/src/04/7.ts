{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언 -> as [단언할 타입]
    console.log((value as number).toFixed(0));
    // <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue("aaaa");
}
{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };

  const user: User = {
    name: "sucoding",
  };

  const car: Car = {
    speed: 100,
  };

  function printValue(obj: User | Car) {
    console.log((obj as Car).speed);
  }

  printValue(user);
}
{
  // 널 아님 보장 연산자 (!)
  function printValue(value: number | null) {
    // if (typeof value === "number")
    console.log(value!.toFixed(2));
  }
  printValue(null);
}

{
  const element = document.querySelector("button") as HTMLButtonElement;
  element.style.color = "red";
}
