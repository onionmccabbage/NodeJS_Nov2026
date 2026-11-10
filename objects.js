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
fs.readFile('./callbacks/news.json', 'utf8', (err, data)=>{
        if (err){
            console.error(err)
        }
        // console.log(data)
        let j = data
        // we must wait for the file load operation to complete
        console.log(j, typeof(j)) // string
        let k = JSON.parse(j) // convert JSON text to ES structures
        console.log(k, typeof(k)) // object
        let l = JSON.stringify(k)
        console.log(l, typeof(l)) // string
        // we may grab parts of the object
        // console.log( k[0].headline )
        console.log( k[0]['headline'] )
    } )
    // fs.readfile does NOT return a Promise, so it is not thenable
    // .then( (data)=>{return data} )