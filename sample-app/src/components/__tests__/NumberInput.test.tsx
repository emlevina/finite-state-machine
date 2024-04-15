import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumberInput from "../NumberInput";

describe("NumberInput", () => {
  const handleAddNumberMock = jest.fn();

  it("renders correctly", () => {
    const { getByRole } = render(
      <NumberInput handleAddNumber={handleAddNumberMock} currentState="" />
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("updates its value when a number is entered", () => {
    const { getByRole } = render(
      <NumberInput handleAddNumber={handleAddNumberMock} currentState="" />
    );
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "5" } });

    expect(input.value).toBe("5");
  });

  it("does not allow non-numeric input", () => {
    const { getByRole, getByText } = render(
      <NumberInput handleAddNumber={handleAddNumberMock} currentState="" />
    );
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "abc" } });

    expect(input.value).toBe("");
    expect(getByText("Please enter a valid number")).toBeInTheDocument();
  });

  it("calls handleAddNumber when form is submitted", () => {
    const { getByRole } = render(
      <NumberInput
        handleAddNumber={handleAddNumberMock}
        currentState="active"
      />
    );
    const input = getByRole("textbox");
    const form = getByRole("form");

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.submit(form);

    expect(handleAddNumberMock).toHaveBeenCalledWith("5");
  });

  it("disables the button when currentState is 'loading'", () => {
    const { getByRole } = render(
      <NumberInput
        handleAddNumber={handleAddNumberMock}
        currentState="loading"
      />
    );
    const button = getByRole("button");

    expect(button).toBeDisabled();
  });

  it("disables the button when currentState is 'disabled'", () => {
    const { getByRole } = render(
      <NumberInput
        handleAddNumber={handleAddNumberMock}
        currentState="disabled"
      />
    );
    const button = getByRole("button");

    expect(button).toBeDisabled();
  });
});
