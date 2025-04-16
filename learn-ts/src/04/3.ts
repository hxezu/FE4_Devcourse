{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  // 객체라서 가능한 방법
  // 옵셔널 프로퍼티 -> ?
  // readonly 프로퍼티 -> reaonly
  // 인덱스 시그니처
  const obj: {
    [key: string]: string | number;
  } = {
    name: "sucoding",
    age: 20,
  };

  const name = obj.name;

  const obj2: {
    name: string;
    age: number;
  } = {
    name: "sucoding",
    age: 20,
  };

  const name2 = obj2.name;
  name2.toUpperCase();
}
