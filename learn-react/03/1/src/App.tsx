import User from "./components/User";
export default function App() {
  const myFunction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => {
    alert(message);
  };

  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };

  return (
    <>
      {/* 숫자 전달시 {} 는 숫자, "" 문자열 */}
      <User
        message="hello"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "hyeju" }}
        myFunction={myFunction}
        greet={greet}
      />
    </>
  );
}
