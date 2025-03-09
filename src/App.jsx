import React, { useState } from "react";
import ColorForm from "./components/ColorForm";
import ColorPalette from "./components/ColorPalette";
import ColorContextProvider from "./context/ColorContextProvider";
import PreviewPage from "./preview/PreviewPage.jsx";

const colorApiUrl = import.meta.env.VITE_COLOR_SERVICE_API_HOST;

function App() {
  const [palette, setPalette] = useState({});
  const [textColor, setTextColor] = useState(null);

  const callApiRandomPalette = async () => {
    const response = await fetch(`${colorApiUrl}/palette/6/random`);
    const data = await response.json();
    await fetchTextColor(data?.primary);
    setPalette(data);
  };

  const callApiGeneratePalette = async (color) => {
    const response = await fetch(
      `${colorApiUrl}/palette/6/generate?base=${encodeURIComponent(color)}`
    );
    const data = await response.json();
    setPalette(data);
  };

  const fetchTextColor = async (color) => {
    const response = await fetch(
      `${colorApiUrl}/color/text?background=${encodeURIComponent(color)}`
    );
    const data = await response.json();
    setTextColor(data);
  };

  const generateColorPalette = (color) => {
    callApiGeneratePalette(color);
    fetchTextColor(color);
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
        onSubmit={generateColorPalette}
        onRandom={callApiRandomPalette}
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
