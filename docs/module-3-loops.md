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
