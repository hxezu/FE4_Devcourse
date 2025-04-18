import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div className="wrapper bg-black py-10 w-[100vw] h-[100vh] flex justify-center items-center gap-2">
      <Login />
      <SignUp />
    </div>
  );
}
