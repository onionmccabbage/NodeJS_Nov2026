// everything in ES is an object
// functions, modules, arrays, imports are all objects
// classes are also objects

class MyClass {
    // if we choose we may declare one constructor for our class
    constructor(){ // called once, when the class is initiated
        console.info(`We have a new instance`)
    }
    // a class lets us gather together related data members and orperations
    a = true
    b = []
    prettyPrint(){
        return `{a} and {b}`
    }
}

obj1 = new Object()
obj2 = {}
arr1 = new Array()
arr2 = []

c1 = new MyClass() // this calls any constructor we may have written
c1.prettyPrint()
console.log( c1 )