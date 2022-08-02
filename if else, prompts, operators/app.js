// user statement and conditional statements

// 1. Write a program that takes input a name from user & greet the user like this:
// var valuePrompt = prompt("What is your name?");
// alert("Hi," + valuePrompt);

// 2. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var tablePrompt = parseInt(prompt("what table you want? only type num",5));
// for (var i = 1; i <= 10; i++){
//   var result = i * tablePrompt;
//   document.write(`${tablePrompt} * ${i} = ${result} <br>`)
// }

// 3. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var cityPrompt = prompt("Please Select City?");
// if(cityPrompt === "karachi"){
//   alert("welcome to City of lights");
// }else{
//   alert("Sorry your city is not in list");
// }

// 4. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var genderPrompt = prompt("what is your gender?");
// if(genderPrompt === "male"){
//   alert("Good Morning Sir")
// }else if(genderPrompt === "female"){
//   alert("Good Morning Ma'am")
// }else{
//   alert("sorry your gender is not in our list")
// }

// 5. Write a program to take input color of road traffic signal from the user & show the message according to this table
// var signalColor = prompt("Please take traffic signal color?");
// if(signalColor === "red"){
//   alert("Vehicles must stop");
// }else if(signalColor === "yellow"){
//   alert("vehicles should get ready to move");
// }else if(signalColor === "green"){
//   alert("vehicles must move now");
// }else{
//   alert("this is not a traffic signal color");
// }

// 6.  Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome”
// var maxAge = prompt("What is your max-age?");
// var currentAge = prompt("What is your age?");
// if (maxAge >= currentAge) {
//   alert("Your are welcome");
// }else{
//   alert("Sorry :( your are not for this work")
// }

// 7.  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel = parseInt(prompt("What is your remaining fuel?")) ;
// // var remaining_fuel = 0.25;
// if(fuel < 0.25  ){
//   alert("Please refill your car")
// }else{
//   alert("its happy :)")
// }

// 8. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:
// var totalNumber = 100;
// var english = parseInt(prompt("what is your english number"));
// var urdu = parseInt(prompt("what is your urdu number"));
// var maths = parseInt(prompt("what is your maths number"));
// var obtainNumber = maths + urdu + english;
// if (isNaN(obtainNumber)) {
//   alert("Please Type only numbers");
// } else if (obtainNumber >= 100) {
//   alert("Sorry you type wrong numbers");
// } else if (obtainNumber >= 80) {
//   alert("Your Grade is A-one and your Remarks is Excellent");
// } else if (obtainNumber >= 70) {
//   alert("Your Grade is A and your remarks is Good");
// } else if (obtainNumber >= 60) {
//   alert("Your Grade is B and You need to improve yourself");
// } else {
//   alert("Sorry you are fail :(");
// }

// 9. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:

// var item1 = prompt("What is your item1");
// var item2 = prompt("What is your item2");
// var price1 = prompt("Price of item1");
// var price2 = prompt("Price of item2");
// var order1 = parseInt(prompt("How many item1?"));
// var order2 = parseInt(prompt("How many item2?"));
// var shippingCharges = 250;
// var finalPrice1 = order1 * price1;
// var finalPrice2 = order2 * price2;
// var totalPrice = finalPrice1 + finalPrice2 + shippingCharges;
// var discount = totalPrice * 0.9;

// if (totalPrice >= 2000) {
//   document.write(`price of ${item1} is ${price1} <br>`);
//   document.write(`Quantity of ${item1} is ${order1} <br>`);
//   document.write(`Price of ${item2} is ${price2} <br>`);
//   document.write(`Quantity of ${item2} is ${order2} <br>`);
//   document.write(`Shipping Charges ${shippingCharges} <br>`);
//   document.write(`Total cost of your order is ${totalPrice} <br>`);
//   document.write(`Discounted Price is ${discount} <br>`);
// } else {
//   document.write(`price of ${item1} is ${price1} <br>`);
//   document.write(`Quantity of ${item1} is ${order1} <br>`);
//   document.write(`Price of ${item2} is ${price2} <br>`);
//   document.write(`Quantity of ${item2} is ${order2} <br>`);
//   document.write(shippingCharges, "<br>");
//   document.write(`Total cost of your order is ${totalPrice} <br>`);
// }

// 10. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show  “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNumber = 5;
// var askSecret = parseInt(prompt("Guess the Secret number range 1-10"));
// var totalSecret = secretNumber === askSecret;
// if (askSecret === "") {
//   document.write("Please type something!");
// }else if (isNaN(askSecret)) {
//   document.write("This is not a number");
// }else if (totalSecret) {
//   document.write("Bingo Correct Answer");
// }else if (askSecret === 6) {
//   document.write("You are nearly to secret number");
// }else if (askSecret === 4) {
//   document.write("You are nearly less to secret number");
// }else if (!totalSecret) {
//   document.write("this is not a secret number");
// }

// 11. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

// var divisibleBy = parseInt(
//   prompt("type number that have divisible by 3?")
// );
// if (divisibleBy % 3 == 0) {
//   document.write("this number is divisible by 3");
// } else if (divisibleBy === "") {
//   document.write("Please Type something");
// } else if (isNaN(divisibleBy)) {
//   document.write("Please type number");
// } else if (divisibleBy % 3) {
//   document.write("This is not divided by 3");
// }

//12. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

