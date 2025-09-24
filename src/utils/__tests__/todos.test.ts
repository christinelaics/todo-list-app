/// <reference types="vitest/globals" />
import type { Todo } from "../../types";
import { addTodoLogic, toggleTodoLogic, deleteTodoLogic } from "../todos";

//test addTodoLogic
test("addTodoLogic adds new todo", () => {
    const todos: Todo[] = [];
    const result = addTodoLogic(todos, "Test Task");
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Test Task");
}); 

//test toggleTodoLogic
test("toggleTodoLogic toggles completed state", () => {
    const todos = [{id:"1", text:"Test Task", completed: false}];
    const result = toggleTodoLogic(todos, "1");
    expect(result[0].completed).toBe(true);
});

//test deleteTodoLogic
test("deleteTodoLogic deleted a todo", () => {
    const todos = [{id: "1", text: "Test Task", completed: false}];
    const result = deleteTodoLogic(todos, "1");
    expect(result).toHaveLength(0);
})