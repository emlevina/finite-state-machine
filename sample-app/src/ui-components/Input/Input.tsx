import Stack from "../Stack";
import styles from "./Input.module.scss";

type Props = {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
};

export default function Input({ type, value, onChange, helperText }: Props) {
  return (
    <Stack
      direction={{
        mobile: "column-reverse",
        tablet: "column",
      }}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        width="100%"
      />
      <p className={styles.helperText}>{helperText || " "}</p>
    </Stack>
  );
}
