const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it.only('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });
    
    const colors = [];

    reader.on('color', color => {
      colors.push(color);
    });

    reader.on('end', () => {
      expect(colors).toHaveLength(3);
      expect(colors[0]).toEqual({
        offset: 0,
        r:0,
        g:0,
        b:0
      });

      expect(colors[1]).toEqual({
        offset: 3,
        r:255,
        g:255,
        b:255
      });

      expect(colors[2]).toEqual({
        offset: 6,
        r:0,
        g:0,
        b:225
      });
      done();
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(9);
    
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
