/* 2. 스프레드 연산자 사용 <User {...user}/> */
export default function User({
  id,
  name,
  age,
  clickHandler,
}: {
  id: number;
  name: string;
  age: number;
  clickHandler?: () => void;
}) {
  return (
    <>
      <pre>{id}</pre>
      <pre>{name}</pre>
      <pre>{age}</pre>
      {clickHandler && <button onClick={clickHandler}>Click</button>}
    </>
  );
}

/* 원하는 속성만 받고 싶을때 */
// export default function User({ id }: { id: number }) {
//   return (
//     <>
//       <h1>{id}</h1>
//     </>
//   );
// }

/* 1. 객체 전달 */
// export default function User({
//   user,
// }: {
//   user: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }) {
//   return (
//     <>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </>
//   );
// }
