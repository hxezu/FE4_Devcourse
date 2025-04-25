import TodoListItem from "./TodoListItem";
import { ActionDispatch } from "react";

export default function TodoList({
  todos,
  dispatch,
}: {
  todos: Todo[];
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
