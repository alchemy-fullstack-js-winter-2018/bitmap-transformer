const avg = (r, b) => Math.floor((r + b) / 2);

module.exports = ({ r, g, b }) => ({
  r: avg(r, b),
  g: g,
  b: avg(r, b)
});
