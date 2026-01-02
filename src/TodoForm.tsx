import { useState } from "react";

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo.trim()) return;

    onAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <label
          htmlFor="todo"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Add New Todo
        </label>

        <div className="flex gap-3">
          <input
            id="todo"
            type="text"
            placeholder="What do you need to do?"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="
          flex-1
          rounded-md
          border
          border-gray-300
          px-4
          py-2
          text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
          />

          <button
            type="submit"
            disabled={!todo.trim()}
            className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-medium
          px-5
          py-2
          rounded-md
          transition
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
