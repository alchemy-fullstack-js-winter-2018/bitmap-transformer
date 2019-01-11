const EventEmitter = require('events');

class LetterEmitter  extends EventEmitter {
  read(str) {
    str.split('')
      .filter(char => char !== ' ')
      .forEach((letter, offset) => {
        this.emit('letter', { letter, offset });
      });
    this.emit('end');
  }
}


module.exports = LetterEmitter;
