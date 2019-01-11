module.exports = ({ r, g, b }) => ({
  r: avg(r, g, b),
  g: avg(r, g, b),
  b: avg(r, g, b),
});
