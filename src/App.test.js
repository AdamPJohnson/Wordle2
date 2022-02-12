import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders wordle header", () => {
  render(<App />);
  const linkElement = screen.getByText(/WORDLE/i);
  expect(linkElement).toBeInTheDocument();
});

test("warns user about invalid word length", async () => {
  render(<App />);
  const input0 = screen.getByTestId("input0");
  const submitButton = screen.getByTestId("submitButton");
  fireEvent.keyDown(input0, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.click(submitButton);
  const errorMessage = await screen.findByText("Guesses must be 5 letters");
  expect(errorMessage).toBeInTheDocument();
});

test("warns user about invalid word of length 5", async () => {
  render(<App />);
  const input0 = screen.getByTestId("input0");
  const input1 = screen.getByTestId("input1");
  const input2 = screen.getByTestId("input2");
  const input3 = screen.getByTestId("input3");
  const input4 = screen.getByTestId("input4");
  const submitButton = screen.getByTestId("submitButton");

  fireEvent.keyDown(input0, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.keyDown(input1, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.keyDown(input2, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.keyDown(input3, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.keyDown(input4, { key: "a", charCode: 65, keyCode: 65 });
  fireEvent.click(submitButton);
  const errorMessage = await screen.findByText("Must be a real word!");
  expect(errorMessage).toBeInTheDocument();
});

test("reveals word when reveal button is clicked", async () => {
  render(<App />);
  const revealButton = screen.getByTestId("revealButton");
  fireEvent.click(revealButton);
  const errorMessage = await screen.findByText(/Your word was/i);
  expect(errorMessage).toBeInTheDocument();
});
test("fails after 6 incorrect guesses", async () => {
  render(<App />);
  const input0 = screen.getByTestId("input0");
  const input1 = screen.getByTestId("input1");
  const input2 = screen.getByTestId("input2");
  const input3 = screen.getByTestId("input3");
  const input4 = screen.getByTestId("input4");
  const submitButton = screen.getByTestId("submitButton");

  for (let i = 0; i < 6; i++) {
    fireEvent.keyDown(input0, { key: "b", charCode: 66, keyCode: 66 });
    fireEvent.keyDown(input1, { key: "e", charCode: 69, keyCode: 69 });
    fireEvent.keyDown(input2, { key: "a", charCode: 65, keyCode: 65 });
    fireEvent.keyDown(input3, { key: "r", charCode: 82, keyCode: 82 });
    fireEvent.keyDown(input4, { key: "s", charCode: 83, keyCode: 83 });
    fireEvent.click(submitButton);
  }
  const errorMessage = await screen.findByText(/Game over/i);

  expect(errorMessage).toBeInTheDocument();
});
