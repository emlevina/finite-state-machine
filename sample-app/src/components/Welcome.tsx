import Button from "../ui-components/Button";
import Stack from "../ui-components/Stack";

type Props = {
  transitionToFactInput: () => void;
};

export default function Welcome({ transitionToFactInput }: Props) {
  return (
    <Stack alignItems="center">
      <h1>Welcome to the Number Facts App!</h1>
      <p>Enter a number to get a fact about it.</p>
      <Button text="Get Started" handleClick={() => transitionToFactInput()} />
    </Stack>
  );
}
