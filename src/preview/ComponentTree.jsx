import React from "react";
import cn from "@share/utils/cn.js";

const ComponentTree = ({ datasource, value, onSelect }) => {
  return (
    <ul className="flex flex-col gap-2 text-sm">
      {datasource.map(([key, component]) => {
        return (
          <li
            key={key}
            onClick={() => onSelect(key)}
            className={cn(
              "p-2 cursor-pointer rounded-lg transition hover:bg-gray-100",
              {
                "bg-gray-100 font-semibold": value === key,
              }
            )}
          >
            {component.label}
          </li>
        );
      })}
    </ul>
  );
};

export default ComponentTree;
