# Module 3: JavaScript (Complete)`r`n`r`nThis file combines all Module 3 sub-modules in sequence.`r`n

---


# 1. JavaScript Fundamentals

JavaScript is the programming language that brings web pages to life.

If HTML gives structure and CSS gives style, JavaScript gives behavior.

With JavaScript, you can:
- respond to clicks and keyboard input
- validate forms
- update page content dynamically
- fetch data from APIs
- build complete frontend and backend applications

This section covers the most important starting concepts every beginner should understand.

---

## 1.1 Introduction to JavaScript

JavaScript is a high-level, interpreted language mainly used for web development.

### Why JavaScript is important

JavaScript runs in all modern browsers and is one of the core technologies of the web.

Web stack basics:
- HTML -> structure
- CSS -> presentation
- JavaScript -> interaction and logic

### Where JavaScript is used

1. **Frontend (Browser)**  
   Interactive UI, animations, validation, dynamic updates
2. **Backend (Node.js)**  
   APIs, server logic, database interaction
3. **Mobile/Desktop apps**  
   Through frameworks like React Native, Electron, etc.

### Real-world examples

- clicking "Add to Cart" updates quantity instantly
- login form checks input before submit
- weather app fetches live weather data

### JavaScript evolution

JavaScript keeps improving through ECMAScript (ES) versions.

- ES5: older baseline
- ES6+ (modern JS): `let`, `const`, arrow functions, classes, modules, etc.

---

## 1.2 How JavaScript Works in the Browser

To use JavaScript effectively, it helps to know what happens inside the browser.

### Core components

| Component | Role |
|---|---|
| JavaScript Engine | Executes JS code (example: V8 in Chrome) |
| Call Stack | Tracks currently running functions |
| Web APIs | Browser features like DOM, timers, fetch |
| Callback Queue | Stores callbacks waiting to run |
| Event Loop | Moves callbacks to stack when stack is free |

### Simple execution flow

1. Browser loads HTML and builds DOM.
2. CSS is parsed and applied.
3. JavaScript runs line by line (synchronous code).
4. Async tasks (timers/fetch/events) are handled via Web APIs and event loop.

### Synchronous vs asynchronous

#### Synchronous example

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:
- A
- B
- C

#### Asynchronous example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

console.log("End");
```

Output:
- Start
- End
- Inside timeout

Even with `0` delay, callback runs later through the event loop.

### Why beginners should care

Understanding this model helps debug:
- why some code runs "later"
- why UI can still respond while waiting for API
- why callback order can differ from code order

---

## 1.3 Adding JavaScript to HTML

There are 3 main ways to include JavaScript in HTML.

### 1) Inline JavaScript

```html
<button onclick="alert('Clicked!')">Click</button>
```

Use only for tiny demos.  
Not recommended for larger projects because it mixes HTML and JS logic.

### 2) Internal JavaScript

```html
<script>
  console.log("Internal script");
</script>
```

Useful for small pages and quick experiments.

### 3) External JavaScript (recommended)

```html
<script src="app.js" defer></script>
```

Best for real projects because:
- cleaner separation of concerns
- easier maintenance
- reusable across pages

### `defer` and `async`

| Attribute | Behavior |
|---|---|
| `defer` | downloads in parallel, runs after HTML parsing |
| `async` | downloads in parallel, runs as soon as downloaded |

For beginners, `defer` is usually safer when manipulating DOM.

### Typical project structure

```text
project/
  index.html
  styles.css
  app.js
```

---

## 1.4 JavaScript Syntax

Syntax means the rules for writing valid JavaScript code.

### Basic syntax example

```js
let name = "Rohith";
const age = 21;

if (age >= 18) {
  console.log(`${name} is an adult`);
}
```

### Important syntax rules

1. JavaScript is **case-sensitive**.
   - `myVar` and `myvar` are different.
2. Statements are often ended with semicolon `;` (optional but recommended).
3. Code blocks use curly braces `{}`.
4. Strings use `'...'`, `"..."`, or `` `...` ``.
5. Variable names cannot start with numbers.

### Identifiers and keywords

- **Identifier**: custom name (`totalPrice`, `userName`)
- **Keyword**: reserved word (`if`, `let`, `const`, `return`)

### Whitespace and formatting

JavaScript ignores most extra spaces/newlines, but clean formatting improves readability.

Bad:

```js
if(age>=18){console.log("Adult")}
```

Better:

```js
if (age >= 18) {
  console.log("Adult");
}
```

### Common syntax errors

1. Missing `}` or `)`
2. Missing quote in string
3. Typo in keyword (`fuction` instead of `function`)
4. Using reserved keyword as variable name

---

## 1.5 Comments in JavaScript

Comments are notes in code that JavaScript ignores during execution.

They are used to:
- explain logic
- leave reminders
- temporarily disable code while debugging

### Single-line comment

```js
// This is a single-line comment
const tax = 18;
```

### Multi-line comment

```js
/*
  This is a
  multi-line comment
*/
const country = "India";
```

### Good comment practices

1. Explain **why**, not obvious **what**.
2. Keep comments short and relevant.
3. Update comments when code changes.

Good:

```js
// Use fallback role to avoid undefined access in dashboard
const role = userRole || "guest";
```

Not useful:

```js
// Set x to 10
const x = 10;
```

### Commenting out code for debugging

```js
// console.log("Debug value:", user);
```

Use temporary comments carefully; remove unused debug code later.

---

## Common Beginner Mistakes in Fundamentals

1. Running script before DOM is ready (fixed with `defer`).
2. Confusing synchronous and asynchronous behavior.
3. Case-sensitivity mistakes (`Console.log` instead of `console.log`).
4. Missing brackets/quotes leading to syntax errors.
5. Overusing inline JavaScript instead of external files.

---

## Quick Recap

- JavaScript adds behavior and logic to web pages.
- Browser runs JS using engine + event loop model.
- Best practice is external JS file with `defer`.
- Syntax rules and formatting are essential for error-free code.
- Comments help explain intent and improve maintainability.

Strong fundamentals make all later topics (variables, functions, DOM, async) much easier to learn.

---


# 2. Variables and Declarations

Variables are one of the most important concepts in JavaScript.  
If you do not understand variables clearly, almost every next topic (conditions, loops, functions, DOM, APIs) becomes difficult.

Think of a variable as:
- a **named box** in memory
- where you store a value
- and later read or update that value

Example:

```js
let age = 20;
age = 21;
console.log(age); // 21
```

Here:
- `age` is the variable name
- `20` is the initial value
- `21` is the updated value

---

## 2.1 `var`

`var` is the old way to declare variables in JavaScript (before ES6).  
You will still see it in legacy code, interview questions, and older tutorials.

### Basic Syntax

```js
var city = "Hyderabad";
console.log(city); // Hyderabad
```

### Characteristics of `var`

1. **Function-scoped**  
   If declared inside a function, it is available anywhere inside that function.
2. **Not block-scoped**  
   If declared inside `if` or `for`, it still leaks outside that block.
3. **Can be re-declared** in same scope.
4. **Can be reassigned**.
5. **Hoisted** and initialized as `undefined`.

### Example: Not Block Scoped

```js
if (true) {
  var message = "Hello";
}

console.log(message); // Hello
```

Many beginners expect an error here, but `var` leaks out of block.

### Example: Re-declaration Allowed

```js
var score = 50;
var score = 90; // allowed
console.log(score); // 90
```

### Example: Hoisting with `var`

```js
console.log(product); // undefined (not error)
var product = "Laptop";
```

JavaScript moves declaration to top internally:

```js
var product;
console.log(product); // undefined
product = "Laptop";
```

### Why `var` is risky for beginners

- hard-to-track scope behavior
- accidental re-declaration
- hoisting confusion

### When to use `var`

In modern code, generally **avoid** it.  
Use only when maintaining legacy codebases.

---

## 2.2 `let`

`let` was introduced in ES6 and is the preferred choice for values that must change.

### Basic Syntax

```js
let count = 1;
count = 2; // allowed
console.log(count); // 2
```

### Characteristics of `let`

1. **Block-scoped**
2. **Can be reassigned**
3. **Cannot be re-declared** in the same scope
4. Hoisted but in **Temporal Dead Zone (TDZ)** before declaration

### Example: Block Scope

```js
if (true) {
  let language = "JavaScript";
  console.log(language); // JavaScript
}

