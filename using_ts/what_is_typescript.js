// Typescript is ES
var a = 11; // Typescript will infer that a is a number
// this is not a runtime problem, it is only flagged up at design time
// a = 'hello' // the typescript language engine spots this problem
// we may be explicit about types (usually we let typesript iner the type)
var b = 'hello'; // this is an eraseable error
// b = 33 // a Typescript problem (not an ES runtime problem)
// we may type functions
// number, boolean string are lower case types. Array is a class that takes types
var fn = function (a, b, c) {
    return [a, b, c];
};
fn(1, true, 'love');
// alternatives for types
var d = null;
d = 'value';
d = 33;
