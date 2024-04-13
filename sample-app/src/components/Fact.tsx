import Stack from "../ui-components/Stack";

type Props = {
  number: string;
  fact: string;
};

export default function Fact({ number, fact }: Props) {
  return (
    <Stack direction="row">
      <p>{fact}</p>
      <p>{number}</p>
    </Stack>
  );
}
