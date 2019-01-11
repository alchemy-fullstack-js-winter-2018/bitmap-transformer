const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it', () => {
  console.log('Yes we did');
});

ee.emit('we did it');
// returns 'Yes we did' to the console
