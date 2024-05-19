// CHAPTER # 05
// Arithematic Operators
// Question # 1

// Addition
let a = 3;
let b = 5;
let sum = a + b;
document.write(`<h2>Arithematic Operators</h2>sum of ${a} and ${b} is ${sum} <br>`);


// Question # 2

// Subraction
let c = 3;
let d = 5;
let subtract = a - b;
document.write(`sum of ${c} and ${d} is ${subtract} <br>`)

// Multiplication
let e = 3;
let f = 5;
let multiply = a * b;
document.write(`sum of ${e} and ${f} is ${multiply} <br>`)

// Division
let g = 3;
let h = 5;
let divide = a / b;
document.write(`sum of ${g} and ${h} is ${divide} <br>`)

// Modulus
let i = 3;
let j = 5;
let modulus = a % b;
document.write(`sum of ${i} and ${j} is ${modulus} <br>`)


// Question # 3

// Variable Declaration 
let num;
document.write(`<h2>Calculations</h2>Value after variable declaration is: ${num} <br>`)

// Variable Initialization
num = 5;
document.write(`Initial value: ${num} <br>`)

// Pre Increment
num = ++num;
document.write(`Value after Increment is: ${num} <br>`)

// Concatination
num = num + 7;
document.write(`Value after Addion is: ${num} <br>`)

// Pre Decrement
num = --num;
document.write(`Value after Decrement is: ${num} <br>`)

// Modulus
num = num % 3;
document.write(`The remainder is : ${num}\n <br> <br>`)


// Question # 4
let movieTicket = 600;
movieTicket = movieTicket * 5;
document.write(`Total Cost to but 5 Tickets to a movie is ${movieTicket}PKR <br><br>`)


// Question # 5

// For Loops
let number = 4;
let result = document.write('<h2>Table For 4</h2>');
let tableText = '';

for (let i = 1; i <= 10; i++) {
    tableText += `${number} x ${i} = ${number * i}\n <br>`;
}

document.write(tableText)


// Question # 6
// The Temperature Converter

// Celcius Temperaure 
let celciusTemperature = 25;
let fahrenheitFromCelcius = (celciusTemperature * 9 / 5) + 32;
document.write(`${celciusTemperature}<sup>0</sup>C is ${fahrenheitFromCelcius}<sup>0</sup>F <br>`);

//Fahrenheit Temperature
let fahrenheitTemperature = 70;
let celciusFromFahrenheit = (fahrenheitTemperature - 32) * 5 / 9;
document.write(`${fahrenheitTemperature}<sup>0</sup>F is ${celciusFromFahrenheit}<sup>0</sup>C`);


// Question # 7

// Item Price 
let itemPriceOne = 650;
document.write(`<h2> Shopping Cart </h2> Price of Item 1 is ${itemPriceOne} <br>`)

//Quantity
let itemQuantityOne = 3;
document.write(`Quantity of Item 1 is ${itemQuantityOne} <br>`)

// Item Price 
let itemPriceTwo = 100;
document.write(`Price of Item 2 is ${itemPriceTwo} <br>`)

//Quantity
let itemQuantityTwo = 7;
document.write(`Price of Item 2 is ${itemQuantityTwo} <br>`)

let shippingCharges = 100;
document.write(`Shipping Charges ${shippingCharges} <br><br>`)

// Total Cost 
let productOne = itemPriceOne * itemQuantityOne;
let productTwo = itemPriceTwo * itemQuantityTwo;
let totalCost = productOne + productTwo + shippingCharges;
document.write(`Total cost of your order is ${totalCost}`)


// Question # 8

// Mark Sheet
// Total Marks 
let totalMarks = 980;
document.write(`<h2>Mark Sheet</h2> Total Marks ${totalMarks} <br>`)

// Marks Obtained 
let marksObtained = 804;
document.write(`Marks Obtained ${marksObtained} <br>`)

// percentage
let percentage = marksObtained / totalMarks * 100;
document.write(`Percentage ${percentage}% <br>`)


//Question # 9

// Given amounts
const usDollars = 10;
const saudiRiyals = 25;

// Exchange rates
const usdToPkrRate = 104.80;
const sarToPkrRate = 28.00;

// Perform the conversion in a single expression
const totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
document.write(`<h2>Currency In PKR</h2>Total Currency in PKR: ${totalPkr} <br><br>`)


//Question # 10
let newNumber = 5;
let finalResult = (newNumber + 5) * 10 / 2;
document.write(`Your Final answer is ${finalResult} <br>`);


//Question # 11
// Age Calculator

let currentYear = 2024;
document.write(`<h2>Age Calculator</h2>Current Year: ${currentYear} <br>`)
let birthYear = 2004;
document.write(`Birth Year: ${birthYear} <br>`)
let age = currentYear - birthYear
document.write(`Your age is: ${age} <br>`)


//Question # 12
// Geometrizer

let radius = 20;
document.write(`<h2>The Geometrizer</h2> Radius of a Circle: ${radius}<br>`)

// circumference Formula
let circumference = 2 * Math.PI * radius;
document.write(`The Circumference is: ${circumference} <br>`)

//Area Radius Formula
let area = Math.PI * Math.pow(radius, 2);
document.write(`The area is: ${area}<br>`)


// Question # 13
// The Lifetime Supply Calculator

let snacks = "Chocolate Chip";
let currentAge = 15;
let maxAge = 65;
let snacksPerDay = 3
let remainingYears = maxAge - currentAge;
let totalAmount = remainingYears * snacksPerDay;
document.write(`You will need ${totalAmount} ${snacks} to last until the ripe old age of ${maxAge} <br>`)
