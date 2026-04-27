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
