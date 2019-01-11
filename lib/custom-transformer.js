module.exports = ({ r, g, b }) => ({
    r: r + b,
    g: r + g,
    b: b - r
});