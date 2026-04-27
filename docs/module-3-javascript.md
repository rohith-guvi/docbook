# Module 3: JavaScript (Beginner-Friendly Complete Notes)

JavaScript is the language that makes websites interactive.  
If HTML gives structure and CSS gives style, JavaScript gives behavior.

This module is written as a **single learning flow** for beginners:
- concept in plain words
- syntax and examples
- common mistakes
- mini practice

---

## 1. JavaScript Fundamentals

### 1.1 Introduction to JavaScript

JavaScript is used to:
- respond to user actions (click, type, submit)
- update page content without reloading
- validate forms
- fetch data from servers/APIs
- build complete frontend + backend apps

In modern development, JavaScript is not only for small scripts. It powers real products like dashboards, e-commerce stores, social apps, and admin panels.

### 1.2 How JavaScript Works in the Browser

When a browser opens a page:
1. It reads HTML and creates the DOM (Document Object Model).
2. It applies CSS.
3. It executes JavaScript.
4. It listens for events and runs event handlers when required.

Core runtime pieces:

| Part | Role |
|---|---|
| Call Stack | Runs synchronous functions |
| Web APIs | Browser-provided features (DOM, timers, fetch) |
| Callback Queue / Task Queue | Holds callbacks waiting to run |
| Event Loop | Moves ready callbacks to call stack |

### 1.3 Adding JavaScript to HTML

```html
<!-- Inline JS (not recommended for larger apps) -->
<button onclick="alert('Hello')">Click</button>

<!-- Internal script -->
<script>
  console.log("Internal JavaScript");
</script>

<!-- External script (recommended) -->
<script src="app.js" defer></script>
```

`defer` is beginner-safe because script runs after HTML parsing.

### 1.4 JavaScript Syntax

```js
let userName = "Rohith";
const age = 21;

if (age >= 18) {
  console.log(`${userName} is an adult`);
}
```

Key syntax rules:
- case-sensitive (`myVar` and `myvar` are different)
- statements usually end with `;`
- blocks use `{ }`

### 1.5 Comments in JavaScript

```js
// Single-line comment

/*
  Multi-line comment
*/
```

**Common mistakes**
- Writing too many obvious comments
- Leaving outdated comments after code changes

**Mini practice**
- Write one variable and log it.
- Add a one-line comment explaining what it stores.

---

## 2. Variables and Declarations

Variables store data values.

### 2.1 `var`
Old style declaration:
- function-scoped
- can be redeclared
- hoisted with `undefined`

### 2.2 `let`
Modern mutable declaration:
- block-scoped
- can be updated
- cannot be redeclared in same block

### 2.3 `const`
Modern default declaration:
- block-scoped
- must be initialized
- cannot be reassigned

```js
var city = "Delhi";
let score = 10;
score = 15;

const appName = "Doc Book";
// appName = "Other"; // Error
```

### 2.4 Variable Naming Rules

| Valid Rule | Example |
|---|---|
| Start with letter, `_`, `$` | `name`, `_id`, `$price` |
| Digits allowed after first char | `user1` |
| No spaces | `user_name` (valid), `user name` (invalid) |
| No reserved keywords | `let`, `class`, `return` (invalid) |

### 2.5 Scope Basics

```js
if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

// console.log(a); // Error
// console.log(b); // Error
console.log(c); // 3
```

`let` and `const` are block-scoped; `var` is not.

**Common mistakes**
- Using `var` accidentally
- Reassigning `const`
- Using block variables outside block

**Mini practice**
- Declare one `let` and one `const`.
- Try reassignment on both and observe behavior.

---

## 3. Data Types

### 3.1 Primitive Data Types

Primitive values:
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol` (advanced beginner later)
- `bigint` (large integers)

### 3.2 String

```js
const firstName = "Riya";
const message = `Hello, ${firstName}`;
```

### 3.3 Number

```js
const count = 5;
const price = 99.99;
```

### 3.4 Boolean

```js
const isLoggedIn = true;
```

### 3.5 Null
Intentional empty value.

```js
let selectedUser = null;
```

### 3.6 Undefined
Declared, but no value yet.

```js
let status;
console.log(status); // undefined
```

### 3.7 Non-Primitive Data Types
Reference types:
- Object
- Array
- Function

### 3.8 Objects

```js
const user = { name: "Ana", age: 23 };
```

### 3.9 Arrays

```js
const colors = ["red", "blue", "green"];
```

| Type Kind | Stored As | Copy Behavior |
|---|---|---|
| Primitive | Direct value | independent copy |
| Reference | memory reference | shared mutation risk |

**Common mistakes**
- Confusing `"5"` with `5`
- Mixing `null` and `undefined`
- Assuming object copy is deep copy

**Mini practice**
- Create one variable for each primitive type.
- Log `typeof` for each.

---

## 4. Operators

### 4.1 Arithmetic Operators

`+`, `-`, `*`, `/`, `%`, `**`

```js
console.log(10 + 5); // 15
console.log(10 % 3); // 1
```

### 4.2 Assignment Operators

`=`, `+=`, `-=`, `*=`, `/=`

```js
let x = 10;
x += 5; // 15
```

### 4.3 Comparison Operators

`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

Prefer strict checks (`===`, `!==`).

### 4.4 Logical Operators

`&&`, `||`, `!`

```js
const access = isLoggedIn && isVerified;
```

### 4.5 Ternary Operator

```js
const label = age >= 18 ? "Adult" : "Minor";
```

### 4.6 Type Operators

```js
console.log(typeof "abc"); // string
console.log([] instanceof Array); // true
```

**Common mistakes**
- Using `==` carelessly
- Complex ternary chains reducing readability

**Mini practice**
- Write conditions for pass/fail using both `if` and ternary.

