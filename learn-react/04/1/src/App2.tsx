// import LoggedIn from "./components/LoggedIn";
// import NotLoggedIn from "./components/NotLoggedIn";
import User from "./components/User";

/* 
반복 렌더링
반복문을 활용해서 반복 렌더링을 수행하는 기법 
map()
*/

export default function App2() {
  const items = ["apple", "banana", "orange"];
  const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Hyeju", age: 23 },
    { id: 3, name: "Hyun", age: 28 },
  ];
  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <ul>
        {items.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </>
  );
}

/*
조건부 렌더링
조건에 따라 컴포넌트를 렌더링하는 기법

1. if
2. 삼항 연산자
3. 논리 && 연산자
    3.1 expr1 && expr2 -> true  
*/

// export default function App2() {
//   const isLogin = true;

//   return (
//     <>
//       {isLogin && <LoggedIn />}
//       {!isLogin && <NotLoggedIn />}

//       {/* 즉시 실행함수*/}
//       {(() => {
//         if (isLogin) {
//           return <h1>Login</h1>;
//         }
//         return <h1>Logout</h1>;
//       })()}
//     </>
//   );
// }

// export default function App2() {
//   const isLogin = false;
//   if (isLogin) {
//     return <LoggedIn />;
//   }
//   //return <NotLoggedIn />;

//   return <>{isLogin ? <LoggedIn /> : <NotLoggedIn />}</>;
// }
