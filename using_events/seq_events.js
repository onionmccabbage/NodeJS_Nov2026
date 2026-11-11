import {EventEmitter} from 'events'
import { greet, goodbye, add, subtract, multiply } from './util.js'

const seqeventemitter = new EventEmitter()

seqeventemitter.on('sequential', ()=>{
    console.log('first listener')
})

const fn2 = ()=>{
    console.log('second listener')
}
seqeventemitter.on('sequential', fn2)

seqeventemitter.emit('sequential')