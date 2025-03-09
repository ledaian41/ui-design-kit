import React from "react";
import _uniq from "lodash-es/uniq";

const ColorPalette = ({ colors = [] }) => {
  return (
    <div className="w-full grid md:flex md:justify-center gap-2 md:gap-4">
      {_uniq(colors).map((c, index) => (
        <div
          key={`${c}-${index}`}
          className="w-full py-2 md:aspect-[3/4] md:max-w-[240px] rounded shadow flex justify-center items-center"
          style={{ background: c }}
        >
          <span className="cursor-pointer py-1 px-2 rounded shadow-lg bg-black/30 text-white text-sm font-semibold md:text-md">
            {c}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
