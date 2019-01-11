const Buffer = require('buffer').Buffer;
// or:
// const { Buffer } = require('buffer');

const buf1 = Buffer.alloc(10);
console.log(buf1);
// prints to console: <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.alloc(5, 'a');
console.log(buf2);
// <Buffer 61 61 61 61 61>

console.log(buf2.toString());
// aaaaa

const buf3 = Buffer.from('Hello');
console.log(buf3, buf3.toString());
// <Buffer 48 65 6c 6c 6f> 'Hello'

const buf5 = buf3.map(x => 104).toString();
console.log(buf5);
///hhhhh

const face = Buffer.from([0xF0, 0x9F, 0x98, 0x8D]);
console.log(face.toString());
// 😍
