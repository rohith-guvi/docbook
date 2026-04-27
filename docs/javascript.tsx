import { useState, useEffect, useRef, ReactNode, ReactElement } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg: "#0d1117",
  sidebar: "#010409",
  surface: "#161b22",
  border: "#21262d",
  borderLight: "#30363d",
  text: "#e6edf3",
  textMuted: "#8b949e",
  textDim: "#7d8590",
  textFaint: "#484f58",
  accent: "#238636",
  accentText: "#3fb950",
  code: "#79c0ff",
  codeAlt: "#ff7b72",
  codeBg: "#0d1117",
  stripedRow: "#111827",
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
};

// ─── All 14 modules from the MD file ─────────────────────────────────────────
const ALL_MODULES = [
  { id: "fundamentals", label: "1. JavaScript Fundamentals", order: 0 },
  { id: "variables", label: "2. Variables and Declarations", order: 1 },
  { id: "datatypes", label: "3. Data Types", order: 2 },
  { id: "operators", label: "4. Operators", order: 3 },
  { id: "controlflow", label: "5. Control Flow", order: 4 },
  { id: "loops", label: "6. Loops", order: 5 },
  { id: "functions", label: "7. Functions", order: 6 },
  { id: "arrays", label: "8. Arrays", order: 7 },
  { id: "objects", label: "9. Objects", order: 8 },
  { id: "dom", label: "10. DOM Manipulation", order: 9 },
  { id: "events", label: "11. Events", order: 10 },
  { id: "formhandling", label: "12. Form Handling", order: 11 },
  { id: "modernjs", label: "13. Modern JavaScript (ES6+)", order: 12 },
  { id: "async", label: "14. Asynchronous JavaScript", order: 13 },
];

// ─── Shared UI primitives ─────────────────────────────────────────────────────
const Code = ({ children, lang = "" }: { children: string; lang?: string }) => (
  <div style={{
    background: T.codeBg,
    border: `1px solid ${T.borderLight}`,
    borderRadius: 8,
    margin: "12px 0",
    overflow: "hidden",
  }}>
    {lang && (
      <div style={{
        background: T.surface,
        borderBottom: `1px solid ${T.border}`,
        padding: "4px 14px",
        fontSize: 11,
        color: T.textDim,
        fontFamily: T.mono,
        letterSpacing: "0.04em",
      }}>{lang}</div>
    )}
    <pre style={{
      margin: 0,
      padding: "14px 18px",
      fontFamily: T.mono,
      fontSize: 13,
      lineHeight: 1.72,
      color: "#e6edf3",
      overflowX: "auto",
      whiteSpace: "pre",
    }}>{children}</pre>
  </div>
);

const Tbl = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div style={{ overflowX: "auto", margin: "14px 0" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{
              background: T.surface,
              color: T.textDim,
              padding: "9px 16px",
              textAlign: "left",
              fontWeight: 600,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              border: `1px solid ${T.border}`,
              whiteSpace: "nowrap",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} style={{ background: ri % 2 === 0 ? T.codeBg : T.stripedRow }}>
            {row.map((cell, ci) => (
              <td key={ci} style={{
                padding: "9px 16px",
                color: ci === 0 ? T.code : T.textMuted,
                border: `1px solid ${T.border}`,
                fontFamily: ci === 0 ? T.mono : T.font,
                fontSize: ci === 0 ? 12.5 : 13.5,
                verticalAlign: "top",
                lineHeight: 1.6,
              }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderInlineContent = (item: ReactNode) => {
  if (typeof item === "string") {
    return <span dangerouslySetInnerHTML={{ __html: item }} />;
  }
  return <span>{item}</span>;
};

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul style={{ margin: "8px 0 12px", paddingLeft: 0, listStyle: "none" }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", gap: 10, color: T.textMuted,
        fontSize: 14, lineHeight: 1.75, marginBottom: 4, paddingLeft: 4,
      }}>
        <span style={{ color: T.accent, flexShrink: 0, marginTop: 3 }}>▸</span>
        {renderInlineContent(item)}
      </li>
    ))}
  </ul>
);

const NumList = ({ items }: { items: ReactNode[] }) => (
  <ol style={{ margin: "8px 0 12px", paddingLeft: 0, listStyle: "none", counterReset: "items" }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", gap: 12, color: T.textMuted,
        fontSize: 14, lineHeight: 1.75, marginBottom: 6, paddingLeft: 4,
      }}>
        <span style={{
          color: T.accent, fontFamily: T.mono, fontSize: 12,
          fontWeight: 700, flexShrink: 0, minWidth: 18, marginTop: 2,
        }}>{i + 1}.</span>
        {renderInlineContent(item)}
      </li>
    ))}
  </ol>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 style={{
    color: T.text, fontSize: 18, fontWeight: 700,
    marginTop: 44, marginBottom: 14, paddingBottom: 10,
    borderBottom: `1px solid ${T.border}`, fontFamily: T.font,
    letterSpacing: "-0.01em",
  }}>{children}</h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 style={{
    color: "#c9d1d9", fontSize: 14.5, fontWeight: 600,
    marginTop: 24, marginBottom: 8, fontFamily: T.font,
  }}>{children}</h3>
);

const H4 = ({ children }: { children: ReactNode }) => (
  <h4 style={{
    color: T.textDim, fontSize: 13, fontWeight: 600,
    marginTop: 18, marginBottom: 6, textTransform: "uppercase",
    letterSpacing: "0.05em", fontFamily: T.font,
  }}>{children}</h4>
);

