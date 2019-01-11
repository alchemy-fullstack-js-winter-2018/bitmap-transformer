const assert = require('assert');
const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });
        
        const colors = [];

        const colorObj = {
            offset: 0, 
            r: 0,
            g: 0,
            b: 0
        };
        colors.push(colorObj);

        reader.read();
        reader.on('color', colorObj=> {
            colors.push(colorObj);

        });
        reader.on('end', () => {
            expect(colors).toHaveLength(3);
            expect(colors[0]).toEqual({
                offset: 0,
                r: 0, 
                g: 0, 
                b: 0
            });
            expect(colors[1]).toEqual({
                offset: 24,
                r: 255, 
                g: 255, 
                b: 255
            });
            expect(colors[2]).toEqual({
                offset: 48,
                r: 0, 
                g: 0, 
                b: 255
            });
            done();
        });

        // Create a buffer with known data for your colors
        const buffer = Buffer.alloc(24 * 3); // for three pixels
        // TODO: fill buffer with byte values that match your 
        // expected test colors
        //BLACK
        buffer.writeUInt8(0);
        buffer.writeUInt8(0);
        buffer.writeUInt8(0);
        //white
        buffer.writeUInt8(255);
        buffer.writeUInt8(255);
        buffer.writeUInt8(255);
        // BLUE
        buffer.writeUInt8(255);
        buffer.writeUInt8(0);
        buffer.writeUInt8(0);
        // Call read method with your buffer
        reader.read(buffer);
    });

});