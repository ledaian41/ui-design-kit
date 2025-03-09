import React, { useState } from "react";
import ColorForm from "./components/ColorForm";
import ColorPalette from "./components/ColorPalette";
import ColorContextProvider from "./context/ColorContextProvider";
import PreviewPage from "./preview/PreviewPage.jsx";
import "./App.css";

const COLOR_SERVICE_API_HOST = "https://go-color-service.up.railway.app";
const DF_HOST = "https://an-df.vercel.app/web-dynamic-form.js";

function App() {
  const [palette, setPalette] = useState({});
  const [textColor, setTextColor] = useState(null);

  const callApiRandomPalette = async () => {
    const response = await fetch(
      `https://go-color-service.up.railway.app/palette/6/random`
    );
    const data = await response.json();
    await fetchTextColor(data?.primary);
    setPalette(data);
  };

  const callApiGeneratePalette = async (color) => {
    const response = await fetch(
      `https://go-color-service.up.railway.app/palette/6/generate?base=${encodeURIComponent(color)}`
    );
    const data = await response.json();
    setPalette(data);
  };

  const fetchTextColor = async (color) => {
    const response = await fetch(
      `https://go-color-service.up.railway.app/color/text?background=${encodeURIComponent(color)}`
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
      <h1 className="font-bold text-center text-3xl">Welcome to ColorCraft</h1>

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
