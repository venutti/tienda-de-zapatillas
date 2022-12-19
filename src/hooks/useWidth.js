import { useEffect, useState } from "react";
export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onChangeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onChangeWidth);

    return () => window.removeEventListener("resize", onChangeWidth);
  });

  return width;
}
