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
