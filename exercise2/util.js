import { argv } from 'node:process'

export const getRandomInt = (max) => {
    // see if an integer has been provided as a system argument variable
    if (argv[2]) {
        return argv[2]
    }
    else {
        return Math.floor(Math.random() * max) + 1;
    }
}

export const fetchPersonAsync = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        return response.json();
    }
    catch (err) {
        console.error(err)
    }
}

export const fetchPlanetAsync = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (err) {
        console.error(err)
    }
}