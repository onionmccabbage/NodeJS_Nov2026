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
    // = sets equality
    // == checks equality, === checks identity
    // 0 == false is correct, they both evaluate to the same outcome
    // 0 === false is incorrect, they are not fundamentaly the same thing
    console.log(a, b, this, this===myEmitter)
})

// NB te legacy 'function' keyword treats 'this' operator differently to modern function use
myEmitter.on('legacy', function(a,b=2){
    console.log(a, b, this, this===myEmitter)
})
myEmitter.on('legacy', function(a,b=3){
    console.log(a, b, this, this===myEmitter)
})
myEmitter.emit('legacy')
myEmitter.emit('modern')