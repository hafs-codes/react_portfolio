# My React Portfolio

A personal portfolio website built with React to showcase my skills, projects, and achievements.


Visit the deployed portfolio: (https://hafs-codes.github.io/react_portfolio/)


# Answers to Question 

What is NPM?
**NPM:** NPM stands for "Node Package Manager." It's a package manager for JavaScript modules, meaning it retrieves, installs, and manages JavaScript libraries and code dependencies used in Node.js projects. 

What is SPA?
**SPA:** SPA stands for "Single-Page Application." It's a web application that loads a single HTML page in the browser and then dynamically updates the content without having to reload the entire page. This creates a more seamless and responsive user experience.

What is the event loop?
**Event Loop:** The event loop is a fundamental mechanism in Node.js and JavaScript that governs how asynchronous operations are handled. It continuously monitors for events, such as network requests or user interactions, and schedules them for execution when the main thread is free. This allows JavaScript to perform multiple tasks concurrently without blocking the main thread.

What is the difference between export x and export default x? How do you import them differently?
**Export and Export Default:** Both `export x` and `export default x` are used to export variables or functions from a JavaScript module. However, there are some key differences:

* **`export x`:** This exports a named variable or function. You can import it with the corresponding name using `import { x } from "./module.js";`. You can export multiple named variables/functions from a module using this syntax.
* **`export default x`:** This exports a single default variable or function. You can import it with any name you like using `import defaultModule from "./module.js";`. You can only have one default export per module.


Why do you use className as a property in React and not class?
**className in React:** React uses `className` instead of `class` as a property for several reasons:

* **Avoids conflict with native `<class>` element:** By using a different name, React prevents potential conflicts with the native HTML `<class>` element within JSX templates.
* **Improves code readability:** `className` more accurately describes the purpose of the property compared to just `class`. It clarifies that it's intended for setting CSS classes, not creating a new HTML element.
* **Consistency with other React attributes:** React uses camelCase for most attribute names (e.g., `onChange`, `onClick`). Using `className` aligns with this consistent naming convention.


**Here's why you should not write the code `<button onClick={setCounter(counter + 1)}> +1 </button>` in React, and what would happen if you did:**

- Immediate Execution:

- The code as written calls the `setCounter` function immediately during the initial render of the component. This is because you're directly invoking it with `setCounter(counter + 1)` within the `onClick` attribute.
- This means the function runs as soon as the component mounts, rather than when the button is clicked. This leads to unexpected behavior and potential errors.

- Incorrect State Update:

- Even if the function were to execute only on a click, it would still be incorrect.
- The `setCounter` function within React's `useState` hook expects a callback function as its argument. This callback receives the previous state value as an argument, allowing you to update the state based on the current value.
- By calling `setCounter(counter + 1)` directly, you're not providing a callback function. Instead, you're immediately passing a new value, which could lead to missed state updates or race conditions in more complex scenarios.

- Stale State Access:

- If the `counter` variable is part of the component's state, accessing it directly within the `onClick` attribute might lead to stale values.
- This is because the `onClick` handler is defined during the initial render, and it might not reflect the latest state value if the state has been updated since then.

**Correct Approach:**

```jsx
<button onClick={() => setCounter(counter + 1)}> +1 </button>
```

This ensures that:

- The `setCounter` function is only called when the button is clicked.
- It receives a callback function that has access to the latest state value.
- The state is updated correctly based on the previous value.

## Features

- **About Me:** A brief introduction.
- **Projects:** My completed projects.
- **Skills:** Technical skills and areas of expertise.
- **Contact:** Ways for visitors to get in touch..


## Technologies Used

- React


## Acknowledgments

- This portfolio was build in regard to the estdev Programming course


