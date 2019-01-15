const assert = require('assert');
const { readFileSync } = require('fs');
const BitmapTransform = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');


describe('bitmap file transformer', () => {
    
  let buffer = null;
  beforeEach(() => {
    buffer = readFileSync('./test/test-bitmap.bmp');
  });
  it('test whole transform', done => {
    const bitmap = new BitmapTransform(buffer);
    bitmap.transform(invert, err => {
      if(err) return done(err);
    
      const expected = readFileSync('./test/inverted-expected.bmp');
      assert(bitmap.buffer, expected);
      done();
    });
  });
});
