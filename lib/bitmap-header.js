
const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUintLE(PIXEL_OFFSET, 4);
    this.bitsPerPixel = buffer.readUintLE(BITS_PER_PIXEL_OFFSET, byte);
    this.fileSize = buffer.readUintLE(FILE_SIZE_OFFSET, byte);
  }
}

module.exports = BitmapHeader;
