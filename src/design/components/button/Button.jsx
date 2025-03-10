import React from "react";
import { useColorContext } from "@share/context/ColorContext";
import cn from "@share/utils/cn";
import styles from "./Button.module.css";

const Button = ({ className, children, style }) => (
  <button
    className={cn(
      "px-6 py-2 cursor-pointer transition font-semibold shadow",
      styles.button,
      className
    )}
    style={style}
  >
    {children}
  </button>
);

const ButtonSample = ({ shape }) => {
  const { textColor, palette } = useColorContext();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-4 items-center">
        {Object.values(palette).map((background) => (
          <Button
            key={background}
            className={shape}
            style={{
              "--text-color": textColor,
              "--btn-background": background,
            }}
          >
            Button
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-4 items-center">
        {Object.values(palette).map((background) => (
          <Button
            key={background}
            className={cn(shape, "btn-outline")}
            style={{ "--btn-color": background, "--text-color": textColor }}
          >
            Button
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSample;