---

## 5. Control Flow

Control flow decides which block of code runs.

### 5.1 `if` Statement

```js
if (temperature > 30) {
  console.log("It is hot");
}
```

### 5.2 `if...else` Statement

```js
if (isMember) {
  discount = 20;
} else {
  discount = 0;
}
```

### 5.3 `else if` Ladder

```js
if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "D";
```

### 5.4 `switch` Statement

```js
switch (day) {
  case "Mon":
    task = "Study";
    break;
  case "Tue":
    task = "Practice";
    break;
  default:
    task = "Rest";
}
```

### 5.5 Conditional Expressions

Conditional expressions include ternary and short-circuit patterns:

```js
const displayName = userName || "Guest";
```

**Common mistakes**
- Forgetting `break` in `switch`
- Deep nested conditions

**Mini practice**
- Build grading logic using `if...else if`.

---

## 6. Loops

Loops repeat code efficiently.

### 6.1 `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 6.2 `while` Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 6.3 `do...while` Loop

```js
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 3);
```

### 6.4 `for...of` Loop

```js
for (const value of [10, 20, 30]) {
  console.log(value);
}
```

### 6.5 `for...in` Loop

```js
const user = { name: "Sam", age: 22 };
for (const key in user) {
  console.log(key, user[key]);
}
```

### 6.6 `break` and `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log(i);
}
```

**Common mistakes**
- Infinite loops
- Using `for...in` on arrays

**Mini practice**
- Print even numbers from 1 to 20.

---

## 7. Functions

Functions make code reusable and organized.

### 7.1 Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

### 7.2 Function Expressions

```js
const add = function (a, b) {
  return a + b;
};
```

### 7.3 Arrow Functions

```js
const add = (a, b) => a + b;
```

### 7.4 Function Parameters
Inputs defined in function.

### 7.5 Return Values
Outputs from function using `return`.

### 7.6 Default Parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### 7.7 Rest Parameters

```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
```

| Pattern | Use |
|---|---|
| Default params | fallback values |
| Rest params | variable number of args |

**Common mistakes**
- Forgetting `return`
- Same variable names causing confusion

**Mini practice**
- Create `calculateTax(price, rate = 0.18)`.

---

## 8. Arrays

### 8.1 Creating Arrays

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### 8.2 Accessing Array Elements

```js
console.log(fruits[0]); // Apple
```

### 8.3 Array Methods Basics

| Method | Purpose |
|---|---|
| `push()` | add to end |
| `pop()` | remove from end |
| `shift()` | remove first |
| `unshift()` | add at start |
| `includes()` | check existence |

### 8.4 Iteration Methods
Use callbacks for each item.

### 8.5 `map()`

```js
const doubled = [1, 2, 3].map((n) => n * 2);
```

### 8.6 `filter()`

```js
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
```

### 8.7 `reduce()`

```js
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
```

### 8.8 `find()`

```js
const user = users.find((u) => u.id === 2);
```

### 8.9 `forEach()`

```js
fruits.forEach((fruit) => console.log(fruit));
```

`map` returns a new array; `forEach` does not.

**Common mistakes**
- Expecting `forEach` to return transformed array
- Mutating arrays unintentionally

**Mini practice**
- Given `[5, 10, 15]`, create new array `[10, 20, 30]`.

---

## 9. Objects

### 9.1 Creating Objects

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
};
```

### 9.2 Object Properties

```js
console.log(car.brand);
console.log(car["model"]);
```

### 9.3 Object Methods

```js
const user = {
  name: "Mia",
  greet() {
    return `Hi, I am ${this.name}`;
  },
};
```

### 9.4 Nested Objects

```js
const student = {
  name: "Leo",
  marks: { math: 90, science: 88 },
};
```

### 9.5 Object Destructuring

```js
const { name, marks: { math } } = student;
```

**Common mistakes**
- Confusing `this` in arrow methods
- Accessing nested keys without checking

**Mini practice**
- Create `book` object with title, author, and method `getSummary()`.

---

## 10. DOM Manipulation

DOM is a tree of HTML elements.

### 10.1 Introduction to DOM
JavaScript uses DOM APIs to read/update the page.

### 10.2 Selecting Elements

```js
const title = document.getElementById("title");
const btn = document.querySelector(".btn");
const items = document.querySelectorAll("li");
```

### 10.3 Modifying Content

```js
title.textContent = "Updated Title";
```

### 10.4 Modifying Styles

```js
title.style.color = "blue";
title.classList.add("highlight");
```

### 10.5 Creating Elements

```js
const li = document.createElement("li");
li.textContent = "New task";
list.appendChild(li);
```

### 10.6 Removing Elements

```js
li.remove();
```

### 10.7 Traversing DOM

```js
const parent = li.parentElement;
const next = li.nextElementSibling;
```

**Common mistakes**
- Wrong selector (`#id` vs `.class`)
- Running script before DOM ready

**Mini practice**
- Build a small add-item list using input + button + `appendChild`.

---

## 11. Events

Events allow JavaScript to react to user actions.

### 11.1 Introduction to Events
Examples: click, keydown, submit, input.

### 11.2 Event Listeners

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### 11.3 Mouse Events
`click`, `dblclick`, `mouseenter`, `mouseleave`

### 11.4 Keyboard Events

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

### 11.5 Form Events
`submit`, `change`, `input`, `focus`, `blur`

### 11.6 Event Propagation

