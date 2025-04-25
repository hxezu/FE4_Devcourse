import { useState } from "react";
import Count from "./components/Count";
import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow((isShow) => !isShow)}>Toggle</button>
      <Timer />
      <AutoSave />
    </>
  );
}
