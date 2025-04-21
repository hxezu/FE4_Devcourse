import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoId, setTodoId] = useState(1);

  const addHandler = (text: string) => {
    const newTodo: Todo = {
      id: todoId,
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
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
      <TodoEditor onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onDelete={deleteHandler}
      />
    </div>
  );
}
