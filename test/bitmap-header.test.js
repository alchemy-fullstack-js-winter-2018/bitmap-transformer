const fs = require('fs');
const constants = require('../lib/bitmap-constant');
const BitmapHeader = require('../lib/bitmap-header');

describe('bitmap header', () => {
  let buffer = null;
  beforeEach(done => {
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
      buffer = data;
      done();
      expect(constants.PIXEL_OFFSET).toBeDefined();
      expect(constants.BITS_PER_PIXEL_OFFSET).toBeDefined();
      expect(constants.FILE_SIZE_OFFSET).toBeDefined();
    });
  });
  it('parse header data', () => {
    const header = new BitmapHeader(buffer); 
    expect(header.pixelOffset).toEqual(54);
    expect(header.bitsPerPixel).toEqual(24);
    expect(header.fileSize).toEqual(30054); 
  });
});
