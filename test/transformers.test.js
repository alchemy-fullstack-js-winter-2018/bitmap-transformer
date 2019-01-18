
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const luminosity = require('../lib/luminosity-transformer');

describe('transformers', () => {

  it('invert', () => {
    // HINT: invert subtracts each value from 255
    const transformed = invert({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 221,
      g: 155,
      b: 50
    });
  });

  it('grayscale', () => {
    // HINT: grayscale assigns the average of all three colors
    // as the new value for each color
    const transformed = grayscale({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 113,
      g: 113,
      b: 113
    });
  });

  it('luminosity', () => {
    const transformed = luminosity({
      r: 34,
      g: 100,
      b: 205
    });
    // *** luminosity grayscale formula: 0.21 R + 0.72 G + 0.07 B
    expect(transformed).toEqual({
      r: 7,
      g: 72,
      b: 14
    });
  });
});
