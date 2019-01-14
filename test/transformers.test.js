const warmer = require('../lib/warm-transformer');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');

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

  it('makes color warmer', () => {
    const transformed = warmer({
      r: 10,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 255,
      g: 155,
      b: 50
    });
  });

});
