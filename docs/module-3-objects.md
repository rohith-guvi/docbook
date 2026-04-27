# 9. Objects

Objects are one of the most important data structures in JavaScript.

An object stores related data in **key-value** pairs.

Use objects when you want to represent real-world entities:
- user profile
- product details
- course information
- settings/config
- API response records

If arrays are for ordered lists, objects are for structured records.

---

## 9.1 Creating Objects

You can create objects using curly braces `{}`.

### Basic syntax

```js
const user = {
  name: "Rohith",
  age: 21,
  isActive: true,
};
```

In this object:
- `name`, `age`, `isActive` are **keys** (properties)
- `"Rohith"`, `21`, `true` are **values**

### Empty object

```js
const profile = {};
```

### Add properties later

```js
profile.name = "Ava";
profile.city = "Hyderabad";
```

### Another way: `new Object()` (less common)

```js
const product = new Object();
product.id = 101;
product.title = "Keyboard";
```

Prefer object literal `{}` in modern JavaScript for readability.

---

## 9.2 Object Properties

Object properties are key-value pairs inside an object.

### Accessing properties

There are two common ways:

1. Dot notation
2. Bracket notation

```js
const student = {
  name: "Riya",
  marks: 92,
};

console.log(student.name);   // dot notation -> Riya
console.log(student["marks"]); // bracket notation -> 92
```

### When to use dot vs bracket

| Style | Best use |
|---|---|
| Dot notation | key name is known and simple |
| Bracket notation | key is dynamic or has spaces/special chars |

### Dynamic property access

```js
const keyName = "name";
console.log(student[keyName]); // Riya
```

### Updating properties

```js
student.marks = 95;
console.log(student.marks); // 95
```

### Adding new properties

```js
student.city = "Pune";
```

### Deleting properties

```js
delete student.city;
```

### Check if property exists

```js
console.log("name" in student); // true
console.log(student.hasOwnProperty("marks")); // true
```

### Object keys and values

```js
console.log(Object.keys(student));   // ["name", "marks"]
console.log(Object.values(student)); // ["Riya", 95]
```

---

## 9.3 Object Methods

A method is a function stored inside an object.

Methods allow objects to store behavior along with data.

### Example

```js
const user = {
  name: "Mia",
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, Mia
```

### Why `this` is used

Inside object methods, `this` usually refers to the current object.

```js
const product = {
  title: "Laptop",
  price: 50000,
  getLabel() {
    return `${this.title} - Rs.${this.price}`;
  },
};
```

### Method shorthand vs old style

Both are valid:

```js
const a = {
  greet: function () {
    return "Hi";
  },
};

const b = {
  greet() {
    return "Hi";
  },
};
```

Modern shorthand (`greet() {}`) is cleaner.

### Caution with arrow functions in methods

Arrow functions do not have their own `this`, so they may not behave as expected in object methods.

```js
const user2 = {
  name: "Leo",
  greet: () => `Hello, ${this.name}`, // this may not refer to user2
};
```

For object methods, regular function syntax is usually safer.

---

## 9.4 Nested Objects

Nested objects mean objects inside objects.

Real API responses are often nested, so this is a very important skill.

### Example

```js
const employee = {
  id: 1,
  name: "Ava",
  address: {
    city: "Bengaluru",
    pincode: 560001,
  },
  company: {
    name: "Tech Corp",
    dept: "Engineering",
  },
};
```

### Access nested properties

```js
console.log(employee.address.city);   // Bengaluru
console.log(employee.company.dept);   // Engineering
```

### Update nested properties

```js
employee.address.city = "Hyderabad";
```

### Add nested property

```js
employee.address.state = "Telangana";
```

### Safe access with optional chaining

Optional chaining (`?.`) prevents runtime errors when path may be missing.

```js
console.log(employee.contact?.email); // undefined (no error)
```

Without optional chaining:

```js
// console.log(employee.contact.email); // Error if contact is undefined
```

### Why nested objects matter

- Most backend/API data is nested
- UI forms often produce nested payloads
- Config files are commonly nested

---

## 9.5 Object Destructuring

Destructuring allows you to extract values from objects into variables using short syntax.

### Basic destructuring

```js
const user = {
  name: "Riya",
  age: 22,
  city: "Pune",
};

const { name, age } = user;
console.log(name); // Riya
console.log(age);  // 22
```

### Rename while destructuring

```js
const { name: fullName } = user;
console.log(fullName); // Riya
```

### Default values

```js
const { role = "student" } = user;
console.log(role); // student
```

### Nested destructuring

```js
const profile = {
  id: 1,
  address: {
    city: "Delhi",
    pin: 110001,
  },
};

const {
  address: { city, pin },
} = profile;

console.log(city, pin); // Delhi 110001
```

### Destructuring in function parameters

```js
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser({ name: "Mia", age: 20 });
```

### Why destructuring is useful

- less repetitive code
- cleaner parameter handling
- easier to read when using object-heavy data

---

## Common Mistakes with Objects

1. Typo in property names (`fristName` vs `firstName`).
2. Confusing dot and bracket notation.
3. Using arrow function methods and expecting normal `this`.
4. Accessing deep nested property without checking existence.
5. Assuming object assignment creates deep copy.

---

## Quick Recap

- Objects store structured key-value data.
- Properties can be read, updated, added, or deleted.
- Methods are functions inside objects.
- Nested objects model complex real-world data.
- Destructuring extracts values cleanly and reduces repetition.

Strong object fundamentals are essential for APIs, React props/state, backend payloads, and most real JavaScript applications.
