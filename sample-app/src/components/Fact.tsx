import Box from "../ui-components/Box";
import Stack from "../ui-components/Stack";
import ChosenNumber from "./ChosenNumber";

type Props = {
  number: string;
  fact: string;
};

export default function Fact({ number, fact }: Props) {
  return (
    <Stack direction="column" gap={2}>
      <h5>{fact}</h5>
      <ChosenNumber number={number} />
    </Stack>
  );
}
