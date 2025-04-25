import { useState } from "react";

export default function State() {
  //count: 상태값
  // setCount : 상태 업데이트 함수
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>0</button>
    </>
  );
}
