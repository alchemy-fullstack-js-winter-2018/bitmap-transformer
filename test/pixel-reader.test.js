const assert = require('assert');
const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });
        
    const colors = [];

    // TODO: subscribe to reader "color" event and push into `colors` array.
    // A "color" object should look like:
    // {
    //     offset: <offset from the start of buffer passed to PixelReader>,
    //     r: <red color value>,
    //     g: <green color value>,
    //     b: <blue color value>,
    // }

    reader.on('end', () => {
      expect(colors).toHaveLength(3);
      expect(colors[0]).toEqual({
        offset: 0,
        r: 0,
        g: 0,
        b: 0
      });
      expect(colors[1]).toEqual({
        offset: 3,
        r: 255,
        g: 255,
        b: 255
      });
      expect(colors[2]).toEqual({
        offset: 6,
        r: 0,
        g: 0,
        b: 255
      });
      done();
      // write deepEqual assertion for colors versus the
      // expected rgb color objects

      // Don't forget to call done()!
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(9); // for three pixels
    // TODO: fill buffer with byte values that match your 
    // expected test colors
    buffer.writeUInt8(0);
    buffer.writeUInt8(0);
    buffer.writeUInt8(0);

    buffer.writeUInt8(255);
    buffer.writeUInt8(255);
    buffer.writeUInt8(255);

    buffer.writeUInt8(255);
    buffer.writeUInt8(0);
    buffer.writeUInt8(0);
    // Call read method with your buffer
    reader.read(buffer);
  });

});
