import User from "./components/User";

export default function App() {
  const user = {
    id: 1,
    name: "hyeju",
    age: 20,
  };
  return (
    <>
      {/* <User user={user} /> */}
      <User {...user} clickHandler={() => alert("click")} />
    </>
  );
}
