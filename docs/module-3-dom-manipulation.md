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
