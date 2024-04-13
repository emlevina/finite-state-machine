import styles from "./Box.module.scss";

type Props = {
  height?: "auto" | number;
  width?: "auto" | number;
};

export default function Box({
  children,
  height = "auto",
  width = "auto",
}: React.PropsWithChildren<Props>) {
  return (
    <div className={styles.box} style={{ height, maxWidth: width }}>
      {children}
    </div>
  );
}
