// here we use fecth with async/await to resolve promises from a URL
// NB .then and async/await BOTH use promises


// we may declare any function to be asynchronous
const fetchSwapiModern = async ()=>{
    const url = `https://swapi.dev/api/species/3` // this API will return JSON 
    try {
        const response = await fetch(url) // async and await are ALWAYS used together
        return response.json() // this is tidier than .then( ()=>{} )
    }
    catch(err){
        console.error(err)
    }
    finally {
        // this is a good place to carry out tidy-up operations
        console.log('if there is a finally block, it will run in all cases')
    }
}

// we then invoke our function like this
const species_3 = await fetchSwapiModern()
console.log(species_3)