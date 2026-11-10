import { getRandomInt, fetchPersonAsync, fetchPlanetAsync} from "./util.js";

const main = async ()=>{
  const randomId = getRandomInt(83);
  try {
    const person = await fetchPersonAsync(randomId); 
    console.log("Person:", person.name);
    // retrieve the homeworld property
    // and use it to fetch planet info
    const planet = await fetchPlanetAsync(person.homeworld); 
    console.log("Homeworld:", planet.name);

  } catch (error) {
    console.error("Error:", error);
  }
}

main()
