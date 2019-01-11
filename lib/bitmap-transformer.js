const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }


  transform(fn, callback) {
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
      const transformedPColor = fn(color);
      //->write the color back using writeUInt8(transformed, offset)

    });


  }
}
