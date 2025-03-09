import React, { useMemo } from "react";
import ColorContext from "@share/context/ColorContext";
import generateVariableObject from "@share/utils/generateVariableObject";

const ColorContextProvider = ({ children, palette, textColor }) => {
  const store = useMemo(() => ({ palette, textColor }), [palette, textColor]);

  return (
    <ColorContext.Provider value={store}>
      <div style={generateVariableObject(palette)}>{children}</div>
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
