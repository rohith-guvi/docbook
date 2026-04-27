# 13. Modern JavaScript (ES6+)

Modern JavaScript (ES6 and later versions) introduced cleaner syntax and powerful features that make code:
- shorter
- easier to read
- easier to maintain
- less error-prone

In real projects, ES6+ features are used everywhere in frontend and backend JavaScript.

This section covers:
- template literals
- destructuring
- spread operator
- rest operator
- modules (`import` / `export`)

---

## 13.1 Template Literals

Template literals are strings written using backticks `` ` ` ``.

They are useful for:
- string interpolation (inserting variables)
- multi-line strings
- cleaner formatting compared to `+` concatenation

### Basic syntax

```js
const name = "Rohith";
const message = `Hello, ${name}`;
console.log(message); // Hello, Rohith
```

### Old style vs template literal

```js
const user = "Ava";

const oldWay = "Welcome " + user + " to JavaScript!";
const newWay = `Welcome ${user} to JavaScript!`;

console.log(oldWay);
console.log(newWay);
```

### Multi-line string

```js
const note = `Line 1
Line 2
Line 3`;
```

### Expression inside template literal

```js
const a = 10;
const b = 5;
console.log(`Sum = ${a + b}`); // Sum = 15
```

### Why it matters

Template literals are very common in:
- UI messages
- dynamic HTML strings
- logging/debug output

---

## 13.2 Destructuring

Destructuring is a shortcut syntax to extract values from objects and arrays.

It reduces repetitive code and improves readability.

### Object destructuring

```js
const user = {
  name: "Riya",
  age: 22,
  city: "Pune",
};

const { name, age } = user;
console.log(name); // Riya
console.log(age);  // 22
```

### Rename while destructuring

```js
const { name: fullName } = user;
console.log(fullName); // Riya
```

### Default values in destructuring

```js
const { role = "student" } = user;
console.log(role); // student
```

### Array destructuring

```js
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;

console.log(first);  // Red
console.log(second); // Green
```

### Skip values in array destructuring

```js
const nums = [10, 20, 30, 40];
const [a, , c] = nums;
console.log(a, c); // 10 30
```

### Nested destructuring

```js
const student = {
  id: 1,
  marks: {
    math: 90,
    science: 88,
  },
};

const {
  marks: { math },
} = student;

console.log(math); // 90
```

### Why it matters

Destructuring is heavily used in:
- function parameters
- React props
- API response parsing

---

## 13.3 Spread Operator

Spread operator uses `...` to expand values.

Used with:
- arrays
- objects
- function calls

### Spread with arrays

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1,2,3,4]
```

### Clone array

```js
const original = [10, 20, 30];
const copy = [...original];
```

### Spread with objects

```js
const user = { name: "Ava", age: 21 };
const updatedUser = { ...user, city: "Hyderabad" };

console.log(updatedUser);
```

### Overwrite properties while spreading

```js
const settings = { theme: "light", fontSize: 14 };
const newSettings = { ...settings, theme: "dark" };
```

### Spread in function call

```js
const values = [5, 9, 2];
console.log(Math.max(...values)); // 9
```

### Why it matters

Spread is commonly used for:
- immutable updates
- cloning arrays/objects
- combining data

---

## 13.4 Rest Operator

Rest operator also uses `...`, but collects multiple values into one variable.

Spread = expands  
Rest = collects

### Rest in function parameters

```js
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3));    // 6
console.log(sumAll(5, 10, 15));  // 30
```

### Rest with normal parameters

```js
function printOrder(customer, ...items) {
  console.log(customer, items);
}

printOrder("Riya", "Pizza", "Juice", "Cake");
```

### Rest in object destructuring

```js
const user = {
  id: 1,
  name: "Mia",
  role: "student",
  city: "Pune",
};

const { id, ...otherDetails } = user;

console.log(id); // 1
console.log(otherDetails); // { name: "Mia", role: "student", city: "Pune" }
```

### Rule

Rest parameter must be the last parameter.

```js
// function test(...nums, x) {} // invalid
```

---

## 13.5 Modules (Import/Export)

Modules let you split code into separate files and reuse it cleanly.

Without modules, all code stays in one large file, which becomes hard to maintain.

### Why modules are important

- better structure
- easier testing
- reusable functions/components
- clear separation of responsibilities

### Named export/import

#### `math.js`

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### `app.js`

```js
import { add, subtract } from "./math.js";

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5
```

### Default export/import

#### `greet.js`

```js
export default function greet(name) {
  return `Hello, ${name}`;
}
```

#### `main.js`

```js
import greet from "./greet.js";
console.log(greet("Rohith"));
```

### Import with alias

```js
import { add as sum } from "./math.js";
console.log(sum(2, 3)); // 5
```

### Import all

```js
import * as math from "./math.js";
console.log(math.add(4, 2)); // 6
```

### Module notes for beginners

1. Browser module scripts need `type="module"` in HTML.
2. Paths must be correct (`./file.js`).
3. Named import names must match named exports.

---

## Spread vs Rest (Quick Comparison)

| Feature | Spread (`...`) | Rest (`...`) |
|---|---|---|
| Purpose | expand values | collect values |
| Common use | merge/clone arrays & objects | variable arguments |
| Where used | array/object literals, function calls | function params, destructuring |

---

## Common ES6+ Mistakes

1. Using quotes instead of backticks for template interpolation.
2. Confusing spread and rest (same symbol, different purpose).
3. Wrong import path or missing file extension in some setups.
4. Mixing up named import and default import syntax.
5. Overwriting object keys unintentionally during spread.

---

## Quick Recap

- Template literals make dynamic strings easier.
- Destructuring extracts values from objects/arrays cleanly.
- Spread operator expands values for merge/clone operations.
- Rest operator collects multiple values into one variable.
- Modules (`import`/`export`) organize and reuse code across files.

Modern JavaScript features are not just syntax upgrades - they improve clarity, scalability, and maintainability in real projects.
