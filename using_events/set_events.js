// timeout_vs_immediate.js
import {EventEmitter}  from 'node:events';

const myEv = new EventEmitter()

function apiCall(arg, callback) {
  if (typeof arg !== 'string') {
    return process.nextTick( // a great idea for validation/sanitizing
      callback2,
      new TypeError('argument should be string')
    );
  }
}
const callback2 = ()=>{}
const callback = () => {
  setTimeout(() => {
    console.log('timeout'); // despite being zero, this comes after setImmediate
  }, 0);
  setImmediate(() => {
    console.log('immediate'); // this is always called BEFORE timers
  });
}


myEv.on('demo', callback);
myEv.emit('demo')

apiCall(null) // clearly not a string, so we will get an error