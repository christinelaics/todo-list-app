//render single todo item
//function: delete item
//object: to-do item

import type { Todo } from "../types";

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({todo, onToggle, onDelete}: Props) {
    return (
        <li>
            <span
            style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
            onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>

    );
}