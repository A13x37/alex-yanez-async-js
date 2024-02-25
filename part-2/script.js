// Promises

/*
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");
*/

// Chain promises using .then, reduces the amount of indentation
/*
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });
*/
  

// Throws an error if the request wasn't "OK"
/*
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    });
*/


// Promise.all() takes an array of promises and returns a single promise
// If s promise is rejected .catch() catches the error and displays a error message
/*
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
*/


// Promise.any is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected
/*
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
*/


// Adding async at the start of a function makes it an async function
/*
async function myFunction() {
    // This is an async function
  }
*/


// The await keyword is used inside async functions before a call to a function that returns a promise
// It makes the code wait until the promise is settled
async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();
   


// practice
async function promise() {
  // waits for the promise to settle
    const promise1 = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    const promise2 = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    );
    // gets any one of the promises
    Promise.any([promise1, promise2])
      .then((response) => {
        console.log(`${response.url}: ${response.status}`)
      })
      // throws error if found
      .catch((error) => {
        console.error(`:( Failed to fetch: ${error}`);
      });
}
