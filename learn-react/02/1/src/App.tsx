import { css } from "@emotion/css";
/*
Emotion
1.1 CSS 를 런타임에 생성
2.초기 로딩에 대한 오버헤드가 큼
*/

export default function App() {
  return (
    <>
      <h1
        className={css`
          color: red;
        `}
      >
        App Component
      </h1>
    </>
  );
}