// console.log(language); // ReferenceError
```

### Example: Re-declaration Error

```js
let price = 100;
// let price = 200; // SyntaxError
price = 200; // valid reassignment
```

### Example: TDZ Behavior

```js
// console.log(user); // ReferenceError
let user = "Rohith";
```

With `let`, accessing before declaration is an error, not `undefined`.

### Best use case for `let`

Use `let` when value changes:
- counters in loops
- form values that update
- toggles (`isOpen = true/false`)

---

## 2.3 `const`

`const` is the best default choice in modern JavaScript.

### Basic Syntax

```js
const appName = "Doc Book";
console.log(appName); // Doc Book
```

### Characteristics of `const`

1. **Block-scoped**
2. **Must be initialized** at declaration
3. **Cannot be reassigned**
4. Cannot be re-declared in same scope
5. Also has TDZ behavior like `let`

### Initialization Required

```js
// const tax; // SyntaxError
const tax = 0.18;
```

### Reassignment Not Allowed

```js
const country = "India";
// country = "USA"; // TypeError
```

### Important Confusion: Objects and Arrays with `const`

`const` prevents reassignment of the variable binding, not mutation of inner contents.

```js
const user = { name: "Ava" };
user.name = "Mia"; // allowed

const colors = ["red", "blue"];
colors.push("green"); // allowed

// user = { name: "Leo" }; // not allowed
// colors = []; // not allowed
```

### Practical Rule

- Use `const` for most declarations.
- Switch to `let` only when reassignment is needed.

---

## 2.4 Variable Naming Rules

Naming is not just syntax. Good names improve readability and reduce bugs.

### Allowed Rules

| Rule | Valid Examples | Invalid Examples |
|---|---|---|
| Can use letters, digits, `_`, `$` | `user1`, `_temp`, `$amount` | `user-name` |
| Cannot start with a digit | `name1` | `1name` |
| No spaces | `firstName` | `first name` |
| Case-sensitive | `count`, `Count` (different) | — |
| No reserved keywords | — | `let`, `class`, `return` |

### Naming Conventions (Recommended)

#### 1) `camelCase` for variables and functions

```js
let firstName = "Riya";
let totalPrice = 450;
```

#### 2) Meaningful names over short cryptic names

Bad:

```js
let x = 5000;
```

Better:

```js
let monthlySalary = 5000;
```

#### 3) Boolean names should sound like true/false questions

```js
let isLoggedIn = false;
let hasPermission = true;
let canEditProfile = false;
```

#### 4) Constants with fixed business meaning can use UPPER_SNAKE_CASE

```js
const MAX_LOGIN_ATTEMPTS = 5;
const API_TIMEOUT_MS = 3000;
```

### Beginner Naming Mistakes

- too short (`a`, `b`, `c`) in real logic
- inconsistent naming (`user_name`, `userName`, `UserName` mixed)
- names that lie (`isActive = "yes"`)

---

## 2.5 Scope Basics

Scope means: **where a variable can be accessed**.

If you understand scope clearly, debugging becomes much easier.

### Types of Scope

| Scope Type | Created By | Accessible Where |
|---|---|---|
| Global Scope | Declared outside all functions/blocks | Everywhere in file (and sometimes window) |
| Function Scope | `var` inside function | Only inside that function |
| Block Scope | `let`/`const` inside `{}` | Only inside that block |

### 1) Global Scope

```js
const appVersion = "1.0.0";

function showVersion() {
  console.log(appVersion);
}

showVersion(); // 1.0.0
```

Use globals carefully. Too many globals create conflicts.

### 2) Function Scope

```js
function greet() {
  var message = "Hello";
  console.log(message); // Hello
}

// console.log(message); // ReferenceError
```

### 3) Block Scope

```js
if (true) {
  let blockLet = "Inside block";
  const blockConst = "Also inside block";
  console.log(blockLet, blockConst);
}

// console.log(blockLet);  // ReferenceError
// console.log(blockConst); // ReferenceError
```

### Scope Chain (How JS finds a variable)

When JavaScript sees a variable:
1. It looks in current scope.
2. If not found, it looks in outer scope.
3. Continues outward until global scope.
4. If still not found, throws `ReferenceError`.

```js
const site = "Doc Book";

function outer() {
  const course = "JavaScript";

  function inner() {
    const topic = "Variables";
    console.log(site, course, topic);
  }

  inner();
}

outer(); // Doc Book JavaScript Variables
```

### Shadowing

A variable in inner scope can hide variable with same name in outer scope.

```js
let role = "Student";

function showRole() {
  let role = "Admin"; // shadows outer role
  console.log(role); // Admin
}

showRole();
console.log(role); // Student
```

### Block Scope in Loops (`let` vs `var`)

```js
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 (leaks outside)

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError
```

### Scope Best Practices

1. Prefer `const` by default.
2. Use `let` only when reassignment needed.
3. Avoid `var`.
4. Keep variable scope as small as possible.
5. Do not create unnecessary globals.

---

## `var` vs `let` vs `const` (Quick Comparison)

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | No |
| Re-declare same scope | Yes | No | No |
| Hoisted | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Must initialize | No | No | Yes |
| Modern recommendation | Avoid | Use when needed | Default choice |

---


# 3. Data Types

Data types are one of the most important foundations in JavaScript.

Whenever you store data in a variable, JavaScript needs to know what kind of value it is:
- text?
- number?
- true/false?
- empty?
- list?
- object?

If you understand data types clearly, writing logic becomes easier and bugs become easier to debug.

---

## 3.1 Primitive Data Types

Primitive data types are the simplest kinds of values in JavaScript.  
They are **immutable**, which means the value itself cannot be changed in place.

Main primitive types (beginner focus):
- `string`
- `number`
- `boolean`
- `null`
- `undefined`

Also in JavaScript:
- `symbol` (advanced)
- `bigint` (very large integers)

### Why primitives matter

Primitive values are copied by value.  
If you assign one primitive variable to another and change one of them, the other does not change.

```js
let a = 10;
let b = a;
b = 99;

console.log(a); // 10
console.log(b); // 99
```

---

## 3.2 String

A string is text data enclosed in:
- single quotes `'...'`
- double quotes `"..."`  
- backticks `` `...` `` (template literals)

### Basic Examples

```js
const firstName = "Rohith";
const city = 'Hyderabad';
const message = `Welcome to JavaScript`;
```

### Template Literals (recommended modern way)

```js
const user = "Ava";
const greeting = `Hello, ${user}!`;
console.log(greeting); // Hello, Ava!
```

### Common String Operations

```js
const text = "JavaScript";

console.log(text.length);       // 10
console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript
console.log(text.includes("Script")); // true
```

### Important String Note

Strings are immutable. Methods like `toUpperCase()` return new strings; they do not change original text directly.

```js
const lang = "js";
lang.toUpperCase();
console.log(lang); // js (unchanged)
```

### Beginner Mistakes with Strings

- forgetting quotes around text
- mixing up `+` with template literals
- expecting string methods to mutate original variable

---

## 3.3 Number

JavaScript uses a single `number` type for:
- integers (`10`)
- decimals (`99.99`)
- negative numbers (`-4`)

### Examples

```js
const age = 21;
const price = 499.99;
const temperature = -2;
```

### Arithmetic with Numbers

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

### `NaN` (Not a Number)

`NaN` appears when numeric operation fails.

```js
console.log("hello" * 2); // NaN
```

### String to Number Conversion

```js
const input = "45";
const result = Number(input) + 5;
console.log(result); // 50
```

### Beginner Mistakes with Numbers

- adding strings and numbers unintentionally
- forgetting conversion before arithmetic
- not checking for `NaN`

---

## 3.4 Boolean

Boolean values represent logical state:
- `true`
- `false`

Used in:
- condition checks
- form validation
- permission logic
- toggles (open/close, active/inactive)

### Examples

```js
const isLoggedIn = true;
const hasPermission = false;
```

### Booleans from Comparisons

```js
console.log(5 > 3);  // true
console.log(10 === "10"); // false
```

### Truthy and Falsy Concept

JavaScript converts values to boolean in conditions.

Falsy values:
- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

```js
if ("hello") {
  console.log("This runs");
}

