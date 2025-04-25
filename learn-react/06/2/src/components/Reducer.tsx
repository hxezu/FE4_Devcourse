import { useReducer } from "react";
import { CounterReducer } from "../reducer/CounterReducer";

//state -> 상태 값
//action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
//반드시 무엇인가를 return 해야됨 (그러지 않으면 에러를 던질 것)

export default function Reducer() {
  //count : 상태 값
  //dispath: 액션 발생 함수
  const [count, dispatch] = useReducer(CounterReducer, { value: 0 });
  return (
    <>
      <h1>Reducer Count: {count.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
