const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUint16LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUint2LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUint16LE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;