import { useEffect, useState } from "react";
import { Progress } from "antd";
import { useThemeToken } from "@/theme/hooks";
import Color from "color";

export function LineLoading() {
  const { colorTextBase, colorBgContainerDisabled } = useThemeToken();
  const [percent, setPercent] = useState(10);
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {
        setPercent((prevPercent) => prevPercent + 20);
        if (percent === 100) {
          setIncreasing(false);
        }
      } else {
        setPercent(0);
        setIncreasing(true);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [percent, increasing]);

  return (
    <div className="m-auto flex h-full w-96 items-center justify-center">
      <Progress
        percent={percent}
        trailColor={Color(colorBgContainerDisabled).alpha(0.8).toString()}
        strokeColor={colorTextBase}
        showInfo={false}
        size="small"
      />
    </div>
  );
}
