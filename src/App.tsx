import { useState } from "react";
import type { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { addTodoLogic, toggleTodoLogic, deleteTodoLogic } from "./utils/todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // add to-do
  const addTodo = (text: string) => {
    setTodos((prev) => addTodoLogic(prev, text));
  };

  // toggle to-do
  const toggleTodo = (id: string) => {
    setTodos((prev) => toggleTodoLogic(prev, id))
  };

  // delete compolete
  const deleteTodo = (id: string) => {
    setTodos((prev) => deleteTodoLogic(prev, id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    </div>
  )
}