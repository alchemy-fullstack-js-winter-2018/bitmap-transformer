const lumo = ({ r, g, b }) => ({
  r: Math.round(r  * 0.21),
  g: Math.round(g * 0.72),
  b: Math.round(b * 0.07)
});

module.exports = lumo;

