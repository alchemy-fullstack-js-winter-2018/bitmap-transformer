const { Buffer } = require('buffer');

const {
  PIXEL_OFFSET,
  FILE_SIZE_OFFSET,
  BITS_PER_PIXEL_OFFSET
} = require('./bitmap-constants.js');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUint32LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUint32LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUit32LE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
