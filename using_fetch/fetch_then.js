// fetch some data from a public REST API (Application Programming Interface)
// RESTful is only called when needed
// REpresenting STate of some data

// https://swapi.dev/api/peope/1
// JSON JavaScript Object Notation

const fetchSwapiData = ()=>{
    const url = `https://swapi.dev/api/peope/1`
    return fetch(url) // fetch lets us grab data from the internet
    // wait until the above line completes
    .then( (d)=>{
        // for this API we will receive JSON data
        return d.json() // this will take some time to retrieve
    } ) // this callback will only run when the fetch has completed
}

// we need to invoke our function
fetchSwapiData()
// again, we need to wait for a response
.then( (received)=>{console.log( received )} ) // see what we have