// handles input and add button
// function to call when add item
// need useState and function call?

import { useState } from "react";

// 
interface Props {
    onAdd: (text: string) => void;
}

export default function TodoInput({onAdd}: Props) {

    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevent page from refreshing after form submits
        if(text.trim()) {   // .trim() remove whitespace from start and end
            onAdd(text);
            setText("");    // reset input
        }
    };

    return(
        <form onSubmit={handleSubmit} className="pb-6 gap-3">
            <input
            className="border-1 rounded-md pl-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a New To-do"
            />
            <button className="hover:bg-black hover:text-white px-1 ml-1 border-1 rounded-md"type="submit">Add</button>
        </form>
    );

}