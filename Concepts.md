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

