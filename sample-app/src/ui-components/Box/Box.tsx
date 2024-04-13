import styles from "./Box.module.scss";

type Props = {
  height?: "auto" | number;
};

export default function Box({
  children,
  height = "auto",
}: React.PropsWithChildren<Props>) {
  return (
    <div className={styles.box} style={{ height }}>
      {children}
    </div>
  );
}