if (0) {
  console.log("This does not run");
}
```

### Beginner Mistakes with Booleans

- comparing boolean with strings like `"true"`
- confusion between `==` and `===`

---

## 3.5 Null

`null` means: **intentional empty value**.

You use `null` when:
- value is currently empty by design
- data will be assigned later
- object reference is reset intentionally

### Example

```js
let selectedUser = null;

if (selectedUser === null) {
  console.log("No user selected yet");
}
```

### Real Use Cases

- current logged-in user not loaded yet
- no item selected in UI
- optional field intentionally cleared

### Key Point

`null` is a value chosen by developer intentionally.

---

## 3.6 Undefined

`undefined` means:
- a variable is declared but no value assigned
- or function did not return value explicitly
- or object property does not exist

### Examples

```js
let status;
console.log(status); // undefined
```

```js
function greet() {}
console.log(greet()); // undefined
```

```js
const user = { name: "Mia" };
console.log(user.age); // undefined
```

### `null` vs `undefined` (Quick Difference)

| Value | Meaning |
|---|---|
| `null` | intentionally empty |
| `undefined` | not assigned / missing |

Use `null` when you want to communicate intention clearly.

---

## 3.7 Non-Primitive Data Types

Non-primitive types are reference types.

Main non-primitive types:
- Object
- Array
- Function

These values are stored by reference in memory.

### Reference Behavior

```js
const a = { score: 10 };
const b = a;

b.score = 99;
console.log(a.score); // 99
```

Why?  
Both `a` and `b` refer to the same object in memory.

### Primitive vs Non-Primitive

| Feature | Primitive | Non-Primitive |
|---|---|---|
| Stored as | direct value | reference |
| Copy behavior | independent copy | shared reference |
| Mutable | no (immutable value) | yes (usually mutable) |

---

## 3.8 Objects

Objects store data in key-value format.

### Basic Object

```js
const student = {
  name: "Riya",
  age: 20,
  isEnrolled: true,
};
```

### Accessing Properties

```js
console.log(student.name);      // dot notation
console.log(student["age"]);    // bracket notation
```

### Updating and Adding Properties

```js
student.age = 21;
student.city = "Hyderabad";
```

### Object Methods

```js
const user = {
  name: "Ava",
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, Ava
```

### Nested Objects

```js
const profile = {
  id: 1,
  address: {
    city: "Pune",
    pin: 411001,
  },
};

console.log(profile.address.city); // Pune
```

### Object Destructuring (intro)

```js
const { name, age } = student;
console.log(name, age);
```

### Beginner Mistakes with Objects

- typo in property names
- confusion between dot and bracket notation
- assuming deep copy when assigning objects

---

## 3.9 Arrays

Arrays store ordered collections of values.

### Basic Array

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### Access by Index

Index starts from `0`.

```js
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
```

### Updating Array Values

```js
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]
```

### Common Array Methods

```js
const nums = [10, 20, 30];

nums.push(40);   // add end
nums.pop();      // remove end
nums.unshift(5); // add start
nums.shift();    // remove start
```

### Useful Iteration Methods

```js
const values = [1, 2, 3, 4];

const doubled = values.map((n) => n * 2);          // [2,4,6,8]
const even = values.filter((n) => n % 2 === 0);    // [2,4]
const sum = values.reduce((acc, n) => acc + n, 0); // 10
```

### Arrays Can Hold Mixed Types (but avoid when possible)

```js
const mixed = ["Ria", 21, true, null];
```

### Beginner Mistakes with Arrays

- assuming index starts at 1
- using wrong method (`map` vs `forEach`)
- mutating original array unintentionally

---

## Section 3 Wrap-up

By now you should clearly understand:
- primitive vs non-primitive types
- how strings, numbers, booleans work
- difference between `null` and `undefined`
- how objects and arrays store and organize data

This section is critical because almost every JavaScript program relies heavily on these data types.

---


# 4. Operators

Operators are symbols (or keywords) that tell JavaScript to perform an action on values.

In simple terms, operators help you:
- do math
- assign values
- compare values
- combine conditions
- make decisions
- inspect value types

Without operators, JavaScript cannot perform meaningful logic.

---

## 4.1 Arithmetic Operators

Arithmetic operators are used for mathematical calculations.

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Modulus (remainder) | `10 % 3` |
| `**` | Exponentiation (power) | `2 ** 3` |

### Example

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### Real-world use

- `+` total bill calculation
- `%` checking odd/even (`n % 2`)
- `**` power-based formulas

### Important note

`+` with strings performs concatenation:

```js
console.log("10" + 5); // "105"
```

---

## 4.2 Assignment Operators

Assignment operators store values in variables.

| Operator | Meaning | Example | Same As |
|---|---|---|---|
| `=` | Assign | `x = 10` | — |
| `+=` | Add and assign | `x += 5` | `x = x + 5` |
| `-=` | Subtract and assign | `x -= 5` | `x = x - 5` |
| `*=` | Multiply and assign | `x *= 2` | `x = x * 2` |
| `/=` | Divide and assign | `x /= 2` | `x = x / 2` |
| `%=` | Modulus and assign | `x %= 3` | `x = x % 3` |

### Example

```js
let score = 50;

score += 10; // 60
score -= 5;  // 55
score *= 2;  // 110
score /= 11; // 10
score %= 3;  // 1

console.log(score); // 1
```

### Why this matters

Compound assignment operators make code shorter and clearer in loops and counters.

---

## 4.3 Comparison Operators

Comparison operators compare two values and return a boolean (`true` or `false`).

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal (loose) | `5 == "5"` -> `true` |
| `===` | Equal (strict) | `5 === "5"` -> `false` |
| `!=` | Not equal (loose) | `5 != "5"` -> `false` |
| `!==` | Not equal (strict) | `5 !== "5"` -> `true` |
| `>` | Greater than | `7 > 5` |
| `<` | Less than | `3 < 5` |
| `>=` | Greater than or equal | `5 >= 5` |
| `<=` | Less than or equal | `4 <= 5` |

### Example

```js
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 === "10"); // false
console.log(10 == "10");  // true
```

### Best practice

Prefer strict operators:
- `===`
- `!==`

They avoid hidden type conversions.

### Common beginner mistake

Using `=` inside `if` by mistake:

```js
// if (x = 10) { ... } // wrong
if (x === 10) {
  // correct
}
```

---

## 4.4 Logical Operators

Logical operators combine or invert boolean conditions.

| Operator | Meaning | Rule |
|---|---|---|
| `&&` | AND | true only if both are true |
| `\|\|` | OR | true if at least one is true |
| `!` | NOT | reverses true/false |

### Example

```js
const isLoggedIn = true;
const isVerified = false;

console.log(isLoggedIn && isVerified); // false
console.log(isLoggedIn || isVerified); // true
console.log(!isLoggedIn); // false
```

### Real-world use

- `&&` check multiple requirements:
  - logged in **and** subscription active
- `||` fallback values:
  - display nickname **or** "Guest"
- `!` toggle state

### Short-circuit behavior

Logical operators can stop early:

```js
console.log(false && "will not run"); // false
console.log(true || "will not run");  // true
```

---

## 4.5 Ternary Operator

The ternary operator is a short form of `if...else`.

Syntax:

```js
condition ? valueIfTrue : valueIfFalse;
```

### Example

```js
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult
```

Equivalent `if...else`:

```js
let result;
if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}
```

### When to use ternary

Use ternary for short, simple decisions.

Avoid deeply nested ternaries because they reduce readability.

Bad (hard to read):

```js
const label = score > 90 ? "A" : score > 75 ? "B" : score > 50 ? "C" : "D";
```

---

## 4.6 Type Operators

Type operators help identify the type or constructor relationship of values.

Main type operators:
- `typeof`
- `instanceof`

### `typeof`

Returns type as a string.

```js
console.log(typeof "Hello");    // "string"
console.log(typeof 100);        // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (historic JS quirk)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
```

Important:
- `typeof null` returns `"object"` (this is a known JavaScript historical behavior).
- Arrays also return `"object"` with `typeof`.

### `instanceof`

Checks whether an object is created from a specific constructor.

```js
const arr = [1, 2, 3];
const date = new Date();

