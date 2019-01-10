const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('we did it', () => {
  console.log('Yes we did');
});

myEmitter.on('we did it', () => {
  console.log('did we really?');
});



myEmitter.emit('we did it');
myEmitter.emit('we did it');
myEmitter.emit('we did it with data');