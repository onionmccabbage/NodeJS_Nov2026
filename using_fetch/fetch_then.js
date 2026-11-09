// fetch some data from a public REST API (Application Programming Interface)
// RESTful is only called when needed
// REpresenting STate of some data

// https://swapi.dev/api/peope/1
// JSON JavaScript Object Notation

// the 'fetch' feture returns a Promise
// Promises are 'thenable' ( we can say .then( ()=>{} ) )
const fetchSwapiData = ()=>{
    const url = `https://swapi.dev/api/people/1`

    return fetch(url) // fetch lets us grab data from the internet
    // wait until the above line completes
    .then( (d)=>{
        // for this API we will receive JSON data
        return d.json() // this will take some time to retrieve
    } ) // this callback will only run when the fetch has completed
    // when we are dealing with data outside of our code
    // it is always good to handle potential errors
    .catch( (e)=>{
        console.error(e) // show any problems here
    } )

}

// we need to invoke our function
fetchSwapiData()
// again, we need to wait for a response
.then( (received)=>{console.log( received )} ) // see what we have