const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
  }

  read(buffer) {
    for(let i = 0; i < buffer.length; i += (this.bitsPerPixel / 8)) {
      this.emit('color', {
        offset: i,
        b: buffer.readUInt8(i),
        g: buffer.readUInt8(i + 1),
        r: buffer.readUInt8(i + 2)
      });
    }
    // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
    this.emit('end');
  }
}

module.exports = PixelReader;