console.log(arr instanceof Array);   // true
console.log(date instanceof Date);   // true
console.log(arr instanceof Object);  // true
```

Use `instanceof` mainly with objects, arrays, and class instances.

---

## Operator Precedence (Important)

When one expression contains multiple operators, JavaScript follows precedence rules.

```js
console.log(2 + 3 * 4); // 14, not 20
```

Because multiplication has higher precedence than addition.

Use parentheses for clarity:

```js
console.log((2 + 3) * 4); // 20
```

---

## Common Mistakes in Operators

1. Using `==` instead of `===`
2. Confusing `=` with `===`
3. Mixing string and number with `+`
4. Writing complex nested ternary operators
5. Assuming `typeof []` is `"array"` (it is `"object"`)

---

## Quick Recap

- Arithmetic operators perform math.
- Assignment operators update variables.
- Comparison operators return true/false.
- Logical operators combine conditions.
- Ternary gives compact conditional expression.
- Type operators inspect value type relationships.

If this section is strong, writing conditions and decision logic in JavaScript becomes much easier.

---


# 5. Control Flow

Control flow means the order in which JavaScript executes code based on conditions.

Without control flow, every line runs top to bottom with no decision-making.  
With control flow, your program can choose different paths:
- run one block if condition is true
- run another block if condition is false
- pick between many options

Control flow is used in:
- login checks
- form validation
- grade/score systems
- user role handling
- UI state changes

---

## 5.1 `if` Statement

The `if` statement runs a block only when a condition is true.

### Syntax

```js
if (condition) {
  // code to run if condition is true
}
```

### Example

```js
const age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

### How it works

- JavaScript evaluates `age >= 18`
- if result is `true`, block runs
- if result is `false`, block is skipped

### More examples

```js
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

```js
const marks = 32;

if (marks < 35) {
  console.log("Need improvement");
}
```

### Common mistakes in `if`

1. Using assignment `=` instead of comparison `===`

```js
// if (age = 18) { ... } // wrong
if (age === 18) {
  // correct
}
```

2. Forgetting curly braces in multi-line blocks

---

## 5.2 `if...else` Statement

Use `if...else` when you need one block for true condition and another for false condition.

### Syntax

```js
if (condition) {
  // true block
} else {
  // false block
}
```

### Example

```js
const isMember = false;

if (isMember) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}
```

### Real-world example

```js
const password = "abc123";

if (password.length >= 8) {
  console.log("Strong enough");
} else {
  console.log("Password must be at least 8 characters");
}
```

### Why `if...else` is useful

It guarantees one of the two paths will run, which is useful for binary decisions:
- success/failure
- logged in/logged out
- valid/invalid

---

## 5.3 `else if` Ladder

Use `else if` when you have multiple conditions and only one matching block should run.

### Syntax

```js
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else if (condition3) {
  // block 3
} else {
  // default block
}
```

### Example: Grading System

```js
const marks = 82;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else if (marks >= 35) {
  grade = "D";
} else {
  grade = "Fail";
}

console.log(grade); // B
```

### Important behavior

- Conditions are checked from top to bottom.
- As soon as one condition is true, remaining checks are skipped.

### Ordering matters

Wrong order can cause incorrect results.

```js
const marks = 95;

if (marks >= 35) {
  console.log("Pass"); // this runs first
} else if (marks >= 90) {
  console.log("A grade");
}
```

The `>= 90` block never runs here.  
Always place more specific/high-priority conditions first.

---

## 5.4 `switch` Statement

`switch` is useful when comparing one value against many exact options.

### Syntax

```js
switch (expression) {
  case value1:
    // block
    break;
  case value2:
    // block
    break;
  default:
    // fallback block
}
```

### Example: Day Planner

```js
const day = "Tuesday";
let task;

switch (day) {
  case "Monday":
    task = "Team planning";
    break;
  case "Tuesday":
    task = "Code implementation";
    break;
  case "Wednesday":
    task = "Testing";
    break;
  default:
    task = "General tasks";
}

console.log(task); // Code implementation
```

### Why `break` is important

Without `break`, execution continues to next case (fall-through).

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Admin access");
  case "user":
    console.log("User access");
}
```

Output:
- `Admin access`
- `User access`

This may be unwanted unless fall-through is intentional.

### When to choose `switch`

Use `switch` when:
- checking one variable
- exact fixed values (like day names, status codes)

Prefer `if...else` when:
- conditions involve ranges (`score > 80`)
- complex boolean expressions are needed

---

## 5.5 Conditional Expressions

Conditional expressions are compact ways to make decisions.

Main forms:
- ternary operator (`condition ? a : b`)
- short-circuit expressions (`&&`, `||`)

### Ternary Operator

```js
const age = 16;
const category = age >= 18 ? "Adult" : "Minor";
console.log(category); // Minor
```

Equivalent `if...else`:

```js
let category;
if (age >= 18) {
  category = "Adult";
} else {
  category = "Minor";
}
```

### Conditional Rendering Pattern (`&&`)

```js
const isLoggedIn = true;
isLoggedIn && console.log("Show dashboard");
```

This prints only when left side is true.

### Default Value Pattern (`||`)

```js
const displayName = "" || "Guest";
console.log(displayName); // Guest
```

`||` returns the first truthy value.

### Nullish Coalescing (`??`) - Useful modern pattern

```js
const count = 0;
const value1 = count || 10; // 10 (because 0 is falsy)
const value2 = count ?? 10; // 0 (keeps 0)
```

Use `??` when you want fallback only for `null` or `undefined`, not for `0` or empty string.

### Readability rule

Use conditional expressions for short and clear decisions.  
If expression becomes hard to read, switch back to `if...else`.

---

## Control Flow Comparison Table

| Pattern | Best Use Case | Example Type |
|---|---|---|
| `if` | Single condition | `if (isLoggedIn)` |
| `if...else` | Two outcomes | valid/invalid |
| `else if` ladder | Multiple condition checks | grade ranges |
| `switch` | One variable, many exact values | day/status |
| Ternary / expressions | Short inline decision | label text |

---

## Common Mistakes in Control Flow

1. Using `=` instead of `===` in condition.
2. Incorrect condition order in `else if`.
3. Forgetting `break` in `switch`.
4. Writing overly nested conditions.
5. Overusing ternary and making code hard to read.

---

## Quick Recap

- `if` runs code only when condition is true.
- `if...else` handles true/false outcomes.
- `else if` ladder handles multiple branches.
- `switch` handles one value against many exact cases.
- conditional expressions make short decisions compactly.

Strong control flow understanding helps you write cleaner logic in forms, authentication, APIs, and UI behavior.

---


# 6. Loops

Loops are used when you want to repeat a block of code multiple times.

Without loops, you might write the same line again and again.  
With loops, you write logic once and let JavaScript run it repeatedly based on a condition.

Loops are used in real projects for:
- iterating over arrays of data
- validating multiple fields
- rendering list items
- processing API responses
- counting and aggregation tasks

---

## 6.1 `for` Loop

`for` loop is best when you know how many times you want to run the loop.

### Syntax

```js
for (initialization; condition; update) {
  // code block
}
```

### Example

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
```

### How it works

1. `let i = 1` runs once (start).
2. `i <= 5` is checked before each iteration.
3. Loop body runs if condition is true.
4. `i++` updates counter.
5. Stops when condition becomes false.

### Real-world example

```js
const prices = [100, 200, 300];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log(total); // 600
```

---

## 6.2 `while` Loop

`while` loop is used when number of iterations is not fixed in advance.

### Syntax

```js
while (condition) {
  // code block
}
```

### Example

```js
let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}
```

### Use case

Use `while` when loop should continue until something changes:
- user enters valid input
- connection succeeds
- queue becomes empty

### Common mistake

Forgetting update step causes infinite loop.

```js
let i = 1;
// while (i <= 5) {
//   console.log(i); // infinite if i is never updated
// }
```

---

## 6.3 `do...while` Loop

`do...while` is similar to `while`, but it runs the code block at least once.

### Syntax

```js
do {
  // code block
} while (condition);
```

### Example

```js
let num = 1;

