import { useState } from "react";

export default function ColorBox() {
  const [colorInput, setColorInput] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: colorInput }}
          ></div>
          <input
            type="text"
            value={colorInput}
            onChange={inputHandler}
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
}
