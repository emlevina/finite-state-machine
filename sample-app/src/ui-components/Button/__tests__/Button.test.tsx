import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    const { getByRole } = render(<Button text="Test Button" />);
    const button = getByRole("button");

    expect(button).toHaveClass("buttonOutlined");
    expect(button).toHaveTextContent("Test Button");
    expect(button).not.toBeDisabled();
  });

  it('renders correctly with variant="contained"', () => {
    const { getByRole } = render(
      <Button text="Test Button" variant="contained" />
    );
    const button = getByRole("button");

    expect(button).toHaveClass("buttonContained");
  });

  it('renders correctly with buttonState="disabled"', () => {
    const { getByRole } = render(
      <Button text="Test Button" buttonState="disabled" />
    );
    const button = getByRole("button");

    expect(button).toHaveClass("disabled");
    expect(button).toBeDisabled();
  });

  it('renders correctly with buttonState="loading"', () => {
    const { getByRole } = render(
      <Button text="Test Button" buttonState="loading" />
    );
    const button = getByRole("button");
    const loadingDiv = document.querySelector(".loading");

    expect(button).toHaveClass("disabled");
    expect(loadingDiv).toBeInTheDocument();
  });

  it("calls handleClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button text="Test Button" handleClick={handleClick} />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call handleClick when buttonState="disabled"', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button
        text="Test Button"
        handleClick={handleClick}
        buttonState="disabled"
      />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
