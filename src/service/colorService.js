const colorApiUrl = import.meta.env.VITE_COLOR_SERVICE_API_HOST;

export const generateColorPalette = async (color, v = 6) => {
  const response = await fetch(
    `${colorApiUrl}/palette/${v}/generate?base=${encodeURIComponent(color)}`
  );
  return await response.json();
};

export const fetchTextColor = async (color) => {
  const response = await fetch(
    `${colorApiUrl}/color/text?background=${encodeURIComponent(color)}`
  );
  return await response.json();
};

export const randomColorPalette = async (v = 6) => {
  const response = await fetch(`${colorApiUrl}/palette/${6}/random`);
  return await response.json();
};