do {
  console.log("Number:", num);
  num++;
} while (num <= 3);
```

### Why this loop exists

Because sometimes you want first execution regardless of condition.

Example cases:
- show menu once, then ask user whether to continue
- run one API attempt before retry condition checks

### Behavior difference with `while`

```js
let x = 10;

while (x < 5) {
  console.log("while");
}

do {
  console.log("do...while runs once");
} while (x < 5);
```

Output:
- only `do...while runs once`

---

## 6.4 `for...of` Loop

`for...of` is used to iterate over iterable values:
- arrays
- strings
- maps
- sets

It gives actual values directly.

### Syntax

```js
for (const item of iterable) {
  // use item
}
```

### Example with Array

```js
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### Example with String

```js
for (const ch of "JS") {
  console.log(ch);
}
```

### Why beginners like `for...of`

- cleaner than index-based loop
- avoids manual `i` handling
- easier to read

---

## 6.5 `for...in` Loop

`for...in` is used to iterate over object keys (property names).

### Syntax

```js
for (const key in object) {
  // use key and object[key]
}
```

### Example

```js
const user = {
  name: "Riya",
  age: 22,
  city: "Hyderabad",
};

for (const key in user) {
  console.log(key, ":", user[key]);
}
```

Output:
- `name : Riya`
- `age : 22`
- `city : Hyderabad`

### Important warning

Do not use `for...in` for arrays in most beginner code.  
For arrays, prefer:
- `for`
- `for...of`
- array methods like `forEach`, `map`

---

## 6.6 `break` and `continue`

These statements control loop behavior.

### `break`

Stops the loop immediately.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Output:
- `1 2 3 4`

### `continue`

Skips current iteration and moves to next one.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

Output:
- `1 2 4 5`

### Real-world use

- `break` when target item found in search
- `continue` to skip invalid data rows

---

## Loop Comparison Table

| Loop Type | Best Use | Notes |
|---|---|---|
| `for` | Known count loops | Full control (index, condition, update) |
| `while` | Unknown count loops | Condition-driven |
| `do...while` | Must run once minimum | Post-check condition |
| `for...of` | Iterate iterable values | Clean for arrays/strings |
| `for...in` | Iterate object keys | Prefer for objects |

---

## Common Loop Mistakes

1. Infinite loops due to wrong condition/update.
2. Off-by-one errors (`<=` vs `<`).
3. Using `for...in` for arrays.
4. Modifying loop variable incorrectly.
5. Overusing nested loops where simpler methods exist.

---

## Quick Recap

- Loops repeat code efficiently.
- Use `for` when count is known.
- Use `while` when repetition depends on runtime condition.
- Use `do...while` when at least one execution is required.
- Use `for...of` for array/string values.
- Use `for...in` for object keys.
- Use `break` to stop and `continue` to skip iteration.

Strong loop understanding helps in arrays, DOM rendering, data processing, and algorithmic thinking.

---


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

---


# 8. Arrays

Arrays are one of the most used data structures in JavaScript.

An array stores multiple values in a single variable, in an ordered way.

Use arrays when you have a list of related items:
- student names
- product prices
- todo tasks
- API response items
- marks, scores, IDs

---

## 8.1 Creating Arrays

You can create arrays using square brackets `[]`.

### Basic syntax

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### Empty array

```js
const tasks = [];
```

### Array with numbers

```js
const marks = [75, 82, 91, 66];
```

### Array with mixed values (allowed, but keep consistency when possible)

```js
const mixed = ["Riya", 21, true, null];
```

### Using `new Array()` (less common in beginner code)

```js
const nums = new Array(1, 2, 3);
```

Prefer `[]` syntax in modern JavaScript for readability.

---

## 8.2 Accessing Array Elements

Array elements are accessed by index.

Important:
- index starts at `0`
- first item is index `0`
- second item is index `1`

### Example

```js
const colors = ["Red", "Blue", "Green"];

console.log(colors[0]); // Red
console.log(colors[1]); // Blue
console.log(colors[2]); // Green
```

### Accessing last element

```js
const values = [10, 20, 30, 40];
console.log(values[values.length - 1]); // 40
```

### Updating by index

```js
const cities = ["Delhi", "Mumbai", "Pune"];
cities[1] = "Chennai";
console.log(cities); // ["Delhi", "Chennai", "Pune"]
```

### Out-of-range access

```js
const arr = [1, 2, 3];
console.log(arr[5]); // undefined
```

---

## 8.3 Array Methods Basics

Array methods are built-in functions that help you add, remove, search, and transform array data.

| Method | What it does | Mutates original? |
|---|---|---|
| `push()` | add item to end | Yes |
| `pop()` | remove item from end | Yes |
| `unshift()` | add item at start | Yes |
| `shift()` | remove item from start | Yes |
| `includes()` | checks if value exists | No |
| `indexOf()` | returns index of value | No |
| `slice()` | returns portion of array | No |
| `splice()` | add/remove at specific index | Yes |

### Example

```js
const nums = [10, 20, 30];

nums.push(40);       // [10,20,30,40]
nums.pop();          // [10,20,30]
nums.unshift(5);     // [5,10,20,30]
nums.shift();        // [10,20,30]

console.log(nums.includes(20)); // true
console.log(nums.indexOf(30));  // 2
```

### `slice()` vs `splice()` quick difference

```js
const arr1 = [1, 2, 3, 4];
console.log(arr1.slice(1, 3)); // [2,3]
console.log(arr1); // unchanged [1,2,3,4]

const arr2 = [1, 2, 3, 4];
arr2.splice(1, 2); // remove 2 elements from index 1
console.log(arr2); // [1,4]
```

---

## 8.4 Iteration Methods

Iteration means processing each item in an array one by one.

Traditional way:

```js
const nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
```

Modern array iteration methods are usually cleaner:
- `map()`
- `filter()`
- `reduce()`
- `find()`
- `forEach()`

These methods use callback functions and are very common in modern JS, React, and API data processing.

---

## 8.5 `map()`

`map()` creates a **new array** by transforming every element.

### Syntax

```js
array.map((item, index, originalArray) => {
  // return transformed item
});
```

### Example 1: Double values

```js
const nums = [1, 2, 3, 4];
const doubled = nums.map((n) => n * 2);

console.log(doubled); // [2,4,6,8]
console.log(nums);    // [1,2,3,4] original unchanged
```

### Example 2: Extract field from objects

```js
const users = [
  { id: 1, name: "Riya" },
  { id: 2, name: "Arun" },
];

const names = users.map((u) => u.name);
console.log(names); // ["Riya", "Arun"]
```

### When to use `map()`

Use when output array length is same as input, but values are transformed.

---

## 8.6 `filter()`

`filter()` creates a **new array** containing only elements that match a condition.

### Syntax

```js
array.filter((item) => condition);
```

### Example 1: Even numbers

```js
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((n) => n % 2 === 0);

console.log(evens); // [2,4,6]
```

### Example 2: Active users

```js
const users = [
  { name: "Ava", active: true },
  { name: "Mia", active: false },
  { name: "Leo", active: true },
];

const activeUsers = users.filter((u) => u.active);
console.log(activeUsers);
```

### When to use `filter()`

Use when you want subset of original data.

---

## 8.7 `reduce()`

`reduce()` combines array elements into a single value.

Examples of single value:
- sum
- total price
- average
- object map/grouping

### Syntax

