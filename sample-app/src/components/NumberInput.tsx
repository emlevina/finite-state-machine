import { useState } from "react";
import { FetchMachineStates } from "../machines/fetchMachine";
import Button from "../ui-components/Button";
import Input from "../ui-components/Input";
import Stack from "../ui-components/Stack";

type Props = {
  setUserNumber: (number: string) => void;
  currentState: string;
};

export default function NumberInput({ setUserNumber, currentState }: Props) {
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
    setUserNumber(input);
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      return setHelperText("Please enter a valid number");
    }
    setHelperText("");
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
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
