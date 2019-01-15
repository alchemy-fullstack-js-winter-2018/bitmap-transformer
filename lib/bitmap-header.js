
const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUIntLE(PIXEL_OFFSET, 4);
    this.bitsPerPixel = buffer.readUIntLE(BITS_PER_PIXEL_OFFSET, 2);
    this.fileSize = buffer.readUIntLE(FILE_SIZE_OFFSET, 4);
  }
}

module.exports = BitmapHeader;
