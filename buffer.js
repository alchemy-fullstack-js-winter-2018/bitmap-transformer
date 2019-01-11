const { Buffer } = require('buffer');

const buf = Buffer.alloc(10, '10 chars ');

console.log(buf.toString());

const buf2 = Buffer.from('string');

console.log(buf2.toString());

console.log(buf.map(byte => {
  return 104;
}).toString());

const smile = Buffer.from([0xf0, 0x9f, 0x98, 0x90]);
console.log(smile.toString());
