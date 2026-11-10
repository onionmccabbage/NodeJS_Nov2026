export const add = (a,b)=>{
    if (typeof(a) != 'number' || typeof(b) !="number"){
        throw new Error('Both values need to be numeric')
    }
    return a+b // deliberately wrong
}