const EventEmitter = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('')
      .filter(character => character !== ' ')
      .forEach((letter, offset) => {
        this.emit('letter', { letter, offset });
      });
    this.emit('end');
  }
};
