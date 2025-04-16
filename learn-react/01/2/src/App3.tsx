// function Header() {
//   return (
//     <>
//       <header>Header</header>
//     </>
//   );
// }

// function Main() {
//   return (
//     <>
//       <main>Main</main>
//     </>
//   );
// }

// function Footer() {
//   return (
//     <>
//       <footer>Footer</footer>
//     </>
//   );
// }

// export default function App3() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

/* 
한 파일에 한 컴포넌트를 작성하는게 관례
components 폴더에 컴포넌트들 넣기
src 안에 components 있어야함
*/

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
/* 글로벌 css 인 이유 : 모든 컴포넌트에 적용이 됨 */

export default function App3() {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}
