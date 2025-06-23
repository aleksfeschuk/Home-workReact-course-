const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

// Task 1.

const studentStrings = students.map(function(student) {
    return `${student.name}: ${student.grade}`;
});

console.log(studentStrings)

// Task 2.

const passedStudents = students.filter((student) => student.grade >= 60);

console.log(passedStudents)

// Task 3

const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);

const averageGrade = (totalGrades / students.length).toFixed(2);

console.log(`Avarage grade: ${averageGrade}`);


// Task 4

students.forEach((student) => {
    if (student.grade >= 60) {
        console.log(`${student.name} passed`);
    } else {
        console.log(`${student.name} failed`);
    }
})

// Task 5

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Bonus Task 

function getStudentTop(students) {
    return students.reduce((topStudent, currentStudent) => {
        return currentStudent.grade > topStudent.grade ? currentStudent : topStudent;
    })
}

    const topStudent = getStudentTop(students);
    console.log(`Top student: ${topStudent.name} with grade ${topStudent.grade}`);

// In-Place Task 1

students.forEach((student) => {
    student.status = student.grade >= 60 ? "pass" : "fail"
})

console.log(students);

// // In-Place Task 2

students.forEach((student) => {
    student.grade = Math.min(student.grade + 5, 100);
})

console.log(students);


// // JavaScript Homework: Functions and Scope

// Task 1


function greet() {
    console.log("Hello, student!")
}

greet();


//  Task 2 



function greets(name) {
    console.log("Hello, " + name + "!");
}

greets("Alice");
greets("Bob");
greets("Charlie");
greets("David");
greets("Eva");

// Task 3


function square(number) {
    return number * number;
}

const result = square(5);

console.log(result)

// Task 4

let globalMessage = "I am global!";

function showMessage() {
    let localMessage = "I am local!";

    console.log(globalMessage);
    console.log(localMessage);
}

showMessage();
console.log(globalMessage);

// Task 5

function callbackFunction() {
    console.log("Callback function was called");
}

function outerFunction(callback) {
    console.log('Outer function is running...');
    callback()
}

outerFunction(callbackFunction)


// Task 6

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b
}

function calculate(a, b, operation) {
    return operation(a, b)
}

console.log("Add:", calculate(10, 5, add));        
console.log("Subtract:", calculate(10, 5, subtract)); 
console.log("Multiply:", calculate(10, 5, multiply)); 

// Task 7

const executedAnonymous = function() {
    console.log("Anonymous function executed");
}

executedAnonymous();


// Task 8

const executedArrow = () => {
    console.log("Anonymous function executed");
}

executedArrow();