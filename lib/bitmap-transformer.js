const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    // require pixel reader
    // const pr = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });























    
    // use slice to grab the pixels from buffer
    // NOTE: pixels start at pixelOffset

    // listen to color events
    // -> transform the color using fn(color)
    // -> write the color back using writeUInt8(transformed, offset)


    // call the callback after pixel reader is done

    // invoke the pixel reader read method with pixels
  }
}

module.exports = BitmapTransform;