```js
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

### Example 1: Sum

```js
const nums = [10, 20, 30];
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 60
```

### Example 2: Total cart price

```js
const cart = [
  { name: "Book", price: 300 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 700 },
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice); // 1050
```

### Why beginners find `reduce()` hard

Because it introduces accumulator pattern.  
Read it as: "start from initial value, update result for each item."

---

## 8.8 `find()`

`find()` returns the **first** element that matches condition.

If no match, it returns `undefined`.

### Syntax

```js
array.find((item) => condition);
```

### Example

```js
const users = [
  { id: 1, name: "Riya" },
  { id: 2, name: "Arun" },
  { id: 3, name: "Mia" },
];

const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "Arun" }
```

### Difference: `find()` vs `filter()`

| Method | Return Type | Match Count |
|---|---|---|
| `find()` | single element or `undefined` | first match only |
| `filter()` | array | all matches |

---

## 8.9 `forEach()`

`forEach()` executes a callback for each array element.

It does **not** return a transformed array.

### Syntax

```js
array.forEach((item, index) => {
  // side effect logic
});
```

### Example 1: Print values

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

### Example 2: Side-effect use case

```js
const prices = [100, 200, 300];
let total = 0;

prices.forEach((p) => {
  total += p;
});

console.log(total); // 600
```

### Important note

`forEach()` is best for side effects (logging, updating external variable, DOM updates), not for creating new arrays.

---

## `map()` vs `filter()` vs `reduce()` vs `find()` vs `forEach()`

| Method | Returns | Best Use |
|---|---|---|
| `map()` | new array | transform each item |
| `filter()` | new array | keep matching items |
| `reduce()` | single value | aggregate/combine |
| `find()` | one item or `undefined` | first match |
| `forEach()` | `undefined` | side effects/iteration only |

---

## Common Array Mistakes

1. Assuming array index starts at `1` (it starts at `0`).
2. Using `forEach()` expecting returned array.
3. Mutating original array unintentionally with methods like `splice`.
4. Forgetting to return inside `map()` callback.
5. Using `find()` when all matches are needed (should use `filter()`).

---

## Quick Recap

- Arrays store ordered collections.
- Access by index, update by index.
- Core basics: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`.
- Iteration methods are essential in modern JS.
- `map/filter/reduce/find/forEach` solve different problems.

Strong array understanding is essential for API handling, UI rendering, and data transformation in real JavaScript projects.

---


# 9. Objects

Objects are one of the most important data structures in JavaScript.

An object stores related data in **key-value** pairs.

Use objects when you want to represent real-world entities:
- user profile
- product details
- course information
- settings/config
- API response records

If arrays are for ordered lists, objects are for structured records.

---

## 9.1 Creating Objects

You can create objects using curly braces `{}`.

### Basic syntax

```js
const user = {
  name: "Rohith",
  age: 21,
  isActive: true,
};
```

In this object:
- `name`, `age`, `isActive` are **keys** (properties)
- `"Rohith"`, `21`, `true` are **values**

### Empty object

```js
const profile = {};
```

### Add properties later

```js
profile.name = "Ava";
profile.city = "Hyderabad";
```

### Another way: `new Object()` (less common)

```js
const product = new Object();
product.id = 101;
product.title = "Keyboard";
```

Prefer object literal `{}` in modern JavaScript for readability.

---

## 9.2 Object Properties

Object properties are key-value pairs inside an object.

### Accessing properties

There are two common ways:

1. Dot notation
2. Bracket notation

```js
const student = {
  name: "Riya",
  marks: 92,
};

console.log(student.name);   // dot notation -> Riya
console.log(student["marks"]); // bracket notation -> 92
```

### When to use dot vs bracket

| Style | Best use |
|---|---|
| Dot notation | key name is known and simple |
| Bracket notation | key is dynamic or has spaces/special chars |

### Dynamic property access

```js
const keyName = "name";
console.log(student[keyName]); // Riya
```

### Updating properties

```js
student.marks = 95;
console.log(student.marks); // 95
```

### Adding new properties

```js
student.city = "Pune";
```

### Deleting properties

```js
delete student.city;
```

### Check if property exists

```js
console.log("name" in student); // true
console.log(student.hasOwnProperty("marks")); // true
```

### Object keys and values

```js
console.log(Object.keys(student));   // ["name", "marks"]
console.log(Object.values(student)); // ["Riya", 95]
```

---

## 9.3 Object Methods

A method is a function stored inside an object.

Methods allow objects to store behavior along with data.

### Example

```js
const user = {
  name: "Mia",
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, Mia
```

### Why `this` is used

Inside object methods, `this` usually refers to the current object.

```js
const product = {
  title: "Laptop",
  price: 50000,
  getLabel() {
    return `${this.title} - Rs.${this.price}`;
  },
};
```

### Method shorthand vs old style

Both are valid:

```js
const a = {
  greet: function () {
    return "Hi";
  },
};

const b = {
  greet() {
    return "Hi";
  },
};
```

Modern shorthand (`greet() {}`) is cleaner.

### Caution with arrow functions in methods

Arrow functions do not have their own `this`, so they may not behave as expected in object methods.

```js
const user2 = {
  name: "Leo",
  greet: () => `Hello, ${this.name}`, // this may not refer to user2
};
```

For object methods, regular function syntax is usually safer.

---

## 9.4 Nested Objects

Nested objects mean objects inside objects.

Real API responses are often nested, so this is a very important skill.

### Example

```js
const employee = {
  id: 1,
  name: "Ava",
  address: {
    city: "Bengaluru",
    pincode: 560001,
  },
  company: {
    name: "Tech Corp",
    dept: "Engineering",
  },
};
```

### Access nested properties

```js
console.log(employee.address.city);   // Bengaluru
console.log(employee.company.dept);   // Engineering
```

### Update nested properties

```js
employee.address.city = "Hyderabad";
```

### Add nested property

```js
employee.address.state = "Telangana";
```

### Safe access with optional chaining

Optional chaining (`?.`) prevents runtime errors when path may be missing.

```js
console.log(employee.contact?.email); // undefined (no error)
```

Without optional chaining:

```js
// console.log(employee.contact.email); // Error if contact is undefined
```

### Why nested objects matter

- Most backend/API data is nested
- UI forms often produce nested payloads
- Config files are commonly nested

---

## 9.5 Object Destructuring

Destructuring allows you to extract values from objects into variables using short syntax.

### Basic destructuring

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

### Default values

```js
const { role = "student" } = user;
console.log(role); // student
```

### Nested destructuring

```js
const profile = {
  id: 1,
  address: {
    city: "Delhi",
    pin: 110001,
  },
};

const {
  address: { city, pin },
} = profile;

console.log(city, pin); // Delhi 110001
```

### Destructuring in function parameters

```js
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser({ name: "Mia", age: 20 });
```

### Why destructuring is useful

- less repetitive code
- cleaner parameter handling
- easier to read when using object-heavy data

---

## Common Mistakes with Objects

1. Typo in property names (`fristName` vs `firstName`).
2. Confusing dot and bracket notation.
3. Using arrow function methods and expecting normal `this`.
4. Accessing deep nested property without checking existence.
5. Assuming object assignment creates deep copy.

---

## Quick Recap

- Objects store structured key-value data.
- Properties can be read, updated, added, or deleted.
- Methods are functions inside objects.
- Nested objects model complex real-world data.
- Destructuring extracts values cleanly and reduces repetition.

Strong object fundamentals are essential for APIs, React props/state, backend payloads, and most real JavaScript applications.

---


# 10. DOM Manipulation

DOM manipulation is how JavaScript interacts with and updates web pages.

DOM stands for **Document Object Model**.  
When a browser loads HTML, it converts it into a tree-like structure of objects. JavaScript can read and modify this structure.

This is what enables:
- updating text on screen
- changing styles dynamically
- adding/removing elements
- building interactive UI behavior

---

## 10.1 Introduction to DOM

Think of the DOM as a live map of your HTML page.

If your HTML is:

```html
<body>
  <h1 id="title">Welcome</h1>
  <p class="desc">Learning JavaScript</p>
</body>
```

The browser creates nodes for `body`, `h1`, and `p`.  
Using JavaScript, you can access these nodes and change them.

### Why DOM matters

Without DOM manipulation, a page is mostly static.  
With DOM manipulation, the page becomes interactive and dynamic.

