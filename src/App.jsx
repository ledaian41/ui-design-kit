import React, { useEffect, useState } from "react";
import ColorContextProvider from "@share/context/ColorContextProvider";
import ColorForm from "@app/ColorForm";
import ColorPalette from "@app/ColorPalette";
import PreviewPage from "@design/PreviewPage";
import {
  fetchTextColor,
  randomColorPalette,
  generateColorPalette,
} from "@service/colorService";
import Tooltip from "@design/components/tooltip/Tooltip.jsx";

function App() {
  const [palette, setPalette] = useState({});
  const [textColor, setTextColor] = useState(null);

  useEffect(() => {
    generatePalette("#3486dc");
  }, []);

  const randomColor = async () => {
    const colorPalette = await randomColorPalette();
    const tColor = await fetchTextColor(colorPalette?.primary);
    setTextColor(tColor);
    setPalette(colorPalette);
  };

  const generatePalette = async (color) => {
    const colorPalette = await generateColorPalette(color);
    const tColor = await fetchTextColor(colorPalette?.primary);
    setTextColor(tColor);
    setPalette(colorPalette);
  };

  const colors = Object.values(palette);

  return (
    <div className="p-2 md:p-4 pt-8 grid gap-8">
      <div className="space-y-2">
        <h1 className="font-bold text-center text-3xl">UI Design Kit</h1>
        <h2 className="text-center text-lg text-gray-600">
          Elevate your website and components with stunning color combinations
        </h2>
      </div>

      <ColorForm
        value={palette?.primary}
        onSubmit={generatePalette}
        onRandom={randomColor}
      />

      {colors.length > 0 && (
        <div className="max-w-7xl w-full mx-auto">
          <ColorPalette colors={Object.values(palette)} />
        </div>
      )}

      <ColorContextProvider palette={palette} textColor={textColor}>
        <PreviewPage />
      </ColorContextProvider>
    </div>
  );
}

export default App;
