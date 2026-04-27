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
