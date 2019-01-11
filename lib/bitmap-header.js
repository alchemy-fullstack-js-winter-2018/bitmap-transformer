const constants = require('./bitmap-constants.js');

// const {
//   PIXEL_OFFSET,  //LATER
// }

class BitmapHeader {
  constructor(buffer) {   
    this.pixelOffset = buffer.readUInt16LE(constants.PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUIntLE(constants.BITS_PER_PIXEL_OFFSET, 2);
    this.fileSize = buffer.readUIntLE(constants.FILE_SIZE_OFFSET, 4);
  }
}
// const bitmapHeader = new BitmapHeader;


module.exports = BitmapHeader;
