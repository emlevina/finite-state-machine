import Box from "../ui-components/Box";
import Stack from "../ui-components/Stack";
import ChosenNumber from "./ChosenNumber";

type Props = {
  number: string;
  fact: string;
};

export default function Fact({ number, fact }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      <Box width={250}>
        <h5>{fact}</h5>
      </Box>
      <Box width={100}>
        <ChosenNumber number={number} />
      </Box>
    </Stack>
  );
}
