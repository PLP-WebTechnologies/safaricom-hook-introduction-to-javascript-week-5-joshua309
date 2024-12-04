// Declaring some variables to use later (I'm keeping it simple)
let name = "Joshua Kiko";            
const age = 56;                        
let isStudent = true;                  
let subjects = ["Geography", "Biology"];  
const person = {                       
    firstName: "Joshua",
    lastName: "Kiko",
    age: 56
};

// Log the values and types of the variables to the console (just for checking)
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Subjects: " + subjects + " (Type: " + typeof subjects + ")");
console.log("Person object: " + JSON.stringify(person) + " (Type: " + typeof person + ")");


//  JavaScript Basics - Operators (Calculator time!)

function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt("Choose an operation (+, -, *, /):");

  let result;

  // Check if the input is valid
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return; // Exit the function if the input is invalid
  }

  // Perform the operation based on user input
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      result = "Oops! Can't divide by zero!";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Oops, something went wrong! Try again.";
  }

  // Show the result in the alert box
  alert("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);
}

// Running the calculator function to test it
calculator();


// JavaScript Basics - Functions (Let's greet the user!)

function greetUser(name) {
  return "Hey, " + name + "! You're doing awesome with JavaScript!";
}

// Displaying the greeting message in an HTML element
document.getElementById("greeting").innerHTML = greetUser("Joshua");



// JavaScript Control Structures

// If Statements: Checking if I'm old enough to vote (just for fun)
let ageForVoting = parseInt(prompt("How old are you?"));

if (ageForVoting >= 18) {
  document.getElementById("votingEligibility").innerHTML = "Yay! You are eligible to vote! 🎉";
} else {
  document.getElementById("votingEligibility").innerHTML = "Aww! You're not eligible to vote yet. 😞";
}

// Loops: Displaying numbers from 1 to 10 (just a basic loop)
let numberList = "<ol>"; // Starting an ordered list

// Looping through numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  numberList += "<li>" + i + "</li>"; // Add each number inside <li>
}

numberList += "</ol>"; // Ending the ordered list

// Adding the list to the webpage
document.getElementById("numberList").innerHTML = numberList;



//  Introduction to the DOM

// Changing the <h1> text dynamically with JavaScript (this is fun!)
document.querySelector("h1").innerHTML = "JavaScript in Action! 🎉";

// Adding a new <p> inside the dynamic-content <div> (because why not?)
let newParagraph = document.createElement("p");  // Creating a new <p>
newParagraph.innerHTML = "This content was added dynamically using JavaScript. Cool, huh?"; // Setting text
document.getElementById("dynamic-content").appendChild(newParagraph); // Appending it to the div
