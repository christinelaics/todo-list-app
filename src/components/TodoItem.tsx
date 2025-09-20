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
        <div className="border-b-2">
            <li className="p-1">
            <div className="flex justify-between list-disc">
                <span
            style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
            onClick={() => onToggle(todo.id)}
            className="decoration-red-500"
            >
                {todo.text}
            </span>
            <button className="hover:font-bold cursor-pointer" onClick={() => onDelete(todo.id)}>Delete</button>

            </div>
            
        </li>

        </div>
        

    );
}