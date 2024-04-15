import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useMachine } from "../../../hooks/useMachine";
import { ThemeEvents } from "../../../machines/themeMachine";
import ThemeSwitch from "../ThemeSwitch";

jest.mock("../../../hooks/useMachine");

describe("ThemeSwitch", () => {
  it("renders icons for both themes", () => {
    (useMachine as jest.Mock).mockReturnValue({
      currentState: "light",
      send: jest.fn(),
      currentContext: { counter: 0 },
    });

    const { getByText } = render(<ThemeSwitch />);

    expect(getByText("☀️")).toBeInTheDocument();
    expect(getByText("🌙")).toBeInTheDocument();
  });

  it("calls send with TOGGLE when clicked", () => {
    const send = jest.fn();
    (useMachine as jest.Mock).mockReturnValue({
      currentState: "light",
      send,
      currentContext: { counter: 0 },
    });

    const { getByText } = render(<ThemeSwitch />);
    fireEvent.click(getByText("☀️"));

    expect(send).toHaveBeenCalledWith(ThemeEvents.TOGGLE);
  });

  it("renders the switching themes message when counter is 3 or more", () => {
    (useMachine as jest.Mock).mockReturnValue({
      currentState: "light",
      send: jest.fn(),
      currentContext: { counter: 3 },
    });

    const { getByText } = render(<ThemeSwitch />);

    expect(getByText("WOW! You do love switching themes!")).toBeInTheDocument();
  });
});
