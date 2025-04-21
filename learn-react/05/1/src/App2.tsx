import { useState } from "react";

// 제어 컨트롤러 방식
// 폼(요소) 제어
export default function App2() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [fruit, setFruit] = useState<string[]>([]);
  const [radio, setRadio] = useState("");

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFruit((fruit) =>
      fruit.includes(value)
        ? fruit.filter((fru) => fru !== value)
        : [...fruit, value]
    );
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const changeHandler2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const changeHandler3 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(e.target.value);
  };
  const changeHandler4 = () => {
    setChecked((checked) => !checked);
  };
  const resetHandler = () => {
    setText("");
  };
  return (
    <>
      <h1>input:{text}</h1>
      <input type="text" value={text} onChange={changeHandler} maxLength={4} />
      {text.length >= 4 && <p>4글자 이상은 작성 불가</p>}
      <button onClick={resetHandler}>입력 값 리셋</button>
      <textarea value={text} onChange={changeHandler2}></textarea>
      <p>selected : {input}</p>
      <select value={input} onChange={changeHandler3}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
      <input type="checkbox" checked={checked} onChange={changeHandler4} />
      {checked && <h1>선택됨</h1>}
      {/* 체크박스 : 다중 선택 / 라디오 :단일 선택 */}
      <p> 선택된 과일 :{fruit.join(",")}</p>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="apple"
          checked={fruit.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="banana"
          checked={fruit.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="orange"
          checked={fruit.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label>
      <hr />
      <h1>radio : {radio}</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        defaultChecked
        onChange={radioHandler}
      />
      male
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={radioHandler}
      />
      female
    </>
  );
}
