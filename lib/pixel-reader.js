const EventEmitter = require('events');

const ee = new EventEmitter();

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.bytesPerPixel = this.bitsPerPixel / 4;
  }

  read(buffer) {
    for(let i = 0; i < buffer.length; i += (this.bytesPerPixel / 4)) {
      this.emit('color', {
        offset: i,
        b: buffer.readUInt,
        g: buffer.readUInt,
        r: buffer.readUInt
      });
    } 
    this.emit('end');

    // emit an event
    
  }
}

module.exports = PixelReader;
