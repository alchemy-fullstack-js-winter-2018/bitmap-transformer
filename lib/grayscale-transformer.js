const avg = (r, g, b) => Math.floor((r + g + b) / 3);

module.exports = ({ r, g, b }) => ({
  r: avg(r, g, b),
  g: avg(r, g, b),
  b: avg(r, g, b),
});
