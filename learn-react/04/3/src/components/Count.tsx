import { useState } from "react";

/* 
상태 -> 시간이 지남에 따라 변할 수 있는 데이터
useState, useReducer -> 리액트 훅(v16.8)
상태 변수 (리액트 변수)

const [state, setState] = useState<Type>(초기값)
state -> 상태 변수
setState -> 상태 업데이트 함수
*/

export default function Count() {
  console.log("Count component");
  //리-렌더링(re-rendering)
  // 초기값과 변경되는 값의 데이터 타입이 일치할 때 이때는 제네릭을 생략할 수 있다.(생략 선호)
  // 초기값과 변경되는 값의 데이터 타입이 다를 때 이때는 제네릭을 생략할 수 없다.
  const [count, setCount] = useState<number>(0); //[현재 상태 값, 상태 값 업데이트 함수]
  const clickHandler = () => {
    //2. 상태 업데이트 함수 (콜백 함수) -> 현재 상태 값이 필요할때 사용
    setCount((count) => count + 1); //0+1
    setCount((count) => count + 1); //1+1
    setCount((count) => count + 1); //2+1

    //1. 상태 업데이트 함수 (값) => 상태 변수는 '값'으로 업데이트됨
    //setCount(count + 1); //비동기
    console.log(count);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
