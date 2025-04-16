/* 
컴포넌트
웹 페이지를 구성하는 요소 하나
PascalCase 로 이름 짓기
함수에서 JSX (html 처럼 태그로 구성된 것)를 반환하면 그게 곧 컴포넌트다

export default const App2 = () =>{}: 화살표함수 앞에 'export default' 불가능
화살표 함수 단축키 : rafce
*/

// const App2 = () => {
//   return (
//     <>
//       <h1>App Component</h1>
//     </>
//   );
// };
// export default App2;

export default function App2() {
  // 안에 함수는 화살표 함수로 작성하는게 가독성이 좋음
  //아래 sum 은 컴포넌트가 아님 just 함수
  const sum = (n1: number, n2: number) => {
    return n1 + n2;
  };
  return (
    <>
      <h1>App2 Component: {sum(10, 20)}</h1>
    </>
  );
}