| Type | Direction |
|---|---|
| Capturing | top -> target |
| Bubbling | target -> top |

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();
});
```

**Common mistakes**
- Attaching listener to wrong element
- Forgetting to remove listeners in complex apps

**Mini practice**
- Capture key presses and show key on page.

---

## 12. Form Handling

### 12.1 Accessing Form Elements

```js
const form = document.querySelector("#signupForm");
const emailInput = document.querySelector("#email");
```

### 12.2 Reading Input Values

```js
const email = emailInput.value.trim();
```

### 12.3 Form Validation

```js
if (!email.includes("@")) {
  showError("Enter a valid email");
}
```

### 12.4 Prevent Default Behavior

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // custom submit
});
```

Validation checklist:
- required fields not empty
- proper format (email, phone)
- clear error messages

**Common mistakes**
- Showing generic errors
- Not trimming user input

**Mini practice**
- Build login validation with username + password length check.

---

## 13. Modern JavaScript (ES6+)

### 13.1 Template Literals

```js
const name = "Ava";
const message = `Welcome, ${name}!`;
```

### 13.2 Destructuring

```js
const person = { name: "Ava", age: 23 };
const { name, age } = person;
```

### 13.3 Spread Operator

```js
const a = [1, 2];
const b = [...a, 3];
```

### 13.4 Rest Operator

```js
function collect(first, ...others) {
  return { first, others };
}
```

### 13.5 Modules (Import/Export)

```js
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

Why ES6+ matters:
- cleaner syntax
- fewer bugs
- better modular code

**Common mistakes**
- Confusing spread and rest syntax
- Wrong import/export style

**Mini practice**
- Export one helper function and import it into another file.

---

## 14. Asynchronous JavaScript

Async code handles tasks that take time (APIs, timers, file operations).

### 14.1 Introduction to Asynchronous Programming
Without async patterns, apps would freeze waiting for responses.

### 14.2 Callbacks

```js
setTimeout(() => {
  console.log("Runs later");
}, 1000);
```

### 14.3 Promises

```js
fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### 14.4 Async and Await

```js
async function loadData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### 14.5 Fetch API

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
```

### 14.6 Handling API Responses

```js
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const post = await response.json();
  return post;
}
```

| Async Style | Readability | Error Handling |
|---|---|---|
| Callback | lower | manual |
| Promise | medium | `.catch()` |
| Async/Await | high | `try/catch` |

**Common mistakes**
- Forgetting `await`
- No error handling
- Assuming every response is JSON

**Mini practice**
- Fetch a TODO from JSONPlaceholder and show title on page.

---

## Quick Revision

| Topic | Core Idea |
|---|---|
| Variables | `const` by default, `let` when reassigning |
| Data Types | Know primitive vs reference |
| Operators | Prefer strict equality `===` |
| Control Flow | Keep conditions readable |
| Loops | Choose loop by use case |
| Functions | Small reusable logic blocks |
| Arrays | `map/filter/reduce` are essential |
| Objects | key-value records with methods |
| DOM | select + update + create + remove |
| Events | listen and react to user actions |
| Forms | validate before submit |
| ES6+ | cleaner syntax + modules |
| Async JS | use async/await with try/catch |

---

## Beginner Practice Roadmap

1. Calculator (operators + functions)
2. To-do app (arrays + DOM + events)
3. Quiz app (control flow + forms)
4. Weather app (fetch + async/await)

Each mini project should include:
- input handling
- validation
- clear UI update
- at least one reusable function

---

## Final Advice

Learn JavaScript by writing code daily, not by only reading.

Use this cycle:
1. Read one topic
2. Type examples manually
3. Change values and test
4. Break code intentionally
5. Fix it with console output and reasoning

If you can explain your code in simple words, you truly understand it.
# Module 3: JavaScript

JavaScript is the programming language of the web. It runs in browsers and on servers (with Node.js), and it powers dynamic user interfaces, API integrations, and application logic.

---

## 1. JavaScript Fundamentals

### 1.1 Introduction to JavaScript

JavaScript is a high-level, interpreted language primarily used to make web pages interactive.

- Add behavior to HTML and CSS
- React to user actions (clicks, typing, scrolling)
- Fetch and display data from APIs
- Build complete frontend and backend applications

### 1.2 How JavaScript Works in the Browser

The browser has:

- **JavaScript Engine** (executes JS code)
- **Web APIs** (DOM, timers, fetch, localStorage)
- **Event Loop** (handles async callbacks)
- **Call Stack + Task Queues** (manage execution order)

### 1.3 Adding JavaScript to HTML

```html
<!-- Inline -->
<button onclick="alert('Clicked!')">Click</button>

<!-- Internal -->
<script>
  console.log("Hello from internal script");
</script>

<!-- External (recommended) -->
<script src="app.js" defer></script>
```

### 1.4 JavaScript Syntax

- Case-sensitive language
- Statements usually end with `;` (optional but recommended)
- Blocks use `{ }`
- Strings use `" "`, `' '`, or template literals `` ` ` ``

### 1.5 Comments in JavaScript

```js
// Single-line comment

/*
  Multi-line comment
*/
```

---

## 2. Variables and Declarations

Variables store data values.

### 2.1 `var`

- Function-scoped
- Can be re-declared and updated
- Hoisted with `undefined`
- Avoid in modern code unless maintaining legacy projects

### 2.2 `let`

- Block-scoped
- Can be updated, cannot be re-declared in same scope
- Best for mutable values

### 2.3 `const`

- Block-scoped
- Must be initialized
- Cannot be reassigned
- Preferred by default

### 2.4 Variable Naming Rules

| Rule | Example |
|---|---|
| Can contain letters, digits, `_`, `$` | `user1`, `_temp`, `$price` |
| Cannot start with digit | `1name` (invalid) |
| Cannot use reserved keywords | `let`, `class`, `return` (invalid as variable names) |
| Case-sensitive | `score` and `Score` are different |

### 2.5 Scope Basics

