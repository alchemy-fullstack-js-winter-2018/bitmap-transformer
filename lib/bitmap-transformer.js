const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pr = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });

    // use slice to grab the pixels from buffer
    // NOTE: pixels start at pixelOffset
    const pixels = this.buffer.slice(this.header.pixelOffset);

    // listen to color events
    pr.on('color', color => {
      // -> transform the color using fn(color)
      const transformedColor = fn(color);
      // -> write the color back using pixels.writeUInt8(transformedColor.someColor, offset)
      // write the b value to pixels
      pixels.writeUInt8(transformedColor.b, color.offset);
      // write the g value to pixels
      pixels.writeUInt8(transformedColor.g, color.offset + 1);
      // write the r value to pixels
      pixels.writeUInt8(transformedColor.r, color.offset + 2);
      // use color.offset to figure out where to write the color
    });

    // call the callback after pixel reader is done
    pr.on('end', callback);


    // invoke the pixel reader read method with pixels
    pr.read(pixels);
  }
}

module.exports = BitmapTransform;
