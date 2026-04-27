# 14. Asynchronous JavaScript

Asynchronous JavaScript helps your program handle time-consuming tasks without freezing the app.

Examples of asynchronous tasks:
- API/network requests
- timers (`setTimeout`, `setInterval`)
- file operations
- database queries
- user-triggered events

If JavaScript waited for each slow task before doing anything else, applications would feel stuck.  
Async programming solves this by letting other code continue while waiting.

---

## 14.1 Introduction to Asynchronous Programming

By default, JavaScript executes code line by line (synchronously).  
But many real operations take time, such as fetching data from internet.

### Synchronous example

```js
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

Output:
- Step 1
- Step 2
- Step 3

### Asynchronous example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("End");
```

Output:
- Start
- End
- Inside timeout

### Why this happens

`setTimeout` callback is scheduled and runs later through event loop.  
Meanwhile synchronous code continues.

### Why async matters in real apps

- page stays responsive while loading data
- users can interact with UI during network calls
- better user experience

---

## 14.2 Callbacks

A callback is a function passed as an argument to another function, to be executed later.

### Basic callback example

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function done() {
  console.log("Greeting complete");
}

greet("Riya", done);
```

### Async callback example

```js
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

### Callback problem: callback hell

Nested callbacks become hard to read and maintain.

```js
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

This readability problem led to Promises and `async/await`.

---

## 14.3 Promises

A Promise represents a value that may be available now, later, or never.

Promise states:
- `pending`
- `fulfilled`
- `rejected`

### Creating a promise

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

### Consuming a promise

```js
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });
```

### Promise chaining

```js
Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => n + 1)
  .then((result) => console.log(result)); // 11
```

### Why Promises improved callbacks

- cleaner sequential flow
- centralized error handling with `.catch`
- easier composition of async operations

---

## 14.4 Async and Await

`async/await` is built on top of Promises and provides a cleaner syntax.

### Rules

1. `async` before function means function returns a Promise.
2. `await` pauses inside async function until Promise resolves/rejects.
3. Use `try/catch` for error handling.

### Example

```js
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Ava" }), 1000);
  });
}

async function loadUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}

loadUser();
```

### Why beginners prefer async/await

- looks like synchronous code
- easier to understand than `.then` chains
- error handling is straightforward

### Common mistake

Using `await` outside async function:

```js
// const data = await fetchUser(); // invalid outside async function
```

---

## 14.5 Fetch API

`fetch()` is a built-in browser API used to make HTTP requests.

It returns a Promise.

### Basic GET request

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));
```

### Same using async/await

```js
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getPost();
```

### POST request example

```js
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "Post body text",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log(data);
}
```

---

## 14.6 Handling API Responses

Making request is only part of task.  
You must handle responses safely and correctly.

### Recommended response handling steps

1. Send request.
2. Check `response.ok`.
3. Parse response (`json`, `text`, etc.).
4. Handle errors with `try/catch`.
5. Show user-friendly status messages.

### Safe fetch pattern

```js
async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const todo = await response.json();
    console.log("Todo:", todo);
    return todo;
  } catch (error) {
    console.error("Request failed:", error.message);
    return null;
  }
}
```

### Why `response.ok` check is important

`fetch` Promise usually resolves even for HTTP errors like `404` or `500`.  
So you must manually verify success status.

### Loading, success, and error UI pattern

```js
const statusEl = document.querySelector("#status");

async function loadData() {
  statusEl.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to load users");

    const users = await response.json();
    statusEl.textContent = `Loaded ${users.length} users`;
  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
  }
}
```

This pattern improves user experience and makes app behavior clear.

---

## Callback vs Promise vs Async/Await

| Approach | Readability | Error Handling | Best Use |
|---|---|---|---|
| Callback | Lower in nested flow | harder in deep nesting | simple async callbacks |
| Promise (`.then`) | Medium | `.catch` | chainable async flows |
| Async/Await | High | `try/catch` | most modern app code |

---

## Common Mistakes in Asynchronous JavaScript

1. Forgetting to use `await` before async operations.
2. Using `await` outside `async` functions.
3. Not handling errors (`try/catch` or `.catch` missing).
4. Assuming `fetch` rejects for all HTTP errors.
5. Ignoring loading state in UI.

---

## Quick Recap

- Async programming prevents UI blocking during slow tasks.
- Callbacks are basic but can become messy when nested.
- Promises provide better structure and chaining.
- `async/await` gives clean readable async flow.
- `fetch` is used for HTTP requests.
- Always validate API responses and handle errors safely.

Strong asynchronous JavaScript knowledge is essential for APIs, real-time UI, and modern web application development.
