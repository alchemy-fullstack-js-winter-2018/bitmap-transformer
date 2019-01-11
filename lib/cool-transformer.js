module.exports = ({ r, g, b }) => ({
  r,
  g,
  b: Math.min(b + 50, 255)
});
