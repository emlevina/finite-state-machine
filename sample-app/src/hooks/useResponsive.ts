import { useEffect, useState } from "react";

export enum Device {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export const useResponsive = () => {
  const [device, setDevice] = useState(Device.Desktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDevice(
        width < 768
          ? Device.Mobile
          : width < 1024
          ? Device.Tablet
          : Device.Desktop
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { device };
};
