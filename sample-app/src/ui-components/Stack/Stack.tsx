import styles from "./Stack.module.scss";

type Props = {
  gap?: number;
  direction?: "row" | "column";
  alignItems?: "center" | "start" | "end" | "stretch";
};

export default function Stack({
  children,
  gap,
  direction = "column",
  alignItems = "stretch",
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={styles.stack}
      style={{
        ...(gap && { gap: `${gap}rem` }),
        flexDirection: direction,
        alignItems,
      }}
    >
      {children}
    </div>
  );
}
