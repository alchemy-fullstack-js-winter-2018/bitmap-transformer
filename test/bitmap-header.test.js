const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');

describe('bitmap header', () => {

    let buffer = null;
    beforeEach(() => {
    // TODO: file read './test/test-bitmap.bmp' and put the promise return into buffer variable
    });

    it('has correct specs', () => {
    // TODO: read the wiki spec docs to figure out what these values should be.
    // You don't need to change this test, you need to put the correct values into
    // '../lib/bitmap-constants'
        expect(constants.PIXEL_OFFSET).toBeUndefined();
        expect(constants.BITS_PER_PIXEL_OFFSET).toBeUndefined();
        expect(constants.FILE_SIZE_OFFSET).toBeUndefined();
    });

    it('parses header data', () => {
    // TODO: use the constants to populate the following properties
    // on the BitmapHeader in its constructor.
    // These test values are correct for the supplied test-bitmap.bmp
        const header = new BitmapHeader(buffer);
        expect(header.pixelOffset, 54);
        expect(header.bitsPerPixel, 24);
        expect(header.fileSize, 30054);
    });
});
