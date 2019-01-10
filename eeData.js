const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('we did it with data', data => {
  console.log(data);
});

myEmitter.emit('we did it with data', 'hi there');
