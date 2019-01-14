module.exports = rgb => {
  return {
    r: Math.abs(rgb.r - 255),
    g: Math.abs(rgb.g - 255),
    b: Math.abs(rgb.b - 255)
  };
};

