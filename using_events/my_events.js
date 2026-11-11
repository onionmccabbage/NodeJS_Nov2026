import {EventEmitter} from 'events'

import { greet, goodbye, add, subtract, multiply } from './util.js'

// we need an instance of the EventEmitter
const myEmitter = new EventEmitter()

// listen for an event (we invent names for our event)
myEmitter.on('welcome', greet)
myEmitter.on('welcome', goodbye)
myEmitter.on('babbage', add)
myEmitter.on('subtract', subtract)
myEmitter.on('product', multiply)

// we can make events happen like this
myEmitter.emit('welcome', 'Ethel')
myEmitter.emit('babbage', 3,2)
myEmitter.emit('subtract', 7,2)
myEmitter.emit('product', [5,5])

// pseudo code
// on start, set things up
// on ready, listen for data
// on data, validate before...
// on data, respond with outcomes
// on outcomes...