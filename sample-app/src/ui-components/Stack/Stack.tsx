import styles from "./Stack.module.scss";

interface Props {
  /**
   * Gap between elements, in rem
   */
  gap?: number;
  direction?: "row" | "column";
  alignItems?: "center" | "start" | "end" | "stretch";
}

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
