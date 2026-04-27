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
