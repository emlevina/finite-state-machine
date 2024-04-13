import { ResponsiveProp } from "../types/uiProps";

export function getValueForDevice<T extends string | number>(
  device: "mobile" | "tablet" | "desktop",
  value?: ResponsiveProp<T>
): T | undefined {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  if (typeof value === "object" && value) {
    switch (device) {
      case "desktop":
        return value.desktop ?? value.tablet ?? value.mobile;
      case "tablet":
        return value.tablet ?? value.mobile;
      case "mobile":
        return value.mobile;
    }
  }

  return undefined;
}
