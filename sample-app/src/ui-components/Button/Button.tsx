import styles from "./Button.module.scss";

type Props = {
  handleClick?: () => void;
  text: string;
  variant?: "contained" | "outlined";
  type?: "button" | "submit" | "reset";
  buttonState?: "active" | "loading" | "disabled";
};

export default function Button({
  handleClick,
  text,
  variant = "outlined",
  type = "button",
  buttonState = "active",
}: Props) {
  const className = [
    variant === "contained" ? styles.buttonContained : styles.buttonOutlined,
    (buttonState === "disabled" || buttonState === "loading") &&
      styles.disabled,
  ].join(" ");

  const buttonProps = {
    className,
    type,
    disabled: buttonState === "disabled" || buttonState === "loading",
    ...(type !== "submit" && { onClick: handleClick }),
  };

  return (
    <button {...buttonProps}>
      {(buttonState === "active" || buttonState === "disabled") && (
        <span>{text}</span>
      )}
      {buttonState === "loading" && <div className={styles.loading} />}
    </button>
  );
}
