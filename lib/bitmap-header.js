class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUint32(offset);
    this.bitsPerPixel = buffer.readUint();
    this.fileSize = buffer.readUint();
  }
}

module.exports = BitmapHeader;