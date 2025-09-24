/// <reference types="vitest" />

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("user can add, toggle, and delete a todo", () => {
  // 1. Render the full app
  render(<App />);

  // 2. Add a todo
  const input = screen.getByPlaceholderText("Add a New To-do");
  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.submit(input);

  // Check that todo appears in the list
  expect(screen.getByText("Buy milk")).toBeInTheDocument();

  // 3. Toggle the todo
  const lineAcross = screen.getByText("Buy milk");
  fireEvent.click(lineAcross);
  expect(lineAcross).toHaveStyle("text-decoration: line-through");

  // 4. Delete the todo
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
});