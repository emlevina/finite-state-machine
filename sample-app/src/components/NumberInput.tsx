import { useState } from "react";
import { FetchMachineStates } from "../machines/fetchMachine";
import Button from "../ui-components/Button";
import Input from "../ui-components/Input";
import Stack from "../ui-components/Stack";

type Props = {
  handleAddNumber: (number: string) => void;
  currentState: string;
};

export default function NumberInput({ handleAddNumber, currentState }: Props) {
  const [input, setInput] = useState("");
  const [helperText, setHelperText] = useState("");
  const buttonState =
    currentState === FetchMachineStates.loading
      ? "loading"
      : !input
      ? "disabled"
      : "active";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (buttonState === "disabled") {
      return;
    }
    handleAddNumber(input);
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      return setHelperText("Please enter a valid number");
    }
    if (e.target.value.length > 7) {
      return setHelperText("Input should be less than 8 digits");
    }
    setHelperText("");
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} role="form">
      <Stack
        direction={{ mobile: "column", tablet: "row" }}
        alignItems={{
          mobile: "stretch",
          tablet: "start",
        }}
      >
        <Input
          value={input}
          onChange={handleChange}
          type="text"
          helperText={helperText}
        />
        <Button text="search" type="submit" buttonState={buttonState} />
      </Stack>
    </form>
  );
}
