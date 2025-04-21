import { useState } from "react";

export default function Light() {
  const [light, setLight] = useState(false);

  const lightHandler = () => {
    setLight((bulb) => !bulb);
  };
  return (
    <>
      <img
        src={light ? "/src/images/b_on.png" : "/src/images/b_off.png"}
        alt="전구이미지"
        onClick={lightHandler}
      />
    </>
  );
}
