import Box from "../ui-components/Box";
import Button from "../ui-components/Button";
import Stack from "../ui-components/Stack";

type Props = {
  transitionToWelcomeInput: () => void;
};

export default function Goodbye({ transitionToWelcomeInput }: Props) {
  return (
    <Stack alignItems="center">
      <Box height={200}>
        <Stack gap={1} alignItems="center">
          <h1>Goodbye!</h1>
          <h5>
            Ooof, what a <em>transition</em>
          </h5>
        </Stack>
      </Box>
      <Button text="indeed!" handleClick={() => transitionToWelcomeInput()} />
    </Stack>
  );
}
