const generateVariableObject = (palette) =>
  Object.entries(palette).reduce((result, [key, value]) => {
    return { ...result, [`--${key}`]: value };
  }, {});

export default generateVariableObject;
