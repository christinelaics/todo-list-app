import type { Todo } from "../types";

export function addTodoLogic(todos: Todo[], text: string) {
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false
    };
    return [...todos, newTodo]
}

export function toggleTodoLogic(todos: Todo[], id: string) {
    return todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

export function deleteTodoLogic(todos: Todo[], id: string) {
    return todos.filter((todo) => todo.id !== id);
}