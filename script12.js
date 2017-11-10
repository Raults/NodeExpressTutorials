// Events and eventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(arg1, arg2) {
  console.log(arg1 + arg2);
});

eventEmitter.on('myCustomEvent', function(arg1, arg2, arg3) {
  console.log(arg1 + arg2 + arg3);
});

setTimeout(function() {
  eventEmitter.emit('myCustomEvent', 'String1 ', 'and String 2', ' and String 3 as well');
}, 2000);

// document.quesrySelector('yourtag').onclick = function() {. .. };
