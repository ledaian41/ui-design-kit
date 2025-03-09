import React from "react";
import generateVariableObject from "../utils/generateVariableObject";
import styles from "./PreviewFrame.module.css";

const PreviewFrame = ({ palette }) => {
  return (
    <div
      className={styles.previewFrame}
      style={generateVariableObject(palette)}
    >
      <h1>Welcome to ColorCraft</h1>
      <p className="subtitle">Generate beautiful palettes easily!</p>
      <button className="button">Get Started</button>
      <span className="badge">New</span>
      <div className="footer">© 2025 ColorCraft</div>
    </div>
  );
};

export default PreviewFrame;