const P = ({ children }: { children: ReactNode }) => {
  if (typeof children === "string") {
    return <p style={{ color: T.textMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <p style={{ color: T.textMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 10 }}>{children}</p>;
};

const Divider = () => (
  <div style={{ height: 1, background: T.border, margin: "32px 0" }} />
);

const Callout = ({ type, children }: { type: "note" | "tip" | "warn"; children: ReactNode }) => {
  const colors = { note: "#388bfd", tip: T.accent, warn: "#d29922" };
  const labels = { note: "Note", tip: "Tip", warn: "Warning" };
  return (
    <div style={{
      background: T.surface, border: `1px solid ${T.border}`,
      borderLeft: `3px solid ${colors[type]}`, borderRadius: 8,
      padding: "12px 16px", margin: "14px 0",
    }}>
      <span style={{ color: colors[type], fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {labels[type]}
      </span>
      <p style={{ color: T.textMuted, fontSize: 13.5, lineHeight: 1.7, margin: "4px 0 0" }}>{children}</p>
    </div>
  );
};

const Tag = ({ children }: { children: ReactNode }) => (
  <span style={{
    display: "inline-block", background: "transparent",
    border: `1px solid ${T.borderLight}`, borderRadius: 6,
    padding: "2px 10px", fontSize: 12, color: T.textDim,
    fontFamily: T.mono, marginRight: 6,
  }}>{children}</span>
);

const IC = ({ c }: { c: string }) => (
  <code style={{
    background: T.surface, border: `1px solid ${T.border}`,
    borderRadius: 4, padding: "1px 6px", fontSize: 12.5,
    color: T.code, fontFamily: T.mono,
  }}>{c}</code>
);

// ─── Content sections ─────────────────────────────────────────────────────────

function FundamentalsSection() {
  return (
    <div>
      <P>JavaScript is the programming language that brings web pages to life. If HTML gives structure and CSS gives style, JavaScript gives <strong style={{ color: "#c9d1d9" }}>behavior</strong>.</P>
      <Bullets items={["Respond to clicks and keyboard input", "Validate forms", "Update page content dynamically", "Fetch data from APIs", "Build complete frontend and backend applications"]} />

      <H2>1.1 Introduction to JavaScript</H2>
      <P>JavaScript is a high-level, interpreted language mainly used for web development.</P>
      <H3>Why JavaScript is important</H3>
      <P>JavaScript runs in all modern browsers and is one of the core technologies of the web.</P>
      <Bullets items={["HTML → structure", "CSS → presentation", "JavaScript → interaction and logic"]} />

      <H3>Where JavaScript is used</H3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, margin: "12px 0" }}>
        {[
          { t: "Frontend (Browser)", d: "Interactive UI, animations, validation, dynamic updates" },
          { t: "Backend (Node.js)", d: "APIs, server logic, database interaction" },
          { t: "Mobile / Desktop", d: "React Native, Electron, and more" },
        ].map((c, i) => (
          <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 16 }}>
            <div style={{ color: T.accentText, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{c.t}</div>
            <div style={{ color: T.textMuted, fontSize: 13, lineHeight: 1.6 }}>{c.d}</div>
          </div>
        ))}
      </div>

      <H3>JavaScript evolution</H3>
      <Bullets items={["ES5: older baseline", "ES6+ (modern JS): let, const, arrow functions, classes, modules, etc."]} />

      <H2>1.2 How JavaScript Works in the Browser</H2>
      <Tbl headers={["Component", "Role"]} rows={[
        ["JavaScript Engine", "Executes JS code (example: V8 in Chrome)"],
        ["Call Stack", "Tracks currently running functions"],
        ["Web APIs", "Browser features like DOM, timers, fetch"],
        ["Callback Queue", "Stores callbacks waiting to run"],
        ["Event Loop", "Moves callbacks to stack when stack is free"],
      ]} />
      <H3>Synchronous vs asynchronous</H3>
      <Code lang="javascript">{`console.log("A");
console.log("B");
console.log("C");
// Output: A → B → C`}</Code>
      <Code lang="javascript">{`console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

console.log("End");
// Output: Start → End → Inside timeout
// Even with 0 delay, callback runs later through the event loop.`}</Code>

      <H2>1.3 Adding JavaScript to HTML</H2>
      <H3>1) Inline JavaScript</H3>
      <Code lang="html">{`<button onclick="alert('Clicked!')">Click</button>`}</Code>
      <H3>2) Internal JavaScript</H3>
      <Code lang="html">{`<script>
  console.log("Internal script");
</script>`}</Code>
      <H3>3) External JavaScript (recommended)</H3>
      <Code lang="html">{`<script src="app.js" defer></script>`}</Code>
      <Tbl headers={["Attribute", "Behavior"]} rows={[
        ["defer", "Downloads in parallel, runs after HTML parsing"],
        ["async", "Downloads in parallel, runs as soon as downloaded"],
      ]} />

      <H2>1.4 JavaScript Syntax</H2>
      <Code lang="javascript">{`let name = "Rohith";
const age = 21;

if (age >= 18) {
  console.log(\`\${name} is an adult\`);
}`}</Code>
      <Bullets items={[
        "JavaScript is case-sensitive — <code style='color:#79c0ff;font-family:monospace'>myVar</code> and <code style='color:#79c0ff;font-family:monospace'>myvar</code> are different",
        "Statements end with semicolons (optional but recommended)",
        "Code blocks use curly braces <code style='color:#79c0ff;font-family:monospace'>{}</code>",
        "Variable names cannot start with numbers",
      ]} />

      <H2>1.5 Comments in JavaScript</H2>
      <Code lang="javascript">{`// This is a single-line comment
const tax = 18;

/*
  This is a
  multi-line comment
*/
const country = "India";

// Good: explain WHY, not obvious what
const role = userRole || "guest"; // fallback to avoid undefined access`}</Code>

      <Divider />
      <H3>Quick Recap</H3>
      <Bullets items={[
        "JavaScript adds behavior and logic to web pages",
        "Browser runs JS using engine + event loop model",
        "Best practice is external JS file with <code style='color:#79c0ff;font-family:monospace'>defer</code>",
        "Syntax rules and formatting are essential for error-free code",
        "Comments help explain intent and improve maintainability",
      ]} />
    </div>
  );
}

function VariablesSection() {
  return (
    <div>
      <P>Variables are named containers in memory. Understanding the three declaration keywords is essential — every topic after this depends on it.</P>

      <H2>2.1 var</H2>
      <P><IC c="var" /> is the old way to declare variables (before ES6). Still seen in legacy code.</P>
      <Code lang="javascript">{`var city = "Hyderabad";
console.log(city); // Hyderabad`}</Code>
      <H3>Characteristics of var</H3>
      <Bullets items={[
        "Function-scoped (not block-scoped)",
        "Can be re-declared in same scope",
        "Can be reassigned",
        "Hoisted and initialized as <code style='color:#79c0ff;font-family:monospace'>undefined</code>",
      ]} />
      <Code lang="javascript">{`// Not block scoped — leaks outside if/for blocks
if (true) {
  var message = "Hello";
}
console.log(message); // Hello (many expect ReferenceError)

// Hoisting
console.log(product); // undefined (not an error)
var product = "Laptop";`}</Code>
      <Callout type="warn">In modern code, avoid <IC c="var" /> entirely. Use <IC c="let" /> or <IC c="const" /> instead.</Callout>

      <H2>2.2 let</H2>
      <P>Introduced in ES6. The preferred choice for values that need to change.</P>
      <Code lang="javascript">{`let count = 1;
count = 2; // OK — reassignment allowed
// let count = 3; // SyntaxError — re-declaration not allowed

if (true) {
  let language = "JavaScript";
  console.log(language); // JavaScript
}
// console.log(language); // ReferenceError — block scoped`}</Code>

      <H2>2.3 const</H2>
      <P>The best default choice in modern JavaScript. Block-scoped and cannot be reassigned.</P>
      <Code lang="javascript">{`const appName = "Doc Book";
// appName = "Other"; // TypeError — reassignment not allowed

// Important: const prevents reassignment, NOT mutation
const user = { name: "Ava" };
user.name = "Mia"; // OK — object mutation is fine

const colors = ["red", "blue"];
colors.push("green"); // OK — array mutation is fine

// user = {}; // TypeError — reassignment of binding`}</Code>
      <Callout type="tip">Use <IC c="const" /> for most declarations. Switch to <IC c="let" /> only when you know the value must change.</Callout>

      <H2>2.4 Variable Naming Rules</H2>
      <Tbl headers={["Rule", "Valid Examples", "Invalid Examples"]} rows={[
        ["Letters, digits, _, $", "user1, _temp, $amount", "user-name"],
        ["Cannot start with digit", "name1", "1name"],
        ["No spaces", "firstName", "first name"],
        ["Case-sensitive", "count, Count (different)", "—"],
        ["No reserved keywords", "—", "let, class, return"],
      ]} />
      <Code lang="javascript">{`// camelCase for variables and functions
let firstName = "Riya";
let totalPrice = 450;

// Boolean names as questions
let isLoggedIn = false;
let hasPermission = true;

// UPPER_SNAKE_CASE for fixed business constants
const MAX_LOGIN_ATTEMPTS = 5;
const API_TIMEOUT_MS = 3000;`}</Code>

      <H2>2.5 Scope Basics</H2>
      <Tbl headers={["Scope Type", "Created By", "Accessible Where"]} rows={[
        ["Global Scope", "Declared outside all functions/blocks", "Everywhere in file"],
        ["Function Scope", "var inside function", "Only inside that function"],
        ["Block Scope", "let/const inside {}", "Only inside that block"],
      ]} />
      <Code lang="javascript">{`const site = "Doc Book"; // global

function outer() {
  const course = "JavaScript"; // function scope

  function inner() {
    const topic = "Variables"; // block scope
    console.log(site, course, topic); // all accessible via scope chain
  }
  inner();
}
outer(); // Doc Book JavaScript Variables

// Shadowing
let role = "Student";
function showRole() {
  let role = "Admin"; // shadows outer role
  console.log(role);  // Admin
}
showRole();
console.log(role); // Student`}</Code>

      <Divider />
      <H2>var vs let vs const (Quick Comparison)</H2>
      <Tbl headers={["Feature", "var", "let", "const"]} rows={[
        ["Scope", "Function", "Block", "Block"],
        ["Reassign", "Yes", "Yes", "No"],
        ["Re-declare same scope", "Yes", "No", "No"],
        ["Hoisted", "Yes (undefined)", "Yes (TDZ)", "Yes (TDZ)"],
        ["Must initialize", "No", "No", "Yes"],
        ["Recommendation", "Avoid", "Use when needed", "Default choice"],
      ]} />
    </div>
  );
}

