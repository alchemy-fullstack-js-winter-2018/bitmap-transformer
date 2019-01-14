module.exports = rgb => {
  return {
    r: rgb.r + 200,
    g: rgb.g - 100, 
    b: rgb.b - 100
  };
};
