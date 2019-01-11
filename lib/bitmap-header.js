const {
  PIXEL_OFFSET,
  FILE_SIZE_OFFSET,
  BITS_PER_PIXEL_OFFSET
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    
    this.pixelOffset = buffer.readUInt16LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt8(FILE_SIZE_OFFSET);
    this.fileSize = buffer.readUInt(BITS_PER_PIXEL_OFFSET);
  }
}

module.exports = BitmapHeader;
