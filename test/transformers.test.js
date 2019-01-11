const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const grayscale2 = require('../lib/grayscale2-transformer');

// const expect = require('expect');

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

  // TODO: add a third transformer (you'll need to add the module and require!) and test

  it('grayscale2', () => {
    const transformed = grayscale2({
      r: 35,
      g: 150,
      b: 205
          
    });

    expect(transformed).toEqual({
      r: 120,
      g: 150,
      b: 120
    });
  });
});
