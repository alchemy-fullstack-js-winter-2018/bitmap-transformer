const { Buffer } = require('buffer');

const { 
    PIXEL_OFFSET, 
    FILE_SIZE_OFFSET,
    BITS_PER_PIXEL_OFFSET
} = require('./bitmap-constants.js');

const b = Buffer.alloc(10, 'a');
console.log(b);

class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readUInt16LE(PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readUInt16LE(FILE_SIZE_OFFSET);
    }
}

module.exports = BitmapHeader;