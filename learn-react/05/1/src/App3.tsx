import { useState } from "react";

// 불변성 지켜줘야함
// 한번 정의된 데이터가 변하지 않는 특징
export default function App3() {
  const [values, setValues] = useState<string[]>([]);
  const clickHandler = () => {
    setValues((values) => [...values, "apple"]);
  };
  //인덱스 시그니처 사용하면 새로운 속성도 추가 가능
  const [user, setUser] = useState<{
    [key: string]: string | number | boolean;
  }>({
    name: "hyeju",
    age: 20,
  });

  const clickHandler2 = () => {
    setUser((user) => ({ ...user, age: 50 }));
  };
  return (
    <>
      <h1>{values.join(",")}</h1>
      <button onClick={clickHandler}>추가</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={clickHandler2}>변경</button>
    </>
  );
}