Examples:
- show/hide messages
- update cart count
- display API data
- validate and display form errors

---

## 10.2 Selecting Elements

Before changing anything, you must first select elements from DOM.

### Common selection methods

| Method | Returns | Best for |
|---|---|---|
| `document.getElementById()` | single element | selecting by unique id |
| `document.querySelector()` | first matching element | CSS selector based selection |
| `document.querySelectorAll()` | NodeList of matches | selecting multiple elements |
| `document.getElementsByClassName()` | HTMLCollection | class-based selection |
| `document.getElementsByTagName()` | HTMLCollection | tag-based selection |

### Examples

```js
const title = document.getElementById("title");
const firstButton = document.querySelector(".btn");
const allItems = document.querySelectorAll(".item");
```

### CSS selector style with `querySelector`

```js
const byId = document.querySelector("#title");
const byClass = document.querySelector(".card");
const byTag = document.querySelector("p");
```

### Important beginner note

If selector does not match anything, result may be `null`.

```js
const el = document.querySelector(".unknown");
console.log(el); // null
```

Always ensure the element exists before using it.

---

## 10.3 Modifying Content

You can change text and HTML inside selected elements.

### Common content properties

| Property | Meaning |
|---|---|
| `textContent` | sets/gets plain text |
| `innerHTML` | sets/gets HTML markup |
| `innerText` | text as rendered (affected by CSS visibility) |

### `textContent` example

```js
const heading = document.querySelector("#title");
heading.textContent = "JavaScript DOM Started";
```

### `innerHTML` example

```js
const box = document.querySelector("#box");
box.innerHTML = "<strong>Hello</strong> <em>World</em>";
```

### Security note

Avoid directly inserting untrusted user data into `innerHTML` to prevent XSS vulnerabilities.

### Input content example

```js
const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");

output.textContent = `Hello, ${input.value}`;
```

---

## 10.4 Modifying Styles

JavaScript can change element styles directly or by adding/removing classes.

### Direct style changes

```js
const title = document.querySelector("#title");
title.style.color = "blue";
title.style.backgroundColor = "lightyellow";
title.style.fontSize = "28px";
```

Use camelCase for CSS properties in JS:
- `background-color` -> `backgroundColor`
- `font-size` -> `fontSize`

### Class-based styling (recommended in larger projects)

```js
const card = document.querySelector(".card");
card.classList.add("active");
card.classList.remove("hidden");
card.classList.toggle("selected");
```

### Why class-based approach is preferred

- cleaner separation of style and logic
- easier maintenance with CSS files
- avoids inline style clutter

---

## 10.5 Creating Elements

You can create new elements dynamically using JavaScript.

### Basic flow

1. Create element with `document.createElement()`
2. Set content/attributes
3. Insert it into DOM with `appendChild()` or similar methods

### Example

```js
const list = document.querySelector("#todoList");

const li = document.createElement("li");
li.textContent = "Learn DOM methods";

list.appendChild(li);
```

### Create element with class and attributes

```js
const button = document.createElement("button");
button.textContent = "Delete";
button.className = "delete-btn";
button.setAttribute("type", "button");
```

### Insert positions

```js
parent.appendChild(child);        // insert at end
parent.prepend(child);            // insert at beginning
reference.before(newNode);        // before an element
reference.after(newNode);         // after an element
```

### Real-world use

- add todo items
- add chat messages
- render API data cards

---

## 10.6 Removing Elements

You can remove elements from DOM when they are no longer needed.

### Remove selected element

```js
const item = document.querySelector(".old-item");
item.remove();
```

### Remove child from parent

```js
const list = document.querySelector("#todoList");
const first = list.firstElementChild;

if (first) {
  list.removeChild(first);
}
```

### Why removal matters

- remove completed todo items
- delete old notifications
- clean temporary UI elements

### Beginner caution

Always check element exists before removing to avoid runtime errors.

---

## 10.7 Traversing DOM

DOM traversal means moving between related elements:
- parent
- children
- siblings

### Common traversal properties

| Property | Meaning |
|---|---|
| `parentElement` | parent node |
| `children` | all child elements |
| `firstElementChild` | first child element |
| `lastElementChild` | last child element |
| `nextElementSibling` | next sibling element |
| `previousElementSibling` | previous sibling element |

### Example

```js
const list = document.querySelector("#todoList");

console.log(list.parentElement);        // parent element
console.log(list.children);             // HTMLCollection of children
console.log(list.firstElementChild);    // first <li>
console.log(list.lastElementChild);     // last <li>
```

### Sibling traversal

```js
const current = document.querySelector(".current");

console.log(current.nextElementSibling);
console.log(current.previousElementSibling);
```

### Why traversal is useful

- moving from clicked child to parent card
- styling first/last items
- finding related elements for updates

---

## Mini End-to-End DOM Example

```html
<input id="taskInput" placeholder="Enter task" />
<button id="addBtn">Add</button>
<ul id="taskList"></ul>
```

```js
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);

  taskInput.value = "";
});
```

This small example uses:
- selecting elements
- reading input
- creating elements
- modifying content
- appending to DOM

---

## Common DOM Mistakes

1. Using wrong selector (`#id` vs `.class`).
2. Running script before DOM is loaded.
3. Forgetting null checks after selection.
4. Overusing `innerHTML` for everything.
5. Mixing too much logic directly in event callback.

---

## Quick Recap

- DOM is the object representation of HTML in browser.
- Select elements first, then modify content/style.
- Create and remove elements dynamically.
- Traverse parent/child/sibling relationships.
- DOM manipulation is the foundation of interactive frontend development.

Strong DOM skills make events, forms, and dynamic UI modules much easier.

---


# 11. Events

Events are actions that happen in the browser and can be handled using JavaScript.

Examples:
- user clicks a button
- user types in an input
- user submits a form
- mouse moves over an element
- key is pressed on keyboard

Events are the core of interactivity in web applications.

---

## 11.1 Introduction to Events

An event is a signal that something happened in the browser.

JavaScript can listen for these signals and run code in response.

Think like this:
- Event = "something happened"
- Event handler = "what should happen now"

### Basic example

```html
<button id="myBtn">Click me</button>
```

```js
const btn = document.querySelector("#myBtn");

btn.onclick = function () {
  console.log("Button clicked");
};
```

### Why events are important

Without events, page behavior is static.  
With events, users can interact and your app can react in real time.

---

## 11.2 Event Listeners

Event listeners are the recommended way to handle events.

### Syntax

```js
element.addEventListener("eventName", handlerFunction);
```

### Example

```js
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
  console.log("Clicked using addEventListener");
});
```

### Why `addEventListener` is preferred

1. You can attach multiple handlers for same event.
2. Cleaner and more flexible than inline HTML events.
3. Supports options like capture and once.

### Multiple listeners example

```js
btn.addEventListener("click", () => console.log("Handler 1"));
btn.addEventListener("click", () => console.log("Handler 2"));
```

Both handlers run when clicked.

### Removing listeners

```js
function handleClick() {
  console.log("clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

Use same function reference when removing.

---

## 11.3 Mouse Events

Mouse events are triggered by mouse interactions.

Common mouse events:
- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mouseenter`
- `mouseleave`
- `mousemove`

### Example: click and double click

```js
const box = document.querySelector("#box");

box.addEventListener("click", () => {
  console.log("Single click");
});

box.addEventListener("dblclick", () => {
  console.log("Double click");
});
```

### Example: hover behavior

```js
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightgreen";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});
```

### Example: mouse position tracking

```js
document.addEventListener("mousemove", (event) => {
  console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
});
```

---

## 11.4 Keyboard Events

Keyboard events are triggered when keys are pressed or released.

Common keyboard events:
- `keydown` (key pressed)
- `keyup` (key released)

### Example

```js
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
```

