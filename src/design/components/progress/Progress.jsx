import React from "react";
import { useColorContext } from "@share/context/ColorContext";
import cn from "@share/utils/cn";

const Progress = ({ className, value = 50, showLabel, style }) => {
  return (
    <div
      className={cn(
        "flex w-full h-4 bg-gray-200 rounded-full overflow-hidden",
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
    >
      <div
        className="flex flex-col justify-center rounded-full overflow-hidden bg-[var(--progress-color)] text-xs font-semibold text-[var(--text-color)] text-center whitespace-nowrap transition duration-500"
        style={{ width: `${value}%` }}
      >
        {showLabel && `${value}%`}
      </div>
    </div>
  );
};

const ProgressSample = ({ showLabel, progress }) => {
  const { textColor, palette } = useColorContext();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {Object.values(palette).map((color) => (
        <Progress
          key={color}
          showLabel={showLabel}
          value={progress}
          style={{
            "--progress-color": color,
            "--text-color": textColor,
          }}
        />
      ))}
    </div>
  );
};

export default ProgressSample;
