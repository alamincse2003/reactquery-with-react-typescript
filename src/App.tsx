import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => {
      const updated = [{ id: Date.now(), title }, ...prev];
      console.log(updated);
      return updated;
    });
  };
  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
