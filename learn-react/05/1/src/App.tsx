import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import CountButton from "./components/CountButton";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<null | string>(null);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const changeName = () => {
    setName("홍길동");
  };
  return (
    <>
      <h1 className="text-3xl underline">Count : {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={() => setCount(0)}>리셋</button>
      <h1 className="text-3xl underline">Count : {name}</h1>
      <button onClick={changeName}>이름 변경</button>

      <CountDisplay count={count} />
      <CountButton increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
