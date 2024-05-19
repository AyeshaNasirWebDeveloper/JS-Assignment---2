// Chapter # 6 to 9
// Math Expressions

// Question # 01
// Variable Initialization
let a = 10;
let output = "";

document.write(`<h2>Questioon # 01</h2><h3>Result:</h3>The value of a is: ${a}<br><hr><br>`)
// Prefix increment
++a;
output += `The Value of ++a is: ${a}<br>Now the value of a is: ${a} <br> `; // 11

// Postfix increment
output += `<br>The value of a++ is: ${a}<br>`; // 11
a++;
output += `Now the value of a is: ${a}<br>`; // 12

// Prefix decrement
--a;
output += `<br>The value of --a is: ${a}<br>Now the value of a is: ${a} <br>`; // 11

// Postfix decrement
output += `<br>The value of a-- is: ${a}<br>`; // 11
a--;
output += `Now the value of a is: ${a}<br>`; // 10

document.write(output);


// Question # 02

var aVal = 2;
document.write("<h2>Questioon # 02</h2>" + aVal + "<br>")

var bVal = 1;
document.write(bVal + "<br>")

var result = --aVal - --bVal + ++bVal + bVal--;
document.write(result + "<br>")


// Question # 03 

// Prompt for User 
let userName = prompt("Please enter your Full Name");

// Condional Statement 
if (userName !== null && userName !== "") {
    alert("Hello," + userName + "! Welcome to our Website.")
} else {
    alert("Hello, Dear! Welcome to our Website.")
}


// Question # 05

// Prompt for user to enter a number
let userInput = +prompt("Enter a number to display its multiplication table:");

// COndional Statement 

// Check Input is a valid number
if (!isNaN(userInput)) {
    document.write(`<h2>Multiplication Table of ${userInput}:</h2>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${userInput} x ${i} = ${userInput * i}<br>`);
    }
} else {
    // Default multiplication table of 5
    document.write(`<h2>Multiplication Table of 5:</h2>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`5 x ${i} = ${5 * i}<br>`);
    }
}


// Question # 06

// Input for subject names
let subject1 = prompt("Enter name of first subject:");
let subject2 = prompt("Enter name of second subject:");
let subject3 = prompt("Enter name of third subject:");

// Total marks for each subject
const totalMarks = 100;

// Take input for obtained marks for each subject
let obtainedMarks1 = +(prompt(`Enter obtained marks for ${subject1}:`));
let obtainedMarks2 = +(prompt(`Enter obtained marks for ${subject2}:`));
let obtainedMarks3 = +(prompt(`Enter obtained marks for ${subject3}:`));

// Calculate total obtained marks
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// Calculate percentage
let percentage1 = (obtainedMarks1 / totalMarks) * 100;
let percentage2 = (obtainedMarks2 / totalMarks) * 100;
let percentage3 = (obtainedMarks3 / totalMarks) * 100;

// Calculate total percentage
let totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in a table
document.write("<h2>Subject Marks</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td><td>${percentage1.toFixed(2)}%</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td><td>${percentage2.toFixed(2)}%</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td><td>${percentage3.toFixed(2)}%</td></tr>`);
document.write(`<tr><th>Total</th><td>${3 * totalMarks}</td><td>${totalObtainedMarks}</td><td>${totalPercentage.toFixed(2)}%</td></tr>`);
document.write("</table>");