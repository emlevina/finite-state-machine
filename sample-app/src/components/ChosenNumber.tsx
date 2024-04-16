type Props = {
  number: string;
  color: string
};

export default function ChosenNumber({ number, color }: Props) {
  return (
    <h2
      style={{
        color,
        fontSize: "4rem",
        fontWeight: 900,
        textAlign: "center",
      }}
    >
      {number}
    </h2>
  );
}
