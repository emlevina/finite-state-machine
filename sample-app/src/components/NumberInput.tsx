import { useState } from "react";
import Button from "../ui-components/Button";
import Input from "../ui-components/Input";
import Stack from "../ui-components/Stack";

type Props = {
  setUserNumber: (number: string) => void;
};

export default function NumberInput({ setUserNumber }: Props) {
  const [input, setInput] = useState("");
  const [helperText, setHelperText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <Button
          text="search"
          handleClick={() => setUserNumber(input)}
          type="submit"
        />
      </Stack>
    </form>
  );
}
