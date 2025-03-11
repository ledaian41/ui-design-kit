import React from "react";
import cn from "@share/utils/cn.js";

const Tooltip = ({ text, children, className, style }) => {
  return (
    <div className={cn("relative group", className)} style={style}>
      <span
        className="group-hover:visible inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs"
        role="tooltip"
      >
        {text}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
