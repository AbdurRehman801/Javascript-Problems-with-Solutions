// 1.Create a block of code that you can use several times.

// function hello(name){
//     document.write(`Hello welcome ${name} <br>`);
// }
// hello("John");
// hello("Joe");
// hello("Jonny");
// hello("Jos");
// hello("Jason");

// 2. Write a function that displays current date & time in your
// browser.

// var dates = new Date;
// function getdate(dates){
//     document.write(`Today is ${dates}`)
// }
// getdate(dates);

// 3. Write a function that takes first & last name and then it greets
// the user using his full name.

// var firstName = "Wasim";
// var lastName = "Akram";

// function fullName(firstName, lastName){
//     document.write(`Hello ${firstName} ${lastName}`)
// }
// fullName(firstName, lastName);

// 4. Write a function that adds two numbers (input by user) and
// returns the sum of two numbers

// var firstNum = +prompt("Type First Number");
// var secondNum = +prompt("Type Second Number");

// function sum(firstNum, secondNum){
//     var total = firstNum + secondNum
//     document.write(`The sum of two number is ${total}`)
// }
// sum(firstNum, secondNum);

// 5. Calculator:
// Write a function that takes three arguments num1, num2 &
// operator & compute the desired operation. Return and show
// the desired result in your browser.

// var firstNum = +prompt("Take first Number");
// var secondNum = +prompt("Take Second Number");
// var operator = prompt("What do you want to operate");

// function calc(firstNum, secondNum, operator) {
//   if (operator === "+") {
//     var sumTotal = firstNum + secondNum;
//     document.write(`The sum of two number ${sumTotal}`);
//   } else if (operator === "-") {
//     var subTotal = firstNum - secondNum;
//     document.write(`The Subtract of two number ${subTotal}`);
//   } else if (operator === "*") {
//     var multTotal = firstNum * secondNum;
//     document.write(`The Multiplication of two number ${multTotal}`);
//   } else if (operator === "/") {
//     var divideTotal = firstNum / secondNum;
//     document.write(`The division of two number ${divideTotal}`);
//   }
// }
// calc(firstNum, secondNum, operator);

// 6. Write a function that squares its argument.

// var takeSquare = prompt("Write a number u want to square");
// var square = Math.pow(takeSquare, 2);

// function squareFunc(square){
//     document.write(`The ${takeSquare} square is ${square}`)
// }
// squareFunc(square);

// 7. Write a function that take start and end number as inputs &
// display counting in your browser.

// var startNum = prompt("Write start num");
// var endNum = prompt("Write end num");

// function looping(startNum, endNum) {
//   for (var i = startNum; i <= endNum; i++) {
//     document.write(`${(i)} <br>`);
//   }
// }
// looping(startNum, endNum);

// 8. Write a function that writes variable length arguments list in
// your browser.

// var fruits = [
//   "mango",
//   "apple",
//   "stawberry",
//   "banana",
//   "pineapple",
//   "watermelon",
// ];
// var fruitsLength = fruits.length;
// function lengths() {
//   document.write(`The given array length is ${fruitsLength}`);
// }
// lengths();

// 9. Write a function that accepts any number of arguments & find
// largest of the number.

// var arr = [];
// var firstAsk = prompt("add first num");
// var secondAsk = prompt("add second num");
// var thirdAsk = prompt("add third num");
// var fourthAsk = prompt("add fourth num");
// var fifthAsk = prompt("add fifth num");
// var sixthAsk = prompt("add sixth num");

//  arr.push(
//   firstAsk,
//   secondAsk,
//   thirdAsk,
//   fourthAsk,
//   fifthAsk,
//   sixthAsk
// );
// // document.write(arr)

// function largestNum(arr) {
//  var hello1 =  Math.max(...arr);
//  document.write(`The largest number of given array ${arr} is ${hello1}`)
// }
// largestNum(arr);

// 10. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a. Arguments as values
// b. Arguments as variables

// function area(width, height) {
//   hello1 = width * height;
//   document.write(`The area of rectangle is ${hello1}`);
// }
// area(2, 2);

// 11. Write a function that receives an array & returns the sorted
// array.

// function sortedArr(arr){
//     arr.sort();
//     document.write(`the sorted array is ${arr}`)
// }
// sortedArr([1,5,7,9,5,4,1,3,8]);

// 12. Write a function that takes numbers array, sums its elements
// & returns the sum.

// function arrSum(arr){
//     var sum = 0;
//     for(var i =0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     document.write(sum)
// }
// arrSum([12,45,12,36,96,74])

// 13. Execute & monitor the output of following JS program:
// var param = function inner() {
// return typeof inner;
// }
// alert(param());

// 14. Write a function that computes power of a number. E.g. 23 is
// 8.

// var first = +prompt("Write the number");
// var second = +prompt("Write the power value u want");
// function power(first, second){
// var powerValue = Math.pow(first, second)
//     console.log(first, second)
//     document.write(`The ${first} power of ${second} is ${powerValue} `)
// }
// power(first, second);

// 15. Write a function that simulates a dice & returns a random
// dice value

// function randoms(){
//     var kites = Math.random();
//     var greatest = (kites * 6) + 1;
//     var floors = Math.floor(greatest);
//     document.write(`random dice value ${floors}`)
// }
// randoms();

// 16. Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223

// function reversing() {
//   var num = 257489;
//   console.log(num);
//   var number1 = Number(String(num).split("").reverse().join(""));
//   console.log(number1);
// }
// reversing();

// 17. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function upperCase() {
//   var first = "the quick brown fox";
//   var second = first.split(" ");
//    for (var i = 0; i < second.length; i++) {
//       second[i] = second[i].charAt(0).toUpperCase() + second[i].slice(1);
//     }
//     var result = String(second);
//     var results = result.replaceAll(",", " ")
//       alert(results);
// }
// upperCase();

// 18. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function largestNumber(str) {
//   var convertArr = str.split(" ");
//   let longestWord = "";
//   for (var i = 0; i < convertArr.length; i++) {
//     if (convertArr[i].length > longestWord.length) {
//       longestWord = convertArr[i];
//     }
//   }
//   return longestWord;
// }
// var l = largestNumber("Web Development Tutorial");
//   alert(l);

// 19. Write a JavaScript function that accepts a string as a
// parameter and counts the number of vowels within the string.
// EXAMPLE STRING : 'The quick brown fox'
// EXPECTED OUTPUT : 5

// function vowelsWord(str) {
//   var vowels = "aeiouAEIOU";
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }
// var h = vowelsWord("the quick brown fox");
// alert(h)


