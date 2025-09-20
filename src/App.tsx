import { useState } from "react";
import type { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { addTodoLogic, toggleTodoLogic, deleteTodoLogic } from "./utils/todos";
import { useLocalStorage } from "./hooks/useLocalStorage";

const STORAGE_KEY = "todo-list:todos-ver1"
export default function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, []);

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