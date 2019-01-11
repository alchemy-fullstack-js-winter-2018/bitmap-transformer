const EventEmiter = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.bytesPerPixel = this.bitsPerPixel / 4;
  }

  read(buffer) {

    // Keep in mind that the loop will need to "step" by number
    // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
    // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
    for(let i = 0; i < buffer.length; i += (this.bitsPerPixel / 4)) {
      this.emit('color', {
        offset: i,
        b: buffer.readUInt,
        g: buffer.readUInt,
        r: buffer.readUInt
      });
    }

    // emit an end event
  }
}
