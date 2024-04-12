import styles from "./Input.module.scss";

type Props = {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, value, onChange }: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}
