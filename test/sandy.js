const fs = require('fs');
const Buffer = require('buffer').Buffer;
let buffer = null;

fs.readFile('./test-bitmap.bmp', { encoding: 'utf8' }, (err, data) => {
  buffer = Buffer.from(data);
  console.log(buffer[10]);
  console.log(buffer[28]);
  console.log(buffer[2]);
  console.log('10', buffer.readUInt32LE(10));
  console.log('2', buffer.readUInt16LE(2));
  console.log('28', buffer.readUInt16LE(28));

});

