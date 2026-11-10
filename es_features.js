// there are several ways to write a modern ES function

// we may write a fully formed function
const fnA = (x)=>{return x*x}
// if there is exactly one argument, we can leave out the ()
const fnB = x=>{return x*x}
// if there is only one statement we can leve out {}
const fnC = x=>x*x
// CAREFUL if we use {} we are obliged to also 'return' (if needed)
const fnD = x=>{x*x} // this is a common pitfall: nothing is returned

console.log(  fnA(2) ) // 4
console.log(  fnB(2) ) // 4
console.log(  fnC(2) ) // 4
console.log(  fnD(2) ) // 4

{
    // here is a brand new scope
    console.log(fnA()) // fails, since we are in a different scope
}

{
    // unpacking
    let a = [3,4,5,6,7,8,9]
    let [x,y,z, ...rest] = a
    console.log(x, y, z, rest)
}
// also spread is available