const assert = require('assert');
const { readFileSync } = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transform');
const fs = require('fs');
const constants = require('../lib/bitmap-constant');


describe('bitmap file transformer', () => {
    
  let buffer = null;
  beforeEach(done => {
    // TODO: file read sync './test/test-bitmap.bmp' into buffer variable
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
      buffer = data;
      done();
      expect(constants.PIXEL_OFFSET).toBeDefined();
      expect(constants.BITS_PER_PIXEL_OFFSET).toBeDefined();
      expect(constants.FILE_SIZE_OFFSET).toBeDefined();
    });
    // "pinning" test, or "snapshot" test
    it('test whole transform', done => {
      const bitmap = new BitmapTransformer(buffer);

      // Call .transform(), which will modify the buffer.
      // With this api, you pass in a transformation function (we are testing with "invert")
      bitmap.transform(invert, err => {
        if(err) return done(err);

        // After above step, the buffer has been modified
        // and is accessible via bitmap.buffer.
    
        // Read the output file we saved earlier as the "standard" expected output file.
        const expected = readFileSync('./test/inverted-expected.bmp');
        expect(bitmap.buffer, expected).toEqual();
        done();

        // If you don't have a standard file yet, or need to update or are adding new test,
        // you can write it out by commenting above code block, and uncomment code below 
        // that writes the file and then visually inspect the file for correctness.
        // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
      });
    });
  });
});
