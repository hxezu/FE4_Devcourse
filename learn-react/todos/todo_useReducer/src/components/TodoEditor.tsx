import React, { ActionDispatch, useState } from "react";

export default function TodoEditor({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  const [text, setText] = useState("");
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };
  return (
    <div className="flex p-4">
      <input
        type="text"
        value={text}
        onChange={textChangeHandler}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
      />
      <button
        onClick={addTodoHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}
