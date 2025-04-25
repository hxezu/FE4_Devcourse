import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
