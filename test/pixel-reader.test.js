const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });
        
        const colors = [];
        // example?
        /*
        [0, 0, 0, 255, 255, 255, 255, 0, 0]

        {
            offset: 0,
            b: 0,
            g: 0,
            r: 0
        }

        {
            offset: 3,
            b: 255,
            g: 255,
            r: 255
        }

        {
            offset: 6,
            b: 255,
            g: 0,
            r: 0
        }
        */

        reader.on('color', color=> {
            colors.push(color);

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
        });

        // Create a buffer with known data for your colors
        const buffer = Buffer.alloc(9); // for three pixels
        // TODO: fill buffer with byte values that match your 
        // expected test colors
        //BLACK
        buffer.writeUInt8(0);
        buffer.writeUInt8(0, 1);
        buffer.writeUInt8(0, 2);
        //white
        buffer.writeUInt8(255, 3);
        buffer.writeUInt8(255, 4);
        buffer.writeUInt8(255, 5);
        // BLUE
        buffer.writeUInt8(255, 6);
        buffer.writeUInt8(0, 7);
        buffer.writeUInt8(0, 8);
        // Call read method with your buffer
        reader.read(buffer);
    });

});