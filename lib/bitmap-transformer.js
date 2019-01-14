const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pr = new PixelReader({ bitsPerPixel : this.header.bitsPerPixel });
    const pixels = this.buffer.slice(this.header.pixelOffset);
    
    pr.on('color', color => {
      const transformedColor = fn(color);
      pixels.writeUInt8(transformedColor.b, color.offset);
      pixels.writeUInt8(transformedColor.g, color.offset + 1);
      pixels.writeUInt8(transformedColor.r, color.offset + 2);
    });

    pr.on('end', callback);
    pr.read(pixels);
  }
}

module.exports = BitmapTransform;
