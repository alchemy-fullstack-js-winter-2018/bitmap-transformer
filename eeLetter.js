const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('letter', letter => {
  
  console.log(`RECEIVED: ${letter}`);
  
});

'hi there we are emitting events'
  .split('')
  .filter(character => character !== ' ')
  .forEach(letter => myEmitter.emit('letter', letter));
