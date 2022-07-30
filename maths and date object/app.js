// 1.   Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c.  floor value of the number
// d. ceil value of the number

// var input = +prompt("Write any number in positive integer?");
// var input1 = Math.trunc(input);
// document.write(`number ${input1} <br>`);
// document.write(`round of value: ${input1} <br>`);
// var input2 = Math.floor(input);
// document.write(`floor value: ${input2} <br>`);
// document.write(`ceil value: ${input1} <br>`)

// 2. Write a program that takes a negative integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c.  floor value of the number
// d. ceil value of the number

// var input3 = +prompt("Write any number in negative integer?");
// var input4 = Math.trunc(input3);
// document.write(`number ${input4} <br>`);
// document.write(`round of value: ${input4} <br>`);
// var input5 = Math.trunc(input3);
// document.write(`floor value: ${input5} <br>`);
// document.write(`ceil value: ${input4} <br>`)

// 3. Write a program that takes a positive floating point number
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c.  floor value of the number
// d. ceil value of the number

// var data = +prompt("Write any number in floating point");
// document.write(`number ${data} <br>`)
// var data1 = Math.round(data);
// document.write(`round off value: ${data1} <br>`);
// var data2 = Math.floor(data);
// document.write(`floor value: ${data2} <br>`);
// var data3 = Math.ceil(data);
// document.write(`ceil value: ${data3} <br>`);

// 4. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c.  floor value of the number
// d. ceil value of the number

// var data = +prompt("Write any number in negative floating point");
// document.write(`number ${data} <br>`)
// var data1 = Math.round(data);
// document.write(`round off value: ${data1} <br>`);
// var data2 = Math.floor(data);
// document.write(`floor value: ${data2} <br>`);
// var data3 = Math.ceil(data);
// document.write(`ceil value: ${data3} <br>`);

// 5. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var data4 = +prompt("Write any number positive or negative?");
// var data5 = Math.abs(data4);
// alert(`The absolute value of ${data4} is ${data5}`);

// 6. Write a program that simulates a dice using random() method
// of JS Math class. Display the value of dice in your browser.

// var bigDecimal = Math.random();
// var greatest = bigDecimal * 6 + 1;
// var result = Math.floor(greatest);
// document.write("random dice value:" + result);

// 7. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.
// var bigDecimal = Math.random();
// var greatest = bigDecimal * 2 + 1;
// var result = Math.floor(greatest);
// if(result == 2){
//     document.write(`${result} random coin value is: Heads`)
// }else if(result == 1){
//     document.write(`${result} random coin value is: Tails`)
// }

// 8.  Write a program that shows a random number between 1 and
// 100 in your browser.
// var bigDecimal = Math.random();
// var greatest = bigDecimal * 100 + 1;
// var result = Math.floor(greatest);
// document.write("random number between 1 and 100:" + result);

// 9. Write a program that asks the user about his weight. Parse the
// user input and display his weight in your browser. Possible user
// inputs can be:
// a. 50
// b. 50kgs
// c.  50.2kgs
// d. 50.2kilograms

// var kg = parseInt(prompt("What is your weight in Kilograms?"));
// alert("The weight of user is " + kg + " " +  "Kilograms");

// 10. Write a program that stores a random secret number from 1
// to 10 in a variable. Ask the user to input a number between 1
// and 10. If the user input equals the secret number, congratulate
// the user.

// var randomNum = Math.random();
// var randomNum1 = randomNum * 10 + 1;
// var result = Math.floor(randomNum1);
// var secretNum = +prompt("Write any number between 1 to 10");
// if(result == secretNum){
//     alert("Congratulation you match the number")
// }else if(secretNum > 10){
//     alert("Please type 1 to 10 number")
// }else{
//     alert("Try Again!")
// }

// 11. Write a program that displays current date and time in your
// browser.
// var date1 = new Date();
// alert(date1)

// 12. Write a program that alerts the current month in words. For
// example December.

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

// 13. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
// var m = new Date();
// document.write("The current day is " + day[m.getDay()]);

// 14. Write a program that displays a message “It’s Fun day” if its
// Saturday or Sunday today.

