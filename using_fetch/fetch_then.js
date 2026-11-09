// fetch some data from a public REST API (Application Programming Interface)
// RESTful is only called when needed
// REpresenting STate of some data

// https://swapi.dev/api/peope/1
// JSON JavaScript Object Notation

const fetchSwapiData = ()=>{
    url = `https://swapi.dev/api/peope/1`
    d = fetch(url) // fetch lets us grab data from the internet
    // wait until the above line completes
    .then( ()=>{} ) // this callback will only run when the fetch has completed
    
    
    return d // this will take some time to retrieve
}


// we need to invoke our function
fetchSwapiData()