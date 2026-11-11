// Typescript is ES

let a = 11 // Typescript will infer that a is a number
// this is not a runtime problem, it is only flagged up at design time
// a = 'hello' // the typescript language engine spots this problem

// we may be explicit about types (usually we let typesript iner the type)
let b:string = 'hello' // this is an eraseable error
// b = 33 // a Typescript problem (not an ES runtime problem)

// we may type functions
// number, boolean string are lower case types. Array is a class that takes types
const fn = (a:number, b:boolean, c:string):Array<any>=>{
    return [a,b,c]
}

fn(1, true, 'love')

// alternatives for types
let d:string | null | number = null
d = 'value'
d = 33