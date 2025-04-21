import { useRef, useState } from "react";

/* useRef 훅
- 값이 변경돼도 리렌더링 (함수가 다시 실행) 이 발생하지 않는 변수
- 리렌더링이 발생해도 값이 유지
-> JSX 요소를 참조할 때
-> 값의 유지는 필요하되, 리렌더링이 발생하지 않는 변수가 필요할 때

리액트가 관리하는 함수 : 실시간성이 보장됨
*/
export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const cnt = useRef(0);
  const isSubmitting = useRef(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    cnt.current += 1;
    setCount((count) => count + Math.floor(Math.random() * 10) + 1);
  };
  const printConsole = () => {};

  //로그인 버튼 한번만  눌리게
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;

    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();
      return;
    }

    isSubmitting.current = true;
    console.log("로그인 됨");
    //2초 뒤부터 눌리게
    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };

  return (
    <>
      <h1 className="text-3xl underline">Count : {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={printConsole}>Click 횟수 : {cnt.current}</button>

      <form action="" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={pwRef}
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
