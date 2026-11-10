// when we import we use curly braces like this
import { greet, arr } from "./util.mjs";
// if we import the default, no curly braces
import Daft from "./util.mjs";
import { fn } from "./util.mjs";

// we may also import from 'other' module
import fnX from './other.js'

console.log( fnX.fnZ() )
// fnX() // does nothing

// we can use any imported code
console.log( arr, greet('Maigrette'), fn() )