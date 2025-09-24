import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../../components/TodoInput";

//component test
test("allows user to add a todo", () => {
    const handleAdd = vi.fn();
    render(<TodoInput onAdd={handleAdd} />);
    const input = screen.getByPlaceholderText("Add a New To-do");
    fireEvent.change(input, {target: {value: "Test Task"}});
    fireEvent.submit(input);
    expect(handleAdd).toHaveBeenCalledWith("Test Task");
})