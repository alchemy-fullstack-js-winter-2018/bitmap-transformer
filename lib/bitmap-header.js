//const constants = require('./bitmap-constants.js');

class BitmapHeader {
  constructor(buffer) {   
    this.pixelOffset = buffer.readUnt16LE(10);
    this.bitsPerPixel = buffer.readUint();
    this.fileSize = buffer.readUint();
  }
}
const bitmapHeader = new BitmapHeader;


module.exports = BitmapHeader;