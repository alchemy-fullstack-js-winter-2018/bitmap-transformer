const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUint16LE(offset);
    this.bitsPerPixel = buffer.readUintLE();
    this.fileSize = buffer.readUint16LE(offset);
  }
}

module.exports = BitmapHeader;