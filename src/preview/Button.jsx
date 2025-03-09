import React from "react";
import cn from "../utils/cn";
import styles from "./Button.module.css";
import { useColorContext } from "../context/ColorContext.js";

const Button = ({ className, children, style }) => (
  <button className={cn(styles.button, className)} style={style}>
    {children}
  </button>
);

const ButtonSample = ({ shape }) => {
  const { textColor } = useColorContext();
  return (
    <div className="flex items-center gap-2">
      <Button className={cn(shape)} style={{ color: textColor }}>
        Primary Button
      </Button>
      <Button className={cn(shape, "secondary")} style={{ color: textColor }}>
        Secondary Button
      </Button>
    </div>
  );
};

export default ButtonSample;
