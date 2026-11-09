// here we use fecth with async/await to resolve promises from a URL
// NB .then and async/await BOTH use promises


// we may declare any function to be asynchronous
const fetchSwapiModern = async ()=>{
    const url = `https://swapi.dev/api/species/3` // this API will return JSON 
    const response = await fetch(url) // async and await are ALWAYS used together
    return response // this is tidier than .then( ()=>{} )
}

// we then invoke our function like this
const species_3 = await fetchSwapiModern()
console.log(species_3)