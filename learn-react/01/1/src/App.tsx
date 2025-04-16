export default function App() {
  //JSX
  // Javascript + XML : 확장 문법
  //JSX 는 HTML 과 굉장히 유사

  // 하나의 루트 요소만 반환해야 한다
  // 모든 태그는 닫아줘야 함
  // 모든 태그 속성은 카멜 케이스로 사용해야한다.
  // 표현식은 중괄호 안에서 사용할 수 있다.
  // 인라인 스타일은 객체로
  // 주석 {/* */}
  const uname = "hyeju";
  return (
    <div>
      <div style={{ color: "red", textDecoration: "underline" }}>
        Hello World {uname}
      </div>
      <div>Hello World {10 + 20}</div>
      <input type="text" maxLength={3} />
      <br />
    </div>
  );
}