// var teamA = prompt("Name Team One");
// var teamB = prompt("Name Team Two");
// var scoreA = parseInt(prompt("Score of Team One"));
// var scoreB = parseInt(prompt("Score of Team Two"));
// if (scoreA === scoreB) {
//   document.write(`team A name is ${teamA} <br>`);
//   document.write(`team B name is ${teamB} <br>`);
//   document.write(`team A score is ${scoreA} <br>`);
//   document.write(`team B score is ${scoreB} <br>`);
//   document.write("There is tie <br>");
// } else if (scoreA > scoreB) {
//   document.write(`team A name is ${teamA} <br>`);
//   document.write(`team B name is ${teamB} <br>`);
//   document.write(`team A score is ${scoreA} <br>`);
//   document.write(`team B score is ${scoreB} <br>`);
//   document.write(`${teamA} is won <br>`);
// } else if (scoreA < scoreB) {
//   document.write(`team A name is ${teamA} <br>`);
//   document.write(`team B name is ${teamB} <br>`);
//   document.write(`team A score is ${scoreA} <br>`);
//   document.write(`team B score is ${scoreB} <br>`);
//   document.write(`${teamB} is won <br>`);
// }else if (isNaN(scoreA) || isNaN(scoreB)){
//   document.write("Please type only numbers")
// }

// 13.Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

// var num = 45;
// var str = "Pakistan";
// var bool = true;

// alert(`${num} is ${typeof num}`);
// alert(`${str} is ${typeof str}`);
// alert(`${bool} is ${typeof bool}`);

//14. Write a program that checks whether the given input is an
// even number or an odd number

// var evenOdd = +prompt("check numbers is odd or even");
// if(evenOdd % 2 == 0){
//   alert(`${evenOdd} is even`);
// }else if(evenOdd % 2){
//   alert(`${evenOdd} is odd`)
// }else if(isNaN(evenOdd)){
//   alert("Please type only numbers")
// }else if (evenOdd === ""){
//   alert("Please Type something")
// }

// 15. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria

// var wheatherCheck = +prompt("What is weather today outside?");
// if (wheatherCheck > 40) {
//   alert("It is too hot outside");
// } else if (wheatherCheck > 30) {
//   alert("The Weather is Normal");
// } else if (wheatherCheck > 20) {
//   alert("Today wheather is cool");
// } else if (wheatherCheck > 10) {
//   alert("OMG! Today wheather is so Cool");
// }

//16. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:

// var firstValue = +prompt("Type first value");
// var secondValue = +prompt("Type second Value");
// var totalSumValue = firstValue + secondValue;
// var totalSubValue = firstValue - secondValue;
// var totalMulValue = firstValue * secondValue;
// var totaldivideValue = firstValue / secondValue;
// var totalModValue = firstValue % secondValue;
// var operators = prompt("Type the operation you want?");
// if (operators === "+") {
//   alert(`${firstValue} + ${secondValue} is ${totalSumValue}`);
// } else if (operators === "-") {
//   alert(`${firstValue} - ${secondValue} is ${totalSubValue}`);
// } else if (operators === "*") {
//   alert(`${firstValue} * ${secondValue} is ${totalMulValue}`);
// } else if (operators === "/") {
//   alert(`${firstValue} / ${secondValue} is ${totaldivideValue}`);
// }else if (operators === "%"){
//   alert(`${firstValue} % ${secondValue} is ${totalModValue}`);
// }else if (isNaN(firstValue) || isNaN(secondValue)){
//   alert("Please Type numbers");
// }else if(firstValue === "" || secondValue === "" || operators === ""){
//   alert("You left something empty")
// }

// 17. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”

// var daysData = prompt("Select any day from the week type full spell").toLowerCase();
// console.log(daysData)
// if (
//   daysData === "monday" ||
//   daysData === "tuesday" ||
//   daysData === "wednesday" ||
//   daysData === "thursday" ||
//   daysData === "friday"
// ) {
//   alert("Its a week day");
// } else if (daysData === "saturday") {
//   alert("Its a weekend");
// } else if (daysData === "sunday") {
//   alert("Yahoo! its a Holiday");
// }

//18: Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

// var userScore = +prompt("What is your score");
// if (userScore > 50) {
//   alert("You are Passed");
// } else if (userScore < 50) {
//   alert("Please Try Again");
// }

//19: Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c.  tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").

// var firstNum = +prompt("Write first Number");
// var secondNum = +prompt("Write second Number");

// if(firstNum > secondNum){
//   alert(`The greater number is ${firstNum} and ${secondNum} is ${firstNum}`);
// }else if(firstNum < secondNum){
//   alert(`The greater number is ${firstNum} and ${secondNum} is ${secondNum}`);
// }else if(firstNum === secondNum){
//   alert(`your both number ${firstNum} and ${secondNum} is ${firstNum} is equal`);
// }

// 20: Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)

// var languageHello = prompt("Please Select language example: es, de, en", "en");
// if(languageHello === "en"){
//   alert("Hello World")
// }else if(languageHello === "es"){
//   alert("Hola Mundo")
// }else if(languageHello === "de"){
//   alert("Hallo Wereld")
// }

// 21: Write a program to take input a number & tell whether it’s a
// positive or negative number
// var positiveNumberCheck = +prompt(
//   "check the number positive or negative"
// );

// if (positiveNumberCheck > 0) {
//   alert("Your Number is Positive");
// } else if (positiveNumberCheck < 0) {
//   alert("Your number is negative");
// }

//22: The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.

// var firstInput = +prompt("How many?");
// var secondInput = prompt("Type any Noun");
// if (isNaN(firstInput)) {
//   alert("Please Type only numbers in first input");
// }else if(firstInput > 1){
//     alert(`${firstInput} ${secondInput}s`)
// }else{
//     alert(`${firstInput} ${secondInput}`)
// }
