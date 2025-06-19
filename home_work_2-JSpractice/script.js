// Practice

let person1 = { 
    name: "Alice", 
    age: 25
};

let personCopy = {
    ...JSON.parse(JSON.stringify(person1)),
    favoriteColor: 'green'
};

console.log('Original:', person1);
console.log('Copy:', personCopy);


// Primitive types

// String
let greeting = "Hello World!";
// Number
let integerValue = 10;
// BigInt
let largeNumber = 9007199254740991n; 
// Boolean
let isActive = true;
let hasPermission = false;
//Undefined 
 let declaredButNotAssigned;
console.log(declaredButNotAssigned);
// Null
let emptyValue = null;
// Symbol
let id1 = Symbol('uniqueId');
let id2 = Symbol('uniqueId');
console.log(id1 === id2);


/*

7. You should use an object in JavaScript when you need to:
Group related data and functionality:
Objects allow you to encapsulate properties (data) and methods (functions) that logically belong together, creating a self-contained unit. For example, a person object could have properties like name, age, and occupation, and methods like greet().
Represent real-world entities:
When modeling concepts or entities in your application that have distinct characteristics and behaviors, objects are the ideal choice. Examples include users, products, orders, or geometric shapes.
Organize complex data:
Instead of using numerous individual variables, objects provide a structured way to store and access related data using key-value pairs. This enhances code readability and maintainability, especially for larger datasets.
Create reusable components:
Objects, particularly when used in conjunction with classes or constructor functions, enable the creation of blueprints for similar entities, promoting code reuse and reducing redundancy.
Pass structured data between parts of your application:
Objects are commonly used to transfer structured data, such as configuration settings, form submissions, or API responses, between different functions or modules.
Implement object-oriented programming principles:
If you are building an application using an object-oriented paradigm, objects are fundamental for concepts like encapsulation, inheritance, and polymorphism.


8. In JavaScript, arrays are utilized when an ordered collection of values is required, particularly when those values are of a similar nature or when their order is significant.
Specific scenarios where arrays are advantageous include:
Storing lists of similar items:
When managing collections of related data, such as a list of names, products, or numbers, arrays provide a structured way to group them under a single variable.
Maintaining order:
If the sequence of elements is crucial, arrays are the appropriate choice as they preserve the insertion order of elements and allow access by numerical index.
Iterating over collections:
Arrays offer various built-in methods for efficient iteration, such as forEach(), map(), filter(), and reduce(), simplifying operations on each element.
Accessing elements by index:
When direct access to elements based on their position in the collection is necessary, arrays provide this functionality through zero-based indexing.
Performing common list operations:
Arrays are well-suited for operations like adding elements to the end (push()), removing elements from the end (pop()), or checking the length of the collection (length).



*/

const introduce = (name, favoriteHobby) => {
    console.log(`My name is ${name} and my favorite color is ${favoriteHobby}`)
}