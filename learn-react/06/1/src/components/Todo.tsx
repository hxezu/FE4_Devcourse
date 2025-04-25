import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoId, setTodoId] = useState(1);

  const addHandler = (text: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: todoId,
        text,
        completed: false,
      },
    ]);
    setTodoId((prev) => prev + 1);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodo={addHandler} />
      <TodoList
        todos={todos}
        toggleTodo={toggleHandler}
        deleteTodo={deleteHandler}
      />
    </div>
  );
}
