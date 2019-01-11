const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUInt16LE(PIXEL_OFFSET, 4);
    this.bitsPerPixel = buffer.readUInt8(BITS_PER_PIXEL_OFFSET, 2);
    this.fileSize = buffer.readUInt16LE(FILE_SIZE_OFFSET, 4);
  }
}

module.exports = BitmapHeader;