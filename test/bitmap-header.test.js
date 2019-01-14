const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const fs = require('fs');
const Buffer = require('buffer').Buffer;

describe.only('bitmap header', () => {

  let buffer = null;
  beforeEach(done => {
    // DONE: file read './test/test-bitmap.bmp' and put the promise return into buffer variable
    fs.readFile('./test/test-bitmap.bmp', { encoding: 'utf8' }, (err, data) => {
      buffer = Buffer.from(data);
      done();
    });
  });

  it('has correct specs', () => {
    expect(constants.PIXEL_OFFSET).toBeDefined();
    expect(constants.BITS_PER_PIXEL_OFFSET).toBeDefined();
    expect(constants.FILE_SIZE_OFFSET).toBeDefined();
  });

  it('parses header data', () => {
    const header = new BitmapHeader(buffer);
    expect(header.pixelOffset).toEqual(54);
    expect(header.bitsPerPixel).toEqual(24);
    expect(header.fileSize).toEqual(30054);
  });
});
