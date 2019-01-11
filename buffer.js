//const Buffer = require('buffer').Buffer
const { Buffer } = require('buffer');

const b = Buffer.alloc(10, 'a');

const ba = Buffer.from('7468697320697320612074c3a97374', 'hex')

const bam = Buffer.from('104', 'hex')


console.log(b.toString());

console.log(bam.map(byte => {
  return 104;
}).toString());

const smile = Buffer.from([0xF0, 0X9F, 0X98, 0X88]);
console.log(smile.toString());