| Scope Type | Created By | Visibility |
|---|---|---|
| Global | Declared outside functions/blocks | Everywhere |
| Function | Declared with `var` inside function | Inside function only |
| Block | Declared with `let`/`const` in `{}` | Inside block only |

```js
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // Error
// console.log(b); // Error
console.log(c); // 30
```

---

## 3. Data Types

### 3.1 Primitive Data Types

Primitive values are immutable and stored directly.

### 3.2 `String`

```js
const name = "Rohith";
const greeting = `Hello, ${name}`;
```

### 3.3 `Number`

```js
const price = 99.99;
const count = 10;
```

### 3.4 `Boolean`

```js
const isLoggedIn = true;
```

### 3.5 `Null`

Represents intentional absence of value.

```js
const selectedUser = null;
```

### 3.6 `Undefined`

Represents a variable that is declared but not assigned.

```js
let status;
console.log(status); // undefined
```

### 3.7 Non-Primitive Data Types

Objects and arrays are reference types.

### 3.8 Objects

```js
const user = { name: "Ana", age: 24 };
```

### 3.9 Arrays

```js
const skills = ["HTML", "CSS", "JavaScript"];
```

---

## 4. Operators

### Operator Summary

| Category | Operators | Example |
|---|---|---|
| Arithmetic | `+ - * / % **` | `2 + 3` |
| Assignment | `= += -= *= /=` | `x += 2` |
| Comparison | `== === != !== > < >= <=` | `a === b` |
| Logical | `&& \|\| !` | `isAdmin && isActive` |
| Ternary | `condition ? a : b` | `age >= 18 ? "Adult" : "Minor"` |
| Type | `typeof`, `instanceof` | `typeof "abc"` |

### 4.1 Arithmetic Operators

```js
const total = 10 + 5;   // 15
const rem = 10 % 3;     // 1
```

### 4.2 Assignment Operators

```js
let x = 10;
x += 5; // 15
```

### 4.3 Comparison Operators

```js
console.log(5 === "5"); // false
console.log(5 == "5");  // true (type coercion)
```

### 4.4 Logical Operators

```js
const canAccess = isLoggedIn && isVerified;
```

### 4.5 Ternary Operator

```js
const result = score >= 40 ? "Pass" : "Fail";
```

### 4.6 Type Operators

```js
console.log(typeof 123); // "number"
console.log([] instanceof Array); // true
```

---

## 5. Control Flow

### 5.1 `if` Statement

```js
if (temperature > 30) {
  console.log("Hot day");
}
```

### 5.2 `if...else` Statement

```js
if (isMember) {
  discount = 20;
} else {
  discount = 0;
}
```

### 5.3 `else if` Ladder

```js
if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "D";
```

### 5.4 `switch` Statement

```js
switch (day) {
  case "Monday":
    task = "Plan";
    break;
  case "Tuesday":
    task = "Code";
    break;
  default:
    task = "Review";
}
```

### 5.5 Conditional Expressions

Conditional expressions are compact decision patterns, usually using ternary operators.

---

## 6. Loops

### 6.1 `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 6.2 `while` Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 6.3 `do...while` Loop

```js
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 3);
```

### 6.4 `for...of` Loop

Used for iterable values (arrays, strings, maps).

```js
for (const item of ["a", "b", "c"]) {
  console.log(item);
}
```

### 6.5 `for...in` Loop

Used for object keys.

```js
const user = { name: "Mia", age: 21 };
for (const key in user) {
  console.log(key, user[key]);
}
```

### 6.6 `break` and `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop
  console.log(i);
}
```

---

## 7. Functions

### 7.1 Function Declaration

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### 7.2 Function Expressions

```js
const greet = function (name) {
  return `Hello, ${name}`;
};
```

### 7.3 Arrow Functions

```js
const greet = (name) => `Hello, ${name}`;
```

### 7.4 Function Parameters

Parameters are placeholders in function definitions.

### 7.5 Return Values

`return` sends data back to the caller and ends function execution.

### 7.6 Default Parameters

```js
function multiply(a, b = 1) {
  return a * b;
}
```

### 7.7 Rest Parameters

```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
```

---

## 8. Arrays

### 8.1 Creating Arrays

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### 8.2 Accessing Array Elements

```js
console.log(fruits[0]); // Apple
```

### 8.3 Array Methods Basics

| Method | Purpose |
|---|---|
| `push()` | Add item to end |
| `pop()` | Remove item from end |
| `shift()` | Remove first item |
| `unshift()` | Add item to start |
| `includes()` | Check item presence |
| `indexOf()` | Find position |

### 8.4 Iteration Methods

Iteration methods process each element without manual index management.

### 8.5 `map()`

```js
const doubled = [1, 2, 3].map((n) => n * 2);
```

### 8.6 `filter()`

```js
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
```

### 8.7 `reduce()`

```js
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
```

### 8.8 `find()`

```js
const user = users.find((u) => u.id === 2);
```

### 8.9 `forEach()`

```js
fruits.forEach((fruit) => console.log(fruit));
```

---

## 9. Objects

### 9.1 Creating Objects

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
};
```

### 9.2 Object Properties

```js
console.log(car.brand);     // dot notation
console.log(car["model"]);  // bracket notation
```

### 9.3 Object Methods

```js
const user = {
  name: "Sam",
  greet() {
    return `Hi, I am ${this.name}`;
  },
};
```

### 9.4 Nested Objects

```js
const student = {
  name: "Leo",
  marks: { math: 90, science: 88 },
};
```

### 9.5 Object Destructuring

```js
const { name, marks: { math } } = student;
```

---

## 10. DOM Manipulation

### 10.1 Introduction to DOM

DOM (Document Object Model) represents HTML as a tree of nodes.

### 10.2 Selecting Elements

