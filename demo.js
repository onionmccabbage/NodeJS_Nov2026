s = ``

if (typeof(s) != 'string' || s !='') {
    console.log(`${s} is not a string: ${typeof(s)}`) // we may throw an error or set a sensible default
} else {
    console.log(`${s} is a string: ${typeof(s)}`) // we may throw an error or set a sensible default
}