function DataTypesSection() {
  return (
    <div>
      <P>Data types determine what kind of value a variable holds. JavaScript has 7 primitives and 1 non-primitive (Object).</P>

      <H2>3.1 Primitive Data Types</H2>
      <P>Primitives are immutable and copied by value.</P>
      <Code lang="javascript">{`let a = 10;
let b = a;  // b is an independent copy
b = 99;
console.log(a); // 10 — unchanged
console.log(b); // 99`}</Code>
      <Tbl headers={["Type", "Example", "Notes"]} rows={[
        ["string", `"hello"`, "Text values"],
        ["number", "42, 3.14, -2", "Integers and floats in one type"],
        ["boolean", "true / false", "Logical values"],
        ["undefined", "undefined", "Declared but not assigned"],
        ["null", "null", "Intentional empty value"],
        ["bigint", "9007199254740991n", "Arbitrarily large integers"],
        ["symbol", "Symbol('id')", "Unique identifiers"],
      ]} />

      <H2>3.2 String</H2>
      <Code lang="javascript">{`const firstName = "Rohith";
const city = 'Hyderabad';
const message = \`Welcome to JavaScript\`;  // backtick = template literal

// Template literals (recommended)
const user = "Ava";
const greeting = \`Hello, \${user}!\`;  // Hello, Ava!

// Common string methods
const text = "JavaScript";
text.length;            // 10
text.toUpperCase();     // JAVASCRIPT
text.toLowerCase();     // javascript
text.includes("Script"); // true
text.slice(0, 4);        // Java
text.replace("Java", "Type"); // TypeScript

// Strings are immutable — methods return new strings
const lang = "js";
lang.toUpperCase();
console.log(lang); // js (unchanged)`}</Code>

      <H2>3.3 Number</H2>
      <Code lang="javascript">{`const age = 21;
const price = 499.99;
const temperature = -2;

// Arithmetic
const a = 10, b = 3;
console.log(a + b);   // 13
console.log(a % b);   // 1 (remainder)
console.log(a ** 2);  // 100 (power)

// NaN — result of invalid numeric operation
console.log("hello" * 2); // NaN
console.log(Number.isNaN("hello" * 2)); // true

// String to number conversion
const input = "45";
const result = Number(input) + 5; // 50
parseInt("42px");  // 42`}</Code>

      <H2>3.4 Boolean</H2>
      <Code lang="javascript">{`const isLoggedIn = true;
const hasPermission = false;

// Booleans from comparisons
console.log(5 > 3);        // true
console.log(10 === "10");  // false

// Falsy values
// false | 0 | "" | null | undefined | NaN

// Everything else is truthy
if ("hello") console.log("runs"); // runs
if (0)       console.log("won't run");`}</Code>

      <H2>3.5 null</H2>
      <P><IC c="null" /> means intentional empty value — chosen by the developer.</P>
      <Code lang="javascript">{`let selectedUser = null;

if (selectedUser === null) {
  console.log("No user selected yet");
}`}</Code>

      <H2>3.6 undefined</H2>
      <P><IC c="undefined" /> means declared but not assigned, function returned nothing, or property doesn't exist.</P>
      <Code lang="javascript">{`let status;
console.log(status); // undefined

function greet() {}
console.log(greet()); // undefined

const user = { name: "Mia" };
console.log(user.age); // undefined`}</Code>
      <Tbl headers={["Value", "Meaning"]} rows={[
        ["null", "Intentionally empty — developer's choice"],
        ["undefined", "Not assigned / missing"],
      ]} />

      <H2>3.7 Non-Primitive Types (Reference Types)</H2>
      <P>Objects, Arrays, and Functions are stored by reference. Assigning doesn't create a copy.</P>
      <Code lang="javascript">{`const a = { score: 10 };
const b = a;          // b references same object
b.score = 99;
console.log(a.score); // 99 — a was also changed!`}</Code>

      <H2>3.8 Objects</H2>
      <Code lang="javascript">{`const student = {
  name: "Riya",
  age: 20,
  isEnrolled: true,
};

// Access
console.log(student.name);      // dot notation
console.log(student["age"]);    // bracket notation

// Update / add
student.age = 21;
student.city = "Hyderabad";

// Methods
const user = {
  name: "Ava",
  greet() { return \`Hello, \${this.name}\`; },
};
console.log(user.greet()); // Hello, Ava

// Destructuring
const { name, age } = student;
console.log(name, age); // Riya 21`}</Code>

      <H2>3.9 Arrays</H2>
      <Code lang="javascript">{`const fruits = ["Apple", "Banana", "Mango"];

// Access (0-indexed)
console.log(fruits[0]); // Apple
console.log(fruits[fruits.length - 1]); // Mango

// Common methods
fruits.push("Orange");    // add to end
fruits.pop();             // remove from end
fruits.unshift("Grape");  // add to start
fruits.shift();           // remove from start

// Iteration methods
const values = [1, 2, 3, 4];
const doubled = values.map((n) => n * 2);          // [2,4,6,8]
const even    = values.filter((n) => n % 2 === 0); // [2,4]
const sum     = values.reduce((acc, n) => acc + n, 0); // 10`}</Code>
    </div>
  );
}

