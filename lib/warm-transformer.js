
module.exports = ({ r, g, b }) => ({
  r: Math.max(r + 50, 255),
  g: 255 - g,
  b: 255 - b
});
