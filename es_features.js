// there are several ways to write a modern ES function

// we may write a fully formed function
const fnA = (x)=>{return x*x}
// if there is exactly one argument, we can leave out the ()
const fnB = x=>{return x*x}
// if there is only one statement we can leve out {}
const fnC = x=>x*x
const fnD = ()=>{}

console.log(  fnA(2) ) // 4
console.log(  fnB(2) ) // 4
console.log(  fnC(2) ) // 4