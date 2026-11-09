// we may create some re-useable code which can be used in other modules
// this file has extension '.mjs' which allows us to use ECMAScript Modules

// we can only import things if they have been made available for export
export const greet = (name)=>{
    return `Hello ${name}`
}

// members of an array are indexed 0,1,2,3,4,5,6 etc.
export let arr = [4,3,2,1,7,,5,9,3] // NB arrays may be sparse (i.e. gaps)

