const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(param1,param2,param3) {
//   const parameters = args.join(', ');
  console.log(`event with parameters ${param1} in ${param2} third ${param3} listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 8, 7, 4, 5,6);