function OperatorsSection() {
  return (
    <div>
      <P>Operators are symbols that tell JavaScript to perform an action on values — math, assignment, comparison, logic, and type inspection.</P>

      <H2>4.1 Arithmetic Operators</H2>
      <Tbl headers={["Operator", "Meaning", "Example", "Result"]} rows={[
        ["+", "Addition", "10 + 5", "15"],
        ["-", "Subtraction", "10 - 5", "5"],
        ["*", "Multiplication", "10 * 5", "50"],
        ["/", "Division", "10 / 3", "3.333..."],
        ["%", "Modulus (remainder)", "10 % 3", "1"],
        ["**", "Exponentiation", "2 ** 3", "8"],
      ]} />
      <Code lang="javascript">{`// Important: + with strings does concatenation
console.log("10" + 5); // "105" — not 15!
console.log(10 + 5);   // 15`}</Code>

      <H2>4.2 Assignment Operators</H2>
      <Tbl headers={["Operator", "Meaning", "Same As"]} rows={[
        ["=", "Assign", "—"],
        ["+=", "Add and assign", "x = x + 5"],
        ["-=", "Subtract and assign", "x = x - 5"],
        ["*=", "Multiply and assign", "x = x * 2"],
        ["/=", "Divide and assign", "x = x / 2"],
        ["%=", "Modulus and assign", "x = x % 3"],
      ]} />

      <H2>4.3 Comparison Operators</H2>
      <Tbl headers={["Operator", "Meaning", "Example", "Result"]} rows={[
        ["==", "Equal (loose)", `5 == "5"`, "true"],
        ["===", "Equal (strict)", `5 === "5"`, "false"],
        ["!=", "Not equal (loose)", `5 != "5"`, "false"],
        ["!==", "Not equal (strict)", `5 !== "5"`, "true"],
        [">", "Greater than", "7 > 5", "true"],
        ["<", "Less than", "3 < 5", "true"],
        [">=", "Greater or equal", "5 >= 5", "true"],
        ["<=", "Less or equal", "4 <= 5", "true"],
      ]} />
      <Callout type="tip">Always prefer <IC c="===" /> and <IC c="!==" /> (strict). They avoid hidden type conversions.</Callout>

      <H2>4.4 Logical Operators</H2>
      <Tbl headers={["Operator", "Meaning", "Rule"]} rows={[
        ["&&", "AND", "true only if both are true"],
        ["||", "OR", "true if at least one is true"],
        ["!", "NOT", "reverses true/false"],
      ]} />
      <Code lang="javascript">{`const isLoggedIn = true;
const isVerified = false;

console.log(isLoggedIn && isVerified); // false
console.log(isLoggedIn || isVerified); // true
console.log(!isLoggedIn); // false

// Short-circuit
console.log(false && "will not run"); // false
console.log(true  || "will not run"); // true

// Practical use
const role = userRole || "guest"; // default value
isLoggedIn && console.log("Show dashboard"); // conditional render`}</Code>

      <H2>4.5 Ternary Operator</H2>
      <Code lang="javascript">{`// condition ? valueIfTrue : valueIfFalse
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// Avoid deeply nested ternaries — hard to read
// const label = score > 90 ? "A" : score > 75 ? "B" : "C";`}</Code>

      <H2>4.6 Type Operators</H2>
      <Code lang="javascript">{`// typeof — returns type as string
console.log(typeof "Hello");   // "string"
console.log(typeof 100);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ← historic JS quirk!
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"

// instanceof — check constructor relationship
const arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true`}</Code>
    </div>
  );
}

function ControlFlowSection() {
  return (
    <div>
      <P>Control flow determines the order JavaScript executes code based on conditions. Without it, every line runs top to bottom with no decision-making.</P>

      <H2>5.1 if Statement</H2>
      <Code lang="javascript">{`const age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Common mistake: using = instead of ===
// if (age = 18) { ... }  // wrong — this is assignment!
if (age === 18) { /* correct */ }`}</Code>

      <H2>5.2 if...else Statement</H2>
      <Code lang="javascript">{`const isMember = false;
if (isMember) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}

const password = "abc123";
if (password.length >= 8) {
  console.log("Strong enough");
} else {
  console.log("Password must be at least 8 characters");
}`}</Code>

      <H2>5.3 else if Ladder</H2>
      <Code lang="javascript">{`const marks = 82;
let grade;

if (marks >= 90)      grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 60) grade = "C";
else if (marks >= 35) grade = "D";
else                  grade = "Fail";

console.log(grade); // B`}</Code>
      <Callout type="warn">Order matters! Place more specific / higher-priority conditions first. A <IC c=">= 35" /> check before <IC c=">= 90" /> would always match first.</Callout>

      <H2>5.4 switch Statement</H2>
      <Code lang="javascript">{`const day = "Tuesday";
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

console.log(task); // Code implementation`}</Code>
      <Callout type="note">Without <IC c="break" />, execution falls through to the next case — usually unintended.</Callout>

      <H2>5.5 Conditional Expressions</H2>
      <Code lang="javascript">{`// Ternary
const category = age >= 18 ? "Adult" : "Minor";

// Short-circuit && (conditional render)
const isLoggedIn = true;
isLoggedIn && console.log("Show dashboard");

// || fallback value
const displayName = "" || "Guest"; // Guest

// ?? nullish coalescing — fallback only for null/undefined
const count = 0;
const v1 = count || 10;  // 10 (0 is falsy)
const v2 = count ?? 10;  // 0 (keeps 0!)`}</Code>

      <Divider />
      <Tbl headers={["Pattern", "Best Use Case", "Example"]} rows={[
        ["if", "Single condition", "if (isLoggedIn)"],
        ["if...else", "Two outcomes", "valid / invalid"],
        ["else if ladder", "Multiple condition checks", "grade ranges"],
        ["switch", "One variable, many exact values", "day / status"],
        ["Ternary / expressions", "Short inline decision", "label text"],
      ]} />
    </div>
  );
}

function LoopsSection() {
  return (
    <div>
      <P>Loops repeat a block of code based on a condition. They're essential for arrays, API responses, UI rendering, and algorithmic tasks.</P>

      <H2>6.1 for Loop</H2>
      <P>Best when you know how many iterations you need.</P>
      <Code lang="javascript">{`for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// Real-world: sum an array
const prices = [100, 200, 300];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(total); // 600`}</Code>

      <H2>6.2 while Loop</H2>
      <P>Best when the number of iterations isn't fixed in advance.</P>
      <Code lang="javascript">{`let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}
// Forgetting count++ causes an infinite loop!`}</Code>

      <H2>6.3 do...while Loop</H2>
      <P>Like <IC c="while" />, but always runs at least once (checks condition after first execution).</P>
      <Code lang="javascript">{`let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 3);

// Difference vs while when condition is already false
let x = 10;
while (x < 5)  { console.log("while"); }    // never runs
do { console.log("do...while runs once"); } while (x < 5); // runs once`}</Code>

      <H2>6.4 for...of Loop</H2>
      <P>Iterates over the values of any iterable — arrays, strings, Maps, Sets.</P>
      <Code lang="javascript">{`const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Works on strings too
for (const ch of "JS") {
  console.log(ch); // J, then S
}`}</Code>

      <H2>6.5 for...in Loop</H2>
      <P>Iterates over the keys (property names) of an object.</P>
      <Code lang="javascript">{`const user = { name: "Riya", age: 22, city: "Hyderabad" };

for (const key in user) {
  console.log(key, ":", user[key]);
}
// name : Riya
// age  : 22
// city : Hyderabad`}</Code>
      <Callout type="warn">Do not use <IC c="for...in" /> for arrays. Prefer <IC c="for" />, <IC c="for...of" />, or array methods like <IC c="forEach" /> / <IC c="map" />.</Callout>

      <H2>6.6 break and continue</H2>
      <Code lang="javascript">{`// break — stops loop immediately
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // 1 2 3 4
}

// continue — skips current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4 5
}`}</Code>

      <Divider />
      <Tbl headers={["Loop Type", "Best Use", "Notes"]} rows={[
        ["for", "Known count loops", "Full control (index, condition, update)"],
        ["while", "Unknown count loops", "Condition-driven"],
        ["do...while", "Must run once minimum", "Post-check condition"],
        ["for...of", "Iterate iterable values", "Clean for arrays/strings"],
        ["for...in", "Iterate object keys", "Prefer for objects"],
      ]} />
    </div>
  );
}

