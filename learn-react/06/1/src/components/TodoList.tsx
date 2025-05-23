import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
