import { useResponsive } from "../../hooks/useResponsive";
import {
  AlignItems,
  Direction,
  Gap,
  ResponsiveProp,
} from "../../types/uiProps";
import { getValueForDevice } from "../../utils/getValueForDevice";
import styles from "./Stack.module.scss";

interface Props {
  /**
   * Gap between elements, in rem
   */
  gap?: ResponsiveProp<Gap>;
  direction?: ResponsiveProp<Direction>;
  alignItems?: ResponsiveProp<AlignItems>;
  width?: ResponsiveProp<number>;
  wrap?: boolean;
}

export default function Stack({
  children,
  gap,
  direction,
  alignItems,
  wrap = false,
  width,
}: React.PropsWithChildren<Props>) {
  const { device } = useResponsive();
  const gapValue = getValueForDevice<Gap>(device, gap);
  const directionValue = getValueForDevice<Direction>(device, direction);
  const alignItemsValue = getValueForDevice<AlignItems>(device, alignItems);
  const widthValue = getValueForDevice<number>(device, width);

  return (
    <div
      className={styles.stack}
      style={{
        ...(gapValue && { gap: `${gapValue}rem` }),
        ...(wrap && { flexWrap: "wrap" }),
        flexDirection: directionValue ?? "column",
        alignItems: alignItemsValue ?? "stretch",
        width: widthValue ? `${widthValue}px` : "auto",
      }}
    >
      {children}
    </div>
  );
}
