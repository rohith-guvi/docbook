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
