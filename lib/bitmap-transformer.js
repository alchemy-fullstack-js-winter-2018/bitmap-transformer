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
    const pixels = this.buffer.slice(0, this.header.pixelOffset);  // use this.header.pixelOffset

    // listen to color events
    pr.on('color', color => {
      // transform the color using fn(color)
      const transformedColor = fn(color);
      // write the color back using pixels.writeUInt8(transformedColor.someColor, offset)
      pixels.writeUInt8(transformedColor.b, color.offset); 
      pixels.writeUInt8(transformedColor.g, color.offset + 1);
      pixels.writeUInt8(transformedColor.r, color.offset + 2);
      
    });
    pr.on('end', callback);
    
    pr.read(pixels);
    // write the b value to pixels
    // write the g value to pixels
    // write the r value to pixels 
    // use color.offset to figure out where to write the color
   
    
    
    
    // this is a guide to what needs to happen, not a recipe

    // you have access to the data you need:
    // this.buffer
    // this.header.pixelOffset
    // this.header.bitsPerPixel
    // this.header.fileSize (not technically needed)

    // 1. Create a PixelReader and subscribe to "color" and "end" events
    // 2. Find the right place (offset) in the buffer from which to start your loop.
    //      HINT: use buffer.slice(offset) to create a "zero" based buffer you can pass to PixelReader
    // 3. On the "color" event, 
    //      a. run the evented color through the supplied transform function `fn` to get the new color
    //      b. write the new color values to the buffer using the `offset` property
    //         of the color. Remember to write to the "sliced" buffer!
    // 4. On the "end" event - Call the callback to indicate the transform is complete
    // 5. Call the "read" method passing in the sliced buffer 

        
  }
}
