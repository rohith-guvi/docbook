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
