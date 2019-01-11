const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }
    
  transform(fn, callback) {
    const pr = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });
    // this is a guide to what needs to happen, not a recipe
    // you have access to the data you need:
    // this.buffer
    // this.header.pixelOffset
    // this.header.bitsPerPixel
    // this.header.fileSize (not technically needed)

    //use slice to slice off header just to get the pixels
    const pixels = this.buffer.slice(this.header.pixelOffset); //this.header.pixelOffset, 2nd param is optional

    //listen to color events
    pr.on('color', color => {
      //-> transform the color using fn(color)
      const transformedColor = fn(color);
      //->write the color back using writeUInt8(transformed, offset)
      pixels.writeUInt8(transformedColor.b, color.offset);
      pixels.writeUInt8(transformedColor.g, color.offset + 1);
      pixels.writeUInt8(transformedColor.r, color.offset + 2);
    });
    pr.on('end', () => {
      callback();
    });

    pr.read(pixels);
  }
}

module.exports = BitmapTransform;
