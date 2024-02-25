// setTimeout() starts a timer set to the given delay in milliseconds, and when the time expires, it calls the given function
/*
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
*/


// The Promise() constructor takes a single function as an argument
/*
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
*/


// Since alarm() returns a promise we, can anything like with any other promise: promise chaining, Promise.all(), and async / await
/*
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
*/


// practice
const person = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve) => {
    // throws an error if delay is less than or equal to zero
    if (delay <= 0) {
      throw new Error("Alarm must be greater than 0")
    }

    setTimeout(() => {
      resolve(`Wakey Wakey! ${person}`);
    }, delay);
  });
}


// similar to the one of the examples but instead took function out of the event listener
// its just another way to do it depending on user preference
async function operation() {
  try {
    // waits for the alarm promise
    const message = await alarm(person.value, delay.value);
    output.textContent = message;
    // gets the error message from the alarm function and catches it
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
};

button.addEventListener("click", operation);
