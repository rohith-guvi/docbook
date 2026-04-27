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
