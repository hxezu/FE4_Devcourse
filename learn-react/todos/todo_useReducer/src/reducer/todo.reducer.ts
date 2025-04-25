export const todoReducer = (todos: Todo[], action: TodoReducerAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        { id: Math.random(), text: action.payload, done: false },
      ];

    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
  return todos;
};