```js
const title = document.getElementById("title");
const btn = document.querySelector(".btn");
const items = document.querySelectorAll("li");
```

### 10.3 Modifying Content

```js
title.textContent = "Updated Title";
```

### 10.4 Modifying Styles

```js
title.style.color = "blue";
title.classList.add("highlight");
```

### 10.5 Creating Elements

```js
const li = document.createElement("li");
li.textContent = "New item";
list.appendChild(li);
```

### 10.6 Removing Elements

```js
li.remove();
```

### 10.7 Traversing DOM

```js
const parent = li.parentElement;
const firstChild = list.firstElementChild;
const next = li.nextElementSibling;
```

---

## 11. Events

### 11.1 Introduction to Events

Events are signals that something happened in the browser.

### 11.2 Event Listeners

```js
button.addEventListener("click", handleClick);
```

### 11.3 Mouse Events

- `click`
- `dblclick`
- `mouseenter`
- `mouseleave`
- `mousemove`

### 11.4 Keyboard Events

- `keydown`
- `keyup`

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

### 11.5 Form Events

- `submit`
- `input`
- `change`
- `focus`
- `blur`

### 11.6 Event Propagation

| Type | Direction | Notes |
|---|---|---|
| Capturing | Top to target | Runs first if enabled |
| Bubbling | Target to top | Default behavior |

```js
child.addEventListener("click", () => console.log("child"));
parent.addEventListener("click", () => console.log("parent"));
```

Use `event.stopPropagation()` to stop bubbling/capturing as needed.

---

## 12. Form Handling

### 12.1 Accessing Form Elements

```js
const form = document.querySelector("#signupForm");
const emailInput = document.querySelector("#email");
```

### 12.2 Reading Input Values

```js
const email = emailInput.value.trim();
```

### 12.3 Form Validation

```js
if (!email.includes("@")) {
  showError("Please enter a valid email");
}
```

### 12.4 Prevent Default Behavior

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // custom submit logic
});
```

---

## 13. Modern JavaScript (ES6+)

### 13.1 Template Literals

```js
const user = "Riya";
const msg = `Welcome, ${user}!`;
```

### 13.2 Destructuring

```js
const person = { name: "Ava", age: 23 };
const { name, age } = person;
```

### 13.3 Spread Operator

```js
const a = [1, 2];
const b = [...a, 3, 4];
```

### 13.4 Rest Operator

```js
function collect(first, ...others) {
  return { first, others };
}
```

### 13.5 Modules (Import/Export)

```js
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

---

## 14. Asynchronous JavaScript

### 14.1 Introduction to Asynchronous Programming

Async programming lets your app continue running while waiting for slow operations (network, file reads, timers).

### 14.2 Callbacks

```js
setTimeout(() => {
  console.log("Executed later");
}, 1000);
```

### 14.3 Promises

```js
fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### 14.4 Async and Await

```js
async function loadData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### 14.5 Fetch API

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
```

### 14.6 Handling API Responses

```js
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const post = await response.json();
  return post;
}
```

---

## Quick Revision Sheet

| Topic | Key Takeaway |
|---|---|
| Variables | Prefer `const`, use `let` when reassigning |
| Equality | Prefer strict equality `===` |
| Loops | Use `for...of` for arrays, `for...in` for object keys |
| Arrays | `map/filter/reduce` are core transformation tools |
| Objects | Use destructuring for cleaner access |
| DOM | Select, modify, create, remove, traverse elements |
| Events | Use `addEventListener`; understand bubbling |
| Async | Prefer `async/await` with `try/catch` |

---

## Practice Tasks

1. Create an array of numbers and return only even numbers using `filter()`.
2. Build a form that validates email and password on submit.
3. Fetch data from a public API and render list items in the DOM.
4. Write a function using rest parameters to calculate total price.
5. Use object destructuring to extract nested values from an API response.

---

## Extended Beginner Handbook (Deep Dive)

This section explains the same syllabus in slower, beginner-first language. If any topic above felt fast, read this part carefully and run each code sample in browser DevTools (`F12`) or Node.js.

### How to Use This Handbook

| Step | What to Do | Why It Helps |
|---|---|---|
| 1 | Read one small topic at a time | Prevents overload |
| 2 | Type the code yourself (do not copy-paste only) | Builds muscle memory |
| 3 | Predict output before running | Improves problem solving |
| 4 | Change values and rerun | Teaches behavior, not memorization |
| 5 | Keep a "mistakes notebook" | Mistakes become future shortcuts |

---

## 1) Fundamentals Deep Dive

### JavaScript in one sentence

JavaScript is the language that tells web pages **how to behave**.

- HTML = structure (`what exists`)
- CSS = style (`how it looks`)
- JavaScript = behavior (`what it does`)

### Mental model: "Restaurant"

| Web Concept | Restaurant Analogy |
|---|---|
| HTML | Tables, chairs, kitchen layout |
| CSS | Colors, lights, decorations |
| JavaScript | Waiters taking orders and serving food |

### Script loading: `defer` vs normal

```html
<!-- Good default for beginners -->
<script src="app.js" defer></script>
```

Without `defer`, script may run before HTML is ready. With `defer`, browser builds HTML first, then runs JS.

### Beginner mistakes

| Mistake | Why It Happens | Fix |
|---|---|---|
| "my button is null" | Script ran before element loaded | Use `defer` |
| Typing `Console.log` | JS is case-sensitive | Use `console.log` |
| Missing quote or bracket | Syntax typo | Format code and check pairs |

---

## 2) Variables Deep Dive

### Think of variables as labeled boxes

```js
let city = "Hyderabad";
city = "Bengaluru"; // value changed

