const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const coolFilter = require('../lib/coolfilter-transformer');

describe('transformers', () => {
  it('invert', () => {
    const transformed = invert({
      r: 34,
      g: 100,
      b: 205
    });
    expect(transformed).toStrictEqual({
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
    expect(transformed).toStrictEqual({
      r: 113,
      g: 113,
      b: 113
    });
  });

  it('cool filter', () => {
    const transformed = coolFilter({
      r: 34,
      g: 100,
      b: 205
    });
    expect(transformed).toStrictEqual({
      r: 34,
      g: 119.5,
      b: 205
    });
  });
});
