const buffer = require('buffer').Buffer;
const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constant');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUIntLE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUIntLE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUIntLE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
