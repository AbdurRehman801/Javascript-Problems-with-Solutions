// 1.   Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// var age = 25;

// switch (true) {
//   case age > 18:
//     alert("Old Enough");
//     break;
//   default:
//     alert("Too Young");
//     break;
// }

// 2.  Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”

// var num = prompt("Write a number to find if its divisible by 3");

// switch (true) {
//     case (num % 3 == 0):
//         alert("This number is divisible by 3")
//         break;

//     default:
//         alert("this number is not divisible by 3")
//         break;
// }

// 3. Write a program to create a calculator for +, -, *, /, % using
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

// 4. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// Use the weekday number to calculate weekday name

// var day = new Date().getDay();
// switch (day) {
//   case 0:
//     alert("Today is Sunday");
//     break;
//   case 1:
//     alert("Today is Monday");
//     break;
//   case 2:
//     alert("Today is Tuesday");
//     break;
//   case 3:
//     alert("Today is Wednesday");
//     break;
//   case 4:
//     alert("Today is Thursday");
//     break;
//   case 5:
//     alert("Today is Friday");
//     break;
//   case 6:
//     alert("Today is Saturday");
//     break;

//   default:
//     alert("This is not a day num")
//     break;
// }

// 5. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// If today is neither Saturday (6) nor Sunday (0), write a default
// message:

// var day = new Date().getDay();

// switch (day) {
//   case 0:
//   case 6:
//     alert("Today is weekend");
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     alert("Today is a working day");
//     break;
//   default:
//     alert("This is not a day number");
//     break;
// }

// 6. Given the following script
// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favorite
// car?");
//     switch(favCar) {
//         //Add code here
//     }
//     document.write( text);
// }
// checkCar();
// Finish the switch statement. Add the following
// cases: BMW, Ford and Peugeot.
// Set the value of the variable text to: "German car" for BMW.
// "American car" for Ford. "French car" for Peugeot.
// Also add a default case where the text value is "Unknown car
// name".

// function checkCar() {
//   var favCar = prompt("What is your favorite Car?").toLowerCase();
//   switch (favCar) {
//     case "bmw":
//       alert("German Car");
//       break;
//     case "ford":
//       alert("American Car");
//       break;
//     case "peugeot":
//       alert("French car");
//       break;

//     default:
//         alert("unknown car name")
//       break;
//   }
// }
// checkCar();

// 7. Fix the following switch statement:

// function checkFruit() {
//   var text;
//   var fruits = prompt("Enter a fruit name").toLowerCase();
//   switch (fruits) {
//     case "banana":
//       text = "Banana is good!";
//       break;
//     case "orange":
//       text = "I am not a fan of orange.";
//       break;
//     case "apple":
//       text = "How you like them apples?";
//       break;
//     default:
//       text = "I have never heard of that fruit.";
//       break;
//   }
//   document.write(text);
// }
// checkFruit();

// 8. Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]

// function reportCard() {
//   var marks = prompt("What is your Grade in your report Card").toLowerCase();
//   var text;
//   switch (marks) {
//     case "a+":
//       text = "Your total marks is >=80 <100 ";
//       break;
//     case "a":
//       text = "Your total marks is >=70 <80 ";
//       break;
//     case "b":
//       text = "Your total marks is >=60 <70 ";
//       break;
//     case "c":
//       text = "Your total marks is >=50 <60 ";
//       break;
//     case "d":
//       text = "Your total marks is >=40 <50 ";
//       break;
//     default:
//       text = "Your are fail";
//       break;
//   }
//   document.write(text)
// }
// reportCard();

// 9.   Use a switch statement to rewrite the following JavaScript
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

// 10.  Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// var ageask = prompt("What is your age?");

// ageask < 18 ? alert("too Young") : alert("Old Enough");

// 11. Write a program to display the message “Hello World” 5
// times in your browser.

// var a = 1;

// while(a <=5){
//     document.write("Hello World <br>");
//     a++;
// }

// 12.Write a program to print numeric counting from 1 to 10

// var a =1;

// while(a<=10){
//     document.write(a,  "<br>")
//     a++;
// }

// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user.

// var tableNum = +prompt("What table you want?");
// var tableLength = +prompt("What length you want of table?");
// var i = 1;
// while (i <= tableLength) {
//   var result = i * tableNum;
//   document.write(`${tableNum} * ${i} = ${result} <br>`);
//   i++;
// }

// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.

// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// var i = 0;
// while(i < arr.length){
//     document.write(arr[i], "<br>");
//     i++;
// }

// 15. Write a program to print items of the following array:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var arr = ["apple", "banana", "mango", "orange", "stawberry"];

