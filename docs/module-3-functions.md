# 7. Functions

Functions are reusable blocks of code that perform a specific task.

Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever needed.

Functions are used everywhere in JavaScript:
- validating form input
- calculating totals
- formatting data
- handling button clicks
- fetching API data

If variables store data, functions define behavior.

---

## 7.1 Function Declaration

A function declaration defines a named function using the `function` keyword.

### Syntax

```js
function functionName(parameters) {
  // function body
}
```

### Example

```js
function greetUser(name) {
  console.log(`Hello, ${name}`);
}

greetUser("Rohith"); // Hello, Rohith
```

### Why it is useful

- readable and explicit
- can be reused many times
- hoisted (can be called before declaration in code order)

### Hoisting behavior

```js
sayHello(); // Works

function sayHello() {
  console.log("Hi");
}
```

---

## 7.2 Function Expressions

A function expression stores a function inside a variable.

### Syntax

```js
const fnName = function (parameters) {
  // body
};
```

### Example

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(4, 6)); // 10
```

### Key difference from declaration

Function expressions are not fully hoisted like function declarations.

```js
// console.log(subtract(10, 2)); // Error if called before definition

const subtract = function (a, b) {
  return a - b;
};
```

### Why use function expressions

- useful for assigning functions dynamically
- useful in callbacks and higher-order functions

---

## 7.3 Arrow Functions

Arrow functions are a shorter syntax for writing functions.

### Syntax

```js
const fnName = (params) => {
  // body
};
```

### Basic Example

```js
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 5)); // 15
```

### Short form (single expression)

```js
const square = (n) => n * n;
console.log(square(4)); // 16
```

### Single parameter shortcut

```js
const greet = (name) => `Hi, ${name}`;
```

### Important `this` note

Arrow functions do **not** create their own `this`; they inherit from surrounding scope.  
This is useful in callbacks but can be confusing in object methods.

```js
const user = {
  name: "Ava",
  greet: () => {
    // `this` is not the user object here
    console.log(this.name);
  },
};
```

For object methods, regular function syntax is often safer.

---

## 7.4 Function Parameters

Parameters are placeholders in function definition.  
Arguments are actual values passed while calling function.

### Example

```js
function introduce(name, age) { // name, age -> parameters
  console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Riya", 21); // "Riya", 21 -> arguments
```

### Why parameters matter

- make functions reusable with different input values
- avoid hardcoded logic

### Parameter order matters

```js
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(2, 10)); // 0.2
```

---

## 7.5 Return Values

`return` sends a value back from a function to where it was called.

### Example

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 7);
console.log(result); // 12
```

### Why return is important

- lets function output be reused
- makes function composable with other logic

### Function without return

If no `return` is written, function returns `undefined`.

```js
function logMessage(msg) {
  console.log(msg);
}

const value = logMessage("Hello");
console.log(value); // undefined
```

### Early return pattern

```js
function checkAge(age) {
  if (age < 18) return "Not eligible";
  return "Eligible";
}
```

This keeps logic clean and avoids deep nesting.

---

## 7.6 Default Parameters

Default parameters provide fallback values when arguments are missing or `undefined`.

### Syntax

```js
function fn(param = defaultValue) {
  // body
}
```

### Example

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet("Rohith")); // Hello, Rohith
console.log(greet());         // Hello, Guest
```

### Multiple defaults

```js
function createUser(name = "Unknown", role = "student") {
  return `${name} - ${role}`;
}
```

### Why defaults help

- avoids `undefined` issues
- reduces manual checks inside function
- improves function robustness

---

## 7.7 Rest Parameters

Rest parameters collect multiple arguments into a single array.

### Syntax

```js
function fn(...restParam) {
  // restParam is an array
}
```

### Example

```js
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(2, 4));       // 6
console.log(sumAll(1, 2, 3, 4)); // 10
```

### Rest with normal parameters

```js
function orderSummary(customerName, ...items) {
  return `${customerName} ordered ${items.length} items`;
}

console.log(orderSummary("Ava", "Pizza", "Juice", "Cake"));
```

### Rule

Rest parameter must be the last parameter.

```js
// function test(...nums, last) {} // invalid
```

---

## Function Type Comparison

| Type | Syntax Style | Hoisted | Best For |
|---|---|---|---|
| Function Declaration | `function fn(){}` | Yes | general reusable functions |
| Function Expression | `const fn = function(){}` | No (usable after assignment) | dynamic assignment/callback patterns |
| Arrow Function | `const fn = () => {}` | No (usable after assignment) | concise callbacks, short utilities |

---

## Common Mistakes in Functions

1. Forgetting to call function (`greet` vs `greet()`).
2. Forgetting `return` when value is expected.
3. Confusing parameters and arguments.
4. Using arrow functions incorrectly with `this`.
5. Passing arguments in wrong order.

---

## Quick Recap

- Functions help avoid repetition and improve code structure.
- Function declaration, expression, and arrow functions are three common styles.
- Parameters accept input; return sends output.
- Default parameters handle missing values.
- Rest parameters handle variable number of inputs.

Strong function fundamentals make later topics (arrays, objects, async, APIs, React) much easier.
