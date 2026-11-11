// some useful functionality
export const greet =(name)=>{
    console.log(`Hello ${name}`)
    return `Hello ${name}`
}
export const goodbye = (name)=>{
    console.log(`Farewell ${name}`)
    return `Farewell ${name}`
}
export const add = (a,b)=>{
    return a+b
}
export const subtract = (a,b)=>{
    return a-b
}
// we dont always pass in simple object
// here we might expect a structure
export const multiply = (struct)=>{
    let a,b
    [a, b] = struct
    return a*b
}
