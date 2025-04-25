// 사이드 이펙트 (side effect)
// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제될때 (언마운드)

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //마운트
  // [] 의존성 배열 -> 빈배열이면 마운트됐을 때 최초 한번 실행
  useEffect(() => {
    console.log("Count Mounted");

    return () => {
      console.log("Count UnMounted");
    };
  }, []);

  useEffect(() => {
    console.log("count change:" + count);
    console.log("name change:" + name);
  }, [count, name]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setName("hyeju")}>name</button>
    </>
  );
}
