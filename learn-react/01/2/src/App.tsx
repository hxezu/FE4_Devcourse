export default function App() {
  return (
    //HMR 기능 : 수정한 내용을 새로고침하지 않아도 업데이트시켜줌
    <>
      <h1 style={{ color: "red" }}>10+20 = {10 + 20} </h1>
      <h1 className="title">App Component</h1>
      <label htmlFor="uname">userid</label>
      <input id="uname" type="text" readOnly />
    </>
  );
}

//React 문법 (어려움, 위에 jsx 를 사용할것)
// import React from "react";
// export default function App() {
//   return React.createElement(
//     "div",
//     { className: "title" },
//     React.createElement("h1", null, "App component")
//   );
// }
