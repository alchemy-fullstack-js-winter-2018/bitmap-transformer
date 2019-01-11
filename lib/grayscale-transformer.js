module.exports = rgb => {
  const rgbVal = [rgb.r, rgb.g, rgb.b];
  const avg = rgbVal.reduce((a, b) => a + b) / rgbVal.length;
  return {
    r: avg,
    g: avg,
    b: avg
  };
};
