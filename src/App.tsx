import { useState } from "react";
import type { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // add to-do
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // toggle to-do
  const toggleTodo = (id: string) => {
    setTodos((prev) => 
    prev.map((todo) => 
    todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  // delete compolete
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    </div>
  )
}