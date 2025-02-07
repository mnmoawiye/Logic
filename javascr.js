// 1. Control Structures (If-Else Statements)


// Challenge 1a: Check if a number is even or odd
let num = parseInt(prompt("Type a number:"));


if (num % 2 === 0) {
    console.log("It is even");
} else {
    console.log("It is odd");
}


// Challenge 1b: Check if a person can vote based on age
let age = parseInt(prompt("Enter your age:"));


if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}


// Challenge 1c: Check if a number is positive, negative, or zero
let val = parseFloat(prompt("Enter a value:"));


if (val > 0) {
    console.log("Above zero");
} else if (val < 0) {
    console.log("Below zero");
} else {
    console.log("Exactly zero");
}


// 2. Loops (For and While Loops)


// Challenge 2a: Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Challenge 2b: Print numbers from 1 to 5 using a while loop
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}


// Challenge 2c: Calculate the factorial of a number using a loop
let numInput = parseInt(prompt("Enter a number:"));
let fact = 1;


for (let i = 1; i <= numInput; i++) {
    fact *= i;
}


console.log("Factorial is:", fact);


// 3. Functions and Scope


// Challenge 3a: Function to greet a user by name
function greet(name) {
    console.log("Hi, " + name);
}


greet("Masoud");


// Challenge 3b: Function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0 ? "Even number" : "Odd number";
}


console.log(isEven(8));


// Challenge 3c: Function to count vowels in a string
function countVowels(word) {
    return word.toLowerCase().split("").filter(char => "aeiou".includes(char)).length;
}


console.log(countVowels("example"));


// 4. Arrays and Objects


// Challenge 4a: Store a list of fruits and print each one
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));


// Challenge 4b: Store student names and grades in an object
let students = { Jake: 95, Sophia: 88, Ethan: 82 };
for (let name in students) {
    console.log(name + " has grade " + students[name]);
}


// Challenge 4c: Find the highest number in an array
function findMax(numbers) {
    return Math.max(...numbers);
}


let nums = [12, 34, 56, 78];
console.log("Highest:", findMax(nums));



