import { useState } from "react";
import Button from "../ui-components/Button";
import Input from "../ui-components/Input";
import Stack from "../ui-components/Stack";

type Props = {
  setUserNumber: (number: string) => void;
};

export default function FactInput({ setUserNumber }: Props) {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserNumber(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
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
