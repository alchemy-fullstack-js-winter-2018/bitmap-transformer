const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log('RECEIVED:' + `${letter}`);
});

let str = 'Hello there banana face';
let split = str.split('').filter(character => character !== ' ');
split.forEach(letter => {
  ee.emit('letter', letter);
});
/*
prints to console:
RECEIVED:H
RECEIVED:e
RECEIVED:l
RECEIVED:l
RECEIVED:o
RECEIVED:t
RECEIVED:h
RECEIVED:e
RECEIVED:r
RECEIVED:e
RECEIVED:b
RECEIVED:a
RECEIVED:n
RECEIVED:a
RECEIVED:n
RECEIVED:a
RECEIVED:f
RECEIVED:a
RECEIVED:c
RECEIVED:e
*/
