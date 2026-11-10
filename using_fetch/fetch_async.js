// here we use fecth with async/await to resolve promises from a URL
// NB .then and async/await BOTH use promises
// we will use system arguments to configure our API call
import {argv} from 'node:process'

// we may declare any function to be asynchronous
const fetchSwapiModern = async (category='species', id=3)=>{
    // it is usually a good idea to validate we havethe kind of data we expect
    if (typeof(category)!='string' || category =='') {
        category = 'species' // we may throw an error or set a sensible default
    }
    if (typeof(id)!=Number || id<=0){
        id = 3
    }
    const url = `https://swapi.dev/api/${category}/${id}` // this API will return JSON 
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
// read any system arguments
if (length(argv)>2){ // we ignore member 0 and member 1
    let cat = argv[2]
    let id = argv[3]
    const species_3 = await fetchSwapiModern(cat, id)
    console.log(species_3)
}