function FunctionsSection() {
  return (
    <div>
      <P>Functions are reusable blocks of code. If variables store data, functions define behavior.</P>

      <H2>7.1 Function Declaration</H2>
      <Code lang="javascript">{`function greetUser(name) {
  console.log(\`Hello, \${name}\`);
}
greetUser("Rohith"); // Hello, Rohith

// Hoisting: function declarations can be called before they're defined
sayHello(); // Works!
function sayHello() { console.log("Hi"); }`}</Code>

      <H2>7.2 Function Expressions</H2>
      <Code lang="javascript">{`const add = function(a, b) {
  return a + b;
};
console.log(add(4, 6)); // 10

// Not hoisted — cannot call before declaration
// console.log(subtract(10, 2)); // Error
const subtract = function(a, b) { return a - b; };`}</Code>

      <H2>7.3 Arrow Functions</H2>
      <Code lang="javascript">{`// Standard arrow function
const multiply = (a, b) => {
  return a * b;
};

// Single-expression shorthand (implicit return)
const square = (n) => n * n;
console.log(square(4)); // 16

// Single parameter — parens optional
const greet = name => \`Hi, \${name}\`;

// Arrow functions don't have their own 'this'
// Use regular functions for object methods`}</Code>

      <H2>7.4 Parameters & Arguments</H2>
      <Code lang="javascript">{`function introduce(name, age) { // parameters
  console.log(\`My name is \${name} and I am \${age} years old.\`);
}
introduce("Riya", 21); // arguments`}</Code>

      <H2>7.5 Return Values</H2>
      <Code lang="javascript">{`function add(a, b) { return a + b; }
const result = add(5, 7);
console.log(result); // 12

// No return → undefined
function logMessage(msg) { console.log(msg); }
const value = logMessage("Hello");
console.log(value); // undefined

// Early return pattern — avoids deep nesting
function checkAge(age) {
  if (age < 18) return "Not eligible";
  return "Eligible";
}`}</Code>

      <H2>7.6 Default Parameters</H2>
      <Code lang="javascript">{`function greet(name = "Guest") {
  return \`Hello, \${name}\`;
}
console.log(greet("Rohith")); // Hello, Rohith
console.log(greet());         // Hello, Guest

function createUser(name = "Unknown", role = "student") {
  return \`\${name} - \${role}\`;
}`}</Code>

      <H2>7.7 Rest Parameters</H2>
      <Code lang="javascript">{`function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(2, 4));       // 6
console.log(sumAll(1, 2, 3, 4)); // 10

function orderSummary(customerName, ...items) {
  return \`\${customerName} ordered \${items.length} items\`;
}
// Rest must be last parameter
// function test(...nums, last) {} // invalid`}</Code>

      <Divider />
      <Tbl headers={["Type", "Syntax", "Hoisted", "Best For"]} rows={[
        ["Function Declaration", "function fn(){}", "Yes", "General reusable functions"],
        ["Function Expression", "const fn = function(){}", "No", "Dynamic assignment, callbacks"],
        ["Arrow Function", "const fn = () => {}", "No", "Concise callbacks, short utilities"],
      ]} />
    </div>
  );
}

function ArraysSection() {
  return (
    <div>
      <P>Arrays store ordered collections of values. Essential for API data, UI lists, and nearly every real JavaScript project.</P>

      <H2>8.1 Creating & Accessing Arrays</H2>
      <Code lang="javascript">{`const fruits = ["Apple", "Banana", "Mango"];
const marks = [75, 82, 91, 66];
const empty = [];

// Access by index (0-based)
console.log(fruits[0]); // Apple
console.log(fruits[fruits.length - 1]); // Mango

// Update by index
fruits[1] = "Orange";

// Out-of-range returns undefined
console.log(fruits[99]); // undefined`}</Code>

      <H2>8.2 Array Methods Basics</H2>
      <Tbl headers={["Method", "What it does", "Mutates?"]} rows={[
        ["push()", "Add item to end", "Yes"],
        ["pop()", "Remove item from end", "Yes"],
        ["unshift()", "Add item at start", "Yes"],
        ["shift()", "Remove item from start", "Yes"],
        ["includes()", "Check if value exists", "No"],
        ["indexOf()", "Return index of value", "No"],
        ["slice()", "Return portion of array", "No"],
        ["splice()", "Add/remove at specific index", "Yes"],
      ]} />
      <Code lang="javascript">{`const arr1 = [1, 2, 3, 4];
console.log(arr1.slice(1, 3)); // [2,3] — original unchanged

const arr2 = [1, 2, 3, 4];
arr2.splice(1, 2); // remove 2 items from index 1
console.log(arr2); // [1, 4]`}</Code>

      <H2>8.3 map()</H2>
      <P>Creates a new array by transforming every element. Original is unchanged.</P>
      <Code lang="javascript">{`const nums = [1, 2, 3, 4];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2,4,6,8]

// Extract fields from objects
const users = [{ id: 1, name: "Riya" }, { id: 2, name: "Arun" }];
const names = users.map((u) => u.name);
console.log(names); // ["Riya", "Arun"]`}</Code>

      <H2>8.4 filter()</H2>
      <P>Returns a new array with only elements matching the condition.</P>
      <Code lang="javascript">{`const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2,4,6]

const users = [
  { name: "Ava", active: true },
  { name: "Mia", active: false },
  { name: "Leo", active: true },
];
const activeUsers = users.filter((u) => u.active);`}</Code>

      <H2>8.5 reduce()</H2>
      <P>Combines all elements into a single value. Read it as: "start from initial value, update result for each item."</P>
      <Code lang="javascript">{`const nums = [10, 20, 30];
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 60

const cart = [
  { name: "Book", price: 300 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 700 },
];
const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice); // 1050`}</Code>

      <H2>8.6 find()</H2>
      <P>Returns the first element matching the condition, or <IC c="undefined" />.</P>
      <Code lang="javascript">{`const users = [
  { id: 1, name: "Riya" },
  { id: 2, name: "Arun" },
  { id: 3, name: "Mia" },
];
const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "Arun" }`}</Code>
      <Tbl headers={["Method", "Returns", "Match Count"]} rows={[
        ["find()", "Single element or undefined", "First match only"],
        ["filter()", "Array", "All matches"],
      ]} />

      <H2>8.7 forEach()</H2>
      <P>Executes a callback for each element. Does not return a new array — use for side effects.</P>
      <Code lang="javascript">{`const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});`}</Code>

      <Divider />
      <Tbl headers={["Method", "Returns", "Best Use"]} rows={[
        ["map()", "New array", "Transform each item"],
        ["filter()", "New array", "Keep matching items"],
        ["reduce()", "Single value", "Aggregate / combine"],
        ["find()", "One item or undefined", "First match"],
        ["forEach()", "undefined", "Side effects / iteration only"],
      ]} />
    </div>
  );
}

