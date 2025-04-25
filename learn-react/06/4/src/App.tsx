import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>App</button>
      <Count />
    </>
  );
}
