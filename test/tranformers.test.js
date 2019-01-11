const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const warmer = require('../lib/warmer-transformer');

describe('transformers', () => {

  it('invert', () => {
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

  it('warmer', () => {
    const transformed = warmer({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 234,
      g: 0,
      b: 105
    });
  });
});
