import React from "react";
import cn from "@share/utils/cn";

const ComponentTree = ({ datasource, value, onSelect }) => {
  return (
    <ul className="flex flex-col gap-2 text-sm">
      {datasource.map(([key, component]) => {
        return (
          <li
            key={key}
            onClick={() => !component?.disabled && onSelect(key)}
            className={cn(
              "p-2 cursor-pointer flex items-center rounded-lg transition hover:bg-gray-100",
              {
                "bg-gray-100 font-semibold": value === key,
                "text-gray-400 cursor-not-allowed": component?.disabled,
              }
            )}
          >
            {component.label}
            {component.new && (
              <span className="ms-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[10px] leading-4 uppercase align-middle rounded-full px-2">
                NEW
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ComponentTree;
