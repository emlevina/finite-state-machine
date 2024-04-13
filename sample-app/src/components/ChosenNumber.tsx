type Props = {
  number: string;
};

export default function ChosenNumber({ number }: Props) {
  return (
    <h2
      style={{
        color: "var(--accent-color)",
        fontSize: "4rem",
        fontWeight: 900,
      }}
    >
      {number}
    </h2>
  );
}
