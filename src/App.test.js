import { render, screen, fireEvent } from "@testing-library/react";
import { isCompositeComponent } from "react-dom/test-utils";
import App from "./App";

test("renders wordle header", () => {
  render(<App />);
  const linkElement = screen.getByText(/WORDLE/i);
  expect(linkElement).toBeInTheDocument();
});