// var i = 0;
// while (i < arr.length) {
//   document.write(arr[i], "<br>");
//   document.write(`Elements at index ${i} is ${arr[i]} <br>`)
//   i++;
// }

// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// var numberOfPrompts = +prompt("Enter Number of Items");
// var arr = [];
// var i = 0;
// document.write(`Number of Items ${numberOfPrompts} items <br>`)
// while (i < numberOfPrompts) {
//     var numberofItems = prompt(`Enter the value for index ${[i]}`);
//     arr.push(numberofItems);
//     document.write(arr[i], "<br>")
//     i++;
// }

// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c.  Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e.  Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var i = 1;
// while (i <= 15) {
//   document.write([i], "<br>");
//   i++;
// }
// var i = 10;
// while (i !== 0) {
//   document.write([i], "<br>");
//   i--;
// }
// var i = 0;
// while (i <= 20) {
//   document.write([i], "<br>");
//   i += 2;
// }
// var i = 1;
// while (i <= 20) {
//   document.write([i], "<br>");
//   i += 2;
// }
// var i = 2;
// while (i <= 20) {
//   document.write(`${[i]}k <br>`);
//   i += 2;
// }

// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var input = prompt(
//   "Welcome to ABC bakery, what do you want to order sir? sir/ma'am"
// );
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a = false;
// var i = 0;
// while (i <= arr.length) {
//   if (arr[i] === input) {
//         alert(`${arr[i]} is available at index ${[i]} in our bakery `);
//         a = true;
//         break;
//       }
//   i++;
// }
// if(!a){
//   alert(`${input} is not available in our bakery`);
//     a = false;
// }

// 19. You have given the following arrays:
// Write a program to generate the following HTML table in your
// browser using JS.
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var i = 0;
// document.write(`<table border="1"> <br>`);
// document.write(`<th> Students </th>`);
// document.write(`<th> score </th>`);
// while (i < students.length) {
//   document.write(
//     `<tr><td> ${students[i]}</td> <td>${scores[i]}</td></tr> <br>`
//   );
//   i++;
// }
// document.write(`</table>`);

// 20. Write a program that prints number from start of the array
// to desired stop value. Given array:
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
// var input = +prompt("write a number includes 12, 45, 3, 22, 34, 50");
// var scores = [12, 45, 3, 22, 34, 50];
// var i = 0;
// while (i < scores.length) {
//   if (input == scores[i]) {
//     var copyarr = scores.slice(0, [i + 1]);
//     alert(copyarr);
//   }
//   i++;
// }

// 21. You have an array
// Write each element on new line with the help of nested loops.

// var A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var i = 0;
// while (i < A.length) {
//   var a = 0;
//   while (a < A[i].length) {
//     document.write(A[i][a]);
//     a++;
//   }
//   document.write("<br>")
//   i++;
// }

// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

// var input = prompt("Write the number in positive");
// var i = input;
// while (i >= input.length) {
//   console.log(i);
//   document.write([i] - 0.5, "<br>");
//   i-= 0.5;
// }


// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").

// var i = 1;
// while (i <= 20) {
//   if (i % 2 == 0) {
//     document.write([i], " is even <br>");
//   } else {
//     document.write([i], " is odd <br>");
//   }
//   i++;
// }

// 24. Write a program to calculate the product of the odd integers
// from 1 to 7.
// var i = 0;
// var mult = 1;
// while (i <= 7) {
//   if (i % 2) {
//     mult = mult * i;
//     document.write(mult, "<br>")
//   }
//   i++;
// }

// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7

// var i = 0;
// var n = 7;
// var str = "";
// while (i < n) {
//   var k = 0;
//   while (k < n - i) {
//     str += "*";
//     k++;
//   }
//   str += "<br>";
//   i++;
// }
// document.write(str)

 
// 26. Write a program to create the following patterns in your
// browser. Take number of lines as an input.

// var input = prompt("How many stars u want to pattern");
// var str = "";
// var i = 0;
// while (i < input) {
//   var j = 0;
//   while (j < input) {
//     str += "*";
//     j++;
//   }
//   str += "<br>";
//   i++;
// }
// document.write(str);

// var input = prompt("How many stars u want to pattern");
// var str = "";
// var i = 0;
// while (i <= input) {
//   var j = 0;
//   while (j < i) {
//     str += "*";
//     j++;
//   }
//   str += "<br>";
//   i++;
// }
// document.write(str);

// var i = 0;
// var n = prompt("How many stars u want pattern");
// var str = "";
// while (i < n) {
//   var k = 0;
//   while (k < n - i) {
//     str += "*";
//     k++;
//   }
//   str += "<br>";
//   i++;
// }
// document.write(str)