### Detect specific key

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key was pressed");
  }
});
```

### Useful keyboard properties

| Property | Meaning |
|---|---|
| `event.key` | key value (`a`, `Enter`, `Escape`) |
| `event.code` | physical key (`KeyA`, `ArrowUp`) |
| `event.ctrlKey` | whether Ctrl is pressed |
| `event.shiftKey` | whether Shift is pressed |

### Shortcut example

```js
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    console.log("Custom save action");
  }
});
```

---

## 11.5 Form Events

Form events are essential for validation and user input handling.

Common form events:
- `submit`
- `input`
- `change`
- `focus`
- `blur`

### `submit` event

```js
const form = document.querySelector("#signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents page reload
  console.log("Form submitted");
});
```

### `input` event (real-time typing)

```js
const username = document.querySelector("#username");

username.addEventListener("input", () => {
  console.log("Current value:", username.value);
});
```

### `change` event

Usually triggers when element value is finalized (for many controls).

```js
const country = document.querySelector("#country");

country.addEventListener("change", () => {
  console.log("Selected country:", country.value);
});
```

### `focus` and `blur`

```js
username.addEventListener("focus", () => {
  username.style.borderColor = "blue";
});

username.addEventListener("blur", () => {
  username.style.borderColor = "gray";
});
```

### Why form events matter

- validate before sending data
- show instant feedback
- improve user experience

---

## 11.6 Event Propagation

Event propagation describes how events travel through the DOM tree.

There are two major phases:
- **Capturing phase** (top to target)
- **Bubbling phase** (target back to top)

By default, most handlers run during bubbling.

### Propagation example

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```js
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
```

When button is clicked:
1. child handler runs
2. parent handler runs (bubbling)

### Stop propagation

```js
child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Only child handler runs");
});
```

### Capturing mode

```js
parent.addEventListener(
  "click",
  () => {
    console.log("Parent capture handler");
  },
  true
);
```

Third argument `true` enables capture phase listener.

### Event propagation table

| Phase | Direction | Typical Use |
|---|---|---|
| Capturing | top -> target | advanced interception |
| Bubbling | target -> top | default event handling |

---

## Event Object (`event`) Essentials

Every event handler receives an event object containing details about the event.

Common properties/methods:

| Item | Purpose |
|---|---|
| `event.target` | actual element that triggered event |
| `event.currentTarget` | element where listener is attached |
| `event.type` | event name (`click`, `keydown`) |
| `event.preventDefault()` | prevents default browser behavior |
| `event.stopPropagation()` | stops bubbling/capturing |

### Example

```js
document.querySelector("#myBtn").addEventListener("click", (event) => {
  console.log(event.type); // click
  console.log(event.target); // clicked button element
});
```

---

## Common Mistakes in Events

1. Using wrong selector while attaching listeners.
2. Forgetting `event.preventDefault()` in form submit handlers.
3. Adding listeners before DOM is loaded.
4. Misunderstanding bubbling and triggering parent handlers unexpectedly.
5. Using anonymous handlers where removal is needed later.

---

## Quick Recap

- Events are browser actions like click, key press, input, submit.
- `addEventListener` is the standard way to handle events.
- Mouse, keyboard, and form events are most common in beginner projects.
- Event propagation explains parent-child event flow.
- Event object provides all useful event details.

Strong event handling skills are essential for building interactive web applications.

---


# 12. Form Handling

Form handling is the process of reading, validating, and submitting user input.

In real applications, forms are used for:
- login/signup
- profile updates
- checkout pages
- feedback/contact forms
- search and filters

Good form handling improves user experience and data quality.

---

## 12.1 Accessing Form Elements

Before working with form data, you must select form elements in JavaScript.

### Example HTML

```html
<form id="signupForm">
  <input id="name" type="text" />
  <input id="email" type="email" />
  <input id="password" type="password" />
  <button type="submit">Submit</button>
</form>
```

### Selecting elements

```js
const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
```

### Alternative ways

You can also access by form controls:

```js
const form = document.querySelector("#signupForm");
const email = form.elements["email"];
```

### Why this step matters

If elements are not selected correctly, all next steps fail.  
Always verify your selectors (`#id`, `.class`, `[name]`).

---

## 12.2 Reading Input Values

Use `.value` to read data entered by the user.

### Basic example

```js
const username = document.querySelector("#name");
console.log(username.value);
```

### Common pattern with trim

```js
const nameValue = nameInput.value.trim();
const emailValue = emailInput.value.trim();
const passwordValue = passwordInput.value;
```

`trim()` removes extra spaces at start/end.

### Read values on button click

```js
document.querySelector("#readBtn").addEventListener("click", () => {
  console.log("Name:", nameInput.value.trim());
  console.log("Email:", emailInput.value.trim());
});
```

### Read values on form submit

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(nameInput.value, emailInput.value, passwordInput.value);
});
```

### Input types and values

| Input Type | Example Value |
|---|---|
| `text` | `"Rohith"` |
| `email` | `"a@b.com"` |
| `password` | `"secret123"` |
| `number` | `"25"` (string; convert if needed) |
| `checkbox` | use `.checked` (`true/false`) |

Checkbox example:

```js
const terms = document.querySelector("#terms");
console.log(terms.checked); // true or false
```

---

## 12.3 Form Validation

Validation means checking whether user input is correct before processing it.

Validation helps:
- prevent bad data
- reduce backend errors
- improve user guidance

### Common validation rules

| Field | Example Rule |
|---|---|
| Name | required, minimum length |
| Email | required, valid email format |
| Password | min length, complexity |
| Confirm Password | should match password |
| Phone | only digits, fixed length |

### Basic validation example

```js
function validateForm(name, email, password) {
  if (!name) return "Name is required";
  if (!email) return "Email is required";
  if (!email.includes("@")) return "Enter a valid email";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
}
```

### Full usage in submit handler

```js
const errorBox = document.querySelector("#errorBox");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const error = validateForm(name, email, password);

  if (error) {
    errorBox.textContent = error;
    errorBox.style.color = "crimson";
    return;
  }

  errorBox.textContent = "Form is valid";
  errorBox.style.color = "green";
});
```

### Simple email validation with regex (beginner level)

```js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

Use readable validation first; make regex strict only when needed.

### Real-time validation (`input` event)

```js
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (!email.includes("@")) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }
});
```

---

## 12.4 Prevent Default Behavior

By default, when a form is submitted:
- browser sends request
- page reloads

In modern JavaScript apps, you often want custom handling (validation, API call, async submit) without page refresh.

Use:

```js
event.preventDefault();
```

### Example

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Custom submit logic here");
});
```

### Common places where `preventDefault` is used

1. Form submissions
2. Link clicks when you want custom navigation
3. Keyboard shortcuts overriding default browser behavior

Example with link:

```js
const helpLink = document.querySelector("#helpLink");

helpLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Open custom help modal");
});
```

### Important note

Use `preventDefault` intentionally.  
Do not block native behavior unless your custom behavior replaces it properly.

---

## End-to-End Mini Form Handling Example

### HTML

```html
<form id="loginForm">
  <input id="loginEmail" type="email" placeholder="Email" />
  <input id="loginPassword" type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
<p id="loginMessage"></p>
```

### JavaScript

```js
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginMessage = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  if (!email || !password) {
    loginMessage.textContent = "All fields are required.";
    loginMessage.style.color = "crimson";
    return;
  }

  if (!email.includes("@")) {
    loginMessage.textContent = "Please enter a valid email.";
    loginMessage.style.color = "crimson";
    return;
  }

  if (password.length < 6) {
    loginMessage.textContent = "Password must be at least 6 characters.";
    loginMessage.style.color = "crimson";
    return;
  }

  loginMessage.textContent = "Login successful (demo).";
  loginMessage.style.color = "green";
});
```

---

## Common Form Handling Mistakes

1. Forgetting `event.preventDefault()` in submit handler.
2. Not trimming input values.
3. Showing generic error messages instead of specific ones.
4. Validating only on frontend and skipping backend validation.
5. Assuming number input gives number (it often comes as string).

---

## Quick Recap

- Access form elements correctly before reading values.
- Read values using `.value` (and `.checked` for checkboxes).
- Validate input before processing or submitting.
- Use `event.preventDefault()` for custom form handling flow.

Strong form handling skills are essential for authentication, profile forms, and user data workflows.

---


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

---


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
