const lumo = ({ r, g, b }) => ({
  r: Math.round(r  * 0.21),
  g: Math.round(g * 0.72),
  b: Math.round(b * 0.07)
});

module.exports = lumo;

// const lumo = (r, g, b) => ({
//   r: r * 0.21,
//   g: g * 0.72,
//   b: b * 0.07
// });

// module.exports = lumo.split(' ');
