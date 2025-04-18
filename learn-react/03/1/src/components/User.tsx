// 이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
// onClick

// 3. 인터페이스 방법
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction,
  greet,
}: UserProps) {
  const myFunction1 = () => {
    alert("click");
  };

  const myFunction2 = (message: string) => {
    alert(message);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      {/* 매개변수가 필요없을 때 */}
      <button onClick={myFunction1}>Click1</button>
      {/* 매개변수가 필요할 때 */}
      <button
        onClick={() => {
          myFunction2("Hello");
        }}
      >
        Click2
      </button>
      <button onClick={(e) => myFunction(e, "Hello2")}>Click3</button>
      <button onClick={greet}>Greet</button>
      {/* 
      onClick={(e) => greet(e)} 나 onChange={(e) => changeHandler(e)} 
      처럼 작성하고 e 에 커서 올리면 타입 뜨는데 그거 활용 
      타입 알아냈으면 다시 changeHandler 로 돌려놓기
      */}
      <input type="text" onChange={changeHandler} />
    </>
  );
}

// 2. 구조분해 할당 방법
// export default function User({
//   message,
//   count,
//   isVisible,
//   tags,
//   user,
// }: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {
//   return (
//     <>
//       <h1>{message}</h1>
//       <h1>{count}</h1>
//       <h1>{isVisible.toString()}</h1>
//       <h1>{JSON.stringify(tags, null)}</h1>
//       <h1>{JSON.stringify(user, null, 2)}</h1>
//     </>
//   );
// }

// 1. 구조분해 할당 미적용

// export default function User(props: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.message}</h1>
//       <h1>{props.count}</h1>
//       {/* boolean 그냥 출력 안됨 toString()이용 */}
//       <h1>{props.isVisible.toString()}</h1>
//       <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//       {/* user 와 같은 객체는 바로 출력 안됨  JSON.stringify 꼭 이용*/}
//       <h1>{JSON.stringify(props.user, null, 2)}</h1>
//     </>
//   );
// }
