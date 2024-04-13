import styles from "./Stack.module.scss";

interface Props {
  /**
   * Gap between elements, in rem
   */
  gap?: number;
  direction?: "row" | "column";
  alignItems?: "center" | "start" | "end" | "stretch";
  wrap?: boolean;
}

export default function Stack({
  children,
  gap,
  direction = "column",
  alignItems = "stretch",
  wrap = false,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={styles.stack}
      style={{
        ...(gap && { gap: `${gap}rem` }),
        ...(wrap && { flexWrap: "wrap" }),
        flexDirection: direction,
        alignItems,
      }}
    >
      {children}
    </div>
  );
}
