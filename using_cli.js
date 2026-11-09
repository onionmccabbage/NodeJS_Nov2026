// we may wish to pass in runtime arguments when we execute Node modules
import {argv} from 'node:process'

// when we run this module
// node nnnnn.js argA argB

// we can grab any system arguments like this
const fnGrabArgs = ()=>{
    // iterate over any system argument variables
    argv.forEach( (val, index)=>{
        console.log(`We received ${index}: ${val}`)
    } )
}

fnGrabArgs() // invoke our function