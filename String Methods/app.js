// 1.Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.

// var input1 = prompt("What is your first name?");
// var input2 = prompt("What is your last name?");
// alert(`Hello ${input1} ${input2}`);

// 2.  Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

// var input3 = prompt("What is your favorite Phone?");
// document.write(`Your Favorite Phone is ${input3} <br>`);
// document.write(`Length of String ${input3.length}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var first = "Pakistani";
// document.write(`${first}<br>`)
// document.write(`index of n is ${first.indexOf("n")}`);

// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.

// var second = "Hello World";
//  document.write(`${second}<br>`)
//  document.write(`index of l is ${second.lastIndexOf("l")}`);

// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser

// var third = "Pakistani";
//  document.write(`${third}<br>`)
//  document.write(`Character at index ${third.indexOf("i")}: ${third.charAt(3)}`);

// 6. Repeat Q1 using string concat() method.
// var input3 = prompt("What is your first name?");
// var input4 = prompt("What is your last name?");
// var concats1 = input3 + " " + input4;
// var concats2 = concats1.concat();
// alert(`Hello ${concats2}`);

// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

// var fourth = "Hyderabad";
// var fourth1 = fourth.replace("Hyder", "Islam");
// alert(fourth);
// alert(fourth1);

// 8.Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var fifth =
//   "“Ali and Sami are best friends. They play cricket and football together";
// var fifth1 = fifth.replaceAll("and", "&");
// document.write(`${fifth} <br>`);
// document.write(fifth1);

// 9.Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// var sixth = "472";
// document.write(`${sixth} is ${typeof sixth} <br>`)
// var sixth1 = parseInt(sixth);
// document.write(`${sixth} is ${typeof sixth1}`)

// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// 11. Write a program that takes user input. Convert and show the
// input in capital letters

// var seventh = prompt("Write anything!").toUpperCase();
// document.write(seventh);

// 12. Write a program that takes user input. Convert and show the
// input in small letters

// var eighth = prompt("Write anything").toLowerCase();
// document.write(eighth);

// 13. Write a program that takes user input. Convert and show the
// input in title case

// var ninth = prompt("write anything");

// var ninth2 = ninth.toLowerCase().split(" ");
// for (var i = 0; i < ninth2.length; i++) {
//   ninth2[i] = ninth2[i].charAt(0).toUpperCase() + ninth2[i].slice(1);
// }
// ninth2.join(" ");
// alert(ninth2);

// 14. Write a program that converts the variable num to string.
//           var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var points = 35.36;
// var points1 = points.toString();
// // alert(typeof points1);
// var points2 = points1.replace(".", "");
// alert(points2);

// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?

// var a = "3";
// var b = "3";
// var x= a + b;
// alert(x);

// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?

// var a = "3";
// var b = "3";
// var y = a - b;
// alert(y);

// 17.  Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of  [@ . , !], refer to ASCII table at the end of
// this document.

// var seventeenth = prompt("Username?");

// if (!/^[a-zA-Z0-9]+$/.test(seventeenth)) {
//   alert("username should not contains any special character");
// } else {
//   alert(seventeenth);
// }


// 18. You have an array
//           A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var askItems = prompt("Hello welcome to Bakers. What do you order sir/ma'am");
// var a = false;
// for (var i = 0; i <= items.length; i++) {
//   if (items[i] === askItems) {
//     alert(`${items[i]} is availble at index ${[i]} in our bakery `);
//     a = true;
//     break;
//   }
// }
// if (!a) {
//   alert(`${askItems} is not available in our bakery`);
//   a = false;
// }

// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.

// var eighteenth1 = prompt("Write first word");
// var eighteenth2 = prompt("Write second word");

// if (eighteenth1 > eighteenth2) {
//   alert(`${eighteenth1} is greater than ${eighteenth2}`);
// } else if (eighteenth2 > eighteenth1) {
//   alert(`${eighteenth2} is greater than ${eighteenth1}`);
// } else if (eighteenth1 === eighteenth2) {
//   alert("Both are equals");
// }

// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c.  It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

// var password = prompt("Write New Password");
// var passnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i <= passnum.length; i++) {
//   if (password.charAt(0) == passnum[i]) {
//     alert("Password start with alphabets");
//   }
// }
// if (!/^[a-zA-Z0-9]+$/.test(password)) {
//   alert("Password only contains numbers and alphabets");
// } else if (password.length <= 6) {
//   alert("type strong password");
// }

// 21. Write a program to convert the following string to an array
// using string split method.
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var university1 = university.split("");
// for (var i = 0; i < university1.length; i++) {
//   document.write(`${university1[i]} <br>`);
// }

//22. Write a program to display the last character of a user input.
// var pakistan3 = "Pakistan";
// var pakistan5 = pakistan3.charAt(pakistan3.length - 1)
// alert(pakistan5);

// 23.  You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string

// var single = "The quick brown fox over jumps over the lazy dog".toLowerCase();
// var single2 = [];
// var single1 = single.split(" ");
// var single3 = [...single1].sort();
// document.write(single1);
// for (var i = 0; i < single3.length; i++) {
//   if (single3[i + 1] === single3[i]) {
//     single2.push(single3[i]);
//   }
// }
// alert(
//   `there are ${single2.length + single2.length} occurences of word ${single2}`
// );

// 24. Write a program to count number of vowels & consonants in
// given string
// var ninteenth = "pakistan";
// var vowel_list = "aeiouAEIOU";
// var vcount = 0;

// for (var x = 0; x < ninteenth.length; x++) {
//   if (vowel_list.indexOf(ninteenth[x]) !== -1) {
//     vcount += 1;
//   }
// }

// alert(vcount);