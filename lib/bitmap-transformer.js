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

        
  }
}