const country = "India";
// country = "USA"; // Error: cannot reassign const
```

### `let` vs `const` decision rule

1. Start with `const`
2. If you need to reassign later, use `let`
3. Avoid `var` for modern code

### `const` with arrays/objects confusion

```js
const user = { name: "Ava" };
user.name = "Mia"; // allowed: object content changed
// user = { name: "Leo" }; // not allowed: variable reassignment
```

### Hoisting explained simply

- JavaScript reads declarations first.
- `var` is hoisted and initialized as `undefined`.
- `let`/`const` are hoisted too, but unavailable before declaration (temporal dead zone).

```js
console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;
```

---

## 3) Data Types Deep Dive

### Why data types matter

Computers treat text, numbers, booleans, arrays, and objects differently. Wrong type = wrong output.

```js
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (numeric conversion)
```

### Primitive vs Reference

| Type Kind | Stored As | Copy Behavior |
|---|---|---|
| Primitive | Actual value | Independent copy |
| Reference | Memory address | Shared reference |

```js
let x = 10;
let y = x;
y = 50;
console.log(x); // 10

const a = { score: 10 };
const b = a;
b.score = 99;
console.log(a.score); // 99
```

### `null` vs `undefined`

| Value | Meaning |
|---|---|
| `undefined` | No value assigned yet |
| `null` | Intentionally empty |

Use `null` when you intentionally want to reset value.

---

## 4) Operators Deep Dive

### Equality best practice

Always prefer strict checks:

```js
if (input === 5) {
  // safer
}
```

`==` can convert types automatically and create surprise bugs.

### Truthy and Falsy values

Falsy values in JS:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

```js
if ("hello") console.log("runs");
if (0) console.log("does not run");
```

---

## 5) Control Flow Deep Dive

### When to use `if` and when to use `switch`

| Use Case | Better Choice |
|---|---|
| Range checks (`score > 80`) | `if...else` |
| One variable, many exact values | `switch` |

### Guard clauses (cleaner beginner style)

```js
function getAccessMessage(isLoggedIn, isVerified) {
  if (!isLoggedIn) return "Please log in first";
  if (!isVerified) return "Verify your account";
  return "Access granted";
}
```

This avoids deeply nested `if` blocks.

---

## 6) Loops Deep Dive

### Pick the right loop

| Scenario | Loop |
|---|---|
| Count from 1 to 100 | `for` |
| Continue while condition true | `while` |
| Run at least once | `do...while` |
| Iterate array values | `for...of` |
| Iterate object keys | `for...in` |

### Beginner warning: infinite loops

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++; // do not forget this
}
```

If you forget `i++`, loop may never end.

---

## 7) Functions Deep Dive

### Why functions are important

- Reuse logic
- Reduce repetition
- Make code readable
- Easier testing and debugging

### Function anatomy

```js
function area(width, height) {
  const result = width * height;
  return result;
}
```

| Part | Meaning |
|---|---|
| `function area` | Function name |
| `(width, height)` | Parameters |
| `width * height` | Logic |
| `return result` | Output |

### Default + rest in real usage

```js
function createUser(name, role = "student", ...tags) {
  return { name, role, tags };
}

console.log(createUser("Ria"));
console.log(createUser("Arun", "admin", "active", "mentor"));
```

---

## 8) Arrays Deep Dive

### Most-used methods with beginner examples

```js
const marks = [45, 72, 88, 91, 36];

const passed = marks.filter((m) => m >= 40); // [45, 72, 88, 91]
const grades = marks.map((m) => (m >= 75 ? "A/B" : "C")); 
const total = marks.reduce((sum, m) => sum + m, 0); // 332
const topper = marks.find((m) => m > 90); // 91
```

### `map` vs `forEach`

| Method | Returns new array? | Use For |
|---|---|---|
| `map` | Yes | Transforming data |
| `forEach` | No | Side effects (logging, DOM update) |

---

## 9) Objects Deep Dive

### Object as "real world entity"

```js
const product = {
  id: 101,
  name: "Keyboard",
  price: 1499,
  inStock: true,
  getLabel() {
    return `${this.name} - Rs.${this.price}`;
  },
};
```

### Dot vs bracket notation

```js
console.log(product.name); // dot notation
console.log(product["price"]); // bracket notation

const key = "inStock";
console.log(product[key]); // dynamic key access
```

### Destructuring with defaults

```js
const { name, discount = 0 } = product;
console.log(name, discount);
```

---

## 10) DOM Deep Dive

### Real beginner workflow

1. Select element
2. Listen to event
3. Read/modify value
4. Update UI

```html
<input id="taskInput" />
<button id="addBtn">Add</button>
<ul id="taskList"></ul>
```

```js
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  taskList.appendChild(li);

  taskInput.value = "";
});
```

### DOM mistakes checklist

- Wrong selector (`#id` vs `.class`)
- Script not loaded with `defer`
- Trying to use variable before selecting element

---

## 11) Events Deep Dive

### Event object basics

```js
button.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // clicked element
});
```

### Propagation example

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```js
document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent clicked");
});

document.querySelector("#child").addEventListener("click", (event) => {
  console.log("child clicked");
  event.stopPropagation(); // parent won't run
});
```

---

## 12) Form Handling Deep Dive

### Practical form pattern

```js
const form = document.querySelector("#registerForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const errors = [];
  if (!emailValue.includes("@")) errors.push("Email is invalid.");
  if (passwordValue.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length) {
    output.textContent = errors.join(" ");
    output.style.color = "crimson";
    return;
  }

  output.textContent = "Form submitted successfully!";
  output.style.color = "green";
});
```

### Validation table

| Field | Basic Rule |
|---|---|
| Name | Not empty |
| Email | Contains `@` and `.` |
| Password | Minimum length (6 or 8) |
| Mobile | Digits only, fixed length |

---

