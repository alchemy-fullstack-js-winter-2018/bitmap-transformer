const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', data => {
  console.log(data);
});

ee.emit('we did it with data', 'BlahBlahBlah');
// https://nodejs.org/api/events.html#events_class_eventemitter
