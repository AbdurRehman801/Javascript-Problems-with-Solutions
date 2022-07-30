//1: Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

// var firstInput = +prompt("Write a number?")

// if(firstInput % 3 == 0){
//     alert("The number is divisible by 3")
// }else if(firstInput % 3){
//     alert("The number is not divisible by 3")
// }

//2: Write a program that checks whether the given input is an even
// number or an odd number.

// var secondInput = +prompt("Write a number is even or odd?")

// if(secondInput % 2 == 0){
//     alert("The number is even")
// }else if(secondInput % 2){
//     alert("The number is odd")
// }

//3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// var thirdInput = +prompt("What is your age?");

// if (thirdInput >= 18) {
//   alert("Old enough");
// } else if (thirdInput < 18) {
//   alert("You are too Young");
// }

// 4:  Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

// var forInput = prompt("UserName:").toLowerCase();
// if(forInput === "yasir"){
//     alert("Hello Yasir");
// }else{
//     alert("Sorry Username is wrong")
// }

//5: Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”

// var fifthInput = +prompt("Write a number?");

// switch (true) {
//   case fifthInput % 3 === 0:
//     alert("This number is divided by 3");
//     break;
//   case fifthInput % 3 !==0 :
//     alert("This number is not divisible by 3");
//     break;
//   default:
//     alert("xyz");
//     break;
// }

//6 Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

// var sixthInput = prompt("Type alphabet you want to know ascii");
// var asciicode = sixthInput.charCodeAt();
// alert(asciicode);

//7. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// var seventhInput1 = +prompt("write first number");
// var seventhInput2 = +prompt("write second number");
// var operator = prompt("write operator u want to calculate");

// switch (operator) {
//   case "+":
//     var add = seventhInput1 + seventhInput2;
//     alert(add);
//     break;
//   case "-":
//     var sub = seventhInput1 - seventhInput2;
//     alert(sub);
//     break;
//   case "*":
//     var mul = seventhInput1 * seventhInput2;
//     alert(mul);
//     break;
//   case "/":
//     var divide = seventhInput1 / seventhInput2;
//     alert(divide);
//     break;
//   default:
//     break;
// }

//8. Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

// var eighthInput = +prompt("What Time is on Clock take time in 24 hours");
// if (eighthInput >= 0000 && eighthInput < 1200) {
//   alert("Good Morning");
// } else if (eighthInput >= 1200 && eighthInput < 1700) {
//   alert("Good Afternoon");
// } else if (eighthInput >= 1700 && eighthInput < 2100) {
//   alert("Good Evening");
// } else if (eighthInput >= 2100 && eighthInput <= 2359) {
//   alert("Good Night");
// }

// 9.Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not
// var ninthInput = prompt("Write a year in YYYY format!");

// if(ninthInput % 4 == 0){
//     alert("its a leap year");
// }else{
//     alert("its not a leap year")
// }

// 10.  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c.  Validate the two passwords:
// i.  Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii.  Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

// var passwords = "helloworld123";
// var askPassword = prompt("what is your password");
// if(passwords === askPassword){
//     alert("Correct Password")
// }else if(askPassword === ""){
//     alert("Please type Password")
// }else{
//     alert("Wrong Password")
// }

// 11.  Write a program that adds an else statement to the following
// script to display “You are not Fahad”
// var firstName11 = prompt("What is your name?").toLowerCase()
// if (firstName11 === "fahad") {
//        alert("Hello Fahad!");
// }else{
//     alert("You are not Fahad")
// }

// 12. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = prompt("what time is it? time in 24 hours format");
// if (hour < 18) {
//   alert(greeting = "Good day");
// } else {
//  alert(greeting = "Good evening") ;
// }

// 13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var firstInteger = prompt("Write first number?");
// var secondInteger = prompt("Write second number?");
// if(firstInteger > secondInteger){
//     alert(`${firstInteger} is greater than ${secondInteger}`);
// }else if(secondInteger > firstInteger){
//     alert(`${secondInteger} is greater than ${firstInteger}`);
// }else if(firstInteger === secondInteger){
//     alert("both are equals");
// }

// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.

// var userNum = +prompt("What number you give positive or negative");

// if (userNum > 0){
//     alert("Positive Integer")
// }else if(userNum<0){
//     alert("Negative Integer")
// }else if(userNum == 0){
//     alert("Integer is 0")
// }
// 15. Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)

// var hoursDay = +prompt("What time is it? time in 24 hours format");

// if (hoursDay >= 0600 && hoursDay < 0900) {
//   alert("Breakfast is served");
// } else if (hoursDay >= 1100 && hoursDay < 1300) {
//   alert("Time for Lunch");
// } else if (hoursDay >= 1700 && hoursDay < 2000) {
//   alert("Time for dinner");
// } else if (hoursDay > 2400) {
//   alert("Type correct time");
// } else {
//   alert("Sorry, you'll have to wait, or get a snack");
// }

// 16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”

// var a = 12;
// var b = "Yasir";
// var c = true;
// var d = undefined;
// alert(typeof a);
// alert(typeof b);
// alert(typeof c);
// alert(typeof d);

// 17. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise

// var vowels = prompt("Type alphabets check its vowels or not return true or false").toLowerCase();

// if(vowels === "a" || vowels === "e" || vowels === "i" || vowels ==="o" || vowels === "u"){
//     alert(true)
// }else{
//     alert(false)
// }

// 18. Choose the correct comparison operator to display "true",
// when:
// 10 is NOT equal to 8.

// var numGreater = prompt("Write the number?");
// var numberLesser = prompt("Write second number");

// if(numGreater > numberLesser || numberLesser > numGreater){
//     alert(true)
// }else if(numGreater == numberLesser){
//     alert(false)
// }

// 19. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8

// var monthCheck = prompt("Type the month according to number?");

// switch (monthCheck) {
//   case "1":
//     alert("January");
//     break;
//   case "2":
//     alert("Fabruary");
//     break;
//   case "3":
//     alert("March");
//     break;
//   case "4":
//     alert("April");
//     break;
//   case "5":
//     alert("May");
//     break;
//   case "6":
//     alert("June");
//     break;
//   case "7":
//     alert("July");
//     break;
//   case "8":
//     alert("August");
//     break;
//   case "9":
//     alert("September");
//     break;
//   case "10":
//     alert("October");
//     break;
//   case "11":
//     alert("November");
//     break;
//   case "12":
//     alert("December");
//     break;
//   default:
//     alert("this is not a month number");
//     break;
// }

// 20. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// var ageask = prompt("What is your age?");

// ageask < 18 ? alert("too Young") : alert("Old Enough");
