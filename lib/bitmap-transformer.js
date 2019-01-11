const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pr = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });
    // NOTE: use slice to grab the pixels from buffer
    // NOTE: pixels start at pixelOffset
    const pixels = this.buffer.slice(0, this.header.pixelOffset);  // use this.header.pixelOffset

    // NOTE: listen to color events
    pr.on('color', color => {
      // NOTE: transform the color using fn(color)
      const transformedColor = fn(color);
      // NOTE: write the color back using pixels.writeUInt8(transformedColor.someColor, offset)
      pixels.writeUInt8(transformedColor.b, color.offset); 
      pixels.writeUInt8(transformedColor.g, color.offset + 1);
      pixels.writeUInt8(transformedColor.r, color.offset + 2);      
    });
    pr.on('end', callback);    
    pr.read(pixels);
  }
}
module.exports = BitmapTransform;