// var dates = new Date();
// var dates1 = dates.getDay();

// if(dates1 == 6 || dates1 == 7){
//     alert("its Funday!")
// }else{
//     alert("its working day")
// }

// 15. Write a program that shows the message “First fifteen days of the
// month” if the date is less than 16th of the month else shows “Last
// days of the month”.

// var dates = new Date();
// var dates1 = dates.getDate();

// if(dates1 < 15){
//     alert("First Fifteen days of the month");
// }else{
//     alert("Last days of the month")
// }

// 16. Write a program that determines the minutes since midnight, Jan.
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object

// var dates = new Date();
// document.write(dates + "<br>")
// var dates1 = dates.getTime();
// document.write(dates1 + "<br>")
// var dates2 = (dates1 / 1000 / 60) % 60;
// document.write(dates2)

// 17. Write a program that tests whether it's before noon and alert “Its
// AM” else “its PM”.

// var dates = new Date();
// var hours = dates.getHours();
// if(hours >= 12){
//     alert("its PM")
// }else if(hours < 12){
//     alert("its AM")
// }

// 18. Write a program that creates a Date object for the last day of the
// last month of 2020 and assigns it to variable named laterDate

// var dates = new Date(2020, 11, 31);
// document.write("Later date:" + dates)

// 19. Create a date object of the starting date of this Ramadan and alert
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var today = new Date().toISOString().slice(0, 10);
// var startDate = "2015-05-01";
// var endDate = today;
// var diffInMs = new Date(endDate) - new Date(startDate);
// var days = diffInMs / (1000 * 60 * 60 * 24);
// alert(days);

// 20. Write a program that displays in your browser the seconds that
// elapsed between the reference date and the beginning of 2015.

// var date1 = new Date(2015, 0, 1, 0, 0, 0, 0);
// var dates2 = new Date(2015, 11, 25, 0, 0, 0, 0);
// var seconds = dates2.getTime() - date1.getTime();
// var seconds1 = seconds / 1000;
// var seconds2 = Math.abs(seconds1);
// alert(seconds2);

// 21. Create a Date object for the current date and time. Extract the
// hours, reset the date object an hour ahead and finally display the
// date object in your browser.

// var date1 = new Date();
// document.write(`current date ${date1} <br>`);
// var hour = date1.getHours()
// var hours1 = hour - 1;
// var hour = date1.setHours(hours1)
// document.write(`1 hour ago, it was ${date1}`);

// 22. Write a program that creates a date object and show the date
// in an alert box that is reset to 100 years back?
// var date = new Date();
// document.write("Current date" + date + "<br>");
// var year = date.getFullYear();
// var yearBak = year - 100;
// var year = date.setFullYear(yearBak);
// document.write("100 years back" + date);

// 23. Write a program to ask the user about his age. Calculate and
// show his birth year in your browser.

// var birthYear = prompt("What is your birth year");

// var date = new Date();
// var year = date.getFullYear();
// var birthDay = year - birthYear;
// alert(`You are ${birthDay} years old`)

// 24. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal
// places. Display the following fields:
// a. Customer Name
// b. Current Month
// c.  Number of units
// d. Charges per unit
// e.  Net Amount Payable (within Due Date)
// f.  Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var customerName = prompt("What is Customer Name");
// var currentMonth = new Date().getMonth();
// var numberOfUnits = prompt("How many units for this month");
// var chargesOfUnits = 14;
// var netAmount = numberOfUnits * chargesOfUnits;
// var lateCharge = 500;
// var grossAmount = netAmount + lateCharge;
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const d = new Date();

// document.write(`Customer Name: ${customerName} <br>`);
// document.write("Month Name: " + monthNames[d.getMonth()] + "<br>");
// document.write(`Number of Units: ${numberOfUnits} <br>`);
// document.write(`Charge of per unit: ${chargesOfUnits} <br>`);
// document.write(`Net Amount Payable (within Due Date): ${netAmount} <br>`);
// document.write(`Late Payment Surcharge: ${lateCharge} <br>`);
// document.write(`Gross Amount Payable (after due date): ${grossAmount} <br>`);