## 13) ES6+ Deep Dive

### Template literals vs old style

```js
const user = "Nina";
const oldWay = "Welcome " + user + "!";
const newWay = `Welcome ${user}!`;
```

### Spread for cloning arrays/objects

```js
const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log(original); // [1, 2, 3]
console.log(clone); // [1, 2, 3, 4]
```

### Modules intuition

| Concept | Meaning |
|---|---|
| `export` | Make code available outside file |
| `import` | Use exported code in another file |

This keeps project files clean and reusable.

---

## 14) Asynchronous JavaScript Deep Dive

### Why async exists

Network calls take time. If JavaScript waits for each call synchronously, app freezes. Async lets app continue.

### Callback to Promise to Async/Await

| Style | Readability | Error Handling |
|---|---|---|
| Callback | Low for nested flows | Hard with deep nesting |
| Promise (`.then`) | Better | `.catch` |
| Async/Await | Best for beginners | `try/catch` |

### Full fetch example with loading + error

```js
const statusEl = document.querySelector("#status");

async function loadTodo() {
  statusEl.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const todo = await response.json();
    statusEl.textContent = `Todo: ${todo.title}`;
  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
  }
}

loadTodo();
```

---

## Beginner Project Path (Recommended)

Build these in order:

1. **Calculator** (variables, operators, functions)
2. **To-do App** (arrays, objects, DOM, events)
3. **Quiz App** (conditions, loops, forms)
4. **Weather App** (fetch API, async/await)

### Skills gained per mini-project

| Project | Core Skills |
|---|---|
| Calculator | Input handling, arithmetic logic |
| To-do App | DOM updates, arrays, event listeners |
| Quiz App | Control flow, score tracking, validation |
| Weather App | API requests, loading/error UI states |

---

## Common Beginner Bugs and Fixes

| Symptom | Likely Cause | Quick Fix |
|---|---|---|
| `undefined` in console | Wrong variable name or missing assignment | Check spelling and initialization |
| Button click not working | Wrong selector or script load timing | Use `defer` and verify selector |
| `NaN` result | String used in arithmetic | Convert with `Number(value)` |
| Loop never ends | Missing increment/update | Update loop variable |
| API fails silently | No error handling | Add `try/catch` and check `response.ok` |

---

## Self-Assessment Checklist

Mark each when confident:

- [ ] I can explain difference between `let`, `const`, and `var`.
- [ ] I can use `map`, `filter`, `reduce`, and explain each.
- [ ] I can build a form with validation and `preventDefault()`.
- [ ] I can add event listeners and understand bubbling.
- [ ] I can call an API with `fetch` using `async/await`.
- [ ] I can debug common JS errors from console messages.

---

## Next Step (After This Module)

After finishing this module, move to:

1. Advanced DOM patterns and component thinking
2. Error handling and debugging workflow
3. ES modules + project folder structure
4. Intro to frameworks (React) once core JS is strong

---

## 1. JavaScript Fundamentals - Detailed Explanation

When beginners first see JavaScript, they usually think "it is only for button clicks." That is true at the beginning, but JavaScript is much larger. It is the language that handles logic in modern web applications: authentication flow, shopping cart updates, data fetching, notifications, charts, chat updates, and much more. In simple words, HTML creates content, CSS styles content, and JavaScript gives behavior to content.

In the browser, JavaScript does not run randomly. The browser first reads and parses HTML, creates a DOM tree, then loads CSS, and executes JavaScript. If your script runs before an element exists, you may get errors like "Cannot read properties of null." That is why loading strategy matters and why `defer` is a safe default for beginners.

A beginner should also know that JavaScript is event-driven in the browser. This means your code mostly reacts to events: click, input, submit, load, scroll, keydown, etc. You do not always "run everything once." Instead, you set up event listeners, and JavaScript executes those functions when the event happens.

## 2. Variables and Declarations - Detailed Explanation

A variable is a named storage location in memory. Think of it as a labeled container where you keep data for later use. The label is the variable name, and the content is the value. If your code needs to remember something (user name, score, price, status), you use variables.

The confusion between `var`, `let`, and `const` is one of the biggest beginner hurdles. The practical rule is simple: use `const` by default, use `let` only when reassignment is required, and avoid `var` unless you are reading old code. This rule alone prevents many bugs.

Scope is equally important. Scope answers the question: "Where can this variable be accessed?" If a variable is block-scoped, you cannot use it outside that block. Many bugs happen when beginners assume a variable exists everywhere. Understanding scope early saves time in debugging.

## 3. Data Types - Detailed Explanation

Data types tell JavaScript what kind of value is stored. If you store `"25"` (string) and `25` (number), they look similar but behave differently. JavaScript can sometimes auto-convert values, and that flexibility is both powerful and dangerous for beginners.

Primitive types (`string`, `number`, `boolean`, `null`, `undefined`) are simple values. Objects and arrays are reference values. This reference behavior often surprises beginners: when two variables point to the same object, updating one affects the other. This is not a bug; it is how reference types work.

A very common interview and practical question is `null` vs `undefined`. `undefined` usually means "not assigned yet." `null` usually means "intentionally empty." In good codebases, developers use `null` to express intention clearly.

## 4. Operators - Detailed Explanation

Operators are symbols that perform actions: add numbers, compare values, combine conditions, assign results, and more. Beginners often learn syntax but miss behavior. For example, `==` and `===` both compare, but strict equality (`===`) also checks type. That is why modern JavaScript style prefers `===` and `!==`.

Logical operators (`&&`, `||`, `!`) are not only for `if` statements; they are also used for default values and short-circuit logic. Ternary operators are useful for short, readable decisions, but if the expression becomes hard to read, switch back to `if...else`.

