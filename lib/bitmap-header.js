const { Buffer } = require('buffer');

const {
  PIXEL_OFFSET,
  FILE_SIZE_OFFSET,
  BITS_PER_PIXEL_OFFSET
} = require('./bitmap-constants.js');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUInt32LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt32LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
