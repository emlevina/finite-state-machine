import styles from "./Stack.module.scss";

type Props = {
  gap?: number;
  direction?: "row" | "column";
};

export default function Stack({
  children,
  gap,
  direction = "column",
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={styles.stack}
      style={{
        ...(gap && { gap: `${gap}rem` }),
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
}
