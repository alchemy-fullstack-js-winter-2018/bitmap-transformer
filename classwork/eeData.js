const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', data => {
  console(data);
});

ee.emit('we did it with the data');

