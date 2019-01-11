// const r1 = (r, g, b) => (r + 100) (g, b);

module.exports = ({ r, g, b }) => ({
  r: r + 100,
  g: 255 - g,
  b: 255 - b
});
