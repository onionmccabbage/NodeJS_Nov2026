// Node (ES) is entirely event driven
// a great deal of time is spent idling (do nothing)
// the thread does most operations in a standard manner

// occasionally we need tools to interrupt the normal event flow
// setImmediate, setTimeout and process.nextTick

// node:stream or node:events...
import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()
myEmitter.on('modern', (a, b=2)=>{
    console.log(a, b, this, this===myEmitter)
})

// NB te legacy 'function' keyword treats 'this' operator differently to modern function use
myEmitter.on('legacy', function(a,b=2){
    console.log(a, b, this, this===myEmitter)
})
// myEmitter.emit('legacy')
myEmitter.emit('modern')