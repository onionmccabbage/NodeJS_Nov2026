// everything in ES is an object
let a = 1; // this is an object, in this case a number
const b = ()=>{}; // this object is a function
let c = []; // an array object
let d = {'n':'Floella', 'start':1974, 'award':'MBE'}; // an object object
// NB semi-colons at tend of statements are optional
// JSON insists on double quotes for everthing but numbers
// we may convert between ES structures and JSON text


// read in some JSON
import fs from 'node:fs' // using ECMAScript Modules (esm)
let j = fs.readFile('basics.js', 'utf8', (err, data)=>{
        if (err){
            console.error(err)
        }
        return data
        // we must wait for the file load operation to complete
    } ).then( (data)=>{return data} )
console.log(j)
// k = JSON.parse() // convert JSON text to ES structures