function ObjectsSection() {
  return (
    <div>
      <P>Objects store related data in key-value pairs. If arrays are for ordered lists, objects are for structured records.</P>

      <H2>9.1 Creating Objects</H2>
      <Code lang="javascript">{`const user = {
  name: "Rohith",
  age: 21,
  isActive: true,
};

// Access
console.log(user.name);      // dot notation
console.log(user["age"]);    // bracket notation

// Dynamic property access
const keyName = "name";
console.log(user[keyName]); // Rohith

// Update, add, delete
user.age = 22;
user.city = "Hyderabad";
delete user.city;

// Check existence
console.log("name" in user); // true
console.log(Object.keys(user));   // ["name", "age", ...]
console.log(Object.values(user)); // ["Rohith", 22, ...]`}</Code>

      <H2>9.2 Object Methods</H2>
      <Code lang="javascript">{`const product = {
  title: "Laptop",
  price: 50000,
  getLabel() {
    return \`\${this.title} - Rs.\${this.price}\`;
  },
};
console.log(product.getLabel()); // Laptop - Rs.50000

// Arrow functions don't have their own 'this'
// For object methods, use regular function syntax`}</Code>

      <H2>9.3 Nested Objects</H2>
      <Code lang="javascript">{`const employee = {
  id: 1,
  name: "Ava",
  address: { city: "Bengaluru", pincode: 560001 },
  company: { name: "Tech Corp", dept: "Engineering" },
};

console.log(employee.address.city);   // Bengaluru
console.log(employee.company.dept);   // Engineering

// Safe access with optional chaining
console.log(employee.contact?.email); // undefined (no error)
// Without ?.
// employee.contact.email → TypeError if contact is undefined`}</Code>

      <H2>9.4 Object Destructuring</H2>
      <Code lang="javascript">{`const user = { name: "Riya", age: 22, city: "Pune" };

// Basic
const { name, age } = user;

// Rename
const { name: fullName } = user;

// Default values
const { role = "student" } = user;

// Nested destructuring
const profile = { address: { city: "Delhi", pin: 110001 } };
const { address: { city, pin } } = profile;
console.log(city, pin); // Delhi 110001

// In function parameters
function printUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}
printUser({ name: "Mia", age: 20 });`}</Code>
    </div>
  );
}

function DomSection() {
  return (
    <div>
      <P>DOM manipulation is how JavaScript interacts with and updates web pages. The DOM (Document Object Model) is the browser's live object tree of HTML.</P>

      <H2>10.1 Selecting Elements</H2>
      <Tbl headers={["Method", "Returns", "Best for"]} rows={[
        ["document.getElementById()", "Single element", "Unique id"],
        ["document.querySelector()", "First match", "CSS selector"],
        ["document.querySelectorAll()", "NodeList", "Multiple elements"],
        ["document.getElementsByClassName()", "HTMLCollection", "Class-based"],
        ["document.getElementsByTagName()", "HTMLCollection", "Tag-based"],
      ]} />
      <Code lang="javascript">{`const title = document.getElementById("title");
const firstBtn = document.querySelector(".btn");
const allItems = document.querySelectorAll(".item");

// querySelector uses CSS selectors
const byId    = document.querySelector("#title");
const byClass = document.querySelector(".card");
const byTag   = document.querySelector("p");

// If selector doesn't match → null
const el = document.querySelector(".unknown");
console.log(el); // null`}</Code>

      <H2>10.2 Modifying Content</H2>
      <Code lang="javascript">{`const heading = document.querySelector("#title");
heading.textContent = "JavaScript DOM Started"; // plain text

const box = document.querySelector("#box");
box.innerHTML = "<strong>Hello</strong> <em>World</em>"; // HTML markup`}</Code>
      <Callout type="warn">Avoid inserting untrusted user data with <IC c="innerHTML" /> — XSS vulnerability risk.</Callout>

      <H2>10.3 Modifying Styles</H2>
      <Code lang="javascript">{`const title = document.querySelector("#title");

// Direct style (camelCase property names)
title.style.color = "blue";
title.style.backgroundColor = "lightyellow"; // not background-color
title.style.fontSize = "28px";

// Class-based approach (recommended)
const card = document.querySelector(".card");
card.classList.add("active");
card.classList.remove("hidden");
card.classList.toggle("selected");`}</Code>

      <H2>10.4 Creating & Removing Elements</H2>
      <Code lang="javascript">{`// Create
const list = document.querySelector("#todoList");
const li = document.createElement("li");
li.textContent = "Learn DOM methods";
list.appendChild(li);

// Insert positions
parent.appendChild(child);  // end
parent.prepend(child);       // start
reference.before(newNode);   // before element
reference.after(newNode);    // after element

// Remove
const item = document.querySelector(".old-item");
item.remove();`}</Code>

      <H2>10.5 Mini End-to-End Example</H2>
      <Code lang="html">{`<input id="taskInput" placeholder="Enter task" />
<button id="addBtn">Add</button>
<ul id="taskList"></ul>`}</Code>
      <Code lang="javascript">{`const taskInput = document.querySelector("#taskInput");
const addBtn    = document.querySelector("#addBtn");
const taskList  = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);

  taskInput.value = "";
});`}</Code>
    </div>
  );
}

function EventsSection() {
  return (
    <div>
      <P>Events are actions in the browser — clicks, key presses, form submissions — that JavaScript can listen for and respond to.</P>

      <H2>11.1 Event Listeners</H2>
      <Code lang="javascript">{`const btn = document.querySelector("#myBtn");

// Preferred approach
btn.addEventListener("click", () => {
  console.log("Clicked using addEventListener");
});

// Multiple handlers on same event — both run
btn.addEventListener("click", () => console.log("Handler 1"));
btn.addEventListener("click", () => console.log("Handler 2"));

// Remove — must use same function reference
function handleClick() { console.log("clicked"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);`}</Code>

      <H2>11.2 Mouse Events</H2>
      <Code lang="javascript">{`const box = document.querySelector("#box");

box.addEventListener("click",    () => console.log("Single click"));
box.addEventListener("dblclick", () => console.log("Double click"));

// Hover behavior
box.addEventListener("mouseenter", () => box.style.backgroundColor = "lightgreen");
box.addEventListener("mouseleave", () => box.style.backgroundColor = "white");

// Mouse position tracking
document.addEventListener("mousemove", (event) => {
  console.log(\`X: \${event.clientX}, Y: \${event.clientY}\`);
});`}</Code>

      <H2>11.3 Keyboard Events</H2>
      <Code lang="javascript">{`document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);

  if (event.key === "Enter") console.log("Enter pressed");

  // Custom shortcut: Ctrl+S
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    console.log("Custom save action");
  }
});`}</Code>
      <Tbl headers={["Property", "Meaning"]} rows={[
        ["event.key", "Key value (a, Enter, Escape)"],
        ["event.code", "Physical key (KeyA, ArrowUp)"],
        ["event.ctrlKey", "Whether Ctrl is pressed"],
        ["event.shiftKey", "Whether Shift is pressed"],
      ]} />

      <H2>11.4 Form Events</H2>
      <Code lang="javascript">{`const form = document.querySelector("#signupForm");

// submit — prevent page reload
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});

// input — real-time typing
const username = document.querySelector("#username");
username.addEventListener("input", () => {
  console.log("Current value:", username.value);
});

// focus / blur
username.addEventListener("focus", () => username.style.borderColor = "blue");
username.addEventListener("blur",  () => username.style.borderColor = "gray");`}</Code>

      <H2>11.5 Event Propagation</H2>
      <Code lang="javascript">{`// Bubbling: child fires first, then bubbles up to parent
const parent = document.querySelector("#parent");
const child  = document.querySelector("#child");

parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click",  () => console.log("Child clicked"));
// Clicking child: "Child clicked" → "Parent clicked"

// Stop bubbling
child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Only child handler runs");
});

// Capturing mode (third arg true)
parent.addEventListener("click", () => console.log("Parent capture"), true);`}</Code>

      <Divider />
      <Tbl headers={["Item", "Purpose"]} rows={[
        ["event.target", "Actual element that triggered event"],
        ["event.currentTarget", "Element where listener is attached"],
        ["event.type", "Event name (click, keydown)"],
        ["event.preventDefault()", "Prevents default browser behavior"],
        ["event.stopPropagation()", "Stops bubbling/capturing"],
      ]} />
    </div>
  );
}

