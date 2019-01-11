const { Buffer } = require('buffer');

const { 
    pixelOffset, 
    fileSize,
    bitsPerPixel,
} = require('./bitmap-constants.js');



const b = Buffer.alloc(10, 'a');
console.log(b);





class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readUInt32(pixelOffset);
        this.bitsPerPixel = buffer.readUInt(bitsPerPixel);
        this.fileSize = buffer.readUInt(fileSize);


    }
}




module.exports = BitmapHeader;


