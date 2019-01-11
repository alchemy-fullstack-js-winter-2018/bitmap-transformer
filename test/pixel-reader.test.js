//const assert = require('assert');
const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });
        
    const colors = [];

    reader.on('color', color => {
      colors.push(color);
    });

    reader.on('end', () => {
      //d write deepEqual assertion for colors versus the
      // expected rgb color objects
      expect(colors).toHaveLength(3);
      expect(colors[0]).toEqual({ //white
        offset: 0,
        r: 0,
        g: 0,
        b: 0
      });

      expect(colors[1]).toEqual({ //white
        offset: 24,
        r: 255,
        g: 255,
        b: 255
      });

      expect(colors[2]).toEqual({ //white
        offset: 48,
        r: 0,
        g: 0,
        b: 255
      });

      // Don't forget to call done()!
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(24 * 3); // for three pixels
    // TODO: fill buffer with byte values that match your 
    // expected test colors
    buffer.writeUInt8(0);  //  black
    buffer.writeUInt8(0);
    buffer.writeUInt8(0);

    buffer.writeUInt8(255); //white
    buffer.writeUInt8(255);
    buffer.writeUInt8(255);

    buffer.writeUInt8(0); // red
    buffer.writeUInt8(0);
    buffer.writeUInt8(255);
    // Call read method with your buffer
    reader.read(buffer);
    done();
  });

});
