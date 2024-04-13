import Box from "../ui-components/Box";
import Button from "../ui-components/Button";
import Stack from "../ui-components/Stack";

type Props = {
  transitionToFactInput: () => void;
};

export default function Welcome({ transitionToFactInput }: Props) {
  return (
    <Stack alignItems="center">
      <Box height={200}>
        <Stack gap={1} alignItems="center">
          <h1>Welcome</h1>
          <h5>
            To the <em>number</em> facts app
          </h5>
        </Stack>
      </Box>
      <Button text="start" handleClick={() => transitionToFactInput()} />
    </Stack>
  );
}
