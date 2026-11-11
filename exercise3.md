## Exercise 3

up to 50 minutes (2:40)

* Consume a REST API and show the results
* Include parameters when making calls to the API
* Persist retrieved data as text in a file
* Implement custom events to manage when things happen
  * e.g. when some initial data has been retreived, emit and event to fetch related data
  * A custom event could also trigger the file-writing
* Explore process.nextTick within validation and try/catch block
  * https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick#processnexttick
* Optionally write tests, inspect the code (debug)
* Use any architecture
* Opportunity to show-and-tell when done

#### Details
* There is an API at https://jsonplaceholder.typicode.com for /users /posts /photos and /todos, each with an id
* For example:
  * get all the posts for a given user, 
  * or get all the photos for a given album
* Write an app to consume any of these data combinations
* Clearly this is very similar to consuming SWAPI, so by all means re-use code from earlier work
* You may choose to explore POST etc. (if that matters to you)

Architecture:
* Aim for modular code, with exports and imports
* Remember to always handle potential exceptions
* You will need to use Promise.then or else async and await