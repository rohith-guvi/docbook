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
