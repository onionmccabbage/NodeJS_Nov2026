## Exercise 2: Fetch with Promises

#### 50 mins

Write a simple Node app that fetches information from the public swapi API and then fetches further data, based on the initial fetch.

1. Use the `swapi.dev` API to fetch a person (using an id parameter)
 (`https://swapi.dev/api/people/${id}`).

2. Once you get the person's data, find out which planet they're from. This data is in the `homeworld` property of the person's data ('homeworld' is a URL).

3. Fetch the details of that planet from the provided URL.

4. Show some of the person and homeworld data

There are two approaches to this (choose either):

- Using async and await (more common)
- Using Promise.then()

Ensure you handle any potential errors at each step, including handling cases where a person or planet does not exist

Use debug tools as you see fit to help you understand the code as you develop it, and to see the steps your code carries out

As usual, ask around, look online etc.

There will be a chance to show your code after the exercise

## Optional
* Use runtime arguments to inject the integer to be used as ID (instead of using a fixed ID number)
* Maybe also pass in a category for the second fetch operation (could be 'planet', or 'films' rather than just 'homeworld')
* Create package.json then write a script in it to run the file with --watch
* Combine this swapi-fetching code with the microservice server from earlier, so that the route '/swapi/id' sends the retrieved person and planet to the browser
* You could also write the retrieved data to a text file
* Consider how you could break the code across a number of small modules
* You would then import the functionality to a main file
