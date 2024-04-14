import { useResponsive } from "../../hooks/useResponsive";
import { ResponsiveProp } from "../../types/uiProps";
import { getValueForDevice } from "../../utils/getValueForDevice";
import styles from "./Box.module.scss";

type Props = {
  height?: ResponsiveProp<"auto" | number>;
  width?: ResponsiveProp<"auto" | number>;
};

export default function Box({
  children,
  height = "auto",
  width = "auto",
}: React.PropsWithChildren<Props>) {
  const { device } = useResponsive();
  const heightValue = getValueForDevice(device, height);
  const widthValue = getValueForDevice(device, width);

  return (
    <div
      className={styles.box}
      style={{
        height: heightValue === "auto" ? heightValue : `${heightValue}px`,
        width: widthValue === "auto" ? widthValue : `${widthValue}px`,
      }}
    >
      {children}
    </div>
  );
}