function FormHandlingSection() {
  return (
    <div>
      <P>Form handling covers reading, validating, and submitting user input — essential for login, signup, checkout, and any data-entry UI.</P>

      <H2>12.1 Accessing & Reading Form Elements</H2>
      <Code lang="javascript">{`const form          = document.querySelector("#signupForm");
const nameInput     = document.querySelector("#name");
const emailInput    = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Read values on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name     = nameInput.value.trim();
  const email    = emailInput.value.trim();
  const password = passwordInput.value;

  console.log(name, email, password);
});

// Checkbox
const terms = document.querySelector("#terms");
console.log(terms.checked); // true or false`}</Code>

      <Tbl headers={["Input Type", "Read With", "Notes"]} rows={[
        ["text, email, password", ".value", "Always .trim()"],
        ["number", ".value", "Returns string — convert with Number()"],
        ["checkbox", ".checked", "Boolean"],
        ["select", ".value", "Selected option's value"],
      ]} />

      <H2>12.2 Form Validation</H2>
      <Code lang="javascript">{`function validateForm(name, email, password) {
  if (!name)                  return "Name is required";
  if (!email)                 return "Email is required";
  if (!email.includes("@"))   return "Enter a valid email";
  if (password.length < 6)    return "Password must be at least 6 characters";
  return ""; // valid
}

// Full submit handler
const errorBox = document.querySelector("#errorBox");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name     = nameInput.value.trim();
  const email    = emailInput.value.trim();
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

// Real-time validation
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  emailInput.style.borderColor = email.includes("@") ? "green" : "red";
});`}</Code>

      <H2>12.3 End-to-End Login Form</H2>
      <Code lang="html">{`<form id="loginForm">
  <input id="loginEmail"    type="email"    placeholder="Email" />
  <input id="loginPassword" type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
<p id="loginMessage"></p>`}</Code>
      <Code lang="javascript">{`const loginForm     = document.querySelector("#loginForm");
const loginEmail    = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginMessage  = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email    = loginEmail.value.trim();
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
});`}</Code>
    </div>
  );
}

function ModernJSSection() {
  return (
    <div>
      <P>ES6+ introduced syntax that makes JavaScript shorter, more readable, and less error-prone. These features are used everywhere in modern frontend and backend code.</P>

      <H2>13.1 Template Literals</H2>
      <Code lang="javascript">{`const name = "Rohith";

// Old way
const old = "Welcome " + name + " to JavaScript!";

// Template literals (backticks)
const modern = \`Welcome \${name} to JavaScript!\`;

// Multi-line
const note = \`Line 1
Line 2
Line 3\`;

// Expressions inside
const a = 10, b = 5;
console.log(\`Sum = \${a + b}\`); // Sum = 15`}</Code>

      <H2>13.2 Destructuring</H2>
      <Code lang="javascript">{`// Object destructuring
const user = { name: "Riya", age: 22, city: "Pune" };
const { name, age } = user;
const { name: fullName } = user;        // rename
const { role = "student" } = user;     // default value

// Array destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
const [a, , c] = [10, 20, 30, 40];    // skip values

// Nested
const { address: { city } } = { address: { city: "Delhi" } };

// In function parameters
function printUser({ name, age }) {
  console.log(\`\${name} is \${age}\`);
}
printUser({ name: "Mia", age: 20 });`}</Code>

      <H2>13.3 Spread Operator</H2>
      <Code lang="javascript">{`// Merge arrays
const arr1 = [1, 2], arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1,2,3,4]

// Clone array
const copy = [...arr1]; // independent copy

// Merge objects
const user = { name: "Ava", age: 21 };
const updatedUser = { ...user, city: "Hyderabad" };

// Overwrite properties
const settings = { theme: "light", fontSize: 14 };
const newSettings = { ...settings, theme: "dark" };

// Spread in function call
const values = [5, 9, 2];
console.log(Math.max(...values)); // 9`}</Code>

      <H2>13.4 Rest Operator</H2>
      <Code lang="javascript">{`// Spread = expands | Rest = collects

function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));   // 6
console.log(sumAll(5, 10, 15)); // 30

// With other params (rest must be last)
function printOrder(customer, ...items) {
  console.log(customer, items);
}

// Rest in destructuring
const { id, ...rest } = { id: 1, name: "Mia", role: "student" };
console.log(id);   // 1
console.log(rest); // { name: "Mia", role: "student" }`}</Code>

      <H2>13.5 Modules (Import / Export)</H2>
      <Code lang="javascript">{`// math.js — named exports
export const add      = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js — named imports
import { add, subtract } from "./math.js";
console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5

// greet.js — default export
export default function greet(name) {
  return \`Hello, \${name}\`;
}

// main.js — default import
import greet from "./greet.js";
import { add as sum } from "./math.js"; // alias
import * as math from "./math.js";      // import all`}</Code>
      <Callout type="note">Browser module scripts need <IC c='type="module"' /> on the script tag. Paths must include the file extension.</Callout>

      <Divider />
      <Tbl headers={["Feature", "Spread (...)", "Rest (...)"]} rows={[
        ["Purpose", "Expand values", "Collect values"],
        ["Common use", "Merge / clone arrays & objects", "Variable arguments"],
        ["Where used", "Array/object literals, function calls", "Function params, destructuring"],
      ]} />
    </div>
  );
}

