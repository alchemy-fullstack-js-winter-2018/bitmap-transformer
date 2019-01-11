const fs = require('fs');
const Buffer = require('buffer').Buffer;

fs.readFile('./test-bitmap.bmp', { encoding: 'utf8' }, (err, data) => {
  console.log(Buffer.from(data));
});
