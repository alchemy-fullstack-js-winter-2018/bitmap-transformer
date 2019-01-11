const {
  PIXEL_OFFSET,
  BITS_PER_PIXEL_OFFSET,
  FILE_SIZE_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUInt16LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt16LE(FILE_SIZE_OFFSET);
  }

}

module.exports = BitmapHeader;
