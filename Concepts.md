## React ES6 
# Arrow Functions
* Arrow functions allow us to write shorter function syntax: let myFunction = (a, b) => a * b; 
* If you have parameters, you pass them inside the parentheses: 
* ex: hello = (val) => "Hello " + val; 
* without parameter ex: hello = val => "Hello " + val;

# Variables
* A JavaScript variable is simply a name of storage location. Rule - Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
* Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
*  Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.
*  There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
   
### VAR 
* EX : var x=5;  If you use var outside of a function, it belongs to the global scope.
* If you use var inside of a function, it belongs to that function.
* If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block. 
* var allows to redeclare variables.

### LET
* let cannot be redeclared.
* let have Block Scope.
### CONST
* const is a variable that once it has been created, its value can never change.
* Because of this you can NOT:

Reassign a constant value, 
Reassign a constant array, 
Reassign a constant object
* But you CAN:

 Change the elements of constant array, 
 Change the properties of constant object

# Array 
* One of the most useful in React is the .map() array method.
* The .map() method allows you to run a function on each item in the array, returning a new array as the result.
* In React, map() can be used to generate lists.
* The arr.map method is one of the most useful and often used.
<!-- * It calls the function for each element of the array and returns the array of results. -->
* The syntax is:

* let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

# Destructurings
* Destructuring makes it easy to extract only what is needed.
* Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays
  
# Spread Operator
* The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


# Modules
* JavaScript modules allow you to break up your code into separate files.
* This makes it easier to maintain the code-base.
* ES Modules rely on the import and export statements.
 ### Export
* You can export a function or variable from any file.
* Let us create a file named person.js, and fill it with the things we want to export.
* There are two types of exports: Named and Default.
  
 ### Import
* You can import modules into a file in two ways, based on if they are named exports or default exports.
* Named exports must be destructured using curly braces. Default exports do not.

# Ternary Operator
* The ternary operator is a simplified conditional operator like if / else.

* `Syntax: condition ? <expression if true> : <expression if false>`

# Functional components
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return 
* A Function component also returns HTML

# Props
* Props are arguments passed into React components.
* Props are passed to components via HTML attributes.
* props stands for properties.
* Props are pass data from one component to another, using parameters.

# JSX
* JSX stands for JavaScript XML.
* JSX allows us to write HTML in React.
* JSX makes it easier to write and add HTML in React.
* JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
* JSX converts HTML tags into react elements.

# State
* The state is a built-in React object that is used to contain data or information about the component.
* A component's state can change over time; whenever it changes, the component re-renders
* State allows us to manage changing data in an application
# Events 
* HTML DOM events, React can perform actions based on user events.
* React has the same events as HTML: click, change, mouseover etc.
* React events are written in camelCase syntax: onClick instead of onclick.
* React event handlers are written inside curly braces: onClick={shoot}  instead of onClick="shoot()"
* Ex : `function Football() {`
`  const shoot = () => {`
`    alert("Great Shot!");}`

 ` return (`
`    <button onClick={shoot}>Take the shot!</button>`
`  );}`

`const root = ReactDOM.createRoot(document.getElementById('root'));`
`root.render(<Football />);`

# Conditional rendering 
* Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

# List 
* In React, you will render lists with some type of loop.
* The JavaScript map() array method is generally the preferred method
* Lists are used to display data in an ordered format and mainly used to display menus on websites

# Forms 
* Handling forms is about how you handle the data when it changes value or gets submitted. 
* In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components.
* When the data is handled by the components, all the data is stored in the component state.

# Router
* React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

# Hooks 
* Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
* Although Hooks generally replace class components, there are no plans to remove classes from React.
* Hooks can only be called inside React function components.
* Hooks can only be called at the top level of a component.
* Hooks cannot be conditional
* Note: Hooks will not work in React class components.

### useState 
* useState Hook allows us to track state in a function component.
* State generally refers to data or properties that need to be tracking in an application
* useState accepts an initial state and returns two values:
 The current state.
 A function that updates & read the state

### useEffect
* The useEffect Hook allows you to perform side effects in your components.
* Some examples of side effects are: fetching data, directly updating the DOM, and timers.
* useEffect accepts two arguments. The second argument is optional.
* useEffect`(<function>, <dependency>)`

### useContext 
* React Context is a way to manage state globally.
* It can be used together with the useState Hook to share state between deeply nested components more easily than ...
* Context is primarily used when some data needs to be accessible by many components at different nesting levels.
### useRef
* The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); 
* The useRef returns a mutable ref object. 

# useReducer
* The useReducer Hook is similar to the useState Hook.
* It allows for custom state logic.
* If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
* syntax : `useReducer(<reducer>, <initialState>)`

