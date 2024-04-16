import Stack from "../ui-components/Stack";
import ChosenNumber from "./ChosenNumber";

type Props = {
  number: string;
  fact: string;
  isError?: boolean;
};

export default function Fact({ number, fact, isError = false }: Props) {
  return (
    <Stack direction="column" gap={2}>
      <h5>{fact}</h5>
      <ChosenNumber
        number={number}
        color={isError ? "var(--text-color-error)" : "var(--accent-color)"}
      />
    </Stack>
  );
}
