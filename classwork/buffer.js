const { Buffer } = require('buffer');
//create an empty buffer w/ length of 10
//fill this buffer with a's
const emptyBuffer = Buffer.alloc(10, 'a');

console.log(emptyBuffer, 'my length is');
// to change back to string console.log(emptyBuffer.toString());

//////////////////////////////////////////////

const buf1 = Buffer.from('this is a string');

console.log(buf1.map(byte => {
  return 104;
}).toString());

const smile = Buffer.from([0xF0, 0x9F, 0x81]);
console.log(smile.toString());
