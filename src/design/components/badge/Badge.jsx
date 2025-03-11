import React from "react";
import { useColorContext } from "@share/context/ColorContext.js";

const Badge = ({ children, style }) => {
  return (
    <span
      className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[var(--badge-color)] text-[var(--text-color)]"
      style={style}
    >
      {children}
    </span>
  );
};

const BadgeSample = () => {
  const { textColor, palette } = useColorContext();
  return (
    <div className="flex flex-wrap gap-2">
      {Object.values(palette).map((color) => (
        <Badge
          key={color}
          style={{
            "--text-color": textColor,
            "--badge-color": color,
          }}
        >
          Badge
        </Badge>
      ))}
    </div>
  );
};

export default BadgeSample;