Understanding operator precedence is also useful. If an expression is complex, use parentheses to make intent explicit. Readability is more important than clever one-liners.

## 5. Control Flow - Detailed Explanation

Control flow defines the route your program takes. Without control flow, every line would run in strict order with no decision making. With `if`, `else if`, `else`, and `switch`, you can write logic that adapts to conditions.

As a beginner, you should aim for clear conditions and small branches. Deeply nested `if` blocks quickly become hard to read. A better style is to use guard clauses and return early when possible. This keeps code flatter and easier to reason about.

Control flow is not just technical; it is problem solving translated into code. You first think of scenarios ("if valid, continue; if invalid, show error"), then map those scenarios to statements.

## 6. Loops - Detailed Explanation

Loops are repetition tools. Instead of writing the same line 100 times, you write loop logic once. The key beginner skill is choosing the right loop for the right problem:

- Use `for` when index/count matters.
- Use `for...of` when you care about item values in arrays.
- Use `for...in` for object keys.
- Use `while` when repetition depends on an uncertain condition.

Most loop errors come from two sources: wrong condition and missing update step. If condition never becomes false, loop becomes infinite. Always test loops with small data first.

## 7. Functions - Detailed Explanation

Functions are reusable units of logic. If loops handle repetition of execution, functions handle repetition of logic. Good functions do one clear task and have clear input and output.

A function becomes easier to maintain when:

1. Name describes purpose (`calculateTotal`, `validateEmail`).
2. Parameters are explicit.
3. Return value is predictable.
4. Side effects are minimized (or clearly documented).

Arrow functions are concise and widely used in modern JS, especially with array methods and callbacks. But beginners should still understand normal function declarations because both forms appear in real projects.

## 8. Arrays - Detailed Explanation

Arrays store ordered collections. Order matters, and each item has an index. Beginners often start with basic methods (`push`, `pop`) and then move to transformation methods (`map`, `filter`, `reduce`), which are core to modern JavaScript programming.

`map` transforms every item and returns a new array. `filter` keeps only matching items. `reduce` combines array values into one output (sum, object, grouped data, etc.). Mastering these methods improves both code quality and interview readiness.

Another useful beginner concept: many array methods return **new arrays**, they do not change the original (except some mutating methods like `push`, `pop`, `splice`). Knowing which methods mutate helps prevent accidental bugs.

## 9. Objects - Detailed Explanation

Objects represent structured data with key-value pairs. In real applications, most data is object-shaped: user profiles, product info, settings, API responses, form state, etc. If arrays are lists, objects are records.

Methods inside objects let data and behavior stay together. This is the bridge to object-oriented thinking. Destructuring is a modern feature that makes object access cleaner and avoids repetitive dot notation.

Nested objects are common in API responses. Beginners should practice safely reading nested properties and handling missing values to avoid runtime errors.

## 10. DOM Manipulation - Detailed Explanation

DOM manipulation is the point where JavaScript visibly changes a web page. This is where learning becomes exciting for beginners because every line can produce visible results.

The practical cycle is:

1. Select an element
2. Read or change content/value/style
3. Attach events
4. Create/remove nodes when needed

A common beginner mistake is mixing too much logic directly in event callbacks. As your project grows, move reusable logic into separate functions to keep event handlers short and clean.

## 11. Events - Detailed Explanation

Events are browser notifications that something happened. Your code listens and responds. Event-driven thinking is essential for frontend development because user behavior is unpredictable: users may click quickly, submit empty forms, press unexpected keys, etc.

Event propagation explains how events travel through the DOM tree. Understanding bubbling and capturing helps you debug cases where multiple handlers trigger unexpectedly. `stopPropagation()` should be used intentionally, not everywhere.

The event object (`event`) carries useful information like target element, key pressed, mouse coordinates, and more. Learning to inspect this object in console is a strong debugging habit.

## 12. Form Handling - Detailed Explanation

Forms are where user input enters your system. Good form handling improves user experience and data quality. A strong beginner approach includes:

- Read values safely (`trim` text fields)
- Validate input before sending
- Show clear user-friendly errors
- Prevent default submit when custom behavior is needed

Validation should be immediate and descriptive. Instead of "Invalid input," show "Password must be at least 8 characters." Better messages reduce user frustration and support requests.

## 13. Modern JavaScript (ES6+) - Detailed Explanation

ES6+ features are not just "new syntax"; they improve readability, modularity, and developer productivity. Template literals make string building cleaner. Destructuring removes repetitive property access. Spread/rest operators simplify object/array operations. Modules allow clean separation of code across files.

Beginners should not memorize every ES feature at once. Start with the most frequent ones:

1. Template literals
2. Destructuring
3. Spread/rest
4. Import/export

Use them regularly in mini projects. Repetition builds fluency.

## 14. Asynchronous JavaScript - Detailed Explanation

Asynchronous programming is where many learners feel stuck, but the core idea is simple: some operations take time, and JavaScript should not freeze while waiting. Network requests, timers, and file operations are common async tasks.

Historically, callbacks were used first, then promises, and now `async/await` is the most readable style for many use cases. `async/await` is built on promises, so learning both is valuable.

Error handling in async code is essential. Always assume requests can fail (network outage, server issue, bad response). Use `try/catch`, check `response.ok`, and provide fallback UI states like loading and error messages.

## Final Advice for Beginners

If you feel slow, that is normal. JavaScript has many concepts, and understanding grows through repeated practice, not one-time reading. Focus on clarity over speed.

Use this routine:

1. Read one topic
2. Write 5-10 lines from memory
3. Break it intentionally
4. Fix it using console/debugging
5. Build one tiny feature

Progress in JavaScript is not about finishing chapters quickly. It is about being able to explain why your code works and what happens when it fails.
