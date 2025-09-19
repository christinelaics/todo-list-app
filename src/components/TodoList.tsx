//render entire list and add item
// needs to import TodoItem, delete function, toggle funciton

import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({todos, onToggle, onDelete}: Props) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}