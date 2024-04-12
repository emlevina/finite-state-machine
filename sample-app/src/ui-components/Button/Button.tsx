import styles from "./Button.module.scss";

type Props = {
  handleClick: () => void;
  text: string;
  variant?: "contained" | "outlined";
  type?: "button" | "submit" | "reset";
};

export default function Button({
  handleClick,
  text,
  variant = "outlined",
  type = "button",
}: Props) {
  const className =
    variant === "contained" ? styles.buttonContained : styles.buttonOutlined;

  return (
    <button onClick={handleClick} className={className} type={type}>
      {text}
    </button>
  );
}