function AsyncSection() {
  return (
    <div>
      <P>Asynchronous JavaScript lets your program handle time-consuming tasks (API calls, timers, file ops) without blocking the UI thread.</P>

      <H2>14.1 Synchronous vs Asynchronous</H2>
      <Code lang="javascript">{`// Synchronous
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
// Output: Step 1 → Step 2 → Step 3

// Asynchronous
console.log("Start");
setTimeout(() => { console.log("Inside timeout"); }, 1000);
console.log("End");
// Output: Start → End → Inside timeout
// setTimeout callback runs later through the event loop`}</Code>

      <H2>14.2 Callbacks</H2>
      <Code lang="javascript">{`function greet(name, callback) {
  console.log(\`Hello, \${name}\`);
  callback();
}
function done() { console.log("Greeting complete"); }
greet("Riya", done);

// Callback hell — deeply nested, hard to read
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => { console.log("Step 3"); }, 1000);
  }, 1000);
}, 1000);`}</Code>
      <Callout type="note">Callback hell led to Promises and async/await — cleaner solutions for sequential async work.</Callout>

      <H2>14.3 Promises</H2>
      <Code lang="javascript">{`const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Operation successful");
  else         reject("Operation failed");
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done"));

// Promise chaining
Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => n + 1)
  .then((result) => console.log(result)); // 11`}</Code>

      <H2>14.4 async / await</H2>
      <P>Built on Promises but reads like synchronous code. The cleanest way to write async logic.</P>
      <Code lang="javascript">{`async function loadUser() {
  try {
    const user = await fetchUser(); // waits for Promise to resolve
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}

// async functions always return a Promise
// await can only be used inside async functions
// const data = await fetchUser(); // invalid — must be inside async fn`}</Code>

      <H2>14.5 Fetch API</H2>
      <Code lang="javascript">{`// GET request
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// POST request
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Post", body: "Post body", userId: 1 }),
  });
  const data = await response.json();
  console.log(data);
}`}</Code>

      <H2>14.6 Handling API Responses</H2>
      <Code lang="javascript">{`async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // fetch resolves even for 404/500 — always check response.ok!
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Request failed:", error.message);
    return null;
  }
}

// Loading / success / error UI pattern
async function loadData() {
  statusEl.textContent = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to load users");
    const users = await response.json();
    statusEl.textContent = \`Loaded \${users.length} users\`;
  } catch (error) {
    statusEl.textContent = \`Error: \${error.message}\`;
  }
}`}</Code>

      <Divider />
      <Tbl headers={["Approach", "Readability", "Error Handling", "Best Use"]} rows={[
        ["Callback", "Lower in nested flow", "Hard in deep nesting", "Simple async callbacks"],
        ["Promise (.then)", "Medium", ".catch", "Chainable async flows"],
        ["Async/Await", "High", "try/catch", "Most modern app code"],
      ]} />

      <H3>Common Mistakes</H3>
      <NumList items={[
        <>Forgetting <IC c="await" /> before async operations</>,
        <>Using <IC c="await" /> outside an <IC c="async" /> function</>,
        "Not handling errors with try/catch or .catch",
        <>Assuming fetch rejects for all HTTP errors (it doesn't - check <IC c="response.ok" />)</>,
        "Ignoring loading state in UI",
      ]} />
      <Bullets items={[
        "Forgetting <code style='color:#79c0ff;font-family:monospace'>await</code> before async operations",
        "Using <code style='color:#79c0ff;font-family:monospace'>await</code> outside an async function",
        "Not handling errors with try/catch or .catch",
        "Assuming fetch rejects for all HTTP errors — check <code style='color:#79c0ff;font-family:monospace'>response.ok</code>",
        "Ignoring loading state in UI",
      ]} />
    </div>
  );
}

const SECTIONS: Record<string, ReactElement> = {
  fundamentals: <FundamentalsSection />,
  variables: <VariablesSection />,
  datatypes: <DataTypesSection />,
  operators: <OperatorsSection />,
  controlflow: <ControlFlowSection />,
  loops: <LoopsSection />,
  functions: <FunctionsSection />,
  arrays: <ArraysSection />,
  objects: <ObjectsSection />,
  dom: <DomSection />,
  events: <EventsSection />,
  formhandling: <FormHandlingSection />,
  modernjs: <ModernJSSection />,
  async: <AsyncSection />,
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function JavaScriptModulePage() {
  const [active, setActive] = useState("fundamentals");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const current = ALL_MODULES.find((m) => m.id === active)!;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div style={{
      display: "flex", height: "100vh", background: T.bg,
      fontFamily: T.font, color: T.text, overflow: "hidden",
    }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: sidebarOpen ? 268 : 0,
        flexShrink: 0,
        background: T.sidebar,
        borderRight: `1px solid ${T.border}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        transition: "width 0.2s ease",
      }}>
        <div style={{ overflowY: "auto", flex: 1, padding: sidebarOpen ? "20px 0 0" : 0 }}>
          {/* Back */}
          <div style={{ padding: "0 16px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim, fontSize: 13, cursor: "pointer", marginBottom: 24 }}>
              <span>←</span><span>Back to courses</span>
            </div>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: T.accentText, fontWeight: 700, marginBottom: 8 }}>
              COURSE WORKSPACE
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: T.text, margin: "0 0 8px", lineHeight: 1.2 }}>
              MERN stack
            </h1>
            <p style={{ fontSize: 12.5, color: T.textDim, lineHeight: 1.6, margin: 0 }}>
              Build this course as a structured learning path with clear module slugs and polished docs pages.
            </p>
          </div>

          {/* Module list */}
          <div style={{ padding: "0 8px" }}>
            <div style={{ fontSize: 11, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 8px", marginBottom: 6 }}>
              Modules
            </div>
            {ALL_MODULES.map((mod) => {
              const isActive = active === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActive(mod.id)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "9px 12px", borderRadius: 8, border: "none",
                    background: isActive ? T.surface : "transparent",
                    color: isActive ? T.text : T.textDim,
                    cursor: "pointer", textAlign: "left", fontSize: 13,
                    fontWeight: isActive ? 600 : 400, marginBottom: 2,
                    borderLeft: isActive ? `2px solid ${T.accent}` : `2px solid transparent`,
                    transition: "all 0.1s",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", flex: 1 }}>{mod.label}</span>
                  {isActive && (
                    <span style={{ background: T.accent, color: "#fff", borderRadius: 4, fontSize: 10, padding: "1px 6px", fontWeight: 700, marginLeft: 6, flexShrink: 0 }}>
                      Open
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar footer */}
        <div style={{ padding: "14px 16px", borderTop: `1px solid ${T.border}`, fontSize: 11, color: T.textFaint }}>
          Module 3 · JavaScript (Complete)
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{
          background: T.bg, borderBottom: `1px solid ${T.border}`,
          padding: "0 32px", height: 48, flexShrink: 0,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: "none", border: "none", color: T.textDim,
              cursor: "pointer", padding: "4px 8px", borderRadius: 6,
              fontSize: 16, marginRight: 4,
            }}
            title="Toggle sidebar"
          >☰</button>
          <span style={{ fontSize: 13.5, color: T.textDim }}>javascript</span>
          <span style={{ color: T.borderLight }}>/</span>
          <span style={{ fontSize: 13.5, color: T.text, fontWeight: 600 }}>{current.label}</span>

          {/* Progress indicator */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            {ALL_MODULES.map((m) => (
              <div
                key={m.id}
                onClick={() => setActive(m.id)}
                title={m.label}
                style={{
                  width: 6, height: 6, borderRadius: "50%", cursor: "pointer",
                  background: m.id === active ? T.accent : T.border,
                  transition: "background 0.15s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={contentRef} style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "40px 48px 100px" }}>
            {/* Page header */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <Tag>{`slug: ${active}`}</Tag>
                <Tag>{`order: ${current.order}`}</Tag>
              </div>
              <h1 style={{ fontSize: 34, fontWeight: 800, color: T.text, margin: "0 0 12px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                {current.label}
              </h1>
              <div style={{ width: 48, height: 3, background: T.accent, borderRadius: 2 }} />
            </div>

            {/* Dynamic content */}
            {SECTIONS[active]}

            {/* Bottom nav */}
            <div style={{ marginTop: 60, paddingTop: 24, borderTop: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between" }}>
              {current.order > 0 ? (
                <button
                  onClick={() => setActive(ALL_MODULES[current.order - 1].id)}
                  style={{ background: T.surface, border: `1px solid ${T.border}`, color: T.textMuted, padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}
                >
                  ← {ALL_MODULES[current.order - 1].label}
                </button>
              ) : <div />}
              {current.order < ALL_MODULES.length - 1 && (
                <button
                  onClick={() => setActive(ALL_MODULES[current.order + 1].id)}
                  style={{ background: T.accent, border: "none", color: "#fff", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}
                >
                  {ALL_MODULES[current.order + 1].label} →
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}